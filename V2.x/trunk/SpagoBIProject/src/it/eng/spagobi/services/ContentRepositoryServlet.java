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
package it.eng.spagobi.services;

import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectCMSDAO;
import it.eng.spagobi.commons.bo.Subreport;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.commons.utilities.JCRUtilities;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.commons.utilities.UploadedFile;
import it.eng.spagobi.security.AnonymousCMSUserProfile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * A servlet used to manage and control the content repository
 */
public class ContentRepositoryServlet extends HttpServlet{
	
	/**
	 * Init method definition
	 */
	public void init(ServletConfig config) throws ServletException {
        super.init(config);
     } // public void init(ServletConfig config) throws ServletException
    /**
     * Service method definition
     * 
     * @param request The http servlet request
     * @param response The http servlet response
     * @throws IOException If any exception occurred
     */
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	 	
	 	try {
	 		String operation = request.getParameter("operation");
	 		if(operation != null) {
	 			if (operation.equalsIgnoreCase("getTemplateFile")) {
	 				String idStr = request.getParameter("biobjectId");
	 				Integer id = new Integer (idStr);
	 		 		BIObject obj = DAOFactory.getBIObjectDAO().loadBIObjectById(id);
	 		 		obj.loadTemplate();
	 		 		UploadedFile templateFile = obj.getTemplate();
	 				String templateFileName = null;
	 				if (templateFile == null) {
 						SpagoBITracer.major("SpagoBI", 
 							this.getClass().getName(),
 						    "service", 
 						    "The document template is null!!!");
 						return;
	 				} else {
	 					templateFileName = templateFile.getFileName();
	 				}
	 		 		if (templateFileName == null) {
 						SpagoBITracer.major("SpagoBI", 
	 							this.getClass().getName(),
	 						    "service", 
	 						    "The template has no file name!!!");
 						templateFileName = "";
	 		 		}
	 		 		
	 		 		String fileExtension = null;
	 		 		int extindex = templateFileName.lastIndexOf(".");
	 		 		if (extindex != -1) fileExtension = templateFileName.substring(extindex + 1);
	 		 		if (fileExtension != null) {
	 		 			InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("MIMEtypes-extensions.properties");
	 		 			Properties props = new Properties();
	 		 			props.load(is);
	 		 			String mimetype = props.getProperty(fileExtension);
	 		 			if (mimetype != null && !mimetype.trim().equals("")) {
	 		 				response.setContentType(mimetype.trim());
	 		 			}
	 		 		}
	 		 		byte[] jcrContent = templateFile.getFileContent();
	 		 		response.setContentLength(jcrContent.length);
				 	response.getOutputStream().write(jcrContent);
				 	response.getOutputStream().flush();
				 	return;
	 			}
	 			if(operation.equalsIgnoreCase("getJcrNodeContent")) {
	 				String jcrPath = request.getParameter("jcrPath");
	 				InputStream jcrContentStream = JCRUtilities.getContentByPath(jcrPath);
	 		 		byte[] jcrContent = GeneralUtilities.getByteArrayFromInputStream(jcrContentStream);
		 			response.setContentLength(jcrContent.length);
				 	response.getOutputStream().write(jcrContent);
				 	response.getOutputStream().flush();
				 	return;
	 			}
	 			if(operation.equalsIgnoreCase("getContent")) {
	 				String jcrPath = request.getParameter("jcrPath");
	 		 		if(jcrPath.endsWith("/template")) {
	 		 			int lastslash = jcrPath.lastIndexOf("/");
	 		 			jcrPath = jcrPath.substring(0, lastslash);
	 		 		}
	 		 		IBIObjectCMSDAO biObjCMSDAO = DAOFactory.getBIObjectCMSDAO();
	 		 		InputStream jcrContentStream = biObjCMSDAO.getTemplate(jcrPath);
		 			byte[] jcrContent = GeneralUtilities.getByteArrayFromInputStream(jcrContentStream);
		 			response.setContentLength(jcrContent.length);
				 	response.getOutputStream().write(jcrContent);
				 	response.getOutputStream().flush();
				 	return;
	 			}
	 			if(operation.equalsIgnoreCase("getSubObjectContent")) {
	 				String jcrPath = request.getParameter("jcrPath");
	 		 		if(jcrPath.endsWith("/template")) {
	 		 			int lastslash = jcrPath.lastIndexOf("/");
	 		 			jcrPath = jcrPath.substring(0, lastslash);
	 		 		}
	 		 		String nameSubObj = request.getParameter("nameSubObject");
	 		 		String user = request.getParameter("user");
	 		 		IBIObjectCMSDAO biObjCMSDAO = DAOFactory.getBIObjectCMSDAO();
	 		 		IEngUserProfile profile = new AnonymousCMSUserProfile(user);
	 		 		InputStream jcrContentStream = biObjCMSDAO.getSubObject(jcrPath, nameSubObj);
	 		 		byte[] jcrContent = GeneralUtilities.getByteArrayFromInputStream(jcrContentStream);
		 			response.setContentLength(jcrContent.length);
				 	response.getOutputStream().write(jcrContent);
				 	response.getOutputStream().flush();
				 	return;
	 			}
	 			if(operation.equalsIgnoreCase("saveSubObject")) {
	 				String jcrPath = request.getParameter("jcrPath");
	 		 		if(jcrPath.endsWith("/template")) {
	 		 			int lastslash = jcrPath.lastIndexOf("/");
	 		 			jcrPath = jcrPath.substring(0, lastslash);
	 		 		} 
	 		 		String nameSubObj = request.getParameter("nameSubObject");
	 		 		String user = request.getParameter("user");
	 		 		String visibilityStr = request.getParameter("publicVisibility");
	 		 		boolean visibility = false;
	 		 		if(visibilityStr.equalsIgnoreCase("true"))
	 		 			visibility = true;
	 		 		String content = request.getParameter("content");
	 		 		String descr = request.getParameter("description");
	 		 		IBIObjectCMSDAO biObjCMSDAO = DAOFactory.getBIObjectCMSDAO();
	 		 		// if the subobject has a public visibility, controls if another 
	 		 		// subobejct with the same name exists
	 		 		if (visibility) {
		 		 		List subobjects = biObjCMSDAO.getSubObjects(jcrPath);
		 		 		Iterator it = subobjects.iterator();
		 		 		boolean subObjectAlreadyExisting = false;
		 		 		while (it.hasNext()) {
		 		 			BIObject.SubObjectDetail subobject = (BIObject.SubObjectDetail) it.next();
		 		 			String subobjectname = subobject.getName();
		 		 			if (subobjectname.equalsIgnoreCase(nameSubObj)) {
		 		 				subObjectAlreadyExisting = true;
		 		 				break;
		 		 			}
		 		 		}
		 		 		if (subObjectAlreadyExisting) {
		 		 			String message = "KO - Analysis name '" + nameSubObj + "' already in use for another subobject. " +
		 		 					"Please provide a different analysis name";
			 		 		byte[] messageBytes = message.getBytes();
				 			response.setContentLength(messageBytes.length);
						 	response.getOutputStream().write(messageBytes);
						 	response.getOutputStream().flush();
						 	return;
		 		 		}
	 		 		}
	 		 		IEngUserProfile profile = new AnonymousCMSUserProfile(user);
	 		 		biObjCMSDAO.saveSubObject(content.getBytes(), jcrPath, nameSubObj, 
	 		 				                  descr, visibility, profile);
 		 			String message = "OK - Analysis successfully saved";
				 	byte[] messageBytes = message.getBytes();
		 			response.setContentLength(messageBytes.length);
				 	response.getOutputStream().write(messageBytes);
				 	response.getOutputStream().flush();
	 		 		return;
	 			}
	 			if (operation.equalsIgnoreCase("saveObjectTemplate")) {
	 				String jcrPath = request.getParameter("jcrPath");
	 				String templateName = request.getParameter("templateName");
	 				if (templateName == null || templateName.trim().equals("")) templateName = "Template";
	 		 		if(jcrPath.endsWith("/template")) {
	 		 			int lastslash = jcrPath.lastIndexOf("/");
	 		 			jcrPath = jcrPath.substring(0, lastslash);
	 		 		}
	 		 		String content = request.getParameter("content");
	 		 		IBIObjectCMSDAO biObjCMSDAO = DAOFactory.getBIObjectCMSDAO();
	 		 		biObjCMSDAO.saveTemplate(content.getBytes(), jcrPath, templateName);
	 		 		return;
	 			}
	 			if (operation.equalsIgnoreCase("downloadAll")) {
	 				String idStr = request.getParameter("biobjectId");
	 				Integer id = new Integer (idStr);
	 		 		BIObject obj = DAOFactory.getBIObjectDAO().loadBIObjectById(id);
	 		 		// load the current object template
	 		 		obj.loadTemplate();
	 		 		OutputStream out = response.getOutputStream();
	 		 		ZipOutputStream zipOut = new ZipOutputStream(out);
	 		 		byte[] jcrContent = obj.getTemplate().getFileContent();
	 		 		String templateFileName = obj.getTemplate().getFileName();
	 		 		// put the current object template in the zip file root
	 		 		ZipEntry entry = new ZipEntry(templateFileName);
	 		 		zipOut.putNextEntry(entry);
 					zipOut.write(jcrContent);
	 		 		List subReports = DAOFactory.getSubreportDAO().loadSubreportsByMasterRptId(id);
	 		 		Iterator subReportsIt = subReports.iterator();
	 		 		while (subReportsIt.hasNext()) {
	 		 			Subreport subRpt = (Subreport) subReportsIt.next();
  		        		BIObject aSubRptObj = DAOFactory.getBIObjectDAO().loadBIObjectById(subRpt.getSub_rpt_id());
  		        		// load the subreport template
  		        		aSubRptObj.loadTemplate();
  		        		jcrContent = aSubRptObj.getTemplate().getFileContent();
  		 		 		templateFileName = aSubRptObj.getTemplate().getFileName();
  		        		String label = aSubRptObj.getLabel();
  		        		// put the subreport template in a folder which name is the subreport label
  		        		entry = new ZipEntry(label + "/" + templateFileName);
  		        		zipOut.putNextEntry(entry);
  	 					zipOut.write(jcrContent);
	 		 		}
		 			String fileName = request.getParameter("fileName");
		 			if (fileName == null) {
		 				fileName = "fileRepository.zip";
		 			}
		 			response.setHeader("Content-Disposition","attachment; filename=\"" + fileName + "\";");
		 			zipOut.flush();
		 			zipOut.close();
		 			out.flush();
	 			}
	 		// part for download of the template version
	 		// TODO manage with the operation parameter logic
	 		} else {
	 			String jcrPath = request.getParameter("jcrPath");
		 		String version = request.getParameter("version");
		 		InputStream jcrContentStream = JCRUtilities.getContentByPathAndVersion(jcrPath, version);
	 			byte[] jcrContent = GeneralUtilities.getByteArrayFromInputStream(jcrContentStream);
	 			String fileName = request.getParameter("fileName");
	 			if(fileName==null) {
	 				fileName = "fileRepository";
	 			}
	 			response.setHeader("Content-Disposition","attachment; filename=\"" + fileName + "\";");
	 			response.setContentLength(jcrContent.length);
			 	response.getOutputStream().write(jcrContent);
			 	response.getOutputStream().flush();
			 	return;
	 		}

	 		
	 	} catch(Exception e) {
	 		SpagoBITracer.critical("SpagoBI",getClass().getName(),"service","Exception", e);
	 	}
	 }
	
	
	

}
