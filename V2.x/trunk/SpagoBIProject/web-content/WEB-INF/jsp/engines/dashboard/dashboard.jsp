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
<%@ page import="java.util.Set" %>
<%@page import="java.net.URLEncoder"%>

<% 
   SourceBean sbModuleResponse = (SourceBean) aServiceResponse.getAttribute("ExecuteBIObjectModule");
   ExecutionInstance instanceO = contextManager.getExecutionInstance(ExecutionInstance.class.getName());

   String execContext = instanceO.getExecutionModality();

   Integer executionAuditId_dash = null;
   String crossNavigationUrl = "";
   if (execContext == null || !execContext.equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITION)){%>
  		<%@ include file="/WEB-INF/jsp/analiticalmodel/execution/header.jsp"%>
		<%		
		executionAuditId_dash = executionAuditId;
		Map crossNavigationParameters = new HashMap();
		crossNavigationParameters.put("PAGE", ExecuteBIObjectModule.MODULE_PAGE);
		crossNavigationParameters.put(SpagoBIConstants.MESSAGEDET, SpagoBIConstants.EXEC_CROSS_NAVIGATION);
		crossNavigationParameters.put("EXECUTION_FLOW_ID", executionFlowId);
		crossNavigationParameters.put("SOURCE_EXECUTION_ID", uuid);
		crossNavigationParameters.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "TRUE");
		crossNavigationUrl = urlBuilder.getUrl(request, crossNavigationParameters);%>
		
		<form id="crossNavigationForm<%= uuid %>" method="post" action="<%= crossNavigationUrl %>" style="display:none;">
		    <input type="hidden" id="targetDocumentLabel<%= uuid %>" name="<%= ObjectsTreeConstants.OBJECT_LABEL %>" value="" />  
			<input type="hidden" id="targetDocumentParameters<%= uuid %>" name="<%= ObjectsTreeConstants.PARAMETERS %>" value="" />
		</form>
		
	
		<script>

		
		

			function execCrossNavigation(windowName, label, parameters) {
				if(this.uiType === 'ext'){
					sendMessage({'label': label, parameters: parameters},'crossnavigation');
				} else {
					var uuid = "<%=uuid%>";
					document.getElementById('targetDocumentLabel' + uuid).value = label;
					document.getElementById('targetDocumentParameters' + uuid).value = parameters;
					document.getElementById('crossNavigationForm' + uuid).submit();
				}
	
			}
		
				
		</script>
		<%-- end cross navigation scripts --%>
