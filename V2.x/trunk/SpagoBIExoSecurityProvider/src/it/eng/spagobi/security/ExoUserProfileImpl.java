/**

Copyright 2005 Engineering Ingegneria Informatica S.p.A.

This file is part of SpagoBI.

SpagoBI is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
any later version.

SpagoBI is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Spago; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307 USA

**/
package it.eng.spagobi.security;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.dao.IUserFunctionalityDAO;
import it.eng.spagobi.services.security.bo.SpagoBIUserProfile;
import it.eng.spagobi.services.security.service.ISecurityServiceSupplier;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import org.exoplatform.container.PortalContainer;
import org.exoplatform.container.RootContainer;
import org.exoplatform.services.organization.Group;
import org.exoplatform.services.organization.GroupHandler;
import org.exoplatform.services.organization.MembershipHandler;
import org.exoplatform.services.organization.OrganizationService;


/**
 * Implementation of the IEngUserProfile interface Factory. Defines methods 
 * to get a IEngUserProfile starting from the exo user information 
 */
public class ExoUserProfileImpl implements ISecurityServiceSupplier {
	
    static private Logger logger = Logger.getLogger(ExoUserProfileImpl.class);
    
	/**
	 * Return an IEngUserProfile implementation starting the Principal of the user 
	 * @param principal Principal of the current user
	 * @return The User Profile Interface implementation object
	 */
	public SpagoBIUserProfile createUserProfile(String userId){
		return createSpagoBIUserProfile(userId);
	}

        public boolean checkAuthorization(String userId,String function){
            logger.warn("checkAuthorization NOT implemented");
            return true;
        }
        
        private SpagoBIUserProfile createSpagoBIUserProfile(String userId){
            logger.debug("IN. userId="+userId);
            SpagoBIUserProfile profile=new SpagoBIUserProfile();
            profile.setUserId(userId);
            ArrayList roles = new ArrayList();	
            HashMap userAttributes = new HashMap();
	    PortalContainer container = PortalContainer.getInstance();
            
	    if (container == null) {
			ConfigSingleton config = ConfigSingleton.getInstance();
	    	        SourceBean securityconfSB = (SourceBean)config.getAttribute("SPAGOBI.SECURITY.PORTAL-SECURITY-CLASS.CONFIG");
			String paramCont = "NAME_PORTAL_APPLICATION";
			SecurityProviderUtilities.debug(this.getClass(), "<init(Principal)>", " Use param " + paramCont);
			SourceBean paramContSB = (SourceBean) securityconfSB.getAttribute(paramCont);
			SecurityProviderUtilities.debug(this.getClass(), "<init(Principal)>", " Param context name Source Bean " +
								"retrived: " + paramContSB);
			String nameCont = (String)paramContSB.getCharacters();
			SecurityProviderUtilities.debug(this.getClass(), "<init(Principal)>", " Use context name " + nameCont);
			RootContainer rootCont = RootContainer.getInstance();
			SecurityProviderUtilities.debug(this.getClass(), "<init(Principal)>", " Root container retrived: " + rootCont);
			container = rootCont.getPortalContainer(nameCont);
	    }
            
            OrganizationService service = (OrganizationService) container.getComponentInstanceOfType(OrganizationService.class);
            
		try {
			
			// load user roles
			Collection tmpRoles = service.getGroupHandler().findGroupsOfUser(userId); 
			GroupHandler groupHandler = service.getGroupHandler();
			SecurityProviderUtilities.debug(this.getClass(), "init", "Group Handler retrived " + groupHandler);
			MembershipHandler memberHandler = service.getMembershipHandler();
			SecurityProviderUtilities.debug(this.getClass(), "init", "Membership Handler retrived " + memberHandler);
			Group group = null;
			Matcher matcher = null;
			for (Iterator it = tmpRoles.iterator(); it.hasNext();){
				group = (Group) it.next();
				String groupID = group.getId();
				Pattern pattern = SecurityProviderUtilities.getFilterPattern();
				matcher = pattern.matcher(groupID);
				if(!matcher.find()){
    			continue;	
				}
				roles.add(group.getId());
				logger.debug("Roles load into SpagoBI profile: " + group.getId());
			}

			
			//start load profile attributes 
			userAttributes = SecurityProviderUtilities.getUserProfileAttributes(userId, service);
			logger.debug("Attributes load into SpagoBI profile: " + userAttributes);
			// end load profile attributes
			
    		String[] roleStr=new String[roles.size()];
    		for (int i=0;i<roles.size();i++){
    		    roleStr[i]=(String)roles.get(i);
    		}
    		profile.setRoles(roleStr);
    		profile.setAttributes(userAttributes);
    		profile.setFunctions(readFunctionality(profile.getRoles()));
		
		} catch(Exception e){
		    logger.error("Exception",e);
		}
		logger.debug("OUT");
		return profile;
        }
        
        private String[] readFunctionality(String[] roles){
        	logger.debug("IN");
        	try {
        	    IUserFunctionalityDAO dao=DAOFactory.getUserFunctionalityDAO();
        	    return dao.readUserFunctionality(roles);
        	} catch (EMFUserError e) {
        	    logger.error("EMFUserError",e);
        	} catch (Exception e) {
        	    logger.error("Exception",e);
        	} finally{
        	    logger.debug("OUT");
        	}
        	return null;
        }        
}
