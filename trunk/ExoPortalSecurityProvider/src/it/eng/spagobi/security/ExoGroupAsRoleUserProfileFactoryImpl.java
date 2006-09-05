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

import it.eng.spago.security.IEngUserProfile;
import java.security.Principal;

import javax.portlet.PortletRequest;


/**
 * Implementation of the IEngUserProfile interface Factory. Defines methods 
 * to get a IEngUserProfile starting from the exo user information 
 */
public class ExoGroupAsRoleUserProfileFactoryImpl implements IUserProfileFactory {
	
	/**
	 * Return an IEngUserProfile implementation starting from the Portlet Request and the Principal of the 
	 * user given by exo platform.
	 * @param request The Portlet Request genrated from the user
	 * @param principal Principal of the current user
	 * @return The User Profile Interface implementation object
	 */
	public IEngUserProfile createUserProfile(PortletRequest request, Principal principal){
		return new ExoGroupAsRoleUserProfileImpl(principal);
	}
}
