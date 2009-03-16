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
package it.eng.qbe.datasource;

import it.eng.qbe.bo.DatamartLabels;
import it.eng.qbe.dao.DAOFactory;

import java.util.List;
import java.util.Locale;
import java.util.Map;

// TODO: Auto-generated Javadoc
/**
 * The Class DataSourceFactory.
 * 
 * @author Andrea Gioia
 */
public class DataSourceFactory {
	
	
	
	/**
	 * Builds the data source.
	 * 
	 * @param dataSourceName the data source name
	 * @param datamartName the datamart name
	 * @param datamartNames the datamart names
	 * @param dblinkMap the dblink map
	 * @param connection the connection
	 * 
	 * @return the i data source
	 */
	public static IDataSource buildDataSource(String dataSourceName, 
			String datamartName, List datamartNames,  Map dblinkMap, 
			DBConnection connection) {
		AbstractHibernateDataSource dataSource = null;
		
		if(datamartNames.size() == 1) {
			dataSource = new BasicHibernateDataSource(dataSourceName);
		} else {
			dataSource = new CompositeHibernateDataSource(dataSourceName);
		} 
		
		initDataSource(dataSource, datamartName, datamartNames, dblinkMap, connection);
		return dataSource;
	}
	
	
	
	/**
	 * Inits the data source.
	 * 
	 * @param dataSource the data source
	 * @param datamartName the datamart name
	 * @param datamartNames the datamart names
	 * @param dblinkMap the dblink map
	 * @param connection the connection
	 */
	private static void initDataSource(AbstractHibernateDataSource dataSource,
			String datamartName, 
			List datamartNames, 
			Map dblinkMap, 
			DBConnection connection) {
		
		dataSource.setDatamartName(datamartName);	
		dataSource.setDatamartNames(datamartNames);
		dataSource.setConnection(connection);
		
		dataSource.setDblinkMap(dblinkMap);		
		
		dataSource.setFormula( DAOFactory.getFormulaDAO().loadFormula( datamartName ) );		
		dataSource.setProperties( DAOFactory.getDatamartPropertiesDAO().loadDatamartProperties( datamartName ) );
		//dataSource.setLabels( DAOFactory.getDatamartLabelsDAO().loadDatamartLabels(datamartName) );
	}
	
}
