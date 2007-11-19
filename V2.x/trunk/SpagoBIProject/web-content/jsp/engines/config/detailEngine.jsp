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

<%@ page import="it.eng.spagobi.engines.config.bo.Engine,
                 it.eng.spagobi.commons.dao.DAOFactory,
                 it.eng.spagobi.commons.bo.Domain,
                 it.eng.spagobi.tools.datasource.bo.DataSource,
                 it.eng.spago.navigation.LightNavigationManager,
                 java.util.Map,
                 java.util.HashMap" %>

<%
	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("DetailEngineModule"); 
	Engine engine = (Engine)moduleResponse.getAttribute("engineObj");
	String modality = (String)moduleResponse.getAttribute("modality");
 
	Map formUrlPars = new HashMap();
	formUrlPars.put("PAGE", "detailEnginePage");
	formUrlPars.put("MESSAGEDET", modality);
	formUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String formUrl = urlBuilder.getUrl(request, formUrlPars);
	
    Map backUrlPars = new HashMap();
    backUrlPars.put("PAGE", "ListEnginesPage");
    backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
    String backUrl = urlBuilder.getUrl(request, backUrlPars);

%>
		

<form method='POST' action='<%=formUrl%>' id='engineForm' name='engineForm'>
<input type='hidden' value='<%=engine.getId()%>' name='id' />



<table class='header-table-portlet-section'>		
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' 
		    style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBISet.eng.titleMenu" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href="javascript:document.getElementById('engineForm').submit()"> 
      			<img class='header-button-image-portlet-section' title='<spagobi:message key = "SBISet.eng.saveButt" />' src='<%=urlBuilder.getResourceLink(request, "/img/save.png")%>' alt='<spagobi:message key = "SBISet.eng.saveButt" />' /> 
			</a>
		</td>
		<td class='header-button-column-portlet-section'>
			<a href='<%=backUrl%>'> 
      			<img class='header-button-image-portlet-section' title='<spagobi:message key = "SBISet.eng.backButt" />' src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>' alt='<spagobi:message key = "SBISet.eng.backButt" />' />
			</a>
		</td>
	</tr>
</table>



<div class='div_background' style='padding-top:5px;padding-left:5px;'>


