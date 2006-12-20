/**
 * 
 * LICENSE: see 'LICENSE.sbi.drivers.jasperreports.txt' file
 * 
 */
package it.eng.spagobi.drivers.qbe;

import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.Subreport;
import it.eng.spagobi.bo.BIObject.SubObjectDetail;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IBIObjectDAO;
import it.eng.spagobi.bo.dao.ISubreportDAO;
import it.eng.spagobi.drivers.EngineURL;
import it.eng.spagobi.drivers.IEngineDriver;
import it.eng.spagobi.drivers.exceptions.InvalidOperationRequest;
import it.eng.spagobi.utilities.GeneralUtilities;
import it.eng.spagobi.utilities.ParameterValuesEncoder;
import it.eng.spagobi.utilities.PortletUtilities;
import it.eng.spagobi.utilities.SpagoBITracer;
import it.eng.spagobi.utilities.UploadedFile;

import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import sun.misc.BASE64Encoder;



/**
 * Driver Implementation (IEngineDriver Interface) for Qbe External Engine. 
 */
public class QbeDriver implements IEngineDriver {

	/**
	 * Returns a map of parameters which will be send in the request to the 
	 * engine application.
	 * @param biObject Object to execute
	 * @param profile Profile of the user 
	 * @param roleName the name of the execution role
	 * @return Map The map of the execution call parameters
	 */
	public Map getParameterMap(Object biobject, IEngUserProfile profile, String roleName) {
		Map map = new Hashtable();
		try{
			BIObject biobj = (BIObject)biobject;
			map = getMap(biobj);
			map.put("query", "#");
			map.put("user", profile.getUserUniqueIdentifier());
			Locale portalLocale =  PortletUtilities.getPortalLocale();
			if(portalLocale != null) {
				map.put("country", portalLocale.getCountry());
				map.put("language", portalLocale.getLanguage());
			}
		} catch (ClassCastException cce) {
			SpagoBITracer.major("ENGINES",
					this.getClass().getName(),
					"getParameterMap(Object)",
					"The parameter is not a BIObject type",
					cce);
		} 
		map = applySecurity(map);
		return map;
	}
	
	/**
	 * Returns a map of parameters which will be send in the request to the 
	 * engine application.
	 * @param biObject Object container of the subObject
	 * @param subObject SubObject to execute
	 * @param profile Profile of the user 
	 * @param roleName the name of the execution role
	 * @return Map The map of the execution call parameters
  	 */
	public Map getParameterMap(Object object, Object subObject, IEngUserProfile profile, String roleName) {
		if(subObject == null) return getParameterMap(object, profile, roleName);
		
		Map map = new Hashtable();
		try{
			BIObject biobj = (BIObject)object;
			map = getMap(biobj);
			SubObjectDetail subObjectDetail = (SubObjectDetail) subObject;
			map.put("query", subObjectDetail.getName());
			map.put("user", profile.getUserUniqueIdentifier());
			Locale portalLocale =  PortletUtilities.getPortalLocale();
			if(portalLocale != null) {
				map.put("country", portalLocale.getCountry());
				map.put("language", portalLocale.getLanguage());
			}
		} catch (ClassCastException cce) {
			SpagoBITracer.major("ENGINES",
					this.getClass().getName(),
					"getParameterMap(Object, SubObject)",
					"The parameter is not a BIObject type",
					cce);
		} 
		map = applySecurity(map);
		return map;
	}
	
	
	/**
	 * Applys changes for security reason if necessary
	 * @param pars The map of parameters
	 * @return the map of parameters to send to the engine 
	 */
	protected Map applySecurity(Map pars) {
		return pars;
	}
	     
    /**
     * Starting from a BIObject extracts from it the map of the paramaeters for the
     * execution call
     * @param biobj BIObject to execute
     * @return Map The map of the execution call parameters
     */    
	private Map getMap(BIObject biobj) {
		Map pars = new Hashtable();
		
		biobj.loadTemplate();
		UploadedFile uploadedFile =  biobj.getTemplate();
		byte[] template = uploadedFile.getFileContent();
		BASE64Encoder bASE64Encoder = new BASE64Encoder();
		pars.put("template", bASE64Encoder.encode(template));
		pars.put("templatePath",biobj.getPath() + "/template");
        pars.put("spagobiurl", GeneralUtilities.getSpagoBiContentRepositoryServlet());
        
       
        pars = addBIParameters(biobj, pars);
        
        return pars;
	} 
	
    /**
     * Add into the parameters map the BIObject's BIParameter names and values
     * @param biobj BIOBject to execute
     * @param pars Map of the parameters for the execution call  
     * @return Map The map of the execution call parameters
     */
	private Map addBIParameters(BIObject biobj, Map pars) {
		if(biobj==null) {
			SpagoBITracer.warning("ENGINES",
								  this.getClass().getName(),
								  "addBIParameters",
								  "BIObject parameter null");
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
				} catch (Exception e) {
					SpagoBITracer.warning("ENGINES",
										  this.getClass().getName(),
										  "addBIParameters",
										  "Error while processing a BIParameter",
										  e);
				}
			}
		}
  		return pars;
	}
	
	/**
	 * Function not implemented. Thid method should not be called
	 * 
	 * @param biobject The BIOBject to edit
	 * @throws InvalidOperationRequest
	 */
	public EngineURL getEditDocumentTemplateBuildUrl(Object biobject) throws InvalidOperationRequest {
		SpagoBITracer.major("ENGINES",
				  this.getClass().getName(),
				  "getEditDocumentTemplateBuildUrl",
				  "Function not implemented");
		throw new InvalidOperationRequest();
	}

	/**
	 * Function not implemented. Thid method should not be called
	 * 
	 * @param biobject The BIOBject to edit
	 * @throws InvalidOperationRequest
	 */
	public EngineURL getNewDocumentTemplateBuildUrl(Object biobject) throws InvalidOperationRequest {
		SpagoBITracer.major("ENGINES",
				  this.getClass().getName(),
				  "getNewDocumentTemplateBuildUrl",
				  "Function not implemented");
		throw new InvalidOperationRequest();
	}
	
}

