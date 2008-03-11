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
<%@ page import="java.util.Map" %>
<%@page import="it.eng.spago.security.IEngUserProfile"%>
 <%@page import="it.eng.spago.navigation.LightNavigationManager"%>
<%@page import="java.util.HashMap"%>
<%@page import="it.eng.spagobi.commons.dao.IDomainDAO"%>
<%@page import="it.eng.spagobi.commons.dao.DAOFactory"%>
<%@page import="java.util.List"%>
<%@page import="it.eng.spagobi.commons.bo.Domain"%>
<%@page import="it.eng.spagobi.analiticalmodel.document.service.ExecuteBIObjectModule"%>
<%@page import="java.util.Iterator"%>


<%@page import="org.jfree.chart.JFreeChart"%>

<%@page import="org.jfree.chart.ChartUtilities"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="org.jfree.chart.imagemap.StandardToolTipTagFragmentGenerator"%>
<%@page import="org.jfree.chart.imagemap.StandardURLTagFragmentGenerator"%>
<%@page import="it.eng.spagobi.engines.chart.bo.ChartImpl"%>
<%@page import="org.jfree.chart.ChartRenderingInfo"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.barcharts.LinkableBar"%>
<%@page import="org.jfree.data.general.Dataset"%>
<%@page import="org.safehaus.uuid.UUIDGenerator"%>

<%@page import="org.safehaus.uuid.UUID"%>
<%@page import="org.jfree.chart.entity.StandardEntityCollection"%>
<%@page import="it.eng.spago.error.EMFErrorHandler"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.piecharts.SimplePie"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.barcharts.SimpleBar"%>
<%@page import="it.eng.spagobi.commons.constants.SpagoBIConstants"%>
<%@page import="java.util.Vector"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.barcharts.BarCharts"%>
<%@page import="org.jfree.data.category.DefaultCategoryDataset"%>
<link rel="stylesheet" type="text/css" href="<%=urlBuilder.getResourceLink(request, "css/printImage.css")%>" media="print">
  
  <script language="JavaScript" src="<%=urlBuilder.getResourceLink(request, "js/analiticalmodel/slider.js")%>" >
</script>
<link href="<%=urlBuilder.getResourceLink(request, "css/analiticalmodel/default-slider.css")%>" rel="stylesheet" type="text/css" />
  

	<link type="text/css" rel="stylesheet" href="<%=urlBuilder.getResourceLink(request, "css/extjs/ext-all.css")%>"/>
	<link type="text/css" rel="stylesheet" href="<%=urlBuilder.getResourceLink(request, "css/extjs/ext-ux-slidezone.css")%>"/>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/prototype/javascripts/prototype.js")%>"></script>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/extjs/ext-base.js")%>"></script>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/extjs/ext-all.js")%>"></script>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/extjs/Ext.ux.SlideZone.js")%>"></script>	

  
  
  <% 
  
	String title=""; 
	String maxSlider="";
	String minSlider="";
	String valueSlider="";
	String refreshUrl2 = "";
	Vector categories;
	if(aServiceResponse.getAttribute("title")!=null){
	title= (String)aServiceResponse.getAttribute("title");
	}
	
     // build the back link
	Map backUrlPars = new HashMap();
    backUrlPars.put("PAGE", "BIObjectsPage");
    backUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_BACK_TO, "1");
    String backUrl = urlBuilder.getUrl(request, backUrlPars);
    
    

	IDomainDAO domaindao = DAOFactory.getDomainDAO();
	List states = domaindao.loadListDomainsByType("STATE");
    List possibleStates = new java.util.ArrayList();
	if (userProfile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_DEV)){
    	Iterator it = states.iterator();
    	 while(it.hasNext()) {
      		    	Domain state = (Domain)it.next();
      		    	if (state.getValueCd().equalsIgnoreCase("TEST")){
      					possibleStates.add(state);
      				}
      	}
    } 
    else if(userProfile.isAbleToExecuteAction(SpagoBIConstants.DOCUMENT_MANAGEMENT_TEST)){
    	Iterator it = states.iterator();
    	 while(it.hasNext()) {
      		    	Domain state = (Domain)it.next();
      		    	if ((state.getValueCd().equalsIgnoreCase("DEV")) || ((state.getValueCd().equalsIgnoreCase("REL")))) {
      					possibleStates.add(state);
      				}
      	}
    }
    
    

    
    %>
    

