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

<%@ page import="it.eng.spago.navigation.LightNavigationManager,it.eng.spagobi.tools.importexport.ImportExportConstants,
				java.util.List,
				java.util.Iterator,
				it.eng.spagobi.engines.config.bo.Engine" %>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>

<%  
	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("ImportExportModule"); 
	List curEngines = (List)moduleResponse.getAttribute(ImportExportConstants.LIST_CURRENT_ENGINES);
	List expEngines = (List)moduleResponse.getAttribute(ImportExportConstants.LIST_EXPORTED_ENGINES);
    Iterator iterExpEngines = expEngines.iterator();
  	
    Map backUrlPars = new HashMap();
    backUrlPars.put("PAGE", "ImportExportPage");
    backUrlPars.put("MESSAGEDET", ImportExportConstants.IMPEXP_BACK_ENGINE_ASS);
    backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String backUrl = urlBuilder.getUrl(request, backUrlPars);
    
    Map exitUrlPars = new HashMap();
    exitUrlPars.put("PAGE", "ImportExportPage");
    exitUrlPars.put("MESSAGEDET", ImportExportConstants.IMPEXP_EXIT);
    exitUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String exitUrl = urlBuilder.getUrl(request, exitUrlPars);
   
    Map formUrlPars = new HashMap();
    formUrlPars.put("PAGE", "ImportExportPage");
    formUrlPars.put("MESSAGEDET", ImportExportConstants.IMPEXP_ENGINE_ASSOCIATION);
    formUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String formUrl = urlBuilder.getUrl(request, formUrlPars);
    
%>

<script>

	var infopanelopen = false;
	var winInfo = null;
	
	function opencloseInfoPanel() {
		if(!infopanelopen){
			infopanelopen = true;
		 	openInfo();
		 }
	}
	
	function openInfo(){
		if(winInfo==null) {
		 	winInfo = new Window('winInfo', {className: "alphacube", title:"<spagobi:message key="help"  bundle="messages"/>", width:680, height:150, destroyOnClose: false});
		 	winInfo.setContent('infodiv', false, false);
		 	winInfo.showCenter(true);
		 } else {
			winInfo.showCenter(true);
		 }
	}
	
	observerWInfo = { onClose: function(eventName, win) {
			if (win == winInfo) {
			 	infopanelopen = false;
			 }
		}
	}
	
	Windows.addObserver(observerWInfo);

</script>



<div id='infodiv' style='display:none;'>
	<ul style="color:#074B88;">
			<li><spagobi:message key = "SBISet.impexp.enginerule1"  bundle="component_impexp_messages"/></li>
	</ul>
</div>	



