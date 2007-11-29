/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

**/
/*
 * Created on 4-mag-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.engines.dossier;


import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.engines.dossier.constants.BookletsConstants;
import it.eng.spagobi.engines.dossier.dao.BookletsCmsDaoImpl;
import it.eng.spagobi.engines.dossier.dao.IBookletsCmsDao;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jbpm.JbpmConfiguration;
import org.jbpm.JbpmContext;
import org.jbpm.context.exe.ContextInstance;
import org.jbpm.taskmgmt.exe.TaskInstance;


public class BookletsServlet extends HttpServlet{
	
	public void init(ServletConfig config) throws ServletException {
        super.init(config);
     } 

	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		OutputStream out = null;
		String task = "";
		try{
	 		task = (String)request.getParameter(BookletsConstants.BOOKLET_SERVICE_TASK);		
	 		out = response.getOutputStream();
	 		if(task.equalsIgnoreCase(BookletsConstants.BOOKLET_SERVICE_TASK_GET_TEMPLATE_IMAGE)){
	 			String pathimg = (String)request.getParameter(BookletsConstants.BOOKLET_SERVICE_PATH_IMAGE);
			 	if(pathimg!=null) {
			 		if (!pathimg.startsWith("/") && !(pathimg.charAt(1) == ':')) {
			 			String root = ConfigSingleton.getRootPath();
			 			pathimg = root + "/" + pathimg;
			 		}
				 	File imgFile = new File(pathimg);
				 	FileInputStream fis = new FileInputStream(imgFile);
				 	byte[] content = GeneralUtilities.getByteArrayFromInputStream(fis);
				 	out.write(content);
				 	out.flush();
		            fis.close();
		            imgFile.delete();
		            return;
			 	} 
	 		} else if(task.equalsIgnoreCase(BookletsConstants.BOOKLET_SERVICE_TASK_DOWN_FINAL_DOC)){
	 			String activityKey = request.getParameter(SpagoBIConstants.ACTIVITYKEY);
	 			JbpmContext jbpmContext = null;
	 			String pathConfBook = null;
	 			try {
		 			JbpmConfiguration jbpmConfiguration = JbpmConfiguration.getInstance();
		 	    	        jbpmContext = jbpmConfiguration.createJbpmContext();
		 			long activityKeyId = Long.valueOf(activityKey).longValue();
		 			TaskInstance taskInstance = jbpmContext.getTaskInstance(activityKeyId);
		 			ContextInstance contextInstance = taskInstance.getContextInstance();
		 			pathConfBook = (String)contextInstance.getVariable(BookletsConstants.PATH_BOOKLET_CONF);
	 			} finally {
	 				if (jbpmContext != null) jbpmContext.close();
	 			}
	 			if (pathConfBook != null) {
		 			IBookletsCmsDao bookdao = new BookletsCmsDaoImpl();
		 			String bookName = bookdao.getBookletName(pathConfBook);
			 		//String bookName = bookdao.getBookletTemplateFileName(pathConfBook);
			 		byte[] finalDocBytes = bookdao.getCurrentPresentationContent(pathConfBook);
				 	response.setHeader("Content-Disposition","attachment; filename=\"" + bookName + ".ppt" + "\";");
		 			response.setContentLength(finalDocBytes.length);
		 			out.write(finalDocBytes);
		 			out.flush();
	 			} else {
	 				SpagoBITracer.major("SpagoBI",getClass().getName(),
				               "service","Booklet configuration path not found!");
	 			}
	            return;
		 		
	 		} else if(task.equalsIgnoreCase(BookletsConstants.BOOKLET_SERVICE_TASK_DOWN_PRESENTATION_VERSION)) {
	 			String pathBook = request.getParameter(BookletsConstants.PATH_BOOKLET_CONF);
                                String verName =  request.getParameter(BookletsConstants.BOOKLET_PRESENTATION_VERSION_NAME);
	 			IBookletsCmsDao bookdao = new BookletsCmsDaoImpl();
	 			byte[] finalDocBytes = bookdao.getPresentationVersionContent(pathBook, verName);
	 			String bookName = bookdao.getBookletName(pathBook);
	 			response.setHeader("Content-Disposition","attachment; filename=\"" + bookName + ".ppt" + "\";");
	 			response.setContentLength(finalDocBytes.length);
	 			out.write(finalDocBytes);
	 			out.flush();
	            return;
	            
	 		} else if(task.equalsIgnoreCase(BookletsConstants.BOOKLET_SERVICE_TASK_DOWN_OOTEMPLATE)) {
	 			String pathBook = request.getParameter(BookletsConstants.PATH_BOOKLET_CONF);
	 			IBookletsCmsDao bookdao = new BookletsCmsDaoImpl();
	 			String templateFileName = bookdao.getBookletTemplateFileName(pathBook);
	 			InputStream templateIs = bookdao.getBookletTemplateContent(pathBook);
	 			byte[] templateByts = GeneralUtilities.getByteArrayFromInputStream(templateIs);
	 			response.setHeader("Content-Disposition","attachment; filename=\"" + templateFileName + "\";");
	 			response.setContentLength(templateByts.length);
	 			out.write(templateByts);
	 			out.flush();
	            return;
	 			
	 		} else if(task.equalsIgnoreCase(BookletsConstants.BOOKLET_SERVICE_TASK_DOWN_WORKFLOW_DEFINITION)) {
	 			String pathBook = request.getParameter(BookletsConstants.PATH_BOOKLET_CONF);
	 			IBookletsCmsDao bookdao = new BookletsCmsDaoImpl();
	 			String workDefName = bookdao.getBookletProcessDefinitionFileName(pathBook);
	 			InputStream workIs = bookdao.getBookletProcessDefinitionContent(pathBook);
	 			byte[] workByts = GeneralUtilities.getByteArrayFromInputStream(workIs);
	 			response.setHeader("Content-Disposition","attachment; filename=\"" + workDefName + "\";");
	 			response.setContentLength(workByts.length);
	 			out.write(workByts);
	 			out.flush();
	            return;
	 		}
	 		
	 	}catch(Exception e){
	 		SpagoBITracer.major("SpagoBI",getClass().getName(),
	 				               "service","Exception during execution of task " + task, e);
	 	}
	 }
	
}
