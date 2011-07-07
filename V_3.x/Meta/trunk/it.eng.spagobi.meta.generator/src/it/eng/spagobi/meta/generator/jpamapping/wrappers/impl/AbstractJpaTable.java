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

import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaColumn;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaRelationship;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.JpaProperties;
import it.eng.spagobi.meta.generator.utils.StringUtils;
import it.eng.spagobi.meta.model.ModelProperty;
import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.physical.PhysicalTable;
import it.eng.spagobi.meta.model.util.JDBCTypeMapper;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Abstract class extended by <code>JpaTable</code> and <code>JpaViewInnerTable</code>
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public abstract class AbstractJpaTable implements IJpaTable{
	
	PhysicalTable physicalTable;

	// cache
	List<IJpaColumn> jpaColumns;
	HashMap<String, String> columnTypesMap;
	
	private static Logger logger = LoggerFactory.getLogger(AbstractJpaTable.class);
	
	public AbstractJpaTable(PhysicalTable physicalTable) {
		Assert.assertNotNull("Parameter [physicalTable] cannot be null", physicalTable);
		this.physicalTable = physicalTable;
	}	
	
	/**
	 * build the hashmap that contains all the types of the members 
	 * contained in the java class that map this table
	 */
	protected void initColumnTypesMap() {
		
		ModelProperty columnDataTypeProperty;
		String columnDataType;
		String columnJavaDataType;
		List<BusinessColumn> businessColumns;
		
		if(columnTypesMap != null) return;
		
		columnTypesMap = new HashMap<String, String>();
		
		businessColumns = getBusinessColumns();
		for (BusinessColumn column :businessColumns) {
			columnDataTypeProperty = column.getProperties().get(JpaProperties.COLUMN_DATATYPE);
			columnDataType = columnDataTypeProperty.getValue();
			columnJavaDataType = JDBCTypeMapper.getJavaTypeName(columnDataType);
			if ( !columnJavaDataType.startsWith("java.lang") && columnJavaDataType.indexOf('.') > 0) {
				String simpleJavaType = columnJavaDataType.substring(columnJavaDataType.lastIndexOf('.') + 1);
				columnTypesMap.put(columnJavaDataType, simpleJavaType);
			}
		}
	}
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getRelationships()
	 */
	public List<IJpaRelationship> getRelationships() {
		List<IJpaRelationship> jpaRelationships;
		JpaRelationship jpaRelationship;
		
		logger.trace("IN");
	
		jpaRelationships = new ArrayList<IJpaRelationship>();
	
		for(BusinessRelationship relationship : getBusinessRelationships()) {
			jpaRelationship = new JpaRelationship(this, relationship);		
			jpaRelationships.add(jpaRelationship);	
		}
		logger.trace("OUT");		
		return jpaRelationships;		
	}
	
	protected PhysicalTable getPhysicalTable() {
		return physicalTable;
	}
	
	/**
	 * TODO .. da implementare
	 * @return
	 */
	public String getDefaultFetch(){
		return "lazy";
	}
	
	abstract List<BusinessColumn> getBusinessColumns();
	
	public abstract List<BusinessRelationship> getBusinessRelationships();
	
	abstract protected BusinessModel getModel();

	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getPackage()
	 */
	public String getPackage() {
		String packageName;
		ModelProperty packageProperty;
		
		logger.trace("IN");
		
		packageProperty =  getModel().getProperties().get(JpaProperties.MODEL_PACKAGE);
        
		//check if property is setted, else get default value
        if (packageProperty.getValue() != null){
        	packageName = packageProperty.getValue();
        } else {
        	packageName = packageProperty.getPropertyType().getDefaultValue();
        }
        
        logger.trace("OUT");  
        
        return packageName;
	}
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getCompositeKeyClassName()
	 */
	public String getCompositeKeyClassName() {
		return getClassName() + "PK"; //$NON-NLS-1$
	}
	
	public String getQualifiedCompositeKeyClassName() {
		return getPackage() + "." + getClassName() + "PK"; //$NON-NLS-1$
	}
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getQualifiedClassName()
	 */
	public String getQualifiedClassName() {
		return getPackage() + "."  + getClassName();
	}
	
	public String getUniqueName() {
		return getQualifiedClassName() + "//" + getClassName();
	}
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getSimpleColumns(boolean, boolean, boolean)
	 */
	public List<IJpaColumn> getSimpleColumns(boolean genOnly, boolean includePk, boolean includeInherited) {
		logger.debug("Executing getSimpleColumns");

		List<IJpaColumn> result = new ArrayList<IJpaColumn>();
		List<IJpaColumn> columns = getColumns();
	
		for (int i = 0, n = columns.size(); i < n; ++i) {
			IJpaColumn column = columns.get(i);
			
			if( hasFakePrimaryKey() ) {
				continue;
			} else if (column.isIdentifier()) {
				if (!includePk || hasCompositeKey()) {
					continue;
				} else {
					result.add(0, column);
					logger.debug("Added column(PK) "+column.getName()+" in getSimpleColumns for table "+this.getName());
					continue;
				}
			} else if (column.isColumnInRelationship()) {
					continue;
			}
			logger.debug("Added column "+column.getName()+" in getSimpleColumns for table "+this.getName());
			result.add(column);
		}
		
		//add columns in relationship with BusinessView
		for (int i = 0, n = columns.size(); i < n; ++i) {
			IJpaColumn column = columns.get(i);
			if( hasFakePrimaryKey() ) {
				continue;
			} else if (column.isIdentifier()) {
				if (!includePk || hasCompositeKey())
					continue;
			}
			else if (column.isColumnInRelationshipWithView()){
				if(!result.contains(column))
					result.add(column);
					logger.debug("Added column "+column.getName()+" in relation with BV, in getSimpleColumns");
			}
		}
			
		
		return result;
	}
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getSimpleColumns()
	 */
	public List<IJpaColumn> getSimpleColumns() {
		return getSimpleColumns(true/* genOnly */, true/* includePk */, true/* includeInherited */);
	}

	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getImportStatements()
	 */
	public String getImportStatements(){
		
		Collection<String> packages;
		StringBuilder importStatement;
		
		logger.trace("IN");
		
		packages = columnTypesMap.keySet();
		
		importStatement = new StringBuilder();
		for ( String s : packages ) {
			importStatement.append("import " + s + ";\n"); //$NON-NLS-1$
		}

		List<IJpaRelationship> relationships = getRelationships();
		for ( IJpaRelationship relationship :  relationships ) {
			if ( relationship.isOneToMany() || relationship.isManyToMany() ) {
				importStatement.append( "import " + relationship.getCollectionType() + ";\n"); //$NON-NLS-1$
				break;
			}
		}

		//logger.debug("Business table [{}] imported statements block is equal to [{}]", businessTable.getName(), importStatement.toString());
		
		logger.trace("OUT");
		
		return importStatement.toString();
	}
	
	/**
	 * @return the composite key property name
	 * 
	 *  * TODO .... da implementare
	 */
	public String getCompositeKeyPropertyName() {
		return "compId"; //$NON-NLS-1$
	}

	/**
	 * @return the name of the metod GETTER
	 */
	public String getCompositeKeyPropertyNameGetter() {
		return "get"+StringUtils.initUpper(getCompositeKeyPropertyName());

	}
	/**
	 * @return the name of the metod SETTER
	 */
	public String getCompositeKeyPropertyNameSetter() {
		return "set"+StringUtils.initUpper(getCompositeKeyPropertyName());
	}	
	
	/*
	 * (non-Javadoc)
	 * @see it.eng.spagobi.meta.generator.jpamapping.wrappers.IJpaTable#getPrimaryKeyColumns()
	 */
	public List<IJpaColumn> getPrimaryKeyColumns(){
		List<IJpaColumn> result = new ArrayList<IJpaColumn>();
		
		
		if(hasFakePrimaryKey()) {
			result = getColumns();
		} else {
			List<IJpaColumn> columns = getColumns();
			
			for (int i = 0, n = columns.size(); i < n; ++i) {
				IJpaColumn column = columns.get(i);
				
				if (column.isIdentifier())	{
					result.add(column);
				}
			}
		}
		
		return result;		
	}
	
	
	/**
	 * @return the boolean expression that verify if two primary key are equal
	 */
	public String getPrimaryKeyEqualsClause(){
		String equalsClause;
		List<IJpaColumn> columns;
		
		equalsClause = null;
		columns = getPrimaryKeyColumns();
		for (int i = 0, n = columns.size(); i < n; ++i) {
			IJpaColumn column = columns.get(i);
			if (equalsClause == null) equalsClause = "( this."+column.getPropertyName()+".equals(castOther."+column.getPropertyName()+") )";
			else equalsClause += " \n && ( this."+column.getPropertyName()+".equals(castOther."+column.getPropertyName()+") )";
		}
		
		if (equalsClause==null) return "";
		else return equalsClause+";";	
		
	}
	
	/**
	 * 
	 * @return the expresion that compute the hash code for a given primary key
	 */
	public String getPrimaryKeyHashCodeClause(){
		String hashcodeClause;
		List<IJpaColumn> columns;
		
		hashcodeClause = null;
		columns = getPrimaryKeyColumns();
		for (int i = 0, n = columns.size(); i < n; ++i) {
			IJpaColumn column = columns.get(i);
			if (hashcodeClause==null)  hashcodeClause=" hash = hash * prime + this."+column.getPropertyName()+".hashCode() ;\n";
			else hashcodeClause=hashcodeClause+" hash = hash * prime + this."+column.getPropertyName()+".hashCode() ;\n";
		}
		
		if (hashcodeClause==null) return "";
		return hashcodeClause;		
	}
	
	
	
}
