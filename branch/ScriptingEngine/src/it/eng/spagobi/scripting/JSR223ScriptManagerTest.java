/*
Copyright (c) 2004 Sun Microsystems, Inc. All Rights Reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

-Redistribution of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

-Redistribution in binary form must reproduce the above copyright notice, 
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

Neither the name of Sun Microsystems, Inc. or the names of contributors may 
be used to endorse or promote products derived from this software without 
specific prior written permission.

This software is provided "AS IS," without a warranty of any kind. ALL 
EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING
ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
OR NON-INFRINGEMENT, ARE HEREBY EXCLUDED. SUN MIDROSYSTEMS, INC. ("SUN")
AND ITS LICENSORS SHALL NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
AS A RESULT OF USING, MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS
DERIVATIVES. IN NO EVENT WILL SUN OR ITS LICENSORS BE LIABLE FOR ANY LOST 
REVENUE, PROFIT OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, 
INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY 
OF LIABILITY, ARISING OUT OF THE USE OF OR INABILITY TO USE THIS SOFTWARE, 
EVEN IF SUN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

You acknowledge that this software is not designed, licensed or intended
for use in the design, construction, operation or maintenance of any
nuclear facility.
*/

/*
SCR.4.2.4.1
Discovery Mechanism -- this sample demonstrates the use of ScriptEngineManager 
			to find ScriptEngine Factory and return script engine by extension. 
*/
package it.eng.spagobi.scripting;


import javax.script.*;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class JSR223ScriptManagerTest  {
	
	public JSR223ScriptManagerTest() {
		
	}
	
	public void printInfo() {
		ScriptEngineManager mgr = new ScriptEngineManager();
		List<ScriptEngineFactory> factories = mgr.getEngineFactories();
		
		for (ScriptEngineFactory factory: factories) {
		    System.out.println("ScriptEngineFactory Info");
		    String engName = factory.getEngineName();
		    String engVersion = factory.getEngineVersion();
		    String langName = factory.getLanguageName();
		    String langVersion = factory.getLanguageVersion();
		    System.out.printf("\tScript Engine: %s (%s)\n", engName, engVersion);
		    List<String> engNames = factory.getNames();
		    for(String name: engNames) {
		      System.out.printf("\tEngine Alias: %s\n", name);
		    }
		    System.out.printf("\tLanguage: %s (%s)\n", langName, langVersion);
		  }   
	}
	
	
	
	
	public static void main(String[] args) throws Exception {
		JSR223ScriptManagerTest scriptMngTst = new JSR223ScriptManagerTest();
		scriptMngTst.printInfo();
		
		//Initiate ScriptEngineManager
		ScriptEngineManager scriptManager = new ScriptEngineManager();

		//get script engines by name
		ScriptEngine groovyScriptEngine = scriptManager.getEngineByName("groovy");
		ScriptEngine jsScriptEngine = scriptManager.getEngineByName("js");
		
		// eval script
		try {
			groovyScriptEngine.eval("println 'Can you feel the groove?';");
		} catch (ScriptException ex) {
		    ex.printStackTrace();
		}  
		
		//eval script from stream
		InputStream  stream;; 
		try {
			stream = JSR223ScriptManagerTest.class.getResourceAsStream("HelloWorld.groovy");
			groovyScriptEngine.eval(new InputStreamReader(stream));
		} catch (ScriptException ex) {
		    ex.printStackTrace();
		}
		
		// Invoke a Script Procedure
		/*
		try {
			stream = JSR223ScriptManagerTest.class.getResourceAsStream("HelloWorld.js");
			jsScriptEngine.eval(new InputStreamReader(stream));
			Invocable invocableEngine = (Invocable) jsScriptEngine;
			invocableEngine.invokeFunction("sayCiao");
			invocableEngine.invokeFunction("sayCiao", "Andrea");
		} catch (ScriptException ex) {
		    ex.printStackTrace();
		}
		*/

		// Script code can both access and modify native Java objects
		List<String> list = new ArrayList<String>();
		list.add("Angelo");
		list.add("Davide");
		list.add("Anna");
		list.add("Pippo");
		System.out.println("\nOriginal list ...");
		for (String name: list) {
		    System.out.println(name);
		}  
		/*
		jsScriptEngine.put("list", list);
		
		try {
			stream = JSR223ScriptManagerTest.class.getResourceAsStream("FilterList.js");
			jsScriptEngine.eval(new InputStreamReader(stream));
		} catch (ScriptException ex) {
		      ex.printStackTrace();
		}
		System.out.println("\nFiltered list ...");
		for (String name: list) {
		    System.out.println(name);
		}  
		*/
		
		// Implementing Java Interfaces by Scripts
		/*
		try {
			stream = JSR223ScriptManagerTest.class.getResourceAsStream("TestInterfaceImpl.js");
			jsScriptEngine.eval(new InputStreamReader(stream));
			Invocable invocableEngine = (Invocable) jsScriptEngine;
			ITestInterface testInterfaceImpl = (ITestInterface)invocableEngine.getInterface(ITestInterface.class);
			System.out.println(testInterfaceImpl.getMessage());

		} catch (ScriptException ex) {
		    ex.printStackTrace();
		}
		*/
		
		
		try {
			stream = JSR223ScriptManagerTest.class.getResourceAsStream("TestInterfaceImpl.groovy");
			Object o = groovyScriptEngine.eval(new InputStreamReader(stream));
			System.out.println(o.getClass().getName());
		} catch (ScriptException ex) {
		    ex.printStackTrace();
		}
		
		

		 
	}
}
