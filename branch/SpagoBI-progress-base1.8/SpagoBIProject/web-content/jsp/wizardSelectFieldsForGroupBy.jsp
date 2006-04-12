<%@ page contentType="text/html; charset=ISO-8859-1"%>
<%@ page language="java" %>
<%@ page import="it.eng.spago.base.*, it.eng.qbe.utility.*,it.eng.qbe.javascript.*, it.eng.qbe.wizard.*"%>
<%@ page import="java.util.*"%>




<%@ include file="../jsp/qbe_base.jsp" %>


<%   
   
   ISingleDataMartWizardObject aWizardObject = (ISingleDataMartWizardObject)sessionContainer.getAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD);
   it.eng.qbe.model.DataMartModel dm = (it.eng.qbe.model.DataMartModel)sessionContainer.getAttribute("dataMartModel"); 
   
   dm.updateCurrentClassLoader();
%>

<% if (qbeMode.equalsIgnoreCase("WEB")){ %> 
<body>
<%}%>


<table class='header-table-portlet-section'>		
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' 
		    style='vertical-align:middle;padding-left:5px;'>
			<%= dm.getName() %> : <%=dm.getDescription() %> - <%=qbeMsg.getMessage(requestContainer, "QBE.Title.Grouping") %>
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<%@include file="../jsp/qbe_headers.jsp"%>
	</tr>
</table>


<%@include file="../jsp/testata.jsp" %>

<div class='div_background_no_img'>

<% if ((aWizardObject.getSelectClause() != null) && (aWizardObject.getSelectClause().getSelectFields().size() > 0)){ %>
		<table width="100%">  
			<tr>
			   			<td width="3%">
    						&nbsp;
	   					</td>
	   					<td width="47%">
    						&nbsp;
	   					</td>
	   					<td width="50%">
    						&nbsp;
	   					</td>
	   		</tr>  
		   <tr>
		   		<td >
		   		</td>
		   		
		  		<td width="47%" valign="top">
		  			<table width="100%">
		  		
		  			<tr>
		    		   <td colspan="2">
		    		   		 <span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer,"QBE.Grouping.ChooseFromSelectedFields") %></span>
		    		   </td>   		   				
		    		</tr>
		    		<tr>
						<td colspan="2">
							&nbsp;
						</td>
					</tr>
			    		   		
			    		   
			  			
			  		<%  java.util.Map oParams = new java.util.HashMap();
		  		  	oParams.clear();	
			  		 if (aWizardObject.getSelectClause() != null){ %>
				 						
			    		   			<% List l = aWizardObject.getSelectClause().getSelectFields();
			    		   			if (l != null){
			    		   				java.util.Iterator it = l.iterator();
			    		   				ISelectField aSelectField = null;
			    		   				String originalFieldName = "";
			    		   				String urlOrderBy = ""; 
			    		   				while (it.hasNext()){
			    		   					aSelectField = (ISelectField)it.next();
			    		   					originalFieldName = (String)aSelectField.getFieldNameWithoutOperators();
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","SELECT_FIELD_FOR_GROUPBY_ACTION");
			    		   					oParams.put("COMPLETE_FIELD_NAME",originalFieldName);
			    		   					urlOrderBy = qbeUrl.getUrl(request, oParams);
			    		   					//if no operators has applied
			    		   					if (originalFieldName.equalsIgnoreCase(aSelectField.getFieldName())){
			    		   				%>
			    		   				<tr>
			    		   					<td width="20%">
			    		   						&nbsp;
			    		   					</td>
			    		   					<td width="80%">
			    		   						<%-- <a href="<%=urlOrderBy %>"> <%=originalFieldName %></a>--%>
			    		   						<a href="<%=urlOrderBy %>"> <%=Utils.getLabelForQueryField(requestContainer,dm, aWizardObject,originalFieldName) %></a>
			    		   					</td>	
			    		   				</tr>
			    		   			<% } %>
			    		   			<%}//endwhile%>
			    		   		<%}//endif %>
			    		   	
			    		 <%}//endif %>
			    		 <tr>
			    		   <td colspan="2">
			    		   		 &nbsp;
			    		   </td>   		   				
			    		</tr>
			    	</table>
			    	</td>
			    	<td width="50%" valign="top">
		  			<table width="100%">
			    		 <tr>
			    		   <td colspan="4">
			    		   		<span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer,"QBE.Grouping.SelectedFields") %> </span>
			    		   </td>  		   				
			    		</tr>
			    		<tr>
							<td colspan="2">
								&nbsp;
							</td>
						</tr>
			    		<% if (aWizardObject.getGroupByClause() != null){ %>
				 						
			    		   			<% List l = aWizardObject.getGroupByClause().getGroupByFields();
			    		   			if (l != null){
			    		   				java.util.Iterator it = l.iterator();
			    		   				IOrderGroupByField aOrderByField = null;
			    		   				String originalFieldName = "";
			    		   				String urlDeleteOrderBy = "";
			    		   				String urlMoveUp ="";
			    		   				String urlMoveDown = "";
			    		   				while (it.hasNext()){
			    		   					aOrderByField = (IOrderGroupByField)it.next();
			    		   					originalFieldName = (String)aOrderByField.getFieldName();
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","DELETE_FIELD_FOR_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					
			    		   					urlDeleteOrderBy = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","MOVE_UP_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					urlMoveUp = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","MOVE_DOWN_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					urlMoveDown = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   				%>
			    		   				<tr>
			    		   					<td width="5%">
			    		   						<a href="<%=urlDeleteOrderBy %>">
			    		   						<img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/delete.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgDeleteFromGrouping") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgDeleteFromGrouping") %>" /></a>
			    		   					</td>
			    		   					<td  width="5%">
				    		   						<a href="<%=urlMoveUp %>"><img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/ArrowUp.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveUp") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveUp") %>"/></a>
				    		   				</td>
				    		   					
				    		   				<td width="5%">
				    		   						<a href="<%=urlMoveDown%>"><img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/ArrowDown.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveDown") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveDown") %>"/></a>
				    		   				</td>
			    		   					<td width="85%">
			    		   						 <%--<%=originalFieldName %> --%>
			    		   						<%=Utils.getLabelForQueryField(requestContainer,dm,aWizardObject, originalFieldName) %>
			    		   					</td>	
			    		   				</tr>
			    		   			<%}//endwhile%>
			    		   		<%}//endif %>
			    		 <%}//endif %>
			    		  <tr>
			    		   <td colspan="4">
			    		   		 &nbsp;
			    		   </td>   		   				
			    		</tr>
			    		 
			    		 
			    	</table>
			  		</td>
			  		</tr>
			 </table>
