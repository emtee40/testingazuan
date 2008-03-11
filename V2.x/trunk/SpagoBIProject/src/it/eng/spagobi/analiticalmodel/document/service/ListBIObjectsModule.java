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
import it.eng.spago.dispatching.module.list.basic.AbstractBasicListModule;
import it.eng.spago.navigation.LightNavigationManager;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spago.paginator.basic.PaginatorIFace;
import it.eng.spago.paginator.basic.impl.GenericList;
import it.eng.spago.paginator.basic.impl.GenericPaginator;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.service.TreeObjectsModule;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.services.DelegatedBasicListService;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.commons.utilities.ObjectsAccessVerifier;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;

public class ListBIObjectsModule extends AbstractBasicListModule {
	private static transient Logger logger = Logger.getLogger(ListBIObjectsModule.class);
	protected IEngUserProfile profile = null; 
	protected String initialPath = null;
	
	public ListIFace getList(SourceBean request, SourceBean response) throws Exception {
		
		RequestContainer requestContainer = this.getRequestContainer();	
		SessionContainer sessionContainer = requestContainer.getSessionContainer();
		SessionContainer permanentSession = sessionContainer.getPermanentContainer();
		profile = (IEngUserProfile)permanentSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
        initialPath = (String) request.getAttribute(TreeObjectsModule.PATH_SUBTREE);
        
		String currentFieldOrder = (request.getAttribute("FIELD_ORDER") == null || ((String)request.getAttribute("FIELD_ORDER")).equals(""))?"":(String)request.getAttribute("FIELD_ORDER");
		if (currentFieldOrder.equals("")){
			currentFieldOrder = "DESCR";
			response.delAttribute("FIELD_ORDER");
			response.setAttribute("FIELD_ORDER", currentFieldOrder);
		}
		response.delAttribute("PREC_FIELD_ORDER");
		response.setAttribute("PREC_FIELD_ORDER", currentFieldOrder);

		String currentTypOrder = (request.getAttribute("TYPE_ORDER") == null || ((String)request.getAttribute("TYPE_ORDER")).equals(""))?"":(String)request.getAttribute("TYPE_ORDER");		
		if (currentTypOrder.equals("")){
			currentTypOrder = " ASC";
			response.delAttribute("TYPE_ORDER");
			response.setAttribute("TYPE_ORDER",currentTypOrder);			
		}
		response.delAttribute("PREC_TYPE_ORDER");		
		response.setAttribute("PREC_TYPE_ORDER", currentTypOrder);

		//special cases for relations to others objects
        if (currentFieldOrder.equalsIgnoreCase("ENGINE")) 
        	currentFieldOrder = "sbiEngines.label " + currentTypOrder.toLowerCase();
        else  
        	currentFieldOrder = currentFieldOrder.toLowerCase() + currentTypOrder.toLowerCase();

		SourceBean moduleConfig = makeListConfiguration(profile);
		response.setAttribute(moduleConfig);
		
		PaginatorIFace paginator = new GenericPaginator();		
		IBIObjectDAO objDAO = DAOFactory.getBIObjectDAO();
		List objectsList = null;
		if (initialPath != null && !initialPath.trim().equals("")) {
			objectsList = objDAO.loadAllBIObjectsFromInitialPath(initialPath, currentFieldOrder);
		} else {
			objectsList = objDAO.loadAllBIObjects(currentFieldOrder);
		}
		
		for (Iterator it = objectsList.iterator(); it.hasNext(); ) {
			BIObject obj = (BIObject) it.next();
			SourceBean rowSB = makeListRow(profile, obj);
			if (rowSB != null) paginator.addRow(rowSB);
		}
		ListIFace list = new GenericList();
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
		
		HashMap parametersMap = new HashMap();
		parametersMap.put(SpagoBIConstants.OBJECTS_VIEW, SpagoBIConstants.VIEW_OBJECTS_AS_LIST);
		response.setAttribute("PARAMETERS_MAP", parametersMap);
		
		return list;
	}
		
