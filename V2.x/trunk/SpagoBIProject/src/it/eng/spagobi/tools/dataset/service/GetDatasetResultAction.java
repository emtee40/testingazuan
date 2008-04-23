package it.eng.spagobi.tools.dataset.service;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dispatching.action.AbstractHttpAction;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.monitoring.dao.AuditManager;
import it.eng.spagobi.services.common.SsoServiceFactory;
import it.eng.spagobi.services.common.SsoServiceInterface;
import it.eng.spagobi.services.security.bo.SpagoBIUserProfile;
import it.eng.spagobi.services.security.exceptions.SecurityException;
import it.eng.spagobi.services.security.service.ISecurityServiceSupplier;
import it.eng.spagobi.services.security.service.SecurityServiceSupplierFactory;
import it.eng.spagobi.tools.dataset.bo.DataSet;
import it.eng.spagobi.tools.dataset.bo.DataSetParameterItem;
import it.eng.spagobi.tools.dataset.bo.DataSetParametersList;

import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class GetDatasetResultAction extends AbstractHttpAction {

    private static transient Logger logger = Logger.getLogger(GetDatasetResultAction.class);

    public void service(SourceBean requestSB, SourceBean responseSB) throws Exception {
	logger.debug("IN");

	freezeHttpResponse();
	HttpServletRequest request = getHttpRequest();
	HttpServletResponse response = getHttpResponse();

	// AUDIT UPDATE
	Integer auditId = null;
	String auditIdStr = request.getParameter("SPAGOBI_AUDIT_ID");
	if (auditIdStr == null) {
	    logger.warn("Audit record id not specified! No operations will be performed");
	} else {
	    logger.debug("Audit id = [" + auditIdStr + "]");
	    auditId = new Integer(auditIdStr);
	}
	AuditManager auditManager = AuditManager.getInstance();
	if (auditId != null) {
	    auditManager.updateAudit(auditId, new Long(System.currentTimeMillis()), null, "EXECUTION_STARTED", null,
		    null);
	}
	IEngUserProfile profile = null;
	String userId = null;
	try {
	    RequestContainer reqCont = RequestContainer.getRequestContainer();
	    SessionContainer sessCont = reqCont.getSessionContainer();
	    SessionContainer permSess = sessCont.getPermanentContainer();
	    profile = (IEngUserProfile) permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
	    if (profile == null) {
		ConfigSingleton config = ConfigSingleton.getInstance();
		SourceBean validateSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.ACTIVE");
		String active = (String) validateSB.getCharacters();
		if (active != null && active.equals("true")) {
		    SsoServiceInterface proxy = SsoServiceFactory.createProxyService();
		    userId = proxy.readUserId(request.getSession());
		    logger.debug("got userId from IProxyService=" + userId);
		} else {
		    userId = request.getParameter("userId");
		    logger.debug("got userId from Request=" + userId);
		}

		ISecurityServiceSupplier supplier = SecurityServiceSupplierFactory.createISecurityServiceSupplier();
		try {
		    SpagoBIUserProfile user = supplier.createUserProfile(userId);
		    profile = new UserProfile(user);
		} catch (Exception e) {
		    logger.error("Exception while creating user profile", e);
		    throw new SecurityException();
		}

	    }
	    userId = (String) profile.getUserUniqueIdentifier();

	    String documentId = request.getParameter("documentId");
	    logger.debug("got parameter documentId=" + documentId);
   
	    
	  

		String result="";
			String dataName = (String)request.getParameter("datasetid");
			if((dataName==null) || dataName.trim().equals("")) {
				response.getOutputStream().write(createErrorMsg(10, "Param dataset not found"));
				response.getOutputStream().flush();
	 		return;
			}
			HashMap parameters=new HashMap();

			  try{
			// if dataset needs parameter I must recover them from request
			 DataSet dataSet=DAOFactory.getDataSetDAO().loadDataSetByID(Integer.valueOf(dataName)); 
			 if(dataSet!=null){	
			 	String parametersXML=dataSet.getParameters();
			 	DataSetParametersList dsList=new DataSetParametersList(parametersXML);
			 	for (Iterator iterator = dsList.getItems().iterator(); iterator.hasNext();) {
					DataSetParameterItem item = (DataSetParameterItem) iterator.next();
					String name=item.getName();
					// check if parameter is in request
					if(requestSB.getAttribute(name)!=null){
						String value=((Object)requestSB.getAttribute(name)).toString();
						parameters.put(name, value);
						
					}
					
				}
					}
			
	    } catch (Exception e) {
	    	logger.error("Exception while recovering attributes needed by dataset", e);
	    	response.getOutputStream().write(createErrorMsg(10, "Error while recovering attributes needed by dataset"));
			response.getOutputStream().flush();	    
			return;
	    }
			 
			
			
			String res=DataSetAccessFunctions.getDataSetResult(profile, dataName,parameters);
			if (res!=null){
				SourceBean sbRows=SourceBean.fromXMLString(res);
				//SourceBean myResultBean=(SourceBean)sbRows.getAttribute("ROW");
				result=sbRows.toString();
			}
	    
	    // replace special characters
	    result = result.replaceAll("&lt;", "<");
	    result = result.replaceAll("&gt;", ">");
	    //result = result.replaceAll("\"", "'");
	    result= result.replaceAll("<ROWS", "<rows");
	    result= result.replaceAll("<ROW", "<row");
	    
	    
	    // write the result into response
	    response.getOutputStream().write(result.getBytes());
	    response.getOutputStream().flush();
	    // AUDIT UPDATE
	    auditManager.updateAudit(auditId, null, new Long(System.currentTimeMillis()), "EXECUTION_PERFORMED", null,
		    null);

	} catch (Exception e) {
	    logger.error("Exception", e);
	    // AUDIT UPDATE
	    auditManager.updateAudit(auditId, null, new Long(System.currentTimeMillis()), "EXECUTION_FAILED", e
		    .getMessage(), null);
    	response.getOutputStream().write(createErrorMsg(10, "Error"));
		response.getOutputStream().flush();	    
		return;
	} finally {
	    logger.debug("OUT");
	}
    }


    private byte[] createErrorMsg(int code, String message) {
	String response = "<response><error><code>" + code + "</code>" + "<message>" + message
		+ "</message></error></response>";
	return response.getBytes();
    }
	
	
	
	
	
}
