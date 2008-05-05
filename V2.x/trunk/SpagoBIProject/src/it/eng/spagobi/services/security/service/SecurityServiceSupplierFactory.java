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
package it.eng.spagobi.services.security.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;

/**
 * Factory class for the security supplier 
 * @author Bernabei Angelo
 *
 */
public class SecurityServiceSupplierFactory {

    /**
     * Creates a new SecurityServiceSupplier object.
     * 
     * @return the i security service supplier
     */
    public static ISecurityServiceSupplier createISecurityServiceSupplier(){

	SourceBean configSingleton = (SourceBean)ConfigSingleton.getInstance();
	SourceBean engUserProfileFactorySB = (SourceBean) configSingleton.getAttribute("SPAGOBI.SECURITY.USER-PROFILE-FACTORY-CLASS");
	String engUserProfileFactoryClass = (String) engUserProfileFactorySB.getAttribute("className");
	engUserProfileFactoryClass = engUserProfileFactoryClass.trim(); 
	try {
	    return  (ISecurityServiceSupplier)Class.forName(engUserProfileFactoryClass).newInstance();
	} catch (InstantiationException e) {
	    e.printStackTrace();
	} catch (IllegalAccessException e) {
	    e.printStackTrace();
	} catch (ClassNotFoundException e) {
	    e.printStackTrace();
	}
	return null;
    }
    
}
