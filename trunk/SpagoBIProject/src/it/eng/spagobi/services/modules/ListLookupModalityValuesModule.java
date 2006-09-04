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
import it.eng.spago.dbaccess.sql.DataRow;
import it.eng.spago.dispatching.module.list.basic.AbstractBasicListModule;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.navigation.LightNavigationManager;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spago.paginator.basic.PaginatorIFace;
import it.eng.spago.paginator.basic.impl.GenericList;
import it.eng.spago.paginator.basic.impl.GenericPaginator;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.bo.ObjParuse;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.bo.ScriptDetail;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IModalitiesValueDAO;
import it.eng.spagobi.bo.dao.IObjParuseDAO;
import it.eng.spagobi.bo.dao.IParameterDAO;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.services.commons.DelegatedBasicListService;
import it.eng.spagobi.utilities.GeneralUtilities;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.Vector;

/**
 * Loads the predefined lookup list of values 
 */
public class ListLookupModalityValuesModule extends AbstractBasicListModule {
		
	/**
	 * Class Constructor
	 *
	 */
	public ListLookupModalityValuesModule() {
		super();
	} 
	
	public void service(SourceBean request, SourceBean response) throws Exception {		
		
		System.out.println("LIST");
		super.service(request, response); 
	}
	
	/**
	 * Gets the list
	 * 
	 * @param request The request SourceBean
	 * @param response The response SourceBean
	 * @return ListIFace 
	 */
	public ListIFace getList(SourceBean request, SourceBean response) throws Exception {		
		ListIFace list = null;		
		
		HashMap paramsMap = null;	
		
		// get the input type from request (query || script)
		String inputType = getModalityValue(request).getITypeCd();
		
		// different input type call different delegated class to build the list 
		if (inputType.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_QUERY_CODE)) {			
			list = getListFromQuery(request, response);
			paramsMap = getParams(request);
			String correlatedParuseIdStr = (String) request.getAttribute("correlated_paruse_id");
			if (correlatedParuseIdStr != null && !correlatedParuseIdStr.equals("")) {
				paramsMap.put("correlated_paruse_id", request.getAttribute("correlated_paruse_id"));
				paramsMap.put("LOOKUP_PARAMETER_ID", request.getAttribute("LOOKUP_PARAMETER_ID"));	
			}		
		} else if(inputType.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_SCRIPT_CODE)) {			
			list = getListFromScript(request, response);
			paramsMap = getParams(request);
		}
		
		response.setAttribute("PARAMETERS_MAP", paramsMap);		
		response.setAttribute(SpagoBIConstants.PUBLISHER_NAME , "LookupPublisher");
		
		return list;		
	}
	
	private SessionContainer getSession(SourceBean request) {
		RequestContainer reqCont = getRequestContainer();
		return reqCont.getSessionContainer();		
	}
	
	private SessionContainer getPermanentSession(SourceBean request) {
		return getSession(request).getPermanentContainer();
	}
	
	private IEngUserProfile getUserProfile(SourceBean request) {
		 return (IEngUserProfile) getPermanentSession(request).getAttribute(IEngUserProfile.ENG_USER_PROFILE);		
	}
	
	private ModalitiesValue getModalityValue(SourceBean request) throws EMFUserError {
		Integer idModVal = Integer.valueOf((String)request.getAttribute("mod_val_id"));
		IModalitiesValueDAO aModalitiesValueDAO = DAOFactory.getModalitiesValueDAO(); 
		return aModalitiesValueDAO.loadModalitiesValueByID(idModVal);
	}
	
	private boolean isCorrelated(SourceBean request) {
		String correlatedParuseIdStr = (String) request.getAttribute("correlated_paruse_id");
		return (correlatedParuseIdStr != null && !correlatedParuseIdStr.equals(""));
	}

	private HashMap getParams(SourceBean request) {
		HashMap paramsMap = new HashMap();
		String lookupParameterName = (String) request.getAttribute("LOOKUP_PARAMETER_NAME");
		String actor = (String) request.getAttribute(SpagoBIConstants.ACTOR);
		paramsMap.put("LOOKUP_PARAMETER_NAME", lookupParameterName);
		paramsMap.put(SpagoBIConstants.ACTOR, actor);
		paramsMap.put("mod_val_id", request.getAttribute("mod_val_id"));
		return paramsMap;
	}
	
	private HashMap getSelectCaptionParams(SourceBean request) {
		HashMap selectCaptionParams = new HashMap();
		selectCaptionParams.putAll(getParams(request));
		selectCaptionParams.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
		selectCaptionParams.put(SpagoBIConstants.MESSAGEDET, ObjectsTreeConstants.EXEC_PHASE_RETURN_FROM_LOOKUP);
		selectCaptionParams.put("PAGE", "ValidateExecuteBIObjectPage");
		return selectCaptionParams;
	}
	
	private HashMap getBackButtonParams(SourceBean request) {
		HashMap backButtonParams = new HashMap();
		backButtonParams.putAll(getParams(request));
		backButtonParams.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
		backButtonParams.put(SpagoBIConstants.MESSAGEDET, ObjectsTreeConstants.EXEC_PHASE_RETURN_FROM_LOOKUP);
		backButtonParams.put("PAGE", "ValidateExecuteBIObjectPage");
		backButtonParams.put("LOOKUP_VALUE", "");
		return backButtonParams;
	}
	
	private ListIFace getListFromScript(SourceBean request, SourceBean response) throws Exception {
		ListIFace list = null;
		
		IEngUserProfile profile = (IEngUserProfile)getPermanentSession(request).getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		String lov = getModalityValue(request).getLovProvider();
		ScriptDetail scriptDet = ScriptDetail.fromXML(lov);
		String script = scriptDet.getScript();
		Binding bind = GeneralUtilities.fillBinding(profile);
		String result = GeneralUtilities.testScript(script, bind);
		SourceBean rowsSourceBean = null;
		try{
			rowsSourceBean = SourceBean.fromXMLString(result);
		} catch(Exception e) {
			SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, 
								"ListLookupModalityValuesModule", 
								"getList", "Error during parsing of the script result",e);
		}
		
		SourceBean visibleColumnsSB = (SourceBean) rowsSourceBean.getAttribute("VISIBLE-COLUMNS");
		String visibleColumns = visibleColumnsSB.getCharacters();
		Vector columns = findVisibleColumns(visibleColumns);
		
		SourceBean valueColumnSB = (SourceBean) rowsSourceBean.getAttribute("VALUE-COLUMN");
		String valueColumn = valueColumnSB.getCharacters().trim();
		
		String moduleConfigStr = "";
		moduleConfigStr += "<CONFIG rows=\"10\" title=\"" + getModalityValue(request).getDescription() + "\">";
		moduleConfigStr += "	<QUERIES/>";
		moduleConfigStr += "</CONFIG>";
		SourceBean moduleConfig = SourceBean.fromXMLString(moduleConfigStr);
		
		SourceBean columnsSB = createColumnsSB(columns);
		moduleConfig.setAttribute(columnsSB);

		SourceBean captionsSB = new SourceBean("CAPTIONS");
		SourceBean selectCaptionSB = createSelectCaption(getSelectCaptionParams(request), valueColumn);
		captionsSB.setAttribute(selectCaptionSB);
		moduleConfig.setAttribute(captionsSB);
		
		SourceBean buttonsSB = new SourceBean("BUTTONS");
		SourceBean backButtonSB = createBackButton(getBackButtonParams(request));
		buttonsSB.setAttribute(backButtonSB);
		moduleConfig.setAttribute(buttonsSB);

		response.setAttribute(moduleConfig);
		
    	PaginatorIFace paginator = new GenericPaginator();
		List rowsVector = null;
		if (rowsSourceBean != null)
			rowsVector = rowsSourceBean.getAttributeAsList(DataRow.ROW_TAG);

		if (rowsSourceBean != null) {
			for (int i = 0; i < rowsVector.size(); i++)
				paginator.addRow(rowsVector.get(i));
		}
		list = new GenericList();
		list.setPaginator(paginator);
		
		// filter the list 
		String valuefilter = (String) request.getAttribute(SpagoBIConstants.VALUE_FILTER);
		if (valuefilter != null) {
			String columnfilter = (String) request
					.getAttribute(SpagoBIConstants.COLUMN_FILTER);
			String typeFilter = (String) request
					.getAttribute(SpagoBIConstants.TYPE_FILTER);
			String typeValueFilter = (String) request
					.getAttribute(SpagoBIConstants.TYPE_VALUE_FILTER);
			list = DelegatedBasicListService.filterList(list, valuefilter, typeValueFilter, 
					columnfilter, typeFilter, getResponseContainer().getErrorHandler());
		}		
		
		return list;
	}
	
		
	private SourceBean getQueryModuleConfig(SourceBean request) throws Exception {
		SourceBean moduleConfig = null;
		
		String queryDetXML = getModalityValue(request).getLovProvider();
		SourceBean queryXML = SourceBean.fromXMLString(queryDetXML);
		String visibleColumns = ((SourceBean) queryXML.getAttribute("VISIBLE-COLUMNS")).getCharacters();
		String valueColumn = ((SourceBean) queryXML.getAttribute("VALUE-COLUMN")).getCharacters();
		String pool = ((SourceBean) queryXML.getAttribute("CONNECTION")).getCharacters();
		String statement = ((SourceBean) queryXML.getAttribute("STMT")).getCharacters();
		
		int profileAttributeStartIndex = statement.indexOf("${");
		if (profileAttributeStartIndex != -1) {
			HashMap profileattrs = (HashMap) getUserProfile(request).getUserAttribute("PROFILE_ATTRIBUTES");
			statement = GeneralUtilities.substituteProfileAttributesInQuery(statement, profileattrs, profileAttributeStartIndex);
		}
		
		Vector columns = findVisibleColumns(visibleColumns);
		
		String moduleConfigStr = "";
		moduleConfigStr += "<CONFIG pool=\"" + pool + "\" rows=\"10\" title=\"" + getModalityValue(request).getDescription() + "\">";
		moduleConfigStr += "	<QUERIES>";
		moduleConfigStr += "		<SELECT_QUERY statement=\"" + statement + "\" />";
		moduleConfigStr += "	</QUERIES>";
		moduleConfigStr += "</CONFIG>";
		moduleConfig = SourceBean.fromXMLString(moduleConfigStr);
		
		SourceBean columnsSB = createColumnsSB(columns);
		moduleConfig.setAttribute(columnsSB);

		SourceBean captionsSB = new SourceBean("CAPTIONS");
		SourceBean selectCaptionSB = createSelectCaption(getSelectCaptionParams(request), valueColumn);
		captionsSB.setAttribute(selectCaptionSB);
		moduleConfig.setAttribute(captionsSB);
		
		SourceBean buttonsSB = new SourceBean("BUTTONS");
		SourceBean backButtonSB = createBackButton(getBackButtonParams(request));
		buttonsSB.setAttribute(backButtonSB);
		moduleConfig.setAttribute(buttonsSB);
		
		return moduleConfig;
	}
	
	private ListIFace filterListForCorrelatedParam(SourceBean request, ListIFace list) throws Exception {
		String objParIdStr = (String) request.getAttribute("LOOKUP_PARAMETER_ID");
		Integer objParId = Integer.valueOf(objParIdStr);
		Integer correlatedParuseId = Integer.valueOf((String) request.getAttribute("correlated_paruse_id"));
		IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
		ObjParuse objParuse = objParuseDAO.loadObjParuse(objParId, correlatedParuseId);
		Integer objParFatherId = objParuse.getObjParFatherId();
		// get object from the session
		BIObject obj = (BIObject) getSession(request).getAttribute(ObjectsTreeConstants.SESSION_OBJ_ATTR);
        // find the parameter for the correlation
		List biparams = obj.getBiObjectParameters();
		BIObjectParameter objParFather = null;
        Iterator iterParams = biparams.iterator();
        while (iterParams.hasNext()) {
        	BIObjectParameter aBIObjectParameter = (BIObjectParameter) iterParams.next();
        	if (aBIObjectParameter.getId().equals(objParFatherId)) {
        		objParFather = aBIObjectParameter;
        		break;
        	}
        }
        IParameterDAO parameterDAO = DAOFactory.getParameterDAO();
        Parameter parameter = parameterDAO.loadForDetailByParameterID(objParFather.getParID());
        String valueTypeFilter = parameter.getType();
        
		String valueFilter = "";
		List valuesFilter = objParFather.getParameterValues();
		if (valuesFilter != null && valuesFilter.size() == 1) {
			valueFilter = valuesFilter.get(0).toString();
		}
		
		return DelegatedBasicListService.filterList(list, valueFilter, valueTypeFilter, 
				objParuse.getFilterColumn(), objParuse.getFilterOperation(), 
				getResponseContainer().getErrorHandler());
	}
	
	private ListIFace getListFromQuery (SourceBean request, SourceBean response) throws Exception {
		ListIFace list = null;
		
		response.setAttribute(getQueryModuleConfig(request));		
		list = DelegatedBasicListService.getList(this, request, response);
				
		// if the parameter is correlated filter out the list properly
		if (isCorrelated(request)) {
			list = filterListForCorrelatedParam(request, list);				
		}  
		
		return list;
	}
	
	
	/**
	 * Finds the names of the visible columns with the StringTokenizer from the String at input.
	 * 
	 * @param visibleColumns The String at input to be tokenized
	 * @return A Vector containing the names of the visible columns
	 */
	private Vector findVisibleColumns(String visibleColumns) {
		if (visibleColumns == null || visibleColumns.trim().equals("")) return new Vector ();
		StringTokenizer strToken = new StringTokenizer(visibleColumns, ",");
		Vector columns = new Vector();
		while (strToken.hasMoreTokens()) {
			String val = strToken.nextToken().trim();
			columns.add(val);
		}
		return columns;
	}


	/**
	 * Creates a BACK_BUTTON SourceBean with the parameters passed at input
	 * 
	 * @param backButtonParams The HashMap containing the parameters names and values
	 * @return The BACK_BUTTON SourceBean
	 * @throws SourceBeanException
	 */
	private SourceBean createBackButton(HashMap backButtonParams) throws SourceBeanException {
		if (backButtonParams == null || backButtonParams.size() == 0) return new SourceBean("BACK_BUTTON");
		String backButtonStr = "<BACK_BUTTON confirm=\"FALSE\" image=\"/img/back.png\" " +
				"label=\"SBIListLookPage.backButton\">";
		Set keys = backButtonParams.keySet();
		Iterator it = keys.iterator();
		while (it.hasNext()) {
			String key = it.next().toString();
			String value = backButtonParams.get(key).toString();
			backButtonStr += "	<PARAMETER name=\"" + key + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + value + "\" />";
		}
		backButtonStr += "</BACK_BUTTON>";
		SourceBean toReturn = SourceBean.fromXMLString(backButtonStr);
		return toReturn;
	}

	/**
	 * Creates a SELECT_CAPTION SourceBean with the parameters passed at input
	 * 
	 * @param selectCaptionParams The HashMap containing the parameters names and values
	 * @param valueColumn The relative variable to be set in the caption URL representing the lookup value
	 * @return The SELECT_CAPTION SourceBean
	 * @throws SourceBeanException
	 */
	private SourceBean createSelectCaption(HashMap selectCaptionParams, String valueColumn) throws SourceBeanException {
		if (selectCaptionParams == null || selectCaptionParams.size() == 0) return new SourceBean("SELECT_CAPTION");
		String selectCaptionStr = "<SELECT_CAPTION confirm=\"FALSE\" image=\"/img/button_ok.gif\" " +
				" label=\"SBIListLookPage.selectButton\">";
		Set keys = selectCaptionParams.keySet();
		Iterator it = keys.iterator();
		while (it.hasNext()) {
			String key = it.next().toString();
			String value = selectCaptionParams.get(key).toString();
			selectCaptionStr += "	<PARAMETER name=\"" + key + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + value + "\" />";
		}
		selectCaptionStr += "	<PARAMETER name=\"LOOKUP_VALUE\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"" + valueColumn + "\" />";
		selectCaptionStr += "</SELECT_CAPTION>";
		SourceBean toReturn = SourceBean.fromXMLString(selectCaptionStr);
		return toReturn;
	}
	
	/**
	 * Creates a COLUMNS SourceBean with all the columns in the Vector passed at input
	 * 
	 * @param columns The Vector containing the columns to be visualized
	 * @return The COLUMNS SourceBean 
	 * @throws SourceBeanException
	 */
	private SourceBean createColumnsSB(Vector columns) throws SourceBeanException {
		if (columns == null || columns.size() == 0) return new SourceBean("COLUMNS");
		String columnsStr = "<COLUMNS>";
		for (int i = 0; i < columns.size(); i++) {
			columnsStr += "	<COLUMN name=\"" + columns.get(i).toString() + "\" />";
		}
		columnsStr += "</COLUMNS>";
		SourceBean columnsSB = SourceBean.fromXMLString(columnsStr);
		return columnsSB;
	}
	
} 

