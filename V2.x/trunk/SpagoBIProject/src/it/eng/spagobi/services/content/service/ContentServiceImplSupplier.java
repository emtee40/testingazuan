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
package it.eng.spagobi.services.content.service;

import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjTemplate;
import it.eng.spagobi.analiticalmodel.document.dao.IObjTemplateDAO;
import it.eng.spagobi.analiticalmodel.document.dao.ISubreportDAO;
import it.eng.spagobi.analiticalmodel.document.handlers.ExecutionInstance;
import it.eng.spagobi.commons.bo.Subreport;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.ObjectsAccessVerifier;
import it.eng.spagobi.engines.config.bo.Engine;
import it.eng.spagobi.services.content.bo.Content;
import it.eng.spagobi.services.security.bo.SpagoBIUserProfile;
import it.eng.spagobi.services.security.exceptions.SecurityException;
import it.eng.spagobi.services.security.service.ISecurityServiceSupplier;
import it.eng.spagobi.services.security.service.SecurityServiceSupplierFactory;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import sun.misc.BASE64Encoder;

public class ContentServiceImplSupplier {
    static private Logger logger = Logger.getLogger(ContentServiceImplSupplier.class);

    /**
     * Read template.
     * 
     * @param user the user
     * @param document the document
     * 
     * @return the content
     * 
     * @throws SecurityException the security exception
     * @throws EMFUserError the EMF user error
     * @throws EMFInternalError the EMF internal error
     */
    public Content readTemplate(String user, String document, HashMap parameters) throws SecurityException, EMFUserError, EMFInternalError {
    	Content content;
    	BIObject biobj;
    	
    	logger.debug("IN");
		
    	logger.debug("user: [" + user + "]");
		logger.debug("document: [" + document + "]");
		
		
		content = new Content();
		try {
		    Integer id = new Integer(document);
		    biobj = DAOFactory.getBIObjectDAO().loadBIObjectById(id);
		    // only if the user is not Scheduler or Workflow system user or it is a call to retrieve a subreport, 
		    //check visibility on document and parameter values
		    if (!UserProfile.isSchedulerUser(user) && !UserProfile.isWorkflowUser(user)  && !isSubReportCall(biobj, parameters)) {
		    	checkRequestCorrectness(user, biobj, parameters);
		    }
	    	
		    IObjTemplateDAO tempdao = DAOFactory.getObjTemplateDAO();
		    ObjTemplate temp = tempdao.getBIObjectActiveTemplate(biobj.getId());
		    if (temp==null){
		       logger.warn("The template dor document [" + id + "] is NULL");
		       throw new SecurityException("The template dor document [" + id + "] is NULL");
		    } 
		    byte[] template = temp.getContent();
	
		    BASE64Encoder bASE64Encoder = new BASE64Encoder();
		    content.setContent(bASE64Encoder.encode(template));
		    logger.debug("template read");
		    content.setFileName(temp.getName());		    
		} catch (NumberFormatException e) {
		    logger.error("NumberFormatException", e);
		    throw e;
		} catch (EMFUserError e) {
		    logger.error("EMFUserError", e);
		    throw e;
		} catch (EMFInternalError e) {
		    logger.error("EMFUserError", e);
		    throw e;
		} finally {
		    logger.debug("OUT");
		}
		
		return content;
    }

    /**
     * Since SpagoBIJasperReportEngine invokes the readTemplate method also for subreports, subreport parameters are managed by Jasper.
     * In order to understand if the required document is a valid subreport, take a look at execution parameters: the 
     * parameter document should be the document id of the master document and the required document should be a subreport of its.
     * 
     * @param biobj The required biobject
     * @param parameters The execution parameters.
     * @return true if it is a call to retrieve a subreport
     */
    private boolean isSubReportCall(BIObject biobj, HashMap parameters) {
    	logger.debug("IN");
    	try {
    		Engine engine = biobj.getEngine();
    		if (engine.getDriverName().equals("it.eng.spagobi.engines.drivers.jasperreport.JasperReportDriver")) {
    			String masterReportIdStr = (String) parameters.get("document");
    			Integer masterReportId = new Integer(masterReportIdStr);
    			if (biobj.getId().equals(masterReportId)) {
    				// the required master document is exactly the current document 
    				return false;
    			}
    			logger.debug("Jasper master report id: " + masterReportIdStr + ". Looking for subreports...");
    			ISubreportDAO subrptdao = DAOFactory.getSubreportDAO();
    			List subreportList = subrptdao.loadSubreportsByMasterRptId(masterReportId);
    			boolean subreportFound = false;
    		    for (int i = 0; i < subreportList.size(); i++) {
    				Subreport subreport = (Subreport) subreportList.get(i);
    				if (subreport.getSub_rpt_id().equals(biobj.getId())) {
    					subreportFound = true;
    					break;
    				}
    		    }
    		    if (subreportFound) {
    		    	logger.debug("Current required biobject is a subreport, ok.");
    		    } else {
    		    	logger.error("Subreport not found!!!!");
    		    }
    			return subreportFound;
    		} else {
    			// other engines than Jasper do not support subreports in this way
    			return false;
    		}
    	} catch (Exception e) {
    		logger.error(e);
    		return false;
	    } finally {
		    logger.debug("OUT");
		}
	}

