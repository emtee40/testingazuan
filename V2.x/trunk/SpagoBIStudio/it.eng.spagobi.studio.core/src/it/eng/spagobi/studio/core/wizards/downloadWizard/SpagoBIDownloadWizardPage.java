package it.eng.spagobi.studio.core.wizards.downloadWizard;

import java.lang.reflect.InvocationTargetException;

import it.eng.spagobi.sdk.documents.bo.SDKDocument;
import it.eng.spagobi.sdk.documents.bo.SDKFunctionality;
import it.eng.spagobi.sdk.proxy.DocumentsServiceProxy;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.core.sdk.SDKProxyFactory;
import it.eng.spagobi.studio.core.util.SdkFunctionalityTreeGenerator;

import org.eclipse.core.resources.IContainer;
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
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;
import org.eclipse.ui.dialogs.ContainerSelectionDialog;

/**
 * Thre Download Wizard let the user to navigate the funcitonalities tree and select a document to download
 *
 */

public class SpagoBIDownloadWizardPage extends WizardPage {
	//private Text containerText;

	//private Text fileText;

	private IStructuredSelection selection;
	private Tree tree;
	private ProgressMonitorPart monitor;
	private SDKFunctionality functionality;


	/**
	 * Constructor for SampleNewWizardPage.
	 * 
	 * @param pageName
	 */
	public SpagoBIDownloadWizardPage(IStructuredSelection selection) {
		super("wizardPage");
		setTitle("Download Document Wizard");
		setDescription("This wizard lets you download a BI document template from SpagoBI Server");
		this.selection = selection;
	}

	/** Creates the wizard form
	 * @see IDialogPage#createControl(Composite)
	 */
	public void createControl(Composite parent) {
		monitor=new ProgressMonitorPart(getShell(), null);

		Composite container = new Composite(parent, SWT.NULL);
		FillLayout layout= new FillLayout();
		container.setLayout(layout);

		SDKProxyFactory proxyFactory=new SDKProxyFactory();
		DocumentsServiceProxy docServiceProxy=null;


		IRunnableWithProgress op = new IRunnableWithProgress() {
			public void run(IProgressMonitor monitor) throws InvocationTargetException {
				monitor.beginTask("Download documents tree", IProgressMonitor.UNKNOWN);

				SDKProxyFactory proxyFactory=new SDKProxyFactory();
				DocumentsServiceProxy docServiceProxy=null;

				try{

					docServiceProxy=proxyFactory.getDocumentsServiceProxy();
					functionality=docServiceProxy.getDocumentsAsTree(null);			

				}
				catch (Exception e) {
					SpagoBILogger.errorLog("No comunication with SpagoBI server", e);
					MessageDialog.openError(getShell(), "No comunication with server", "Error in comunication with SpagoBi Server; check its definition and check if the service is avalaible");	
					return;
				}
				monitor.done();
				if (monitor.isCanceled())
					SpagoBILogger.errorLog("Operation not ended",new InterruptedException("The long running operation was cancelled"));
			}
		};	

		ProgressMonitorDialog dialog=new ProgressMonitorDialog(getShell());		
		try {
			dialog.run(true, true, op);
		} catch (InvocationTargetException e1) {
			e1.printStackTrace();
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}	
		dialog.close();


		SdkFunctionalityTreeGenerator treeGenerator=new SdkFunctionalityTreeGenerator();			

		try{
			tree=treeGenerator.generateTree(container, functionality);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("Error while generating tree", e);
			MessageDialog.openError(getShell(), "Error in generating the tree, control your DB", "Error in generating the tree, control your DB");	
			e.printStackTrace();	
		}

		tree.addListener(SWT.Selection, new Listener() {
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

		initialize();
		setControl(container);
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

	public Tree getTree() {
		return tree;
	}

	public void setTree(Tree tree) {
		this.tree = tree;
	}



	public boolean isPageComplete() {
		boolean isComplete=false;
		if(tree!=null){
			TreeItem[] treeItems=tree.getSelection();
			if(treeItems!=null && treeItems.length==1){
				TreeItem treeItem=treeItems[0];
				Object data=treeItem.getData();
				if(data!=null && data instanceof SDKDocument){
					isComplete=true;
				}
			}
		}

		return isComplete;
	}






	//	public String getContainerName() {
	//		return containerText.getText();
	//	}

	//	public String getFileName() {
	//		return fileText.getText();
	//	}
}