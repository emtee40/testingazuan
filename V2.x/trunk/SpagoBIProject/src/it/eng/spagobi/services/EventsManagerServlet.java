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
package it.eng.spagobi.services;

import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.engines.drivers.handlers.IRolesHandler;
import it.eng.spagobi.events.EventsManager;
import it.eng.spagobi.events.bo.EventLog;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * A servlet used to manage and control the EventManager
 * 
 * @author Gioia
 *
 */
public class EventsManagerServlet extends HttpServlet{
	
	public static final String FIRE_EVENT = "fireEvent";
	public static final String GET_FIRED_EVENTS = "getFiredEvents";
//	public static final String RETURN_STATUS_OK = "OK";
//	public static final String RETURN_STATUS_KO = "KO";
	
	/**
	 * Init method definition
	 */
	public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }
	
	/**
     * Service method definition
     * 
     * @param request The http servlet request
     * @param response The http servlet response
     * @throws IOException If any exception occurred
     */
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		byte[] returnValue = null;
		
		SpagoBITracer.debug("SpagoBI", getClass().getName(), "service:", "Start processing request ...");	 				
	 	try{
	 		String operation = request.getParameter("operation");
	 		if(operation != null) {
	 			if(operation.equalsIgnoreCase(FIRE_EVENT)) {
	 				// read input parameters
	 				String user = request.getParameter("user");
	 				String desc = request.getParameter("desc");
	 				String paramStr = request.getParameter("parameters");
	 				String rolesHandler = request.getParameter("rolesHandler");
	 				String presentationHandler = request.getParameter("presentationHandler");
//	 				if(eventId != null && user != null) {
	 				if(user != null) {
	 					//EventsManager.getInstance().fireEvent(eventId, user, desc, paramStr);
	 					IRolesHandler rolesHandlerClass = (IRolesHandler) Class.forName(rolesHandler).newInstance();
	 					List roles = rolesHandlerClass.calculateRoles(paramStr); 
	 					Integer id = EventsManager.getInstance().registerEvent(user, desc, paramStr, roles, presentationHandler);
		 				returnValue = id.toString().getBytes();
		 				SpagoBITracer.debug("SpagoBI", getClass().getName(), "service:", "operation " + FIRE_EVENT + " executed succesfully");					
	 				}
	 				else {
	 					SpagoBITracer.debug("SpagoBI", getClass().getName(), "service:", "Impossible to execute operation " + FIRE_EVENT + " because there are some errors in input parameters");
	 				}
	 				
		 			response.setContentLength(returnValue.length);
				 	response.getOutputStream().write(returnValue);
				 	response.getOutputStream().flush();
	 			}
//	 			else if(operation.equalsIgnoreCase(GET_FIRED_EVENTS)) {
//	 				// read input parameters	 				
//	 				String user = request.getParameter("user");
//	 				if(user != null) {
//	 					//List firedEventsList = EventsManager.getInstance().getFiredEvents(user);
//	 					List firedEventsList = EventsManager.getInstance().getRegisteredEvents(user);
//		 				returnValue = getFiredEventsCsvStr(firedEventsList);
//		 				SpagoBITracer.debug("SpagoBI", getClass().getName(), "service:", "operation " + GET_FIRED_EVENTS + " executed succesfully");					
//	 				}
//	 				else {
//	 					SpagoBITracer.debug("SpagoBI", getClass().getName(), "service:", "Impossible to execute operation " + GET_FIRED_EVENTS + " because there are some errors in input parameters");
//	 				}
//	 				
//	 				response.setContentLength(returnValue.length());
//				 	response.getWriter().print(returnValue);
//				 	response.getWriter().flush();	 				
//	 			}
	 		}	
	 	
	 	} catch(Exception e) {
	 		SpagoBITracer.critical("SpagoBI", getClass().getName(), "service", "Exception", e);
	 	}
	}
	
	
			
	private String getFiredEventsCsvStr(List firedEventsList) {
		StringBuffer buffer = new StringBuffer();
		for(int i = 0; i < firedEventsList.size(); i++) {
			EventLog firedEvent = (EventLog)firedEventsList.get(i);
			buffer.append(firedEvent.getId() + "," + 
					firedEvent.getUser() + "," + 
					firedEvent.getDate() + "," + 
					firedEvent.getDesc() + "," + 
					firedEvent.getParams() + "\n");
		}
		return buffer.toString();
	}
}
