package it.eng.spagobi.kpi.model.presentation;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spagobi.analiticalmodel.functionalitytree.presentation.ITreeHtmlGenerator;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.utilities.ChannelUtilities;
import it.eng.spagobi.commons.utilities.messages.IMessageBuilder;
import it.eng.spagobi.commons.utilities.messages.MessageBuilderFactory;
import it.eng.spagobi.commons.utilities.urls.IUrlBuilder;
import it.eng.spagobi.commons.utilities.urls.UrlBuilderFactory;
import it.eng.spagobi.kpi.model.bo.ModelInstance;
import it.eng.spagobi.kpi.model.utils.DetailModelInstanceUtil;

public class ModelInstanceStructureTreeHtmlGenerator implements
		ITreeHtmlGenerator {

	private IUrlBuilder urlBuilder;
	private RequestContainer reqCont;
	private IMessageBuilder msgBuilder;
	private Integer parentId;

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
		SessionContainer permanentSession = sessionContainer
				.getPermanentContainer();

		StringBuffer htmlStream = new StringBuffer();

		htmlStream.append("<LINK rel='StyleSheet' href='"
				+ urlBuilder.getResourceLink(httpRequest, "/css/dtree.css")
				+ "' type='text/css' />");
		makeConfigurationDtree(htmlStream, httpRequest);

		// String nameTree = getTreeName(objectsList);
		htmlStream.append("<SCRIPT language='JavaScript' src='"
				+ urlBuilder.getResourceLink(httpRequest, "/js/dtree.js")
				+ "'></SCRIPT>");
		htmlStream.append("<SCRIPT language='JavaScript' src='"
				+ urlBuilder.getResourceLink(httpRequest, "/js/contextMenu.js")
				+ "'></SCRIPT>");
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
		htmlStream.append("				treeCMS = new dTree('treeCMS','"
				+ httpRequest.getContextPath() + "');\n");

		addItems(htmlStream, objectsList, httpRequest, initialPath);

		htmlStream.append("				document.write(treeCMS);\n");
		makeJSFunctionForMenu(htmlStream, httpRequest);
		htmlStream.append("			</script>\n");
		htmlStream.append("		</td>");
		htmlStream.append("	</tr>");
		htmlStream.append("</table>");
		htmlStream
				.append("<div id='divmenuFunct' class='dtreemenu' onmouseout='hideMenu(event);' >");
		htmlStream.append("		menu");
		htmlStream.append("</div>");
		return htmlStream;
	}

	protected void makeConfigurationDtree(StringBuffer htmlStream,
			HttpServletRequest httpRequest) {
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
		htmlStream.append("				root		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treebase.gif")
				+ "',\n");
		htmlStream.append("				folder		: '"
				+ urlBuilder
						.getResourceLink(httpRequest, "/img/treefolder.gif")
				+ "',\n");
		htmlStream.append("				folderOpen	: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treefolderopen.gif") + "',\n");
		htmlStream.append("				node		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treepage.gif")
				+ "',\n");
		htmlStream.append("				empty		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treeempty.gif")
				+ "',\n");
		htmlStream.append("				line		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treeline.gif")
				+ "',\n");
		htmlStream.append("				join		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treejoin.gif")
				+ "',\n");
		htmlStream.append("				joinBottom	: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treejoinbottom.gif") + "',\n");
		htmlStream.append("				plus		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treeplus.gif")
				+ "',\n");
		htmlStream.append("				plusBottom	: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treeplusbottom.gif") + "',\n");
		htmlStream.append("				minus		: '"
				+ urlBuilder.getResourceLink(httpRequest, "/img/treeminus.gif")
				+ "',\n");
		htmlStream.append("				minusBottom	: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treeminusbottom.gif") + "',\n");
		htmlStream.append("				nlPlus		: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treenolines_plus.gif") + "',\n");
		htmlStream.append("				nlMinus		: '"
				+ urlBuilder.getResourceLink(httpRequest,
						"/img/treenolines_minus.gif") + "'\n");
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
			HttpServletRequest httpRequest, String initialPath) {
		Iterator it = items.iterator();
		while (it.hasNext()) {
			ModelInstance aModel = (ModelInstance) it.next();
			parentId = aModel.getId();
			recursiveStepAddItems(htmlStream, aModel, httpRequest);
		}
	}

	private void recursiveStepAddItems(StringBuffer htmlStream,
			ModelInstance aModel, HttpServletRequest httpRequest) {
		String name = aModel.getName();
		Integer id = aModel.getId();
		Integer parentId = aModel.getParentId();
		boolean kpi = (aModel.getKpiInstance()!= null && aModel.getKpiInstance().getKpi()!= null);
		if (parentId == null)
			parentId = -1;
		// parent
		addItemForJSTree(htmlStream, aModel, id, parentId, name, true, false,
				kpi, httpRequest);
		List modelChildren = aModel.getChildrenNodes();
		// children
		for (Iterator iterator = modelChildren.iterator(); iterator.hasNext();) {
			ModelInstance child = (ModelInstance) iterator.next();
			recursiveStepAddItems(htmlStream, child, httpRequest);
		}
	}

	protected void addItemForJSTree(StringBuffer htmlStream,
			ModelInstance item, int id, int parentId, String name,
			boolean isInitialPath, boolean isFinalPath, boolean kpi,
			HttpServletRequest httpRequest) {
		String skpi = (kpi) ? "&nbsp;<span class=\\'kpi\\'>[kpi]</span>" : "";
		String delete = "";
		String add = "";

		String title = name;
		if (name.length() > 30) {
			name = name.substring(0, 29);
			name += "...";
		}

		if (DetailModelInstanceUtil.getCandidateModelChildren(id).size() > 0) {
			add = createAddObjectLink(item, httpRequest);
		}
		if (parentId != -1) {
			delete = createDeleteObjectLink(item, httpRequest);
		}

		htmlStream.append("	treeCMS.add(" + id + ", " + parentId + ",'" + name
				+ skpi + "', 'javascript:linkEmpty()','" + title
				+ "', '', '', '', '', 'menu(event, \\'" + add + "\\', \\'"
				+ createDetailObjectLink(item, httpRequest) + "\\', \\'"
				+ delete + "\\', \\'\\')' );\n");
	}

	protected void makeJSFunctionForMenu(StringBuffer htmlStream,
			HttpServletRequest httpRequest) {
		String messageBundle = "component_kpi_messages";
		htmlStream
				.append("		function menu(event, urlAdd, urlDetail, urlErase) {\n");
		htmlStream
				.append("			divM = document.getElementById('divmenuFunct');\n");
		htmlStream.append("			divM.innerHTML = '';\n");
		String capAdd = msgBuilder.getMessage("sbi.modelTree.captionAdd",
				messageBundle, httpRequest);
		htmlStream
				.append("			if(urlAdd!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlAdd+'\">"
						+ capAdd + "</a></div>';\n");
		String capDetail = msgBuilder.getMessage("sbi.modelTree.captionDetail",
				messageBundle, httpRequest);
		htmlStream
				.append("			if(urlDetail!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"'+urlDetail+'\">"
						+ capDetail + "</a></div>';\n");
		String capErase = msgBuilder.getMessage("sbi.modelTree.captionDelete",
				messageBundle, httpRequest);
		htmlStream
				.append("         if(urlErase!='') divM.innerHTML = divM.innerHTML + '<div onmouseout=\"this.style.backgroundColor=\\'white\\'\"  onmouseover=\"this.style.backgroundColor=\\'#eaf1f9\\'\" ><a class=\"dtreemenulink\" href=\"javascript:actionConfirm(\\'"
						+ capErase
						+ "\\', \\''+urlErase+'\\');\">"
						+ capErase
						+ "</a></div>';\n");
		htmlStream.append("				showMenu(event, divM);\n");
		htmlStream.append("		}\n");

		htmlStream.append("		function linkEmpty() {\n");
		htmlStream.append("		}\n");

		String confirmCaption = msgBuilder.getMessage(
				"sbi.modelTree.captionConfirm", "component_kpi_messages",
				httpRequest);
		htmlStream.append("     function actionConfirm(message, url){\n");
		htmlStream.append("         if (confirm('" + confirmCaption
				+ " ' + message + '?')){\n");
		htmlStream.append("             location.href = url;\n");
		htmlStream.append("         }\n");
		htmlStream.append("     }\n");
	}

	protected String createDetailObjectLink(ModelInstance aModel,
			HttpServletRequest httpRequest) {
		HashMap editUrlParMap = new HashMap();
		editUrlParMap.put(SpagoBIConstants.PAGE, "ModelInstanceTreePage");
		editUrlParMap.put("MODULE", "DetailModelInstanceTreeModule");
		editUrlParMap.put("MESSAGE", "DETAIL_SELECT");
		editUrlParMap.put("ID", parentId);
		editUrlParMap.put("MODEL_ID", aModel.getId());
		String editUrl = urlBuilder.getUrl(httpRequest, editUrlParMap);

		return editUrl;
	}

	protected String createAddObjectLink(ModelInstance aModel,
			HttpServletRequest httpRequest) {
		HashMap addUrlParMap = new HashMap();
		addUrlParMap.put(SpagoBIConstants.PAGE, "ModelInstanceTreePage");
		addUrlParMap.put("MODULE", "DetailModelInstanceTreeModule");
		addUrlParMap.put("MESSAGE", "DETAIL_NEW");
		addUrlParMap.put("ID", parentId);
		addUrlParMap.put("MODEL_ID", aModel.getId());
		String addUrl = urlBuilder.getUrl(httpRequest, addUrlParMap);
		return addUrl;
	}

	protected String createDeleteObjectLink(ModelInstance aModel,
			HttpServletRequest httpRequest) {
		HashMap deleteUrlParMap = new HashMap();
		deleteUrlParMap.put(SpagoBIConstants.PAGE, "ModelInstanceTreePage");
		deleteUrlParMap.put("MODULE", "ListModelInstanceTreeModule");
		deleteUrlParMap.put("MESSAGE", "DETAIL_DELETE");
		deleteUrlParMap.put("ID", parentId);
		deleteUrlParMap.put("MODEL_ID", aModel.getId());
		String addUrl = urlBuilder.getUrl(httpRequest, deleteUrlParMap);
		return addUrl;
	}
}
