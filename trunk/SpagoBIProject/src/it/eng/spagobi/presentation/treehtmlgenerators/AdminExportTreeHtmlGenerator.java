/**

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

**/
package it.eng.spagobi.presentation.treehtmlgenerators;

import it.eng.spago.base.SessionContainer;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.LowFunctionality;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.importexport.ImportExportConstants;
import it.eng.spagobi.utilities.ChannelUtilities;
import it.eng.spagobi.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.utilities.urls.UrlBuilderFactory;

import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

/**
 * Implements method to build the tree of objects to export
 */

public class AdminExportTreeHtmlGenerator extends AdminTreeHtmlGenerator {

	/**
	 * Builds the JavaScript object to make the tree. All code is appended into a 
	 * String Buffer, which is then returned. 
	 * @param objectsList The list of objects and functionalities
	 * @param httpReq The http Servlet Request 
	 * @param initialPath The tree initial path
	 */
	public StringBuffer makeTree(List objectsList, HttpServletRequest httpReq, String initialPath) {	
		httpRequest = httpReq;
		reqCont = ChannelUtilities.getRequestContainer(httpRequest);
		urlBuilder = UrlBuilderFactory.getUrlBuilder();
		msgBuilder = MessageBuilderFactory.getMessageBuilder();
		SessionContainer sessionContainer = reqCont.getSessionContainer();
		SessionContainer permanentSession = sessionContainer.getPermanentContainer();
        profile = (IEngUserProfile)permanentSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		StringBuffer htmlStream = new StringBuffer();
		htmlStream.append("<LINK rel='StyleSheet' href='"+urlBuilder.getResourceLink(httpRequest, "/css/dtree.css" )+"' type='text/css' />");
		makeConfigurationDtree(htmlStream);
		String nameTree = msgBuilder.getMessage(reqCont, "tree.objectstree.name" ,"component_impexp_messages");
		htmlStream.append("<SCRIPT language='JavaScript' src='"+urlBuilder.getResourceLink(httpRequest, "/js/dtree.js" )+"'></SCRIPT>");
		htmlStream.append("<SCRIPT language='JavaScript' src='"+urlBuilder.getResourceLink(httpRequest, "/js/contextMenu.js" )+"'></SCRIPT>");
		htmlStream.append("<table width='100%'>");
		htmlStream.append("	<tr height='1px'>");
		htmlStream.append("		<td width='10px'>&nbsp;</td>");
		htmlStream.append("		<td>&nbsp;</td>");
		htmlStream.append("	</tr>");
		htmlStream.append("	<tr>");
		htmlStream.append("		<td>&nbsp;</td>");
		htmlStream.append("		<td>");
		htmlStream.append("			<script language=\"JavaScript1.2\">\n");
	   	htmlStream.append("				var nameTree = 'treeCMS';\n");
	   	htmlStream.append("				treeCMS = new dTree('treeCMS');\n");
	   	htmlStream.append("	        	treeCMS.add(" + dTreeRootId + ",-1,'"+nameTree+"');\n");
	   	Iterator it = objectsList.iterator();
	   	while (it.hasNext()) {
	   		LowFunctionality folder = (LowFunctionality) it.next();
	   		if (initialPath != null) {
	   			if (initialPath.equalsIgnoreCase(folder.getPath())) addItemForJSTree(htmlStream, folder, true);
	   			else addItemForJSTree(htmlStream, folder, false);
	   		} else {
	   			if (folder.getParentId() == null) addItemForJSTree(htmlStream, folder, true);
	   			else addItemForJSTree(htmlStream, folder, false);
	   		}
	   	}
    	htmlStream.append("				document.write(treeCMS);\n");
    	makeJSFunctionForMenu(htmlStream);	
		htmlStream.append("			</script>\n");
		htmlStream.append("		</td>");
		htmlStream.append("	</tr>");
		htmlStream.append("</table>");
		htmlStream.append("<div id='divmenuFunct' class='dtreemenu' onmouseout='hideMenu(event);' >");
		htmlStream.append("		menu");
		htmlStream.append("</div>");
		return htmlStream;
	}
	
	
	
	
	private void addItemForJSTree(StringBuffer htmlStream, LowFunctionality folder, boolean isRoot) {
		
		String nameLabel = folder.getName();
		String name = msgBuilder.getMessage(reqCont, nameLabel, "messages");
		String path = folder.getPath();
		String codeType = folder.getCodType();
		Integer idFolder = folder.getId();
		Integer parentId = folder.getParentId();

		if (isRoot) {
			htmlStream.append("	treeCMS.add(" + idFolder + ", " + dTreeRootId + ",'" + name + "', 'javascript:linkEmpty()', '', '', '', '', 'true', 'menu(event, \\'"+path+"\\')');\n");
		} else {
			if(codeType.equalsIgnoreCase(SpagoBIConstants.LOW_FUNCTIONALITY_TYPE_CODE)) {
				String imgFolder = urlBuilder.getResourceLink(httpRequest, "/img/treefolder.gif");
				String imgFolderOp = urlBuilder.getResourceLink(httpRequest, "/img/treefolderopen.gif");
				htmlStream.append("	treeCMS.add(" + idFolder + ", " + parentId + ",'" + name + "', 'javascript:linkEmpty()', '', '', '"+imgFolder+"', '"+imgFolderOp+"', '', 'menu(event, \\'"+path+"\\')');\n");
				List objects = folder.getBiObjects();
				for (Iterator it = objects.iterator(); it.hasNext(); ) {
					BIObject obj = (BIObject) it.next();
					//if ("BOOKLET".equalsIgnoreCase(obj.getBiObjectTypeCode())) continue;
					String nameObj = obj.getName();
					Integer idObj = obj.getId();
					obj.getFunctionalities();
					String stateObj = obj.getStateCode();
					htmlStream.append("	treeCMS.add("+dTreeObjects--+", "+idFolder+",'"+nameObj+"', 'javascript:linkEmpty()', '', '', '', '', '', '', '"+ImportExportConstants.OBJECT_ID_PATHFUNCT+"', '"+idObj+"_"+path+"');\n");
				}
			}
		}
	}
	
	
	
