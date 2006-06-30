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
package it.eng.spagobi.services.modules;

import groovy.lang.Binding;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.error.EMFValidationError;
import it.eng.spago.navigation.LightNavigationManager;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spago.validation.coordinator.ValidationCoordinator;
import it.eng.spagobi.bo.LovDetailList;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.bo.QueryDetail;
import it.eng.spagobi.bo.ScriptDetail;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IModalitiesValueDAO;
import it.eng.spagobi.constants.AdmintoolsConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.GeneralUtilities;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

/**
 * Implements a module which  handles all predefined List of Values (LOV) management: 
 * has methods for LOV load, detail, modify/insertion and deleting operations. 
 * The <code>service</code> method has  a switch for all these operations, differentiated the ones 
 * from the others by a <code>message</code> String.
 * 
 * @author sulis
 */

public class DetailModalitiesValueModule extends AbstractModule {
	
	private EMFErrorHandler errorHandler;
	
	private SessionContainer session;
	
	public void init(SourceBean config) {
	}

	/**
	 * Reads the operation asked by the user and calls the insertion, modify, detail and 
	 * deletion methods.
	 * <p>
	 * When a new value is defined, the user has to use a wizard to build all
	 * the new value definition. There are some methods written for this aim.
	 * 
	 * @param request The Source Bean containing all request parameters
	 * @param response The Source Bean containing all response parameters
	 * @throws exception If an exception occurs
	 * 
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		String message = (String) request.getAttribute("MESSAGEDET");
		SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, 
				            "DetailModalitiesValueModule","service",
				            "begin of detail Modalities Value modify/visualization service with message =" +message);
		
		RequestContainer requestContainer = this.getRequestContainer();
		session = requestContainer.getSessionContainer();
        
		errorHandler = getErrorHandler();
		try {
			if (message == null) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailModalitiesValueModule", "service", "The message parameter is null");
				throw userError;
			} 
			if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_SELECT)) {
				String id = (String) request.getAttribute("id");
				getDetailModValue(id, response);
			} 	else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				//nameControl (request,"MODIFY");
				modDetailModValue(request, AdmintoolsConstants.DETAIL_MOD, response);
			} 	else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_NEW)) {
				newDetailModValue(response);
			} 	else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				//nameControl (request,"INSERT");
				modDetailModValue(request, AdmintoolsConstants.DETAIL_INS, response);
			} 	else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_DEL)) {
				delDetailModValue(request, AdmintoolsConstants.DETAIL_DEL, response);
			}
		} catch (EMFUserError eex) {
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			EMFInternalError internalError = new EMFInternalError(EMFErrorSeverity.ERROR, ex);
			errorHandler.addError(internalError);
			return;
		}
	}
	
	/**
	 * Gets the detail of a value choosed by the user from the 
	 * predefined List of Values. It reaches the key from the request and asks 
	 * to the DB all detail parameter use mode information, by calling the 
	 * method <code>loadModalitiesValueByID</code>.
	 *   
	 * @param key The choosed parameter use mode id key
	 * @param response The response Source Bean
	 * @throws EMFUserError If an exception occurs
	 */
	private void getDetailModValue(String key, SourceBean response)
			throws EMFUserError {
		try {
			response.setAttribute(SpagoBIConstants.MODALITY,
					AdmintoolsConstants.DETAIL_MOD);
			ModalitiesValue modVal = DAOFactory.getModalitiesValueDAO()
					.loadModalitiesValueByID(new Integer(key));
			response.setAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT,
					modVal);
			loadValuesDomain(response);

			IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
    		HashMap attrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
			response.setAttribute(SpagoBIConstants.PROFILE_ATTRS, attrs);

			if (modVal.getITypeCd().equals("FIX_LOV")) {
				RequestContainer requestContainer = this.getRequestContainer();
				SessionContainer session = requestContainer
						.getSessionContainer();
				session.setAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT,
						modVal);
			}

		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"DetailModalitiesValueModule", "getDetailModValue",
					"Cannot fill response container", ex);
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE, ListLovsModule.MODULE_PAGE);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1019, new Vector(),
					params);

		}
	}
	
	/**
	 * Inserts/Modifies the detail of a value according to the user 
	 * request. When a value in the LOV list is modified, the <code>modifyModalitiesValue</code> 
	 * method is called; when a new parameter use mode is added, the <code>inserModalitiesValue</code>
	 * method is called. These two cases are differentiated by the <code>mod</code> String input value .
	 * 
	 * @param request The request information contained in a SourceBean Object
	 * @param mod A request string used to differentiate insert/modify operations
	 * @param response The response SourceBean 
	 * @throws EMFUserError If an exception occurs
	 * @throws SourceBeanException If a SourceBean exception occurs
	 */
	private void modDetailModValue(SourceBean request, String mod,
			SourceBean response) throws EMFUserError, SourceBeanException {

		try {
			ModalitiesValue modVal = null;

			// if we are coming from the test result page, the Lov object is in
			// session
			String returnFromTestMsg = (String) request
					.getAttribute("RETURN_FROM_TEST_MSG");
			if ("SAVE".equalsIgnoreCase(returnFromTestMsg)) {
				modVal = (ModalitiesValue) session
						.getAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
				session.delAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
				session.delAttribute(SpagoBIConstants.MODALITY);
			} else if ("DO_NOT_SAVE".equalsIgnoreCase(returnFromTestMsg)) {
				modVal = (ModalitiesValue) session
						.getAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
				session.delAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
				session.delAttribute(SpagoBIConstants.MODALITY);
				response.setAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT,
						modVal);
				response.setAttribute(SpagoBIConstants.MODALITY, mod);
				loadValuesDomain(response);
				IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
	    		HashMap attrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
				response.setAttribute(SpagoBIConstants.PROFILE_ATTRS, attrs);
				// exits without writing into DB and without loop
				return;
			}

			// if we are not coming from the test result page, the Lov objects
			// fields are in request
			else {

				String idStr = (String) request.getAttribute("id");
				Integer id = new Integer(idStr);
				String description = (String) request
						.getAttribute("description");
				String name = (String) request.getAttribute("name");
				String label = (String) request.getAttribute("label");
				String input_type = (String) request.getAttribute("input_type");
				String input_type_cd = input_type.substring(0, input_type
						.indexOf(","));
				String input_type_id = input_type.substring(input_type
						.indexOf(",") + 1);

				if (mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
					modVal = new ModalitiesValue();
					modVal.setId(id);
				} else {
					modVal = DAOFactory.getModalitiesValueDAO()
							.loadModalitiesValueByID(id);
				}
				modVal.setDescription(description);
				modVal.setName(name);
				modVal.setLabel(label);
				modVal.setITypeCd(input_type_cd);
				modVal.setITypeId(input_type_id);

				if (input_type_cd.equalsIgnoreCase("MAN_IN")) {

					String lovProvider = "";
					modVal.setLovProvider(lovProvider);

					labelControl(request, mod);
					ValidationCoordinator.validate("PAGE", "ModalitiesValueValidation", this);

					// if there are some validation errors into the errorHandler does not write into DB
					Collection errors = errorHandler.getErrors();
					if (errors != null && errors.size() > 0) {
						Iterator iterator = errors.iterator();
						while (iterator.hasNext()) {
							Object error = iterator.next();
							if (error instanceof EMFValidationError) {
								prepareDetailModalitiesValuePage(modVal, mod, response);
								return;
							}
						}
					}

					// control if user wants to test the manual input
					Object test = request.getAttribute("testLovBeforeSave");
					if (test != null) {
						testLovBeforeSave(request, response, null);
						session.setAttribute(SpagoBIConstants.MODALITY, mod);
						session.setAttribute(
								SpagoBIConstants.MODALITY_VALUE_OBJECT, modVal);
						// exits without writing into DB and without loop
						return;
					}

				} else if (input_type_cd.equalsIgnoreCase("QUERY")) {

					QueryDetail query = recoverQueryWizardValues(request);
					String lovProvider = query.toXML();
					modVal.setLovProvider(lovProvider);

					labelControl(request, mod);
					ValidationCoordinator.validate("PAGE", "ModalitiesValueValidation", this);
					ValidationCoordinator.validate("PAGE", "QueryWizardValidation", this);

					// if there are some validation errors into the errorHandler does not write into DB
					Collection errors = errorHandler.getErrors();
					if (errors != null && errors.size() > 0) {
						Iterator iterator = errors.iterator();
						while (iterator.hasNext()) {
							Object error = iterator.next();
							if (error instanceof EMFValidationError) {
								prepareDetailModalitiesValuePage(modVal, mod, response);
								return;
							}
						}
					}

					// control if user wants to test the query
					Object test = request.getAttribute("testLovBeforeSave");
					if (test != null) {
						testLovBeforeSave(request, response, query);
						session.setAttribute(SpagoBIConstants.MODALITY, mod);
						session.setAttribute(
								SpagoBIConstants.MODALITY_VALUE_OBJECT, modVal);
						// exits without writing into DB and without loop
						return;
					}

				} else if (input_type_cd.equalsIgnoreCase("FIX_LOV")) {

					// controls if it is requested to delete a Fix Lov item
					Object indexOfFixedLovItemToDeleteObj = request
							.getAttribute("indexOfFixedLovItemToDelete");
					if (indexOfFixedLovItemToDeleteObj != null) {
						// it is requested to delete a Fix Lov item
						int indexOfFixedLovItemToDelete = findIndexOfFixedLovItemToDelete(indexOfFixedLovItemToDeleteObj);
						LovDetailList lovDetailList = recoverLovWizardValues(
								request, indexOfFixedLovItemToDelete);
						String lovProvider = lovDetailList.toXML();
						modVal.setLovProvider(lovProvider);
						prepareDetailModalitiesValuePage(modVal, mod, response);
						// exits without writing into DB and without loop
						return;
					}

					// loads all Fix Lov items
					LovDetailList lovDetailList = recoverLovWizardValues(
							request, -1);
					String lovProvider = lovDetailList.toXML();
					modVal.setLovProvider(lovProvider);

					// controls if it is requested to add a Fix Lov item
					Object insertFixLovItem = request
							.getAttribute("insertFixLovItem");
					if (insertFixLovItem != null) {
						// it is requested to add a Fix Lov item.
						// If there are no errors, add the new item in the
						// Lov
						ValidationCoordinator.validate("PAGE", "FixLovWizardValidation", this);
						
						// if there are some validation errors into the errorHandler does not add the new values
						Collection errors = errorHandler.getErrors();
						boolean hasValidationErrors = false;
						if (errors != null && errors.size() > 0) {
							Iterator iterator = errors.iterator();
							while (iterator.hasNext()) {
								Object error = iterator.next();
								if (error instanceof EMFValidationError) {
									hasValidationErrors = true;
									break;
								}
							}
						}
						if (!hasValidationErrors) {
							addFixLovItem(request, modVal);
						}
						prepareDetailModalitiesValuePage(modVal, mod, response);
						// exits without writing into DB and without loop
						return;
					}

					labelControl(request, mod);
					ValidationCoordinator.validate("PAGE", "ModalitiesValueValidation", this);

					// if there are some validation errors into the errorHandler does not write into DB
					Collection errors = errorHandler.getErrors();
					if (errors != null && errors.size() > 0) {
						Iterator iterator = errors.iterator();
						while (iterator.hasNext()) {
							Object error = iterator.next();
							if (error instanceof EMFValidationError) {
								prepareDetailModalitiesValuePage(modVal, mod, response);
								return;
							}
						}
					}

					// control if user wants to test the fix lov
					Object test = request.getAttribute("testLovBeforeSave");
					if (test != null) {
						testLovBeforeSave(request, response, lovDetailList);
						session.setAttribute(SpagoBIConstants.MODALITY, mod);
						session.setAttribute(
								SpagoBIConstants.MODALITY_VALUE_OBJECT, modVal);
						// exits without writing into DB and without loop
						return;
					}

				} else if (input_type_cd.equalsIgnoreCase("SCRIPT")) {

					ScriptDetail scriptDet = recoverScriptWizardValues(request);
					String lovProvider = scriptDet.toXML();
					modVal.setLovProvider(lovProvider);

					labelControl(request, mod);
					ValidationCoordinator.validate("PAGE", "ModalitiesValueValidation", this);
					ValidationCoordinator.validate("PAGE", "ScriptWizardValidation", this);
					
					// if there are some validation errors into the errorHandler does not write into DB
					Collection errors = errorHandler.getErrors();
					if (errors != null && errors.size() > 0) {
						Iterator iterator = errors.iterator();
						while (iterator.hasNext()) {
							Object error = iterator.next();
							if (error instanceof EMFValidationError) {
								prepareDetailModalitiesValuePage(modVal, mod, response);
								return;
							}
						}
					}

					// control if user wants to test the script
					Object test = request.getAttribute("testLovBeforeSave");
					if (test != null) {
						testLovBeforeSave(request, response, scriptDet);
						session.setAttribute(SpagoBIConstants.MODALITY, mod);
						session.setAttribute(
								SpagoBIConstants.MODALITY_VALUE_OBJECT, modVal);
						// exits without writing into DB and without loop
						return;
					}
				}
			}
		
			// finally (if there are no error, if there is no request for test or to
			// add or delete
			// a Fix Lov item) writes into DB
		
			if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				DAOFactory.getModalitiesValueDAO().insertModalitiesValue(modVal);
			} else {
				DAOFactory.getModalitiesValueDAO().modifyModalitiesValue(modVal);
			}
			
		} catch (Exception ex) {			
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailModalitiesValueModule","modDetailModValue","Cannot fill response container", ex  );
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE, ListLovsModule.MODULE_PAGE);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1018, new Vector(), params);
		}
    	
		response.setAttribute("loopback", "true");
		
		response.setAttribute(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
		
	}
	
	/**
	 * Sets some attributes into the response SourceBean. Those attributes are required for 
	 * the correct visualization of the ModalitiesValue form page.
	 * 
	 * @param modVal The ModalitiesValue to visualize 
	 * @param mod The modality (insert/modify)
	 * @param response The SourceBean to set
	 * @throws SourceBeanException
	 * @throws EMFUserError
	 * @throws EMFInternalError 
	 */

	private void prepareDetailModalitiesValuePage (ModalitiesValue modVal, String mod, SourceBean response) throws SourceBeanException, EMFUserError, EMFInternalError {
		response.setAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT, modVal);
		response.setAttribute(SpagoBIConstants.MODALITY, mod);	
		loadValuesDomain(response);
		IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		HashMap attrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
		response.setAttribute(SpagoBIConstants.PROFILE_ATTRS, attrs);
	}
	
	/**
	 * Tests the ModalitiesValue before saving and sets some attributes to the response SourceBean 
	 * for the correct visualization of the test result page.
	 *  
	 * @param request The request SourceBean
	 * @param response The response SourceBean
	 * @param objectToTest The object to test. It is:
	 * 			- null in case on manual input;
	 * 			- a QueryDetail in case of query;
	 * 			- a LovDetailList in case of Fix Lov;
	 * 			- a ScriptDetail in case of script.
	 * @throws SourceBeanException
	 */
	private void testLovBeforeSave (SourceBean request, SourceBean response, Object objectToTest) throws SourceBeanException {

    	//String resultTest = "";
    	
    	// case on manual input
    	if (objectToTest == null) {
    		response.setAttribute("testedObject", "MAN_IN");
    		response.setAttribute("testExecuted", "yes");
    		return;
    	}
    	
    	// case of query
    	if (objectToTest instanceof QueryDetail) {
    		response.setAttribute("testedObject", "QUERY");
    		// now the ListTestQueryModule is called; it will perform the test
    		return;
    	}
    	
    	// case of Fix Lov
    	if (objectToTest instanceof LovDetailList) {
    		response.setAttribute("testedObject", "FIX_LOV");
    		response.setAttribute("testExecuted", "yes");
    		//LovDetailList lovDetailList  = (LovDetailList) objectToTest;
    		return;
    	}
    	
    	// case on script
    	if (objectToTest instanceof ScriptDetail) {
    		ScriptDetail scriptDet = (ScriptDetail) objectToTest;
    		if (scriptDet.isSingleValue()) {
    			response.setAttribute("testedObject", "SCRIPT_SINGLE_VALUE");
            	try{
        			IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
            		HashMap profileattrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
            		Binding bind = GeneralUtilities.fillBinding(profileattrs);
            		String resultTest = GeneralUtilities.testScript(scriptDet.getScript(), bind);
            		response.setAttribute("result", resultTest);
            	} catch (Exception e) {
            		response.setAttribute("stacktrace", e.toString());
            	}
            	response.setAttribute("testExecuted", "yes");
    		} else {
    			response.setAttribute("testedObject", "SCRIPT_LIST_OF_VALUES");
    			// now the ListTestScriptModule is called; it will perform the test
    		}
    	}

	}
	
	/**
	 * Deletes a value choosed by user from the LOV list.
	 * 
	 * @param request	The request SourceBean
	 * @param mod	A request string used to differentiate delete operation
	 * @param response	The response SourceBean
	 * @throws EMFUserError	If an Exception occurs
	 * @throws SourceBeanException If a SourceBean Exception occurs
	 */
	
	private void delDetailModValue(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		try {
			String idStr = (String) request.getAttribute("id");
			//controls if there is any parameter associated
			boolean hasPar = DAOFactory.getModalitiesValueDAO().hasParameters(idStr);
			if (hasPar){
				HashMap params = new HashMap();
				params.put(AdmintoolsConstants.PAGE, ListLovsModule.MODULE_PAGE);
				EMFValidationError error = new EMFValidationError (EMFErrorSeverity.ERROR, 1023, new Vector(), params);
				getErrorHandler().addError(error);
				return;
		    }
			IModalitiesValueDAO moddao = DAOFactory.getModalitiesValueDAO();
			ModalitiesValue modVal = moddao.loadModalitiesValueByID(new Integer(idStr));
			moddao.eraseModalitiesValue(modVal);
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailModalitiesValueModule","delDetailModValue","Cannot fill response container", ex  );
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE, ListLovsModule.MODULE_PAGE);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1020, new Vector(), params);
			
		}
		response.setAttribute("loopback", "true");
		
		response.setAttribute(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
	}
	
	
	
	/**
	 * Instantiates a new <code>Value<code> object when a new value 
	 * insertion in the LOV list is required, in order to prepare the page for the insertion.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	private void newDetailModValue(SourceBean response) throws EMFUserError {
		try {
			
			IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
    		HashMap attrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
			response.setAttribute(SpagoBIConstants.PROFILE_ATTRS, attrs);
			
			response.setAttribute(SpagoBIConstants.MODALITY,
					AdmintoolsConstants.DETAIL_INS);
			ModalitiesValue modVal = new ModalitiesValue();
			modVal.setId(new Integer(0));
			modVal.setName("");
			modVal.setDescription("");
			modVal.setLabel("");
			modVal.setLovProvider("");
			modVal.setITypeCd("MAN_IN");
			loadValuesDomain(response);
			response.setAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT,
					modVal);
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"DetailModalitiesValueModule", "newDetailModValue",
					"Cannot prepare page for the insertion", ex);
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE, ListLovsModule.MODULE_PAGE);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1021, new Vector(),
					params);

		}
	}
	
	
	/**
	 * Loads into the Response Source Bean all the Input Type Domain objects
	 * 
	 * @param response The response Source Bean
	 * @throws EMFUserError If any exception occurred
	 */
	private void loadValuesDomain(SourceBean response)  throws EMFUserError {
		try {
			List list = DAOFactory.getDomainDAO().loadListDomainsByType("INPUT_TYPE");
			response.setAttribute (SpagoBIConstants.LIST_INPUT_TYPE, list);
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailModalitiesValueModule","loadValuesDomain","Cannot prepare page for the insertion", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1021);
		}
	}
		
	/**
	 * Recover all Query Wizard values when a value is inserted or modified, choosing "Query Statement"
	 * as the input type. 
	 * 
	 * @param request The request SourceBean
	 */
	private QueryDetail recoverQueryWizardValues (SourceBean request) {
		QueryDetail query = new QueryDetail();
		String connName = (String)request.getAttribute("connName");
		String visColumns = (String)request.getAttribute("visColumns");
		String valueColumns = (String)request.getAttribute("valueColumns");
		String queryDefinition = (String)request.getAttribute("queryDef");
		query.setConnectionName(connName);
		query.setVisibleColumns(visColumns);
		query.setValueColumns(valueColumns);
		query.setQueryDefinition(queryDefinition);
		return query;
	}
	
	/**
	 * Recover all Script Wizard values when a value is inserted or modified, choosing "Script to Load Values"
	 * as the input type.
	 * 
	 * @param request The request SourceBean
	 */
	
	private ScriptDetail recoverScriptWizardValues (SourceBean request) {
		
			ScriptDetail scriptDet = new ScriptDetail();
			String script = (String) request.getAttribute("script");
			if(script==null) {
				script = "";
			}
			script = script.replaceAll(">", "&gt;");
			script = script.replaceAll("<", "&lt;");
			script = script.replaceAll("\"", "&quot;");
			scriptDet.setScript(script);
			
			String numberOutStr = (String)request.getAttribute("numberout");
	        if(numberOutStr.equalsIgnoreCase("list")) {
	        	scriptDet.setListOfValues(true);
	        	scriptDet.setSingleValue(false);
	        } else {
	        	scriptDet.setListOfValues(false);
	        	scriptDet.setSingleValue(true);
	        }

	        return scriptDet;
	        
	}
	
	
	/**
	 * Inserts a new Fixed LOV item in the FixedLov Wizard. When this type of Input is selected dring the insertion/
	 * modify of a Value in the LOV list, it is possible to add a series of FixLov Values, showed
	 * at runtime in a table.
	 * 
	 * @param request	The request SourceBean
	 * @param modVal	The ModalitiesValue to modify with the new entry
	 * @throws SourceBeanException	If a SourceBean Exception occurred
	 */
	private ModalitiesValue addFixLovItem (SourceBean request, ModalitiesValue modVal) throws SourceBeanException {
		String lovProv = modVal.getLovProvider();
		LovDetailList lovDetList = null;
		if ((lovProv==null) || (lovProv.trim().equals("")) || (!modVal.getITypeCd().equals("FIX_LOV"))) {
			lovDetList = new LovDetailList();
		} else {
			lovDetList = LovDetailList.fromXML(lovProv);
		}
		String lovName = (String)request.getAttribute("nameOfFixedLovItemNew");
		String lovDesc = (String)request.getAttribute("valueOfFixedLovItemNew");
		lovDetList.add(lovName, lovDesc);
		modVal.setLovProvider(lovDetList.toXML());
		return modVal;
	}
	
	/**
	 * Finds the index of the fixed lov item to delete.
	 * 
	 * @param indexOfFixedListItemToDeleteObj	The object obtained from the SourceBean request 
	 * as an attribute with key "indexOfFixedListItemToDelete" 
	 */
	private int findIndexOfFixedLovItemToDelete (Object indexOfFixedLovItemToDeleteObj) {
		String indexOfFixedLovItemToDeleteStr = "";
		if (indexOfFixedLovItemToDeleteObj instanceof String) {
			indexOfFixedLovItemToDeleteStr = (String) indexOfFixedLovItemToDeleteObj;
		} else if (indexOfFixedLovItemToDeleteObj instanceof List) {
			List indexOfFixedListItemToDeleteList = (List) indexOfFixedLovItemToDeleteObj;
			Iterator it = indexOfFixedListItemToDeleteList.iterator();
			while (it.hasNext()) {
				Object item = it.next();
				if (item instanceof SourceBean) continue;
				if (item instanceof String) indexOfFixedLovItemToDeleteStr = (String) item;
			}
		}
		int indexOfFixedLovItemToDelete = Integer.parseInt(indexOfFixedLovItemToDeleteStr);
		return indexOfFixedLovItemToDelete;
	}
	
	/**
	 * Recovers all the fix lov items from the request, apart from the one with index indexOfFixedListItemToDelete,
	 * that will be ignorated. If indexOfFixedListItemToDelete is negative, all the items will be recovered and 
	 * put into the String lovProvider (representing the XML Lov detail list).
	 * 
	 * @param request	The request SourceBean
	 * @param indexOfFixedListItemToDelete	The index of the item to be ignorated.
	 * @throws Exception	If an Exception occurred
	 */
	private LovDetailList recoverLovWizardValues (SourceBean request, int indexOfFixedLovItemToDelete) throws Exception {
		
		LovDetailList lovDetList = new LovDetailList();
		List names = request.getAttributeAsList("nameOfFixedListItem");
		List values = request.getAttributeAsList("valueOfFixedListItem");
		if (names.size() != values.size()) throw new Exception ("Fixed Lov has different numbers of names and values!");
		for (int i = 0; i < names.size(); i++) {
			String name = (String) names.get(i);
			String value = (String) values.get(i);
			if (indexOfFixedLovItemToDelete != i) lovDetList.add(name, value);
		}
		return lovDetList;
	}
	
	/**
	 * Controls if the label choosed by user is yet in use. 
	 * If it is, an error is added to the error handler.
	 * 
	 * @param request The request Source Bean
	 * @param mod The modality
	 */
	public void labelControl (SourceBean request, String mod) throws EMFUserError {
		String label = (String) request.getAttribute("label");
		List allModVal = DAOFactory.getModalitiesValueDAO()
				.loadAllModalitiesValue();
		if (AdmintoolsConstants.DETAIL_INS.equalsIgnoreCase(mod)) {
			Iterator i = allModVal.iterator();
			while (i.hasNext()) {
				ModalitiesValue value = (ModalitiesValue) i.next();
				String valueLabel = value.getLabel();
				if (valueLabel.equals(label)) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE,
							ListLovsModule.MODULE_PAGE);
					EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1024,
							new Vector(), params);
					errorHandler.addError(error);
				}
			}
		} else {
			String currentId = (String) request.getAttribute("id");
			Iterator i = allModVal.iterator();
			while (i.hasNext()) {
				ModalitiesValue value = (ModalitiesValue) i.next();
				String valueLabel = value.getLabel();
				String valueId = value.getId().toString();
				if (valueLabel.equals(label)
						&& (!currentId.equalsIgnoreCase(valueId))) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE,
							ListLovsModule.MODULE_PAGE);
					EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1024,
							new Vector(), params);
					errorHandler.addError(error);
				}
			}
		}
	}
	
}


