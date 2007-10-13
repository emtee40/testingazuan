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
package it.eng.qbe.model.structure.builder;



import it.eng.qbe.datasource.HibernateDataSource;
import it.eng.qbe.model.structure.DataMartEntity;
import it.eng.qbe.model.structure.DataMartField;
import it.eng.qbe.model.structure.DataMartModelStructure;
import it.eng.qbe.utility.RelationField;

import java.io.File;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.cfg.Configuration;
import org.hibernate.mapping.Column;
import org.hibernate.mapping.PersistentClass;
import org.hibernate.metadata.ClassMetadata;
import org.hibernate.type.CollectionType;
import org.hibernate.type.ComponentType;
import org.hibernate.type.ManyToOneType;
import org.hibernate.type.Type;

/**
 * @author Andrea Gioia
 *
 */
public class HibernateDataMartStructureBuilder {
	
	Configuration configuration;
	HibernateDataSource dataSource;	
	
	
	public HibernateDataMartStructureBuilder(HibernateDataSource dataSource) {
		this.dataSource = dataSource;
		File file =  dataSource.getJarFile();
		this.configuration = dataSource.getHibernateConfiguration(file);
	}
	
	
	public static void updateCurrentClassLoader(File jarFile){
		try {
				ClassLoader previous = Thread.currentThread().getContextClassLoader();
				
				ClassLoader current = URLClassLoader.newInstance(new URL[]{jarFile.toURL()}, previous);
				
				Thread.currentThread().setContextClassLoader(current);
				
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	
	
	public DataMartModelStructure build() {
		
		DataMartModelStructure dataMartStructure = new DataMartModelStructure();
		
		Map classMetadata = dataSource.getSessionFactory().getAllClassMetadata();
		for(Iterator it = classMetadata.keySet().iterator(); it.hasNext(); ) {
			String className = (String)it.next();
			
			DataMartEntity dataMartEntity = new DataMartEntity(className);
			buildEntity(dataMartEntity, null, null, 0);
			dataMartStructure.addEntity(dataMartEntity);
		}
		
		
		return dataMartStructure;
	}
	
	public void buildEntity (DataMartEntity dataMartEntity, String relationOnColumnName, 
			String prefix,  int recursionLevel){

		PersistentClass pc = configuration.getClassMapping(dataMartEntity.getName());
		
		
		
		if (relationOnColumnName != null){
			
				// buffer.append(entityName+"("+relationOnColumnName+")." +  pname + "=" + pvalue + "\n");		
		} 
		
		try {
			
			ClassMetadata aClassMetadata = dataSource.getSessionFactory().getClassMetadata(dataMartEntity.getName());
			
			String[] metaPropertyNames = aClassMetadata.getPropertyNames();
			
			List associatedClassesArrayList = new ArrayList();
			
			Type aHibType = null;
			 	

			Type aType = aClassMetadata.getIdentifierType();
			
			String fieldName = "";
			
			String[] keyProperties = null;
			
	
			if (aType.isComponentType()){			
					
					String idPropertyName = aClassMetadata.getIdentifierPropertyName();
					String[] tmpKeyProperties = ((ComponentType)aType).getPropertyNames();
					
					
					keyProperties = new String[tmpKeyProperties.length];
					
					for (int j=0; j < tmpKeyProperties.length; j++){
						keyProperties[j] = idPropertyName + "." + tmpKeyProperties[j];						
					}					
			}else{
					keyProperties = new String[1];
					keyProperties[0] = aClassMetadata.getIdentifierPropertyName();			
			}
			Iterator pkColumnIerator = pc.getIdentifierProperty().getColumnIterator();
			
			    	
			for (int j = 0; j < keyProperties.length; j++) {

				fieldName = keyProperties[j];
				
				if (prefix != null) {
					fieldName = prefix + "." + keyProperties[j];
				}
								
				dataMartEntity.addField(new DataMartField(fieldName));				
			}
			
			
			
			List associatedCollectionClassesArrayList = new ArrayList();
				
			
			for(int i=0; i < metaPropertyNames.length; i++){
			 	aHibType = (Type)aClassMetadata.getPropertyType(metaPropertyNames[i]);
			 	org.hibernate.mapping.Property property = pc.getProperty(metaPropertyNames[i]);
			 	
			 	if (aHibType instanceof ManyToOneType){
			 		
				 	Iterator it = property.getColumnIterator();
				 	String columnName = null;
				 	if (it.hasNext()){
				 		columnName = ((Column)it.next()).getName();
				 	}
			 		fieldName = metaPropertyNames[i];
			 		
			 		if (prefix != null){
			 			 fieldName = prefix +"." + metaPropertyNames[i];
			 		}
			 		
			 		RelationField aRelationField = new RelationField( fieldName, ((ManyToOneType)aHibType).getAssociatedEntityName(), columnName ); 
			 		
			 		associatedClassesArrayList.add(aRelationField);																   
			 	}else if (aHibType instanceof CollectionType) {
					
			 		
				}else{
						fieldName = metaPropertyNames[i];
						
			 		
						if (prefix != null){
							fieldName = prefix +"." + metaPropertyNames[i];
						}
						
						dataMartEntity.addField(new DataMartField(fieldName));		
						
			 		
					}
			 	}
			
			
			
			Iterator associatedClassIterator = associatedClassesArrayList.iterator();
			
			while (associatedClassIterator.hasNext()){
				RelationField aRelationField = (RelationField)associatedClassIterator.next();
				//if(true) {
				if (aRelationField.getClassName().equalsIgnoreCase(dataMartEntity.getName())){
					//addFieldNodesNoRecursion(aRelationField.getClassName(), aRelationField.getRelationOnColumnName(), idxClassNode, nodeCounter, aRelationField.getFieldName(), fieldUrlGenerator, recursionLevel+1);
				}else{
					DataMartEntity subEntity = new DataMartEntity(aRelationField.getClassName());
					buildEntity(subEntity, aRelationField.getRelationOnColumnName(), aRelationField.getFieldName(), recursionLevel+1);
					dataMartEntity.addSubEntity(subEntity);
				}
			}
		
			
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
}
