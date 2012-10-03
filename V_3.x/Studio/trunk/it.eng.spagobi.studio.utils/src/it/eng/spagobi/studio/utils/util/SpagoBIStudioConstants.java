/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.utils.util;

import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.swt.graphics.RGB;

public class SpagoBIStudioConstants {


	// TYPES FOR SPAGOBI STUDIO
	public final static String DASHBOARD_ENGINE_EXTENSION="sbidash";
	public final static String CHART_ENGINE_EXTENSION="sbichart";
	public final static String HIGHCHART_ENGINE_EXTENSION="sbihchart";
	public final static String EXT_ENGINE_EXTENSION="sbiextchart";
	public final static String JASPER_REPORT_ENGINE_EXTENSION="jrxml";
	public final static String CONSOLE_TEMPLATE_EXTENSION="console";
	public final static String BIRT_REPORT_ENGINE_EXTENSION="rptdesign";
	public final static String DOCUMENT_COMPOSITION_ENGINE_EXTENSION="sbidoccomp";
	public final static String GEO_ENGINE_EXTENSION="sbigeo";

	public final static String SERVER_EXTENSION="sbiserver";
	public final static String MODEL_EXTENSION="sbimodel";
	public final static String META_QUERY_EXTENSION="metaquery";
	public final static String BACKUP_EXTENSION="bck";

	
	
	// Engine Labels
	public final static String DASHBOARD_ENGINE_LABEL="SpagoBIDashboardEng";
	public final static String CHART_ENGINE_LABEL="SpagoBIJFreeChartEng";
	public final static String JASPER_REPORT_ENGINE_LABEL="SpagoBIJasperReportE";
	public final static String BIRT_REPORT_ENGINE_LABEL="SpagoBIBirtReportEng";
	public final static String OLAP_ENGINE_LABEL="SpagoBIJPivotEngine";
	public final static String ETL_ENGINE_LABEL="SpagoBITalendEngine";
	public final static String DOSSIER_ENGINE_LABEL="SpagoBIDossierEngine";
	public final static String DATA_MINING_ENGINE_LABEL="SpagoBIWekaEngine";
	public final static String QBE_ENGINE_LABEL="SpagoBIQbeEngine";
	public final static String OFFICE_DOCUMENT_ENGINE_LABEL="SpagoBIOfficeEngine";
	public final static String GEO_ENGINE_LABEL="SpagoBIGeoEngine";
	public final static String DOCUMENT_COMPOSITION_ENGINE_LABEL="SpagoBICompositeDocE";
	
	public final static int BIOBJECT_LABEL_LIMIT=20;
	public final static int BIOBJECT_NAME_LIMIT=40;
	public final static int BIOBJECT_DESCRIPTION_LIMIT=160;
	public final static int DATASET_LABEL_LIMIT=20;
	public final static int DATASET_NAME_LIMIT=50;
	public final static int DATASET_DESCR_LIMIT=160;

	
	// Engines Drivers
	
	public final static String BIRT_ENGINE_DRIVER="it.eng.spagobi.engines.drivers.birt.BirtReportDriver";
	public final static String JASPER_ENGINE_DRIVER="it.eng.spagobi.engines.drivers.jasperreport.JasperReportDriver";
	public final static String CHART_ENGINE_CLASS="it.eng.spagobi.engines.chart.SpagoBIChartInternalEngine";
	public final static String DASHBOARD_ENGINE_CLASS="it.eng.spagobi.engines.dashboard.SpagoBIDashboardInternalEngine";
	public final static String GEO_ENGINE_DRIVER="it.eng.spagobi.engines.drivers.geo.GeoDriver";

	
	// ENGINE_TYPE
	public final static String REPORT_TYPE="REPORT";
	public final static String CHART_TYPE="DASH";
	public final static String GEO_TYPE="MAP";
	
	
	
	
	// Name of project folders
	public static final String FOLDER_RESOURCE= "Resources";
	public static final String FOLDER_SERVER = "Server";
	public static final String FOLDER_DATA_SOURCE = "Data Source";
	public static final String FOLDER_METADATA_MODEL = "Business Models";
	public static final String FOLDER_METADATA_MODEL_BCK = "Backup Business Models";
	public static final String FOLDER_DATASET = "Business Queries";
	public static final String FOLDER_ANALYSIS = "Business Analysis";	
	public static final String FOLDER_PRIVATE_DOCUMENTS = "Private Folders";
	
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
	public static QualifiedName DATASET_LABEL_INSIDE = new QualifiedName("it.eng.spagobi.sdk.dataset.labelInside", "Label");
	public static QualifiedName DATASET_NAME = new QualifiedName("it.eng.spagobi.sdk.dataset.name", "Name");
	public static QualifiedName DATASET_DESCRIPTION = new QualifiedName("it.eng.spagobi.sdk.dataset.description", "Description");
	public static QualifiedName DATASET_DATAMARTS = new QualifiedName("it.eng.spagobi.sdk.dataset.datamarts", "Datamarts");
	public static QualifiedName DATASET_JSON_QUERY = new QualifiedName("it.eng.spagobi.sdk.dataset.jsonQuery", "JsonQuery");
	public static QualifiedName DATASET_TRANSFORMER = new QualifiedName("it.eng.spagobi.sdk.dataset.transformer", "Transformer");
	public static QualifiedName DATASET_COLUMN_NAME = new QualifiedName("it.eng.spagobi.sdk.dataset.columnName", "Column Name");
	public static QualifiedName DATASET_COLUMN_VALUE = new QualifiedName("it.eng.spagobi.sdk.dataset.columnValue", "Column Value");
	public static QualifiedName DATASET_ROW_NAME = new QualifiedName("it.eng.spagobi.sdk.dataset.rowName", "Row Name");

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
	
