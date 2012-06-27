/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.metadata;

import it.eng.spagobi.studio.utils.bo.DocumentParameter;
import it.eng.spagobi.studio.utils.bo.DocumentParameters;
import it.eng.spagobi.studio.utils.bo.xmlMapping.XmlParametersMapping;
import it.eng.spagobi.studio.utils.util.SpagoBIStudioConstants;

import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;
import com.thoughtworks.xstream.io.xml.XmlFriendlyReplacer;

public class MetadataDocument {

	private String idMetadataDocument;
	private Integer id;
	private String name;
	private String label;
	private String description;
	private String type;
	private String engineId;
	private String dataSetId;
	private String dataSourceId;
	private String engineLabel;
	private String engine;
	private String dataSet;
	private String dataSource;
	private String templateName;
	private String state;
	private Vector<MetadataParameter> metadataParameters;

	private String localFileName;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	public String getDataSet() {
		return dataSet;
	}
	public void setDataSet(String dataSet) {
		this.dataSet = dataSet;
	}
	public String getDataSource() {
		return dataSource;
	}
	public void setDataSource(String dataSource) {
		this.dataSource = dataSource;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Vector<MetadataParameter> getMetadataParameters() {
		return metadataParameters;
	}
	public void setMetadataParameters(Vector<MetadataParameter> metadataParameters) {
		this.metadataParameters = metadataParameters;
	}

	public void buildMetadataParameters(DocumentParameters parametersMetadata) {
		List<DocumentParameter> list=parametersMetadata.getContent();
		Vector<MetadataParameter> vector=new Vector<MetadataParameter>();
		for (Iterator iterator = list.iterator(); iterator.hasNext();) {
			DocumentParameter metadataParameter = (DocumentParameter) iterator.next();
			MetadataParameter metaPar=new MetadataParameter(metadataParameter);
			vector.add(metaPar);
		}
		metadataParameters=vector;		
	}
	public String getLocalFileName() {
		return localFileName;
	}
	public void setLocalFileName(String localFileName) {
		this.localFileName = localFileName;
	}

//	public MetadataDocument() {
//	}

	
	
	/**
 *      COnstructor of MetadataDocument
 *      Initialize the object with all informations found in file; also by parsing xmlParametersString
 */

	public MetadataDocument(IFile file) throws CoreException {
		String documentId=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_ID);
		String documentName=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_NAME);
		String documentType=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_TYPE);
		String documentEngineId=file.getPersistentProperty(SpagoBIStudioConstants.ENGINE_ID);
		String documentEngineName=file.getPersistentProperty(SpagoBIStudioConstants.ENGINE_NAME);
		String documentEngineLabel = file.getPersistentProperty(SpagoBIStudioConstants.ENGINE_LABEL);
		String documentLabel=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_LABEL);
		String documentState=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_STATE);
		String documentDescription=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_DESCRIPTION);
		String documentDatasetId=file.getPersistentProperty(SpagoBIStudioConstants.DATASET_ID);
		String documentDatasourceId=file.getPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_ID);
		String documentDatasetName=file.getPersistentProperty(SpagoBIStudioConstants.DATASET_NAME);
		String documentDatasourceName=file.getPersistentProperty(SpagoBIStudioConstants.DATA_SOURCE_NAME);

		String xmlParameters=file.getPersistentProperty(SpagoBIStudioConstants.DOCUMENT_PARAMETERS_XML);

		setId(id!=null ? Integer.valueOf(id) : -1);
		setLabel(documentLabel);
		setDescription(documentDescription);
		setType(documentType);
		setName(documentName);
				
		setEngineId(documentEngineId);
		setDataSetId(documentDatasetId);
		setDataSourceId(documentDatasourceId);

		setEngine(documentEngineName);
		setDataSet(documentDatasetName);
		setDataSource(documentDatasourceName);
		
		setEngineLabel(documentEngineLabel);
		
		setState(documentState);
		setLocalFileName(file.getName());

		
		metadataParameters = new Vector<MetadataParameter>();
//		String idMetadataDocument=idContainer+"_"+documentLabel;
//		setIdMetadataDocument(idMetadataDocument);

		if(xmlParameters!=null && !xmlParameters.equalsIgnoreCase(""))
		{
//			XmlFriendlyReplacer replacer = new XmlFriendlyReplacer("grfthscv", "_");
//			XStream xstream = new XStream(new DomDriver("UTF-8", replacer)); 
//			xstream.alias("SDK_DOCUMENT_PARAMETERS", SDKDocumentParameters.class);
//			xstream.alias("PARAMETER", SDKDocumentParameter.class);
//			xstream.useAttributeFor(SDKDocumentParameter.class, "id");
//			xstream.useAttributeFor(SDKDocumentParameter.class, "label");
//			xstream.useAttributeFor(SDKDocumentParameter.class, "type");
//			xstream.useAttributeFor(SDKDocumentParameter.class, "urlName");
//			xstream.omitField(SDKDocumentParameter.class, "values");		
//			xstream.omitField(SDKDocumentParameter.class, "constraints");
//			xstream.omitField(SDKDocumentParameter.class, "__hashCodeCalc");
//			SDKDocumentParameters parametersMetaDataObject= (DocumentParameters)xstream.fromXML(xmlParameters);

			DocumentParameters parametersMetaDataObject = XmlParametersMapping.getDocumentParametersFromXML(xmlParameters);
			
			buildMetadataParameters(parametersMetaDataObject);
		}


	}
	public String getIdMetadataDocument() {
		return idMetadataDocument;
	}
	public void setIdMetadataDocument(String idMetadataDocument) {
		this.idMetadataDocument = idMetadataDocument;
	}
	public String getEngineId() {
		return engineId;
	}
	public void setEngineId(String engineId) {
		this.engineId = engineId;
	}
	public String getDataSetId() {
		return dataSetId;
	}
	public void setDataSetId(String dataSetId) {
		this.dataSetId = dataSetId;
	}
	public String getDataSourceId() {
		return dataSourceId;
	}
	public void setDataSourceId(String dataSourceId) {
		this.dataSourceId = dataSourceId;
	}
	public String getEngineLabel() {
		return engineLabel;
	}
	public void setEngineLabel(String engineLabel) {
		this.engineLabel = engineLabel;
	}







}
