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
package it.eng.spagobi.presentation.tags;

import it.eng.spago.base.Constants;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.RequestContainerPortletAccess;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.tracing.TracerSingleton;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.bo.ObjParuse;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.bo.ParameterUse;
import it.eng.spagobi.bo.ScriptDetail;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IObjParuseDAO;
import it.eng.spagobi.bo.dao.IParameterUseDAO;
import it.eng.spagobi.constants.ObjectsTreeConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.PortletUtilities;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.portlet.PortletRequest;
import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.TagSupport;

/**
 * Defines a tag to create a dinamic JSP page
 * 
 * @author sulis
 */
public class DynamicPageTag extends TagSupport {


	private RenderResponse renderResponse = null;
	private RenderRequest renderRequest = null;
	private String modality = null;
	private String actor = null;
	private String moduleName = "";
	PortletRequest portReq = null;
	private BIObject obj = null;
	
	
	
	
	
	/**
	 * @see it.eng.spagobi.presentation.tags.ListTag#doStartTag()
	 * 
	 */
	public int doStartTag() throws JspException {
		
		StringBuffer htmlStream = new StringBuffer();
		HttpServletRequest httpRequest = (HttpServletRequest) pageContext.getRequest();
		renderResponse =(RenderResponse)httpRequest.getAttribute("javax.portlet.response");
		renderRequest =(RenderRequest)httpRequest.getAttribute("javax.portlet.request");
		RequestContainer requestContainer = RequestContainerPortletAccess.getRequestContainer(httpRequest);
		SessionContainer session = requestContainer.getSessionContainer();
		obj = (BIObject)session.getAttribute(ObjectsTreeConstants.SESSION_OBJ_ATTR);
		portReq = PortletUtilities.getPortletRequest();
		
		// an empty input type hidden and the correspondent JavaScript to popolate it in case there is a lookup call (in case of query or script) 
		htmlStream.append("<input type='hidden' id='LOOKUP_OBJ_PAR_ID' name='' value=''/>\n");
		htmlStream.append("<script type='text/javascript'>\n");
		htmlStream.append("	function setLookupField(idStr) {\n");
		htmlStream.append("		document.getElementById('LOOKUP_OBJ_PAR_ID').value= idStr;\n");
		htmlStream.append("		document.getElementById('LOOKUP_OBJ_PAR_ID').name = 'LOOKUP_OBJ_PAR_ID';\n");
		htmlStream.append("	}\n");
		htmlStream.append("</script>\n");
		
		htmlStream.append("<div class='div_detail_area_forms'>\n");
        List parameters = obj.getBiObjectParameters();
        Iterator iter = parameters.iterator();
        while(iter.hasNext()) {
        	BIObjectParameter biparam = (BIObjectParameter)iter.next();
        	boolean createLabelAndForm = true;
        	
        	Parameter par = biparam.getParameter();
        	ModalitiesValue paruse = par.getModalityValue();
        	String inputType = paruse.getITypeCd();
        	if(inputType.equalsIgnoreCase("SCRIPT")) {
        		String lov = paruse.getLovProvider();
        		ScriptDetail scriptDet = null;
        		try{
        			scriptDet = ScriptDetail.fromXML(lov);
        		} catch(Exception e) {
        			scriptDet = null;
        		}
        		if( (scriptDet!=null) && scriptDet.isSingleValue()) {
        			createLabelAndForm = false;
        			List biparValues = biparam.getParameterValues();
        			Object value = biparValues.get(0);
            		htmlStream.append("<input type='hidden' name='"+biparam.getParameterUrlName()+"' value='"+value+"' />\n");
        		}
        	}        	
        	if(createLabelAndForm) {
        		htmlStream.append("		<div class='div_detail_label_lov'>\n");
        		htmlStream.append("			<span class='portlet-form-field-label'>\n");
        		htmlStream.append(biparam.getLabel());
        		htmlStream.append("			</span>\n");
        		htmlStream.append("		</div>\n");
        		htmlStream.append("		<div class='div_detail_form'>\n");
        		String objParFatherLabel = createHTMLForm(biparam, htmlStream);
        		htmlStream.append("		</div>\n");
        		if (objParFatherLabel != null) {
            		htmlStream.append("		<div class='div_detail_label_lov'>\n");
            		htmlStream.append("			<span class='portlet-form-field-label'>\n");
            		htmlStream.append("				&nbsp;");
            		htmlStream.append("			</span>\n");
            		htmlStream.append("		</div>\n");
            		htmlStream.append("		<div class='div_detail_form'>\n");
        			String correlation = PortletUtilities.getMessage("SBIDev.docConf.execBIObjectParams.correlatedParameter", "messages");
            		htmlStream.append("			<span class='portlet-form-field-label'>\n");
            		htmlStream.append(correlation + " " + objParFatherLabel + "\n");
            		htmlStream.append("			</span>\n");
            		htmlStream.append("		</div>\n");
        		}
        	}
        }
        
        htmlStream.append("		<div class='div_detail_label_lov'>\n");
        htmlStream.append("			&nbsp;\n");
        htmlStream.append("		</div>\n");
        htmlStream.append("		<div class='div_detail_form'>\n");
        htmlStream.append("				<a href='javascript:void(0)' onclick='clearFields()' class='portlet-form-field-label'>\n");
        String resetFieldsLbl = PortletUtilities.getMessage("SBIDev.docConf.execBIObjectParams.resetFields", "messages");
        htmlStream.append("					" + resetFieldsLbl + "\n");
        htmlStream.append("				</a>\n");
        htmlStream.append("		</div>\n");
		htmlStream.append("</div>\n");
		
//		htmlStream.append("<table width='100%'>\n");
//		htmlStream.append("		<tr height='1px'>\n");
//		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
//		htmlStream.append("			<td width='18%'>&nbsp;</td>\n");
//		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
//		htmlStream.append("			<td>&nbsp;</td>\n");
//		htmlStream.append("		</tr>\n");
//        List parameters = obj.getBiObjectParameters();
//        Iterator iter = parameters.iterator();
//        while(iter.hasNext()) {
//        	BIObjectParameter biparam = (BIObjectParameter)iter.next();
//        	boolean createLabelAndForm = true;
//        	
//        	Parameter par = biparam.getParameter();
//        	ModalitiesValue paruse = par.getModalityValue();
//        	String inputType = paruse.getITypeCd();
//        	if(inputType.equalsIgnoreCase("SCRIPT")) {
//        		String lov = paruse.getLovProvider();
//        		ScriptDetail scriptDet = null;
//        		try{
//        			scriptDet = ScriptDetail.fromXML(lov);
//        		} catch(Exception e) {
//        			scriptDet = null;
//        		}
//        		if( (scriptDet!=null) && scriptDet.isSingleValue()) {
//        			createLabelAndForm = false;
//        			List biparValues = biparam.getParameterValues();
//        			Object value = biparValues.get(0);
//            		htmlStream.append("<tr height='1px'>\n");
//            		htmlStream.append("<td colspan='4'>\n");
//            		htmlStream.append("<input type='hidden' name='"+biparam.getParameterUrlName()+"' value='"+value+"' />\n");
//            		htmlStream.append("</td>\n");
//            		htmlStream.append("</tr>\n");
//        		}
//        	}        	
//        	if(createLabelAndForm) {
//        		htmlStream.append("		<tr height='25px'>\n");
//        		htmlStream.append("			<td>&nbsp;</td>\n");
//        		htmlStream.append("			<td class='portlet-form-field-label'>"+biparam.getLabel()+"</td>\n");
//        		htmlStream.append("			<td>&nbsp;</td>\n");
//        		htmlStream.append("			<td>\n");
//        		createHTMLForm(biparam, htmlStream);	
//        		htmlStream.append("			</td>\n");
//        		htmlStream.append("		</tr>\n");
//        	}
//        }
//		htmlStream.append("		<tr height='25px'>\n");
//		htmlStream.append("			<td>&nbsp;</td>\n");
//		htmlStream.append("			<td>&nbsp;</td>\n");
//		htmlStream.append("			<td>&nbsp;</td>\n");
//		htmlStream.append("			<td>\n");
////		htmlStream.append("				<input type='image' onclick='clearFields()' " +
////												"name='resetParameters' value='Reset fields' " +
////												"src='" + renderResponse.encodeURL(renderRequest.getContextPath() + "/img/erase.png") + "'/>\n");
//        htmlStream.append("				<a href='javascript:void(0)' onclick='clearFields()' class='portlet-form-field-label'>\n");
//        String resetFieldsLbl = PortletUtilities.getMessage("SBIDev.docConf.execBIObjectParams.resetFields", "messages");
//        htmlStream.append("					" + resetFieldsLbl + "\n");
//        htmlStream.append("				</a>\n");
//		htmlStream.append("			</td>\n");
//		htmlStream.append("		</tr>\n");
//		htmlStream.append("</table>\n");
        htmlStream.append("<script type='text/javascript'>\n");
        htmlStream.append("function clearFields() {\n");
        iter = parameters.iterator();
        while (iter.hasNext()) {
        	BIObjectParameter biparam = (BIObjectParameter) iter.next();
        	String id = biparam.getParameterUrlName();
    		ModalitiesValue modVal = biparam.getParameter().getModalityValue();
    		String typeCode = modVal.getITypeCd();
    		if(typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_FIX_LOV_CODE)) {
    			htmlStream.append(" document.getElementById('" + id + "').selectedIndex = 0;\n");
    		} else if(typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_MAN_IN_CODE)) {
    			htmlStream.append(" document.getElementById('" + id + "').value = '';\n");
    		} else if(typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_QUERY_CODE) ||
    				   typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_SCRIPT_CODE)) {
    			htmlStream.append(" document.getElementById('" + id + "').value = '';\n");
    		}
        }
        htmlStream.append("}\n");
        htmlStream.append("</script>\n");

        //htmlStream.append("<br/><br/>\n");
		//createButtons(htmlStream);
		try {
			pageContext.getOut().print(htmlStream);
		} catch(IOException ioe) {
			SpagoBITracer.major("", "DynamicPageTag", "doStartTag", "cannot start tag: IO exception occurred",ioe);
		}
		
		return SKIP_BODY;
	}

	
	
	
	
	
	
	/**
	 * @see javax.servlet.jsp.tagext.Tag#doEndTag()
	 */
	public int doEndTag() throws JspException {
		TracerSingleton.log(Constants.NOME_MODULO, TracerSingleton.INFORMATION, "TitleTag::doEndTag:: invocato");
		return super.doEndTag();
	}
	
	
	
	
	
	
	
	/**
	 * Given a <code>BIObjectParameter </code> object at input, creates from it a dinamic 
	 * HTML form. It is called from the <code>doStartTag </code> method.
	 * 
	 * @param biparam The input BI object parameter
	 * @param htmlStream The buffer containing all html code 
	 * @return The label of the BIObjectParameter of dependancy, if any
	 */
	private String createHTMLForm(BIObjectParameter biparam, StringBuffer htmlStream) {
		
		ModalitiesValue modVal = biparam.getParameter().getModalityValue();
		String typeCode = modVal.getITypeCd();
		
		String value = "";
		List values = biparam.getParameterValues();
		if (values != null && values.size() == 1) {
			value = (String) values.get(0);
		}
		
		// PARAMETER USE TYPE FIX LOV
		if(typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_FIX_LOV_CODE)) {
			try{
				htmlStream.append("<select style='width:230px;' name='"+biparam.getParameterUrlName()+"' id='"+biparam.getParameterUrlName()+"' class='portlet-form-field' >\n");
				String stringXMLValues = modVal.getLovProvider();
				stringXMLValues = PortletUtilities.cleanString(stringXMLValues);
				SourceBean sbXMLValues = SourceBean.fromXMLString(stringXMLValues); 
				List l = sbXMLValues.getAttributeAsList("LOV-ELEMENT");
				Iterator it = l.iterator();
				SourceBean sbTemp = null;
				String desc = null;
				String val = null;
				while(it.hasNext()) {
					sbTemp = (SourceBean)it.next();
					desc = (String)sbTemp.getAttribute("DESC");
					val = (String)sbTemp.getAttribute("VALUE");
					String selected = "";
					if (value.equals(val)) selected = "selected=\"selected\"";
					htmlStream.append("<option value='"+val+"' " + selected + ">"+desc+"</option>\n");
				}
				htmlStream.append("</select>\n");
			}catch (Exception ex) {
				ex.printStackTrace();
			}
		
		return null;	
		
			
		// PARAMETER USE TYPE MANUAL INPUT
		} else if(typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_MAN_IN_CODE)) {
			htmlStream.append("<input style='width:230px;' type='text' name='"+biparam.getParameterUrlName()+"' id='"+biparam.getParameterUrlName()+"' value='" + value + "' class='portlet-form-input-field' />\n");
			return null;
		} 
		
		
		
		
		// PARAMETER USE TYPE QUERY
		else if (typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_QUERY_CODE)) {
			
			BIObjectParameter objParFather = null;
			ObjParuse objParuse = null;
			try {
				IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
				IParameterUseDAO paruseDAO = DAOFactory.getParameterUseDAO();
				List objParuses = objParuseDAO.loadObjParuses(biparam.getId());
				if (objParuses != null && objParuses.size() > 0) {
					Iterator it = objParuses.iterator();
					while (it.hasNext()) {
						ObjParuse aObjParuse = (ObjParuse) it.next();
						Integer paruseId = aObjParuse.getParuseId();
						ParameterUse aParameterUse = paruseDAO.loadByUseID(paruseId);
						Integer idLov = aParameterUse.getIdLov();
						if (idLov.equals(modVal.getId())) {
							// the ModalitiesValue of the BIObjectParameter corresponds to a ParameterUse correlated
							objParuse = aObjParuse;
							SpagoBITracer.debug("", "DynamicPageTag", "createHTMLForm()", "Found correlation:" +
									" dependent BIObjectParameter id = " + biparam.getId() + "," +
									" ParameterUse with id = " + paruseId + ";" +
									" BIObjectParameter father has id = " + objParuse.getObjParFatherId());
							// now we have to find the BIObjectParameter father of the correlation
							Integer objParFatherId = objParuse.getObjParFatherId();
							List parameters = obj.getBiObjectParameters();
							Iterator i = parameters.iterator();
							while (i.hasNext()) {
								BIObjectParameter aBIObjectParameter = (BIObjectParameter) i.next();
								if (aBIObjectParameter.getId().equals(objParFatherId)) {
									objParFather = aBIObjectParameter;
									break;
								}
							}
							if (objParFather == null) {
								// the BIObjectParameter father of the correlation was not found
								SpagoBITracer.major("", "DynamicPageTag", "createHTMLForm()", "Cannot find the BIObjectParameter father of the correlation");
								throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
							}
							break;
						}
					}
				}
			} catch (EMFUserError e) {
				SpagoBITracer.major("", "DynamicPageTag", "createHTMLForm()", "Error while retrieving information from db", e);
				e.printStackTrace();
			}
			
			htmlStream.append("<input type='text' style='width:230px;' name='"+biparam.getParameterUrlName()+"' id='"+biparam.getParameterUrlName()+"' " +
					"class='portlet-form-input-field' readonly='true' value='"+value+"' />\n");
			htmlStream.append("<input type='image' onclick='setLookupField(\"" + biparam.getId() + "\")' \n");
			htmlStream.append("		src= '" + renderResponse.encodeURL(renderRequest.getContextPath() + "/img/detail.gif") + "' \n");
			htmlStream.append("		title='Lookup' alt='Lookup' \n");
			htmlStream.append("/>\n");
			
			if (objParFather != null && objParuse != null) {
				// the BIobjectParameter is correlated to another BIObjectParameter
				htmlStream.append("<input type='hidden' name='correlatedParuseIdForObjParWithId_" + biparam.getId() + "' value='" + objParuse.getParuseId() + "' />\n");
				return objParFather.getLabel();
			} else return null;
			
		}
		
		// PARAMETER USE TYPE SCRIPT
		else if (typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_SCRIPT_CODE)) {
			String idModVal = String.valueOf(modVal.getId());
//			if(modality.equalsIgnoreCase(SpagoBIConstants.EXECUTION_MODALITY)){
//				lookupURL.setParameter("ORIGINAL_PAGE", ExecuteBIObjectModule.MODULE_PAGE);
//			}
			htmlStream.append("<input type='text' style='width:230px;' name='"+biparam.getParameterUrlName()+"' id='"+biparam.getParameterUrlName()+"' class='portlet-form-input-field' readonly='true' value='"+value+"'/>\n");
			htmlStream.append("<input type='image' onclick='setLookupField(\"" + biparam.getId() + "\")' \n");
			htmlStream.append("		src= '" + renderResponse.encodeURL(renderRequest.getContextPath() + "/img/detail.gif") + "' \n");
			htmlStream.append("		title='Lookup' alt='Lookup' \n");
			htmlStream.append("/>\n");
			//htmlStream.append("<a href='"+lookupURL.toString()+"' class='portlet-menu-item'>\n");
			//htmlStream.append("   <img src='"+renderResponse.encodeURL(renderRequest.getContextPath() + "/img/detail.gif")+"' />\n");
			//htmlStream.append("</a>\n");
			//htmlStream.append("<a href='"+lookupURL.toString()+"'>Lookup</a>\n");
		}
		
		return null;
		
	}
	
	
	
	
	
	/**
	 * Creates buttons for dinamic page, adding some code to the HTML Stream.
	 * 
	 * @param htmlStream Contains all Html input code 
	 */
	private void createButtons(StringBuffer htmlStream) {
		
		String execLabel = PortletUtilities.getMessage("SBIDev.docConf.execBIObjectParams.execButt", "messages");
		String backLabel = PortletUtilities.getMessage("SBIDev.docConf.execBIObjectParams.backButt", "messages");
		
		PortletURL backUrl = renderResponse.createActionURL();
		backUrl.setParameter("PAGE", "TreeObjectsPage");
		backUrl.setParameter(SpagoBIConstants.ACTOR, actor);
		
		htmlStream.append("<table>\n");
		htmlStream.append("		<tr>\n");
		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
		htmlStream.append("			<td width='80px'>\n");		
		htmlStream.append("				<input type='image' src='"+renderResponse.encodeURL(renderRequest.getContextPath() + "/img/exec.png")+"' alt='exec' />\n");
		//htmlStream.append("				</form>\n");
		htmlStream.append("			</td>\n");
		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
		
		if(!moduleName.equalsIgnoreCase("SingleObjectExecutionModule")) {
			htmlStream.append("			<td width='80px'>\n");
			htmlStream.append("				<a href='"+backUrl.toString()+"' class='portlet-menu-item'>\n");
			htmlStream.append("   				<img src='"+renderResponse.encodeURL(renderRequest.getContextPath() + "/img/back.png")+"' />\n");
			htmlStream.append("				</a>\n");
			htmlStream.append("			</td>\n");
		} else {
			htmlStream.append("			<td width='80px'>&nbsp;</td>\n");
		}
		
		htmlStream.append("		</tr>\n");
		htmlStream.append("		<tr>\n");
		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
		htmlStream.append("			<td width='80px'>\n");
		char doubleApic = '"';
		htmlStream.append("				<a href="+doubleApic+"javascript:document.getElementById('paramsValueForm').submit()"+doubleApic+">\n");
		htmlStream.append(					execLabel);
		htmlStream.append("				</a>\n");				
		htmlStream.append("			</td>\n");
		htmlStream.append("			<td width='30px'>&nbsp;</td>\n");
		
		if(!moduleName.equalsIgnoreCase("SingleObjectExecutionModule")) {
			htmlStream.append("			<td width='80px'>\n");
			htmlStream.append("				<a href='"+backUrl.toString()+"'>");
			htmlStream.append(					backLabel);
			htmlStream.append("				</a>\n");	
			htmlStream.append("			</td>\n");
		} else {
			htmlStream.append("			<td width='80px'>&nbsp;</td>\n");
		}
		
		htmlStream.append("		</tr>\n");
		htmlStream.append("</table>\n");
	}
	
	/**
	 * 
	 * @return modality The modality String to return.
	 */
	public String getModality() {
		return modality;
	}
	/**
	 * @param modality The modality to set.
	 */
	public void setModality(String modality) {
		this.modality = modality;
	}
	/**
	 * 
	 * @return The Actor's name.
	 */
	public String getActor() {
		return actor;
	}
	/**
	 * 
	 * @param actor The Actor to set.
	 */
	public void setActor(String actor) {
		this.actor = actor;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
}	
	
	
