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
import groovy.lang.Binding;
import groovy.util.GroovyScriptEngine;

import java.util.HashMap;
import java.util.Map;

import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;
import net.sf.jasperreports.engine.fill.JRFillField;
import net.sf.jasperreports.engine.fill.JRFillParameter;



// TODO: Auto-generated Javadoc
/**
 * The Class Scriptlet.
 * 
 * @author Teodor Danciu (teodord@users.sourceforge.net)
 * @version $Id: Scriptlet.java,v 1.11 2006/04/19 10:26:14 teodord Exp $
 */
public class Scriptlet extends JRDefaultScriptlet
{

	
	/** The gs engine. */
	public GroovyScriptEngine gsEngine = null;
	
	/** The binding. */
	public Binding binding = null;
	
	/** The qbe jasper report fld map. */
	public Map qbeJasperReportFldMap = null;

	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#beforeReportInit()
	 */
	public void beforeReportInit() throws JRScriptletException
	{
		// The format of QBE_JR_MAPPING_STRING IS IN TERM OF
		// qbeFldName->JRFieldName;qbeFldName->JRFieldName;qbeFldName->JRFieldName;
		
		JRFillParameter o = (JRFillParameter)this.parametersMap.get("QBE_JR_MAPPING");
		String qbeJasperReportFldMappingString = (String)o.getValue();
		this.qbeJasperReportFldMap = new HashMap();
		String[] splitMappings = qbeJasperReportFldMappingString.split(";");
		String singleQbeJrMapping = null;
		String[] singleQbeJrMappingSplit = null;
		
		String qbeCompleteFldName = null;
		String jrFldName = null;
		
		for (int i=0; i < splitMappings.length; i++){
			singleQbeJrMapping = splitMappings[i];
			singleQbeJrMappingSplit = singleQbeJrMapping.split("->");
			qbeCompleteFldName = singleQbeJrMappingSplit[0];
			jrFldName = singleQbeJrMappingSplit[1];
			this.qbeJasperReportFldMap.put(qbeCompleteFldName, jrFldName);
		}
		
		this.gsEngine = GroovyEngine.getGroovyEngine().getGroovyScriptEngine();
		this.binding = new Binding();
		this.binding.setVariable("qbe_mode", "export");
	
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#afterReportInit()
	 */
	public void afterReportInit() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#beforePageInit()
	 */
	public void beforePageInit() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#afterPageInit()
	 */
	public void afterPageInit() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#beforeColumnInit()
	 */
	public void beforeColumnInit() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#afterColumnInit()
	 */
	public void afterColumnInit() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#beforeGroupInit(java.lang.String)
	 */
	public void beforeGroupInit(String groupName) throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#afterGroupInit(java.lang.String)
	 */
	public void afterGroupInit(String groupName) throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#beforeDetailEval()
	 */
	public void beforeDetailEval() throws JRScriptletException
	{
		
	}


	/* (non-Javadoc)
	 * @see net.sf.jasperreports.engine.JRDefaultScriptlet#afterDetailEval()
	 */
	public void afterDetailEval() throws JRScriptletException
	{
	}

	/**
	 * Execute groovy script.
	 * 
	 * @param groovyScriptName the groovy script name
	 * @param entityName the entity name
	 * @param classNameInQuery the class name in query
	 * @param fldCompleteNameInQuery the fld complete name in query
	 * @param mappings the mappings
	 * 
	 * @return the string
	 */
	public String executeGroovyScript(String groovyScriptName,String entityName, String classNameInQuery, String fldCompleteNameInQuery,  String mappings){
		try{
			String result = "";
			System.out.println("--> Called execute GroovyScript ["+groovyScriptName+"]["+mappings+"] ["+entityName+"]" );
			String[] mappingArray = mappings.split(",");
			
			for ( int i =0; i < mappingArray.length; i++){
				
				String[] splitMapping = mappingArray[i].split("->");
				
				String fieldId = splitMapping[0];
				
				String groovyInputId = splitMapping[1];
				
				String prefix = null;
				if  ((fldCompleteNameInQuery != null) && 
					(fldCompleteNameInQuery.indexOf(".") > 0)){
					prefix = fldCompleteNameInQuery.substring(0, fldCompleteNameInQuery.lastIndexOf("."));
				}
				
				String completeRequiredFieldId = fieldId; 
				
				if (classNameInQuery.equalsIgnoreCase(entityName)){
					
				}else{
					if (prefix != null){
						completeRequiredFieldId = prefix + "." + completeRequiredFieldId;
					}
					
				}
				
				
				
				String resultingJRFField = (String)this.qbeJasperReportFldMap.get(classNameInQuery + "."+ completeRequiredFieldId);
				JRFillField fillFld = (JRFillField)this.fieldsMap.get(resultingJRFField);
				
				if (fillFld == null)
					return "N.C.";
				binding.setVariable(groovyInputId,fillFld.getValue());
				
			}
			
			Object o = this.gsEngine.run(groovyScriptName, this.binding);
			if (o != null){
				result = o.toString();
			}
			return result;	
		}catch (Throwable e) {
			e.printStackTrace();
			return  "N.C.";
		}
		
		
	}

	


}
