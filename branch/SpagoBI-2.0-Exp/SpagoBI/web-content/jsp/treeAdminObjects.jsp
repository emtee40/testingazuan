<%@ include file="/jsp/portlet_base.jsp"%>

<%@ page import="javax.portlet.PortletURL,
                 it.eng.spagobi.constants.SpagoBIConstants,
                 it.eng.spago.navigation.LightNavigationManager" %>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="it.eng.spagobi.services.modules.BIObjectsModule"%>
<%@ page import="it.eng.spagobi.utilities.ChannelUtilities"%>
<%@ page import="it.eng.spagobi.services.modules.DetailBIObjectModule"%>
<%@ page import="it.eng.spagobi.constants.ObjectsTreeConstants"%>

<% 
	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("TreeObjectsModule"); 
    
	Map backUrlPars = new HashMap();
	backUrlPars.put("ACTION_NAME", "START_ACTION");
	backUrlPars.put("PUBLISHER_NAME", "LoginSBIAdministrationContextPublisher");
	backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_RESET, "true");
	String backUrl = urlBuilder.getUrl(request, backUrlPars);

	Map viewListUrlPars = new HashMap();
	viewListUrlPars.put("PAGE", BIObjectsModule.MODULE_PAGE);
	viewListUrlPars.put(SpagoBIConstants.ACTOR, SpagoBIConstants.ADMIN_ACTOR);
	viewListUrlPars.put(SpagoBIConstants.OBJECTS_VIEW, SpagoBIConstants.VIEW_OBJECTS_AS_LIST);
	String viewListUrl = urlBuilder.getUrl(request, viewListUrlPars);

%>

<table class='header-table-portlet-section'>
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBISet.objects.titleTree" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=viewListUrl%>'> 
      			<img class='header-button-image-portlet-section' 
      			     title='<spagobi:message key = "SBISet.objects.listViewButt" />' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/listView.png")%>' 
      			     alt='<spagobi:message key = "SBISet.objects.listViewButt" />' /> 
			</a>		
		</td>
		<%
			if(ChannelUtilities.isWebRunning()){
				Map addUrlPars = new HashMap();
				addUrlPars.put("PAGE", DetailBIObjectModule.MODULE_PAGE);
				addUrlPars.put(ObjectsTreeConstants.MESSAGE_DETAIL, ObjectsTreeConstants.DETAIL_NEW);
				addUrlPars.put(SpagoBIConstants.ACTOR, SpagoBIConstants.ADMIN_ACTOR);
				String addUrl = urlBuilder.getUrl(request, addUrlPars);
		%>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=addUrl%>'> 
      			<img title='<spagobi:message key = "SBISet.devObjects.newObjButt" />' width='25px' height='25px' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/new.png")%>' 
      			     alt='<spagobi:message key = "SBISet.devObjects.newObjButt" />' />
			</a>
		</td>		
		<%		
			}
		%>
		<%
			if(ChannelUtilities.isPortletRunning()){
		%>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=backUrl%>'> 
      			<img class='header-button-image-portlet-section' 
      			     title='<spagobi:message key = "SBISet.objects.backButt" />' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>' 
      			     alt='<spagobi:message key = "SBISet.objects.backButt" />' />
			</a>
		</td>
		<%
			}
		%>
	</tr>
</table>



<div class="div_background">
	<spagobi:treeObjects moduleName="TreeObjectsModule"  
	                     htmlGeneratorClass="it.eng.spagobi.presentation.treehtmlgenerators.AdminTreeHtmlGenerator" />
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</div>	












