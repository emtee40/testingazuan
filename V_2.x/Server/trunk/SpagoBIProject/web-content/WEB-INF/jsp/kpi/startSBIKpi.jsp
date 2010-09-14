<%--
    Copyright 2008 Engineering Ingegneria Informatica S.p.A.

    This file is part of Spago4Q.

    Spago4Q is free software; you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published 
    by the Free Software Foundation; either version 3 of the License, or
    any later version.

    Spago4Q is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
--%>

<%@ taglib uri='http://java.sun.com/portlet' prefix='portlet'%>

<%@ include file="/WEB-INF/jsp/commons/portlet_base311.jsp"%>

<portlet:defineObjects/>

<% String messageBunle = "component_kpi_messages"; %>

<table class='header-table-portlet-section'>
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section-no-buttons'
			style='vertical-align: middle; padding-left: 5px;'>
			<spagobi:message key="sbi.kpi.kpiConfiguration.title" bundle="<%=messageBunle%>"/></td>
	</tr>
</table>


<div class="div_background">
<table>

  <tr class="portlet-font">
    <td width="100" align="center">
      <img src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/kpi.png", currTheme)%>' />
    </td>
    <td width="20">&nbsp;</td>
    <td vAlign="middle">
      <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_KPIS_ACTION"/></portlet:actionURL>'
         class="link_main_menu"> 
        <spagobi:message key="sbi.kpi.kpiDefinition.label" bundle="<%=messageBunle%>"/>
      </a>
    </td>
  </tr>

  <tr class="portlet-font">
    <td width="100" align="center">
      <img src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/thresholds.png", currTheme)%>' />
    </td>
	<td width="20">&nbsp;</td>
	<td vAlign="middle">
	  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_THRESHOLDS_ACTION"/></portlet:actionURL>'
	    class="link_main_menu">
		<spagobi:message key="sbi.kpi.thresholdDefinition.label" bundle="<%=messageBunle%>" />
  	  </a>
    </td>
  </tr>

  <tr class="portlet-font">
		<td width="100" align="center"><img
			src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/model-def.png", currTheme)%>' />
		</td>
		<td width="20">&nbsp;</td>
		<td vAlign="middle">
		  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_MODELS_ACTION"/>
									  </portlet:actionURL>'
			class="link_main_menu">
			<spagobi:message key="sbi.kpi.modelDefinition.label" bundle="<%=messageBunle%>" />
		  </a>
		</td>
	</tr>
	
	  <tr class="portlet-font">
		<td width="100" align="center"><img
			src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/model-inst.png", currTheme)%>' />
		</td>
		<td width="20">&nbsp;</td>
		<td vAlign="middle">
		  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_MODEL_INSTANCES_ACTION"/>
									  </portlet:actionURL>'
			class="link_main_menu">
			<spagobi:message key="sbi.kpi.modelInstanceDefinition.label" bundle="<%=messageBunle%>" />
		  </a>
		</td>
	</tr>
	
	<tr class="portlet-font">
		<td width="100" align="center"><img
			src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/resources.png", currTheme)%>' />
		</td>
		<td width="20">&nbsp;</td>
		<td vAlign="middle">
		  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_RESOURCES_ACTION"/>
									  </portlet:actionURL>'
			class="link_main_menu">
			<spagobi:message key="sbi.kpi.resourcesDefinition.label" bundle="<%=messageBunle%>" />
		  </a>
		</td>
	</tr>
	
	<tr class="portlet-font">
		<td width="100" align="center"><img
			src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/alarm16.png", currTheme)%>' />
		</td>
		<td width="20">&nbsp;</td>
		<td vAlign="middle">
		  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_ALARMS_ACTION"/>
									  </portlet:actionURL>'
			class="link_main_menu">
			<spagobi:message key="Alarms Definition" bundle="<%=messageBunle%>" />
		  </a>
		</td>
	</tr>
	
	<tr class="portlet-font">
		<td width="100" align="center"><img
			src='<%=urlBuilder.getResourceLinkByTheme(request, "/img/kpi/mail_generic16.png", currTheme)%>' />
		</td>
		<td width="20">&nbsp;</td>
		<td vAlign="middle">
		  <a href='<portlet:actionURL><portlet:param name="ACTION_NAME" value="MANAGE_CONTACTS_ACTION"/>
									  </portlet:actionURL>'
			class="link_main_menu">
			<spagobi:message key="Contacts Definition" bundle="<%=messageBunle%>" />
		  </a>
		</td>
	</tr>

</table>

</div>

<%@ include file="/WEB-INF/jsp/commons/footer.jsp"%>
