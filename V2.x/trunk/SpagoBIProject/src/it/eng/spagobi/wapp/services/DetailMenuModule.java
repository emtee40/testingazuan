package it.eng.spagobi.wapp.services;





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

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spago.validation.EMFValidationError;
import it.eng.spagobi.analiticalmodel.document.service.BIObjectsModule;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.Parameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.ParameterUse;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.constants.AdmintoolsConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.wapp.bo.Menu;
import it.eng.spagobi.wapp.dao.IMenuDAO;
import it.eng.spagobi.wapp.dao.MenuDAOImpl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Vector;

/**
 * Implements a module which  handles all  low functionalities management: has methods 
 * for low functionalities load, detail, modify/insertion and deleting operations. 
 * The <code>service</code> method has  a switch for all these operations, differentiated the ones 
 * from the others by a <code>message</code> String.
 * 
 * @author sulis
 */
public class DetailMenuModule extends AbstractModule {

	private String modality = "";
	public final static String MODULE_PAGE = "DetailMenuPage";
	public final static String MENU_OBJ = "MENU_OBJ";
	public final static String MENU_ID = "MENU_ID";
	public final static String PARENT_ID = "PARENT_ID";
	public final static String MENU = "MENU";
	public final static String ROLES = "ROLES";
	public final static String LOOKUP = "lookupLoopback";
	public static final String messageBundle = "messages";

	public final static String PATH = "PATH";
	private String typeFunct = null;
	EMFErrorHandler errorHandler=null;




	/* (non-Javadoc)
	 * @see it.eng.spago.dispatching.module.AbstractModule#init(it.eng.spago.base.SourceBean)
	 */
	public void init(SourceBean config) {
	}

	/**
	 * Reads the operation asked by the user and calls the insertion, modify, detail and
	 * deletion methods.
	 * 
	 * @param request The Source Bean containing all request parameters
	 * @param response The Source Bean containing all response parameters
	 * 
	 * @throws exception If an exception occurs
	 * @throws Exception the exception
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		String message = (String) request.getAttribute(AdmintoolsConstants.MESSAGE_DETAIL);
		Object documentLookup =  request.getAttribute("loadDocumentLookup");
		errorHandler = getErrorHandler();

		try {
			if (message == null) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule", "service", "The message parameter is null");
				throw userError;
			}
			if(documentLookup != null){
				lookupLoadHandler (request, message, response);
		    } 
			else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_SELECT)) {
				getDetailMenu(request, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				modDetailMenu(request, AdmintoolsConstants.DETAIL_MOD, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_NEW)) {
				newDetailMenu(request, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				modDetailMenu(request, AdmintoolsConstants.DETAIL_INS, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_DEL)) {
				delMenu(request, AdmintoolsConstants.DETAIL_DEL, response);
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
	 * Gets the detail of a menu choosed by the user from the 
	 * low functionalities list. It reaches the key from the request and asks 
	 * to the DB all detail parameter use mode information, by calling the 
	 * method <code>loadLowFunctionalityByPath</code>.
	 *   
	 * @param key The choosed low functionality id key
	 * @param response The response Source Bean
	 * @throws EMFUserError If an exception occurs
	 */
	private void getDetailMenu(SourceBean request, SourceBean response) throws EMFUserError {
		try {
			this.modality = AdmintoolsConstants.DETAIL_MOD;

			String menuId = (String) request.getAttribute(MENU_ID);

			//String parentId = (String) request.getAttribute(PARENT_ID);
			response.setAttribute(AdmintoolsConstants.MODALITY, modality);

			Menu menu = DAOFactory.getMenuDAO().loadMenuByID(Integer.valueOf(menuId));
			response.setAttribute(MENU, menu);
			Integer parentIdInt=menu.getParentId();

			if(parentIdInt!=null){

				String parentId=parentIdInt.toString();

				response.setAttribute(PARENT_ID, parentId);

			}
		}
		catch (Exception ex) {
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}

	/**
	 * Inserts/Modifies the detail of a menu according to the user 
	 * request. When a parameter use mode is modified, the <code>modifyLowFunctionality</code> 
	 * method is called; when a new parameter use mode is added, the <code>insertLowFunctionality</code>
	 * method is called. These two cases are differentiated by the <code>mod</code> String input value .
	 * 
	 * @param request The request information contained in a SourceBean Object
	 * @param mod A request string used to differentiate insert/modify operations
	 * @param response The response SourceBean 
	 * @throws EMFUserError If an exception occurs
	 * @throws SourceBeanException If a SourceBean exception occurs
	 */
	private void modDetailMenu(SourceBean request, String mod, SourceBean response)
	throws EMFUserError, SourceBeanException {

			//**********************************************************************
			Menu menu = recoverMenuDetails(request, mod);
			response.setAttribute(MENU, menu);
			response.setAttribute(AdmintoolsConstants.MODALITY, mod);
			
//			if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
//			String pathParent = (String)request.getAttribute(AdmintoolsConstants.PATH_PARENT);
//			response.setAttribute(AdmintoolsConstants.PATH_PARENT, pathParent);
//			}


			// if there are some validation errors into the errorHandler does not write into DB
			Collection errors = errorHandler.getErrors();
			if (errors != null && errors.size() > 0) {
				Iterator iterator = errors.iterator();
				while (iterator.hasNext()) {
					Object error = iterator.next();
					if (error instanceof EMFValidationError) {
						Integer parentMenuId = menu.getParentId();
						Menu parentMenu = null;
						if (parentMenuId != null) {
							parentMenu = DAOFactory.getMenuDAO().loadMenuByID(parentMenuId);
						}
						if (parentMenu== null) {
							throw new EMFUserError(EMFErrorSeverity.ERROR, "10001", messageBundle);
						} else {
							response.setAttribute(PARENT_ID, parentMenu.getMenuId());
						}
						return;
					}
				}
			}

			if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {			
				DAOFactory.getMenuDAO().insertMenu(menu);
			} else if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				DAOFactory.getMenuDAO().modifyMenu(menu);
				//at this point erase inconsistent child roles that have been deleted from parents
				//prova debug
				//Set set1 = new HashSet();
				//loadRolesToErase(lowFunct,set1);
				Set set = new HashSet();
				//TODO delete roles in childred 
				/*loadRolesToErase(menu,set);
				DAOFactory.getLowFunctionalityDAO().deleteInconsistentRoles(set);*/
			}

		
		response.setAttribute(AdmintoolsConstants.LOOPBACK, "true");
	}



