<!--
/**
 *
 *	LICENSE: see COPYING file
 *
**/
-->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<%@ page 
language="java"
import="it.eng.spago.error.EMFErrorHandler"
extends="it.eng.spago.dispatching.httpchannel.AbstractHttpJspPage"
contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"
session="true"
errorPage="/jsp/spago/jspError.jsp"
%>
<%
EMFErrorHandler errorHandler = getErrorHandler(request);
%>
<META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<META http-equiv="Content-Style-Type" content="text/css">
<TITLE>Service Error</TITLE>
</HEAD>
<BODY>
<P align="center"><B><FONT size="4" color="#000080" face="Courier New">Service
Error</FONT></B></P>
<P><BR>
</P>
<TABLE align="center" cols=1 width="90%">
	<TR>
		<TD><BR>
		</TD>
	</TR>
	<TR>
		<TD align="center"><B>Siamo spiacenti, si � verificato un errore
		interno all'applicativo.</B><BR>
		</TD>
	</TR>
	<TR>
		<TD><BR>
		</TD>
	</TR>
	<TR>
		<TD align="center"><TEXTAREA rows="22" name="error_message" cols="80"><%=errorHandler.getStackTrace()%></TEXTAREA>
		</TD>
	</TR>
</TABLE>
</BODY>
</HTML>

