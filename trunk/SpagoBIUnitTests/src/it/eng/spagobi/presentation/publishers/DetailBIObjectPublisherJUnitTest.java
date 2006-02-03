package it.eng.spagobi.presentation.publishers;

import java.util.Collection;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFUserError;
import junit.framework.TestCase;

public class DetailBIObjectPublisherJUnitTest extends TestCase {

	private SourceBean request = null, response = null;
	
	private RequestContainer reqContainer = null;

	private ResponseContainer resContainer = null;
	
	private DetailBIObjectPublisher detailBIObjectPublisher = null;

	protected void setUp() throws Exception {
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
		resContainer.setErrorHandler(new EMFErrorHandler());
		detailBIObjectPublisher = new DetailBIObjectPublisher();
		super.setUp();
	}
	
	/**
	 * Test method for 'it.eng.spagobi.presentation.publishers.DetailBIObjectPublisher.getPublisherName(RequestContainer, ResponseContainer)'.
	 * Verifies that the correct Publisher name is returned.
	 */
	public void testGetPublisherName() {
		String publisherName = null;
		SourceBean moduleResponse = null;
		String moduleName = "DetailBIObjectModule";
		try {
			moduleResponse = new SourceBean(moduleName);
			moduleResponse.setAttribute("loopback","");
			response.setAttribute(moduleResponse);
			publisherName = detailBIObjectPublisher.getPublisherName(reqContainer,resContainer);
			assertEquals("detailBIObjectLoop",publisherName);
			
			moduleResponse.delAttribute("loopback");
			publisherName = detailBIObjectPublisher.getPublisherName(reqContainer,resContainer);
			assertEquals("detailBIObject",publisherName);
			
			response.delAttribute(moduleName);
			publisherName = detailBIObjectPublisher.getPublisherName(reqContainer,resContainer);
			assertEquals("error",publisherName);
			Collection errors = resContainer.getErrorHandler().getErrors();
			assertEquals(1, errors.size());
			assertEquals(10, ((EMFUserError)errors.toArray()[0]).getCode());
		} catch (SourceBeanException e) {
			e.printStackTrace();
			fail("Unaspected exception occurred!");
		}
	}

}
