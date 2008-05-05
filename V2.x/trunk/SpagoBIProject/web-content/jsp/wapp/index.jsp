<%--
SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2008 Engineering Ingegneria Informatica S.p.A.

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
<%@ page language="java"
         extends="it.eng.spago.dispatching.httpchannel.AbstractHttpJspPagePortlet"
         contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"
         session="true" 
%>
<%@page import="it.eng.spagobi.commons.utilities.ChannelUtilities"%>
<% String contextName = ChannelUtilities.getSpagoBIContextName(request);
    String redirectURL = contextName+"/servlet/AdapterHTTP?PAGE=LoginPage&NEW_SESSION=TRUE&MESSAGE=START_LOGIN";
    response.sendRedirect(redirectURL);
%>
<HTML>
<HEAD>
<TITLE>Redirect...</TITLE> 

</HEAD>
<BODY>
Redirect in corso...
</BODY>
