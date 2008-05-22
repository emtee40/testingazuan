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
package it.eng.spagobi.commons.utilities.urls;

import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

/**
 * The implementation of IUrlBuilder used when SpagoBI is used as a STANDALONE WEB APPLICATION
 */
public class WebUrlBuilder implements IUrlBuilder{
	
	private static transient Logger logger = Logger.getLogger(WebUrlBuilder.class);

	private String baseURL="";
	private String baseResourceURL="";
	
	/**
	 * Inits the.
	 * 
	 * @param aHttpServletRequest the a http servlet request
	 */
	public void init(HttpServletRequest aHttpServletRequest){
		logger.debug("IN");
		baseResourceURL = aHttpServletRequest.getContextPath() + "/";
		baseURL = aHttpServletRequest.getContextPath()+ "/servlet/AdapterHTTP";
		logger.debug("OUT");
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.commons.utilities.urls.IUrlBuilder#getUrl(javax.servlet.http.HttpServletRequest, java.util.Map)
	 */
	public String getUrl(HttpServletRequest aHttpServletRequest, Map parameters) {
		logger.debug("IN");
		init(aHttpServletRequest);
		//ConfigSingleton.getInstance().getAttribute(dal master fin qua SPAGO_ADAPTERHTTP_URL)
		StringBuffer sb = new StringBuffer();
		sb.append(baseURL);
		if (parameters != null){
			Iterator keysIt = parameters.keySet().iterator();
			boolean isFirst = true;
			String paramName = null;
			Object paramValue = null;
			while (keysIt.hasNext()){
				paramName = (String)keysIt.next();
				paramValue = parameters.get(paramName);
				if (paramValue == null) {
					logger.warn("Parameter with name " + paramName + " has null value. This parameter will be not considered.");
					continue;
				}
				if (isFirst){
					sb.append("?");
					isFirst = false;
				}else{
					sb.append("&");
				}
				sb.append(paramName+"="+paramValue.toString());
			}
		}
		String url = sb.toString();
		logger.debug("OUT");
		return url;
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.commons.utilities.urls.IUrlBuilder#getResourceLink(javax.servlet.http.HttpServletRequest, java.lang.String)
	 */
	public String getResourceLink(HttpServletRequest aHttpServletRequest, String originalUrl){
		logger.debug("IN");
		init(aHttpServletRequest);
		originalUrl = originalUrl.trim();
		if(originalUrl.startsWith("/")) {
			originalUrl = originalUrl.substring(1);
		}
		originalUrl = baseResourceURL + originalUrl;
		logger.debug("OUT");
		return originalUrl;
	}

	
	
	
}