<%} else { %>
	   			<table width="100%">
	  			<tr>
			   			<td width="3%">
    						&nbsp;
	   					</td>
	   					<td width="97%">
    						&nbsp;
	   					</td>
	   			</tr>  
	  			<tr>
		  			<td></td>
	  				<td valign="top">
	  					<span class="qbeError"> <%=qbeMsg.getMessage(requestContainer, "QBE.Warning.SelectFieldBeforeGrouping") %></span>	
  					</td>
  				</tr>
  				<tr>
			   			<td>
    						&nbsp;
	   					</td>
	   			</tr>  
  				</table>
<%} %>


<%--

<table width="100%">
		<tr>
			<td width="100%">
				<TABLE WIDTH = "100%">
					<TR>
						<TD width="5">&nbsp;</TD>
						<TD width="90%" CLASS = "TESTATA">
							<%= dm.getName() %> : <%=dm.getDescription() %> - <%=qbeMsg.getMessage(requestContainer, "QBE.Title.Grouping") %>
						</TD>
						<%@include file="../jsp/qbe_headers.jsp"%>
					</TR>
					<TR>
						<TD>
						</TD>
						<TD colspan="2">
							<TABLE class=LAYMENU width='100%' cellpadding='1' border='0' cellspacing='1'>
								<TR height='6'>
									<TD></TD>
								</TR>
								<%@include file="../jsp/testata.jsp" %>
							</TABLE>
						</TD>
					</TR>
				</TABLE>
			</td>
		</tr> 
