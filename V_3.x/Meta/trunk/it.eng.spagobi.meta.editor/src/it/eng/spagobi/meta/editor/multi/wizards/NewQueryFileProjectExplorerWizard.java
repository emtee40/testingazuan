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
package it.eng.spagobi.meta.editor.multi.wizards;

import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.serializer.EmfXmiSerializer;
import it.eng.spagobi.studio.utils.util.SpagoBIStudioConstants;

import org.eclipse.core.internal.resources.File;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author cortella
 *
 */
public class NewQueryFileProjectExplorerWizard extends Wizard implements
INewWizard {
	private IFile file;
	private IStructuredSelection selection;
	private IWorkbench workbench;
	private NewQueryFileProjectExplorerWizardPage newFileWizardPage;
	private static Logger logger = LoggerFactory.getLogger(NewQueryFileProjectExplorerWizard.class);
	protected IPath containerFullPath = null;

	public NewQueryFileProjectExplorerWizard(){
		setWindowTitle("Create Query File");
		this.setHelpAvailable(false);	
	}

	@Override
	public void addPages() {
		newFileWizardPage = new NewQueryFileProjectExplorerWizardPage(selection);
		if(containerFullPath != null)newFileWizardPage.setContainerFullPath(containerFullPath);
		addPage(newFileWizardPage);
	}

	@Override
	public void init(IWorkbench workbench, IStructuredSelection selection) {
		this.workbench = workbench;
		this.selection = selection;
	}


	@Override
	public boolean performFinish() {
		file = newFileWizardPage.createNewFile();

		if (file != null){
			EmfXmiSerializer emfXmiSerializer = new EmfXmiSerializer();
			// go on only if you selected a folder
			Object objSel = selection.toList().get(0);
			if(objSel instanceof IFile){
				File fileSel = null;		
				fileSel=(File)objSel;
				try{
					Model root = emfXmiSerializer.deserialize(fileSel.getContents());
					logger.debug("Model root is [{}] ",root );
					BusinessModel businessModel = root.getBusinessModels().get(0);
					logger.debug("link to model "+businessModel.getName());
					logger.debug("file "+file.getName());
					file.setPersistentProperty(SpagoBIStudioConstants.MODEL_NAME, businessModel.getName());
					file.setPersistentProperty(SpagoBIStudioConstants.MODEL_FILE_NAME, fileSel.getName());				
					logger.debug("Set file metadata with model name "+businessModel.getName()+" and file name "+fileSel.getName());
				}
				catch (Exception e) {
					logger.error("could not link to model metadata", e);		
				}
			}

			try {
				file.refreshLocal(IResource.DEPTH_ZERO, null);
			} catch (CoreException e) {
				logger.error("Refresh Local workspace error");
				e.printStackTrace();
			}
			
			return true;
		}
		else
			return false;
	}

	/**
	 * @return the file
	 */
	public IFile getFile() {
		return file;
	}

	public void setContainerFullPath(IPath containerFullPath) {
		this.containerFullPath = containerFullPath;
	}

}
