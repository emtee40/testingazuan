package it.eng.spagobi.studio.core.wizards.deployDatasetWizard;



import it.eng.spagobi.studio.core.services.dataset.DeployDatasetService;
import it.eng.spagobi.studio.utils.bo.DataSource;
import it.eng.spagobi.studio.utils.bo.Functionality;
import it.eng.spagobi.studio.utils.exceptions.NoActiveServerException;
import it.eng.spagobi.studio.utils.sdk.SDKProxyFactory;
import it.eng.spagobi.studio.utils.services.SpagoBIServerObjectsFactory;
import it.eng.spagobi.studio.utils.util.SpagoBIStudioConstants;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.internal.resources.File;
import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.dialogs.IDialogPage;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.dialogs.ProgressMonitorDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.ProgressMonitorPart;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.dialogs.ContainerSelectionDialog;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Wizard that lets you deploy a query into a dataset
 *cot
 */

public class SpagoBIDeployDatasetWizardFormPage extends WizardPage {


	String projectName = null;
	private IStructuredSelection selection;


	/**
	 * SWT widgets
	 */
	private Text labelText;
	private Text nameText;
	private Text descriptionText;

	private Combo dataSourceCombo; 
	private Button transformerCheck;

	private Group pivotGroup;
	private Label columnPivotLabel;
	private Label rowPivotLabel;
	private Label valuePivotLabel;
	private Label numberedColumnsPivotLabel;
	private Text columnPivotText;
	private Text rowPivotText;
	private Text valuePivotText;
	private Button numberedColumnsPivotCheck;
	private Label typeLabel;

	private Text queryText;


	private Map<String, Integer> dataSourceLabelIdMap;

	private ProgressMonitorPart monitor;

	JSONObject jsonObject;

	// Filter By type
	DataSource[] datasourceList;		
	Functionality functionality=null;

	private static Logger logger = LoggerFactory.getLogger(SpagoBIDeployDatasetWizardFormPage.class);

	/**
	 * Constructor
	 * 
	 * @param pageName
	 */
	public SpagoBIDeployDatasetWizardFormPage(IStructuredSelection selection) {
		super("wizardPage");
		setTitle("Deploy Dataste");
		setDescription("Deploy a new dataset; select the new dataset properties");
		this.selection = selection;
	}


	/** Creates the wizard form
	 * @see IDialogPage#createControl(Composite)
	 */
	public void createControl(final Composite parent) {
		logger.debug("IN");
		Shell shell = parent.getShell();
		shell.setSize(800,600);
		monitor=new ProgressMonitorPart(getShell(), null);

		// get selection file
		Object objSel = selection.toList().get(0);
		File fileSelected=(File)objSel;
		projectName = fileSelected.getProject().getName();


		// Build the page

		FillLayout fl2=new FillLayout();
		fl2.type=SWT.HORIZONTAL;
		parent.setLayout(fl2);

		final Composite left=new Composite(parent,SWT.BORDER);
		final Composite right =  new Composite(parent, SWT.BORDER);
		// Left
		GridLayout gl = new GridLayout();
		int ncol = 2;
		gl.numColumns = ncol;
		left.setLayout(gl);
		// Right
		FillLayout fl=new FillLayout();
		right.setLayout(fl);


		// *************** Container **********************

		// Label
		Label a = new Label(left, SWT.NONE);
		a.setText("Label:");
		a.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		labelText = new Text(left, SWT.BORDER);
		labelText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		labelText.setTextLimit(SpagoBIStudioConstants.DATASET_LABEL_LIMIT);
		labelText.addListener(SWT.KeyUp, new Listener() {
			public void handleEvent(Event event) {
				//check if page is complete
				boolean complete=isPageComplete();
				if(complete){
					setPageComplete(true);
				}
				else{
					setPageComplete(false);	        	
				}
			}
		});

		// Name
		a = new Label(left, SWT.NONE);
		a.setText("Name:");				
		a.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		nameText = new Text(left, SWT.BORDER);
		nameText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		nameText.setTextLimit(SpagoBIStudioConstants.DATASET_NAME_LIMIT);
		nameText.addListener(SWT.KeyUp, new Listener() {
			public void handleEvent(Event event) {
				//check if page is complete
				boolean complete=isPageComplete();
				if(complete){
					setPageComplete(true);
				}
				else{
					setPageComplete(false);	        	
				}
			}
		});

		// Description
		new Label(left, SWT.NONE).setText("Description:");				
		descriptionText = new Text(left, SWT.BORDER);
		descriptionText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		descriptionText.setTextLimit(SpagoBIStudioConstants.DATASET_DESCR_LIMIT);

		// Type
		new Label(left, SWT.NONE).setText("Type: ");				
		typeLabel = new Label(left, SWT.NONE);
		typeLabel.setText(SpagoBIStudioConstants.DS_QBE);				

		// Datasource
		new Label(left, SWT.NONE).setText("Datasource: ");
		dataSourceCombo = new Combo(left, SWT.NONE | SWT.READ_ONLY);
		dataSourceCombo.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// transformer checkbox
		new Label(left, SWT.NONE).setText("Transformer: ");
		transformerCheck = new Button(left, SWT.CHECK);

		// pivot group
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = 2;		
		pivotGroup = new Group(left, SWT.NULL);
		pivotGroup.setText("Pivot");
		pivotGroup.setLayoutData(gridData);
		pivotGroup.setLayout(new FillLayout());
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.horizontalSpacing = 10;
		Composite pivotContainer = new Composite(pivotGroup, SWT.NULL);
		pivotContainer.setLayout(layout);
		columnPivotLabel = new Label(pivotContainer, SWT.NONE);
		columnPivotLabel.setText("Column: ");	
		columnPivotLabel.setEnabled(true);
		columnPivotText= new Text(pivotContainer, SWT.BORDER);
		columnPivotText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		columnPivotText.setEnabled(true);
		rowPivotLabel = new Label(pivotContainer, SWT.NONE);
		rowPivotLabel.setText("Row: ");	
		rowPivotLabel.setEnabled(true);
		rowPivotText= new Text(pivotContainer, SWT.BORDER);
		rowPivotText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		rowPivotText.setEnabled(true);
		valuePivotLabel = new Label(pivotContainer, SWT.NONE);
		valuePivotLabel.setText("Value: ");	
		valuePivotLabel.setEnabled(true);		
		valuePivotText= new Text(pivotContainer, SWT.BORDER);
		valuePivotText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		valuePivotText.setEnabled(true);
		numberedColumnsPivotLabel = new Label(pivotContainer, SWT.NONE);
		numberedColumnsPivotLabel.setText("Value: ");	
		numberedColumnsPivotLabel.setEnabled(true);
		numberedColumnsPivotCheck = new Button(pivotContainer, SWT.CHECK);
		numberedColumnsPivotCheck.setEnabled(true);		




		// enable / disable pivot group
		transformerCheck.addListener(SWT.SELECTED, new Listener () {
			public void handleEvent (Event event) {
				final boolean selected = transformerCheck.getSelection();
				columnPivotLabel.setEnabled(selected);
				columnPivotText.setEnabled(selected);
				rowPivotLabel.setEnabled(selected);
				rowPivotText.setEnabled(selected);
				valuePivotLabel.setEnabled(selected);
				valuePivotText.setEnabled(selected);
				numberedColumnsPivotLabel.setEnabled(selected);
				numberedColumnsPivotCheck.setEnabled(selected);
				numberedColumnsPivotCheck.redraw();

				//setControl(left);
				//				lab.update();
				//				lab.redraw();
				//				left.update();
				//				Display.getCurrent().update();

			}
		});

		queryText = new Text(right, SWT.MULTI | SWT.V_SCROLL | SWT.H_SCROLL);
		fillValues();

		setControl(left);
		setControl(right);

	}


