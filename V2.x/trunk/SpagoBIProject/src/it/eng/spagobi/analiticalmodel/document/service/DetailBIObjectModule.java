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
package it.eng.spagobi.analiticalmodel.document.service;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorCategory;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spago.validation.EMFValidationError;
import it.eng.spago.validation.coordinator.ValidationCoordinator;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjTemplate;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO;
import it.eng.spagobi.analiticalmodel.document.utils.DetBIObjModHelper;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.service.TreeObjectsModule;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.ObjParuse;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.Parameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IBIObjectParameterDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IObjParuseDAO;
import it.eng.spagobi.commons.constants.AdmintoolsConstants;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.services.AbstractBasicCheckListModule;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.commons.utilities.ObjectsAccessVerifier;
import it.eng.spagobi.commons.utilities.PortletUtilities;
import it.eng.spagobi.commons.utilities.SessionMonitor;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.engines.config.bo.Engine;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.commons.validator.GenericValidator;

/**
 * Implements a module which  handles all BI objects management: 
 * has methods for BI Objects load, detail, modify/insertion and deleting operations. 
 * The <code>service</code> method has  a switch for all these operations, differentiated the ones 
 * from the others by a <code>message</code> String.
 */

public class DetailBIObjectModule extends AbstractModule {
		
	public final static String MODULE_PAGE = "DetailBIObjectPage";
	public final static String NAME_ATTR_OBJECT = "BIObjects";
	public final static String NAME_ATTR_LIST_OBJ_TYPES = "types";
	public final static String NAME_ATTR_LIST_ENGINES = "engines";
	public final static String NAME_ATTR_LIST_STATES = "states";		
	public final static String NAME_ATTR_OBJECT_PAR = "OBJECT_PAR";
	public final static String NAME_ATTR_LIST_DS = "datasource";
	
	private String actor = null;
	private EMFErrorHandler errorHandler = null;
	private IEngUserProfile profile;
	private String initialPath = null;
	private DetBIObjModHelper helper = null;
	SessionContainer session = null;
	
	
	public void init(SourceBean config) {
	}
	
