/**
 * 
 * LICENSE: see COPYING file. 
 * 
 */
package it.eng.spagobi.engines.jasperreport;

import it.eng.spago.base.SourceBean;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.container.SpagoBIContainerFactory;
import it.eng.spagobi.services.common.EnginConf;
import it.eng.spagobi.services.content.bo.Content;
import it.eng.spagobi.services.proxy.ContentServiceProxy;
import it.eng.spagobi.services.proxy.DataSetServiceProxy;
import it.eng.spagobi.utilities.DynamicClassLoader;
import it.eng.spagobi.utilities.ParametersDecoder;
import it.eng.spagobi.utilities.SpagoBIAccessUtils;

import java.awt.Graphics2D;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLClassLoader;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.PropertyResourceBundle;
import java.util.ResourceBundle;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporter;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JRParameter;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.JExcelApiExporter;
import net.sf.jasperreports.engine.export.JRCsvExporter;
import net.sf.jasperreports.engine.export.JRGraphics2DExporter;
import net.sf.jasperreports.engine.export.JRGraphics2DExporterParameter;
import net.sf.jasperreports.engine.export.JRHtmlExporter;
import net.sf.jasperreports.engine.export.JRHtmlExporterParameter;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.JRTextExporter;
import net.sf.jasperreports.engine.export.JRTextExporterParameter;
import net.sf.jasperreports.engine.export.JRXmlExporter;
import net.sf.jasperreports.engine.fill.JRFileVirtualizer;
import net.sf.jasperreports.engine.xml.JRXmlLoader;

import org.apache.log4j.Logger;
import org.safehaus.uuid.UUID;
import org.safehaus.uuid.UUIDGenerator;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import com.jamonapi.Monitor;
import com.jamonapi.MonitorFactory;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGEncodeParam;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

/**
 * Jasper Report implementation built to provide all methods to
 * run a report inside SpagoBI. It is the jasper report Engine implementation
 * for SpagoBI.
 * 
 * @author Gioia
 */
public class JasperReportRunner {

	private static transient Logger logger = Logger.getLogger(JasperReportRunner.class);
	public static final String JS_FILE_ZIP = "JS_File";
	public static final String JS_EXT_ZIP = ".zip";

	private String documentId=null;
	private String userId=null;	
	private String userUniqueIdentifier=null;	

	/**
	 * Class Constructor.
	 * 
	 * @param session the session
	 */
	public JasperReportRunner(HttpSession session) {
		super();
	}

