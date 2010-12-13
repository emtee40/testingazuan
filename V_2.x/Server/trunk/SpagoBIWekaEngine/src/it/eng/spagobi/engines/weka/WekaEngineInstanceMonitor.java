/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2009 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.engines.weka;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import it.eng.spagobi.services.proxy.EventServiceProxy;
import it.eng.spagobi.utilities.engines.AuditServiceProxy;
import it.eng.spagobi.utilities.engines.EngineConstants;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class WekaEngineInstanceMonitor {
	
	Map env;
	String eventId;
	Throwable error;
	
	public static final String WEKA_ROLES_HANDLER_CLASS_NAME = "it.eng.spagobi.engines.drivers.weka.events.handlers.WekaRolesHandler";
	public static final String WEKA_PRESENTAION_HANDLER_CLASS_NAME = "it.eng.spagobi.engines.drivers.weka.events.handlers.WekaEventPresentationHandler";
	
	
	public WekaEngineInstanceMonitor(Map env) {
		this.env = env;
	}
	
	public void start() {
		
		try {
			eventId = getEventServiceProxy().fireEvent(getStartEventDescription(), getStartEventParameters(), WEKA_ROLES_HANDLER_CLASS_NAME, WEKA_PRESENTAION_HANDLER_CLASS_NAME);
		} catch (Exception e) {

		}
		getAuditServiceProxy().notifyServiceStartEvent();
	}
	
	public void stop() {
		if( isExecutionFailed() ) {
			getAuditServiceProxy().notifyServiceErrorEvent(error.getMessage());
		} else {
			getAuditServiceProxy().notifyServiceEndEvent();
		}
		
		getEventServiceProxy().fireEvent(getEndEventDescription(), getEndEventParameters(), WEKA_ROLES_HANDLER_CLASS_NAME, WEKA_PRESENTAION_HANDLER_CLASS_NAME);
	}
	
	
	public void setError(Throwable error) {
		this.error = error;
	}
	
	
	
	
	
	
	
	private boolean isExecutionFailed() {
		return error != null;
	}
	
	private String getStartEventDescription() {
		String startExecutionEventDescription = "${weka.execution.started}<br/>";
		return startExecutionEventDescription + getParameterListDescription();
	}
	
	private String getEndEventDescription() {
		String endExecutionEventDescription;
		if( isExecutionFailed() ) {
			endExecutionEventDescription = "${weka.execution.executionKo}<br/>";
		} else {
			endExecutionEventDescription = "${weka.execution.executionKo}<br/>";
		}
		
		return endExecutionEventDescription + getParameterListDescription();
	}
	
	private String getParameterListDescription() {
		String parametersList = "${weka.execution.parameters}<br/><ul>";
		Set paramKeys = env.keySet();
		Iterator paramKeysIt = paramKeys.iterator();
		while (paramKeysIt.hasNext()) {
			String key = (String) paramKeysIt.next();
			if (!key.equalsIgnoreCase("template") 
					&& !key.equalsIgnoreCase("document")
					&& !key.equalsIgnoreCase("processActivatedMsg")
					&& !key.equalsIgnoreCase("processNotActivatedMsg")
					&& !key.equalsIgnoreCase("userId")
					&& !key.equalsIgnoreCase("SPAGOBI_AUDIT_SERVLET")
					&& !key.equalsIgnoreCase("spagobicontext")
					&& !key.equalsIgnoreCase("SPAGOBI_AUDIT_ID")) {
				Object valueObj = env.get(key);
				parametersList += "<li>" + key + " = " + (valueObj != null ? valueObj.toString() : "") + "</li>";
			}
		}
		parametersList += "</ul>";
		
		return parametersList;
	}
	
	private Map getStartEventParameters() {
		Map startEventParams = new HashMap();				
		startEventParams.put(EventServiceProxy.EVENT_TYPE, EventServiceProxy.DOCUMENT_EXECUTION_START);
		startEventParams.put("document", env.get("DOCUMENT_ID"));
		
		return startEventParams;
	}
	
	private Map getEndEventParameters() {
		Map endEventParams = new HashMap();				
		endEventParams.put(EventServiceProxy.EVENT_TYPE, EventServiceProxy.DOCUMENT_EXECUTION_END);
		endEventParams.put("document", env.get("DOCUMENT_ID"));
		endEventParams.put(EventServiceProxy.START_EVENT_ID, eventId);
		if( isExecutionFailed() ) {
			endEventParams.put("operation-result", "failure");
		} else {
			endEventParams.put("operation-result", "success");
		}
		return endEventParams;
	}
	
	AuditServiceProxy getAuditServiceProxy() {
		return (AuditServiceProxy)this.getEnv().get(EngineConstants.ENV_AUDIT_SERVICE_PROXY);
	}
	
	EventServiceProxy getEventServiceProxy() {
		return (EventServiceProxy)this.getEnv().get(EngineConstants.ENV_EVENT_SERVICE_PROXY);
	}
	
	Map getEnv() {
		return env;
	}

	void setEnv(Map env) {
		this.env = env;
	}
}