<%	} 
	else{
		ExecutionInstance instance = contextManager.getExecutionInstance(ExecutionInstance.class.getName());
		AuditManager auditManager = AuditManager.getInstance();
		executionAuditId_dash = auditManager.insertAudit(instance.getBIObject(), null, userProfile, instance.getExecutionRole(), instance.getExecutionModality());
		String uuid = instanceO.getExecutionId(); 
   }
   
   
    String movie = ChannelUtilities.getSpagoBIContextName(request);
    //String movie = renderRequest.getContextPath();
    String relMovie = (String)sbModuleResponse.getAttribute("movie");
    if(relMovie.startsWith("/"))
    	movie = movie + relMovie;
    else movie = movie + "/" + relMovie;
	String width = (String)sbModuleResponse.getAttribute("width");
	String height = (String)sbModuleResponse.getAttribute("height");
	String dataurl = ChannelUtilities.getSpagoBIContextName(request);
	//String dataurl = renderRequest.getContextPath();
	String dataurlRel = (String)sbModuleResponse.getAttribute("dataurl");
	if(dataurlRel.startsWith("/"))
		dataurl = dataurl + dataurlRel;
	else dataurl = dataurl + "/" + dataurlRel;
	
	Map confParameters = (Map)sbModuleResponse.getAttribute("confParameters");
	Map dataParameters = (Map)sbModuleResponse.getAttribute("dataParameters");
	Map drillParameters = (Map)sbModuleResponse.getAttribute("drillParameters");
	
	dataParameters.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	// adding parameters for AUDIT updating
	if (executionAuditId_dash != null) {
		dataParameters.put(AuditManager.AUDIT_ID, executionAuditId_dash.toString());
	}
	
	// start to create the calling url
	// put the two dimension parameter
	movie += "?paramHeight="+height+"&paramWidth="+width; 
	// create the dataurl string
	if (dataurl.contains("?")) dataurl += "&";
	else dataurl += "?";
	// for each data parameter append to the dataurl 
	Set dataKeys = dataParameters.keySet();
	Iterator iterDataKeys = dataKeys.iterator();
	while(iterDataKeys.hasNext()) {
		String name = (String)iterDataKeys.next();
		String value = (String)dataParameters.get(name);
	    dataurl += name + "=" + value + "&"; 
	}
	
    // for each conf parameter append to the movie url  
	Set confKeys = confParameters.keySet();
	Iterator iterConfKeys = confKeys.iterator();
	while(iterConfKeys.hasNext()) {
		String name = (String)iterConfKeys.next();	
		String value = (String)confParameters.get(name);
		movie += "&" + name + "=" + value; 
	}
	
	// for drill parameter append to the movie url  
	Set drillKeys = drillParameters.keySet();
	Iterator iterDrillKeys = drillKeys.iterator();
	while(iterDrillKeys.hasNext()) {
		String name = (String)iterDrillKeys.next();	
		String value = (String)drillParameters.get(name);
		movie += "&" + name + "=" + value; 
	}
	
    // append to the calling url the dataurl	
	movie += "&dataurl=" + URLEncoder.encode(dataurl);
  
    
	//defines dynamic parameters for multichart management (ie. recNum)
	int numCharts = (confParameters.get("numCharts")==null)? 1:Integer.valueOf((String)confParameters.get("numCharts"));
	String multichart = (confParameters.get("multichart")==null)?"false":(String)confParameters.get("multichart");
	String orientation = (confParameters.get("orientation_multichart")==null)?"vertical":(String)confParameters.get("orientation_multichart");
	String legend = (confParameters.get("legend")==null)?"true":(String)confParameters.get("legend");
	String displayTitle = (confParameters.get("displayTitleBar")==null)?"false":(String)confParameters.get("displayTitleBar");
	//int numItems = (confParameters.get("numNeedles")==null)? 1:Integer.valueOf((String)confParameters.get("numNeedles"));
	
	//defines radius for get dynamic height : only the last chart with the legend uses the total height; the others are riduced.
	double radiusByWidth = (Integer.valueOf(width)-2*10)/2;
	double radiusByHeight = (Integer.valueOf(height)-2*10)/(1+(1/4));
	double radius = 0;
	String dinHeight = height;
	
    if (radiusByWidth < radiusByHeight) {
		radius = radiusByWidth;
    } else {
		radius = radiusByHeight;
	}
    
	if (orientation.equalsIgnoreCase("horizontal")){ %>
	<br>
		<table align="center">
			<tr>
	<%	 
	}
	for (int idx = 0; idx < numCharts; idx++){
		
		if (idx==0){
		 	movie += "&recNumber="+String.valueOf(idx);
		 	/*if it's a multichart type and it's required the legend  
		 	  it's shows only on the last chart while if is required the title it's shows only on the first one*/
		 	if (multichart.equalsIgnoreCase("true")) {
				if (legend.equalsIgnoreCase("true")){
			 		movie = movie.replace("&legend=true","&legend=false");
			 		dinHeight = String.valueOf(Integer.valueOf(height).intValue()-radius+20);
				}
		 	}
		 	if (displayTitle.equalsIgnoreCase("true")){
		 		int heightMargin = 40;
		 		dinHeight = String.valueOf(Double.valueOf(dinHeight).intValue()+heightMargin);
		 		movie +="&winHeightMargin="+heightMargin;
			}
		}
		else{
			movie = movie.replace("&recNumber="+(idx-1),"&recNumber="+idx);
			if (multichart.equalsIgnoreCase("true")){
				if (legend.equalsIgnoreCase("true")){
					if (idx < (numCharts-1)){
				 		movie = movie.replace("&legend=true","&legend=false");
				 		dinHeight = String.valueOf(Integer.valueOf(height).intValue()-radius+20);
					}
					else{
						movie = movie.replace("&legend=false","&legend=true");
					//	dinHeight = height;
						 dinHeight = String.valueOf(Integer.valueOf(height).intValue()+20);
					}
					if (displayTitle.equalsIgnoreCase("true")){
						movie = movie.replace("&displayTitleBar=true","&displayTitleBar=false");
					}
				}
		 	}
		}
		
		System.out.println("dinHeight: " + dinHeight);
 		if (orientation.equalsIgnoreCase("horizontal")){%>
			<td> 
	<%  } 

// HTML CODE FOR THE FLASH COMPONENT %>
 <div align="center" > 
       <object  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" 
                codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" 
                type="application/x-shockwave-flash"
                data="<%=movie%>"  
                width="<%=width%>" 
                height="<%=dinHeight%>" >
       	  <param name="movie" value="<%=movie%>">
       	  <param name="quality" value="high">
       	  <param name="scale" value="noscale">
       	  <param name="salign" value="LT">
       	  <param name="menu" value="false">
       	  <param name="wmode" value="transparent">
        <EMBED  src="<%=movie%>" 
                quality=high 
                width="<%=width%>" 
                height="<%=dinHeight%>" 
                wmode="transparent" 
   			 TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">
   		</EMBED>
	</object>    
</div>  

<% if (orientation.equalsIgnoreCase("horizontal")){%>
  </td>
<%}
} //for 
if (orientation.equalsIgnoreCase("horizontal")){%>
	</tr>
</table>
<%} %>

<%@ include file="/WEB-INF/jsp/commons/footer.jsp"%>