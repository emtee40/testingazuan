/**
 * 
 * LICENSE: see COPYING file. 
 * 
 */
package it.eng.spagobi.engines.jasperreport;

import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.services.common.EnginConf;
import it.eng.spagobi.services.datasource.bo.SpagoBiDataSource;
import it.eng.spagobi.services.proxy.DataSourceServiceProxy;
import it.eng.spagobi.utilities.ParametersDecoder;
import it.eng.spagobi.utilities.callbacks.audit.AuditAccessUtils;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.apache.log4j.Logger;

import com.jamonapi.Monitor;
import com.jamonapi.MonitorFactory;

/**
 * Process jasper report execution requests and returns bytes of the filled
 * reports
 */
public class JasperReportServlet extends HttpServlet {

    static Map extensions;
    static {
	extensions = new HashMap();
	extensions.put("jrxml", "text/jrxml");
	extensions.put("html", "text/html");
	extensions.put("xml", "text/xml");
	extensions.put("txt", "text/plain");
	extensions.put("csv", "text/csv");
	extensions.put("pdf", "application/pdf");
	extensions.put("rtf", "application/rtf");
	extensions.put("xls", "application/vnd.ms-excel");
    }

    /**
     * Logger component
     */
    private static transient Logger logger = Logger.getLogger(JasperReportServlet.class);
    private static String CONNECTION_NAME="connectionName";
    private static String PARAM_OUTPUT_FORMAT="param_output_format";

    /**
     * Initialize the engine
     */
    public void init(ServletConfig config) throws ServletException {
	super.init(config);
	logger.debug("Initializing SpagoBI JasperReport Engine...");
    }

    /**
     * process jasper report execution requests
     */
    public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	logger.debug("Start processing a new request...");
        Monitor monitor =MonitorFactory.start("JasperReportServlet.service");
	HttpSession session = request.getSession();
	logger.debug("documentId IN Session:"+(String)session.getAttribute("document"));
	// USER PROFILE
	String documentId = (String) request.getParameter("document");
	if (documentId==null){
	    documentId=(String)session.getAttribute("document");
	    logger.debug("documentId From Session:"+documentId);
	}
	logger.debug("documentId:"+documentId);
	
	String requestConnectionName = (String) request.getParameter(CONNECTION_NAME);
	if (requestConnectionName==null) logger.debug("requestConnectionName is NULL");
	else logger.debug("requestConnectionName:"+requestConnectionName);
	
	//  operazioni fatte dal filtro OUT
	IEngUserProfile profile = (IEngUserProfile) session.getAttribute(IEngUserProfile.ENG_USER_PROFILE);

	Map params = new HashMap();
	Enumeration enumer = request.getParameterNames();
	String parName = null;
	String parValue = null;
	logger.debug("Reading request parameters...");
	while (enumer.hasMoreElements()) {
	    parName = (String) enumer.nextElement();
	    parValue = request.getParameter(parName);
	    addParToParMap(params, parName, parValue);
	    logger.debug("Read parameter [" + parName + "] with value ["+ parValue + "] from request");
	}
	logger.debug("Request parameters read sucesfully" + params);
	
	// AUDIT UPDATE
	String auditId = request.getParameter("SPAGOBI_AUDIT_ID");
	AuditAccessUtils auditAccessUtils = (AuditAccessUtils) request.getSession().getAttribute("SPAGOBI_AUDIT_UTILS");
	if (auditAccessUtils != null)
	    auditAccessUtils.updateAudit(session,(String) profile.getUserUniqueIdentifier(), auditId, new Long(System
		    .currentTimeMillis()), null, "EXECUTION_STARTED", null, null);

	JasperReportRunner jasperReportRunner = new JasperReportRunner(session);
	Connection con = getConnection(requestConnectionName,session,(String)profile.getUserUniqueIdentifier(),documentId);

