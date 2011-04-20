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
package it.eng.spagobi.studio.core.util;

import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.RGB;

public class SpagoBIStudioConstants {


	// TYPES FOR SPAGOBI STUDIO
	public final static String DASHBOARD_ENGINE_EXTENSION="sbidash";
	public final static String CHART_ENGINE_EXTENSION="sbichart";
	public final static String JASPER_REPORT_ENGINE_EXTENSION="jrxml";
	public final static String BIRT_REPORT_ENGINE_EXTENSION="rptdesign";
	public final static String DOCUMENT_COMPOSITION_ENGINE_EXTENSION="sbidoccomp";
	public final static String GEO_ENGINE_EXTENSION="sbigeo";

	public final static String SERVER_EXTENSION="sbiserver";

	
	
	// Engine Labels
	public final static String DASHBOARD_ENGINE_LABEL="DashboardInternalEng";
	public final static String CHART_ENGINE_LABEL="ChartEngine";
	public final static String JASPER_REPORT_ENGINE_LABEL="JasperReportEngine";
	public final static String BIRT_REPORT_ENGINE_LABEL="BirtEngine";
	public final static String OLAP_ENGINE_LABEL="JPivotEngine";
	public final static String ETL_ENGINE_LABEL="TalendEngine";
	public final static String DOSSIER_ENGINE_LABEL="Dossier";
	public final static String DATA_MINING_ENGINE_LABEL="WekaEngine";
	public final static String QBE_ENGINE_LABEL="QbeEngine";
	public final static String OFFICE_DOCUMENT_ENGINE_LABEL="OfficeInternalEng";
	public final static String GEO_ENGINE_LABEL="GeoEngine";
	public final static String DOCUMENT_COMPOSITION_ENGINE_LABEL="DocumentCompositionInternalEng";
	
	public final static int BIOBJECT_LABEL_LIMIT=30;
	public final static int BIOBJECT_NAME_LIMIT=40;
	public final static int BIOBJECT_DESCRIPTION_LIMIT=160;
	
	// Name of prohect folders
	public static final String FOLDER_RESOURCE= "Resources";
	public static final String FOLDER_SERVER = "Server";
	public static final String FOLDER_DATA_SOURCE = "Data Source";
	public static final String FOLDER_METADATA_MODEL = "Metadata Model";
	public static final String FOLDER_DATASET = "DataSet";
	public static final String FOLDER_ANALYSIS = "Sbi Analysis";	
	public static final String FOLDER_PRIVATE_DOCUMENTS = "Private Documents";
	
	// name of project folder icons 
	public static final String FOLDER_ICON_RESOURCE= "resources.png";
	public static final String FOLDER_ICON_SERVER = "server.png";
	public static final String FOLDER_ICON_SERVER_BIG = "server_big.png";
	public static final String FOLDER_ICON_SERVER_ACTIVE = "server_active.png";
	public static final String FOLDER_ICON_SERVER_INACTIVE = "server_inactive.png";
	public static final String FOLDER_ICON_DATA_SOURCE = "datasource.png";
	public static final String FOLDER_ICON_METADATA_MODEL = "metadata.png";
	public static final String FOLDER_ICON_DATASET = "dataset.png";
	public static final String FOLDER_ICON_ANALYSIS = "analysis.png";	
	public static final String FOLDER_ICON_PRIVATE_DOCUMENTS = "private.png";
	public static final String FOLDER_ICON_SBI_PROJECT = "sbiproject.gif";
	
// 	Component ID
	public static final String SERVER_EDITOR_ID = "it.eng.spagobi.studio.core.editors.ServerEditor";
	public static final String RESOURCE_NAVIGATOR_ID = "it.eng.spagobi.studio.core.views.ResourceNavigator";

