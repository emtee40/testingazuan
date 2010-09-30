/*
 * Wizard for creating a new Business Table
 */
package it.eng.spagobi.meta.editor.wizards;

import it.eng.spagobi.meta.commons.IModelObjectFilter;
import it.eng.spagobi.meta.editor.singleton.CoreSingleton;
import it.eng.spagobi.meta.initializer.BusinessModelInitializer;
import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalTable;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;

import org.eclipse.emf.common.util.EList;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.swt.widgets.TableItem;

public class AddBusinessTableWizard extends Wizard {
	private AddBusinessTableWizardPageOne pageOne;
	private AddBusinessTableWizardPageTwo pageTwo;
	private AddBusinessTableWizardPageThree pageThree;
	private TableItem[] columnsToImport;
	
	public AddBusinessTableWizard(){
		super();
		this.setWindowTitle("Create a new Business Table");
		this.setHelpAvailable(false);
	}
	
	@Override
	public void addPages() {
		pageOne = new AddBusinessTableWizardPageOne("Create Business Table step one");
		addPage(pageOne);
		pageTwo = new AddBusinessTableWizardPageTwo("Create Business Table step two", pageOne);
		addPage(pageTwo);
		pageThree = new AddBusinessTableWizardPageThree("Create Business Table step three", pageTwo);
		addPage(pageThree);
		pageTwo.setPageThreeRef(pageThree);
	}
	
	@Override
	public boolean performFinish() {		
		/*
		if (pageThree.isPageComplete()){
			//TODO: to complete
			//table to import
			String tableName = pageTwo.getTableSelected();
			//columns to import
			columnsToImport = pageThree.getColumnsToImport();
			int numCol = columnsToImport.length
			//Create Business Table from a Physical Table
			BusinessModel bm = CoreSingleton.getInstance().getBusinessModel();
			PhysicalModel pm = CoreSingleton.getInstance().getPhysicalModel();
			PhysicalTable pTable = pm.getTable(tableName);
			BusinessModelInitializer initializer = new BusinessModelInitializer();
			initializer.addTable(pTable,new ColumnFilter() , bm);
			
			return true;
		}
		else
		*/
			if (pageTwo.isPageComplete()){
			String tableName = pageTwo.getTableSelected();
			//Create Business Table from a Physical Table
			BusinessModel bm = CoreSingleton.getInstance().getBusinessModel();
			PhysicalModel pm = CoreSingleton.getInstance().getPhysicalModel();
			PhysicalTable pTable = pm.getTable(tableName);
			BusinessModelInitializer initializer = new BusinessModelInitializer();
			initializer.addTable(pTable, bm);
			return true;
		}
		else
			return false;
	}
	
	
	public void dispose(){
		pageOne.dispose();
	}
	
	/*
	 * Inner class that implements IModelObjectFilter
	 */
	private class ColumnFilter implements IModelObjectFilter{

		EList<PhysicalColumn> columnsTrue;
		public ColumnFilter(EList<PhysicalColumn> columnsToMantain){
			columnsTrue = columnsToMantain;
		}
		@Override
		public boolean filter(ModelObject o) {
			if (columnsTrue.contains((PhysicalColumn)o))
				return false;
			else
				return true;
		}
		
	}

}
