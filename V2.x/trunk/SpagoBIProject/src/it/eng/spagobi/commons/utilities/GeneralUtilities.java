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
/*
 * Created on 7-lug-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.commons.utilities;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.Parameter;
import it.eng.spagobi.behaviouralmodel.lov.bo.ILovDetail;
import it.eng.spagobi.behaviouralmodel.lov.bo.LovDetailFactory;
import it.eng.spagobi.behaviouralmodel.lov.bo.ModalitiesValue;
import it.eng.spagobi.behaviouralmodel.lov.dao.IModalitiesValueDAO;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.messages.IMessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.services.common.SsoServiceInterface;
import it.eng.spagobi.services.security.bo.SpagoBIUserProfile;
import it.eng.spagobi.services.security.exceptions.SecurityException;
import it.eng.spagobi.services.security.service.ISecurityServiceSupplier;
import it.eng.spagobi.services.security.service.SecurityServiceSupplierFactory;
import it.eng.spagobi.utilities.assertion.Assert;

import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;

/**
 * Contains some SpagoBI's general utilities.
 */
public class GeneralUtilities extends SpagoBIUtilities{

    private static transient Logger logger = Logger.getLogger(GeneralUtilities.class);
    
    public static final int MAX_DEFAULT_TEMPLATE_SIZE = 5242880;
    private static String SPAGOBI_HOST = null; 
    private static String SPAGOBI_DOMAIN = null;
    
    /**
     * Substitutes the substrings with sintax "${code,bundle}" or "${code}" (in
     * the second case bundle is assumed to be the default value "messages")
     * with the correspondent internationalized messages in the input String.
     * This method calls <code>PortletUtilities.getMessage(key, bundle)</code>.
     * 
     * @param message The string to be modified
     * 
     * @return The message with the internationalized substrings replaced.
     */
    public static String replaceInternationalizedMessages(String message) {
	if (message == null)
	    return null;
	int startIndex = message.indexOf("${");
	if (startIndex == -1)
	    return message;
	else
	    return replaceInternationalizedMessages(message, startIndex);
    }

    private static String replaceInternationalizedMessages(String message, int startIndex) {
	logger.debug("IN");
	IMessageBuilder msgBuilder = MessageBuilderFactory.getMessageBuilder();
	int endIndex = message.indexOf("}", startIndex);
	if (endIndex == -1 || endIndex < startIndex)
	    return message;
	String toBeReplaced = message.substring(startIndex + 2, endIndex).trim();
	String key = "";
	String bundle = "messages";
	String[] splitted = toBeReplaced.split(",");
	if (splitted != null) {
	    key = splitted[0].trim();
	    if (splitted.length == 1) {
		String replacement = msgBuilder.getMessage(key, bundle);
		// if (!replacement.equalsIgnoreCase(key)) message =
		// message.replaceAll("${" + toBeReplaced + "}", replacement);
		if (!replacement.equalsIgnoreCase(key))
		    message = message.replaceAll("\\$\\{" + toBeReplaced + "\\}", replacement);
	    }
	    if (splitted.length == 2) {
		if (splitted[1] != null && !splitted[1].trim().equals(""))
		    bundle = splitted[1].trim();
		String replacement = msgBuilder.getMessage(key, bundle);
		// if (!replacement.equalsIgnoreCase(key)) message =
		// message.replaceAll("${" + toBeReplaced + "}", replacement);
		if (!replacement.equalsIgnoreCase(key))
		    message = message.replaceAll("\\$\\{" + toBeReplaced + "\\}", replacement);
	    }
	}
	startIndex = message.indexOf("${", endIndex);
	if (startIndex != -1)
	    message = replaceInternationalizedMessages(message, startIndex);
	logger.debug("OUT");
	return message;
    }

 
    /**
     * Subsitute bi object parameters lov profile attributes.
     * 
     * @param obj the obj
     * @param session the session
     * 
     * @throws Exception the exception
     * @throws EMFInternalError the EMF internal error
     */
    public static void subsituteBIObjectParametersLovProfileAttributes(BIObject obj, SessionContainer session)
	    throws Exception, EMFInternalError {
	logger.debug("IN");
	List biparams = obj.getBiObjectParameters();
	Iterator iterParams = biparams.iterator();
	while (iterParams.hasNext()) {
	    // if the param is a Fixed Lov, Make the profile attribute
	    // substitution at runtime
	    BIObjectParameter biparam = (BIObjectParameter) iterParams.next();
	    Parameter param = biparam.getParameter();
	    ModalitiesValue modVal = param.getModalityValue();
	    if (modVal.getITypeCd().equals(SpagoBIConstants.INPUT_TYPE_FIX_LOV_CODE)) {
		String value = modVal.getLovProvider();
		int profileAttributeStartIndex = value.indexOf("${");
		if (profileAttributeStartIndex != -1) {
		    IEngUserProfile profile = (IEngUserProfile) session.getPermanentContainer().getAttribute(
			    IEngUserProfile.ENG_USER_PROFILE);
		    value = StringUtilities.substituteProfileAttributesInString(value, profile,
			    profileAttributeStartIndex);
		    biparam.getParameter().getModalityValue().setLovProvider(value);
		}
	    }
	}
	logger.debug("OUT");
    }

 
    /**
     * Gets the lov map result.
     * 
     * @param lovs the lovs
     * 
     * @return the lov map result
     */
    public static String getLovMapResult(Map lovs) {
	logger.debug("IN");
	String toReturn = "<DATA>";
	Set keys = lovs.keySet();
	Iterator keyIter = keys.iterator();
	while (keyIter.hasNext()) {
	    String key = (String) keyIter.next();
	    String lovname = (String) lovs.get(key);
	    String lovResult = "";
	    try {
		lovResult = getLovResult(lovname);
	    } catch (Exception e) {
		logger.error("Error while getting result of the lov " + lovname
			+ ", the result of the won't be inserted into the response", e);
		continue;
	    }
	    toReturn = toReturn + "<" + key + ">";
	    toReturn = toReturn + lovResult;
	    toReturn = toReturn + "</" + key + ">";
	}
	toReturn = toReturn + "</DATA>";
	logger.debug("OUT:" + toReturn);
	return toReturn;
    }

