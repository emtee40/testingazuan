package it.eng.spagobi.studio.core.services.resources;

import org.eclipse.core.resources.IResource;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.PlatformUI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResourcesHandler {

	private static Logger logger = LoggerFactory.getLogger(ResourcesHandler.class);


	public boolean deleteResource(ISelection selection){
		logger.debug("IN");
		boolean toreturn = false;

		IStructuredSelection sel=(IStructuredSelection)selection;

		Object objSel = sel.toList().get(0);
		if(objSel instanceof IResource){

			boolean delete = MessageDialog.openConfirm(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Delete Reosurce", "Confirm Deleting resource");
			if(delete){
				IResource res = (IResource) objSel;
				try{
					res.delete(true, null);
					logger.debug("resource cancelled");
					toreturn = true;
				}
				catch (Exception e) {
					logger.error("Error in deleting the resource", e);	
					MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Error", "Error in deleting the resource; try deleting it from resource navigato view");
					toreturn = false;
				}
			}
		}

		logger.debug("OUT");
		return true;


	}





}
