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
package it.eng.spagobi.meta.querybuilder.ui;


import it.eng.spagobi.meta.querybuilder.Activator;
import it.eng.spagobi.meta.querybuilder.dnd.QueryBuilderDragListener;
import it.eng.spagobi.meta.querybuilder.dnd.QueryBuilderDropHavingListener;
import it.eng.spagobi.meta.querybuilder.dnd.QueryBuilderDropSelectListener;
import it.eng.spagobi.meta.querybuilder.dnd.QueryBuilderDropWhereListener;
import it.eng.spagobi.meta.querybuilder.edit.AliasColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.BooleanConnectorColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.FilterColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.FunctionColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.GroupColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingBooleanConnectorColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingFilterColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingIsForPromptColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingLeftFunctionColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingOperatorColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.HavingRightFunctionColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.IncludeColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.IsForPromptColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.OperatorColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.OrderColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.edit.VisibleColumnEditingSupport;
import it.eng.spagobi.meta.querybuilder.model.HavingClause;
import it.eng.spagobi.meta.querybuilder.model.HavingClauseModelProvider;
import it.eng.spagobi.meta.querybuilder.model.SelectField;
import it.eng.spagobi.meta.querybuilder.model.SelectFieldModelProvider;
import it.eng.spagobi.meta.querybuilder.model.WhereClause;
import it.eng.spagobi.meta.querybuilder.model.WhereClauseModelProvider;
import it.eng.spagobi.meta.querybuilder.ui.editor.QueryBuilderEditor;
import it.eng.spagobi.meta.querybuilder.ui.result.ResultTableViewer;
import it.eng.spagobi.meta.querybuilder.ui.table.QueryFiltersComponents;
import it.eng.spagobi.meta.querybuilder.ui.tree.ModelTreeViewer;

import java.util.ArrayList;

import org.eclipse.jface.util.LocalSelectionTransfer;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.ColumnLabelProvider;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.swt.SWT;
import org.eclipse.swt.dnd.DND;
import org.eclipse.swt.dnd.TextTransfer;
import org.eclipse.swt.dnd.Transfer;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.ui.part.MultiPageEditorPart;



/**
 * @author cortella
 *
 */
public class QueryBuilder {
	
	private ModelTreeViewer businessModelTreeViewer;

	public QueryBuilder(){
		
	}
	
	/*
	 * Create a new Wizard for QueryBuilder with 
	 * Edit and Results pages
	 */
	public Wizard createWizard() {
		return null;
	}
	
	/*
	 * Create a new (MultiPage)Editor for QueryBuilder with Edit 
	 * and Results pages
	 */
	public MultiPageEditorPart createEditor() {
		return new QueryBuilderEditor(this);
	}
	
	/*
	 * Create UI components for Query Edit
	 * @return the composite populated with widgets
	 */
	public Composite createEditComponents(Composite parent){
		Composite container = new Composite(parent, SWT.NONE);
		container.setLayout(new FillLayout(SWT.HORIZONTAL));
		
		//Create main grid with two columns
		Composite composite = new Composite(container, SWT.NONE);
		composite.setLayout(new GridLayout(2, false));
		
		//Create Business Model Tree 
		createEditBusinessModelTree(composite);
		
		//Create Query Filters
		createEditFilters(composite);

		return container;
	}
	
	/*
	 * Create UI for Query Edit - Business Model Tree
	 */
	public void createEditBusinessModelTree(Composite composite){
		Composite compositeTree = new Composite(composite, SWT.NONE);
		GridData gd_compositeTree = new GridData(SWT.FILL, SWT.FILL, false, true, 1, 1);
		gd_compositeTree.widthHint = 180;
		compositeTree.setLayoutData(gd_compositeTree);
		compositeTree.setLayout(new FillLayout(SWT.HORIZONTAL));
		
		Group groupBusinessModelTree = new Group(compositeTree, SWT.NONE);
		groupBusinessModelTree.setText("Business Model");
		groupBusinessModelTree.setLayout(new FillLayout(SWT.HORIZONTAL));
		
		//*******************************************
		// Business Model Tree Viewer 
		//*******************************************
		businessModelTreeViewer = new ModelTreeViewer(groupBusinessModelTree);
		Transfer[] transferTypes = new Transfer[]{ TextTransfer.getInstance(),LocalSelectionTransfer.getTransfer()  };
		businessModelTreeViewer.addDragSupport(DND.DROP_MOVE, transferTypes, new QueryBuilderDragListener(businessModelTreeViewer));
	}

	/*
	 * Create UI for Query Edit - Query Filters (Select, Where, Having)
	 */	
	public QueryFiltersComponents createEditFilters(Composite composite){
		QueryFiltersComponents compositeFilters;
		compositeFilters = new QueryFiltersComponents(composite);
		return compositeFilters;
	}

	/*
	 *  Create UI components for Query Results
	 *  @return the composite populated with widgets
	 */
	public Composite createResultsComponents(Composite parent){		
		Composite container = new Composite(parent, SWT.NONE);
		container.setLayout(new FillLayout(SWT.HORIZONTAL));
		
		Composite composite = new Composite(container, SWT.NONE);
		FillLayout fl_composite = new FillLayout(SWT.HORIZONTAL);
		fl_composite.marginWidth = 2;
		fl_composite.marginHeight = 2;
		composite.setLayout(fl_composite);
		
		Group groupQueryResult = new Group(composite, SWT.NONE);
		groupQueryResult.setText("Query Result");
		GridLayout gl_groupQueryResult = new GridLayout(1, false);
		gl_groupQueryResult.marginRight = 1;
		gl_groupQueryResult.marginTop = 1;
		gl_groupQueryResult.marginLeft = 1;
		gl_groupQueryResult.marginBottom = 1;
		groupQueryResult.setLayout(gl_groupQueryResult);
		
		//Create Table widget to host results
		createResultsTableViewer(groupQueryResult);
		
		return container;
	}
	
	/*
	 *  Create Table widget for Query Results
	 */
	public ResultTableViewer createResultsTableViewer(Group groupQueryResult){
		ResultTableViewer tableViewer ;
		
		tableViewer = new ResultTableViewer(groupQueryResult, businessModelTreeViewer.getModelStructure());
		//tableViewer.updateTable(0,10,10);
		
		return tableViewer;
	}
	
}
