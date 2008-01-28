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
package it.eng.spagobi.qbe.commons.presentation.tag;

import it.eng.qbe.javascript.QbeJsTreeBuilder;
import it.eng.qbe.javascript.QbeSelectJsTreeBuilder;
import it.eng.qbe.utility.Utils;
import it.eng.qbe.wizard.WizardConstants;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;

/**
 * @author Andrea Gioia
 *
 */
public class TreeQbeTag extends QbeTagSupport {
	
	private String type;
	
	public int doStartTag() throws JspException {
		
		try {
			QbeJsTreeBuilder qbeJsBuilder = new QbeSelectJsTreeBuilder(getDatamartModel(), getQuery(), getRequest());
									   
		   	if ( Utils.isSubQueryModeActive( getSessionContainer() ) ){
					String subQueryFieldId = (String)getSessionContainer().getAttribute(WizardConstants.SUBQUERY_FIELD);
					String subQueryPrefix = Utils.getMainWizardObject(getSessionContainer()).getQuery().getSubQueryIdForSubQueryOnField(subQueryFieldId);
					qbeJsBuilder.setClassPrefix(subQueryPrefix);
		   	}
	    	  
	    	pageContext.getOut().print( qbeJsBuilder.build() );
	      } catch (Exception ex) {
	         throw new JspTagException(getClass().getName() + ": " + ex.getMessage());
	      }
	      return SKIP_BODY;
	}
	
	public int doEndTag() {
		return EVAL_PAGE;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}

