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
package it.eng.spagobi.engines.qbe.services;


import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

import com.jamonapi.Monitor;
import com.jamonapi.MonitorFactory;

import it.eng.qbe.model.QbeDataSet;
import it.eng.qbe.query.Query;
import it.eng.qbe.statment.IStatement;
import it.eng.qbe.statment.hibernate.HQLStatement;
import it.eng.spago.base.SourceBean;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datawriter.JSONDataWriter;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.engines.EngineConstants;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceException;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceExceptionHandler;
import it.eng.spagobi.utilities.service.JSONSuccess;

/**
 * @author Davide Zerbetto (davide.zerbetto@eng.it)
 */
public class GetFilterValuesAction extends AbstractQbeEngineAction {
	
	public static final String SERVICE_NAME = "GET_FILTER_VALUES_ACTION";
	
	// request parameters
	public static String ENTITY_ID = "ENTITY_ID";
	public static String ORDER_ENTITY = "ORDER_ENTITY";
	public static String ORDER_TYPE = "ORDER_TYPE";
	public static String FILTERS = "FILTERS";	
	public static String MODE = "MODE";
	public static String MODE_SIMPLE = "simple";
	public static String MODE_COMPLETE = "complete";
	public static String START = "start";
	public static String LIMIT = "limit";
	
	
	// logger component
	private static Logger logger = Logger.getLogger(GetFilterValuesAction.class);
	
	
	public void service(SourceBean request, SourceBean response) {
		
		IDataStore dataStore = null;
		QbeDataSet dataSet = null;
		JSONDataWriter dataSetWriter;
		Query query = null;
		IStatement statement = null;
		
		Integer resultNumber = null;
		JSONObject gridDataFeed = new JSONObject();
		
		Monitor totalTimeMonitor = null;
		Monitor errorHitsMonitor = null;
		
		logger.debug("IN");
		
		try {
			
			super.service(request, response);	
		
			totalTimeMonitor = MonitorFactory.start("QbeEngine.getFilterValuesAction.totalTime");
			
			query = buildQuery();
			statement = getDatamartModel().createStatement( query );
			
			statement.setParameters( getEnv() );
			
			String hqlQuery = statement.getQueryString();
			String sqlQuery = ((HQLStatement)statement).getSqlQueryString();
			logger.debug("Executable query (HQL): [" +  hqlQuery+ "]");
			logger.debug("Executable query (SQL): [" + sqlQuery + "]");
			
			try {
				logger.debug("Executing query ...");
				dataSet = new QbeDataSet(statement);
				dataSet.setAbortOnOverflow(true);
				
				Map userAttributes = new HashMap();
				UserProfile profile = (UserProfile)this.getEnv().get(EngineConstants.ENV_USER_PROFILE);
				Iterator it = profile.getUserAttributeNames().iterator();
				while(it.hasNext()) {
					String attributeName = (String)it.next();
					Object attributeValue = profile.getUserAttribute(attributeName);
					userAttributes.put(attributeName, attributeValue);
				}
				dataSet.addBinding("attributes", userAttributes);
				dataSet.addBinding("parameters", this.getEnv());
				dataSet.loadData();
				
				dataStore = dataSet.getDataStore();
				Assert.assertNotNull(dataStore, "The dataStore returned by loadData method of the class [" + dataSet.getClass().getName()+ "] cannot be null");
			} catch (Exception e) {
				logger.debug("Query execution aborted because of an internal exceptian");
				SpagoBIEngineServiceException exception;
				String message;
				
				message = "An error occurred in " + getActionName() + " service while executing query: [" +  statement.getQueryString() + "]";				
				exception = new SpagoBIEngineServiceException(getActionName(), message, e);
				exception.addHint("Check if the query is properly formed: [" + statement.getQueryString() + "]");
				exception.addHint("Check connection configuration");
				exception.addHint("Check the qbe jar file");
				
				throw exception;
			}
			logger.debug("Query executed succesfully");
			
			resultNumber = (Integer)dataStore.getMetaData().getProperty("resultNumber");
			Assert.assertNotNull(resultNumber, "property [resultNumber] of the dataStore returned by loadData method of the class [" + dataSet.getClass().getName()+ "] cannot be null");
			logger.debug("Total records: " + resultNumber);			
			
			dataSetWriter = new JSONDataWriter();
			gridDataFeed = (JSONObject)dataSetWriter.write(dataStore);
			
			try {
				writeBackToClient( new JSONSuccess(gridDataFeed) );
			} catch (IOException e) {
				String message = "Impossible to write back the responce to the client";
				throw new SpagoBIEngineServiceException(getActionName(), message, e);
			}
			
		} catch(Throwable t) {
			errorHitsMonitor = MonitorFactory.start("QbeEngine.errorHits");
			errorHitsMonitor.stop();
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException(getActionName(), getEngineInstance(), t);
		} finally {
			if (totalTimeMonitor != null) totalTimeMonitor.stop();
			logger.debug("OUT");
		}		

	}


	private Query buildQuery() throws JSONException {
		logger.debug("IN");
		String entityId = getAttributeAsString(ENTITY_ID);
		logger.debug("entityId: " + entityId);
		String orderEntity = getAttributeAsString(ORDER_ENTITY);
		logger.debug("orderEntity: " + orderEntity);
		String orderType = getAttributeAsString(ORDER_TYPE);
		logger.debug("orderType: " + orderType);
		
		Assert.assertNotNull(entityId, "Parameter [" + ENTITY_ID + "] cannot be null" );
		if (orderType == null || orderType.trim().equals("")) {
			orderType = "NONE";
		}
		
		Query query = new Query();
		query.addSelectFiled(entityId, "NONE", "Valori", true, true, false, (orderEntity != null && !orderEntity.trim().equals("")) ? null : orderType);
		query.setDistinctClauseEnabled(true);
		if (orderEntity != null) {
			query.addSelectFiled(orderEntity, "NONE", "Ordinamento", false, false, false, orderType);
		}
		logger.debug("OUT");
		return query;
	}
		
}
