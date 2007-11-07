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
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dispatching.action.AbstractAction;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.UserFunctionality;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.PortletUtilities;
import it.eng.spagobi.commons.utilities.ProfileExchanger;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.commons.utilities.UserUtilities;
import it.eng.spagobi.security.IUserProfileFactory;

import java.io.InputStream;
import java.security.Principal;

import javax.portlet.PortletRequest;

import org.xml.sax.InputSource;

/**
 * This class reads user from portal and traces information for this connected user; after it gets the
 * profile for the principal user and puts it into the permanent container.
 * 
 * @author Zoppello
 */
public class PortletLoginAction extends AbstractAction{

	/**
	 * @see it.eng.spago.dispatching.action.AbstractHttpAction#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		PortletRequest portletRequest = PortletUtilities.getPortletRequest(); 
		String remoteUser = portletRequest.getRemoteUser();
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),"service()", "USER CONNECTED IS [" + remoteUser+"]");
		Principal principal = portletRequest.getUserPrincipal();
		SourceBean configSingleton = (SourceBean)ConfigSingleton.getInstance();
		SourceBean engUserProfileFactorySB = (SourceBean) configSingleton.getAttribute("SPAGOBI.SECURITY.USER-PROFILE-FACTORY-CLASS");
		String engUserProfileFactoryClass = (String) engUserProfileFactorySB.getAttribute("className");
		engUserProfileFactoryClass = engUserProfileFactoryClass.trim(); 
		IUserProfileFactory engUserProfileFactory = (IUserProfileFactory)Class.forName(engUserProfileFactoryClass).newInstance();
		// create user profile
		IEngUserProfile userProfile = engUserProfileFactory.createUserProfile(principal);
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),"service()", 
				            "userProfile created " + userProfile);
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),"service()", 
	                        "Attributes name of the user profile: " + userProfile.getUserAttributeNames());
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),"service()", 
                			"Functionalities of the user profile: " + userProfile.getFunctionalities());
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, this.getClass().getName(),"service()", 
                            "Roles of the user profile: " + userProfile.getRoles());
		// put user profile into spago session container
		RequestContainer reqCont = getRequestContainer();
		SessionContainer sessionCont = reqCont.getSessionContainer();
		SessionContainer permSession = sessionCont.getPermanentContainer();
		permSession.setAttribute(IEngUserProfile.ENG_USER_PROFILE, userProfile);
		// put user profile into the singleton profileExchanger
		ProfileExchanger profExchanger = ProfileExchanger.getInstance();
		profExchanger.insertProfile((String)userProfile.getUserUniqueIdentifier(), userProfile);
		
		/* ********* start luca changes *************** */
		String username = (String)userProfile.getUserUniqueIdentifier();
		if(!UserUtilities.userFunctionalityRootExists(username)) {
			UserUtilities.createUserFunctionalityRoot(userProfile);
		}
		/* ********* end luca changes ***************** */
		
	}

}
