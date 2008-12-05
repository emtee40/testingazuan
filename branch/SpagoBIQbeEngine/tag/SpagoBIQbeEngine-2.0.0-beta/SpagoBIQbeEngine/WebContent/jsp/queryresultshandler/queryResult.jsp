<%-- 

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

--%>

<%@ page contentType="text/html; charset=ISO-8859-1"%>
<%@ page language="java" %>

<%@ page import="it.eng.qbe.javascript.*"%>
<%@ page import="it.eng.qbe.urlgenerator.*"%>
<%@ page import="it.eng.qbe.export.*"%>
<%@ page import="javax.portlet.PortletRequest"%>







<%@ include file="/jsp/qbe_base.jsp" %>

<%!
public static String getReportServletContextAddress(){
	
	String path = null;
	if ( QbeEngineConf.getInstance().isWebModalityActive() ){
		path = "..";
	}else{
		PortletRequest portletRequest = it.eng.spago.util.PortletUtilities.getPortletRequest();
		Logger.debug(Utils.class, 
				"getReportServletContextAddress portlet request obtained: " + portletRequest);
		path ="http://"+portletRequest.getServerName()+ ":"+portletRequest.getServerPort() + portletRequest.getContextPath(); 
		Logger.debug(Utils.class, 
				"getReportServletContextAddress using context path: " + path);
	}
	
	return path;
}
%>

<% 
  
	String paddingStyle = "padding-left:4px;padding-right:4px";

   	String datamartNamesStr = "";
   	List datamartNames = datamartModel.getDataSource().getDatamartNames();
   	for(int i = 0; i < datamartNames.size(); i++) {
   		datamartNamesStr += (i==0?"":",") + (String)datamartNames.get(i);
   	}

     
   	String msg =  (String)aServiceResponse.getAttribute("ERROR_MSG");
   	boolean flagErrors = false;
   	List aList = null;
   	String className = null;
	
	String queryStr = null;
	int currentPage = -1;
	Integer pagesNumber = null;
	boolean hasPreviousPage = false;
	boolean hasNextPage = false;
	boolean overflow = false;
   
	SourceBean listResponse = null;
   	if (msg != null){
	   flagErrors = true;
   	}else{
	   listResponse = (SourceBean)sessionContainer.getAttribute("QUERY_RESPONSE_SOURCE_BEAN");
	   aList = (java.util.List)listResponse.getAttribute("list");
	   className = (String) listResponse.getAttribute("className");
	   queryStr =(String) listResponse.getAttribute("query");
	   currentPage = ((Integer)listResponse.getAttribute("currentPage")).intValue();
	   pagesNumber = (Integer)listResponse.getAttribute("pagesNumber");
	   hasPreviousPage = ((Boolean)listResponse.getAttribute("hasPreviousPage")).booleanValue();
	   hasNextPage = ((Boolean)listResponse.getAttribute("hasNextPage")).booleanValue();
	   Boolean b = (Boolean)listResponse.getAttribute("overflow");
	   overflow = (b == null)? false: b.booleanValue();
   	}
   	String qbeQuery = null;
	String qbeSqlQuery = null;
	String expertQuery = null;
   	try{
  		 qbeQuery = datamartWizard.getFinalQuery();
  		 qbeSqlQuery = datamartWizard.getFinalSqlQuery(datamartModel);
  		 expertQuery = datamartWizard.getExpertQueryDisplayed();
   	}catch(Throwable t){
   		t.printStackTrace();
   		qbeQuery = null;
   	}
	String finalQueryString = null;
	String queryLang = null;
	if (datamartWizard.isUseExpertedVersion()){
		finalQueryString = expertQuery;
		queryLang = "sql";
	}else{
		finalQueryString = qbeQuery;
		queryLang = "hql";
	} 
	
  	String exportFormUrl = getReportServletContextAddress() + "/ReportServlet";
  	
  
	List calculateFields = new ArrayList();
	Iterator it = query.getCalculatedFieldsIterator();
	while(it.hasNext()) {
		calculateFields.add(it.next());
	}
	
	calculateFields.addAll(datamartModel.getFormula().getCalculatedFields(datamartWizard.getQuery().getEntityClassesIterator()));
	
  	try{
		for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
  			((CalculatedField)itCalcFields.next()).calculateMappings(datamartWizard.getQuery());
  		}
  	}catch(Throwable t){
  		t.printStackTrace();
  	}
  	
  	GroovyScriptEngine gse = GroovyEngine.getGroovyEngine().getGroovyScriptEngine();
  	Binding binding = new Binding();
  	binding.setVariable("qbe_mode", "exec");
  	String calcFldHdr = null;
  	
  	String enableScript = (String)ConfigSingleton.getInstance().getAttribute("QBE.QBE-ENABLE-SCRIPT.enablescript");
  	String calculateFieldPosition = (String)ConfigSingleton.getInstance().getAttribute("QBE.QBE-ENABLE-SCRIPT.calculateFieldPosition");
  	