	/**
	 * Add the javascript function to manage the tree context menu, the selection and deselection of a 
	 * particular branch
	 */
	protected void makeJSFunctionForMenu(StringBuffer htmlStream) {
		htmlStream.append("		function menu(event, pathFather) {\n");
		htmlStream.append("			divM = document.getElementById('divmenuFunct');\n");
		htmlStream.append("			divM.innerHTML = '';\n");
		String capSelect = msgBuilder.getMessage(reqCont, "SBISet.importexport.selectall", "component_impexp_messages");
		htmlStream.append("			divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:select(\\''+pathFather+'\\')\">"+capSelect+"</a></div>';\n");
		String capDeselect = msgBuilder.getMessage(reqCont, "SBISet.importexport.deselectall", "component_impexp_messages");
		htmlStream.append("			divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:deselect(\\''+pathFather+'\\')\">"+capDeselect+"</a></div>';\n");
		htmlStream.append("			showMenu(event, divM);\n");
		htmlStream.append("		}\n");

		
		htmlStream.append("		function linkEmpty() {\n");
		htmlStream.append("		}\n");
		
		htmlStream.append("		function select(path) {\n");
		htmlStream.append("			var checkColl = document.getElementsByName('"+ImportExportConstants.OBJECT_ID_PATHFUNCT+"');\n");
		htmlStream.append("		    for(var i=0; i< checkColl.length; i++){\n");
		htmlStream.append("             value = checkColl[i].value;\n"); 
		htmlStream.append("             if(value.indexOf(path)!= -1) {\n"); 
		htmlStream.append("		    		if(!checkColl[i].checked){\n");
		htmlStream.append("		    			checkColl[i].click();\n");
		htmlStream.append("		    		}\n");
		htmlStream.append("		    	}\n");
		htmlStream.append("		    }\n");
		htmlStream.append("		}\n");
		
		htmlStream.append("		function deselect(path) {\n");
		htmlStream.append("			var checkColl = document.getElementsByName('"+ImportExportConstants.OBJECT_ID_PATHFUNCT+"');\n");
		htmlStream.append("		    for(var i=0; i< checkColl.length; i++){\n");
		htmlStream.append("             value = checkColl[i].value;\n"); 
		htmlStream.append("             if(value.indexOf(path)!= -1) {\n"); 
		htmlStream.append("		    		if(checkColl[i].checked){\n");
		htmlStream.append("		    			checkColl[i].click();\n");
		htmlStream.append("		    		}\n");
		htmlStream.append("		    	}\n");
		htmlStream.append("		    }\n");
		htmlStream.append("		}\n");
	}
	
	
	
}
