/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.generator.jpamapping;

import it.eng.spagobi.meta.generator.utils.StringUtils;
import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.serializer.EmfXmiSerializer;
import it.eng.spagobi.meta.model.serializer.IModelSerializer;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

import junit.framework.TestCase;

import org.json.JSONObject;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public abstract class AbstractJpaMappingGeneratorTestCase extends TestCase {
	
	protected Model model;
	protected IModelSerializer serializer;
	protected JpaMappingJarGenerator jarGenerator;
	protected File outputFolder;
	
	public static final File TEST_FOLDER = new File("test-resources");
	public static final File OUTPUT_FOLDER = new File(TEST_FOLDER, "outs");
	
	protected void setUp() throws Exception {
		super.setUp();
		serializer = new EmfXmiSerializer();
					
		jarGenerator = new JpaMappingJarGenerator();
		jarGenerator.setLibDir(new File(TEST_FOLDER.getParentFile(), "libs/eclipselink"));
		jarGenerator.setLibs(new String[]{
				"org.eclipse.persistence.core_2.1.2.jar",
				"javax.persistence_2.0.1.jar"
		});		
	}

	public AbstractJpaMappingGeneratorTestCase() {}
	
	public AbstractJpaMappingGeneratorTestCase(String s) {super(s);}
	
	protected void tearDown() throws Exception {
		super.tearDown();
		model = null;
		serializer = null;
		jarGenerator = null;
	}
	
	public void doTest() {
		doTestJarGenrationSmoke();
		doTestGeneratorState();
		doTestGeneratedFiles();
		doTestViewFileJSONSintax();
		doTestJarFileContent();
		doTestPersistenceUnitBaseContent();
	}
	
	public void doTestJarGenrationSmoke() {
		try {
			jarGenerator.generate(model.getBusinessModels().get(0), outputFolder.getAbsolutePath());
		} catch(Throwable t) {
			t.printStackTrace();
			fail();
		}
	}

	public void doTestGeneratorState() {
		assertNotNull("src dir cannot be null", jarGenerator.getSrcDir());
		assertNotNull("bin dir cannot be null", jarGenerator.getBinDir());
		assertNotNull("lib dir cannot be null", jarGenerator.getLibDir());
		assertNotNull("dist dir cannot be null", jarGenerator.getDistDir());
		assertNotNull("jar file cannot be null", jarGenerator.getJarFile());
	}
		
	public void doTestGeneratedFiles() {
		assertTrue("src dir cannot be found", jarGenerator.getSrcDir().getAbsoluteFile().exists());
		assertNotNull("bin dir cannot be found", jarGenerator.getBinDir().getAbsoluteFile().exists());
		assertNotNull("lib dir cannot be found", jarGenerator.getLibDir().getAbsoluteFile().exists());
		assertNotNull("dist dir cannot be found", jarGenerator.getDistDir().getAbsoluteFile().exists());
		
		File viewFile = new File(jarGenerator.getSrcDir(), "views.json");
		assertTrue("Impossible to find view.json file in [" + jarGenerator.getSrcDir() + "]", viewFile.exists());
		
		File metainfDir;
		File persistenceFile;
		File labelsFile;
		File propertiesFile;
		
		metainfDir = new File(jarGenerator.getSrcDir(), "META-INF");
		assertTrue("Impossible to find META-INF folder in [" + jarGenerator.getSrcDir() + "]", metainfDir.exists());
		persistenceFile = new File(metainfDir, "persistence.xml");
		assertTrue("Impossible to find persistence.xml file in [" + metainfDir + "]", persistenceFile.exists());
		labelsFile = new File(jarGenerator.getSrcDir(), "label.properties");
		assertTrue("Impossible to find labels.properties file in [" + jarGenerator.getSrcDir() + "]", labelsFile.exists());
		propertiesFile = new File(jarGenerator.getSrcDir(), "qbe.properties");
		assertTrue("Impossible to find qbe.properties file in [" + jarGenerator.getSrcDir() + "]", propertiesFile.exists());
		
		metainfDir = new File(jarGenerator.getBinDir(), "META-INF");
		assertTrue("Impossible to find META-INF folder in [" + jarGenerator.getBinDir() + "]", metainfDir.exists());
		persistenceFile = new File(metainfDir, "persistence.xml");
		assertTrue("Impossible to find persistence.xml file in [" + metainfDir + "]", persistenceFile.exists());
		labelsFile = new File(jarGenerator.getBinDir(), "label.properties");
		assertTrue("Impossible to find labels.properties file in [" + jarGenerator.getBinDir() + "]", labelsFile.exists());
		propertiesFile = new File(jarGenerator.getBinDir(), "qbe.properties");
		assertTrue("Impossible to find qbe.properties file in [" + jarGenerator.getBinDir() + "]", propertiesFile.exists());
	
		assertTrue("Impossible to find datamart.jar file in [" + jarGenerator.getJarFile().getParent() + "]", jarGenerator.getJarFile().exists());
		
	}
	
	public void doTestViewFileJSONSintax() {
		try {
			File viewFile = new File(jarGenerator.getSrcDir(), "views.json");
			String viewFileContent = StringUtils.getStringFromFile(viewFile);
			JSONObject viewJSON = new JSONObject( viewFileContent );
		} catch(Throwable t) {
			fail();
		}
	}

	
	public void doTestJarFileContent() {
		JarFile jarFile;
		
		try {
			jarFile = new JarFile( jarGenerator.getJarFile() );
			assertNotNull("Impossible to find file persistence.xml in jar file [" + jarGenerator.getJarFile() + "]", jarFile.getJarEntry("META-INF/persistence.xml"));
			assertNotNull("Impossible to find file labels.properties in jar file [" + jarGenerator.getJarFile() + "]", jarFile.getJarEntry("label.properties"));
			assertNotNull("Impossible to find file qbe.properties in jar file [" + jarGenerator.getJarFile() + "]", jarFile.getJarEntry("qbe.properties"));
			assertNotNull("Impossible to find file views.json in jar file [" + jarGenerator.getJarFile()  + "]", jarFile.getJarEntry("views.json"));
		} catch (IOException e) {
			fail();
		}
	}
	
	public void doTestPersistenceUnitBaseContent() {
		String fileContents;
		
		fileContents = null;
		try {
			JarFile jarFile = new JarFile( jarGenerator.getJarFile() );
			JarEntry entry = jarFile.getJarEntry("META-INF/persistence.xml");
			InputStream in = jarFile.getInputStream(entry);
			fileContents = StringUtils.getStringFromStream(in);
			in.close();
		} catch(Throwable t) {
			t.printStackTrace();
			fail();
		}
		
		assertNotNull(fileContents);
		assertTrue(fileContents.contains("<class>it.eng.spagobi.meta.Employee</class>"));
		assertTrue(fileContents.contains("<class>it.eng.spagobi.meta.Position</class>"));
	}

}
