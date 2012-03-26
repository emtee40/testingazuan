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
package it.eng.spagobi.meta.initializer.properties;

import it.eng.spagobi.meta.model.ModelFactory;
import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.ModelProperty;
import it.eng.spagobi.meta.model.ModelPropertyCategory;
import it.eng.spagobi.meta.model.ModelPropertyType;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalForeignKey;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalPrimaryKey;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class PhysicalModelDefaultPropertiesInitializer implements IPropertiesInitializer {
	// Model property names
	public static final String MODEL_CONNECTION_NAME = "connection.name";
	public static final String MODEL_CONNECTION_URL = "connection.url";
	public static final String MODEL_CONNECTION_USERNAME = "connection.username";
	public static final String MODEL_CONNECTION_PASSWORD = "connection.password";
	public static final String MODEL_CONNECTION_DATABASENAME = "connection.databasename";
	public static final String MODEL_CONNECTION_DATABASEQUOTESTRING = "connection.databasequotestring";




	
	static public ModelFactory FACTORY = ModelFactory.eINSTANCE;
	
	public void addProperties(ModelObject o) {
		
		if(o instanceof PhysicalColumn) {
			initColumnProperties((PhysicalColumn)o);
		} else if(o instanceof PhysicalModel) {
			initModelProperties((PhysicalModel)o);
		} else if(o instanceof PhysicalForeignKey) {
			initForeignKeyProperty((PhysicalForeignKey)o);
		} else if(o instanceof PhysicalPrimaryKey) {
			initPrimaryKeyProperties((PhysicalPrimaryKey)o);
		} else if(o instanceof PhysicalTable) {
			initTableProperties((PhysicalTable)o);
		} else {
			
		}
	}
	
	private void initModelProperties(PhysicalModel o) {
		ModelPropertyCategory connectionCategory;
		ModelPropertyType propertyType;
		ModelProperty property;

		// if doesn't exist create 'connection' category
		connectionCategory =  o.getParentModel().getPropertyCategory("Connection");
		if(connectionCategory == null) {
			connectionCategory = FACTORY.createModelPropertyCategory();
			connectionCategory.setName("Connection");
			connectionCategory.setDescription("Connection properties");
			o.getParentModel().getPropertyCategories().add(connectionCategory);	
		}    

		// Create the new property type and add it to the connection category
		
		// **** Model Connection Name
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_NAME);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_NAME );
			propertyType.setName("Connection Name");
			propertyType.setDescription("Data Source Connection Name");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue("connection name");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_NAME to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);

		// **** Model Connection Url
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_URL);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_URL );
			propertyType.setName("Connection Url");
			propertyType.setDescription("Data Source Connection Url");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue("url");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_URL to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);

		// **** Model Connection Username
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_USERNAME);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_USERNAME );
			propertyType.setName("Connection Username");
			propertyType.setDescription("Data Source Connection Username");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue("username");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_USERNAME to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);		

		// **** Model Connection Password
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_PASSWORD);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_PASSWORD );
			propertyType.setName("Connection Password");
			propertyType.setDescription("Data Source Connection Password");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue("password");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_PASSWORD to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);	

		// **** Model Connection DatabaseName
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_DATABASENAME);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_DATABASENAME );
			propertyType.setName("Connection DatabaseName");
			propertyType.setDescription("Data Source Connection Database Name");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue("databasename");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_DATABASENAME to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);		
		
		// **** Model Connection Database Quote String
		propertyType = null;

		if(o.getParentModel() != null) {
			propertyType = o.getParentModel().getPropertyType(MODEL_CONNECTION_DATABASEQUOTESTRING);
		}
		if(propertyType == null) {
			propertyType = FACTORY.createModelPropertyType();
			propertyType.setId( MODEL_CONNECTION_DATABASEQUOTESTRING );
			propertyType.setName("Connection DatabaseQuoteString");
			propertyType.setDescription("Data Source Connection Database Quote String");
			propertyType.setCategory(connectionCategory);
			propertyType.setDefaultValue(" ");

			if(o.getParentModel() != null) {
				o.getParentModel().getPropertyTypes().add(propertyType);
			}
		}

		// add a property of type MODEL_CONNECTION_DATABASEQUOTESTRING to the model object
		property = FACTORY.createModelProperty();
		property.setPropertyType(propertyType);
		o.getProperties().put(property.getPropertyType().getId(), property);			
	}

	private void initTableProperties(PhysicalTable o) {
		
	}
	
	private void initColumnProperties(PhysicalColumn o) {
		
	}
	
	private void initPrimaryKeyProperties(PhysicalPrimaryKey o) {
		
	}

	private void initForeignKeyProperty(PhysicalForeignKey o) {
	
	}
}