<table id="spagoBiHeader" class='header-table-portlet-section'>
			<tr class='header-row-portlet-section'>
    			<td class='header-title-column-portlet-section' style='vertical-align:middle;'>
           			<%=title%>
       			</td>
       			<td class='header-empty-column-portlet-section'>&nbsp;</td>
       			<td class='header-button-column-portlet-section'>
           			<a href='<%=backUrl%>'>
                 		<img title='<spagobi:message key = "SBIDev.docConf.execBIObject.backButt" />' 
                      		 class='header-button-image-portlet-section'
                      		 src='<%=urlBuilder.getResourceLink(request, "/img/back.png")%>' 
                      		 alt='<spagobi:message key = "SBIDev.docConf.execBIObject.backButt" />' />
           			</a>
       			</td>
		   		<% if (!possibleStates.isEmpty()) {
			   			Map formUrlPars = new HashMap();
			   			formUrlPars.put("PAGE", ExecuteBIObjectModule.MODULE_PAGE);
			   			formUrlPars.put(SpagoBIConstants.MESSAGEDET, SpagoBIConstants.EXEC_CHANGE_STATE);
			   			formUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
			   		    String formUrl = urlBuilder.getUrl(request, formUrlPars);
    			%>
       			<form method='POST' action='<%=formUrl%>' id='changeStateForm'  name='changeStateForm'>
	       		<td class='header-select-column-portlet-section'>
      				<select class='portlet-form-field' name="newState">
      				<% 
      		    	Iterator iterstates = possibleStates.iterator();
      		    	while(iterstates.hasNext()) {
      		    		Domain state = (Domain)iterstates.next();
      				%>
      					<option value="<%=state.getValueId() + "," + state.getValueCd()  %>"><%=state.getValueName()%></option>
      				<%}%>
      				</select>
      			</td>
      			<td class='header-select-column-portlet-section'>
      				<input type='image' class='header-button-image-portlet-section' 
      				       src='<%=urlBuilder.getResourceLink(request, "/img/updateState.png")%>' 
      				       title='<spagobi:message key = "SBIDev.docConf.execBIObject.upStateButt" />' 
      				       alt='<spagobi:message key = "SBIDev.docConf.execBIObject.upStateButt" />'/> 
      			</td>
      			<td class='header-select-column-portlet-section'>
      					<A id="linkText" HREF="#" onClick="window.print();return false">
      				<IMG class='header-button-image-portlet-section' 
      				       src='<%=urlBuilder.getResourceLink(request, "/img/Print.gif")%>' 
      				       title='<spagobi:message key = "SBIDev.docConf.execBIObject.printDocument" />' 
      				       alt='<spagobi:message key = "SBIDev.docConf.execBIObject.printDocument" />'/>  
      				       </A>
      			</td>
        		</form>
       			<% } %>
   			</tr>
		</table>
  

  

	



  
  <%
 EMFErrorHandler errorHandler=aResponseContainer.getErrorHandler();
	if(!errorHandler.isOK()){
  	
  %>

    <spagobi:error/>
  
  <%}
	else
	{%>
    
<%
	
ChartImpl sbi = (ChartImpl)aServiceResponse.getAttribute("sbi");
String documentid=(String)aServiceResponse.getAttribute("documentid");
Dataset dataset=(Dataset)aServiceResponse.getAttribute("dataset");
Dataset copyDataset;

//Boolean changeViewChecked=(Boolean)aServiceResponse.getAttribute("changeviewchecked");

// get wich pars are possible set

Vector changePars=(Vector)sbi.getPossibleChangePars();
//check for each one if a changeparameter has ben set

		for (Iterator iterator = changePars.iterator(); iterator.hasNext();) {
			String par = (String) iterator.next();
			if(request.getParameter(par)!=null){
				String ch=(String)request.getParameter(par);
				if(ch.equalsIgnoreCase("true")){
					sbi.setChangeViewsParameter(par,true);}
				else {if(ch.equalsIgnoreCase("false"));
					{
						sbi.setChangeViewsParameter(par,false);}
							}
				}

		}


/////////////////////////////////////////////////////// Case one category has been selected//////////////////////////////////////////
		if(sbi.getType().equalsIgnoreCase("BARCHART")){
			categories=(Vector)((BarCharts)sbi).getCategories();
			if(request.getParameter("category")!=null){
				String catS=(String)request.getParameter("category");
				Double catD=Double.valueOf(catS);
				int cat=catD.intValue();
				if(cat!=0){
				HashMap cats=(HashMap)((BarCharts)sbi).getCategories();
				String nameCat=(String)cats.get(new Integer(cat));
				copyDataset=sbi.filterDataset(dataset,nameCat);				
				}
				else{copyDataset=dataset;}
			}
			else{copyDataset=dataset;}
		} 
			else{copyDataset=dataset;}

///////////////////////////////////////////////////// End category case//////////////////////////////////////////





/*
boolean changeViewMode=false;
if(request.getParameter("changeviewmode")!=null){
	String ch=(String)request.getParameter("changeviewmode");
	if(ch.equalsIgnoreCase("true")){
		changeViewMode=true;
		if((sbi.getType().equalsIgnoreCase("BARCHART") && sbi.getSubtype().equalsIgnoreCase("SIMPLEBAR"))
		||	(sbi.getType().equalsIgnoreCase("DIALCHART") && sbi.getSubtype().equalsIgnoreCase("SIMPLEDIAL"))){
			int temp=sbi.getWidth();
			sbi.setWidth(sbi.getHeight());
			sbi.setHeight(temp);
		}
	}
}

String changeVieLabel="";
if(sbi.isChangeableView()){
	changeVieLabel=sbi.getChangeViewLabel();
	sbi.setChangeViewChecked(changeViewMode);
}
*/


	SessionContainer permSession = aSessionContainer.getPermanentContainer();
	
	if(userProfile==null){
	userProfile = (IEngUserProfile) permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
    userId=(String)userProfile.getUserUniqueIdentifier();
	}
    
	String  rootUrl=urlBuilder.getUrl(request,new HashMap());
	if(sbi.getType().equalsIgnoreCase("BARCHART") && sbi.getSubtype().equalsIgnoreCase("linkablebar")){
		((LinkableBar)sbi).setRootUrl(rootUrl);
	}
   
	
	
	

	
	
	
	JFreeChart chart=null;
	// create the chart
			chart = sbi.createChart(title,copyDataset);


		//Create the temporary dir
		UUIDGenerator uuidGen = UUIDGenerator.getInstance();
		UUID uuid = uuidGen.generateTimeBasedUUID();
		String executionId = uuid.toString();
		executionId = executionId.replaceAll("-", "");

		ChartRenderingInfo info = new ChartRenderingInfo(new StandardEntityCollection());
		//Saving image on a temporary file
		String dir=System.getProperty("java.io.tmpdir");
		String path=dir+"/"+executionId+".png";
		java.io.File file1 = new java.io.File(path);
		ChartUtilities.saveChartAsPNG(file1, chart, sbi.getWidth(), sbi.getHeight(), info);
		
	//String urlAction=urlBuilder.getResourceLink(request, "/servlet/AdapterHTTP?ACTION_NAME=GET_JFREECHART&NEW_SESSION=TRUE&userid="+userId+"&documentid="+documentId);


    
 
				

	   		Map refreshUrlPars = new HashMap();
	   			refreshUrlPars.put("ACTION_NAME", "CREATE_CHART");
	   			refreshUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
	   			refreshUrlPars.put("documentid", documentid);
	   			String refreshUrl = urlBuilder.getUrl(request, refreshUrlPars);
	   			

		   		Map refreshUrlPars2 = new HashMap();
			   			refreshUrlPars2.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
		   			refreshUrl2 = urlBuilder.getUrl(request, refreshUrlPars2);
		   			
		   			
		   			
	   			
	   			
	   			
	   			
	   			
				%>

	<div align=center>
	<%
	    String urlPng=urlBuilder.getResourceLink(request, "/servlet/AdapterHTTP?ACTION_NAME=GET_PNG&NEW_SESSION=TRUE&userid="+userId+"&path="+path);

	
	
	// It passess changeView in POST (recall the actions) Not used.
	

	/*
	    if(sbi.isChangeableView()){
	    	%>
	    	<form  name="changeviewchecked" action="<%=refreshUrl%>" method="POST" >
				<%if(changeViewChecked.equals(new Boolean(true))){ %>
 					<input name="changeviewchecked" type="checkbox" value="true" checked onclick="this.form.submit()" align="left">aaaa</input>
 							<%}
					else{%>
								<input name="changeviewchecked" type="checkbox" value="true" onclick="this.form.submit()" align="left">aaa</input>
							<%} %>
			</form> 
			<BR>
	    	<%
	    } 
	    
	    
	  	
	
	    if(sbi.isChangeableView()){
	    	
	    	// for each possible parameter to change creates a checkbox
	    	for (Iterator iterator = changePars.iterator(); iterator.hasNext();) {
	    		String par = (String) iterator.next();
	    		
	    	%>
	    	<form  name="<%=par%>" action="<%=refreshUrl2%>" method="GET" >
				<%if(sbi.getChangeViewParameter(par)){ %>
 					<input name="<%=par%>" type="checkbox" value="true" checked onclick="this.form.submit()" align="left"><%=sbi.getChangeViewParameterLabel(par)%></input>
 							<%}
					else{%>
					<input name="<%=par%>" type="checkbox" value="true" onclick="this.form.submit()" align="left"><%=sbi.getChangeViewParameterLabel(par)%></input>
							<%} 
							%>
			</form> 
			<BR>
	    <% 
	    	}
	    }
*/

//I Try Radio Buttons
	
		    if(sbi.isChangeableView()){
	%>
	
	<table><tr>
	<%     	
	    // for each possible parameter to change creates a checkbox
	    	for (Iterator iterator = changePars.iterator(); iterator.hasNext();) {
	    		String par = (String) iterator.next(); %>
	  
	<td>
				<div class='div_detail_label'>
					<span class='portlet-form-field-label'>
						<!--spagobi:message key = "SBIDev.docConf.docDet.nameField" /-->
						<%=sbi.getChangeViewParameterLabel(par,0)%> 
					</span>
				</div>
				<div class='div_detail_form' align="left">
	    		<form  name="<%=par%>" action="<%=refreshUrl2%>" method="GET" >
	    		  <%if(sbi.getChangeViewParameter(par)){ %>
	    		  <input type="radio" name="<%=par%>" value="false" onclick="this.form.submit()" align="left"/><%=sbi.getChangeViewParameterLabel(par,1)%> <BR>
 				  <input type="radio" name="<%=par%>" value="true"  checked  onclick="this.form.submit()" align="left"/><%=sbi.getChangeViewParameterLabel(par,2)%>  
 			  <%}
	    		  else {%>
	    		 <input type="radio" name="<%=par%>" value="false" checked onclick="this.form.submit()" align="left"/>  <%=sbi.getChangeViewParameterLabel(par,1)%><BR>
				<input type="radio" name="<%=par%>" value="true" onclick="this.form.submit()" align="left"/>  <%=sbi.getChangeViewParameterLabel(par,2)%>
 	    		  <%} %>
 	    		  </div>
				</form>
	    </td>
	   
	  	    	<% 
	    	}
	%>  </tr></table>
		<BR>
		<BR>
	<% 
		    }
	

	
	    if(sbi.isLinkable()){
		PrintWriter pw = new PrintWriter(out);
		ChartUtilities.writeImageMap(pw, "chart", info,new StandardToolTipTagFragmentGenerator(),new StandardURLTagFragmentGenerator());
	    }
	    %>
		
    <img id="image" src="<%=urlPng%>" BORDER=1 width="AUTO" height="AUTO" alt="Error in displaying the chart" USEMAP="#chart"/>
    </div>
    
    
    	
	<% /////////////////////// Beginslider creation //////////////////////////
	//if it's a barchart creates the slider!

	if(sbi.getType().equalsIgnoreCase("BARCHART")){
		maxSlider=(new Integer(((BarCharts)sbi).getCategoriesNumber())).toString(); 
		minSlider="0"; 

	
	%>
	<form>
	<div id="slider1" align="center"></div> 
	<div id="output1" align="center" >
		<table align="center" width="75%" border="1">
			<tr>
				<td width="25%">Select Category</td>
				<td id="slider_1_1_value" width="15%"></td>
				<td width="60%"><a href="javascript:void(0)" onClick="document.location.href=getActionUrl();">Select Category</a></td>
			</tr>
		</table>
	</div>
	<BR>
</form>



	<% 
	}
	
	/////////////////////// End slider creation ////////////////////////// 
	%>
	
    
    
<%} %>

 <script type="text/javascript" language="JavaScript">
 		function getValue() {return Test.slideZone1.getSlider('start1_1').value;}


	function getActionUrl() {
	
		//var v='www.google.it';
		//return v;
		var variable="&category=";
		var value=getValue();
		var second=variable+value;
		var url="<%=refreshUrl2%>";
		var finalUrl=url+second;
		return finalUrl;
		}
 
 </script>
 
 
 
  <script type="text/javascript" language="JavaScript">

