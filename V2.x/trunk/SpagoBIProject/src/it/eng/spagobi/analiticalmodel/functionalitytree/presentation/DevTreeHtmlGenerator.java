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

package it.eng.spagobi.analiticalmodel.functionalitytree.presentation;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.service.DetailBIObjectModule;
import it.eng.spagobi.analiticalmodel.document.service.ExecuteBIObjectModule;
import it.eng.spagobi.analiticalmodel.document.service.MetadataBIObjectModule;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.commons.utilities.ObjectsAccessVerifier;
import it.eng.spagobi.commons.utilities.messages.IMessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.commons.utilities.urls.IUrlBuilder;
import it.eng.spagobi.commons.utilities.urls.UrlBuilderFactory;
import it.eng.spagobi.commons.utilities.urls.WebUrlBuilder;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.safehaus.uuid.UUID;
import org.safehaus.uuid.UUIDGenerator;

/**
 * Contains all methods needed to generate and modify a tree object for Developing.
 * There are methods to generate tree, configure, insert and modify elements.
 */
public class DevTreeHtmlGenerator implements ITreeHtmlGenerator {

	HttpServletRequest httpRequest = null;
	RequestContainer reqCont = null;
	protected IUrlBuilder urlBuilder = null;
	protected IMessageBuilder msgBuilder = null;
	int progrJSTree = 0;
	IEngUserProfile profile = null;
	private int dTreeRootId = -100;
	private int dTreeObjects = -1000;
	protected String requestIdentity = null;
	

	/**
	 * @see it.eng.spagobi.commons.presentation.treehtmlgenerators.AdminTreeHtmlGenerator#makeConfigurationDtree(java.lang.StringBuffer)
	 */
	/*
	private void makeConfigurationDtree(StringBuffer htmlStream) {
		
		htmlStream.append("<SCRIPT>\n");
		htmlStream.append("		function dTree(objName) {\n");
		htmlStream.append("			this.config = {\n");
		htmlStream.append("				target			: null,\n");
		htmlStream.append("				folderLinks		: true,\n");
		htmlStream.append("				useSelection	: true,\n");
		htmlStream.append("				useCookies		: true,\n");
		htmlStream.append("				useLines		: true,\n");
		htmlStream.append("				useIcons		: true,\n");
		htmlStream.append("				useStatusText	: true,\n");
		htmlStream.append("				closeSameLevel	: false,\n");
		htmlStream.append("				inOrder			: false\n");
		htmlStream.append("			}\n");
		htmlStream.append("			this.icon = {\n");
		htmlStream.append("				root		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treebase.gif")+"',\n");
		htmlStream.append("				folder		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treefolder.gif")+"',\n");
		htmlStream.append("				folderOpen	: '"+urlBuilder.getResourceLink(httpRequest, "/img/treefolderopen.gif")+"',\n");
		htmlStream.append("				node		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treepage.gif")+"',\n");
		htmlStream.append("				empty		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeempty.gif")+"',\n");
		htmlStream.append("				line		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeline.gif")+"',\n");
		htmlStream.append("				join		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treejoin.gif")+"',\n");
		htmlStream.append("				joinBottom	: '"+urlBuilder.getResourceLink(httpRequest, "/img/treejoinbottom.gif")+"',\n");
		htmlStream.append("				plus		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeplus.gif")+"',\n");
		htmlStream.append("				plusBottom	: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeplusbottom.gif")+"',\n");
		htmlStream.append("				minus		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeminus.gif")+"',\n");
		htmlStream.append("				minusBottom	: '"+urlBuilder.getResourceLink(httpRequest, "/img/treeminusbottom.gif")+"',\n");
		htmlStream.append("				nlPlus		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treenolines_plus.gif")+"',\n");
		htmlStream.append("				nlMinus		: '"+urlBuilder.getResourceLink(httpRequest, "/img/treenolines_minus.gif")+"'\n");
		htmlStream.append("			};\n");
		htmlStream.append("			this.obj = objName;\n");
		htmlStream.append("			this.aNodes = [];\n");
		htmlStream.append("			this.aIndent = [];\n");
		htmlStream.append("			this.root = new Node(-1);\n");
		htmlStream.append("			this.selectedNode = null;\n");
		htmlStream.append("			this.selectedFound = false;\n");
		htmlStream.append("			this.completed = false;\n");
		htmlStream.append("		};\n");
		htmlStream.append("</SCRIPT>\n");
		
	}
	*/
	
