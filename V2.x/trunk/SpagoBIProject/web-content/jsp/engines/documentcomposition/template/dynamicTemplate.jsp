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

<%@page import="org.apache.log4j.Logger"%>
<%@page import="it.eng.spagobi.engines.documentcomposition.SpagoBIDocumentCompositionInternalEngine"%>
<%@page import="java.util.HashMap"%>

<%@ include file="/jsp/commons/portlet_base.jsp"%>
<%@ include file="/jsp/analiticalmodel/execution/header.jsp"%>
<%! private static transient Logger logger=Logger.getLogger(SpagoBIDocumentCompositionInternalEngine.class);%>
	


<% logger.debug("IN");
	//gets urls & co of documents
	HashMap lstUrl = (HashMap)aSessionContainer.getAttribute("docUrls");
	HashMap lstUrlParams = (HashMap)aSessionContainer.getAttribute("docUrlParams");
	HashMap lstDocLinked = (HashMap)aSessionContainer.getAttribute("docLinked");
	HashMap lstFieldLinked = (HashMap)aSessionContainer.getAttribute("fieldLinked");
	HashMap lstStyle = (HashMap)aSessionContainer.getAttribute("divStyle");
	HashMap lstStylePanel = (HashMap)aSessionContainer.getAttribute("panelStyle");
	String executionId = (String) aServiceRequest.getAttribute("spagobi_execution_id");
	String flowId = (String) aServiceRequest.getAttribute("spagobi_flow_id"); 
	    
    String urlIframe = (String)aSessionContainer.getAttribute("urlIframe");
	logger.debug("urlIframe: " + urlIframe);

%> 
<!-- LIBS AJAX-->
    <script type="text/javascript" src="/SpagoBI/js/documentcomposition/documentcomposition.js"></script>
<!-- ENDLIBS -->

<LINK rel='StyleSheet' href='<%=urlBuilder.getResourceLink(request, "css/documentcomposition/documentcomposition.css")%>' type='text/css' />


<!-- ***************************************************************** -->
<!-- ***************************************************************** -->
<!-- **************** START BLOCK DIV ******************************** -->
<!-- ***************************************************************** -->
<!-- ***************************************************************** -->
<%
for (int i=0; i<lstUrl.size(); i++){
	String styleDoc = (String)lstStyle.get("STYLE_DOC__"+i);
	String totalSbiDocLabel = (String)lstUrlParams.get("SBI_DOC_LABEL__"+(i));
	String labelDoc = totalSbiDocLabel.substring(totalSbiDocLabel.indexOf("|")+1);
%>
 
 <div id="divIframe_<%=labelDoc%>" style="<%=styleDoc%>" > 
</div> 

<%} %>
<br>

<script>
	//set general url for iframe page
	setUrlIframe('<%=urlIframe%>');
	//Create associative arrays with information for refresh (dependencies, ...)   ACTHUNG: Every array is indipendent!!!!
	var arUrl = new Object();
	var arLinkedDocs  = new Object();
	var arLinkedFields  = new Object();
	var arStylePanels  = new Object();
 	<% //loop on documents
 	for (int i = 0; i < lstUrl.size(); i++){
 		String mainLabel = (String)lstDocLinked.get("MAIN_DOC_LABEL__"+(i));
 		String totalSbiDocLabel = (String)lstUrlParams.get("SBI_DOC_LABEL__"+(i));
 		String labelDoc = totalSbiDocLabel.substring(totalSbiDocLabel.indexOf("|")+1);
 	%>
 		arUrl['<%=totalSbiDocLabel%>'] = ['<%=(String)lstUrl.get("URL_DOC__"+(i))%>'];
 		arStylePanels['<%=labelDoc%>'] = ['<%=(String)lstStylePanel.get("STYLE__"+labelDoc)%>'];
 	<%	//loop on document linked 
 		//for (int j=0; j<lstDocLinked.size(); j++){
		for (int j=0; j<lstFieldLinked.size(); j++){
 			if (mainLabel != null && mainLabel.equalsIgnoreCase(labelDoc)){ 
		 		String fieldMaster =  (String)lstFieldLinked.get("SBI_LABEL_PAR_MASTER__"+i+"__"+(j));
				if (fieldMaster != null && !fieldMaster.equals("")){	
	%>
					arLinkedFields['<%="SBI_LABEL_PAR_MASTER__"+i+"__"+(j)%>'] = ['<%=fieldMaster%>'];
	<%    		}
				Integer numDocLinked = (Integer)lstFieldLinked.get("NUM_DOC_FIELD_LINKED__"+(i)+"__"+(j));
				if (numDocLinked != null){
					for (int k=0; k < numDocLinked.intValue(); k++){
		 				String field =  (String)lstFieldLinked.get("DOC_FIELD_LINKED__"+(i)+"__"+(j)+"__"+k); 
		 				String labelDocLinked = field.substring(0,field.indexOf("__"));
		 				field = field.substring(field.indexOf("__")+2);
		 				String label = "";
		 				for(int x=0; x<lstDocLinked.size(); x++){
		 					label = (String)lstDocLinked.get("DOC_LABEL_LINKED__"+(i)+"__"+x);
		 					if (label.substring(label.indexOf("|")+1).equalsIgnoreCase(labelDocLinked)) break;
		 				}
		 				if (field != null && !field.equals("") ){	
			%>
			 					arLinkedDocs['<%=labelDoc +"__"+ i+"__"+ j+"__"+k%>'] = ['<%=label%>'];
			 					arLinkedFields['<%=label+"__"+ i + "__"+ j+"__"+k%>'] = ['<%=field%>'];
		 		<%     	}
		 				//}		 
					}
 				}
 			} 
 		}
 	}%> 
	setDocs(arUrl);
	setLinkedDocs(arLinkedDocs);
	setLinkedFields(arLinkedFields);
	setStylePanels(arStylePanels);
</script> 

<%	logger.debug("OUT"); %> 

<!-- ***************************************************************** -->
<!-- ***************************************************************** -->
<!-- **************** END BLOCK DIV  ********************************* -->
<!-- ***************************************************************** -->
<!-- ***************************************************************** -->