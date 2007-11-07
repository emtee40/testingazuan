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
package it.eng.spagobi.engines.dossier.modules;

import java.util.List;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.handlers.ExecutionController;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.engines.dossier.constants.BookletsConstants;
import it.eng.spagobi.engines.dossier.dao.BookletsCmsDaoImpl;
import it.eng.spagobi.engines.dossier.dao.IBookletsCmsDao;

/**
 * @author Andrea Gioia
 *
 */
public class BookletRefreshModule extends AbstractModule {
	
	public static final String MODULE_PAGE = "BookletRefreshPage";	
	
	public void init(SourceBean config) {}
	
	public void service(SourceBean request, SourceBean response) throws Exception {
		SpagoBITracer.debug(BookletsConstants.NAME_MODULE, this.getClass().getName(),
	            "execute", "Start execute method");

		
		String pathBook = (String)request.getAttribute(BookletsConstants.PATH_BOOKLET_CONF);
		SpagoBITracer.debug(BookletsConstants.NAME_MODULE, this.getClass().getName(),
	            "execute", "using path " + pathBook);

		IBookletsCmsDao bookDao = new BookletsCmsDaoImpl();
		List presVersions = bookDao.getPresentationVersions(pathBook);
		SpagoBITracer.debug(BookletsConstants.NAME_MODULE, this.getClass().getName(),
    			"execute", "Version list retrived " + presVersions);
		
		try{
			response.setAttribute(BookletsConstants.PUBLISHER_NAME, "BookletsPresentationVersion");
			response.setAttribute(BookletsConstants.BOOKLET_PRESENTATION_VERSIONS, presVersions);
			response.setAttribute(BookletsConstants.PATH_BOOKLET_CONF, pathBook);
		} catch (Exception e) {
			SpagoBITracer.major(BookletsConstants.NAME_MODULE, this.getClass().getName(), 
		            "execute", "error while setting response attribute " + e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		
		SpagoBITracer.debug(BookletsConstants.NAME_MODULE, this.getClass().getName(),
				"execute", "End execute method");
	}
}
	
	
	