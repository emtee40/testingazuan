/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.spagobi.qbe.core.service;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

import org.apache.log4j.Logger;

import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFAbstractError;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spagobi.qbe.commons.service.AbstractQbeEngineAction;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.engines.EngineAnalysisMetadata;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceException;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceExceptionHandler;
import it.eng.spagobi.utilities.service.JSONAcknowledge;

/**
 * This action is responsible to persist the queries contained into the catalogue
 */
public class SaveCatalogueAction extends AbstractQbeEngineAction {
	
	public static final String SERVICE_NAME = "SAVE_CATALOGUE_ACTION";
	public String getActionName(){return SERVICE_NAME;}
	
	// INPUT PARAMETERS
	public static final String CATALOGUE_NAME = "name";	
	public static final String CATALOGUE_DESCRIPTION = "description";
	public static final String CATALOGUE_SCOPE = "scope";
	

	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(SaveCatalogueAction.class);
    
	
	public void service(SourceBean request, SourceBean response) {
		
		String queryName = null;		
		String  queryDescritpion  = null;		
		String  queryScope  = null;
		EngineAnalysisMetadata analysisMetadata = null;
		
		logger.debug("IN");
		
		try {
			super.service(request, response);	
			
			// validate input that cames from the clien side according to rules spicified in validation.xml
			// todo: move this activity in the parent abstract class and hide input validation from actual
			// service implementation
			validateInput();
			
			queryName = getAttributeAsString(CATALOGUE_NAME);		
			logger.debug(CATALOGUE_NAME + ": " + queryName);
			queryDescritpion  = getAttributeAsString(CATALOGUE_DESCRIPTION);
			logger.debug(CATALOGUE_DESCRIPTION + ": " + queryDescritpion);
			queryScope  = getAttributeAsString(CATALOGUE_SCOPE);
			logger.debug(CATALOGUE_SCOPE + ": " + queryScope);
			
			analysisMetadata = getEngineInstance().getAnalysisMetadata();
			analysisMetadata.setName( queryName );
			analysisMetadata.setDescription( queryDescritpion );
		
			if( EngineAnalysisMetadata.PUBLIC_SCOPE.equalsIgnoreCase( queryScope ) ) {
				analysisMetadata.setScope( EngineAnalysisMetadata.PUBLIC_SCOPE );
			} else if( EngineAnalysisMetadata.PRIVATE_SCOPE.equalsIgnoreCase( queryScope ) ) {
				analysisMetadata.setScope( EngineAnalysisMetadata.PRIVATE_SCOPE );
			} else {
				Assert.assertUnreachable("Value [" + queryScope + "] is not valid for the input parameter " + CATALOGUE_SCOPE);
			}
			
			String result = saveAnalysisState();
			if(!result.trim().toLowerCase().startsWith("ok")) {
				throw new SpagoBIEngineServiceException(getActionName(), result);
			}
			
			try {
				writeBackToClient( new JSONAcknowledge() );
			} catch (IOException e) {
				String message = "Impossible to write back the responce to the client";
				throw new SpagoBIEngineServiceException(getActionName(), message, e);
			}
			
		} catch(Throwable t) {
			throw SpagoBIEngineServiceExceptionHandler.getInstance().getWrappedException(getActionName(), getEngineInstance(), t);
		} finally {
			logger.debug("OUT");
		}		
	}
	
	public void validateInput() {
		EMFErrorHandler errorHandler = getErrorHandler();
		if (!errorHandler.isOKBySeverity(EMFErrorSeverity.ERROR)) {
			Collection errors = errorHandler.getErrors();
			Iterator it = errors.iterator();
			while (it.hasNext()) {
				EMFAbstractError error = (EMFAbstractError) it.next();
				if (error.getSeverity().equals(EMFErrorSeverity.ERROR)) {
					throw new SpagoBIEngineServiceException(getActionName(), error.getMessage(), null);
				}
			}
		}
	}
}
