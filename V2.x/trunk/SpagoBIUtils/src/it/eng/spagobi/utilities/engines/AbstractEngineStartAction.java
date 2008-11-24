/**
Copyright (c) 2005-2008, Engineering Ingegneria Informatica s.p.a.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of 
      conditions and the following disclaimer.
      
    * Redistributions in binary form must reproduce the above copyright notice, this list of 
      conditions and the following disclaimer in the documentation and/or other materials 
      provided with the distribution.
      
    * Neither the name of the Engineering Ingegneria Informatica s.p.a. nor the names of its contributors may
      be used to endorse or promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE

**/
package it.eng.spagobi.utilities.engines;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.services.content.bo.Content;
import it.eng.spagobi.services.datasource.bo.SpagoBiDataSource;
import it.eng.spagobi.services.proxy.ContentServiceProxy;
import it.eng.spagobi.services.proxy.DataSourceServiceProxy;
import it.eng.spagobi.utilities.ParametersDecoder;
import it.eng.spagobi.utilities.service.AbstractBaseHttpAction;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import sun.misc.BASE64Decoder;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class AbstractEngineStartAction extends AbstractBaseHttpAction {
		
	private String userId;
	private String userUniqueIdentifier;
	private String auditId;
	private String documentId;
	private SpagoBiDataSource dataSource;
	private Locale locale;	
	private EngineAnalysisMetadata analysisMetadata;
	private byte[] analysisStateRowData;
	
	private SourceBean template;
	
	private ContentServiceProxy contentProxy;
	private AuditServiceProxy auditProxy;
	
	
	private static final BASE64Decoder DECODER = new BASE64Decoder();
	
	public static final String USER_ID = IEngUserProfile.ENG_USER_PROFILE;
	public static final String AUDIT_ID = "SPAGOBI_AUDIT_ID";
	public static final String DOCUMENT_ID = "document";
	
	public static final String COUNTRY = "country";
	public static final String LANGUAGE = "language";
	
	public static final String SUBOBJ_ID = "subobjectId";
	public static final String SUBOBJ_NAME = "nameSubObject";
	public static final String SUBOBJ_DESCRIPTION = "descriptionSubObject";
	public static final String SUBOBJ_VISIBILITY = "visibilitySubObject";
		
	/**
     * Logger component
     */
    public static transient Logger logger = Logger.getLogger(AbstractEngineStartAction.class);
	
    
    
    
    /* (non-Javadoc)
     * @see it.eng.spagobi.utilities.service.AbstractBaseHttpAction#init(it.eng.spago.base.SourceBean)
     */
    public void init(SourceBean config) {
        super.init(config);
    } 
	
	/* (non-Javadoc)
	 * @see it.eng.spago.dispatching.service.ServiceIFace#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) throws SpagoBIEngineException {
		setRequest(request);
		setResponse(response);				
	}
	
	
	/**
	 * User profile is loaded by the SpagoBiAccessFilter.
	 * 
	 * @return the unique id of the given user
	 */
    public String getUserId() {
    	IEngUserProfile profile = null;
    	
    	if(userId == null) {
    		profile =(IEngUserProfile) getAttributeFromHttpSession( USER_ID );    	
        	userId = (String)profile.getUserUniqueIdentifier();
    	}
    	
    	return userId;
    }
    
    /**
	 * User profile is loaded by the SpagoBiAccessFilter.
	 * 
	 * @return the unique id of the given user
	 */
    public String getUserIdentifier() {
    	IEngUserProfile profile = null;
    	
    	if(userUniqueIdentifier == null) {
    		profile =(IEngUserProfile) getAttributeFromHttpSession( USER_ID );    	
    		userUniqueIdentifier = (String)profile.getUserUniqueIdentifier();
    	}
    	
    	return userUniqueIdentifier;
    }
    
    /**
     * Gets the audit id.
     * 
     * @return the audit id
     */
    public String getAuditId() {    	
    	if(auditId == null) {
    		auditId = (String)getAttribute( AUDIT_ID );
    		auditId = (String)getHttpRequest().getAttribute( AUDIT_ID );
    		auditId = getHttpRequest().getParameter( AUDIT_ID );
    	}
    	return auditId;
		
    }
    
    /**
     * Gets the document id.
     * 
     * @return the document id
     */
    public String getDocumentId() {
    	String documentIdInSection = null;
    
    	if(documentId == null) {
	    	documentIdInSection = getAttributeFromHttpSessionAsString( DOCUMENT_ID );
	    	logger.debug("documentId in Session:" + documentIdInSection);
	    	
	    	if( requestContainsAttribute( DOCUMENT_ID ) ) {
	    		documentId = getAttributeAsString( DOCUMENT_ID );
	    	} else {
	    		documentId = documentIdInSection;
	    		logger.debug("documentId has been taken from session");
	    	}
    	}
    	
    	return documentId;   	
    }
    
    /**
     * Gets the template.
     * 
     * @return the template
     */
    public SourceBean getTemplate() {
    	if(template == null) {
    		template = getTemplate( getUserId(), getDocumentId() );
    	}
    	return template;
    }
    
    private SourceBean getTemplate(String userId, String documentId) {
		SourceBean templateSB = null;
		Content template = null;
		String templateContent = null;
		
		contentProxy = getContentServiceProxy();
		HashMap requestParameters = ParametersDecoder.getDecodedRequestParameters(this.getHttpRequest());
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
    
    
    /**
     * Gets the data source.
     * 
     * @return the data source
     */
    public SpagoBiDataSource getDataSource() {
    	DataSourceServiceProxy proxyDS;
    	
    	if(dataSource == null) {
    		proxyDS = new DataSourceServiceProxy( getUserId() , getHttpSession() );
    		dataSource = proxyDS.getDataSource( getDocumentId() );
    	}
		
		return dataSource;
    }
    
    /**
     * Gets the locale.
     * 
     * @return the locale
     */
    public Locale getLocale() {
    	String language;
		String country;
		
    	if(locale == null) {
    		
    		logger.debug("IN");
    		
    		language = getAttributeAsString( LANGUAGE );
    		country = getAttributeAsString( COUNTRY );
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
    
    /**
     * Gets the analysis metadata.
     * 
     * @return the analysis metadata
     */
    public EngineAnalysisMetadata getAnalysisMetadata() {
		if( analysisMetadata != null) {
			return analysisMetadata;
		}
    	
		logger.debug("IN");
		
		analysisMetadata = new EngineAnalysisMetadata();
		
    	if( requestContainsAttribute(SUBOBJ_ID) ) {
			
    		Integer id = getAttributeAsInteger( SUBOBJ_ID );
    		if(id == null) {
    			logger.warn( "Value [" + getAttribute( SUBOBJ_ID ).toString() + "] is not a valid subobject id");
    		} 
    		analysisMetadata.setId(id);
    		
			if( requestContainsAttribute( SUBOBJ_NAME ) ) {
				analysisMetadata.setName( getAttributeAsString( SUBOBJ_NAME ) );
			} else {
				logger.warn("No name attribute available in request for subobject [" + getAttributeAsString( SUBOBJ_ID ) + "]");
				analysisMetadata.setName(  getAttributeAsString( SUBOBJ_ID ) );
			}
    		
			if( requestContainsAttribute( SUBOBJ_DESCRIPTION ) ) {
				analysisMetadata.setDescription( getAttributeAsString( SUBOBJ_DESCRIPTION ) );
			} else {
				logger.warn("No description attribute available in request for subobject [" + getAttributeAsString( SUBOBJ_ID ) + "]");
				analysisMetadata.setDescription( "" );
			}
			
			if( requestContainsAttribute( SUBOBJ_VISIBILITY ) ) {
				if( requestContainsAttribute(SUBOBJ_VISIBILITY, "Public") ) {
					analysisMetadata.setScope( EngineAnalysisMetadata.PUBLIC_SCOPE );
				} else {
					logger.warn("No visibility attribute available in request for subobject [" + getAttributeAsString( SUBOBJ_ID ) + "]");
					analysisMetadata.setScope( EngineAnalysisMetadata.PRIVATE_SCOPE );
				}			
			}
    	}
    	
    	logger.debug("OUT");
    	
    	return analysisMetadata;
	}

	/**
	 * Gets the analysis state row data.
	 * 
	 * @return the analysis state row data
	 */
	public byte[] getAnalysisStateRowData() {
		Content spagoBISubObject;
    	byte[] rowData;
    	
		if ( analysisStateRowData == null && getAnalysisMetadata().getId() != null ) {
			
			logger.debug("IN");
			
			spagoBISubObject = getContentServiceProxy().readSubObjectContent( getAnalysisMetadata().getId().toString() );	
			try {
				rowData = DECODER.decodeBuffer( spagoBISubObject.getContent() );
				analysisStateRowData = rowData;
			} catch (IOException e) {
				logger.warn( "Impossible to decode the content of " + getAnalysisMetadata().getId().toString() + " subobject");
    			return null;
			}
			
			logger.debug("OUT");
		}
		
		return analysisStateRowData;
	}
    	
   public ContentServiceProxy getContentServiceProxy() {
	   if(contentProxy == null) {
		   contentProxy = new ContentServiceProxy(userId, getHttpRequest().getSession());
	   }	   
	    
	   return contentProxy;
   }
   
   public AuditServiceProxy getAuditServiceProxy() {
	   if(auditProxy == null) {
		   //auditProxy = new AuditServiceProxy(getAuditId(), getUserId(), getHttpRequest().getSession());
		   auditProxy = new AuditServiceProxy(getAuditId(), getUserIdentifier(), getHttpRequest().getSession());
	   }	   
	    
	   return auditProxy;
   }
   
   public Map getEnv() {
	   Map env = new HashMap();
	   
	   copyRequestParametersIntoEnv(env, getRequest());
	   env.put(EngineConstants.ENV_DATASOURCE, getDataSource());
	   env.put(EngineConstants.ENV_DOCUMENT_ID, getDocumentId());
	   env.put(EngineConstants.ENV_CONTENT_SERVICE_PROXY, getContentServiceProxy());
	   env.put(EngineConstants.ENV_AUDIT_SERVICE_PROXY, getAuditServiceProxy() );
	   env.put(EngineConstants.ENV_LOCALE, getLocale()); 
		
	   return env;
   }
    
   /**
	 * Copy request parameters into env.
	 * 
	 * @param env the env
	 * @param serviceRequest the service request
	 */
	public void copyRequestParametersIntoEnv(Map env, SourceBean serviceRequest) {
		Set parameterStopList = null;
		List requestParameters = null;
		
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
		
		
		requestParameters = serviceRequest.getContainedAttributes();
		for(int i = 0; i < requestParameters.size(); i++) {
			SourceBeanAttribute attrSB = (SourceBeanAttribute)requestParameters.get(i);
			logger.debug("Parameter [" + attrSB.getKey() + "] has been read from request");
			logger.debug("Parameter [" + attrSB.getKey() + "] is of type  " + attrSB.getClass().getName());
			logger.debug("Parameter [" + attrSB.getKey() + "] is equal to " + attrSB.getValue().toString());
			
			if(parameterStopList.contains(attrSB.getKey())) {
				logger.debug("Parameter [" + attrSB.getKey() + "] copyed into environment parameters list: FALSE");
				continue;
			}
			
			env.put(attrSB.getKey(), decodeParameterValue(attrSB.getValue().toString()) );
			logger.debug("Parameter [" + attrSB.getKey() + "] copyed into environment parameters list: TRUE");
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
	
}
