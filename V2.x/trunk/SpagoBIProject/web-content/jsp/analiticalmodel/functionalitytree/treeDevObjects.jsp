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

<%@ page import="javax.portlet.PortletURL,
                 it.eng.spagobi.commons.constants.ObjectsTreeConstants,
                 it.eng.spagobi.commons.constants.SpagoBIConstants,
                 it.eng.spagobi.analiticalmodel.document.service.DetailBIObjectModule,
                 it.eng.spago.navigation.LightNavigationManager" %>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
<%@page import="it.eng.spagobi.analiticalmodel.document.service.BIObjectsModule"%>

<% 
   	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("TreeObjectsModule"); 
  
	//get original page (SbiAnaliticalModel or SbiFunctionality) from seviceRequest and set boolean indicator
	String originalObject = (aServiceRequest.getAttribute("objectId")==null)?"":(String)aServiceRequest.getAttribute("objectId");
	boolean flgFunc = false;
	if (originalObject.equalsIgnoreCase("SBIFunctionality"))
		 flgFunc = true; 

	Map backUrlPars = new HashMap();
	backUrlPars.put("ACTION_NAME", "START_ACTION");
	backUrlPars.put("PUBLISHER_NAME", "LoginSBIAnaliticalModelPublisher");
	backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_RESET, "true");
	String backUrl = urlBuilder.getUrl(request, backUrlPars);

	Map addUrlPars = new HashMap();
	addUrlPars.put("PAGE", DetailBIObjectModule.MODULE_PAGE);
	addUrlPars.put(ObjectsTreeConstants.MESSAGE_DETAIL, ObjectsTreeConstants.DETAIL_NEW);
	String addUrl = urlBuilder.getUrl(request, addUrlPars);
   
	Map viewListUrlPars = new HashMap();
	viewListUrlPars.put("PAGE", BIObjectsModule.MODULE_PAGE);
	viewListUrlPars.put(SpagoBIConstants.OBJECTS_VIEW, SpagoBIConstants.VIEW_OBJECTS_AS_LIST);
	String viewListUrl = urlBuilder.getUrl(request, viewListUrlPars);
  
%>

<table class='header-table-portlet-section'>
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBISet.devObjects.titleTree"/>
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=addUrl%>'> 
      			<img title='<spagobi:message key = "SBISet.devObjects.newObjButt" />' 
      			     width='25px' height='25px' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/new.png")%>' 
      			     alt='<spagobi:message key = "SBISet.devObjects.newObjButt" />' />
			</a>
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>			
			<a href='<%=viewListUrl%>'> 
      			<img class='header-button-image-portlet-section' 
      			     title='<spagobi:message key = "SBISet.devObjects.listViewButt" />' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/listView.png")%>' 
      			     alt='<spagobi:message key = "SBISet.devObjects.listViewButt" />' /> 
			</a>
		</td>
		<%
			if(ChannelUtilities.isPortletRunning() && !flgFunc){
		%>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=backUrl%>'> 
      			<img class='header-button-image-portlet-section' 
      			     title='<spagobi:message key = "SBISet.devObjects.backButt" />' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>' 
      			     alt='<spagobi:message key = "SBISet.devObjects.backButt" />' />
			</a>
		</td>
		<%
			}
		%>
	</tr>
</table>


<div class="div_background">
	<spagobi:treeObjects moduleName="TreeObjectsModule"  
	                     htmlGeneratorClass="it.eng.spagobi.analiticalmodel.functionalitytree.presentation.DevTreeHtmlGenerator" />
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</div>	










