package it.eng.spagobi.studio.geo.editors;


import it.eng.spagobi.sdk.exceptions.MissingParameterValue;
import it.eng.spagobi.studio.core.bo.DataStoreMetadata;
import it.eng.spagobi.studio.core.bo.DataStoreMetadataField;
import it.eng.spagobi.studio.core.bo.Dataset;
import it.eng.spagobi.studio.core.bo.GeoFeature;
import it.eng.spagobi.studio.core.bo.GeoMap;
import it.eng.spagobi.studio.core.bo.SpagoBIServerObjects;
import it.eng.spagobi.studio.core.exceptions.NoServerException;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.geo.editors.model.bo.DatamartProviderBO;
import it.eng.spagobi.studio.geo.editors.model.bo.HierarchyBO;
import it.eng.spagobi.studio.geo.editors.model.bo.LevelBO;
import it.eng.spagobi.studio.geo.editors.model.geo.GEODocument;
import it.eng.spagobi.studio.geo.editors.model.geo.Hierarchies;
import it.eng.spagobi.studio.geo.editors.model.geo.Hierarchy;
import it.eng.spagobi.studio.geo.editors.model.geo.Level;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.layout.FormAttachment;
import org.eclipse.swt.layout.FormData;
import org.eclipse.swt.layout.FormLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;
import org.eclipse.ui.forms.widgets.FormToolkit;

public class HierarchiesDesigner {


	private GEOEditor editor=null;
	private Composite mainComposite;
	private GEODocument geoDocument;

	public HierarchiesDesigner(Composite _composite, GEOEditor _editor) {
		super();
		mainComposite= _composite;
		editor = _editor;
	}

	public HierarchiesDesigner(Composite _composite, GEOEditor _editor, GEODocument _geoDocument) {
		super();
		mainComposite= _composite;
		editor = _editor;
		geoDocument = _geoDocument;
	}
	private void fillHierarchiesTree(Tree hierarchiesTree){
		Hierarchies hierarchies = HierarchyBO.getAllHierarchies(geoDocument);
		//create hierarchies
		if(hierarchies != null && hierarchies.getHierarchy()!= null){
			for(int i=0; i < hierarchies.getHierarchy().size(); i++){
				Hierarchy hierarchy = hierarchies.getHierarchy().elementAt(i);
				TreeItem item = new TreeItem(hierarchiesTree, SWT.NONE);
				item.setText(hierarchy.getName());
				if(hierarchy.getLevels() != null && hierarchy.getLevels().getLevel() != null){
					for(int j=0; j < hierarchy.getLevels().getLevel().size(); j++){
						Level level = hierarchy.getLevels().getLevel().elementAt(j);
						TreeItem itemLev = new TreeItem(item, SWT.NONE);
						itemLev.setText(level.getName());
					}
				}
			}			
		}
		hierarchiesTree.getParent().getParent().redraw();
	}
	private void createNewHierarchy(Tree hierarchiesTree, String name, String type){		
        TreeItem iItem = new TreeItem(hierarchiesTree, SWT.NONE);
        iItem.setText(name);

        hierarchiesTree.getParent().getParent().redraw();
        //crea oggetto java con name+type
        HierarchyBO.setNewHierarchy(geoDocument, name, type);
        editor.setIsDirty(true);
		
	}
	
	private void updateHierarchy(Tree hierarchiesTree, String name, String type, Hierarchy hierarchy){		
        TreeItem iItem = hierarchiesTree.getSelection()[0];
        iItem.setText(name);
        hierarchiesTree.getParent().getParent().redraw();
        hierarchy.setName(name);
        hierarchy.setType(type);
        editor.setIsDirty(true);
		
	}
	private void createNewLevel(Tree hierarchiesTree, Level newLevel, TreeItem parent, boolean isDefault){		
        TreeItem iItem = new TreeItem(parent, SWT.NONE);
        iItem.setText(newLevel.getName());

        hierarchiesTree.getParent().getParent().redraw();

        LevelBO.setNewLevel(geoDocument, parent.getText(), newLevel);
        if(isDefault){
        	DatamartProviderBO.setHierarchy(geoDocument, parent.getText(), newLevel.getName());
        }
        editor.setIsDirty(true);
	}
	private void updateLevel(Tree hierarchiesTree, Level newLevel, TreeItem parent, Level oldLevel, boolean isDefault){		
        TreeItem iItem = hierarchiesTree.getSelection()[0];
        iItem.setText(newLevel.getName());
        
        LevelBO.updateLevel(geoDocument, iItem.getParentItem().getText(), oldLevel, newLevel);
        if(isDefault){
        	DatamartProviderBO.setHierarchy(geoDocument, parent.getText(), oldLevel.getName());
        }
        hierarchiesTree.getParent().getParent().redraw();
        oldLevel = newLevel;	
        editor.setIsDirty(true);
	}
	