    /**
     * Gets the lov result.
     * 
     * @param lovLabel the lov label
     * 
     * @return the lov result
     * 
     * @throws Exception the exception
     */
    public static String getLovResult(String lovLabel) throws Exception {
	logger.debug("IN");
	IModalitiesValueDAO lovDAO = DAOFactory.getModalitiesValueDAO();
	ModalitiesValue lov = lovDAO.loadModalitiesValueByLabel(lovLabel);
	String toReturn = getLovResult(lov, null);
	logger.debug("OUT:" + toReturn);
	return toReturn;
    }

    /**
     * Gets the lov result.
     * 
     * @param lovLabel the lov label
     * @param profile the profile
     * 
     * @return the lov result
     * 
     * @throws Exception the exception
     */
    public static String getLovResult(String lovLabel, IEngUserProfile profile) throws Exception {
	logger.debug("IN");
	IModalitiesValueDAO lovDAO = DAOFactory.getModalitiesValueDAO();
	ModalitiesValue lov = lovDAO.loadModalitiesValueByLabel(lovLabel);
	String toReturn = getLovResult(lov, profile);
	logger.debug("OUT" + toReturn);
	return toReturn;
    }

    private static String getLovResult(ModalitiesValue lov, IEngUserProfile profile) throws Exception {
	logger.debug("IN");
	if (profile == null) {
	    profile = new UserProfile("anonymous");
	}
	String dataProv = lov.getLovProvider();
	ILovDetail lovDetail = LovDetailFactory.getLovFromXML(dataProv);
	logger.debug("OUT:" + lovDetail.getLovResult(profile));
	return lovDetail.getLovResult(profile);
    }


    
    /**
     * Creates a new user profile, given his identifier.
     * 
     * @param userId The user identifier
     * 
     * @return The newly created user profile
     * 
     * @throws Exception the exception
     */
    public static IEngUserProfile createNewUserProfile(String userId) throws Exception {
    	logger.debug("IN");
    	IEngUserProfile profile = null;
	    try {
	    	ISecurityServiceSupplier supplier = SecurityServiceSupplierFactory.createISecurityServiceSupplier();
			SpagoBIUserProfile user = supplier.createUserProfile(userId);
			user.setFunctions(UserUtilities.readFunctionality(user.getRoles()));
			profile = new UserProfile(user);
	    } catch (Exception e) {
			logger.error("An error occurred while creating user profile for user [" + userId + "]");
			throw new SecurityException("An error occurred while creating user profile for user [" + userId + "]", e);
	    } finally {
	    	logger.debug("OUT");
	    }
	    return profile;
    }


