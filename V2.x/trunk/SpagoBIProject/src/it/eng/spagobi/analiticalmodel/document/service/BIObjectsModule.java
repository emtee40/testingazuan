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
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.Snapshot;
import it.eng.spagobi.analiticalmodel.functionalitytree.service.TreeObjectsModule;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.tools.scheduler.utils.SchedulerUtilities;

import java.util.List;

import org.apache.log4j.Logger;

/**
 * Presentation page for the BIObjects.
 */

public class BIObjectsModule extends AbstractModule {
	static private Logger logger = Logger.getLogger(BIObjectsModule.class);
	public static final String MODULE_PAGE = "BIObjectsPage";
    public static final String MODALITY = "MODALITY";
    public static final String SINGLE_OBJECT = "SINGLE_OBJECT";
    public static final String FILTER_TREE = "FILTER_TREE";
    public static final String ENTIRE_TREE = "ENTIRE_TREE";
    public static final String LABEL_SINGLE_OBJECT = "LABEL_SINGLE_OBJECT";
    // MPENNINGROTH 25-Jan-2008 add sub object label support
    public static final String LABEL_SUB_OBJECT = "LABEL_SUB_OBJECT";
    public static final String PARAMETERS_SINGLE_OBJECT = "PARAMETERS_SINGLE_OBJECT";    
    public static final String PATH_SUBTREE = "PATH_SUBTREE";
    public static final String HEIGHT_AREA = "HEIGHT_AREA";
    public static final String SNAPSHOT_NAME = "SNAPSHOT_NAME";
    public static final String SNAPSHOT_HISTORY = "SNAPSHOT_HISTORY";
	
