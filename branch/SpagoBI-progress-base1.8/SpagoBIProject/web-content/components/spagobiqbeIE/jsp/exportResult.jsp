<%@ page contentType="text/html; charset=ISO-8859-1"%>
<%@ page language="java"%>
 <%@ page
	import="it.eng.spago.base.*, it.eng.spagobi.utilities.*,
	       it.eng.qbe.utility.*,it.eng.qbe.javascript.*,it.eng.qbe.wizard.*"%>
<%@ page import="java.util.*"%>



<%@ include file="../jsp/qbe_base.jsp"%>

<%-- For validation --%>
<%
	String jarFilePath = null;
	
	ISingleDataMartWizardObject aWizardObject = (ISingleDataMartWizardObject) sessionContainer
					.getAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD);
	it.eng.qbe.model.DataMartModel dm = (it.eng.qbe.model.DataMartModel) sessionContainer
					.getAttribute("dataMartModel");

	dm.updateCurrentClassLoader();
	aWizardObject.composeQuery();
		
	String qbeQuery = aWizardObject.getFinalQuery();;
  	String expertQuery = aWizardObject.getExpertQueryDisplayed();
  			
	String finalQueryString = null;
	String queryLang = null;
	if (aWizardObject.isUseExpertedVersion()){
		finalQueryString = expertQuery;
		queryLang = "sql";
	}else{
		finalQueryString = qbeQuery;
		queryLang = "hql";
	} 
	
	jarFilePath = dm.getJarFile().toString();
	String saveFormUrl = GeneralUtilities.getSpagoBiContextAddress() + "/ReportServlet";
  	saveFormUrl += "?action=buildTemplate";
  	saveFormUrl += "&inline=false";
  	saveFormUrl += "&jarfilepath=" + jarFilePath;
  	if(aWizardObject.getQueryId() != null) saveFormUrl += "&queryName=" + aWizardObject.getQueryId();
  	saveFormUrl += "&query=" + finalQueryString;
  	saveFormUrl += "&lang=" + queryLang;
  	saveFormUrl += "&jndiDataSourceName=" + dm.getJndiDataSourceName() ;
  	saveFormUrl += "&dialect=" + dm.getDialect() ;
  	
  	String iframeUrl = GeneralUtilities.getSpagoBiContextAddress() + "/ReportServlet";
  	iframeUrl += "?jarfilepath=" + jarFilePath;
  	iframeUrl += "&inline=true";
  	if(aWizardObject.getQueryId() != null) iframeUrl += "&queryName=" + aWizardObject.getQueryId();
  	iframeUrl += "&query=" + finalQueryString ;
  	iframeUrl += "&lang=" + queryLang;
  	iframeUrl += "&jndiDataSourceName=" + dm.getJndiDataSourceName() ;
  	iframeUrl += "&dialect=" + dm.getDialect() ;
%>





<%if (qbeMode.equalsIgnoreCase("WEB")) {

			%>
<body>
<%}%>


<table class='header-table-portlet-section'>		
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' 
		    style='vertical-align:middle;padding-left:5px;'>
			<%=dm.getName()%> : <%=dm.getDescription()%> - <%=qbeMsg.getMessage(requestContainer,"QBE.Title.Templatepage", bundle)%>
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<%@include file="../jsp/qbe_headers.jsp"%>
	</tr>
</table>


<%@include file="../jsp/testata.jsp" %>


<div class='div_background_no_img'>

<form 	id="formSave" 
		name="formSave" 
		action="<%=saveFormUrl%>" 
		method="post">				

	<table width="100%">
		<td width="10%">&nbsp;</td>
		
		<td width="80%" align="center">				
			<span class="qbeTitle">Save report template to local disk&nbsp;&nbsp;</span>				
			<P>
			<input 	type="image" 
					src="<%=qbeUrl.conformStaticResourceLink(request,"../img/Save.gif")%>" 
					value="submit" 
					alt="<%= qbeMsg.getMessage(requestContainer, "QBE.Template.Save", bundle) %>" 
					title="<%= qbeMsg.getMessage(requestContainer, "QBE.Template.Save", bundle) %>"/>	
		</td>
		
		<td width="10%">&nbsp;</td>
	</table>
</form>

<center>
<HR noshade>
<P><span class="qbeTitle">Report Preview</span>	
<P>
<IFRAME STYLE="display:inline;" 
		SRC="<%=iframeUrl%>" 
		TITLE="Report" WIDTH="80%" HEIGHT="500">
</IFRAME>
</center>

<%if (qbeMode.equalsIgnoreCase("WEB")) {
%>
</body>
<%}%>

<div id="divSpanCurrent"><span id="currentScreen">DIV_EXPORT</span>
</div>


<%@include file="../jsp/qbefooter.jsp"%>


</div>
