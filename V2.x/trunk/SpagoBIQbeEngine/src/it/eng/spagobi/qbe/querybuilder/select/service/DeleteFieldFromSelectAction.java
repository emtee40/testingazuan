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
package it.eng.spagobi.qbe.querybuilder.select.service;

import it.eng.qbe.utility.Utils;
import it.eng.qbe.wizard.GroupByFieldSourceBeanImpl;
import it.eng.qbe.wizard.IGroupByClause;
import it.eng.qbe.wizard.IOrderByClause;
import it.eng.qbe.wizard.IOrderGroupByField;
import it.eng.qbe.wizard.ISelectClause;
import it.eng.qbe.wizard.ISelectField;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.qbe.wizard.OrderByFieldSourceBeanImpl;
import it.eng.qbe.wizard.SelectFieldSourceBeanImpl;
import it.eng.qbe.wizard.WizardConstants;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.action.AbstractAction;

import java.util.List;


/**
 * @author Andrea Zoppello
 * 
 * This action delete the field identified in request with FIELD_ID from Select Clause
 * of the object ISingleDataMartWizardObject in session
 */
public class DeleteFieldFromSelectAction extends AbstractAction {
	
	/** 
	 * @see it.eng.spago.dispatching.service.ServiceIFace#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) {
	
		RequestContainer aRequestContainer = getRequestContainer();
		SessionContainer aSessionContainer = aRequestContainer.getSessionContainer();
		
		ISingleDataMartWizardObject aWizardObject = Utils.getWizardObject(aSessionContainer);
		
		String fieldId = (String)request.getAttribute("FIELD_ID"); 
		
		
		ISelectClause aSelectClause = aWizardObject.getSelectClause();
		
		ISelectField selectField = new SelectFieldSourceBeanImpl();
		selectField.setId(fieldId);
		
		List selectFields = aSelectClause.getSelectFields();
		
		ISelectField tmpSelectField = null;
		boolean found = false;
		for (int i=0; i < selectFields.size(); i++){
			tmpSelectField = (ISelectField)selectFields.get(i);
			if (tmpSelectField.getId().equalsIgnoreCase(selectField.getId())){
				found = true;
				break;
			}
		}
		
		if ((tmpSelectField != null) && found){
		
			//Devo rimuovere il campo anche nelle eventuali condizioni di Order By
			
			IOrderByClause orderByClause = aWizardObject.getOrderByClause();
			if (orderByClause != null){
				List orderByFields = orderByClause.getOrderByFields();
				IOrderGroupByField aOrderGroupByField = null;
				IOrderGroupByField toEliminate = null;
				
				for (int i=0; i < orderByFields.size(); i++){
					aOrderGroupByField = (IOrderGroupByField)orderByFields.get(i);
					if (aOrderGroupByField.getFieldName().equalsIgnoreCase(tmpSelectField.getFieldName())){
						toEliminate = new OrderByFieldSourceBeanImpl();
						toEliminate.setId(aOrderGroupByField.getId());
					}
				}
				
				if (toEliminate != null){
					orderByClause.delOrderByField(toEliminate);
				}
				if (orderByClause.getOrderByFields().size() == 0)
					aWizardObject.delOrderByClause();
			}
		
		
		
			//Devo rimuovere il campo anche nelle eventuali condizioni di Order By
		
			IGroupByClause groupByClause = aWizardObject.getGroupByClause();
			if (groupByClause != null){
				List groupByFields = groupByClause.getGroupByFields();
				IOrderGroupByField aOrderGroupByField = null;
				IOrderGroupByField toEliminate = null;
				for (int i=0; i < groupByFields.size(); i++){
					aOrderGroupByField = (IOrderGroupByField)groupByFields.get(i);
					if (aOrderGroupByField.getFieldName().equalsIgnoreCase(tmpSelectField.getFieldName())){
						toEliminate = new GroupByFieldSourceBeanImpl();
						toEliminate.setId(aOrderGroupByField.getId());
					}
				}
				
				if (toEliminate != null){
					groupByClause.delGroupByField(toEliminate);
				}
				
				if (groupByClause.getGroupByFields().size() == 0)
					aWizardObject.delGroupByClause();
			}
		
		
			aSelectClause.delSelectField(selectField);
			if (aSelectClause.getSelectFields().size() == 0)
				aWizardObject.delSelectClause();
		 }
		 String prefix = "a";
		 if (Utils.isSubQueryModeActive(aSessionContainer)){
				String subQueryFieldId = (String)aSessionContainer.getAttribute(WizardConstants.SUBQUERY_FIELD);
				prefix = Utils.getMainWizardObject(aSessionContainer).getSubQueryIdForSubQueryOnField(subQueryFieldId);
		 }
		 
	
		 aWizardObject.purgeNotReferredEntityClasses(prefix);
		
		Utils.updateLastUpdateTimeStamp(getRequestContainer());
		
		aSessionContainer.setAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD, Utils.getMainWizardObject(aSessionContainer));
	
		
	}
}
