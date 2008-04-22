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
package it.eng.spagobi.qbe.commons.urlgenerator;

import java.util.Iterator;
import java.util.Map;

import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.servlet.http.HttpServletRequest;


/**
 * @author Andrea Zoppello
 * 
 * The implementation of IQbeUrlGenerator used when QBE is used as a PORTLET
 */
public class PortletQbeUrlGenerator implements IQbeUrlGenerator{

	
	public String getActionUrl(HttpServletRequest httpServletRequest, Map parameters) {
		RenderResponse renderResponse =(RenderResponse)httpServletRequest.getAttribute("javax.portlet.response");
		
		PortletURL aPortletURL = renderResponse.createActionURL();
		
		if (parameters != null){
			Iterator keysIt = parameters.keySet().iterator();
			
			boolean isFirst = true;
			String paramName = null;
			Object paramValue = null;
			while (keysIt.hasNext()){
				
				paramName = (String)keysIt.next();
				paramValue = parameters.get(paramName); 
				aPortletURL.setParameter(paramName, paramValue.toString());
			}
		}
		
		return aPortletURL.toString();
	}
	
	
	public String getResourceUrl(HttpServletRequest httpServletRequest, String url){
		RenderRequest renderRequest =(RenderRequest)httpServletRequest.getAttribute("javax.portlet.request");
		RenderResponse renderResponse =(RenderResponse)httpServletRequest.getAttribute("javax.portlet.response");
		
		String urlToConvert = null; 
		int idx = url.indexOf('/'); 
		if ( idx > - 1){
			urlToConvert = url.substring(idx);
			//Logger.debug(PortletQbeUrlGenerator.class,"URL TO CONVERT "+ urlToConvert);
		}
		String newUrl = renderResponse.encodeURL(renderRequest.getContextPath() + urlToConvert).toString();
		//Logger.debug(PortletQbeUrlGenerator.class,"New URL " + newUrl);
		return newUrl;
	}

}
