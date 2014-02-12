/*
 * SpagoBI, the Open Source Business Intelligence suite
 * � 2005-2015 Engineering Group
 *
 * This file is part of SpagoBI. SpagoBI is free software: you can redistribute it and/or modify it under the terms of the GNU
 * Lesser General Public License as published by the Free Software Foundation, either version 2.1 of the License, or any later version. 
 * SpagoBI is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details. You should have received
 * a copy of the GNU Lesser General Public License along with SpagoBI. If not, see: http://www.gnu.org/licenses/.
 * The complete text of SpagoBI license is included in the COPYING.LESSER file. 
 */
package it.eng.spagobi.engine.cockpit.services.editor;

import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.dataset.cache.ICache;
import it.eng.spagobi.engine.cockpit.CockpitEngineConfig;
import it.eng.spagobi.engine.cockpit.CockpitEngineInstance;
import it.eng.spagobi.services.proxy.DataSetServiceProxy;
import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datawriter.JSONDataWriter;
import it.eng.spagobi.tools.dataset.common.metadata.IFieldMetaData;
import it.eng.spagobi.tools.dataset.common.metadata.IFieldMetaData.FieldType;
import it.eng.spagobi.tools.dataset.common.metadata.IMetaData;
import it.eng.spagobi.tools.dataset.common.query.AggregationFunctions;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.engines.EngineConstants;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceExceptionHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * @authors Andrea Gioia (andrea.gioia@eng.it), Antonella Giachino (antonella.giachino@eng.it)
 * 
 */

@Path("/1.0")
public class DataSetResource { 
	
	// PROPERTIES TO LOOK FOR INTO THE FIELDS
	public static final String PROPERTY_VISIBLE = "visible";
	public static final String PROPERTY_CALCULATED_EXPERT = "calculatedExpert";
	public static final String PROPERTY_IS_SEGMENT_ATTRIBUTE = "isSegmentAttribute";
	public static final String PROPERTY_IS_MANDATORY_MEASURE = "isMandatoryMeasure";
	public static final String PROPERTY_AGGREGATION_FUNCTION = "aggregationFunction";

	static private Logger logger = Logger.getLogger(DataSetResource.class);

	@GET
	@Path("/datasets")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDataSets(@Context HttpServletRequest req) {
		try {
			DataSetServiceProxy proxy = getProxy(req);
			
			JSONArray resultsJSON = new JSONArray();
			return resultsJSON.toString();	
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException("", getEngineInstance(req), t);
		} finally {			
			logger.debug("OUT");
		}	
	}
	
	@GET
	@Path("/dataset/{label}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDataSetMeta(@Context HttpServletRequest req, @PathParam("label") String label) {
		try {
			DataSetServiceProxy proxy = getProxy(req);
			IDataSet dataSet = proxy.getDataSetByLabel(label);
			
			JSONObject resultsJSON = new JSONObject();
			
			resultsJSON.put("id", dataSet.getId());
			resultsJSON.put("label", dataSet.getLabel());
			resultsJSON.put("name", dataSet.getName());
			resultsJSON.put("description", dataSet.getDescription());
			resultsJSON.put("category", dataSet.getCategoryCd());
			resultsJSON.put("creationDate", dataSet.getDateIn());
			resultsJSON.put("author", dataSet.getOwner());
				
			return resultsJSON.toString();	
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException("", getEngineInstance(req), t);
		} finally {			
			logger.debug("OUT");
		}	
	}
	
	@GET
	@Path("/dataset/{label}/fields")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDataSetFieldsMeta(@Context HttpServletRequest req, @PathParam("label") String label) {
		try {
			DataSetServiceProxy proxy = getProxy(req);
			IDataSet dataSet = proxy.getDataSetByLabel(label);
			
			Assert.assertNotNull(dataSet, "The engine instance is missing the dataset!!");
			IMetaData metadata = dataSet.getMetadata();
			Assert.assertNotNull(metadata, "No metadata retrieved by the dataset");
	
			JSONArray fieldsJSON = writeFields(metadata);
			JSONObject resultsJSON = new JSONObject();
			resultsJSON.put("results", fieldsJSON);
		
			return resultsJSON.toString();	
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException("", getEngineInstance(req), t);
		} finally {			
			logger.debug("OUT");
		}	
	}
	
