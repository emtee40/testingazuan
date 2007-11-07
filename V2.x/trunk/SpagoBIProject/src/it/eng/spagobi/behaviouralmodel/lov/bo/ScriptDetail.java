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
package it.eng.spagobi.behaviouralmodel.lov.bo;

import groovy.lang.Binding;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dbaccess.sql.DataRow;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.behaviouralmodel.lov.handlers.ScriptManager;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.commons.utilities.SpagoBITracer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * Defines the <code>ScriptDetail</code> objects. This object is used to store 
 * Script Wizard detail information.
 */
public class ScriptDetail  implements ILovDetail  {
	
	/**
	 * the script
	 */
	private String script = "";
	private List visibleColumnNames = null;
	private String valueColumnName = "";
	private String descriptionColumnName = "";
	private List invisibleColumnNames = null;

	/**
	 * constructor
	 */
	public ScriptDetail() {}
	
	/**
	 * constructor
	 * @param dataDefinition xml representation of the script lov
	 * @throws SourceBeanException
	 */
	public ScriptDetail(String dataDefinition) throws SourceBeanException {
		loadFromXML (dataDefinition);
	}
	
	
	/** loads the lov from an xml string 
	 * @param dataDefinition the xml definition of the lov
	 * @throws SourceBeanException 
	 */
	public void loadFromXML (String dataDefinition) throws SourceBeanException {
		dataDefinition.trim();
		// build the sourcebean
		if(dataDefinition.indexOf("<SCRIPT>")!=-1) {
			int startInd = dataDefinition.indexOf("<SCRIPT>");
			int endId = dataDefinition.indexOf("</SCRIPT>");
			String script = dataDefinition.substring(startInd + 8, endId);
			script =script.trim();
			if(!script.startsWith("<![CDATA[")) {
				script = "<![CDATA[" + script  +  "]]>";
				dataDefinition = dataDefinition.substring(0, startInd+8) + script + dataDefinition.substring(endId); 
			}
		}
		SourceBean source = SourceBean.fromXMLString(dataDefinition);
		// get and set the script text
		SourceBean scriptSB = (SourceBean)source.getAttribute("SCRIPT");
		String script = scriptSB.getCharacters(); 
        setScript(script);
        // get and set value column
	    String valueColumn = "";
	    SourceBean valCol = (SourceBean)source.getAttribute("VALUE-COLUMN");
		if(valCol!=null)
			valueColumn = valCol.getCharacters();
		setValueColumnName(valueColumn);
		 // get and set the description column
	    String descrColumn = "";
	    SourceBean descColSB = (SourceBean)source.getAttribute("DESCRIPTION-COLUMN");
		if(descColSB!=null)
			descrColumn = descColSB.getCharacters();
		setDescriptionColumnName(descrColumn);
		// get and set list of visible columns
		List visColNames = new ArrayList();
		SourceBean visColSB = (SourceBean)source.getAttribute("VISIBLE-COLUMNS");
		if(visColSB!=null){
			String visColConc = visColSB.getCharacters();
			if( (visColConc!=null) && !visColConc.trim().equalsIgnoreCase("") ) {
				String[] visColArr = visColConc.split(",");
				visColNames = Arrays.asList(visColArr);
			}
		}
		setVisibleColumnNames(visColNames);
		// get and set list of invisible columns
		List invisColNames = new ArrayList();
		SourceBean invisColSB = (SourceBean)source.getAttribute("INVISIBLE-COLUMNS");
		if(invisColSB!=null){
			String invisColConc = invisColSB.getCharacters();
			if( (invisColConc!=null) && !invisColConc.trim().equalsIgnoreCase("") ) {
				String[] invisColArr = invisColConc.split(",");
				invisColNames = Arrays.asList(invisColArr);
			}
		}
		setInvisibleColumnNames(invisColNames);
	}
	
	
	
