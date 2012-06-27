/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.model.business.commands.edit.relationship;

import it.eng.spagobi.meta.initializer.BusinessModelInitializer;
import it.eng.spagobi.meta.initializer.descriptor.BusinessRelationshipDescriptor;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.commands.edit.AbstractSpagoBIModelEditCommand;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class AddBusinessRelationshipCommand extends AbstractSpagoBIModelEditCommand {
	
	BusinessRelationship addedBusinessRelationship;
	
	private static Logger logger = LoggerFactory.getLogger(AddBusinessRelationshipCommand.class);
	
	
	public AddBusinessRelationshipCommand(EditingDomain domain, CommandParameter parameter) {
		super("model.business.commands.edit.relationship.add.label"
			 ,"model.business.commands.edit.relationship.add.description"
			 ,"model.business.commands.edit.relationship.add"
			 ,domain, parameter);
	}
	
	public AddBusinessRelationshipCommand(EditingDomain domain) {
		this(domain, null);
	}
	
	@Override
	public void execute() {
		BusinessModelInitializer initializer;
		BusinessRelationshipDescriptor descriptor;
		
		initializer = new BusinessModelInitializer();
		descriptor = (BusinessRelationshipDescriptor)parameter.getValue();
		addedBusinessRelationship = initializer.addRelationship(descriptor);
		
		executed = true;
		logger.debug("Command [{}] executed succesfully", AddBusinessRelationshipCommand.class.getName());
	}
	
	
	@Override
	public void undo() {
		BusinessColumnSet businessTable = (BusinessColumnSet)parameter.getOwner();
		BusinessModel businessModel = businessTable.getModel();
		businessModel.getRelationships().remove(addedBusinessRelationship);	
	}

	@Override
	public void redo() {
		BusinessColumnSet businessTable = (BusinessColumnSet)parameter.getOwner();
		BusinessModel businessModel = businessTable.getModel();
		businessModel.getRelationships().add(addedBusinessRelationship);			
	}
	
	@Override
	public Collection<?> getAffectedObjects() {
		Collection affectedObjects = Collections.EMPTY_LIST;
		if(addedBusinessRelationship != null) {
			affectedObjects = new ArrayList();
			affectedObjects.add(addedBusinessRelationship);
		}
		return affectedObjects;
	}
	
}
