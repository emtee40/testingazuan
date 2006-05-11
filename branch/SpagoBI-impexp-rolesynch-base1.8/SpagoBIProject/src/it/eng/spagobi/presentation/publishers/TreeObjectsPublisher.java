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
package it.eng.spagobi.presentation.publishers;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.presentation.PublisherDispatcherIFace;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;
/**
 * Publishes the results of a list information request for parameter use modes
 * into the correct jsp page according to what contained into request. If Any errors occurred during the 
 * execution of the <code>TreeObjectsModule</code> class, the publisher
 * is able to call the error page with the error message caught before and put into 
 * the error handler. If the input information don't fall into any of the cases declared,
 * another error is generated. 
 * 
 * @author sulis
 */
public class TreeObjectsPublisher implements PublisherDispatcherIFace {

	/**
	 *Given the request at input, gets the name of the reference publisher,driving
	 * the execution into the correct jsp page, or jsp error page, if any error occurred.
	 * 
	 * @param requestContainer The object containing all request information
	 * @param responseContainer The object containing all response information
	 * @return A string representing the name of the correct publisher, which will
	 * 		   call the correct jsp reference.
	 */

	public String getPublisherName(RequestContainer requestContainer, ResponseContainer responseContainer) {

		String pubName = ""; 
		SourceBean serviceRequest = requestContainer.getServiceRequest();
		EMFErrorHandler errorHandler = responseContainer.getErrorHandler();
		// if there are some errors into the errorHandler  return the name for the errors publisher
		if(!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
			return new String("error");
		}
        // if passed the error check get the response of the module
		SourceBean moduleResponse = (SourceBean)responseContainer.getServiceResponse().getAttribute("TreeObjectsModule");
		// if the module response is null throws an error and return the name of the errors publisher
		if(moduleResponse==null) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, 
					            "TreeObjectsPublisher", 
					            "getPublisherName", 
					            "Module response null");
			EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 10 );
			errorHandler.addError(error);
			return new String("error");
		}
		// if passed the module response control if the response has already a publisher name setted
	    String publisherName = (String)moduleResponse.getAttribute(SpagoBIConstants.PUBLISHER_NAME );
	    if( (publisherName!=null) &&  !(publisherName.trim().equals(""))  ) {
	       	return publisherName;
		} 
        // if no publisher name is set get the actor		
		String actor = (String)moduleResponse.getAttribute(SpagoBIConstants.ACTOR);
        // based on actor type return different publisher names           
		if(actor.equals(SpagoBIConstants.ADMIN_ACTOR)) {
			String operation = (String)serviceRequest.getAttribute(SpagoBIConstants.OPERATION);
			if(operation==null) {
				pubName = new String("treeAdminObjects");
			} else if(operation.equals(SpagoBIConstants.FUNCTIONALITIES_OPERATION)) {
				pubName = new String("treeFunctionalities");
			} else if(operation.equals(SpagoBIConstants.IMPORTEXPORT_OPERATION)) {
				pubName = new String("importexportHome");
			}
		} else if(actor.equals(SpagoBIConstants.DEV_ACTOR)) {
			pubName = new String("treeDevObjects");
		} else if(actor.equals(SpagoBIConstants.USER_ACTOR)) {
			pubName = new String("treeExecObjects");
		} else if(actor.equals(SpagoBIConstants.TESTER_ACTOR)) {
			pubName = new String("treeExecObjects");
		}
		return pubName;
	}

}