    SessionContainer sessionContainer = null;
    EMFErrorHandler errorHandler = null;
	
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		try {
			debug("service", "enter service method");
			errorHandler = getErrorHandler();
			debug("service", "error handler retrived");
			RequestContainer requestContainer = getRequestContainer();
            sessionContainer = requestContainer.getSessionContainer();
			debug("service", "sessionContainer and permanentContainer retrived");
            debug("service", "user profile retrived");
            String modality = ChannelUtilities.getPreferenceValue(requestContainer, MODALITY, "");
            debug("service", "using "+modality+" modality");
            if (modality != null) {
                if (modality.equalsIgnoreCase(SINGLE_OBJECT)) {
                	singleObjectModalityHandler(request, response);
                } else if (modality.equalsIgnoreCase(FILTER_TREE)) {
                	String initialPath = ChannelUtilities.getPreferenceValue(requestContainer, TreeObjectsModule.PATH_SUBTREE, "");
                	treeModalityHandler(request, response, initialPath);
                } else {               	
                	treeModalityHandler(request, response, null);
                }
            } else {
            	treeModalityHandler(request, response, null);
            }
		} catch (Exception e) {
			logger.error("Error while processing request of service",e);
			EMFUserError emfu = new EMFUserError(EMFErrorSeverity.ERROR, 101);
			errorHandler.addError(emfu); 
		}
		
	}
	
		
		/**
	 * Set information into response for entering a 
	 * 
	 * @param request
	 *            The Spago Request SourceBean
	 * @param response
	 *            The Spago Response SourceBean
	 * @param initialPath
	 *           initial path
	 */
	private void treeModalityHandler(SourceBean request,SourceBean response,  
			                         String initialPath) throws SourceBeanException {
		String objectsView = null;
		String operation = (String) request.getAttribute(SpagoBIConstants.OPERATION);
		if (operation != null && operation.equals(SpagoBIConstants.FUNCTIONALITIES_OPERATION)) {
			objectsView = SpagoBIConstants.VIEW_OBJECTS_AS_TREE;
		} else {
			objectsView = (String) request.getAttribute(SpagoBIConstants.OBJECTS_VIEW);
			if (objectsView == null) {
				// finds objects view modality from portlet preferences
				objectsView = ChannelUtilities.getPreferenceValue(this.getRequestContainer(), SpagoBIConstants.OBJECTS_VIEW, SpagoBIConstants.VIEW_OBJECTS_AS_TREE);
			}
			// default value in case it is not specified or in case the value is not valid
			if (objectsView == null
					|| (!objectsView
							.equalsIgnoreCase(SpagoBIConstants.VIEW_OBJECTS_AS_LIST) && !objectsView
							.equalsIgnoreCase(SpagoBIConstants.VIEW_OBJECTS_AS_TREE)))
				objectsView = SpagoBIConstants.VIEW_OBJECTS_AS_TREE;
		}

		if (initialPath != null && !initialPath.trim().equals("")) 
			response.setAttribute(TreeObjectsModule.PATH_SUBTREE, initialPath);
		
		response.setAttribute(SpagoBIConstants.OBJECTS_VIEW, objectsView);

	}
		

	/**
	 * Set information into response for the execution of a single object
	 * 
	 * @param request
	 *            The request SourceBean
	 * @param response
	 *            The response SourceBean
	 * @param prefs
	 *            Portlet Preferences
	 */
	private void singleObjectModalityHandler(SourceBean request, SourceBean response) throws Exception {
		debug("singleObjectModalityHandler", "enter singleObjectModalityHandler");
		RequestContainer requestContainer = this.getRequestContainer();
		// get from preferences the label of the object
		String label = ChannelUtilities.getPreferenceValue(requestContainer, LABEL_SINGLE_OBJECT, "");
		debug("singleObjectModalityHandler", "using object label " + label);
		// if label is not set then throw an exception
		if (label == null || label.trim().equals("")) {
			logger.error("Object's label not set");
        	throw new Exception("Label not set");
        }
		// get from preferences the parameters used by the object during execution
		String parameters = ChannelUtilities.getPreferenceValue(requestContainer, PARAMETERS_SINGLE_OBJECT, "");
		debug("singleObjectModalityHandler", "using parameters " + parameters);
		// get from preferences the height of the area
		String heightArea = ChannelUtilities.getPreferenceValue(requestContainer, HEIGHT_AREA, "");
		debug("singleObjectModalityHandler", "using height of area " + heightArea);
		// get from preferences the snapshot name
		String snapName = ChannelUtilities.getPreferenceValue(requestContainer, SNAPSHOT_NAME, "");
		debug("singleObjectModalityHandler", "using snapshot name " + snapName);
		// get from preferences the snapshot history
		String snapHistStr = ChannelUtilities.getPreferenceValue(requestContainer, SNAPSHOT_HISTORY, "0");
		debug("singleObjectModalityHandler", "using snapshot history " + snapHistStr);
		// MPENNINGROTH 25-Jan-2008 add sub object label support
		String labelSubObject = ChannelUtilities.getPreferenceValue(requestContainer, LABEL_SUB_OBJECT, "");
		debug("singleObjectModalityHandler", "using subobject " + labelSubObject);
		
		// load biobject
		BIObject obj = DAOFactory.getBIObjectDAO().loadBIObjectByLabel(label);
		// if the height of the area is set put it into the session
        if (heightArea != null && !heightArea.trim().equals("")) 
        	sessionContainer.setAttribute(SpagoBIConstants.HEIGHT_OUTPUT_AREA, heightArea);
        // put in session the modality 
        sessionContainer.setAttribute(SpagoBIConstants.MODALITY, 
        		                      SpagoBIConstants.SINGLE_OBJECT_EXECUTION_MODALITY);
		
        if(!snapName.trim().equalsIgnoreCase("")) {
        	// get the snapshot history
        	int snapHist = 0;
        	try{
        		Integer snapHistI = new Integer(snapHistStr);
        		snapHist = snapHistI.intValue();
        	} catch (Exception e) {
        		logger.error("Snapshot history preference value is not a valid integer number, using default 0");
        		snapHist = 0;
        	}
        	// get the all the snapshots of the objects
        	List allsnapshots = null;
    		// recover only the snapshot with the name requested
    		Snapshot snap = SchedulerUtilities.getNamedHistorySnapshot(allsnapshots,snapName,snapHist);
    		response.setAttribute(SpagoBIConstants.SNAPSHOT_ID, snap.getId());
    		// set into the reponse the publisher name for object execution
            response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "loopbackSnapshotExecution");
        } else {
        	// set into the response the right information for loopback
            response.setAttribute(ObjectsTreeConstants.OBJECT_ID, obj.getId().toString());
    		// set into the reponse the publisher name for object execution
            response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, 
            					  SpagoBIConstants.PUBLISHER_LOOPBACK_SINGLE_OBJECT_EXEC);
            // if the parameters is set put it into the session
            if (parameters != null && !parameters.trim().equals("")) 
            	sessionContainer.setAttribute(SpagoBIConstants.PARAMETERS, parameters);
            // MPENNINGROTH 25-Jan-2008 add subObject if present
            if (!labelSubObject.trim().equalsIgnoreCase("")) {
            	sessionContainer.setAttribute(LABEL_SUB_OBJECT, labelSubObject);
            }
        }
        
        debug("singleObjectModalityHandler", "end method");
	}
	
	/**
	 * Trace a debug message into the log
	 * @param method Name of the method to store into the log
	 * @param message Message to store into the log
	 */
	private void debug(String method, String message) {
		logger.debug(message);
	}


}
