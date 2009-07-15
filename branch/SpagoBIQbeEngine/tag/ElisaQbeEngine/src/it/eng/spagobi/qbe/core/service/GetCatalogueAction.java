/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.spagobi.qbe.core.service;

import java.io.IOException;
import java.util.Iterator;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import it.eng.qbe.query.Query;
import it.eng.qbe.query.QueryMeta;
import it.eng.qbe.query.serializer.QuerySerializerFactory;
import it.eng.qbe.query.serializer.SerializationException;
import it.eng.spago.base.SourceBean;
import it.eng.spagobi.qbe.commons.service.AbstractQbeEngineAction;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceException;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceExceptionHandler;
import it.eng.spagobi.utilities.service.JSONSuccess;


/**
 * Return ids and names of all the query contained into the catalogue
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class GetCatalogueAction extends AbstractQbeEngineAction {	
	
	public static final String SERVICE_NAME = "GET_CATALOGUE_ACTION";
	public String getActionName(){return SERVICE_NAME;}
	
	
	// INPUT PARAMETERS
	// none
	
	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(GetCatalogueAction.class);
   
    
	
	public void service(SourceBean request, SourceBean response)  {				
		
		JSONArray result;
		Iterator it;
		String id;
		Query query;
		QueryMeta meta;
		
		JSONObject queryJSON;
		JSONObject metaJSON;
		
		JSONObject nodeJSON;
		
		logger.debug("IN");
		
		try {
		
			super.service(request, response);		
			
			Assert.assertNotNull(getEngineInstance(), "It's not possible to execute " + this.getActionName() + " service before having properly created an instance of EngineInstance class");
			
			result = new JSONArray();
			it = getEngineInstance().getQueryCatalogue().getIds().iterator();
			while(it.hasNext()) {
				id = (String)it.next();
				query = getEngineInstance().getQueryCatalogue().getQuery(id);
				meta = getEngineInstance().getQueryCatalogue().getQueryMeta(id);
				
				try {					
					queryJSON = serializeQuery(query);
					metaJSON = serializeMeta(meta);
					nodeJSON = createNode(metaJSON, queryJSON);
				} catch (Throwable e) {
					throw new SpagoBIEngineServiceException(getActionName(), "An error occurred while serializig query wiyh id equals to [" + id +"]", e);
				}
				
				result.put(nodeJSON);
			}
			
			try {
				writeBackToClient( new JSONSuccess(result) );
			} catch (IOException e) {
				String message = "Impossible to write back the responce to the client";
				throw new SpagoBIEngineServiceException(getActionName(), message, e);
			}
			
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException(getActionName(), getEngineInstance(), t);
		} finally {
			logger.debug("OUT");
		}	
		
		
	}
	
	// @TODO create a general purpose serializer not dependant on the datamartModel
	private JSONObject serializeQuery(Query query) throws SerializationException {
		return (JSONObject)QuerySerializerFactory.getSerializer("application/json").serialize(query, getEngineInstance().getDatamartModel());
	}

	private JSONObject serializeMeta(QueryMeta meta) throws JSONException {
		JSONObject metaJSON;
		
		metaJSON = new JSONObject();
		metaJSON.put("id", meta.getId());
		metaJSON.put("name", meta.getName());
		return metaJSON;
	}
	
	private JSONObject createNode(JSONObject meta, JSONObject query) throws JSONException {
		JSONObject nodeJSON;
		JSONObject nodeAttributes;
		
		nodeJSON = new JSONObject();
		nodeJSON.put("id", meta.getString("id"));
		nodeJSON.put("text", meta.getString("name"));
		nodeJSON.put("leaf", true);	
		
		nodeAttributes = new JSONObject();
		nodeAttributes.put("iconCls", "icon-query");
		nodeAttributes.put("meta", meta);
		nodeAttributes.put("query", query);
		
		nodeJSON.put("attributes", nodeAttributes);
		
		return nodeJSON;
	}

}