	/**
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.presentation.AdminTreeHtmlGenerator#makeJSFunctionForMenu(java.lang.StringBuffer)
	 */
	private void makeJSFunctionForMenu(StringBuffer htmlStream) {
		htmlStream.append("		function menu" + requestIdentity + "((prog, event, urlExecution, urlMetadata, urlDetail, urlList, urlErase) {\n");
		htmlStream.append("			divM = document.getElementById('divmenuFunct" + requestIdentity + "');\n");
		
		htmlStream.append("			divM.innerHTML = '';\n");
		String capExec = msgBuilder.getMessage("SBISet.devObjects.treeCaptionExecute", "messages", httpRequest);
		htmlStream.append("			divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlExecution+'\">"+capExec+"</a></div>';\n");
		String capDetail = msgBuilder.getMessage("SBISet.devObjects.treeCaptionDetail", "messages", httpRequest);
		htmlStream.append("			if(urlDetail!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlDetail+'\">"+capDetail+"</a></div>';\n");
		String capMetadata = msgBuilder.getMessage("SBISet.objects.captionMetadata", "messages", httpRequest);
		htmlStream.append("			if(urlMetadata!=''){ divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:makePopup(\\''+prog+'\\',\\''+urlMetadata+'\\')\" >"+capMetadata+"</a></div>'; }\n");
		
		String capList = msgBuilder.getMessage("SBISet.devObjects.treeCaptionListPar", "messages", httpRequest);
        htmlStream.append("         if(urlList!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlList+'\">"+capList+"</a></div>';\n");
		String capErase = msgBuilder.getMessage("SBISet.devObjects.treeCaptionErase", "messages", httpRequest);
        htmlStream.append("         if(urlErase!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:actionConfirm(\\'"+capErase+"\\', \\''+urlErase+'\\');\">"+capErase+"</a></div>';\n");
        htmlStream.append("				showMenu(event, divM);\n");
		htmlStream.append("		}\n");
		
		htmlStream.append("		function linkEmpty() {\n");
		htmlStream.append("		}\n");
        
		// js function for item action confirm
        String confirmCaption = msgBuilder.getMessage("SBISet.devObjects.treeConfirmCaption", "messages", httpRequest);
        htmlStream.append("     function actionConfirm(message, url){\n");
        htmlStream.append("         if (confirm('" + confirmCaption + " ' + message + '?')){\n");
        htmlStream.append("             location.href = url;\n");
        htmlStream.append("         }\n");
        htmlStream.append("     }\n");
        
    	htmlStream.append("function makePopup(id, urlMetadata ) {\n");		
		htmlStream.append(" var win = new Ext.Window({id:id , \n"
					+"            bodyCfg:{ \n" 
					+"                tag:'div' \n"
					+"                ,cls:'x-panel-body' \n"
					+"               ,children:[{ \n"
					+"                    tag:'iframe', \n"
					+"                    name: 'dynamicIframe1', \n"
					+"                    id  : 'dynamicIframe1', \n"
					+"                    src: urlMetadata , \n"
					+"                    frameBorder:0, \n"
					+"                    width:'100%', \n"
					+"                    height:'100%', \n"
					+"                    style: {overflow:'auto'}  \n "        
					+"               }] \n"
					+"            }, \n"
					+"            modal: true,\n"
					+"            layout:'fit',\n"
					+"            height:400,\n"
			+"            width:500,\n"
			+"            closeAction:'close',\n"
			+"            scripts: true, \n"
			+"            plain: true \n"
														        
			+"        });  \n"
			+"   win.show(); \n" );
						
		htmlStream.append("}\n");
        
	}

	
	
