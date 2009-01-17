<%--
SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
--%>

<%@ include file="/WEB-INF/jsp/commons/portlet_base.jsp"%>
<%@ page import="java.util.Map,java.util.HashMap"%>
<%@page import="java.util.List"%>

<%

String title = "";

ConfigSingleton configure = ConfigSingleton.getInstance();
SourceBean moduleBean = (SourceBean) configure
		.getFilteredSourceBeanAttribute("MODULES.MODULE", "NAME",
				"ListModelInstanceTreeModule");

if (moduleBean.getAttribute("CONFIG.TITLE") != null)
	title = (String) moduleBean.getAttribute("CONFIG.TITLE");

  Map backUrlPars = new HashMap();
  backUrlPars.put("PAGE", "ModelInstancePage");
  String backUrl = urlBuilder.getUrl(request, backUrlPars);
  String messageBundle = "component_kpi_messages";
%>
<table class='header-table-portlet-section'>
  <tr class='header-row-portlet-section'>
    <td class='header-title-column-portlet-section'
      style='vertical-align: middle; padding-left: 5px;'>
      <spagobi:message key='<%=title%>' bundle='<%=messageBundle%>' />
      </td>
    <td class='header-empty-column-portlet-section'>&nbsp;</td>
    <td class='header-button-column-portlet-section'><a
      href='<%=backUrl%>'> <img
      class='header-button-image-portlet-section'
      title='<spagobi:message key="sbi.kpi.button.back.title" bundle="<%=messageBundle%>" />'
      src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>'
      alt='<spagobi:message key = "sbi.kpi.button.back.title" bundle="<%=messageBundle%>" />' /> </a></td>
  </tr>
</table>

	<spagobi:treeObjects moduleName="ListModelInstanceTreeModule"
		htmlGeneratorClass="it.eng.spagobi.kpi.model.presentation.ModelInstanceStructureTreeHtmlGenerator" />
  		
<spagobi:error />

<%@ include file="/WEB-INF/jsp/commons/footer.jsp"%>