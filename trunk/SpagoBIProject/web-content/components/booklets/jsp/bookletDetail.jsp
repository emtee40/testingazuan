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


<%@ include file="/jsp/portlet_base.jsp"%>

<%@ page import="javax.portlet.PortletURL,
				it.eng.spago.navigation.LightNavigationManager,
				it.eng.spagobi.booklets.constants.BookletsConstants,
				java.util.List,
				java.util.Iterator,
				it.eng.spagobi.bo.Role,
				it.eng.spagobi.booklets.bo.ConfiguredBIDocument,
				it.eng.spagobi.constants.SpagoBIConstants,
				it.eng.spagobi.booklets.bo.WorkflowConfiguration" %>

<%
   SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute(BookletsConstants.BOOKLET_MANAGEMENT_MODULE); 
   List confDocList = (List)moduleResponse.getAttribute(BookletsConstants.CONFIGURED_DOCUMENT_LIST);
   String pathConfNode = (String)moduleResponse.getAttribute(BookletsConstants.PATH_BOOKLET_CONF);
   String templateOOFileName = (String)moduleResponse.getAttribute(BookletsConstants.OO_TEMPLATE_FILENAME);
   String wfProcDefFileName = (String)moduleResponse.getAttribute(BookletsConstants.WF_PROCESS_DEFINTIION_FILENAME);
   //WorkflowConfiguration workConf = (WorkflowConfiguration)moduleResponse.getAttribute(BookletsConstants.WORKFLOW_CONFIGURATION);
   
   Iterator iterDoc = confDocList.iterator();
   
   PortletURL backUrl = renderResponse.createActionURL();
   backUrl.setParameter("LIGHT_NAVIGATOR_BACK_TO", "1");
   
   PortletURL formDetailUrl = renderResponse.createActionURL();
   formDetailUrl.setParameter("PAGE", BookletsConstants.BOOKLET_MANAGEMENT_PAGE);
   formDetailUrl.setParameter("OPERATION", BookletsConstants.OPERATION_DETAIL_CONFIGURED_DOCUMENT);
   formDetailUrl.setParameter(BookletsConstants.PATH_BOOKLET_CONF, pathConfNode);
   
   PortletURL formEraseUrl = renderResponse.createActionURL();
   formEraseUrl.setParameter("PAGE", BookletsConstants.BOOKLET_MANAGEMENT_PAGE);
   formEraseUrl.setParameter("OPERATION", BookletsConstants.OPERATION_DELETE_CONFIGURED_DOCUMENT);
   formEraseUrl.setParameter(BookletsConstants.PATH_BOOKLET_CONF, pathConfNode);
   formEraseUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
   
   PortletURL loadTemplateUrl = renderResponse.createActionURL();
   loadTemplateUrl.setParameter("PAGE", BookletsConstants.BOOKLET_MANAGEMENT_PAGE);
   loadTemplateUrl.setParameter("OPERATION", BookletsConstants.OPERATION_LOAD_OOTEMPLATE_BOOKLET);
   loadTemplateUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
   
   PortletURL saveWorkflowDataUrl = renderResponse.createActionURL();
   saveWorkflowDataUrl.setParameter("PAGE", BookletsConstants.BOOKLET_MANAGEMENT_PAGE);
   saveWorkflowDataUrl.setParameter("OPERATION", BookletsConstants.OPERATION_SAVE_WORKFLOWDATA);
   saveWorkflowDataUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
   
   
   PortletURL formNewConfDocUrl = renderResponse.createActionURL();
   formNewConfDocUrl.setParameter("PAGE", BookletsConstants.BOOKLET_MANAGEMENT_PAGE);
   formNewConfDocUrl.setParameter("OPERATION", BookletsConstants.OPERATION_NEW_CONFIGURED_DOCUMENT);
   