	/**
	 * Deletes a Menu choosed by user .
	 * @param request	The request SourceBean
	 * @param mod	A request string used to differentiate delete operation
	 * @param response	The response SourceBean
	 * @throws EMFUserError	If an Exception occurs
	 * @throws SourceBeanException If a SourceBean Exception occurs
	 */
	private void delMenu(SourceBean request, String mod, SourceBean response)
	throws EMFUserError, SourceBeanException {
		try {
			String id = (String)request.getAttribute(MENU_ID);
			IMenuDAO menudao = DAOFactory.getMenuDAO();
			Menu menu = menudao.loadMenuByID(Integer.valueOf(id));
			SessionContainer permSess = getRequestContainer().getSessionContainer().getPermanentContainer();
			menudao.eraseMenu(menu);

		} catch (EMFUserError eex) {
			throw new EMFUserError(EMFErrorSeverity.ERROR, "10002", messageBundle);
		} catch (Exception ex) {
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		response.setAttribute("loopback", "true");
	}

	/**
	 * Instantiates a new <code>Menu<code> object when a new menu
	 * insertion is required, in order to prepare the page for the insertion.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	private void newDetailMenu(SourceBean request, SourceBean response) throws EMFUserError {
		try {
			this.modality = AdmintoolsConstants.DETAIL_INS;
			String idParent = (String) request.getAttribute(DetailMenuModule.PARENT_ID);
			response.setAttribute(AdmintoolsConstants.MODALITY, modality);
			if(idParent!=null) // if it is null it is a root menu
				response.setAttribute(DetailMenuModule.PARENT_ID, idParent);

			Menu menu= new Menu();
			menu.setDescr("");
			menu.setName("");
			menu.setHasChildren(false);


			Menu parentMenu = null;
			if(idParent!=null){
				parentMenu = DAOFactory.getMenuDAO().loadMenuByID(Integer.valueOf(idParent));
			}
			Role[] roles = new Role[0];

			if(parentMenu!=null) {
				roles = parentMenu.getRoles();
			}
			else{ // if no parent all roles enabled
				List allRoles = DAOFactory.getRoleDAO().loadAllRoles();
				roles= new Role[allRoles.size()];
				for(int i=0; i<allRoles.size(); i++) {
					Role role = (Role)allRoles.get(i);
					roles[i]=role;

				}

			}
			menu.setRoles(roles);

			response.setAttribute(MENU, menu);
		}
		catch (Exception ex) {
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}

	private Menu recoverMenuDetails(SourceBean request, String mod) throws EMFUserError, SourceBeanException {
		String name = (String)request.getAttribute("name");
		name = name.trim();
		if(name.equalsIgnoreCase("")){
			throw new EMFUserError(EMFErrorSeverity.ERROR, "10003", messageBundle);
		}
		
		String description = (String)request.getAttribute("description");
		description = description.trim();

		List attrsList = request.getAttributeAsList(DetailMenuModule.ROLES);
		Role[] roles = new Role[attrsList.size()];
		for(int i=0; i<roles.length; i++) {
			String idRoleStr = (String)attrsList.get(i);
			roles[i] = DAOFactory.getRoleDAO().loadByID(new Integer(idRoleStr));
		}

		String homepageB=(String)request.getAttribute("homepage");
		
		Menu menu = null;


		if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
			String idParent = (String)request.getAttribute(DetailMenuModule.PARENT_ID);
			String objectId=(String)request.getAttribute(DetailMenuModule.MENU_OBJ);

			menu = new Menu();
			menu.setName(name);
			menu.setDescr(description);
			menu.setHasChildren(false);
			if(idParent!=null)
				menu.setParentId(Integer.valueOf(idParent));
			else
				menu.setParentId(null);


			if(objectId!=null && !objectId.equalsIgnoreCase(""))
				menu.setObjId(Integer.valueOf(objectId));
			else menu.setObjId(null);

			if(homepageB!=null)menu.setHomepage(Boolean.valueOf(homepageB).booleanValue());
			else menu.setHomepage(false);

			menu.setRoles(roles);


		} else if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {

			String idMenu = (String)request.getAttribute(DetailMenuModule.MENU_ID);

			menu = DAOFactory.getMenuDAO().loadMenuByID(Integer.valueOf(idMenu));

			menu.setName(name);
			menu.setDescr(description);

			menu.setRoles(roles);

			String objectId=(String)request.getAttribute(DetailMenuModule.MENU_OBJ);
			if(objectId!=null && !objectId.equalsIgnoreCase("")){
			menu.setObjId(Integer.valueOf(objectId));
			}
			else menu.setObjId(null);
		
			if(homepageB!=null){menu.setHomepage(Boolean.valueOf(homepageB).booleanValue());}
			else menu.setHomepage(false);
		
		}

		return menu;
	}

	/**
	 * Controls if a particular role belongs to the parent functionality. It is
	 * called inside functionalities Jsp in ordet to identify those roles that a child
	 * functionality is able to select.
	 * 
	 * @param rule    The role id string identifying the role
	 * @param parentLowFunct the parent low functionality object
	 * @param roleType The role's type
	 * 
	 * @return True if the role belongs to the parent funct, else false
	 */
	public boolean isParentRule(String rule, Menu parentMenu){
		boolean isParent = false;

		Role[] rolesObj = parentMenu.getRoles();
		String[] rules = new String[rolesObj.length];
		for(int i=0; i<rolesObj.length; i++) {
			rules[i] = rolesObj[i].getId().toString();
			if (rule.equals(rules[i])){
				isParent = true;
			}
		}

		return isParent;
	}

	/**
	 * Defines all roles that have to be erased in order to keep functionalities
	 * tree consistence. When we leave some permissions to a functionality, those
	 * permissions will not be assignable to all the children functionality. If any child
	 * has a permission that his parent anymore has, this permission mus be deleted for all
	 * father's children and descendants.
	 * This metod recusively scans all father's descendants and saves inside a Set all roles
	 * that must be erased from the Database.
	 * 
	 * @param lowFuncParent the parent Functionality
	 * @param rolesToErase the set containing all roles to erase
	 * 
	 * @throws EMFUserError if any EMFUserError exception occurs
	 * @throws BuildOperationException if any BuildOperationException exception occurs
	 * @throws OperationExecutionException if any OperationExecutionException exception occurs
	 */
	/*	public void loadRolesToErase(Menu menuParent, Set rolesToErase) throws EMFUserError{
		String parentPath = lowFuncParent.getPath();
		//ArrayList childs = DAOFactory.getFunctionalityCMSDAO().recoverChilds(parentPath);
		List childs = DAOFactory.getLowFunctionalityDAO().loadSubLowFunctionalities(parentPath, false);
		if(childs.size()!= 0) {
			Iterator i = childs.iterator();
			while (i.hasNext()){
				LowFunctionality childNode = (LowFunctionality) i.next();
				String childPath = childNode.getPath();
				//LowFunctionality lowFuncParent = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(parentPath);
				LowFunctionality lowFuncChild = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(childPath, false);
				if(lowFuncChild != null){
					//control childs permissions and fathers permissions
					//remove from childs those persmissions that are not present in the fathers
					//control for test Roles
					Role[] testChildRoles = lowFuncChild.getTestRoles();
					//Role[] testParentRoles = lowFuncParent.getTestRoles();
					//ArrayList newTestChildRoles = new ArrayList();
					//HashMap rolesToErase = new HashMap();
					for(int j = 0; j < testChildRoles.length; j++) {
						String rule = testChildRoles[j].getId().toString();
						if(!isParentRule(rule, lowFuncParent,"TEST")){
							ArrayList roles = new ArrayList();
							roles.add(0,lowFuncChild.getId());
							roles.add(1,testChildRoles[j].getId());
							roles.add(2,"TEST");
							rolesToErase.add(roles);
							lowFuncChild = eraseRolesFromFunctionality(lowFuncChild,rule,"TEST");
							//rolesToErase.put(lowFuncChild.getId(),testChildRoles[j].getId());
							//DAOFactory.getLowFunctionalityDAO().deleteFunctionalityRole(lowFuncChild,testChildRoles[j].getId());
						}
					}
					//control for development roles	
					Role[] devChildRoles = lowFuncChild.getDevRoles();
					//Role[] devParentRoles = lowFuncParent.getDevRoles();
					//ArrayList newDevChildRoles = new ArrayList();
					for(int j = 0; j < devChildRoles.length; j++) {
						String rule = devChildRoles[j].getId().toString();
						if(!isParentRule(rule, lowFuncParent,"DEV")){
							ArrayList roles = new ArrayList();
							roles.add(0,lowFuncChild.getId());
							roles.add(1,devChildRoles[j].getId());
							roles.add(2,"DEV");
							rolesToErase.add(roles);
							lowFuncChild = eraseRolesFromFunctionality(lowFuncChild,rule,"DEV");
							//rolesToErase.put(lowFuncChild.getId(),devChildRoles[j].getId());
							//DAOFactory.getLowFunctionalityDAO().deleteFunctionalityRole(lowFuncChild,devChildRoles[j].getId());
						}
					}
					//control for execution roles
					Role[] execChildRoles = lowFuncChild.getExecRoles();
					//Role[] execParentRoles = lowFuncParent.getExecRoles();
					//ArrayList newExecChildRoles = new ArrayList();
					for(int j = 0; j < execChildRoles.length; j++) {
						String rule = execChildRoles[j].getId().toString();
						if(!isParentRule(rule, lowFuncParent,"EXEC")){
							ArrayList roles = new ArrayList();
							roles.add(0,lowFuncChild.getId());
							roles.add(1,execChildRoles[j].getId());
							roles.add(2,"REL");
							rolesToErase.add(roles);
							lowFuncChild = eraseRolesFromFunctionality(lowFuncChild,rule,"EXEC");
							//rolesToErase.put(lowFuncChild.getId(),execChildRoles[j].getId());
							//DAOFactory.getLowFunctionalityDAO().deleteFunctionalityRole(lowFuncChild,execChildRoles[j].getId());
						}
					}
					//loadRolesToErase(lowFuncChild,rolesToErase);
				}

				//loadRolesToErase(childPath,rolesToErase);
			}

		}
	}*/

	/**
	 * Erases the defined input role from a functionality object, if this one
	 * has the role.The updated functionality object is returned.
	 * 
	 * @param func the input functionality object
	 * @param roleId the role id for the role to erase
	 * @param roleType the type of the role to erase
	 * 
	 * @return the updated functionality
	 */
	public Menu eraseRolesFromMenu (Menu menu, String roleId){
		Role[] roles = menu.getRoles();
		Set rolesSet = new HashSet();
		for (int i=0; i<roles.length;i++){
			if(!roles[i].getId().toString().equals(roleId)){
				rolesSet.add(roles[i]);
			}

		}
		menu.setRoles((Role[])rolesSet.toArray(new Role[0]));

		return menu;
	}
	
	
	private void lookupLoadHandler(SourceBean request, String modality, SourceBean response) throws EMFUserError, SourceBeanException{
		
		RequestContainer requestContainer = this.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		session.setAttribute("modality", modality);
		response.setAttribute(DetailMenuModule.LOOKUP, "true");
		
	}

	

	
	
	
	
	
}
