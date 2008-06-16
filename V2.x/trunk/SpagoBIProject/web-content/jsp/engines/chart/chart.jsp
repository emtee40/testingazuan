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
<%@ page import="java.util.Map" %>
<%@page import="it.eng.spago.navigation.LightNavigationManager"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.List"%>
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
<%@page import="java.util.Vector"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.barcharts.BarCharts"%>


	<%@page import="org.jfree.data.category.DefaultCategoryDataset"%>


<%
	BIObject objO=null;
	String uuidO="";
	boolean docComposition=false;
	String executionFlowIdO="";

	SourceBean sbModuleResponse = (SourceBean) aServiceResponse.getAttribute("ExecuteBIObjectModule");
   	String execContext = (String)sbModuleResponse.getAttribute(SpagoBIConstants.EXECUTION_CONTEXT);
   	
   	// if in document composition case do not include header.jsp
	   if (execContext == null || !execContext.equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITION)){%>
				<%@ include file="/jsp/analiticalmodel/execution/header.jsp"%>
		<%	
					objO=obj;
					uuidO=uuid;
					executionFlowIdO=executionFlowId;
			   }
   		else // in document composition case doesn't call header so set Object and uuid
			   {
	   				docComposition=true;
				   UUIDGenerator uuidGenO  = UUIDGenerator.getInstance();
				   UUID uuidObjO = uuidGenO.generateTimeBasedUUID();
				   uuidO = uuidObjO.toString();
				   uuidO = uuidO.replaceAll("-", "");
	   			   objO = (BIObject) sbModuleResponse.getAttribute(ObjectsTreeConstants.SESSION_OBJ_ATTR);
	   			executionFlowIdO = (String) aSessionContainer.getAttribute("EXECUTION_FLOW_ID");
	   			if (executionFlowIdO != null) aSessionContainer.delAttribute("EXECUTION_FLOW_ID");
	   			else executionFlowIdO = uuidO;
			   }
   		%>


		<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.piecharts.LinkablePie"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart"%>
