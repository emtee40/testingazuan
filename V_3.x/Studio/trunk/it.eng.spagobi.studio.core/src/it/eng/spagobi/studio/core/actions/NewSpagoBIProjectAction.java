package it.eng.spagobi.studio.core.actions;

import it.eng.spagobi.studio.birt.actions.NewWorkbenchBirtAction;
import it.eng.spagobi.studio.core.wizards.NewSpagoBIProjectWizard;

import org.eclipse.jface.action.IAction;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.IWorkbenchWindowActionDelegate;
import org.eclipse.ui.PlatformUI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class NewSpagoBIProjectAction implements IWorkbenchWindowActionDelegate {

	private IViewPart view = null;
	
	ISelection selection;

	private static Logger logger = LoggerFactory.getLogger(NewSpagoBIProjectAction.class);
	

	public void init(IViewPart view) {
		this.view = view;
	}

	public void run(IAction action) {
		logger.debug("IN");
		NewSpagoBIProjectWizard sbindw = new NewSpagoBIProjectWizard();
		IStructuredSelection sel=(IStructuredSelection)selection;

		// from menu has no selection
		sbindw.init(PlatformUI.getWorkbench(), sel);
		// Create the wizard dialog
		WizardDialog dialog = new WizardDialog(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(),sbindw);
		// Open the wizard dialog
		dialog.open();

		logger.debug("OUT");
	}

	public void selectionChanged(IAction action, ISelection selection) {
		this.selection = selection;
		
	}

	public void setActivePart(IAction arg0, IWorkbenchPart arg1) {
		// TODO Auto-generated method stub
		
	}

	public void dispose() {
		// TODO Auto-generated method stub
		
	}

	public void init(IWorkbenchWindow window) {
		// TODO Auto-generated method stub
		
	}
	
}