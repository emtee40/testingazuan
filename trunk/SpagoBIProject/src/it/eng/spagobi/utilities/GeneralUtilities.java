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
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.constants.UtilitiesConstants;
import it.eng.spago.base.SessionContainer;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

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
		String path ="http://"+portletRequest.getServerName()+ ":"+portletRequest.getServerPort() + portletRequest.getContextPath(); 
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
	 * Gets the spagoBI's EventManager servlet information as a string.
	 * 
	 * @return A string containing spagoBI's EventManager servlet information
	 */
	public static String getSpagoBiEventsManagerServlet(){
		
	    return getSpagoBiContextAddress() + "/EventsManagerServlet";
	}
	
	
	
	/**
	 * Get all the shared profile attributes of the users.
	 * The attributes are contained into a configuration file which contains the name 
	 * of the attribute and the test value of the attribute. The test value is used during 
	 * the test of a script that use the attribute. 
	 * 
	 * @return HashMap of the attributes. HashMap keys are profile attribute.
	 * HashMap values are test values. 
	 * 
	 */
	public static HashMap getAllProfileAttributes() {
		List attrs = ConfigSingleton.getInstance().getAttributeAsList("PROFILE_ATTRIBUTES.ATTRIBUTE");
		HashMap attrsMap = new HashMap();
		if(attrs==null) {
			return attrsMap;
		}
		Iterator iterAttrs = attrs.iterator();
		SourceBean attrSB = null;
		String nameattr = null;
		String attrvalue = null;
		while(iterAttrs.hasNext()) {
			attrSB = (SourceBean)iterAttrs.next();
			if(attrSB==null)
				continue;
			nameattr = (String)attrSB.getAttribute("name");
		    attrvalue = (String)attrSB.getAttribute("valuefortest");
		    attrsMap.put(nameattr, attrvalue);
		}
		return attrsMap;
	}
	
	/**
	 * Get all the predefined profile attributes of the user with the given unique identifier passed as String.
	 * The attributes are contained into a configuration file which contains the name 
	 * of the attribute and the test value of the attribute. The test value is used during 
	 * the test of a script that use the attribute. 
	 * 
	 * @return HashMap of the attributes. HashMap keys are profile attribute.
	 * HashMap values are test values. 
	 * 
	 */
	public static HashMap getPredefinedProfileAttributes(String userUniqueIdentifier) {
		SourceBean profileAttrsSB = (SourceBean) ConfigSingleton.getInstance().getFilteredSourceBeanAttribute("PROFILE_ATTRIBUTES.USER-PROFILES.USER", "name", userUniqueIdentifier);
		if(profileAttrsSB==null)
			return new HashMap();
		List profileAttrs = profileAttrsSB.getAttributeAsList("ATTRIBUTE");
		HashMap attrsMap = new HashMap();
		if (profileAttrs == null || profileAttrs.size() == 0) {
			SpagoBITracer.info("SpagoBIUtilities", GeneralUtilities.class.getName(), "getPredefinedProfileAttributes()", 
				"The user with unique identifer '" + userUniqueIdentifier + 
				"' has no predefined profile attributes.");
			return attrsMap;
		}
		Iterator iterAttrs = profileAttrs.iterator();
		SourceBean attrSB = null;
		String nameattr = null;
		String attrvalue = null;
		while(iterAttrs.hasNext()) {
			attrSB = (SourceBean) iterAttrs.next();
			if (attrSB == null)
				continue;
			nameattr = attrSB.getAttribute("name").toString();
		    attrvalue = attrSB.getAttribute("valuefortest").toString();
		    attrsMap.put(nameattr, attrvalue);
		}
		SpagoBITracer.info("SpagoBIUtilities", GeneralUtilities.class.getName(), "getPredefinedProfileAttributes()", 
				"The user with unique identifer '" + userUniqueIdentifier + 
				"' has the following predefined profile attributes:\n" + attrsMap.toString());
		return attrsMap;
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
		
		HashMap allAttrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
		if (allAttrs == null) return null;
		return fillBinding(allAttrs);
//		HashMap allAttrs = getAllProfileAttributes();
//		Set setattrs = allAttrs.keySet();
//		Iterator iterattrs = setattrs.iterator();
//		String key = null;
//		Object valueobj = null;
//		while(iterattrs.hasNext()) {
//			key = iterattrs.next().toString();
//			try {
//				valueobj = profile.getUserAttribute(key);
//			} catch (Exception e) {
//				valueobj = null;
//			}
//			if(valueobj!=null)
//				bind.setVariable(key, valueobj.toString());
//		}
//		return bind;
	}
	
	
	/**
	 * Substitutes the profile attributes with sintax "${attribute_name}" with the correspondent value in the query statement passed at input.
	 * 
	 * @param statement The query statement string to be modified
	 * @param profileattrs The profile attributes HashMap
	 * @param profileAttributeStartIndex The start index for query parsing (useful for recursive calling)
	 * @return The statement with profile attributes replaced by their values.
	 * @throws Exception
	 */
	public static String substituteProfileAttributesInQuery(String statement, HashMap profileattrs, int profileAttributeStartIndex) throws Exception {
		int profileAttributeEndIndex = statement.indexOf("}");
		if (profileAttributeEndIndex == -1) throw new Exception("Not closed profile attribute: '}' expected.");
		if (profileAttributeEndIndex < profileAttributeEndIndex) throw new Exception("Not opened profile attribute: '${' expected.");
		String attributeName = statement.substring(profileAttributeStartIndex + 2, profileAttributeEndIndex);
		Object attributeValueObj = profileattrs.get(attributeName);
		if (attributeValueObj == null) throw new Exception("Profile attribute '" + attributeName + "' not existing.");
		else statement = statement.replace("${" + attributeName + "}", attributeValueObj.toString());
		profileAttributeStartIndex = statement.indexOf("${", profileAttributeEndIndex);
		if (profileAttributeStartIndex != -1) 
			statement = substituteProfileAttributesInQuery(statement, profileattrs, profileAttributeStartIndex);
		return statement;
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
	
	public static String substituteProfileAttributesInFixLov(String value, HashMap profileattrs, int profileAttributeStartIndex) throws Exception {
		int profileAttributeEndIndex = value.indexOf("}");
		if (profileAttributeEndIndex == -1) throw new Exception("Not closed profile attribute: '}' expected.");
		if (profileAttributeEndIndex < profileAttributeEndIndex) throw new Exception("Not opened profile attribute: '${' expected.");
		String attributeName = value.substring(profileAttributeStartIndex + 2, profileAttributeEndIndex);
		Object attributeValueObj = profileattrs.get(attributeName);
		if (attributeValueObj == null) throw new Exception("Profile attribute '" + attributeName + "' not existing.");
		else value = value.replace("${" + attributeName + "}", attributeValueObj.toString());
		profileAttributeStartIndex = value.indexOf("${", profileAttributeEndIndex);
		if (profileAttributeStartIndex != -1) 
			value = substituteProfileAttributesInFixLov(value, profileattrs, profileAttributeStartIndex);
		return value;
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
    				HashMap profileattrs = (HashMap) profile.getUserAttribute("PROFILE_ATTRIBUTES");
    				value = GeneralUtilities.substituteProfileAttributesInFixLov(value, profileattrs, profileAttributeStartIndex);
    				biparam.getParameter().getModalityValue().setLovProvider(value);
    			}
        		
        	}
}
}
}