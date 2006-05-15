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

import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.cms.CmsNode;
import it.eng.spago.cms.exceptions.BuildOperationException;
import it.eng.spago.cms.exceptions.OperationExecutionException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.error.EMFValidationError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.LowFunctionality;
import it.eng.spagobi.bo.Role;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.ILowFunctionalityDAO;
import it.eng.spagobi.constants.AdmintoolsConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;

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
public class DetailFunctionalityModule extends AbstractModule {

	private String modality = "";
	public final static String MODULE_PAGE = "DetailFunctionalityPage";
	public final static String FUNCTIONALITY_OBJ = "FUNCTIONALITY_OBJ";
	public final static String PATH = "PATH";
	private String typeFunct = null;
	
	


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
		String message = (String) request.getAttribute(AdmintoolsConstants.MESSAGE_DETAIL);
		typeFunct = (String) request.getAttribute(AdmintoolsConstants.FUNCTIONALITY_TYPE);
		
		SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule","service","begin of detail functionality modify/visualization service with message =" +message);

		try {
			if (message == null) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				SpagoBITracer.debug(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule", "service", "The message parameter is null");
				throw userError;
			}
			if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_SELECT)) {
				getDetailFunctionality(request, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				modDettaglioFunctionality(request, AdmintoolsConstants.DETAIL_MOD, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_NEW)) {
				newDettaglioFunctionality(request, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				modDettaglioFunctionality(request, AdmintoolsConstants.DETAIL_INS, response);
			} else if (message.trim().equalsIgnoreCase(AdmintoolsConstants.DETAIL_DEL)) {
				delFunctionality(request, AdmintoolsConstants.DETAIL_DEL, response);
			}

		} catch (EMFUserError eex) {
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			EMFInternalError internalError = new EMFInternalError(EMFErrorSeverity.ERROR, ex);
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(internalError);
			return;
		}
	}
	
	/**
	 * Gets the detail of a low functionality choosed by the user from the 
	 * low functionalities list. It reaches the key from the request and asks 
	 * to the DB all detail parameter use mode information, by calling the 
	 * method <code>loadLowFunctionalityByPath</code>.
	 *   
	 * @param key The choosed low functionality id key
	 * @param response The response Source Bean
	 * @throws EMFUserError If an exception occurs
	 */
	private void getDetailFunctionality(SourceBean request, SourceBean response) throws EMFUserError {
		try {
			this.modality = AdmintoolsConstants.DETAIL_MOD;
			String path = (String) request.getAttribute(DetailFunctionalityModule.PATH);
			int index = path.lastIndexOf("/");
			String parentPath = path.substring(0,index);
			response.setAttribute("PARENT_PATH", parentPath);
			response.setAttribute(AdmintoolsConstants.MODALITY, modality);
			if (typeFunct.equals("LOW_FUNCT")) {
				LowFunctionality funct = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(path);
				response.setAttribute(FUNCTIONALITY_OBJ, funct);
			}	
		} catch (EMFUserError eex) {
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule","getDetailFunctionality","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}

	/**
	 * Inserts/Modifies the detail of a low functionality according to the user 
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
	private void modDettaglioFunctionality(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		try {
			//**********************************************************************
			LowFunctionality lowFunct = recoverLowFunctionalityDetails(request, mod);
			response.setAttribute(FUNCTIONALITY_OBJ, lowFunct);
			response.setAttribute(AdmintoolsConstants.MODALITY, mod);
			EMFErrorHandler errorHandler = getErrorHandler();
			if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				String pathParent = (String)request.getAttribute(AdmintoolsConstants.PATH_PARENT);
				response.setAttribute(AdmintoolsConstants.PATH_PARENT, pathParent);
			}
			
			// if there are some validation errors into the errorHandler does not write into DB
			Collection errors = errorHandler.getErrors();
			if (errors != null && errors.size() > 0) {
				Iterator iterator = errors.iterator();
				while (iterator.hasNext()) {
					Object error = iterator.next();
					if (error instanceof EMFValidationError) {
						String path = lowFunct.getPath();
						int index = path.lastIndexOf("/");
						String parentPath = path.substring(0,index);
						response.setAttribute("PARENT_PATH", parentPath);
						return;
					}
				}
			}

			if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
				SessionContainer permSess = getRequestContainer().getSessionContainer().getPermanentContainer();
				IEngUserProfile profile = (IEngUserProfile)permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
				DAOFactory.getLowFunctionalityDAO().insertLowFunctionality(lowFunct, profile);
			} else if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
				DAOFactory.getLowFunctionalityDAO().modifyLowFunctionality(lowFunct);
				//at this point erase inconsistent child roles that have been deleted from parents
				//prova debug
				//Set set1 = new HashSet();
				//loadRolesToErase(lowFunct,set1);
				Set set = new HashSet();
				loadRolesToErase(lowFunct,set);
				DAOFactory.getLowFunctionalityDAO().deleteInconsistentRoles(set);
			}
     	            
		} catch (EMFUserError eex) {
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {			
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule","modDettaglioFunctionality","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		response.setAttribute(AdmintoolsConstants.LOOPBACK, "true");
	}

	
	
	/**
	 * Deletes a low functionality choosed by user from the low functionality list.
	 * @param request	The request SourceBean
	 * @param mod	A request string used to differentiate delete operation
	 * @param response	The response SourceBean
	 * @throws EMFUserError	If an Exception occurs
	 * @throws SourceBeanException If a SourceBean Exception occurs
	 */
	private void delFunctionality(SourceBean request, String mod, SourceBean response)
		throws EMFUserError, SourceBeanException {
		try {
			if(typeFunct.equals("LOW_FUNCT")) {
				String path = (String)request.getAttribute(PATH);
				ILowFunctionalityDAO funcdao = DAOFactory.getLowFunctionalityDAO();
				LowFunctionality funct = funcdao.loadLowFunctionalityByPath(path);
				SessionContainer permSess = getRequestContainer().getSessionContainer().getPermanentContainer();
				IEngUserProfile profile = (IEngUserProfile)permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);		
				funcdao.eraseLowFunctionality(funct, profile);
			}	
		} catch (EMFUserError eex) {
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule","delFunctionality","Cannot fill response container", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		response.setAttribute("loopback", "true");
	}
	
	/**
	 * Instantiates a new <code>LowFunctionalitye<code> object when a new low functionality
	 * insertion is required, in order to prepare the page for the insertion.
	 * 
	 * @param response The response SourceBean
	 * @throws EMFUserError If an Exception occurred
	 */
	private void newDettaglioFunctionality(SourceBean request, SourceBean response) throws EMFUserError {
		try {
			this.modality = AdmintoolsConstants.DETAIL_INS;
			String pathParent = (String) request.getAttribute(AdmintoolsConstants.PATH_PARENT);
			response.setAttribute(AdmintoolsConstants.MODALITY, modality);
			response.setAttribute(AdmintoolsConstants.PATH_PARENT, pathParent);
			
			if(typeFunct.equals("LOW_FUNCT")) {
				LowFunctionality funct = new LowFunctionality();
				funct.setDescription("");
				funct.setId(new Integer(0));
				funct.setCode("");
                funct.setName("");
				LowFunctionality parentFunct = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(pathParent);
			    Role[] execRoles = new Role[0];
			    Role[] devRoles = new Role[0];
			    Role[] testRoles = new Role[0];
			    if(parentFunct!=null) {
			    	execRoles = parentFunct.getExecRoles();
			    	devRoles = parentFunct.getDevRoles();
			    	testRoles = parentFunct.getTestRoles();
			    }
			    funct.setTestRoles(testRoles);
			    funct.setDevRoles(devRoles);
			    funct.setExecRoles(execRoles);
				response.setAttribute(FUNCTIONALITY_OBJ, funct);
			}
			
		} catch (EMFUserError eex) {
			EMFErrorHandler errorHandler = getErrorHandler();
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "DetailFunctionalityModule","newDettaglioFunctionality","Cannot prepare page for the insertion", ex  );
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	private LowFunctionality recoverLowFunctionalityDetails(SourceBean request, String mod) throws EMFUserError, SourceBeanException {
		String name = (String)request.getAttribute("name");
		name = name.trim();
		String description = (String)request.getAttribute("description");
		description = description.trim();
		String code = (String)request.getAttribute("code");
		code = code.trim();
        			
		List testAttrsList = request.getAttributeAsList("test");
		Role[] testRoles = new Role[testAttrsList.size()];
		for(int i=0; i<testRoles.length; i++) {
			String idRoleStr = (String)testAttrsList.get(i);
			testRoles[i] = DAOFactory.getRoleDAO().loadByID(new Integer(idRoleStr));
		}
		List devAttrsList = request.getAttributeAsList("development");
		Role[] devRoles = new Role[devAttrsList.size()];
		for(int i=0; i<devRoles.length; i++) {
			String idRoleStr = (String)devAttrsList.get(i);
			devRoles[i] = DAOFactory.getRoleDAO().loadByID(new Integer(idRoleStr));
		}
		List execAttrsList = request.getAttributeAsList("execution");
		Role[] execRoles = new Role[execAttrsList.size()];
		for(int i=0; i<execRoles.length; i++) {
			String idRoleStr = (String)execAttrsList.get(i);
			execRoles[i] = DAOFactory.getRoleDAO().loadByID(new Integer(idRoleStr));
		}
		
		LowFunctionality lowFunct = null;
		
		if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_INS)) {
			String pathParent = (String)request.getAttribute(AdmintoolsConstants.PATH_PARENT);
			String newPath = pathParent + "/" + code;
			//SourceBean dataLoad = new SourceBean("dataLoad");
			LowFunctionality funct =  DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(newPath);
			if(funct != null) {
				HashMap params = new HashMap();
				params.put(AdmintoolsConstants.PAGE, TreeObjectsModule.MODULE_PAGE);
				params.put(SpagoBIConstants.ACTOR, SpagoBIConstants.ADMIN_ACTOR);
				params.put(SpagoBIConstants.OPERATION, SpagoBIConstants.FUNCTIONALITIES_OPERATION);
				EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1005, new Vector(), params );
				getErrorHandler().addError(error);
			}
			if(DAOFactory.getLowFunctionalityDAO().existByCode(code)!=null) {
				EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1027);
				getErrorHandler().addError(error);
			}
			lowFunct = new LowFunctionality();
			lowFunct.setCode(code);
			lowFunct.setDescription(description);
			lowFunct.setName(name);
			lowFunct.setPath(newPath);
			lowFunct.setDevRoles(devRoles);
			lowFunct.setExecRoles(execRoles);
			lowFunct.setTestRoles(testRoles);
		} else if(mod.equalsIgnoreCase(AdmintoolsConstants.DETAIL_MOD)) {
			String idFunct = (String)request.getAttribute(AdmintoolsConstants.FUNCTIONALITY_ID);
			Integer idFunctWithSameCode =DAOFactory.getLowFunctionalityDAO().existByCode(code);
			if((idFunctWithSameCode!=null) && !(idFunctWithSameCode.equals(new Integer(idFunct)))) {
				EMFValidationError error = new EMFValidationError(EMFErrorSeverity.ERROR, 1027);
				getErrorHandler().addError(error);
			}
			lowFunct = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(new Integer(idFunct));
			lowFunct.setCode(code);
			lowFunct.setDescription(description);
			lowFunct.setName(name);
			lowFunct.setDevRoles(devRoles);
			lowFunct.setExecRoles(execRoles);
			lowFunct.setTestRoles(testRoles);
		}
		
		return lowFunct;
	}
	/**
	 * Controls if a particular role belongs to the parent functionality. It is
	 * called inside functionalities Jsp in ordet to identify those roles that a child 
	 * functionality is able to select.
	 * 
	 * @param rule    The role id string identifying the role
	 * @param parentLowFunct the parent low functionality object
	 * @param roleType The role's type
	 * @return True if the role belongs to the parent funct, else false
	 */
	public boolean isParentRule(String rule, LowFunctionality parentLowFunct,String roleType){
		boolean isParent = false;
		if (roleType.equals("DEV")){
		Role[] devRolesObj = parentLowFunct.getDevRoles();
		String[] devRules = new String[devRolesObj.length];
		for(int i=0; i<devRolesObj.length; i++) {
			devRules[i] = devRolesObj[i].getId().toString();
			if (rule.equals(devRules[i])){
				isParent = true;
				}
			}
		}
		else if (roleType.equals("EXEC")){
		Role[] execRolesObj = parentLowFunct.getExecRoles();
		String[] execRules = new String[execRolesObj.length];
		for(int i=0; i<execRolesObj.length; i++) {
			execRules[i] = execRolesObj[i].getId().toString();
			if (rule.equals(execRules[i]) ){
				isParent = true;
				}
			}
		}
		else if (roleType.equals("TEST")){
		Role[] testRolesObj = parentLowFunct.getTestRoles();
		String[] testRules = new String[testRolesObj.length];
		for(int i=0; i<testRolesObj.length; i++) {
			testRules[i] = testRolesObj[i].getId().toString();
			if (rule.equals(testRules[i])){
				isParent = true;
				}
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
	 * @throws EMFUserError if any EMFUserError exception occurs 
	 * @throws BuildOperationException if any BuildOperationException exception occurs 
	 * @throws OperationExecutionException if any OperationExecutionException exception occurs 
	 */
	public void loadRolesToErase(LowFunctionality lowFuncParent, Set rolesToErase) throws EMFUserError, BuildOperationException, OperationExecutionException{
		String parentPath = lowFuncParent.getPath();
		ArrayList childs = DAOFactory.getFunctionalityCMSDAO().recoverChilds(parentPath);
		if(childs.size()!= 0) {
		Iterator i = childs.iterator();
		while (i.hasNext()){
		    CmsNode childNode = (CmsNode)i.next();
			String childPath = childNode.getPath();
			//LowFunctionality lowFuncParent = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(parentPath);
			LowFunctionality lowFuncChild = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByPath(childPath);
			if(lowFuncChild != null){
				//control childs permissions and fathers permissions
				//remove from childs those persmissions that are not present in the fathers
				//control for test Roles
				Role[] testChildRoles = lowFuncChild.getTestRoles();
				Role[] testParentRoles = lowFuncParent.getTestRoles();
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
				Role[] devParentRoles = lowFuncParent.getDevRoles();
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
				Role[] execParentRoles = lowFuncParent.getExecRoles();
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
				loadRolesToErase(lowFuncChild,rolesToErase);
			}
			
			//loadRolesToErase(childPath,rolesToErase);
		}
		
		}
		
		
	}
	/**
	 * Erases the defined input role from a functionality object, if this one
	 * has the role.The updated functionality object is returned.
	 * 
	 * @param func the input functionality object
	 * @param roleId the role id for the role to erase
	 * @param roleType the type of the role to erase
	 * @return the updated functionality
	 */
	public LowFunctionality eraseRolesFromFunctionality (LowFunctionality func, String roleId, String roleType){
		if(roleType.equals("DEV")){
			Role[] roles = func.getDevRoles();
			Set devRolesSet = new HashSet();
			for (int i=0; i<roles.length;i++){
				if(!roles[i].getId().toString().equals(roleId)){
					devRolesSet.add(roles[i]);
				}
				
			}func.setDevRoles((Role[])devRolesSet.toArray(new Role[0]));
			
		}
		if(roleType.equals("TEST")){
			Role[] roles = func.getTestRoles();
			Set testRolesSet = new HashSet();
			for (int i=0; i<roles.length;i++){
				if(!roles[i].getId().toString().equals(roleId)){
					testRolesSet.add(roles[i]);
				}
				
			}func.setTestRoles((Role[])testRolesSet.toArray(new Role[0]));
			
		}
		if(roleType.equals("EXEC")){
			Role[] roles = func.getExecRoles();
			Set execRolesSet = new HashSet();
			for (int i=0; i<roles.length;i++){
				if(!roles[i].getId().toString().equals(roleId)){
					execRolesSet.add(roles[i]);
				}
				
			}func.setExecRoles((Role[])execRolesSet.toArray(new Role[0]));
			
		}
		return func;
	}
}
