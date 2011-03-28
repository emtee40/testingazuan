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
package it.eng.spagobi.meta.generator.jpamapping;

import it.eng.spagobi.commons.resource.IResourceLocator;
import it.eng.spagobi.meta.generator.GenerationException;
import it.eng.spagobi.meta.generator.IGenerator;
import it.eng.spagobi.meta.generator.SpagoBIMetaGeneratorPlugin;
import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.texen.util.FileUtil;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Platform;
import org.osgi.framework.Bundle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class JpaMappingGenerator implements IGenerator {
	
	private static final IResourceLocator RL = SpagoBIMetaGeneratorPlugin.getInstance().getResourceLocator(); 
	
	private static Logger logger = LoggerFactory.getLogger(JpaMappingGenerator.class);

	/**
	 *   The Velocity template directory
	 */
	private File templateDir;
	private File tableTemplate;
	private File keyTemplate;	
	private File baseOutputDir;

	public JpaMappingGenerator() {
		String templatesDirRelativePath;
		
		logger.trace("IN");

		templatesDirRelativePath = null;
		try {
			templatesDirRelativePath = (String)RL.getProperty("jpamapping.templates.dir");
			if(templatesDirRelativePath == null) {
				throw new GenerationException("Property [" + "jpamapping.templates.dir" + "] not set");
			}
			templateDir = RL.getFile(templatesDirRelativePath);
			logger.debug("Template dir is equal to [{}]", templateDir);
			tableTemplate = new File(templateDir, "sbi_table.vm");
			keyTemplate = new File(templateDir, "sbi_pk.vm");
		} catch (Throwable t) {
			logger.error("Impossible to resolve folder [" + templatesDirRelativePath + "]", t);
		} finally{
			logger.trace("OUT");
		}

	}
	
	@Override
	public void generate(ModelObject o, String outputDir)  {
		BusinessModel model;
		
		if(o instanceof BusinessModel) {
			model = (BusinessModel)o;
			try {
				this.baseOutputDir = new File(outputDir);
				generateJpaMapping(model);
			} catch (Exception e) {
				throw new GenerationException("An error occur while generating JPA mapping", e);
			}
		} else {
			throw new GenerationException("Impossible to generate JPA mapping from an object of type [" + o.getClass().getName() + "]");
		}
	}
	
	/**
	 * Generate the JPA Mapping of one BusinessModel in one outputFile
	 * @param model BusinessModel
	 * @param outputFile File
	 */
	public void generateJpaMapping(BusinessModel model) throws Exception {
		
		Velocity.setProperty("file.resource.loader.path", getTemplateDir().getAbsolutePath());
		
		Iterator<BusinessColumnSet> tables = model.getTables().iterator();
		while (tables.hasNext()) {
			generateJpaMapping( tables.next()) ;
		}	
	}
	
	public void generateJpaMapping(BusinessColumnSet columnSet) throws Exception {
		if (columnSet instanceof BusinessTable) {
			generateJpaMappingForBusinessTable( (BusinessTable)columnSet );
		} else if (columnSet instanceof BusinessView) {
			generateJpaMappingForBusinessView( (BusinessView)columnSet );
		}
	}
	
	public void generateJpaMappingForBusinessTable(BusinessTable table) throws Exception {
		logger.info("Creating mapping for business class [{}]", table.getName());
		
		JpaTable jpaTable = new JpaTable(table);
		createFile(tableTemplate, jpaTable, jpaTable.getClassName());
		if (jpaTable.hasCompositeKey()) {
			logger.info("Creating mapping for composite PK of business table [{}]", table.getName());
			createFile(keyTemplate, jpaTable, jpaTable.getCompositeKeyClassName());
		}
	}
	
	public void generateJpaMappingForBusinessView(BusinessView view) throws Exception {
		logger.info("Creating mapping for business view [{}]", view.getName());
		
		for (PhysicalTable physicalTable : view.getPhysicalTables()) {
			JpaView jpaView = new JpaView(view, physicalTable);
			createFile(tableTemplate, jpaView, jpaView.getClassName()); 
			if (jpaView.hasCompositeKey()) {
				logger.info("Creating mapping for composite PK of business view [{}]", view.getName());
				createFile(keyTemplate, jpaView,jpaView.getCompositeKeyClassName());
			}				
		}
	}

	/**
	 * This method create a single java class file
	 * @param templateFile
	 * @param businessTable
	 * @param jpaTable
	 */
	private void createFile(File templateFile, JpaTable jpaTable, String className){

		VelocityContext context;
		
		logger.debug("IN. createFile. templateFile="+templateFile+" className="+className+ " jpaTable="+jpaTable.getClassName());
		
	    context = new VelocityContext();
	    context.put("physicalTable", jpaTable.getPhysicalTable()); //$NON-NLS-1$
        context.put("jpaTable", jpaTable ); //$NON-NLS-1$
        
        File outputDir = new File(baseOutputDir, StringUtil.strReplaceAll(jpaTable.getPackage(), ".", "/") );
		outputDir.mkdirs();
		
		File outputFile = new File(outputDir, className+".java");
		
        createFile(templateFile, outputFile, context);

	}
	
	private void createFile(File templateFile, File outputFile, VelocityContext context) {
		Template template;
		
		try {
			template = Velocity.getTemplate( templateFile.getName() );
		} catch (Throwable t) {
			throw new GenerationException("Impossible to load template file [" + templateFile + "]");
		}
		
		FileWriter fileWriter = null;
		try {
			fileWriter = new FileWriter(outputFile);
			
			template.merge(context, fileWriter);
			
			fileWriter.flush();
			fileWriter.close();
		} catch (IOException e) {
			logger.error("Impossible to generate output file from template file [" + templateFile + "]",e);
			throw new GenerationException("Impossible to generate output file from template file [" + templateFile + "]");
		}	
	}
	
	
	// =======================================================================
	// ACCESSOR METHODS
	// =======================================================================
	
	
	public File getTemplateDir() {
		return templateDir;
	}


	public void setTemplateDir(File templateDir) {
		this.templateDir = templateDir;
	}

}
