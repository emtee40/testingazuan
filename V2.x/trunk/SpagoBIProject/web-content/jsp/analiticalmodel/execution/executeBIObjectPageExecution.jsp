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

<%@ include file="/jsp/commons/portlet_base.jsp"%>

<%@ include file="/jsp/analiticalmodel/execution/header.jsp"%>

<%@page import="it.eng.spagobi.analiticalmodel.document.service.ExecuteBIObjectModule"%>

<%
// tries to get from the session the heigh of the output area
String heightArea = (String) aSessionContainer.getAttribute(SpagoBIConstants.HEIGHT_OUTPUT_AREA);
String heightStr = "";
if (heightArea == null || heightArea.trim().equals("")) {
%>
<%-- Script for iframe automatic resize (by mitico Fisca (Luca Fiscato)) --%>
<%--
<script>
		
	function adaptSize<%= uuid %>Funct() {
		// evaluates the iframe current height
		iframeEl = document.getElementById('iframeexec<%= uuid %>');
		offsetHeight = 0;
		clientHeight = 0;
		if(isIE5) {
			offsetHeight = iframeEl.contentWindow.document.body.scrollHeight;
			clientHeight = iframeEl.clientHeight;
		}
		if(isIE6) {
			offsetHeight = iframeEl.contentWindow.document.body.scrollHeight;
			clientHeight = iframeEl.clientHeight;
		}
		if(isIE7) {
			offsetHeight = iframeEl.contentWindow.document.body.scrollHeight;
			clientHeight = iframeEl.clientHeight;
		}
		if(isMoz) {
			offsetHeight = iframeEl.contentWindow.document.body.offsetHeight;
			clientHeight = iframeEl.clientHeight;
		}
		// adjusts current iframe height
		if (offsetHeight != clientHeight + 40) {
			heightFrame = offsetHeight + 40;
			iframeEl.style.height = heightFrame + 'px';
		}
		// saves the current iframe height into a variable
		iframeHeight<%= uuid %> = heightFrame;
	}
	
	try {
		SbiJsInitializer.adaptSize<%=uuid%> = adaptSize<%=uuid%>Funct;
    } catch (err) {
		alert('Cannot resize the document view area');
	}
	
	try {
		window.onload = SbiJsInitializer.initialize;
	} catch (err) {
		alert('Cannot execute javascript initialize functions');
	}
	</script>
	--%>
	<script>
		
		pos<%=uuid%> = null; 
	
		function adaptSize<%=uuid%>Funct() {
				
			// calculate height of the visible area
			heightVisArea = 0;

			if(isIE5()) { heightVisArea = top.document.body.clientHeight; }
			if(isIE6()) { heightVisArea = top.document.body.clientHeight; }
			if(isIE7()) { heightVisArea = top.document.documentElement.clientHeight }
			if(isMoz()) { heightVisArea = top.innerHeight; }
	
			// get the frame div object
			diviframeobj = document.getElementById('divIframe<%=uuid%>');
			// find the frame div position
			pos<%=uuid%> = findPos(diviframeobj);	
						
			// calculate space below position frame div
			spaceBelowPos = heightVisArea - pos<%=uuid%>[1];
			// set height to the frame
			iframeEl = document.getElementById('iframeexec<%=uuid%>');
			iframeEl.style.height = spaceBelowPos + 'px';
	
	    	// to give time to the browser to update the dom (dimension of the iframe)
		  	setTimeout("adaptSize<%=uuid%>_2Part()", 250);
		}
	
	  	function adaptSize<%=uuid%>_2Part() {
        
        	// calculate height of the win area and height footer
			heightWinArea = 0;
  			heightFooter = 0;
  			if(isIE5()) {
  				heightWinArea = document.body.scrollHeight;
  				heightFooter = heightWinArea - heightVisArea;
  			}
  			if(isIE6()) {
  				heightWinArea = document.body.scrollHeight;
  				heightFooter = heightWinArea - heightVisArea;
  			}
  			if(isIE7()) {
  				heightWinArea = document.body.offsetHeight;
  				heightFooter = heightWinArea - heightVisArea;
  			}
  			if(isMoz()) {
  				heightWinArea = document.body.offsetHeight;
  				heightFooter = (heightWinArea - heightVisArea);
  			}	 
  	
  			// calculate height of the frame
  			heightFrame = heightVisArea - pos<%=uuid%>[1] - heightFooter;
  			iframeEl = document.getElementById('iframeexec<%=uuid%>');
  			iframeEl.style.height = heightFrame + 'px';
		}
	
		try {
			SbiJsInitializer.adaptSize<%=uuid%> = adaptSize<%=uuid%>Funct;
	    } catch (err) {
			alert('Cannot resize the document view area');
		}
	</script>
<%
} else {
	heightStr = "height:"+heightArea+"px;";
}
%>

<%-- Start execution iframe --%>
<div id="divIframe<%= uuid %>" style="width:100%;overflow=auto;border: 0;display:inline;<%= heightStr %>">
	<iframe id="iframeexec<%= uuid %>" name="iframeexec<%= uuid %>" src="<%= getUrl(obj.getEngine().getUrl(), executionParameters) %>&EXECUTION_ID=<%= uuid %>" style="width:100%;height:300px;z-index:0;" frameborder="0" >
	</iframe>
</div>
<%-- End execution iframe --%>

<%-- start cross navigation scripts --%>
<%
Map crossNavigationParameters = new HashMap();
crossNavigationParameters.put("PAGE", ExecuteBIObjectModule.MODULE_PAGE);
crossNavigationParameters.put(SpagoBIConstants.MESSAGEDET, SpagoBIConstants.EXEC_CROSS_NAVIGATION);
crossNavigationParameters.put("EXECUTION_FLOW_ID", executionFlowId);
crossNavigationParameters.put("SOURCE_EXECUTION_ID", uuid);
crossNavigationParameters.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "TRUE");
String crossNavigationUrl = urlBuilder.getUrl(request, crossNavigationParameters);
%>

<form id="crossNavigationForm<%= uuid %>" method="post" action="<%= crossNavigationUrl %>" style="display:none;">
	<input type="hidden" id="targetDocumentLabel<%= uuid %>" name="<%= ObjectsTreeConstants.OBJECT_LABEL %>" value="" />
	<input type="hidden" id="targetDocumentParameters<%= uuid %>" name="<%= ObjectsTreeConstants.PARAMETERS %>" value="" />
</form>

<script>
function execCrossNavigation(windowName, label, parameters) {
	var uuid = windowName.substr('iframeexec'.length);
	document.getElementById('targetDocumentLabel' + uuid).value = label;
	document.getElementById('targetDocumentParameters' + uuid).value = parameters;
	document.getElementById('crossNavigationForm' + uuid).submit();
}
</script>
<%-- end cross navigation scripts --%>


<%-- start refresh Scripts --%>
<%
Integer refreshSeconds=obj.getRefreshSeconds();
if(refreshSeconds!=null && refreshSeconds.intValue()>0){
Integer refreshConvert=new Integer(refreshSeconds.intValue()*1000);
%>

<script type="text/javascript">

  
  function doRefresh() {
    var iframe = document.getElementById("iframeexec<%=uuid%>");
    iframe.src = iframe.src;
    setTimeout("doRefresh()",<%=refreshConvert%>);
  }
  
  setTimeout('doRefresh()', <%=refreshConvert%>);
   
</script>
<%} %>
<%-- end refresh Scripts --%>


<%@ include file="/jsp/commons/footer.jsp"%>
