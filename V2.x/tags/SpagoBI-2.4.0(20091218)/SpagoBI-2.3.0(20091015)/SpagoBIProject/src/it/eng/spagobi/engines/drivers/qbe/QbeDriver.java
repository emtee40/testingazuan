/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.engines.drivers.qbe;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjTemplate;
import it.eng.spagobi.analiticalmodel.document.bo.SubObject;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.ParameterValuesEncoder;
import it.eng.spagobi.commons.utilities.messages.IMessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.engines.drivers.AbstractDriver;
import it.eng.spagobi.engines.drivers.EngineURL;
import it.eng.spagobi.engines.drivers.IEngineDriver;
import it.eng.spagobi.engines.drivers.exceptions.InvalidOperationRequest;

import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;



/**
 * Driver Implementation (IEngineDriver Interface) for Qbe External Engine. 
 */
public class QbeDriver extends AbstractDriver implements IEngineDriver {
	
	static private Logger logger = Logger.getLogger(QbeDriver.class);
	 
		
	/**
	 * Returns a map of parameters which will be send in the request to the
	 * engine application.
	 * 
	 * @param profile Profile of the user
	 * @param roleName the name of the execution role
	 * @param biobject the biobject
	 * 
	 * @return Map The map of the execution call parameters
	 */
	public Map getParameterMap(Object biobject, IEngUserProfile profile, String roleName) {
		logger.debug("IN");
		
		Map map = new Hashtable();
		try{
			BIObject biobj = (BIObject)biobject;
			map = getMap(biobj);
			// This parameter is not required
			//map.put("query", "#");
		} catch (ClassCastException cce) {
			logger.error("The parameter is not a BIObject type", cce);
		} 
		
		map = applySecurity(map, profile);
		map = addDocumentParametersInfo((BIObject) biobject, map);
		map = applyService(map);
		logger.debug("OUT");
		return map;
	}
	
	/**
	 * Returns a map of parameters which will be send in the request to the
	 * engine application.
	 * 
	 * @param subObject SubObject to execute
	 * @param profile Profile of the user
	 * @param roleName the name of the execution role
	 * @param object the object
	 * 
	 * @return Map The map of the execution call parameters
	 */
	public Map getParameterMap(Object object, Object subObject, IEngUserProfile profile, String roleName) {
	
		logger.debug("IN");
		
		if(subObject == null) {
			return getParameterMap(object, profile, roleName);
		}
		
		Map map = new Hashtable();
		try{
			BIObject biobj = (BIObject)object;
			map = getMap(biobj);
			SubObject subObjectDetail = (SubObject) subObject;
			
			Integer id = subObjectDetail.getId();
			
			map.put("nameSubObject",  subObjectDetail.getName() != null? subObjectDetail.getName(): "" );
			map.put("descriptionSubObject", subObjectDetail.getDescription() != null? subObjectDetail.getDescription(): "");
			map.put("visibilitySubObject", subObjectDetail.getIsPublic().booleanValue()?"Public":"Private" );
	        map.put("subobjectId", subObjectDetail.getId());
		
			
		} catch (ClassCastException cce) {
		    logger.error("The second parameter is not a SubObjectDetail type", cce);
		}
		
		
		map = applySecurity(map, profile);
		map = addDocumentParametersInfo((BIObject)object, map);
		map = applyService(map);
		map.put("isFromCross", "false");
		logger.debug("OUT");		
		
		return map;
		
	}
	
	/**
	 * Adds a system parameter contaning info about document parameters (url name, label, type)
	 * @param biobject The BIObject under execution
	 * @param map The parameters map
	 * @return the modified map with the new parameter
	 */
    private Map addDocumentParametersInfo(BIObject biobject, Map map) {
    	logger.debug("IN");
    	JSONArray parametersJSON = new JSONArray();
    	try {
	    	Locale locale = getLocale();
			List parameters = biobject.getBiObjectParameters();
			if (parameters != null && parameters.size() > 0) {
				Iterator iter = parameters.iterator();
				while (iter.hasNext()) {
					BIObjectParameter biparam = (BIObjectParameter) iter.next();
					JSONObject jsonParam = new JSONObject();
					jsonParam.put("id", biparam.getParameterUrlName());
					IMessageBuilder msgBuilder = MessageBuilderFactory.getMessageBuilder();
					jsonParam.put("label", msgBuilder.getUserMessage(biparam.getLabel(), SpagoBIConstants.DEFAULT_USER_BUNDLE, locale));
					jsonParam.put("type", biparam.getParameter().getType());
					parametersJSON.put(jsonParam);
				}
			}
    	} catch (Exception e) {
    		logger.error("Error while adding document parameters info", e);
    	}
    	map.put("SBI_DOCUMENT_PARAMETERS", parametersJSON.toString());
    	logger.debug("OUT");
		return map;
	}

