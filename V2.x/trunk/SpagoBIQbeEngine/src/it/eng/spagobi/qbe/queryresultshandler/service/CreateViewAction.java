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
package it.eng.spagobi.qbe.queryresultshandler.service;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.utility.Utils;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.spago.base.Constants;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.action.AbstractHttpAction;



/**
 * @author Andrea Gioia
 */
public class CreateViewAction extends AbstractHttpAction {
	
	private SessionContainer getSessionContainer() {
		return getRequestContainer().getSessionContainer();
	}
	
	private ISingleDataMartWizardObject getDataMartWizard() {
		return Utils.getWizardObject(getSessionContainer());
	}
	
	private DataMartModel getDataMartModel() {
		return (DataMartModel)getSessionContainer().getAttribute("dataMartModel");
	}
	
	
	
	public void service(SourceBean request, SourceBean response) throws Exception {				
		String viewName = (String)request.getAttribute("VIEW_NAME");
		
		getResponseContainer().setAttribute(Constants.HTTP_RESPONSE_FREEZED, Boolean.TRUE);
		
		try {
			getDataMartModel().addView(viewName, getDataMartWizard());
		} catch (Throwable t) {
			getHttpResponse().getWriter().write("KO" + t.getMessage());
			t.printStackTrace();
		}
		
		getHttpResponse().getWriter().write("OK");		
	}
}