	/**
	 * Returns the complete HTTP URL and puts it into a
	 * string.
	 * 
	 * @param userId the user id
	 * 
	 * @return A String with complete HTTP Url
	 */ 
	public static String getSpagoBIProfileBaseUrl(String userId) {
		logger.debug("IN.Trying to recover spago Adapter HTTP Url. userId="+userId);
		String url = "";
		String path = "";
		String adapUrlStr = "";
		try {
			adapUrlStr = getSpagoAdapterHttpUrl();
			path= getSpagoBiHost()+getSpagoBiContext();
			
	        ConfigSingleton config = ConfigSingleton.getInstance();
	        SourceBean configSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.ACTIVE");
		    String active = (String) configSB.getCharacters();
		    logger.debug("active SSO: " + active);
		    if (active != null && active.equalsIgnoreCase("true") ){
		    	url = path + adapUrlStr + "?NEW_SESSION=TRUE";
		    }else{
		    	url = path + adapUrlStr + "?NEW_SESSION=TRUE&"+SsoServiceInterface.USER_ID+"="+userId;	
		    }

			
			logger.debug("using URL: " + url);
		} catch (Exception e) {
			logger.error("Error while recovering complete HTTP Url", e);
		}
		logger.debug("OUT");
		return url;
	}   
	
	
	/**
	 * Gets the spagoBI's dashboards servlet information as a string.
	 * 
	 * @return A string containing spagoBI's dashboards servlet information
	 */
	public static String getSpagoBiDashboardServlet() {
		return getSpagoBiHost()+getSpagoBiContext() + "/DashboardService";
	}
	
	
	
	public static String getSpagoBiHost() {
		logger.debug("IN");
		if (SPAGOBI_HOST == null) {
			try {
				logger.debug("Trying to recover SpagoBiHost from ConfigSingleton");
				ConfigSingleton spagoConfig = ConfigSingleton.getInstance();
				SourceBean sbTmp = (SourceBean) spagoConfig.getAttribute("SPAGOBI.SPAGOBI_HOST_JNDI");
				if (sbTmp != null) {
					String jndi = sbTmp.getCharacters();
					SPAGOBI_HOST = readJndiResource(jndi);
				}
				if (SPAGOBI_HOST == null) {
					logger.debug("SPAGOBI_HOST not set, using the default value ");
					SPAGOBI_HOST = "http://localhost:8080";
				}
			} catch (Exception e) {
				logger.error("Error while recovering getSpagoBiHost", e);
			}
		}
		logger.debug("OUT:" + SPAGOBI_HOST);
		return SPAGOBI_HOST;
	}  
	
	public static String getSpagoBiDomain() {
		logger.debug("IN");
		if (SPAGOBI_DOMAIN == null) {
			try {
				logger.debug("Trying to recover SpagoBI domain from ConfigSingleton");
				ConfigSingleton spagoConfig = ConfigSingleton.getInstance();
				SourceBean sbTmp = (SourceBean) spagoConfig.getAttribute("SPAGOBI.SPAGOBI_DOMAIN_JNDI_NAME");
				if (sbTmp != null) {
					String jndi = sbTmp.getCharacters();
					SPAGOBI_DOMAIN = readJndiResource(jndi);
				}
				if (SPAGOBI_DOMAIN == null) {
					logger.debug("SPAGOBI_DOMAIN not set, using the default value ");
					SPAGOBI_DOMAIN = "http://localhost:8080";
				}
			} catch (Exception e) {
				logger.error("Error while recovering getSpagoBiHost", e);
			}
		}
		logger.debug("OUT:" + SPAGOBI_DOMAIN);
		return SPAGOBI_DOMAIN;
	}
	
	
	
