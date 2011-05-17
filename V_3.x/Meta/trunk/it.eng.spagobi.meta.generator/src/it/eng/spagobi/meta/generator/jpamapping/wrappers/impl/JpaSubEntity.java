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
package it.eng.spagobi.meta.generator.jpamapping.wrappers.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaColumn;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaSubEntity;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaView;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class JpaSubEntity implements IJpaSubEntity {
	
	public static final String DESTINATION_ROLE = "structural.destinationRole";

	Object root; // table or view
	BusinessRelationship relationship;

	JpaSubEntity parent; // null if parent is equal to root
	List<JpaSubEntity> children;

	private static Logger logger = LoggerFactory.getLogger(JpaSubEntity.class);

	protected JpaSubEntity(Object root, JpaSubEntity parent, BusinessRelationship relationship) {
		this.root = root;
		this.parent = parent;
		this.relationship = relationship;
		this.children = new ArrayList<JpaSubEntity>();
	}

	public JpaSubEntity getParent() {
		return parent;
	}
	
	public List<IJpaSubEntity> getChildren() {
		List<IJpaSubEntity> subEntities = new ArrayList<IJpaSubEntity>();
		
		for(BusinessRelationship r : relationship.getDestinationTable().getRelationships()) {
			if(r.getSourceTable() != relationship.getDestinationTable()) continue;
			
			JpaSubEntity subEntity = new JpaSubEntity(root, this, relationship);
			subEntities.add(subEntity);
		}
		return subEntities;
	}
	
	public IJpaTable getParentTable() {
		IJpaTable parentTable = null;
		BusinessColumnSet parentColumnSet = relationship.getSourceTable();
		if(parentColumnSet instanceof BusinessTable) {
			parentTable = new JpaTable((BusinessTable)parentColumnSet);
		} else if(parentColumnSet instanceof BusinessView) {
			BusinessView businessView = (BusinessView)parentColumnSet;
			PhysicalTable physicalTable = relationship.getSourceColumns().get(0).getPhysicalColumn().getTable();
			parentTable = new JpaViewInnerTable(businessView, physicalTable);
		}
		
		return parentTable;
	}
	
	public IJpaColumn getParentColumn() {
		JpaTable sourceTable = new JpaTable( (BusinessTable)relationship.getSourceColumns().get(0).getTable() );
		IJpaColumn sourceColumn = new JpaColumn(sourceTable, relationship.getSourceColumns().get(0));
		return sourceColumn;
	}
	
	public IJpaTable getTable() {
		IJpaTable table = null;
		BusinessColumnSet columnSet = relationship.getDestinationTable();
		if(columnSet instanceof BusinessTable) {
			table = new JpaTable((BusinessTable)columnSet);
		} else if(columnSet instanceof BusinessView) {
			BusinessView businessView = (BusinessView)columnSet;
			PhysicalTable physicalTable = relationship.getDestinationColumns().get(0).getPhysicalColumn().getTable();
			table = new JpaViewInnerTable(businessView, physicalTable);
		}
		
		return table;
	}
	
	public String getRootQualifiedClassName() {
		String uniqueName;
		
		uniqueName = null;
		
		if(root instanceof BusinessTable) {
			IJpaTable rootTable = new JpaTable( (BusinessTable)root );
			uniqueName = rootTable.getQualifiedClassName();
		} else if(root instanceof BusinessView) {
			IJpaView rootView = new JpaView( (BusinessView)root );
			uniqueName = rootView.getQualifiedClassName();
		}
		
		return uniqueName;
	}
	
	
	public String getName() {
		String name;
		
		name = null;
		
		IJpaTable table = getTable();
		name = table.getClassName() + "(" + getParentColumn().getPropertyName().toLowerCase() + ")";
		
		return name;
	}
	
	@Override
	public String getUniqueName() {
		String uniqueName;
		
		uniqueName = "";
		
		JpaSubEntity targetEntity = this;
		while(targetEntity != null) {
			uniqueName = "//" + getName() + uniqueName;
			targetEntity = targetEntity.getParent();
		}
		
		uniqueName = getRootQualifiedClassName() + uniqueName;
		
		return uniqueName;
	}
	
	@Override
	public List<String> getColumnUniqueNames() {
		List<String> uniqueNames = new ArrayList<String>();
		
		IJpaTable table = getTable();
		for(IJpaColumn column : table.getColumns()) {
			uniqueNames.add(getUniqueName()  + "/" + column.getUnqualifiedUniqueName());
		}
		
		return uniqueNames;
	}
	
	@Override
	public List<String> getColumnNames() {
		List<String> columnsNames = new ArrayList<String>();
		
		IJpaTable table = getTable();
		for(IJpaColumn column : table.getColumns()) {
			columnsNames.add(column.getUnqualifiedUniqueName());
		}
		
		return columnsNames;
	}
	
	@Override
	public List<IJpaColumn> getColumns() {
		IJpaTable table = getTable();
		return table.getColumns();
	}
	
	public String getLabel() {
		return getAttribute("label");
	}
	
	public String getTooltip(){
		return getAttribute("tooltip");
	}
	
	@Override
	public String getAttribute(String name) {
		if ( (name.equals("label")) || (name.equals("tooltip")) ){
			return relationship.getProperties().get(DESTINATION_ROLE).getValue();
		}
		else {
			return this.getTable().getAttribute(name);
		}

	}
}
