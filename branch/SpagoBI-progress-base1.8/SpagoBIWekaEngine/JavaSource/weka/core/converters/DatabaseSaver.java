/*
 *    This program is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation; either version 2 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program; if not, write to the Free Software
 *    Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

/*
 *    DatabaseSaver.java
 *    Copyright (C) 2004 Stefan Mutter
 *
 */

package weka.core.converters;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Properties;
import java.util.Vector;

import weka.core.Attribute;
import weka.core.FastVector;
import weka.core.Instance;
import weka.core.Instances;
import weka.core.Option;
import weka.core.OptionHandler;
import weka.core.Utils;

/**
 * Writes to a database (tested with MySQL, InstantDB, HSQLDB).
 * 
 * Available options are: -T <table name> <br>
 * Sets the name of teh table (default: the name of the relation)
 * <p>
 * 
 * -P <br>
 * If set, a primary key column is generated automatically (containing the row
 * number as INTEGER). The name of this columns is defined in the DatabaseUtils
 * file.
 * <p>
 * 
 * -i <input-file> <br>
 * Specifies an ARFF file as input (for command line use)
 * <p>
 * 
 * 
 * @author Stefan Mutter (mutter@cs.waikato.ac.nz)
 * @version $Revision: 1.2 $
 */
public class DatabaseSaver extends AbstractSaver implements BatchConverter,
		IncrementalConverter, DatabaseConverter, OptionHandler {

	/** The database connection */
	private DatabaseConnection databaseConnection;

	/** The name of the tablein which the instances should be stored */
	private String m_tableName;

	/** An input arff file (for command line use) */
	private String m_inputFile;

	/**
	 * The database specific type for a string (read in from the properties
	 * file)
	 */
	private String m_createText;

	/**
	 * The database specific type for a double (read in from the properties
	 * file)
	 */
	private String m_createDouble;

	/** The database specific type for an int (read in from the properties file) */
	private String m_createInt;

	/**
	 * The name of the primary key column that will be automatically generated
	 * (if enabled). The name is read from DatabaseUtils.
	 */
	private String m_idColumn;

	/** counts the rowsand used as a primary key value */
	private int m_count;

	/** Flag indicating if a primary key column should be added */
	private boolean m_id;

	/**
	 * Flag indicating whether the default name of the table is the relaion name
	 * or not.
	 */
	private boolean m_tabName;

	/** The property file for the database connection */
	protected static String PROPERTY_FILE = "weka/experiment/DatabaseUtils.props";

	/** Properties associated with the database connection */
	protected static Properties PROPERTIES;

	protected int dbWriteMode = DELETE_INSERT;
	protected boolean versioning = false;
	protected String versionColumnName;
	protected String version;

	public static final int DROP_INSERT = 0;
	public static final int DELETE_INSERT = 1;
	public static final int INSERT = 2;
	public static final int UPDATE_INSERT = 3;
	
	public void setDbWriteMode(String dbWriteMode) {
		if(dbWriteMode == null) {
			//	leave default values
			return;
		}
		
		if(dbWriteMode.equalsIgnoreCase("DROP_INSERT")) {
			this.dbWriteMode = DROP_INSERT;
		} 
		else if (dbWriteMode.equalsIgnoreCase("DELETE_INSERT")) {
			this.dbWriteMode = DELETE_INSERT;
		}
		else if (dbWriteMode.equalsIgnoreCase("INSERT")) {
			this.dbWriteMode = INSERT;
		}
		else if (dbWriteMode.equalsIgnoreCase("UPDATE_INSERT")) {
			this.dbWriteMode = UPDATE_INSERT;
		}
		else {
			// leave default values
		}
	}
	
	

	/** reads the property file */
	static {

		try {
			PROPERTIES = Utils.readProperties(PROPERTY_FILE);

		} catch (Exception ex) {
			System.err
					.println("Problem reading properties. Fix before continuing.");
			System.err.println(ex);
		}
	}

	/**
	 * Constructor
	 * 
	 * @throws Exception
	 *             throws Exception if property file cannot be read
	 */
	public DatabaseSaver() throws Exception {

		resetOptions();
		m_createText = PROPERTIES.getProperty("CREATE_STRING");
		m_createDouble = PROPERTIES.getProperty("CREATE_DOUBLE");
		m_createInt = PROPERTIES.getProperty("CREATE_INT");
		m_idColumn = PROPERTIES.getProperty("idColumn");
	}

	/**
	 * Resets the Saver ready to save a new data set
	 */
	public void resetOptions() {

		super.resetOptions();
		setRetrieval(NONE);
		m_tableName = "";
		m_count = 1;
		m_id = false;
		m_tabName = true;
		try {
			if (databaseConnection != null && databaseConnection.isConnected())
				databaseConnection.disconnectFromDatabase();
			databaseConnection = new DatabaseConnection();
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Cancels the incremental saving process and tries to drop the table if the
	 * write mode is CANCEL.
	 */
	public void cancel() {

		if (getWriteMode() == CANCEL) {
			try {
				databaseConnection.execute("DROP TABLE " + m_tableName);
				if (databaseConnection.tableExists(m_tableName))
					System.err.println("Table cannot be dropped.");
			} catch (Exception ex) {
				printException(ex);
			}
			resetOptions();
		}
	}

	/**
	 * Returns a string describing this Saver
	 * 
	 * @return a description of the Saver suitable for displaying in the
	 *         explorer/experimenter gui
	 */
	public String globalInfo() {
		return "Writes to a database";
	}

	/**
	 * Sets the table's name
	 * 
	 * @param tn
	 *            the name of the table
	 */
	public void setTableName(String tn) {

		m_tableName = tn;
	}

	/**
	 * Gets the table's name
	 * 
	 * @return the table's name
	 */
	public String getTableName() {

		return m_tableName;
	}

	/** Returns the tip text fo this property */
	public String tableNameTipText() {

		return "Sets the name of the table.";
	}

	/**
	 * En/Dis-ables the automatic generation of a primary key
	 * 
	 * @param boolean
	 *            flag
	 */
	public void setAutoKeyGeneration(boolean flag) {

		m_id = flag;
	}

	/**
	 * Gets whether or not a primary key will be generated automatically
	 * 
	 * @return true if a primary key column will be generated, false otherwise
	 */
	public boolean getAutoKeyGeneration() {

		return m_id;
	}

	/** Returns the tip text fo this property */
	public String autoKeyGenerationTipText() {

		return "If set to true, a primary key column is generated automatically (containing the row number as INTEGER). The name of the key is read from DatabaseUtils (idColumn)"
				+ " This primary key can be used for incremental loading (requires an unique key). This primary key will not be loaded as an attribute.";
	}

	/**
	 * En/Dis-ables that the relation name is used for the name of the table
	 * (default enabled).
	 * 
	 * @param boolean
	 *            flag
	 */
	public void setRelationForTableName(boolean flag) {

		m_tabName = flag;
	}

	/**
	 * Gets whether or not the relation name is used as name of the table
	 * 
	 * @return true if the relation name is used as the name of the table, false
	 *         otherwise
	 */
	public boolean getRelationForTableName() {

		return m_tabName;
	}

	/** Returns the tip text fo this property */
	public String relationForTableNameTipText() {

		return "If set to true, the relation name will be used as name for the database table. Otherwise the user has to provide a table name.";
	}

	/**
	 * Sets the database URL
	 * 
	 * @param the
	 *            URL
	 */
	public void setUrl(String url) {

		databaseConnection.setDatabaseURL(url);

	}

	/**
	 * Gets the database URL
	 * 
	 * @return the URL
	 */
	public String getUrl() {

		return databaseConnection.getDatabaseURL();
	}

	/** Returns the tip text fo this property */
	public String urlTipText() {

		return "The URL of the database";
	}

	/**
	 * Sets the database user
	 * 
	 * @param the
	 *            user name
	 */
	public void setUser(String user) {

		databaseConnection.setUsername(user);
	}

	/**
	 * Gets the database user
	 * 
	 * @return the user name
	 */
	public String getUser() {

		return databaseConnection.getUsername();
	}

	/** Returns the tip text fo this property */
	public String userTipText() {

		return "The user name for the database";
	}

	/**
	 * Sets the database password
	 * 
	 * @param the
	 *            password
	 */
	public void setPassword(String password) {

		databaseConnection.setPassword(password);
	}

	/** Returns the tip text fo this property */
	public String passwordTipText() {

		return "The database password";
	}

	/**
	 * Sets the database url
	 * 
	 * @param url
	 *            the database url
	 * @param userName
	 *            the user name
	 * @param password
	 *            the password
	 */
	public void setDestination(String url, String userName, String password) {

		try {
			databaseConnection = new DatabaseConnection();
			databaseConnection.setDatabaseURL(url);
			databaseConnection.setUsername(userName);
			databaseConnection.setPassword(password);
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Sets the database url
	 * 
	 * @param url
	 *            the database url
	 */
	public void setDestination(String url) {

		try {
			databaseConnection = new DatabaseConnection();
			databaseConnection.setDatabaseURL(url);
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/** Sets the database url using the DatabaseUtils file */
	public void setDestination() {

		try {
			databaseConnection = new DatabaseConnection();
		} catch (Exception ex) {
			printException(ex);
		}
	}
	
	/** Sets the database url using the given connection */
	public void setDestination(Connection connection) {

		try {
			databaseConnection = new DatabaseConnection();
			databaseConnection.setConnection(connection);
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Opens a connection to the database
	 * 
	 */
	public void connectToDatabase() {

		try {
			if (!databaseConnection.isConnected())
				databaseConnection.connectToDatabase();
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Writes the structure (header information) to a database by creating a new
	 * table.
	 */
	private void writeStructure() throws Exception {

		StringBuffer query = new StringBuffer();
		Instances structure = getInstances();
		query.append("CREATE TABLE ");
		query.append(m_tableName);
		if (structure.numAttributes() == 0)
			throw new Exception("Instances have no attribute.");
		query.append(" ( ");
		if (m_id) {
			if (databaseConnection.getUpperCase())
				m_idColumn = m_idColumn.toUpperCase();
			query.append(m_idColumn);
			query.append(" ");
			query.append(m_createInt);
			query.append(" PRIMARY KEY,");
		}
		for (int i = 0; i < structure.numAttributes(); i++) {
			Attribute att = structure.attribute(i);
			String attName = att.name();
			attName = attName.replaceAll("[^\\w]", "_");
			if (databaseConnection.getUpperCase())
				query.append(attName.toUpperCase());
			else
				query.append(attName);
			if (att.isDate())
				query.append(" DATE");
			else {
				if (att.isNumeric())
					query.append(" " + m_createDouble);
				else
					query.append(" " + m_createText);
			}
			if (i != structure.numAttributes() - 1)
				query.append(", ");
		}
		
		if(versioning) {
			query.append(", ");
			if (databaseConnection.getUpperCase())
				query.append(versionColumnName.toUpperCase());
			else
				query.append(versionColumnName);
			query.append(" " + m_createText);
		}
		
		query.append(" )");
		
		System.out.println(query);

		databaseConnection.execute(query.toString());
		if (!databaseConnection.tableExists(m_tableName)) {
			throw new IOException("Table cannot be built.");
		}
	}

	private void prepareStructure() throws Exception {
		Instances structure = getInstances();
		if (m_tabName || m_tableName.equals(""))
			m_tableName = structure.relationName();
		if (databaseConnection.getUpperCase()) {
			m_tableName = m_tableName.toUpperCase();
			m_createInt = m_createInt.toUpperCase();
			m_createDouble = m_createDouble.toUpperCase();
			m_createText = m_createText.toUpperCase();
		}
		m_tableName = m_tableName.replaceAll("[^\\w]", "_");

		switch (dbWriteMode) {
		case DROP_INSERT:
			System.out.println("Write mode: DROP_INSERT");
			if (databaseConnection.tableExists(m_tableName)) {
				databaseConnection.execute("DROP TABLE " + m_tableName);
				if (databaseConnection.tableExists(m_tableName)) {
					System.err.println("Table cannot be dropped.");
					throw new Exception();
				}
			}
			writeStructure();
			break;
		case DELETE_INSERT:
			System.out.println("Write mode: DELETE_INSERT");
			if (!databaseConnection.tableExists(m_tableName)) {
				System.out.println("Creating table " + m_tableName + " ...");
				writeStructure();
				break;
			}

			System.out.println("Deleating table " + m_tableName + " ...");
			databaseConnection.execute("DELETE FROM " + m_tableName);
			if (!databaseConnection.isTableEmpty(m_tableName)) {
				System.err.println("Table cannot be delated.");
				throw new Exception();
			}
			System.out.println("Table " + m_tableName + " deleated successfully");
			break;
		case INSERT:
			System.out.println("Write mode: INSERT");
			if (!databaseConnection.tableExists(m_tableName))
				writeStructure();
			break;
		case UPDATE_INSERT:
			System.out.println("Write mode: UPDATE_INSERT");
			if (!databaseConnection.tableExists(m_tableName))
				writeStructure();
			break;
			
		default:
			System.out.println("Write mode: DEFAULT (DELETE_INSERT)");
			if (!databaseConnection.tableExists(m_tableName))
				writeStructure();
			break;
		}
	}
	
	private String columnNamesStr = "";
	private String[] columnNames = null;
	
	private void setColumnNamesStr() throws Exception {
		Instances structure = getInstances();
		
		if (structure.numAttributes() == 0)
			throw new Exception("Instances have no attribute.");		
			
		int j = 0;
		
		if (m_id) {
			columnNames = new String[structure.numAttributes()+1];
			if (databaseConnection.getUpperCase())
				m_idColumn = m_idColumn.toUpperCase();
			columnNames[j++] = m_idColumn;			
		}
		else {
			columnNames = new String[structure.numAttributes()];
		}
		
		for (int i = 0; i < structure.numAttributes(); i++) {
			Attribute att = structure.attribute(i);
			String attName = att.name();
			attName = attName.replaceAll("[^\\w]", "_");
			if (databaseConnection.getUpperCase())
				columnNames[j++] = attName.toUpperCase();
			else
				columnNames[j++] = attName;
			
		}		
		
		columnNamesStr += "(";
		for(int i = 0; i < columnNames.length; i++) {
			if(i != 0) columnNamesStr += ", ";
			columnNamesStr += columnNames[i];
		}
		if(versioning) columnNamesStr += ", " + versionColumnName;
		columnNamesStr += ")";
	}
	
	private void writeInstance(Instance inst) throws Exception {

		StringBuffer insert = new StringBuffer();
		insert.append("INSERT INTO ");
		insert.append(m_tableName);
		insert.append(" " + columnNamesStr );
		insert.append(" VALUES ( ");
			
		if (m_id) {
			insert.append(m_count);
			insert.append(", ");
			m_count++;
		}
		
		for (int j = 0; j < inst.numAttributes(); j++) {
			if (inst.isMissing(j))
				insert.append("NULL");
			else {
				if ((inst.attribute(j)).isNumeric())
					insert.append(inst.value(j));
				else {
					String stringInsert = "'" + inst.stringValue(j) + "'";
					stringInsert = stringInsert.replaceAll("''", "'");
					insert.append(stringInsert);
				}
			}
			if (j != inst.numAttributes() - 1)
				insert.append(", ");
		}
		
		if(versioning)
			insert.append(", '" + version + "'");
		
		insert.append(" )");
		System.out.println(" - " + insert.toString());
		databaseConnection.fastExecute(insert.toString());
		/*
		if (databaseConnection.execute(insert.toString()) == false
				&& databaseConnection.getUpdateCount() < 1) {
			throw new IOException("Tuple cannot be inserted.");
		}
		*/
	}
	
	private void updateInstance(Instance inst) throws Exception {

		StringBuffer select = new StringBuffer();
		select.append("SELECT FROM ");
		select.append(m_tableName);
		select.append(" WHERE ");
		for(int i = 0; i < columnNames.length; i++) {
			if(i!=0) select.append(" AND");
			select.append(" " + columnNames[i]);
			select.append(" = ");
			if ((inst.attribute(i)).isNumeric())
				select.append(inst.value(i));
			else {
				String stringInsert = "'" + inst.stringValue(i) + "'";
				stringInsert = stringInsert.replaceAll("''", "'");
				select.append(stringInsert);
			}
		}
		if(versioning){
			select.append(" AND " + versionColumnName + " = " + version);
		}
		
		System.out.println(select.toString());
		
		if(!databaseConnection.fastExecute(select.toString())) {
			writeInstance(inst);
			System.out.println("-----------> WRITE");
			return;
		}
		
		System.out.println("-----------> UPDATE");
		
		StringBuffer update = new StringBuffer();
		update.append("UPDATE ");
		update.append(m_tableName);
		update.append(" SET ");
		update.append(" " + columnNamesStr );
		update.append(" VALUES ( ");
			
		
		
	
	}

	/**
	 * Saves an instances incrementally. Structure has to be set by using the
	 * setStructure() method or setInstances() method. When a structure is set,
	 * a table is created.
	 * 
	 * @param inst
	 *            the instance to save
	 * @throws IOException
	 *             throws IOEXception.
	 */
	public void writeIncremental(Instance inst) throws IOException {

		int writeMode = getWriteMode();
		Instances structure = getInstances();

		if (databaseConnection == null)
			throw new IOException("No database has been set up.");
		if (getRetrieval() == BATCH)
			throw new IOException(
					"Batch and incremental saving cannot be mixed.");
		setRetrieval(INCREMENTAL);

		try {
			if (!databaseConnection.isConnected())
				connectToDatabase();
			if (writeMode == WAIT) {
				if (structure == null) {
					setWriteMode(CANCEL);
					if (inst != null)
						throw new Exception(
								"Structure(Header Information) has to be set in advance");
				} else
					setWriteMode(STRUCTURE_READY);
				writeMode = getWriteMode();
			}
			if (writeMode == CANCEL) {
				cancel();
			}
			if (writeMode == STRUCTURE_READY) {
				setWriteMode(WRITE);
				writeStructure();
				writeMode = getWriteMode();
			}
			if (writeMode == WRITE) {
				if (structure == null)
					throw new IOException("No instances information available.");
				if (inst != null) {
					// write instance
					writeInstance(inst);
				} else {
					// close
					databaseConnection.disconnectFromDatabase();
					resetStructure();
					m_count = 1;
				}
			}
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Writes a Batch of instances
	 * 
	 * @throws IOException
	 *             throws IOException
	 */
	public void writeBatch() throws IOException {

		Instances instances = getInstances();
		try {
			setColumnNamesStr();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if (instances == null)
			throw new IOException("No instances to save");
		if (getRetrieval() == INCREMENTAL)
			throw new IOException(
					"Batch and incremental saving cannot be mixed.");
		if (databaseConnection == null)
			throw new IOException("No database has been set up.");
		setRetrieval(BATCH);
		try {
			if (!databaseConnection.isConnected())
				connectToDatabase();
			setWriteMode(WRITE);
			prepareStructure();
			System.out.println("Writing instances to db ...");
			for (int i = 0; i < instances.numInstances(); i++) {
				System.out.println("Inserting instance into db (" + (i+1)+ "/" + instances.numInstances() + ")");
				writeInstance(instances.instance(i));
			}
			databaseConnection.disconnectFromDatabase();
			setWriteMode(WAIT);
			resetStructure();
			m_count = 1;
		} catch (Exception ex) {
			printException(ex);
		}
	}

	/**
	 * Prints an exception
	 * 
	 * @param ex
	 *            the exception to print
	 */
	private void printException(Exception ex) {

		System.out.println("\n--- Exception caught ---\n");
		while (ex != null) {
			System.out.println("Message:   " + ex.getMessage());
			if (ex instanceof SQLException) {
				System.out.println("SQLState:  "
						+ ((SQLException) ex).getSQLState());
				System.out.println("ErrorCode: "
						+ ((SQLException) ex).getErrorCode());
				ex = ((SQLException) ex).getNextException();
			} else
				ex = null;
			System.out.println("");
		}

	}

	/**
	 * Gets the setting
	 * 
	 * @return the current setting
	 */
	public String[] getOptions() {
		Vector options = new Vector();

		if ((m_tableName != null) && (m_tableName.length() != 0)) {
			options.add("-T");
			options.add(m_tableName);
		}

		if (m_id)
			options.add("-P");

		if ((m_inputFile != null) && (m_inputFile.length() != 0)) {
			options.add("-i");
			options.add(m_inputFile);
		}

		return (String[]) options.toArray(new String[options.size()]);
	}

	/**
	 * Lists the available options
	 * 
	 * @return an enumeration of the available options
	 */
	public java.util.Enumeration listOptions() {

		FastVector newVector = new FastVector(3);

		newVector.addElement(new Option(
				"\tThe name of the table (default: the relation name).", "T",
				1, "-T <table name>"));
		newVector
				.addElement(new Option(
						"\tAdd an ID column as primary key. The name is specified in the DatabaseUtils file. The DatabaseLoader won't load this column.",
						"P", 0, "-P"));
		newVector
				.addElement(new Option(
						"\tInput file in arff format that should be saved in database.",
						"i", 1, "-i<input file name>"));

		return newVector.elements();
	}

	/**
	 * Sets the options.
	 * 
	 * Available options are: -T <table name> <br>
	 * Sets the name of teh table (default: the name of the relation)
	 * <p>
	 * 
	 * -P <br>
	 * If set, a primary key column is generated automatically (containing the
	 * row number as INTEGER)
	 * <p>
	 * 
	 * -i <input-file> <br>
	 * Specifies an ARFF file as input (for command line use)
	 * <p>
	 * 
	 * @param options
	 *            the options
	 * @throws Exception
	 *             if options cannot be set
	 */
	public void setOptions(String[] options) throws Exception {

		String tableString, inputString;
		tableString = Utils.getOption('T', options);
		inputString = Utils.getOption('i', options);
		resetOptions();
		if (tableString.length() != 0) {
			m_tableName = tableString;
			m_tabName = false;
		}
		m_id = Utils.getFlag('P', options);
		if (inputString.length() != 0) {
			try {
				m_inputFile = inputString;
				ArffLoader al = new ArffLoader();
				File inputFile = new File(inputString);
				al.setSource(inputFile);
				setInstances(al.getDataSet());
				// System.out.println(getInstances());
				if (tableString.length() == 0)
					m_tableName = getInstances().relationName();
			} catch (Exception ex) {
				printException(ex);
				ex.printStackTrace();
			}
		}
	}

	/**
	 * Main method.
	 * 
	 * @param options
	 *            should contain the options of a Saver.
	 */
	public static void main(String[] options) {

		StringBuffer text = new StringBuffer();
		text.append("\n\nDatabaseSaver options:\n");
		try {
			DatabaseSaver asv = new DatabaseSaver();
			try {
				Enumeration enumi = asv.listOptions();
				while (enumi.hasMoreElements()) {
					Option option = (Option) enumi.nextElement();
					text.append(option.synopsis() + '\n');
					text.append(option.description() + '\n');
				}
				asv.setOptions(options);
				asv.setDestination();
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			// incremental

			/*
			 * asv.setRetrieval(INCREMENTAL); Instances instances =
			 * asv.getInstances(); asv.setStructure(instances); for(int i = 0; i <
			 * instances.numInstances(); i++){ //last instance is null and
			 * finishes incremental saving
			 * asv.writeIncremental(instances.instance(i)); }
			 * asv.writeIncremental(null);
			 */

			// batch
			asv.writeBatch();
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println(text);
		}

	}

	public int getDbWriteMode() {
		return dbWriteMode;
	}

	public void setDbWriteMode(int dbWriteMode) {
		this.dbWriteMode = dbWriteMode;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getVersionColumnName() {
		return versionColumnName;
	}

	public void setVersionColumnName(String versionColumnName) {
		this.versionColumnName = versionColumnName;
	}

	public boolean isVersioning() {
		return versioning;
	}

	public void setVersioning(boolean versioning) {
		this.versioning = versioning;
	}

}
