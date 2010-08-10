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
package it.eng.spagobi.services.cas;

import it.eng.spagobi.services.common.SsoServiceInterface;
import it.eng.spagobi.services.security.exceptions.SecurityException;

import java.io.IOException;

import javax.portlet.PortletSession;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import edu.yale.its.tp.cas.client.CASReceipt;
import edu.yale.its.tp.cas.client.ProxyTicketValidator;
import edu.yale.its.tp.cas.client.filter.CASFilter;
import edu.yale.its.tp.cas.proxy.ProxyTicketReceptor;

/**
 * This class contain the specific code of CAS 
 */
public class CasSsoService implements SsoServiceInterface {

    static private Logger logger = Logger.getLogger(CasSsoService.class);
    
    /**
     * Read user id.
     * 
     * @param session HttpSession
     * 
     * @return String
     */
    public String readUserIdentifier(HttpServletRequest request){
    HttpSession session=request.getSession();
	String user=(String)session.getAttribute(CASFilter.CAS_FILTER_USER);
	logger.debug("CAS user in HttpSession:"+user);
	return user;
    }
    
    /**
     * Read user id.
     * 
     * @param session PortletSession
     * 
     * @return String
     */
    public String readUserIdentifier(PortletSession session){
	String user=(String)session.getAttribute(CASFilter.CAS_FILTER_USER);
	logger.debug("CAS user in PortletSession:"+user);
	return user;
    }
    
    /**
     * Get a new ticket.
     * 
     * @param session HttpSession
     * @param filterReceipt String
     * 
     * @return String
     * 
     * @throws IOException Signals that an I/O exception has occurred.
     */
    public String readTicket(HttpSession session,String filterReceipt) throws IOException{
	    logger.debug("IN.filterReceipt="+filterReceipt);
	    CASReceipt cr = (CASReceipt) session.getAttribute(CASFilter.CAS_FILTER_RECEIPT);
	    logger.debug("Read cr=" + cr);
	    if (cr==null) logger.warn("CASReceipt in session is NULL");
	    String ticket=ProxyTicketReceptor.getProxyTicket(cr.getPgtIou(), filterReceipt);
	    logger.debug("OUT.ticket="+ticket);
	    return ticket;
    }

    /**
     * This method verify the ticket.
     * 
     * @param ticket String, ticket to validate
     * @param userId String, user id
     * @param validateUrl String
     * @param validateService String
     * 
     * @return String
     * 
     * @throws SecurityException the security exception
     */
    public void validateTicket(String ticket, String userId,String validateUrl,String validateService)throws SecurityException {
	logger.debug("IN");
	logger.debug("userId:"+userId);
	logger.debug("validateUrl:"+validateUrl);
	logger.debug("validateService:"+validateService);
	try {
	    ProxyTicketValidator pv = null;
	    pv = new ProxyTicketValidator();
	    pv.setCasValidateUrl(validateUrl);
	    pv.setServiceTicket(ticket);
	    pv.setService(validateService);
	    pv.setRenew(false);
	    pv.validate();
	    if (pv.isAuthenticationSuccesful()) {
			String tmpUserId = pv.getUser();
			logger.debug("CAS User:" + tmpUserId);
			if (  userId==null || !userId.equals(tmpUserId)) {
			    logger.warn("Proxy and application users are not the same [" + userId + "-"
				    + tmpUserId + "]");
			    throw new SecurityException("Proxy and application users are not the same [" + userId + "-"
					    + tmpUserId + "]");
			}
			
			
	    } else {
		logger.error("Token NOT VALID");
		throw new SecurityException("Token NOT VALID");
	    }
	} catch (Throwable e) {
	    logger.error("An exception occured while validating the cas token");
	    throw new SecurityException("An exception occured while validating the cas token", e);
	} finally {
	    logger.debug("OUT");
	}

    }

}
