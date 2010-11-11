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
import it.eng.spagobi.meta.initializer.BusinessRelationshipDescriptor;
import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.provider.SpagoBIMetalModelEditPlugin;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class AddBusinessRelationshipCommand extends AbstractSpagoBIModelCommand {
	
	BusinessRelationship addedBusinessRelationship;
	public AddBusinessRelationshipCommand(EditingDomain domain, CommandParameter parameter) {
		super("Business Relationship", "Add business relationship ", domain, parameter);
	}
	
	public AddBusinessRelationshipCommand(EditingDomain domain) {
		this(domain, null);
	}
	
	@Override
	public void execute() {
		BusinessModelInitializer initializer;
		BusinessTable businessTable = (BusinessTable)parameter.getOwner();
		
		BusinessRelationshipDescriptor descriptor = (BusinessRelationshipDescriptor)parameter.getValue();
		
		initializer = new BusinessModelInitializer();
		addedBusinessRelationship = initializer.addRelationship(descriptor);
				
		System.err.println("COMMAND [AddBusinessRelationshipCommand] SUCCESFULLY EXECUTED: ");
		
		this.executed = true;
	}
	
	
	@Override
	public void undo() {
		BusinessTable businessTable = (BusinessTable)parameter.getOwner();
		BusinessModel businessModel = businessTable.getModel();
		businessModel.getRelationships().remove(addedBusinessRelationship);
		
	}

	@Override
	public void redo() {
		BusinessTable businessTable = (BusinessTable)parameter.getOwner();
		BusinessModel businessModel = businessTable.getModel();
		businessModel.getRelationships().add(addedBusinessRelationship);			
	}
	
	@Override
	public Object getImage() {
		return SpagoBIMetalModelEditPlugin.INSTANCE.getImage("full/obj16/BusinessRelationship");
	}

	

}
