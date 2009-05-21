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
package it.eng.spagobi.chiron.serializer;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class JSONStoreFeedTransformer {
	
	private static JSONStoreFeedTransformer instance;
	
	public static JSONStoreFeedTransformer getInstance() {
		if(instance == null) {
			instance = new JSONStoreFeedTransformer();
		}
		
		return instance;
	}
	
	private JSONStoreFeedTransformer() {}
	
	
	public Object transform(Object jsonData, 
			String root, 
			String id, 
			String name, 
			String description,
			String[] fields) throws SerializationException {
		
		JSONObject result;
	
		JSONObject jsonObject;
		JSONArray jsonArray;
		
		
		if(jsonData instanceof JSONObject) {
			jsonArray = new JSONArray();
			jsonArray.put(jsonData);
		} else {
			jsonArray = (JSONArray)jsonData;
		}
		
		result = new JSONObject();
		try {
			JSONObject meta = new JSONObject();
			meta.put("root", root);
			meta.put("id", id);
			meta.put("name", name);
			meta.put("description", description);
			JSONArray fieldsJSON = new JSONArray();
			fieldsJSON.put("recNo");
			for(int i = 0; i < fields.length; i++) {
				JSONObject field = new JSONObject();
				field.put("name", fields[i]);
				field.put("header", fields[i]);
				fieldsJSON.put(field);
			}
			meta.put("fields", fieldsJSON);
			result.put("metaData", meta);
			result.put(root, jsonArray);
		} catch (JSONException e) {
			throw new SerializationException("An error occurred while transforming object: " + jsonData, e);
		}
		
		return result;
	}
}
