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
package it.eng.spagobi.engines.geo;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.engines.geo.commons.excpetion.GeoEngineException;
import it.eng.spagobi.engines.geo.dataset.provider.IDatasetProvider;
import it.eng.spagobi.engines.geo.map.provider.IMapProvider;
import it.eng.spagobi.engines.geo.map.renderer.IMapRenderer;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

// TODO: Auto-generated Javadoc
/**
 * The Class GeoEngineComponentFactory.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class GeoEngineComponentFactory {
	
	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(GeoEngineComponentFactory.class);
	
    
	/**
	 * Builds the.
	 * 
	 * @param geoEngineComponentClassName the geo engine component class name
	 * @param conf the conf
	 * @param env the env
	 * 
	 * @return the i geo engine component
	 * 
	 * @throws GeoEngineException the geo engine exception
	 */
	public static IGeoEngineComponent build(String geoEngineComponentClassName, Object conf, Map env) 
	throws GeoEngineException {
		
		IGeoEngineComponent geoEngineComponent = null;
		
		logger.debug("IN");
		
		try {
			geoEngineComponent = (IGeoEngineComponent) Class.forName(geoEngineComponentClassName).newInstance();
		} catch (InstantiationException e) {
			logger.error("Impossible to instatiate component of type: " + geoEngineComponentClassName);
			throw new GeoEngineException("Impossible to instatiate component of type: " + geoEngineComponentClassName, e);
		} catch (IllegalAccessException e) {
			logger.error("Impossible to instatiate component of type: " + geoEngineComponentClassName);
			throw new GeoEngineException("Impossible to instatiate component of type: " + geoEngineComponentClassName, e);
		} catch (ClassNotFoundException e) {
			logger.error("Impossible to instatiate component of type: " + geoEngineComponentClassName);
			String description = "Impossible to instatiate component of type: " + geoEngineComponentClassName;
			List hints = new ArrayList();
			hints.add("Check if the class name is wrong or mispelled");
			hints.add("Check if the class is on the class path");
			throw new GeoEngineException("Impossible to instatiate component", description, hints, e);
		}
		
		logger.debug("Component " + geoEngineComponentClassName + " created succesfully");
		geoEngineComponent.setEnv(env);
		geoEngineComponent.init(conf);
		logger.debug("Component " + geoEngineComponentClassName + " configurated succesfully");
		
		logger.debug("OUT");
		
        return geoEngineComponent;
	}
	
	/**
	 * Builds the map provider.
	 * 
	 * @param template the template
	 * @param env the env
	 * 
	 * @return the i map provider
	 * 
	 * @throws GeoEngineException the geo engine exception
	 */
	public static IMapProvider buildMapProvider(SourceBean template, Map env) throws GeoEngineException {
		IMapProvider mapProvider = null;
		SourceBean confSB = null;
		String className = null;
		
		logger.debug("IN");
		confSB = (SourceBean)template.getAttribute(Constants.MAP_PROVIDER_TAG);
		if(confSB == null) {
			logger.warn("Cannot find MapProvider configuration settings: tag name " + Constants.MAP_PROVIDER_TAG);
			logger.info("MapProvider configuration settings must be injected at execution time");
			return null;
		}
		className = (String)confSB.getAttribute(Constants.CLASS_NAME_ATTRIBUTE);
		if(className == null) {
			logger.warn("Cannot find MapProvider class attribute: " + Constants.CLASS_NAME_ATTRIBUTE);
			logger.info("MapProvider must be injected at execution time");
			return null;
		}
		logger.debug("Map provider class: " + className);
		logger.debug("Map provider configuration: " + confSB);
		
		mapProvider = (IMapProvider)build(className, confSB, env);
		logger.debug("IN");		
		
		return mapProvider;
	}
	
	/**
	 * Builds the map renderer.
	 * 
	 * @param template the template
	 * @param env the env
	 * 
	 * @return the i map renderer
	 * 
	 * @throws GeoEngineException the geo engine exception
	 */
	public static IMapRenderer buildMapRenderer(SourceBean template, Map env) throws GeoEngineException {
		IMapRenderer mapRenderer = null;
		SourceBean confSB = null;
		String className = null;
		
		logger.debug("IN");		
		confSB = (SourceBean)template.getAttribute(Constants.MAP_RENDERER_TAG);
		if(confSB == null) {
			logger.warn("Cannot find MapRenderer configuration settings: tag name " + Constants.MAP_RENDERER_TAG);
			logger.info("MapRenderer configuration settings must be injected at execution time");
			return null;
		}
		className = (String)confSB.getAttribute(Constants.CLASS_NAME_ATTRIBUTE);
		if(className == null) {
			logger.warn("Cannot find MapRenderer class attribute: " + Constants.CLASS_NAME_ATTRIBUTE);
			logger.info("MapRenderer must be injected at execution time");
			return null;
		}
		logger.debug("Map renderer class: " + className);
		logger.debug("Map renderer configuration: " + confSB);		
		
		mapRenderer = (IMapRenderer)build(className, confSB, env);		
		logger.debug("OUT");
		
		return mapRenderer;
	}
	
	/**
	 * Builds the dataset provider.
	 * 
	 * @param template the template
	 * @param env the env
	 * 
	 * @return the i dataset provider
	 * 
	 * @throws GeoEngineException the geo engine exception
	 */
	public static IDatasetProvider buildDatasetProvider(SourceBean template, Map env) throws GeoEngineException {
		IDatasetProvider datasetProvider = null;
		SourceBean confSB = null;
		String className = null;
		
		logger.debug("IN");
		confSB = (SourceBean)template.getAttribute(Constants.DATAMART_PROVIDER_TAG);
		if(confSB == null) {
			logger.warn("Cannot find DatasetProvider configuration settings: tag name " + Constants.DATAMART_PROVIDER_TAG);
			logger.info("DatasetProvider configuration settings must be injected at execution time");
			return null;
		}
		className = (String)confSB.getAttribute(Constants.CLASS_NAME_ATTRIBUTE);
		if(className == null) {
			logger.warn("Cannot find DatasetProvider class attribute: " + Constants.CLASS_NAME_ATTRIBUTE);
			logger.info("DatasetProvider must be injected at execution time");
			return null;
		}
		
		logger.debug("Dataset provider class: " + className);
		logger.debug("Dataset provider configuration: " + confSB);
		
		datasetProvider = (IDatasetProvider)build(className, confSB, env);;
		logger.debug("OUT");
		
		return datasetProvider;
	}
}
