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

<%@ include file="/WEB-INF/jsp/commons/portlet_base.jsp"%>
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
<%@page import="org.jfree.chart.ChartRenderingInfo"%>
<%@page import="org.jfree.data.general.Dataset"%>
<%@page import="org.safehaus.uuid.UUIDGenerator"%>
<%@page import="it.eng.spagobi.kpi.config.bo.*"%>
<%@page import="it.eng.spagobi.kpi.threshold.bo.*"%>
<%@page import="it.eng.spagobi.kpi.model.bo.*"%>
<%@page import="org.safehaus.uuid.UUID"%>
<%@page import="org.jfree.chart.entity.StandardEntityCollection"%>
<%@page import="it.eng.spago.error.EMFErrorHandler"%>
<%@page import="java.util.Vector"%>
<%@page import="it.eng.spagobi.analiticalmodel.document.bo.BIObject"%>
<%@page import="org.jfree.data.category.DefaultCategoryDataset"%>
<%@page import="it.eng.spagobi.commons.bo.UserProfile"%>
<%@page import="it.eng.spagobi.engines.kpi.utils.StyleLabel"%>
<%@page import="it.eng.spagobi.engines.kpi.bo.ChartImpl"%>
<%@page import="it.eng.spagobi.engines.kpi.bo.KpiResourceBlock"%>
<%@page import="it.eng.spagobi.engines.kpi.bo.KpiLine"%>
<%@page import="java.util.ArrayList"%> 

