/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.behaviouralmodel.lov.handlers;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;

public class ScriptManager {

	/**
	 * Run a script.
	 * 
	 * @param script the script to run
	 * @param bind the bindings for script variables
	 * 
	 * @return the result of the script
	 * 
	 * @throws Exception the exception
	 */
	public static String runScript(String script, Binding bind) throws Exception {
		String result = run(script, bind);
		return result;
    }
	
	/**
	 * Run a script.
	 * 
	 * @param script the script to run
	 * 
	 * @return the result of the script
	 * 
	 * @throws Exception the exception
	 */
	public static String runScript(String script) throws Exception {
		String result = run(script, null);
		return result;
    }
	
	/**
	 * Run a script
	 * @param script the script to run 
	 * @param bind the bindings for script variables
	 * @return the result of the script
	 * @throws Exception
	 */
	private static String run(String script, Binding bind) throws Exception {
		String result = "";
		// get the sourcebean of the default script language
		SourceBean scriptLangSB = (SourceBean)ConfigSingleton.getInstance().
								  getFilteredSourceBeanAttribute("SPAGOBI.SCRIPT_LANGUAGE_SUPPORTED.SCRIPT_LANGUAGE", 
																 "default", "true");
		// get the name of the default script language
		String name = (String)scriptLangSB.getAttribute("name");
		// the only language supported now is groovy so if the default script isn't groovy
		// throw an exception and return an empty string
		if(!name.equalsIgnoreCase("groovy")) {
			SpagoBITracer.critical(SpagoBIConstants.NAME_MODULE, ScriptManager.class.getName(), 
								   "run", "The only script language supported is groovy, " +
								   "the configuration file has no configuration for groovy");
			return "";
		}
		// load predefined script file
		String predefinedScriptFileName = (String)scriptLangSB.getAttribute("predefinedScriptFile");
		if(predefinedScriptFileName != null && !predefinedScriptFileName.trim().equals("")) {
			SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, ScriptManager.class.getName(), 
					            "run", "Trying to load predefined script file '" + predefinedScriptFileName + "'.");
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
				SpagoBITracer.warning(SpagoBIConstants.NAME_MODULE, ScriptManager.class.getName(), 
						              "run", "The predefined script file '" + predefinedScriptFileName + "' was not properly loaded.");
			} finally {
				if (is != null) is.close();
			}
		}
		// create shell instance
		GroovyShell shell = null;
		if(bind==null) {
			shell = new GroovyShell();
		} else {
			shell = new GroovyShell(bind);
		}
		// execute the script
		Object value = shell.evaluate(script);
        result = value.toString();
        // return the result
        return result;
	}
	
	
	/**
	 * Fill a groovy binding with attributes of an hashmap.
	 * 
	 * @param attrs Map of attibutes to load into binding
	 * 
	 * @return the groovy binding object
	 */
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
	
	/**
	 * Fill a groovy binding with attributes of a user profile.
	 * 
	 * @param profile the profile
	 * 
	 * @return the groovy binding object
	 * 
	 * @throws EMFInternalError the EMF internal error
	 */
	public static Binding fillBinding(IEngUserProfile profile) throws EMFInternalError {
		HashMap allAttrs = GeneralUtilities.getAllProfileAttributes(profile);
		if (allAttrs == null) return null;
		return fillBinding(allAttrs);
	}
	
	
	
}
	
	
	
	
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