%>

<qbe:page>
 	<qbe:page-content>
		
		
		<%@include file="/jsp/commons/titlebar.jspf" %>
		<%@include file="/jsp/testata.jsp" %>	
 
 
		<div class='div_background_no_img'>
		
<% if ( QbeEngineConf.getInstance().isWebModalityActive() ){ %> 
<%@page import="groovy.util.GroovyScriptEngine"%>
<%@page import="groovy.lang.Binding"%>
<%@page import="it.eng.spago.configuration.ConfigSingleton"%>


<script>
function askConfirmation (message) {

	if (confirm(message))
	{
		ajxPersistTemporaryQueryAction();
	}
	else
	{
		
	}	
}
</script>

<%}%>



<table width="100%">
		<tr>
			<td width="3%">
			</td>
  	 		<td width="64%">
				<form id="formUpdateExpertMode" name="formUpdateExpertMode" action="<%=qbeUrl.getActionUrl(request,null) %>" method="post">
				<input type="hidden" name="ACTION_NAME" value="EXECUTE_QUERY_AND_SAVE_ACTION"/>
				<input type="hidden" name="SOURCE_FROM_QUERY_RESULT" value="QUERY_RESULT"/>
						
				<table> 																																							
					<% 
					String editableStr = null;
					//Map functionalities = (Map)sessionContainer.getAttribute("FUNCTIONALITIES");
					
					if(functionalities != null) {
						Properties props = (Properties)functionalities.get("expertQuery");
						if(props != null) editableStr = props.getProperty("editable");
					}
					
					if(editableStr != null && editableStr.equalsIgnoreCase("FALSE")) { %>
					
					
					
					<%} else { %>
						<tr>				
						<td rowspan="2" width="30%">
							<span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer, "QBE.Resume.ExecutionModality", bundle)%></span>
					 	</td>	
					 <%	if (datamartWizard.isUseExpertedVersion()) { %>
							<td width="20%">	
									<input type="radio" name="previewModeFromQueryResult" value="ComposedQuery" onclick="javascript:submitUpdatePreviewFromQueryResult()" title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseQbeQueryInPreview.Tooltip", bundle)%>"> 
										<span class="qbe-font">
										<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseQbeQueryInPreview", bundle)%>
										</span>
									</input>
									</td>	
									
									<td>
									<img src="<%=qbeUrl.getResourceUrl(request,"../img/expertok.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Resume.ShowQueryTooltip", bundle) %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.QueryResult.ShowQueryTooltip", bundle) %>" onclick="javascript:showQueryInQueryResult(event, 'divQbeQuery')" />	
									</td>
									
									<td width="50%">&nbsp;</td>								
									</tr>	
									
									<tr>
									<td width="20%">	
									<input type="radio" name="previewModeFromQueryResult" value="ExpertMode" checked="checked" onclick="javascript:submitUpdatePreviewFromQueryResult()" title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseExpertQueryInPreview.Tooltip", bundle)%>"> 
										<span class="qbe-font">
											<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseExpertQueryInPreview", bundle)%>
										</span>
									</input>
									</td>	
									<td>
									<img src="<%=qbeUrl.getResourceUrl(request,"../img/expertok.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Resume.ShowQueryTooltip", bundle) %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.QueryResult.ShowQueryTooltip", bundle) %>" onclick="javascript:showQueryInQueryResult(event, 'divExpertQuery')" />	
									</td>
									</tr>
								<%} else {%>
									<td width="20%px">	
									<input type="radio" name="previewModeFromQueryResult" value="ComposedQuery" checked="checked" onclick="javascript:submitUpdatePreviewFromQueryResult()" title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseQbeQueryInPreview.Tooltip", bundle)%>"> 
										<span class="qbe-font">
											<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseQbeQueryInPreview", bundle)%>
										</span>
									</input>
									</td>	
									
									<td>
									<img src="<%=qbeUrl.getResourceUrl(request,"../img/expertok.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Resume.ShowQueryTooltip", bundle) %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.QueryResult.ShowQueryTooltip", bundle) %>" onclick="javascript:showQueryInQueryResult(event, 'divQbeQuery')" />	
									</td>
									<td width="50%">&nbsp;</td>
									</tr>
									
									<tr>
									<td width="20%">	
									<input type="radio" name="previewModeFromQueryResult" value="ExpertMode" onclick="javascript:submitUpdatePreviewFromQueryResult()" title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseExpertQueryInPreview.Tooltip", bundle)%>"> 
										<span class="qbe-font">
											<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.Query.RadioUseExpertQueryInPreview", bundle)%>
										</span>
									</input>
									</td>	
									<td>
									<img src="<%=qbeUrl.getResourceUrl(request,"../img/expertok.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Resume.ShowQueryTooltip", bundle) %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.QueryResult.ShowQueryTooltip", bundle) %>" onclick="javascript:showQueryInQueryResult(event, 'divExpertQuery')" />	
									</td>
									</tr>
								<%}
							}%>
				</table>
				</form>
			</td>	
			<td width="30%">
				<% if (finalQueryString != null){ %>
				<form 	id="formExport" 
						name="formExport" 
						action="<%=exportFormUrl%>" 
						method="post">	
				<input type="hidden" id="_savedObjectId" name="_savedObjectId" value=""/>
				<input type="hidden" id="datamartNamesStr" name="datamartNamesStr" value="<%=datamartNamesStr%>"/>
  				<input type="hidden" id="query" name="query" value="<%=finalQueryString%>"/>
 				<input type="hidden" id="lang" name="lang" value="<%=queryLang%>"/>
  				<input type="hidden" id="jndiDataSourceName" name="jndiDataSourceName" value="<%=datamartModel.getDataSource().getConnection().getJndiName()%>"/>
  				<input type="hidden" id="dialect" name="dialect" value="<%=datamartModel.getDataSource().getConnection().getDialect()%>"/>
  				<input type="hidden" id="orderedFldList" name="orderedFldList" value="<%=Utils.getOrderedFieldList(datamartWizard)%>"/>
  				<input type="hidden" id="extractedEntitiesList" name="extractedEntitiesList" value="<%=Utils.getSelectedEntitiesAsString(datamartWizard)%>"/>
  				
  				<% if(query.getQueryId() != null) {%>
  					<input type="hidden" id="queryName" name="queryName" value="<%=query.getQueryId()%>"/>
  				<% } %>
  				
				<table>
					<tr>
						
						<td width="40%">
							<span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer, "QBE.Resume.ExportFormatTitle", bundle)%></span>
						</td>
				
						<td width="40%">
							<select name="format" >
								<option value="application/pdf" selected="selected">PDF</option>   				
   								<option value="application/vnd.ms-excel">XLS</option>
   								<option value="application/rtf">RTF</option>
   								<option value="text/html">HTML</option>
   								<option value="text/xml">XML</option>
   								<option value="text/plain">TXT</option>
   								<option value="text/csv">CSV</option>
  							</select>
						</td>
				
						<td width="20%">					
							
							<% if(!query.containsDuplicatedAliases()) {
							 	if (overflow){ %>
								<img src="<%=qbeUrl.getResourceUrl(request,"../img/exec22.png")%>"  
									alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Export", bundle) %>" 
									title="<%= qbeMsg.getMessage(requestContainer, "QBE.ExportTooltip", bundle) %>"
									onclick='askConfirmation("<%=qbeMsg.getMessage(requestContainer, "QBE.Exportation.warning", bundle)%>")'/>
							<%} else {%> 
								<img src="<%=qbeUrl.getResourceUrl(request,"../img/exec22.png")%>"  
									alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Export", bundle) %>" 
									title="<%= qbeMsg.getMessage(requestContainer, "QBE.ExportTooltip", bundle) %>"
									onclick='ajxPersistTemporaryQueryAction();'/>
							<% }
							  } else { %>
								  <img src="<%=qbeUrl.getResourceUrl(request,"../img/exec22.png")%>"  
									alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Export", bundle) %>" 
									title="<%= qbeMsg.getMessage(requestContainer, "QBE.ExportTooltip", bundle) %>"
									onclick='alert("Impossible to export result set. Query contains duplicated column alises");'/>
							<% }%>
								
									
						</td>
					</tr>
					<tr>
						<td width="40%">
							<span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer, "QBE.Resume.MaterializeView", bundle)%></span>
						</td>
						<td width="60%" align="left">
							
							<% if(!query.containsDuplicatedAliases()) {%>
								<img src="<%=qbeUrl.getResourceUrl(request,"../img/mview2.gif")%>"
									 alt="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.MaterializeView", bundle)%>"
									 title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.MaterializeView", bundle)%>"
									 onclick="ajxCreateViewFromCurrentQuery();"/>
							<%
							} else { %>
								<img src="<%=qbeUrl.getResourceUrl(request,"../img/mview2.gif")%>"
								 alt="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.MaterializeView", bundle)%>"
								 title="<%=qbeMsg.getMessage(requestContainer, "QBE.Resume.MaterializeView", bundle)%>"
								 onclick='alert("Impossible to create view. Query contains duplicated column alises");'/>
							<%}	%>
									 
							
						</td>
					</tr>
				</table>
				</form>
				<% } %>
			</td>
			
			<td width="3%"></td>			
		</tr>	
