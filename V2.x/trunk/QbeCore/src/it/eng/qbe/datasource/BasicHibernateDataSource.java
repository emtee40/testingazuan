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
package it.eng.qbe.datasource;

import it.eng.qbe.conf.QbeConf;
import it.eng.qbe.dao.DAOFactory;
import it.eng.qbe.locale.LocaleUtils;
import it.eng.qbe.log.Logger;
import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.model.HQLStatement;
import it.eng.qbe.model.IQuery;
import it.eng.qbe.model.IStatement;
import it.eng.qbe.model.io.IDataMartModelRetriever;
import it.eng.qbe.model.io.IQueryPersister;
import it.eng.qbe.utility.JarUtils;
import it.eng.qbe.utility.Utils;
import it.eng.spago.base.ApplicationContainer;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.utilities.DynamicClassLoader;


import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.mapping.PersistentClass;
import org.hibernate.mapping.Table;

/**
 * @author Andrea Gioia
 *
 */
public class BasicHibernateDataSource extends AbstractHibernateDataSource  {
	
	
	private Configuration configuration = null;
	private SessionFactory sessionFactory = null;
	
	private boolean classLoaderExtended = false;	
	private List alreadyAddedView = null;
	
	
	
	/*
	 public BasicHibernateDataSource(String datamartName, DBConnection connection) {
		
		setName( buildDatasourceName(datamartName) );
		setType( HIBERNATE_DS_TYPE );
		
		setDatamartName(buildDatamartName(datamartName));
		
		this.datamartNames = new ArrayList();
		this.datamartNames.add(datamartName);
		
		setConnection(connection);
		
		setFormulaFile( loadFormulaFile( getDatamartName() ) );
		setQbeProperties( loadQbeProperties( getDatamartName() ) );
		setLabelProperties( loadLabelProperties( getDatamartName() ) );
		
		this.alreadyAddedView = new ArrayList();		
	}
	 */
	
	private BasicHibernateDataSource(String dataSourceName, String datamartName, List datamartNames, DBConnection connection) {
		this(dataSourceName, datamartName, datamartNames, new HashMap(), connection);
	}
	
	private BasicHibernateDataSource(String dataSourceName, 
									String datamartName, 
									List datamartNames, 
									Map dblinkMap, 
									DBConnection connection) {
		
		setName( dataSourceName );
		setType( HIBERNATE_DS_TYPE );
		
		setDatamartName(datamartName);		
		setDatamartNames(datamartNames);
		setConnection(connection);	
		
		setFormula( DAOFactory.getFormulaDAO().loadFormula(getDatamartName()) );
		
		setProperties( DAOFactory.getDatamartPropertiesDAO().loadDatamartProperties( datamartName ) );
		setLabels( DAOFactory.getDatamartLabelsDAO().loadDatamartLabels(datamartName) );		
		
		this.alreadyAddedView = new ArrayList();		
	}
	
	protected BasicHibernateDataSource(String dataSourceName) {
		setName( dataSourceName );
		setType( HIBERNATE_DS_TYPE );
		alreadyAddedView = new ArrayList();
	}
	
	
	
	
	
	
	
	public Configuration getConfiguration() {
		if(configuration == null) {
			initHibernate();
		}
		return configuration;
	}
	
	public SessionFactory getSessionFactory() {
		if(sessionFactory == null) {
			initHibernate();
		}
		return sessionFactory;
	}
		
	
	
	
	private void initHibernate() {
		File jarFile = null;
		
		jarFile = getDatamartJarFile( getDatamartName() );
		if(jarFile == null) return;
		
		configuration = buildEmptyConfiguration();
		
		if (!classLoaderExtended){
			updateCurrentClassLoader(jarFile);
		}	
		
		configuration.addJar(jarFile);
		
		try {
			configuration.addJar(jarFile);
		} catch (Throwable t) {
			t.printStackTrace();
		}
		
		addViews();
		
		sessionFactory = configuration.buildSessionFactory();	
	}
	
	private boolean addViews() {		
		boolean result = false;
		
		List viewNames = getViewNames( getDatamartName() );
		if(viewNames.size() > 0) {
			for(int i = 0; i < viewNames.size(); i++) {
				String viewName = (String)viewNames.get(i);
				result = result || addView(viewName);
			}
		}
		
		return result;
	}	
	
	private boolean addView(String viewName) {
		
		boolean result = false;
		
		File viewJarFile = null;
		
		viewJarFile = getViewJarFile(getDatamartName(), viewName);
		if(viewJarFile == null) {
			return false;
		}
		
		if(configuration == null) {
			configuration = buildEmptyConfiguration();
		}		
		
		if (!(alreadyAddedView.contains(viewJarFile.getAbsolutePath()))){ 
			updateCurrentClassLoader(viewJarFile);
			configuration.addJar(viewJarFile);
			alreadyAddedView.add(viewJarFile.getAbsolutePath());
			result = true;
		}
		
		return result;
	}
	
	
	private void addDbLinks() {
		addDbLink(getDatamartName(), getConfiguration(), getConfiguration());
	}	

	
	

	public void refresh() {
		configuration = null;
		sessionFactory = null;
		classLoaderExtended = false;
		alreadyAddedView = new ArrayList();		
	}	
	

	public String getCompositeDatamartName() {
		return getDatamartName();
	}
	
	public String getCompositeDatamartDescription() {
		return getDatamartName();
	}

	public void refreshDatamartViews() {
		refresh();
	}

	public void refreshSharedView(String sharedViewName) {
		refreshDatamartViews();
	}

	public void refreshSharedViews() {
		refreshDatamartViews();
	}
}