	@GET
	@Path("/dataset/{label}/data")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDataStore(@Context HttpServletRequest req
			, @PathParam("label") String label
			, @QueryParam("offset") @DefaultValue("-1") int offset
			, @QueryParam("fetchSize") @DefaultValue("-1") int fetchSize
			, @QueryParam("maxResults") @DefaultValue("-1") int maxResults) {
		try {
			DataSetServiceProxy proxy = getProxy(req);
			IDataSet dataSet = proxy.getDataSetByLabel(label);
			
			/*
			 * TODO: Controlla se il resultset del dataset � gi� in cache o no
			 * 
			 * - se � presente in cache basta recuperarlo con una get
			 * - se non � presente in cache: carico tramite dataSet.loadData() 
			 * 	 e poi lo scrivo in cache (poi in contemporanea con thread diversi)
			 *  
			 */
			ICache cache = CockpitEngineConfig.getCache();
			String resultsetSignature = dataSet.getSignature();
			IDataStore cachedResultSet = cache.get(resultsetSignature);
			IDataStore dataStore = null;
			if (cachedResultSet == null){
				dataSet.loadData(offset, fetchSize, maxResults);
				dataStore = dataSet.getDataStore();
				//TODO: da eseguire su altro thread concorrente
				cache.put(dataSet,resultsetSignature, dataStore);
			} else {
				dataStore = cachedResultSet;
			}
			
			
			
			
			
			Map<String, Object> properties = new HashMap<String, Object>();
			//JSONArray fieldOptions = this.getAttributeAsJSONArray("fieldsOptions");
			JSONArray fieldOptions = new JSONArray("[{id: 1, options: {measureScaleFactor: 0.5}}]");
			properties.put(JSONDataWriter.PROPERTY_FIELD_OPTION, fieldOptions);
			JSONDataWriter dataSetWriter = new JSONDataWriter(properties);
			//JSONDataWriter dataSetWriter = new JSONDataWriter();
			JSONObject gridDataFeed = (JSONObject)dataSetWriter.write(dataStore);
			
			return gridDataFeed.toString();	
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException("", getEngineInstance(req), t);
		} finally {			
			logger.debug("OUT");
		}	
	}
	
	// ==========================================================================================
	// Utility methods
	// ==========================================================================================
	private CockpitEngineInstance getEngineInstance(HttpServletRequest req) {
		CockpitEngineInstance engineInstance = (CockpitEngineInstance)req.getSession().getAttribute(EngineConstants.ENGINE_INSTANCE );
		return engineInstance;
	}
	private DataSetServiceProxy getProxy(HttpServletRequest req) {
		DataSetServiceProxy datasetProxy = null;
		
		logger.debug("IN");
		
		CockpitEngineInstance engineInstance = getEngineInstance(req);
		Assert.assertNotNull(engineInstance, "It's not possible to execute GetDataSetMetaFields service before having properly created an instance of EngineInstance class");
		
		IEngUserProfile profile = (IEngUserProfile) req.getSession().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		String dsLabel = req.getParameter("dataset");
		
		try {
			datasetProxy = new DataSetServiceProxy((String)profile.getUserUniqueIdentifier() , req.getSession());
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException("", engineInstance, t);
		} finally {			
			logger.debug("OUT");
		}	
		
		return datasetProxy;
	}
	
