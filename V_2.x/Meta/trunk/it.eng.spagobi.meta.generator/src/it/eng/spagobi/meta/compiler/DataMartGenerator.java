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

import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * This class is used by SpagoBI Meta to compile generated java class and to create JAR file.
 * 
 * @authors 
 * Angelo Bernabei (angelo.bernabei@eng.it)
 * Andrea Gioia (andrea.gioia@eng.it)
 * 
 */
public class DataMartGenerator {

	private File srcDir;
	private File binDir;
	private File outDir;
	private File libDir;
	
	private String srcPackage;
	private String mappingFileName;
	private String classPath;

	/**
	 * necessary libraries to compile Java Classes
	 */
	private String[] libraryLink={"org.eclipse.persistence.core_2.1.1.v20100817-r8050.jar",
							  	  "javax.persistence_2.0.1.v201006031150.jar"};
	
	
	public static final String DEFAULT_SRC_DIR = "src";
	public static final String DEFAULT_BIN_DIR = "build";
	public static final String DEFAULT_OUT_DIR = "dist";
	public static final String DEFAULT_LIB_DIR = "libs";
	
	public static final String DEFAULT_MAPPING_FILE = "datamart.jar";
	
	private static Logger logger = LoggerFactory.getLogger(DataMartGenerator.class);
	
	
	/**
	 * Costructor
	 * 
	 * @param srcDir Source directory
	 * @param binDir Class files directory
	 * @param libDir Libraries directory
	 * @param outDir Directory where you can find the JAR
	 * @param srcPackage the package of the source code
	 */
	public DataMartGenerator(File srcDir, File binDir, File libDir, File outDir, String srcPackage){
		this.srcDir=srcDir;
		logger.debug("src dir set to [{}]", this.srcDir);
		
		this.binDir= binDir;
		logger.debug("bin dir set to [{}]", this.binDir);
	    
		this.libDir = libDir;
		logger.debug("lib dir set to [{}]", this.libDir);
		
		this.outDir = outDir;
		logger.debug("out dir set to [{}]", this.outDir);
		
		this.srcPackage = srcPackage;
		logger.debug("srcpkg dir set to [{}]", this.srcPackage);
		
		mappingFileName = DEFAULT_MAPPING_FILE;
	}
	
	public DataMartGenerator(File rootDir, String srcPackage) {
		this(new File(rootDir, DEFAULT_SRC_DIR),
			 new File(rootDir, DEFAULT_BIN_DIR),
			 new File(rootDir, DEFAULT_LIB_DIR),
			 new File(rootDir, DEFAULT_OUT_DIR),
			 srcPackage);
	}
	
	private void initClasspath(){
		if(libraryLink != null && libraryLink.length > 0) {
			Assert.assertTrue("Impossible to locate lib dir [" + libDir + "]", libDir.exists() && libDir.isDirectory());
		}
		
		classPath = ".";
		for (int i = 0; i < libraryLink.length; i++){
			File libFile = new File(libDir, libraryLink[i]);
			//Assert.assertTrue("Impossible to locate lib [" + libFile + "]", libFile.exists() && libFile.isFile());
			classPath = classPath + ";" + libFile;
		}
		
		logger.debug("Classpath is equal to [{}]", classPath);
	}
	
	/**
	 * Compile all the generated java classes
	 * @return boolean : true if the compiler has worked well.
	 */
	public boolean compile(){
		boolean result;
		
		logger.trace("IN");
		
		initClasspath();
		
		String command=srcDir + " -classpath " + classPath + " -d " + binDir + " -source 1.5";
		logger.info("Compile command is equal to [{}]", command);
		
		PrintWriter error=new PrintWriter(System.err);
		PrintWriter out=new PrintWriter(System.out);
		result = org.eclipse.jdt.core.compiler.batch.BatchCompiler.compile(command, out,error , null);
		
		logger.info("Mapping files compiled succesfully: [{}]", result);
		
		logger.trace("OUT");
		
		return result;
	}
	
