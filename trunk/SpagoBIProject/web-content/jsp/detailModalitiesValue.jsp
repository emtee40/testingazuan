<%@ include file="/jsp/portlet_base.jsp"%>

<%@ page import="it.eng.spagobi.bo.ModalitiesValue,
                 it.eng.spagobi.bo.Domain,
                 it.eng.spagobi.bo.lov.QueryDetail,
                 it.eng.spagobi.bo.lov.ScriptDetail,
                 it.eng.spagobi.bo.lov.JavaClassDetail,
                 it.eng.spagobi.bo.lov.FixedListDetail,
                 it.eng.spagobi.bo.lov.FixedListItemDetail,
		 		 it.eng.spagobi.bo.ParameterUse,
		 		 it.eng.spagobi.bo.dao.DAOFactory,
                 java.util.Set,
                 java.util.HashMap,
                 java.util.List,
                 java.util.Iterator,
                 java.util.ArrayList,
                 java.util.StringTokenizer,
                 it.eng.spagobi.constants.SpagoBIConstants,
                 it.eng.spago.navigation.LightNavigationManager,
                 it.eng.spagobi.managers.LovManager,
                 java.util.Map" %>

<%
	SourceBean moduleResponse = (SourceBean)aServiceResponse.getAttribute("DetailModalitiesValueModule"); 
	List nameAttrs = (List) moduleResponse.getAttribute(SpagoBIConstants.PROFILE_ATTRS);
	ModalitiesValue modVal = (ModalitiesValue)moduleResponse.getAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
	String modality = (String)moduleResponse.getAttribute(SpagoBIConstants.MODALITY);
	ArrayList list = (ArrayList)moduleResponse.getAttribute(SpagoBIConstants.LIST_INPUT_TYPE); 
	Iterator iterAttrs = null;
	
	Map formUrlPars = new HashMap();
	formUrlPars.put("PAGE", "detailModalitiesValuePage");
	formUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String formUrl = urlBuilder.getUrl(request, formUrlPars);
	
    Map backUrlPars = new HashMap();
    backUrlPars.put("PAGE", "detailModalitiesValuePage");
    backUrlPars.put("MESSAGEDET", "EXIT_FROM_DETAIL");
    backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
    String backUrl = urlBuilder.getUrl(request, backUrlPars);
    	
	String queryDisplay = "none";
	String scriptDisplay = "none";
	String lovDisplay = "none";
	String javaClassDisplay = "none";
	
	QueryDetail query = new QueryDetail();
	if (modVal != null && modVal.getITypeCd().equalsIgnoreCase("QUERY") ) {
		queryDisplay = "inline";
		String lovProvider = modVal.getLovProvider();
		if (lovProvider != null  &&  !lovProvider.equals("")){
		  	query = QueryDetail.fromXML(lovProvider);
		}
	}
	
	ScriptDetail scriptDet = new ScriptDetail();
	if (modVal != null && modVal.getITypeCd().equalsIgnoreCase("SCRIPT") ) {
		scriptDisplay = "inline";
		String lovProvider = modVal.getLovProvider();
	  	if (lovProvider != null  &&  !lovProvider.equals("")){
	  		scriptDet = ScriptDetail.fromXML(lovProvider);
	  	}
	}
	
	JavaClassDetail javaClassDetail = new JavaClassDetail();
	if (modVal != null && modVal.getITypeCd().equalsIgnoreCase("JAVA_CLASS") ) {
		javaClassDisplay = "inline";
		String lovProvider = modVal.getLovProvider();
	  	if (lovProvider != null  &&  !lovProvider.equals("")){
	  		javaClassDetail = JavaClassDetail.fromXML(lovProvider);
	  	}
	}
	
	FixedListDetail fixedListDetail = new FixedListDetail();
	if (modVal != null && modVal.getITypeCd().equalsIgnoreCase("FIX_LOV") ) {
		lovDisplay = "inline";
		String lovProvider = modVal.getLovProvider();
	  	if (lovProvider != null  &&  !lovProvider.equals("")){
	  		fixedListDetail = FixedListDetail.fromXML(lovProvider);
	  	}
	}

