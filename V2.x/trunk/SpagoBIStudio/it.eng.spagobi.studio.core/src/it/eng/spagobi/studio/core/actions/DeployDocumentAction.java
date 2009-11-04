package it.eng.spagobi.studio.core.actions;

import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.net.URI;
import java.rmi.RemoteException;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;

import it.eng.spagobi.sdk.documents.bo.SDKTemplate;
import it.eng.spagobi.sdk.exceptions.NotAllowedOperationException;
import it.eng.spagobi.sdk.proxy.DocumentsServiceProxy;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.core.properties.PropertyPage;
import it.eng.spagobi.studio.core.sdk.SDKProxyFactory;
import it.eng.spagobi.studio.core.wizards.deployWizard.SpagoBIDeployWizard;

import org.eclipse.core.internal.resources.Folder;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.dialogs.ProgressMonitorDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.ProgressMonitorPart;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.ui.IViewActionDelegate;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.navigator.CommonNavigator;
import org.eclipse.ui.navigator.CommonViewer;

public class DeployDocumentAction implements IViewActionDelegate {

	private IViewPart view = null;

	public DeployDocumentAction() {
	}


	public void init(IViewPart view) {
		this.view = view;
	}

	public void run(IAction action) {
		SpagoBIDeployWizard sbindw = new SpagoBIDeployWizard();
		CommonViewer commViewer=((CommonNavigator) view).getCommonViewer();
		IStructuredSelection sel=(IStructuredSelection)commViewer.getSelection();

		// go on only if you selected a document
		Object objSel = sel.toList().get(0);
		org.eclipse.core.internal.resources.File fileSel = null;		
		try{
			fileSel=(org.eclipse.core.internal.resources.File)objSel;
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No file selected", e);			
			MessageDialog.openWarning(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
					"Not a file", "You must select a file to deploy");		
			return;
		}

		//if file has document metadata associated upload it, else call wizard

		String document_idString=null;
		String document_label=null;
		try {
			document_idString=fileSel.getPersistentProperty(PropertyPage.DOCUMENT_ID);			
			document_label=fileSel.getPersistentProperty(PropertyPage.DOCUMENT_LABEL);
		} catch (CoreException e) {
			SpagoBILogger.errorLog("Error in retrieving document Label", e);
		}

		// IF File selected has already and id of document associated do the upload wiyhout asking further informations
		if(document_idString!=null){
			ProgressMonitorPart monitor;
			monitor=new ProgressMonitorPart(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), null);
			SpagoBILogger.infoLog("Metadata found: do the upload of the document with id "+document_idString);
			final Integer idInteger=Integer.valueOf(document_idString);
			final String label2=document_label;
			final org.eclipse.core.internal.resources.File fileSel2=fileSel;

			IRunnableWithProgress op = new IRunnableWithProgress() {			
				public void run(IProgressMonitor monitor) throws InvocationTargetException {
					monitor.beginTask("Deploying to document "+label2, IProgressMonitor.UNKNOWN);

					// document associated, upload the template
					SDKProxyFactory proxyFactory=new SDKProxyFactory();
					DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy();
					
					URI uri=fileSel2.getLocationURI();

					File fileJava=new File(uri.getPath()); 
					FileDataSource fileDataSource=new FileDataSource(fileJava);
					DataHandler dataHandler=new DataHandler(fileDataSource);			
					SDKTemplate sdkTemplate=new SDKTemplate();
					sdkTemplate.setFileName(fileSel2.getName());
					sdkTemplate.setContent(dataHandler);
					
					try {
						docServiceProxy.uploadTemplate(idInteger, sdkTemplate);
					} catch (NotAllowedOperationException e) {
						SpagoBILogger.errorLog("Not Allowed Operation", e);			
						MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
								"Error upload", "Error while uploading the template: not allowed operation");	
					} catch (RemoteException e) {
						SpagoBILogger.errorLog("Error comunicating with server", e);			
						MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
								"Error comunicating with server", "Error while uploading the template: missing comunication with server");	
					}

					monitor.done();
					if (monitor.isCanceled())
						SpagoBILogger.errorLog("Operation not ended",new InterruptedException("The long running operation was cancelled"));
				}
			};

			
			ProgressMonitorDialog dialog=new ProgressMonitorDialog(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell());		
			try {
				dialog.run(true, true, op);
			} catch (InvocationTargetException e1) {
				e1.printStackTrace();
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}	
			dialog.close();
			
			MessageDialog.openInformation(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(),"Deploy succesfull", "Deployed to the associated document "+document_label+" succesfull");		
		}
		else{
			// init wizard
			sbindw.init(PlatformUI.getWorkbench(), sel);
			// Create the wizard dialog
			WizardDialog dialog = new WizardDialog(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(),sbindw);
			// Open the wizard dialog
			dialog.open();	
		}
	}

	public void selectionChanged(IAction action, ISelection selection) {
		// TODO Auto-generated method stub

	}

}