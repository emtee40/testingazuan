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
package it.eng.qbe.datasource;

import it.eng.qbe.dao.DAOFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Andrea Gioia
 *
 */
public class DataSourceFactory {
	
	
	
	public static IDataSource buildDataSource(String dataSourceName, String datamartName, List datamartNames,  Map dblinkMap, DBConnection connection) {
		AbstractHibernateDataSource dataSource = null;
		
		if(datamartNames.size() == 1) {
			dataSource = new BasicHibernateDataSource(dataSourceName);
			//dataSource = buildBasicHibernateDataSource(dataSourceName, datamartName, datamartNames, dblinkMap, connection);
		} else {
			dataSource = new CompositeHibernateDataSource(dataSourceName);
			//dataSource = buildCompositeHibernateDataSource(dataSourceName, datamartName, datamartNames, dblinkMap, connection);
		} 
		
		initDataSource(dataSource, datamartName, datamartNames, dblinkMap, connection);
		return dataSource;
	}
	
	/*
	private static BasicHibernateDataSource buildBasicHibernateDataSource(String dataSourceName, 
			String datamartName, 
			List datamartNames, 
			Map dblinkMap, 
			DBConnection connection) {

		BasicHibernateDataSource dataSource = null;
		
		dataSource = new BasicHibernateDataSource(dataSourceName);
		
		dataSource.setDatamartName(datamartName);		
		dataSource.setDatamartNames(datamartNames);
		dataSource.setConnection(connection);	
		
		dataSource.setDblinkMap(dblinkMap);	
		
		dataSource.setFormula( DAOFactory.getFormulaDAO().loadFormula( datamartName ) );		
		dataSource.setProperties( DAOFactory.getDatamartPropertiesDAO().loadDatamartProperties( datamartName ) );
		dataSource.setLabels( DAOFactory.getDatamartLabelsDAO().loadDatamartLabels(datamartName) );
		
		return dataSource;
	}
	
	private static CompositeHibernateDataSource buildCompositeHibernateDataSource(String dataSourceName, 
			String datamartName, 
			List datamartNames, 
			Map dblinkMap, 
			DBConnection connection) {
		
		CompositeHibernateDataSource dataSource = null;
		
		dataSource = new CompositeHibernateDataSource(dataSourceName);
		
		dataSource.setDatamartName(datamartName);	
		dataSource.setDatamartNames(datamartNames);
		dataSource.setConnection(connection);
		
		dataSource.setDblinkMap(dblinkMap);		
		
		dataSource.setFormula( DAOFactory.getFormulaDAO().loadFormula( datamartName ) );		
		dataSource.setProperties( DAOFactory.getDatamartPropertiesDAO().loadDatamartProperties( datamartName ) );
		dataSource.setLabels( DAOFactory.getDatamartLabelsDAO().loadDatamartLabels(datamartName) );
		
		return dataSource;
	}
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
		dataSource.setLabels( DAOFactory.getDatamartLabelsDAO().loadDatamartLabels(datamartName) );
		
	}
	
}
