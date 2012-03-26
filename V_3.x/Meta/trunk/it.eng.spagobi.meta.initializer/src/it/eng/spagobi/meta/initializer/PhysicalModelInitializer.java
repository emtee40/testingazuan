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
package it.eng.spagobi.meta.initializer;


import it.eng.spagobi.meta.initializer.properties.IPropertiesInitializer;
import it.eng.spagobi.meta.initializer.properties.PhysicalModelDefaultPropertiesInitializer;
import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalForeignKey;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalModelFactory;
import it.eng.spagobi.meta.model.physical.PhysicalPrimaryKey;
import it.eng.spagobi.meta.model.physical.PhysicalTable;
import it.eng.spagobi.meta.model.util.JDBCTypeMapper;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class PhysicalModelInitializer {
	
	IPropertiesInitializer propertiesInitializer;
	Model rootModel;
	private static Logger logger = LoggerFactory.getLogger(PhysicalModelInitializer.class);

	
	static public PhysicalModelFactory FACTORY = PhysicalModelFactory.eINSTANCE;
	
	public PhysicalModelInitializer() {
		setPropertiesInitializer(new PhysicalModelDefaultPropertiesInitializer());
		
	}
	
	//Initialize PhysicalModel with table filter
	public PhysicalModel initialize(String modelName, Connection conn, String connectionName, String connectionDriver, String connectionUrl, 
									String connectionUsername, String connectionPassword, String connectionDatabaseName,
									String defaultCatalog, String defaultSchema, List<String> selectedTables){
		PhysicalModel model;
		DatabaseMetaData dbMeta;
		
		try {
			model = FACTORY.createPhysicalModel();
			model.setName(modelName);
			
			if(getRootModel() != null) {
				model.setParentModel(getRootModel());
			}
			
			dbMeta = conn.getMetaData();
			


			
			addDatabase(dbMeta, model);			
			addCatalog(conn, model, defaultCatalog);
			addSchema(dbMeta, model, defaultSchema);
			
			addTables(dbMeta, model, selectedTables);
			
			for(int i = 0; i < model.getTables().size(); i++) {
				addPrimaryKey(dbMeta, model, model.getTables().get(i));
				addForeignKeys(dbMeta, model, model.getTables().get(i));
			}
			
			getPropertiesInitializer().addProperties(model);
			
			//Setting Connection properties values
			model.getPropertyType("connection.name").setDefaultValue(connectionName);
			logger.debug("PhysicalModel Property: Connection name is [{}]",model.getPropertyType("connection.name").getDefaultValue());
			
			// TODO add property connection.driver into PhysicalModelDefaultPropertiesInitializer
			//model.getPropertyType("connection.driver").setDefaultValue(connectionDriver);
			//logger.debug("PhysicalModel Property: Connection driver is [{}]",model.getPropertyType("connection.driver").getDefaultValue());
			
			
			model.getPropertyType("connection.url").setDefaultValue(connectionUrl);
			logger.debug("PhysicalModel Property: Connection url is [{}]",model.getPropertyType("connection.url").getDefaultValue());
			model.getPropertyType("connection.username").setDefaultValue(connectionUsername);
			logger.debug("PhysicalModel Property: Connection username is [{}]",model.getPropertyType("connection.username").getDefaultValue());
			model.getPropertyType("connection.password").setDefaultValue(connectionPassword);
			logger.debug("PhysicalModel Property: Connection password is [{}]",model.getPropertyType("connection.password").getDefaultValue());
			model.getPropertyType("connection.databasename").setDefaultValue(connectionDatabaseName);
			logger.debug("PhysicalModel Property: Connection databasename is [{}]",model.getPropertyType("connection.databasename").getDefaultValue());
		
			//Quote string identification
			String quote = dbMeta.getIdentifierQuoteString();
			System.out.println("Quote string: "+quote);
			System.out.println("Quote string length: "+quote.length());
			//check if escaping is needed
			if (quote.equals("\""))
			{
				quote = "\\\"";
			}
			model.getPropertyType("connection.databasequotestring").setDefaultValue(quote);
			logger.debug("PhysicalModel Property: Connection databasequotestring is [{}]",model.getPropertyType("connection.databasequotestring").getDefaultValue());
			System.out.println("connection.databasequotestring = "+model.getPropertyType("connection.databasequotestring").getDefaultValue());

		
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize physical model", t);
		}
		
		return model;		
		
	}
	
	//Initialize Physical Model with ALL original Database Tables
	public PhysicalModel initialize(String modelName, Connection conn, String connectionName, String connectionDriver, String connectionUrl, 
			String connectionUsername, String connectionPassword, String connectionDatabaseName, String defaultCatalog, String defaultSchema) {
		return initialize(modelName,conn, connectionName, connectionDriver, connectionUrl, connectionUsername, connectionPassword, connectionDatabaseName, defaultCatalog,defaultSchema, null );
	}
	
	
	private void addDatabase(DatabaseMetaData dbMeta, PhysicalModel model) {
		try {
			model.setDatabaseName( dbMeta.getDatabaseProductName());
			model.setDatabaseVersion( dbMeta.getDatabaseProductVersion());
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize database metadata", t);
		}
	}
	
	private void addCatalog(Connection conn, PhysicalModel model, String defaultCatalog) {
		String catalog;		
		List<String> catalogs;
		DatabaseMetaData dbMeta;
		ResultSet rs;
		Iterator<String> it;
		
		catalog = null;
		
		try {
			
			catalog = conn.getCatalog();
			if(catalog == null) {
				dbMeta = conn.getMetaData();
				
				rs = dbMeta.getCatalogs();
				catalogs = new ArrayList();
				while (rs.next()) {
					catalogs.add( rs.getString(1) );
				}	
				if(catalogs.size() == 0) {
					log("No schema [" + dbMeta.getSchemaTerm() + "] defined");
				} else if(catalogs.size() == 1) {
					catalog = catalogs.get(1);
				} else {
					String targetCatalog = null;
					it = catalogs.iterator();
					while (it.hasNext()) {
						String s = it.next();
						log("s [" + s + "]");
						if(s.equalsIgnoreCase(defaultCatalog)) {
							targetCatalog = defaultCatalog;
							break;
						}
					}
					if(targetCatalog == null) {
						throw new RuntimeException("No catalog named [" + defaultCatalog + "] is available on db");
					}
					catalog = targetCatalog;
				}
				rs.close();
			}
			
			model.setCatalog(catalog);
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize catalog metadata", t);
		}
	}
	
	private void addSchema(DatabaseMetaData dbMeta, PhysicalModel model,  String defaultSchema) {
		String schema;
		List<String> schemas;
		ResultSet rs;
		Iterator<String> it;
		
		schema = null;
		
		try {
			rs = dbMeta.getSchemas();
			schemas = new ArrayList();
			while (rs.next()) {
				schemas.add( rs.getString(1) );
			}
			
			if(schemas.size() == 0) {
				log("No schema [" + dbMeta.getSchemaTerm() + "] defined");
			} else if(schemas.size() == 1) {
				schema = schemas.get(1);
			} else {
				String targetSchema = null;
				it = schemas.iterator();
				while (it.hasNext()) {
					String s = it.next();
					if(s.equalsIgnoreCase(defaultSchema)) {
						targetSchema = defaultSchema;
						break;
					}
				}
				if(targetSchema == null) {
					throw new RuntimeException("No schema named [" + defaultSchema + "] is available on db");
				}
				schema = targetSchema;
			}
			rs.close();
			model.setSchema(schema);
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize schema metadata", t);
		}
	}
	
	
	
	private void addTables(DatabaseMetaData dbMeta, PhysicalModel model, List<String> selectedTables ) {
		boolean filterTable = false;
		if (selectedTables != null){
			filterTable = true;
		}
		
		Map<String, PhysicalTable> tabesLookupMap;
		ResultSet tableRs, columnRs;
		PhysicalTable table;
		List<PhysicalPrimaryKey> primaryKeys;
		PhysicalPrimaryKey primaryKey;
		List<PhysicalForeignKey> foreignKeys;
		PhysicalForeignKey foreignKey;
		
		try {
			tableRs = dbMeta.getTables(model.getCatalog(), model.getSchema(), null, new String[]{"TABLE", "VIEW"});
			
			/* 
			--------------------------------------------------
			resultset's structure
			--------------------------------------------------
			1. TABLE_CAT String => table catalog (may be null)
			2. TABLE_SCHEM String => table schema (may be null)
			3. TABLE_NAME String => table name
			
			Data Warehouse Management Model 181
			4. TABLE_TYPE String => table type. Typical types are �TABLE�, �VIEW�, �SYSTEM TABLE�,�GLOBAL TEMPORARY�, �LOCAL TEMPORARY�, �ALIAS�, �SYNONYM�.
			5. REMARKS String => explanatory comment on the table
			6. TYPE_CAT String => the types catalog (may be null)
			7. TYPE_SCHEM String => the types schema (may be null)
			8. TYPE_NAME String => type name (may be null)
			9. SELF_REFERENCING_COL_NAME String => name of the designated �identifier� column of a typed table (may be null)
			10. REF_GENERATION String => specifies how values in SELF_REFERENCING_COL_NAME are created. Values are �SYSTEM�, �USER�, �DERIVED�. (may be null)
			 */
			while (tableRs.next()) {
				if( (!filterTable) || 
				  ( (selectedTables != null) && (selectedTables.contains(tableRs.getString("TABLE_NAME"))) ) )
				{
					table = FACTORY.createPhysicalTable();
					getPropertiesInitializer().addProperties(table);
					
					table.setName( tableRs.getString("TABLE_NAME") );
					table.setComment( tableRs.getString("REMARKS") );
					table.setType( tableRs.getString("TABLE_TYPE") );
					
					log("Table: " + table.getName() + "[" + table.getType() + "]");
					
					initColumnsMeta(dbMeta, model, table);
							
					model.getTables().add(table);
				}
			}
			tableRs.close();
			
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize tables metadata", t);
		}
	}
	
	
	private void initColumnsMeta(DatabaseMetaData dbMeta, PhysicalModel model, PhysicalTable table ) {
		ResultSet rs;
		PhysicalColumn column;		
		
		try {
			rs = dbMeta.getColumns(model.getCatalog(), model.getSchema(), table.getName(), null);
			
			/*
			1.  TABLE_CAT String => table catalog (may be null)
			2.  TABLE_SCHEM String => table schema (may be null)
			3.  TABLE_NAME String => table name
			4.  COLUMN_NAME String => column name
			5.  DATA_TYPE short => SQL type from java.sql.Types
			6.  TYPE_NAME String => Data source dependent type name, for a UDT the type name is fully qualified
			7.  COLUMN_SIZE int => column size. For char or date types this is the maximum number of characters, for numeric or decimal types this is precision.
			8.  BUFFER_LENGTH is not used.
			9.  DECIMAL_DIGITS int => the number of fractional digits
			10. NUM_PREC_RADIX int => Radix (typically either 10 or 2)
			11. NULLABLE int => is NULL allowed. columnNoNulls - might not allow NULL values; columnNullable - definitely allows NULL values; columnNullableUnknown - nullability unknown
			12. REMARKS String => comment describing column (may be null)
			13. COLUMN_DEF String => default value (may be null)
			14. SQL_DATA_TYPE int => unused
			15. SQL_DATETIME_SUB int => unused
			16. CHAR_OCTET_LENGTH int => for char types the maximum number of bytes in the column
			17. ORDINAL_POSITION int => index of column in table (starting at 1)
			18. IS_NULLABLE String => �NO� means column definitely does not allow NULL values; �YES� means the column might allow NULL values. An empty string means nobody knows.
			19. SCOPE_CATLOG String => catalog of table that is the scope of a reference attribute (null if DATA_TYPE isn�t REF)
			20. SCOPE_SCHEMA String => schema of table that is the scope of a
			
			182 Chapter 5 reference attribute (null if the DATA_TYPE isn�t REF)
			21. SCOPE_TABLE String => table name that is the scope of a reference attribute (null if the DATA_TYPE isn�t REF)
			22. SOURCE_DATA_TYPE short => source type of a distinct type or user-generated Ref type, SQL type from java.sql.Types (null if DATA_TYPE isn�t DISTINCT or user-generated REF)
			 */
			while (rs.next()) 	{
				column = FACTORY.createPhysicalColumn();
				getPropertiesInitializer().addProperties(column);
				
				//to prevent ojdbc bug
				try{ 
					column.setDefaultValue( rs.getString("COLUMN_DEF") );
				} catch(Throwable t) {
					log("Impossible to set Default column value");
					t.printStackTrace();
					column.setDefaultValue( null);
				}
				column.setName(rs.getString("COLUMN_NAME"));
				column.setComment( rs.getString("REMARKS") );
				column.setDataType( JDBCTypeMapper.getModelType(rs.getShort("DATA_TYPE") ) );
				column.setTypeName( rs.getString("TYPE_NAME") );
				column.setSize(rs.getInt("COLUMN_SIZE") );
				column.setOctectLength(rs.getInt("CHAR_OCTET_LENGTH") );
				column.setDecimalDigits(rs.getInt("DECIMAL_DIGITS") );
				column.setRadix( rs.getInt("NUM_PREC_RADIX") );
				//column.setDefaultValue( rs.getString("COLUMN_DEF") );
				column.setNullable( !"NO".equalsIgnoreCase(rs.getString("IS_NULLABLE")) );
				column.setPosition( rs.getInt("ORDINAL_POSITION") );
				
				table.getColumns().add(column);
				log("  - column: " + column.getName() + " [" + column.getTypeName() + "]" + " [" + column.getDefaultValue() + "]");
			}
			rs.close();
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize primaryKeys metadata", t);
		}
	}
	
	
	private void addPrimaryKey(DatabaseMetaData dbMeta, PhysicalModel model, PhysicalTable table) {
		PhysicalColumn column;
		PhysicalPrimaryKey primaryKey;
		ResultSet rs;
		
		primaryKey = null;
		
		try {
			rs = dbMeta.getPrimaryKeys(model.getCatalog(), model.getSchema(), table.getName());
			/*
			1. TABLE_CAT String => table catalog (may be null)
			2. TABLE_SCHEM String => table schema (may be null)
			3. TABLE_NAME String => table name
			4. COLUMN_NAME String => column name
			5. KEY_SEQ short => sequence number within primary key
			6. PK_NAME String => primary key name (may be null)
			*/
			
			
			while (rs.next()) {
				if(primaryKey == null) {
					primaryKey = FACTORY.createPhysicalPrimaryKey();
					primaryKey.setName( rs.getString("PK_NAME") );
					
					primaryKey.setTable(table);
					model.getPrimaryKeys().add(primaryKey);
					
					getPropertiesInitializer().addProperties(primaryKey);
				}
				
				column = table.getColumn( rs.getString("COLUMN_NAME") );
				if(column != null) {
					primaryKey.getColumns().add( column );
				}
				
			}
		rs.close();	
			
		
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to retrive primaryKeys metadata", t);
		}
	}
	
	private void addForeignKeys(DatabaseMetaData dbMeta, PhysicalModel model, PhysicalTable table) {
		List<PhysicalForeignKey> foreignKeys;
		ResultSet rs;
		PhysicalForeignKey foreignKey;
		
		
		foreignKeys = new ArrayList();
		foreignKey = null;
		
		try {
			rs = dbMeta.getImportedKeys(model.getCatalog(), model.getSchema(), table.getName());
			/*
			1. PKTABLE_CAT String => primary key table catalog (may be null)
			2. PKTABLE_SCHEM String => primary key table schema (may be null)
			3. PKTABLE_NAME String => primary key table name
			4. PKCOLUMN_NAME String => primary key column name
			5. FKTABLE_CAT String => foreign key table catalog (may be null) being exported (may be null)
			6. FKTABLE_SCHEM String => foreign key table schema (may be null) being exported (may be null)
			7. FKTABLE_NAME String => foreign key table name being exported
			8. FKCOLUMN_NAME String => foreign key column name being exported
			9. KEY_SEQ short => sequence number within foreign key
			10. UPDATE_RULE short => What happens to foreign key when primary is updated:
				importedNoAction - do not allow update of primary key if it has been imported
				importedKeyCascade - change imported key to agree with primary key update
				importedKeySetNull - change imported key to NULL if its primary key has been updated
				importedKeySetDefault - change imported key to default values if its primary key has been updated
				importedKeyRestrict - same as importedKeyNoAction (for ODBC 2.x compatibility)
			11. DELETE_RULE short => What happens to the foreign key when primary is deleted:
				importedKeyNoAction - do not allow delete of primary key if it has been imported
				importedKeyCascade - delete rows that import a deleted key
				importedKeySetNull - change imported key to NULL if its primary key has been deleted
				importedKeyRestrict - same as importedKeyNoAction (for ODBC 2.x compatibility)
				importedKeySetDefault - change imported key to default if its primary key has been deleted
			12. FK_NAME String => foreign key name (may be null)
			13. PK_NAME String => primary key name (may be null)
			14. DEFERRABILITY short => can the evaluation of foreign key constraints be deferred until commit:
				importedKeyInitiallyDeferred - see SQL92 for definition
				importedKeyInitiallyImmediate - see SQL92 for definition
				importedKeyNotDeferrable - see SQL92 for definition
			 */
			String fkName = null;
			PhysicalTable sourceTable = null;
			PhysicalTable destinationTable = null;
			String pkName = null;
			while (rs.next()) {
				fkName = rs.getString("FK_NAME");
				sourceTable = model.getTable( rs.getString("FKTABLE_NAME") );
				destinationTable = model.getTable( rs.getString("PKTABLE_NAME") );
				
				if (destinationTable == null || sourceTable == null){
					//skip this foreign key because table is not found in the physical model
					log("Foreign Key skipped because table was not found in the physical model");
				}
				else {
					if(foreignKey == null) { // OK it's the first iteration
						
						foreignKey = FACTORY.createPhysicalForeignKey();
						getPropertiesInitializer().addProperties(foreignKey);
						
						foreignKey.setSourceName(fkName);
						foreignKey.setSourceTable( sourceTable );					
						foreignKey.setDestinationName(rs.getString("PK_NAME"));
						foreignKey.setDestinationTable( destinationTable );
						
						pkName = rs.getString("PK_NAME");
					
					} else if (!foreignKey.getSourceName().equals(fkName)) { // we have finished with the previous fk

						//table.getForeignKeys().add(foreignKey);
						model.getForeignKeys().add(foreignKey);
						foreignKey = FACTORY.createPhysicalForeignKey();
						getPropertiesInitializer().addProperties(foreignKey);
						foreignKey.setSourceName(fkName);
						foreignKey.setSourceTable( sourceTable );					
						foreignKey.setDestinationName(rs.getString("PK_NAME"));
						foreignKey.setDestinationTable( destinationTable );
						
						pkName = rs.getString("PK_NAME");
					}
					
					PhysicalColumn c = sourceTable.getColumn(rs.getString("FKCOLUMN_NAME"));
					if(c == null) {
						System.out.println( sourceTable.getName() + "!>" +  rs.getString("FKCOLUMN_NAME") );
						System.out.println(destinationTable.getName() + "!>" +  rs.getString("PKCOLUMN_NAME") );
						
						System.out.println("--------------------------" );
						for(int n = 0; n < sourceTable.getColumns().size(); n++) {
							System.out.println(" - " + sourceTable.getColumns().get(n).getName() );
						}
					}
					foreignKey.getSourceColumns().add( sourceTable.getColumn(rs.getString("FKCOLUMN_NAME")) );
					
					c = destinationTable.getColumn(rs.getString("PKCOLUMN_NAME"));
					if(c == null) {
						System.out.println( sourceTable.getName() + "->" +  rs.getString("FKCOLUMN_NAME") );
						System.out.println(destinationTable.getName() + "->" +  rs.getString("PKCOLUMN_NAME") );
					}
					foreignKey.getDestinationColumns().add( destinationTable.getColumn(rs.getString("PKCOLUMN_NAME")) );					
				}

				
			}
			//add the last or the only foreign key found
			if(foreignKey != null){
				if (destinationTable == null || sourceTable == null){
					//skip this foreign key because table was not found in the physical model
					log("Foreign Key skipped because table was not found in the physical model");
				} else {
					model.getForeignKeys().add(foreignKey);
					foreignKey = FACTORY.createPhysicalForeignKey();
					getPropertiesInitializer().addProperties(foreignKey);
					foreignKey.setSourceName(fkName);
					foreignKey.setSourceTable( sourceTable );					
					foreignKey.setDestinationName(pkName);
					foreignKey.setDestinationTable( destinationTable );
				}
			}
			
			rs.close();
		} catch(Throwable t) {
			throw new RuntimeException("Impossible to initialize foreignKeys metadata", t);
		}
	}
	
	//  --------------------------------------------------------
	//	Accessor methods
	//  --------------------------------------------------------

	public IPropertiesInitializer getPropertiesInitializer() {
		return propertiesInitializer;
	}

	public void setPropertiesInitializer(IPropertiesInitializer propertyInitializer) {
		this.propertiesInitializer = propertyInitializer;
	}

	public Model getRootModel() {
		return rootModel;
	}

	public void setRootModel(Model rootModel) {
		this.rootModel = rootModel;
	}
	
	
	//  --------------------------------------------------------
	//	Static methods
	//  --------------------------------------------------------
	
	private static void log(String msg) {
		//System.out.println(msg);
	}

	
	
}