<div class="div_detail_area_forms" >
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
			<spagobi:message key = "SBISet.eng.biobjTypeField" />
		</span>
	</div>	
	<div class='div_detail_form'>
		<select class='portlet-form-field' name="biobjTypeId" >
			<%
			java.util.List biobjTypes = DAOFactory.getDomainDAO().loadListDomainsByType("BIOBJ_TYPE");
			java.util.Iterator it = biobjTypes.iterator();
			while (it.hasNext()) {
				Domain domain = (Domain) it.next();
				String valueId = String.valueOf(domain.getValueId());
				String actualValueId = engine.getBiobjTypeId().toString();
			 	%>     
    				<option value="<%= valueId  %>" <% if (valueId.equalsIgnoreCase(actualValueId)) out.print(" selected='selected' ");%>>
    					<%=domain.getValueName()%>
    				</option>
    				<%
			}
			%>
		</select>
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.engineTypeField" />
		</span>
	</div>	
	<div class='div_detail_form'>
		<select class='portlet-form-field' name="engineTypeId" onchange= "changeEngineType(this.options[this.selectedIndex].label)" id="engineType">
			<%
			java.util.List engineTypes = DAOFactory.getDomainDAO().loadListDomainsByType("ENGINE_TYPE");
			java.util.Iterator engineTypesIt = engineTypes.iterator();
			String engineType = "EXT"; // default value
			while (engineTypesIt.hasNext()) {
				Domain domain = (Domain) engineTypesIt.next();
				String valueId = String.valueOf(domain.getValueId());
				String actualValueId = engine.getEngineTypeId().toString();
				String selected = "";
				if (valueId.equalsIgnoreCase(actualValueId)) {
					selected = "selected='selected'";
					engineType = domain.getValueCd();
				}
			 	%>     
    				<option value="<%= valueId  %>" label="<%= domain.getValueCd() %>" <%= selected %>>
    					<%
					if ("EXT".equalsIgnoreCase(domain.getValueCd())) {
						%> <spagobi:message key = "SBISet.eng.externalEngine" /> <%
					} else {
						%> <spagobi:message key = "SBISet.eng.internalEngine" /> <%
					}
					%>
    				</option>
    				<%
			}
			%>
		</select>
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBISet.eng.dataSource" />
		</span>
	</div>	
	<div class='div_detail_form'>
		<select class='portlet-form-field' name="engineDefaultDS" onchange= "changeEngineType(this.options[this.selectedIndex].label)" id="engineType">			
			<%
			java.util.List engineDS = DAOFactory.getDataSourceDAO().loadAllDataSources();
			java.util.Iterator engineDSIt = engineDS.iterator();
			while (engineDSIt.hasNext()) {
				DataSource ds = (DataSource) engineDSIt.next();
				String dsId = String.valueOf(ds.getDsId());
				String actualDsId = (engine.getDataSourceId()==null)?"":engine.getDataSourceId().toString();
				String selected = "";
				if (dsId.equalsIgnoreCase(actualDsId)) {
					selected = "selected='selected'";										
				}				
			 	%>    			 		
    				<option value="<%= dsId  %>" label="<%= ds.getLabel() %>" <%= selected %>>
    					<%= ds.getLabel() %>	
    				</option>
    				<%				
			}
			%>
		</select>
	</div>
	
	<div id="className" style='display:<%= ("INT".equalsIgnoreCase(engineType)) ? "inline;" : "none;" %>'>
		<div class='div_detail_label'>
			<span class='portlet-form-field-label'>
				<spagobi:message key = "SBISet.eng.classNameField" />
			</span>
		</div>
		<% 
		String engineClassName = engine.getClassName();
	   	if ((engineClassName == null) || (engineClassName.equalsIgnoreCase("null"))  ) {
	   		engineClassName = "";
	   	} 
		%>
		<div class='div_detail_form'>
			<input class='portlet-form-input-field' type="text" name="className"  
			   	size="50" value="<%=engineClassName%>" maxlength="260">
			&nbsp;*			   
		</div>
	</div>
	<div id="url" style='display:<%= ("EXT".equalsIgnoreCase(engineType)) ? "inline;" : "none;" %>'>
		<div class='div_detail_label'>
			<span class='portlet-form-field-label'>
				<spagobi:message key = "SBISet.eng.urlField" />
			</span>
		</div>
		<% 
		String engineUrl = engine.getUrl();
	   	if ((engineUrl == null) || (engineUrl.equalsIgnoreCase("null"))  ) {
	   		engineUrl = "";
	   	} 
		%>
		<div class='div_detail_form'>
			<input class='portlet-form-input-field' type="text" name="url"  
			   	size="50" value="<%=engineUrl%>" maxlength="260">
			&nbsp;*
		</div>
	</div>
	<div id="driverName" style='display:<%= ("EXT".equalsIgnoreCase(engineType)) ? "inline;" : "none;" %>'>
		<div class='div_detail_label'>
			<span class='portlet-form-field-label'>
				<spagobi:message key = "SBISet.eng.driverNameField" />
			</span>
		</div>
		<% 
		String engineDriver = engine.getDriverName();
	   	if ((engineDriver == null) || (engineDriver.equalsIgnoreCase("null"))  ) {
	   		engineDriver = "";
	   	} 
		%>
		<div class='div_detail_form'>
			<input class='portlet-form-input-field' type="text" name="driverName"
					size="50" value="<%=engineDriver%>" maxlength="260">
			&nbsp;*				
		</div>
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


</div>


</form>

<script>

function changeEngineType(value){
	if (value == 'EXT') {
		document.getElementById('url').style.display = 'inline';
		document.getElementById('driverName').style.display = 'inline';
		document.getElementById('className').style.display = 'none';		
	}
	if (value == 'INT') {
		document.getElementById('url').style.display = 'none';
		document.getElementById('driverName').style.display = 'none';
		document.getElementById('className').style.display = 'inline';		
	}
}

</script>
 
<%@ include file="/jsp/commons/footer.jsp"%>


