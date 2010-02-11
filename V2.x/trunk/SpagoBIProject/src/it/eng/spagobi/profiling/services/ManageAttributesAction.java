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
package it.eng.spagobi.profiling.services;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.x.AbstractSpagoBIAction;
import it.eng.spagobi.chiron.serializer.SerializationException;
import it.eng.spagobi.chiron.serializer.SerializerFactory;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.messages.MessageBuilder;
import it.eng.spagobi.profiling.bean.SbiAttribute;
import it.eng.spagobi.profiling.dao.ISbiAttributeDAO;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.exceptions.SpagoBIServiceException;
import it.eng.spagobi.utilities.service.JSONAcknowledge;
import it.eng.spagobi.utilities.service.JSONSuccess;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Locale;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ManageAttributesAction extends AbstractSpagoBIAction{
	
	private final String MESSAGE_DET = "MESSAGE_DET";
	// type of service
	private final String ATTR_LIST = "ATTR_LIST";
	private final String ATTR_INSERT = "ATTR_INSERT";
	private final String ATTR_DELETE = "ATTR_DELETE";
	
	private final String SAMPLES = "samples";
	private final String ID = "id";
	private final String NAME = "name";
	private final String DESCRIPTION = "description";
	/**
	 * 
	 */
	private static final long serialVersionUID = -3524157303709604995L;
	// logger component
	private static Logger logger = Logger.getLogger(ManageAttributesAction.class);
	
	@Override
	public void doService() {
		logger.debug("IN");
		ISbiAttributeDAO attrDao;
		try {
			attrDao = DAOFactory.getSbiAttributeDAO();
		} catch (EMFUserError e1) {
			logger.error(e1.getMessage(), e1);
			throw new SpagoBIServiceException(SERVICE_NAME,	"Error occurred");
		}
		HttpServletRequest httpRequest = getHttpRequest();
		
		MessageBuilder m = new MessageBuilder();
		Locale locale = m.getLocale(httpRequest);

		String serviceType = this.getAttributeAsString(MESSAGE_DET);
		logger.debug("Service type "+serviceType);
		
		if (serviceType != null && serviceType.contains(ATTR_LIST)) {
			String name = null;
			String description =null;
			String idStr = null;
			try {
				BufferedReader b =httpRequest.getReader();
				if(b!=null){
					String respJsonObject = b.readLine();
					if(respJsonObject!=null){
						JSONObject responseJSON = deserialize(respJsonObject);
						JSONObject samples = responseJSON.getJSONObject(SAMPLES);
						if(!samples.isNull(ID)){
							idStr = samples.getString(ID);
						}
						if(!samples.isNull(NAME)){
							name = samples.getString(NAME);
						}
						if(!samples.isNull(DESCRIPTION)){
							description = samples.getString(DESCRIPTION);
						}
						
						SbiAttribute attribute = new SbiAttribute();
						if(description!=null){
							attribute.setDescription(description);
						}
						if(name!=null){
							attribute.setAttributeName(name);
						}
						if(idStr!=null && !idStr.equals("")){
							Integer attributeId = new Integer(idStr);
							attribute.setAttributeId(attributeId.intValue());
						}
						attrDao.saveOrUpdateSbiAttribute(attribute);
						logger.debug("Attribute updated");
						JSONObject attributesResponseSuccessJSON = new JSONObject();
						attributesResponseSuccessJSON.put("success", true);
						attributesResponseSuccessJSON.put("message", "Added User 1");
						attributesResponseSuccessJSON.put("data", "[]");
						writeBackToClient( new JSONSuccess(attributesResponseSuccessJSON) );		
						
						//else the List of attributes will be sent to the client
					}else{
						getAttributesList(locale,attrDao);
					}
				}else{
					getAttributesList(locale,attrDao);
				}

			} catch (Throwable e) {
				logger.error(e.getMessage(), e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving attributes", e);
			}
		} /*else if (serviceType != null	&& serviceType.equalsIgnoreCase(ATTR_INSERT)) {
		
			String name = null;
			String description =null;
			try {
				BufferedReader b =httpRequest.getReader();
				if(b!=null){
					String respJsonObject = b.readLine();
					if(respJsonObject!=null){
						JSONObject responseJSON = deserialize(respJsonObject);
						JSONObject samples = responseJSON.getJSONObject(SAMPLES);
					
						name = samples.getString(NAME);
						description = samples.getString(DESCRIPTION);
					}
				}
				
			} catch (IOException e1) {
				logger.error("IO Exception",e1);
				e1.printStackTrace();
			} catch (SerializationException e) {
				logger.error("Deserialization Exception",e);
				e.printStackTrace();
			} catch (JSONException e) {
				logger.error("JSONException",e);
				e.printStackTrace();
			}

			if (name != null) {
				SbiAttribute attribute = new SbiAttribute();
				attribute.setDescription(description);
				attribute.setAttributeName(name);
				
				try {
					attrDao.saveSbiAttribute(attribute);
					logger.debug("New attribute inserted");
					writeBackToClient( new JSONSuccess("Operation succeded") );

				} catch (Throwable e) {
					logger.error(e.getMessage(), e);
					throw new SpagoBIServiceException(SERVICE_NAME,
							"Exception occurred while saving new attribute",
							e);
				}
			}else{
				logger.error("Missing attribute name");
				throw new SpagoBIServiceException(SERVICE_NAME,	"Please enter attribute name");
			}
		}*/ else if (serviceType != null	&& serviceType.equalsIgnoreCase(ATTR_DELETE)) {
			
			String idStr = null;
			try {
				BufferedReader b =httpRequest.getReader();
				if(b!=null){
					String respJsonObject = b.readLine();
					if(respJsonObject!=null){
						JSONObject responseJSON = deserialize(respJsonObject);
						idStr = responseJSON.getString(SAMPLES);
					}
				}
				
			} catch (IOException e1) {
				logger.error("IO Exception",e1);
				e1.printStackTrace();
			} catch (SerializationException e) {
				logger.error("Deserialization Exception",e);
				e.printStackTrace();
			} catch (JSONException e) {
				logger.error("JSONException",e);
				e.printStackTrace();
			}
			if(idStr!=null && !idStr.equals("")){
				Integer id = new Integer(idStr);
				try {
					attrDao.deleteSbiAttributeById(id);
					logger.debug("Attribute deleted");
					JSONObject attributesResponseSuccessJSON = new JSONObject();
					attributesResponseSuccessJSON.put("success", true);
					attributesResponseSuccessJSON.put("message", "Destroyed User 1");
					attributesResponseSuccessJSON.put("data", "[]");
					writeBackToClient( new JSONSuccess(attributesResponseSuccessJSON) );
	
				} catch (Throwable e) {
					logger.error("Exception occurred while deleting attribute", e);
					throw new SpagoBIServiceException(SERVICE_NAME,
							"Exception occurred while deleting attribute",
							e);
				}
			}
		}
		logger.debug("OUT");
		
	}
	
	private void getAttributesList(Locale locale,ISbiAttributeDAO attrDao) throws SerializationException, IOException, EMFUserError, JSONException{
		ArrayList<SbiAttribute> attributes = (ArrayList<SbiAttribute>)attrDao.loadSbiAttributes();
		logger.debug("Loaded attributes list");
		JSONArray attributesJSON = (JSONArray) SerializerFactory.getSerializer("application/json").serialize(attributes,	locale);
		JSONObject attributesResponseJSON = createJSONResponseAttributes(attributesJSON);

		writeBackToClient(new JSONSuccess(attributesResponseJSON));

	}
	
	/**
	 * Creates a json array with children attributes informations
	 * 
	 * @param rows
	 * @return
	 * @throws JSONException
	 */
	private JSONObject createJSONResponseAttributes(JSONArray rows)
			throws JSONException {
		JSONObject results;

		results = new JSONObject();
		results.put("title", "Attributes");
		results.put(SAMPLES, rows);
		return results;
	}
	
	private JSONObject deserialize(Object o) throws SerializationException {
		JSONObject responseJSON = null;
		logger.debug("IN");
		
		try {
			Assert.assertNotNull(o, "Object to be deserialized cannot be null");
			
			if(o instanceof String) {
				logger.debug("Deserializing string [" + (String)o + "]");
				try {
					responseJSON = new JSONObject( (String)o );
				} catch(Throwable t) {
					logger.error("Object to be deserialized must be string encoding a JSON object",t);
					throw new SerializationException("An error occurred while deserializing query: " + (String)o, t);
				}
			} else {
				Assert.assertUnreachable("Object to be deserialized must be of type string or of type JSONObject, not of type [" + o.getClass().getName() + "]");
			}
		
		} finally {
			logger.debug("OUT");
		}
		return responseJSON;
	}
	
}
