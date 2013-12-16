/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.model.business.commands.edit.table;

import it.eng.spagobi.meta.initializer.BusinessModelInitializer;
import it.eng.spagobi.meta.initializer.descriptor.CalculatedFieldDescriptor;
import it.eng.spagobi.meta.initializer.properties.BusinessModelPropertiesFromFileInitializer;
import it.eng.spagobi.meta.model.ModelProperty;
import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.CalculatedBusinessColumn;
import it.eng.spagobi.meta.model.business.commands.edit.AbstractSpagoBIModelEditCompoundCommand;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Marco Cortella (marco.cortella@eng.it)
 *
 */
public class AddCalculatedFieldCommand extends
		AbstractSpagoBIModelEditCompoundCommand {

	BusinessModelInitializer initializer;

	// input objects
	BusinessColumnSet businessColumnSet;
	CalculatedFieldDescriptor calculatedColumnDesc;
	String calculatedColumnName;
	CalculatedBusinessColumn existingCalculatedField;
	
	// cache edited columns (added and removed) for undo e redo
	List<CalculatedBusinessColumn> addedColumns  = new ArrayList<CalculatedBusinessColumn>();
	
	//cache edited existing CalculatedBusinessColumn with corrisponding descriptor
	CalculatedFieldDescriptor existingCalculatedFieldDescriptor; 
	
	//check if Business Table has empty Physical Table reference
	boolean isEmptyBusinessTable = false;
	
	private static Logger logger = LoggerFactory.getLogger(AddCalculatedFieldCommand.class);
	
	public AddCalculatedFieldCommand(EditingDomain domain, CommandParameter parameter)  {
		super( "model.business.commands.edit.table.addcalculatedfield.label"
				 , "model.business.commands.edit.table.addcalculatedfield.description"
				 , "model.business.commands.edit.table.addcalculatedfield"
				 , domain, parameter);
		initializer = new BusinessModelInitializer();
	}
	
	public AddCalculatedFieldCommand(EditingDomain domain) {
		this(domain, null);
	}
	
	protected void clearCachedObjects() {
		addedColumns = new ArrayList<CalculatedBusinessColumn>();
	}
	
	protected boolean prepare() {
		return true;
	}
	
	public void execute() {
		// read input
		businessColumnSet = (BusinessColumnSet)parameter.getOwner();
		calculatedColumnDesc = (CalculatedFieldDescriptor)parameter.getValue();
		calculatedColumnName = calculatedColumnDesc.getName();
		//This will modify an existing CalculatedBusinessColumn instead of creating it
		if (parameter.getFeature() != null){
			existingCalculatedField = (CalculatedBusinessColumn)parameter.getFeature();
			//original dataType
			ModelProperty property = existingCalculatedField.getProperties().get(BusinessModelPropertiesFromFileInitializer.CALCULATED_COLUMN_DATATYPE);
			String dataType = property.getValue();
			
			//original expression
			ModelProperty propertyExp = existingCalculatedField.getProperties().get(BusinessModelPropertiesFromFileInitializer.CALCULATED_COLUMN_EXPRESSION);
			String expression = propertyExp.getValue();
			
			//only for backup to use for undo
			existingCalculatedFieldDescriptor = new CalculatedFieldDescriptor(existingCalculatedField.getName(), expression,dataType,existingCalculatedField.getTable());
			initializer.editCalculatedColumn(existingCalculatedField, calculatedColumnDesc);
		} else {
			//check if BusinessTable has null Physical Table reference
			if (businessColumnSet instanceof BusinessTable){
				BusinessTable bTable = (BusinessTable)businessColumnSet;
				PhysicalTable physicalTable = bTable.getPhysicalTable();
				if (physicalTable == null){
					isEmptyBusinessTable = true;
				}
				else{
					isEmptyBusinessTable = false;
				}				
			}
			
			if (businessColumnSet.getCalculatedBusinessColumn(calculatedColumnName) == null){// avoid columns duplication
				if (!isEmptyBusinessTable){ //no calculated column for empty business tables
					initializer.addCalculatedColumn(calculatedColumnDesc);
					addedColumns.add( businessColumnSet.getCalculatedBusinessColumn(calculatedColumnName) );
					
					//Print for test
					/*
					CalculatedBusinessColumn calculatedColumn= businessColumnSet.getCalculatedBusinessColumn(calculatedColumnName);
					List<SimpleBusinessColumn> referencedColumns = calculatedColumn.getReferencedColumns();
					if ( referencedColumns != null ){
						for (SimpleBusinessColumn referencedColumn: referencedColumns){
							System.out.println("Referenced column: "+referencedColumn.getName() + "\n");
						}
					}
					*/
					
				}
			}			
		}

	}
	
	@Override
	public Collection<?> getAffectedObjects() {
		BusinessColumnSet businessColumnSet = (BusinessColumnSet)parameter.getOwner();
		Collection affectedObjects = Collections.EMPTY_LIST;
		if(businessColumnSet != null) {
			affectedObjects = new ArrayList();
			affectedObjects.add(businessColumnSet);
		}
		return affectedObjects;
	}
	
	@Override
	public void undo() {		
		//undo changes
		if (existingCalculatedField != null ){
			initializer.editCalculatedColumn(existingCalculatedField, existingCalculatedFieldDescriptor);
		} else {
			//undo creation
			for(BusinessColumn column: addedColumns) {
				businessColumnSet.getColumns().remove(column);
			}	
		}
			
	}
	
	@Override
	public void redo() {
		execute();
	}
	
	@Override
	public Collection<?> getResult() {
		// TODO the result here should change with operation type (execute = columns; undo = table)
		return getAffectedObjects();
	}

}
