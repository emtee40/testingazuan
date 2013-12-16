/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.editor.business.wizards.inline;

import it.eng.spagobi.commons.resource.IResourceLocator;
import it.eng.spagobi.meta.editor.SpagoBIMetaEditorPlugin;
import it.eng.spagobi.meta.initializer.descriptor.BusinessRelationshipDescriptor;
import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.SimpleBusinessColumn;

import java.net.URL;
import java.util.ArrayList;

import org.eclipse.emf.common.util.EList;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.List;
import org.eclipse.swt.widgets.Text;



public class AddBusinessRelationshipWizardPage extends WizardPage {
	private int cardinality = ONE_TO_MANY; //initial default value
	
	java.util.List<BusinessColumn> sourceColumns;
	java.util.List<BusinessColumn> destinationColumns;
	
	private static int ONE_TO_ONE = 1;
	private static int ONE_TO_MANY = 2;
	private static int MANY_TO_ONE = 3;
	private static int MANY_TO_MANY = 4; // not supported
	private static int OPTIONAL_ONE_TO_ONE = 5;
	private static int ONE_TO_OPTIONAL_ONE = 6;
	private static int OPTIONAL_ONE_TO_MANY = 7;
	private static int ONE_TO_OPTIONAL_MANY = 8;
	private static int OPTIONAL_MANY_TO_ONE = 9;
	private static int MANY_TO_OPTIONAL_ONE = 10;

	
	private BusinessModel model;
	private BusinessColumnSet sourceTable;
	private BusinessColumnSet destinationTable;
	private Text relationshipNameInputField;
	private Combo sourceTableCombo, destinationTableCombo;
	private List sourceColumnList, columnCorrelationList, destinationColumnList ;
	private java.util.List<String> sourceColumnUniqueNamesList,destinationColumnUniqueNamesList,sourceTableUniqueNamesList,destinationTableUniqueNamesList;
	private boolean nameInserted;
	
	private static final IResourceLocator RL = SpagoBIMetaEditorPlugin.getInstance().getResourceLocator(); 
	
	protected AddBusinessRelationshipWizardPage(String pageName, BusinessModel model, BusinessColumnSet sourceTable, BusinessColumnSet destinationTable) {
		super(pageName);
		setPageComplete(false);
		setTitle(RL.getString("business.editor.wizard.addbusinessrelationship.title"));
		setDescription(RL.getString("business.editor.wizard.addbusinessrelationship.description"));
		ImageDescriptor image = ImageDescriptor.createFromURL( (URL)RL.getImage("it.eng.spagobi.meta.editor.business.wizards.inline.createBR") );
	    if (image!=null) setImageDescriptor(image);	
	    
	    this.model = model;
	    this.sourceTable = sourceTable;
	    this.destinationTable = destinationTable;
	    sourceColumns = new ArrayList<BusinessColumn>();
	    destinationColumns = new ArrayList<BusinessColumn>();
	    sourceColumnUniqueNamesList = new ArrayList<String>();
	    destinationColumnUniqueNamesList = new ArrayList<String>();
	    sourceTableUniqueNamesList = new ArrayList<String>();
	    destinationTableUniqueNamesList = new ArrayList<String>();
	}

	@Override
	public void createControl(Composite parent) {
 		Composite mainComposite = new Composite (parent, SWT.NULL);
 		setControl(mainComposite);
 		mainComposite.setLayout(new FillLayout(SWT.HORIZONTAL));
 		
 		Composite innerComposite = new Composite(mainComposite, SWT.NONE);
 		innerComposite.setLayout(new GridLayout(1, false));
 		
 		//Create Relationship Name Group
 		initRelationshipNameGroup(innerComposite,SWT.NONE);
 		
 		//Create Columns Group
 		initCorrelationGroup(innerComposite,SWT.NONE);
 		
 		//Create Correlation Summary Group (cardinality + defined correlation)
 		initCorrelationSummaryGroup(innerComposite, SWT.NONE);		

 		if(selectTable(sourceTableCombo, sourceTable, true)) {
 			populateSourceColumnList(sourceTable);
 		}
 		
 		if(selectTable(destinationTableCombo, destinationTable, true)) {
 			populateDestinationColumnList(destinationTable);
 		}
 		
 		checkPageComplete();
	}
	
