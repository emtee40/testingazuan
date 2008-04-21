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
package it.eng.spagobi.engines.geo.map.provider.configurator;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spagobi.engines.geo.Constants;
import it.eng.spagobi.engines.geo.commons.excpetion.GeoEngineException;
import it.eng.spagobi.engines.geo.datasource.DataSource;
import it.eng.spagobi.engines.geo.map.provider.SOMapProvider;
import it.eng.spagobi.utilities.callbacks.mapcatalogue.MapCatalogueAccessUtils;

import org.apache.log4j.Logger;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class SOMapProviderConfigurator {
	
	/**
     * Logger component
     */
    public static transient Logger logger = Logger.getLogger(SOMapProviderConfigurator.class);
	
	
	public static void configure(SOMapProvider soMapProvider, Object conf) throws GeoEngineException {
		SourceBean confSB = null;
		
		if(conf instanceof String) {
			try {
				confSB = SourceBean.fromXMLString( (String)conf );
			} catch (SourceBeanException e) {
				logger.error("Impossible to parse configuration block for DataSetProvider", e);
				throw new GeoEngineException("Impossible to parse configuration block for DataSetProvider", e);
			}
		} else {
			confSB = (SourceBean)conf;
		}
		
		if(confSB != null) {
			MapCatalogueAccessUtils mapCatalogueServiceProxy = (MapCatalogueAccessUtils)soMapProvider.getEnv().get(Constants.ENV_MAPCATALOGUE_SERVICE_PROXY);
			soMapProvider.setMapCatalogueServiceProxy(mapCatalogueServiceProxy);		
		}
	}

	public static DataSource getDataSource(SourceBean confSB) throws GeoEngineException {
		DataSource dataSource = null;
		
		SourceBean datasourceSB = (SourceBean)confSB.getAttribute(Constants.DATASOURCE_TAG);
		if(datasourceSB == null) {
			logger.warn("Cannot find datasource configuration settings: tag name " + Constants.DATASOURCE_TAG);
			logger.info("Datasource configuration settings must be injected at execution time");
			return null;
		}
		
		dataSource = new DataSource(datasourceSB);
		
		logger.debug("Datasource jndi name: " + dataSource.getJndiName());
		logger.debug("Datasource driver: " + dataSource.getDriver());
		logger.debug("Datasource password: " + dataSource.getPassword());		
		logger.debug("Datasource user: " + dataSource.getUser());
		logger.debug("Datasource url: " + dataSource.getUrl());
		
		if(dataSource.getJndiName() != null) {
			logger.info("Datasource is of type jndi connection. Referenced jndi resource is " + dataSource.getJndiName());
		} else if (dataSource.getDriver() == null || dataSource.getUrl() == null){
			logger.error("Missing driver name or url in datasource configuration settings");
			throw new GeoEngineException("Missing driver name or url in datasource configuration settings");
		}
		
		return dataSource;
	}
	
	private static String getQuery(SourceBean dataSetSB) {
		String query = null;
		
		SourceBean querySB = (SourceBean)dataSetSB.getAttribute(Constants.QUERY_TAG);
		if(querySB == null) {
			logger.warn("Cannot find query configuration settings: tag name " + Constants.QUERY_TAG);
			logger.info("Datasource configuration settings must be injected at execution time");
			return null;
		}
		
		query = querySB.getCharacters();
		
		return query;
	}
}