	// ==========================================================================================
	// Serialization methods
	// ==========================================================================================
	public JSONArray writeFields(IMetaData metadata) throws Exception {

		// field's meta
		JSONArray fieldsMetaDataJSON = new JSONArray();
		
		List<JSONObject> attributesList = new ArrayList<JSONObject>();
		List<JSONObject> measuresList = new ArrayList<JSONObject>();

		int fieldCount = metadata.getFieldCount();
		logger.debug("Number of fields = " + fieldCount);
		Assert.assertTrue(fieldCount > 0, "Dataset has no fields!!!");

		for (int i = 0; i < fieldCount; i++) {
			IFieldMetaData fieldMetaData = metadata.getFieldMeta(i);
			Assert.assertNotNull(fieldMetaData, "Field metadata for position " + i + " not found.");
			logger.debug("Evaluating field with name [" + fieldMetaData.getName() + "], alias [" + fieldMetaData.getAlias() + "] ...");

			Boolean isCalculatedExpert= (Boolean) fieldMetaData.getProperty(PROPERTY_CALCULATED_EXPERT);
			
			if(isCalculatedExpert!=null && isCalculatedExpert){
				logger.debug("The field is a expert calculated field so we skip it");
				//continue;
			}
			
			Object propertyRawValue = fieldMetaData.getProperty(PROPERTY_VISIBLE);
			logger.debug("Read property " + PROPERTY_VISIBLE + ": its value is [" + propertyRawValue + "]");
			
			if (propertyRawValue != null && !propertyRawValue.toString().equals("")
					&& (Boolean.parseBoolean(propertyRawValue.toString()) == false)) {
				logger.debug("The field is not visible");
				continue;
			} else {
				logger.debug("The field is visible");
			}

			String fieldName = getFieldName(fieldMetaData);
			String fieldHeader = getFieldAlias(fieldMetaData);

			JSONObject fieldMetaDataJSON = new JSONObject();
			fieldMetaDataJSON.put("id", fieldName);						
			fieldMetaDataJSON.put("alias", fieldHeader);

			FieldType type = fieldMetaData.getFieldType();
			logger.debug("The field type is " + type.name());
			switch (type) {
			case ATTRIBUTE:
				Object isSegmentAttributeObj = fieldMetaData.getProperty(PROPERTY_IS_SEGMENT_ATTRIBUTE);
				logger.debug("Read property " + PROPERTY_IS_SEGMENT_ATTRIBUTE + ": its value is [" + propertyRawValue + "]");
				String attributeNature = (isSegmentAttributeObj != null
						&& (Boolean.parseBoolean(isSegmentAttributeObj.toString())==true)) ? "segment_attribute" : "attribute";
				
				logger.debug("The nature of the attribute is recognized as " + attributeNature);
				fieldMetaDataJSON.put("nature", attributeNature);
				fieldMetaDataJSON.put("funct", AggregationFunctions.NONE);
				fieldMetaDataJSON.put("iconCls", attributeNature);
				break;
			case MEASURE:
				Object isMandatoryMeasureObj = fieldMetaData.getProperty(PROPERTY_IS_MANDATORY_MEASURE);
				logger.debug("Read property " + PROPERTY_IS_MANDATORY_MEASURE + ": its value is [" + isMandatoryMeasureObj + "]");
				String measureNature = (isMandatoryMeasureObj != null
						&& (Boolean.parseBoolean(isMandatoryMeasureObj.toString())==true)) ? "mandatory_measure" : "measure";
				logger.debug("The nature of the measure is recognized as " + measureNature);
				fieldMetaDataJSON.put("nature", measureNature);
				String aggregationFunction = (String) fieldMetaData.getProperty(PROPERTY_AGGREGATION_FUNCTION);
				logger.debug("Read property " + PROPERTY_AGGREGATION_FUNCTION + ": its value is [" + aggregationFunction + "]");
				fieldMetaDataJSON.put("funct", AggregationFunctions.get(aggregationFunction).getName());
				fieldMetaDataJSON.put("iconCls", measureNature);
				String decimalPrecision= (String) fieldMetaData.getProperty(IFieldMetaData.DECIMALPRECISION);
				if(decimalPrecision!=null){
					fieldMetaDataJSON.put("precision", decimalPrecision);
				}else{
					fieldMetaDataJSON.put("precision", "2");
				}
				break;
			}
			
			if(type.equals(it.eng.spagobi.tools.dataset.common.metadata.IFieldMetaData.FieldType.MEASURE)){
				measuresList.add(fieldMetaDataJSON);
			}
			else{
				attributesList.add(fieldMetaDataJSON);
			}
		}

		
		//  put first measures and only after attributes
		
		for (Iterator iterator = measuresList.iterator(); iterator.hasNext();) {
			JSONObject jsonObject = (JSONObject) iterator.next();
			fieldsMetaDataJSON.put(jsonObject);
		}	

		for (Iterator iterator = attributesList.iterator(); iterator.hasNext();) {
			JSONObject jsonObject = (JSONObject) iterator.next();
			fieldsMetaDataJSON.put(jsonObject);
		}	

		return fieldsMetaDataJSON;

	}

	protected String getFieldAlias(IFieldMetaData fieldMetaData) {
		String fieldAlias = fieldMetaData.getAlias() != null ? fieldMetaData.getAlias() : fieldMetaData.getName();
		return fieldAlias;
	}

	protected String getFieldName(IFieldMetaData fieldMetaData) {
		String fieldName = fieldMetaData.getName();
		return fieldName;
	}


}