</table>
		
				
<% if (queryLang.equalsIgnoreCase("sql") && overflow){ %>
<table width="100%" valign="top"> 
	<tr>
		<td width="3%">
		</td>
		<td width="94%">
		</td>
		<td width="3%">
		</td>
 	</tr>
 	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			&nbsp;
		</td>
		<td></td> <%-- Rientro  --%>
	</tr>
 	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			<span class="qbeError">Warning !!!</span>
		</td>
		<td></td> <%-- Rientro  --%>
	</tr>
	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			&nbsp;
		</td>
		<td></td> <%-- Rientro  --%>
	</tr>
 	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			<textarea id="txtAreaMsgError" readonly="true" rows="3" cols="80"><%=qbeMsg.getMessage(requestContainer, "QBE.Execution.warning", bundle) %></textarea>
		</td>
		<td></td> <%-- Rientro  --%>
	</tr>
	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			&nbsp;
		</td>
		<td></td> <%-- Rientro  --%>
	</tr>
</table>
<%}%>
		
<% if (!flagErrors){ %>

<p>

<table width="100%" valign="top"> 
	<tr>
		<td width="3%">
		</td>
		<td width="94%">
		</td>
		<td width="3%">
		</td>
 	</tr>
	<tr>
 		<td></td> <%-- Rientro  --%>
		<td>
			<% java.util.Map sParams = new java.util.HashMap();
  			   sParams.clear();
  			   String urlPrev = "#";
  			   String urlNext = "#";
  				int[] pages = PageNavigatorUtils.getPageWindow(currentPage+1, pagesNumber.intValue(), 6);
  			%>
  			<% if (hasPreviousPage){ 
					sParams.clear();
   		   			sParams.put("ACTION_NAME","EXECUTE_QUERY_AND_SAVE_ACTION");
   		   			sParams.put("query",queryStr);
   		   			sParams.put("pageNumber",String.valueOf(0));
   		   			sParams.put("ignoreJoins", "true");
   		   			urlPrev = qbeUrl.getActionUrl(request, sParams);
   		   			%>
				<a class="qbe-title-link" href="<%=urlPrev%>"> << </a>
			<% } %> 
			<% if (hasPreviousPage){ 
					sParams.clear();
   		   			sParams.put("ACTION_NAME","EXECUTE_QUERY_AND_SAVE_ACTION");
   		   			sParams.put("query",queryStr);
   		   			sParams.put("pageNumber",String.valueOf(currentPage-1));
   		   			sParams.put("ignoreJoins", "true");
   		   			urlPrev = qbeUrl.getActionUrl(request, sParams);
   		   			%>
				<a class="qbe-title-link" href="<%=urlPrev%>"> < </a>
			<% } %> 
			<span class="qbe-font">
			<%
				for(int y = 0; y < pages.length; y++) {
					if((pages[y]-1) == currentPage) {
			%>
			&nbsp;[<%=pages[y]%>]&nbsp;
			<%
					} else {
						sParams.clear();
	   		   			sParams.put("ACTION_NAME","EXECUTE_QUERY_AND_SAVE_ACTION");
	   		   			sParams.put("query",queryStr);
	   		   			sParams.put("pageNumber",String.valueOf(pages[y]-1));
	   		   			sParams.put("ignoreJoins", "true");
	   		   			urlNext = qbeUrl.getActionUrl(request, sParams);
	   		%>
			&nbsp;<a class="qbe-title-link" href="<%=urlNext%>"> <%=pages[y]%> </a>&nbsp;
			<% 		}
				}
			%>
			</span>
			<% if (hasNextPage){
				sParams.clear();
   		   			sParams.put("ACTION_NAME","EXECUTE_QUERY_AND_SAVE_ACTION");
   		   			sParams.put("query",queryStr);
   		   			sParams.put("pageNumber",String.valueOf(currentPage+1));
   		   			sParams.put("ignoreJoins", "true");
   		   			urlNext = qbeUrl.getActionUrl(request, sParams);%>
				<a class="qbe-title-link" href="<%=urlNext%>"> > </a>
			<% } %>
			<% if (hasNextPage){
				sParams.clear();
   		   			sParams.put("ACTION_NAME","EXECUTE_QUERY_AND_SAVE_ACTION");
   		   			sParams.put("query",queryStr);
   		   			sParams.put("pageNumber",String.valueOf(pagesNumber.intValue()-1));
   		   			sParams.put("ignoreJoins", "true");
   		   			urlNext = qbeUrl.getActionUrl(request, sParams);%>
				<a class="qbe-title-link" href="<%=urlNext%>"> >> </a>
			<% } %>
		</td>
		<td></td>
	</tr>
</table>


<table width="100%" valign="top">
	<tr>
		<td width="3%">
			&nbsp;						
		</td>
		<td width="94%">
			&nbsp;						
		</td>
		<td width="3%">
		</td>					
	</tr>
	<tr>
		<td></td>
		<td width="94%">
			<table>

				<% 
					
					List headers = null;
					if (datamartWizard.isUseExpertedVersion()){%>
					<thead>
						<tr>
							<% if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("BEFORE_COLUMNS")){ 
								 for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  		calcFldHdr =  ((CalculatedField)itCalcFields.next()).getFldLabel();
								  		%>
										<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=calcFldHdr %></td>
										<%
								 }
							 	} %>
							<% headers = datamartWizard.extractExpertSelectFieldsList();
							   it = headers.iterator();
							   String headerName = "";
							   							   
							   while (it.hasNext()){
								   headerName = (String)it.next();
							%>
																		
								<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=headerName %></td>
							
							<% } %>
							<% if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("AFTER_COLUMNS")){ 
								 for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  		calcFldHdr =  ((CalculatedField)itCalcFields.next()).getFldLabel();
								  		%>
										<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=calcFldHdr %></td>
										<%
								 }
							 	} %>
							
						</tr>
					</thead>	
			    <%}else{ %>  
					<thead>
						<tr>
						<% if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("BEFORE_COLUMNS")){ 
								 for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  		calcFldHdr =  ((CalculatedField)itCalcFields.next()).getFldLabel();
								  		%>
										<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=calcFldHdr %></td>
										<%
								 }
							 	} %>
						<%
							//headers = aWizardObject.getQuery().getSelectClause().getSelectFields(); 
										   it = query.getSelectFieldsIterator();
										   String headerName = "";
										   ISelectField selField = null;
										   while (it.hasNext()){
											   selField = (ISelectField)it.next();
											   headerName = selField.getFieldName();
											   if(headerName.equalsIgnoreCase(selField.getFieldNameWithoutOperators()))
											   	headerName = (selField.getFieldAlias() != null ? selField.getFieldAlias() : headerName); 
											   else
												   if(selField.getFieldAlias() != null)
												   	headerName = headerName.replaceAll(selField.getFieldNameWithoutOperators(), selField.getFieldAlias());
						%>
								<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=headerName %></td>
						<% } %>
						<% if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("AFTER_COLUMNS")){ 
								 for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  		calcFldHdr =  ((CalculatedField)itCalcFields.next()).getFldLabel();
								  		%>
										<td class='portlet-section-header' style='vertical-align:middle;<%=paddingStyle%>'><%=calcFldHdr %></td>
										<%
								 }
							 	} %>
						</tr>
					</thead>
  				<%}%>
				
					<tbody>
						<%
						   it = aList.iterator();
						   Object o = null;
						   Object[] row;
						   String rowClass;
						   boolean alternate = false;
						   while (it.hasNext()){
					            rowClass = (alternate) ? "portlet-section-alternate" : "portlet-section-body";
					            alternate = !alternate;  
						   		%>
						   		<tr class='portlet-font'>
								<% 		
								o = it.next();
								
							    if (!(o instanceof Object[])){
							    	row = new Object[1];
							    	row[0] = o.toString();
							    }else{
							    	row = (Object[])o;
							    }
								
								
								String calcFld = "";
								if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("BEFORE_COLUMNS")){
										for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  			calcFld =  ((CalculatedField)itCalcFields.next()).calculate(gse, row, binding ).toString();
								  			%>
											<td class="<%=rowClass%>" style='<%=paddingStyle%>'><%=calcFld %></td>
											<%
								  		}
								}
									// Giro le colonne
								for (int j=0; j < row.length; j++){ 
										%>
										<td class="<%=rowClass%>" style='<%=paddingStyle%>'><%=(row[j] != null ? row[j].toString() : "NULL") %></td>
										<%
								}
									
								if (calculateFieldPosition != null && calculateFieldPosition.equalsIgnoreCase("AFTER_COLUMNS")){
										for (Iterator itCalcFields = calculateFields.iterator(); itCalcFields.hasNext(); ){
								  			calcFld =  ((CalculatedField)itCalcFields.next()).calculate(gse, row, binding ).toString();
								  			%>
											<td class="<%=rowClass%>" style='<%=paddingStyle%>'><%=calcFld %></td>
											<%
								  		}
								}%>
							</tr>	
							<%} %>
									
								
					
					<tr>
						<td width="10%">
							&nbsp;
						</td>
					</tr>
				</tbody>
			</table> 
		</td>
		<td></td>
	</tr>
