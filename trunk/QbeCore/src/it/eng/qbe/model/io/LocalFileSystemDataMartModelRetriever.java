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
package it.eng.qbe.model.io;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.utility.FileUtils;
import it.eng.spago.configuration.ConfigSingleton;

import java.io.File;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author Andrea Zoppello
 * 
 * An implementation of IDataMartModelRetriever that retrieve datamart files
 * from File System
 *
 */
public class LocalFileSystemDataMartModelRetriever implements
		IDataMartModelRetriever {


	
	public File getJarFile(File contextDir, String dataMartPath) {
		
		String qbeDataMartDir = FileUtils.getQbeDataMartDir(null);
		
		String completeFileName = qbeDataMartDir + System.getProperty("file.separator") + dataMartPath + System.getProperty("file.separator") + "datamart.jar";
		File f = new File(completeFileName);
		if (f.exists())
			return f;
		else
			return null;
	}
	
	public File getJarFile(String dataMartPath) {		
		return getJarFile((File)null, dataMartPath);
	}

	
	public File getJarFile(File contextDir, String dataMartPath, String dialect) {
		String qbeDataMartDir = FileUtils.getQbeDataMartDir(contextDir);
		
		String completeFileName = qbeDataMartDir  + System.getProperty("file.separator") + dataMartPath + System.getProperty("file.separator") + "datamart-"+dialect+".jar";
		
		File f = new File(completeFileName);
		if (f.exists())
			return f;
		else
			return getJarFile(dataMartPath);
	}
	
	public File getJarFile(String dataMartPath, String dialect) {
		return getJarFile((File)null, dataMartPath, dialect);
	}
	
	
	public static List getAllDataMartPath(File contextDir) {
		String qbeDataMartDir = FileUtils.getQbeDataMartDir(contextDir);
		
		
		File f = new File(qbeDataMartDir);
		
		List dataMartPaths = new ArrayList();

		String[] childrens = f.list();
		if(childrens != null) {
			for(int i = 0; i < childrens.length; i++) {
				File children = new File(f, childrens[i]);
				if(children.exists() && children.isDirectory())
					dataMartPaths.add(childrens[i]);
			}
		}
	
		
		/*
		if (childrens != null)
			dataMartPaths = Arrays.asList(childrens);
		*/
		return dataMartPaths;
	}

	public List getViewJarFiles(File contextDir, String dataMartPath, String dialect) {
		List files = new ArrayList();

		String qbeDataMartDir = FileUtils.getQbeDataMartDir(contextDir);
		//qbeDataMartDir = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");
		
		
		String directory = qbeDataMartDir + System.getProperty("file.separator") + dataMartPath + System.getProperty("file.separator");
		File dir = new File(directory);
//	   	 It is also possible to filter the list of returned files.
	       // This example does not return any files that start with `.'.
	       FilenameFilter filter = new FilenameFilter() {
	           public boolean accept(File dir, String name) {
	               return name.endsWith(".jar") && !name.equalsIgnoreCase("datamart.jar");
	           }
	       };
	    
	       String[] children = dir.list(filter);
           if (children == null) {
               // Either dir does not exist or is not a directory
           } else {
               for (int i=0; i<children.length; i++) {
                   // Get filename of file or directory
                   String filename = children[i];
                   files.add(new File(dir, filename));
               }
           }
          return files;
	}
	
	public List getViewJarFiles(String dataMartPath, String dialect) {
		return getViewJarFiles((File)null, dataMartPath, dialect);
	}

	

}
