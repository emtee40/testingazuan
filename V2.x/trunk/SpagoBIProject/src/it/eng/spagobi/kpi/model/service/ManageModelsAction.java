/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2009 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.kpi.model.service;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.x.AbstractSpagoBIAction;
import it.eng.spagobi.analiticalmodel.document.x.SaveMetadataAction;
import it.eng.spagobi.chiron.serializer.SerializationException;
import it.eng.spagobi.chiron.serializer.SerializerFactory;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.metadata.SbiExtRoles;
import it.eng.spagobi.commons.utilities.messages.MessageBuilder;
import it.eng.spagobi.kpi.model.bo.Model;
import it.eng.spagobi.profiling.bean.SbiAttribute;
import it.eng.spagobi.profiling.bean.SbiUser;
import it.eng.spagobi.profiling.bo.UserBO;
import it.eng.spagobi.profiling.dao.ISbiUserDAO;
import it.eng.spagobi.utilities.exceptions.SpagoBIServiceException;
import it.eng.spagobi.utilities.service.JSONAcknowledge;
import it.eng.spagobi.utilities.service.JSONSuccess;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ManageModelsAction extends AbstractSpagoBIAction {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8920524215721282986L;
	// logger component
	private static Logger logger = Logger.getLogger(SaveMetadataAction.class);
	private final String MESSAGE_DET = "MESSAGE_DET";
	// type of service
	private final String MODELS_LIST = "MODELS_LIST";
	private final String USER_INSERT = "USER_INSERT";
	private final String USER_DELETE = "USER_DELETE";

	
	private final String MODEL_DOMAIN_TYPE_ROOT = "MODEL_ROOT";
	private final String MODEL_DOMAIN_TYPE_NODE = "MODEL_NODE";
	// USER detail
	private final String ID = "id";
	private final String USER_ID = "userId";
	private final String FULL_NAME = "fullName";
	private final String PASSWORD = "pwd";
	
	private final String ROLES = "userRoles";
	private final String ATTRIBUTES = "userAttributes";


	@Override
	public void doService() {
		logger.debug("IN");
		ISbiUserDAO userDao;
		try {
			userDao = DAOFactory.getSbiUserDAO();
		} catch (EMFUserError e1) {
			logger.error(e1.getMessage(), e1);
			throw new SpagoBIServiceException(SERVICE_NAME,	"Error occurred");
		}
		Locale locale = getLocale();

		String serviceType = this.getAttributeAsString(MESSAGE_DET);
		logger.debug("Service type "+serviceType);
		if (serviceType != null && serviceType.equalsIgnoreCase(MODELS_LIST)) {
			
			try {				
				String parentId = (String)getAttributeAsString("ID");
				//String parentId = "1";
				Model aModel = DAOFactory.getModelDAO().loadModelWithChildrenById(Integer.parseInt(parentId));
				
				logger.debug("Loaded model tree");
				JSONArray modelChildrenJSON = (JSONArray) SerializerFactory.getSerializer("application/json").serialize(aModel.getChildrenNodes(),	locale);
				//JSONObject treeResponseJSON = createJSONResponseModelTree(modelChildrenJSON, aModel.getName());

				writeBackToClient(new JSONSuccess(modelChildrenJSON));

			} catch (Throwable e) {
				logger.error("Exception occurred while retrieving model tree", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving model tree", e);
			}
		} else if (serviceType != null	&& serviceType.equalsIgnoreCase(USER_INSERT)) {
			Integer id = getAttributeAsInteger(ID);
			String userId = getAttributeAsString(USER_ID);
			String fullName = getAttributeAsString(FULL_NAME);
			String password = getAttributeAsString(PASSWORD);
			JSONArray rolesJSON = getAttributeAsJSONArray(ROLES);
			JSONArray attributesJSON = getAttributeAsJSONArray(ATTRIBUTES);
			if (userId != null) {
				SbiUser user = new SbiUser();
				user.setUserId(userId);
				user.setFullName(fullName);
				if(password != null){
					user.setPassword(password);
				}				
				
				if(id!=null){
					user.setId(id);
				}
				try {
					HashMap<Integer, String> attrList = null;
					if(attributesJSON != null){
						attrList = deserializeAttributesJSONArray(attributesJSON);
					}
					
					List rolesList = null;
					if(rolesJSON != null){
						rolesList = deserializeRolesJSONArray(rolesJSON);
					}
					
					id = userDao.fullSaveOrUpdateSbiUser(user, rolesList, attrList);
					logger.debug("User udated or Inserted");
					
					//Integer id = userDao.saveSbiUser(user);
					logger.debug("New user inserted");
					JSONObject attributesResponseSuccessJSON = new JSONObject();
					attributesResponseSuccessJSON.put("success", true);
					attributesResponseSuccessJSON.put("responseText", "Operation succeded");
					attributesResponseSuccessJSON.put("id", id);
					writeBackToClient( new JSONSuccess(attributesResponseSuccessJSON) );

				} catch (EMFUserError e) {
					logger.error("Exception occurred while saving new user", e);
					writeErrorsBackToClient();
					throw new SpagoBIServiceException(SERVICE_NAME,	"Exception occurred while saving new user",	e);
				} catch (IOException e) {
					logger.error("Exception occurred while writing response to client", e);
					throw new SpagoBIServiceException(SERVICE_NAME,
							"Exception occurred while writing response to client",
							e);
				} catch (JSONException e) {
					logger.error("JSON Exception", e);
					e.printStackTrace();
				}
			}else{
				logger.error("User name missing");
				throw new SpagoBIServiceException(SERVICE_NAME,	"Please enter user name");
			}
		} else if (serviceType != null	&& serviceType.equalsIgnoreCase(USER_DELETE)) {
			Integer id = getAttributeAsInteger(ID);
			try {
				userDao.deleteSbiUserById(id);
				logger.debug("User deleted");
				writeBackToClient( new JSONAcknowledge("Operation succeded") );

			} catch (Throwable e) {
				logger.error("Exception occurred while retrieving user to delete", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving user to delete",
						e);
			}
		}else if(serviceType == null){
			try {
				List nodeTypesNodes = DAOFactory.getDomainDAO().loadListDomainsByType(MODEL_DOMAIN_TYPE_NODE);
				List nodeTypesRoot = DAOFactory.getDomainDAO().loadListDomainsByType(MODEL_DOMAIN_TYPE_ROOT);
				List nodeTypes = new ArrayList();
				nodeTypes.addAll(nodeTypesNodes);
				nodeTypes.addAll(nodeTypesRoot);
				getSessionContainer().setAttribute("nodeTypesList", nodeTypes);
				
			} catch (EMFUserError e) {
				logger.error(e.getMessage(), e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception retrieving model types", e);
			}
		}
		logger.debug("OUT");

	}

	/**
	 * Creates a json array with children users informations
	 * 
	 * @param rows
	 * @return
	 * @throws JSONException
	 */
	private JSONObject createJSONResponseModelTree(JSONArray rows, String root)
			throws JSONException {
		JSONObject results;

		results = new JSONObject();
		//results.put("root", root);
		results.put(root, rows);
		return results;
	}
	
	private List deserializeRolesJSONArray(JSONArray rows) throws JSONException{
		List toReturn = new ArrayList();
		//HashMap<Integer, String> toReturn = new HashMap<Integer, String>();
		for(int i=0; i< rows.length(); i++){
			JSONObject obj = (JSONObject)rows.get(i);
			Integer id = obj.getInt("id");
			//String name = obj.getString("name");
			//String description = obj.getString("description");
			toReturn.add(id);
		}	
		return toReturn;
	}
	
	private HashMap<Integer, String> deserializeAttributesJSONArray(JSONArray rows) throws JSONException{
		HashMap<Integer, String> toReturn = new HashMap<Integer, String>();
		for(int i=0; i< rows.length(); i++){
			JSONObject obj = (JSONObject)rows.get(i);
			Integer key = obj.getInt("id");
			String value = obj.getString("value");
			toReturn.put(key, value);
		}	
		return toReturn;
	}

}
