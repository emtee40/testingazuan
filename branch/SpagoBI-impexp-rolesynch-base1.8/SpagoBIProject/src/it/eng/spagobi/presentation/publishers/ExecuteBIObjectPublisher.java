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
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;

/**
 * Publishes the results of a detail request for executing a BI object into the
 * correct jsp page according to what contained into request. If Any errors
 * occurred during the execution of the <code>ExecuteBIObjectModule</code>
 * class, the publisher is able to call the error page with the error message
 * caught before and put into the error handler. If the input information don't
 * fall into any of the cases declared, another error is generated.
 * 
 * @author sulis
 */
public class ExecuteBIObjectPublisher implements PublisherDispatcherIFace {
	/**
	 * Given the request at input, gets the name of the reference
	 * publisher,driving the execution into the correct jsp page, or jsp error
	 * page, if any error occurred.
	 * 
	 * @param requestContainer
	 *            The object containing all request information
	 * @param responseContainer
	 *            The object containing all response information
	 * @return A string representing the name of the correct publisher, which
	 *         will call the correct jsp reference.
	 */

	public String getPublisherName(RequestContainer requestContainer,
			ResponseContainer responseContainer) {

		EMFErrorHandler errorHandler = responseContainer.getErrorHandler();

		// get the module response
		SourceBean executeModuleResponse = (SourceBean) responseContainer
				.getServiceResponse().getAttribute("ExecuteBIObjectModule");
		SourceBean listLookupModule = (SourceBean) responseContainer
				.getServiceResponse().getAttribute(
						"ListLookupModalityValuesModule");

		// if the module response is null throws an error and return the name of
		// the errors publisher
		if (executeModuleResponse == null && listLookupModule == null) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE,
					"ExecuteBIObjectPublisher", "getPublisherName",
					"Module response null");
			EMFUserError error = new EMFUserError(EMFErrorSeverity.ERROR, 10);
			errorHandler.addError(error);
			return new String("error");
		}
		
		// if there are some errors into the errorHandler return the name for
		// the errors publisher
		if (!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
			if (executeModuleResponse != null) {
				Object publisherNameSetObj = executeModuleResponse
						.getAttribute(SpagoBIConstants.PUBLISHER_NAME);
				if (publisherNameSetObj != null) {
					String publisherName = (String) publisherNameSetObj;
					return publisherName;
				} else
					return "error";
			} else if (listLookupModule != null) {
				Object publisherNameSetObj = listLookupModule
						.getAttribute(SpagoBIConstants.PUBLISHER_NAME);
				if (publisherNameSetObj != null) {
					String publisherName = (String) publisherNameSetObj;
					return publisherName;
				} else
					return "error";
			} else
				return "error";
		}

		boolean isLoop = false;
		if (executeModuleResponse != null && executeModuleResponse.getAttribute("isLoop") != null) {
			try {
				executeModuleResponse.delAttribute("isLoop");
			} catch (Exception e) {
				e.printStackTrace();
			}
			isLoop = true;
		}

		boolean execute = false;
		Object exec = executeModuleResponse == null ? null: executeModuleResponse.getAttribute("EXECUTION");
		if (exec != null) {
			execute = true;
		}

		boolean selRole = false;
		Object selectionRole =  executeModuleResponse == null ? null: executeModuleResponse
				.getAttribute("selectionRoleForExecution");
		if (selectionRole != null) {
			selRole = true;
		}

		boolean datamartExecution = false;
		Object datamartExecutionObj = executeModuleResponse == null ? null: executeModuleResponse
				.getAttribute("DATAMART_EXECUTION");
		if (datamartExecutionObj != null) {
			datamartExecution = true;
		}

		boolean publisherNameSet = false;
		Object publisherNameSetObj = executeModuleResponse == null ? null: executeModuleResponse
				.getAttribute(SpagoBIConstants.PUBLISHER_NAME);
		if (publisherNameSetObj == null) {
			publisherNameSetObj = listLookupModule == null ? null: listLookupModule
					.getAttribute(SpagoBIConstants.PUBLISHER_NAME);
		}
		if (publisherNameSetObj != null) {
			publisherNameSet = true;
		}

		if (publisherNameSet) {
			String publisherName = (String) publisherNameSetObj;
			return publisherName;
		}

		if (isLoop && executeModuleResponse != null) {
			String actor = (String) executeModuleResponse
					.getAttribute(SpagoBIConstants.ACTOR);
			if (actor.equalsIgnoreCase(SpagoBIConstants.DEV_ACTOR)) {
				return new String("LoopTree");
				// return new String("LoopTreeDev");
			} else if (actor.equalsIgnoreCase(SpagoBIConstants.TESTER_ACTOR)) {
				return new String("LoopTree");
				// return new String("LoopTreeTest");
			} else {
				return new String("LoopTree");
				// return new String("LoopTreeExec");
			}
		}

		if (datamartExecution) {
			return new String("SELECT_FIELDS_FOR_SELECTION_PUBLISHER");
			// return new String("DATA_MART_MAIN_PUBLISHER");
		}

		if (!execute) {
			if (!selRole) {
				return new String("ExecuteBIObjectPageParameter");
			} else {
				return new String("ExecuteBIObjectSelectRole");
			}
		} else {
			return new String("ExecuteBIObjectPageExecution");
		}

	}

}
