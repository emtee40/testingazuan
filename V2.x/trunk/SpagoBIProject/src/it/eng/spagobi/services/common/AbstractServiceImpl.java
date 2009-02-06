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
import it.eng.spagobi.services.security.exceptions.SecurityException;

import org.apache.log4j.Logger;

/**
 * Abstract class for all Service Implementation
 */
public abstract class AbstractServiceImpl {

    static private Logger logger = Logger.getLogger(AbstractServiceImpl.class);

    protected String validateUrl = null;
    protected String validateService = null;
    protected boolean activeSso = false;
    private String pass = null;

    /**
     * Instantiates a new abstract service impl.
     */
    public AbstractServiceImpl() {
	init();
    }

    private void init() {
	logger.debug("IN");
	ConfigSingleton config = ConfigSingleton.getInstance();
	SourceBean validateSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.VALIDATE-USER.URL");
	validateUrl = (String) validateSB.getCharacters();
	logger.debug("Read validateUrl=" + validateUrl);
	validateSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.VALIDATE-USER.SERVICE");
	validateService =  (String) validateSB.getCharacters();
	logger.debug("Read validateService=" + validateService);
	validateSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.ACTIVE");
	String active = (String) validateSB.getCharacters();
	if (active != null && active.equals("true"))
	    activeSso = true;
	logger.debug("Read activeSso=" + activeSso);
	validateSB = (SourceBean) config.getAttribute("SPAGOBI_SSO.PASS");
	pass = (String) validateSB.getCharacters();

    }

    /**
     * check the ticket used for verify the user authentication
     * 
     * @param ticket
     *                String
     * @return String
     * @throws SecurityException
     */
    protected void validateTicket(String ticket, String userId) throws SecurityException {
	logger.debug("IN");
	if (ticket==null){
	    logger.warn("Ticket is NULL");
	    throw new SecurityException("Ticket is NULL");	    
	}
	if (userId == null) {
	    logger.warn("UserID is NULL");
	    throw new SecurityException("Ticket is NULL");
	}
	if (activeSso) {
	    logger.debug("activeSso checks are ON");
	    if (ticket.equals(pass)) {
		logger.debug("JUMP che ticket validation");
	    } else {
		SsoServiceInterface proxyService = SsoServiceFactory.createProxyService();
		proxyService.validateTicket(ticket, userId, validateUrl, validateService);
	    }
	}
	logger.debug("OUT");

    }

}
