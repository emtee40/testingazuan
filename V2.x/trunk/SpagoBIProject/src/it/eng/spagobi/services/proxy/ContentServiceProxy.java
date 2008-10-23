/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.services.proxy;

import java.util.HashMap;

import it.eng.spagobi.services.content.bo.Content;
import it.eng.spagobi.services.content.stub.ContentServiceServiceLocator;
import it.eng.spagobi.services.security.exceptions.SecurityException;

import javax.servlet.http.HttpSession;
import javax.xml.rpc.ServiceException;

import org.apache.log4j.Logger;

/**
 * 
 * Proxy of Content Service
 *
 */
public final class ContentServiceProxy extends AbstractServiceProxy{


    static private Logger logger = Logger.getLogger(ContentServiceProxy.class);

    /**
     * use this i engine context only.
     * 
     * @param user user ID
     * @param session http session
     */
    public ContentServiceProxy(String user,HttpSession session) {
	super( user,session);
	if (user==null) logger.error("User ID IS NULL....");
	if (session==null) logger.error("HttpSession IS NULL....");
    }
    
    private ContentServiceProxy() {
	super ();
    }    

    private it.eng.spagobi.services.content.stub.ContentService lookUp() throws SecurityException {
	try {
	    ContentServiceServiceLocator locator = new ContentServiceServiceLocator();   
	    it.eng.spagobi.services.content.stub.ContentService service=null;
	    if (serviceUrl!=null ){
		    service = locator.getContentService(serviceUrl);		
	    }else {
		    service = locator.getContentService();		
	    }
	    return service;
	} catch (ServiceException e) {
	    logger.error("Error during service execution", e);
	    throw new SecurityException();
	}
    }
    
    /**
     * Read template.
     * 
     * @param document String
     * 
     * @return Content
     */
    public Content readTemplate(String document,HashMap attributes) {
	logger.debug("IN.document="+document);
	if (document==null || document.length()==0){
	    logger.error("Documenti ID is NULL");
	    return null;
	}
	try {
	    return lookUp().readTemplate(readTicket(), userId, document,attributes);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }
    
    /**
     * Publish template.
     * 
     * @param attributes HashMap
     * 
     * @return String
     */
    public String publishTemplate( HashMap attributes) {
	logger.debug("IN");
	if (attributes==null ){
	    logger.error("attributes is NULL");
	    return null;
	}	
	try {
	    return lookUp().publishTemplate(readTicket(), userId, attributes);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }
    
    /**
     * Map catalogue.
     * 
     * @param operation String
     * @param path String
     * @param featureName String
     * @param mapName String
     * 
     * @return String
     */
    public String mapCatalogue( String operation,String path,String featureName,String mapName){
	logger.debug("IN");
	if (operation==null || operation.length()==0){
	    logger.error("operation is NULL");
	    return null;
	}	
	try {
	    return lookUp().mapCatalogue(readTicket(), userId, operation,path,featureName,mapName);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;	
    }
    
    /**
     * Read sub object content.
     * 
     * @param nameSubObject String
     * 
     * @return Content
     */
    public Content readSubObjectContent(String nameSubObject){
	logger.debug("IN.nameSubObject="+nameSubObject);
	if (nameSubObject==null || nameSubObject.length()==0){
	    logger.error("SubObject is NULL");
	    return null;
	}	
	try {
	    return lookUp().readSubObjectContent(readTicket(), userId, nameSubObject);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }
    
    /**
     * Save sub object.
     * 
     * @param documentiId String
     * @param analysisName String
     * @param analysisDescription String
     * @param visibilityBoolean String
     * @param content  String
     * 
     * @return  String
     */
    public String saveSubObject(String documentiId,String analysisName,String analysisDescription,String visibilityBoolean,String content){
	logger.debug("IN.documentiId="+documentiId);
	if (documentiId==null || documentiId.length()==0){
	    logger.error("documentiId is NULL");
	    return null;
	}	
	try {
	    return lookUp().saveSubObject(readTicket(), userId, documentiId,analysisName, analysisDescription, visibilityBoolean, content);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }
    
    /**
     * Save object template.
     * 
     * @param documentiId  String
     * @param templateName String
     * @param content String
     * 
     * @return String
     */
    public String saveObjectTemplate(String documentiId,String templateName,String content){
	logger.debug("IN.documentiId="+documentiId);
	if (documentiId==null || documentiId.length()==0){
	    logger.error("documentiId is NULL");
	    return null;
	}
	if (templateName==null || templateName.length()==0){
	    logger.error("templateName is NULL");
	    return null;
	}
	if (content==null || content.length()==0){
	    logger.warn("templateName is NULL");
	}	
	try {
	    return lookUp().saveObjectTemplate(readTicket(), userId, documentiId, templateName, content);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }

    /**
     * Download all.
     * 
     * @param biobjectId String
     * @param fileName String
     * 
     * @return  String
     */
    public Content downloadAll(String biobjectId,String fileName){
	logger.debug("IN");
	if (biobjectId==null || biobjectId.length()==0){
	    logger.error("biobjectId is NULL");
	    return null;
	}
	if (fileName==null || fileName.length()==0){
	    logger.error("fileName is NULL");
	    return null;
	}	
	try {
	    return lookUp().downloadAll(readTicket(), userId, biobjectId, fileName);
	} catch (Exception e) {
	    logger.error("Error during service execution",e);

	}finally{
	    logger.debug("OUT");
	}
	return null;
    }
    
}
