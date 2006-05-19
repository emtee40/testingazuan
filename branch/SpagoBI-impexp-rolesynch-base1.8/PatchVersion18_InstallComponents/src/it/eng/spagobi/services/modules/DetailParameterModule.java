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

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.validation.coordinator.ValidationCoordinator;
import it.eng.spagobi.bo.Domain;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.bo.ParameterUse;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IParameterDAO;
import it.eng.spagobi.bo.dao.IParameterUseDAO;
import it.eng.spagobi.constants.AdmintoolsConstants;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.StringTokenizer;
import java.util.Vector;

import org.apache.commons.validator.GenericValidator;

/**
 * Implements a module which  handles all parameters management: has methods for parameters load 
 * detail, modify/insertion and deleting operations. The <code>service</code> method has  a 
 * switch for all these operations, differentiated the ones from the others by a <code>message</code> String.
 * 
 * @author sulis
 */
public class DetailParameterModule extends AbstractModule {
	
	private String modalita = "";

	EMFErrorHandler errorHandler = null;
	
	SessionContainer session = null;
	
	public void init(SourceBean config) {
	}

	/**
	 * Reads the operation asked by the user and calls the insertion, modify, detail and 
	 * deletion methods
	 * 
	 * @param request The Source Bean containing all request parameters
	 * @param response The Source Bean containing all response parameters
	 * @throws exception If an exception occurs
	 * 
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		String message = (String) request.getAttribute("MESSAGEDET");
		SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","service","begin of detail Parameter modify/visualization service with message =" +message);
		Object lovLookup =  request.getAttribute("loadLovLookup");
		
		RequestContainer reqCont = RequestContainer.getRequestContainer();
		session = reqCont.getSessionContainer();
		errorHandler = getErrorHandler();
		
		try {
			if (message == null) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule", "service", "The message parameter is null");
				throw userError;
			}
			if(lovLookup != null){
				lookupLoadHandler (request, message, response);
		    } else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_SELECT)) {
				String id = (String) request.getAttribute("id");
				getDetailParameter(id, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				modDetailParameter(request, AdmintoolsConstants.DETAIL_MOD, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_NEW)) {
				newDetailParameter(response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				modDetailParameter(request, AdmintoolsConstants.DETAIL_INS, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_DEL)) {
				delDetailParameter(request, AdmintoolsConstants.DETAIL_DEL, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.RETURN_FROM_LOOKUP)){
				lookupReturnHandler(request,response);	
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.RETURN_BACK_FROM_LOOKUP)){
				lookupReturnBackHandler(request,response);
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


	
	/**
	 * Gets the detail of a parameter choosed by the user from the 
	 * parameters list. It reaches the key from the request and asks to the DB all detail
	 * parameter information, by calling the method <code>loadForDetailByParameterID</code>.
	 *   
	 * @param key The choosed engine id key
	 * @param response The response Source Bean
	 * @throws EMFUserError If an exception occurs
	 */
	