<%@page import="it.eng.spagobi.engines.chart.utils.DatasetMap"%>
<%@page import="it.eng.spagobi.engines.chart.bo.charttypes.clusterchart.ClusterCharts"%>
<link rel="stylesheet" type="text/css" href="<%=urlBuilder.getResourceLink(request, "css/printImage.css")%>" media="print">
		
	<%@page import="it.eng.spagobi.analiticalmodel.document.bo.BIObject"%>
	<link type="text/css" rel="stylesheet" href="<%=urlBuilder.getResourceLink(request, "css/extjs/ext-ux-slidezone.css")%>"/>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/extjs/Ext.ux.SlideZone.js")%>"></script>	
  
  
  <% 
	String maxSlider="0";
	String minSlider="0";
	
	//String valueSlider="1";
	String refreshUrl = "";
	
	//HashMap categories=null;
	//Vector selectedSeries=null;  // series currently selected
	//List series=null;  // the series in the complete dataset
	//int numberCatVisualization=1;
	//int catsnum=0;
	//int categoryCurrent=0;
	//String categoryCurrentName="";
	//String catTitle="category";
	//String serTitle="serie";
	//boolean makeSlider=false;

	
	String refreshUrlCategory="";
	String refreshUrlSerie="";

 	EMFErrorHandler errorHandler=aResponseContainer.getErrorHandler();
	if(errorHandler.isOK()){    
		SessionContainer permSession = aSessionContainer.getPermanentContainer();

		if(userProfile==null){
			userProfile = (IEngUserProfile) permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
			userId=(String)userProfile.getUserUniqueIdentifier();
			}

			//ChartImpl sbi = (ChartImpl)aServiceResponse.getAttribute("sbi");
		ChartImpl sbi = (ChartImpl)sbModuleResponse.getAttribute("sbi");
		String documentid=(objO.getId()).toString();
		//String documentid=(String)aServiceResponse.getAttribute("documentid");
		DatasetMap datasetMap=(DatasetMap)sbModuleResponse.getAttribute("datasets");
		DatasetMap copyDatasets=null;

		// get wich pars can the user set
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
		
		
		// in the case of document composition check if serie or category have been previously defined

	datasetMap.setSelectedSeries(new Vector());
	if(sbiMode.equalsIgnoreCase("WEB") || docComposition){
		if(sbModuleResponse.getAttribute("category")!=null){
		String catS=(String)sbModuleResponse.getAttribute("category");
		Double catD=Double.valueOf(catS);
		datasetMap.setCategoryCurrent(catD.intValue());
		}
		if(sbModuleResponse.getAttribute("serie")!=null){
		List selectedSeriesTemp=(List)sbModuleResponse.getAttributeAsList("serie");
		datasetMap.setSelectedSeries(new Vector(selectedSeriesTemp));
		}
		else{
			datasetMap.getSelectedSeries().add("allseries");   
		}
	}

	

	if(sbi.getType().equalsIgnoreCase("BARCHART") || sbi.getType().equalsIgnoreCase("CLUSTERCHART")){
		if(sbi.getSubtype().equalsIgnoreCase("simplebar") || sbi.getSubtype().equalsIgnoreCase("linkableBar") || sbi.getSubtype().equalsIgnoreCase("stacked_bar")){
// returns a new datasets map filtered
			copyDatasets=datasetMap.filteringSimpleBarChart(request,(BarCharts)sbi,sbiMode,docComposition);
		}
		else if(sbi.getSubtype().equalsIgnoreCase("overlaid_barline")){
			copyDatasets=datasetMap.filteringMultiDatasetBarChart(request,(BarCharts)sbi,sbiMode,docComposition);
		}
		else if(sbi.getSubtype().equalsIgnoreCase("simplecluster")){
			copyDatasets=datasetMap.filteringClusterChart(request,(ClusterCharts)sbi,sbiMode,docComposition);
		}
		
		}
	else {copyDatasets=datasetMap;}
	



///// Linkable chart case/////////////////

	HashMap rootPar=new HashMap();
	if(sbi.isLinkable()){
		
		boolean linkableBar=false;
		if(sbi instanceof LinkableBar)linkableBar=true;
		else linkableBar=false;

		String rootDocParameter="";
		rootDocParameter=((ILinkableChart)sbi).getDocument_Parameters(((ILinkableChart)sbi).getDrillParameter());

		rootPar.put(ObjectsTreeConstants.PARAMETERS,rootDocParameter);
	
		String drillLabel="";
			drillLabel=((ILinkableChart)sbi).getDrillLabel();

		
		if(drillLabel!=null && drillLabel!="" && !docComposition){
			rootPar.put(ObjectsTreeConstants.OBJECT_LABEL,drillLabel);
		}
		rootPar.put("PAGE",ExecuteBIObjectModule.MODULE_PAGE);
		rootPar.put(SpagoBIConstants.MESSAGEDET, SpagoBIConstants.EXEC_CROSS_NAVIGATION);
		rootPar.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "TRUE");
		rootPar.put("EXECUTION_FLOW_ID", executionFlowIdO);
		rootPar.put("SOURCE_EXECUTION_ID", uuidO);

		
		
		
		//get from the linkableBar the label and eventually the parameters to pass
		if(((ILinkableChart)sbi).getDrillLabel()!=null)
					rootPar.put(ObjectsTreeConstants.OBJECT_LABEL,((ILinkableChart)sbi).getDrillLabel());


		// Old way portlet		
		String  rootUrl=urlBuilder.getUrl(request,rootPar);
		//rootUrl=rootUrl+rootDocParameter;
	
		String completeUrl=rootUrl;
	
		
		if(docComposition){			
			((ILinkableChart)sbi).setMode(SpagoBIConstants.DOCUMENT_COMPOSITION);
		
			completeUrl="javascript:parent.execCrossNavigation(this.name, '"+drillLabel+"','"+rootDocParameter;
				}
			else
			{
				((ILinkableChart)sbi).setMode("normal");
			}
		

		((ILinkableChart)sbi).setRootUrl(completeUrl);

		}

		
	////////////// Chart creation/////////////////////77
	
		JFreeChart chart=null;
		// create the chart
		chart = sbi.createChart(copyDatasets);

		//Create the temporary file
		String executionId = uuidO;
		executionId = executionId.replaceAll("-", "");

		ChartRenderingInfo info = new ChartRenderingInfo(new StandardEntityCollection());
		//Saving image on a temporary file
		String dir=System.getProperty("java.io.tmpdir");
		String path=dir+"/"+executionId+".png";
		java.io.File file1 = new java.io.File(path);
		ChartUtilities.saveChartAsPNG(file1, chart, sbi.getWidth(), sbi.getHeight(), info);

		/// Chart created and saved
	   		
		
		// Set the Url for refreshing the chart: in case of document composition specify also the execution page and document_id
		Map refreshUrlPars = new HashMap();
		refreshUrlPars.put(LightNavigationManager.LIGHT_NAVIGATOR_DISABLED, "true");
			
		if(sbiMode.equalsIgnoreCase("WEB") || docComposition==true){
		   	refreshUrl=GeneralUtilities.getSpagoBiContextAddress() + GeneralUtilities.getSpagoAdapterHttpUrl() + "?PAGE=ExecuteBIObjectPage&MESSAGEDET=EXEC_PHASE_RUN&OBJECT_ID="+documentid;
			}
			else{
				if(urlBuilder instanceof PortletUrlBuilder){
				   	refreshUrl = ((PortletUrlBuilder)urlBuilder).getRenderUrl(request, refreshUrlPars);
				}
				else{
				  	refreshUrl = urlBuilder.getUrl(request, refreshUrlPars);
				}
			}
		   	
			//String urlPng=urlBuilder.getResourceLink(request, "/servlet/AdapterHTTP?ACTION_NAME=GET_PNG&NEW_SESSION=TRUE&userid="+userId+"&path="+path);
			String urlPng=GeneralUtilities.getSpagoBiContextAddress() + GeneralUtilities.getSpagoAdapterHttpUrl() + "?ACTION_NAME=GET_PNG&NEW_SESSION=TRUE&userid="+userId+"&path="+path;
			
			//add the serie parameter
		if(datasetMap.getSelectedSeries().contains("allseries")){
			refreshUrlCategory=refreshUrl+"&serie=allseries";
				}
		else{
			refreshUrlCategory=refreshUrl;
			for(Iterator iterator = datasetMap.getSelectedSeries().iterator(); iterator.hasNext();){
				String serieS=(String)iterator.next();
				refreshUrlCategory=refreshUrlCategory+"&serie="+serieS;
				}	
		}  	
	%>
	
	
	
	
	
	<%
	 boolean limitSeries=false;
	if(sbi.getType().equalsIgnoreCase("BARCHART") || sbi.getType().equalsIgnoreCase("CLUSTERCHART")){
	limitSeries=true;
	}
	%>
	
	