	private boolean selectTable(Combo combo, BusinessColumnSet table, boolean disableOnSelectCombo) {
		if (table != null){
 			String[] items = combo.getItems();
 			for (int i=0; i < items.length; i++){
 				if (items[i].equals(table.getName())){
 					combo.select(i);
 					if(disableOnSelectCombo) combo.setEnabled(false);
 					return true;
 				}
 			}
 		}
		return false;
	}
	
	private void initRelationshipNameGroup(Composite parent, int style) {
 		Composite composite_name = new Composite(parent, style);
 		composite_name.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		composite_name.setLayout(new GridLayout(2, false));
 		
 		Label lblBusinessRelationshipName = new Label(composite_name, SWT.NONE);
 		lblBusinessRelationshipName.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label.name"));
 		relationshipNameInputField = new Text(composite_name, SWT.BORDER);
 		relationshipNameInputField.setToolTipText(RL.getString("business.editor.wizard.addbusinessrelationship.input.tooltip"));
 		relationshipNameInputField.setText("business relationship name");
 		relationshipNameInputField.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false, 1, 1));
 		relationshipNameInputField.addModifyListener(new ModifyListener(){
			public void modifyText(ModifyEvent me){
				//check if the input field is changed by the user
				if (relationshipNameInputField.isFocusControl()){
					nameInserted = true;
				}
			}
		});
	}
	
	private void initCorrelationGroup(Composite parent, int style) {
 		Composite columnCorrelationGroup = new Composite(parent, style);
 		columnCorrelationGroup.setLayout(new FillLayout(SWT.HORIZONTAL));
 		columnCorrelationGroup.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		initSourceGroup(columnCorrelationGroup, SWT.NONE);
 		initDestinationGroup(columnCorrelationGroup, SWT.NONE);
	}
	
	public void initCardinalityGroup(Composite parent, int style){
 		Composite cardinalityGroup = new Composite(parent, style);
 		cardinalityGroup.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		cardinalityGroup.setLayout(new GridLayout(2, false));
 		
 		
 		Label lblCardinality = new Label(cardinalityGroup, SWT.NONE);
 		lblCardinality.setText("Cardinality");
 		lblCardinality.setLocation(0, 0);
 		
 		Composite compGroup = new Composite(cardinalityGroup, SWT.NONE);
 		compGroup.setLayout(new FillLayout(SWT.HORIZONTAL));
 		compGroup.setLayoutData(new GridData(SWT.LEFT, SWT.FILL, true, false, 1, 1));
 
 		Button button1to1 = new Button(compGroup, SWT.RADIO);
 		button1to1.setText("1 to 1");
 		button1to1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = ONE_TO_ONE;
			}
		});
 		
 		Button button1toN = new Button(compGroup, SWT.RADIO);
 		button1toN.setText("1 to N");
 		button1toN.setSelection(true);
 		button1toN.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				cardinality = ONE_TO_MANY;
			}
		});
 		
 		Button buttonNto1 = new Button(compGroup, SWT.RADIO);
 		buttonNto1.setText("N to 1");
 		buttonNto1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				cardinality = MANY_TO_ONE;
			}
		});
 		
 		/*
 		Button buttonNtoN = new Button(compGroup, SWT.RADIO);
 		buttonNtoN.setText("N to N");
 		buttonNtoN.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				cardinality = MANY_TO_MANY;
			}
		});
		*/
 		
 		Button button1optTo1 = new Button(compGroup, SWT.RADIO);
 		button1optTo1.setText("1* to 1");
 		button1optTo1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = OPTIONAL_ONE_TO_ONE;
			}
		});
 		
 		Button button1ToOpt1 = new Button(compGroup, SWT.RADIO);
 		button1ToOpt1.setText("1 to 1*");
 		button1ToOpt1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = ONE_TO_OPTIONAL_ONE;
			}
		});
		
 		Button buttonOpt1ToN = new Button(compGroup, SWT.RADIO);
 		buttonOpt1ToN.setText("1* to N");
 		buttonOpt1ToN.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = OPTIONAL_ONE_TO_MANY;
			}
		});
 		
 		Button button1ToOptN = new Button(compGroup, SWT.RADIO);
 		button1ToOptN.setText("1 to N*");
 		button1ToOptN.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = ONE_TO_OPTIONAL_MANY;
			}
		});
 		
 		Button buttonOptNto1 = new Button(compGroup, SWT.RADIO);
 		buttonOptNto1.setText("N* to 1");
 		buttonOptNto1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = OPTIONAL_MANY_TO_ONE;
			}
		});
 		
 		Button buttonNtoOpt1 = new Button(compGroup, SWT.RADIO);
 		buttonNtoOpt1.setText("N to 1*");
 		buttonNtoOpt1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
					cardinality = MANY_TO_OPTIONAL_ONE;
			}
		});
 		
 		Button btnAddRelationship = new Button(cardinalityGroup, SWT.NONE);
 		btnAddRelationship.setText(RL.getString("business.editor.wizard.addbusinessrelationship.addbutton"));
		btnAddRelationship.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				if ( (sourceColumnList.getSelection().length != 0) && (destinationColumnList.getSelection().length != 0) && (getBusinessRelationshipName().length() != 0) ){
					setErrorMessage(null);
					columnCorrelationList.add(sourceTableCombo.getText() + "." + sourceColumnList.getSelection()[0] + " -> "+destinationTableCombo.getText()+"."+destinationColumnList.getSelection()[0]);
					sourceColumns.add( getSourceColumn() );
					destinationColumns.add( getDestinationColumn() );
					
					//disable Input Name field
					relationshipNameInputField.setEnabled(false);
					
					//disable Columns Combo
					sourceTableCombo.setEnabled(false);
					destinationTableCombo.setEnabled(false);
					
					checkPageComplete();
				} else {
					setErrorMessage(RL.getString("business.editor.wizard.addbusinessrelationship.error"));
				}
					
			}
		});
 		
 		Button btnRemoveRelationship = new Button(cardinalityGroup, SWT.NONE);
 		btnRemoveRelationship.setText(RL.getString("business.editor.wizard.addbusinessrelationship.removebutton"));
 		btnRemoveRelationship.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				int selectionIndex = columnCorrelationList.getSelectionIndex();
				if (selectionIndex != -1){
					//remove source and destination columns from correlation using same index
					sourceColumns.remove(selectionIndex);
					destinationColumns.remove(selectionIndex);
					columnCorrelationList.remove(selectionIndex);
				}
				//check if correlation list is empty
				if (columnCorrelationList.getItemCount() == 0){
					//re-enable Input name field
					relationshipNameInputField.setEnabled(true);
					
					//re-set default combo selection
					sourceTableCombo.setEnabled(true);
					destinationTableCombo.setEnabled(true);
					selectTable(sourceTableCombo, sourceTable, true);
					selectTable(destinationTableCombo, destinationTable, true);
				}
			}
		});
	}
	
	private void initCorrelationSummaryGroup(Composite parent, int style) {
 		Group correlationSummaryGroup = new Group(parent, style);
 		correlationSummaryGroup.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label"));
 		correlationSummaryGroup.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true, 1, 1));
 		correlationSummaryGroup.setLayout(new FillLayout(SWT.HORIZONTAL));
 		
 		Composite compCorrelation = new Composite(correlationSummaryGroup, SWT.NONE);
 		compCorrelation.setLayout(new GridLayout(1, false));

 		initCardinalityGroup(compCorrelation, SWT.NONE);
 		
 		columnCorrelationList = new List(compCorrelation, SWT.BORDER | SWT.H_SCROLL | SWT.V_SCROLL);
 		columnCorrelationList.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, true, 1, 1));
 		
	}
	
	private void initSourceGroup(Composite parent, int style) {
 		Group grpSourceBusinessTable = new Group(parent, style);
 		grpSourceBusinessTable.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label.source"));
 		grpSourceBusinessTable.setLayout(new GridLayout(1, false));
 		
 		initSourceTableCombo(grpSourceBusinessTable, SWT.READ_ONLY);
 		
 		Label lblSourceColumns = new Label(grpSourceBusinessTable, SWT.NONE);
 		lblSourceColumns.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label.source.attributes"));
 		//lblSourceColumns.setLocation(0, 0);
 		
 		initSourceColumnList(grpSourceBusinessTable, SWT.NONE);
	}
	
	private void initDestinationGroup(Composite parent, int style) {
		Group grpTargetBusinessTable = new Group(parent, style);
 		grpTargetBusinessTable.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label.target"));
 		grpTargetBusinessTable.setLayout(new GridLayout(1, false));
 		
 		initDestinationTableCombo(grpTargetBusinessTable, SWT.READ_ONLY);
 		
 		Label lblTargetColumns = new Label(grpTargetBusinessTable, SWT.NONE);
 		lblTargetColumns.setText(RL.getString("business.editor.wizard.addbusinessrelationship.label.target.attributes"));
 		lblTargetColumns.setLocation(0, 0);
 		
 		initDestinationColumnList(grpTargetBusinessTable, SWT.NONE);
	}
		
	private void initSourceColumnList(Composite parent, int style) {
 		Composite compSourceColumnList = new Composite(parent, style);
 		GridData gdCompSourceColumnList = new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1);
 		//compSourceColumnList.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		//compSourceColumnList.setBounds(0, 0, 64, 64);
 		gdCompSourceColumnList.heightHint = 100;
 		compSourceColumnList.setLayoutData(gdCompSourceColumnList);
 		compSourceColumnList.setLayout(new FillLayout(SWT.HORIZONTAL));
 		
 		sourceColumnList = new List(compSourceColumnList, SWT.BORDER | SWT.H_SCROLL | SWT.V_SCROLL);
 		sourceColumnList.addSelectionListener(new SelectionAdapter() {
 			@Override
 			public void widgetSelected(SelectionEvent e) {
 				if ((destinationColumnList.getSelectionCount() > 0) && (relationshipNameInputField.isEnabled()) && (!nameInserted)){
 					//set suggested name
 					relationshipNameInputField.setText("BR_"+sourceTableCombo.getText()+"_"+destinationTableCombo.getText());
 				}
 			}
 		});
	}
	
	private void initDestinationColumnList(Composite parent, int style) {
 		Composite compDestinationColumnList = new Composite(parent, style);
 		GridData gdCompDestinationColumnList = new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1);
 		//compDestinationColumnList.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		//compDestinationColumnList.setBounds(0, 0, 64, 64);
 		gdCompDestinationColumnList.heightHint = 100;
 		compDestinationColumnList.setLayoutData(gdCompDestinationColumnList);
 		compDestinationColumnList.setLayout(new FillLayout(SWT.HORIZONTAL));
 		
 		destinationColumnList = new List(compDestinationColumnList, SWT.BORDER | SWT.H_SCROLL | SWT.V_SCROLL);
 		destinationColumnList.addSelectionListener(new SelectionAdapter() {
 			@Override
 			public void widgetSelected(SelectionEvent e) {
 				if ((sourceColumnList.getSelectionCount() > 0) && (relationshipNameInputField.isEnabled()) && (!nameInserted)){
 					//set suggested name
 					relationshipNameInputField.setText("BR_"+sourceTableCombo.getText()+"_"+destinationTableCombo.getText());
 				}
 			}
 		});
	}
	
	private void initSourceTableCombo(Composite parent, int style) {
 		sourceTableCombo = new Combo(parent, style);
 		sourceTableCombo.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		//sourceTableCombo.setBounds(0, 0, 91, 23);
 		populateSourceTableCombo();
 		sourceTableCombo.addSelectionListener(new SelectionAdapter() {
 			@Override
 			public void widgetSelected(SelectionEvent e) {
 				if (sourceTableCombo.getItemCount() > 0) {	
 	 				populateSourceColumnList( getSourceTable() );
 				}
 			}
 		});
	}
	
	private void initDestinationTableCombo(Composite parent, int style) {
 		destinationTableCombo = new Combo(parent, style);
 		destinationTableCombo.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
 		//destinationTableCombo.setBounds(0, 0, 91, 23);
 		populateDestinationTableCombo();
 		destinationTableCombo.addSelectionListener(new SelectionAdapter() {
 			@Override
 			public void widgetSelected(SelectionEvent e) {
 				if (destinationTableCombo.getItemCount() > 0) {
 	 				populateDestinationColumnList( getDestinationTable() );		
 				}
 			}
 		});
	}
	

	private void populateSourceTableCombo(){
		EList<BusinessColumnSet> businessTables = model.getTables();
		for(BusinessColumnSet table : businessTables){
			sourceTableCombo.add(table.getName());
			sourceTableUniqueNamesList.add(table.getUniqueName());
		}
	}
	
	private void populateDestinationTableCombo(){
		for(BusinessColumnSet table : model.getTables()){
			destinationTableCombo.add(table.getName());
			destinationTableUniqueNamesList.add(table.getUniqueName());
		}
	}
	
	private void populateSourceColumnList(BusinessColumnSet businessTable){
		sourceColumnList.removeAll();
		sourceColumnUniqueNamesList.clear();
		java.util.List<SimpleBusinessColumn> businessColumns = businessTable.getSimpleBusinessColumns();
		for (BusinessColumn column : businessColumns ){
			sourceColumnList.add(column.getName());
			sourceColumnUniqueNamesList.add(column.getUniqueName());
		}
	}
	
	private void populateDestinationColumnList(BusinessColumnSet businessTable){
		destinationColumnList.removeAll();
		destinationColumnUniqueNamesList.clear();
		java.util.List<SimpleBusinessColumn> businessColumns = businessTable.getSimpleBusinessColumns();
		for (BusinessColumn column : businessColumns ){
			destinationColumnList.add(column.getName());
			destinationColumnUniqueNamesList.add(column.getUniqueName());
		}
	}
	
	//check if the right conditions to go forward occurred
	private void checkPageComplete(){
		if(columnCorrelationList.getItemCount() > 0){	
			setPageComplete(true);
		}
		else{			
			setPageComplete(false);
		}		
	}
	
	private BusinessColumnSet getSourceTable(){
		if (sourceTable != null){
			return sourceTable;
		}
		else{
			String sourceTableUniqueName = sourceTableUniqueNamesList.get(sourceTableCombo.getSelectionIndex());
			return model.getTableByUniqueName(sourceTableUniqueName);
		}
	}
	
	private BusinessColumnSet getDestinationTable(){
		if (destinationTable != null){
			return destinationTable;
		}
		else{
			String destinationTableUniqueName = destinationTableUniqueNamesList.get(destinationTableCombo.getSelectionIndex());
			return model.getTableByUniqueName(destinationTableUniqueName);
		}
	}
	
	private BusinessColumn getSourceColumn() {
		String sourceColumnUniqueName = sourceColumnUniqueNamesList.get(sourceColumnList.getSelectionIndex());		
		return getSourceTable().getSimpleBusinessColumnByUniqueName(sourceColumnUniqueName);
	}
	
	private BusinessColumn getDestinationColumn() {
		String destinationColumnUniqueName = destinationColumnUniqueNamesList.get(destinationColumnList.getSelectionIndex());		
		return getDestinationTable().getSimpleBusinessColumnByUniqueName(destinationColumnUniqueName);
	}

	
	private String cardinalityToString(int cardinality){
		switch(cardinality){
			case 1: return "one-to-one"; 
			case 2: return "one-to-many"; 
			case 3: return "many-to-one"; 
			case 4: return "many-to-many"; 
			case 5: return "optional-one-to-one";
			case 6: return "one-to-optional-one";
			case 7: return "optional-one-to-many";
			case 8: return "one-to-optional-many";
			case 9: return "optional-many-to-one";
			case 10: return "many-to-optional-one";					
			default: return "one-to-many";
		}
	}
	
	public String getBusinessRelationshipName(){
		return relationshipNameInputField.getText();
	}

	/**
	 * @return the relationshipsContainer
	 */
	public BusinessRelationshipDescriptor getRelationshipDescriptor() {
		return new BusinessRelationshipDescriptor( getSourceTable(), getDestinationTable(), sourceColumns, destinationColumns, cardinalityToString(cardinality), getBusinessRelationshipName() );
	}
}