<%
	boolean docComposition=false;
    List resources = new ArrayList();
	SourceBean sbModuleResponse = (SourceBean) aServiceResponse.getAttribute("ExecuteBIObjectModule");
 	EMFErrorHandler errorHandler=aResponseContainer.getErrorHandler();
	if(errorHandler.isOK()){    
		SessionContainer permSession = aSessionContainer.getPermanentContainer();

		if(userProfile==null){
			userProfile = (IEngUserProfile) permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
			userId=(String)((UserProfile)userProfile).getUserId();
		}

	}
	ExecutionInstance instanceO = contextManager.getExecutionInstance(ExecutionInstance.class.getName());
	String execContext = instanceO.getExecutionModality();
   	// if in document composition case do not include header.jsp
	   if (execContext == null || !execContext.equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITION)){%>
				<%@ include file="/WEB-INF/jsp/analiticalmodel/execution/header.jsp"%>
				<%
			   }
   		else // in document composition case doesn't call header so set Object and uuid
			   {
	   				docComposition=true;
			   }
	%>
	<link rel="stylesheet" type="text/css" href="<%=urlBuilder.getResourceLink(request, "css/printImage.css")%>" media="print">
		
	<link type="text/css" rel="stylesheet" href="<%=urlBuilder.getResourceLink(request, "css/extjs/ext-ux-slidezone.css")%>"/>
	<script type="text/javascript" src="<%=urlBuilder.getResourceLink(request, "js/extjs/Ext.ux.SlideZone.js")%>"></script>	
	<%
	String title = (String)sbModuleResponse.getAttribute("title");
	String subTitle = (String)sbModuleResponse.getAttribute("subName");
	if (title!=null){
		%>
		<div class="kpi_title_section"><%=title%></div>
			<%}if (subTitle!=null){%>
		<div class="kpi_subtitle_section"><%=subTitle%></div>
		
		<%}
		Boolean display_bullet_chart = (Boolean)sbModuleResponse.getAttribute("display_bullet_chart");	
		Boolean display_alarm = (Boolean)sbModuleResponse.getAttribute("display_alarm");
		Boolean display_semaphore = (Boolean)sbModuleResponse.getAttribute("display_semaphore");
		Boolean display_weight = (Boolean)sbModuleResponse.getAttribute("display_weight");
		Boolean show_axis = (Boolean)sbModuleResponse.getAttribute("show_axis");
		List kpiRBlocks =(List)sbModuleResponse.getAttribute("kpiRBlocks");
		StringBuffer _htmlStream = new StringBuffer();
		if(!kpiRBlocks.isEmpty()){
			Iterator blocksIt = kpiRBlocks.iterator();
			while(blocksIt.hasNext()){
				
				KpiResourceBlock block = (KpiResourceBlock) blocksIt.next();
				if(block.getR()!=null){
					resources.add( block.getR());
				}
				_htmlStream.append(block.makeTree(instanceO, userId,request,display_bullet_chart, display_alarm, display_semaphore,display_weight,show_axis ));
				
			}
			
			String resDiv = "";
			String scriptDiv = "";
			String scriptViewAll = "";
			String scriptHideAll = "";
			if(resources!=null && !resources.isEmpty() && resources.size()>1){
				scriptViewAll = "<script>";
				scriptViewAll += "function viewAll(){";
				scriptHideAll = "<script>";
				scriptHideAll += "function hideAll(){";
				Iterator resIt = resources.iterator();
				scriptDiv += "<script>";
				resDiv += "<div class='slider_header' ><ul>";
				resDiv += "<li class='arrow' id='ss'>";
				resDiv += "<a  href='javascript:viewAll();' style='margin: 0px 0px 5px 10px;' id='ViewAll_click' name='ViewAll_click' > ";
				String viewAll = msgBuilder.getMessage("sbi.kpi.viewAll", request);
				resDiv += viewAll;
				resDiv += "</a> ";
				resDiv += "</li>";
				resDiv += "<li class='arrow' id='ss'>";
				resDiv += "<a  href='javascript:hideAll();' style='margin: 0px 0px 5px 10px;' id='HideAll_click' name='HideAll_click' > ";
				String hideAll = msgBuilder.getMessage("sbi.kpi.hideAll", request);
				resDiv += hideAll;
				resDiv += "</a> ";
				resDiv += "</li>";	
				int col = 2;
				while(resIt.hasNext()){
					col++;
					Resource r = (Resource)resIt.next();
					String resName = r.getName();
					String resDescr = r.getDescr();
					if(col>7){
						resDiv += "</ul><ul>";
					}
					resDiv += "<li class='arrow' id='ss'>";
					resDiv += "<a  href='javascript:void(0);' style='margin: 0px 0px 5px 10px;' id='"+resName+"_click' name='"+resName+"_click' > ";
					resDiv += " "+resDescr;
					resDiv += "</a> ";
					resDiv += "</li>";
						scriptDiv += "toggle('"+resName+"', '"+resName+"_click', true );\n";	

					scriptViewAll += "setVisible('"+resName+"', '"+resName+"_click', true );\n";	
					scriptHideAll += "setVisible('"+resName+"', '"+resName+"_click', false );\n";	
					
					if(col>7){
						col = 0;
					}
				}	
				resDiv += "</ul>";
				resDiv += "</div>";
				 scriptDiv += "</script>";
				 scriptHideAll += "}";
				 scriptHideAll += "</script>";
				 scriptViewAll += "}";
				 scriptViewAll += "</script>";
			}
				%>
			 <%=resDiv%>
			<p>
			<br>
			   <%=_htmlStream%> 
			<br>
			 <%=scriptDiv%>
			 <%=scriptViewAll%>
			 <%=scriptHideAll%>
			 <script>
			 function showLegendTooltip(thresholds,id){
					 element =  document.getElementById(id);
					 var stringa = '<table style="width:auto;" ><tr>';
					
			 	for (i = 0;i<thresholds.length;i++)
					{	
					   stringa =stringa+ '<td style="width:9px;height:9px;vertical-align:middle;" ><div style="margin-top:8px;margin-left:4px;margin-right:2px;width:7px;height:7px;vertical-align:middle;background-color:'+thresholds[i].color+'" /></td><td><div style="margin-top:6px;font-family:Arial;text-align:left;vertical-align:middle;font-size:7pt;height:9px;" >'+thresholds[i].min + '-'+thresholds[i].max+':'+ thresholds[i].label+'</td>';
					}
					stringa =stringa+ '</tr></table>';
					element.innerHTML = stringa;
					element.style.display = 'inline' ;
					
			 }
			 
			 function hideLegendTooltip(id){
					 element =  document.getElementById(id);
					 element.innerHTML = '';
					element.style.display = 'none' ;
					
			 }
			 </script>
		<%}%>		
	<%@ include file="/WEB-INF/jsp/commons/footer.jsp"%>		

		