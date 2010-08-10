package it.eng.spagobi.services.modules;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.dispatching.service.DefaultRequestContext;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spagobi.test.dbunit.utility.DBConnectionTestCase;

public class ListLookupLovModuleDbUnitTest extends DBConnectionTestCase {
	
	private SourceBean request = null, response = null, config = null;

	private ListLookupLovModule listLookupLovModule = null;

	private String className="it.eng.spagobi.services.modules.ListLookupLovModule";
	
	protected void setUp() throws Exception {
		try {
			request = new SourceBean("");
			response = new SourceBean("");
			config = new SourceBean("");
		} catch (SourceBeanException e1) {
			e1.printStackTrace();
		}
		RequestContainer reqContainer = new RequestContainer();
		ResponseContainer resContainer = new ResponseContainer();
		DefaultRequestContext defaultRequestContext = new DefaultRequestContext(
				reqContainer, resContainer);
		reqContainer.setServiceRequest(request);
		resContainer.setServiceResponse(response);
		resContainer.setErrorHandler(new EMFErrorHandler());
		listLookupLovModule = new ListLookupLovModule();
		listLookupLovModule.setRequestContext(defaultRequestContext);
		super.setUp();
		
		ConfigSingleton configSingleton = ConfigSingleton.getInstance();
		SourceBean moduleConfig = (SourceBean) configSingleton.getFilteredSourceBeanAttribute("MODULES.MODULE","class",className);
		config = (SourceBean) moduleConfig.getAttribute("CONFIG");
		listLookupLovModule.init(config);
	}

	
	/**
	 * Test method for 'it.eng.spagobi.services.modules.ListLookupLovModule.getList(SourceBean, SourceBean)'.
	 * Verifies that the correct list of Lovs is returned.
	 */
	public void testGetList() {
		ListIFace list=null;
		try {
			list=listLookupLovModule.getList(request,response);
		} catch (Exception e) {
			e.printStackTrace();
			fail("Unexpected exception occurred!");
		}
		assertEquals(2,list.pages());
		assertEquals(12,list.getPaginator().rows());
	}

}