%>




	<!-- ********************* TITOLO **************************  -->

	<table class='header-table-portlet-section'>
		<tr class='header-row-portlet-section'>
			<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
				<spagobi:message key="book.ConfTemp" bundle="component_booklets_messages" />
			</td>
			<td class='header-empty-column-portlet-section'>&nbsp;</td>
			<td class='header-button-column-portlet-section'>
				<a href='<%= backUrl.toString() %>'> 
	      			<img class='header-button-image-portlet-section' 
	      				 title='<spagobi:message key = "book.back" bundle="component_booklets_messages" />' 
	      				 src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/back.png")%>' 
	      				 alt='<spagobi:message key = "book.back"  bundle="component_booklets_messages"/>' />
				</a>
			</td>
		</tr>
	</table>
	
	<br/>
	
	




	<!-- ********************* START LEFT DIV **************************  -->
	
	<div style="float:left;width:50%" class="div_detail_area_forms">
		
		
		
		
		
		
		<!-- ********************* LIST CONFIGURED DOCUMENT **************************  -->
		
		<div style='padding-top:10px;margin-right:5px;' class='portlet-section-header' style="float:left;width:100%;">	
			<spagobi:message key="book.ConfDocList" bundle="component_booklets_messages"/>
		</div>
		<div style="clear:left;margin-bottom:10px;padding-top:10px;">
			<table style="width:98%;">
			<%
				if(!iterDoc.hasNext()) {
			%>
				 <tr style="border:1px solid #eeeeee;">
					<td style="valign:middle;" class="portlet-form-field-label">
						<spagobi:message key = "book.noconfdocument" bundle="component_booklets_messages" />
					</td>
				</tr>
			<%
				}
			%>
			<%
						while(iterDoc.hasNext()) {
						ConfiguredBIDocument confDoc = (ConfiguredBIDocument)iterDoc.next();
			%>		
			  <tr style="border:1px solid #eeeeee;">
					<td style="valign:middle;" class="portlet-form-field-label">
							<%=confDoc.getLogicalName()%>&nbsp;&nbsp;&nbsp;(<%=confDoc.getName()%>)
					</td>
					<td width="20">
						<a href='<%=formDetailUrl.toString() + "&configureddocumentidentifier=" + confDoc.getLogicalName() %>' />
						<img 	title='<spagobi:message key = "book.detail" bundle="component_booklets_messages" />' 
      				 		src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/detail.gif")%>' 
      				 		alt='<spagobi:message key = "book.detail"  bundle="component_booklets_messages"/>' />
      				 	</a>
					</td>
					<td  width="20">
					    <a href='<%=formEraseUrl.toString() + "&configureddocumentidentifier=" + confDoc.getLogicalName() %>' />
						<img 	title='<spagobi:message key = "book.erase" bundle="component_booklets_messages" />' 
      				 		src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/erase.gif")%>' 
      				 		alt='<spagobi:message key = "book.erase"  bundle="component_booklets_messages"/>' />
      				 	</a>
					</td>
				</tr> 
			<%
 			}
 			%>
			</table>
		</div>
		
		
		
		
		
		<!-- ********************* TEMPLATE FORM **************************  -->
		
		<br/>
				
		<div style='padding-top:10px;margin-right:5px;' class='portlet-section-header' style="float:left;width:100%;">	
			<spagobi:message key="book.template" bundle="component_booklets_messages"/>
		</div>
		<br/>
		<span style='margin-top:5px;padding-top:5px;' class="portlet-form-field-label">
			<spagobi:message key="book.currenttemplate" bundle="component_booklets_messages"/>: 
		</span>
		&nbsp;&nbsp;&nbsp;
		<% 
			if( (templateOOFileName==null) || templateOOFileName.trim().equals("")) {	
		%>
			<spagobi:message key="book.templatenotloaded" bundle="component_booklets_messages"/> 
		<% 	} else { 
				out.print(templateOOFileName);
			}
		%>
		<br/>
		<br/>
		<form action="<%=loadTemplateUrl.toString()%>" method='POST' id='loadTempForm' name='loadTempForm' enctype="multipart/form-data">
			<input type="hidden" name="<%=BookletsConstants.PATH_BOOKLET_CONF %>"  value="<%=pathConfNode%>"/>
			<input size="30" type="file" name="templatefile" />
			&nbsp;&nbsp;&nbsp;
			<input type="image" 
						 title='<spagobi:message key="book.loadTemplate" bundle="component_booklets_messages" />' 
						 src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/save22.gif")%>' 
						 alt='<spagobi:message key="book.loadTemplate"  bundle="component_booklets_messages"/>' />
		</form>
		
		
 		<br/>
		
		
  
  
  
  
  		<!-- ********************* WORKFLOW FORM **************************  -->
   
     	
		<div style='padding-top:10px;margin-right:5px;' class='portlet-section-header' style="float:left;width:100%;">	
			<div style='width:100%;float:left;'>
				<spagobi:message key="book.workflowData" bundle="component_booklets_messages"/>
			</div>
		</div>
		<br/>
		<span style='margin-top:5px;padding-top:5px;' class="portlet-form-field-label">
			<spagobi:message key="book.currentWFprocessDefFile" bundle="component_booklets_messages"/>: 
		</span>
		&nbsp;&nbsp;&nbsp;
		<% 
			if( (wfProcDefFileName==null) || wfProcDefFileName.trim().equals("")) {	
		%>
			<spagobi:message key="book.WFprocessDefFileNotloaded" bundle="component_booklets_messages"/> 
		<% 	} else { 
			out.print(wfProcDefFileName);
			}
		%>
		<br/>
		<br/>
		<form action="<%=saveWorkflowDataUrl.toString()%>" method='POST' id='workForm' name='workForm' enctype="multipart/form-data">	
			<input type="hidden" name="<%=BookletsConstants.PATH_BOOKLET_CONF %>"  value="<%=pathConfNode%>"/>
			<input size="30" type="file" name="wfdefinitionfile" />
			&nbsp;&nbsp;&nbsp;
			<input type="image" 
				   title='<spagobi:message key="book.save" bundle="component_booklets_messages" />' 
				   src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/save22.gif")%>' 
				   alt='<spagobi:message key="book.save"  bundle="component_booklets_messages"/>' />
		</form>
		
			<%-- 
			<table cellspacing="10px">	
				<tr>
					<td class='portlet-form-field-label' width="130px">
						<spagobi:message key="book.nameWorkPackage" bundle="component_booklets_messages" />
					</td>
					<td style="font-size:5;">
						<input size="30" type="text" name="nameWorkPackage" value="<%=workConf.getNameWorkflowPackage()%>" />
					</td>
				</tr>
				<tr style="height:10px;"><td colspan="2"><span></span></td></tr>
				<tr>
					<td class='portlet-form-field-label' width="130px">
						<spagobi:message key="book.nameWorkProcess" bundle="component_booklets_messages" />
					</td>
					<td style="font-size:5;">
						<input size="30" type="text" name="nameWorkProcess" value="<%=workConf.getNameWorkflowProcess()%>" />
					</td>
				</tr>
			</table>
			--%>

		<br/>
		
	</div>







	<!-- ********************* START RIGHT DIV **************************  -->

	<div style="float:left;width:45%" class="div_detail_area_forms">
		<form action="<%=formNewConfDocUrl.toString()%>" method='POST' id='newForm' name='newForm'>
		<input type="hidden" value="<%=pathConfNode%>" name="<%=BookletsConstants.PATH_BOOKLET_CONF%>" />
		<div style='padding-top:10px;margin-right:5px;' class='portlet-section-header'>	
				<div style='width:90%;float:left;'>
						<spagobi:message key="book.addConfDoc" bundle="component_booklets_messages"/>
				</div>
				<div style="width:8%;float:left;">
					<input style="margin-left:10px;" type="image" 
								 title='<spagobi:message key="book.addDocument" bundle="component_booklets_messages" />' 
								 src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/components/booklets/img/add.gif")%>' 
								 alt='<spagobi:message key="book.addDocument"  bundle="component_booklets_messages"/>' />
				</div>
		</div>
		<div>
			<spagobi:treeObjects moduleName="<%=BookletsConstants.BOOKLET_MANAGEMENT_MODULE%>"  
								 htmlGeneratorClass="it.eng.spagobi.booklets.treegenerators.DocumentsTreeHtmlGenerator" />
		    <br/>
		    <br/>
		</div>
		</form>
	</div>


	<div style="clear:left;">
		&nbsp;
	</div>

	

