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
package it.eng.spagobi.meta.model.validator;

import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.physical.PhysicalModel;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class ModelValidator {
	
	List<String> diagnosticMessages;
	
	public List<String> getDiagnosticMessages() {
		return diagnosticMessages;
	}

	public boolean validate(Model model) {
		boolean isValid = true;
		diagnosticMessages = new ArrayList();
		
		List<PhysicalModel> physicalModels = model.getPhysicalModels();
		if(physicalModels == null || physicalModels.size() < 1) {
			diagnosticMessages.add("Model does not contains any physical model");
		} else {
			for(PhysicalModel physicalModel : physicalModels) {
				isValid = isValid && validate(physicalModel);
			}
		}
		
		List<BusinessModel> businessModels = model.getBusinessModels();
		if(businessModels == null || businessModels.size() < 1) {
			diagnosticMessages.add("Model does not contains any business model");
		} else {
			for(BusinessModel businessModel : businessModels) {
				isValid = isValid && validate(businessModel);
			}
		}
		
		return isValid;
	}
	
	public boolean validate(PhysicalModel physicalModel) {
		boolean isValid = true;
		
		return isValid;
	}
	
	public boolean validate(BusinessModel businessModel) {
		boolean isValid = true;
		
		List<BusinessRelationship> relationships = businessModel.getRelationships();
		for(BusinessRelationship relationship : relationships) {
			isValid = isValid && validate(relationship);
		}
		
		List<BusinessTable> tables = businessModel.getBusinessTables();
		for(BusinessTable table : tables) {
			isValid = isValid && validate(table);
		}
		
		return isValid;
	}
	
	public boolean validate(BusinessRelationship relationship) {
		boolean isValid = true;
		
		if(relationship.getSourceTable() == null) {
			isValid = false;
			diagnosticMessages.add("Business relationship [" + relationship.getName() + "] does not specifies any source table");
		}
		
		if(relationship.getDestinationTable() == null) {
			isValid = false;
			diagnosticMessages.add("Business relationship  [" + relationship.getName() + "] does not specifies any source table");
		}
		
		if(relationship.getSourceColumns() == null || relationship.getSourceColumns().size() < 1) {
			isValid = false;
			diagnosticMessages.add("Outbound business relationship  [" + relationship.getName() + "] defined on table [" + relationship.getSourceTable().getName() + "] does not specifies any source column");
		}
		
		if(relationship.getDestinationColumns() == null || relationship.getDestinationColumns().size() < 1) {
			isValid = false;
			diagnosticMessages.add("inbound business relationship  [" + relationship.getName() + "] defined on table [" + relationship.getDestinationTable().getName() + "] does not specifies any destination column");
		}
		
		
		return isValid;
	}
	
	public boolean validate(BusinessTable table) {
		boolean isValid = true;
		
		if(table.getIdentifier() != null) {
			if(table.getIdentifier().getColumns() == null || table.getIdentifier().getColumns().size() < 1) {
				isValid = false;
				diagnosticMessages.add("Business table  [" + table.getName() + "] have an empty identifier");
			}
		}
		
		return isValid;
	}
}
