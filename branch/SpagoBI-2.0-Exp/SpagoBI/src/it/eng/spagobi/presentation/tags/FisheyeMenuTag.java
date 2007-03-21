package it.eng.spagobi.presentation.tags;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.RequestContainerAccess;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.ResponseContainerAccess;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spago.tracing.TracerSingleton;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.ChannelUtilities;
import it.eng.spagobi.utilities.SpagoBITracer;
import it.eng.spagobi.utilities.urls.IUrlBuilder;
import it.eng.spagobi.utilities.urls.UrlBuilderFactory;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.TagSupport;

public class FisheyeMenuTag extends TagSupport {

	private ConfigSingleton configuration = null;
	private HttpServletRequest httpRequest = null;
	
	public int doStartTag() throws JspException {
		SpagoBITracer.info(SpagoBIConstants.NAME_MODULE, this.getClass().getName(), 
				           "doStartTag", " method invoked");
		httpRequest = (HttpServletRequest) pageContext.getRequest();
		RequestContainer requestContainer = RequestContainerAccess.getRequestContainer(httpRequest);
		SessionContainer spagoSession = requestContainer.getSessionContainer();
		SessionContainer spagoPermSession = spagoSession.getPermanentContainer();
		IEngUserProfile profile = (IEngUserProfile)spagoPermSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		ResponseContainer responseContainer = ResponseContainerAccess.getResponseContainer(httpRequest);
		SourceBean serviceRequest = requestContainer.getServiceRequest();
		SourceBean serviceResponse = responseContainer.getServiceResponse();
		EMFErrorHandler errorHandler = responseContainer.getErrorHandler();
		configuration = ConfigSingleton.getInstance();
		StringBuffer htmlStream = new StringBuffer();
		StringBuffer jsStream = new StringBuffer();
		try{
			makeMenu(htmlStream, jsStream, configuration, profile);
		} catch (Exception e) {
			SpagoBITracer.critical(SpagoBIConstants.NAME_MODULE, this.getClass().getName(), 
		                           "doStartTag", "Error while creating menu", e);
			throw new JspException("Error while creating menu", e);
		}
		StringBuffer finalStream = new StringBuffer();
		finalStream.append(htmlStream);
		finalStream.append(jsStream);
		try {
			pageContext.getOut().print(finalStream);
		} catch (Exception ex) {
			SpagoBITracer.critical(SpagoBIConstants.NAME_MODULE, this.getClass().getName(), 
					               "doStartTag", "Impossible to send the stream");
			throw new JspException("Impossible to send the stream");
		} 
		return SKIP_BODY;
	}
	