<% 

	/// If it is a linkable graph  write the MAP
	    if(sbi.isLinkable()){
		PrintWriter pw = new PrintWriter(out);
		ChartUtilities.writeImageMap(pw, "chart", info,new StandardToolTipTagFragmentGenerator(),new StandardURLTagFragmentGenerator());
	    }
	

%>
					<!-- Begin drawing the page -->
<br>
		<table align="left">

			<%if (datasetMap.isMakeSlider() || limitSeries){ %>
				<tr>
			
				<%} %>
				
								 <% 	 
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 // form to limit the series if it is a barchart

	if(limitSeries){
		//sets the URL
		limitSeries=true;
		if(sbiMode.equalsIgnoreCase("WEB") || docComposition)
		{
		refreshUrlSerie=GeneralUtilities.getSpagoBiContextAddress() + GeneralUtilities.getSpagoAdapterHttpUrl();
		refreshUrlPars.put("PAGE","ExecuteBIObjectPage");
		refreshUrlPars.put("MESSAGEDET","EXEC_PHASE_RUN");
		refreshUrlPars.put("OBJECT_ID",documentid);
		}
		else
		{
		refreshUrlSerie=refreshUrl;
		}
	%>
		<td> 
	<div align="center">
	<div class='div_detail_form'>
		<span class='portlet-form-field-label'>
			Select from <%=datasetMap.getSerTitle()%>
		</span>
	</div>
	<div>	
	<form name="serie" action="<%=refreshUrlSerie%>" method="GET" >	
<% 	
	refreshUrlPars.put("category",new Integer(datasetMap.getCategoryCurrent()));
	for(Iterator iterator = refreshUrlPars.keySet().iterator(); iterator.hasNext();)
	{
	String name = (String) iterator.next();
	String value=(refreshUrlPars.get(name)).toString();
%>		
	<input type="hidden" name="<%=name%>" value="<%=value%>"/>	

	<%
	}%>
	<select name="serie" multiple="multiple" SIZE="3" >
	<%if(datasetMap.getSelectedSeries().contains("allseries")){ %>
		<option value="allseries" selected="selected">View all</option>
	<%} else {%>	
		<option value="allseries">View all <%=datasetMap.getSerTitle()%></option>
	<%} %>
		
	<%     	
	    // for each possible serie 
	    if(datasetMap.getSeries()!=null){	
	    for (Iterator iterator = datasetMap.getSeries().iterator(); iterator.hasNext();) {
	    		String ser = (String) iterator.next(); 
	    		if(datasetMap.getSelectedSeries().contains(ser)){
	    		%>
				<option value="<%=ser%>" selected="selected"><%=ser%></option>
					<%}else{ %>
				<option value="<%=ser%>"><%=ser%></option>
	<%} 
	}
	    }%>
	</select>
	<input type="submit" value="Select"/>
	</form>
</div>
</div>
</td>

<%if(!datasetMap.isMakeSlider()){ // if requires serie limit but not slider close the row
			%>   
</tr>
<%} %>


<% 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////// end serie limit
	}