%>
<script type="text/javascript">

	<%
		String lovProviderModified = (String)aSessionContainer.getAttribute(SpagoBIConstants.LOV_MODIFIED);
		if (lovProviderModified != null && !lovProviderModified.trim().equals("")) {
	%>
		var lovProviderModified = <%=lovProviderModified%>;
	<%
		} else {
	%>
		var lovProviderModified = false;
	<%
		}
	%>

    

	function setLovProviderModified(newValue) {
	    <%if(modality.equals(SpagoBIConstants.DETAIL_MOD)) { %>
		lovProviderModified = newValue;
		<%}%>
	}

	function showWizard(){
		var wizard = document.getElementById("input_type").value
		if (wizard.match("QUERY") != null) {
			document.getElementById("queryWizard").style.display = "inline"
			document.getElementById("scriptWizard").style.display = "none"
			document.getElementById("lovWizard").style.display = "none"
			document.getElementById("javaClassWizard").style.display = "none"
			document.getElementById("testButton").style.visibility = "visible"
			document.getElementById("testButtonImage").disabled = false
		}
		if (wizard.match("SCRIPT") != null) {
			document.getElementById("queryWizard").style.display = "none"
			document.getElementById("scriptWizard").style.display = "inline"
			document.getElementById("lovWizard").style.display = "none"
			document.getElementById("javaClassWizard").style.display = "none"
			document.getElementById("testButton").style.visibility = "visible"
			document.getElementById("testButtonImage").disabled = false
		}
		if (wizard.match("FIX_LOV") != null) {
			document.getElementById("queryWizard").style.display = "none"
			document.getElementById("scriptWizard").style.display = "none"
			document.getElementById("lovWizard").style.display = "inline"
			document.getElementById("javaClassWizard").style.display = "none"
			document.getElementById("testButtonImage").disabled = false
		}
		if (wizard.match("JAVA_CLASS") != null) {
			document.getElementById("queryWizard").style.display = "none"
			document.getElementById("scriptWizard").style.display = "none"
			document.getElementById("lovWizard").style.display = "none"
			document.getElementById("javaClassWizard").style.display = "inline"
			document.getElementById("testButton").style.visibility = "visible"
			document.getElementById("testButtonImage").disabled = false
		}
	}



    <%
	    // get the labels of all documents related to the lov
		List docLabels = LovManager.getLabelsOfDocumentsWhichUseLov(modVal);
		String confirmMessage = msgBuilder.getMessage(aRequestContainer, "SBIDev.predLov.saveWithoutTest", "messages");
		confirmMessage += ". ";
		if (docLabels.size() > 0) {
			String documentsStr = docLabels.toString();
			confirmMessage += "\\n\\n";
			confirmMessage += msgBuilder.getMessage(aRequestContainer, "SBIDev.predLov.savePreamble", "messages");
			confirmMessage += " ";
			confirmMessage += documentsStr;
			confirmMessage += ". ";
		}
		confirmMessage += "\\n\\n";
		confirmMessage += msgBuilder.getMessage(aRequestContainer, "SBIDev.predLov.saveConfirm", "messages");
	%>
	
	function askForConfirmIfNecessary() {
		if (lovProviderModified) {
			if(confirm('<%=confirmMessage%>')) {
				document.getElementById("saveLov").name = 'saveLov';
				document.getElementById("saveLov").value = 'saveLov';
				document.getElementById("modalitiesValueForm").submit();
			}
		} else {
			document.getElementById("saveLov").name = 'saveLov';
			document.getElementById("saveLov").value = 'saveLov';
			document.getElementById("modalitiesValueForm").submit();
		}
	}


	function setLovProviderModifiedField(){
		if (lovProviderModified) {
			document.getElementById("lovProviderModified").value = 'true';
		} else {
			document.getElementById("lovProviderModified").value = 'false';
		}
	}
	
</script>