<form method='POST' action='<%=formUrl%>' id='engineAssForm' name='engineAssForm'>

	<table class='header-table-portlet-section'>
		<tr class='header-row-portlet-section'>
			<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
				<spagobi:message key = "SBISet.engineAssociation"  bundle="component_impexp_messages"/>
			</td>
			<td class='header-empty-column-portlet-section'>&nbsp;</td>
			<td class='header-button-column-portlet-section'>
				<a href='javascript:opencloseInfoPanel()'> 
		    		<img class='header-button-image-portlet-section' 
		    			 title='<spagobi:message key="help"  bundle="messages"/>' 
		    			 src='<%=urlBuilder.getResourceLink(request, "/img/info22.jpg")%>' 
		    			 alt='<spagobi:message key="help"  bundle="messages"/>' />
				</a>
			</td>		
			<td class='header-empty-column-portlet-section'>&nbsp;</td>
			<td class='header-button-column-portlet-section'>
				<a href='javascript:document.getElementById("engineAssForm").submit()'> 
		    		<img class='header-button-image-portlet-section' 
		    			 title='<spagobi:message key="Sbi.next"  bundle="component_impexp_messages"/>' 
		    			 src='<%=urlBuilder.getResourceLink(request, "/img/tools/importexport/next.gif")%>' 
		    			 alt='<spagobi:message key="Sbi.next"  bundle="component_impexp_messages"/>' />
				</a>
			</td>
			<td class='header-empty-column-portlet-section'>&nbsp;</td>
			<td class='header-button-column-portlet-section'>
				<a href='<%=backUrl%>'> 
	      			<img class='header-button-image-portlet-section' 
	      				 title='<spagobi:message key = "Sbi.back"  bundle="component_impexp_messages"/>' 
	      				 src='<%=urlBuilder.getResourceLink(request, "/img/tools/importexport/back.png")%>' 
	      				 alt='<spagobi:message key = "Sbi.back"  bundle="component_impexp_messages"/>' />
				</a>
			</td>
			<td class='header-empty-column-portlet-section'>&nbsp;</td>
			<td class='header-button-column-portlet-section'>
				<a href='<%=exitUrl%>'> 
	      			<img class='header-button-image-portlet-section' 
	      				 title='<spagobi:message key = "Sbi.exit"  bundle="component_impexp_messages"/>' 
	      				 src='<%=urlBuilder.getResourceLink(request, "/img/tools/importexport/stop.gif")%>' 
	      				 alt='<spagobi:message key = "Sbi.exit"  bundle="component_impexp_messages"/>' />
				</a>
			</td>
		</tr>
	</table>



	<div class="div_background_no_img">
		<div class="box padding5" >
			<table>
				<tr>
					<td class='portlet-section-header'><spagobi:message key = "SBISet.impexp.exportedEngines"  bundle="component_impexp_messages"/></td>
					<td class='portlet-section-header'><spagobi:message key = "SBISet.impexp.currentEngines"  bundle="component_impexp_messages"/></td>
				</tr>
				<tr>
					<td colspan="2">&nbsp;</td>
				</tr>
				<%if(expEngines.isEmpty()) { %>
				<tr>
					<td colspan="2" style="color:#074B88;"><spagobi:message key="SBISet.impexp.noEngineExported" bundle="component_impexp_messages"/></td>
				</tr>
				<% } %>
			    <%
			    while(iterExpEngines.hasNext()) {
			    	Engine engine = (Engine)iterExpEngines.next();
			    %>
				<tr>
					<td class="portlet-font">
						<span class='portlet-form-field-label'><%=engine.getName()%></span>
						<br/>
						<%
						    String description = engine.getDescription();
						    if( (description!=null) && (description.length() > 50) ) {
						    	description = description.substring(0, 50);
						        description += "...";  
						    }
						%>
						<span title="<%=engine.getDescription()%>" alt="<%=engine.getDescription()%>"><%=description%></span><br/>
						<%
							String url = engine.getUrl();
							if (url != null && !url.trim().equals("")) {
							    if( url.length() > 50) {
							    	url = url.substring(0, 50);
							        url += "...";
							    }
							    String driverName = engine.getDriverName();
							    if( (driverName!=null) && (driverName.length() > 50) ) {
							    	driverName = driverName.substring(0, 50);
							        driverName += "...";   
							    }
								%>
								<span title="<%=engine.getUrl()%>" alt="<%=engine.getUrl()%>"><%=url%></span><br/>
								<span title="<%=engine.getDriverName()%>" alt="<%=engine.getDriverName()%>"><%=driverName%></span><br/>
								<%
							} else {
							    String className = engine.getClassName();
							    if( (className!=null) && (className.length() > 50) ) {
							    	className = className.substring(0, 50);
							    	className += "...";   
							    }
								%>
								<span title="<%=engine.getClassName()%>" alt="<%=engine.getClassName()%>"><%=className%></span><br/>
								<%
							}
						%>
					</td>
					<td>
					    <input type="hidden" name="expEngine" value="<%=engine.getId()%>" />
						<select style="width:250px;margin-top:5px;" name="engineAssociated<%=engine.getId()%>" >
							<option value="">
								<spagobi:message key="Sbi.selectcombo" bundle="component_impexp_messages"/>
							</option>
							<% 
								Iterator iterCurEngines = curEngines.iterator();
								while(iterCurEngines.hasNext()) {
									Engine engineCur = (Engine)iterCurEngines.next();
							%>
							<option value='<%=engineCur.getId()%>' ><%=engineCur.getName()%></option>
							<% } %>
						</select>
					</td>
				</tr>
				<% } %>
			</table>
		</div>
	</div>
</form>
	
	
	
	

	