	private void getDetailParameter(String key, SourceBean response) throws EMFUserError {
		try {
			this.modalita = AdmintoolsConstants.DETAIL_MOD;	
			Parameter parameter = DAOFactory.getParameterDAO().loadForDetailByParameterID(new Integer(key));
			prepareParameterDetailPage(response, parameter, null, "", modalita, true, true);
			response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","getDetailParameter","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	/**
	 * Fills the response SourceBean with the elements that will be displayed in the Parameter detail page: 
	 * the Parameter itself and the required ParameterUse.
	 * 
	 * @param response The response SourceBean to be filled
	 * @param parameter The Parameter to be displayed
	 * @param paruse The ParameterUse to be displayed: if it is null the selected_paruse_idStr will be considered.
	 * @param selected_paruse_idStr The id of the ParameterUse to be displayed.
	 * 			If it is blank or null the first ParameterUse will be diplayed but in case the Parameter 
	 * 			has no ParameterUse a new empty ParameterUse will be displayed.
	 * 			If it is "-1" a new empty ParameterUse will be displayed.
	 * @param initialParameter Boolean: if true the Parameter to be visualized is the initial Parameter and 
	 * 			a clone will be put in session.
	 * @param initialParameterUse Boolean: if true the ParameterUse to be visualized is the initial ParameterUse and 
	 * 			a clone will be put in session.
	 * @param detail_mod The modality
	 * @throws EMFUserError
	 * @throws SourceBeanException 
	 */
	private void prepareParameterDetailPage(SourceBean response,
			Parameter parameter, ParameterUse paruse,
			String selected_paruse_idStr, String modality, 
			boolean initialParameter, boolean initialParameterUse) throws EMFUserError,
			SourceBeanException {
		loadValuesDomain(response);
		List paruses = DAOFactory.getParameterUseDAO()
				.loadParametersUseByParId(parameter.getId());
		response.setAttribute("parusesList", paruses);
		if (paruse == null) {
			if (selected_paruse_idStr == null
					|| "".equals(selected_paruse_idStr)) {
				if (paruses == null || paruses.size() == 0) {
					paruse = createNewParameterUse(parameter.getId());
					selected_paruse_idStr = "-1";
				} else {
					paruse = (ParameterUse) paruses.get(0);
					selected_paruse_idStr = paruse.getUseID().toString();
				}
			} else if ("-1".equals(selected_paruse_idStr)) {
				paruse = createNewParameterUse(parameter.getId());
				selected_paruse_idStr = "-1";
			} else {
				int selected_paruse_id = Integer
						.parseInt(selected_paruse_idStr);
				Iterator it = paruses.iterator();
				while (it.hasNext()) {
					paruse = (ParameterUse) it.next();
					if (paruse.getUseID().equals(
							new Integer(selected_paruse_id)))
						break;
				}
			}
		}
		response.setAttribute("modality", modality);
		response.setAttribute("parametersObj", parameter);
		response.setAttribute("selected_paruse_id", selected_paruse_idStr);
		response.setAttribute("modalitiesObj", paruse);
		
		if (initialParameter) {
			Parameter parameterClone = clone(parameter);
			session.setAttribute("initial_Parameter", parameterClone);
		}

		if (initialParameterUse) {
			ParameterUse paruseClone = clone(paruse);
			session.setAttribute("initial_ParameterUse", paruseClone);
		}
		
	}

	private Parameter clone (Parameter parameter) {
		
		if (parameter == null) return null;
		
		Parameter parameterClone = new Parameter();
		parameterClone.setId(parameter.getId());
		parameterClone.setLabel(parameter.getLabel());
		parameterClone.setChecks(parameter.getChecks());
		parameterClone.setName(parameter.getName());
		parameterClone.setModality(parameter.getModality());
		parameterClone.setDescription(parameter.getDescription());
		parameterClone.setLength(parameter.getLength());
		parameterClone.setMask(parameter.getMask());
		parameterClone.setModalityValue(parameter.getModalityValue());
		parameterClone.setType(parameter.getType());
		parameterClone.setTypeId(parameter.getTypeId());
		
		return parameterClone;
	}
	
	private ParameterUse clone (ParameterUse paruse) {
		
		if (paruse == null) return null;
		
		ParameterUse paruseClone = new ParameterUse();
		paruseClone.setUseID(paruse.getUseID());
		paruseClone.setId(paruse.getId());
		paruseClone.setLabel(paruse.getLabel());
		paruseClone.setName(paruse.getName());
		paruseClone.setDescription(paruse.getDescription());
		paruseClone.setIdLov(paruse.getIdLov());
		
		List checks = paruse.getAssociatedChecks();
		List checksClone = new ArrayList();
		Iterator itChecks = checks.iterator();
		while (itChecks.hasNext()) checksClone.add(itChecks.next());
		paruseClone.setAssociatedChecks(checksClone);
		
		List roles = paruse.getAssociatedRoles();
		List rolesClone = new ArrayList();
		Iterator itRoles = roles.iterator();
		while (itRoles.hasNext()) rolesClone.add(itRoles.next());
		paruseClone.setAssociatedRoles(rolesClone);
		
		return paruseClone;
	}

	private ParameterUse createNewParameterUse(Integer parId) {
		ParameterUse paruse = new ParameterUse();
		paruse.setId(parId);
		paruse.setUseID(new Integer(-1));
		paruse.setIdLov(new Integer(-1));
		paruse.setName("");
		paruse.setDescription("");
		paruse.setLabel("");
	    List listRoles = new ArrayList();
	    paruse.setAssociatedRoles(listRoles);
	    List listChecks = new ArrayList();
	    paruse.setAssociatedChecks(listChecks);
		return paruse;
	}

	/**
	 * Inserts/Modifies the detail of a parameter according to the user request. 
	 * When a parameter is modified, the <code>modifyParameter</code> method is called; when a new
	 * parameter is added, the <code>insertParameter</code>method is called. These two cases are 
	 * differentiated by the <code>mod</code> String input value 
	 * 
	 * @param request The request information contained in a SourceBean Object
	 * @param mod A request string used to differentiate insert/modify operations
	 * @param response The response SourceBean 
	 * @throws EMFUserError If an exception occurs
	 * @throws SourceBeanException If a SourceBean exception occurs
	 */
	private void modDetailParameter(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		try {
			
			Parameter parameter = recoverParameterDetails(request, mod);
			String selectedParuseIdStr = null;
			if (mod.equalsIgnoreCase(ObjectsTreeConstants.DETAIL_MOD)) {
				String paruseIdStr = (String) request.getAttribute("useId");
				Integer paruseIdInt = new Integer (paruseIdStr);
				ParameterUse paruse = recoverParameterUseDetails(request, parameter.getId(), paruseIdInt);;
				Object selectedParuseIdObj = request
						.getAttribute("selected_paruse_id");
				Object deleteParameterUse = request.getAttribute("deleteParameterUse");
				
				if (selectedParuseIdObj != null) {
					// it is requested to view another ParameterUse than the one visible
					int selectedParuseId = findParuseId(selectedParuseIdObj);
					selectedParuseIdStr = new Integer (selectedParuseId).toString();
					String saveParameterUse = (String) request.getAttribute("saveParameterUse");
					if (saveParameterUse != null && saveParameterUse.equalsIgnoreCase("yes")) {
						// it is requested to save the visible ParameterUse
						validateFields("ParameterUseValidation", "PAGE");
						parameterUseLabelControl(paruse, mod);
			    		// if there are some errors, exits without writing into DB
			    		if(!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
			    			prepareParameterDetailPage(response, parameter, paruse, paruseIdStr, 
			    					ObjectsTreeConstants.DETAIL_MOD, false, false);
			    			response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
							return;
						}
						IParameterUseDAO paruseDAO = DAOFactory.getParameterUseDAO();
						if (paruseIdInt.intValue() == -1) {
							// it is requested to insert a new ParameterUse
							paruseDAO.insertParameterUse(paruse);
						} else {
							// it is requested to modify a ParameterUse
							paruseDAO.modifyParameterUse(paruse);
						}
						prepareParameterDetailPage(response, parameter, null, selectedParuseIdStr, 
								ObjectsTreeConstants.DETAIL_MOD, false, true);
						response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
						return;
					} else {
						prepareParameterDetailPage(response, parameter, null, selectedParuseIdStr, 
								ObjectsTreeConstants.DETAIL_MOD, false, true);
						response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
		    			return;
					}
					
				} else if (deleteParameterUse != null) {
					// it is requested to delete the visible ParameterUse
					int paruseId = findParuseId(deleteParameterUse);
					IParameterUseDAO paruseDAO = DAOFactory.getParameterUseDAO();
					paruse = paruseDAO.loadByUseID(new Integer(paruseId));
					paruseDAO.eraseParameterUse(paruse);
					selectedParuseIdStr = "";
					prepareParameterDetailPage(response, parameter, null, selectedParuseIdStr, 
							ObjectsTreeConstants.DETAIL_MOD, false, true);
					response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
					return;
					
				} else {
					// It is request to save the Parameter with also the visible ParameterUse
					// If a new ParameterUse was visualized and no fields were inserted, the ParameterUse is not validated and saved
					boolean paruseToBeSaved = true;
					if (GenericValidator.isBlankOrNull(paruse.getLabel()) 
							&& GenericValidator.isBlankOrNull(paruse.getName())
							&& paruse.getUseID().intValue() == -1
							&& paruse.getIdLov().intValue() == -1
							&& paruse.getAssociatedChecks().size() == 0
							&& paruse.getAssociatedRoles().size() == 0)
						paruseToBeSaved = false;
					if (paruseToBeSaved) {
						validateFields("ParameterUseValidation",
								"PAGE");
						parameterUseLabelControl(paruse, mod);
					}

					validateFields("ParameterValidation", "PAGE");
					parameterLabelControl(parameter, mod);
		    		// if there are some errors, exits without writing into DB
					if(!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
						prepareParameterDetailPage(response, parameter, paruse, paruseIdInt.toString(), 
								ObjectsTreeConstants.DETAIL_MOD, false, false);
						response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
						return;
					}
					// it is requested to modify the Parameter
					DAOFactory.getParameterDAO().modifyParameter(parameter);
	    			
	    			if (paruseToBeSaved) {
						IParameterUseDAO paruseDAO = DAOFactory.getParameterUseDAO();
						if (paruseIdInt.intValue() == -1) {
							// it is requested to insert a new ParameterUse
							paruseDAO.insertParameterUse(paruse);
							// reload the paruse with the given label
							paruse = reloadParuse(parameter.getId(), paruse.getLabel());
						} else {
							// it is requested to modify a ParameterUse
							paruseDAO.modifyParameterUse(paruse);
						}
						selectedParuseIdStr = paruse.getUseID().toString();
	    			} else selectedParuseIdStr = "-1";
				}

    		} else {
    			validateFields("ParameterValidation","PAGE");
    			parameterLabelControl(parameter, mod);
	    		// if there are some errors, exits without writing into DB
    			selectedParuseIdStr = "-1";
    			if(!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
					prepareParameterDetailPage(response, parameter, null, selectedParuseIdStr, 
							ObjectsTreeConstants.DETAIL_INS, false, false);
					response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
					return;
				}
    			// inserts into DB the new Parameter
    			DAOFactory.getParameterDAO().insertParameter(parameter);
    			// reload the Parameter with the correct id
    			parameter = reloadParameter(parameter.getLabel());
    		}
			
			Object saveAndGoBack = request.getAttribute("saveAndGoBack");
			if (saveAndGoBack != null) {
				// it is request to save the Parameter details and to go back
				exitFromDetail(request, response);
			} else {
				// it is requested to save and remain in the Parameter detail page
				prepareParameterDetailPage(response, parameter, null, selectedParuseIdStr, 
						ObjectsTreeConstants.DETAIL_MOD, true, true);
				response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
			}
            
		} catch (Exception ex) {			
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","modDetailParameter","Cannot fill response container", ex  );
			HashMap params = new HashMap();
			params.put(AdmintoolsConstants.PAGE, ListParametersModule.MODULE_PAGE);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1015, new Vector(), params);
		}
	}
	
	/**
	 * Reload a ParameterUse from its Parameter id and its label.
	 * 
	 * @param parIdInt The Parameter id
	 * @param label The ParameterUse label
	 * @return The reloaded ParameterUse
	 * @throws EMFInternalError 
	 */
	private ParameterUse reloadParuse (Integer parIdInt, String label) throws EMFInternalError {
		if (parIdInt == null || parIdInt.intValue() < 0 || label == null || label.trim().equals(""))
			throw new EMFInternalError(EMFErrorSeverity.ERROR, "Invalid input data for method relaodParuse in DetailParameterModule");
		ParameterUse paruse = null;
		try {
			IParameterUseDAO paruseDAO = DAOFactory.getParameterUseDAO();
			List paruses = paruseDAO.loadParametersUseByParId(parIdInt);
			Iterator it = paruses.iterator();
			while (it.hasNext()) {
				ParameterUse aParameterUse = (ParameterUse) it.next();
				if (aParameterUse.getLabel().equals(label)) {
					paruse = aParameterUse;
					break;
				}
			}
		} catch (EMFUserError e) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","relaodParuse","Cannot reload ParameterUse", e);
		}
		if (paruse == null) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","relaodParuse","ParameterUse with label '"+label+"' not found.");
			paruse = createNewParameterUse(parIdInt);
		}
		return paruse;
	}

	/**
	 * Reload a Parameter from its label.
	 * 
	 * @param label The Parameter label
	 * @return The reloaded Parameter
	 * @throws EMFInternalError 
	 */
	private Parameter reloadParameter (String label) throws EMFInternalError {
		if (label == null || label.trim().equals(""))
			throw new EMFInternalError(EMFErrorSeverity.ERROR, "Invalid input data for method relaodParameter in DetailParameterModule");
		Parameter parameter = null;
		try {
			IParameterDAO parareterDAO = DAOFactory.getParameterDAO();
			List parareters = parareterDAO.loadAllParameters();
			Iterator it = parareters.iterator();
			while (it.hasNext()) {
				Parameter aParameter = (Parameter) it.next();
				if (aParameter.getLabel().equals(label)) {
					parameter = aParameter;
					break;
				}
			}
		} catch (EMFUserError e) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","relaodParuse","Cannot reload ParameterUse", e);
		}
		if (parameter == null) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","relaodParuse","ParameterUse with label '"+label+"' not found.");
			parameter = createNewParameter();
		}
		return parameter;
	}
	
	private ParameterUse recoverParameterUseDetails(SourceBean request, Integer parIdInt, Integer paruseIdInt) throws NumberFormatException, EMFUserError {
		
		ParameterUse paruse = new ParameterUse();
		paruse.setUseID(paruseIdInt);
		paruse.setId(parIdInt);
			
		List inRequestChecksList = request.getAttributeAsList("paruseCheckId");
		List toLoadInParUseCheckList = new ArrayList();
		String idTmpStr = null;
		for (int i = 0; i < inRequestChecksList.size(); i++) {
			idTmpStr = (String) inRequestChecksList.get(i);
			toLoadInParUseCheckList.add(DAOFactory.getChecksDAO()
					.loadCheckByID(new Integer(idTmpStr)));
		}

		List inRequestRoleList = request.getAttributeAsList("paruseExtRoleId");
		List roles = new ArrayList();
		for (int i = 0; i < inRequestRoleList.size(); i++) {
			String idRoleStr = (String) inRequestRoleList.get(i);
			roles.add(DAOFactory.getRoleDAO().loadByID(new Integer(idRoleStr)));
		}

		String idLovStr = (String) request.getAttribute("paruseLovId");
		if (idLovStr == null || idLovStr.trim().equalsIgnoreCase("")) idLovStr = "-1";
		paruse.setIdLov(Integer.valueOf(idLovStr));
		String description = (String) request.getAttribute("paruseDescription");
		String name = (String) request.getAttribute("paruseName");
		String label = (String) request.getAttribute("paruseLabel");
		paruse.setName(name);
		paruse.setDescription(description);
		paruse.setLabel(label);
		if (idLovStr == null || idLovStr.trim().equals(""))
			paruse.setIdLov(Integer.valueOf("-1"));
		else
			paruse.setIdLov(Integer.valueOf(idLovStr));
		paruse.setAssociatedRoles(roles);
		paruse.setAssociatedChecks(toLoadInParUseCheckList);
		return paruse;
	}

	public boolean validateFields(String businessName, String businessType) throws Exception {
		
		RequestContainer requestContainer = getRequestContainer();
		ResponseContainer responseContainer = getResponseContainer();
		boolean validate = ValidationCoordinator.validate(businessType, businessName, this);
		return validate;
		
	}
	
	public int findParuseId (Object paruseIdObj) {
		String paruseIdStr = "";
		if (paruseIdObj instanceof String) {
			paruseIdStr = (String) paruseIdObj;
		} else if (paruseIdObj instanceof List) {
			List paruseIdList = (List) paruseIdObj;
			Iterator it = paruseIdList.iterator();
			while (it.hasNext()) {
				Object item = it.next();
				if (item instanceof SourceBean) continue;
				if (item instanceof String) paruseIdStr = (String) item;
			}
		}
		int paruseId = Integer.parseInt(paruseIdStr);
		return paruseId;
	}
	
	private Parameter recoverParameterDetails(SourceBean request, String mod) {
		
		String idStr = (String) request.getAttribute("id");
		Integer id = new Integer(idStr);
		String description = (String) request.getAttribute("description");
		String lengthStr = (String) request.getAttribute("length");
		Integer length = new Integer(lengthStr);
		String label = (String) request.getAttribute("label");
		String mask = (String) request.getAttribute("mask");
		String modality = (String) request.getAttribute("modality");
		String name = (String) request.getAttribute("name");

        Parameter parameter  = new Parameter();
        parameter.setId(id);
        parameter.setDescription(description);
		parameter.setLength(length);
		parameter.setLabel(label);
		if (modality != null) {
			StringTokenizer st;
			st = new StringTokenizer(modality, ",", false);
			String par_type_cd = st.nextToken();
			String par_type_id = st.nextToken();
			parameter.setType(par_type_cd);
			parameter.setTypeId(new Integer(par_type_id));
		}
		parameter.setMask(mask);
		parameter.setModality(modality);
		parameter.setName(name);
		return parameter;
	}

	/**
	 * Deletes a parameter choosed by user from the parameters list.
	 * 
	 * @param request	The request SourceBean
	 * @param mod	A request string used to differentiate delete operation
	 * @param response	The response SourceBean
	 * @throws EMFUserError	If an Exception occurs
	 * @throws SourceBeanException If a SourceBean Exception occurs
	 */
	
	private void delDetailParameter(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		try {
			IParameterDAO parDAO = DAOFactory.getParameterDAO();
			IParameterUseDAO parUseDAO = DAOFactory.getParameterUseDAO();
			String id = (String) request.getAttribute("id");
			//controls if the parameter has any use associated
			boolean hasUse = DAOFactory.getParameterUseDAO().hasParUseModes(id);
			if (hasUse){
					parUseDAO.eraseParameterUseByParId(Integer.valueOf(id));
					/*HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE, ListParametersModule.MODULE_PAGE);
					EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1016, new Vector(), params);
					getErrorHandler().addError(error);
					return; */
					}
			//end of control
			//controls if the parameter has any object associated
			boolean hasObject = DAOFactory.getBIObjectParameterDAO().hasObjParameters(id);
			if (hasObject){
				HashMap params = new HashMap();
				params.put(AdmintoolsConstants.PAGE, ListParametersModule.MODULE_PAGE);
				EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1017, new Vector(), params);
				errorHandler.addError(error);
				return;
			}
			
			Parameter parameter =  parDAO.loadForDetailByParameterID(new Integer(id)); 
			parDAO.eraseParameter(parameter);
			
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","delDetailParameter","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		response.setAttribute("loopback", "true");
	}
	
	/**
	 * Instantiates a new <code>Parameter<code> object when a new parameter insertion is required, in order
	 * to prepare the page for the insertion.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	
	private void newDetailParameter(SourceBean response) throws EMFUserError {
		try {
			this.modalita = AdmintoolsConstants.DETAIL_INS;
			response.setAttribute("modality", modalita);
            Parameter parameter = createNewParameter();
			List list = DAOFactory.getDomainDAO().loadListDomainsByType("PAR_TYPE");
			response.setAttribute ("listObj", list);
			if (list.size() > 0) {
				Domain domain = (Domain) list.get(0);
				parameter.setType(domain.getValueCd());
				parameter.setTypeId(domain.getValueId());
			}
			response.setAttribute("parametersObj", parameter);
			response.setAttribute(SpagoBIConstants.RESPONSE_COMPLETE, "true");
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","newDetailParameter","Cannot prepare page for the insertion", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	/**
	 * Create a new empty Parameter
	 * 
	 * @return the new Parameter
	 */
	private Parameter createNewParameter () {
		Parameter parameter = new Parameter();
		parameter.setId(new Integer(-1));
		parameter.setDescription("");
		parameter.setLength(new Integer(0));
		parameter.setLabel("");
		parameter.setType("");
		parameter.setMask("");
		parameter.setTypeId(new Integer(0));
		parameter.setName("");
		return parameter;
	}
	
	/**
	 * Loads all possible domain values which can be choosed for a parameter. Each of them
	 * is stored in a list of <code>Domain</code> objects put into response.
	 * When the isertion/modify parameters page is loaded, the user selects a domain value for the
	 * parameter by the Data Selection CD Check Button.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	private void loadValuesDomain(SourceBean response)  throws EMFUserError {
		  try {
			  List list = DAOFactory.getDomainDAO().loadListDomainsByType("PAR_TYPE");
			  response.setAttribute ("listObj", list);
		  }
		  catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailParameterModule","loadValuesDomain","Cannot prepare page for the insertion", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		  }
	}
	
	/**
	 * Controls if the name of the Parameter is already in use.
	 * 
	 * @param parameter The Parameter to check
	 * @param operation Defines if the operation is of insertion or modify
	 * @throws EMFUserError If any Exception occurred
	 */
	private void parameterLabelControl(Parameter parameter, String operation)
			throws EMFUserError {
		String labelToCheck = parameter.getLabel();
		List allparameters = DAOFactory.getParameterDAO().loadAllParameters();
		if (operation.equalsIgnoreCase("INSERT")) {
			Iterator i = allparameters.iterator();
			while (i.hasNext()) {
				Parameter aParameter = (Parameter) i.next();
				String label = aParameter.getLabel();
				if (label.equals(labelToCheck)) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE,
							ListParametersModule.MODULE_PAGE);
					EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1031,
							new Vector(), params);
					errorHandler.addError(error);
				}
			}
		} else {
			Integer currentId = parameter.getId();
			Iterator i = allparameters.iterator();
			while (i.hasNext()) {
				Parameter aParameter = (Parameter) i.next();
				String label = aParameter.getLabel();
				Integer id = aParameter.getId();
				if (label.equals(labelToCheck)
						&& (!id.equals(currentId))) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE,
							ListParametersModule.MODULE_PAGE);
					EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1031,
							new Vector(), params);
					errorHandler.addError(error);
				}
			}
		}
	}
	
	/**
	 * Controls if the name of the ParameterUse is already in use.
	 * 
	 * @param paruse The paruse to check
	 * @param operation Defines if the operation is of insertion or modify
	 * @throws EMFUserError If any Exception occurred
	 */
	private void parameterUseLabelControl (ParameterUse paruse, String operation) throws EMFUserError {

		Integer parId = paruse.getId();
		String labelToCheck = paruse.getLabel();
		List allParametersUse = DAOFactory.getParameterUseDAO().loadParametersUseByParId(parId);
		//cannot have two ParametersUse with the same label and the same par_id
		if (operation.equalsIgnoreCase("INSERT")){
			Iterator i = allParametersUse.iterator();
			while (i.hasNext()) {
				ParameterUse aParameterUse = (ParameterUse) i.next();
				String label = aParameterUse.getLabel();
				if (label.equals(labelToCheck)) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE, ListParametersModule.MODULE_PAGE);
					params.put(AdmintoolsConstants.ID_DOMAIN, parId);
					EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 1025, new Vector(), params);
					errorHandler.addError(error);
				}
			}
		} else {
			Integer currentUseId = paruse.getUseID();
			Iterator i = allParametersUse.iterator();
			while (i.hasNext()) {
				ParameterUse aParameterUse = (ParameterUse) i.next();
				String label = aParameterUse.getLabel();
				Integer useId = aParameterUse.getUseID();
			
				if (label.equals(labelToCheck) && (!useId.equals(currentUseId))) {
					HashMap params = new HashMap();
					params.put(AdmintoolsConstants.PAGE, ListParametersModule.MODULE_PAGE);
					params.put(AdmintoolsConstants.ID_DOMAIN, parId);
					EMFUserError error = new EMFUserError (EMFErrorSeverity.ERROR, 1025, new Vector(), params);
					errorHandler.addError(error);
				}
			}
		}
	}
	
	private void lookupLoadHandler(SourceBean request, String modality, SourceBean response) throws EMFUserError, SourceBeanException{
		
		RequestContainer requestContainer = this.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		Parameter parameter = recoverParameterDetails(request, modality);
		String paruseIdStr = (String)request.getAttribute("useId");
		ParameterUse paruse = recoverParameterUseDetails(request, parameter.getId(), new Integer(paruseIdStr));
		session.setAttribute("LookupParameter", parameter);
		session.setAttribute("LookupParuse", paruse);
		session.setAttribute("modality", modality);
		response.setAttribute("lookupLoopback", "true");
		
	}
	
	private void lookupReturnHandler (SourceBean request, SourceBean response) throws SourceBeanException, EMFUserError {
		RequestContainer requestContainer = this.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		Parameter parameter = (Parameter) session.getAttribute("LookupParameter");
		ParameterUse paruse = (ParameterUse) session.getAttribute("LookupParuse");
		String modality = (String) session.getAttribute("modality");
		String selectedLovId = (String) request.getAttribute("ID");
		paruse.setIdLov(Integer.valueOf(selectedLovId));
		prepareParameterDetailPage(response, parameter, paruse, paruse.getUseID().toString(), modality, false, false);		
		session.delAttribute("LookupParameter");
		session.delAttribute("LookupParUse");
		session.delAttribute("modality");
	}
	
	private void lookupReturnBackHandler (SourceBean request, SourceBean response) throws SourceBeanException, EMFUserError {
		RequestContainer requestContainer = this.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		Parameter parameter = (Parameter) session.getAttribute("LookupParameter");
		ParameterUse paruse = (ParameterUse) session.getAttribute("LookupParuse");
		String modality = (String) session.getAttribute("modality");
		prepareParameterDetailPage(response, parameter, paruse, paruse.getUseID().toString(), modality, false, false);
		session.delAttribute("LookupParameter");
		session.delAttribute("LookupParUse");
		session.delAttribute("modality");
	}
	
	/**
	 * Clean the SessionContainer from no more useful objects.
	 * 
	 * @param request The request SourceBean
	 * @param response The response SourceBean
	 * @throws SourceBeanException
	 */
	private void exitFromDetail (SourceBean request, SourceBean response) throws SourceBeanException {
		session.delAttribute("initial_Parameter");
		session.delAttribute("initial_ParameterUse");
		response.setAttribute("loopback", "true");
	}
}