<script>
	var profattrwinopen = false;
	var winPA = null;
	
	function opencloseProfileAttributeWin() {
		if(!profattrwinopen){
			profattrwinopen = true;
			openProfileAttributeWin();
		}
	}
	
	function openProfileAttributeWin(){
		if(winPA==null) {
			winPA = new Window('winPAId', {className: "alphacube", title: "<%=msgBuilder.getMessage(aRequestContainer, "SBIDev.lov.avaiableProfAttr", "messages")%>", width:400, height:300, destroyOnClose: true});
	      	winPA.setContent('profileattributeinfodiv', false, false);
	      	winPA.showCenter(false);
	    } else {
	      	winPA.showCenter(false);
	    }
	}
	
	observerWPA = { 
		onClose: function(eventName, win) {
			if (win == winPA) {
				profattrwinopen = false;
			}
		}
	}
	
	Windows.addObserver(observerWPA);
</script>
		



<div id='profileattributeinfodiv' style='display:none;'>	
	<hr/>
	<br/>
	<ul>
    <%
		Iterator profAttrsIter = nameAttrs.iterator();
		while(profAttrsIter.hasNext()) {
			String profAttrName = (String)profAttrsIter.next();
	%>
	 	<li><%=profAttrName%></li>
	<% 	
		}
	%>
	</ul>
	<br/>
</div>	
		


<!-- OPEN PAGE FORM  -->
<form method='POST' action='<%= formUrl %>' id ='modalitiesValueForm' name='modalitiesValueForm'>
	<input type='hidden' value='<%= modVal.getId() %>' name='id' />
	<input type='hidden' value='<%= modality %>' name='<%= SpagoBIConstants.MESSAGEDET  %>' />
	<input type='hidden' name='lovProviderModified' value='' id='lovProviderModified' />




<!-- OPEN TITLE PART  -->
<table class='header-table-portlet-section' >		
	<tr class='header-row-portlet-section'> 
		<td class='header-title-column-portlet-section' style='vertical-align:middle;padding-left:5px;'>
			<spagobi:message key = "SBIDev.predLov.title" />
		</td>
		<td class='header-empty-column-portlet-section'>&nbsp;</td>
		<td class='header-button-column-portlet-section' id='testButton'>
		<input type='image' class='header-button-image-portlet-section' id='testButtonImage'
				onclick='setLovProviderModifiedField();'
				name="testLovBeforeSave" value="testLovBeforeSave"  
				src='<%=urlBuilder.getResourceLink(request, "/img/test.png")%>' 
				title='<spagobi:message key = "SBIDev.predLov.TestBeforeSaveLbl" />'  
				alt='<spagobi:message key = "SBIDev.predLov.TestBeforeSaveLbl" />' 
		/>
		</td>
	<%if(modality.equals(SpagoBIConstants.DETAIL_MOD)) { %>
		<td class='header-button-column-portlet-section'>
			<input type='hidden' id="saveLov" name="" value="" />
			<a href= 'javascript:askForConfirmIfNecessary();' >
				<img class='header-button-image-portlet-section'
					src='<%=urlBuilder.getResourceLink(request, "/img/save.png")%>' 
					title='<spagobi:message key = "SBIDev.predLov.saveButt" />'  
					alt='<spagobi:message key = "SBIDev.predLov.saveButt" />' 
				/>
			</a>
		</td>
	<%}%>
		<td class='header-button-column-portlet-section'>
			<a href= '<%= backUrl %>'> 
      			<img class='header-button-image-portlet-section' 
      			     title='<spagobi:message key = "SBIDev.predLov.backButt" />' 
      			     src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>' 
      			     alt='<spagobi:message key = "SBIDev.predLov.backButt" />' />
			</a>
		</td>
	</tr>
</table>
<!-- TITLE PART CLOSED -->




