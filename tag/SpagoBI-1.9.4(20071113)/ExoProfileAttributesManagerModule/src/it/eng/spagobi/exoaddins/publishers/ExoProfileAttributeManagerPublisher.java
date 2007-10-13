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
package it.eng.spagobi.exoaddins.publishers;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.presentation.PublisherDispatcherIFace;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;

public class ExoProfileAttributeManagerPublisher implements PublisherDispatcherIFace {


	public String getPublisherName(RequestContainer requestContainer, ResponseContainer responseContainer) {

		EMFErrorHandler errorHandler = responseContainer.getErrorHandler();
		if(!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
			return "error";
		}
		SourceBean serviceResponse = responseContainer.getServiceResponse();
		SourceBean moduleResponse = (SourceBean)serviceResponse.getAttribute("ExoProfileAttributeManagerModule");
		if(moduleResponse == null) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, 
					            this.getClass().getName(), 
					            "getPublisherName", 
					            "Module response null");
			EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 10 );
			errorHandler.addError(error);
			return "error";
		}
		String publisherName = (String)moduleResponse.getAttribute(SpagoBIConstants.PUBLISHER_NAME );
		if((publisherName==null) || (publisherName.trim().equals("")) ){
			return "ExoProfileAttributeManagerHome";
		} else {
			return publisherName;
		}
	}
}