	/**
	 * Gets the spago adapter http url.
	 * 
	 * @return the spago adapter http url
	 */
	public static String getSpagoAdapterHttpUrl() {
		logger.debug("IN");
		ConfigSingleton config = ConfigSingleton.getInstance();
		String attName = "SPAGOBI.SPAGO_ADAPTERHTTP_URL";
		SourceBean adapUrlSB = (SourceBean) config.getAttribute(attName);
		String adapUrlStr = adapUrlSB.getCharacters();
		adapUrlStr = adapUrlStr.trim();
		logger.debug("OUT:" + adapUrlStr);
		return adapUrlStr;
	}
	
	
	/**
	 * Gets the default locale.
	 * 
	 * @return the default locale
	 */
	public static Locale getDefaultLocale() {
		logger.debug("IN");
		String country = null;
		String language = null;
		Locale locale = null;
		ConfigSingleton config = ConfigSingleton.getInstance();
		String attName = "SPAGOBI.LANGUAGE_SUPPORTED.LANGUAGE";
		SourceBean languageSB = (SourceBean) config.getFilteredSourceBeanAttribute(attName, "default", "true");
		if (languageSB != null) {
			country = (String) languageSB.getAttribute("country");
			language = (String) languageSB.getAttribute("language");
			if ((country == null) || country.trim().equals("") || (language == null) || language.trim().equals("")) {
				country = "US";
				language = "en";
			}
		} else {
			country = "US";
			language = "en";
		}
		locale = new Locale(language, country);
		logger.debug("OUT:" + locale.toString());
		return locale;
	}

	public static Locale getCurrentLocale(RequestContainer requestContainer) {
		Locale locale=null;
		if(requestContainer!=null){    	
			SessionContainer permSession = requestContainer.getSessionContainer().getPermanentContainer();
			if(permSession!=null){			
				String language=(String)permSession.getAttribute(SpagoBIConstants.AF_LANGUAGE);
				String country=(String)permSession.getAttribute(SpagoBIConstants.AF_COUNTRY);
				if(language!=null && country!=null){
					locale=new Locale(language,country,"");
				}
			}
		}
		if(locale==null)locale=getDefaultLocale();
		return locale;
	}
	
	public static String getLocaleDateFormat(SessionContainer permSess){
		String language=(String)permSess.getAttribute("AF_LANGUAGE");
		String country=(String)permSess.getAttribute("AF_COUNTRY");


		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		if(language!=null ){
			if(country==null){
				formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-"+language.toUpperCase()));
			}
			else{
				formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-"+language.toUpperCase()+"_"+country.toUpperCase()));				
			}		
		}
		if(formatSB==null){
			formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT"));
		}

		String format = (String) formatSB.getAttribute("format");
		logger.debug("DATE FORMAT:"+format);
		return format;

	}
	
	public static String getLocaleDateFormatForExtJs(SessionContainer permSess){
		String language=(String)permSess.getAttribute("AF_LANGUAGE");
		String country=(String)permSess.getAttribute("AF_COUNTRY");
		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		if(language!=null ){
			if(country==null){
				formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-"+language.toUpperCase()));
			}
			else{
				formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-"+language.toUpperCase()+"_"+country.toUpperCase()));				
			}		
		}
		if(formatSB==null){
			formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT"));
		}
		String format = (String) formatSB.getAttribute("extJsFormat");
		if (format == null) {
			logger.warn("Locale date format for ExtJs not found, using d/m/Y as deafult");
			format = "d/m/Y";
		}
		logger.debug("DATE FORMAT:"+format);
		return format;

	}

	public static String getServerDateFormat(){
		logger.debug("IN");
		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-SERVER"));
		String format="dd/MM/yyyy";
		if(formatSB!=null){
			format = (String) formatSB.getAttribute("format");
			logger.debug("server date format set to "+format);
		}
		else{
			logger.error("could not find server date format, set default to "+format);			
		}
		logger.debug("OUT");
		return format;
	}
	
	public static String getServerTimeStampFormat(){
		logger.debug("IN");
		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.TIMESTAMP-FORMAT"));
		String format="dd/MM/yyyy hh:mm:ss";
		if(formatSB!=null){
			format = (String) formatSB.getAttribute("format");
			logger.debug("server date format set to "+format);
		}
		else{
			logger.error("could not find server date format, set default to "+format);			
		}
		logger.debug("OUT");
		return format;
	}
	
