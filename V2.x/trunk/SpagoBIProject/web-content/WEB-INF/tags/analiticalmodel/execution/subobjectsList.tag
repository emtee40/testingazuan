<%@tag language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="/WEB-INF/tlds/spagobi.tld" prefix="spagobi" %>

<%@attribute name="subobjectsList" required="true" type="java.util.List"%>
<%@attribute name="uuid" required="true" type="java.lang.String"%>

<%@tag import="java.util.Iterator"%>
<%@tag import="it.eng.spagobi.analiticalmodel.document.bo.SubObject"%>
<%@tag import="it.eng.spago.base.RequestContainer"%>
<%@tag import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
<%@tag import="it.eng.spagobi.commons.utilities.urls.UrlBuilderFactory"%>
<%@tag import="it.eng.spagobi.commons.utilities.urls.IUrlBuilder"%>
<%@tag import="it.eng.spago.security.IEngUserProfile"%>
<%@tag import="java.util.Map"%>
<%@tag import="java.util.HashMap"%>
<%@tag import="it.eng.spagobi.analiticalmodel.document.service.ExecuteBIObjectModule"%>
<%@tag import="it.eng.spagobi.commons.constants.SpagoBIConstants"%>
<%@tag import="it.eng.spago.navigation.LightNavigationManager"%>
<%@tag import="java.util.Date"%>
<%@tag import="it.eng.spagobi.commons.utilities.GeneralUtilities"%>

<%
RequestContainer requestContainer = ChannelUtilities.getRequestContainer(request);
IUrlBuilder urlBuilder = UrlBuilderFactory.getUrlBuilder(requestContainer.getChannelType());
IEngUserProfile profile = (IEngUserProfile) requestContainer.getSessionContainer().getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);

//if (subobjectsList == null || subobjectsList.size() == 0) {
	%>
	<%--<div class='portlet-font'><spagobi:message key="SBIDev.docConf.subBIObject.nosubobjects"/></div> --%>
	<%
