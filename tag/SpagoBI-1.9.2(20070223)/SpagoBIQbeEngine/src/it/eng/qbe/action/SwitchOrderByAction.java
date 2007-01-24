
package it.eng.qbe.action;

import java.util.Iterator;
import java.util.List;

import it.eng.qbe.utility.Utils;
import it.eng.qbe.wizard.IOrderByClause;
import it.eng.qbe.wizard.IOrderGroupByField;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.qbe.wizard.OrderByFieldSourceBeanImpl;
import it.eng.qbe.wizard.WizardConstants;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.action.AbstractAction;


/**
 * @author Andrea Zoppello
 * 
 * This action move down of one position the field identified in request with FIELD_ID in the Order By Clause  
 * of the object ISingleDataMartWizardObject in session
 */
public class SwitchOrderByAction extends AbstractAction {
	
	/** 
	 * @see it.eng.spago.dispatching.service.ServiceIFace#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) {
	
		RequestContainer aRequestContainer = getRequestContainer();
		SessionContainer aSessionContainer = aRequestContainer.getSessionContainer();
		ISingleDataMartWizardObject aWizardObject = Utils.getWizardObject(aSessionContainer);
		
		String fieldId = (String)request.getAttribute("FIELD_ID"); 
		
		
		IOrderByClause aOrderByClause = aWizardObject.getOrderByClause();
		
		List fields = aOrderByClause.getOrderByFields();
		for(Iterator it = fields.iterator(); it.hasNext();) {
			OrderByFieldSourceBeanImpl field = (OrderByFieldSourceBeanImpl)it.next();
			if(field.getId().equalsIgnoreCase(fieldId)) {
				field.setAscendingOrder(!field.isAscendingOrder());
			}
		}
		
		
		Utils.updateLastUpdateTimeStamp(getRequestContainer());
		aSessionContainer.setAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD, Utils.getMainWizardObject(aSessionContainer));
	
		
	}
}
