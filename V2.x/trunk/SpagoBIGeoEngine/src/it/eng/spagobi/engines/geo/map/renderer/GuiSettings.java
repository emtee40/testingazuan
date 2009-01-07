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
package it.eng.spagobi.engines.geo.map.renderer;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class GuiSettings {
	Map windowDefaultSettings;
	Map navigationWindowSettings;
	Map measureWindowSettings;
	Map layersWindowSettings;
	Map detailWindowSettings;
	Map legendWindowSettings;
	Map colourpickerWindowSettings;
	
	public GuiSettings() {
		super();
		windowDefaultSettings = new HashMap();
		navigationWindowSettings = new HashMap();
		measureWindowSettings = new HashMap();
		layersWindowSettings = new HashMap();
		detailWindowSettings = new HashMap();
		legendWindowSettings = new HashMap();
		colourpickerWindowSettings = new HashMap();
	}

	public Map getWindowDefaultSettings() {
		return windowDefaultSettings;
	}

	public void setWindowDefaultSettings(Map windowDefaultSettings) {
		this.windowDefaultSettings = windowDefaultSettings;
	}

	public Map getNavigationWindowSettings() {
		return navigationWindowSettings;
	}

	public void setNavigationWindowSettings(Map navigationWindowSettings) {
		this.navigationWindowSettings = navigationWindowSettings;
	}

	public Map getMeasureWindowSettings() {
		return measureWindowSettings;
	}

	public void setMeasureWindowSettings(Map measureWindowSettings) {
		this.measureWindowSettings = measureWindowSettings;
	}

	public Map getLayersWindowSettings() {
		return layersWindowSettings;
	}

	public void setLayersWindowSettings(Map layersWindowSettings) {
		this.layersWindowSettings = layersWindowSettings;
	}

	public Map getDetailWindowSettings() {
		return detailWindowSettings;
	}

	public void setDetailWindowSettings(Map detailWindowSettings) {
		this.detailWindowSettings = detailWindowSettings;
	}

	public Map getLegendWindowSettings() {
		return legendWindowSettings;
	}

	public void setLegendWindowSettings(Map legendWindowSettings) {
		this.legendWindowSettings = legendWindowSettings;
	}

	public Map getColourpickerWindowSettings() {
		return colourpickerWindowSettings;
	}

	public void setColourpickerWindowSettings(Map colourpickerWindowSettings) {
		this.colourpickerWindowSettings = colourpickerWindowSettings;
	}
	
	public JSONObject toJSON() throws JSONException {
		JSONObject guiSettings;
		JSONArray windowsSettings;
		Object settings;
		
		guiSettings = new JSONObject();
		
		settings = toJSON( getWindowDefaultSettings() );
		guiSettings.put("windowDefaults", settings);
		
		windowsSettings = new JSONArray();
		
		settings = toJSON( getNavigationWindowSettings() );
		windowsSettings.put(settings);
		
		settings = toJSON( getMeasureWindowSettings() );
		windowsSettings.put(settings);
		
		settings = toJSON( getLayersWindowSettings() );
		windowsSettings.put(settings);
		
		settings = toJSON( getDetailWindowSettings() );
		windowsSettings.put(settings);
		
		settings = toJSON( getLegendWindowSettings() );
		windowsSettings.put(settings);
		
		settings = toJSON( getColourpickerWindowSettings() );
		windowsSettings.put(settings);
		
		guiSettings.put("windows", windowsSettings);
		
		
		return guiSettings;
	}
	
	private JSONObject toJSON(Map settings) throws JSONException {
		JSONObject result;
		
		result = new JSONObject();
		
		Iterator it = settings.keySet().iterator();
		while(it.hasNext()) {
			String settingName = (String)it.next();
			Object settingValue = settings.get(settingName);
			if(settingValue instanceof String) {
				String str = (String)settingValue;
				if(str.startsWith("{") && str.endsWith("}")) {
					settingValue = new JSONObject(str);
				} else if(str.startsWith("[") && str.endsWith("]")) {
					settingValue = new JSONArray(str);;
				} 
			}
			
			result.put(settingName, settingValue);
		}
		
		return result;
	}
}
