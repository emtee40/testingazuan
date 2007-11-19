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
/*
 * Created on 21-apr-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.commons.services;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dispatching.module.AbstractHttpModule;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spago.tracing.TracerSingleton;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.security.ISecurityInfoProvider;
import it.eng.spagobi.services.proxy.SecurityServiceProxy;
import it.eng.spagobi.services.security.bo.SpagoBIUserProfile;


import java.security.Principal;

import edu.yale.its.tp.cas.client.filter.CASFilter;

public class LoginModule extends AbstractHttpModule {

	/**
	 * @see it.eng.spago.dispatching.action.AbstractHttpAction#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		// get config
		SourceBean configSingleton = (SourceBean)ConfigSingleton.getInstance();
		// INTEGRAZIONE con il CAS
		String userId=(String)this.getHttpRequest().getSession().getAttribute(CASFilter.CAS_FILTER_USER);
		
		SpagoBIPrincipal principal=new SpagoBIPrincipal(userId);
		SecurityServiceProxy proxy=new SecurityServiceProxy();
		IEngUserProfile profile = proxy.getUserProfile(principal);

		
		// put user profile into session
		RequestContainer reqCont = RequestContainer.getRequestContainer();
		SessionContainer sessCont = reqCont.getSessionContainer();
		SessionContainer permSess = sessCont.getPermanentContainer();
		permSess.setAttribute(IEngUserProfile.ENG_USER_PROFILE, profile);
		
		// fill response attributes
		response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "home");
	}

	
	
	
	public class SpagoBIPrincipal implements Principal {

		String userName = "";
		
		public SpagoBIPrincipal(String userName) {
			this.userName = userName;
		}
		
		public String getName() {
			return this.userName;
		}
		
	}
	
}
