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
package it.eng.spagobi.engines.geo.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.action.AbstractHttpAction;
import it.eng.spagobi.engines.geo.commons.excpetion.GeoEngineException;
import it.eng.spagobi.engines.geo.commons.service.AbstractEngineStartAction;
import it.eng.spagobi.engines.geo.commons.service.AbstractGeoEngineAction;
import it.eng.spagobi.engines.geo.configuration.MapConfiguration;
import it.eng.spagobi.utilities.callbacks.mapcatalogue.MapCatalogueAccessUtils;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * @author Andrea Gioia
 * 
 */
public class GetLayersAction extends AbstractGeoEngineAction {
	
	static int counter = 0;
	
	/**
     * Logger component
     */
    public static transient Logger logger = Logger.getLogger(GetLayersAction.class);
	
    
	public void service(SourceBean request, SourceBean response) throws GeoEngineException  {
		logger.debug("Starting service method...");
		
		super.service(request, response);
		
		String mapName = (String)request.getAttribute("mapName");
		
		MapCatalogueAccessUtils mapCatalogueClient = null;
		mapCatalogueClient = MapConfiguration.getMapCatalogueAccessUtils();
		List layers = new ArrayList();
		
		
		
		if(mapCatalogueClient == null) {
			counter++;
			layers.add("LayerA" + counter);
			layers.add("LayerB" + counter);
			layers.add("LayerC" + counter);
		} else {
			layers = getFeatureNamesInMap(mapName);
		}
		
		
		StringBuffer buffer = new StringBuffer();
		buffer.append("<LAYERS>");
		for(int i = 0; i < layers.size(); i++) {
			String layerName = (String)layers.get(i);
			buffer.append("<LAYER>" + layerName + "</LAYER>");
		}
		buffer.append("<LAYER>" + "grafici" + "</LAYER>");
		buffer.append("<LAYER>" + "valori" + "</LAYER>");
		buffer.append("</LAYERS>");
		
		SourceBean result = null;
		try {
			result = new SourceBean("RESPONSE");
			result.setAttribute(SourceBean.fromXMLString(buffer.toString()));
		} catch (SourceBeanException e) {
			throw new GeoEngineException("Impossible to generate service responce bean in " + GetLayersAction.class, e);
		}
		
		response.setBean(result);
		response.setName(result.getName());
	}
}
