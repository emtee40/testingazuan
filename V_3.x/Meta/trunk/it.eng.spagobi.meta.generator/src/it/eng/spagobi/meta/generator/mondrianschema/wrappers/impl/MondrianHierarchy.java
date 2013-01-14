/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2010 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.meta.generator.mondrianschema.wrappers.impl;

import java.util.ArrayList;
import java.util.List;

import it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy;
import it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianLevel;
import it.eng.spagobi.meta.model.business.BusinessIdentifier;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.olap.Hierarchy;
import it.eng.spagobi.meta.model.olap.Level;

/**
 * @author Marco Cortella (marco.cortella@eng.it)
 *
 */
public class MondrianHierarchy implements IMondrianHierarchy {
	
	public static final String HIERARCHY_HAS_ALL = "structural.hasall";
	public static final String HIERARCHY_ALL_MEMBER_NAME = "structural.allmembername";
	
	Hierarchy hierarchy;
	
	public MondrianHierarchy(Hierarchy hierarchy){
		this.hierarchy = hierarchy;
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy#getLevels()
	 */
	@Override
	public List<IMondrianLevel> getLevels() {
		List<IMondrianLevel> levels = new ArrayList<IMondrianLevel>();
		
		for(Level level: hierarchy.getLevels()){
			IMondrianLevel mondrianLevel = new MondrianLevel(level);
			levels.add(mondrianLevel);
		}

		return levels;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy#getHasAll()
	 */
	@Override
	public String getHasAll() {
		return hierarchy.getProperties().get(HIERARCHY_HAS_ALL).getValue();
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy#getAllMemberName()
	 */
	@Override
	public String getAllMemberName() {
		if (hierarchy.getProperties().get(HIERARCHY_ALL_MEMBER_NAME).getValue() != null){
			return hierarchy.getProperties().get(HIERARCHY_ALL_MEMBER_NAME).getValue();
		}
		return null;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy#getPrimaryKey()
	 */
	@Override
	public String getPrimaryKey() {
		BusinessIdentifier businessIdentifier = hierarchy.getTable().getIdentifier();
		if (businessIdentifier != null){
			return businessIdentifier.getPhysicalPrimaryKey().getColumns().get(0).getName();
		}
		
		return null;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.mondrianschema.wrappers.IMondrianHierarchy#getTableName()
	 */
	@Override
	public String getTableName() {
		if (hierarchy.getTable() instanceof BusinessTable){
			return ((BusinessTable)hierarchy.getTable()).getPhysicalTable().getName();
		}
		return null;
	}

}
