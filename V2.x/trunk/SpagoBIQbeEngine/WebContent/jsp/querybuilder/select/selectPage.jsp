<%@ page contentType="text/html; charset=ISO-8859-1"%>
<%@ page language="java" %>


<%@ taglib uri="/WEB-INF/tlds/commons/qctl.tld" prefix="qbe" %>
<%@ taglib uri="/WEB-INF/tlds/jstl-1.1.2/c.tld" prefix="c" %>




<qbe:page>

	<%@include file="../../commons/includeExtJS.jspf" %>
   	
   	
	<qbe:url type="resource" var="href" ref="../css/spagobi.css"/>
	<link rel="styleSheet" href ="${href}" type="text/css" />
	
	<qbe:url type="resource" var="href" ref="../css/qbe.css"/>
	<link rel="styleSheet" href ="${href}" type="text/css" />
	
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/buttonColumn.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/selectGrid.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/filterGrid.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/treePanel.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/queryResultsPanel.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/queryBuilderPanel.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<!-- A Localization Script File comes here -->
    <qbe:url type="resource" var="src" ref="../js/querybuilder/locale.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
	<qbe:url type="resource" var="src" ref="../js/querybuilder/qbe.js"/>
	<script type="text/javascript" src='${src}'/></script>
	
    
    
    
    <script type="text/javascript">    
      Ext.onReady(it.eng.spagobi.engines.qbe.app.init, it.eng.spagobi.engines.qbe.app);        
    </script>
	
     

	<qbe:page-content>

	<div id="tabs"></div>
	<div id="menuTreePane1"></div>
	<div id="menuTreePane2"></div>

	</qbe:page-content>

</qbe:page>
 
 
