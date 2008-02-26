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

<%@ page language="java"
         contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"
         import="it.eng.spagobi.commons.constants.SpagoBIConstants,
         		 it.eng.spago.configuration.ConfigSingleton,
                 it.eng.spago.base.SourceBean,
                 javax.portlet.PortletURL,
                 it.eng.spago.navigation.LightNavigationManager" %>
<%@page import="it.eng.spago.base.RequestContainer"%>
<%@page import="it.eng.spago.base.SessionContainer"%>
<%@page import="it.eng.spago.security.IEngUserProfile"%>
<%@page import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
<%@page import="it.eng.spago.security.IEngUserProfile"%>

<%@ taglib uri='http://java.sun.com/portlet' prefix='portlet'%>

<%@ include file="/jsp/commons/portlet_base.jsp"%>


<portlet:defineObjects/>

<%
	PortletURL scheduleUrl = renderResponse.createActionURL();
	scheduleUrl.setParameter("PAGE", "JobManagementPage");
	scheduleUrl.setParameter(SpagoBIConstants.MESSAGEDET, SpagoBIConstants.MESSAGE_GET_ALL_JOBS);
	
	//get the user profile from session
	SessionContainer permSession = aSessionContainer.getPermanentContainer();
	IEngUserProfile userProfile = (IEngUserProfile)permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
%>

<!-- 	
<table class='header-table-portlet-section'>
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section-no-buttons' 
		    style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBIAdmin.titleMenu" />
		</td>
	</tr>
</table>
 --> 


<div class="div_background">
    <br/>	
	<table>
		<% if (userProfile.isAbleToExecuteAction(SpagoBIConstants.IMPORT_EXPORT_MANAGEMENT)) {%>
			<tr class="portlet-font" vAlign="middle">
				<td width="100" align="center">
					<img src='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/img/tools/importexport/importexport64.png")%>' />
				</td>
				<td width="20">
					&nbsp;
				</td>
				<td vAlign="middle">
				    <br/> 
					<a href='<portlet:actionURL>
									<portlet:param name="PAGE" value="BIObjectsPage"/>
									<portlet:param name="OPERATION" value="<%=SpagoBIConstants.IMPORTEXPORT_OPERATION %>"/>
									<portlet:param name="OBJECTS_VIEW" value="<%=SpagoBIConstants.VIEW_OBJECTS_AS_TREE%>"/>
							</portlet:actionURL>' 
						class="link_main_menu" >
						<spagobi:message key = "SBISet.importexport" />
					</a>
				</td>
			</tr>
		<%} %>
		<% if (userProfile.isAbleToExecuteAction(SpagoBIConstants.SCHEDULER_MANAGEMENT)) {%>
			<tr class="portlet-font" vAlign="middle">
				<td width="100" align="center">
					<img src='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/img/tools/scheduler/scheduleIcon64_blu.png")%>' />
				</td>
				<td width="20">
					&nbsp;
				</td>
				<td vAlign="middle">
				    <br/> 
					<a href='<%=scheduleUrl.toString()%>' 
						class="link_main_menu" >
						<spagobi:message key = "scheduler.Schedule" />
					</a>
				</td>
			</tr>
		<%} %>
		<% if (userProfile.isAbleToExecuteAction(SpagoBIConstants.SYNCRONIZE_ROLES_MANAGEMENT)) {%>
			<tr class="portlet-font" vAlign="middle">
				<td width="100" align="center">
					<img src='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/img/rolesynch64.jpg")%>' />
				</td>
				<td width="20">
					&nbsp;
				</td>
				<td vAlign="middle">
				    <br/> 
					<a href='<portlet:actionURL><portlet:param name="PAGE" value="ListRolesPage"/></portlet:actionURL>' 
						class="link_main_menu" >
						<spagobi:message key = "SBISet.linkRolesSynch" />
					</a>
				</td>
			</tr>
		<%} %>
	</table>
	<br/>
</div>
            <iframe id='iframeLogin'
                    name='iframeLogin'
                    src='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/servlet/AdapterHTTP?ACTION_NAME=HIDDEN_LOGIN&userId=biadmin&NEW_SESSION=TRUE")%>'
                    frameborder='0' >
			</iframe>