	/**
	 * serialize the lov to an xml string
	 * @return the serialized xml string
	 */
	public String toXML () { 
		String XML = "<SCRIPTLOV>" +
				     "<SCRIPT>"+this.getScript()+"</SCRIPT>" +	
				     "<VALUE-COLUMN>"+this.getValueColumnName()+"</VALUE-COLUMN>" +
				     "<DESCRIPTION-COLUMN>"+this.getDescriptionColumnName()+"</DESCRIPTION-COLUMN>" +
				     "<VISIBLE-COLUMNS>"+GeneralUtilities.fromListToString(this.getVisibleColumnNames(), ",")+"</VISIBLE-COLUMNS>" +
				     "<INVISIBLE-COLUMNS>"+GeneralUtilities.fromListToString(this.getInvisibleColumnNames(), ",")+"</INVISIBLE-COLUMNS>" +
				     "</SCRIPTLOV>";
		return XML;
	}
	
	
	/**
	 * Returns the result of the lov using a user profile to fill the lov profile attribute
	 * @param profile the profile of the user
	 * @return the string result of the lov
	 * @throws Exception
	 */
	public String getLovResult(IEngUserProfile profile) throws Exception {
		String result = null;
		HashMap attributes = GeneralUtilities.getAllProfileAttributes(profile);
		Binding bind = ScriptManager.fillBinding(attributes);
		result = ScriptManager.runScript(getScript(), bind);
		// check if the result must be converted into the right xml sintax
		boolean toconvert = checkSintax(result);
		if(toconvert) { 
			result = convertResult(result);
		}
		return result;
	}
	
	/**
	 * checks if the result is formatted in the right xml structure
	 * @param result the result of the lov
	 * @return true if the result is formatted correctly false otherwise
	 */
	private boolean checkSintax(String result) {
		boolean toconvert = false;
		try{
			SourceBean source = SourceBean.fromXMLString(result);
			if(!source.getName().equalsIgnoreCase("ROWS")) {
				toconvert = true;
			} else {
				List rowsList = source.getAttributeAsList(DataRow.ROW_TAG);
				if( (rowsList==null) || (rowsList.size()==0) ) {
					toconvert = true;
				} else {
					// TODO this part can be moved to the import transformer
					// RESOLVES RETROCOMPATIBILITY PROBLEMS
					// finds the name of the first attribute of the rows if exists 
					String defaultName = "";
					SourceBean rowSB = (SourceBean) rowsList.get(0);
					List attributes = rowSB.getContainedAttributes();
					if (attributes != null && attributes.size() > 0) {
						SourceBeanAttribute attribute = (SourceBeanAttribute) attributes.get(0);
						defaultName = attribute.getKey();
					}
					// if a value column is specified, it is considered
					SourceBean valueColumnSB = (SourceBean) source.getAttribute("VALUE-COLUMN");
					if (valueColumnSB != null) {
						String valueColumn = valueColumnSB.getCharacters();
						if (valueColumn != null) {
							valueColumnName = valueColumn;
						}
					} else {
						valueColumnName = defaultName;
					}
					SourceBean visibleColumnsSB = (SourceBean) source.getAttribute("VISIBLE-COLUMNS");
					if (visibleColumnsSB != null) {
						String allcolumns = visibleColumnsSB.getCharacters();
						if (allcolumns != null) {
							String[] columns = allcolumns.split(",");
							visibleColumnNames = Arrays.asList(columns);
						}
					} else {
						String[] columns = new String[] {defaultName};
						visibleColumnNames = Arrays.asList(columns);
					}
					SourceBean descriptionColumnSB = (SourceBean) source.getAttribute("DESCRIPTION-COLUMN");
					if (descriptionColumnSB != null) {
						String descriptionColumn = descriptionColumnSB.getCharacters();
						if (descriptionColumn != null) {
							descriptionColumnName = descriptionColumn;
						}
					} else {
						descriptionColumnName = defaultName;
					}
				}
			}
			
		} catch (Exception e) {
			SpagoBITracer.warning(SpagoBIConstants.NAME_MODULE, this.getClass().getName(), 
					              "checkSintax", "the result of the lov is not formatted " +
					              "with the right structure so it will be wrapped inside an xml envelope");
			toconvert = true;
		}
		return toconvert;
	}
	
