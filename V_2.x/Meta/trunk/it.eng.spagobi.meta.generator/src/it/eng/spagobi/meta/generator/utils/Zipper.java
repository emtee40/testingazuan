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
package it.eng.spagobi.meta.generator.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.jar.JarOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class Zipper {
	
	private static Logger logger = LoggerFactory.getLogger(Zipper.class);
	
	/**
	 * This method compress all the content of targetDir into jar file outFile. If outFile alredy exist it
	 * will be overwritten.
	 * 
	 * @params targetDir the folder that must be compressed into a jar
	 * @params outFile the output jar file generated compressing targetDir content
	 */
	public void compressToJar(File targetDir, File outFile){
		
		logger.trace("IN");
		
		try {
			Assert.assertNotNull("Input parametr [targetDir] cannot be null", targetDir);
			Assert.assertTrue("Input parametr [targetDir] must be a valid folder", targetDir.exists() && targetDir.isDirectory());
			Assert.assertNotNull("Input parametr [outFile] cannot be null", outFile);
			
			if(!outFile.getParentFile().exists()) {
				logger.warn("Output folder [{}] does not exist. It will be created", outFile.getParentFile().getAbsolutePath());
				outFile.getParentFile().mkdir();
			}
			
			if (outFile.exists()) {
				logger.warn("A mapping jar file named [{}] alredy exists. It will be overwritten", outFile.getAbsoluteFile());
				outFile.delete();
			}
			
			FileOutputStream fileOutputStream = new FileOutputStream(outFile);
			JarOutputStream zipOutputStream = new JarOutputStream(fileOutputStream);
			//zipOutputStream.setMethod(ZipOutputStream.STORED);
			

			compressFolder(targetDir, targetDir, zipOutputStream);
			
			zipOutputStream.flush();
			zipOutputStream.close();
			
			logger.info("Mapping jar created succesfully: [{}]", true);
		
		} catch(Exception e) {
			throw new RuntimeException("An error occurred while compressing folder [" + targetDir +"] into jar file [" + outFile + "]", e);
		} finally {
			logger.trace("OUT");
		}

	}
	
	private void compressFolder(File rootTargetDir, File targetDir, ZipOutputStream out)  {

		String[] entries;
		byte[] buffer = new byte[4096];
		int bytes_read;
		FileInputStream in = null;
		File fileToCompress = null;
		
		logger.trace("IN");
		
		try {
			entries = targetDir.list();

			for (int i = 0; i < entries.length; i++) {
				fileToCompress = new File(targetDir, entries[i]);
				logger.debug("Compress file [{}]", fileToCompress);
				if (fileToCompress.isDirectory()) {
					compressFolder(rootTargetDir, fileToCompress, out);
				} else {
					in = new FileInputStream(fileToCompress);
					String fileToCompressAbsolutePath = fileToCompress.getAbsolutePath();
					logger.debug(fileToCompressAbsolutePath);
					String binDirAbsolutePath = rootTargetDir.getAbsolutePath();
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
			throw new RuntimeException("An error occurred while compressing sub folder [" + targetDir +"]", e);
		} finally {
			try {
				if (in != null) {
					in.close();
				}
			} catch (Exception e) {
				throw new RuntimeException("An error occurred while closing file [" + fileToCompress  + "]",e);
			}
			logger.trace("OUT");
		}
	}
}
