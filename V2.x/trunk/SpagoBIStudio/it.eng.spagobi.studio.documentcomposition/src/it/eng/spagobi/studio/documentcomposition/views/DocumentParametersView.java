package it.eng.spagobi.studio.documentcomposition.views;

import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.DocumentComposition;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.metadata.MetadataParameter;

import java.util.Iterator;
import java.util.Vector;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.swt.widgets.TableItem;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.Section;
import org.eclipse.ui.part.ViewPart;

public class DocumentParametersView extends ViewPart {

	private DocumentComposition documentComp;
	Composite client;
	Table table;

	public static final int ID=1;
	public static final int LABEL=2;
	public static final int TYPE=3;
	public static final int URLNAME=4;


	public void init(IViewSite site) throws PartInitException {
		// TODO Auto-generated method stub
		super.init(site);
		//documentComp= (new ModelBO()).getModel();
	}

	public void viewSelectedProperties() {


	}



	public void createPartControl(Composite parent) {

		FormToolkit toolkit = new FormToolkit(parent.getDisplay());
		// Lets make a layout for the first section of the screen
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginWidth = 2;
		layout.marginHeight = 2;
		// Creating the Screen
		Section section = toolkit.createSection(parent, Section.DESCRIPTION
				| Section.TITLE_BAR);
		section.setText("Properties of selected document"); //$NON-NLS-1$
		client = toolkit.createComposite(section, SWT.WRAP);
		layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginWidth = 2;
		layout.marginHeight = 2;
		client.setLayout(layout);


		table = new Table (client, SWT.MULTI | SWT.BORDER | SWT.FULL_SELECTION);
		table.setLinesVisible (true);
		table.setHeaderVisible (true);
		GridData data = new GridData(SWT.FILL, SWT.FILL, true, true);
		data.heightHint = 200;
		table.setLayoutData(data);
		String[] titles = {"Property", "Value"};
		for (int i=0; i<titles.length; i++) {
			TableColumn column = new TableColumn (table, SWT.NONE);
			column.setText (titles [i]);
		}	
		for (int i=0; i<titles.length; i++) {
			table.getColumn (i).pack ();
		}	
		client.pack();
		

		toolkit.paintBordersFor(client);
		section.setClient(client);
		viewSelectedProperties();

	}

	public void reloadProperties(Vector<MetadataParameter> parameters){
		table.removeAll();
		for (Iterator iterator = parameters.iterator(); iterator.hasNext();) {
			MetadataParameter metadataParameter = (MetadataParameter) iterator.next();
			TableItem item = new TableItem (table, SWT.NONE);
			item.setText (ID, metadataParameter.getId()!=null ? metadataParameter.getId().toString() : "");
			item.setText (LABEL, metadataParameter.getLabel()!=null ? metadataParameter.getLabel() : "");
			item.setText (TYPE, metadataParameter.getType()!=null ? metadataParameter.getType() : "");
			item.setText (URLNAME, metadataParameter.getUrlName()!=null ? metadataParameter.getUrlName() : "");
		}
		
		client.layout();
		client.redraw();
	}


	@Override
	public IViewSite getViewSite() {
		// TODO Auto-generated method stub
		return super.getViewSite();
	}

	@Override
	public void init(IViewSite site, IMemento memento) throws PartInitException {
		// TODO Auto-generated method stub
		super.init(site, memento);
	}

	@Override
	public void saveState(IMemento memento) {
		// TODO Auto-generated method stub
		super.saveState(memento);
	}

	@Override
	protected void setContentDescription(String description) {
		// TODO Auto-generated method stub
		super.setContentDescription(description);
	}

	@Override
	public void setInitializationData(IConfigurationElement cfig,
			String propertyName, Object data) {
		// TODO Auto-generated method stub
		super.setInitializationData(cfig, propertyName, data);
	}

	@Override
	protected void setPartName(String partName) {
		// TODO Auto-generated method stub
		super.setPartName(partName);
	}

	
	
	
	public DocumentComposition getDocumentComp() {
		return documentComp;
	}

	public void setDocumentComp(DocumentComposition documentComp) {
		this.documentComp = documentComp;
	}

	public Table getTable() {
		return table;
	}

	public void setTable(Table table) {
		this.table = table;
	}

	public Composite getClient() {
		return client;
	}

	public void setClient(Composite client) {
		this.client = client;
	}

	@Override
	public void setFocus() {
		// TODO Auto-generated method stub
		
	}







}