%>


<% 
	    // No slider needed
	if(datasetMap.isMakeSlider()==false){

	    %>
	    <tr>
	    <td>
  	 	<div align="center">
				    <% if(limitSeries){%> <BR><BR> <%}%>
			<img id="image" src="<%=urlPng%>" BORDER="1" alt="Error in displaying the chart" USEMAP="#chart"/>
		</div>
		</td>
		</tr>
		<%}
	else{   /////////////////////// Beginslider creation //////////////////////////
		maxSlider=datasetMap.getCatsnum().toString();
		minSlider="1";
	%>

		<script type="text/javascript" language="JAVASCRIPT">
			<!--
				arrayCats=new Array(<%=datasetMap.getCatsnum().intValue()%>);
				-->
		</script>
	
		<%
		for (Iterator iterator = datasetMap.getCategories().keySet().iterator(); iterator.hasNext();){  
			Integer key=(Integer)iterator.next();
			String name=(String)datasetMap.getCategories().get(key);
		%>

		<script type="text/javascript" language="JAVASCRIPT">
			<!--
				arrayCats[<%=key%>]='<%=name%>';
		     //arrayCats[1]='All';
			//-->
		</script>
		<%} %>
	
	
					<td width="75%" align="left">

										<span class='portlet-form-field-label'>
											<a href="javascript:void(0)" onClick="document.location.href=getAllActionUrl();"> View all </a>  <%=datasetMap.getCatTitle()%> or select from
										</span>
										
								<span  class='portlet-form-field-label'id="slider_1_1_value" width="10%" align="right" >
										</span>
										

						<a href="javascript:void(0)" onClick="document.location.href=getActionUrl();">
							<span id="slider1"></span> 
						</a>

							</td>		
				</tr>
	<!-- 	</form>  -->
		<!--  </table> -->
<tr>
<td> </td>
<td align="left">
 	<div>
 		<img id="image" src="<%=urlPng%>" BORDER=1 alt="Error in displaying the chart" USEMAP="#chart"/>    
	</div>
</td>
</tr>

	<% 
	}
	/////////////////////// End slider creation ////////////////////////// 
	%>
    
    
    
    
        
