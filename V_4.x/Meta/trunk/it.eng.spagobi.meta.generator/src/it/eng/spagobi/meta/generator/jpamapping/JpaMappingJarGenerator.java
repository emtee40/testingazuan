/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.generator.jpamapping;

import it.eng.spagobi.meta.generator.GenerationException;
import it.eng.spagobi.meta.generator.utils.Zipper;
import it.eng.spagobi.meta.model.ModelObject;

import java.io.File;

import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class JpaMappingJarGenerator extends JpaMappingClassesGenerator {

	private File distDir;
	private String jarFileName;

	public static final String DEFAULT_DIST_DIR = "dist";
	public static final String DEFAULT_JAR_FILE_NAME = "datamart.jar";

	private static Logger logger = LoggerFactory.getLogger(JpaMappingJarGenerator.class);

	public JpaMappingJarGenerator() {
		super();
	}
	
	@Override
	public void generate(ModelObject o, String outputDir)  {
		logger.trace("IN");

		try {
			//The output dir is the model directory plus the business model name
			outputDir = outputDir+File.separator+o.getName();
			super.generate(o, outputDir);

			distDir = (distDir == null)? new File(baseOutputDir, DEFAULT_DIST_DIR): distDir;
			jarFileName = (jarFileName == null)? DEFAULT_JAR_FILE_NAME : jarFileName;

			Zipper zipper = new Zipper();
			zipper.compressToJar(getBinDir(), getJarFile());

		} catch(Throwable t) {
			logger.error("An error occur while generating JPA jar", t);
			throw new GenerationException("An error occur while generating JPA jar", t);
		} finally {		
			logger.trace("OUT");
		}
	}


@Override
public void hideTechnicalResources() {
	logger.debug("IN");
	super.hideTechnicalResources();

	File baseOutputDir = getBaseOutputDir();
	File distDir = getDistDir();
	IWorkspace workspace = ResourcesPlugin.getWorkspace();
	try{
		if(baseOutputDir != null && baseOutputDir.exists()){
			IProject proj = workspace.getRoot().getProject(baseOutputDir.getParentFile().getParentFile().getName());
			IFolder iFolder = proj.getFolder(baseOutputDir.getParentFile().getName()+"\\"+baseOutputDir.getName()) ;
			if(iFolder.exists()){
				iFolder.setHidden(true);
				iFolder.setTeamPrivateMember(true);
				iFolder.setDerived(true, null);
			}
			if(distDir != null && distDir.exists()){
				IFolder iFolderDist = proj.getFolder(baseOutputDir.getParentFile().getName()+"\\"+baseOutputDir.getName()+"\\"+distDir.getName()) ;
				if(iFolderDist.exists()){
					iFolderDist.setHidden(true);
					iFolderDist.setDerived(true, null);
					IFolder iFolderSource = proj.getFolder(baseOutputDir.getParentFile().getName()+"\\"+baseOutputDir.getName()+"\\"+JpaMappingCodeGenerator.DEFAULT_SRC_DIR) ;
					iFolderSource.setHidden(true);
					iFolderSource.setDerived(true, null);
				}		
				if(iFolder.exists() || iFolderDist.exists()){
					workspace.getRoot().refreshLocal(IResource.DEPTH_INFINITE, null);
					proj.refreshLocal(IResource.DEPTH_INFINITE, null);
				}
			}
			else{
				logger.warn("Exception occurred before creating distDir: no resource to hide");
			}

		}
		else{
			logger.warn("Exception occurred before creating baseoutputDir: no resource to hide");
		}
		
	}
	catch (CoreException e) {
		logger.error("Error in hiding technical model folders ",e);
		throw new GenerationException("Error in hiding technical model folders", e);
	}
	logger.debug("OUT");
	
}

	// =======================================================================
	// ACCESSOR METHODS
	// =======================================================================

	public File getDistDir() {
		return distDir;
	}

	public void setDistDir(File distDir) {
		this.distDir = distDir;
	}

	public File getJarFile() {
		return new File(distDir, jarFileName);
	}

	public String getJarFileName() {
		return jarFileName;
	}

	public void setJarFileName(String jarFileName) {
		this.jarFileName = jarFileName;
	}
}
