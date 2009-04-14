package it.eng.spagobi.wapp.services;

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

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dispatching.action.AbstractHttpAction;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.messages.MessageBuilder;
import it.eng.spagobi.wapp.util.MenuUtilities;

import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import org.apache.log4j.Logger;

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

public class ChangeLanguage extends AbstractHttpAction{

	static private Logger logger = Logger.getLogger(ChangeLanguage.class);

	
    UserProfile userProfile = null;
	
	
	public void service(SourceBean serviceRequest, SourceBean serviceResponse)
	throws Exception {
		logger.debug("IN");
		RequestContainer reqCont = RequestContainer.getRequestContainer();
		SessionContainer sessCont = reqCont.getSessionContainer();
		SessionContainer permSess = sessCont.getPermanentContainer();

		Locale locale = MessageBuilder.getBrowserLocaleFromSpago();		

		String language=(String)serviceRequest.getAttribute("language_id");
		String country=(String)serviceRequest.getAttribute("country_id");
		logger.debug("language selected: "+language);
		IEngUserProfile profile = (IEngUserProfile)permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		userProfile=null;
		String lang="";
		if (profile  instanceof UserProfile) {
			userProfile = (UserProfile) profile;
		}

		
		ConfigSingleton spagoconfig = ConfigSingleton.getInstance();
		List languages=spagoconfig.getAttributeAsList("SPAGOBI.LANGUAGE_SUPPORTED.LANGUAGE");

		if(language==null){
			logger.error("language not specified");
		}
		else{
			Iterator iter = languages.iterator();
			boolean found=false;
			while (iter.hasNext() && found==false) {
				SourceBean lang_sb = (SourceBean) iter.next();
				String lang_supported = (String) lang_sb.getAttribute("language");
				String country_supported= (String) lang_sb.getAttribute("country");

				if(language.equalsIgnoreCase(lang_supported) && (country==null || country.equalsIgnoreCase(country_supported))){

					locale=new Locale(language,country,"");
					permSess.setAttribute("AF_LANGUAGE", locale.getLanguage());
					permSess.setAttribute("AF_COUNTRY", locale.getCountry());   

					if(userProfile!=null){
						userProfile.setAttributeValue(SpagoBIConstants.LANGUAGE, language);
						userProfile.setAttributeValue(SpagoBIConstants.COUNTRY, country);
						logger.debug("modified profile attribute to "+ lang);
					}
					else{
						logger.error("profile attribute not modified to "+ lang);				
					}
					found=true;
				}
			}
		}

		MenuUtilities.getMenuItems(serviceRequest, serviceResponse, profile);
		
		serviceResponse.setAttribute("MENU_MODE", "ALL_TOP");
		serviceResponse.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "home");
		logger.debug("OUT");
	}

	
	
}



