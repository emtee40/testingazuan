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
package it.eng.spagobi.engines.talend.runtime;

import it.eng.spagobi.engines.talend.TalendEngine;
import it.eng.spagobi.engines.talend.TalendEngineConfig;
import it.eng.spagobi.engines.talend.exception.ContextNotFoundException;
import it.eng.spagobi.engines.talend.exception.JobExecutionException;
import it.eng.spagobi.engines.talend.exception.JobNotFoundException;
import it.eng.spagobi.engines.talend.utils.TalendScriptAccessUtils;
import it.eng.spagobi.utilities.callbacks.audit.AuditAccessUtils;
import it.eng.spagobi.utilities.threadmanager.WorkManager;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.safehaus.uuid.UUIDGenerator;


public class PerlJobRunner implements IJobRunner {

	private static transient Logger logger = Logger.getLogger(PerlJobRunner.class);
	
	private RuntimeRepository runtimeRepository;
	
	public static final String DEFAULT_CONTEXT = "Default";
	
	PerlJobRunner(RuntimeRepository runtimeRepository) {
		this.runtimeRepository = runtimeRepository;
	}
	

    /* (non-Javadoc)
     * @see it.eng.spagobi.engines.talend.runtime.IJobRunner#run(it.eng.spagobi.engines.talend.runtime.Job, java.util.Map, it.eng.spagobi.utilities.callbacks.audit.AuditAccessUtils, java.lang.String)
     */
    public void run(Job job, Map parameters) throws JobNotFoundException, ContextNotFoundException, JobExecutionException {
    
    	File contextTempScriptFile = null;
    	
    	logger.debug("Starting run method with parameters: " +
    			"project = [" + job.getProject() + "] ; " +
    			"job name = [" + job.getName() + "] ; " +
    			"context = [" + job.getContext() + "] ; " +
    			"base dir = [" + runtimeRepository.getRootDir() + "].");

    	
    	
    	File executableJobDir = runtimeRepository.getExecutableJobDir(job);
    	logger.debug("Job base folder: " + executableJobDir);
    	
    	    	

    	if (!runtimeRepository.containsJob(job)) {	    		
    		throw new JobNotFoundException("Job executable file " + 
    				runtimeRepository.getExecutableJobFile(job) + " does not exist.");
    	}
    	
    	TalendEngineConfig config = TalendEngineConfig.getInstance();
    	String cmd = config.getPerlInstallDir() + File.separatorChar + config.getPerlBinDir()+ 
    		File.separatorChar + config.getPerlCommand() + " " + TalendScriptAccessUtils.getExecutableFileName(job);
    	
    		    	
    	// if the context is not specified, it looks for the defualt context script file;
    	// if it exists, the context is assumed to be the default.
    	// Instead, if the context is specified, it looks for the relevant context script file;
    	// if it does not exist, an error message is returned.
    	File contextFile = null;
    	
    	if (job.getContext() == null || job.getContext().trim().equals("")) {
    		logger.debug("Context not specified.");
    		job.setContext(DEFAULT_CONTEXT);
    		String contextFileName = TalendScriptAccessUtils.getContextFileName(job);
    		File defaultContextFile = new File(executableJobDir, contextFileName);
    		if (defaultContextFile.exists()) {
    			logger.debug("Found default script context file.");
    			contextFile = defaultContextFile;
    		}
    	} else {
    		String contextFileName = TalendScriptAccessUtils.getContextFileName(job);
    		contextFile = new File(executableJobDir, contextFileName);
    		if (!contextFile.exists()) {
	    		throw new ContextNotFoundException("Script context file " + contextFile + " does not exist.");
			}
    	}
    	
    	
		
    	// only if the context file exists, we consider document parameter
    	if (contextFile != null) {
    		if (parameters.isEmpty()) {
    			String contextFileName = contextFile.getName();
    			if (contextFileName.indexOf(File.separatorChar) != -1) {
    				contextFileName = 
    					contextFileName.substring(contextFileName.lastIndexOf(File.separatorChar));
    			}
    			cmd = cmd + " --context=" + contextFileName;
    		} else {
    			//String newContextScriptFileName = contextScriptFile.getName();
				try {
					contextTempScriptFile = createTempContextScriptFile( contextFile, parameters);
					//newContextScriptFileName = contextTempScriptFile.getName();
				} catch (Exception e) {
					logger.error("Error while creating temp context file", e);
					logger.error("Document parameter cannot be considered.");
				}
				cmd = cmd + " --context=\"" + contextTempScriptFile.getAbsolutePath() + "\"";
    		}
    	}
    	
    	
    	logger.debug("Perl execution command: " + cmd);
    	
    	List filesToBeDeleted = new ArrayList();
    	filesToBeDeleted.add(contextTempScriptFile);
    	
    	try {
	    WorkManager wm = new WorkManager();
	    TalendWork jrt = new TalendWork(cmd, null, executableJobDir, filesToBeDeleted, parameters);
	    TalendWorkListener listener = new TalendWorkListener();
	    wm.run(jrt, listener);
	} catch (Exception e) {
	    e.printStackTrace();
	}
		
    }

	private File createTempContextScriptFile(File contextScriptFile, Map parameters) throws Exception {
		FileReader reader = new FileReader(contextScriptFile);
		StringBuffer filebuff = new StringBuffer();
		char[] buffer = new char[1024];
		int len;
		while ((len = reader.read(buffer)) >= 0) {
			filebuff.append(buffer, 0, len);
		}
		reader.close();
		Set entries = parameters.entrySet();
		Iterator it = entries.iterator();
		while (it.hasNext()) {
			Map.Entry entry = (Map.Entry) it.next();
			String parameterName = entry.getKey().toString();
			Object parameterValueObj = entry.getValue(); 
			logger.debug("Found parameter '" + parameterName + "' with value '" + parameterValueObj + "'.");
			if (parameterValueObj == null || parameterValueObj.toString().trim().equals("")) {
				logger.debug("Parameter '" + parameterName + "' has no value.");
				continue;
			}
			String parameterValue = parameterValueObj.toString();
			int index = filebuff.indexOf("$_context{" + parameterName + "}");
			if (index < 0) {
				logger.error("Parameter '" + parameterName + "' not found in context script file.");
				continue;
			} else {
				int startIndex = filebuff.indexOf("=", index) + 1;
				int endIndex = filebuff.indexOf(";", startIndex);
				filebuff.replace(startIndex, endIndex, parameterValue);
			}
		}
	    String contextScriptFilePath = contextScriptFile.getAbsolutePath();
	    String contextScriptDirPath = contextScriptFilePath.substring(0, 
	    		contextScriptFilePath.lastIndexOf(File.separatorChar));
	    String tempDirPath = contextScriptDirPath + File.separatorChar 
	    						+ ".." + File.separatorChar + ".." + File.separatorChar + "temp";
	    File tempDir = new File(tempDirPath);
	    if (!tempDir.exists()) tempDir.mkdir();
	    else {
	    	if (!tempDir.isDirectory()) tempDir.delete();
	    }
	    UUIDGenerator uuidGenerator = UUIDGenerator.getInstance();
	    String tempFileName = uuidGenerator.generateTimeBasedUUID().toString();
	    TalendEngineConfig config = TalendEngineConfig.getInstance();
	    File contextScriptTempFile = new File(tempDirPath + File.separatorChar + tempFileName + config.getPerlExt());
		FileOutputStream fos = new FileOutputStream(contextScriptTempFile);
		fos.write(filebuff.toString().getBytes());
		fos.flush();
		fos.close();
		return contextScriptTempFile;
	}
	    
}
