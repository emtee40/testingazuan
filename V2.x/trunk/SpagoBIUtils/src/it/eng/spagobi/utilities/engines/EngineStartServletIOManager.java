/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.utilities.engines;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import sun.misc.BASE64Decoder;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.services.content.bo.Content;
import it.eng.spagobi.services.proxy.ContentServiceProxy;
import it.eng.spagobi.services.proxy.DataSetServiceProxy;
import it.eng.spagobi.services.proxy.DataSourceServiceProxy;
import it.eng.spagobi.services.proxy.EventServiceProxy;
import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.datasource.bo.IDataSource;
import it.eng.spagobi.utilities.ParametersDecoder;
import it.eng.spagobi.utilities.exceptions.SpagoBIRuntimeException;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class EngineStartServletIOManager extends BaseServletIOManager {
	
	private String userId;
	private String userUniqueIdentifier;
	private String auditId;
	private String documentId;
	private Locale locale;
	
	private Content template;
	
	private ContentServiceProxy contentProxy;
	private AuditServiceProxy auditProxy;
	private EventServiceProxy eventProxy;
	private DataSourceServiceProxy datasourceProxy;
    private DataSetServiceProxy datasetProxy;
    
    IDataSource dataSource;
    IDataSet dataSet;
	
	private Map env;
	
	private static final BASE64Decoder DECODER = new BASE64Decoder();
	
	public static final String AUDIT_ID = "SPAGOBI_AUDIT_ID";
	public static final String DOCUMENT_ID = "document";
	
	public static final String COUNTRY = "country";
	public static final String LANGUAGE = "language";
	
	private Logger logger = Logger.getLogger(EngineStartServletIOManager.class);
	
	
	
	public EngineStartServletIOManager(HttpServletRequest request, HttpServletResponse response) {
		super(request, response);
	}
	
	public EngineStartServletIOManager(BaseServletIOManager baseIOManager) {
		this(baseIOManager.getRequest(), baseIOManager.getResponse());
	}
	
	 public UserProfile getUserProfile() {
		return (UserProfile) getParameterFromSession( IEngUserProfile.ENG_USER_PROFILE ); 
	 }

	 public String getUserId( ) {
	   	UserProfile profile = null;
	    	
	   	if(userId == null) {  	
	       	userId = (String)getUserProfile().getUserId();
	   	}
	   	
	   	return userId;
	 }
	    
	 public String getUserIdentifier() {
	   	IEngUserProfile profile = null;
	   	
	   	if(userUniqueIdentifier == null) {	
	   		userUniqueIdentifier = (String)getUserProfile().getUserUniqueIdentifier();
	   	}
	   	
	   	return userUniqueIdentifier;
	 }
	    
	 public String getDocumentId() {
	   	String documentIdInSection = null;
	        
	   	if(documentId == null) {
	   		documentIdInSection = getParameterFromSessionAsString( DOCUMENT_ID );
	    	logger.debug("documentId in Session:" + documentIdInSection);
	    	
	    	if( requestContainsParameter( DOCUMENT_ID ) ) {
	    		documentId = getParameterAsString( DOCUMENT_ID );
	    	} else {
	    		documentId = documentIdInSection;
	    		logger.debug("documentId has been taken from session");
	    	}
	   	}
	    	
	   	return documentId;
	 }
	    
	 /**
	  * Gets the audit id.
	  * 
	  * @return the audit id
	  */
	 public String getAuditId() {    	
	  	if(auditId == null) {
	   		auditId = getParameterAsString( AUDIT_ID );
	   	}
	   	return auditId;		
	 }
	    
	 
	 
	  public SourceBean getTemplateAsSourceBean() {
		  SourceBean templateSB = null;
		  try {
			  templateSB = SourceBean.fromXMLString(getTemplateAsString());
		  } catch (SourceBeanException e) {
				logger.error("Impossible to decode template's content\n" + e);
				throw new SpagoBIRuntimeException("Impossible to decode template's content [" + template.getFileName() + "]", e);
				
		  }		
		  
		  return templateSB;
	  }
	   
	  
	  public String getTemplateAsString() {
		  return new String(getTemplate());
	  }
	  
	  public byte[] getTemplate() {	
		  byte[] templateContent = null;
		  
		  if(template == null) {
		  		contentProxy = getContentServiceProxy();
				HashMap requestParameters = ParametersDecoder.getDecodedRequestParameters( getRequestContainer() );
				template = contentProxy.readTemplate(documentId, requestParameters);
				logger.debug("Read the template ["+ template.getFileName() + "]");	
		  }
		  
		  
		  try {
			  templateContent = DECODER.decodeBuffer(template.getContent());
		  } catch (IOException e) {
			  throw new SpagoBIRuntimeException("Impossible to get content from template [" + template.getFileName() + "]", e);
		  }
		
		  return templateContent;
	}
	  
	private SourceBean getTemplateX(String userId, String documentId) {
	   	SourceBean templateSB = null;
		Content template = null;
		String templateContent = null;
			
		contentProxy = getContentServiceProxy();
		HashMap requestParameters = ParametersDecoder.getDecodedRequestParameters( getRequestContainer() );
		template = contentProxy.readTemplate(documentId, requestParameters);
		logger.debug("Read the template."+ template.getFileName());	
			
			
		try {
			templateContent = new String( DECODER.decodeBuffer(template.getContent()) );
			templateSB = SourceBean.fromXMLString(templateContent);
			logger.debug("Read the template."+ template.getFileName());	
		} catch (IOException e) {
			logger.error("Impossible to get content from template\n" + e);
			e.printStackTrace();
		} catch (SourceBeanException e) {
			logger.error("Impossible to decode template's content\n" + e);
			e.printStackTrace();
		}		
			
			
		return templateSB;
	}
	
	
	
	public IDataSource getDataSource() {
	    	if(dataSource == null) {
	    		String connectionName = getParameterAsString("connectionName");
	    		if(connectionName != null) {
	    			logger.debug("Using dataSource passed in as parameter [" + connectionName + "]");	
	    			dataSource = getDataSourceServiceProxy().getDataSourceByLabel( connectionName );
	    		} else {
	    			logger.debug("Using default dataSource");	
	    			dataSource = getDataSourceServiceProxy().getDataSource( getDocumentId() );
	    		}
	    		
	    		// handle multischema
	    		if (dataSource != null && dataSource.checkIsJndi() && dataSource.checkIsMultiSchema()) {
	    			logger.debug("Multi schema enabled [TRUE]");
	    			logger.debug("Schema profile atribute name is equals to [" + dataSource.getSchemaAttribute() + "]");
	    			
	    			if (dataSource.getSchemaAttribute() != null) {
	    				
	    				String schema;
						try {
							schema = (String)getUserProfile().getUserAttribute( dataSource.getSchemaAttribute() );
							logger.debug("Schema profile atribute value is equals to [" + schema + "]");
		    				if(schema != null) {
		    					dataSource.setJndi( dataSource.getJndi()+ schema);
		    				}
						} catch (EMFInternalError e) {
							logger.warn("Impossible to read attribute [" + dataSource.getSchemaAttribute() + "] from profile of user [" + getUserId()+ "]", e);
						}
	    					    				
	    			}
	    		}
	    		
	    	}
			
			return dataSource;
	    }
	    
	    public IDataSet getDataSet() {
	    	if(dataSet == null) {
	    		dataSet = getDataSetServiceProxy().getDataSet( getDocumentId() );
	    	}
			
			return dataSet;    	
	    }
	    
	    public Locale getLocale() {
	    	String language;
			String country;
			
	    	if(locale == null) {
	    		
	    		logger.debug("IN");
	    		
	    		language = getParameterAsString( LANGUAGE );
	    		country = getParameterAsString( COUNTRY );
	    		logger.debug("Locale parameters received: language = [" + language + "] ; country = [" + country + "]");

	    		try {
	    		    locale = new Locale(language, country); 
	    		} catch (Exception e) {
	    		    logger.debug("Error while creating Locale object from input parameters: language = [" + language
	    			    + "] ; country = [" + country + "]");
	    		    logger.debug("Creating default locale [en,US].");
	    		    locale = new Locale("en", "US");
	    		}
	    		
	    		logger.debug("IN");
	    	}
	    	
	    	return locale;
	    }
	    
	    public void auditServiceStartEvent() {
	    	if(getAuditServiceProxy() != null) {
	    		getAuditServiceProxy().notifyServiceStartEvent();
	    	} else {
	    		logger.warn("Impossible to log START-EVENT because the audit proxy has not been instatiated properly");
	    	}
		}

		public void auditServiceErrorEvent(String msg) {
			if(getAuditServiceProxy() != null) {
	    		getAuditServiceProxy().notifyServiceErrorEvent(msg);
	    	} else {
	    		logger.warn("Impossible to log ERROR-EVENT because the audit proxy has not been instatiated properly");
	    	}
		}

		public void auditServiceEndEvent() {
			if(getAuditServiceProxy() != null) {
	    		getAuditServiceProxy().notifyServiceEndEvent();
	    	} else {
	    		logger.warn("Impossible to log END-EVENT because the audit proxy has not been instatiated properly");
	    	}		
		}
	    
	    
	    public ContentServiceProxy getContentServiceProxy() {
	 	   if(contentProxy == null) {
	 		   contentProxy = new ContentServiceProxy(getUserIdentifier(), getHttpSession());
	 	   }	   
	 	    
	 	   return contentProxy;
	    }
	    
	    public AuditServiceProxy getAuditServiceProxy() {
	 	   if(auditProxy == null && getAuditId() != null) {
	 		   auditProxy = new AuditServiceProxy(getAuditId(), getUserIdentifier(), getHttpSession());
	 	   }	   
	 	    
	 	   return auditProxy;
	    }
	    
	    public EventServiceProxy getEventServiceProxy() {
	  	   if(eventProxy == null) {
	  		 eventProxy = new EventServiceProxy(getUserIdentifier(), getHttpSession());
	  	   }	   
	  	    
	  	   return eventProxy;
	    }
	    
	    public DataSourceServiceProxy getDataSourceServiceProxy() {
	 	   if(datasourceProxy == null) {
	 		   datasourceProxy = new DataSourceServiceProxy( getUserIdentifier() , getHttpSession() );
	 	   }	   
	 	    
	 	   return datasourceProxy;
	    }
	    
	    public DataSetServiceProxy getDataSetServiceProxy() {
	 	   if(datasetProxy == null) {
	 		   datasetProxy = new DataSetServiceProxy(getUserIdentifier() , getHttpSession());
	 	   }	   
	 	    
	 	   return datasetProxy;
	    }
	    
	    
	    
	    public Map getEnv() {
	       if(eventProxy == null) {
		 	   env = new HashMap();
		 	   
		 	   copyRequestParametersIntoEnv(env);
		 	   env.put(EngineConstants.ENV_DATASOURCE, getDataSource());
		 	   env.put(EngineConstants.ENV_DOCUMENT_ID, getDocumentId());
		 	   env.put(EngineConstants.ENV_CONTENT_SERVICE_PROXY, getContentServiceProxy());
		 	   env.put(EngineConstants.ENV_AUDIT_SERVICE_PROXY, getAuditServiceProxy() );
		 	   env.put(EngineConstants.ENV_EVENT_SERVICE_PROXY, getEventServiceProxy() );
		 	   env.put(EngineConstants.ENV_LOCALE, getLocale()); 
	       }
	 		
	 	   return env;
	    }
	     
	    /**
	 	 * Copy request parameters into env.
	 	 * 
	 	 * @param env the env
	 	 * @param serviceRequest the service request
	 	 */
	 	public void copyRequestParametersIntoEnv(Map env) {
	 		Set parameterStopList = null;
	 		Iterator parameterNames = null;
	 		
	 		logger.debug("IN");
	 		
	 		parameterStopList = new HashSet();
	 		parameterStopList.add("template");
	 		parameterStopList.add("ACTION_NAME");
	 		parameterStopList.add("NEW_SESSION");
	 		parameterStopList.add("document");
	 		parameterStopList.add("spagobicontext");
	 		parameterStopList.add("BACK_END_SPAGOBI_CONTEXT");
	 		parameterStopList.add("userId");
	 		parameterStopList.add("auditId");
	 		
	 		
	 		
	 		parameterNames = getRequestContainer().getKeys().iterator();
	 		while( parameterNames.hasNext() ) {
	 			String parameterName = (String)parameterNames.next();
	 			Object parameterValue = this.getParameter(parameterName);
	 			logger.debug("Parameter [" + parameterName + "] has been read from request");
	 			logger.debug("Parameter [" + parameterName + "] is of type  " + parameterValue.getClass().getName());
	 			logger.debug("Parameter [" + parameterName + "] is equal to " + parameterValue);
	 			
	 			if(parameterStopList.contains(parameterName)) {
	 				logger.debug("Parameter [" + parameterName + "] copyed into environment parameters list: FALSE");
	 				continue;
	 			}
	 			
	 			env.put(parameterName, decodeParameterValue("" + parameterValue) );
	 			logger.debug("Parameter [" + parameterName + "] copyed into environment parameters list: TRUE");
	 		}

	 		logger.debug("OUT");
	 	}
	     
	    
	 	/**
	 	 * Decode parameter value.
	 	 * 
	 	 * @param parValue the par value
	 	 * 
	 	 * @return the string
	 	 */
	 	private String decodeParameterValue(String parValue) {
	 		String newParValue;
	 			
	 		ParametersDecoder decoder = new ParametersDecoder();
	 		if(decoder.isMultiValues(parValue)) {			
	 			List values = decoder.decode(parValue);
	 			newParValue = "";
	 			for(int i = 0; i < values.size(); i++) {
	 				newParValue += (i>0?",":"");
	 				newParValue += values.get(i);
	 			}
	 		} else {
	 			newParValue = parValue;
	 		}
	 			
	 		return newParValue;
	 	}
	 	
	 	public String getLocalizedMessage(String msg) {
			if(msg == null) return "";
			return EngineMessageBundle.getMessage(msg, getLocale());
		}
		
}
