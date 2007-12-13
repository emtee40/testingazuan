package it.eng.spagobi.services.content.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.mapcatalogue.bo.GeoFeature;
import it.eng.spagobi.mapcatalogue.bo.GeoMap;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoFeaturesDAO;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoMapFeaturesDAO;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoMapsDAO;
import it.eng.spagobi.services.common.AbstractServiceImpl;
import it.eng.spagobi.services.security.exceptions.SecurityException;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

import org.apache.log4j.Logger;

import sun.misc.BASE64Encoder;

public class MapCatalogueImpl extends AbstractServiceImpl {

    static private Logger logger = Logger.getLogger(MapCatalogueImpl.class);

	public static final String GET_STANDARD_HIERARCHY = "getStandardHierarchy";
	public static final String GET_MAPS_BY_FEATURE = "getMapsByFeature";
	public static final String GET_FEATURES_IN_MAP = "getFeaturesInMap";
	public static final String GET_ALL_MAP_NAMES = "getAllMapNames";
	public static final String GET_ALL_FEATURE_NAMES = "getAllFeatureNames";
	public static final String GET_MAP_URL = "getMapUrl";
	public static final String DOWNLOAD = "DOWNLOAD";
	public static final String ERROR_PREFIX = "$";
	public static final String ERROR_HIERARCHY_NOT_FOUND = ERROR_PREFIX + "01";
	public static final String ERROR_FEATURE_NOT_FOUND = ERROR_PREFIX + "02";
	public static final String ERROR_MAP_NOT_FOUND = ERROR_PREFIX + "03";
	protected final 	String DOCUMENT_FILE_NAME = "geoDefaultHierarchy.xml";
	protected final 	String DOCUMENT_PATH_NAME = "GEOENGINE.DEFAULT_HIERARCHY";
	
	
    public MapCatalogueImpl() {
	super();
    }

    public String mapCatalogue(String token, String user, String operation,String path,String featureName,String mapName) {

	logger.debug("IN");
	
	if (activeSso) {
	    try {
		if (validateTicket(token,user)) {
		    return mapCatalogue(user, operation, path, featureName, mapName);
		} else {
		    logger.error("Token NOT VALID");
		    return null;
		}
	    } catch (SecurityException e) {
		logger.error("SecurityException", e);
		return null;
	    } finally {
		logger.debug("OUT");
	    }
	} else {
	    logger.debug("OUT");
	    // operazione locale
	    return mapCatalogue(user, operation,path, featureName, mapName);
	}
    }

    private String mapCatalogue(String user, String operation,String path,String featureName,String mapName) {
	
	
	String strRet = null;
	logger.debug("IN");	 				
 	try{
 		
 		if(operation.equalsIgnoreCase(GET_STANDARD_HIERARCHY)) {
 			strRet = getStandardHierarchy();
 			if (strRet == null){
 				strRet = ERROR_HIERARCHY_NOT_FOUND;
 			}
 		} else if(operation.equalsIgnoreCase(GET_MAPS_BY_FEATURE)) {
 			strRet = getMapsByFeature(featureName);
 			if (strRet == null){
 				strRet = ERROR_MAP_NOT_FOUND;
 			}
 		} else if(operation.equalsIgnoreCase(GET_FEATURES_IN_MAP)) {
 			strRet = getFeaturesInMap(mapName);
 			if (strRet == null){
 				strRet = ERROR_FEATURE_NOT_FOUND;
 			}	 		
 		} else if(operation.equalsIgnoreCase(GET_MAP_URL)) {
 			//strRet = getMapUrl(request, mapName);
 		    // TODO   come fare ???
 			if (strRet == null){
 				strRet = ERROR_MAP_NOT_FOUND;
 			}
		} else if(operation.equalsIgnoreCase(GET_ALL_MAP_NAMES)) {	 			
 			strRet = getAllMapNames();
 			if (strRet == null){
 				strRet = ERROR_MAP_NOT_FOUND;
 			}			
 		} else if(operation.equalsIgnoreCase(GET_ALL_FEATURE_NAMES)) {	 			
 			strRet = getAllFeatureNames();
 			if (strRet == null){
 				strRet = ERROR_FEATURE_NOT_FOUND;
 			}
		}
 		else if(operation.equalsIgnoreCase(DOWNLOAD)) {
 		   byte[] file=readFile(path);
 		   BASE64Encoder bASE64Encoder = new BASE64Encoder();
 		   strRet=bASE64Encoder.encode(file);
		}
 		return strRet;
 	} catch(Exception e) {
 		logger.error("Exception", e);
 	}finally{
 	   logger.debug("OUT");
 	}
 	
	return null;
    }

    private String getStandardHierarchy() {
	logger.debug("IN");
	// load a xml file
	StringBuffer buffer = new StringBuffer();
	ConfigSingleton config = ConfigSingleton.getInstance();
	SourceBean pathSB = (SourceBean) config.getAttribute(DOCUMENT_PATH_NAME);
	String path = (String) pathSB.getAttribute("path");

	String baseTemplateFileStr = ConfigSingleton.getRootPath() + path + "/" + DOCUMENT_FILE_NAME;
	File baseFile = null;
	if (baseTemplateFileStr != null)
	    baseFile = new File(baseTemplateFileStr);
	InputStream is = null;
	if (baseFile != null && baseFile.exists()) {
	    try {
		is = new FileInputStream(baseFile);
	    } catch (FileNotFoundException e1) {
		logger.error("Exception", e1);
	    }
	}

	BufferedReader reader = new BufferedReader(new InputStreamReader(is));
	String line = null;
	try {
	    while ((line = reader.readLine()) != null) {
		buffer.append(line + "\n");
	    }
	} catch (IOException e) {
	    logger.error("IOException",e);
	}
	logger.debug("IN");
	return buffer.toString();

    }

