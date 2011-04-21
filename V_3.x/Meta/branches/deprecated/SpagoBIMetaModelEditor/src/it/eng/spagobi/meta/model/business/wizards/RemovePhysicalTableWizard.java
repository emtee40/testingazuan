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
package it.eng.spagobi.meta.model.business.wizards;

import java.util.ArrayList;

import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.business.commands.AbstractSpagoBIModelCommand;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;

/**
 * @author cortella
 *
 */
public class RemovePhysicalTableWizard extends AbstractSpagoBIModelWizard {

	private RemovePhysicalTableWizardSelectionPage pageOne;
	private BusinessColumnSet owner;
	/**
	 * @param editingDomain
	 * @param command
	 */
	public RemovePhysicalTableWizard(BusinessColumnSet businessColumnSet, EditingDomain editingDomain,
			AbstractSpagoBIModelCommand command) {
		super(editingDomain, command);
		this.owner = businessColumnSet;
	}
	
	public void addPages() {
		pageOne = new RemovePhysicalTableWizardSelectionPage("Remove Physical Table", owner);
		addPage(pageOne);
	}

	@Override
	public CommandParameter getCommandInputParameter() {
		String tableName = pageOne.getTableSelected();
		if (owner instanceof BusinessView){
			java.util.List<PhysicalTable> physicalTables = ((BusinessView)owner).getPhysicalTables();
			for (PhysicalTable physicalTable:physicalTables ){
				if (physicalTable.getName().equals(tableName))
				{
					return new CommandParameter(owner, null, physicalTable, new ArrayList<Object>());
				}
			}
		}
		return null;	
	}


	@Override
	public boolean isWizardComplete() {
		if (pageOne.isPageComplete()){
			return true;
		}
		return false;
	}

}