	private void makeMenu(StringBuffer htmlStream, StringBuffer jsStream, 
			              ConfigSingleton configuration, IEngUserProfile profile) throws EMFInternalError {
		
		// create shared initial menu div part 
		htmlStream.append("<div class=\"outerbar\">");
		htmlStream.append("		<div class=\"dojo-FisheyeList\" ");
		htmlStream.append("			 dojo:itemWidth=\"50\" dojo:itemHeight=\"50\" ");
		htmlStream.append("	         dojo:itemMaxWidth=\"100\" dojo:itemMaxHeight=\"100\" ");
		htmlStream.append("			 dojo:orientation=\"horizontal\" dojo:effectUnits=\"2\" ");
		htmlStream.append("			 dojo:itemPadding=\"10\" dojo:attachEdge=\"bottom\" ");
		htmlStream.append("			 dojo:labelEdge=\"top\" dojo:enableCrappySvgSupport=\"false\"> ");
		
		// create menu links based on user functions 
		Collection userFuncts = profile.getFunctionalities();
		List applications = configuration.getAttributeAsList("MENU.APPLICATION");
		Iterator iterApp = applications.iterator();
		while(iterApp.hasNext()) {
			SourceBean appSB = (SourceBean)iterApp.next();
			String functAssociated = (String)appSB.getAttribute("functionality");
			boolean isAllowed = false;
			Iterator userFunctsIter = userFuncts.iterator();
			while(userFunctsIter.hasNext()) {
				String userFunct = (String)userFunctsIter.next();
				if(userFunct.equalsIgnoreCase(functAssociated)) {
					isAllowed = true;
				}
			}
			if(!isAllowed) {
				continue;
			}
			// user can see the link to the application
			String type = (String)appSB.getAttribute("type");
			if(type.equalsIgnoreCase("link")) {
				createLinkMenuItem(htmlStream, jsStream, appSB);
			}
		}
		
		// create menu links based on user roles
		Collection userRoles = profile.getRoles();
		Iterator userRolesIter = userRoles.iterator();
		List views = configuration.getAttributeAsList("MENU.VIEW");
		Iterator iterViews = views.iterator();
		while(iterViews.hasNext()) {
			SourceBean viewSB = (SourceBean)iterViews.next();
			String roleAssociated = (String)viewSB.getAttribute("role");
			boolean isAllowed = false;
			while(userRolesIter.hasNext()) {
				String userRole = (String)userRolesIter.next();
				if(userRole.equalsIgnoreCase(roleAssociated)) {
					isAllowed = true;
				}
			}
			if(!isAllowed) {
				continue;
			}
			// user can see the view
			createViewMenuItem(htmlStream, jsStream, viewSB);
		}
		
		
		// create shared final menu div part 
		htmlStream.append("		</div>");
		htmlStream.append("</div>");
	}
	
	
	public void createLinkMenuItem(StringBuffer htmlStream, StringBuffer jsStream, SourceBean appSB) {
		String width = (String)appSB.getAttribute("width");
		String height = (String)appSB.getAttribute("height");
		String iconUrl = (String)appSB.getAttribute("iconUrl");
		String appCode = (String)appSB.getAttribute("code");
		String appTitle = (String)appSB.getAttribute("title");
		String link = (String)appSB.getAttribute("link");
		createMenuItem(htmlStream, jsStream, appCode, iconUrl, appTitle, link, width, height, "true");
	}
	
	
	public void createViewMenuItem(StringBuffer htmlStream, StringBuffer jsStream, SourceBean viewSB) {
		String width = (String)viewSB.getAttribute("width");
		String height = (String)viewSB.getAttribute("height");
		String iconUrl = (String)viewSB.getAttribute("iconUrl");
		String viewCode = (String)viewSB.getAttribute("code");
		String viewTitle = (String)viewSB.getAttribute("title");
		String link = "/spagobi/servlet/AdapterHTTP?PAGE=ViewBuilderPage&viewCode="+viewCode;
		createMenuItem(htmlStream, jsStream, viewCode, iconUrl, viewTitle, link, width, height, "false");
	}
	
	
	private void createMenuItem(StringBuffer htmlStream, StringBuffer jsStream, String code, 
			                    String iconUrl, String title, String link, String width, 
			                    String height, String resizable) {
		
		String contexName = ChannelUtilities.getSpagoBIContextName(httpRequest);
		if(link.startsWith("/")) {
			link = link.substring(1);
		}
		String htmlFrame = "<div style='position:absolute;top:30px;left:30px;' id='loading"+code+"'>" +
								"<center>" +
									"<br/><br/>" +
									"<span style='font-size:13pt;font-weight:bold;color:darkblue;'>" +
										"Loading" +
									"</span><br/><br/>" +
									"<img src='"+contexName+"/img/wapp/loading.gif' />" +
								"</center>" +
							"</div>" +
							"<iframe id='frame"+code+"' " +
									 "onload='parent.closeLoading"+code+"()' " +
									 "style='width:"+width+"px;height:"+height+"px;visibility:hidden;' " +
									 "frameborder='0' scrolling='auto' noresize  src='"+contexName+"/"+link+"' />";
		
        if(iconUrl.startsWith("/")){
        	iconUrl = iconUrl.substring(1);
        }
		htmlStream.append("<div class=\"dojo-FisheyeListItem\" onClick=\"open_win_"+code+"();\" "); 
		htmlStream.append("		dojo:iconsrc=\""+contexName+"/"+iconUrl+"\" caption=\""+title+"\"> ");
		htmlStream.append("</div>\n");
		
		jsStream.append("<script>\n");
		jsStream.append(" function closeLoading"+code+"() {\n");
		jsStream.append(" 	var load = document.getElementById('loading"+code+"');\n");
		jsStream.append(" 	load.style.display='none';\n");
		jsStream.append(" 	var frame = document.getElementById('frame"+code+"');\n");
		jsStream.append(" 	frame.style.visibility='visible';\n");
		jsStream.append(" }\n");
		jsStream.append(" win"+code+"=null;\n");
		jsStream.append(" function open_win_"+code+"() { \n");
		jsStream.append(" 	if(win"+code+"==null) { \n");
		jsStream.append("		win"+code+" = new Window('win"+code+"', {className: \"alphacube\", title: \""+title+"\", resizable:"+resizable+", destroyOnClose:false, width:"+width+", height:"+height+"});\n");
		//jsStream.append("		win"+code+".getContent().innerHTML=\"<iframe id='frame"+code+"' style='width:"+width+"px;height:"+height+"px;' frameborder='0' scrolling='auto' noresize src='"+link+"' />\";\n"); 
		jsStream.append("		win"+code+".getContent().innerHTML=\""+htmlFrame+"\";\n");
		jsStream.append("		win"+code+".showCenter(false);\n");
		jsStream.append("		observerResize"+code+" = {\n");
		jsStream.append("			onResize: function(eventName, win) {\n");
		jsStream.append("				if(win == win"+code+") { \n");
		jsStream.append("					var heightwin = win.getSize().height;\n");
		jsStream.append("				 	var widthwin = win.getSize().width;\n");
		jsStream.append("				 	var frameapp = document.getElementById('frame"+code+"');\n");
		jsStream.append("				 	frameapp.style.height=heightwin + 'px';\n");
		jsStream.append("				 	frameapp.style.width=widthwin + 'px'; \n");
		jsStream.append("				}\n");
		jsStream.append("			}\n");  
		jsStream.append("		}\n");
		jsStream.append("		observerMaximize"+code+" = {\n");
		jsStream.append("			onMaximize: function(eventName, win) {\n");
		jsStream.append("				if(win == win"+code+") { \n");
		jsStream.append("					var heightwin = win.getSize().height;\n");
		jsStream.append("				 	var widthwin = win.getSize().width;\n");
		jsStream.append("				 	var frameapp = document.getElementById('iframe"+code+"');\n");
		jsStream.append("				 	frameapp.style.height=heightwin + 'px';\n");
		jsStream.append("				 	frameapp.style.width=widthwin + 'px'; \n");
		jsStream.append("				}\n");
		jsStream.append("			}\n");  
		jsStream.append("		}\n");
		jsStream.append("		observerMinimize"+code+" = {\n");
		jsStream.append("			onMinimize: function(eventName, win) {\n");
		jsStream.append("				if(win == win"+code+") { \n");
		jsStream.append("					var heightwin = win.getSize().height;\n");
		jsStream.append("				 	var widthwin = win.getSize().width;\n");
		jsStream.append("					if(win.isMinimized()) {\n");
		jsStream.append("				 		var frameapp = document.getElementById('iframe"+code+"');\n");
		jsStream.append("				 		frameapp.style.display='none';\n");
		jsStream.append("				 	} else {\n");
		jsStream.append("				 		var frameapp = document.getElementById('iframe"+code+"');\n");
		jsStream.append("				 		frameapp.style.display='inline';\n");
		jsStream.append("				 	}\n");
		jsStream.append("				}\n");
		jsStream.append("			}\n");  
		jsStream.append("		}\n");
		jsStream.append("		observerClose"+code+" = {\n");
		jsStream.append("			onClose: function(eventName, win) {\n");
		jsStream.append("				if(win == win"+code+") { \n");
		jsStream.append(" 					win.destroy();\n");
		jsStream.append(" 					win"+code+"=null;\n");
		jsStream.append("				}\n");
		jsStream.append("			}\n");  
		jsStream.append("		}\n");
		jsStream.append("		Windows.addObserver(observerResize"+code+");\n");  
		jsStream.append("		Windows.addObserver(observerMaximize"+code+");\n");
		jsStream.append("		Windows.addObserver(observerMinimize"+code+");\n");
		jsStream.append("		Windows.addObserver(observerClose"+code+");\n");
		jsStream.append("	} else {\n");
		jsStream.append("		win"+code+".show();\n");
		jsStream.append("	}\n");
		jsStream.append("}\n");  
		jsStream.append("</script>\n ");
	}
	
	
	
	
	
	
	public int doEndTag() throws JspException {
		TracerSingleton.log(SpagoBIConstants.NAME_MODULE, TracerSingleton.INFORMATION, 
				            "FisheyeMenuTag::doEndTag:: invoked");
		return super.doEndTag();
	} 


}