	public StringBuffer makeTree(List objectsList, HttpServletRequest httpRequest, String initialPath, String treename) {
		return makeTree(objectsList, httpRequest, initialPath);
	}
	
	
	public StringBuffer makeTree(List objectsList, HttpServletRequest httpReq, String initialPath) {
		
		// identity string for object of the page
	    UUIDGenerator uuidGen  = UUIDGenerator.getInstance();
	    UUID uuid = uuidGen.generateTimeBasedUUID();
	    requestIdentity = uuid.toString();
	    requestIdentity = requestIdentity.replaceAll("-", "");
		httpRequest = httpReq;
		reqCont = ChannelUtilities.getRequestContainer(httpRequest);
		urlBuilder = UrlBuilderFactory.getUrlBuilder();
		msgBuilder = MessageBuilderFactory.getMessageBuilder();
		SessionContainer sessionContainer = reqCont.getSessionContainer();
		SessionContainer permanentSession = sessionContainer.getPermanentContainer();
        profile = (IEngUserProfile)permanentSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		StringBuffer htmlStream = new StringBuffer();
		htmlStream.append("<LINK rel='StyleSheet' href='"+urlBuilder.getResourceLink(httpRequest, "/css/dtree.css" )+"' type='text/css' />");
		//makeConfigurationDtree(htmlStream);
		String nameTree = msgBuilder.getMessage("tree.objectstree.name" ,"messages", httpRequest);
		htmlStream.append("<SCRIPT language='JavaScript' src='"+urlBuilder.getResourceLink(httpRequest, "/js/dtree.js" )+"'></SCRIPT>");
		htmlStream.append("<SCRIPT language='JavaScript' src='"+urlBuilder.getResourceLink(httpRequest, "/js/contextMenu.js" )+"'></SCRIPT>");
		htmlStream.append("<table width='100%'>");
		htmlStream.append("	<tr height='1px'>");
		htmlStream.append("		<td width='10px'>&nbsp;</td>");
		htmlStream.append("		<td>&nbsp;</td>");
		htmlStream.append("	</tr>");
		htmlStream.append("	<tr>");
		htmlStream.append("		<td>&nbsp;</td>");
		htmlStream.append("		<td id='treeDevObjTd" + requestIdentity + "' name='treeDevObjTd" + requestIdentity + "'>&nbsp;</td>");
		htmlStream.append("			<script language=\"JavaScript1.2\">\n");
	   	htmlStream.append("				var nameTree = 'treeDevObjects';\n");
	   	htmlStream.append("				treeDevObjects = new dTree('treeDevObjects', '" + httpRequest.getContextPath() + "');\n");
	   	htmlStream.append("	        	treeDevObjects.add(" + dTreeRootId + ",-1,'"+nameTree+"');\n");
	   	Iterator it = objectsList.iterator();
	   	while (it.hasNext()) {
	   		LowFunctionality folder = (LowFunctionality) it.next();
	   		/* ********* start luca changes *************** */
	   		boolean isUserFunct = folder.getPath().startsWith("/"+profile.getUserUniqueIdentifier());
	   		if(isUserFunct) {
	   			continue;
	   		}
	   		/* ********* end luca changes ***************** */
	   		if (initialPath != null) {
	   			if (initialPath.equalsIgnoreCase(folder.getPath())) addItemForJSTree(htmlStream, folder, true);
	   			else addItemForJSTree(htmlStream, folder, false);
	   		} else {
	   			if (folder.getParentId() == null) addItemForJSTree(htmlStream, folder, true);
	   			else addItemForJSTree(htmlStream, folder, false);
	   		}
	   	}
    	htmlStream.append("				document.getElementById('treeDevObjTd" + requestIdentity + "').innerHTML = treeDevObjects;\n");
    	makeJSFunctionForMenu(htmlStream);	
		htmlStream.append("			</script>\n");
		htmlStream.append("	</tr>");
		htmlStream.append("</table>");
		htmlStream.append("<div id='divmenuFunct" + requestIdentity + "' class='dtreemenu' onmouseout='hideMenu(event, \"divmenuFunct" + requestIdentity + "\");' >");
		htmlStream.append("		menu");
		htmlStream.append("</div>");
		return htmlStream;
		
	}