	/**
	 * This method Creates the DataMart
	 */
	public void jar(){
		
		logger.trace("IN");
		
		try{
			File jarFileDir =outDir;
			jarFileDir.mkdir();
			File jarFile = new File (outDir, getMappingFileName());
			logger.debug("Mapping jar file will be saved in [{}]", jarFile);
			
			if (jarFile.exists()) {
				logger.warn("A mapping jar file alredy exists. It will be overwritten");
				jarFile.delete();
			}
			
			FileOutputStream fileOutputStream = new FileOutputStream(jarFile);
			java.util.zip.ZipOutputStream zipOutputStream = new java.util.zip.ZipOutputStream(fileOutputStream);

			compressFolder(binDir, zipOutputStream);
			
			zipOutputStream.flush();
			zipOutputStream.close();
			
			logger.info("Mapping jar created succesfully: [{}]", true);
		
		} catch(Exception e) {
			logger.error("Error...during JAR creation",e);
		} finally {
			logger.trace("OUT");
		}
		
		
	}
	
	private void compressFolder(File folder, ZipOutputStream out)  {

		
		String[] entries;
		byte[] buffer = new byte[4096];
		int bytes_read;
		FileInputStream in = null;
		
		logger.trace("IN");
		
		try {
			entries = folder.list();

			for (int i = 0; i < entries.length; i++) {
				File fileToCompress = new File(folder, entries[i]);
				logger.debug("Compress file [{}]", fileToCompress);
				if (fileToCompress.isDirectory()) {
					compressFolder(fileToCompress, out);
				} else {
					in = new FileInputStream(fileToCompress);
					String fileToCompressAbsolutePath = fileToCompress.getAbsolutePath();
					logger.debug(fileToCompressAbsolutePath);
					String binDirAbsolutePath = binDir.getAbsolutePath();
					logger.debug(binDirAbsolutePath);
					
					String relativeFileName = fileToCompress.getName();
					if (fileToCompressAbsolutePath.lastIndexOf(binDirAbsolutePath) != -1) {
						int index = fileToCompressAbsolutePath.lastIndexOf(binDirAbsolutePath);
						int len = binDirAbsolutePath.length();
						relativeFileName = fileToCompressAbsolutePath.substring(index + len + 1);
					}
					logger.debug(relativeFileName);
					
					ZipEntry entry = new ZipEntry(relativeFileName);
					out.putNextEntry(entry);
					while ((bytes_read = in.read(buffer)) != -1) {
						out.write(buffer, 0, bytes_read);
					}
					in.close();
					logger.debug("File compressed into [{}]", entry);
				}
			}
		} catch (Exception e) {
			logger.error("Error...during File Compression",e);
		} finally {
			try {
				if (in != null) {
					in.close();
				}
			} catch (Exception e) {
				logger.error("Error...during closing File",e);
			}
			logger.trace("OUT");
		}
	}

	
	
	// ==========================================================================================
	// ACCESSOR METHODS
	// ==========================================================================================
	
	public File getSrcDir() {
		return srcDir;
	}

	public void setSrcDir(File srcDir) {
		this.srcDir = srcDir;
	}

	public File getBinDir() {
		return binDir;
	}

	public void setBinDir(File binDir) {
		this.binDir = binDir;
	}

	public File getOutDir() {
		return outDir;
	}

	public void setOutDir(File outDir) {
		this.outDir = outDir;
	}

	public File getLibDir() {
		return libDir;
	}

	public void setLibDir(File libDir) {
		this.libDir = libDir.getAbsoluteFile();
	}

	public String getMappingFileName() {
		return mappingFileName;
	}

	public void setMappingFileName(String mappingFileName) {
		this.mappingFileName = mappingFileName;
	}

	public String[] getLibraryLink() {
		return libraryLink;
	}

	public void setLibraryLink(String[] libraryLink) {
		this.libraryLink = libraryLink;
	}
	
	
	
}
