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
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.LowFunctionality;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.ILowFunctionalityDAO;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.ObjectsAccessVerifier;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExecutionWorkspaceModule extends AbstractModule {

	public static final String MODULE_PAGE = "ExecutionWorkspacePage";
	
	protected List firtsLevelExecutableFolders = new ArrayList();
	protected List subTree = new ArrayList();
	protected String basePath = null;
	protected ILowFunctionalityDAO functionDAO = null;
	protected IEngUserProfile profile = null;
	protected String executionObjectId = null; 
	
	public void service(SourceBean request, SourceBean response) throws Exception {
		debug("service", "Enter service method");
		// finds the id of the document to be executed+
		executionObjectId = (String) request.getAttribute(ObjectsTreeConstants.OBJECT_ID);
		// finds the user profile
		RequestContainer requestContainer = this.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		SessionContainer permanentSession = session.getPermanentContainer();
		profile = (IEngUserProfile) permanentSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		// loads first level functionalities
		functionDAO = DAOFactory.getLowFunctionalityDAO();
		LowFunctionality root = functionDAO.loadRootLowFunctionality(false);
		if (root == null) {
			SpagoBITracer.critical(SpagoBIConstants.NAME_MODULE, "ExecutionWorkspaceModule", 
					"service", "Missing root functionality!");
			throw new Exception("Missing root functionality!");
		}
		List firstLevelFunctions = functionDAO.loadChildFunctionalities(root.getId(), false);
		// filters the first level functionalities by the profile execution permission
		Iterator it = firstLevelFunctions.iterator();
		while (it.hasNext()) {
			LowFunctionality aFolder = (LowFunctionality) it.next();
			if (ObjectsAccessVerifier.canExec(aFolder, profile)) firtsLevelExecutableFolders.add(aFolder);
		}
		if (firtsLevelExecutableFolders.size() == 0) {
			SpagoBITracer.warning(SpagoBIConstants.NAME_MODULE, "ExecutionWorkspaceModule", 
					"service", "The user has no executable folders");
			exit(response);
		}
		
		// finds the base folder between the filtered folders specified by request
		String folderPath = (String) request.getAttribute(TreeObjectsModule.PATH_SUBTREE);
		LowFunctionality baseFolder = null;
		if (folderPath != null) {
			it = firtsLevelExecutableFolders.iterator();
			while (it.hasNext()) {
				LowFunctionality aFolder = (LowFunctionality) it.next();
				if (aFolder.getPath().equals(folderPath)) {
					baseFolder = aFolder;
					break;
				}
			}
		}
		// if the folder is not specified by request, it is considered the firts of the executable folders
		if (baseFolder == null) {
			baseFolder = (LowFunctionality) firtsLevelExecutableFolders.get(0);
		}
		basePath = baseFolder.getPath();
		findsExecutionTree(baseFolder);
		
		exit(response);
	}

	private void findsExecutionTree(LowFunctionality folder) throws EMFUserError {
		if (!ObjectsAccessVerifier.canExec(folder, profile)) return;
		// reloads folder including biobjects
		folder = functionDAO.loadLowFunctionalityByID(folder.getId(), true);
		subTree.add(folder);
		// object not in REL state are not considered
		List objects = folder.getBiObjects();
		List releasedObjects = new ArrayList();
		Iterator it = objects.iterator();
		while (it.hasNext()) {
			BIObject obj = (BIObject) it.next();
			Integer visible = obj.getVisible();
			if (obj.getStateCode().equalsIgnoreCase("REL") && (visible == null || visible.intValue() != 0)) 
					releasedObjects.add(obj);
		}
		folder.setBiObjects(releasedObjects);
		// iterator on the child folders
		List subFolders = functionDAO.loadChildFunctionalities(folder.getId(), false);
		it = subFolders.iterator();
		while (it.hasNext()) {
			LowFunctionality aSubFolder = (LowFunctionality) it.next();
			findsExecutionTree(aSubFolder);
		}
		
	}
	
	private void exit(SourceBean response) throws SourceBeanException {
		response.setAttribute("FIRST_LEVEL_FOLDERS", firtsLevelExecutableFolders);
		response.setAttribute("SUB_TREE", subTree);
		response.setAttribute(TreeObjectsModule.PATH_SUBTREE, basePath);
		response.setAttribute(ObjectsTreeConstants.OBJECT_ID, executionObjectId);
		debug("exit", "Exit from module");
	}
	
	/**
	 * Trace a debug message into the log
	 * @param method Name of the method to store into the log
	 * @param message Message to store into the log
	 */
	private void debug(String method, String message) {
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "ExecutionWorkspaceModule", method, message);
	}
	
}
