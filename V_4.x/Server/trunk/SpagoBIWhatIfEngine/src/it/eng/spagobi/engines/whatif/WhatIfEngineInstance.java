/* SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package it.eng.spagobi.engines.whatif;

import it.eng.spagobi.engines.whatif.services.model.ModelConfig;
import it.eng.spagobi.services.proxy.EventServiceProxy;
import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.datasource.bo.IDataSource;
import it.eng.spagobi.utilities.engines.AbstractEngineInstance;
import it.eng.spagobi.utilities.engines.AuditServiceProxy;
import it.eng.spagobi.utilities.engines.EngineConstants;
import it.eng.spagobi.utilities.engines.IEngineAnalysisState;
import it.eng.spagobi.utilities.engines.SpagoBIEngineException;
import it.eng.spagobi.utilities.engines.SpagoBIEngineRuntimeException;
import it.eng.spagobi.utilities.exceptions.SpagoBIRuntimeException;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.olap4j.OlapConnection;
import org.olap4j.OlapDataSource;

import com.eyeq.pivot4j.PivotModel;
import com.eyeq.pivot4j.datasource.SimpleOlapDataSource;
import com.eyeq.pivot4j.impl.PivotModelImpl;

/**
 * @author ...
 */
public class WhatIfEngineInstance extends AbstractEngineInstance implements Serializable {
	


	/**
	 * 
	 */
	private static final long serialVersionUID = 1329486982941461093L;

	public static transient Logger logger = Logger.getLogger(WhatIfEngineInstance.class);
	
	private JSONObject guiSettings;
	private List<String> includes;
	private OlapDataSource olapDataSource;
	private PivotModel pivotModel;
	private ModelConfig modelConfig;

	public WhatIfEngineInstance(Object template, Map env) {
		super( env );	
		try {
			this.guiSettings = new JSONObject(template);
		} catch (Throwable t) {
			throw new SpagoBIRuntimeException("Impossible to parse template", t);
		}
		
		includes = WhatIfEngine.getConfig().getIncludes();
		
		try {
			Class.forName("mondrian.olap4j.MondrianOlap4jDriver");
		} catch (ClassNotFoundException e) {
			throw new RuntimeException("Cannot load Mondrian Olap4j Driver", e);
		}

		
		IDataSource ds = (IDataSource)env.get(EngineConstants.ENV_DATASOURCE);
		
		String initialMdx = "SELECT {[Measures].[Unit Sales], [Measures].[Store Cost]} ON COLUMNS, {[Product].[Food]} ON ROWS FROM [Sales]";
		Properties connectionProps = new Properties();
		connectionProps.put("JdbcUser",ds.getUser());
		connectionProps.put("JdbcPassword",ds.getPwd());
		//connectionProps.put("Catalog","file:D:/progetti/SpagoBI/apache-tomcat-7.0.50/FoodMartMySQL.xml");
		connectionProps.put("Catalog","file:D:/Sviluppo/mondrian/FoodMartMySQL.xml");
		connectionProps.put("JdbcDrivers",ds.getDriver());
		connectionProps.put("Provider","Mondrian");

		olapDataSource = new SimpleOlapDataSource();
		((SimpleOlapDataSource)olapDataSource).setConnectionString( "jdbc:mondrian:Jdbc=jdbc:mysql://localhost:3306/foodmart_key");
		((SimpleOlapDataSource)olapDataSource).setConnectionProperties(connectionProps);
		
		pivotModel = new PivotModelImpl(olapDataSource);
		pivotModel.setMdx(initialMdx);
		pivotModel.initialize();
		
		
		
		//init configs 
		modelConfig = new ModelConfig();

	}
	
	public OlapConnection getOlapConnection () {
		OlapConnection connection;
		try {
			connection = getOlapDataSource().getConnection();
		} catch (SQLException e) {
			logger.error("Error getting the connection", e);
			throw new SpagoBIEngineRuntimeException("Error getting the connection", e);
		}
		return connection;
	}

	public ModelConfig getModelConfig() {
		return modelConfig;
	}

	public OlapDataSource getOlapDataSource () {
		return olapDataSource;
	}

	public JSONObject getGuiSettings() {
		return guiSettings;
	}
	
	public List getIncludes() {
		return includes;
	}
	
	public PivotModel getPivotModel() {
		return pivotModel;
	}

	public IDataSource getDataSource() {
		return (IDataSource)this.getEnv().get(EngineConstants.ENV_DATASOURCE);
	}
	
	public IDataSet getDataSet() {
		return (IDataSet)this.getEnv().get(EngineConstants.ENV_DATASET);
	}
	
	public Locale getLocale() {
		return (Locale)this.getEnv().get(EngineConstants.ENV_LOCALE);
	}
	
	public AuditServiceProxy getAuditServiceProxy() {
		return (AuditServiceProxy)this.getEnv().get(EngineConstants.ENV_AUDIT_SERVICE_PROXY);
	}
	
	public EventServiceProxy getEventServiceProxy() {
		return (EventServiceProxy)this.getEnv().get(EngineConstants.ENV_EVENT_SERVICE_PROXY);
	}

	
	// -- unimplemented methods ------------------------------------------------------------

	public IEngineAnalysisState getAnalysisState() {
		throw new WhatIfEngineRuntimeException("Unsupported method [getAnalysisState]");
	}


	public void setAnalysisState(IEngineAnalysisState analysisState) {
		throw new WhatIfEngineRuntimeException("Unsupported method [setAnalysisState]");		
	}


	public void validate() throws SpagoBIEngineException {
		throw new WhatIfEngineRuntimeException("Unsupported method [validate]");		
	}
	
	
	
	
}
