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
package it.eng.spagobi.qbe.commons.presentation.tag;

import java.util.Locale;
import java.util.Map;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.query.Query;
import it.eng.spagobi.container.ContextManager;
import it.eng.spagobi.container.SpagoBIHttpSessionContainer;
import it.eng.spagobi.container.strategy.ExecutionContextRetrieverStrategy;
import it.eng.spagobi.container.strategy.IContextRetrieverStrategy;
import it.eng.spagobi.qbe.QbeEngineConfig;
import it.eng.spagobi.qbe.QbeEngineInstance;
import it.eng.spagobi.qbe.commons.urlgenerator.IQbeUrlGenerator;
import it.eng.spagobi.qbe.commons.urlgenerator.PortletQbeUrlGenerator;
import it.eng.spagobi.qbe.commons.urlgenerator.WebQbeUrlGenerator;
import it.eng.spagobi.utilities.engines.EngineConstants;

// TODO: Auto-generated Javadoc
/**
 * The Class QbeTagSupport.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class QbeTagSupport extends BaseTagSupport {
	
	
	protected ContextManager getContextManager() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("contextManager") == null) {
			IContextRetrieverStrategy contextRetriveStrategy;
			SpagoBIHttpSessionContainer sessionHttpContainer = new SpagoBIHttpSessionContainer( getRequest().getSession() );
			String executionId = getRequest().getParameter("SBI_EXECUTION_ID");
			contextRetriveStrategy = new ExecutionContextRetrieverStrategy( executionId );
			ContextManager conetxtManager = new ContextManager(sessionHttpContainer, contextRetriveStrategy);
			pageContext.setAttribute("contextManager", conetxtManager );
		}
		return (ContextManager)pageContext.getAttribute("contextManager");
	}
	
	protected QbeEngineInstance getEngineInstance() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("engineInstance") == null) {
			pageContext.setAttribute("engineInstance", getContextManager().get(EngineConstants.ENGINE_INSTANCE) );
		}
		return (QbeEngineInstance)pageContext.getAttribute("engineInstance");
	}
	
	
	/**
	 * Gets the locale.
	 * 
	 * @return the locale
	 */
	protected Locale getLocale() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("locale") == null) {
			pageContext.setAttribute("locale", getEngineInstance().getEnv().get(EngineConstants.ENV_LOCALE) );
		}
		return (Locale)pageContext.getAttribute("locale");
	}
	
	
	
	/**
	 * Gets the datamart model.
	 * 
	 * @return the datamart model
	 */
	protected DataMartModel getDatamartModel() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("datamartModel") == null) {
			pageContext.setAttribute("datamartModel", getEngineInstance().getDatamartModel() );
		}
		return (DataMartModel)pageContext.getAttribute("datamartModel");   
	}
	
	
	
	/**
	 * Gets the query.
	 * 
	 * @return the query
	 */
	protected Query getQuery() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("query") == null) {
			if(getEngineInstance().getActiveQuery() !=  null) {
				pageContext.setAttribute("query", getEngineInstance().getActiveQuery() );
			}
		}
		return (Query)pageContext.getAttribute("query");
	}
	
	
	/**
	 * Checks if is standalone modality.
	 * 
	 * @return true, if is standalone modality
	 */
	protected boolean isStandaloneModality() {
		if(pageContext == null) {
			return false;
		}
		
		if(pageContext.getAttribute("isStandaloneModality") == null) {
			boolean isStandaloneModality = (getSessionContainer().getAttribute("spagobi") == null); 
			pageContext.setAttribute("isStandaloneModality", new Boolean( isStandaloneModality ) );
		}
		return ((Boolean)pageContext.getAttribute("isStandaloneModality")).booleanValue();
	}
	
	/**
	 * Checks if is web modality.
	 * 
	 * @return true, if is web modality
	 */
	protected boolean isWebModality() {
		if(pageContext == null) {
			return false;
		}
		
		if(pageContext.getAttribute("isWebModality") == null) {
			pageContext.setAttribute("isWebModality", QbeEngineConfig.getInstance().isWebModalityActive() );
		}
		return ((Boolean)pageContext.getAttribute("isWebModality")).booleanValue();
	}
	
	
	
	/**
	 * Gets the qbe url generator.
	 * 
	 * @return the qbe url generator
	 */
	protected IQbeUrlGenerator getQbeUrlGenerator() {
		if(pageContext == null) {
			return null;
		}
		
		if(pageContext.getAttribute("UrlGenerator") == null) {
			IQbeUrlGenerator urlGenerator;
			if ( QbeEngineConfig.getInstance().isWebModalityActive() ) {
				urlGenerator = new WebQbeUrlGenerator();
			} else {
				urlGenerator = new PortletQbeUrlGenerator();
			}
			pageContext.setAttribute("UrlGenerator", urlGenerator  );
		}
		return (IQbeUrlGenerator)pageContext.getAttribute("UrlGenerator");
	}
	
	/**
	 * Gets the resource url.
	 * 
	 * @param url the url
	 * 
	 * @return the resource url
	 */
	protected String getResourceUrl(String url) {
		return getQbeUrlGenerator().getResourceUrl(getRequest() , url);
	}
	
	/**
	 * Gets the action url.
	 * 
	 * @param parameters the parameters
	 * 
	 * @return the action url
	 */
	protected String getActionUrl(Map parameters) {
		return getQbeUrlGenerator().getActionUrl(getRequest() , parameters);
	}
}