//} else {
	%>
		<table style='width:100%;' align='left' id="subObjectTable_<%= uuid %>">
			<thead>
				<tr>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
					  	<spagobi:message key="SBIDev.docConf.subBIObject.name"/>
					</td>
					<td align='left' class='portlet-section-header'>&nbsp;</td>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
				   		<spagobi:message key="SBIDev.docConf.subBIObject.owner"/>
					</td>
					<td align='left' class='portlet-section-header'>&nbsp;</td>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
						<spagobi:message key="SBIDev.docConf.subBIObject.description"/>
					</td>
					<td align='left' class='portlet-section-header'>&nbsp;</td>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
						<spagobi:message key="SBIDev.docConf.subBIObject.creationDate"/>
					</td>
					<td align='left' class='portlet-section-header'>&nbsp;</td>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
						<spagobi:message key="SBIDev.docConf.subBIObject.lastModificationDate"/>
					</td>
					<td align='left' class='portlet-section-header'>&nbsp;</td>
					<td style='vertical-align:middle;' align='left' class='portlet-section-header'>
						<spagobi:message key="SBIDev.docConf.subBIObject.visibility"/>
					</td>
					<td align='left' class='portlet-section-header' colspan='3' >&nbsp;</td>
				</tr>
			</thead>
			<tboby>
	<%
	SubObject subObj = null;
	Integer idSub = null;
	String nameSub = null;
	String descr = null;
	String visib = null;
	String delete = null;
	String owner = null;
	String creationDate = null;
	String lastModificationDate = null;
	String execSubObjUrl = null;
	String deleteSubObjUrl = null;
	boolean alternate = false;
	String rowClass = null;
	
    Map baseDeleteSubObjUrlPars = new HashMap();
    baseDeleteSubObjUrlPars.put("PAGE", ExecuteBIObjectModule.MODULE_PAGE);
    baseDeleteSubObjUrlPars.put(SpagoBIConstants.MESSAGEDET, "DELETE_SUBOBJECT");
    baseDeleteSubObjUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED,"true");
	
    Map baseExecSubObjUrlPars = new HashMap();
    baseExecSubObjUrlPars.put("PAGE", ExecuteBIObjectModule.MODULE_PAGE );
    baseExecSubObjUrlPars.put(SpagoBIConstants.MESSAGEDET, "EXEC_SUBOBJECT");
    baseExecSubObjUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED,"true");
    
	if (subobjectsList != null && subobjectsList.size() > 0) {
		Iterator iterSubs =  subobjectsList.iterator();
		while(iterSubs.hasNext()) {
			subObj = (SubObject)iterSubs.next();
			rowClass = (alternate) ? "portlet-section-alternate" : "portlet-section-body";
			alternate = !alternate;
			idSub = subObj.getId();
			nameSub = subObj.getName();
	        descr = subObj.getDescription();
	        owner = subObj.getOwner();
	        creationDate = subObj.getCreationDate().toString();
	        lastModificationDate = subObj.getLastChangeDate().toString();
	                    
	        visib = "Private";
	        if (subObj.getIsPublic().booleanValue()) {
	        	visib = "Public";
	        } 
	        if (owner.equals(profile.getUserUniqueIdentifier().toString())) {
	        	delete = "delete";
	        }
	        
		    Map deleteSubObjUrlPars = new HashMap();
		    deleteSubObjUrlPars.putAll(baseDeleteSubObjUrlPars);
		    deleteSubObjUrlPars.put(SpagoBIConstants.SUBOBJECT_ID, idSub);
		    deleteSubObjUrl = urlBuilder.getUrl(request, deleteSubObjUrlPars);
		    
		    Map execSubObjUrlPars = new HashMap();
		    execSubObjUrlPars.putAll(baseExecSubObjUrlPars);
		    execSubObjUrlPars.put(SpagoBIConstants.SUBOBJECT_ID, idSub);
		    execSubObjUrl = urlBuilder.getUrl(request, execSubObjUrlPars);
		    
	        %>
					<tr class='portlet-font'>
	       		    	<td style='vertical-align:middle;' class='<%= rowClass %>'>
	       		    		<%= nameSub %>
	           			</td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td> 
	           			<td style='vertical-align:middle;' class='<%= rowClass %>' ><%= owner %></td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td> 
	           			<td style='vertical-align:middle;' class='<%= rowClass %>' ><%= descr %></td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td> 
	           			<td style='vertical-align:middle;' class='<%= rowClass %>' ><%= creationDate %></td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td> 
	           			<td style='vertical-align:middle;' class='<%= rowClass %>' ><%= lastModificationDate %></td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td> 
	           			<td style='vertical-align:middle;' class='<%= rowClass %>' ><%= visib %></td>
	           			<td class='<%= rowClass %>' width='20px'>&nbsp;</td>
	           			<%
	           		if (owner.equals(profile.getUserUniqueIdentifier().toString())) {
	           			%>
	                   		<td style='vertical-align:middle;' class='<%= rowClass %>' width='40px'>
	               				<a href="javascript:var conf = confirm('<spagobi:message key="ConfirmMessages.DeleteSubObject" />'); 
	               									if (conf) {document.location='<%= deleteSubObjUrl.toString() %>';}">
	               					<img 
		  	   							src='<%= urlBuilder.getResourceLink(request, "/img/erase.gif") %>' 
		  	   							name='deleteSub' 
		  	            				alt='<spagobi:message key="SBIDev.docConf.ListdocDetParam.deleteCaption" />' 
		                				title='<spagobi:message key="SBIDev.docConf.ListdocDetParam.deleteCaption" />' />
	               				</a>
	               			</td>
	               		<%
	           		} else {
	           			%>
	           				<td style='vertical-align:middle;' class='<%= rowClass %>' width='40px'>
	           					&nbsp;
	           				</td>
	           			<%
	           		}
	           			%>
	               		<td style='vertical-align:middle;' class='<%= rowClass %>' width='40px'>
	           				<a href='<%= execSubObjUrl %>'>
	           					<img 
	  	   							src='<%= urlBuilder.getResourceLink(request, "/img/exec.gif") %>' 
	  	   							name='execSub' 
	  	            				alt='<spagobi:message key="SBIDev.docConf.execBIObjectParams.execButt" />' 
	                				title='<spagobi:message key="SBIDev.docConf.execBIObjectParams.execButt" />' />
	           				</a>
	           			</td>
	           		</tr>
	     	<%
	    }
	}
    %>
    </tboby>
	</table>
	
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	
	<%
	String baseDeleteSubObjUrl = urlBuilder.getUrl(request, baseDeleteSubObjUrlPars);
	String baseExecSubObjUrl = urlBuilder.getUrl(request, baseExecSubObjUrlPars);
	%>
	
	<script type="text/javascript">
	
	var subobject;
	
	function addSubobject(windowName, response) {
		stringToEval = "subobject = " + response + ";";
		var uuid = windowName.substr('iframeexec'.length);
		eval(stringToEval);
		var table = document.getElementById('subObjectTable_' + uuid);
		var rowsNumber = table.rows.length;
		//if (rowsNumber == 1) {
		//	var subObjectsArrow = document.getElementById('subobjectsSliderArrow' + uuid);
		//	var subObjectsPopout = document.getElementById('popout_SubObject' + uuid);
		//	if (subObjectsArrow) {
		//		subObjectsArrow.style.display = "inline";
		//	}
		//	if (subObjectsPopout) {
		//		subObjectsPopout.style.display = "inline";
		//	}
		//}
		var newRow = table.insertRow(rowsNumber);
		var nameCell = newRow.insertCell(0);
		var empty1 = newRow.insertCell(1);
		var ownerCell = newRow.insertCell(2);
		var empty3 = newRow.insertCell(3);
		var descrCell = newRow.insertCell(4);
		var empty5 = newRow.insertCell(5);
		var creationDateCell = newRow.insertCell(6);
		var empty7 = newRow.insertCell(7);
		var lastModificationDateCell = newRow.insertCell(8);
		var empty9 = newRow.insertCell(9);
		var visib = newRow.insertCell(10);
		var empty11 = newRow.insertCell(11);
		var deleteCell = newRow.insertCell(12);
		var execCell = newRow.insertCell(13);
		var cellClass = 'portlet-section-alternate';
		newRow.className = 'portlet-font';
		nameCell.innerHTML = subobject.name;
		nameCell.className = cellClass;
		ownerCell.innerHTML = subobject.owner;
		ownerCell.className = cellClass;
		descrCell.innerHTML = subobject.description;
		descrCell.className = cellClass;
		creationDateCell.innerHTML = subobject.creationDate;
		creationDateCell.className = cellClass;
		lastModificationDateCell.innerHTML = subobject.lastModificationDate;
		lastModificationDateCell.className = cellClass;
		if (subobject.isPublic) {
			visib.innerHTML = "Public";
		} else {
			visib.innerHTML = "Private";
		}
		visib.className = cellClass;
		
		deleteCell.innerHTML = '<a href="javascript:var conf = confirm(\'<spagobi:message key="ConfirmMessages.DeleteSubObject" />\');if (conf) {document.location=\'<%= baseDeleteSubObjUrl.toString() %>&<%= SpagoBIConstants.SUBOBJECT_ID %>=' + subobject.id + '\';}"><img src="<%= urlBuilder.getResourceLink(request, "/img/erase.gif") %>" name="deleteSub" alt="<spagobi:message key="SBIDev.docConf.ListdocDetParam.deleteCaption" />" title="<spagobi:message key="SBIDev.docConf.ListdocDetParam.deleteCaption" />" /></a>';
		deleteCell.className = cellClass;
		deleteCell.style.width = '40px';
		execCell.innerHTML = '<a href="<%= baseExecSubObjUrl.toString() %>&<%= SpagoBIConstants.SUBOBJECT_ID %>=' + subobject.id + '" ><img src="<%= urlBuilder.getResourceLink(request, "/img/exec.gif") %>"  name="execSub" alt="<spagobi:message key="SBIDev.docConf.execBIObjectParams.execButt" />" title="<spagobi:message key="SBIDev.docConf.execBIObjectParams.execButt" />" /></a>';
		execCell.className = cellClass;
		execCell.style.width = '40px';
		
		empty1.className = cellClass;
		empty3.className = cellClass;
		empty5.className = cellClass;
		empty7.className = cellClass;
		empty9.className = cellClass;
		empty11.className = cellClass;
		
	}
	
	function loadSubObject(windowName, subObjId) {
		var params;
		Ext.Ajax.request({
			url: '<%= GeneralUtilities.getSpagoBIProfileBaseUrl(profile.getUserUniqueIdentifier().toString()) %>&ACTION_NAME=GET_SUBOBJECT_INFO&<%=SpagoBIConstants.SUBOBJECT_ID%>=' + subObjId + '&<%= LightNavigationManager.LIGHT_NAVIGATOR_DISABLED %>=TRUE',
			method: 'get',
			success: function (result, request) {
				response = result.responseText || "";
				addSubobject(windowName, response);
			},
			params: params,
			failure: somethingWentWrong
		});
	}
	
	function somethingWentWrong() {
		alert('Something went wrong during ajax call');
	}
	</script>
	
    <%
//}
%>