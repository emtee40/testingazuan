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
	
	<%@ page         import="it.eng.spagobi.tools.distributionlist.bo.DistributionList,
							 it.eng.spagobi.tools.distributionlist.bo.Email,
	 				         it.eng.spago.navigation.LightNavigationManager,
	 				         java.util.Map,java.util.HashMap,java.util.List,
	 				         java.util.Iterator,
	 				         it.eng.spagobi.commons.bo.Domain,
	 				         it.eng.spagobi.analiticalmodel.document.metadata.SbiObjects,
	 				         it.eng.spagobi.tools.distributionlist.service.DetailDistributionListUserModule" %>
	 				         
	<%@page import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
	
	<%
		SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("DetailDistributionListUserModule"); 
		DistributionList dl = (DistributionList)moduleResponse.getAttribute("dlObj");
	%>
	
	<%@page import="it.eng.spagobi.analiticalmodel.document.bo.BIObject"%>

	
	<div class='div_background_no_img' style='padding-top:5px;padding-left:5px;'>
	
	<table width="100%" cellspacing="0" border="0" id = "fieldsTable" >
	<tr>
	  <td>
		<div class='div_detail_label'>
			<span class='portlet-form-field-label'>
				<spagobi:message key = "SBISet.ListDL.columnName" />
			</span>
		</div>
		<%
			  String name = dl.getName();
			   if((name==null) || (name.equalsIgnoreCase("null"))  ) {
				   name = "";
			   }
		%>
		<div class='div_detail_form'>
			<input class='portlet-form-input-field' type="text" 
				   name="NAME" size="50" value="<%=name%>" readonly maxlength="50" />
		</div>
		
		<div class='div_detail_label'>
			<span class='portlet-form-field-label'>	
				<spagobi:message key = "SBISet.ListDL.columnDescr" />
			</span>
		</div>
		<div class='div_detail_form'>
		<%
			   String descr = dl.getDescr();
			   if((descr==null) || (descr.equalsIgnoreCase("null"))  ) {
			   	   descr = "";
			   }
		%>
			<input class='portlet-form-input-field' type="text" name="DESCR" 
				   size="50" value="<%= descr %>" readonly maxlength="160" />
		</div>
	
	</td><!-- CLOSE COLUMN WITH DATA FORM  -->
		
		
		<spagobi:error/>
	</tr>
	</table>   <!-- CLOSE TABLE FORM ON LEFT AND VERSION ON RIGHT  -->

	<br>
		
	<!-- LIST OF DOCUMENTS RELATED TO A DISTRIBUTION LIST  -->
		<%
			List documents = dl.getDocuments();
			if(!documents.isEmpty()){
	%>		
	

	
	<table style='width:100%;margin-top:1px' id = "docTable" >

	<tr class='header-row-portlet-section'>
	
		<td class='header-title-column-portlet-section-nogrey' style='text-align:center'>
				<spagobi:message key = "SBISet.ListDL.relatedDoc" />
		</td>
	
	</tr>
	</table>
	<table style='width:100%;margin-top:1px' id = "docTable" >
	<tr>
	  <td class='portlet-section-header' style='text-align:left'>

				<spagobi:message key = "SBISet.ListDL.columnDocName" />		
	</td>				
	<td class='portlet-section-header' style='text-align:left'>
				<spagobi:message key = "SBISet.ListDL.columnDocDescr" />			

	 </td>
	</tr>	
	
		
		<%
			Iterator it2 = documents.iterator();
			while(it2.hasNext()){
				
				BIObject bo = (BIObject)it2.next();
				String docName = bo.getName();
				String docDescr = bo.getDescription();
				if((docName==null) || (docName.equalsIgnoreCase("null"))  ) {
					docName = "";
				   }
				if((docDescr==null) || (docDescr.equalsIgnoreCase("null"))  ) {
					docDescr = "";
				   }
				
		 %>			
		 			<tr class='portlet-font'>
		 			<td class='portlet-section-body' style='vertical-align:left;text-align:left;'>
				    	<%=docName%>
				    	</td>
				   	<td class='portlet-section-body' style='vertical-align:left;text-align:left;'>	
					<%=docDescr %>				   				
				   	</td>		
				   	</tr>
	<% } %>
	
		<spagobi:error/>
								
		
	</table> 
	<% } else {%>
		  	 <div class='div_detail_form'>
				<span class='portlet-form-field-label'>	
					<spagobi:message key = "SBISet.ListDL.noDoc" />
				</span>
			</div>
	<% } %> <!-- CLOSE LIST OF DOCUMENTS RELATED TO A DISTRIBUTION LIST  -->
	
	
	</div>  

	
	<%@ include file="/jsp/commons/footer.jsp"%>
