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
<%@ page language="java"%>

<%@ page import="it.eng.qbe.javascript.*"%>
<%@ page import="it.eng.qbe.urlgenerator.*"%>
<%@ page import="it.eng.qbe.export.*"%>


<%@ include file="/jsp/qbe_base.jsp"%>

 
<%
  	
  	String jarFilePath = datamartModel.getDataSource().getJarFile().toString();
  	//dm.updateCurrentClassLoader();
  	datamartWizard.composeQuery(datamartModel);
  	String msg  = null;
  	try{
  		 Object o = aServiceResponse.getAttribute("ERROR_MSG");
  		 msg =  (String)aServiceResponse.getAttribute("ERROR_MSG");
  	}catch(Throwable t){
  		t.printStackTrace();	
  	}
  	
  	boolean flagErrors = false;
      boolean overflow = false;
      
      SourceBean listResponse = null;
      if (msg != null){
  	   flagErrors = true;
  	}else{
  		   listResponse = (SourceBean)sessionContainer.getAttribute(it.eng.qbe.action.ExecuteQueryAction.QUERY_RESPONSE_SOURCE_BEAN);
  		   if(listResponse.getAttribute("overflow") != null)
  		   	 overflow = ((Boolean)listResponse.getAttribute("overflow")).booleanValue();
  	} 
  	
  	
  	
  	String qbeQuery = datamartWizard.getFinalQuery();;
    	String expertQuery = datamartWizard.getExpertQueryDisplayed();
    			
  	String finalQueryString = null;
  	String queryLang = null;
  	if (datamartWizard.isUseExpertedVersion()){
  		finalQueryString = expertQuery;
  		queryLang = "sql";
  	}else{
  		finalQueryString = qbeQuery;
  		queryLang = "hql";
  	} 
  	
  	String exportFormUrl = Utils.getReportServletContextAddress() + "/ReportServlet";
 %>





<qbe:page>
 	<qbe:page-content>
		
		<%@include file="/jsp/commons/titlebar.jspf" %>
		<%@include file="/jsp/testata.jsp" %>	
 
 
		<div class='div_background_no_img'>
		
		

<form 	id="formExport" 
		name="formExport" 
		action="<%=exportFormUrl%>" 
		method="post">
				<input type="hidden" id="_savedObjectId" name="_savedObjectId" value=""/>					
				<input type="hidden" id="jarfilepath" name="jarfilepath" value="<%=jarFilePath%>"/>
				<input type="hidden" id="query" name="query" value="<%=finalQueryString%>"/>
  				<input type="hidden" id="inline" name="inline" value="false"/>
 				<input type="hidden" id="lang" name="lang" value="<%=queryLang%>"/>
 				<input type="hidden" id="action" name="action" value="buildTemplate"/>
  				<input type="hidden" id="jndiDataSourceName" name="jndiDataSourceName" value="<%=dm.getJndiDataSourceName()%>"/>
  				<input type="hidden" id="dialect" name="dialect" value="<%=dm.getDialect()%>"/>
  				<input type="hidden" id="orderedFldList" name="orderedFldList" value="<%=Utils.getOrderedFieldList(aWizardObject)%>"/>
  				<input type="hidden" id="extractedEntitiesList" name="extractedEntitiesList" value="<%=Utils.getSelectedEntitiesAsString(aWizardObject)%>"/>
				<% if(query.getQueryId() != null) {%>
  					<input type="hidden" id="queryName" name="queryName" value="<%=query.getQueryId()%>"/>
  				<% } %>
	<table width="100%">
		<td width="10%">&nbsp;</td>
		
		<td width="80%" align="center">				
			<span class="qbeTitle">Save report template to local disk&nbsp;&nbsp;</span>				
			<P>
			<img 
					src="<%=qbeUrl.conformStaticResourceLink(request,"../img/Save.gif")%>" 
					onclick="ajxPersistTemporaryQueryAction();"
					alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Template.Save", bundle) %>" 
					title="<%= qbeMsg.getMessage(requestContainer, "QBE.Template.Save", bundle) %>"/>	
		</td>
		
		<td width="10%">&nbsp;</td>
	</table>
</form>


<%if(!flagErrors && !overflow) { %>
<center>
<HR noshade>
<P><span class="qbeTitle">Report Preview</span>	
<P>
<form 	id="formExportIframe" 
						name="formExportIframe" 
						action="<%=exportFormUrl%>" 
						method="post"
						target="myIframe">
				<input type="hidden" id="_savedObjectIdIframe" name="_savedObjectId" value=""/>	
				<input type="hidden" id="jarfilepath" name="jarfilepath" value="<%=jarFilePath%>"/>
				<input type="hidden" id="query" name="query" value="<%=finalQueryString%>"/>
  				<input type="hidden" id="inline" name="inline" value="true"/>
 				<input type="hidden" id="lang" name="lang" value="<%=queryLang%>"/>
  				<input type="hidden" id="jndiDataSourceName" name="jndiDataSourceName" value="<%=dm.getJndiDataSourceName()%>"/>
  				<input type="hidden" id="dialect" name="dialect" value="<%=dm.getDialect()%>"/>
  				<input type="hidden" id="orderedFldList" name="orderedFldList" value="<%=Utils.getOrderedFieldList(aWizardObject)%>"/>
  				<input type="hidden" id="extractedEntitiesList" name="extractedEntitiesList" value="<%=Utils.getSelectedEntitiesAsString(aWizardObject)%>"/>
				<% if(query.getQueryId() != null) {%>
  					<input type="hidden" id="queryName" name="queryName" value="<%=aWizardObject.getQueryId()%>"/>
  				<% } %>
</form>

<IFRAME name="myIframe" STYLE="display:inline;" 
		TITLE="Report" WIDTH="80%" HEIGHT="500">
</IFRAME>
<script type="text/javascript">
	ajxPersistTemporaryQueryActionAndSubmitExportIFrame();
</script>
</center>

<%} else { %>
<table width="100%" valign="top"> 
	<tr>
		<td width="3%"></td>
		<td width="94%"></td>
		<td width="3%"></td>
 	</tr>
	<tr>
		<td></td>
 		<td>
 			<span class="qbeError">The following warnings/errors occurred</span>
		</td>
		<td></td>
	</tr>
	<tr>
		<td></td>				
		<td>&nbsp;</td>
		<td></td>
	</tr>
	<tr>
		<td width="3%"></td>
		<td width="94%">
			<textarea id="txtAreaMsgError" readonly="true" rows="5" cols="80"><%=(overflow)?"Overflow !!! To many rows in the resultset.": msg %></textarea>
		<td	td width="3%"></td>
	</tr>
	<tr>
		<td></td>				
		<td>&nbsp;</td>
		<td></td>
	</tr>
</table>
<% } %>



		<div id="divSpanCurrent">
			<span id="currentScreen">DIV_EXPORT</span>
		</div>


		
		<script type="text/javascript">
			changeTabBkg();
		</script>
	
	
		</div>

	</qbe:page-content>
</qbe:page>