	public static QualifiedName MODEL_NAME = new QualifiedName("it.eng.spagobi.meta.editor.modelId", "modelId");
	public static QualifiedName MODEL_FILE_NAME = new QualifiedName("it.eng.spagobi.meta.editor.modelFileName", "modelFileName");
	public static QualifiedName DIRTY_MODEL = new QualifiedName("it.eng.spagobi.meta.mode.dirty", "dirty");
	
	
	// Welcome VIEW ID
	public static final String VIEW_WELCOME_ID = "com.developer.welcome.intro";
	
	public static final String SPAGOBI_SERVER_URL = "spagobiServerUrlPreference";

	public static final String SPABOGI_USER_NAME = "spagobiUserNamePreference";

	public static final String SPABOGI_USER_PASSWORD = "spagobiUserPasswordPreference";
	
	public static final String IREPORT_EXEC_FILE = "iReportExecFile";
	
	
	
	
	
	// Wizard Icons
	public static final String ICON_WIZARD_BIRT = "objecticon_JASPER.png";
	public static final String ICON_WIZARD_JASPER = "objecticon_JASPER.png";
	public static final String ICON_WIZARD_CHART = "objecticon_DASH.png";
	public static final String ICON_WIZARD_DASHBOARD = "objecticon_DASH.png";
	public static final String ICON_WIZARD_DOC_COMP = "objecticon_COMPOSITE_DOCUMENT.png";
	public static final String ICON_WIZARD_GEO = "objecticon_MAP.png";
	public static final String ICON_WIZARD_DOWNLOAD = "download.JPG";
	public static final String ICON_WIZARD_DEPLOY = "deploy.JPG";
	public static final String ICON_WIZARD_REFRESH = "refresh.JPG";
	public static final String ICON_WIZARD_SERVER = "server.png";
	public static final String ICON_WIZARD_MODEL = "metadata.png";
	public static final String ICON_WIZARD_DELETE = "delete.png";
	public static final String ICON_WIZARD_QUERY = "query.gif";
	public static final String ICON_WIZARD_SPAGOBI = "sbiproject.gif";
	
	
	
	// View ID
	public static final String PROJECT_EXPLORER_VIEW_ID = "org.eclipse.ui.navigator.ProjectExplorer";
	public static final String DATA_SOURCE_EXPLORER_VIEW_ID = "org.eclipse.datatools.connectivity.DataSourceExplorerNavigator";
	
	public static final String DS_QBE = "SbiQbeDataSet";
	
	
	
	// QBE VERSION
	public static final String QBE_VERSION = "7";

	
	// CONFIG PROPERTIES
	public static final String CONFIG_PROPERTY_FOLDER_BUSINESS_MODELS = "Folder_Business_Models";
	public static final String CONFIG_PROPERTY_FOLDER_BUSINESS_ANALYSIS= "Folder_Business_Analysis";
	public static final String CONFIG_PROPERTY_FOLDER_RESOURCES = "Folder_Resources";
	public static final String CONFIG_PROPERTY_FOLDER_PRIVATE_FOLDERS= "Folder_Private_Folders";
	public static final String CONFIG_PROPERTY_ANALYSIS_DOCUMENT= "AnalysisDocuments";
	public static final String CONFIG_PROPERTY_FOLDER_BUSINESS_QUERIES= "Folder_Business_Queries";
	
	
}