	/**
	 *  fill the value
	 */
	public void fillValues(){
		logger.debug("IN");
		IFile fileSel = (IFile)selection.toList().get(0);
		String queryStr = DeployDatasetService.getMetaQuery(fileSel);
		logger.debug("Query in file is "+queryStr);
		queryStr = queryStr != null ? queryStr : "";
		queryText.setText(queryStr);


		// first of all get info from server		
		final SpagoBIServerObjectsFactory proxyObjects;
		SDKProxyFactory proxyFactory= null;
		try{
			proxyObjects = new SpagoBIServerObjectsFactory(projectName);
		}
		catch (NoActiveServerException e1) {
			logger.error("No active server found", e1);			
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
					"Error", "No active server found");	
			return;
		}

		// progress monitor to recover datasource information
		IRunnableWithProgress op = new IRunnableWithProgress() {			
			public void run(IProgressMonitor monitor) throws InvocationTargetException {
				monitor.beginTask("Deploy a new dataset: retrieve data sources ", IProgressMonitor.UNKNOWN);

				try{

					datasourceList=proxyObjects.getServerDataSources().getDataSourceList();
				}
				catch (Exception e) {
					logger.error("No comunication with SpagoBI server",e);		
					MessageDialog.openError(getShell(), "No comunication with server", "Error in comunication with SpagoBi Server; check its definition and check if the service is avalaible");	
					return;
				}
				monitor.done();
				if (monitor.isCanceled())
					logger.error("Operation not ended",new InterruptedException("The long running operation was cancelled"));		
			}
		};

		ProgressMonitorDialog dialog=new ProgressMonitorDialog(getShell());		
		try {
			dialog.run(true, true, op);
		} catch (InvocationTargetException e1) {
			logger.error("Error in comunication with SpagoBi Server; check its definition and check if the service is avalaible",e1);		
			dialog.close();
			MessageDialog.openError(getShell(), "No comunication with server", "Error in comunication with SpagoBi Server; check its definition and check if the service is avalaible");	
			return;
		} catch (InterruptedException e1) {
			logger.error("No comunication with SpagoBI server", e1);
			dialog.close();
			MessageDialog.openError(getShell(), "No comunication with server", "Error in comunication with SpagoBi Server; check its definition and check if the service is avalaible");	
			return;
		}	
		dialog.close();