	private void deleteItem(Tree hierarchiesTree, TreeItem item){
        //elimina oggetto java
		if(item.getParentItem() == null){
			//hierarchy--> delete hierarchy
			HierarchyBO.deleteHierarchy(geoDocument, item.getText());			
		}else{
			//level--> deleteLevel
			LevelBO.deleteLevel(geoDocument, item.getParentItem().getText(), item.getText());
		}
		item.dispose();
        hierarchiesTree.pack();
        hierarchiesTree.redraw();
        editor.setIsDirty(true);
	}
	private void createMenu(final Composite sectionClient, final Tree hierarchiesTree){
		
    	Menu menu = new Menu (sectionClient.getShell(), SWT.POP_UP);
    	MenuItem menuItem = new MenuItem (menu, SWT.PUSH);
		menuItem.setText ("New Hierarchy");
		menuItem.addListener(SWT.Selection, new Listener () {
            public void handleEvent (Event event) { 
            	TreeItem[] sel = hierarchiesTree.getSelection();
            	if(sel[0] != null && sel[0].getParentItem() != null){//ha selez un livello--> errore
            		MessageDialog.openError(sectionClient.getShell(), "Error", "Wrong position");
            	}else{
            		createNewHierarchyShell(hierarchiesTree, null);
            		
            	}
            	
            }
        });
		menuItem = new MenuItem (menu, SWT.PUSH);
		menuItem.setText ("New Level");
		menuItem.addListener(SWT.Selection, new Listener () {
            public void handleEvent (Event event) { 
            	TreeItem[] sel = hierarchiesTree.getSelection();
            	if(sel[0] != null && sel[0].getParentItem() == null){
                	createNewLevelShell(hierarchiesTree, sel[0], null);
                	
            	}else{
            		MessageDialog.openError(sectionClient.getShell(), "Error", "Wrong position. Please select a hierarchy");
            	}

            }
        });	 
		menuItem = new MenuItem (menu, SWT.PUSH);
		menuItem.setText ("Delete");
		menuItem.addListener(SWT.Selection, new Listener () {
            public void handleEvent (Event event) { 
            	TreeItem[] sel = hierarchiesTree.getSelection();
            	if(sel[0] != null){
                	deleteItem(hierarchiesTree, sel[0]);
            	}else{
            		MessageDialog.openWarning(sectionClient.getShell(), "Warning", "Please select an item to delete");
            	}

            }
        });	
		hierarchiesTree.setMenu(menu);
	}
	public void createHierarchiesTree(final Composite sectionClient, FormToolkit toolkit){
				
		GridData gd = new GridData(GridData.FILL_BOTH);
		gd.horizontalSpan =4;
		gd.heightHint=100;
		gd.minimumHeight=70;
		gd.verticalAlignment=SWT.TOP;
				
		final Composite hierarchiesGroup = new Composite(sectionClient, SWT.FILL);
		//hierarchiesGroup.setText("Hierarchies");
		hierarchiesGroup.setLayoutData(gd);
		hierarchiesGroup.setLayout(sectionClient.getLayout());

		final Tree hierarchiesTree = toolkit.createTree(hierarchiesGroup, SWT.NONE | SWT.V_SCROLL | SWT.H_SCROLL | SWT.SINGLE );
		hierarchiesTree.setLayoutData(gd);

		
		if(geoDocument.getDatamartProvider().getHierarchies() == null || 
				geoDocument.getDatamartProvider().getHierarchies().getHierarchy() == null || 
				geoDocument.getDatamartProvider().getHierarchies().getHierarchy().size() == 0){
			final Label emptyTree = toolkit.createLabel(hierarchiesGroup, "empty heirarchies tree...right click here to create", SWT.CENTER);
			
			Color color = new org.eclipse.swt.graphics.Color(sectionClient.getDisplay(), 255,0,0);
			emptyTree.setForeground(color);
			emptyTree.setLayoutData(gd);
			emptyTree.addListener(SWT.MouseDown, new Listener () {
	            public void handleEvent (Event event) {            	
	            	if (event.button==3){	
	            		createNewHierarchyShell(hierarchiesTree, null);   
	            		emptyTree.setVisible(false);
	            	}
	            }
	        });	    
		    emptyTree.setLayoutData(gd);
		}else{
			fillHierarchiesTree(hierarchiesTree);
		}
	    //mouseDoubleClick --> modify
	    hierarchiesTree.addListener(SWT.MouseDoubleClick, new Listener () {
            public void handleEvent (Event event) {
            	TreeItem[] sel = hierarchiesTree.getSelection();
            	if(sel[0] != null){
                	if(sel[0].getParentItem()== null){
                		//hierarchy
                		Hierarchy hierarchy= HierarchyBO.getHierarchyByName(geoDocument, sel[0].getText());
                		createNewHierarchyShell(hierarchiesTree, hierarchy);

                	}else{
                		//level
                		Level level = LevelBO.getLevelByName(geoDocument, sel[0].getParentItem().getText(), sel[0].getText());
                		createNewLevelShell(hierarchiesTree, sel[0], level);

                	}
            	}else{
            		MessageDialog.openWarning(sectionClient.getShell(), "Warning", "Please select an item to update");
            	}
            }
        });
	    //rightClick --> menu
	    hierarchiesTree.addListener(SWT.MouseDown, new Listener () {
            public void handleEvent (Event event) {            	
            	if (event.button==3){	
            		createMenu(sectionClient, hierarchiesTree);	            	            	
            	}
            }
        });	    
	    
	    hierarchiesGroup.redraw();
        sectionClient.getParent().redraw();
	}
	private void createNewHierarchyShell(final Tree hierarchiesTree, final Hierarchy hierarchy){
		final Shell dialog = new Shell (mainComposite.getDisplay(), SWT.DIALOG_TRIM | SWT.APPLICATION_MODAL);
		dialog.setText("New Hierarchy");
		FormLayout formLayout = new FormLayout ();
		formLayout.marginWidth = 10;
		formLayout.marginHeight = 10;
		formLayout.spacing = 10;
		dialog.setLayout (formLayout);

		Label label = new Label (dialog, SWT.RIGHT);
		label.setText ("Hierarchy name:");
		FormData data = new FormData ();
		data.width = 100;
		label.setLayoutData (data);

		Button cancel = new Button (dialog, SWT.PUSH);
		cancel.setText ("Cancel");
		data = new FormData ();
		data.width = 60;
		data.right = new FormAttachment (100, 0);
		data.bottom = new FormAttachment (100, 0);
		cancel.setLayoutData (data);
		cancel.addSelectionListener (new SelectionAdapter () {
			public void widgetSelected (SelectionEvent e) {
				System.out.println("User cancelled dialog");
				dialog.close ();
			}
		});

		final Text text = new Text (dialog, SWT.BORDER);
		if(hierarchy != null){
			text.setText(hierarchy.getName());
		}
		data = new FormData ();
		data.width = 200;
		data.left = new FormAttachment (label, 0, SWT.DEFAULT);
		data.right = new FormAttachment (100, 0);
		data.top = new FormAttachment (label, 0, SWT.CENTER);
		//data.bottom = new FormAttachment (cancel, 0, SWT.DEFAULT);
		text.setLayoutData (data);
		
		
		//type
		data = new FormData ();
		data.width = 100;
		data.top = new FormAttachment(text, 5);

		Label labelType = new Label (dialog, SWT.RIGHT);
		labelType.setText ("Type:");		
		labelType.setLayoutData (data);
		
		final Text textType = new Text (dialog, SWT.BORDER);
		if(hierarchy != null){
			textType.setText(hierarchy.getType());
		}
		data = new FormData ();
		data.width = 200;
		data.left = new FormAttachment (labelType, 0, SWT.DEFAULT);
		data.right = new FormAttachment (100, 0);
		data.top = new FormAttachment (labelType, 0, SWT.CENTER);
		data.bottom = new FormAttachment (cancel, 0, SWT.DEFAULT);
		textType.setLayoutData (data);
		

		Button ok = new Button (dialog, SWT.PUSH);
		ok.setText ("OK");
		data = new FormData ();
		data.width = 60;
		data.right = new FormAttachment (cancel, 0, SWT.DEFAULT);
		data.bottom = new FormAttachment (100, 0);
		ok.setLayoutData (data);
		ok.addSelectionListener (new SelectionAdapter () {
			public void widgetSelected (SelectionEvent e) {
				//create tree item
				String type = textType.getText();
				String name = text.getText();
				if(hierarchy == null){
					createNewHierarchy(hierarchiesTree, name, type);
				}else{
					updateHierarchy(hierarchiesTree, name, type, hierarchy);
				}
				
				dialog.close ();
			}
		});

		dialog.setDefaultButton (ok);
		dialog.pack ();
		dialog.open ();

	}
	private void createNewLevelShell(final Tree hierarchiesTree, final TreeItem selectedItem, final Level level){
		
		final Shell dialog = new Shell (mainComposite.getDisplay(), SWT.DIALOG_TRIM | SWT.APPLICATION_MODAL);
		dialog.setText("New Level for "+selectedItem);
		FormLayout formLayout = new FormLayout ();
		formLayout.marginWidth = 10;
		formLayout.marginHeight = 10;
		formLayout.spacing = 10;
		dialog.setLayout (formLayout);

		Label label = new Label (dialog, SWT.RIGHT);
		label.setText ("Level name:");
		FormData data = new FormData ();
		data.width = 100;
		label.setLayoutData (data);

		Button cancel = new Button (dialog, SWT.PUSH);
		cancel.setText ("Cancel");
		data = new FormData ();
		data.width = 60;
		data.right = new FormAttachment (100, 0);
		data.bottom = new FormAttachment (100, 0);
		cancel.setLayoutData (data);
		cancel.addSelectionListener (new SelectionAdapter () {
			public void widgetSelected (SelectionEvent e) {
				System.out.println("User cancelled dialog");
				dialog.close ();
			}
		});

		final Text text = new Text (dialog, SWT.BORDER);
		if(level != null){
			text.setText(level.getName());
		}
		data = new FormData ();
		data.width = 200;
		data.left = new FormAttachment (label, 0, SWT.DEFAULT);
		data.right = new FormAttachment (100, 0);
		data.top = new FormAttachment (label, 0, SWT.CENTER);
		text.setLayoutData (data);
		
		//dataset column 
		data = new FormData ();
		data.width = 100;
		data.top = new FormAttachment(text, 5);
		Label labelColumn = new Label (dialog, SWT.RIGHT);
		labelColumn.setText ("Dataset column:");
		labelColumn.setLayoutData (data);		
		
	
		final Combo textColumn = drawColumnIdCombo(dialog);
		if(textColumn == null){
			MessageDialog.openError(mainComposite.getShell(), "Error", "Select a dataset!");
			return;
		}
		if(level != null){
			for(int i=0; i<textColumn.getItemCount();i++){
				String val = textColumn.getItem(i);
				if(val.equals(level.getColumnId())){
					textColumn.select(i);
					
				}
			}
			
		}
		data = new FormData ();
		data.width = 125;
		data.left = new FormAttachment (labelColumn, 0, SWT.DEFAULT);
		data.right = new FormAttachment (75, 0);
		data.top = new FormAttachment (labelColumn, 0, SWT.CENTER);
		textColumn.setLayoutData (data);
		
		//is default
		data = new FormData ();
		data.width = 75;
		data.left = new FormAttachment (textColumn, 5, SWT.DEFAULT);
		data.top = new FormAttachment(text, 5);
		
		final Button checkIsDef = new Button(dialog, SWT.CHECK | SWT.RIGHT);
		final boolean[] isDefault = new boolean[1];
		checkIsDef.setText("Is default");
		if(level != null){
			String defHier =geoDocument.getDatamartProvider().getHierarchy();
			String defLev =geoDocument.getDatamartProvider().getLevel();
			if(defHier.equals(selectedItem.getParentItem().getText()) && defLev.equals(level.getName())){
				checkIsDef.setSelection(true);
			}
		}

		checkIsDef.setLayoutData (data);
		checkIsDef.addSelectionListener(new SelectionListener() {

	        public void widgetSelected(SelectionEvent event) {
	        	isDefault[0] = event.widget == checkIsDef;
	        }

	        public void widgetDefaultSelected(SelectionEvent event) {
	        	isDefault[0] = event.widget == checkIsDef;
	        }
	    });
		
		
		//description
		data = new FormData ();
		data.width = 100;
		data.top = new FormAttachment(checkIsDef, 5);
		Label labelDescr = new Label (dialog, SWT.RIGHT);
		labelDescr.setText ("Description:");
		labelDescr.setLayoutData (data);	
		
		final Text textDescription = new Text (dialog, SWT.BORDER);
		if(level != null){
			textDescription.setText(level.getColumnDesc());
		}
		data = new FormData ();
		data.width = 200;
		data.left = new FormAttachment (labelDescr, 0, SWT.DEFAULT);
		data.right = new FormAttachment (100, 0);
		data.top = new FormAttachment (labelDescr, 0, SWT.CENTER);
		textDescription.setLayoutData (data);
		
		//feature
		data = new FormData ();
		data.width = 100;
		data.top = new FormAttachment(textDescription, 5);
		Label labelFeature = new Label (dialog, SWT.RIGHT);
		labelFeature.setText ("Feature:");
		labelFeature.setLayoutData (data);	
		
		final Combo textFeature = drawFeaturesNameCombo(dialog);
		if(textFeature == null){
			MessageDialog.openError(mainComposite.getShell(), "Error", "Select a map!");
			return;
		}
		if(level != null){
			for(int i=0; i<textFeature.getItemCount();i++){
				String val = textFeature.getItem(i);
				if(val.equals(level.getFeatureName())){
					textFeature.select(i);
				}
			}
			
		}
		data = new FormData ();
		data.width = 200;
		data.left = new FormAttachment (labelFeature, 0, SWT.DEFAULT);
		data.right = new FormAttachment (100, 0);
		data.top = new FormAttachment (labelFeature, 0, SWT.CENTER);
		data.bottom = new FormAttachment (cancel, 0, SWT.DEFAULT);
		textFeature.setLayoutData (data);

		Button ok = new Button (dialog, SWT.PUSH);
		ok.setText ("OK");
		data = new FormData ();
		data.width = 60;
		data.right = new FormAttachment (cancel, 0, SWT.DEFAULT);
		data.bottom = new FormAttachment (100, 0);
		ok.setLayoutData (data);
		ok.addSelectionListener (new SelectionAdapter () {
			public void widgetSelected (SelectionEvent e) {
				//create tree item
				String columnId = textColumn.getText();
				String columnDesc = textDescription.getText();
				String feature = textFeature.getText();
				String name = text.getText();
				
		        Level newLevel = new Level();
		        newLevel.setName(name);
		        newLevel.setColumnId(columnId);
		        newLevel.setColumnDesc(columnDesc);
		        newLevel.setFeatureName(feature);
		        if(level == null){
		        	createNewLevel(hierarchiesTree, newLevel,  selectedItem, isDefault[0]);		        	
		        }else{
		        	updateLevel(hierarchiesTree, newLevel,  selectedItem, level, isDefault[0]);
		        }
				
				dialog.close ();
			}
		});

		dialog.setDefaultButton (ok);
		dialog.pack ();
		dialog.open ();

	}
	
