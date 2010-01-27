/**
Copyright (c) 2005-2008, Engineering Ingegneria Informatica s.p.a.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of 
      conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list of 
      conditions and the following disclaimer in the documentation and/or other materials 
      provided with the distribution.

 * Neither the name of the Engineering Ingegneria Informatica s.p.a. nor the names of its contributors may
      be used to endorse or promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
 **/
package it.eng.spagobi.engines.commonj.runtime;


import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.engines.commonj.exception.CommonjEngineException;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.engines.SpagoBIEngineException;

public class CommonjWork {
	String workName;
	String className;
	String command;
	String command_environment;
	String[] parameters;

	static final String COMMAND="cmd";
	static final String COMMAND_ENVIRONMENT="cmd_env";


	public CommonjWork(SourceBean template) throws SpagoBIEngineException {
		this.load(template);
	}


	/**
	 * Instantiates a new work.
	 * 
	 * @param name the name
	 * @param className the className
	 */
	public CommonjWork(String name, String className) {
		this.workName = name;
		this.className= className;
	}		

	public void load(SourceBean template) throws it.eng.spagobi.engines.commonj.exception.TemplateParseException {
		SourceBean workSB;

		Assert.assertNotNull(template, "Input parameter [template] cannot be null");

		workSB = (SourceBean)template.getAttribute("WORK");
		Assert.assertNotNull(workSB, "template cannot be null");

		workName = (String)workSB.getAttribute("workName");
		if(workName == null) {
			throw new it.eng.spagobi.engines.commonj.exception.TemplateParseException(template, "Missing  name in document template");
		}


		className = (String)workSB.getAttribute("className");
		if(className == null) {
			throw new CommonjEngineException("Missing class specification in document template");
		}

		// check for parameters, in particular cmd and cmd_env
		SourceBean parametersSB=(SourceBean)workSB.getAttribute("PARAMETERS");
		List parameterList=parametersSB.getAttributeAsList("PARAMETER");

		Vector<String> parametersVect=new Vector<String>();
		for (Iterator iterator = parameterList.iterator(); iterator.hasNext();) {
			SourceBean parameter = (SourceBean) iterator.next();
			String name=(String)parameter.getAttribute("name");
			String value=(String)parameter.getAttribute("value");
			if(name.equalsIgnoreCase(COMMAND)){
				command=value;				
			}
			else
				if(name.equalsIgnoreCase(COMMAND_ENVIRONMENT)){
					command_environment=value;	
				}
				else{
					parametersVect.add(value);
				}
		}
		if(parametersVect.size()>0){
			parameters=new String[parametersVect.size()];
			int i=0;
			for (Iterator iterator = parametersVect.iterator(); iterator.hasNext();) {
				String string = (String) iterator.next();
				parameters[i]=string;
				i++;
			}
		}
	}



	/**
	 * Gets the name.
	 * 
	 * @return the name
	 */
	public String getWorkName() {
		return workName;
	}

	/**
	 * Sets the name.
	 * 
	 * @param name the new name
	 */
	public void setWorkName(String name) {
		this.workName = name;
	}



	public String getClassName() {
		return className;
	}


	public void setClassName(String className) {
		this.className = className;
	}



	public String getCommand() {
		return command;
	}


	public void setCommand(String command) {
		this.command = command;
	}


	public String getCommand_environment() {
		return command_environment;
	}


	public void setCommand_environment(String command_environment) {
		this.command_environment = command_environment;
	}


	/**
	 * To xml.
	 * 
	 * @return the string
	 */
	public String toXml() {
		StringBuffer buffer = new StringBuffer();
		buffer.append("<COMMONJ>");
		buffer.append("<WORK");
		if(workName != null && !workName.trim().equalsIgnoreCase("")) buffer.append(" workName=" + workName);
		if(className != null && !className.trim().equalsIgnoreCase("")) buffer.append(" className=" + className);
		buffer.append("/>");
		buffer.append("</COMMONJ>");

		return buffer.toString();
	}


	public String[] getParameters() {
		return parameters;
	}


	public void setParameters(String[] parameters) {
		this.parameters = parameters;
	}




}
