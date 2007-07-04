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
package it.eng.test.unittest.action;

import it.eng.qbe.action.UpdateFieldsForResumeAction;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.qbe.wizard.WizardConstants;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.service.DefaultRequestContext;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.test.utilities.CreateInitialSingleDataMartWizardObject;
import junit.framework.TestCase;

public class UpdateFieldsForResumeActionTest extends TestCase {

	private SourceBean request = null, response = null;
	private RequestContainer reqContainer = null;
	private ResponseContainer resContainer = null;
	private SessionContainer session = null;
	private ISingleDataMartWizardObject singleDataMartWizardObj = null;
	private UpdateFieldsForResumeAction updateFieldsForResumeAction = null;
	
	protected void setUp() throws Exception {
		super.setUp();
		try {
			request = new SourceBean("");
			response = new SourceBean("");
		} catch (SourceBeanException e1) {
			e1.printStackTrace();
			fail("Unaspected exception occurred!");
		}
		reqContainer = new RequestContainer();
		resContainer = new ResponseContainer();
		reqContainer.setServiceRequest(request);
		resContainer.setServiceResponse(response);
		session = new SessionContainer(true);
		reqContainer.setSessionContainer(session);
		RequestContainer.setRequestContainer(reqContainer);
		DefaultRequestContext defaultRequestContext = new DefaultRequestContext(
				reqContainer, resContainer);
		resContainer.setErrorHandler(new EMFErrorHandler());
		
		singleDataMartWizardObj = CreateInitialSingleDataMartWizardObject.createInitialSingleDataMartWizardObject();
		
		session.setAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD, singleDataMartWizardObj);
		
		updateFieldsForResumeAction = new UpdateFieldsForResumeAction();
		updateFieldsForResumeAction.setRequestContext(defaultRequestContext);
	}
	
	/*
	 * Test method for 'it.eng.qbe.action.UpdateFieldsForResumeAction.service(SourceBean, SourceBean)'
	 */
	public void testService() {

		try {
			String nextAction = "next action";
			request.setAttribute("NEXT_ACTION", nextAction);
			String nextPublisher = "next publisher";
			request.setAttribute("NEXT_PUBLISHER", nextPublisher);
			String expertQueryDisplayed = "expert query displayed";
			request.setAttribute("expertDisplayedForUpdate", expertQueryDisplayed);
			updateFieldsForResumeAction.service(request, response);
			assertEquals(nextAction, response.getAttribute("NEXT_ACTION"));		
			assertEquals(nextPublisher, response.getAttribute("NEXT_PUBLISHER"));
			assertEquals(expertQueryDisplayed, singleDataMartWizardObj.getExpertQueryDisplayed());
			
		} catch (SourceBeanException e) {
			e.printStackTrace();
			fail("Unaspected exception occurred!");
		}
		
	}

}