	/**
	 * Reads the operation asked by the user and calls the insertion, modify, detail and 
	 * deletion methods.
	 * @param request The Source Bean containing all request parameters
	 * @param response The Source Bean containing all response parameters
	 * @throws exception If an exception occurs
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		// RECOVER REQUEST CONTAINER, SESSION CONTAINER, USER PROFILE AND ERROR HANDLER
		RequestContainer requestContainer = this.getRequestContainer();		
		session = requestContainer.getSessionContainer();
		SessionContainer permanentSession = session.getPermanentContainer();
		profile = (IEngUserProfile) permanentSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		errorHandler = getErrorHandler();
		// IN CASE THE REQUEST IS MULTIPART AND THE APPLICATION RUN ON A PORTAL SERVER THE REQUEST CONTAINER MUST BE FILLED 
		if(ChannelUtilities.isPortletRunning()){
			if(PortletUtilities.isMultipartRequest()) {
				request = ChannelUtilities.getSpagoRequestFromMultipart();
				DetBIObjModHelper.fillRequestContainer(requestContainer, request, errorHandler);
			}
		}
		// CREATE THE HELPER
		helper = new DetBIObjModHelper(requestContainer, request, response);
		// GET THE EXECUTION MODALITY AND THE INITIAL PATH  
		String modality = (String) ChannelUtilities.getPreferenceValue(this.getRequestContainer(), BIObjectsModule.MODALITY, "");
		initialPath = null;
		if(modality != null && modality.equalsIgnoreCase(BIObjectsModule.FILTER_TREE)) {
			initialPath = (String) ChannelUtilities.getPreferenceValue(this.getRequestContainer(), TreeObjectsModule.PATH_SUBTREE, "");
		}
		// GET MESSAGE FROM REQUEST	
		String message = (String) request.getAttribute("MESSAGEDET");
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","service"," MESSAGEDET = " + message);
		// GET ACTOR FROM REQUEST
		actor = (String) request.getAttribute(SpagoBIConstants.ACTOR);
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","service"," ACTOR = " + actor);
		
		// get attribute from session
		String moduleName = (String)session.getAttribute("RETURN_FROM_MODULE");
		if(moduleName != null) { // TODO clear session with a proper method of returning module
			if(moduleName.equalsIgnoreCase("ListLookupParametersModule")) {
				String returnState = (String)session.getAttribute("RETURN_STATUS");
				if(returnState.equalsIgnoreCase("SELECT"))
					lookupReturnHandler(request, response);	
				else
					lookupReturnBackHandler(request,response);
				session.delAttribute("RETURN_STATUS");
				session.delAttribute("RETURN_FROM_MODULE");
				return; // force refresh
				// TODO force refresh in a standard way with a generic methods
			}
			else if(moduleName.equalsIgnoreCase("CheckLinksModule")) {
				SessionMonitor.printSession(session);
				AbstractBasicCheckListModule.clearSession(session, moduleName);
				session.delAttribute(SpagoBIConstants.ACTOR);
				SessionMonitor.printSession(session);
			} else if (moduleName.equalsIgnoreCase("ListObjParuseModule")) {
				lookupReturnBackHandler(request,response);
				session.delAttribute("RETURN_FROM_MODULE");
				return;
			}			
		}
		
		// these attributes, if defined, represent events triggered by one 
		// of the submit buttons present in the main form 
		boolean parametersLookupButtonClicked =  request.getAttribute("loadParametersLookup") != null;
		boolean linksLookupButtonClicked =  request.getAttribute("loadLinksLookup") != null;
		boolean dependenciesButtonClicked =  request.getAttribute("goToDependenciesPage") != null;
		
		
		
		try {
			if (message == null) {				
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule", "service", "The message parameter is null");
				throw userError;
			} 
						
			// check for events first...
			if (parametersLookupButtonClicked){
				SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","service","loadParametersLookup != null");
				startParametersLookupHandler (request, message, response);
			} else if(linksLookupButtonClicked){
				SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","service","editSubreports != null");
				startLinksLookupHandler(request, message, response);
			} else if (dependenciesButtonClicked) {
				SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","service","goToDependenciesPage != null");
				startDependenciesLookupHandler(request, message, response);
		    } // ...then check for other service request types 			
			 else if (message.trim().equalsIgnoreCase(ObjectsTreeConstants.DETAIL_SELECT)) {
				getDetailObject(request, response);
			} else if (message.trim().equalsIgnoreCase(ObjectsTreeConstants.DETAIL_MOD)) {
				modBIObject(request, ObjectsTreeConstants.DETAIL_MOD, response);
			} else if (message.trim().equalsIgnoreCase(ObjectsTreeConstants.DETAIL_NEW)) {
				newBIObject(request, response);
			} else if (message.trim().equalsIgnoreCase(ObjectsTreeConstants.DETAIL_INS)) {
				modBIObject(request, ObjectsTreeConstants.DETAIL_INS, response);
			} else if (message.trim().equalsIgnoreCase(ObjectsTreeConstants.DETAIL_DEL)) {
				delDetailObject(request, ObjectsTreeConstants.DETAIL_DEL, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.ERASE_VERSION)) {
				eraseVersion(request, response);
			} else if (message.trim().equalsIgnoreCase("EXIT_FROM_DETAIL")){
				exitFromDetail(request, response);
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

	
	
	
	
	
	
	private void setLoopbackContext(SourceBean request, String message) throws EMFUserError{
		BIObject obj = null;
		try{
			obj = helper.recoverBIObjectDetails(message);
		} catch (Exception e) {
			System.out.println(e);
			// TODO manage exception 
		}
		BIObjectParameter biObjPar = helper.recoverBIObjectParameterDetails(obj.getId());
		session.setAttribute("LookupBIObject", obj);
		session.setAttribute("LookupBIObjectParameter", biObjPar);
		session.setAttribute("modality", message);
		session.setAttribute("modalityBkp", message);
		session.setAttribute("actor",actor);
	}
	
	private void delateLoopbackContext() {
		session.delAttribute("LookupBIObject");
		session.delAttribute("LookupBIObjectParameter");
		session.delAttribute("modality");
		session.delAttribute("modalityBkp");
		session.delAttribute("actor");
	}
	
	private Integer getBIObjectIdFromLoopbackContext() {
		Integer id = null;
		BIObject obj = (BIObject)session.getAttribute("LookupBIObject");
		if(obj != null) id = obj.getId();
		return id;
	}
	
		
	private void startParametersLookupHandler(SourceBean request, String message, SourceBean response) throws EMFUserError, SourceBeanException {
		setLoopbackContext(request, message);		
		response.setAttribute("parametersLookup", "true");		
	}
	
	private void startLinksLookupHandler(SourceBean request, String message, SourceBean response) throws EMFUserError, SourceBeanException {
		modBIObject(request, ObjectsTreeConstants.DETAIL_MOD, response);
		String idStr = (String) request.getAttribute("id");
		session.setAttribute("SUBJECT_ID", idStr);
		session.setAttribute(SpagoBIConstants.ACTOR, actor);
		response.setAttribute("linksLookup", "true");		
	}	

	private void startDependenciesLookupHandler(SourceBean request, String message, SourceBean response) throws Exception {
		//fillRequestContainer(request, errorHandler);
		response.setAttribute(SpagoBIConstants.ACTOR, actor);
		BIObject obj = null;
		try{
			obj = helper.recoverBIObjectDetails(message);
		} catch (Exception e) {
			System.out.println(e);
			// TODO manage exception 
		}
		
		BIObjectParameter biObjPar = helper.recoverBIObjectParameterDetails(obj.getId());
		String saveBIObjectParameter = (String) request.getAttribute("saveBIObjectParameter");
		if (saveBIObjectParameter != null && saveBIObjectParameter.equalsIgnoreCase("yes")) {
			// it is requested to save the visible BIObjectParameter
			ValidationCoordinator.validate("PAGE", "BIObjectParameterValidation", this);
			// If it's a new BIObjectParameter or if the Parameter was changed controls 
			// that the BIObjectParameter url name is not already in use
			urlNameControl(obj.getId(), biObjPar);
			verifyForDependencies(biObjPar);
			
			// if there are some validation errors into the errorHandler does not write into DB
			Collection errors = errorHandler.getErrors();
			if (errors != null && errors.size() > 0) {
				Iterator iterator = errors.iterator();
				while (iterator.hasNext()) {
					Object error = iterator.next();
					if (error instanceof EMFValidationError) {
						helper.fillResponse(initialPath);
						prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), 
								ObjectsTreeConstants.DETAIL_MOD, false, false);
						return;
					}
				}
			}
			DAOFactory.getBIObjectParameterDAO().modifyBIObjectParameter(biObjPar);
		} else {
			biObjPar = DAOFactory.getBIObjectParameterDAO().loadForDetailByObjParId(biObjPar.getId());
		}
		// refresh of the initial_BIObjectParameter in session
		BIObjectParameter biObjParClone = DetBIObjModHelper.clone(biObjPar);
		session.setAttribute("initial_BIObjectParameter", biObjParClone);
		// set lookup objects
		session.setAttribute("LookupBIObject", obj);
		session.setAttribute("LookupBIObjectParameter", biObjPar);
		session.setAttribute("modality", message);
		session.setAttribute("modalityBkp", message);
		session.setAttribute("actor",actor);		
		response.setAttribute("dependenciesLookup", "true");
	}
	
	private void lookupReturnBackHandler(SourceBean request, SourceBean response) throws SourceBeanException, EMFUserError {

		BIObject obj = (BIObject) session.getAttribute("LookupBIObject");
		BIObjectParameter biObjPar = (BIObjectParameter) session.getAttribute("LookupBIObjectParameter");
		String modality = (String) session.getAttribute("modality");
		if(modality == null) modality = (String)session.getAttribute("modalityBkp");
		
		actor = (String) session.getAttribute("actor");
		session.delAttribute("LookupBIObject");
		session.delAttribute("LookupBIObjectParameter");
		session.delAttribute("modality");
		session.delAttribute("modalityBkp");
		session.delAttribute("actor");
		response.setAttribute(SpagoBIConstants.ACTOR, actor);
		helper.fillResponse(initialPath);
		prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), modality, false, false);
		
	}


	private void lookupReturnHandler(SourceBean request, SourceBean response) throws EMFUserError, SourceBeanException {
		
		BIObject obj = (BIObject) session.getAttribute("LookupBIObject");
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","lookupReturnHandler",
				" BIObject = " + obj);
		
		BIObjectParameter biObjPar = (BIObjectParameter) session.getAttribute("LookupBIObjectParameter");
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","lookupReturnHandler",
				" BIObjectParameter = " + biObjPar);
		
		String modality = (String) session.getAttribute("modality");
		if(modality == null) modality = (String)session.getAttribute("modalityBkp");
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","lookupReturnHandler",
				" modality = " + modality);
		
		
		actor = (String) session.getAttribute("actor");
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","lookupReturnHandler",
				" actor = " + actor);
		
		
		String newParIdStr = (String) session.getAttribute("PAR_ID");
		Integer newParIdInt = Integer.valueOf(newParIdStr);
		Parameter newParameter = new Parameter();
		newParameter.setId(newParIdInt);
		biObjPar.setParameter(newParameter);
		biObjPar.setParID(newParIdInt);
		
		delateLoopbackContext();
		
		response.setAttribute(SpagoBIConstants.ACTOR, actor);
		helper.fillResponse(initialPath);
		prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), modality, false, false);
		session.delAttribute("PAR_ID");
	}

	/**
	 * Gets the detail of a BI object  choosed by the user from the 
	 * BI objects list. It reaches the key from the request and asks to the DB all detail
	 * BI objects information, by calling the method <code>loadBIObjectForDetail</code>.
	 *   
	 * @param request The request Source Bean
	 * @param response The response Source Bean
	 * @throws EMFUserError If an exception occurs
	 */
	private void getDetailObject(SourceBean request, SourceBean response)
			throws EMFUserError {
		try {
			response.setAttribute(SpagoBIConstants.ACTOR, actor);
			String idStr = (String) request.getAttribute(ObjectsTreeConstants.OBJECT_ID);
			Integer id = new Integer(idStr);
			BIObject obj = DAOFactory.getBIObjectDAO().loadBIObjectForDetail(id);
			if (obj == null) {
				SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, this.getClass().getName(), 
						"getDetailObject", "BIObject with id "+id+" cannot be retrieved.");
				EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1040);
				errorHandler.addError(error);
				return;
			}
			Object selectedObjParIdObj = request.getAttribute("selected_obj_par_id");
			String selectedObjParIdStr = "";
			if (selectedObjParIdObj != null) {
				int selectedObjParId = DetBIObjModHelper.findBIObjParId(selectedObjParIdObj);
				selectedObjParIdStr = new Integer(selectedObjParId).toString();
			}
			helper.fillResponse(initialPath);
			prepareBIObjectDetailPage(response, obj, null, selectedObjParIdStr, ObjectsTreeConstants.DETAIL_MOD, true, true);
		} catch (Exception ex) {
			SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE,
					"DetailBIObjectModule", "getDetailObject",
					"Cannot fill response container", ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	/**
	 * Controls if there are some BIObjectParameter objects that depend by the BIObjectParameter object
	 * at input, given its id.
	 * 
	 * @param objParFatherId The id of the BIObjectParameter object to check
	 * @throws EMFUserError
	 */
	private void checkForDependancies(Integer objParFatherId) throws EMFUserError {
		IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
		List objParametersCorrelated = objParuseDAO.getDependencies(objParFatherId);
		if (objParametersCorrelated != null && objParametersCorrelated.size() > 0) {
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE,
					DetailBIObjectModule.MODULE_PAGE);
			Vector v = new Vector();
			v.add(objParametersCorrelated.toString());
			EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1049, v, params);
			errorHandler.addError(error);
		}
	}

	/**
	 * Before modifing a BIObjectParameter (not inserting), this method must be invoked in order to verify that the BIObjectParameter
	 * stored into db (to be modified as per the BIObjectParameter in input) has dependencies associated; if it is the case,
	 * verifies that the associated Parameter was not changed. In case of changed Parameter adds a EMFValidationError into the error handler.
	 * 
	 * @param objPar The BIObjectParameter to verify
	 * @throws EMFUserError 
	 */
	private void verifyForDependencies (BIObjectParameter objPar) throws EMFUserError {
		Integer objParId = objPar.getId();
		if (objParId == null || objParId.intValue() == -1) {
			// it means that the BIObjectParameter in input must be inserted, not modified
			return;
		}
		// Controls that, if the are some dependencies for the BIObjectParameter, the associated parameter was not changed
		IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
		List correlations = objParuseDAO.loadObjParuses(objParId);
		if (correlations != null && correlations.size() > 0) {
			IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
			BIObjectParameter initialObjPar = objParDAO.loadForDetailByObjParId(objParId);
			if (initialObjPar.getParID().intValue() != objPar.getParID().intValue()) {
				// the ParameterUse was changed to manual input or the lov id was changed
				HashMap params = new HashMap();
				params.put(AdmintoolsConstants.PAGE, "DetailBIObjectPage");
				Vector vector = new Vector();
				EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1061, vector, params);
				errorHandler.addError(error);
				return;
			}
		}
	}

	/**
	 * Controls that the BIObjectParameter url name is not in use by another BIObjectParameter
	 * 
	 * @param objId The id of the document
	 * @param biObjPar The BIObjectParameter to control before inserting/modifying
	 */
	private void urlNameControl(Integer objId, BIObjectParameter biObjPar) {
		if (objId == null || objId.intValue() < 0 || biObjPar == null || biObjPar.getParameterUrlName() == null) 
			return;
		try {
			IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
			List paruses = objParDAO.loadBIObjectParametersById(objId);
			Iterator it = paruses.iterator();
			while (it.hasNext()) {
				BIObjectParameter aBIObjectParameter = (BIObjectParameter) it.next();
				if (aBIObjectParameter.getParameterUrlName().equals(biObjPar.getParameterUrlName()) 
						&& !aBIObjectParameter.getId().equals(biObjPar.getId())) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE,
							DetailBIObjectModule.MODULE_PAGE);
					EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1046,
							new Vector(), params);
					errorHandler.addError(error);
				}
			}
		} catch (EMFUserError e) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailBIObjectModule","urlNameControl","Error while url name control", e);
		}
		
	}
	
	private BIObjectParameter reloadBIObjectParameter(Integer objId, String objParUrlName) throws EMFInternalError, EMFUserError {
		if (objId == null || objId.intValue() < 0 || objParUrlName == null || objParUrlName.trim().equals(""))
			throw new EMFInternalError(EMFErrorSeverity.ERROR, "Invalid input data for method reloadBIObjectParameter in DetailBIObjectModule");
		BIObjectParameter objPar = null;
		try {
			IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
			List paruses = objParDAO.loadBIObjectParametersById(objId);
			Iterator it = paruses.iterator();
			while (it.hasNext()) {
				BIObjectParameter aBIObjectParameter = (BIObjectParameter) it.next();
				if (aBIObjectParameter.getParameterUrlName().equals(objParUrlName)) {
					objPar = aBIObjectParameter;
					break;
				}
			}
		} catch (EMFUserError e) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailBIObjectModule","reloadBIObjectParameter","Cannot reload BIObjectParameter", e);
		}
		if (objPar == null) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailBIObjectModule","reloadBIObjectParameter","BIObjectParameter with url name '"+ objParUrlName +"' not found.");
			objPar = DetBIObjModHelper.createNewBIObjectParameter(objId);
		}
		return objPar;
	}



	/**
	 * Fills the response SourceBean with the elements that will be displayed in the BIObject detail page: 
	 * the BIObject itself and the required BIObjectParameter.
	 * 
	 * @param response The response SourceBean to be filled
	 * @param obj The BIObject to be displayed
	 * @param biObjPar The BIObjectParameter to be displayed: if it is null the selectedObjParIdStr will be considered.
	 * @param selectedObjParIdStr The id of the BIObjectParameter to be displayed.
	 * 			If it is blank or null the first BIObjectParameter will be diplayed but in case the BIObject 
	 * 			has no BIObjectParameter a new empty BIObjectParameter will be displayed.
	 * 			If it is "-1" a new empty BIObjectParameter will be displayed.
	 * @param detail_mod The modality
	 * @param initialBIObject Boolean: if true the BIObject to be visualized is the initial BIObject and 
	 * 			a clone will be put in session.
	 * @param initialBIObjectParameter Boolean: if true the BIObjectParameter to be visualized is the initial BIObjectParameter and 
	 * 			a clone will be put in session.
	 * @throws SourceBeanException
	 * @throws EMFUserError
	 */
	private void prepareBIObjectDetailPage(SourceBean response, BIObject obj,
			BIObjectParameter biObjPar, String selectedObjParIdStr,
			String detail_mod, boolean initialBIObject,
			boolean initialBIObjectParameter) throws SourceBeanException,
			EMFUserError {
		
		List biObjParams = DAOFactory.getBIObjectParameterDAO()
				.loadBIObjectParametersById(obj.getId());
		obj.setBiObjectParameters(biObjParams);
		if (biObjPar == null) {
			if (selectedObjParIdStr == null || "".equals(selectedObjParIdStr)) {
				if (biObjParams == null || biObjParams.size() == 0) {
					biObjPar = DetBIObjModHelper.createNewBIObjectParameter(obj.getId());
					selectedObjParIdStr = "-1";
				} else {
					biObjPar = (BIObjectParameter) biObjParams.get(0);
					selectedObjParIdStr = biObjPar.getId().toString();
				}
			} else if ("-1".equals(selectedObjParIdStr)) {
				biObjPar = DetBIObjModHelper.createNewBIObjectParameter(obj.getId());
				selectedObjParIdStr = "-1";
			} else {
				int selectedObjParId = Integer.parseInt(selectedObjParIdStr);
				Iterator it = biObjParams.iterator();
				while (it.hasNext()) {
					biObjPar = (BIObjectParameter) it.next();
					if (biObjPar.getId().equals(new Integer(selectedObjParId)))
						break;
				}
			}
		}

		response.setAttribute("selected_obj_par_id", selectedObjParIdStr);
		response.setAttribute(NAME_ATTR_OBJECT, obj);
		response.setAttribute(NAME_ATTR_OBJECT_PAR, biObjPar);
		
		SpagoBITracer.debug(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule", "prepareBIObjectDetailPage", "XXXXXXXXXX " + detail_mod);
		
		response.setAttribute(ObjectsTreeConstants.MODALITY, detail_mod);
		
		if (initialBIObject) {
			BIObject objClone = DetBIObjModHelper.clone(obj);
			session.setAttribute("initial_BIObject", objClone);
		}

		if (initialBIObjectParameter) {
			BIObjectParameter biObjParClone = DetBIObjModHelper.clone(biObjPar);
			session.setAttribute("initial_BIObjectParameter", biObjParClone);
		}
		
	}
	
	
	/**
	 * Deletes a BI Object choosed by user. If the folder id is specified, it deletes only the instance 
	 * of the object in that folder. If the folder id is not specified: if the user is an administrator 
	 * the object is deleted from all the folders, else it is deleted from the folder on which the user 
	 * is a developer.
	 * 
	 * @param request	The request SourceBean
	 * @param mod	A request string used to differentiate delete operation
	 * @param response	The response SourceBean
	 * @throws EMFUserError	If an Exception occurs
	 * @throws SourceBeanException If a SourceBean Exception occurs
	 */
	private void delDetailObject(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		BIObject obj = null;
		try {
			String idObjStr = (String) request.getAttribute(ObjectsTreeConstants.OBJECT_ID);
			Integer idObj = new Integer(idObjStr);
			IBIObjectDAO objdao = DAOFactory.getBIObjectDAO();
			obj = objdao.loadBIObjectById(idObj);
			String idFunctStr = (String) request.getAttribute(ObjectsTreeConstants.FUNCT_ID);
			if (idFunctStr != null) {
				Integer idFunct = new Integer(idFunctStr);
				if (SpagoBIConstants.ADMIN_ACTOR.equals(actor)) {
					// deletes the document from the specified folder, no matter the permissions
					objdao.eraseBIObject(obj, idFunct);
				} else {
					// deletes the document from the specified folder if the profile is a developer for that folder
					if (ObjectsAccessVerifier.canDev(obj.getStateCode(), idFunct, profile)) {
						objdao.eraseBIObject(obj, idFunct);
					}
				}
			} else {
				if (SpagoBIConstants.ADMIN_ACTOR.equals(actor)) {
					if (initialPath != null && !initialPath.trim().equals("")) {
						// in case of local administrator, deletes the document in the folders where he can admin
						List funcsId = obj.getFunctionalities();
						for (Iterator it = funcsId.iterator(); it.hasNext(); ) {
							Integer idFunct = (Integer) it.next();
							LowFunctionality folder = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(idFunct, false);
							String folderPath = folder.getPath();
							if (folderPath.equalsIgnoreCase(initialPath) || folderPath.startsWith(initialPath + "/")) {
								objdao.eraseBIObject(obj, idFunct);
							}
						}
					} else {
						// deletes the document from all the folders, no matter the permissions
						objdao.eraseBIObject(obj, null);
					}
				} else {
					// deletes the document from all the folders on which the profile is a developer
					List funcsId = obj.getFunctionalities();
					for (Iterator it = funcsId.iterator(); it.hasNext(); ) {
						Integer idFunct = (Integer) it.next();
						if (ObjectsAccessVerifier.canDev(obj.getStateCode(), idFunct, profile)) {
							objdao.eraseBIObject(obj, idFunct);
						}
					}
				}
			}
		} catch (Exception ex) {
			SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","delDetailObject","Cannot erase object", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		response.setAttribute("loopback", "true");
		response.setAttribute(SpagoBIConstants.ACTOR, actor);
	}
	
	/**
	 * Instantiates a new <code>BIObject<code> object when a new BI object insertion 
	 * is required, in order to prepare the page for the insertion.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	private void newBIObject(SourceBean request, SourceBean response) throws EMFUserError {
		try {
			response.setAttribute(ObjectsTreeConstants.MODALITY, ObjectsTreeConstants.DETAIL_INS);
            BIObject obj = new BIObject();
            obj.setId(new Integer(0));
            obj.setEngine(null);
            obj.setDataSourceId(null);
            obj.setDescription("");
            obj.setLabel("");
            obj.setName("");
            obj.setEncrypt(new Integer(0));
            obj.setVisible(new Integer(1));
            obj.setRelName("");
            obj.setStateID(null);
            obj.setStateCode("");
            obj.setBiObjectTypeID(null);
            obj.setBiObjectTypeCode("");
            List functionalitites = new ArrayList();
            obj.setFunctionalities(functionalitites);
            response.setAttribute(NAME_ATTR_OBJECT, obj);
            response.setAttribute(SpagoBIConstants.ACTOR, actor);
            helper.fillResponse(initialPath);      
		} catch (Exception ex) {
			SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, "DetailBIObjectModule","newBIObject","Cannot prepare page for the insertion", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	public void eraseVersion(SourceBean request, SourceBean response) throws EMFUserError {
		// get object' id and name version
		String tempIdStr = (String)request.getAttribute(SpagoBIConstants.TEMPLATE_ID);
		String objIdStr = (String)request.getAttribute(ObjectsTreeConstants.OBJECT_ID);
		try {
			Integer objId = new Integer (objIdStr);
			Integer tempId = new Integer (tempIdStr);
			DAOFactory.getObjTemplateDAO().deleteBIObjectTemplate(tempId);
            // populate response
            BIObject obj = DAOFactory.getBIObjectDAO().loadBIObjectForDetail(objId);
			response.setAttribute(SpagoBIConstants.ACTOR, actor);
	        helper.fillResponse(initialPath);
	        prepareBIObjectDetailPage(response, obj, null, "", ObjectsTreeConstants.DETAIL_MOD, false, false);
		} catch (Exception e) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),
								"eraseVersion","Cannot erase version", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	/**
	 * Clean the SessionContainer from no more useful objects.
	 * @param request The request SourceBean
	 * @param response The response SourceBean
	 * @throws SourceBeanException
	 */
	private void exitFromDetail (SourceBean request, SourceBean response) throws SourceBeanException {
		session.delAttribute("initial_BIObject");
		session.delAttribute("initial_BIObjectParameter");
		session.delAttribute("modality");
		session.delAttribute("actor");
		response.setAttribute("loopback", "true");
		response.setAttribute(SpagoBIConstants.ACTOR, actor);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * Inserts/Modifies the detail of a BI Object according to the user request.
	 * When a BI Object is modified, the <code>modifyBIObject</code> method is
	 * called; when a new BI Object is added, the <code>insertBIObject</code>method
	 * is called. These two cases are differentiated by the <code>mod</code>
	 * String input value .
	 * 
	 * @param request
	 *            The request information contained in a SourceBean Object
	 * @param mod
	 *            A request string used to differentiate insert/modify
	 *            operations
	 * @param response
	 *            The response SourceBean
	 * @throws EMFUserError
	 *             If an exception occurs
	 * @throws SourceBeanException
	 *             If a SourceBean exception occurs
	 */
	private void modBIObject(SourceBean request, String mod, SourceBean response) throws EMFUserError, SourceBeanException {
		try {
			// build a biobject using data in request
			BIObject obj = helper.recoverBIObjectDetails(mod);
			// define variable that contains the id of the parameter selected
			String selectedObjParIdStr = null;
			selectedObjParIdStr = "-1";
			// make a validation of the request data
			ValidationCoordinator.validate("PAGE", "BIObjectValidation", this);			
			// if there are some validation errors into the errorHandler return without write into DB 
			if(!errorHandler.isOKByCategory(EMFErrorCategory.VALIDATION_ERROR)) {
				helper.fillResponse(initialPath);
				prepareBIObjectDetailPage(response, obj, null, selectedObjParIdStr, mod, false, false);
				return;
			}
			// put into response the actor
			response.setAttribute(SpagoBIConstants.ACTOR, actor);
			// build and ObjTemplate object using data into request
			ObjTemplate objTemp = helper.recoverBIObjTemplateDetails();
			// based on the modality do different tasks
			if(mod.equalsIgnoreCase(SpagoBIConstants.DETAIL_INS)) {
				// inserts into DB the new BIObject
				if(objTemp==null) {
					DAOFactory.getBIObjectDAO().insertBIObject(obj);
				} else {
					DAOFactory.getBIObjectDAO().insertBIObject(obj, objTemp);
				}
			} else if(mod.equalsIgnoreCase(SpagoBIConstants.DETAIL_MOD)) {
				
				BIObjectParameter biObjPar = null;
				Object selectedObjParIdObj = request.getAttribute("selected_obj_par_id");
				Object deleteBIObjectParameter = request.getAttribute("deleteBIObjectParameter");
				if (selectedObjParIdObj != null) {
					
					// it is requested to view another BIObjectParameter than the one visible
					int selectedObjParId = helper.findBIObjParId(selectedObjParIdObj);
					selectedObjParIdStr = new Integer (selectedObjParId).toString();
					String saveBIObjectParameter = (String) request.getAttribute("saveBIObjectParameter");
					if (saveBIObjectParameter != null && saveBIObjectParameter.equalsIgnoreCase("yes")) {
						// it is requested to save the visible BIObjectParameter
						ValidationCoordinator.validate("PAGE", "BIObjectParameterValidation", this);
						biObjPar = helper.recoverBIObjectParameterDetails(obj.getId());
						// If it's a new BIObjectParameter or if the Parameter was changed controls 
						// that the BIObjectParameter url name is not already in use
						urlNameControl(obj.getId(), biObjPar);
						helper.fillResponse(initialPath);
						verifyForDependencies(biObjPar);
						// if there are some validation errors into the errorHandler does not write into DB
						if(!errorHandler.isOKByCategory(EMFErrorCategory.VALIDATION_ERROR)) {
							helper.fillResponse(initialPath);
							prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), ObjectsTreeConstants.DETAIL_MOD, false, false);
							return;
						}
						IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
						if (biObjPar.getId().intValue() == -1) {
							// it is requested to insert a new BIObjectParameter
							objParDAO.insertBIObjectParameter(biObjPar);
						} else {
							// it is requested to modify a BIObjectParameter
							objParDAO.modifyBIObjectParameter(biObjPar);
						}
						prepareBIObjectDetailPage(response, obj, null, selectedObjParIdStr, ObjectsTreeConstants.DETAIL_MOD, false, true);
						return;
					} else {
						helper.fillResponse(initialPath);
						prepareBIObjectDetailPage(response, obj, null, selectedObjParIdStr, ObjectsTreeConstants.DETAIL_MOD, false, true);
		    			// exits without writing into DB
		    			return;
					}
					
				} else if (deleteBIObjectParameter != null) {	
					
						// it is requested to delete the visible BIObjectParameter
						int objParId = helper.findBIObjParId(deleteBIObjectParameter);
						Integer objParIdInt = new Integer(objParId);
						checkForDependancies(objParIdInt);
						helper.fillResponse(initialPath);
						// if there are some validation errors into the errorHandler does not write into DB
						if(!errorHandler.isOKByCategory(EMFErrorCategory.VALIDATION_ERROR)) {
							helper.fillResponse(initialPath);
							prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), ObjectsTreeConstants.DETAIL_MOD, false, false);
							return;
						}
						IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
						// deletes all the ObjParuse objects associated to this BIObjectParameter 
						List objParuses = objParuseDAO.loadObjParuses(new Integer(objParId));
						if (objParuses != null && objParuses.size() > 0) {
							Iterator it = objParuses.iterator();
							while (it.hasNext()) {
								ObjParuse objParuse = (ObjParuse) it.next();
								objParuseDAO.eraseObjParuse(objParuse);
							}
						}
						// then deletes the BIObjectParameter
						IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
						BIObjectParameter objPar = objParDAO.loadForDetailByObjParId(new Integer(objParId));
						objParDAO.eraseBIObjectParameter(objPar);
						selectedObjParIdStr = "";
						prepareBIObjectDetailPage(response, obj, null, selectedObjParIdStr, ObjectsTreeConstants.DETAIL_MOD, false, true);
						return;
					
				} else {
					
					
					// It is request to save the BIObject with also the visible BIObjectParameter
					biObjPar = helper.recoverBIObjectParameterDetails(obj.getId());
					// If a new BIParameter was visualized and no fields were inserted, the BIParameter is not validated and saved
					boolean biParameterToBeSaved = true;
					if (GenericValidator.isBlankOrNull(biObjPar.getLabel()) && biObjPar.getId().intValue() == -1 
						&& GenericValidator.isBlankOrNull(biObjPar.getParameterUrlName()) && biObjPar.getParID().intValue() == -1)
						biParameterToBeSaved = false;
					if (biParameterToBeSaved) {
						ValidationCoordinator.validate("PAGE", "BIObjectParameterValidation", this);
						// If it's a new BIObjectParameter or if the Parameter was changed controls 
						// that the BIObjectParameter url name is not already in use
						urlNameControl(obj.getId(), biObjPar);
					}
					ValidationCoordinator.validate("PAGE", "BIObjectValidation", this);
					verifyForDependencies(biObjPar);
					// if there are some validation errors into the errorHandler does not write into DB
					if(!errorHandler.isOKByCategory(EMFErrorCategory.VALIDATION_ERROR)) {
						helper.fillResponse(initialPath);
						prepareBIObjectDetailPage(response, obj, biObjPar, biObjPar.getId().toString(), ObjectsTreeConstants.DETAIL_MOD, false, false);
						return;
					}
					
					//if data source value is not specified, it gets the default data source associated at the engine
					if (obj.getDataSourceId() == null){
						Engine engine = obj.getEngine();
						Integer dsId = engine.getDataSourceId();
						obj.setDataSourceId(dsId);
					}
					
					// it is requested to modify the main values of the BIObject
					if(objTemp==null) {
						DAOFactory.getBIObjectDAO().modifyBIObject(obj);
					} else {
						DAOFactory.getBIObjectDAO().modifyBIObject(obj, objTemp);
					}
	    			// reloads the BIObject 
	    			obj = DAOFactory.getBIObjectDAO().loadBIObjectForDetail(obj.getId());
	    			// check if there's a parameter to save and in case save it
	    			if (biParameterToBeSaved) {
						IBIObjectParameterDAO objParDAO = DAOFactory.getBIObjectParameterDAO();
						if (biObjPar.getId().intValue() == -1) {
							// it is requested to insert a new BIObjectParameter
							objParDAO.insertBIObjectParameter(biObjPar);
							// reload the BIObjectParameter with the given url name
							biObjPar = reloadBIObjectParameter(obj.getId(), biObjPar.getParameterUrlName());
						} else {
							// it is requested to modify a BIObjectParameter
							objParDAO.modifyBIObjectParameter(biObjPar);
						}
						selectedObjParIdStr = biObjPar.getId().toString();
	    			} else selectedObjParIdStr = "-1";
				}
				
			}
			
			// reloads the BIObject with the correct Id 
			obj = DAOFactory.getBIObjectDAO().loadBIObjectForDetail(obj.getId());
			// based on the kind of back put different data into response
			Object saveAndGoBack = request.getAttribute("saveAndGoBack");
			if (saveAndGoBack != null) {
				// it is request to save the main BIObject details and to go back
				response.setAttribute("loopback", "true");
			} else {
				// it is requested to save and remain in the BIObject detail page
				response.setAttribute(ObjectsTreeConstants.OBJECT_ID, obj.getId().toString());
				response.setAttribute("selected_obj_par_id", selectedObjParIdStr);
				response.setAttribute("saveLoop", "true");
			}		

		} catch (EMFUserError error) {			
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),
					            "modBIObject","Cannot fill response container", error  );
			throw error;
		} catch (Exception ex) {			
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),
					            "modBIObject","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	
	
	
	
	
	
	
	
}
