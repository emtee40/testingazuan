/*
 * DropSourceListener for the TreeViewer inside the GraphicEditorView
 */
package it.eng.spagobi.meta.editor.dnd;

import it.eng.spagobi.meta.editor.wizards.AddBCWizard;

import java.util.ArrayList;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerDropAdapter;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.swt.dnd.TextTransfer;
import org.eclipse.swt.dnd.TransferData;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;



public class TableDropListener  extends ViewerDropAdapter {

	private final Viewer viewer;
	//private BMWrapper bmw;

	public TableDropListener(Viewer v){
		super(v);
		this.viewer = v;
		//get unique instance of BMWrapper
		//this.bmw = BMWrapper.getInstance();
	}
	
	// This method performs the actual drop
	@Override
	public boolean performDrop(Object data) {
		//Get Active Window
		IWorkbenchWindow window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
		//Launch AddBCWizard
		AddBCWizard wizard = new AddBCWizard(data.toString());
    	WizardDialog dialog = new WizardDialog(window.getShell(), wizard);
		dialog.create();
    	dialog.open();
		
    	/*
		//Retrieve Business Model
		ArrayList<BusinessModel> el = (ArrayList<BusinessModel>)bmw.getBm();
		BusinessModel bm =  el.get(0);
		
		//Add dropped element to the business model
		bm.addBc(new BusinessClass(data.toString(),bm));
		el = new ArrayList<BusinessModel>();
		el.add(bm);
		bmw.setBm(el);
		viewer.setInput(bmw);
		((TreeViewer)viewer).expandAll();
		*/
		return false;
	}

	public boolean validateDrop(Object target, int operation, TransferData transferType) {
		return TextTransfer.getInstance().isSupportedType(transferType);

	}

}
