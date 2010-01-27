/**
Copyright (c) 2005-2008, Engineering Ingegneria Informatica s.p.a.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of 
      conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list of 
      conditions and the following disclaimer in the documentation and/or other materials 
      provided with the distribution.

 * Neither the name of the Engineering Ingegneria Informatica s.p.a. nor the names of its contributors may
      be used to endorse or promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
 **/
package it.eng.spagobi.engines.commonj.runtime;

import it.eng.spago.base.ApplicationContainer;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.engines.commonj.exception.WorkExecutionException;
import it.eng.spagobi.engines.commonj.exception.WorkNotFoundException;
import it.eng.spagobi.services.proxy.EventServiceProxy;
import it.eng.spagobi.utilities.DynamicClassLoader;
import it.eng.spagobi.utilities.engines.AuditServiceProxy;
import it.eng.spagobi.utilities.engines.EngineConstants;
import it.eng.spagobi.utilities.engines.commonj.CmdExecWork;
import it.eng.spagobi.utilities.threadmanager.WorkManager;

import java.io.File;
import java.util.Map;

import org.apache.log4j.Logger;

import commonj.work.Work;


public class CommonjWorkRunner implements IWorkRunner {


	private WorksRepository worksRepository;

	public static final String DEFAULT_CONTEXT = "Default";

	private static transient Logger logger = Logger.getLogger(CommonjWorkRunner.class);

	CommonjWorkRunner(WorksRepository worksRepository) {
		this.worksRepository = worksRepository;
	}

	public void run(CommonjWork work, Map parameters)  throws WorkNotFoundException, WorkExecutionException {

		File executableWorkDir;    	

		try {
			logger.debug("Starting run method of work : " +
					"name = [" + work.getWorkName() + "] ; " +
					"to start class= [" + work.getClassName() + "] ; ");


			executableWorkDir = worksRepository.getExecutableWorkDir(work);

			if (!worksRepository.containsWork(work)) {	    		
				throw new WorkNotFoundException("Job [" + 
						worksRepository.getRootDir().getPath()+"/"+work.getWorkName()+ "] not found in repository");
			}

			logger.debug("Job [" + work.getWorkName() +"] succesfully found in repository");

			// load in memory all jars found in folder!
			loadJars(work, executableWorkDir);

			//String classToLoad="prova.Studente";
			String classToLoad=work.getClassName();

			WorkManager wm = new WorkManager();
			logger.debug("work manager instanziated");

			AuditServiceProxy auditServiceProxy=(AuditServiceProxy)parameters.get(EngineConstants.ENV_AUDIT_SERVICE_PROXY);
			EventServiceProxy eventServiceProxy=(EventServiceProxy)parameters.get(EngineConstants.ENV_EVENT_SERVICE_PROXY);

			Object executionRoleO=parameters.get(SpagoBIConstants.EXECUTION_ROLE);
			String executionRole=executionRoleO!=null ? executionRoleO.toString() : ""; 

			Object documentIdO=parameters.get("DOCUMENT_ID");
			String documentId=documentIdO!=null ? documentIdO.toString() : null; 

			CommonjWorkListener listener = new CommonjWorkListener(auditServiceProxy, eventServiceProxy);

			if(documentId!=null){
				listener.setBiObjectID(documentId);
			}

			listener.setExecutionRole(executionRole);
			listener.setWorkName(work.getWorkName());
			listener.setWorkClass(work.getClassName());
			
			logger.debug("listener ready");

			Class clazz = Thread.currentThread().getContextClassLoader().loadClass(classToLoad);
			Object obj = clazz.newInstance();
			logger.debug("class loaded "+classToLoad);
			Work workToLaunch=null;
			// class loaded could be instance of CmdExecWork o di Work, testa se � il primo, se no � l'altra
			if (obj instanceof CmdExecWork) {
				workToLaunch = (CmdExecWork) obj;
				((CmdExecWork)obj).setCommand(work.getCommand());
				((CmdExecWork)obj).setCommandEnvironment(work.getCommand_environment());
				((CmdExecWork)obj).setParameters(work.getParameters());			
			}
			else
				if (obj instanceof Work) {
					workToLaunch=(Work)obj;
				}

			if(workToLaunch!=null){			
				wm.run(workToLaunch, listener);
			}
			else{
				logger.error("An error occurred while starting up execution for job [" + work.getWorkName() + "] type is wrong, it must extend commonj.work.Work");
				throw new WorkExecutionException("An error occurred while starting up execution for job [" + work.getWorkName() + "] type is wrong, it must extend commonj.work.Work");
			}


		} catch (Throwable e) {
			logger.error("An error occurred while starting up execution for job [" + work.getWorkName() + "]");
			throw new WorkExecutionException("An error occurred while starting up execution for job [" + work.getWorkName() + "]", e);
		}
	}



	/** Explores all jar files in directory workDir  to load them
	 *  TODO: extend to other types!
	 * @param work
	 * @param parameters
	 * @param workDir
	 */

	private void loadJars(CommonjWork work, File workDir) {
		logger.debug("IN");

		// pass all the .jar into the folder
		File[] files = workDir.listFiles();

		for (int i = 0; i < files.length; i++) {
			File file=files[i];
			String name=file.getName();
			String ext = name.substring(name.lastIndexOf('.')+1, name.length());
			if(ext.equalsIgnoreCase("jar")){
				//updateCurrentClassLoader(file);
				logger.debug("loading file "+file.getName());			
				ClassLoader previous = Thread.currentThread().getContextClassLoader();
				DynamicClassLoader dcl = new DynamicClassLoader(file, previous);
				Thread.currentThread().setContextClassLoader(dcl);

			}
		}

		logger.debug("OUT");
	}



}