<!--  OPEN BACKGROUND -->
<div class='div_background_no_img'>



        <!-- OPEN DIV FOR SHARED FORM --> 
		<div class="div_detail_area_forms_lov" >
			<div class='div_detail_label_lov'>
				<span class='portlet-form-field-label'>
					<spagobi:message key = "SBIDev.predLov.labelField" />
				</span>
			</div>
			<div class='div_detail_form'>
				<input class='portlet-form-input-field' type="text" name="label" 
			      	   size="50" value="<%=modVal.getLabel()%>" maxlength="20">
			    &nbsp;*
			</div>
			<div class='div_detail_label_lov'>
				<span class='portlet-form-field-label'>
					<spagobi:message key = "SBIDev.predLov.nameField" />
				</span>
			</div>
			<div class='div_detail_form'>
				<input class='portlet-form-input-field' type="text" name="name" 
			      	   size="50" value="<%=modVal.getName()%>" maxlength="40">
			    &nbsp;*
			</div>
			<div class='div_detail_label_lov'>
				<span class='portlet-form-field-label'>
					<spagobi:message key = "SBIDev.predLov.descriptionField" />
				</span>
			</div>
			<div class='div_detail_form'>
				<% 
			      String desc = modVal.getDescription();
			      if((desc==null) || (desc.equalsIgnoreCase("null"))  ) {
			      		desc = "";
			      } 
			    %>
			    <input class='portlet-form-input-field' type="text" name="description" 
			      	   size="50" value="<%=desc%>" maxlength="160">
			</div>
			<div class='div_detail_label_lov'>
				<span class='portlet-form-field-label'>
					<spagobi:message key = "SBIDev.predLov.input_typeField" />
				</span>
			</div>
			<div class='div_detail_form'>
				<% 
		      		String selectDis = " ";
		      		if(modality.equals(SpagoBIConstants.DETAIL_MOD)) { 
		      			selectDis = " disabled ";
		      			String valueHid = modVal.getITypeCd()+","+modVal.getITypeId();
		      		} 
		      	%>	
		   		<select style='width:180px;' name="input_type" id="input_type" class='portlet-form-input-field' 
					onchange="setLovProviderModified(true);showWizard();">
		      	<% 
		      	   	String curr_input_type = modVal.getITypeCd();
		      	   	if(curr_input_type==null) {
		      	   		curr_input_type = "";
		      	   	}
		      		for(int i=0; i<list.size(); i++){
		      			Domain domain = new Domain();
		      	       	domain = (Domain)list.get(i);
		      	       	String selectedStr = "";
		      	       	if(curr_input_type.equals(domain.getValueCd().toString())) {
		      	       		selectedStr = " selected='selected' ";
		      	       	}
		   		%>
		      	 	<option value="<%= (String)domain.getValueCd()+","+ (domain.getValueId()).toString()%>" <%=selectedStr%>  > 
		      	    	<%= domain.getValueName()%>
		      	    </option>
				<% 
		   			} 
				%>
		 		</select>
			</div>
		</div>
        <!-- DIV FOR SHARED FORM CLOSED -->

        
        <!-- ERROR TAG --> 
		<spagobi:error/>


         <!-- START DIV QUERY WIZARD --> 
        <div id="queryWizard" style='width:100%;display:<%=queryDisplay%>'>
			<spagobi:queryWizard 
				connectionName='<%= query.getConnectionName()!= null ? query.getConnectionName().toString() : "" %>' 			 
				queryDef='<%= query.getQueryDefinition()!= null ? query.getQueryDefinition().toString() : "" %>' />
		</div>	
		<!-- DIV QUERY WIZARD CLOSED -->
		
		
		<!-- START DIV SCRIPT WIZARD --> 
        <div id="scriptWizard" style='width:100%;display:<%=scriptDisplay%>'>
			<spagobi:scriptWizard script='<%= scriptDet.getScript()!= null ? scriptDet.getScript() : "" %>' />
		</div>	
		<!-- DIV SCRIPT WIZARD CLOSED -->
			
			
		<!-- START DIV JAVA CLASS WIZARD --> 
        <div id="javaClassWizard" style='width:100%;display:<%=javaClassDisplay%>'>
			<spagobi:javaClassWizard javaClassName='<%= javaClassDetail.getJavaClassName()!= null ? javaClassDetail.getJavaClassName() : "" %>'  />
		</div>	
		<!-- DIV JAVA CLASS WIZARD CLOSED -->	
		
		
		<!-- START DIV FIX LIST WIZARD --> 
        <div id="lovWizard" style='width:100%;display:<%=lovDisplay%>'>
			<spagobi:lovWizard lovProvider='<%= fixedListDetail.toXML() %>' />
		</div>	
		<!-- DIV FIX LIST WIZARD CLOSED -->


</div> 
<!-- BACKGROUND DIV CLOSED  -->

</form>
<!-- PAGE FORM CLOSED -->	


