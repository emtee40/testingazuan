/* SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package it.eng.qbe.statement.hive;

import it.eng.qbe.datasource.dataset.DataSetDataSource;
import it.eng.qbe.statement.AbstractQbeDataSet;
import it.eng.spagobi.tools.dataset.bo.JDBCHiveDataSet;
import it.eng.spagobi.tools.dataset.common.datastore.DataStore;
import it.eng.spagobi.tools.dataset.common.metadata.MetaData;
import it.eng.spagobi.tools.datasource.bo.IDataSource;

import org.apache.log4j.Logger;

/**
 * @author Alberto Ghedin (alberto.ghedin@eng.it)
 */

public class HiveQLDataSet extends AbstractQbeDataSet {


	
	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(HiveQLDataSet.class);
    
	
	public HiveQLDataSet(HiveQLStatement statement) {
		super(statement);
	}
	
	
	public void loadData(int offset, int fetchSize, int maxResults) {

		DataSetDataSource ds = (DataSetDataSource)statement.getDataSource();
		String statementStr = statement.getQueryString();
		
		//SpagoBiDataSet dataSetConfig = new SpagoBiDataSet();
		//dataSetConfig.setDataSource( ds.getSpagoBiDataSource() );
		//dataSetConfig.setQuery(statementStr);
		JDBCHiveDataSet dataset = new JDBCHiveDataSet();
		dataset.setDataSource(ds.getDataSourceForReading());
		dataset.setQuery(statementStr);
		dataset.loadData(offset, fetchSize, maxResults);

		dataStore = dataset.getDataStore();
		int resultNumber = (Integer)dataStore.getMetaData().getProperty("resultNumber");
		MetaData md = getDataStoreMeta(this.getStatement().getQuery());
		
		//Update the metadata (use the qbe alias, type,..)
		((DataStore)dataStore).setMetaData(md);
		dataStore.getMetaData().setProperty("resultNumber",resultNumber);
				
		if(hasDataStoreTransformer()) {
			getDataStoreTransformer().transform(dataStore);
		}

	
	}
	
	public void setDataSource(IDataSource dataSource) {
		// TODO Auto-generated method stub
		
	}

	
	

}