<%@ include file="/jsp/portlet_base.jsp"%>

<%@ page import="it.eng.spagobi.bo.Engine,
                 javax.portlet.PortletURL,
                 it.eng.spago.navigation.LightNavigationManager" %>

<%
	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("DetailEngineModule"); 
	Engine engine = (Engine)moduleResponse.getAttribute("engineObj");
	String modality = (String)moduleResponse.getAttribute("modality");
 
   	PortletURL formUrl = renderResponse.createActionURL();
   	formUrl.setParameter("PAGE", "detailEnginePage");
   	formUrl.setParameter("MESSAGEDET", modality);
   	formUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
   
   	PortletURL backUrl = renderResponse.createActionURL();
   	backUrl.setParameter("PAGE", "ListEnginesPage");
   	backUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
%>
		
<form method='POST' action='<%= formUrl.toString() %>' id='engineForm' name='engineForm'>
<input type='hidden' value='<%= engine.getId() %>' name='id' />
<LINK rel='StyleSheet' 
      href='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/css/table.css")%>' 
      type='text/css' />
<LINK rel='StyleSheet' 
      href='<%=renderResponse.encodeURL(renderRequest.getContextPath() + "/css/spagobi.css")%>' 
      type='text/css' />




<table class='header-table-portlet-section'>		
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section'>
			<spagobi:message key = "SBISet.eng.titleMenu" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href="javascript:document.getElementById('engineForm').submit()"> 
      			<img class='header-button-image-portlet-section' title='<spagobi:message key = "SBISet.eng.saveButt" />' src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/save.png")%>' alt='<spagobi:message key = "SBISet.eng.saveButt" />' /> 
			</a>
		</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%= backUrl.toString() %>'> 
      			<img class='header-button-image-portlet-section' title='<spagobi:message key = "SBISet.eng.backButt" />' src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/back.png")%>' alt='<spagobi:message key = "SBISet.eng.backButt" />' />
			</a>
		</td>
	</tr>
</table>



<div class='div_background' >


<div class="div_detail_area_forms">
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.LabelField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" name="label" 
	      	   size="50" value="<%=engine.getLabel()%>" maxlength="20">
	    &nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.NameField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   name="name" size="50" value="<%=engine.getName()%>" maxlength="45">
		&nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>	
			<spagobi:message key = "SBISet.eng.descriptionField" />
		</span>
	</div>
	<div class='div_detail_form'>
	<% String desc = engine.getDescription();
	   if((desc==null) || (desc.equalsIgnoreCase("null"))  ) {
	   	   desc = "";
	   } 
	%>
		<input class='portlet-form-input-field' type="text" name="description" 
			   size="50" value="<%= desc %>" maxlength="130">
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.urlField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" name="url" 
			   size="50" value="<%=engine.getUrl()%>" maxlength="260">
        &nbsp;*
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.secondaryUrlField" />
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
	<% String secUrl = engine.getSecondaryUrl();
	   if( (secUrl==null) || (secUrl.equalsIgnoreCase("null")) ) {
	   		secUrl = "";
	   } 
	%>
		<input class='portlet-form-input-field' type="text" name="secondaryUrl" 
                size="50" value="<%=secUrl%>" maxlength="260">
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.dirUploadField" />
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
	<% String dirUpl = engine.getDirUpload();
	   if( (dirUpl==null) || (dirUpl.equalsIgnoreCase("null")) ) {
	   		dirUpl = "";
	   } 
	%>
		<input class='portlet-form-input-field' type="text" name="dirUpload" 
			   size="50" value="<%=dirUpl%>" maxlength="260">
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.dirUsableField" />
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
	<% String dirUse = engine.getDirUsable();
	   if( (dirUse==null) || (dirUse.equalsIgnoreCase("null")) ) {
	   		dirUse = "";
	    } 
	%>
		<input class='portlet-form-input-field' type="text" name="dirUsable" 
			   size="50" value="<%=dirUse%>" maxlength="260">
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.driverNameField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" name="driverName" 
			   size="50" value="<%=engine.getDriverName()%>" maxlength="260">
        &nbsp;*
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.criptableField" />
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
	<% boolean isCrypt = false;
	   int cript = engine.getCriptable().intValue();
	   if(cript > 0) { isCrypt = true; }
	%>
		<input type="radio" name="criptable" value="1" 
               <% if(isCrypt) { out.println(" checked='checked' "); } %> >
               True
        </input>
        <input type="radio" name="criptable" value="0" 
               <% if(!isCrypt) { out.println(" checked='checked' "); } %> >
               False
        </input> 
	</div>
</div>



<spagobi:error/>



</form>

 
</div>