	/**
	 * Gets the list of names of the profile attributes required
	 * @return list of profile attribute names
	 * @throws Exception 
	 */
	public List getProfileAttributeNames() throws Exception {
		List names = new ArrayList();
		String script = getScript();
		while(script.indexOf("getSingleValueProfileAttribute(")!=-1) {
			int startind = script.indexOf("getSingleValueProfileAttribute(");
			int endind = startind + 31;
			int parind = script.indexOf(")", endind);
			String name = script.substring(endind, parind);
			script = script.substring(0, startind) + script.substring(parind+1);
			names.add(name);
		}
		while(script.indexOf("getMultiValueProfileAttribute(")!=-1) {
			int startind = script.indexOf("getMultiValueProfileAttribute(");
			int endind = startind + 30;
			int comaind = script.indexOf(",", endind);
			String name = script.substring(endind, comaind);
			script = script.substring(0, startind) + script.substring(comaind+1);
			names.add(name);
		}
		return names;
	}
	
	/**
	 * Checks if the lov requires one or more profile attributes
	 * @return true if the lov require one or more profile attributes, false otherwise
	 * @throws Exception
	 */
	public boolean requireProfileAttributes() throws Exception {
		boolean contains = false;
		String script = getScript();
		if(script.indexOf("getSingleValueProfileAttribute(")!=-1){
			contains = true;
		}
		if(script.indexOf("getMultiValueProfileAttribute(")!=-1){
			contains = true;
		}
		return contains;
	}	
	
	
	/**
	 * In case the result of the string is not structured as expected  
	 * wrap the result into the right xml envelope
	 * @param result the result of the script
	 * @return
	 */
	private String convertResult(String result) {
		StringBuffer sb = new StringBuffer();
		sb.append("<ROWS>");
		sb.append("<ROW VALUE=\"" + result +"\"/>");
		sb.append("</ROWS>");
		descriptionColumnName = "VALUE";
		valueColumnName = "VALUE";
		String [] visibleColumnNamesArray = new String [] {"VALUE"};
		visibleColumnNames = Arrays.asList(visibleColumnNamesArray);
		return sb.toString();
	}
	
	
	/**
	 * Get the string of the script
	 * @return The string of the script 
	 */
	public String getScript() {
		return script;
	}
	
	/**
	 * Set the string of the script
	 * @param script the string of the script
	 */
	public void setScript(String script) {
		this.script = script;
	}
	
	/**
	 * Splits an XML string by using some <code>SourceBean</code> object methods
	 * in order to obtain the source <code>ScriptDetail</code> objects whom XML has been 
	 * built. 
	 * 
	 * @param dataDefinition	The XML input String
	 * @return The corrispondent <code>ScriptDetail</code> object
	 * @throws SourceBeanException If a SourceBean Exception occurred
	 */
	public static ScriptDetail fromXML (String dataDefinition) throws SourceBeanException {
		ScriptDetail scriptDet = new ScriptDetail(dataDefinition);
        return scriptDet;
	}
	
	
	
	public String getDescriptionColumnName() {
		return descriptionColumnName;
	}

	public void setDescriptionColumnName(String descriptionColumnName) {
		this.descriptionColumnName = descriptionColumnName;
	}

	public List getInvisibleColumnNames() {
		return invisibleColumnNames;
	}

	public void setInvisibleColumnNames(List invisibleColumnNames) {
		this.invisibleColumnNames = invisibleColumnNames;
	}

	public String getValueColumnName() {
		return valueColumnName;
	}

	public void setValueColumnName(String valueColumnName) {
		this.valueColumnName = valueColumnName;
	}

	public List getVisibleColumnNames() {
		return visibleColumnNames;
	}

	public void setVisibleColumnNames(List visibleColumnNames) {
		this.visibleColumnNames = visibleColumnNames;
	}

	
}