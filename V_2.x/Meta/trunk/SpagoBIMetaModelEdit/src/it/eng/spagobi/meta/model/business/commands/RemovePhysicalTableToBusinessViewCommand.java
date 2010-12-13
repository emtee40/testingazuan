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
package it.eng.spagobi.meta.model.business.commands;

import it.eng.spagobi.meta.initializer.BusinessModelInitializer;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.physical.PhysicalTable;
import it.eng.spagobi.meta.model.provider.SpagoBIMetalModelEditPlugin;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;



/**
 * @author cortella
 *
 */
public class RemovePhysicalTableToBusinessViewCommand extends
AbstractSpagoBIModelCommand {

	BusinessView businessView;
	PhysicalTable physicalTable;
	
	public RemovePhysicalTableToBusinessViewCommand(EditingDomain domain, CommandParameter parameter) {
		super("Remove Physical Table", "Remove Physical Table ", domain, parameter);
	}

	public RemovePhysicalTableToBusinessViewCommand(EditingDomain domain){
		this(domain, null);
	}
	
	@Override
	public void execute() {
		BusinessModelInitializer initializer = new BusinessModelInitializer();
		businessView = (BusinessView)parameter.getOwner();
		physicalTable = (PhysicalTable)parameter.getValue();
		
		if (initializer.removePhysicalTableToBusinessView(businessView, physicalTable) != null){
			System.err.println("COMMAND [RemovePhysicalTableToBusinessViewCommand] SUCCESFULLY EXECUTED: ");
			
			this.executed = true;
		} else {
			System.err.println("COMMAND [RemovePhysicalTableToBusinessViewCommand] NOT EXECUTED: ");
			this.executed = false;
		}

	}
	
	@Override
	public void undo() {
		
	}
	
	@Override
	public void redo() {
		
	}
	
	@Override
	public Object getImage() {
		return SpagoBIMetalModelEditPlugin.INSTANCE.getImage("full/obj16/PhysicalTable");
	}
}
