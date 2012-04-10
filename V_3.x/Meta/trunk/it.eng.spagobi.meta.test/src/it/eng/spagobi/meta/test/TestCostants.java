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
package it.eng.spagobi.meta.test;

import java.io.File;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class TestCostants {
	
	public static File workspaceFolder = new File("D:/Documenti/Sviluppo/workspaces/helios/metadata");
	public static File outputFolder = new File("D:/Documenti/Sviluppo/workspaces/unit-test");
	
	public static String MYSQL_DRIVER = "com.mysql.jdbc.Driver";
	public static String MYSQL_URL = "jdbc:mysql://localhost:3306/meta_test";
	public static String MYSQL_USER = "root";
	public static String MYSQL_PWD = "mysql";
	public static String MYSQL_DEFAULT_CATALOGUE = null; //"foodmart";		
	public static String MYSQL_DEFAULT_SCHEMA = null;	
	
	public static String POSTGRES_DRIVER = "org.postgresql.Driver";
	public static String POSTGRES_URL = "jdbc:postgresql://localhost:5432/geodwh";
	public static String POSTGRES_USER = "geodwh";
	public static String POSTGRES_PWD = "geodwh";
	public static String POSTGRES_DEFAULT_CATALOGUE = null;	
	public static String POSTGRES_DEFAULT_SCHEMA = "public";	
	
	public static String ORACLE_DRIVER = "oracle.jdbc.OracleDriver";
	public static String ORACLE_URL = "jdbc:oracle:thin:@172.27.1.90:1521:REPO";
	public static String ORACLE_USER = "spagobi";
	public static String ORACLE_PWD = "bispago";	
	public static String ORACLE_DEFAULT_CATALOGUE = null;	
	public static String ORACLE_DEFAULT_SCHEMA = "SPAGOBI";	
	
	public enum DatabaseType { MYSQL, POSTGRES, ORACLE };
}
