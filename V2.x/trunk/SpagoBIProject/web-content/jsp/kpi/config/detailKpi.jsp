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

<%@ include file="/jsp/commons/portlet_base.jsp"%>

<%@ page import="java.util.Map,java.util.HashMap"%>
<%@page	import="it.eng.spago.dispatching.service.detail.impl.DelegatedDetailService"%>
<%
	String title = "";
	String id = "";
	String name = "";
	String documentLabel = "";
	String code = "";
	String metric = "";
	String description = "";
	String weight = "";
	Integer ds_id = null;

    String messageBunle = "component_kpi_messages"; 

    ConfigSingleton configure = ConfigSingleton.getInstance();
	SourceBean moduleBean = (SourceBean) configure
			.getFilteredSourceBeanAttribute("MODULES.MODULE", "NAME",
					"DetailKpiModule");
	
	SourceBean kpi = (SourceBean) aServiceResponse.getAttribute("DetailKpiModule");

	String message = DelegatedDetailService.DETAIL_INSERT;

	if (moduleBean.getAttribute("CONFIG.TITLE") != null)
		title = (String) moduleBean.getAttribute("CONFIG.TITLE");
	
	if (kpi != null){
		if (kpi.getAttribute("ROW.ID") != null)
			id = String.valueOf(kpi.getAttribute("ROW.ID"));
		if (kpi.getAttribute("ROW.NAME") != null)
			name = (String) kpi.getAttribute("ROW.NAME");
		if (kpi.getAttribute("ROW.DOCUMENT_LABEL") != null)
			documentLabel = (String) kpi.getAttribute("ROW.DOCUMENT_LABEL");
		if (kpi.getAttribute("ROW.CODE") != null)
			code = (String) kpi.getAttribute("ROW.CODE");
		if (kpi.getAttribute("ROW.METRIC") != null)
			metric = (String) kpi.getAttribute("ROW.METRIC");
		if (kpi.getAttribute("ROW.DESCRIPTION") != null)
			description = (String) kpi.getAttribute("ROW.DESCRIPTION");
		if (kpi.getAttribute("ROW.WEIGHT") != null)
			weight = String.valueOf(kpi.getAttribute("ROW.WEIGHT"));
		if (kpi.getAttribute("ROW.DS_ID") != null)
			ds_id = (Integer)kpi.getAttribute("ROW.DS_ID");
	
		if (kpi.getAttribute(DelegatedDetailService.SERVICE_MODE) != null
			&& ((String) kpi
					.getAttribute(DelegatedDetailService.SERVICE_MODE))
					.equalsIgnoreCase(DelegatedDetailService.SERVICE_MODE_UPDATE)) {
			message = DelegatedDetailService.DETAIL_UPDATE;
		}
	}
	
	if (kpi == null){
		if (aServiceRequest.getAttribute("ID") != null)
			id = String.valueOf(aServiceRequest.getAttribute("ID"));
		if (aServiceRequest.getAttribute("NAME") != null)
			name = (String) aServiceRequest.getAttribute("NAME");
		if (aServiceRequest.getAttribute("DOCUMENT_LABEL") != null)
			documentLabel = (String) aServiceRequest.getAttribute("DOCUMENT_LABEL");
		if (aServiceRequest.getAttribute("CODE") != null)
			code = (String) aServiceRequest.getAttribute("CODE");
		if (aServiceRequest.getAttribute("METRIC") != null)
			metric = (String) aServiceRequest.getAttribute("METRIC");
		if (aServiceRequest.getAttribute("DESCRIPTION") != null)
			description = (String) aServiceRequest.getAttribute("DESCRIPTION");
		if (aServiceRequest.getAttribute("WEIGHT") != null)
			weight = String.valueOf(aServiceRequest.getAttribute("WEIGHT"));
		if (aServiceRequest.getAttribute("DS_ID") != null)
			ds_id = Integer.valueOf((String)aServiceRequest.getAttribute("DS_ID"));
	}
	
	Map formUrlPars = new HashMap();
	if(ChannelUtilities.isPortletRunning()) {
		formUrlPars.put("PAGE", "KpiPage");
		formUrlPars.put("MODULE", "DetailKpiModule");
		formUrlPars.put("MESSAGE", message);
		formUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	}
	
	String formUrl = urlBuilder.getUrl(request, formUrlPars);

	Map backUrlPars = new HashMap();
	backUrlPars.put("PAGE", "KpiPage");
	backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
	String backUrl = urlBuilder.getUrl(request, backUrlPars);
%>

<%@page import="it.eng.spago.navigation.LightNavigationManager"%>

<%@page import="java.util.List"%>
<%@page import="it.eng.spagobi.commons.dao.DAOFactory"%>
<%@page import="it.eng.spagobi.analiticalmodel.document.bo.BIObject"%>
<%@page import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
<%@page import="it.eng.spagobi.tools.dataset.bo.DataSetConfig"%>

