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
package it.eng.spagobi.behaviouralmodel.lov.service;

import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.navigation.LightNavigationManager;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.lov.bo.ILovDetail;
import it.eng.spagobi.behaviouralmodel.lov.bo.LovDetailFactory;
import it.eng.spagobi.behaviouralmodel.lov.bo.LovToListService;
import it.eng.spagobi.behaviouralmodel.lov.bo.ModalitiesValue;
import it.eng.spagobi.behaviouralmodel.lov.dao.IModalitiesValueDAO;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.services.AbstractListLookupModule;
import it.eng.spagobi.commons.services.DelegatedBasicListService;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;

/**
 * Loads the predefined lookup list of values
 */
public class ListLookupModalityValuesModule extends AbstractListLookupModule {

    static private Logger logger = Logger.getLogger(ListLookupModalityValuesModule.class);

    /**
     * Class Constructor
     * 
     */
    public ListLookupModalityValuesModule() {
	super();
    }

    public void service(SourceBean request, SourceBean response) throws Exception {
	logger.debug("IN");
	DelegatedBasicListService.service(this, request, response);
    }

    /**
     * Gets the list
     * 
     * @param request
     *                The request SourceBean
     * @param response
     *                The response SourceBean
     * @return ListIFace
     */
    public ListIFace getList(SourceBean request, SourceBean response) throws Exception {
	logger.debug("IN");
	ListIFace list = null;
	HashMap paramsMap = null;
	list = getListFromLov(request, response);
	paramsMap = getParams(request);
	if (isCorrelated(request)) {
	    list = filterListForCorrelatedParam(request, list);
	    paramsMap.put("correlated_paruse_id", request.getAttribute("correlated_paruse_id"));
	    paramsMap.put("LOOKUP_PARAMETER_ID", request.getAttribute("LOOKUP_PARAMETER_ID"));
	}
	String executionId = (String) request.getAttribute("spagobi_execution_id");
	String flowId = (String) request.getAttribute("spagobi_flow_id");
	if (executionId != null && flowId != null) {
	    paramsMap.put("spagobi_execution_id", executionId);
	    paramsMap.put("spagobi_flow_id", flowId);
	}
	response.setAttribute("PARAMETERS_MAP", paramsMap);
	response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "LookupPublisher");
	logger.debug("OUT");
	return list;
    }

    private SessionContainer getPermanentSession(SourceBean request) {
	return getSession(request).getPermanentContainer();
    }

    private IEngUserProfile getUserProfile(SourceBean request) {
	return (IEngUserProfile) getPermanentSession(request).getAttribute(IEngUserProfile.ENG_USER_PROFILE);
    }

    private ModalitiesValue getModalityValue(SourceBean request) throws EMFUserError {
	Integer idModVal = Integer.valueOf((String) request.getAttribute("mod_val_id"));
	IModalitiesValueDAO aModalitiesValueDAO = DAOFactory.getModalitiesValueDAO();
	return aModalitiesValueDAO.loadModalitiesValueByID(idModVal);
    }

    private boolean isCorrelated(SourceBean request) {
	String correlatedParuseIdStr = (String) request.getAttribute("correlated_paruse_id");
	return (correlatedParuseIdStr != null && !correlatedParuseIdStr.equals(""));
    }

    private HashMap getParams(SourceBean request) {
	logger.debug("IN");
	HashMap paramsMap = new HashMap();
	String lookupParameterName = (String) request.getAttribute("LOOKUP_PARAMETER_NAME");
	paramsMap.put("LOOKUP_PARAMETER_NAME", lookupParameterName);
	paramsMap.put("mod_val_id", request.getAttribute("mod_val_id"));
	logger.debug("OUT");
	return paramsMap;
    }

    private HashMap getSelectCaptionParams(SourceBean request) {
	logger.debug("IN");
	HashMap selectCaptionParams = new HashMap();
	selectCaptionParams.putAll(getParams(request));
	selectCaptionParams.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	selectCaptionParams.put(SpagoBIConstants.MESSAGEDET, ObjectsTreeConstants.EXEC_PHASE_RETURN_FROM_LOOKUP);
	selectCaptionParams.put("PAGE", "ValidateExecuteBIObjectPage");
	logger.debug("OUT");
	return selectCaptionParams;
    }

    private HashMap getBackButtonParams(SourceBean request) {
	logger.debug("IN");
	HashMap backButtonParams = new HashMap();
	backButtonParams.putAll(getParams(request));
	backButtonParams.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	backButtonParams.put(SpagoBIConstants.MESSAGEDET, ObjectsTreeConstants.EXEC_PHASE_RETURN_FROM_LOOKUP);
	backButtonParams.put("PAGE", "ValidateExecuteBIObjectPage");
	backButtonParams.put("LOOKUP_VALUE", "");
	logger.debug("OUT");
	return backButtonParams;
    }

    private BIObjectParameter getBIParameter(SourceBean request) {
	logger.debug("IN");
	BIObject obj = (BIObject) getSession(request).getAttribute(ObjectsTreeConstants.SESSION_OBJ_ATTR);
	String parameterUrlName = (String) request.getAttribute("LOOKUP_PARAMETER_NAME");
	List biparams = obj.getBiObjectParameters();
	Iterator iterParams = biparams.iterator();
	while (iterParams.hasNext()) {
	    BIObjectParameter biParam = (BIObjectParameter) iterParams.next();
	    if (biParam.getParameterUrlName().equalsIgnoreCase(parameterUrlName))
		return biParam;
	}
	logger.debug("OUT");
	return null;
    }

    private ListIFace getListFromLov(SourceBean request, SourceBean response) throws Exception {
	logger.debug("IN");
	ListIFace list = null;
	// get user profile
	IEngUserProfile profile = getUserProfile(request);
	// get the lov provider detail object
	String lovProvider = getModalityValue(request).getLovProvider();
	ILovDetail lovDetail = LovDetailFactory.getLovFromXML(lovProvider);
	// get the lov result
	BIObjectParameter biParam = getBIParameter(request);
	String lovResult = biParam.getLovResult();
	if (lovResult == null) {
	    lovResult = lovDetail.getLovResult(profile);
	}
	// get the list of the lov
	LovToListService lovToListService = new LovToListService(lovDetail, profile);
	list = lovToListService.getLovAsListService();
	// put into response the list module configuration
	response.setAttribute(getLovModuleConfig(lovToListService, lovDetail, request));
	// filter the list
	String valuefilter = (String) request.getAttribute(SpagoBIConstants.VALUE_FILTER);
	if (valuefilter != null) {
	    String columnfilter = (String) request.getAttribute(SpagoBIConstants.COLUMN_FILTER);
	    String typeFilter = (String) request.getAttribute(SpagoBIConstants.TYPE_FILTER);
	    String typeValueFilter = (String) request.getAttribute(SpagoBIConstants.TYPE_VALUE_FILTER);
	    list = DelegatedBasicListService.filterList(list, valuefilter, typeValueFilter, columnfilter, typeFilter,
		    getResponseContainer().getErrorHandler());
	}
	logger.debug("OUT");
	return list;
    }

    private SourceBean getLovModuleConfig(LovToListService lovToListService, ILovDetail lovDetail, SourceBean request)
	    throws Exception {
	logger.debug("IN");
	SourceBean config = lovToListService.getListServiceBaseConfig(getModalityValue(request).getDescription());
	String valueColumn = lovDetail.getValueColumnName();
	String descriptionColumn = lovDetail.getDescriptionColumnName();
	SourceBean captionsSB = new SourceBean("CAPTIONS");
	SourceBean selectCaptionSB = createSelectCaption(getSelectCaptionParams(request), valueColumn,
		descriptionColumn);
	captionsSB.setAttribute(selectCaptionSB);
	config.setAttribute(captionsSB);
	SourceBean buttonsSB = new SourceBean("BUTTONS");
	SourceBean backButtonSB = createBackButton(getBackButtonParams(request));
	buttonsSB.setAttribute(backButtonSB);
	config.setAttribute(buttonsSB);
	logger.debug("OUT");
	return config;
    }

    /**
     * Creates a BACK_BUTTON SourceBean with the parameters passed at input
     * 
     * @param backButtonParams
     *                The HashMap containing the parameters names and values
     * @return The BACK_BUTTON SourceBean
     * @throws SourceBeanException
     */
    private SourceBean createBackButton(HashMap backButtonParams) throws SourceBeanException {
	logger.debug("IN");
	if (backButtonParams == null || backButtonParams.size() == 0)
	    return new SourceBean("BACK_BUTTON");
	String backButtonStr = "<BACK_BUTTON confirm=\"FALSE\" image=\"/img/back.png\" "
		+ "label=\"SBIListLookPage.backButton\">";
	Set keys = backButtonParams.keySet();
	Iterator it = keys.iterator();
	while (it.hasNext()) {
	    String key = it.next().toString();
	    String value = backButtonParams.get(key).toString();
	    backButtonStr += "	<PARAMETER name=\"" + key + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + value + "\" />";
	}
	backButtonStr += "</BACK_BUTTON>";
	SourceBean toReturn = SourceBean.fromXMLString(backButtonStr);
	logger.debug("OUT");
	return toReturn;
    }

    private SourceBean createSelectButton(HashMap backButtonParams) throws SourceBeanException {
	logger.debug("IN");
	if (backButtonParams == null || backButtonParams.size() == 0)
	    return new SourceBean("BACK_BUTTON");
	String backButtonStr = "<BACK_BUTTON confirm=\"FALSE\" name=\"saveback\" image=\"/img/button_ok.gif\" "
		+ "label=\"SBIListLookPage.backButton\"/>";

	SourceBean toReturn = SourceBean.fromXMLString(backButtonStr);
	logger.debug("OUT");
	return toReturn;
    }

    /**
     * Creates a SELECT_CAPTION SourceBean with the parameters passed at input
     * 
     * @param selectCaptionParams
     *                The HashMap containing the parameters names and values
     * @param valueColumn
     *                The relative variable to be set in the caption URL
     *                representing the lookup value
     * @return The SELECT_CAPTION SourceBean
     * @throws SourceBeanException
     */
    private SourceBean createSelectCaption(HashMap selectCaptionParams, String valueColumn, String descColumn)
	    throws SourceBeanException {
	logger.debug("IN");
	if (selectCaptionParams == null || selectCaptionParams.size() == 0)
	    return new SourceBean("SELECT_CAPTION");
	String selectCaptionStr = "<SELECT_CAPTION confirm=\"FALSE\" image=\"/img/button_ok.gif\" "
		+ " label=\"SBIListLookPage.selectButton\">";
	Set keys = selectCaptionParams.keySet();
	Iterator it = keys.iterator();
	while (it.hasNext()) {
	    String key = it.next().toString();
	    String value = selectCaptionParams.get(key).toString();
	    selectCaptionStr += "	<PARAMETER name=\"" + key + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + value
		    + "\" />";
	}
	selectCaptionStr += "	<PARAMETER name=\"LOOKUP_VALUE\" scope=\"LOCAL\" type=\"RELATIVE\" value=\""
		+ valueColumn + "\" />";
	selectCaptionStr += "	<PARAMETER name=\"LOOKUP_DESC\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"" + descColumn
		+ "\" />";
	selectCaptionStr += "</SELECT_CAPTION>";
	SourceBean toReturn = SourceBean.fromXMLString(selectCaptionStr);
	logger.debug("OUT");
	return toReturn;
    }
}
