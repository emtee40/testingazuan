/**
 * 
 */
package it.eng.qbe.javascript;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.urlgenerator.SelectFieldForJoinUrlGenerator;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Gioia
 */
public class QbeJoinJsTreeBuilder extends QbeJsTreeBuilder {

	public QbeJoinJsTreeBuilder(DataMartModel dataMartModel, ISingleDataMartWizardObject dataMartWizard, HttpServletRequest httpRequest){
		super(dataMartModel, dataMartWizard, httpRequest);
		actionName = "SELECT_FIELD_FOR_SELECT_ACTION";
	}
	
	public Map getSelectdNodes() {
		Map map = new HashMap();
		return map;
	}
	
	public void addNodes() {
		int rootNode = 0;
		int nodeCounter = 0;
		Collection classNames = null;
		if (modality.equalsIgnoreCase(LIGHT_MODALITY)) 
			classNames = getSelectedClassNames();
		else
			classNames = getClassNames();

		
		for (Iterator it = classNames.iterator(); it.hasNext(); ){
			String className = (String)it.next();
			nodeCounter = addFieldNodes(className, null, rootNode, nodeCounter, null, new SelectFieldForJoinUrlGenerator(className, qbeUrlGenerator, httpRequest, getClassPrefix()), 1);
		}		
	}
	
	public void addRootNode() {
		addNode("0", "-1", "Join with Other Entities", "", "", dataMartModel.getName(), 
				qbeUrlGenerator.conformStaticResourceLink(httpRequest,"../img/base.gif"),
				qbeUrlGenerator.conformStaticResourceLink(httpRequest,"../img/base.gif"),
				"", "", "", "", "");
	}

}