	/**
     * Starting from a BIObject extracts from it the map of the paramaeters for the
     * execution call
     * @param biobj BIObject to execute
     * @return Map The map of the execution call parameters
     */    
	private Map getMap(BIObject biobj) {
		logger.debug("IN");
		
		Map pars;
		ObjTemplate objtemplate;
		byte[] template;
		String documentId;
		
		pars = new Hashtable();
		try {
		
			objtemplate = DAOFactory.getObjTemplateDAO().getBIObjectActiveTemplate(biobj.getId());		    
			if (objtemplate == null) {
		    	throw new Exception("Active Template null");
		    }
			
			template = DAOFactory.getBinContentDAO().getBinContent(objtemplate.getBinId());		    
			if (template == null) {
				throw new Exception("Content of the Active template null");
			}
			
			documentId = biobj.getId().toString();
			pars.put("document", documentId);
			logger.debug("Add document parameter:" + documentId);
	        
			pars = addBIParameters(biobj, pars);
        
		} catch (Exception e) {
		    logger.error("Error while recovering execution parameter map: \n" + e);
		}
		

		logger.debug("OUT");
		
		return pars;
	} 
	
    /**
     * Add into the parameters map the BIObject's BIParameter names and values
     * @param biobj BIOBject to execute
     * @param pars Map of the parameters for the execution call  
     * @return Map The map of the execution call parameters
     */
	private Map addBIParameters(BIObject biobj, Map pars) {
		logger.debug("IN");
		
		if(biobj==null) {
			logger.warn("BIObject parameter null");	    
		    return pars;
		}
		
		ParameterValuesEncoder parValuesEncoder = new ParameterValuesEncoder();
		if(biobj.getBiObjectParameters() != null){
			BIObjectParameter biobjPar = null;
			for(Iterator it = biobj.getBiObjectParameters().iterator(); it.hasNext();){
				try {
					biobjPar = (BIObjectParameter)it.next();									
					String value = parValuesEncoder.encode(biobjPar);
					pars.put(biobjPar.getParameterUrlName(), value);
					logger.debug("Add parameter:"+biobjPar.getParameterUrlName()+"/"+value);
				} catch (Exception e) {
					logger.error("Error while processing a BIParameter",e);
				}
			}
		}
		
		logger.debug("OUT");
  		return pars;
	}
	
	 /**
 	 * Function not implemented. Thid method should not be called
 	 * 
 	 * @param biobject The BIOBject to edit
 	 * @param profile the profile
 	 * 
 	 * @return the edits the document template build url
 	 * 
 	 * @throws InvalidOperationRequest the invalid operation request
 	 */
    public EngineURL getEditDocumentTemplateBuildUrl(Object biobject, IEngUserProfile profile)
	throws InvalidOperationRequest {
    	logger.warn("Function not implemented");
    	throw new InvalidOperationRequest();
    }

    /**
     * Function not implemented. Thid method should not be called
     * 
     * @param biobject  The BIOBject to edit
     * @param profile the profile
     * 
     * @return the new document template build url
     * 
     * @throws InvalidOperationRequest the invalid operation request
     */
    public EngineURL getNewDocumentTemplateBuildUrl(Object biobject, IEngUserProfile profile)
	throws InvalidOperationRequest {
    	logger.warn("Function not implemented");
    	throw new InvalidOperationRequest();
    }

    
        
	protected Map applyService(Map pars) {
		logger.debug("IN");
		pars.put("ACTION_NAME", "SPAGO_BI_START_ACTION");
		pars.put("NEW_SESSION", "TRUE");
		logger.debug("OUT");
		return pars;
	}
	
    private Locale getLocale() {
    	logger.debug("IN");
		try {
			Locale locale = null;
			RequestContainer requestContainer = RequestContainer.getRequestContainer();
			SessionContainer permanentSession = requestContainer.getSessionContainer().getPermanentContainer();
			String language = (String) permanentSession.getAttribute(SpagoBIConstants.AF_LANGUAGE);
			String country = (String) permanentSession.getAttribute(SpagoBIConstants.AF_COUNTRY);
			logger.debug("Language retrieved: [" + language + "]; country retrieved: [" + country + "]");
			locale = new Locale(language, country);
			return locale;
		} catch (Exception e) {
		    logger.error("Error while getting locale; using default one", e);
		    return MessageBuilder.getDefaultLocale();
		} finally  {
			logger.debug("OUT");
		}	
	}
}

