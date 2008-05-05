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
package it.eng.spagobi.engines.geo.dataset.provider.configurator;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spagobi.engines.geo.Constants;
import it.eng.spagobi.engines.geo.commons.excpetion.GeoEngineException;
import it.eng.spagobi.engines.geo.dataset.DataSetMetaData;
import it.eng.spagobi.engines.geo.dataset.provider.AbstractDatasetProvider;
import it.eng.spagobi.engines.geo.dataset.provider.Hierarchy;
import it.eng.spagobi.engines.geo.dataset.provider.Link;
import it.eng.spagobi.engines.geo.dataset.provider.SQLDatasetProvider;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

// TODO: Auto-generated Javadoc
/**
 * The Class AbstractDatasetProviderConfigurator.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class AbstractDatasetProviderConfigurator {
	
	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(SQLDatasetProvider.class);
	
	
	/**
	 * Configure.
	 * 
	 * @param abstractDatasetProvider the abstract dataset provider
	 * @param conf the conf
	 * 
	 * @throws GeoEngineException the geo engine exception
	 */
	public static void configure(AbstractDatasetProvider abstractDatasetProvider, Object conf) throws GeoEngineException {
		SourceBean confSB = null;
		
		if(conf instanceof String) {
			try {
				confSB = SourceBean.fromXMLString( (String)conf );
			} catch (SourceBeanException e) {
				logger.error("Impossible to parse configuration block for DataSetProvider", e);
				throw new GeoEngineException("Impossible to parse configuration block for DataSetProvider", e);
			}
		} else {
			confSB = (SourceBean)conf;
		}
		
		if(confSB != null) {
			DataSetMetaData mataData = null;
			Map hierarchies = null;
			String selectedHierarchyName = null;
			String selectedLevelName = null;
						
			selectedHierarchyName = getSelectedHierarchyName( confSB );
			selectedLevelName = getSelectedLevelName( confSB );
			mataData = getMetaData( confSB );
			
			String stdHierarchy = (String)abstractDatasetProvider.getEnv().get(Constants.ENV_STD_HIERARCHY);
			SourceBean stdHierarchySB = null;
			try {
				stdHierarchySB = SourceBean.fromXMLString(stdHierarchy);
			} catch (SourceBeanException e) {
				e.printStackTrace();
			}
			hierarchies = getHierarchies( confSB, stdHierarchySB );				
			setLink(confSB, hierarchies);
			
			abstractDatasetProvider.setMetaData(mataData);
			abstractDatasetProvider.setHierarchies( hierarchies );
			abstractDatasetProvider.setSelectedHierarchyName(selectedHierarchyName);
			abstractDatasetProvider.setSelectedLevelName(selectedLevelName);
		}
	}
	
	/**
	 * Sets the link.
	 * 
	 * @param confSB the conf sb
	 * @param hierarchies the hierarchies
	 */
	private static void setLink(SourceBean confSB, Map hierarchies) {
		SourceBean corssNavConfSB = (SourceBean)confSB.getAttribute("CROSS_NAVIGATION");
		if( corssNavConfSB == null ) return;
		
		List links = corssNavConfSB.getAttributeAsList("LINK");
		for(int i = 0; i < links.size(); i++) {
			SourceBean linkSB = (SourceBean)links.get(i);
			String hierarchyName = (String)linkSB.getAttribute("HIERARCHY");
			Hierarchy hierarchy = (Hierarchy)hierarchies.get(hierarchyName);
			if(hierarchy == null) continue;
			String levelName = (String)linkSB.getAttribute("LEVEL");
			Hierarchy.Level level = (Hierarchy.Level)hierarchy.getLevel(levelName);
			if(level == null) continue;
			Link link = new Link();
			List parameters = linkSB.getAttributeAsList("PARAM");
			for(int j = 0; j < parameters.size(); j++) {
				SourceBean parameterSB = (SourceBean)parameters.get(j);
				String type = (String)parameterSB.getAttribute("TYPE");
				String name = (String)parameterSB.getAttribute("NAME");
				String value = (String)parameterSB.getAttribute("VALUE");
				link.addParameter(type, name, value);
			}
			
			level.setLink(link);
		}
	}

	/**
	 * Gets the selected level name.
	 * 
	 * @param confSB the conf sb
	 * 
	 * @return the selected level name
	 */
	private static String getSelectedLevelName(SourceBean confSB) {
		return (String)confSB.getAttribute("LEVEL");
	}

	/**
	 * Gets the selected hierarchy name.
	 * 
	 * @param confSB the conf sb
	 * 
	 * @return the selected hierarchy name
	 */
	private static String getSelectedHierarchyName(SourceBean confSB) {
		return (String)confSB.getAttribute("HIERARCHY");
	}

	/**
	 * Gets the meta data.
	 * 
	 * @param confSB the conf sb
	 * 
	 * @return the meta data
	 */
	public static DataSetMetaData getMetaData(SourceBean confSB) {
		DataSetMetaData metaData = null;
		
		SourceBean metadataSB = (SourceBean)confSB.getAttribute(Constants.METADATA_TAG);
		if(metadataSB == null) {
			logger.warn("Cannot find metadata configuration settings: tag name " + Constants.METADATA_TAG);
			logger.info("Metadata configuration settings must be injected at execution time");
			return null;
		}
		
		metaData = new DataSetMetaData();
		
		List columns = metadataSB.getAttributeAsList(Constants.COLUMN_TAG);
		for(int i = 0; i < columns.size(); i++) {
			SourceBean columnSB = (SourceBean)columns.get(i);
			String columnName = (String)columnSB.getAttribute(Constants.COLUMN_NAME_ATTRIBUTE);
			String columnType = (String)columnSB.getAttribute(Constants.COLUMN_TYPE_ATTRIBUTE);			
			metaData.addColumn(columnName);
			metaData.setColumnProperty(columnName, "column_id", columnName);
			metaData.setColumnProperty(columnName, "type", columnType);
			
			if( columnType.equalsIgnoreCase("geoid")) {
				String hierarchyName = (String)columnSB.getAttribute(Constants.COLUMN_HIERARCHY_REF_ATTRIBUTE);
				metaData.setColumnProperty(columnName, "hierarchy", hierarchyName);				
				String levelName = (String)columnSB.getAttribute(Constants.COLUMN_LEVEL_REF_ATTRIBUTE);				
				metaData.setColumnProperty(columnName, "level", levelName);
			} else if( columnType.equalsIgnoreCase("measure")) {
				String aggFunc = (String)columnSB.getAttribute(Constants.COLUMN_AFUNC_REF_ATTRIBUTE);
				metaData.setColumnProperty(columnName, "func", aggFunc);				
			}
			
		}
		
		return metaData;
	}
	
	/**
	 * Gets the hierarchies.
	 * 
	 * @param confSB the conf sb
	 * @param sdtHierarchySB the sdt hierarchy sb
	 * 
	 * @return the hierarchies
	 */
	public static Map getHierarchies(SourceBean confSB, SourceBean sdtHierarchySB) {
		Map hierarchies = null;
		
		SourceBean hierarchiesSB = (SourceBean)confSB.getAttribute(Constants.HIERARCHIES_TAG);
		if(hierarchiesSB == null) {
			logger.warn("Cannot find hierachies configuration settings: tag name " + Constants.HIERARCHIES_TAG);
			logger.info("Hierarchies configuration settings must be injected at execution time");
			return null;
		}
		
		hierarchies = new HashMap();
		
		Hierarchy hierarchy = null;
		List hierarchyList = hierarchiesSB.getAttributeAsList(Constants.HIERARCHY_TAG);
		for(int i = 0; i < hierarchyList.size(); i++) {
			
			SourceBean hierarchySB = (SourceBean)hierarchyList.get(i);
			String name = (String)hierarchySB.getAttribute(Constants.HIERARCHY_NAME_ATTRIBUTE);
			String type = (String)hierarchySB.getAttribute(Constants.HIERARCHY_TYPE_ATTRIBUTE);
			List levelList = null;
			if(type.equalsIgnoreCase("custom"))  {
				hierarchy = new Hierarchy(name);
				levelList =  hierarchySB.getAttributeAsList(Constants.HIERARCHY_LEVEL_TAG);
			} else {
				if(sdtHierarchySB!= null) {
					hierarchySB = sdtHierarchySB;
					String table = (String)hierarchySB.getAttribute(Constants.HIERARCHY_TABLE_ATRRIBUTE);
					hierarchy = new Hierarchy(name, table);
					levelList = hierarchySB.getAttributeAsList(Constants.HIERARCHY_LEVEL_TAG);
				} else {
					logger.error("Impossible to include default hierarchy");
				}
			}
			
			for(int j = 0; j < levelList.size(); j++) {
				SourceBean levelSB = (SourceBean)levelList.get(j);
				String lname = (String)levelSB.getAttribute(Constants.HIERARCHY_LEVEL_NAME_ATRRIBUTE);
				String lcolumnid = (String)levelSB.getAttribute(Constants.HIERARCHY_LEVEL_COLUMN_ID_ATRRIBUTE);
				String lcolumndesc = (String)levelSB.getAttribute(Constants.HIERARCHY_LEVEL_COLUMN_DESC_ATRRIBUTE);
				String lfeaturename = (String)levelSB.getAttribute(Constants.HIERARCHY_LEVEL_FEATURE_NAME_ATRRIBUTE);
				Hierarchy.Level level = new Hierarchy.Level();
				level.setName(lname);
				level.setColumnId(lcolumnid);
				level.setColumnDesc(lcolumndesc);
				level.setFeatureName(lfeaturename);
				hierarchy.addLevel(level);
			}
			
			hierarchies.put(hierarchy.getName(), hierarchy);
		}	
		
		return hierarchies;
	}
}