	/**
	 * This method, known all input information, runs a report with JasperReport
	 * inside SpagoBI. iIt is the Jasper Report Engine's core method.
	 * 
	 * @param parameters The input parameters map
	 * @param servletContext The java servlet context object
	 * @param servletResponse The java http servlet response object
	 * @param conn the conn
	 * @param out the out
	 * @param servletRequest the servlet request
	 * 
	 * @throws Exception If any Exception occurred
	 */
	public void runReport(Connection conn, Map parameters, OutputStream out, ServletContext servletContext, 
			HttpServletResponse servletResponse, HttpServletRequest servletRequest) throws Exception {
		logger.debug("IN");
		Monitor monitor =MonitorFactory.start("JasperReportRunner.service");
		documentId=(String)servletRequest.getParameter("document");

		HttpSession session=servletRequest.getSession();
		IEngUserProfile profile=(IEngUserProfile)session.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		userId=(String)((UserProfile)profile).getUserId();
		userUniqueIdentifier=(String)profile.getUserUniqueIdentifier();

		logger.debug("Read user data from the request. userId="+userId+". DocumentId="+documentId);

		String resourcePath=EnginConf.getInstance().getResourcePath()+"\\img\\";
		String entity=(String)parameters.get(SpagoBIConstants.SBI_ENTITY);
		// IF exist an ENTITY  parameter concat to resourcePath
		if (entity!=null && entity.length()>0){
			resourcePath=resourcePath.concat(entity+"\\");
		}
		logger.debug("SetUp resourcePath:"+resourcePath);
		
		
		parameters.put("SBI_USERID", userUniqueIdentifier);
		parameters.put("SBI_HTTP_SESSION", session);
		parameters.put("SBI_RESOURCE_PATH", resourcePath);
		



		/* TODO Since this is the back-end (logic) part of the JasperEngine the direct use of  HttpServletResponse, 
		 * HttpServletRequest and ServletContext objects shuold be pushed back to JasperReportServlet that is 
		 * the front-end (control) part of the engine */		
		File[] compiledSubreports = null;
		SpagoBIAccessUtils util = new SpagoBIAccessUtils();
		// identity string for object execution
		UUIDGenerator uuidGen  = UUIDGenerator.getInstance();
		UUID uuid_local = uuidGen.generateTimeBasedUUID();
		String executionId = uuid_local.toString();
		executionId = executionId.replaceAll("-", "");
		String flgTemplateStandard = "true";

		//ContentServiceProxy contentProxy=new ContentServiceProxy(userId,session);
		ContentServiceProxy contentProxy=new ContentServiceProxy(userUniqueIdentifier,session);

		//DataSetWsServiceProxy dataSetProxy=new DataSetWsServiceProxy(userId,session);
		DataSetServiceProxy dataSetProxy=new DataSetServiceProxy(userUniqueIdentifier,session);

		/*DataSetConfig dsConf= dataSetProxy.getDataSetByLabel("ProvaFile");
	    	if (dsConf!=null) System.out.println("Nome ds"+dsConf.getName());*/
		try {								
			String tmpDirectory = System.getProperty("java.io.tmpdir");

//			all jar needed by JR to succesfully compile a report should be on this path
			// (by default is WEB_INF/lib)
			setJRClasspath(getJRLibDir(servletContext));

			HashMap requestParameters = ParametersDecoder.getDecodedRequestParameters(servletRequest);
			Content template=contentProxy.readTemplate( documentId,requestParameters);
			logger.debug("Read the template."+template.getFileName());
			InputStream is = null;		
			BASE64Decoder bASE64Decoder = new BASE64Decoder();
			byte[] templateContent = bASE64Decoder.decodeBuffer(template.getContent());
			is = new java.io.ByteArrayInputStream(templateContent);

			if (template.getFileName().indexOf(".zip") > -1) {
				flgTemplateStandard = "false";
			}

			/* Dynamic template management: if the template is a zip file it is opened and every class are added to 
			 * the classpath
			 */			
			if (flgTemplateStandard.equalsIgnoreCase("false")) {
				logger.debug("The template is a .ZIP file");
				File fileZip = new File(getJRTempDir(servletContext,executionId), JS_FILE_ZIP + JS_EXT_ZIP);
				FileOutputStream foZip = new FileOutputStream(fileZip);
				foZip.write(templateContent);
				foZip.close();
				util.unzip(fileZip, getJRTempDir(servletContext, executionId));
				JarFile zipFile = new JarFile(fileZip);
				Enumeration totalZipEntries = zipFile.entries();
				File jarFile = null;
				while (totalZipEntries.hasMoreElements()) {
					ZipEntry entry = (ZipEntry) totalZipEntries.nextElement();
					if (entry.getName().endsWith(".jar")) {
						jarFile = new File(getJRTempDirName(servletContext,executionId)+ entry.getName());
						// set classloader with jar
						ClassLoader previous = Thread.currentThread().getContextClassLoader();
						DynamicClassLoader dcl = new DynamicClassLoader(jarFile, previous);
						Thread.currentThread().setContextClassLoader(dcl);

					}
					if (entry.getName().endsWith(".jrxml")) {
						// set InputStream with jrxml
						File jrxmlFile = new File(getJRTempDirName(servletContext, executionId)+ entry.getName());
						InputStream isJrxml = new FileInputStream(jrxmlFile);
						byte[] templateJrxml = new byte[0];
						templateJrxml = util.getByteArrayFromInputStream(isJrxml);
						is = new java.io.ByteArrayInputStream(templateJrxml);
					}
				}
			}

			// Set the temporary location for the files generated on-the-fly by JR 
			// (by default is the current user tmp-dir)
			setJRTempDir(tmpDirectory);

			logger.debug("Compiling template file ...");
			Monitor monitorCompileTemplate =MonitorFactory.start("JasperReportRunner.compileTemplate");
			JasperReport report  = JasperCompileManager.compileReport(is);
			monitorCompileTemplate.stop();
			logger.debug("Template file compiled  succesfully");

			parameters = adaptReportParams(parameters, report);

			// Add locale
			if(parameters.get("SBI_LANGUAGE")!=null && parameters.get("SBI_COUNTRY")!=null){
				Locale locale=null;
				String language=(String)parameters.get("SBI_LANGUAGE");
				String country=(String)parameters.get("SBI_COUNTRY");
				logger.debug("Internazionalization in "+language);
				locale=new Locale(language,country,"");
				//parameters.put("REPORT_LOCALE", locale);
				ResourceBundle rs=PropertyResourceBundle.getBundle("messages",locale);
				parameters.put("REPORT_RESOURCE_BUNDLE", rs);

			}
			
			Monitor monitorSubReport = MonitorFactory.start("JasperReportRunner.compileSubReport");
			// compile subreports
			compiledSubreports = compileSubreports(parameters, getJRCompilationDir(servletContext, executionId),contentProxy, requestParameters);
			monitorSubReport.stop();		
			// set classloader
			ClassLoader previous = Thread.currentThread().getContextClassLoader();
			ClassLoader current = URLClassLoader.newInstance(new URL[]{getJRCompilationDir(servletContext, executionId).toURL()}, previous);
			Thread.currentThread().setContextClassLoader(current);

			// Create the virtualizer									
			if(isVirtualizationActive()) {
				logger.debug("Virtualization of fill process is active");
				parameters.put(JRParameter.REPORT_VIRTUALIZER, getVirtualizer(tmpDirectory, servletContext));
			}

			logger.debug("Filling report ...");
			Monitor monitorFillingReport =MonitorFactory.start("JasperReportRunner.FillingReport");
			JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, conn);
			monitorFillingReport.stop();
			logger.debug("Report filled succesfully");

			logger.debug("Exporting report ...");
			String outputType = (String) parameters.get("outputType");
			if(outputType == null) {
				logger.debug("Output type is not specified. Default type will be used");
				outputType = "html";
				//outputType = ExporterFactory.getDefaultType();
			}
			logger.debug("Output format is [" + outputType + "]");
			Monitor monitorExportReport =MonitorFactory.start("JasperReportRunner.ExportReport");
			JRExporter exporter = ExporterFactory.getExporter(outputType);	
			String mimeType = ExporterFactory.getMIMEType(outputType);

			if(exporter != null) logger.debug("Configured exporter class [" + exporter.getClass().getName() + "]");
			else logger.debug("Exporter class [null]");
			logger.debug("Configured MIME type [" + mimeType + "]");

			// for base types use default exporter, mimeType and parameters if these 
			// are not specified by configuration file 
			if (outputType.equalsIgnoreCase("csv")) {
				if(mimeType == null) mimeType = "text/plain";
				servletResponse.setContentType(mimeType);
				if(exporter == null) exporter = new JRCsvExporter();
			} else if (outputType.equalsIgnoreCase("html")) {
				if(mimeType == null) mimeType = "text/html";
				servletResponse.setContentType(mimeType);
				if(exporter == null) exporter = new JRHtmlExporter();
				exporter.setParameter(JRHtmlExporterParameter.IS_USING_IMAGES_TO_ALIGN, Boolean.FALSE);
				exporter.setParameter(JRHtmlExporterParameter.BETWEEN_PAGES_HTML, "");
				// define the map structure for report images
				HashMap m_imagesMap = new HashMap();
				String mapName = uuid_local.toString();

				servletRequest.getSession().setAttribute(mapName, m_imagesMap);
				exporter.setParameter(JRHtmlExporterParameter.IMAGES_MAP ,m_imagesMap);		    	
				//exporter.setParameter(JRHtmlExporterParameter.IMAGES_URI, "image.jsp?mapname="+mapName+"&image=");
				exporter.setParameter(JRHtmlExporterParameter.IMAGES_URI, "JRImageServlet?mapname="+mapName+"&image=");
			} else if (outputType.equalsIgnoreCase("xls")) {
				if(mimeType == null) mimeType = "application/vnd.ms-excel";
				servletResponse.setContentType(mimeType);
				//if(exporter == null) exporter = new JRXlsExporter();
				if(exporter == null) exporter = new JExcelApiExporter();
			} else if (outputType.equalsIgnoreCase("xml")) {
				if(mimeType == null) mimeType = "text/xml";
				servletResponse.setContentType(mimeType);
				if(exporter == null) exporter = new JRXmlExporter();
			} else if (outputType.equalsIgnoreCase("txt")) {
				if(mimeType == null) mimeType = "text/plain";
				servletResponse.setContentType(mimeType);
				if(exporter == null) exporter = new JRTextExporter();
				exporter.setParameter(JRTextExporterParameter.PAGE_HEIGHT,new Integer(100));
				exporter.setParameter(JRTextExporterParameter.PAGE_WIDTH,new Integer(100));
			} else if (outputType.equalsIgnoreCase("pdf"))	{			
				if(mimeType == null) mimeType = "application/pdf";
				servletResponse.setContentType(mimeType);
				if(exporter == null) exporter = new JRPdfExporter(); 	
			} else if (outputType.equalsIgnoreCase("JPG"))	{	
				byte[] bytes = getImageBytes(report, jasperPrint);
				if(mimeType == null) mimeType = "application/jpeg";
				out.write(bytes);
				return;
			} else if (outputType.equalsIgnoreCase("JPGBASE64"))	{	
				byte[] bytes = getImagesBase64Bytes(report, jasperPrint);
				if(mimeType == null) mimeType = "text/plain";
				out.write(bytes);
				return;
			} else {
				if(mimeType != null && exporter != null) servletResponse.setContentType(mimeType);
				else {
					logger.warn("Impossible to load exporter for type " + outputType);
					logger.warn("Pdf exporter will be used");
					servletResponse.setContentType("application/pdf");
					exporter = new JRPdfExporter(); 
				}
			}

			logger.debug("MIME type of response is [" + servletResponse.getContentType()+ "]");
			logger.debug("Exporter class used is  [" + exporter.getClass().getName()+ "]");


			exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
			exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
			exporter.exportReport();
			monitorExportReport.stop();
			logger.debug("Report exported succesfully");


		} catch(Throwable e) {
			logger.error("An exception has occured", e);
			throw new Exception(e);
		} finally {
			// delete tmp dir for dynamic template management
			File tmpDir = getJRTempDir(servletContext, executionId);
			//File tmpDir = getJRTempDir(servletContext, executionId).getParentFile();			
			util.deleteDirectory(tmpDir);
			logger.debug("Delating temporary directory: " + tmpDir);

			monitor.stop();
			logger.debug("OUT");
		}
		
	}



	/////////////////////////////////////////
	// UTILITY METHODS
	/////////////////////////////////////////

	/**
	 * @return the classpath used by JasperReprorts Engine (by default equals to WEB-INF/lib)
	 * 
	 * TODO convert this to a File returning method
	 */
	private String getJRLibDir(ServletContext servletContext) {
		logger.debug("IN");
		String jrLibDir = null;		
		jrLibDir = servletContext.getRealPath("WEB-INF") + System.getProperty("file.separator") + "lib";		
		logger.debug("OUT");
		return jrLibDir;		
	}

	private File getJRCompilationDir(ServletContext servletContext, String executionId) {
		logger.debug("IN");
		File jrCompilationDir = null;		
		jrCompilationDir = getJRTempDir(servletContext, executionId);
		logger.debug("OUT");
		return jrCompilationDir;		
	}

	private void setJRClasspath(String jrLibDir) {
		logger.debug("JasperReports lib-dir is [" + this.getClass().getName()+ "]");
		System.setProperty("jasper.reports.compile.class.path", buildJRClasspathValue(jrLibDir));
		logger.debug("Set [jasper.reports.compile.class.path properties] to value [" + System.getProperty("jasper.reports.compile.class.path")+"]");

	}

	private void setJRTempDir(String jrTmpDir) {
		System.setProperty("jasper.reports.compile.temp", jrTmpDir);
		logger.debug("Set [jasper.reports.compile.temp] to value [" + System.getProperty("jasper.reports.compile.temp")+"]");
	}


	/**
	 * Build a classpath variable appending all the jar files founded into the specified directory.
	 * 
	 * @param  libDir JR lib-dir to scan for find jar files to include into the classpath variable
	 * @return the classpath used by JasperReprorts Engine (by default equals to WEB-INF/lib)
	 */
	private String buildJRClasspathValue(String libDir) {
		logger.debug("IN");
		String getJRClasspathValue = null;

		logger.debug("Reading jar files from lib-dir...");
		StringBuffer jasperReportClassPathStringBuffer  = new StringBuffer();
		File f = new File(libDir);
		String fileToAppend = null;
		if (f.isDirectory()){
			String[] jarFiles = f.list();
			for (int i=0; i < jarFiles.length; i++){
				String namefile = jarFiles[i];
				if(!namefile.endsWith("jar"))
					continue; // the inclusion of txt files causes problems
				fileToAppend = libDir + System.getProperty("file.separator")+ jarFiles[i];
				logger.debug("Appending jar file [" + fileToAppend + "] to JasperReports classpath");
				jasperReportClassPathStringBuffer.append(fileToAppend);
				jasperReportClassPathStringBuffer.append(System.getProperty("path.separator"));  
			}
		}

		getJRClasspathValue = jasperReportClassPathStringBuffer.toString();
		getJRClasspathValue = getJRClasspathValue.substring(0, getJRClasspathValue.length() - 1);
		logger.debug("OUT");
		return getJRClasspathValue;
	}

	private boolean isVirtualizationActive() {
		logger.debug("IN");
		boolean isVirtualizationActive = false;
		SourceBean config = EnginConf.getInstance().getConfig();
		String active = (String)config.getAttribute("VIRTUALIZER.active");
		if(active != null) isVirtualizationActive = active.equalsIgnoreCase("true");
		logger.debug("OUT");
		return isVirtualizationActive;
	}

	/**
	 * Gets the virtualizer.
	 * 
	 * @param tmpDirectory the tmp directory
	 * @param servletContext the servlet context
	 * 
	 * @return the virtualizer
	 */
	public JRFileVirtualizer getVirtualizer(String tmpDirectory, ServletContext servletContext) {
		logger.debug("IN");
		JRFileVirtualizer virtualizer = null; 

		SourceBean config = EnginConf.getInstance().getConfig();
		String maxSizeStr = (String)config.getAttribute("VIRTUALIZER.maxSize");
		int maxSize = 2; 
		if(maxSizeStr!=null) maxSize = Integer.parseInt(maxSizeStr);
		String dir = (String)config.getAttribute("VIRTUALIZER.dir");
		if(dir == null){
			dir = tmpDirectory;
		} else {
			if(!dir.startsWith("/")) {
				String contRealPath = servletContext.getRealPath("/");
				if(contRealPath.endsWith("\\")||contRealPath.endsWith("/")) {
					contRealPath = contRealPath.substring(0, contRealPath.length()-1);
				}
				dir = contRealPath + "/" + dir;
			}
		}
		dir = dir + System.getProperty("file.separator") + "jrcache";
		File file = new File(dir);
		file.mkdirs();
		logger.debug("Max page cached during virtualization process: " + maxSize);
		logger.debug("Dir used as storing area during virtualization: " + dir);
		virtualizer = new JRFileVirtualizer(maxSize, dir);
		virtualizer.setReadOnly(true);
		logger.debug("OUT");
		return virtualizer;
	}

	private byte[] getImagesBase64Bytes(JasperReport report, JasperPrint jasperPrint) {
		logger.debug("IN");
		byte[] bytes = new byte[0];
		try {
			String message = "<IMAGES>";
			List bufferedImages = generateReportImages(report, jasperPrint);
			Iterator iterImgs = bufferedImages.iterator();
			int count = 1;
			while(iterImgs.hasNext()){
				message += "<IMAGE page=\""+count+"\">";
				BufferedImage image = (BufferedImage)iterImgs.next();
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(baos);
				JPEGEncodeParam encodeParam = encoder.getDefaultJPEGEncodeParam(image);
				encodeParam.setQuality(1.0f, true);
				encoder.setJPEGEncodeParam(encodeParam);
				encoder.encode(image);
				byte[] byteImg = baos.toByteArray();
				baos.close();
				BASE64Encoder encoder64 = new BASE64Encoder();
				String encodedImage = encoder64.encode(byteImg);
				message += encodedImage;
				message += "</IMAGE>";
				count ++;
			}
			message += "</IMAGES>";
			bytes = message.getBytes();
		} catch (Exception e) {
			logger.error("Error while producing byte64 encoding of the report images", e);
		}
		logger.debug("OUT");
		return bytes;
	}



	private byte[] getImageBytes(JasperReport report, JasperPrint jasperPrint) {
		logger.debug("IN");
		byte[] bytes = new byte[0];
		try {
			List bufferedImages = generateReportImages(report, jasperPrint);
			// calculate dimension of the final page
			Iterator iterImgs = bufferedImages.iterator();
			int totalHeight = 0;
			int totalWidth = 0;
			while(iterImgs.hasNext()){
				BufferedImage image = (BufferedImage)iterImgs.next();
				int hei = image.getHeight();
				int wid = image.getWidth();
				totalHeight += hei;
				totalWidth = wid;
			}
			// create an unique buffer image
			BufferedImage finalImage = new BufferedImage(totalWidth, totalHeight, BufferedImage.TYPE_INT_RGB);
			Graphics2D finalGr2 = finalImage.createGraphics();
			// append all images to the final
			iterImgs = bufferedImages.iterator();
			int y = 0;
			int x = 0;
			while(iterImgs.hasNext()){
				BufferedImage image = (BufferedImage)iterImgs.next();
				int hei = image.getHeight();
				finalGr2.drawImage(image, new AffineTransform(1f,0f,0f,1f,x,y), null);
				y += hei;
			}
			// gets byte of the jpeg image 
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(baos);
			JPEGEncodeParam encodeParam = encoder.getDefaultJPEGEncodeParam(finalImage);
			encodeParam.setQuality(1.0f, true);
			encoder.setJPEGEncodeParam(encodeParam);
			encoder.encode(finalImage);
			bytes = baos.toByteArray();
			baos.close();

		} catch (Exception e) {
			logger.error("Error while producing jpg image of the report", e);
		}
		logger.debug("OUT");
		return bytes;
	}





	private List generateReportImages(JasperReport report, JasperPrint jasperPrint) {
		logger.debug("IN");
		List bufferedImages = new ArrayList();
		try{
			int height = report.getPageHeight();
			int width = report.getPageWidth();
			boolean export = true;
			int index = 0;
			while(export==true){
				BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
				Graphics2D gr2 = image.createGraphics();
				JRExporter exporter = new JRGraphics2DExporter();
				exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
				exporter.setParameter(JRGraphics2DExporterParameter.GRAPHICS_2D, gr2 );
				exporter.setParameter(JRGraphics2DExporterParameter.PAGE_INDEX, new Integer(index));
				try{
					exporter.exportReport();
				} catch(Exception e) {
					export = false;
					continue;
				}
				index++;
				bufferedImages.add(image);	
			}
		} catch (Exception e) {
			logger.error("Error while producing jpg images of the report", e);
		}
		logger.debug("OUT");
		return bufferedImages;
	}






	private File[] compileSubreports(Map params, File destDir,ContentServiceProxy contentProxy, HashMap requestParameters) throws JRException, Exception {
		logger.debug("IN");
		String subrptnumStr = (params.get("srptnum")==null)?"0":(String)params.get("srptnum");
		int subrptnum = Integer.parseInt(subrptnumStr);
		String[] subreports = new String[subrptnum];
		String[] subreportsType = new String[subrptnum];
		File[] files = new File[subrptnum];

		Iterator it = params.keySet().iterator();
		while(it.hasNext()){
			String parName = (String)it.next();
			if(parName.startsWith("subrpt") && parName.endsWith("id")) {
				int start = parName.indexOf('.') + 1;
				int end = parName.indexOf('.', start);				
				String numberStr = parName.substring(start, end);
				int number = Integer.parseInt(numberStr) - 1;
				subreports[number] = (String)params.get(parName);
				logger.debug("JasperReports subreport id : " +  params.get(parName));				
			}
			else if(parName.startsWith("subrpt") && parName.endsWith("flgTempStd")) {
				int start = parName.indexOf('.') + 1;
				int end = parName.indexOf('.', start);
				String numberStr = parName.substring(start, end);
				int number = Integer.parseInt(numberStr) - 1;
				subreportsType[number] = (String)params.get(parName);
			}
		}

		for(int i = 0; i < subreports.length; i++) {
			Content template=contentProxy.readTemplate(subreports[i], requestParameters);
			logger.debug("Read the template.(subreport)"+template.getFileName());
			InputStream is = null;		
			BASE64Decoder bASE64Decoder = new BASE64Decoder();
			byte[] templateContent = bASE64Decoder.decodeBuffer(template.getContent());
			is = new java.io.ByteArrayInputStream(templateContent);


			SpagoBIAccessUtils util = new SpagoBIAccessUtils();

			/* Dynamic template management: if the template is a zip file it is opened and every class are added to 
			 * the classpath
			 */			
			String flgTemplateStandard = subreportsType[i];
			if (flgTemplateStandard.equalsIgnoreCase("false")){							
				File fileZip = new File (destDir, this.JS_FILE_ZIP+i+ JS_EXT_ZIP);
				FileOutputStream foZip = new FileOutputStream(fileZip);
				foZip.write(templateContent);
				foZip.close();				
				util.unzip(fileZip,destDir);
				JarFile zipFile = new JarFile(fileZip);				
				Enumeration totalZipEntries = zipFile.entries();
				File jarFile = null;
				while (totalZipEntries.hasMoreElements()) {
					ZipEntry entry = (ZipEntry)totalZipEntries.nextElement();
					if (entry.getName().endsWith(".jar")) {
						// set classloader with jar
						jarFile = new File(destDir+entry.getName());
						ClassLoader previous = Thread.currentThread().getContextClassLoader();
						DynamicClassLoader dcl = new DynamicClassLoader(jarFile, previous);
						//ClassLoader current = URLClassLoader.newInstance(new URL[]{jarFile.toURL()}, previous);
						Thread.currentThread().setContextClassLoader(dcl);					   
					}
					if (entry.getName().endsWith(".jrxml")) {
						// set InputStream with jrxml	    		   
						File jrxmlFile = new File(destDir+System.getProperty("file.separator")+entry.getName());
						InputStream isJrxml = new FileInputStream(jrxmlFile);		    		   
						templateContent = util.getByteArrayFromInputStream(isJrxml);
						is = new java.io.ByteArrayInputStream(templateContent);		    		   
					}
				}
			}
			JasperDesign  jasperDesign = JRXmlLoader.load(is);
			//the following instruction is necessary because the above istruction cleans variable 'is'
			is = new java.io.ByteArrayInputStream(templateContent);

			files[i] = new File(destDir, jasperDesign.getName()+ ".jasper");
			logger.debug("Compiling template file: " + files[i]);
			FileOutputStream fos =  null;
			try {
				fos = new FileOutputStream(files[i]);
			} catch (FileNotFoundException e) {
				logger.error("Internal error in compiling subreport method", e);
			}
			JasperCompileManager.compileReportToStream(is, fos);			
			logger.debug("Template file compiled  succesfully");
		}
		logger.debug("OUT");
		return files;
	}

	private String getJRTempDirName(ServletContext servletContext, String executionId) {	
		logger.debug("IN");
		String jrTempDir = servletContext.getRealPath("tmpdir") + System.getProperty("file.separator") +
		"reports" +  System.getProperty("file.separator") +
		"JS_dir_" + executionId + System.getProperty("file.separator");
		logger.debug("OUT");
		return jrTempDir;		
	}

	private File getJRTempDir(ServletContext servletContext, String executionId) {
		logger.debug("IN");
		File jrTempDir = null;		

		String jrTempDirStr = getJRTempDirName(servletContext, executionId);
		jrTempDir = new File(jrTempDirStr.substring(0, jrTempDirStr.length()-1));
		jrTempDir.mkdirs();
		logger.debug("OUT");
		return jrTempDir;		
	}

	protected Map adaptReportParams(Map parameters, JasperReport report) {
		logger.debug("IN");
		String dateformat = (String) parameters.get("dateformat");
		if (dateformat != null) {
			dateformat = dateformat.replaceAll("D", "d");
			dateformat = dateformat.replaceAll("m", "M");
			dateformat = dateformat.replaceAll("Y", "y");
		}
		JRParameter[] reportParameters = report.getParameters();
		ParametersDecoder decoder = new ParametersDecoder();
		for (int i = 0; i < reportParameters.length; i++) {
			JRParameter aReportParameter = reportParameters[i];
			String paramName = aReportParameter.getName();
			logger.debug("Examining parameter with name [" + paramName + "] ...");
			String paramValueString = (String) parameters.get(paramName);
			if (paramValueString == null) {
				logger.debug("No value found for parameter with name [" + paramName + "]");
				continue;
			}
			if (paramValueString != null) {
				logger.debug("Value found for parameter with name [" + paramName + "] is [" + paramValueString + "]");
				/*
				 * The ParameterConverter converts a single value. Multi-value
				 * parameters are assumed to contains values that are String type.
				 * If they are not Strings (list of dates, list of numbers, ...) the
				 * converter will not work.
				 */
				if (decoder.isMultiValues(paramValueString)) {
					logger.debug("Value found for parameter with name [" + paramName + "] is [" + paramValueString + "] and it is multivalue. " +
					"Cannot adapt parameter nature");
					continue;
				}
				Class aReportParameterClass = aReportParameter.getValueClass();
				Object newValue = ParameterConverter.convertParameter(aReportParameterClass, paramValueString, dateformat);
				if (newValue == null)
					newValue = paramValueString;

				if (!(newValue instanceof String)) {
					logger.debug("Updating parameter with name [" + paramName + "] to a " + newValue.getClass().getName() + ".");
					parameters.put(paramName, newValue);
				}
			}
		}
		logger.debug("OUT");
		return parameters;
	}

}

