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
package it.eng.spagobi.meta.compiler;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


/**
 * @author Angelo Bernabei (angelo.bernabei@eng.it)
 * This class is used by SpagoBI Meta to compile generated java class and to create JAR file.
 */
public class DataMartGenerator {

	private String srcDir=null;
	private String binDir=null;
	private String outDir=null;
	private String libDir=null;
	private String srcPackage=null;
	private String dataMartFileName="datamart.jar";
	private String classPath="";


	/**
	 * necessary libraries to compile Java Classes
	 */
	private String[] libraryLink={"org.eclipse.jpt.eclipselink.ui_1.3.0.v201004280001.jar",
								  "org.eclipse.jpt.eclipselink.branding_2.3.2.v201008242310.jar",
								  "org.eclipse.jpt.eclipselink.core.ddlgen_1.0.300.v201003290000.jar",
								  "org.eclipse.jpt.eclipselink.core_1.3.1.v201007142310.jar",
								  "org.eclipse.jpt.eclipselink.jaxb.core.schemagen_1.0.0.v201005120000.jar",
								  "javax.persistence_2.0.0.v201002051058.jar"};
	

	
	public String getDataMartFileName() {
		return dataMartFileName;
	}

	public void setDataMartFileName(String dataMartFileName) {
		this.dataMartFileName = dataMartFileName;
	}
	
	/**
	 * Costructor
	 * @param srcDir Source directory
	 * @param binDir Class Files directory
	 * @param libDir Libraries directory
	 * @param outDir Directory where you can find the JAR
	 * @param srcPackage the package of the source code
	 */
	public DataMartGenerator(String srcDir,String binDir,String libDir,String outDir,String srcPackage){
		this.srcDir=srcDir;
		this.binDir=binDir;
		this.libDir=libDir;
		this.outDir=outDir;
		this.srcPackage=srcPackage;
		setCP();
	}
	
	private void setCP(){
		classPath=".";
		for (int i=0;i<libraryLink.length;i++){
			classPath=classPath+";"+libDir+libraryLink[i];
		}

	}
	
	/**
	 * Compile all the generated java classes
	 */
	public void compile(){

		String command=srcDir+" -classpath " +classPath+ " -d "+binDir+" -source 1.5";
		
		org.eclipse.jdt.core.compiler.batch.BatchCompiler.compile(command, new PrintWriter(System.out), new PrintWriter(System.err), null);
		
	}
	
	/**
	 * This method Creates the DataMart
	 */
	public void jar(){
		try{
			File jar=new File (outDir,getDataMartFileName());
			if (jar.exists()) jar.delete();
			FileOutputStream fStream=new FileOutputStream(jar);
			java.util.zip.ZipOutputStream oStream=new java.util.zip.ZipOutputStream(fStream);

			compressFolder(binDir,oStream);
			
			oStream.flush();
			oStream.close();
		
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
	
	private void compressFolder(String pathFolder, ZipOutputStream out)  {

		File folder = new File(pathFolder);
		String[] entries = folder.list();
		byte[] buffer = new byte[4096];
		int bytes_read;
		FileInputStream in = null;
		try {
			for (int i = 0; i < entries.length; i++) {
				File f = new File(folder, entries[i]);
				if (f.isDirectory()) {
					compressFolder(pathFolder + "/" + f.getName(), out);
				} else {
					in = new FileInputStream(f);
					String completeFileName = pathFolder + "/" + f.getName();
					String relativeFileName = f.getName();
					if (completeFileName.lastIndexOf(outDir) != -1) {
						int index = completeFileName.lastIndexOf(outDir);
						int len = outDir.length();
						relativeFileName = completeFileName.substring(index + len + 1);
					}
					ZipEntry entry = new ZipEntry(srcPackage+"/"+relativeFileName);
					out.putNextEntry(entry);
					while ((bytes_read = in.read(buffer)) != -1)
						out.write(buffer, 0, bytes_read);
					in.close();
				}
			}
		} catch (Exception e) {
				e.printStackTrace();
		} finally {
			try {
				if (in != null) {
					in.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		
		}
	}
	

}
