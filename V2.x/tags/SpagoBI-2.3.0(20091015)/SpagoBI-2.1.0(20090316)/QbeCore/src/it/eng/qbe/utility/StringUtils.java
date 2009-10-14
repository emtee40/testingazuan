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
package it.eng.qbe.utility;

import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

// TODO: Auto-generated Javadoc
/**
 * The Class StringUtils.
 * 
 * @author Andrea Gioia
 */
public class StringUtils {
	
	/**
	 * Replace parameters.
	 * 
	 * @param filterCondition the filter condition
	 * @param parameterTypeIdentifier the parameter type identifier
	 * @param parameters the parameters
	 * 
	 * @return the string
	 * 
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	public static String replaceParameters(String filterCondition, String parameterTypeIdentifier, Properties parameters) throws IOException {
		String result = filterCondition;
		Set params;
		
		params = getParameters(filterCondition, parameterTypeIdentifier);
		Iterator it = params.iterator();
		while(it.hasNext()) {
			String parameterName = (String)it.next();
			String parameterValue = parameters.getProperty(parameterName);
			if(parameterValue == null) throw new IOException("No value for the parameter: " + parameterName);
			result = filterCondition.replaceAll(parameterTypeIdentifier + "\\{" + parameterName + "\\}", parameterValue);
		}		
		
		return result;
	}
	
	/**
	 * Replace parameters.
	 * 
	 * @param filterCondition the filter condition
	 * @param parameterTypeIdentifier the parameter type identifier
	 * @param parameters the parameters
	 * 
	 * @return the string
	 * 
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	public static String replaceParameters(String filterCondition, String parameterTypeIdentifier, Map parameters) throws IOException {
		String result = filterCondition;
		Set params;
		
		params = getParameters(filterCondition, parameterTypeIdentifier);
		Iterator it = params.iterator();
		while(it.hasNext()) {
			String parameterName = (String)it.next();
			if(!parameters.containsKey(parameterName)) throw new IOException("No value for the parameter: " + parameterName);
			String parameterValue = parameters.get(parameterName)== null?null:parameters.get(parameterName).toString();
			result = filterCondition.replaceAll(parameterTypeIdentifier + "\\{" + parameterName + "\\}", parameterValue);
		}		
		
		return result;
	}
	
	/**
	 * Gets the parameters.
	 * 
	 * @param str the str
	 * @param parameterTypeIdentifier the parameter type identifier
	 * 
	 * @return the parameters
	 * 
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	public static Set getParameters(String str, String parameterTypeIdentifier) throws IOException {
		Set parameters = new HashSet();
		int fromIndex = 0;
		int beginIndex = -1;
		int endIndex = -1;
		while( (beginIndex = str.indexOf(parameterTypeIdentifier + "{", fromIndex)) != -1) {
			endIndex = str.indexOf("}", beginIndex);
			if(endIndex == -1) throw new IOException("Malformed parameter: " + str.substring(beginIndex));
			String parameter = str.substring(beginIndex+2, endIndex);
			parameters.add(parameter);
			fromIndex = endIndex;
		}
		
		return parameters;
	}
	
	/**
	 * The main method.
	 * 
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		String[] str = new String[] {
				"P{p1} = P{p2}",
				"P{p1}P{p2}",
				"P{p1} uguale P{p5}",
				"ciao mondo",
				"ciao {pi} mondo",
				//"ciao P{p mondo",
				"P{p1} uguale P{p2}",
		};
		
		Properties props = new Properties();
		props.put("p1", "P1");
		props.put("p2", "P2");
		
		
		for(int i = 0; i < str.length; i++) {
			
			Set parameters;
			try {
				System.out.println("String: " + replaceParameters(str[i], "P", props));
				parameters = getParameters(str[i], "P");
				Iterator it = parameters.iterator();
				while(it.hasNext()) {
					String parameter = (String)it.next();
					System.out.println(" - " + parameter);
				}
			} catch (IOException e) {
				//System.err.println("ERROR: malformed string: " + str[i]);
				e.printStackTrace();
			}
			
		}
	}
}
