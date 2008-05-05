/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.spagobi.qbe.commons.presentation.tag;

import it.eng.qbe.javascript.QbeJsTreeBuilder;
import it.eng.qbe.javascript.QbeSelectJsTreeBuilder;
import it.eng.spagobi.qbe.commons.constants.QbeConstants;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;

// TODO: Auto-generated Javadoc
/**
 * The Class TreeQbeTag.
 * 
 * @author Andrea Gioia
 */
public class TreeQbeTag extends QbeTagSupport {
	
	/** The type. */
	private String type;
	
	/* (non-Javadoc)
	 * @see javax.servlet.jsp.tagext.BodyTagSupport#doStartTag()
	 */
	public int doStartTag() throws JspException {
		
		try {
			QbeJsTreeBuilder qbeJsBuilder = new QbeSelectJsTreeBuilder(getDatamartModel(), getDatamartWizard(), getRequest());
									   
		   	if ( getQuery().isSubqueryModeActive() ){
					String subQueryFieldId = (String)getSessionContainer().getAttribute(QbeConstants.SUBQUERY_FIELD);
					String subQueryPrefix =  getQuery().getSubQueryIdForSubQueryOnField(subQueryFieldId);
					qbeJsBuilder.setClassPrefix(subQueryPrefix);
		   	}
	    	  
	    	pageContext.getOut().print( qbeJsBuilder.build() );
	      } catch (Exception ex) {
	         throw new JspTagException(getClass().getName() + ": " + ex.getMessage());
	      }
	      return SKIP_BODY;
	}
	
	/* (non-Javadoc)
	 * @see javax.servlet.jsp.tagext.BodyTagSupport#doEndTag()
	 */
	public int doEndTag() {
		return EVAL_PAGE;
	}

	/**
	 * Gets the type.
	 * 
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * Sets the type.
	 * 
	 * @param type the new type
	 */
	public void setType(String type) {
		this.type = type;
	}

}

