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
package it.eng.spagobi.commons.utilities;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.dao.BIObjectDAOHibImpl;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * Contains some methods to control user exec/dev/test rights.
 * 
 * @author sulis
 */
public class ObjectsAccessVerifier {

    static private Logger logger = Logger.getLogger(ObjectsAccessVerifier.class);

    /**
     * Controls if the current user can develop the object relative to the input
     * folder id.
     * 
     * @param state
     *                state of the object
     * @param folderId
     *                The id of the folder containing te object
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canDev(String state, Integer folderId, IEngUserProfile profile) {
	if (!state.equals("DEV")) {
	    return false;
	}
	return canDevInternal(folderId, profile);
    }

    /**
     * Controls if current user can exec the object relative to the input folder
     * id.
     * 
     * @param state
     *                state of the object
     * @param folderId
     *                The id of the folder containing te object
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canExec(String state, Integer folderId, IEngUserProfile profile) {
		logger.debug("IN.state=" + state);
		if(isAbleToExec(state, profile)) {
			/*if (!state.equals("REL")) {
			    return false;
			}*/
			LowFunctionality folder = null;
			try {
			    folder = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(folderId, false);
			} catch (Exception e) {
			    logger.error("Exception in loadLowFunctionalityByID", e);
			    return false;
			} finally {
			    logger.debug("OUT");
			}
			return canExecInternal(folder, profile);
		} else{
			return false;
		}
    }
    
    /**
     * Metodo che verifica se nell'elenco delle funzionalit� ne esiste almeno una con diritto di 
     * esecuzione
     * @param state
     * @param profile
     * @return
     */
    public static boolean canExec(String state, List folders, IEngUserProfile profile) {
    	
    	logger.debug("IN.state=" + state);
    	boolean canExec = false;
		if(isAbleToExec(state, profile)) {
			
			Iterator folderIt = folders.iterator();
			while(folderIt.hasNext()){
				LowFunctionality folder =(LowFunctionality) folderIt.next();
				canExec = canExecInternal(folder, profile);
				if (canExec){
					return true;
				}
			}
			return false;
			
		} else{
			return false;
		}
    }
    
    /**
     * Metodo che verifica se nell'elenco delle funzionalit� ne esiste almeno una con diritto di 
     * esecuzione
     * @param state
     * @param profile
     * @return
     */
    public static boolean canDev(String state, List folders, IEngUserProfile profile) {
    	
    	logger.debug("IN.state=" + state);
    	boolean canDev = false;
		if(isAbleToExec(state, profile)) {
			
			Iterator folderIt = folders.iterator();
			while(folderIt.hasNext()){
				LowFunctionality folder =(LowFunctionality) folderIt.next();
				canDev = canDevInternal(folder, profile);
				if (canDev){
					return true;
				}
			}
			return false;
			
		} else{
			return false;
		}
    }
    
    /**
     * Metodo che verifica se nell'elenco delle funzionalit� ne esiste almeno una con diritto di 
     * esecuzione
     * @param state
     * @param profile
     * @return
     */
    public static boolean canTest(String state, List folders, IEngUserProfile profile) {
    	
    	logger.debug("IN.state=" + state);
    	boolean canTest = false;
		if(isAbleToExec(state, profile)) {
			
			Iterator folderIt = folders.iterator();
			while(folderIt.hasNext()){
				LowFunctionality folder =(LowFunctionality) folderIt.next();
				canTest = canTestInternal(folder, profile);
				if (canTest){
					return true;
				}
			}
			return false;
			
		} else{
			return false;
		}
    }
    
    /**
     * Metodo che verifica il numero di istanze visibili del documento
     * @param state
     * @param profile
     * @return
     */
    public static int getVisibleInstances(String initialPath, List folders) {
    	
    	logger.debug("IN");
    	
    	int visibleInstances = 0 ;
			if (initialPath != null && !initialPath.trim().equals("")) {
				Iterator folderIt = folders.iterator();
				while(folderIt.hasNext()){
					LowFunctionality folder =(LowFunctionality) folderIt.next();
					String folderPath = folder.getPath();
				    if (folderPath.equalsIgnoreCase(initialPath) || folderPath.startsWith(initialPath + "/")) {
					visibleInstances++;
				    }		    
				}
			}else{
				visibleInstances = folders.size();
			}
			return visibleInstances ;
			
    }
    
    public static boolean isAbleToExec(String state, IEngUserProfile profile) {
    	logger.debug("IN.state=" + state);
    	if (state.equals("REL")) {
    		return true;
    	}
    	else if (state.equals("DEV")) {
        	try {
				if(profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN)||profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
					return true;
				}else if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_USER)||profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_TEST)){
					return false;
				}
			} catch (EMFInternalError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
    	else if (state.equals("TEST")) {
    		try {
				if(profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_ADMIN)||profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_TEST)){
					return true;
				}else if (profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_USER)||profile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
					return false;
				}
			} catch (EMFInternalError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    	}	return false;
    }

    /**
     * Control if current user can test the object relative to the folder id.
     * 
     * @param state
     *                state of the object
     * @param folderId
     *                The id of the folder containing the object
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canTest(String state, Integer folderId, IEngUserProfile profile) {
	logger.debug("IN.state=" + state);
	if (!state.equals("TEST")) {
	    return false;
	}
	return canTestInternal(folderId, profile);

    }

    /**
     * Control if the current user can develop new object into the functionality
     * identified by its id.
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canDev(Integer folderId, IEngUserProfile profile) {
	return canDevInternal(folderId, profile);
    }

    /**
     * Control if the current user can test new object into the functionality
     * identified by its id.
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canTest(Integer folderId, IEngUserProfile profile) {
	return canTestInternal(folderId, profile);

    }

    /**
     * Control if the current user can execute objects into the input
     * functionality.
     * 
     * @param folder
     *                The lowFunctionality
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canExec(LowFunctionality folder, IEngUserProfile profile) {
	return canExecInternal(folder, profile);
    }

    /**
     * Control if the current user can execute new object into the functionality
     * identified by its id.
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     */
    public static boolean canExec(Integer folderId, IEngUserProfile profile) {
	logger.debug("IN");
	LowFunctionality folder = null;
	try {
	    folder = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(folderId, false);
	} catch (Exception e) {
	    logger.error("Exception in loadLowFunctionalityByID", e);
	    return false;
	} finally {
	    logger.debug("OUT");
	}
	return canExecInternal(folder, profile);
    }

    /**
     * Private method called by the corrispondent public method canExec.
     * Executes roles functionalities control .
     * 
     * @param folder
     *                The lowFunctionality
     * @param profile
     *                user profile
     * @return A boolean control value
     */
    private static boolean canExecInternal(LowFunctionality folder, IEngUserProfile profile) {
	logger.debug("IN");
	Collection roles = null;
	try {
	    roles = profile.getRoles();
	} catch (EMFInternalError emfie) {
	    logger.error("EMFInternalError in profile.getRoles");
	    logger.debug("OUT.return false");
	    return false;
	}

	Role[] execRoles = folder.getExecRoles();
	List execRoleNames = new ArrayList();
	for (int i = 0; i < execRoles.length; i++) {
	    Role role = execRoles[i];
	    execRoleNames.add(role.getName());
	}

	Iterator iterRoles = roles.iterator();
	String roleName = "";
	while (iterRoles.hasNext()) {
	    roleName = (String) iterRoles.next();
	    if (execRoleNames.contains(roleName)) {
		logger.debug("OUT.return true");
		return true;
	    }
	}
	logger.debug("OUT.return false");
	return false;

    }
    
    /**
     * Private method called by the corrispondent public method canTest.
     * Executes roles functionalities control .
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * @return A boolean control value
     */
    private static boolean canTestInternal(LowFunctionality folder, IEngUserProfile profile) {
	logger.debug("IN");
	Collection roles = null;
	try {
	    roles = profile.getRoles();
	} catch (EMFInternalError emfie) {
	    logger.error("EMFInternalError in profile.getRoles", emfie);
	    return false;
	}

	Role[] testRoles = folder.getTestRoles();
	List testRoleNames = new ArrayList();
	for (int i = 0; i < testRoles.length; i++) {
	    Role role = testRoles[i];
	    testRoleNames.add(role.getName());
	}

	Iterator iterRoles = roles.iterator();
	String roleName = "";
	while (iterRoles.hasNext()) {
	    roleName = (String) iterRoles.next();
	    if (testRoleNames.contains(roleName)) {
		logger.debug("OUT. return true");
		return true;
	    }
	}
	logger.debug("OUT. return false");
	return false;

    }

    /**
     * Private method called by the corrispondent public method canDev. Executes
     * roles functionalities control .
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * @return A boolean control value
     */
    private static boolean canDevInternal(LowFunctionality folder, IEngUserProfile profile) {
	logger.debug("IN");
	Collection roles = null;
	try {
	    roles = profile.getRoles();
	} catch (EMFInternalError emfie) {
	    logger.error("EMFInternalError in profile.getRoles", emfie);
	    logger.debug("OUT. return false");
	    return false;
	}

	Role[] devRoles = folder.getDevRoles();
	List devRoleNames = new ArrayList();
	for (int i = 0; i < devRoles.length; i++) {
	    Role role = devRoles[i];
	    devRoleNames.add(role.getName());
	}

	Iterator iterRoles = roles.iterator();
	String roleName = "";
	while (iterRoles.hasNext()) {
	    roleName = (String) iterRoles.next();
	    if (devRoleNames.contains(roleName)) {

		logger.debug("OUT. return true");
		return true;
	    }
	}
	logger.debug("OUT. return false");
	return false;

    }


    /**
     * Private method called by the corrispondent public method canTest.
     * Executes roles functionalities control .
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * @return A boolean control value
     */
    private static boolean canTestInternal(Integer folderId, IEngUserProfile profile) {
	logger.debug("IN");
	Collection roles = null;
	try {
	    roles = profile.getRoles();
	} catch (EMFInternalError emfie) {
	    logger.error("EMFInternalError in profile.getRoles", emfie);
	    return false;
	}

	LowFunctionality funct = null;
	try {
	    funct = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(folderId, false);
	} catch (Exception e) {
	    logger.error("Exception in loadLowFunctionalityByID", e);
	    logger.debug("OUT. return false");
	    return false;
	}
	Role[] testRoles = funct.getTestRoles();
	List testRoleNames = new ArrayList();
	for (int i = 0; i < testRoles.length; i++) {
	    Role role = testRoles[i];
	    testRoleNames.add(role.getName());
	}

	Iterator iterRoles = roles.iterator();
	String roleName = "";
	while (iterRoles.hasNext()) {
	    roleName = (String) iterRoles.next();
	    if (testRoleNames.contains(roleName)) {
		logger.debug("OUT. return true");
		return true;
	    }
	}
	logger.debug("OUT. return false");
	return false;

    }

    /**
     * Private method called by the corrispondent public method canDev. Executes
     * roles functionalities control .
     * 
     * @param folderId
     *                The id of the lowFunctionality
     * @param profile
     *                user profile
     * @return A boolean control value
     */
    private static boolean canDevInternal(Integer folderId, IEngUserProfile profile) {
	logger.debug("IN");
	Collection roles = null;
	try {
	    roles = profile.getRoles();
	} catch (EMFInternalError emfie) {
	    logger.error("EMFInternalError in profile.getRoles", emfie);
	    logger.debug("OUT. return false");
	    return false;
	}

	LowFunctionality funct = null;
	try {
	    funct = DAOFactory.getLowFunctionalityDAO().loadLowFunctionalityByID(folderId, false);
	} catch (Exception e) {
	    logger.error("EMFInternalError in loadLowFunctionalityByID", e);
	    logger.debug("OUT. return false");
	    return false;
	}
	Role[] devRoles = funct.getDevRoles();
	List devRoleNames = new ArrayList();
	for (int i = 0; i < devRoles.length; i++) {
	    Role role = devRoles[i];
	    devRoleNames.add(role.getName());
	}

	Iterator iterRoles = roles.iterator();
	String roleName = "";
	while (iterRoles.hasNext()) {
	    roleName = (String) iterRoles.next();
	    if (devRoleNames.contains(roleName)) {

		logger.debug("OUT. return true");
		return true;
	    }
	}
	logger.debug("OUT. return false");
	return false;

    }

    /**
     * Controls if the current user can see the document: - if the document is
     * in DEV state the user must have the development permission in a folder
     * containing it; - if the document is in TEST state the user must have the
     * test permission in a folder containing it; - if the document is in REL
     * state the user must have the execution permission in a folder containing
     * it.
     * 
     * @param obj
     *                The BIObject
     * @param profile
     *                user profile
     * 
     * @return A boolean control value
     * 
     * @throws EMFInternalError
     *                 the EMF internal error
     */
    public static boolean canSee(BIObject obj, IEngUserProfile profile) throws EMFInternalError {
	logger.debug("IN");
	boolean canSee = false;
	if (obj == null){
	    logger.warn("BIObject in input is null!!");
	    throw new EMFInternalError(EMFErrorSeverity.ERROR, "BIObject in input is null!!");
	}
	if (profile == null){
	    logger.warn("User profile in input is null!!");
	    throw new EMFInternalError(EMFErrorSeverity.ERROR, "User profile in input is null!!");
	}
	String state = obj.getStateCode();
	if ("SUSP".equalsIgnoreCase(state))
	    return false;
	List foldersId = obj.getFunctionalities();
	if (foldersId == null || foldersId.size() == 0){
	    logger.warn("BIObject does not belong to any functionality!!");
	    throw new EMFInternalError(EMFErrorSeverity.ERROR, "BIObject does not belong to any functionality!!");
	}
	Iterator foldersIdIt = foldersId.iterator();
	while (foldersIdIt.hasNext()) {
	    Integer folderId = (Integer) foldersIdIt.next();
	    boolean canDev = canDev(state, folderId, profile);
	    if (canDev) {
		canSee = true;
		break;
	    }
	    boolean canTest = canTest(state, folderId, profile);
	    if (canTest) {
		canSee = true;
		break;
	    }
	    boolean canExec = canExec(state, folderId, profile);
	    if (canExec) {
		canSee = true;
		break;
	    }
	}
	logger.debug("OUT.canSee=" + canSee);
	return canSee;
    }

}