Ext.onReady(function() {

	Test = {};
	twoWeeksAgo = 1000*60*60*24*14;

	Test.slideZone1 = new Ext.ux.SlideZone('slider1', {  
		type: 'horizontal',size: 500, sliderWidth: 18,sliderHeight: 21,maxValue: <%=maxSlider%>,minValue: <%=minSlider%>,sliderSnap: 1,sliders: [{ value: 500,  name: 'start1_1'
					}]
		 });
	
	Test.slideZone1.getSlider('start1_1').on('drag',
		function() {
				$('slider_1_1_value').innerHTML = parseInt(this.value);
				$('slider_1_1_percent').innerHTML = this.percent.toFixed(2);
				$('slider_1_1_position').innerHTML = this.el.getX() +
						1/2 * Test.slideZone1.sliderWidth;	
				}
	)
	$('slider_1_1_value').innerHTML = parseInt(Test.slideZone1.getSlider('start1_1').value);
	$('slider_1_1_percent').innerHTML = Test.slideZone1.getSlider('start1_1').percent.toFixed(2);	
	$('slider_1_1_position').innerHTML = Test.slideZone1.getSlider('start1_1').el.getX() +
			1/2 * Test.slideZone1.sliderWidth;	
	
	//miao
	//Test.getValue : function() {
	//			return Test.slideZone1.getSlider('start1_1').value;
				//return this.slideZone1.getSlider('start1_1').value;
				//return slideZone1.getSlider('start1_1').value;
	//			}
	
		Test.slideZone1.getValue('start1_1').on('drag',
		function() {return Test.slideZone1.getSlider('start1_1').value;})
	
	
	Test.zone2 = new Ext.ux.SlideZone('slider2', {  
					type: 'horizontal',
					size: 700, 
					sliderWidth: 18,
					sliderHeight: 21,
					allowSliderCrossing: false,
					sliderSnap: 20,
					maxValue: new Date().getTime(),
					minValue: new Date().getTime() - (twoWeeksAgo)
					});
	var slider2_1 = new Ext.ux.ThumbSlider({
				value: new Date().getTime() - twoWeeksAgo + twoWeeksAgo * 1/4 ,  
				name: 'start2'
				});
	var slider2_2 = new Ext.ux.ThumbSlider({
			value: new Date().getTime() - twoWeeksAgo + twoWeeksAgo * 1/2,  
			name: 'middle2'
			}); 

	var slider2_3 = new Ext.ux.ThumbSlider({
			value: new Date().getTime() - twoWeeksAgo + twoWeeksAgo * 3/4,  
			name: 'stop2'
			});

	slider2_1.on('drag',function() {
			$('slider_2_1_value').innerHTML = this.value + ' ' + new Date(this.value).toString();
			$('slider_2_1_percent').innerHTML = this.percent.toFixed(2);
			})
	slider2_2.on('drag',function() {
			$('slider_2_2_value').innerHTML = this.value + ' ' + new Date(this.value).toString();
			$('slider_2_2_percent').innerHTML = this.percent.toFixed(2);
			})
	slider2_3.on('drag',function() {
			$('slider_2_3_value').innerHTML = this.value + ' ' + new Date(this.value).toString();
			$('slider_2_3_percent').innerHTML = this.percent.toFixed(2);
			})
	Test.zone2.add(slider2_1); 
	Test.zone2.add(slider2_2); 
	Test.zone2.add(slider2_3); 

	//sliders can be accessed only after added
	$('slider_2_1_value').innerHTML = Test.zone2.getSlider('start2').value + ' ' + 
				new Date(Test.zone2.getSlider('start2').value).toString();
	$('slider_2_1_percent').innerHTML = Test.zone2.getSlider('start2').percent.toFixed(2);
	$('slider_2_2_value').innerHTML = Test.zone2.getSlider('middle2').value + ' ' + 
				new Date(Test.zone2.getSlider('middle2').value).toString();
	$('slider_2_2_percent').innerHTML = Test.zone2.getSlider('middle2').percent.toFixed(2);
	$('slider_2_3_value').innerHTML = Test.zone2.getSlider('stop2').value + ' ' + 
				new Date(Test.zone2.getSlider('stop2').value).toString();
	$('slider_2_3_percent').innerHTML = Test.zone2.getSlider('stop2').percent.toFixed(2);


	Test.zone3 = new Ext.ux.SlideZone('slider3', {  
		type: 'horizontal',
		size: 500, 
		sliderHeight: 12,
		maxValue: 1000,
		minValue: 0,
		sliderSnap: 1,
		allowSliderCrossing: true
		 });
	
	var rs1 = new Ext.ux.RangeSlider({
			value: [100,500],  
			name: '3_1',
			cls: 'top'
			});

	var rs2 = new Ext.ux.RangeSlider({
			value: [200,600],  
			name: '3_2',
			cls: 'bottom'
			});
			
	Test.zone3.add(rs1);	
	Test.zone3.add(rs2);		

	Test.zone3.getSlider('3_1').on('drag',
		function() {
				$('slider_3_1_value').innerHTML = parseInt(this.value[0]) + "|" + parseInt(this.value[1]);
				$('slider_3_1_percent').innerHTML = parseInt(this.percent[0]) + "|" + parseInt(this.percent[1]);	
				}
	)
	$('slider_3_1_value').innerHTML  = parseInt(Test.zone3.getSlider('3_1').value[0]) + "|" + parseInt(Test.zone3.getSlider('3_1').value[1]);
	$('slider_3_1_percent').innerHTML = parseInt(Test.zone3.getSlider('3_1').percent[0]) + "|" + parseInt(Test.zone3.getSlider('3_1').percent[1]);
			
	Test.zone3.getSlider('3_2').on('drag',
		function() {
				$('slider_3_2_value').innerHTML = parseInt(this.value[0]) + "|" + parseInt(this.value[1]);
				$('slider_3_2_percent').innerHTML = parseInt(this.percent[0]) + "|" + parseInt(this.percent[1]);	
				}
	)
	$('slider_3_2_value').innerHTML  = parseInt(Test.zone3.getSlider('3_2').value[0]) + "|" + parseInt(Test.zone3.getSlider('3_2').value[1]);
	$('slider_3_2_percent').innerHTML = parseInt(Test.zone3.getSlider('3_2').percent[0]) + "|" + parseInt(Test.zone3.getSlider('3_2').percent[1]);


	$('eventLog').value = '';

	$('enableLogging').checked = false;
	});
	
	


function enableLogging(cb) {
	var ssEvts = $A(['mouseover', 'mouseout', 'dragstart', 'drag', 'dragend']);
	for(s in Test) {
		var ss = Test[s];
		ss.sliders.each( function(slider) {
			ssEvts.each(
				function(evt) {
					if(cb.checked) {
						slider.on(evt, function() {
							$('eventLog').value = this.name + ', ' + evt + ', ' + this.value + "\n" + $('eventLog').value;
						})
					} else {
						slider.purgeListeners();
					}
				}
			)		
		})
	}			
}

</script>











    