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
package it.eng.spagobi.engines.geo.commons.service;

import it.eng.spagobi.utilities.engines.EngineAnalysisState;

import java.util.Iterator;
import java.util.List;
import java.util.Properties;

// TODO: Auto-generated Javadoc
/**
 * The Class GeoEngineAnalysisState.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class GeoEngineAnalysisState extends EngineAnalysisState {
	
	/** The properties. */
	private Properties properties;
	
	/**
	 * Instantiates a new geo engine analysis state.
	 * 
	 * @param rowData the row data
	 */
	public GeoEngineAnalysisState( byte[] rowData ) {
		super( rowData );
		parseRowData();
	}
	
	/**
	 * Parses the row data.
	 */
	private void  parseRowData() {
		properties = new Properties();
		
		String str = null;
		String[] chuncks = null;
		
		if(getRowData() == null) return;
		
		str = new String( getRowData() );
		chuncks = str.split(";");
		for(int i = 0; i < chuncks.length; i++) {
			String[] propChunk = chuncks[i].split("=");
			String pName = propChunk[0];
			String pValue = propChunk[1];
			properties.setProperty(pName, pValue);
		}
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.utilities.engines.EngineAnalysisState#setRowData(byte[])
	 */
	public void setRowData( byte[] rowData ) {
		super.setRowData(rowData);
		parseRowData();
	}
	
	/**
	 * Refresh row data.
	 */
	public void refreshRowData( ) {
		StringBuffer buffer = new StringBuffer();
		Iterator it = properties.keySet().iterator();
		while( it.hasNext() ) {
			String pName = (String)it.next();
			String pValue = properties.getProperty(pName);
			buffer.append(pName + "=" + pValue + ";");
		}
		
		super.setRowData(buffer.toString().getBytes());
	}
	
	/**
	 * Gets the selected hierarchy.
	 * 
	 * @return the selected hierarchy
	 */
	public String getSelectedHierarchy() {
		return properties.getProperty("selected_hierachy");
	}
	
	/**
	 * Sets the selected hierarchy name.
	 * 
	 * @param hierarchyName the new selected hierarchy name
	 */
	public void setSelectedHierarchyName(String hierarchyName) {
		properties.setProperty("selected_hierachy", hierarchyName);
	}

	/**
	 * Gets the selected hierarchy level.
	 * 
	 * @return the selected hierarchy level
	 */
	public String getSelectedHierarchyLevel() {
		return properties.getProperty("selected_hierarchy_level");		
	}
	
	/**
	 * Sets the selected level name.
	 * 
	 * @param levelName the new selected level name
	 */
	public void setSelectedLevelName(String levelName) {
		properties.setProperty("selected_hierarchy_level", levelName);		
	}

	/**
	 * Gets the selected map name.
	 * 
	 * @return the selected map name
	 */
	public String getSelectedMapName() {
		return properties.getProperty("selected_map");
	}
	
	/**
	 * Sets the selected map name.
	 * 
	 * @param mapName the new selected map name
	 */
	public void setSelectedMapName(String mapName) {
		properties.setProperty("selected_map", mapName);
	}

	/**
	 * Gets the selected layers.
	 * 
	 * @return the selected layers
	 */
	public String getSelectedLayers() {
		return properties.getProperty("selected_layers");
	}
	
	/**
	 * Sets the selected layers.
	 * 
	 * @param layers the new selected layers
	 */
	public void setSelectedLayers(String layers) {
		properties.setProperty("selected_layers", layers);
	}
	
	/**
	 * Sets the selected layers.
	 * 
	 * @param layers the new selected layers
	 */
	public void setSelectedLayers(List layers) {
		String layersStr = null;
		
		if(layers.size() > 0) layersStr = (String)layers.get(0);
		for(int i = 1; i < layers.size(); i++) {
			layersStr += "," + (String)layers.get(i);
		}
		
		if(layersStr != null){
			setSelectedLayers(layersStr);
		}
	}
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	public String toString() {
    	String str = "";
    	
    	str += "[";
    	str += "selectedHierachy:" + getSelectedHierarchy() + "; ";
    	str += "selectedLevel:" + getSelectedHierarchyLevel() + "; ";
    	str += "selectedMap:" + getSelectedMapName() + "; ";
    	str += "selectedLayers:" + getSelectedLayers();
    	str += "]";
    	
    	return str;
    }
	
}