<% if ((aWizardObject.getSelectClause() != null) && (aWizardObject.getSelectClause().getSelectFields().size() > 0)){ %>
	<tr>

	  <td width="100%">
		<table width="100%">  
			<tr>
			   			<td width="3%">
    						&nbsp;
	   					</td>
	   					<td width="47%">
    						&nbsp;
	   					</td>
	   					<td width="50%">
    						&nbsp;
	   					</td>
	   		</tr>  
		   <tr>
		   		<td >
		   		</td>
		   		
		  		<td width="47%" valign="top">
		  			<table width="100%">
		  		
		  			<tr>
		    		   <td colspan="2">
		    		   		 <span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer,"QBE.Grouping.ChooseFromSelectedFields") %></span>
		    		   </td>   		   				
		    		</tr>
		    		<tr>
						<td colspan="2">
							&nbsp;
						</td>
					</tr>
			    		   		
			    		   
			  			
			  		<%  java.util.Map oParams = new java.util.HashMap();
		  		  	oParams.clear();	
			  		 if (aWizardObject.getSelectClause() != null){ %>
				 						
			    		   			<% List l = aWizardObject.getSelectClause().getSelectFields();
			    		   			if (l != null){
			    		   				java.util.Iterator it = l.iterator();
			    		   				ISelectField aSelectField = null;
			    		   				String originalFieldName = "";
			    		   				String urlOrderBy = ""; 
			    		   				while (it.hasNext()){
			    		   					aSelectField = (ISelectField)it.next();
			    		   					originalFieldName = (String)aSelectField.getFieldNameWithoutOperators();
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","SELECT_FIELD_FOR_GROUPBY_ACTION");
			    		   					oParams.put("COMPLETE_FIELD_NAME",originalFieldName);
			    		   					urlOrderBy = qbeUrl.getUrl(request, oParams);
			    		   					//if no operators has applied
			    		   					if (originalFieldName.equalsIgnoreCase(aSelectField.getFieldName())){
			    		   				%>
			    		   				<tr>
			    		   					<td width="20%">
			    		   						&nbsp;
			    		   					</td>
			    		   					<td width="80%">
			    		   						<a href="<%=urlOrderBy %>"> <%=Utils.getLabelForQueryField(requestContainer,dm, aWizardObject,originalFieldName) %></a>
			    		   					</td>	
			    		   				</tr>
			    		   			<% } %>
			    		   			<%}//endwhile%>
			    		   		<%}//endif %>
			    		   	
			    		 <%}//endif %>
			    		 <tr>
			    		   <td colspan="2">
			    		   		 &nbsp;
			    		   </td>   		   				
			    		</tr>
			    	</table>
			    	</td>
			    	<td width="50%" valign="top">
		  			<table width="100%">
			    		 <tr>
			    		   <td colspan="4">
			    		   		<span class="qbeTitle"><%=qbeMsg.getMessage(requestContainer,"QBE.Grouping.SelectedFields") %> </span>
			    		   </td>  		   				
			    		</tr>
			    		<tr>
							<td colspan="2">
								&nbsp;
							</td>
						</tr>
			    		<% if (aWizardObject.getGroupByClause() != null){ %>
				 						
			    		   			<% List l = aWizardObject.getGroupByClause().getGroupByFields();
			    		   			if (l != null){
			    		   				java.util.Iterator it = l.iterator();
			    		   				IOrderGroupByField aOrderByField = null;
			    		   				String originalFieldName = "";
			    		   				String urlDeleteOrderBy = "";
			    		   				String urlMoveUp ="";
			    		   				String urlMoveDown = "";
			    		   				while (it.hasNext()){
			    		   					aOrderByField = (IOrderGroupByField)it.next();
			    		   					originalFieldName = (String)aOrderByField.getFieldName();
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","DELETE_FIELD_FOR_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					
			    		   					urlDeleteOrderBy = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","MOVE_UP_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					urlMoveUp = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   					oParams.clear();
			    		   					oParams.put("ACTION_NAME","MOVE_DOWN_GROUPBY_ACTION");
			    		   					oParams.put("FIELD_ID",aOrderByField.getId());
			    		   					urlMoveDown = qbeUrl.getUrl(request, oParams);
			    		   					
			    		   				%>
			    		   				<tr>
			    		   					<td width="5%">
			    		   						<a href="<%=urlDeleteOrderBy %>">
			    		   						<img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/delete.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgDeleteFromGrouping") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgDeleteFromGrouping") %>" /></a>
			    		   					</td>
			    		   					<td  width="5%">
				    		   						<a href="<%=urlMoveUp %>"><img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/ArrowUp.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveUp") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveUp") %>"/></a>
				    		   				</td>
				    		   					
				    		   				<td width="5%">
				    		   						<a href="<%=urlMoveDown%>"><img src="<%=qbeUrl.conformStaticResourceLink(request,"../img/ArrowDown.gif")%>" alt="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveDown") %>" title="<%= qbeMsg.getMessage(requestContainer, "QBE.alt.imgMoveDown") %>"/></a>
				    		   				</td>
			    		   					<td width="85%">
			    		   						<%=Utils.getLabelForQueryField(requestContainer,dm,aWizardObject, originalFieldName) %>
			    		   					</td>	
			    		   				</tr>
			    		   			<%}//endwhile%>
			    		   		<%}//endif %>
			    		 <%}//endif %>
			    		  <tr>
			    		   <td colspan="4">
			    		   		 &nbsp;
			    		   </td>   		   				
			    		</tr>
			    		 
			    		 
			    	</table>
			  		</td>
			  		</tr>
			 </table>
		</td>
	</tr>
<%} else { %>
  <tr>
   			<td width="100%">
	   			<table width="100%">
	  			<tr>
			   			<td width="3%">
    						&nbsp;
	   					</td>
	   					<td width="97%">
    						&nbsp;
	   					</td>
	   			</tr>  
	  			<tr>
		  			<td></td>
	  				<td valign="top">
	  					<span class="qbeError"> <%=qbeMsg.getMessage(requestContainer, "QBE.Warning.SelectFieldBeforeGrouping") %></span>	
  					</td>
  				</tr>
  				<tr>
			   			<td>
    						&nbsp;
	   					</td>
	   			</tr>  
  				</table>
  			</td>
  </tr>
<%} %>
</table>

--%>


 
<% if (qbeMode.equalsIgnoreCase("WEB")){ %> 
</body>
<%}%>
<div id="divSpanCurrent">
	<span id="currentScreen">DIV_FIELD_GROUP_BY</span>
</div>
<%@include file="../jsp/qbefooter.jsp" %>


</div>