	private void addItemForJSTree(StringBuffer htmlStream, LowFunctionality folder, boolean isRoot) {
		
		String nameLabel = folder.getName();
		String name = msgBuilder.getMessage(nameLabel, "messages", httpRequest);
		Integer idFolder = folder.getId();
		Integer parentId = folder.getParentId();

		if (isRoot) {
			htmlStream.append("	treeDevObjects.add(" + idFolder + ", " + dTreeRootId + ",'" + name + "', '', '', '', '', '', 'true');\n");
		} else {
			if (ObjectsAccessVerifier.canDev(idFolder, profile) || ObjectsAccessVerifier.canExec(idFolder, profile)) {
				String imgFolder = urlBuilder.getResourceLink(httpRequest, "/img/treefolder.gif");
				String imgFolderOp = urlBuilder.getResourceLink(httpRequest, "/img/treefolderopen.gif");
				htmlStream.append("	treeDevObjects.add(" + idFolder + ", " + parentId + ",'" + name + "', '', '', '', '" + imgFolder + "', '" + imgFolderOp + "', '', '');\n");
				List objects = folder.getBiObjects();
				for (Iterator it = objects.iterator(); it.hasNext(); ) {
					
					BIObject obj = (BIObject) it.next();
					String biObjType = obj.getBiObjectTypeCode();
					String imgUrl = "/img/objecticon_"+ biObjType+ ".png";
					String userIcon = urlBuilder.getResourceLink(httpRequest, imgUrl);
					String biObjState = obj.getStateCode();
					String stateImgUrl = "/img/stateicon_"+ biObjState+ ".png";
					String stateIcon = urlBuilder.getResourceLink(httpRequest, stateImgUrl);
					Integer idObj = obj.getId();
					String stateObj = obj.getStateCode();
					String prog = idObj.toString();
					if (ObjectsAccessVerifier.canDev(stateObj, idFolder, profile)) {
						htmlStream.append("	treeDevObjects.add(" + dTreeObjects-- + ", " + idFolder + ",'<img src=\\'" + stateIcon + "\\' /> " + obj.getName() + "', 'javascript:linkEmpty()', '', '', '" + userIcon + "', '', '', 'menu" + requestIdentity + "("+prog+", \\'"+createExecuteObjectLink(idObj)+"\\',\\'" + createMetadataObjectLink(idObj) + "\\', \\'"+createDetailObjectLink(idObj)+"\\', \\'\\', \\'"+createEraseObjectLink(idObj, idFolder)+"\\')' );\n");
					} /* anto else if(ObjectsAccessVerifier.canExec(stateObj, idFolder, profile)) {
						htmlStream.append("	treeDevObjects.add(" + dTreeObjects-- + ", " + idFolder + ",'<img src=\\'" + stateIcon + "\\' /> " + obj.getName() + "', 'javascript:linkEmpty()', '', '', '" + userIcon + "', '', '', 'menu" + requestIdentity + "(event, \\'"+createExecuteObjectLink(idObj)+"\\', \\'\\', \\'\\', \\'\\')' );\n");
					}*/
				}
			}
		}
	}

	public StringBuffer makeAccessibleTree(List objectsList, HttpServletRequest httpRequest, String initialPath) {
		// TODO Auto-generated method stub
		return null;
	}
	
	private String createExecuteObjectLink(Integer id) {
		HashMap execUrlParMap = new HashMap();
		execUrlParMap.put(ObjectsTreeConstants.PAGE, ExecuteBIObjectModule.MODULE_PAGE);
		execUrlParMap.put(ObjectsTreeConstants.OBJECT_ID, id.toString());
		execUrlParMap.put(SpagoBIConstants.MESSAGEDET, ObjectsTreeConstants.EXEC_PHASE_CREATE_PAGE);
		String execUrl = urlBuilder.getUrl(httpRequest, execUrlParMap);
		return execUrl;
	}
	
	private String createMetadataObjectLink(Integer id) {
		IUrlBuilder urlBuilderWeb =  new WebUrlBuilder();
		HashMap detUrlParMap = new HashMap();
		detUrlParMap.put(ObjectsTreeConstants.PAGE, MetadataBIObjectModule.MODULE_PAGE);
		detUrlParMap.put(ObjectsTreeConstants.MESSAGE_DETAIL, ObjectsTreeConstants.METADATA_SELECT);
		detUrlParMap.put(ObjectsTreeConstants.OBJECT_ID, id.toString());
		String detUrl = urlBuilderWeb.getUrl(httpRequest, detUrlParMap);
		return detUrl;
	}

	private String createDetailObjectLink(Integer id) {
		HashMap detUrlParMap = new HashMap();
		detUrlParMap.put(ObjectsTreeConstants.PAGE, DetailBIObjectModule.MODULE_PAGE);
		detUrlParMap.put(ObjectsTreeConstants.MESSAGE_DETAIL, ObjectsTreeConstants.DETAIL_SELECT);
		detUrlParMap.put(ObjectsTreeConstants.OBJECT_ID, id.toString());
		String detUrl = urlBuilder.getUrl(httpRequest, detUrlParMap);
		return detUrl;
	}
	
	private String createEraseObjectLink(Integer idObj, Integer idFunct) {
		HashMap delUrlParMap = new HashMap();
		delUrlParMap.put(ObjectsTreeConstants.PAGE, DetailBIObjectModule.MODULE_PAGE);
		delUrlParMap.put(ObjectsTreeConstants.MESSAGE_DETAIL, ObjectsTreeConstants.DETAIL_DEL);
		delUrlParMap.put(ObjectsTreeConstants.OBJECT_ID, idObj.toString());
		delUrlParMap.put(ObjectsTreeConstants.FUNCT_ID, idFunct.toString());
		String delUrl = urlBuilder.getUrl(httpRequest, delUrlParMap);
		return delUrl;
	}
	
}