	private Combo drawColumnIdCombo(final Shell dialog){
		final Combo textColumn = new Combo(dialog, SWT.SINGLE | SWT.READ_ONLY);

		String datasetLabel=editor.getSelectedDataset();
		if(datasetLabel == null){
			
			return null;
		}
		DataStoreMetadata dataStoreMetadata=null;
		// get the metadata
		if(editor.getTempDsMetadataInfos().get(datasetLabel)!=null){
			dataStoreMetadata=editor.getTempDsMetadataInfos().get(datasetLabel);
		}
		else{
			Dataset dataset = editor.getDatasetInfos().get(datasetLabel);
			try{
				if(dataset.getId() != null){
					dataStoreMetadata=new SpagoBIServerObjects().getDataStoreMetadata(dataset.getId());
				}
				
				if(dataStoreMetadata!=null){
					editor.getTempDsMetadataInfos().put(datasetLabel, dataStoreMetadata);
				}
				else{
					SpagoBILogger.warningLog("Dataset returned no metadata");
					MessageDialog.openWarning(mainComposite.getShell(), "Warning", "Dataset with label = "+datasetLabel+" returned no metadata");			
				}
			}
			catch (MissingParameterValue e2) {
				SpagoBILogger.errorLog("Could not execute dataset with label = "+datasetLabel+" metadata: probably missing parameter", e2);
				MessageDialog.openError(mainComposite.getShell(), "Error", "Could not execute dataset with label = "+datasetLabel+" metadata: probably missing parameter");
			}
			catch (NoServerException e1) {
				SpagoBILogger.errorLog("Error No comunciation with server retrieving dataset with label = "+datasetLabel+" metadata", e1);
				MessageDialog.openError(mainComposite.getShell(), "Error", "No comunciation with server retrieving dataset with label = "+datasetLabel+" metadata");
			}
		}
		if(dataStoreMetadata!=null){
			
			for (int i = 0; i < dataStoreMetadata.getFieldsMetadata().length; i++) {
				DataStoreMetadataField dsmf=dataStoreMetadata.getFieldsMetadata()[i];
				String column = dsmf.getName();
				textColumn.add(column);				
			}
			//dialog.redraw();
		}
		return textColumn;
	}
	private Combo drawFeaturesNameCombo(final Shell dialog){
		final Combo textFeature = new Combo(dialog, SWT.SINGLE | SWT.READ_ONLY);

		String mapLabel=editor.getSelectedMap();
		
		if(mapLabel == null){
			return null;
		}
		GeoFeature[] geoFeatures=null;
		// get the metadata
		if(editor.getTempMapMetadataInfos().get(mapLabel)!=null){
			geoFeatures=editor.getTempMapMetadataInfos().get(mapLabel);
		}
		else{
			GeoMap geoMap = editor.getMapInfos().get(mapLabel);
			try{
				if(geoMap.getMapId() != -1){
					geoFeatures=new SpagoBIServerObjects().getFeaturesByMapId(geoMap.getMapId());
				}
				if(geoFeatures!=null){
					editor.getTempMapMetadataInfos().put(mapLabel, geoFeatures);
				}
				else{
					SpagoBILogger.warningLog("No features returned from map with label "+mapLabel);
					MessageDialog.openWarning(mainComposite.getShell(), "Warning", "No features returned from map with label "+mapLabel);			
				}
			}
			catch (NoServerException e1) {
				SpagoBILogger.errorLog("Could not get features associated to map with label = "+mapLabel, e1);
				MessageDialog.openError(mainComposite.getShell(), "Error", "Could not get features associated to map with label = "+mapLabel);
			}
		}
		if(geoFeatures!=null){
			for (int i = 0; i < geoFeatures.length; i++) {
				GeoFeature geoFeature=geoFeatures[i];
				textFeature.add(geoFeature.getName());
				
				
			}
		}
		return textFeature;
	}
	public GEOEditor getEditor() {
		return editor;
	}

	public void setEditor(GEOEditor editor) {
		this.editor = editor;
	}

	public Composite getMainComposite() {
		return mainComposite;
	}

	public void setMainComposite(Composite mainComposite) {
		this.mainComposite = mainComposite;
	}
	public GEODocument getGeoDocument() {
		return geoDocument;
	}


	public void setGeoDocument(GEODocument geoDocument) {
		this.geoDocument = geoDocument;
	}
}
