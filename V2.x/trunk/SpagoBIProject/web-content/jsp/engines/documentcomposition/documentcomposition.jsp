
<!--
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
-->
<%@ include file="/jsp/commons/portlet_base.jsp"%>



<%@ page import="it.eng.spagobi.engines.documentcomposition.utils.DocumentCompositionUtils,
                 it.eng.spagobi.engines.documentcomposition.configuration.DocumentCompositionConfiguration,
                 it.eng.spagobi.engines.documentcomposition.configuration.DocumentCompositionConfiguration.Document"%>
<%@page import="org.apache.log4j.Logger"%>
<%@page import="it.eng.spagobi.engines.documentcomposition.SpagoBIDocumentCompositionInternalEngine"%>

<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.List"%>
<%@page import="it.eng.spagobi.commons.utilities.GeneralUtilities"%>

                 
<%! private static transient Logger logger=Logger.getLogger(SpagoBIDocumentCompositionInternalEngine.class);%>

<% 
	logger.debug("IN");
	
    //acquisizione info come template a cui girare la richiesta
    String nameTemplate = "";
 	
    //get object configuration
    DocumentCompositionConfiguration docConfig = null;
    docConfig = (DocumentCompositionConfiguration)aSessionContainer.getAttribute("docConfig");
     
    //get template file
    nameTemplate = docConfig.getTemplateFile();
    logger.debug("name TemplateFile: " + nameTemplate);
     
    //get list of documents
    List lstDoc = docConfig.getDocumentsArray();
    
    //get information for document composition
    Map lstUrl = new HashMap();
    Map lstDivStyle = new HashMap();
    Map lstPanelStyle = new HashMap();
    Map lstUrlParams  = new HashMap();
    Map lstDocLinked = new HashMap();
    Map lstFieldLinked = new HashMap();
   
    
    
    //loop on documents
    for (int i = 0; i < lstDoc.size(); i++){
    	//gets url, parameters and other informations
    	Document tmpDoc = (Document)lstDoc.get(i);
    	String tmpUrl = DocumentCompositionUtils.getEngineUrl(tmpDoc.getSbiObjLabel(), aSessionContainer, aRequestContainer.getServiceRequest());
    	//lstUrlParams.put("PARAMS_DOC_"+(i),tmpUrlParams);
    	lstUrlParams.put("SBI_DOC_LABEL__"+(i),  tmpDoc.getSbiObjLabel() + "|" + tmpDoc.getLabel());
    	//prepare list of values for the document that it's loading
    	docConfig.getInfoDocumentLinked(tmpDoc.getLabel());
  
    	lstUrl.put("URL_DOC__" + (i), tmpUrl);
        lstDivStyle = docConfig.getLstDivStyle();
        lstPanelStyle = docConfig.getLstPanelStyle();
        lstDocLinked = docConfig.getLstDocLinked();
        lstFieldLinked = docConfig.getLstFieldLinked(); 
    }

    aSessionContainer.setAttribute("urlIframe", GeneralUtilities.getSpagoBiContextAddress()+"/jsp/engines/documentcomposition/documentcomposition_Iframe.jsp");
    aSessionContainer.setAttribute("docUrls", lstUrl);
    aSessionContainer.setAttribute("docUrlParams", lstUrlParams);
    aSessionContainer.setAttribute("docLinked", lstDocLinked);
    aSessionContainer.setAttribute("fieldLinked", lstFieldLinked);
    aSessionContainer.setAttribute("panelStyle", lstPanelStyle);
    aSessionContainer.setAttribute("divStyle", lstDivStyle);
   
    //include jsp requested
    getServletContext().getRequestDispatcher(nameTemplate).include(request,response);    
	    
    logger.debug("OUT");

    %>
    
    
<spagobi:error/>