	// IMAGE
	public static final	ImageDescriptor datasourceDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_DATA_SOURCE);
	public static final ImageDescriptor dataseDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_DATASET);
	public static final ImageDescriptor analysisDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_ANALYSIS);
	public static final	ImageDescriptor metadataDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_METADATA_MODEL);
	public static final	ImageDescriptor privateDocumentsDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_PRIVATE_DOCUMENTS);
	public static final ImageDescriptor resourceDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_RESOURCE);
	public static final	ImageDescriptor serverDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_SERVER);
	public static final	ImageDescriptor serverBigDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_SERVER_BIG);
	public static final	ImageDescriptor serverActiveDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_SERVER_ACTIVE);
	public static final ImageDescriptor serverInactiveDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_SERVER_INACTIVE);
	public static final ImageDescriptor sbiProjectDescriptor=ImageDescriptorGatherer.getImageDesc(SpagoBIStudioConstants.FOLDER_ICON_SBI_PROJECT);

	// COlors
	public final static RGB RED = new RGB(255, 0, 0);
	public final static RGB GREEN = new RGB(10, 255, 30);
	public final static RGB BLUE = new RGB(10, 30, 255);

	
	// Metadata Qualified names
	public static QualifiedName DOCUMENT_ID = new QualifiedName("it.eng.spagobi.sdk.document.id", "Identifier");
	public static QualifiedName DOCUMENT_LABEL = new QualifiedName("it.eng.spagobi.sdk.document.label", "Label");
	public static QualifiedName DOCUMENT_NAME = new QualifiedName("it.eng.spagobi.sdk.document.name", "Name");
	public static QualifiedName DOCUMENT_DESCRIPTION = new QualifiedName("it.eng.spagobi.sdk.document.description", "Description");
	public static QualifiedName DOCUMENT_TYPE = new QualifiedName("it.eng.spagobi.sdk.document.type", "Type");
	public static QualifiedName DOCUMENT_STATE = new QualifiedName("it.eng.spagobi.sdk.document.description", "State");
	public static QualifiedName DOCUMENT_PARAMETERS_XML = new QualifiedName("it.eng.spagobi.sdk.document.parametersxml", "Parameters");

	public static QualifiedName DATASET_ID = new QualifiedName("it.eng.spagobi.sdk.dataset.id", "Identifier");
	public static QualifiedName DATASET_LABEL = new QualifiedName("it.eng.spagobi.sdk.dataset.label", "Label");
	public static QualifiedName DATASET_NAME = new QualifiedName("it.eng.spagobi.sdk.dataset.name", "Name");
	public static QualifiedName DATASET_DESCRIPTION = new QualifiedName("it.eng.spagobi.sdk.dataset.description", "Description");

	public static QualifiedName DATA_SOURCE_ID = new QualifiedName("it.eng.spagobi.sdk.datasource.id", "Identifier");
	public static QualifiedName DATA_SOURCE_NAME = new QualifiedName("it.eng.spagobi.sdk.datasource.name", "Name");
	public static QualifiedName DATA_SOURCE_LABEL = new QualifiedName("it.eng.spagobi.sdk.datasource.label", "Label");
	public static QualifiedName DATA_SOURCE_DESCRIPTION = new QualifiedName("it.eng.spagobi.sdk.datasource.description", "Description");

	public static QualifiedName ENGINE_ID = new QualifiedName("it.eng.spagobi.sdk.engine.id", "Identifier");
	public static QualifiedName ENGINE_LABEL = new QualifiedName("it.eng.spagobi.sdk.engine.label", "Label");
	public static QualifiedName ENGINE_NAME = new QualifiedName("it.eng.spagobi.sdk.engine.name", "Name");
	public static QualifiedName ENGINE_DESCRIPTION = new QualifiedName("it.eng.spagobi.sdk.engine.description", "Description");

	public static QualifiedName LAST_REFRESH_DATE = new QualifiedName("last_refresh_date", "Last Refresh Date");
	public static QualifiedName MADE_WITH_STUDIO = new QualifiedName("made_with_studio", "Created With SpagoBi Studio");

	public static QualifiedName SERVER = new QualifiedName("server", "Server");
	
	
}
