<%@ include file="/jsp/portlet_base.jsp"%>

<%@ page import="it.eng.spagobi.bo.Parameter,
				 it.eng.spagobi.bo.ParameterUse,
				 it.eng.spagobi.bo.Domain,
				 it.eng.spagobi.bo.ModalitiesValue,
				 it.eng.spagobi.bo.Check,
				 it.eng.spagobi.bo.Role,
				 it.eng.spagobi.bo.dao.DAOFactory,
				 it.eng.spagobi.bo.dao.IParameterUseDAO,
                 it.eng.spagobi.bo.dao.IDomainDAO,
       			 it.eng.spagobi.bo.dao.ICheckDAO,
       			 it.eng.spagobi.bo.dao.IRoleDAO,
                 it.eng.spagobi.bo.dao.IModalitiesValueDAO,
                 it.eng.spagobi.constants.ObjectsTreeConstants,
                 it.eng.spagobi.constants.AdmintoolsConstants,
                 it.eng.spago.navigation.LightNavigationManager,
				 javax.portlet.PortletURL,
                 java.util.ArrayList,
                 java.util.List,
                 java.util.Iterator" %>


<%
	SourceBean moduleResponse = (SourceBean) aServiceResponse.getAttribute("DetailParameterModule"); 
	Parameter parameter = (Parameter) moduleResponse.getAttribute("parametersObj");
	String modality = (String) moduleResponse.getAttribute("modality");
	ArrayList list = (ArrayList) moduleResponse.getAttribute("listObj");

	PortletURL formUrl = renderResponse.createActionURL();
	formUrl.setParameter("PAGE", "detailParameterPage");
	formUrl.setParameter("MESSAGEDET", modality);
	formUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
   
	PortletURL backUrl = renderResponse.createActionURL();
	backUrl.setParameter("PAGE", "detailParameterPage");
	backUrl.setParameter(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	backUrl.setParameter("MESSAGEDET", "EXIT_FROM_DETAIL"); 
%>


<form method='POST' action='<%= formUrl.toString() %>' id ='parametersForm' name='parametersForm'>

<table class='header-table-portlet-section'>		
	<tr class='header-row-portlet-section'>
		<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBIDev.param.title" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href="javascript:document.getElementById('parametersForm').submit()"> 
      			<img class='header-button-image-portlet-section' title='<spagobi:message key = "SBIDev.param.saveButt" />' src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/save.png")%>' alt='<spagobi:message key = "SBIDev.param.saveButt" />' /> 
			</a>
		</td>
		<td class='header-button-column-portlet-section'>
			<input type='image' name='saveAndGoBack' value='true' class='header-button-image-portlet-section'
				src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/saveAndGoBack.png") %>'
      				title='<spagobi:message key = "SBIDev.param.saveAndGoBackButt" />' alt='<spagobi:message key = "SBIDev.param.saveAndGoBackButt" />'
			/> 
		</td>
		<td class='header-button-column-portlet-section'>
			<% if(modality.equalsIgnoreCase(ObjectsTreeConstants.DETAIL_MOD)) {%>
				<a href='javascript:saveAndGoBackConfirm("<spagobi:message key = "SBIDev.param.saveAndGoBackConfirm" />","<%=backUrl.toString()%>")'> 
			<% } else { %>
				<a href='<%=backUrl.toString()%>'>
			<% } %>
      				<img class='header-button-image-portlet-section' 
				title='<spagobi:message key = "SBIDev.param.backButt" />'
				src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/back.png")%>' 
				alt='<spagobi:message key = "SBIDev.param.backButt"/>' />
			</a>
		</td>
	</tr>
</table>




<div class='div_background_no_img' >





<input type='hidden' value='<%= parameter.getId() %>' name='id' />






<div class="div_detail_area_forms">
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.labelField"/>
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
               id="label" name="label" size="50" 
               value="<%=parameter.getLabel()%>" maxlength="20">
        &nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.nameField"/>
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   id="name" name="name" size="50" value="<%=parameter.getName()%>" maxlength="40">
        &nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.descriptionField"/>
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   id="description" name="description" size="50" 
 			   value="<%=(parameter.getDescription() != null ? parameter.getDescription() : "")%>" 
               maxlength="160">
	</div>
    <% String curr_value = parameter.getTypeId().toString();%>  
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.modalityField"/>
		</span>
	</div>
	<div class='div_detail_form'>
		<% for (int i=0	; i<list.size(); i++){
      	       Domain domain = new Domain();
      	       domain = (Domain)list.get(i);
		%>
      	<input type="radio" id="modality" name="modality" 
			   onclick="radioButtonClicked(this.value)" 
	           value="<%= (String)domain.getValueCd()+","+ (domain.getValueId()).toString()%>" <% if(curr_value.equals(domain.getValueId().toString())) { out.println(" checked='checked' "); } %>>
				<%= domain.getValueName()%>
		</input>
   	    <% } %>
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.lengthField"/>
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
		<input class='portlet-form-input-field' type="text" 
			   id="length" name="length" size="5" value="<%=parameter.getLength()%>" maxlength="2">
	</div>
	<div class='div_detail_label' style='display:none;'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.param.maskField"/>
		</span>
	</div>
	<div class='div_detail_form' style='display:none;'>
		<input class='portlet-form-input-field' type="text" 
			   id="mask" name="mask" size="50" 
			   value="<%=(parameter.getMask() != null ? parameter.getMask() : "")%>" maxlength="20">
	</div>
</div>








<spagobi:error/>






<% if (modality.equalsIgnoreCase(ObjectsTreeConstants.DETAIL_INS)) { %>
</form>
<% } else if (modality.equalsIgnoreCase(ObjectsTreeConstants.DETAIL_MOD)) { 

   ParameterUse paruse = (ParameterUse) moduleResponse.getAttribute("modalitiesObj");

   IRoleDAO rDao = DAOFactory.getRoleDAO();
   
   List roles = null;
   if (paruse.getUseID().intValue() != -1) 
	   roles = rDao.loadAllFreeRolesForDetail(paruse.getUseID());
   else roles = rDao.loadAllFreeRolesForInsert(parameter.getId());

   String[][] sysRoles = new String[roles.size()][3];
   for(int i=0; i<roles.size(); i++) {
    	Role role = (Role)roles.get(i);
    	sysRoles[i][0] = role.getId().toString();
    	sysRoles[i][1] = role.getName();
    	sysRoles[i][2] = role.getDescription();
    }    
   
   // get all possible roles
   List allRoles = null;
   allRoles = rDao.loadAllRoles();
   String[][] allSysRoles = new String[allRoles.size()][3];
   for(int i=0; i<allRoles.size(); i++) {
    	Role role = (Role)allRoles.get(i);
    	allSysRoles[i][0] = role.getId().toString();
    	allSysRoles[i][1] = role.getName();
    	allSysRoles[i][2] = role.getDescription();
   } 
   
   boolean hasRolesFreeForInsert = true;
   List freeRolesForInsert = rDao.loadAllFreeRolesForInsert(parameter.getId());
   if (freeRolesForInsert.size() == 0) hasRolesFreeForInsert = false;
   
   
   // get system checks
   ICheckDAO checkdao = DAOFactory.getChecksDAO();
   List checks = checkdao.loadAllChecks();
   String[][] sysChecks = new String[checks.size()][3];
   for(int i=0; i<checks.size(); i++) {
    	Check check = (Check)checks.get(i);
    	sysChecks[i][0]= check.getCheckId().toString();
    	sysChecks[i][1] = check.getName();
    	sysChecks[i][2] = check.getDescription();
    } 
    
   // list of modalityValues
   IModalitiesValueDAO aModalitiesValueDAO = DAOFactory.getModalitiesValueDAO();
   List allModalitiesValues = aModalitiesValueDAO.loadAllModalitiesValueOrderByCode();  
   
   //IDomainDAO domaindao = DAOFactory.getDomainDAO() ;
   //List typeLov = domaindao.loadListDomainsByType("INPUT_TYPE");

%>

<input type='hidden' id='saveParameterUse' value='' name='' />
<input type='hidden' id='selected_paruse_id' name='' value=''/>
<input type='hidden' id='deleteParameterUse' name='' value=''/>
<input type='hidden' id='saveAndGoBack' name='' value='' >
<input type='hidden' value='<%= (paruse != null ? String.valueOf(paruse.getUseID()) : "") %>' name='useId' />


<div style='width:100%;visibility:visible;' class='UITabs' 
     id='tabPanelWithJavascript' name='tabPanelWithJavascript'>
	<div class="first-tab-level" style="background-color:#f8f8f8">
		<div style="overflow: hidden; width:  100%">					

<%
	List paruses = (List) moduleResponse.getAttribute("parusesList");
	String paruse_idStr = (String) moduleResponse.getAttribute("selected_paruse_id");
	Integer paruse_idInt = new Integer(paruse_idStr);
	int paruse_id = Integer.parseInt(paruse_idStr);
	String linkClass = "tab";
	boolean foundSelectedParuseId = false;
	for (int i = 0; i < paruses.size(); i++){
		ParameterUse aParameterUse = (ParameterUse) paruses.get(i);
		if (aParameterUse.getUseID().equals(paruse_idInt)) {
			linkClass = "tab selected";
			foundSelectedParuseId = true;
		}
		else linkClass = "tab";
%>

			<div class='<%= linkClass%>'>
				<a href='javascript:changeParameterUse("<%= aParameterUse.getUseID().toString() %>", "<spagobi:message key = "SBIDev.param.saveAndChangeParameterUseConfirm" />")' 
					style="color:black;"> 
						<%= aParameterUse.getLabel()%>
				</a>
			</div>

<%}
	if(paruse_id < 0 || !foundSelectedParuseId) linkClass = "tab selected";
		else linkClass = "tab";
	if (hasRolesFreeForInsert) {
%>

			<div class='<%= linkClass%>'>
				<a href='javascript:changeParameterUse("-1", "<spagobi:message key = "SBIDev.param.saveAndChangeParameterUseConfirm" />")' 
				   style="color:black;"> 
					<spagobi:message key = "SBIDec.param.newParameterUse" />
				</a>
			</div>


<% } %>

		</div>
	</div>
</div>










<table class='header-sub-table-portlet-section'>		
	<tr class='header-sub-row-portlet-section'>
		<% if (paruse_id != -1) { %>
		<td class='header-sub-title-column-portlet-section'>
			<spagobi:message key = "SBIDev.paramUse.title" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section'>
			<a href='javascript:deleteParameterUseConfirm("<spagobi:message key="SBIDev.param.deleteParameterUseConfirm"/>")'>
				<img 	src= '<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/erase.gif") %>'
					title='<spagobi:message key = "SBIDev.param.eraseParameterUseButt" />' alt='<spagobi:message key = "SBIDev.param.eraseParameterUseButt" />'
				/>
			</a>
		</td>
		<% } else { %>
			<td class='header-sub-title-column-portlet-section-no-buttons'>
				<spagobi:message key = "SBIDev.paramUse.title" />
			</td>
		<% } %>
	</tr>
</table>








<div class="div_detail_area_sub_forms">
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.paramUse.labelField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   id="paruseLabel" name="paruseLabel" size="50" value="<%=paruse.getLabel()%>" maxlength="20">
		&nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.paramUse.nameField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   id="paruseName" name="paruseName" size="50" value="<%=paruse.getName()%>" maxlength="40">
        &nbsp;*
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.paramUse.descriptionField" />
		</span>
	</div>
	<div class='div_detail_form'>
		<input class='portlet-form-input-field' type="text" 
			   id="paruseDescription" name="paruseDescription" size="50" 
			   value="<%=paruse.getDescription() == null ? "" : paruse.getDescription()%>" maxlength="160">
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.ListParamUse.parInfo.Name"/>
		</span>
	</div>
	<div class='div_detail_form' id = 'divForm' >
	<% String lovName = null;
  	   Integer idLov = null;
  	   idLov = paruse.getIdLov();
  	   Integer idLovInit = new Integer(-1);
  	   if(idLov!= null){
  	   if(!idLov.toString().equals(idLovInit.toString())) {
  		   	ModalitiesValue modVal  = DAOFactory.getModalitiesValueDAO().loadModalitiesValueByID(idLov);
  			lovName = modVal.getName();
  	   }
  	   }
  	   
  	%>
  		<% 
    	boolean isManualInput = false;
    	boolean isLov = false;
    	int manual = 0;
    	if(paruse.getManualInput()!= null){
    	manual = paruse.getManualInput().intValue();}
    	if(manual > 0) { isManualInput = true; }
    	else {isLov = true;}
    %> 
  		<input type="radio" name="valueSelection"  id = "valueSelection" value="lov" <% if(isLov) { out.println(" checked='checked' "); } %> onClick = "lovControl()" />
  	
		<input 	class='portlet-form-input-field' type="text" id="paruseLovName" 
		   		name="paruseLovName" size="40" 
				value="<%= lovName != null ? lovName : "" %>" maxlength="100" readonly <%if(!isLov) {out.println("disabled = 'disabled'");} %>>
  		
  		<input 	type='hidden' id='paruseLovId' value='<%=(idLov != null?(idLov.intValue() != -1 ? idLov.toString() : ""):"") %>' 
           		name='paruseLovId' />
  		<% 	PortletURL lovLookupURL = renderResponse.createActionURL();
  	   		lovLookupURL.setParameter("PAGE", "lovLookupPage"); 
  		%>
  		&nbsp;*&nbsp;
    	<input 	type='image' name="loadLovLookup"  id="loadLovLookup" value="LovLookup" style='<%if(isLov) {out.println("display:inline;");} else {out.println("display:none;");} %>'
		   		src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + "/img/detail.gif")%>' 
		   		title='Lov Lookup' alt='Lov Lookup'/>
	</div>
	<div class='div_detail_label'>
		<span class='portlet-form-field-label'>
			<spagobi:message key = "SBIDev.paramUse.manInputCheck" />
		</span>
	</div>
	<div class='div_detail_form'>
		
		<input type="radio" name="valueSelection" id = "valueSelection" value="man_in" <% if(isManualInput) { out.println(" checked='checked' "); } %> onClick = "lovControl()" ></input>
    	

	</div>
</div>


<table style="margin-bottom:5px;width:100%;">
	<tr>
		<td colspan="3" align="left" class='portlet-section-header'>
  	   		<spagobi:message key = "SBIDev.paramUse.valTab3" />
  	   	</td>
  	</tr>
  	<% 
  		List roleAssociated = paruse.getAssociatedRoles();
  	    int count = 1;
  	    for(int i=0; i<allSysRoles.length; i++) { 
           	if(count==1) out.print("<tr class='portlet-font'>");
            boolean isRole = false;
            boolean isFree = false;
            String roleId = allSysRoles[i][0].toString();
            if (roleAssociated != null){
              	Role tmpRoleAssociated = null;
              	for (int j=0; j<roleAssociated.size(); j++) {
               		tmpRoleAssociated = (Role)roleAssociated.get(j);
               		if(roleId.equals(tmpRoleAssociated.getId().toString())) 
               		isRole = true; 
            	}
            }		    
  	    	for (int k=0; k<sysRoles.length;k++){
  	    		String id = sysRoles[k][0].toString();
  	    		if (id.equals(roleId)){
  	    			isFree = true;
  	    		}
  	    	}
  	    	out.print("<td class='portlet-section-body'>");
  	    	out.print("   <input type='checkbox' name='paruseExtRoleId' value='"+roleId+"' ");
  	    	if(isRole) {
  	    		out.print(" checked='checked' ");
  	    	}
  	    	if(!isFree && !isRole) {
  	    		out.print(" disabled='disabled' ");
  	    	}
  	    	out.print("></input>" + allSysRoles[i][1]);
  	    	out.print("</td>");
  	    	if((count < 3) && (i==(allSysRoles.length-1))){
  	    		int numcol = 3-count;
  	    		int num;
  	    		for (num = 0; num <numcol; num++){
  	    		  	out.print("<td class='portlet-section-body'>");
  	    	    	out.print("</td>");
  	    		}
				out.print("</tr>");
  	    	} 
  	    	if( (count==3) || (i==(allSysRoles.length-1)) ) {
  	    		out.print("</tr>");
  	    		count = 1;
  	    	} else {
  	    		count ++;
  	    	}
  	 	}
  	  %>
 </table> 
  	    	








<table style="width:100%;">
	<tr>
  		<td colspan="3" align="left" class='portlet-section-header'>
  	    	<spagobi:message key = "SBIDev.paramUse.valTab2" />
  	    </td>
  	</tr>
  	<% 
  	    		    List listChecks = paruse.getAssociatedChecks();
  	    		    Check tmpCheck = null;
  	    		    int counter = 1;
  	    		    for(int i=0; i<sysChecks.length; i++) { 
                        if(counter==1) {
                          out.print("<tr class='portlet-font'>");
                        }
                        boolean isCheck = false;
                        String checkId = sysChecks[i][0].toString();
                         //the list checks is not loaded at the moment
                        if (listChecks != null){
                        	for(int j=0; j<listChecks.size(); j++) {
                          		tmpCheck = (Check)listChecks.get(j);
                   		  		if(checkId.equals(tmpCheck.getCheckId().toString())) 
                   					isCheck = true; 
                   			}
                   		}	    
  	    		 		out.print("<td class='portlet-section-body'>");
  	    		 		out.print("   <input type='checkbox' name='paruseCheckId' value='"+checkId+"' ");
  	    		 		if(isCheck) {
  	    		 			out.print(" checked='checked' ");
  	    		 		}
  	    		 		out.print(">" + sysChecks[i][1] + "</input>" );
  	    		 		out.print("</td>");
  	    		 		if((counter < 3) && (i==(sysChecks.length-1))){
  	    		 		  int numcol = 3-counter;
  	    		 		  int num;
  	    		 		  for (num = 0; num <numcol; num++){
  	    		 		  out.print("<td class='portlet-section-body'>");
  	    		 		  out.print("</td>");  
  	    		 		  }out.print("</tr>");
  	    		 		  } 
  	    		 		
  	    		 		if( (counter==3) || (i==(sysChecks.length-1)) ) {
  	    		 		 	out.print("</tr>");
  	    		 		 	counter = 1;
  	    		 		} else {
  	    		 		 	counter ++;
  	    		 		 }
  	    		  }
	%>
</table>   	









<script>

<%
Parameter initialParameter = (Parameter) aSessionContainer.getAttribute("initial_Parameter");
if (initialParameter == null) initialParameter = parameter;
ParameterUse initialParuse = (ParameterUse) aSessionContainer.getAttribute("initial_ParameterUse");
if (initialParuse == null) initialParuse = paruse;
%>

function changeParameterUse (paruseId, message) {

	var parameterUseFormModified = 'false';
	
	document.getElementById('selected_paruse_id').name = 'selected_paruse_id';
	document.getElementById('selected_paruse_id').value = paruseId;
	
	var paruseLabel = document.getElementById('paruseLabel').value;
	var paruseName = document.getElementById('paruseName').value;
	var paruseDescription = document.getElementById('paruseDescription').value;
	var paruseLovId = document.getElementById('paruseLovId').value;
	
	if ((paruseLabel != '<%=initialParuse.getLabel()%>')
		|| (paruseName != '<%=initialParuse.getName()%>')
		|| (paruseDescription != '<%=initialParuse.getDescription()%>') 
		|| (paruseLovId != '<%=initialParuse.getIdLov().intValue() != -1 ? initialParuse.getIdLov().toString() : ""%>') )
	{
		parameterUseFormModified = 'true';
	}
	
	if (parameterUseFormModified == 'true') 
	{
		if (confirm(message))
		{
			document.getElementById('saveParameterUse').name = 'saveParameterUse';
			document.getElementById('saveParameterUse').value= 'yes';
		}
		else
		{
			document.getElementById('saveParameterUse').name = 'saveParameterUse';
			document.getElementById('saveParameterUse').value= 'no';
		}
	}
	
	document.getElementById('parametersForm').submit();
}

var modality = '<%=initialParameter.getType() + "," + initialParameter.getTypeId()%>';

function radioButtonClicked(mod) {
	modality = mod;
}

function saveAndGoBackConfirm(message, url){
		
		var label = document.getElementById('label').value;
		var name = document.getElementById('name').value;
		var description = document.getElementById('description').value;

		if ((label != '<%=initialParameter.getLabel()%>')
			|| (name != '<%=initialParameter.getName()%>')
			|| (description != '<%=initialParameter.getDescription()%>')
			|| (modality != '<%=initialParameter.getType() + "," + initialParameter.getTypeId()%>')) {
			
			if (confirm(message)) {
				document.getElementById('saveAndGoBack').name = 'saveAndGoBack';
				document.getElementById('saveAndGoBack').value= 'true';
				document.getElementById('parametersForm').submit();
			} else {
				location.href = url;
			}
			return;
		}
	
		var paruseLabel = document.getElementById('paruseLabel').value;
		var paruseName = document.getElementById('paruseName').value;
		var paruseDescription = document.getElementById('paruseDescription').value;
		var paruseLovId = document.getElementById('paruseLovId').value;
		
		var initialRoles = new Array();
		
		<%
		List initialRoles = initialParuse.getAssociatedRoles();
		Iterator initialRolesIt = initialRoles.iterator();
		int c = 0;
		while (initialRolesIt.hasNext()) {				
			Role aRole = (Role) initialRolesIt.next();
			out.print("initialRoles["+c+"]="+aRole.getId().toString()+";\n");
			c++;
		}
		%>
		
		paruseExtRoleId=document.forms[0].paruseExtRoleId;
		var roles = new Array();
		var count = 0;
		for (i=0 ; i < paruseExtRoleId.length; i++) {
			if (paruseExtRoleId[i].checked) {
				roles[count]=paruseExtRoleId[i].value;
				count++;
			}
		}
		
		var rolesChanged = arraysChanged(roles, initialRoles);
		
		var initialChecks = new Array();
		
		<%
		List initialChecks = initialParuse.getAssociatedChecks();
		Iterator initialChecksIt = initialChecks.iterator();
		c = 0;
		while (initialChecksIt.hasNext()) {
			Check aCheck = (Check) initialChecksIt.next();
			out.print("initialChecks["+c+"]="+aCheck.getCheckId().toString()+";\n");
			c++;
		}
		%>
		
		paruseCheckId=document.forms[0].paruseCheckId;
		var checks = new Array();
		count = 0;
		for (i=0 ; i < paruseCheckId.length; i++) {
			if (paruseCheckId[i].checked) {
				checks[count]=paruseCheckId[i].value;
				count++;
			}
		}
		
		var checksChanged = arraysChanged(checks, initialChecks);
		
		if ((paruseLabel != '<%=initialParuse.getLabel()%>')
			|| (paruseName != '<%=initialParuse.getName()%>')
			|| (paruseDescription != '<%=initialParuse.getDescription()%>') 
			|| (paruseLovId != '<%= initialParuse.getIdLov().intValue() != -1 ? initialParuse.getIdLov().toString() : "" %>')
			|| rolesChanged
			|| checksChanged) {
			
			if (confirm(message)) {
				document.getElementById('saveAndGoBack').name = 'saveAndGoBack';
				document.getElementById('saveAndGoBack').value= 'true';
				document.getElementById('parametersForm').submit();
			} else {
				location.href = url;
			}
			return;
		}

		location.href = url;
}

function arraysChanged(array1, array2) {
	if (array1.length != array2.length) return true;
	array1.sort();
	array2.sort();
	for (x in array1) {
		if (array1[x] != array2[x]) return true;
	}
	return false;
}

function deleteParameterUseConfirm (message) {
	if (confirm(message)) {
		document.getElementById('deleteParameterUse').name = 'deleteParameterUse';
		document.getElementById('deleteParameterUse').value = '<%= paruse.getUseID() %>';
        	document.getElementById('parametersForm').submit();
    	}
}

function lovControl(){
var var1 = document.getElementById('loadLovLookup');
var var2 = document.getElementById('paruseLovName');
if(var1.style.display != 'inline'){
   var1.style.display = 'inline';
   var2.disabled = false;
 }
 else {
 var1.style.display = 'none';
 var2.disabled = true;
 }
 }
 
 

</script>


</form>

<% } %>
