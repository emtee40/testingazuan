/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.editor.olap.wizards.inline;

import it.eng.spagobi.commons.resource.IResourceLocator;
import it.eng.spagobi.commons.utils.SpagoBIMetaConstants;
import it.eng.spagobi.meta.editor.SpagoBIMetaEditorPlugin;
import it.eng.spagobi.meta.editor.business.wizards.AbstractSpagoBIModelWizard;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.commands.ISpagoBIModelCommand;
import it.eng.spagobi.meta.model.olap.OlapModel;

import java.util.ArrayList;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author cortella
 *
 */
public class NewMondrianFileWizard extends AbstractSpagoBIModelWizard implements INewWizard {

	private IStructuredSelection selection;
	private NewMondrianFileWizardPage newFileWizardPage;
	private IWorkbench workbench;
	private IFile file;
	private OlapModel olapModel;
	private static final IResourceLocator RL = SpagoBIMetaEditorPlugin.getInstance().getResourceLocator(); 


	private static Logger logger = LoggerFactory.getLogger(NewMondrianFileWizard.class);


	public NewMondrianFileWizard(OlapModel olapModel, EditingDomain editingDomain,
			ISpagoBIModelCommand command) {
		super(editingDomain, command);
		this.setWindowTitle(RL.getString("business.editor.wizard.newmondrianfile.title"));
		this.setHelpAvailable(false);	
		this.olapModel = olapModel;

	} 

	@Override
	public void addPages() {

		newFileWizardPage = new NewMondrianFileWizardPage(selection);
		addPage(newFileWizardPage);
	}

	@Override
	public boolean performFinish() {     
		file = newFileWizardPage.createNewFile();
		try {
			file.refreshLocal(IResource.DEPTH_ZERO, null);
		} catch (CoreException e) {
			logger.error("Refresh Local workspace error",e);
		}
		if (file != null){

			super.performFinish();
			return true;
		}
		else
			return false;
	}

	@Override
	public CommandParameter getCommandInputParameter() {
		String mondrianFilePath = file.getRawLocation().toOSString();
		logger.debug("Mondrian file path is [{}]",mondrianFilePath);
		return new CommandParameter(olapModel, null, mondrianFilePath, new ArrayList<Object>());
	}

	public void init(IWorkbench workbench, IStructuredSelection selection) {
		this.workbench = workbench;
		this.selection = selection;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.meta.editor.business.wizards.AbstractSpagoBIModelWizard#isWizardComplete()
	 */
	@Override
	public boolean isWizardComplete() {
		// TODO Auto-generated method stub
		return true;
	}

}
