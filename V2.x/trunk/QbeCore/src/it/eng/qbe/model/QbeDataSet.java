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
package it.eng.qbe.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.apache.log4j.Logger;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;

import it.eng.qbe.query.CalculatedSelectField;
import it.eng.qbe.query.DataMartSelectField;
import it.eng.qbe.query.ISelectField;
import it.eng.qbe.query.Query;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.tools.dataset.bo.AbstractDataSet;
import it.eng.spagobi.tools.dataset.common.datastore.DataStore;
import it.eng.spagobi.tools.dataset.common.datastore.DataStoreMetaData;
import it.eng.spagobi.tools.dataset.common.datastore.Field;
import it.eng.spagobi.tools.dataset.common.datastore.FieldMetadata;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStoreMetaData;
import it.eng.spagobi.tools.dataset.common.datastore.IFieldMetaData;
import it.eng.spagobi.tools.dataset.common.datastore.IRecord;
import it.eng.spagobi.tools.dataset.common.datastore.Record;
import it.eng.spagobi.utilities.assertion.Assert;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class QbeDataSet extends AbstractDataSet {

	private IStatement statement;
	private IDataStore dataStore;
	private boolean abortOnOverflow;	
	private Map bindings;
	
	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(QbeDataSet.class);
    
	
	public QbeDataSet(IStatement statement) {
		setStatement(statement);
		bindings = new HashMap();
	}
	
	
	
	public void loadData() throws EMFUserError, EMFInternalError {
		loadData(0, -1, -1);
	}
	
	public void loadData(int offset, int fetchSize, int maxResults) throws EMFUserError, EMFInternalError {
		Session session = null;
		org.hibernate.Query hibernateQuery;
		int resultNumber;
		boolean overflow;
		
		try{		
			session = statement.getDataMartModel().getDataSource().getSessionFactory().openSession();
			
			// execute query
			hibernateQuery = session.createQuery( statement.getQueryString() );	
			ScrollableResults scrollableResults = hibernateQuery.scroll();
			scrollableResults.last();
			resultNumber = scrollableResults.getRowNumber() + 1; // Hibernate ScrollableResults row number starts with 0
			resultNumber = resultNumber < 0? 0: resultNumber;
			overflow = (maxResults > 0) && (resultNumber >= maxResults);
			
			List result = null;
			
			if (overflow && abortOnOverflow) {
				// does not execute query
				result = new ArrayList();
			} else {
				offset = offset < 0 ? 0 : offset;
				if(maxResults > 0) {
					fetchSize = (fetchSize > 0)? Math.min(fetchSize, maxResults): maxResults;
				}
				
				hibernateQuery.setFirstResult(offset);
				if(fetchSize > 0) hibernateQuery.setMaxResults(fetchSize);			
				result = hibernateQuery.list();
			}	
			
			dataStore = toDataStore(result);
			dataStore.getMetaData().setProperty("resultNumber", resultNumber);						
		} finally {
			if (session != null && session.isOpen())
			session.close();
		}		
	}
	
	public IDataStore getDataStore() {
		return dataStore;
	}
	
	
	
	
	private DataStoreMetaData getDataStoreMeta(Query query) {
		DataStoreMetaData dataStoreMeta;
		ISelectField queryFiled;
		FieldMetadata dataStoreFieldMeta;
		
		dataStoreMeta = new DataStoreMetaData();
		
		Iterator fieldsIterator = query.getSelectFields(true).iterator();
		while(fieldsIterator.hasNext()) {
			queryFiled = (ISelectField)fieldsIterator.next();
			
			dataStoreFieldMeta = new FieldMetadata();
			dataStoreFieldMeta.setName( queryFiled.getAlias() );
			if(queryFiled.isDataMartField()) {
				dataStoreFieldMeta.setProperty("calculated", new Boolean(false));
				dataStoreFieldMeta.setProperty("uniqueName", ((DataMartSelectField)queryFiled).getUniqueName());
				dataStoreFieldMeta.setType(Object.class);
				
			} else {
				CalculatedSelectField claculatedQueryField = (CalculatedSelectField)queryFiled;
				dataStoreFieldMeta.setProperty("calculated", new Boolean(true));	
				// fixme also calculated field must have uniquename for uniformity
				dataStoreFieldMeta.setProperty("uniqueName", claculatedQueryField.getAlias());
				DataSetVariable variable = new DataSetVariable(claculatedQueryField.getAlias(), claculatedQueryField.getType(), claculatedQueryField.getExpression());
				dataStoreFieldMeta.setProperty("variable", variable);	
				dataStoreFieldMeta.setType( variable.getTypeClass() );	
				
			}
			dataStoreFieldMeta.setProperty("visible", new Boolean(queryFiled.isVisible()));	
			
			dataStoreMeta.addFiedMeta(dataStoreFieldMeta);
		}
		
		return dataStoreMeta;
	}
	
	
	
	private DataStore toDataStore(List result) {
		DataStore dataStore;
		DataStoreMetaData dataStoreMeta;
		Object[] row;
	
		dataStore = new DataStore();
		dataStoreMeta = getDataStoreMeta( statement.getQuery() );
		dataStore.setMetaData(dataStoreMeta);
			
		Iterator it = result.iterator();
		while(it.hasNext()) {
			Object o = it.next();
			
		    if (!(o instanceof Object[])){
		    	row = new Object[1];
		    	row[0] = o == null? "": o;
		    }else{
		    	row = (Object[])o;
		    }
		    
		    
		    IRecord record = new Record(dataStore);
		    for(int i = 0,  j = 0; i < dataStoreMeta.getFieldCount(); i++) {
				IFieldMetaData fieldMeta = dataStoreMeta.getFieldMeta(i);
				Boolean calculated = (Boolean)fieldMeta.getProperty("calculated");
				if(calculated.booleanValue() == false) {
					Assert.assertTrue(j < row.length, "Impossible to read field [" + fieldMeta.getName() + "] from resultset");
					record.appendField( new Field( row[j] ) );
					j++;					
				} else {
					DataSetVariable variable = (DataSetVariable)fieldMeta.getProperty("variable");
					if(variable.getResetType() == DataSetVariable.RESET_TYPE_RECORD) {
						variable.reset();
					}
					
					record.appendField( new Field( variable.getValue()) );
				}
			}
		    
		    processCalculatedFields(record, dataStore);
		    dataStore.appendRecord(record);
		}
		
		return dataStore;
	}
	
	private void processCalculatedFields(IRecord record, IDataStore dataStore) {
		IDataStoreMetaData dataStoreMeta;
		List calculatedFieldsMeta;
		
		dataStoreMeta = dataStore.getMetaData();
		calculatedFieldsMeta = dataStoreMeta.findFieldMeta("calculated", Boolean.TRUE);
		for(int i = 0; i < calculatedFieldsMeta.size(); i++) {
			IFieldMetaData fieldMeta = (IFieldMetaData)calculatedFieldsMeta.get(i);
			DataSetVariable variable = (DataSetVariable)fieldMeta.getProperty("variable");
			
			ScriptEngineManager scriptManager = new ScriptEngineManager();
			ScriptEngine groovyScriptEngine = scriptManager.getEngineByName("groovy");
			
			
			// handle bindings 
			// ... static bindings first
			Iterator it = bindings.keySet().iterator();
			while(it.hasNext()) {
				String bindingName = (String)it.next();
				Object bindingValue = bindings.get(bindingName);
				groovyScriptEngine.put(bindingName, bindingValue);
			}
			
			// ... then runtime bindings
			Map qFields = new HashMap();
			Map dmFields = new HashMap();
			Object[] columns = new Object[dataStoreMeta.getFieldCount()];
			for(int j = 0; j < dataStoreMeta.getFieldCount(); j++) {
				qFields.put(dataStoreMeta.getFieldName(j), record.getFieldAt(j).getValue());
				dmFields.put(dataStoreMeta.getFieldMeta(j).getProperty("uniqueName"), record.getFieldAt(j).getValue());
				columns[j] = record.getFieldAt(j).getValue();
			}
			
			groovyScriptEngine.put("qFields", qFields); // key = alias
			groovyScriptEngine.put("dmFields", dmFields); // key = id
			groovyScriptEngine.put("fields", qFields); // default key = alias
			groovyScriptEngine.put("columns", columns); // key = col-index
			
			// show time
			Object calculatedValue = null;
			try {
				calculatedValue = groovyScriptEngine.eval(variable.getExpression());
				
			} catch (ScriptException ex) {
				calculatedValue = "NA";
			    ex.printStackTrace();
			}	
			
			//logger.debug("Field [" + fieldMeta.getName()+ "] is equals to [" + calculatedValue + "]");
			variable.setValue(calculatedValue);
			
			record.getFieldAt(dataStoreMeta.getFieldIndex(fieldMeta.getName())).setValue(variable.getValue());
		}
	}
	
	
	public void printInfo() {
		ScriptEngineManager mgr = new ScriptEngineManager();
		List<ScriptEngineFactory> factories = mgr.getEngineFactories();
		
		for (ScriptEngineFactory factory: factories) {
		    System.out.println("ScriptEngineFactory Info");
		    String engName = factory.getEngineName();
		    String engVersion = factory.getEngineVersion();
		    String langName = factory.getLanguageName();
		    String langVersion = factory.getLanguageVersion();
		    System.out.printf("\tScript Engine: %s (%s)\n", engName, engVersion);
		    List<String> engNames = factory.getNames();
		    for(String name: engNames) {
		      System.out.printf("\tEngine Alias: %s\n", name);
		    }
		    System.out.printf("\tLanguage: %s (%s)\n", langName, langVersion);
		  }   
	}
	
	public IDataStore fetchNext() {
		// TODO Auto-generated method stub
		return null;
	}

	

	public Object getQuery() {
		// TODO Auto-generated method stub
		return null;
	}

	public IEngUserProfile getUserProfile() {
		// TODO Auto-generated method stub
		return null;
	}

	

	public void setFetchSize(int l) {
		// TODO Auto-generated method stub
		
	}

	public void setQuery(Object query) {
		// TODO Auto-generated method stub
		
	}

	public void setUserProfile(IEngUserProfile userProfile) {
		// TODO Auto-generated method stub
		
	}
	
	public IStatement getStatement() {
		return statement;
	}


	public void setStatement(IStatement statement) {
		this.statement = statement;
	}
	
	public boolean isAbortOnOverflow() {
		return abortOnOverflow;
	}


	public void setAbortOnOverflow(boolean abortOnOverflow) {
		this.abortOnOverflow = abortOnOverflow;
	}
	
	public void addBinding(String bindingName, Object bindingValue) {
		bindings.put(bindingName, bindingValue);
	}

}
