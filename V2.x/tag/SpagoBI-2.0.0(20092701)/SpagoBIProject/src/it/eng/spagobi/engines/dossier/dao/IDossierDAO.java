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
package it.eng.spagobi.engines.dossier.dao;

import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.engines.dossier.bo.ConfiguredBIDocument;

import java.io.InputStream;
import java.util.List;

/**
 * Defines all the methods needed for access contents of dossier template.<br>
 * Dossier template is a zip file containing the presentation template (.ppt), <br>
 * the process definition file (.xml file) and dossier configuration file (.sbidossier file).<br>
 * The first operation you must perform is to unzipped the template using the <code>init</code> method: <br>
 * this method returns the path of the temporary folder where template was unzipped:<br>
 * this path is built as <b>BASE_TEMP_FOLDER + DOSSIER_ID + UUID</b> where:<br>
 * BASE_TEMP_FOLDER is the temporary base folder configured in <b>dossier.xml</b>;<br>
 * DOSSIER_ID is the document id;<br>
 * UUID is a time based random string.<br>
 * You have to keep this path in order to invoke other methods (those methods work on this folder).
 * The <code>storeTemplate</code> method builds the new zip template file and saves it into the database.
 * Then you can invoke <code>clean</code> method in order to delete temporary folder.
 * 
 * @author Zerbetto (davide.zerbetto@eng.it) 
 */
public interface IDossierDAO {

	/**
	 * Inits the.
	 * 
	 * @param dossier the dossier
	 * 
	 * @return the string
	 */
	public String init(BIObject dossier);
	
	/**
	 * Clean.
	 * 
	 * @param pathTempFolder the path temp folder
	 */
	public void clean(String pathTempFolder);
	
	/**
	 * Store template.
	 * 
	 * @param dossierId the dossier id
	 * @param pathTempFolder the path temp folder
	 */
	public void storeTemplate(Integer dossierId, String pathTempFolder);
	
	/**
	 * Gets the dossier id.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the dossier id
	 */
	public Integer getDossierId(String pathTempFolder);
	
	/**
	 * Gets the configured document list.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the configured document list
	 */
	public List getConfiguredDocumentList(String pathTempFolder);
	
	/**
	 * Adds the configured document.
	 * 
	 * @param doc the doc
	 * @param pathTempFolder the path temp folder
	 */
	public void addConfiguredDocument(ConfiguredBIDocument doc, String pathTempFolder);
	
	/**
	 * Delete configured document.
	 * 
	 * @param docLogicalName the doc logical name
	 * @param pathTempFolder the path temp folder
	 */
	public void deleteConfiguredDocument(String docLogicalName, String pathTempFolder);
	
	/**
	 * Gets the configured document.
	 * 
	 * @param docLogicalName the doc logical name
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the configured document
	 */
	public ConfiguredBIDocument getConfiguredDocument(String docLogicalName, String pathTempFolder);
	
	/**
	 * Store presentation template file.
	 * 
	 * @param templateFileName the template file name
	 * @param templateContent the template content
	 * @param pathTempFolder the path temp folder
	 */
	public void storePresentationTemplateFile(String templateFileName, byte[] templateContent, String pathTempFolder);
	
	/**
	 * Gets the presentation template file name.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the presentation template file name
	 */
	public String getPresentationTemplateFileName(String pathTempFolder);
	
	/**
	 * Gets the presentation template content.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the presentation template content
	 */
	public InputStream getPresentationTemplateContent(String pathTempFolder);
	
	/**
	 * Store process definition file.
	 * 
	 * @param pdFileName the pd file name
	 * @param pdFileContent the pd file content
	 * @param pathTempFolder the path temp folder
	 */
	public void storeProcessDefinitionFile(String pdFileName, byte[] pdFileContent, String pathTempFolder);
	
	/**
	 * Gets the process definition file name.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the process definition file name
	 */
	public String getProcessDefinitionFileName(String pathTempFolder); 
	
	/**
	 * Gets the process definition content.
	 * 
	 * @param pathTempFolder the path temp folder
	 * 
	 * @return the process definition content
	 */
	public InputStream getProcessDefinitionContent(String pathTempFolder);

}