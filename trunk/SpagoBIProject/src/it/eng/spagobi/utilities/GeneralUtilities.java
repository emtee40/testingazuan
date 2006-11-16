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
/*
 * Created on 7-lug-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.utilities;

import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dbaccess.DataConnectionManager;
import it.eng.spago.dbaccess.sql.DataConnection;
import it.eng.spago.dbaccess.sql.SQLCommand;
import it.eng.spago.dbaccess.sql.result.DataResult;
import it.eng.spago.dbaccess.sql.result.ScrollableDataResult;
import it.eng.spago.error.EMFErrorCategory;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.JavaClassDetail;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.bo.QueryDetail;
import it.eng.spagobi.bo.ScriptDetail;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IModalitiesValueDAO;
import it.eng.spagobi.bo.javaClassLovs.IJavaClassLov;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.constants.UtilitiesConstants;
import it.eng.spagobi.security.AnonymousCMSUserProfile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Vector;

import javax.portlet.PortletRequest;

/**
 * Contains some SpagoBI's general utilities.
 */
public class GeneralUtilities {
	/**
	 * The Main method
	 * 
	 * @param args String for command line arguments
	 */
	public static void main(String[] args) {
	}

	/**
	 * Checks if the Spago errorHandler contains only validation errors
	 * @param errorHandler The error handler to check
	 * @return true if the errorHandler contains only validation error, false if erroHandler
	 * is empty or contains not only validation error.
	 */
	public static boolean isErrorHandlerContainingOnlyValidationError(EMFErrorHandler errorHandler) {
		boolean contOnlyValImpl = false;
		Collection errors = errorHandler.getErrors();
		if(errors != null && errors.size() > 0) {
			if( errorHandler.isOKByCategory(EMFErrorCategory.INTERNAL_ERROR) &&
				errorHandler.isOKByCategory(EMFErrorCategory.USER_ERROR)) {
				contOnlyValImpl = true;
			}
		}
		return contOnlyValImpl;
	}
	
	
	/**
	 * Given an <code>InputStream</code> as input, gets the correspondent bytes array.
	 * @param is The input straeam 
	 * @return An array of bytes obtained from the input stream.
	 */
	public static byte[] getByteArrayFromInputStream(InputStream is) {
	
		try {
			java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
			java.io.BufferedOutputStream bos = new java.io.BufferedOutputStream(
					baos);
	
			int c = 0;
			byte[] b = new byte[1024];
			while ((c = is.read(b)) != -1) {
				if (c == 1024)
					bos.write(b);
				else
					bos.write(b, 0, c);
			}
			bos.flush();
			byte[] ret = baos.toByteArray();
			bos.close();
			return ret;
		} catch (IOException ioe) {
			SpagoBITracer.major(UtilitiesConstants.NAME_MODULE,
					PortletUtilities.class.getName(),
					"getByteArrayFromInputStream",
					"Exception", ioe);
			return null;
		}
		
	}

	/**
	 * From a String identifying the complete name for a file, gets the relative file names, 
	 * which are substrings of the starting String, according to the java separator "/".
	 * 
	 * @param completeFileName The string representing the file name 
	 * @return	relative names substring
	 */
	public static String getRelativeFileNames(String completeFileName){
		String fileSeparator = System.getProperty("file.separator");
		String javaSeparator = "/";
		if (completeFileName.indexOf(fileSeparator) < 0){
			if (completeFileName.indexOf(javaSeparator) < 0){ 
				return completeFileName;
			}else{
				int lastIndexOf = completeFileName.lastIndexOf(javaSeparator);
				return completeFileName.substring(lastIndexOf+1);
			}		
		}else{
			int lastIndexOf = completeFileName.lastIndexOf(fileSeparator);
			return completeFileName.substring(lastIndexOf+1);
		}
	}
	
	/**
	 * Returns a string containing the localhost IP address.
	 * 
	 * @return The IP address String
	 */
	public static String getLocalIPAddressAsString(){
		String ipAddrStr = "";
		try {
	        InetAddress addr = InetAddress.getLocalHost();
	        byte[] ipAddr = addr.getAddress();
	    
	        // Convert to dot representation
	        
	        for (int i=0; i<ipAddr.length; i++) {
	            if (i > 0) {
	                ipAddrStr += ".";
	            }
	            ipAddrStr += ipAddr[i]&0xFF;
	        }
	    } catch (UnknownHostException e) {
	    	SpagoBITracer.critical("SpagoBIUtilities", GeneralUtilities.class.getName(), "getLocalIPAddressAsString", "Excecption", e);
	    }
	    return ipAddrStr;
	}
	
