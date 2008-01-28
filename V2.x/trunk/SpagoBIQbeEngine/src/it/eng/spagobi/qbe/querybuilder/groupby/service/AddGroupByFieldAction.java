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
package it.eng.spagobi.qbe.querybuilder.groupby.service;

import it.eng.qbe.query.GroupByClause;
import it.eng.qbe.query.GroupByField;
import it.eng.qbe.query.IGroupByClause;
import it.eng.qbe.query.IGroupByField;
import it.eng.qbe.query.IOrderByField;
import it.eng.spago.base.SourceBean;
import it.eng.spagobi.qbe.commons.service.AbstractQbeEngineAction;

import java.util.List;


/** * 
 * This Action is responsible to put a field in Group By Clause of the object 
 * ISingleDataMartWizardObject in session
 * 
 */
public class AddGroupByFieldAction extends AbstractQbeEngineAction {

	// valid input parameter names
	public static final String FIELD_NAME = "COMPLETE_FIELD_NAME";
	public static final String FIELDS = "field";
	
	public void service(SourceBean request, SourceBean response) {
		super.service(request, response);	
		
		String fieldName = getAttributeAsString(FIELD_NAME); 
		List fields = request.getAttributeAsList(FIELDS);
		
				
		if(fieldName != null) {			
			getMainQuery().addGroupByField(fieldName);
		} else {			
			getMainQuery().deleteGroupByClause();
			for(int i = 0; i < fields.size(); i++) {
				fieldName = (String)fields.get(i);
				getMainQuery().addGroupByField(fieldName);
			}	
		}
		
		
		
		updateLastUpdateTimeStamp();
		setMainDataMartWizard( getMainDataMartWizard() );
	}
}