		dataSourceLabelIdMap=new HashMap<String, Integer>();
		String[] datasourceLabels = new String[datasourceList.length];
		for (int i = 0; i < datasourceLabels.length; i++) {
			DataSource dataSource =datasourceList[i];
			logger.debug("Datasource "+dataSource.getName());
			datasourceLabels[i] = dataSource.getLabel();
			dataSourceLabelIdMap.put(dataSource.getLabel(), dataSource.getId());
		}
		Arrays.sort(datasourceLabels);
		dataSourceCombo.setItems(datasourceLabels);

		logger.debug("OUT");


	}





	/**
	 * Tests if the current workbench selection is a suitable container to use.
	 */

	private void initialize() {
		if (selection != null && selection.isEmpty() == false
				&& selection instanceof IStructuredSelection) {
			IStructuredSelection ssel = (IStructuredSelection) selection;
			if (ssel.size() > 1)
				return;
			Object obj = ssel.getFirstElement();
			if (obj instanceof IResource) {
				IContainer container;
				if (obj instanceof IContainer)
					container = (IContainer) obj;
				else
					container = ((IResource) obj).getParent();
			}
		}
	}

	/**
	 * Uses the standard container selection dialog to choose the new value for
	 * the container field.
	 */

	private void handleBrowse() {
		ContainerSelectionDialog dialog = new ContainerSelectionDialog(
				getShell(), ResourcesPlugin.getWorkspace().getRoot(), false,
		"Select new file container");
		if (dialog.open() == ContainerSelectionDialog.OK) {
			Object[] result = dialog.getResult();
			if (result.length == 1) {
				//containerText.setText(((Path) result[0]).toString());
			}
		}
	}

	/**
	 * Ensures that both text fields are set.
	 */


	private void updateStatus(String message) {
		setErrorMessage(message);
		setPageComplete(message == null);
	}



	public boolean isPageComplete() {
		boolean isComplete=true;
		String labelTextS=labelText.getText();
		String nameTextS=nameText.getText();

		if(labelTextS==null || nameTextS==null || labelTextS.equalsIgnoreCase("") || nameTextS.equalsIgnoreCase("")){
			return false;
		}

		return isComplete;
	}




	public Text getLabelText() {
		return labelText;
	}


	public void setLabelText(Text labelText) {
		this.labelText = labelText;
	}


	public Text getNameText() {
		return nameText;
	}


	public void setNameText(Text nameText) {
		this.nameText = nameText;
	}


	public Button getTransformerCheck() {
		return transformerCheck;
	}


	public void setTransformerCheck(Button transformerCheck) {
		this.transformerCheck = transformerCheck;
	}


	public Label getRowPivotLabel() {
		return rowPivotLabel;
	}


	public void setRowPivotLabel(Label rowPivotLabel) {
		this.rowPivotLabel = rowPivotLabel;
	}


	public Label getValuePivotLabel() {
		return valuePivotLabel;
	}


	public void setValuePivotLabel(Label valuePivotLabel) {
		this.valuePivotLabel = valuePivotLabel;
	}


	public Label getNumberedColumnsPivotLabel() {
		return numberedColumnsPivotLabel;
	}


	public void setNumberedColumnsPivotLabel(Label numberedColumnsPivotLabel) {
		this.numberedColumnsPivotLabel = numberedColumnsPivotLabel;
	}



	public Text getColumnPivotText() {
		return columnPivotText;
	}


	public void setColumnPivotText(Text columnPivotText) {
		this.columnPivotText = columnPivotText;
	}


	public Text getRowPivotText() {
		return rowPivotText;
	}


	public void setRowPivotText(Text rowPivotText) {
		this.rowPivotText = rowPivotText;
	}


	public Text getValuePivotText() {
		return valuePivotText;
	}


	public void setValuePivotText(Text valuePivotText) {
		this.valuePivotText = valuePivotText;
	}


	public Button getNumberedColumnsPivotCheck() {
		return numberedColumnsPivotCheck;
	}


	public void setNumberedColumnsPivotCheck(Button numberedColumnsPivotCheck) {
		this.numberedColumnsPivotCheck = numberedColumnsPivotCheck;
	}


	public Text getQueryText() {
		return queryText;
	}


	public void setQueryText(Text query) {
		this.queryText = query;
	}


	public Text getDescriptionText() {
		return descriptionText;
	}


	public void setDescriptionText(Text descriptionText) {
		this.descriptionText = descriptionText;
	}


	public Label getTypeLabel() {
		return typeLabel;
	}


	public void setTypeLabel(Label typeLabel) {
		this.typeLabel = typeLabel;
	}


	public Combo getDataSourceCombo() {
		return dataSourceCombo;
	}


	public void setDataSourceCombo(Combo dataSourceCombo) {
		this.dataSourceCombo = dataSourceCombo;
	}


	public Map<String, Integer> getDataSourceLabelIdMap() {
		return dataSourceLabelIdMap;
	}


	public void setDataSourceLabelIdMap(Map<String, Integer> dataSourceLabelIdMap) {
		this.dataSourceLabelIdMap = dataSourceLabelIdMap;
	}







}