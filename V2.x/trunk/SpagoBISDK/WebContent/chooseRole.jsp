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
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@page import="it.eng.spagobi.services.proxy.SessionServiceProxy"%>
<%@page import="it.eng.spagobi.services.session.exceptions.NonExecutableDocumentException"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Choose role</title>
</head>
<body>

<%
SessionServiceProxy proxy = (SessionServiceProxy) session.getAttribute("spagobi_proxy");
String documentIdStr = request.getParameter("documentId");
Integer documentId = new Integer(documentIdStr);
session.setAttribute("spagobi_documentId", documentId);
// request for valid roles for the execution of a document 
String[] validRoles = null;
try {
	validRoles =  proxy.getCorrectRolesForExecution(documentId);
	if (validRoles.length == 0) {
		%>
		User cannot execute document
		<%
	} else if (validRoles.length == 1) {
		response.sendRedirect("documentParameters.jsp?role=" + validRoles[0]);
	} else {
		%>
		<span><b>Choose the role</b></span>
		<form action="documentParameters.jsp" method="post">
			Choose role: 
			<select name="role">
			<%
			for (int i = 0; i < validRoles.length; i++) {
				%>
				<option value="<%= validRoles[i] %>"><%= validRoles[i] %></option>
				<%
			}
			%>
			</select>
			<input type="submit" value="Go on" />
		</form>
		<%
	}
} catch (NonExecutableDocumentException e) {
	%>
	User cannot execute document
	<%
}
%>

</body>
</html>