	/**
	 * Returns the context address for SpagoBI as an URL and puts it into a string. The
	 * information contained are the Srever name and port. Before saving, both them are written 
	 * into the output console.
	 * 
	 * @return A String with SpagoBI's context adderss
	 */
	public static String getSpagoBiContextAddress(){
		SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), 
				"getSpagoBiContextAddress", "method invoked");
		PortletRequest portletRequest = PortletUtilities.getPortletRequest();
		SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), 
				"getSpagoBiContextAddress", "portlet request obtained: " + portletRequest);
		String path = portletRequest.getScheme() + "://"+portletRequest.getServerName()+ ":"+portletRequest.getServerPort() + portletRequest.getContextPath(); 
		SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), 
				"getSpagoBiContextAddress", "using context path: " + path);
		return path;
		//return "http://"+portletRequest.getServerName()+ ":"+portletRequest.getServerPort() +"/spagobi"; 
	}
	
	/**
	 * Gets the spagoBI's content repository servlet information as a string.
	 * 
	 * @return A string containing spagoBI's content repository servlet information
	 */
	public static String getSpagoBiContentRepositoryServlet(){
		
	    return getSpagoBiContextAddress() + "/ContentRepositoryServlet";
	}
	
	/**
	 * Gets the spagoBI's dashboards servlet information as a string.
	 * 
	 * @return A string containing spagoBI's dashboards servlet information
	 */
	public static String getSpagoBiDashboardServlet(){
		
	    return getSpagoBiContextAddress() + "/DashboardService";
	}
	
	/**
	 * Gets the spagoBI's EventManager servlet information as a string.
	 * 
	 * @return A string containing spagoBI's EventManager servlet information
	 */
	public static String getSpagoBiEventsManagerServlet(){
		
	    return getSpagoBiContextAddress() + "/EventsManagerServlet";
	}
	
	
	public static Binding fillBinding(HashMap attrs) {
		Binding bind = new Binding();
		Set setattrs = attrs.keySet();
		Iterator iterattrs = setattrs.iterator();
		String key = null;
		String value = null;
		while(iterattrs.hasNext()) {
			key = iterattrs.next().toString();
			value = attrs.get(key).toString();
			bind.setVariable(key, value);
		}
		return bind;
	}
	
	
	public static Binding fillBinding(IEngUserProfile profile) throws EMFInternalError {
		
		HashMap allAttrs = GeneralUtilities.getAllProfileAttributes(profile);
		if (allAttrs == null) return null;
		return fillBinding(allAttrs);
	}
	
	/**
	 * Substitutes the profile attributes with sintax "${attribute_name}" with the correspondent value in the string passed at input.
	 * 
	 * @param statement The string to be modified (tipically a query)
	 * @param profile The IEngUserProfile object
	 * @return The statement with profile attributes replaced by their values.
	 * @throws Exception
	 */
	public static String substituteProfileAttributesInString(String statement, IEngUserProfile profile) throws Exception {
		int profileAttributeStartIndex = statement.indexOf("${");
		if (profileAttributeStartIndex != -1) {
			statement = substituteProfileAttributesInString(statement, profile, profileAttributeStartIndex);
		}
		return statement;
	}
	
	/**
	 * Substitutes the profile attributes with sintax "${attribute_name}" with the correspondent value in the string passed at input.
	 * 
	 * @param statement The string to be modified (tipically a query)
	 * @param profile The IEngUserProfile object
	 * @param profileAttributeStartIndex The start index for query parsing (useful for recursive calling)
	 * @return The statement with profile attributes replaced by their values.
	 * @throws Exception
	 */
	private static String substituteProfileAttributesInString(String statement, IEngUserProfile profile, int profileAttributeStartIndex) throws Exception {
		int profileAttributeEndIndex = statement.indexOf("}");
		if (profileAttributeEndIndex == -1) throw new Exception("Not closed profile attribute: '}' expected.");
		if (profileAttributeEndIndex < profileAttributeEndIndex) throw new Exception("Not opened profile attribute: '${' expected.");
		String attribute = statement.substring(profileAttributeStartIndex + 2, profileAttributeEndIndex).trim();
		int startConfigIndex = attribute.indexOf("(");
		String attributeName = "";
		String prefix = "";
		String split = "";
		String suffix = "";
		boolean attributeExcpetedToBeMultiValue = false;
		if (startConfigIndex != -1) {
			// the attribute profile is expected to be multivalue
			attributeExcpetedToBeMultiValue = true;
			int endConfigIndex = attribute.length() - 1;
			if (attribute.charAt(endConfigIndex) != ')') throw new Exception("Sintax error: \")\" missing. The expected sintax for " +
					"attribute profile is ${attributeProfileName(prefix;split;suffix)} for multivalue profile attributes " +
					"or ${attributeProfileName} for singlevalue profile attributes. 'attributeProfileName' must not contain '(' characters.");
			String configuration = attribute.substring(startConfigIndex + 1, endConfigIndex);
			String[] configSplitted = configuration.split(";");
			if (configSplitted == null || configSplitted.length != 3) throw new Exception("Sintax error. The expected sintax for " +
					"attribute profile is ${attributeProfileName(prefix;split;suffix)} for multivalue profile attributes " +
					"or ${attributeProfileName} for singlevalue profile attributes. 'attributeProfileName' must not contain '(' characters. " +
					"The (prefix;split;suffix) is not properly configured");
			prefix = configSplitted[0];
			split = configSplitted[1];
			suffix = configSplitted[2];
			SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "Multi-value attribute profile configuration found: prefix: '" + prefix + "'; split: '" + split + "'; suffix: '" + suffix + "'." );
			attributeName = attribute.substring(0, startConfigIndex);
			SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "Expected multi-value attribute profile name: '" + attributeName + "'");
		} else {
			attributeName = attribute;
			SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "Expected single-value attribute profile name: '" + attributeName + "'");
		}
		
		Object attributeValueObj = profile.getUserAttribute(attributeName);
		if (attributeValueObj == null || attributeValueObj.toString().trim().equals("")) throw new Exception("Profile attribute '" + attributeName + "' not existing.");

		String attributeValue = attributeValueObj.toString();
		SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "Profile attribute value found: '" + attributeValue + "'");
		String replacement = null;
		String newListOfValues = null;
		if (attributeExcpetedToBeMultiValue) {
			if (attributeValue.startsWith("{")) {
				// the profile attribute is multi-value
				String[] values = findAttributeValues(attributeValue);
				SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "N. " + values.length + " profile attribute values found: '" + values + "'");
				newListOfValues = values[0];
				for (int i = 1; i < values.length; i++) {
					newListOfValues = newListOfValues + split + values[i];
				}
			} else {
				SpagoBITracer.warning("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "The attribute value has not the sintax of a multi value attribute; considering it as a single value.");
				newListOfValues = attributeValue;
			}
		} else {
			if (attributeValue.startsWith("{")) {
				// the profile attribute is multi-value
				SpagoBITracer.warning("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "The attribute value seems to be a multi value attribute; trying considering it as a multi value using its own splitter and no prefix and suffix.");
				try {
					// checks the sintax
					String[] values = findAttributeValues(attributeValue);
					newListOfValues = values[0];
					for (int i = 1; i < values.length; i++) {
						newListOfValues = newListOfValues + attributeValue.charAt(1) + values[i];
					}
				} catch (Exception e) {
					SpagoBITracer.warning("SpagoBIUtilities", GeneralUtilities.class.getName(), "substituteProfileAttributesInQuery", "The attribute value does not respect the sintax of a multi value attribute; considering it as a single value.");
					newListOfValues = attributeValue;
				}
			} else {
				newListOfValues = attributeValue;
			}
		}
		
		replacement = prefix + newListOfValues + suffix;
		
		// replaces the profile attribute declaration
		statement = statement.replace("${" + attribute + "}", replacement);

		profileAttributeStartIndex = statement.indexOf("${", profileAttributeEndIndex);
		if (profileAttributeStartIndex != -1) 
			statement = substituteProfileAttributesInString(statement, profile, profileAttributeStartIndex);
		return statement;
	}
	
	
	/**
	 * Find the attribute values in case of multi value attribute.
	 * The sintax is: {splitter character{list of values separated by the splitter}}.
	 * Examples: {;{value1;value2;value3....}}
	 *           {|{value1|value2|value3....}}
	 * 
	 * @param attributeValue The String representing the list of attribute values
	 * @return The array of attribute values
	 * @throws Exception in case of sintax error
	 */
	private static String[] findAttributeValues(String attributeValue) throws Exception {
		String sintaxErrorMsg = "Multi value attribute sintax error.";
		if (attributeValue.length() < 6) throw new Exception(sintaxErrorMsg);
		if (!attributeValue.endsWith("}}")) throw new Exception(sintaxErrorMsg);
		if (attributeValue.charAt(2) != '{') throw new Exception(sintaxErrorMsg);
		char splitter = attributeValue.charAt(1);
		String valuesList = attributeValue.substring(3, attributeValue.length() - 2);
		String [] values = valuesList.split(String.valueOf(splitter));
		return values;
	}
	
	public static HashMap getAllProfileAttributes(IEngUserProfile profile) throws EMFInternalError {
		if (profile == null) throw new EMFInternalError(EMFErrorSeverity.ERROR, "getAllProfileAttributes method invoked with null input profile object");
		HashMap profileattrs = new HashMap();
		Collection profileattrsNames = profile.getUserAttributeNames();
		if (profileattrsNames == null || profileattrsNames.size() == 0) return profileattrs;
		Iterator it = profileattrsNames.iterator();
		while (it.hasNext()) {
			Object profileattrName = it.next();
			Object profileattrValue = profile.getUserAttribute(profileattrName.toString());
			profileattrs.put(profileattrName, profileattrValue);
		}
		return profileattrs;
	}
	
	public static String testScript(String script, Binding bind) throws Exception {
		String result = "";
		// get the sourcebena of the default script language
		SourceBean scriptLangSB = (SourceBean)ConfigSingleton.getInstance().
								  getFilteredSourceBeanAttribute("SPAGOBI.SCRIPT_LANGUAGE_SUPPORTED.SCRIPT_LANGUAGE", 
																 "default", "true");
		// get the name of the default script language
		String name = (String)scriptLangSB.getAttribute("name");
		// the only language supported now is groovy so if the default script isn't groovy
		// throw an exception and return an empty string
		if(!name.equalsIgnoreCase("groovy")) {
			SpagoBITracer.critical("GeneralUtilities", 
								   GeneralUtilities.class.getName(), 
								   "testScript", "The only script language supported is groovy, " +
								   "the configuration file has no configuration for groovy");
			return "";
		}
		String predefinedScriptFileName = (String)scriptLangSB.getAttribute("predefinedScriptFile");
		if (predefinedScriptFileName != null && !predefinedScriptFileName.trim().equals("")) {
			SpagoBITracer.debug("SpagoBIUtilities", GeneralUtilities.class.getName(), "testScript", "Trying to load predefined script file '" + predefinedScriptFileName + "'.");
			InputStream is = null;
			try {
				is = Thread.currentThread().getContextClassLoader().getResourceAsStream(predefinedScriptFileName);
				StringBuffer servbuf = new StringBuffer();
				int arrayLength = 1024;
				byte[] bufferbyte = new byte[arrayLength];
				char[] bufferchar = new char[arrayLength];
				int len;
				while ((len = is.read(bufferbyte)) >= 0) {
					for (int i = 0; i < arrayLength; i++) {
						bufferchar[i] = (char) bufferbyte[i];
					}
					servbuf.append(bufferchar, 0, len);
				}
				is.close();
				script = servbuf.toString() + script;
			} catch (Exception e) {
				SpagoBITracer.warning("SpagoBIUtilities", GeneralUtilities.class.getName(), "testScript", "The predefined script file '" + predefinedScriptFileName + "' was not properly loaded.");
			} finally {
				if (is != null) is.close();
			}
		}
		GroovyShell shell = new GroovyShell(bind);
		Object value = shell.evaluate(script);
        result = value.toString();
        return result;
        
        /*
         * implementation with bsf, seems not possible to laucha groovy expression with Bindings
         * so we use groovy directly
         * 
		String name = (String)scriptLangSB.getAttribute("name");
		String engclass = (String)scriptLangSB.getAttribute("engineclass");
		String id = (String)scriptLangSB.getAttribute("identifier");
		String shortid = (String)scriptLangSB.getAttribute("shortidentifier");
		BSFManager.registerScriptingEngine(name, engclass, new String[] { id, shortid }	);
        BSFManager manager = new BSFManager(); 
        try {
        	Object answer = manager.eval(name, "Test1.groovy", 0, 0, script);
        	result = answer.toString();
        } catch (BSFException e1) {
        	e1.printStackTrace();
        }
        */
	}
	
	
	/**
	 * Delete a folder and its contents
	 * @param dir The java file object of the directory 
	 * @return the result of the operation 
	 */ 
	public static boolean deleteDir(File dir) {
		 if(dir.isDirectory()) {
			 String[] children = dir.list();
			 for (int i=0; i<children.length; i++) {
				 boolean success = deleteDir(new File(dir, children[i]));
				 if (!success) {
					 return false;
				 }
			 }
		 }
		 return dir.delete();
	 }
	
	
	/**
	 * Delete contents of a directory
	 * @param dir The java file object of the directory 
	 * @return the result of the operation 
	 */ 
	public static boolean deleteContentDir(File dir) {
		 if(dir.isDirectory()) {
			 String[] children = dir.list();
			 for (int i=0; i<children.length; i++) {
				 boolean success = deleteDir(new File(dir, children[i]));
				 if (!success) {
					 return false;
				 }
			 }
		 }
		 return true;
	}

	/**
	 * Substitutes the substrings with sintax "${code,bundle}" or "${code}" 
	 * (in the second case bundle is assumed to be the default value "messages") 
	 * with the correspondent internationalized messages in the input String. 
	 * This method calls <code>PortletUtilities.getMessage(key, bundle)</code>.
	 * 
	 * @param message The string to be modified
	 * @return The message with the internationalized substrings replaced.
	 */
	public static String replaceInternationalizedMessages (String message) {
		if (message == null) return null;
		int startIndex = message.indexOf("${");
		if (startIndex == -1) return message;
		else return replaceInternationalizedMessages(message, startIndex);
	}
	
	private static String replaceInternationalizedMessages (String message, int startIndex) {
		int endIndex = message.indexOf("}", startIndex);
		if (endIndex == -1 || endIndex < startIndex) return message;
		String toBeReplaced = message.substring(startIndex + 2, endIndex).trim();
		String key = "";
		String bundle = "messages";
		String[] splitted = toBeReplaced.split(",");
		if (splitted != null) {
			key = splitted[0].trim();
			if (splitted.length == 1) {
				String replacement = PortletUtilities.getMessage(key, bundle);
				if (!replacement.equalsIgnoreCase(key)) message = message.replace("${" + toBeReplaced + "}", replacement);
			}
			if (splitted.length == 2) {
				if (splitted[1] != null && !splitted[1].trim().equals("")) 
					bundle = splitted[1].trim();
				String replacement = PortletUtilities.getMessage(key, bundle);
				if (!replacement.equalsIgnoreCase(key)) message = message.replace("${" + toBeReplaced + "}", replacement);
			}
		}
		startIndex = message.indexOf("${", endIndex);
		if (startIndex != -1) 
			message = replaceInternationalizedMessages(message, startIndex);
		return message;
	}

	/**
     * Questo metodo permette di sostituire una parte di una stringa con un'altra.
     * @param toParse stringa da manipolare.
     * @param replacing parte di stringa da sostituire.
     * @param replaced stringa nuova.
     */
    public static String replace(String toParse, String replacing, String replaced) {        
        if (toParse == null) {            
            return toParse;
        } // if (toParse == null)       
        if (replacing == null) {            
            return toParse;
        } // if (replacing == null)        
        if (replaced != null) {
            int parameterIndex = toParse.indexOf(replacing);
            while (parameterIndex != -1) {
                String newToParse = toParse.substring(0, parameterIndex);
                newToParse += replaced;
                newToParse += toParse.substring(parameterIndex + replacing.length(), toParse.length());               
                toParse = newToParse;
                parameterIndex = toParse.indexOf(replacing, parameterIndex + replaced.length());
            } // while (parameterIndex != -1)
        } // if (replaced != null)
        return toParse;
    } // public static String replace(String toParse, String replacing, String replaced)
	
	
	/**
	* Questo metodo implementa la stessa logica della funzione javascript <em>escape</em>.
	* @param input stringa da manipolare.
	*/
	public static String encode(String input) {
		/*
		input = replace(input, "%", "%25");
	    input = replace(input, " ", "%20");
	    input = replace(input, "\"", "%22");
	    input = replace(input, "'", "%27");
	    input = replace(input, "<", "%3C");
	    input = replace(input, "<", "%3E");
	    input = replace(input, "?", "%3F");
	    input = replace(input, "&", "%26");
	    */
		//input = replace(input, " ", "&#160;");
		input = replace(input, " ", "_");
	    return input;
	 } 
	
	/**
	* Questo metodo implementa la stessa logica della funzione javascript <em>escape</em>.
	* @param input stringa da manipolare.
	*/
	public static String decode(String input) {
		/*
		input = replace(input, "%25", "%");
	    input = replace(input, "%20", " ");
	    input = replace(input, "%22", "\"");
	    input = replace(input, "%27", "'");
	    input = replace(input, "%3C", "<");
	    input = replace(input, "%3E", "<");
	    input = replace(input, "%3F", "?");
	    input = replace(input, "%26", "&");
	    */
		//input = replace(input, "&#160;", " ");
		input = replace(input, "_", " ");
	    return input;
	 } 
	
	public static void subsituteBIObjectParametersLovProfileAttributes (BIObject obj, SessionContainer session) throws Exception, EMFInternalError {
		List biparams = obj.getBiObjectParameters(); 
        Iterator iterParams = biparams.iterator();
        while(iterParams.hasNext()) {
        	//if the param is a Fixed Lov, Make the profile attribute substitution at runtime
        	BIObjectParameter biparam = (BIObjectParameter)iterParams.next();
        	Parameter param = biparam.getParameter();
        	ModalitiesValue modVal = param.getModalityValue();
        	if(modVal.getITypeCd().equals(SpagoBIConstants.INPUT_TYPE_FIX_LOV_CODE)){
        		String value = modVal.getLovProvider();
        		int profileAttributeStartIndex = value.indexOf("${");
    			if (profileAttributeStartIndex != -1) {
    				IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
    				value = GeneralUtilities.substituteProfileAttributesInString(value, profile, profileAttributeStartIndex);
    				biparam.getParameter().getModalityValue().setLovProvider(value);
    			}
        	}
        }
	}
	
	/**
	 * checks if a module is installed (based on the configuration file spagobi_components.xml)
	 * @param moduleName The name of the module
	 * @return true if the module is installed, false otherwise
	 */
	public static boolean isModuleInstalled(String moduleName) {
		boolean moduleInst = false;
		ConfigSingleton spagoConfig = ConfigSingleton.getInstance();
		SourceBean compSB = (SourceBean)spagoConfig.getFilteredSourceBeanAttribute("SPAGOBI_COMPONENTS.SPAGOBI_COMPONENT", "name", moduleName);
		if(compSB!=null){
			String inst = (String)compSB.getAttribute("installed");
			if((inst!=null) && inst.equalsIgnoreCase("true")) {
				moduleInst = true;
			}
		}
		return moduleInst;
	}
	
	public static String substituteQuotesIntoString(String value){
		
		String singleQuoteString = "'";
		String doubleQuoteString = new String();
		char doubleQuoteChar = '"';
		doubleQuoteString += doubleQuoteChar;
		String singleQuoteReplaceString = "&#39;";
		String doubleQuotesReplaceString = "&#34;";
		value = value.replaceAll(singleQuoteString,singleQuoteReplaceString);
		value = value.replaceAll(doubleQuoteString,doubleQuotesReplaceString);
		return value;
		
	}
	
	public static String getLovResult (String lovLabel) throws Exception {
 		IModalitiesValueDAO lovDAO = DAOFactory.getModalitiesValueDAO();
 		ModalitiesValue lov = lovDAO.loadModalitiesValueByLabel(lovLabel);
 		String toReturn = getLovResult(lov);
 		return toReturn;
	}
	
	public static String getLovResult (ModalitiesValue lov) throws Exception {
		DataConnection dataConnection = null;
		//RequestContainer reqcont = RequestContainer.getRequestContainer();
		//SessionContainer sessCont = reqcont.getSessionContainer();
		//SessionContainer permSess = sessCont.getPermanentContainer();
		//IEngUserProfile profile = (IEngUserProfile) permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		IEngUserProfile profile = new AnonymousCMSUserProfile("anonymous");
		String type = lov.getITypeCd();
        if (type.equalsIgnoreCase("QUERY")) {
        	String dataProv = lov.getLovProvider();
        	QueryDetail queryDet = QueryDetail.fromXML(dataProv);
        	String pool = queryDet.getConnectionName();
    		String statement = queryDet.getQueryDefinition();
    		DataConnectionManager dataConnectionManager = DataConnectionManager.getInstance();
			dataConnection = dataConnectionManager.getConnection(pool);
			statement = GeneralUtilities.substituteProfileAttributesInString(statement, profile);
			SQLCommand sqlCommand = dataConnection.createSelectCommand(statement);
			DataResult dataResult = sqlCommand.execute();
            ScrollableDataResult scrollableDataResult = (ScrollableDataResult) dataResult.getDataObject();
			SourceBean result = scrollableDataResult.getSourceBean();
    		String resStr = result.toXML(false);
    		resStr = resStr.trim();
    		if(resStr.startsWith("<?")) {
    			resStr = resStr.substring(2);
    			int indFirstTag = resStr.indexOf("<");
    			resStr = resStr.substring(indFirstTag);
    		}
    		resStr = resStr.toLowerCase();
    		
    		it.eng.spago.dbaccess.Utils.releaseResources(dataConnection, sqlCommand, dataResult);
    		
    		return resStr;
        } else if (type.equalsIgnoreCase("SCRIPT")) {
        	HashMap attributes = getAllProfileAttributes(profile);
        	Binding bind = GeneralUtilities.fillBinding(attributes);
        	String dataProv = lov.getLovProvider();
        	ScriptDetail scriptDet = ScriptDetail.fromXML(dataProv);
        	String result = GeneralUtilities.testScript(scriptDet.getScript(), bind);
    		return result;
        } else if (type.equalsIgnoreCase("JAVA_CLASS")) {
        	String lovProvider = lov.getLovProvider();
			JavaClassDetail javaClassDetail = JavaClassDetail.fromXML(lovProvider);
			String javaClassName = javaClassDetail.getJavaClassName();
			if (javaClassName == null || javaClassName.trim().equals("")){
				SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, 
						GeneralUtilities.class.getName(), 
						"getLovResult", "The java class name is not specified");
				throw new EMFUserError(EMFErrorSeverity.ERROR, "1071");
			}
			IJavaClassLov javaClassLov = null;
			Class javaClass = null;
			try {
				javaClass = Class.forName(javaClassName);
			} catch (ClassNotFoundException e) {
				SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, 
						GeneralUtilities.class.getName(), 
						"getLovResult", "Java class '" + javaClassName + "' not found!!");
				Vector v = new Vector();
				v.add(javaClassName);
				throw new EMFUserError(EMFErrorSeverity.ERROR, "1072", v);
			}
			try {
				javaClassLov = (IJavaClassLov) javaClass.newInstance();
			} catch (Exception e) {
				SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, 
						GeneralUtilities.class.getName(), 
						"getLovResult", "Error while instatiating Java class '" + javaClassName + "'.");
				Vector v = new Vector();
				v.add(javaClassName);
				throw new EMFUserError(EMFErrorSeverity.ERROR, "1073", v);
			}
			String result = javaClassLov.getValues(profile);
			return result;
        } else if (type.equalsIgnoreCase("FIX_LOV")) 
        		return lov.getLovProvider();
        else {
			SpagoBITracer.major(ObjectsTreeConstants.NAME_MODULE, 
					GeneralUtilities.class.getName(), 
					"getLovResult", "Input type '" + type + "' not valid.");
			throw new EMFUserError(EMFErrorSeverity.ERROR, "100");
        }
	}
	
}
