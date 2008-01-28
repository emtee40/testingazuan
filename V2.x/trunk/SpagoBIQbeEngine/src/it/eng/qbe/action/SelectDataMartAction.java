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
package it.eng.qbe.action;

import it.eng.qbe.conf.QbeEngineConf;
import it.eng.qbe.datasource.DBConnection;
import it.eng.qbe.datasource.DataSourceFactory;
import it.eng.qbe.datasource.IDataSource;
import it.eng.qbe.model.DataMartModel;
import it.eng.spago.base.ApplicationContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.action.AbstractAction;
import it.eng.spagobi.qbe.commons.naming.QbeNamingStrategy;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;


/**
 * @author Andrea Zoppello
 * 
 * This Action is responsible to instantiate the datamart where
 * 
 * working with qbe
 */
public class SelectDataMartAction extends AbstractAction {

	/** 
	 * @see it.eng.spago.dispatching.service.ServiceIFace#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		QbeNamingStrategy namingStartegy = null;
		IDataSource dataSource = null;
		String dataSourceName = null;
		String dataMartName = null;
		List dataMartNames = null;
		
		String jndiDataSourceName = (String)request.getAttribute("JNDI_DS");		
		String dialect = (String)request.getAttribute("DIALECT");		
		String dmPath = (String)request.getAttribute("PATH");
		
		dataMartNames = new ArrayList();
		dataMartNames.add(dmPath);
		
		DBConnection connection = new DBConnection();
		connection.setName(jndiDataSourceName);
		connection.setDialect(dialect);
		connection.setJndiName( QbeEngineConf.getInstance().getJndiConnectionName(jndiDataSourceName) );
		
		namingStartegy = new QbeNamingStrategy();
		dataSourceName = namingStartegy.getDatasourceName(dataMartNames, connection);
		dataMartName = namingStartegy.getDatamartName(dataMartNames);
		
		
		
		dataSource = DataSourceFactory.buildDataSource(dataSourceName, dataMartName, dataMartNames, null, connection);
			//new BasicHibernateDataSource(dataSourceName, dataMartName, dataMartNames, connection);
		DataMartModel dmModel = new DataMartModel(dataSource);
			


		ApplicationContainer application = ApplicationContainer.getInstance();
		
		ApplicationContainer.getInstance().setAttribute("CURRENT_THREAD_CONTEXT_LOADER", Thread.currentThread().getContextClassLoader());
		
		dmModel.setName(dmModel.getDataSource().getDatamartName());
		dmModel.setDescription(dmModel.getDataSource().getDatamartName());
		
		
		
		SessionFactory sf = dmModel.getDataSource().getSessionFactory();
		
        getRequestContainer().getSessionContainer().setAttribute("dataMartModel", dmModel);
        
	}
}