	private boolean checkParametersErrors(IEngUserProfile profile, Integer biobjectId, String roleName, Map parameters) {
    	logger.debug("IN: user = [" + profile.getUserUniqueIdentifier() + "], biobjectid = [" + biobjectId + "], " +
    			"roleName = [" + roleName + "], parameters = [" + parameters + "]");
		try {
			ExecutionInstance instance = new ExecutionInstance(profile, "", "", biobjectId, roleName, "", true, true);
			instance.refreshParametersValues(parameters, true);
			List errors = instance.getParametersErrors();
			if (errors != null && errors.size() > 0) {
				return false;
			} else {
				return true;
			}
		} catch (Exception e) {
			logger.error(e);
			return false;
		} finally {
		    logger.debug("OUT");
		}
    }
    
    /**
     * Check the correctness of the request, i.e.:
     * 1. if the user is able to see the required document
     * 2. if there is a correct role for execution (if a role is specified on the parameters map, it must be a valid role)
     * 3. if parameters are correct for the user
     * In case the request is not valid (the previuos conditions are not satisfied), an exception is thrown.
     * 
     * @param user The user identifier
     * @param biobj The document
     * @param parameters The document parameters
     * @throws SecurityException
     * @throws EMFInternalError 
     * @throws EMFUserError 
     */
    private void checkRequestCorrectness(String user, BIObject biobj, HashMap parameters) throws SecurityException, EMFInternalError, EMFUserError {
    	logger.debug("IN: user = [" + user + "], biobjectid = [" + biobj + "], parameters = [" + parameters + "]");
		try {
			if (biobj == null) {
				logger.error("No document specified");
				return;
			}
			logger.debug("Input document: id=[" + biobj.getId() + "], name=[" + biobj.getName() + "], label=[" + biobj.getLabel() + "]");
		    // creates the user profile
		    IEngUserProfile profile = null;
		    ISecurityServiceSupplier supplier = SecurityServiceSupplierFactory.createISecurityServiceSupplier();
		    try {
	      		SpagoBIUserProfile userProfile = supplier.createUserProfile(user);
	      		profile = new UserProfile(userProfile);
		    } catch (Exception e) {
	    		logger.error("An error occurred while creating the profile of user [" + user + "]");
	    		throw new SecurityException("An error occurred while creating the profile of user [" + user + "]", e);
		    }
		    
		    // Check if the user can execute the document
		    boolean canSee = ObjectsAccessVerifier.canSee(biobj, profile);
		    if (!canSee) {
	    		logger.error("Current user cannot execute the required document");
	    		throw new SecurityException("Current user cannot execute the required document");
		    }
		    Integer id = biobj.getId();
		    // get the correct roles for execution
			List correctRoles = null;
			if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)
					|| profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_USER)
					|| profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN))
				correctRoles = DAOFactory.getBIObjectDAO().getCorrectRolesForExecution(id, profile);
			else
				correctRoles = DAOFactory.getBIObjectDAO().getCorrectRolesForExecution(id);
			logger.debug("correct roles for execution retrived " + correctRoles);
			if (correctRoles == null || correctRoles.size() == 0) {
				logger.error("Object cannot be executed by no role of the user");
				throw new SecurityException("Object cannot be executed by no role of the user");
			}
		    
		    if (parameters == null) {
		    	logger.debug("Input parameters map is null. It will be considered as an empty map");
		    	parameters = new HashMap();
		    }
		    
		    boolean parametersAreCorrect = false;
		    
	    	String roleName = (String) parameters.get("SBI_EXECUTION_ROLE");
	    	if (roleName != null) {
	    		// if a role is specified, check if it is a valid role for execution 
	    		logger.debug("Execution role specified: " + roleName);
	    		if (!correctRoles.contains(roleName)) {
		    		if (correctRoles == null || correctRoles.size() == 0) {
		    			logger.error("Role [] is not a valid role for the execution of document with id = [" + biobj.getId() 
		    					+ "], label = [" + biobj.getLabel() + "]");
		    			throw new SecurityException("Role [] is not a valid role for the execution of document with id = [" + biobj.getId() 
		    					+ "], label = [" + biobj.getLabel() + "]");
		    		}
	    		}
	    		// check if parameter values are correct for the role
	    		parametersAreCorrect = checkParametersErrors(profile, biobj.getId(), roleName, parameters);
	    	} else {
	    		// if a role is not specified, iterate on valid roles 
	    		logger.debug("Execution role not specified: iterating on all available roles...");
	    		Iterator it = correctRoles.iterator();
	    		while (it.hasNext()) {
	    			roleName = it.next().toString();
	    			// check if parameter values are correct for the role
	    			parametersAreCorrect = checkParametersErrors(profile, biobj.getId(), roleName, parameters);
	    			if (parametersAreCorrect) {
	    				break;
	    			} else {
	    				logger.debug("Role " + roleName + " is NOT compatible with input parameters");
	    			}
	    		}
	    		
	    	}
		    
	    	if (!parametersAreCorrect) {
		       logger.error("Document cannot be executed by the user with the input parameters.");
		       throw new SecurityException("Document cannot be executed by the user with the input parameters.");
	    	} else {
	    		logger.debug("Role " + roleName + " is compatible with input parameters");
	    	}
		} finally {
		    logger.debug("OUT");
		}
    }
    
}