	public static String getServerDateFormatExtJs(){
		logger.debug("IN");
		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.DATE-FORMAT-SERVER"));
		String format="d/m/Y";
		if(formatSB!=null){
			format = (String) formatSB.getAttribute("extJsFormat");
			logger.debug("server date format for ExtJs set to "+format);
		}
		else{
			logger.error("could not find server date format, set default to "+format);			
		}
		logger.debug("OUT");
		return format;
	}
	
	public static String getServerTimestampFormatExtJs(){
		logger.debug("IN");
		SourceBean formatSB=null; 
		// if a particular language is specified take the corrisponding date-format
		formatSB = ((SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.TIMESTAMP-FORMAT"));
		String format="d/m/Y H:i:s";
		if(formatSB!=null){
			format = (String) formatSB.getAttribute("extJsFormat");
			logger.debug("server date format for ExtJs set to "+format);
		}
		else{
			logger.error("could not find server date format, set default to "+format);			
		}
		logger.debug("OUT");
		return format;
	}
	
	public static int getTemplateMaxSize() {
		logger.debug("IN");
		int toReturn = MAX_DEFAULT_TEMPLATE_SIZE;
		try {
			ConfigSingleton serverConfig = ConfigSingleton.getInstance();
			SourceBean maxSizeSB = (SourceBean) serverConfig.getAttribute("SPAGOBI.TEMPLATE_MAX_SIZE");
			if (maxSizeSB != null) {
				String maxSizeStr = (String) maxSizeSB.getCharacters();
				logger.debug("Configuration found for max template size: " + maxSizeStr);
				Integer maxSizeInt = new Integer(maxSizeStr);
				toReturn = maxSizeInt.intValue();
			} else {
				logger.debug("No configuration found for max template size");
			}
		} catch (Exception e) {
			logger.error("Error while retrieving max template size", e);
			logger.debug("Considering default value " + MAX_DEFAULT_TEMPLATE_SIZE);
			toReturn = MAX_DEFAULT_TEMPLATE_SIZE;
		}
		logger.debug("OUT: max size = " + toReturn);
		return toReturn;
	}
	
	public static String getSpagoBiContext() {
		logger.debug("IN");
		String path = "";
		try {
			logger.debug("Trying to recover spagobi context from ConfigSingleton");
			ConfigSingleton spagoConfig = ConfigSingleton.getInstance();
			SourceBean sbTmp = (SourceBean) spagoConfig.getAttribute("SPAGOBI.SPAGOBI_CONTEXT");
			if (sbTmp!=null){
				path = sbTmp.getCharacters();
			}else {
				logger.debug("SPAGOBI_CONTEXT not set, using the default value ");
				path="/SpagoBI";
			}
			logger.debug("SPAGOBI_CONTEXT: " + path);
		} catch (Exception e) {
			logger.error("Error while recovering SpagoBI context address", e);
		}
		logger.debug("OUT:" + path);
		return path;
	}      

	/**
	 * Returns an url starting with the given base url and adding parameters as the input parameters map
	 * @param baseUrl The base url
	 * @param mapPars The parameters map; those parameters will be added to the url
	 * @return an url starting with the given base url and adding parameters as the input parameters map
	 */
	public static String getUrl(String baseUrl, Map mapPars) {
		logger.debug("IN");
		Assert.assertNotNull(baseUrl, "Base url in input is null");
		StringBuffer buffer = new StringBuffer();
	    buffer.append(baseUrl);
	    buffer.append(baseUrl.indexOf("?") == -1 ? "?" : "&");
		if (mapPars != null && !mapPars.isEmpty()) {
			java.util.Set keys = mapPars.keySet();
			Iterator iterKeys = keys.iterator();
			while (iterKeys.hasNext()) {
			  	String key = iterKeys.next().toString();
			  	Object valueObj = mapPars.get(key);
			  	if (valueObj != null) {
				  	String value = valueObj.toString();
				  	buffer.append(key + "=" + value);
				  	if (iterKeys.hasNext()) {
				  		buffer.append("&");
				  	}
			  	}
			}
		}
		logger.debug("OUT: " + buffer.toString());
		return buffer.toString();
	}
}