    private String getMapsByFeature(String featureName) {
	logger.debug("IN");
	String toReturn = null;
	try {
	    ISbiGeoMapFeaturesDAO mapFeaturesDAO = DAOFactory.getSbiGeoMapFeaturesDAO();
	    ISbiGeoFeaturesDAO featureDAO = DAOFactory.getSbiGeoFeaturesDAO();
	    GeoFeature tmpFeature = featureDAO.loadFeatureByName(featureName);
	    if (tmpFeature == null)
		return null;
	    List lstMaps = mapFeaturesDAO.loadMapNamesByFeatureId(new Integer(tmpFeature.getFeatureId()));
	    if (lstMaps != null) {
		for (int i = 0; i < lstMaps.size(); i++) {
		    toReturn = ((toReturn == null) ? "" : toReturn) + (String) lstMaps.get(i)
			    + ((i == lstMaps.size() - 1) ? "" : ",");
		}
	    }
	    return toReturn;
	} catch (Exception e) {
	    logger.error("Error",e);
	    return null;
	}finally{
	    logger.debug("OUT");
	}

    }

    private String getFeaturesInMap(String mapName) {
	logger.debug("IN");
	String toReturn = null;
	try {
	    ISbiGeoMapFeaturesDAO mapFeaturesDAO = DAOFactory.getSbiGeoMapFeaturesDAO();
	    ISbiGeoMapsDAO mapDAO = DAOFactory.getSbiGeoMapsDAO();
	    GeoMap tmpMap = mapDAO.loadMapByName(mapName);
	    if (tmpMap == null)
		return null;
	    List lstFeatures = mapFeaturesDAO.loadFeatureNamesByMapId(new Integer(tmpMap.getMapId()));
	    if (lstFeatures != null) {
		for (int i = 0; i < lstFeatures.size(); i++) {
		    toReturn = ((toReturn == null) ? "" : toReturn) + (String) lstFeatures.get(i)
			    + ((i == lstFeatures.size() - 1) ? "" : ",");
		}
	    }
	    return toReturn;
	} catch (Exception e) {
	    logger.debug("Error",e);
	    return null;
	}finally{
	    logger.debug("OUT");
	}
	// return mapName + ",centroidi_" + mapName;
    }

    private String getMapUrl(String mapName) {
	String toReturn = null;
	try {
	    ISbiGeoMapsDAO mapDAO = DAOFactory.getSbiGeoMapsDAO();
	    GeoMap tmpMap = mapDAO.loadMapByName(mapName);
	    if (tmpMap == null)
		return null;
	    toReturn = tmpMap.getUrl();
	    // toReturn =
	    // toReturn.substring(ConfigSingleton.getRootPath().length());
	   // toReturn = "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()
	//	    + toReturn;

	    return toReturn;
	} catch (Exception e) {
	    logger.error("Error",e);
	    return null;
	}finally{
	    logger.debug("OUT");
	}
    }

    /**
     * Handle a download request of a map file. Reads the file, sends it as an
     * http response attachment. and in the end deletes the file.
     * 
     * @param request
     *                the http request
     * @param response
     *                the http response
     * @param deleteFile
     *                if true delete the downloadedFile
     */
    private byte[] readFile(String path) throws Exception {
	logger.debug("IN");
	String filePathName = ConfigSingleton.getRootPath() + path;
	File fileMap = new File(filePathName);
	byte[] fileContent = "".getBytes();
	FileInputStream fis = null;
	try {
	    fis = new FileInputStream(filePathName);
	    fileContent = GeneralUtilities.getByteArrayFromInputStream(fis);
	} catch (IOException ioe) {
	    logger.error("Cannot get bytes of the exported file" + ioe);
	}
	logger.debug("OUT");
	return fileContent;
    }

    private String getAllMapNames() {
	logger.debug("IN");
	String toReturn = null;
	try {
	    ISbiGeoMapsDAO mapDAO = DAOFactory.getSbiGeoMapsDAO();
	    List lstMaps = mapDAO.loadAllMaps();
	    if (lstMaps == null)
		return null;
	    if (lstMaps != null) {
		for (int i = 0; i < lstMaps.size(); i++) {
		    toReturn = ((toReturn == null) ? "" : toReturn) + ((GeoMap) lstMaps.get(i)).getName()
			    + ((i == lstMaps.size() - 1) ? "" : ",");
		}
	    }
	    return toReturn;
	} catch (Exception e) {
	    logger.error("error",e);
	    return null;
	}finally{
	    logger.debug("OUT");
	}
    }

    private String getAllFeatureNames() {
	logger.debug("IN");
	String toReturn = null;
	try {
	    ISbiGeoFeaturesDAO featureDAO = DAOFactory.getSbiGeoFeaturesDAO();
	    List lstFeatures = featureDAO.loadAllFeatures();
	    if (lstFeatures == null)
		return null;
	    if (lstFeatures != null) {
		for (int i = 0; i < lstFeatures.size(); i++) {
		    toReturn = ((toReturn == null) ? "" : toReturn) + ((GeoFeature) lstFeatures.get(i)).getName()
			    + ((i == lstFeatures.size() - 1) ? "" : ",");
		}
	    }
	    return toReturn;
	} catch (Exception e) {
	    logger.error("Error",e);
	    return null;
	}finally{
	    logger.debug("OUT");
	}
    }

}
