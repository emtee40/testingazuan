package it.eng.spagobi.studio.documentcomposition.actions;


import it.eng.spagobi.studio.documentcomposition.wizards.SpagoBIDocumentCompositionWizard;

import org.eclipse.core.internal.resources.Folder;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.ui.IViewActionDelegate;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.navigator.CommonNavigator;
import org.eclipse.ui.navigator.CommonViewer;

public class NewDocumentCompositionAction implements IViewActionDelegate {

	private IViewPart view = null;

	public NewDocumentCompositionAction() {
		// TODO Auto-generated constructor stub
	}

	public void init(IViewPart view) {
		this.view = view;
	}

	public void run(IAction action) {
		SpagoBIDocumentCompositionWizard sbindw = new SpagoBIDocumentCompositionWizard();
		CommonViewer commViewer=((CommonNavigator) view).getCommonViewer();
		IStructuredSelection sel=(IStructuredSelection)commViewer.getSelection();

		Object objSel = sel.toList().get(0);
		Folder folderSel = null;		
		try{
			// FolderSel is the folder in wich to insert the new template
			folderSel=(Folder)objSel;

			sbindw.init(PlatformUI.getWorkbench(), sel);
			// Create the wizard dialog
			WizardDialog dialog = new WizardDialog(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(),sbindw);
			// Open the wizard dialog
			dialog.open();

		}
		catch (Exception e) {
			//			SpagoBILogger.errorLog("no selected folder", e);			
			MessageDialog.openInformation(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
					"Error", "You must select a folder in wich to insert the report");		
		}


	}

	public void selectionChanged(IAction action, ISelection selection) {
		// TODO Auto-generated method stub

	}



}
