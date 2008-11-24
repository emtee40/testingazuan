package it.eng.spagobi.kpi.model.presentation;

import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spagobi.analiticalmodel.functionalitytree.presentation.ITreeHtmlGenerator;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.commons.utilities.messages.IMessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.commons.utilities.urls.IUrlBuilder;
import it.eng.spagobi.commons.utilities.urls.UrlBuilderFactory;
import it.eng.spagobi.kpi.model.bo.Model;

public class ModelStructureTreeHtmlGenerator implements ITreeHtmlGenerator{

	private IUrlBuilder urlBuilder;
	private RequestContainer reqCont;
	private IMessageBuilder msgBuilder;

	public StringBuffer makeAccessibleTree(List objectsList,
			HttpServletRequest httpRequest, String initialPath) {
		// TODO Auto-generated method stub
		return null;
	}

	public StringBuffer makeTree(List objectsList,
			HttpServletRequest httpRequest, String initialPath, String treename) {
		// TODO Auto-generated method stub
		return null;
	}

	public StringBuffer makeTree(List objectsList,
			HttpServletRequest httpRequest, String initialPath) {
		reqCont = ChannelUtilities.getRequestContainer(httpRequest);
		urlBuilder = UrlBuilderFactory.getUrlBuilder();
		msgBuilder = MessageBuilderFactory.getMessageBuilder();
		SessionContainer sessionContainer = reqCont.getSessionContainer();
		SessionContainer permanentSession = sessionContainer.getPermanentContainer();

		StringBuffer htmlStream = new StringBuffer();

		htmlStream.append("<LINK rel='StyleSheet' href='"+urlBuilder.getResourceLink(httpRequest, "/css/dtree.css" )+"' type='text/css' />");
		makeConfigurationDtree(htmlStream, httpRequest);

//		String nameTree = getTreeName(objectsList);
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
		htmlStream.append("				treeCMS = new dTree('treeCMS','" + httpRequest.getContextPath() + "');\n");

		addItems(htmlStream, objectsList, initialPath);

		htmlStream.append("				document.write(treeCMS);\n");
		makeJSFunctionForMenu(htmlStream, httpRequest);	
		htmlStream.append("			</script>\n");
		htmlStream.append("		</td>");
		htmlStream.append("	</tr>");
		htmlStream.append("</table>");
		htmlStream.append("<div id='divmenuFunct' class='dtreemenu' onmouseout='hideMenu(event);' >");
		htmlStream.append("		menu");
		htmlStream.append("</div>");
		return htmlStream;
	}
	
	protected void makeConfigurationDtree(StringBuffer htmlStream, HttpServletRequest httpRequest) {
		htmlStream.append("<SCRIPT language=JavaScript>\n");
		htmlStream.append("		function dTree(objName) {\n");
		htmlStream.append("			this.config = {\n");
		htmlStream.append("				target			: null,\n");
		htmlStream.append("				folderLinks		: true,\n");
		htmlStream.append("				useSelection	: false,\n");
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
	

	protected void addItems(StringBuffer htmlStream, List items,
			String initialPath) {
		Iterator it = items.iterator();
		while (it.hasNext()) {
			Model aModel = (Model)it.next();
			recursiveStepAddItems(htmlStream,aModel);
		}
	}
	
	private void recursiveStepAddItems(StringBuffer htmlStream, Model aModel){
		String name = aModel.getName();
		Integer id =  aModel.getId();
		Integer parentId = aModel.getRootId();
		if (parentId == null)
			parentId = -1;
		// parent
		addItemForJSTree(htmlStream, null,id,parentId , name, true, false, false);
		List modelChildren = aModel.getChildrenNodes();
		// children
		for (Iterator iterator = modelChildren.iterator(); iterator.hasNext();) {
			Model child = (Model) iterator.next();
			recursiveStepAddItems(htmlStream, child);
		}
	}
	
	protected void addItemForJSTree(StringBuffer htmlStream, SourceBean item,
			int id, int parentId, String name, boolean isInitialPath, boolean isFinalPath, boolean kpi) {
		String skpi = (kpi) ? "&nbsp;<span class=\\'kpi\\'>[kpi]</span>" : "";
		String empty="";
		
//		if(name.contains("'")){
//			name=removeApostrophe(name);
//		}
		String title=name;
		if(name.length()>30){
			name=name.substring(0, 29);
			name+="...";
		}
//		if(isInitialPath){
//			htmlStream.append("	treeCMS.add(" + id + ", " + parentId + ",'" + name + skpi +"', 'javascript:linkEmpty()','"+title+"', '', '', '', '', 'menu(event, \\'" + createAddObjectLink(item) + "\\', \\'" + createDetailObjectLink(item) + "\\', \\'" + empty + "\\', \\'\\')' );\n");			
//		}
//		else if(isFinalPath){
//			htmlStream.append("	treeCMS.add(" + id + ", " + parentId + ",'" + name + skpi +"', 'javascript:linkEmpty()','"+title+"', '', '', '', '', 'menu(event, \\'" + empty + "\\', \\'" + createDetailObjectLink(item) + "\\', \\'" + createDeleteObjectLink(item) + "\\', \\'\\')' );\n");
//		}
//		else{
		htmlStream.append("	treeCMS.add(" + id + ", " + parentId + ",'" + name + skpi +"', 'javascript:linkEmpty()','"+title+"', '', '', '', '', 'menu(event, \\'" + empty + "\\', \\'" + empty + "\\', \\'" + empty + "\\', \\'\\')' );\n");
		}
	
	protected void makeJSFunctionForMenu(StringBuffer htmlStream, HttpServletRequest httpRequest) {
		htmlStream.append("		function menu(event, urlAdd, urlDetail, urlErase) {\n");
		htmlStream.append("			divM = document.getElementById('divmenuFunct');\n");
		htmlStream.append("			divM.innerHTML = '';\n");
		String capAdd = msgBuilder.getMessage("s4q.modelTree.captionAdd", "messages", httpRequest);
		htmlStream.append("			if(urlAdd!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlAdd+'\">"+capAdd+"</a></div>';\n");
		String capDetail = msgBuilder.getMessage("s4q.modelTree.captionDetail", "messages", httpRequest);
		htmlStream.append("			if(urlDetail!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlDetail+'\">"+capDetail+"</a></div>';\n");
		String capErase = msgBuilder.getMessage("s4q.modelTree.captionDelete", "messages", httpRequest);
		htmlStream.append("         if(urlErase!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:actionConfirm(\\'"+capErase+"\\', \\''+urlErase+'\\');\">"+capErase+"</a></div>';\n");
		htmlStream.append("				showMenu(event, divM);\n");
		htmlStream.append("		}\n");

		htmlStream.append("		function linkEmpty() {\n");
		htmlStream.append("		}\n");

		String confirmCaption = msgBuilder.getMessage("s4q.modelTree.confirmCaption", "messages", httpRequest);
		htmlStream.append("     function actionConfirm(message, url){\n");
		htmlStream.append("         if (confirm('" + confirmCaption + " ' + message + '?')){\n");
		htmlStream.append("             location.href = url;\n");
		htmlStream.append("         }\n");
		htmlStream.append("     }\n");
	}
}