<table class='header-table-portlet-section'>
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section'
			style='vertical-align: middle; padding-left: 5px;'>
			<spagobi:message key="<%=title%>" bundle="<%=messageBunle%>" /></td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'><a
			href="javascript:document.getElementById('kpiForm').submit()"> <img
			class='header-button-image-portlet-section'
			title='<spagobi:message key = "sbi.kpi.button.save.title" bundle="<%=messageBunle%>" />'
			src='<%=urlBuilder.getResourceLink(request, "/img/save.png")%>'
			alt='<spagobi:message key = "sbi.kpi.button.save.title" bundle="<%=messageBunle%>" />' /> </a></td>
		<td class='header-button-column-portlet-section'><a
			href='<%=backUrl%>'> <img
			class='header-button-image-portlet-section'
			title='<spagobi:message key = "sbi.kpi.button.back.title" bundle="<%=messageBunle%>"/>'
			src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>'
			alt='<spagobi:message key = "sbi.kpi.button.back.title" bundle="<%=messageBunle%>"/>' /> </a></td>
	</tr>
</table>

<form method='POST' action='<%=formUrl%>' id='kpiForm' name='kpiForm'>
<input type='hidden' value='<%=id%>' name='id' />

<div class="div_detail_area_forms">
<div class='div_detail_label'><span
	class='portlet-form-field-label'> <spagobi:message
	key="sbi.kpi.label.name" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'><input
	class='portlet-form-input-field' type="text" name="name" size="50"
	value="<%=name%>" maxlength="200"> &nbsp;*</div>


<div class='div_detail_label'><span
	class='portlet-form-field-label'> <spagobi:message
	key="sbi.kpi.label.description" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'>
<input
  class='portlet-form-input-field' type="text" name="description" size="50"
  value="<%=description%>" maxlength="200"></div>


<div class='div_detail_label'><span
  class='portlet-form-field-label'> <spagobi:message
  key="sbi.kpi.label.code" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'><input
  class='portlet-form-input-field' type="text" name="code" size="50"
  value="<%=code%>" maxlength="200"></div>


<div class='div_detail_label'><span
  class='portlet-form-field-label'> <spagobi:message
  key="sbi.kpi.label.metric" bundle="<%=messageBunle%>"/> </span></div>
<div style='height: 150px;' class='div_detail_form'><textarea
  style='height: 110px;' class='portlet-text-area-field' name='metric'
  cols='40'>
<%=metric%></textarea></div>


<div class='div_detail_label'><span
  class='portlet-form-field-label'> <spagobi:message
  key="sbi.kpi.label.weight" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'><input
  class='portlet-form-input-field' type="text" name="weight" size="50"
  value="<%=weight%>" maxlength="200"></div>


<div class='div_detail_label'><span
	class='portlet-form-field-label'> <spagobi:message
	key="sbi.kpi.label.documentLabel" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'>
<select class='portlet-form-field' name="document_label" >
<%
	List sbiDocs = DAOFactory.getBIObjectDAO().loadAllBIObjects();
	Iterator sbiDocsIt = sbiDocs.iterator();
	while (sbiDocsIt.hasNext()){
		BIObject bio = (BIObject)sbiDocsIt.next();
		String selected = "";
		if (documentLabel.equalsIgnoreCase(bio.getLabel())) {
			selected = "selected='selected'";										
		}	
		%>    			 		
		<option value="<%= bio.getLabel() %>" label="<%= bio.getLabel() %>" <%= selected %>>
			<%= bio.getLabel() %>	
		</option>
		<%
	}
%>
</select>
</div>


<div class='div_detail_label'><span
	class='portlet-form-field-label'> <spagobi:message
	key="sbi.kpi.label.dataSet" bundle="<%=messageBunle%>"/> </span></div>
<div class='div_detail_form'>
<select class='portlet-form-field' name="ds_id" >

<%
	List dataSets = DAOFactory.getDataSetDAO().loadAllDataSets();
	Iterator dataSetsIt = dataSets.iterator();
	while (dataSetsIt.hasNext()){
		DataSetConfig dataSet = (DataSetConfig)dataSetsIt.next();
		String selected = "";
		if (ds_id != null && ds_id.intValue() == dataSet.getDsId()) {
			selected = "selected='selected'";
		}
		%>    			 		
		<option value="<%= dataSet.getDsId() %>" label="<%= dataSet.getLabel() %>" <%= selected %>>
			<%= dataSet.getLabel() %>	
		</option>
		<%
	}
%>

</select>
</div>

</form>

<spagobi:error/>

<%@ include file="/jsp/commons/footer.jsp"%>