<%
	////////////////////////////////////////////Radio Buttons IF THERE ARE changeable parameters//////////////////////////////////////////////////////////

	//if(sbi.isChangeableView() && !docComposition){
	
		%>
		<div>
			<table id="changepars" align="center">
			 <tr>
			 
		

			 		 			 
		<%   if(sbi.isChangeableView() && !docComposition){
	    		// for each possible parameter to change creates a checkbox
	    		for (Iterator iterator = changePars.iterator(); iterator.hasNext();) {
	    			String par = (String) iterator.next(); %>
					<td align="right">
						<div class='div_detail_form'>	
							<span class='portlet-form-field-label'>
								<%=sbi.getChangeViewParameterLabel(par,0)%> 
							</span>
				  		 </div>
					</td>
					<td align="left">
	    				<form  name="<%=par%>" action="<%=refreshUrl%>" method="GET" >
	    		  		<%if(sbi.getChangeViewParameter(par)){ %>
	    		  			<input type="radio" name="<%=par%>" value="false" onclick="this.form.submit()" align="left"/><%=sbi.getChangeViewParameterLabel(par,1)%> <BR>
 				  			<input type="radio" name="<%=par%>" value="true"  checked  onclick="this.form.submit()" align="left"/><%=sbi.getChangeViewParameterLabel(par,2)%>  
 			  			<%}
	    		  		else {%>
	    		 			<input type="radio" name="<%=par%>" value="false" checked onclick="this.form.submit()" align="left"/>  <%=sbi.getChangeViewParameterLabel(par,1)%><BR>
							<input type="radio" name="<%=par%>" value="true" onclick="this.form.submit()" align="left"/>  <%=sbi.getChangeViewParameterLabel(par,2)%>
 	    		  		<%} %>
 	    				</form>
 	   				</td>
	  				<%} // close for on cheangeable pars
	  				}%>  
			  </tr>
			 </table>
	</div>
	
	
	
	
	
	
	
	
	
	<% 

 if(datasetMap.isMakeSlider()==true){ %>

 <script type="text/javascript" language="JavaScript">
 
 	function getValue() {return Test.slideZone1.getSlider('start1_1').value;}

	function getAllActionUrl() {
		
		var variable="&category=0";
		var second=variable;
		var url="<%=refreshUrlCategory%>";
		var finalUrl=url+second;
		return finalUrl;
		}
 
	function getActionUrl() {
	// if we are in document composition case then call BObjectExecutePage
		
		var variable="&category=";
		var value=getValue();
		var second=variable+value;
		var url="<%=refreshUrlCategory%>";
		var finalUrl=url+second;
		return finalUrl;
	
}
		

	
	
	Ext.onReady(function() {

		Test = {};

		Test.slideZone1 = new Ext.ux.SlideZone('slider1', {  
			type: 'horizontal',
			size:500,
			sliderWidth: 18,
			sliderHeight: 21,
			maxValue: <%=maxSlider%>,
			minValue: <%=minSlider%>,
			sliderSnap: 1,sliders: [{ value: <%=datasetMap.getValueSlider()%>,  name: 'start1_1'}]
			 });
	
		Test.slideZone1.getSlider('start1_1').on('drag',
		function() {
		value= arrayCats[parseInt(this.value)];
		value="<%=datasetMap.getCatTitle()%>: "+value;		
		document.getElementById('slider_1_1_value').innerHTML=value;
		//$('slider_1_1_value').innerHTML =value;
				}
		)
	
			//document.getElementById('slider_1_1_value').innerHTML = currentName;		
		//$('slider_1_1_value').innerHTML = currentName;
	
	});
	
</script>

<%} %>

<%
Integer refreshSeconds=objO.getRefreshSeconds();
if(refreshSeconds!=null && refreshSeconds.intValue()>0){
Integer refreshConvert=new Integer(refreshSeconds.intValue()*1000);
%>

<script  type="text/javascript">

function refreshpage(){
if(document.getElementById('refreshimage<%= uuidO %>')){
	document.getElementById('refreshimage<%= uuidO %>').click();
	}
}
</script>

 <script type="text/javascript">

    //setTimeout('window.location.reload()', <%=refreshConvert%>);
   setTimeout('javascript:refreshpage()', <%=refreshConvert%>);
   
</script>
 <%} %>
 
 
 
 
 <% 
	} // End no error case
	
	%>







    