</table>
				
<%}else{ %>

<table width="100%" valign="top"> 	
	
<% String joinMsg =  (String)aServiceResponse.getAttribute("JOIN_WARNINGS");
	
   if (joinMsg != null){ %>
	<tr>
		<td width="3%">
		</td>
		<td width="94%">
		</td>
		<td width="3%">
		</td>
 	</tr>
	<tr>
		<td></td>
 		<td>
 			<span class="qbeError"><%=qbeMsg.getMessage(requestContainer,msg, bundle)%></span>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>				
		<td>
			&nbsp;
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>				
		<td>
			<textarea id="txtAreaMsgError" readonly="true" rows="10" cols="80"><%=joinMsg.trim() %></textarea>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>
			&nbsp;
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>				
		<td>
			<% Map eParams = new java.util.HashMap(); 
			eParams.put("ACTION_NAME", "EXECUTE_QUERY_AND_SAVE_ACTION");
			eParams.put("ignoreJoins", "true");
			%>
			<a href="<%=qbeUrl.getActionUrl(request, eParams) %>"><%=qbeMsg.getMessage(requestContainer, "QBE.JoinWarning.Continue", bundle) %>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>
			&nbsp;
		</td>
		<td></td>
	</tr>
<% } else {%>
	<tr>
  		<td width="3%">
		</td>
		<td width="94%">
		</td>
		<td width="3%">
		</td>
	</tr>			
	<tr>
		<td></td>					
 		<td>
 			<span class="qbeError"><%=qbeMsg.getMessage(requestContainer,"QBE.Error.GenericError", bundle)%></span>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>
			&nbsp;
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>					
 		<td>
 			<textarea id="txtAreaMsgError" readonly="true" rows="10" cols="80"><%=msg%></textarea>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>
			&nbsp;
		</td>
		<td></td>
	</tr>
<% } %>
</table>
<%}%>

		
<% if ( QbeEngineConf.getInstance().isWebModalityActive() ){ %> 
</body>
<%}%>
<div id="divSpanCurrent">
<span id="currentScreen">DIV_EXEC</span>	
</div> 
	
<div id="divQbeQuery" style="position:absolute; padding:5px;display:none; z-index:1000">
	<table>
	 <tr>
	  <td>
	   <textarea rows="10" cols="50" readonly="true"><%=qbeSqlQuery%></textarea>		
	  </td>
	 </tr>
	</table>
</div>

<div id="divExpertQuery" style="position:absolute; padding:5px;display:none; z-index:1000">
	<table>
	 <tr>
	  <td>
	   <textarea rows="10" cols="50" readonly="true"><%=expertQuery%></textarea>		
	  </td>
	 </tr>
	</table>
</div>


		<script type="text/javascript">
			changeTabBkg();
		</script>
	
	
		</div>

	</qbe:page-content>
</qbe:page>