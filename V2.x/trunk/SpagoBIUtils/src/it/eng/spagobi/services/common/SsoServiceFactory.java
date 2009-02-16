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
package it.eng.spagobi.services.common;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;

import org.apache.log4j.Logger;

/**
 * Factory Class
 */
public abstract class SsoServiceFactory {

	static private Logger logger = Logger.getLogger(SsoServiceFactory.class);
	
    private SsoServiceFactory(){
	
    }
    
    /**
     * Creates the proxy service.
     * 
     * @return IProxyService
     */
    public static final SsoServiceInterface createProxyService(){
    	
    	logger.debug("IN");
    	SsoServiceInterface daoObject = null;
		try{
			ConfigSingleton configSingleton=ConfigSingleton.getInstance();
			SourceBean validateSB = (SourceBean) configSingleton.getAttribute("SPAGOBI_SSO.INTEGRATION_CLASS");
			String integrationClass = (String) validateSB.getCharacters();
			daoObject = (SsoServiceInterface)Class.forName(integrationClass).newInstance();
			logger.debug(" Instatiate successfully:"+integrationClass);
		}catch(Exception e){
			logger.error( "Error occurred", e);
		}
		return daoObject;
    }
}
