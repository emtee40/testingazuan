/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.core.services.server;

import it.eng.spagobi.server.services.api.bo.IDataSet;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.utils.bo.DataSource;
import it.eng.spagobi.studio.utils.bo.Dataset;
import it.eng.spagobi.studio.utils.bo.Document;
import it.eng.spagobi.studio.utils.bo.DocumentParameter;
import it.eng.spagobi.studio.utils.bo.Engine;
import it.eng.spagobi.studio.utils.bo.xmlMapping.XmlParametersMapping;
import it.eng.spagobi.studio.utils.exceptions.NoActiveServerException;
import it.eng.spagobi.studio.utils.exceptions.NoDocumentException;
import it.eng.spagobi.studio.utils.services.SpagoBIServerObjectsFactory;
import it.eng.spagobi.studio.utils.util.BiObjectUtilities;
import it.eng.spagobi.studio.utils.util.SpagoBIStudioConstants;

import java.util.Date;

import org.eclipse.core.resources.IFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MetadataHandler {


	private static Logger logger = LoggerFactory.getLogger(MetadataHandler.class);



	/**
	 *  refresh metadata of the given file 
	 * @param file
	 * @param noDocumentException: this is passed for use insieed a monitor
	 * @throws Exception
	 */

	public void refreshMetadata(IFile file, NoDocumentException noDocumentException, NoActiveServerException noActiveServerException) throws Exception{
		logger.debug("IN");
		String documentId=null;
		String documentLabel = null;
		String projectname = file.getProject().getName();
		// Recover document
		Document document=null;

		SpagoBIServerObjectsFactory proxyServerObjects = null;
		try{	
			proxyServerObjects = new SpagoBIServerObjectsFactory(projectname);
		}
		catch (NoActiveServerException e) {
			noActiveServerException.setNoServer(true);
			return;
		}

		try{
//			documentId=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_ID);

			documentLabel =file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_LABEL);
			document=proxyServerObjects.getServerDocuments().getDocumentByLabel(documentLabel);
		}
		catch (Exception e) {
			logger.error("Could not recover document Id",e);		
			throw e;	
		}

		if(document==null){
			noDocumentException.setNoDocument(true);
			return;
		}

		// Recover DataSource

		Integer dataSourceId=document.getDataSourceId();
		DataSource dataSource=null;
		if(dataSourceId!=null){
			try{
				dataSource=proxyServerObjects.getServerDataSources().getDataSource(Integer.valueOf(dataSourceId));
			}
			catch (Exception e) {
				SpagoBILogger.warningLog("Could not recover data source",e);		
			}
		}


		// Recover DataSet

		Integer dataSetId=document.getDataSetId();
		IDataSet dataSet=null;
		if(dataSetId!=null){
			try{

				dataSet=proxyServerObjects.getServerDatasets().getDataSet(Integer.valueOf(dataSetId));
			}
			catch (Exception e) {
				SpagoBILogger.warningLog("Could not recover data set",e);		
			}
		}


		// Recover Engine

		Integer engineId=document.getEngineId();
		Engine engine=null;
		if(engineId!=null){
			try{
				engine=proxyServerObjects.getServerEngines().getEngine(Integer.valueOf(engineId));
			}
			catch (Exception e) {
				SpagoBILogger.warningLog("Could not recover engine",e);		
			}
		}

		String[] roles=null;
		try{
			roles=proxyServerObjects.getServerDocuments().getCorrectRolesForExecution(document.getId());
		}
		catch (Exception e) {
			logger.error("No comunication with SpagoBI server, could not retrieve roles for execution", e);
		}			
		if(roles==null || roles.length==0){
			logger.error("No roles for execution found");
		}


		DocumentParameter[] parameters=null;
		try{
			parameters=proxyServerObjects.getServerDocuments().getDocumentParameters(document.getId(), roles[0]);
		}
		catch (Exception e) {
			logger.error("No comunication with SpagoBI server, could not retrieve document parameters", e);
		}			

		// firstly I have to call delete on all metadata in order to refresh!
		BiObjectUtilities.erasePersistentProperties(file);

		// Reload Documents Metadata
		if(document!=null){
			try{
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_ID, document.getId().toString());
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_LABEL, document.getLabel());
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_NAME, document.getName()!=null ? document.getName() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_DESCRIPTION, document.getDescription()!=null ? document.getDescription() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_TYPE, document.getType()!=null ? document.getType() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DOCUMENT_STATE, document.getState()!=null ? document.getState() : "");
			}
			catch (Exception e) {
				logger.error("Error while refreshing meta data",e);		
			}
		}
		// Reload Engine Metadata
		if(engine!=null){
			try{
				file.setPersistentProperty(SpagoBIStudioConstants.ENGINE_ID, engine.getId().toString());
				file.setPersistentProperty(SpagoBIStudioConstants.ENGINE_LABEL, engine.getLabel());
				file.setPersistentProperty(SpagoBIStudioConstants.ENGINE_NAME, engine.getName()!=null ? engine.getName() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.ENGINE_DESCRIPTION, engine.getDescription()!=null ? engine.getDescription() : "");
			}
			catch (Exception e) {
				logger.error("Error while refreshing engine meta data",e);		
			}
		}

		// Reload dataSet Metadata
		if(dataSet!=null){
			try{
				file.setPersistentProperty(SpagoBIStudioConstants.DATASET_ID, dataSet.getId().toString());
				file.setPersistentProperty(SpagoBIStudioConstants.DATASET_LABEL, dataSet.getLabel());
				file.setPersistentProperty(SpagoBIStudioConstants.DATASET_NAME, dataSet.getName()!=null ? dataSet.getName() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DATASET_DESCRIPTION, dataSet.getDescription()!=null ? dataSet.getDescription() : "");
			}
			catch (Exception e) {
				logger.error("Error while refreshing dataset meta data",e);		
			}
		}
		// Reload dataSource Metadata
		if(dataSource!=null){
			try{
				file.setPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_ID, dataSource.getId().toString());
				file.setPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_LABEL, dataSource.getLabel()!=null ? dataSource.getLabel() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_NAME, dataSource.getName()!=null ? dataSource.getName() : "");
				file.setPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_DESCRIPTION, dataSource.getDescr()!=null ? dataSource.getDescr() : "");
			}
			catch (Exception e) {
				logger.error("Error while refreshing dataSouce meta data",e);		
			}
		}

		try{
			XmlParametersMapping.setFileParametersMetaData(file, parameters);
		}
		catch (Exception e) {
			logger.error("Error in retrieving parameters metadata", e);
		}


		try{
			Date dateCurrent=new Date();
			String currentStr=dateCurrent.toString();
			file.setPersistentProperty(SpagoBIStudioConstants.LAST_REFRESH_DATE, currentStr);
		}
		catch (Exception e) {
			logger.error("Error while refreshing update date",e);		
		}
		logger.debug("OUT");
	}






}