<br/>
</br>






<%-- 
<table width="100%" cellspacing="0" border="1" >
  	<tr height='1'>
  		<td>
  	    	<table width="100%">
  	    		<tr >
  	    			<td colspan="3" align="left" class='portlet-section-header'>
  	    				<spagobi:message key = "SBIDev.paramUse.valTab3" />
  	    			</td>
  	    		</tr>
  	    		<%   	    		    
  	    		   	int count = 1;
  	    		    int prog = 0; 
  	    		   	Iterator iterRole = roleList.iterator(); 
  	    		  	int numRoles = roleList.size();
  	    			while(iterRole.hasNext()) {     
  	    				Role role = (Role)iterRole.next();
                        if(count==1) {
                          out.print("<tr class='portlet-font'>");
                        }
  	    		 		out.print("<td class='portlet-section-body'>");
  	    		 		out.print("   <input type='checkbox' name='idExtRole' value='"+role.getId()+"'/>");
  	    		 		out.print(    role.getName());
  	    		 		out.print("</td>");
  	    		 		if((count < 3) && (prog==numRoles-1)){
  	    		 		  	int numcol = 3-count;
  	    		 		  	int num;
  	    		 		  	for (num = 0; num <numcol; num++){
  	    		 		  		out.print("<td class='portlet-section-body'>");
  	    		 		    	out.print("</td>");
  	    		 		  	}
  	    		 		  	out.print("</tr>");
  	    		 		} 
  	    		 		if( (count==3) || (prog==(numRoles-1)) ) {
  	    		 		 	out.print("</tr>");
  	    		 		 	count = 1;
  	    		 		} 
  	    		 		else {
  	    		 		 	count ++;
  	    		 		 }
  	    		  }
  	    		%>
  	    	</table> 
  		</td>
  	</tr>
</table>
--%>








