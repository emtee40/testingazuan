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
package it.eng.spagobi.engines.geo.dataset.provider;

import it.eng.spagobi.engines.geo.Constants;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datastore.IField;
import it.eng.spagobi.tools.dataset.common.datastore.IRecord;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

// TODO: Auto-generated Javadoc
/**
 * The Class Link.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class Link {
	
	/** The parameters. */
	private Map parameters;
	
	/** The Constant DEFAULT_BASE_URL. */
	public static final String DEFAULT_BASE_URL = "javascript:void(0)";
	
	/**
	 * Instantiates a new link.
	 */
	public Link() {
		parameters = new HashMap();
	}
	
	/**
	 * Adds the parameter.
	 * 
	 * @param type the type
	 * @param name the name
	 * @param value the value
	 */
	public void addParameter(String type, String scope, String name, String value){
		Parameter parameter = new Parameter(type, scope, name, value);
		parameters.put(parameter.getName(), parameter);
	}
	
	/**
	 * The Class Parameter.
	 */
	public static class Parameter {
		
		// types
		public static final String RELATIVE = "relative";
		public static final String ABSOLUTE = "absolute";
		
		// scopes
		public static final String DATASET = "dataset";
		public static final String ENVIRONMENT = "environment";
										
		
		
		/** The type. */
		String type;
		
		/** The name. */
		String name;
		
		/** The value. */
		String value;
		
		/** The value. */
		String scope;
		
		/**
		 * Instantiates a new parameter.
		 * 
		 * @param type the type
		 * @param name the name
		 * @param value the value
		 */
		public Parameter(String type, String scope, String name, String value) {
			 setType(type);
			 setScope(scope);
			 setName(name);
			 setValue(value);
		}

		/**
		 * Gets the type.
		 * 
		 * @return the type
		 */
		public String getType() {
			return type;
		}

		/**
		 * Sets the type.
		 * 
		 * @param type the new type
		 */
		public void setType(String type) {
			this.type = type;
		}

		/**
		 * Gets the name.
		 * 
		 * @return the name
		 */
		public String getName() {
			return name;
		}

		/**
		 * Sets the name.
		 * 
		 * @param name the new name
		 */
		public void setName(String name) {
			this.name = name;
		}

		/**
		 * Gets the value.
		 * 
		 * @return the value
		 */
		public String getValue() {
			return value;
		}

		/**
		 * Sets the value.
		 * 
		 * @param value the new value
		 */
		public void setValue(String value) {
			this.value = value;
		}

		public String getScope() {
			return scope;
		}

		public void setScope(String scope) {
			this.scope = scope;
		}
		
		public boolean isRelative() {
			return RELATIVE.equalsIgnoreCase( getType() );
		}
		
		public boolean isRealtiveToEnvironment() {
			return isRelative() && ENVIRONMENT.equalsIgnoreCase( getScope() );
		}
		
		public boolean isRealtiveToDataset() {
			return isRelative() && DATASET.equalsIgnoreCase( getScope() );
		}
		
		public String getActualValue(ResultSet resultSet, Map env) throws SQLException {
			String actualValue = null;
			if( isRelative() ) {
				if( isRealtiveToDataset() ) {
					actualValue = resultSet.getString(resultSet.findColumn(getValue()));
				} else if ( isRealtiveToEnvironment()) {
					actualValue = "" + env.get( getValue() );
				}
			} else {
				actualValue = getValue();
			}    	
			return actualValue;
		}
		
		public String getXActualValue(IRecord record, Map env) throws SQLException {
			String actualValue = null;
			if( isRelative() ) {
				if( isRealtiveToDataset() ) {
					IField field = record.getFieldAt( record.getDataStore().getMetaData().getFieldIndex( getValue() ) );
					actualValue = "" + field.getValue();
				} else if ( isRealtiveToEnvironment()) {
					actualValue = "" + env.get( getValue() );
				}
			} else {
				actualValue = getValue();
			}    	
			return actualValue;
		}
	}

	/**
	 * To string.
	 * 
	 * @param resultSet the result set
	 * 
	 * @return the string
	 */
	public String toString(ResultSet resultSet, Map env) {
		
		String link = null;
		String execIframeId = null;
		String targetDocLabel = "";
		String parametersStr = "";
		
		
		execIframeId = (String) env.get(Constants.ENV_EXEC_IFRAME_ID);
		
    	try{
    		Iterator it = parameters.keySet().iterator();
    		while(it.hasNext()) {
    			String key = (String)it.next();
    			Parameter param = (Parameter)parameters.get(key);
    			if (param.getName().equalsIgnoreCase("DOCUMENT_LABEL")) {        			
    				targetDocLabel = param.getActualValue(resultSet, env);	
    			} else {
    				parametersStr += param.getName() + "=" + param.getActualValue(resultSet, env) + "&"; 
    			}
    		}
    		if (parametersStr.endsWith("&")) {
    			parametersStr = parametersStr.substring(0, parametersStr.length()-1);
    		}
    		
    		link = "javascript:parent.execCrossNavigation('" + execIframeId + "', '" + targetDocLabel + "' , '" + parametersStr + "');";
    		
    	} catch (Exception e) {
    		link = "javascript:void(0)";
    	}
    	return link;
	}
	
	/**
	 * To string.
	 * 
	 * @param record the result set
	 * 
	 * @return the string
	 */
	public String toXString(IRecord record, Map env) {
		
		String link = null;
		String execIframeId = null;
		String targetDocLabel = "";
		String parametersStr = "";
		
		
		execIframeId = (String) env.get(Constants.ENV_EXEC_IFRAME_ID);
		
    	try{
    		Iterator it = parameters.keySet().iterator();
    		while(it.hasNext()) {
    			String key = (String)it.next();
    			Parameter param = (Parameter)parameters.get(key);
    			if (param.getName().equalsIgnoreCase("DOCUMENT_LABEL")) {        			
    				targetDocLabel = param.getXActualValue(record, env);	
    			} else {
    				parametersStr += param.getName() + "=" + param.getXActualValue(record, env) + "&"; 
    			}
    		}
    		if (parametersStr.endsWith("&")) {
    			parametersStr = parametersStr.substring(0, parametersStr.length()-1);
    		}
    		
    		link = "javascript:parent.execCrossNavigation('" + execIframeId + "', '" + targetDocLabel + "' , '" + parametersStr + "');";
    		
    	} catch (Exception e) {
    		link = "javascript:void(0)";
    	}
    	return link;
	}
}