	if (con == null) {
	    logger.error("Cannot obtain" + " connection for engine ["
		    + this.getClass().getName() + "] control document configurations");
	    // AUDIT UPDATE
	    if (auditAccessUtils != null)
		auditAccessUtils.updateAudit(session,(String) profile.getUserUniqueIdentifier(), auditId, null, new Long(System
			.currentTimeMillis()), "EXECUTION_FAILED", "No connection available", null);
	    return;
	}
	try {
	    String outputType = (String) params.get(PARAM_OUTPUT_FORMAT);
	    String tmpdir = (String) EnginConf.getInstance().getConfig().getAttribute("GENERALSETTINGS.tmpdir");
	    if (!tmpdir.startsWith("/")) {
		String contRealPath = getServletContext().getRealPath("/");
		if (contRealPath.endsWith("\\") || contRealPath.endsWith("/")) {
		    contRealPath = contRealPath.substring(0, contRealPath.length() - 1);
		}
		tmpdir = contRealPath + "/" + tmpdir;
	    }
	    tmpdir = tmpdir + System.getProperty("file.separator") + "reports";
	    File dir = new File(tmpdir);
	    dir.mkdirs();
	    File tmpFile = File.createTempFile("report", "." + outputType, dir);
	    OutputStream out = new FileOutputStream(tmpFile);
	    jasperReportRunner.runReport(con, params, out, getServletContext(), response, request);
	    out.flush();
	    out.close();

	    if (outputType == null)
		outputType = ExporterFactory.getDefaultType();
	    response.setHeader("Content-Disposition", "filename=\"report." + outputType + "\";");
	    // response.setContentType((String)extensions.get(outputType));
	    response.setContentLength((int) tmpFile.length());

	    BufferedInputStream in = new BufferedInputStream(new FileInputStream(tmpFile));
	    int b = -1;
	    while ((b = in.read()) != -1) {
		response.getOutputStream().write(b);
	    }
	    response.getOutputStream().flush();
	    in.close();
	    // instant cleaning
	    tmpFile.delete();

	    // AUDIT UPDATE
	    if (auditAccessUtils != null)
		auditAccessUtils.updateAudit(session,(String) profile.getUserUniqueIdentifier(), auditId, null, new Long(System
			.currentTimeMillis()), "EXECUTION_PERFORMED", null, null);
	} catch (Exception e) {
	    logger.error( "Error during report production \n\n " + e);
	    // AUDIT UPDATE
	    if (auditAccessUtils != null)
		auditAccessUtils.updateAudit(session,(String) profile.getUserUniqueIdentifier(), auditId, null, new Long(System
			.currentTimeMillis()), "EXECUTION_FAILED", e.getMessage(), null);
	    return;
	}

	monitor.stop();
	logger.debug("Request processed");
    }

    /**
     * @param params
     * @param parName
     * @param parValue
     */
    private void addParToParMap(Map params, String parName, String parValue) {
	logger.debug("IN.parName:"+parName+" /parValue:"+parValue);
	String newParValue;

	ParametersDecoder decoder = new ParametersDecoder();
	if (decoder.isMultiValues(parValue)) {
	    List values = decoder.decode(parValue);
	    newParValue = "";
	    for (int i = 0; i < values.size(); i++) {
		newParValue += (i > 0 ? "," : "");
		newParValue += values.get(i);
	    }

	} else {
	    newParValue = parValue;
	}

	params.put(parName, newParValue);
	logger.debug("OUT");
    }

    /**
     * This method, based on the data sources table, gets a database connection
     * and return it
     * 
     * @return the database connection
     */
    private Connection getConnection(String requestConnectionName,HttpSession session,String userId,String documentId) {
	logger.debug("IN.documentId:"+documentId);
	DataSourceServiceProxy proxyDS = new DataSourceServiceProxy(userId,session);
	SpagoBiDataSource ds =null;
	if (requestConnectionName!=null){
	    ds =proxyDS.getDataSourceByLabel(requestConnectionName);
	}else{
	    ds =proxyDS.getDataSource(documentId);
	}

	if (ds==null) {
	    logger.warn("Data Source IS NULL. There are problems reading DataSource informations");
	    return null;
	}
	// get connection
	String jndi = ds.getJndiName();
	if (jndi != null && !jndi.equals("")) {
	    logger.debug("OUT");
	    return getConnectionFromJndiDS(ds.getJndiName());
	} else {
	    logger.debug("OUT");
	    return getDirectConnection(ds);
	}
    }

    /**
     * Get the connection from JNDI
     * 
     * @param jndiName
     *                String describing data connection
     * @return Connection to database
     */
    private Connection getConnectionFromJndiDS(String jndiName) {
	logger.debug("IN");	
	Connection connection = null;
	Context ctx;
	String resName = jndiName;
	logger.debug("resName:"+resName);
	try {
	    ctx = new InitialContext();
	    DataSource ds = (DataSource) ctx.lookup(resName);
	    connection = ds.getConnection();
	} catch (NamingException ne) {
	    logger.error("JNDI error", ne);
	} catch (SQLException sqle) {
	    logger.error("Cannot retrive connection", sqle);
	}finally{
	    logger.debug("OUT");
	}
	return connection;
    }

    /**
     * Get the connection using jdbc
     * 
     * @param connectionConfig
     *                SpagoBiDataSource describing data connection
     * @return Connection to database
     */
    private Connection getDirectConnection(SpagoBiDataSource connectionConfig) {
	logger.debug("IN");
	Connection connection = null;
	try {
	    String driverName = connectionConfig.getDriver();
	    Class.forName(driverName);
	    String url = connectionConfig.getUrl();
	    String username = connectionConfig.getUser();
	    String password = connectionConfig.getPassword();
	    connection = DriverManager.getConnection(url, username, password);
	} catch (ClassNotFoundException e) {
	    logger.error("Driver not found", e);
	} catch (SQLException e) {
	    logger.error("Cannot retrive connection", e);
	}finally{
		logger.debug("OUT");
	}
	return connection;
    }




}