	/**
	 * 
	 * @param profile
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	private SourceBean makeListRow(IEngUserProfile profile, BIObject obj) throws Exception {
		String rowSBStr = "<ROW ";
		
		Integer visible = obj.getVisible();
		String state = obj.getStateCode();
		List functionalities = obj.getFunctionalities();
		int visibleInstances = 0;
		boolean canAddIstances = true;
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN)){
				if (initialPath != null && !initialPath.trim().equals("")) {
					// in case of local administrator, he can admin only a part of the instances of the document
					for (Iterator funcIt = functionalities.iterator(); funcIt.hasNext(); ) {
						Integer funcId = (Integer) funcIt.next();
						LowFunctionality folder = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(funcId, false);
						String folderPath = folder.getPath();
						if (folderPath.equalsIgnoreCase(initialPath) || folderPath.startsWith(initialPath + "/")) {
							visibleInstances++;
						}
					}
				} else {
					// in case of global administrator, he can admin all the instances of the document
					visibleInstances = functionalities.size();
					canAddIstances = false;
				}	
				
				boolean canExec = false;
				for (Iterator funcIt = functionalities.iterator(); funcIt.hasNext(); ) {
					Integer funcId = (Integer) funcIt.next();
					if (ObjectsAccessVerifier.canExec(obj.getStateCode(), funcId, profile)) {
						canExec = true;
						break;
					}
				}
				rowSBStr += "		canExec=\"" + canExec + "\"";
		}
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
			for (Iterator funcIt = functionalities.iterator(); funcIt.hasNext(); ) {
				Integer funcId = (Integer) funcIt.next();
				if ((ObjectsAccessVerifier.canDev(obj.getStateCode(), funcId, profile)
						|| ObjectsAccessVerifier.canExec(obj.getStateCode(), funcId, profile)) && canAddIstances) {
					visibleInstances++;
				}
			}
			// at this point the document is in DEV or REL state and there is one or more visible instances
			boolean canDev = true;
			if (obj.getStateCode().equalsIgnoreCase("REL")) canDev = false;
			
			if ((!profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN) &&
				 !profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_USER) &&
				 !profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_TEST))){
				if (!"DEV".equalsIgnoreCase(state)) {
					// the document aren't in development state are excluded
					return null;
				}
			}
			rowSBStr += "		canDev=\"" + canDev + "\"";
		}

		if ((profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_USER) ||
		    profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_TEST)) &&
		    (!profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN) || !profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV))){

			if (visible != null && visible.intValue() == 0) {
				// the document is not visible
				return null;
			}
			
			for (Iterator funcIt = functionalities.iterator(); funcIt.hasNext(); ) {
				Integer funcId = (Integer) funcIt.next();
				if ((ObjectsAccessVerifier.canTest(obj.getStateCode(), funcId, profile) 
						|| ObjectsAccessVerifier.canExec(obj.getStateCode(), funcId, profile)) && canAddIstances) {
					visibleInstances++;
				}
			}

		}
		if (visibleInstances == 0) return null;
		
		rowSBStr += "		OBJECT_ID=\"" + obj.getId() + "\"";
		rowSBStr += "		LABEL=\"" + obj.getLabel() + "\"";
		rowSBStr += "		NAME=\"" + obj.getName() + "\"";
		rowSBStr += "		DESCR=\"" + (obj.getDescription() != null ? obj.getDescription() : "") + "\"";
		rowSBStr += "		ENGINE=\"" + obj.getEngine().getName() + "\"";
		rowSBStr += "		STATE=\"" + obj.getStateCode() + "\"";
		rowSBStr += "		INSTANCES=\"" + visibleInstances + "\"";
		rowSBStr += " 		/>";
		
		SourceBean rowSB = SourceBean.fromXMLString(rowSBStr);
		return rowSB;
	}

	private SourceBean makeListConfiguration(IEngUserProfile profile) throws Exception {
		String moduleConfigStr = "";
		moduleConfigStr += "<CONFIG title=\"SBISet.objects.titleList\">";
		moduleConfigStr += "	<QUERIES/>";
		moduleConfigStr += "	<COLUMNS>";
		moduleConfigStr += "		<COLUMN label=\"ID\" name=\"OBJECT_ID\" hidden=\"true\" />";
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN)){
			moduleConfigStr += "		<COLUMN label=\"canExec\" name=\"canExec\" hidden=\"true\" />";
		}
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
			moduleConfigStr += "		<COLUMN label=\"canDev\" name=\"canDev\" hidden=\"true\" />";
		}
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.columnLabel\" name=\"LABEL\" />";
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.columnName\" name=\"NAME\" />";
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.columnDescr\" name=\"DESCR\" />";
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.columnEngine\" name=\"ENGINE\" />";
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.columnState\" name=\"STATE\" />";
		moduleConfigStr += "		<COLUMN label=\"SBISet.objects.instancesNumber\" name=\"INSTANCES\" horizontal-align=\"center\"/>";
		moduleConfigStr += "	</COLUMNS>";
		moduleConfigStr += "	<CAPTIONS>";
		moduleConfigStr += "	<EXEC_CAPTION  confirm=\"FALSE\" image=\"/img/execObject.gif\" label=\"SBISet.objects.captionExecute\">" +
		   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.PAGE + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ExecuteBIObjectModule.MODULE_PAGE + "\"/> " +
		   				   "		<PARAMETER name=\"" + SpagoBIConstants.MESSAGEDET + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ObjectsTreeConstants.EXEC_PHASE_CREATE_PAGE + "\"/> " +
		   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.OBJECT_ID + "\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"OBJECT_ID\"/> " +
		   				   "	</EXEC_CAPTION>";
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_METADATA_MANAGEMENT)){
			moduleConfigStr += "	<METADATA_CAPTION popup=\"TRUE\" popupH=\"300\" popupW=\"600\" confirm=\"FALSE\" image=\"/img/editTemplate.jpg\" label=\"SBISet.objects.captionMetadata\">" +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.PAGE + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + MetadataBIObjectModule.MODULE_PAGE + "\"/> " +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.MESSAGE_DETAIL + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ObjectsTreeConstants.METADATA_SELECT + "\"/> " +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.OBJECT_ID + "\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"OBJECT_ID\"/> " +
			   				   "	</METADATA_CAPTION>";
		}
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_DETAIL_MANAGEMENT)){
			moduleConfigStr += "	<DETAIL_CAPTION  confirm=\"FALSE\" image=\"/img/detail.gif\" label=\"SBISet.objects.captionDetail\">" +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.PAGE + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + DetailBIObjectModule.MODULE_PAGE + "\"/> " +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.MESSAGE_DETAIL + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ObjectsTreeConstants.DETAIL_SELECT + "\"/> " +
			   				   "		<PARAMETER name=\"" + ObjectsTreeConstants.OBJECT_ID + "\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"OBJECT_ID\"/> " +
			   				   "	</DETAIL_CAPTION>";
		}
		if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_DELETE_MANAGEMENT)){
			moduleConfigStr += "	<DELETE_CAPTION  confirm=\"TRUE\" image=\"/img/erase.gif\" label=\"SBISet.objects.captionErase\">" +
							   "		<PARAMETER name=\"" + ObjectsTreeConstants.PAGE + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + DetailBIObjectModule.MODULE_PAGE + "\"/> " +
							   "		<PARAMETER name=\"" + ObjectsTreeConstants.MESSAGE_DETAIL + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ObjectsTreeConstants.DETAIL_DEL + "\"/> " +
							   "		<PARAMETER name=\"" + ObjectsTreeConstants.OBJECT_ID + "\" scope=\"LOCAL\" type=\"RELATIVE\" value=\"OBJECT_ID\"/> " +
							   "	</DELETE_CAPTION>";
		}
		moduleConfigStr += "	</CAPTIONS>";
		moduleConfigStr += "	<BUTTONS>";
		
		if ((profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN) && ChannelUtilities.isWebRunning())||
		     profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
			    moduleConfigStr += "		<INSERT_BUTTON confirm=\"FALSE\" image=\"/img/new.png\" label=\"SBISet.devObjects.newObjButt\"> " +
				   				   "			<PARAMETER name=\"" + ObjectsTreeConstants.PAGE + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + DetailBIObjectModule.MODULE_PAGE + "\"/> " +
				   				   "			<PARAMETER name=\"" + ObjectsTreeConstants.MESSAGE_DETAIL + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + ObjectsTreeConstants.DETAIL_NEW + "\"/> " +
				   				   "		</INSERT_BUTTON>";		
		}
		moduleConfigStr += "		<CHANGE_VIEW_BUTTON confirm=\"FALSE\" image=\"/img/treeView.png\" label=\"SBISet.objects.treeViewButt\"> " +
		   				   "			<PARAMETER name=\"PAGE\" scope=\"\" type=\"ABSOLUTE\" value=\"BIObjectsPage\"/> " +
		   				   "			<PARAMETER name=\"" + SpagoBIConstants.OBJECTS_VIEW + "\" scope=\"\" type=\"ABSOLUTE\" value=\"" + SpagoBIConstants.VIEW_OBJECTS_AS_TREE + "\"/> " +
		   				   "		</CHANGE_VIEW_BUTTON>";	
		moduleConfigStr += "		<BACK_BUTTON confirm=\"FALSE\" image=\"/img/back.png\" label=\"SBISet.objects.backButt\"  onlyPortletRunning=\"true\"> " +
        				   "			<PARAMETER name=\"ACTION_NAME\" scope=\"\" type=\"ABSOLUTE\" value=\"START_ACTION\"/> " +
        				   "			<PARAMETER name=\"PUBLISHER_NAME\" scope=\"\" type=\"ABSOLUTE\" value=\"LoginSBIAnaliticalModelPublisher\"/> " +
        				   "			<PARAMETER name=\"" + LightNavigationManager.LIGHT_NAVIGATOR_RESET + "\" scope=\"\" type=\"ABSOLUTE\" value=\"true\"/> " +
        				   "		</BACK_BUTTON>";
      	moduleConfigStr += "	</BUTTONS>";
		moduleConfigStr += "</CONFIG>";
		SourceBean moduleConfig = SourceBean.fromXMLString(moduleConfigStr);
		return moduleConfig;
	}
}
