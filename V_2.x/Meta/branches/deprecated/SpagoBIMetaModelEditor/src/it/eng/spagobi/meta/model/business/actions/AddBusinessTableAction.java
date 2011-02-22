/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2010 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.meta.model.business.actions;

import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.commands.AbstractSpagoBIModelCommand;
import it.eng.spagobi.meta.model.business.commands.AddBusinessRelationshipCommand;
import it.eng.spagobi.meta.model.business.commands.AddBusinessTableCommand;
import it.eng.spagobi.meta.model.business.commands.AddIdentifierCommand;
import it.eng.spagobi.meta.model.business.commands.AddToIdentifierCommand;
import it.eng.spagobi.meta.model.business.wizards.AddBusinessRelationshipWizard;
import it.eng.spagobi.meta.model.business.wizards.AddBusinessTableWizard;
import it.eng.spagobi.meta.model.phantom.provider.BusinessRootItemProvider;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbenchPart;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class AddBusinessTableAction extends AbstractSpagoBIModelAction {
	PhysicalTable physicalTable; //used for drag&drop
	public AddBusinessTableAction(IWorkbenchPart workbenchPart, ISelection selection, PhysicalTable physicalTable) {
		super(AddBusinessTableCommand.class, workbenchPart, selection);
		this.physicalTable = physicalTable;
	}
	
	/**
	 * This executes the command.
	 */
	@Override
	public void run() {
		try {
			BusinessModel businessModel = (BusinessModel)((BusinessRootItemProvider)owner).getParentObject();
			AddBusinessTableWizard wizard = new AddBusinessTableWizard(businessModel, physicalTable, editingDomain, (AbstractSpagoBIModelCommand)command );
	    	WizardDialog dialog = new WizardDialog(new Shell(), wizard);
			dialog.create();
	    	dialog.open();
	    	
		} catch(Throwable t) {
			t.printStackTrace();
		}
	}
	
}
