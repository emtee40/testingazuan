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
import it.eng.spagobi.meta.generator.jpamapping.wrappers.AbstractJpaTable;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.JpaTable;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.JpaView;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.JpaViewInnerTable;
import it.eng.spagobi.meta.generator.utils.StringUtil;
import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class JpaMappingCodeGenerator implements IGenerator {

	/**
	 *   The Velocity template directory
	 */
	private File templateDir;
	
	/**
	 * The velocity template used to map business table to java class
	 */
	private File tableTemplate;
	
	/**
	 * The velocity template used to map business view to json mapping file
	 */
	private File viewTemplate;
	
	/**
	 * The velocity template used to map business table's composed key to a java class
	 */
	private File keyTemplate;	
	
	/**
	 * The velocity template used to generate the persistence.xml file
	 */
	private File persistenceUnitTemplate;
	
	
	
	public static final String DEFAULT_SRC_DIR = "src";
	
	/**
	 * The base output dir as passed to the method generate (this class is not thread safe!) 
	 */
	protected File baseOutputDir;
	
	protected File srcDir;
	
	/**
	 * All views found during generation process are appended to this list waiting for post processing phase
	 */
	private List<JpaView> jpaViews;
	
	
	
	private static final IResourceLocator RL = SpagoBIMetaGeneratorPlugin.getInstance().getResourceLocator(); 
	
	private static Logger logger = LoggerFactory.getLogger(JpaMappingCodeGenerator.class);
	

	public JpaMappingCodeGenerator() {
		String templatesDirRelativePath;
		
		logger.trace("IN");

		templatesDirRelativePath = null;
		try {
			templatesDirRelativePath = RL.getPropertyAsString("jpamapping.templates.dir", "templates");
			
			templateDir = RL.getFile(templatesDirRelativePath);
			logger.debug("Template dir is equal to [{}]", templateDir);
			Assert.assertTrue("Template dir [" + templateDir + "] does not exist", templateDir.exists());
			
			tableTemplate = new File(templateDir, "sbi_table.vm");
			logger.trace("[Table] template file is equal to [{}]", tableTemplate);
			Assert.assertTrue("[Table] template file [" + tableTemplate + "] does not exist", tableTemplate.exists());
			
			viewTemplate = new File(templateDir, "sbi_view.vm");
			logger.trace("[View] template file is equal to [{}]", viewTemplate);
			Assert.assertTrue("[View] template file [" + viewTemplate + "] does not exist", viewTemplate.exists());
						
			keyTemplate = new File(templateDir, "sbi_pk.vm");
			logger.trace("[Key] template file is equal to [{}]", keyTemplate);
			Assert.assertTrue("[Key] template file [" + keyTemplate + "] does not exist", keyTemplate.exists());
						
			persistenceUnitTemplate  = new File(templateDir, "sbi_persistence_unit.vm");
			logger.trace("[PersistenceUnit] template file is equal to [{}]", persistenceUnitTemplate);
			Assert.assertTrue("[PersistenceUnit] template file [" + persistenceUnitTemplate + "] does not exist", persistenceUnitTemplate.exists());
			
			jpaViews = new ArrayList<JpaView>();
		} catch (Throwable t) {
			logger.error("Impossible to resolve folder [" + templatesDirRelativePath + "]", t);
		} finally{
			logger.trace("OUT");
		}

	}
	
	@Override
	public void generate(ModelObject o, String outputDir)  {
		BusinessModel model;
		
		logger.trace("IN");
		
		if(o instanceof BusinessModel) {
			model = (BusinessModel)o;
			try {
				baseOutputDir = new File(outputDir);
				logger.debug("Output dir is equal to [{}]", baseOutputDir);
				
				srcDir = (srcDir == null)? new File(baseOutputDir, DEFAULT_SRC_DIR): srcDir;
				logger.debug("src dir is equal to [{}]", srcDir);
				
				generateJpaMapping(model);
			} catch (Exception e) {
				logger.error("An error occur while generating JPA mapping", e);
				throw new GenerationException("An error occur while generating JPA mapping", e);
			}
		} else {
			throw new GenerationException("Impossible to generate JPA mapping from an object of type [" + o.getClass().getName() + "]");
		}
		
		logger.trace("OUT");
	}
	
	/**
	 * Generate the JPA Mapping of one BusinessModel in one outputFile
	 * @param model BusinessModel
	 * @param outputFile File
	 */
	public void generateJpaMapping(BusinessModel model) throws Exception {
		
		logger.trace("IN");
		
		Velocity.setProperty("file.resource.loader.path", getTemplateDir().getAbsolutePath());
		
		Iterator<BusinessColumnSet> tables = model.getTables().iterator();
		while (tables.hasNext()) {
			generateColumnSetMapping( tables.next()) ;
		}	
		createViewsFile(viewTemplate, jpaViews);
		generatePersistenceUnitMapping(model);
		
		logger.trace("OUT");		
	}
	
	public void generateColumnSetMapping(BusinessColumnSet columnSet) throws Exception {
		
		if (columnSet instanceof BusinessTable) {
			generateBusinessTableMapping( (BusinessTable)columnSet );
		} else if (columnSet instanceof BusinessView) {
			generateBusinessViewMapping( (BusinessView)columnSet );
			jpaViews.add( new JpaView( (BusinessView)columnSet ) );
			
		}
		
	}
	
	public void generateBusinessTableMapping(BusinessTable table) throws Exception {
		logger.debug("Creating mapping for business class [{}]", table.getName());
		
		JpaTable jpaTable = new JpaTable(table);
		createJavaFile(tableTemplate, jpaTable, jpaTable.getClassName());
		if (jpaTable.hasCompositeKey()) {
			logger.info("Creating mapping for composite PK of business table [{}]", table.getName());
			createJavaFile(keyTemplate, jpaTable, jpaTable.getCompositeKeyClassName());
		}
		
		logger.debug("Mapping for business class [{}] created succesfully", table.getName());
	}
	
	public void generateBusinessViewMapping(BusinessView view) throws Exception {
		logger.info("Creating mapping for business view [{}]", view.getName());
		
		for (PhysicalTable physicalTable : view.getPhysicalTables()) {
			JpaViewInnerTable jpaViewInnerTable = new JpaViewInnerTable(view, physicalTable);
			logger.trace("Inner table [{}] have [{}] columns", jpaViewInnerTable.getClassName(), jpaViewInnerTable.getBusinessColumns().size());
			createJavaFile(tableTemplate, jpaViewInnerTable, jpaViewInnerTable.getClassName()); 
			if (jpaViewInnerTable.hasCompositeKey()) {
				logger.info("Creating mapping for composite PK of business view [{}]", view.getName());
				createJavaFile(keyTemplate, jpaViewInnerTable,jpaViewInnerTable.getCompositeKeyClassName());
			}				
		}
	}
	
	public void generatePersistenceUnitMapping(BusinessModel model) throws Exception {
		logger.info("Creating persistence unit for model [{}]", model.getName());
		
		createMappingFile(persistenceUnitTemplate, model);
	}

	/**
	 * This method create a single java class file
	 * @param templateFile
	 * @param businessTable
	 * @param jpaTable
	 */
	private void createJavaFile(File templateFile, AbstractJpaTable jpaTable, String className){

		VelocityContext context;
		
		logger.trace("IN. createFile. templateFile="+templateFile+" className="+className+ " jpaTable="+jpaTable.getClassName());
		
	    context = new VelocityContext();
	    context.put("physicalTable", jpaTable.getPhysicalTable()); //$NON-NLS-1$
        context.put("jpaTable", jpaTable ); //$NON-NLS-1$
        
        File outputDir = new File(baseOutputDir, "src");
        outputDir = new File(outputDir, StringUtil.strReplaceAll(jpaTable.getPackage(), ".", "/") );
		outputDir.mkdirs();
		
		File outputFile = new File(outputDir, className+".java");
		
        createFile(templateFile, outputFile, context);
        
        logger.debug("Created mapping file [{}] for table [{}]", outputFile, jpaTable.getClassName());

	}
	
	/**
	 * This method create a single java class file
	 * @param templateFile
	 * @param businessTable
	 * @param jpaView
	 */
	private void createViewsFile(File templateFile, List<JpaView> jpaView){

		VelocityContext context;
		
		logger.trace("IN");
		
		try {
			
		    context = new VelocityContext();
	        context.put("jpaViews", jpaView ); //$NON-NLS-1$
	        
	        File outputDir = new File(baseOutputDir, "src" );
			outputDir.mkdirs();
			
			File outputFile = new File(outputDir, "views.json");
			
	        createFile(templateFile, outputFile, context);
		} catch(Throwable t) {
        	logger.error("Impossible to create mapping", t);
        } finally {
        	logger.trace("OUT");
        }

	}
	
	/**
	 * This method create a single java class file
	 * @param templateFile
	 * @param businessTable
	 * @param jpaView
	 */
	private void createMappingFile(File templateFile, BusinessModel model){

		VelocityContext context;
		
		logger.trace("IN");
		
		try {
			logger.debug("Create persistance.xml");
			
			List<JpaTable> jpaTables = new ArrayList<JpaTable>();
			Iterator<BusinessColumnSet> tables = model.getTables().iterator();
			while (tables.hasNext()) {
				BusinessColumnSet columnSet = tables.next();
				if (columnSet instanceof BusinessTable) {
					BusinessTable table = (BusinessTable)columnSet;
					JpaTable jpaTable = new JpaTable(table);
					jpaTables.add(jpaTable);
				}
			}	
			
		    context = new VelocityContext();
	        context.put("jpaTables", jpaTables ); //$NON-NLS-1$
	        context.put("modelName", model.getName());
	        
	        File outputDir = new File( new File(baseOutputDir, "build"), "META-INF" );
			outputDir.mkdirs();
			
			File outputFile = new File(outputDir, "persistence.xml");
			
	        createFile(templateFile, outputFile, context);
		} catch(Throwable t) {
        	logger.error("Impossible to create persitance.xml", t);
        } finally {
        	logger.trace("OUT");
        }

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

	public File getSrcDir() {
		return srcDir;
	}

	public void setSrcDir(File srcDir) {
		this.srcDir = srcDir;
	}
	
	

}
