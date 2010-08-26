/**
SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.studio.core.actions;

import it.eng.spagobi.sdk.documents.bo.SDKDocument;
import it.eng.spagobi.sdk.documents.bo.SDKDocumentParameter;
import it.eng.spagobi.sdk.documents.bo.SDKTemplate;
import it.eng.spagobi.sdk.engines.bo.SDKEngine;
import it.eng.spagobi.sdk.exceptions.NotAllowedOperationException;
import it.eng.spagobi.sdk.proxy.DocumentsServiceProxy;
import it.eng.spagobi.sdk.proxy.EnginesServiceProxy;
import it.eng.spagobi.studio.core.exceptions.AlreadyPresentException;
import it.eng.spagobi.studio.core.exceptions.NoDocumentException;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.core.properties.PropertyPage;
import it.eng.spagobi.studio.core.sdk.SDKProxyFactory;
import it.eng.spagobi.studio.core.util.BiObjectUtilities;
import it.eng.spagobi.studio.core.util.FileFinder;
import it.eng.spagobi.studio.core.wizards.deployWizard.SpagoBIDeployWizard;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.net.URI;
import java.rmi.RemoteException;

import javax.activation.DataHandler;

import org.eclipse.core.internal.resources.Folder;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.dialogs.ProgressMonitorDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.ProgressMonitorPart;
import org.eclipse.ui.IViewActionDelegate;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.navigator.CommonNavigator;
import org.eclipse.ui.navigator.CommonViewer;

public class RefreshTemplateAction implements IViewActionDelegate {

	private IViewPart view = null;
	private final SDKTemplate template= new SDKTemplate();

	SDKDocument document=null;

	// fields to retrieve only once
	String[] roles=null;
	SDKDocumentParameter[] parameters=null;
	SDKEngine sdkEngine=null;
	// if not null means that template has changed name (used for user advertisement)
	String newTemplateName=null;
	AlreadyPresentException alreadyPresentException=new AlreadyPresentException();

	public RefreshTemplateAction() {
	}


	public void init(IViewPart view) {
		this.view = view;
	}

	public void run(IAction action) {
		SpagoBIDeployWizard sbindw = new SpagoBIDeployWizard();
		CommonViewer commViewer=((CommonNavigator) view).getCommonViewer();
		IStructuredSelection sel=(IStructuredSelection)commViewer.getSelection();

		// go on only if you selected a document (a file)
		Object objSel = sel.toList().get(0);
		org.eclipse.core.internal.resources.File fileSel = null;		
		try{
			fileSel=(org.eclipse.core.internal.resources.File)objSel;
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No file selected",e);		

			MessageDialog.openWarning(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
					"Not a file", "You must select a file to refresh");		
			return;
		}

		//if file has document metadata associated upload it, else call wizard
		String document_idString=null;
		String document_label=null;
		try {
			document_idString=fileSel.getPersistentProperty(PropertyPage.DOCUMENT_ID);			
			document_label=fileSel.getPersistentProperty(PropertyPage.DOCUMENT_LABEL);
		} catch (CoreException e) {
			SpagoBILogger.errorLog("Error in retrieving document Label",e);		
		}
		//final Integer documentId=Integer.valueOf(document_idString);

		// IF File selected has already an id of document associated start the templater refresh, else throw an error
		if(document_idString!=null){
			ProgressMonitorPart monitor;
			monitor=new ProgressMonitorPart(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), null);
			SpagoBILogger.infoLog("Metadata found: do the template refresh, document with id "+document_idString);
			final Integer idInteger=Integer.valueOf(document_idString);
			final String label2=document_label;
			final org.eclipse.core.internal.resources.File fileSel2=fileSel;
			final NoDocumentException documentException=new NoDocumentException();
			IRunnableWithProgress op = new IRunnableWithProgress() {			
				public void run(IProgressMonitor monitor) throws InvocationTargetException {

					monitor.beginTask("Template Refresh for document "+label2, IProgressMonitor.UNKNOWN);

					// document associated, upload the template
					SDKProxyFactory proxyFactory=new SDKProxyFactory();
					DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy();

					try {
						// check document still exists
						document=docServiceProxy.getDocumentById(idInteger);
						if(document==null){
							documentException.setNoDocument(true);
							return;
						}
						else{
							documentException.setNoDocument(false);
							SDKTemplate sdkTemplate=docServiceProxy.downloadTemplate(idInteger);
							template.setContent(sdkTemplate.getContent());
							template.setFileName(sdkTemplate.getFileName());

							// get documents metadata
							String fileExtension=recoverFileExtension(document,idInteger);						
							overwriteTemplate(template, fileSel2, fileExtension);
						}
					}
					catch (NotAllowedOperationException e) {
						SpagoBILogger.errorLog("Not Allowed Operation",e);		
						MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
								"Error upload", "Error while uploading the template: not allowed operation");	
						return;
					} catch (RemoteException e) {
						SpagoBILogger.errorLog("Error comunicating with server",e);		
						SpagoBILogger.errorLog("Error comunicating with server", e);			
						MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
								"Error comunicating with server", "Error while uploading the template: missing comunication with server");	
						return;
					}
					catch (CoreException e) {
						SpagoBILogger.errorLog("Error in fie creation",e);		
						MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
								"Error in file creation", "Error in file creation");	
						return;
					}


					monitor.done();
					if (monitor.isCanceled())
						SpagoBILogger.errorLog("The long running operation was cancelled",null);		
				}
			};


			ProgressMonitorDialog dialog=new ProgressMonitorDialog(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell());		
			try {
				dialog.run(true, true, op);
			} catch (InvocationTargetException e1) {
				SpagoBILogger.errorLog("Error comunicating with server",null);		
				SpagoBILogger.errorLog("Error comunicating with server", e1);			
				MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
						"Error", "Missing comunication with server; check server definition and if service is avalaible");	
				dialog.close();
				return;
			} catch (InterruptedException e1) {
				SpagoBILogger.errorLog("Error comunicating with server",null);		
				MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
						"Error", "Missing comunication with server; check server definition and if service is avalaible");	
				dialog.close();
				return;
			} 
			// check if document has been found (could have been deleted) or if the template was already present somewhere else
			if(documentException.isNoDocument() || template.getContent()==null){
				SpagoBILogger.warningLog("Document no more present on server "+document_label);					
				SpagoBILogger.errorLog("Document no more present", null);			
				MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
						"Error upload", "Document is no more present on server. Make a new Deploy.");	
				return;
			}
			if(alreadyPresentException!=null && alreadyPresentException.isAlreadyPresent()){
				SpagoBILogger.warningLog("Template ealready present in project workspace: "+newTemplateName);					
				SpagoBILogger.errorLog("Template ealready present in project workspace", null);			
				MessageDialog.openWarning(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
						"Error", "File "+alreadyPresentException.getFilePath()+" already exists in your project: to download it againg you must first delete the existing one");
				return;
			}

			dialog.close();

			String succesfullMessage="Succesfully replaced with the last template version of the associated document "+document_label;
			if(newTemplateName!=null){
				succesfullMessage+=": template file has changed its name; new one is "+newTemplateName;
			}
			SpagoBILogger.infoLog(succesfullMessage);					
			MessageDialog.openInformation(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(),"Refresh succesfull", succesfullMessage);		
		}
		else{
			SpagoBILogger.warningLog("No document associated ");
			MessageDialog.openWarning(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), 
					"No document warning", "The file selected has no document associated, to the deploy first");	
		}
	}

	public void selectionChanged(IAction action, ISelection selection) {
		// TODO Auto-generated method stub

	}


	public void overwriteTemplate(SDKTemplate template, org.eclipse.core.internal.resources.File fileSel, String extension) throws CoreException{
		// get template URL to overwrite
		try {
			URI uri=fileSel.getLocationURI();
			// get the directory
			Folder folder=(Folder)fileSel.getParent();
			String projectName=folder.getProject().getName();
			IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
			IProject project = root.getProject(projectName);
			IPath pathFolder = folder.getProjectRelativePath(); 
			String templateFileName=template.getFileName();
			String completeFileName="";

			// if is defined a new extension use it, else keep its name
			if(extension!=null){
				int indexPoint=templateFileName.indexOf('.');
				if(indexPoint!=-1){
					templateFileName=templateFileName.substring(0, indexPoint);
					completeFileName=templateFileName+extension;
				}
			}
			else{
				completeFileName=templateFileName;
			}

			IPath pathNewFile = pathFolder.append(completeFileName); 
			IFile newFile = project.getFile(pathNewFile);
			DataHandler dh=template.getContent(); 
			InputStream is=null;
			is=dh.getInputStream();

			IPath projectFolder=project.getLocation();

			// if it has the same name as the one before do not have to check if name is already present
			if(completeFileName.equals(fileSel.getName())){

			}
			else{
				// Check there is not another existing file with the same name inside project directory workspace!!!
				boolean alreadyFound=FileFinder.fileExistsInSubtree(completeFileName, projectFolder.toString());
				if(alreadyFound){
					alreadyPresentException.setAlreadyPresent(true);
					alreadyPresentException.setFilePath(completeFileName);
					return;
				}
				newTemplateName=completeFileName;
			}

			// I must remove previous file and add new one because it could have changed its name
			// I have also to report metadata
			fileSel.delete(true, null);


			// create new File
			newFile.create(is, true, null);


			//Set File Metadata	
			try{
				newFile=BiObjectUtilities.setFileMetaData(newFile,document, true);
				//newFile=BiObjectUtilities.setFileMetaData(newFile,document);

				//Set ParametersFile Metadata	
				if(parameters.length>0){
					newFile=BiObjectUtilities.setFileParametersMetaData(newFile,parameters);
				}
				newFile=BiObjectUtilities.setFileLastRefreshDateMetaData(newFile);

			}
			catch (Exception e) {
				SpagoBILogger.errorLog("Error while setting meta data", e);		
				return;
			}			


		} catch (IOException e1) {

			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Error", "Error in writing the file");				
			SpagoBILogger.errorLog("Error in writing the file", e1);		

			return ;
		}

	}


	/** Retrieve document type and engine to set right file extension (if doessn't find leave the actual)
	 *  It saves paramters and engine informations in fields so they can be re used for metadata assignment
	 * @param document
	 * @param documentId
	 * @return
	 */

	public String recoverFileExtension(SDKDocument document, Integer documentId){
		//Get the parameters
		SDKProxyFactory proxyFactory=new SDKProxyFactory();

		try{
			DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			roles=docServiceProxy.getCorrectRolesForExecution(documentId);
		}
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page", e);
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return null;
		}		
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve roles for execution", e);
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Error", "Could not retrieve roles for execution");	
			return null;
		}			
		if(roles==null || roles.length==0){
			SpagoBILogger.errorLog("Could not retrieve roles for execution", null);		
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "No roles for execution found", "No roles for execution found");	
			return null;			
		}


		try{
			DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			parameters=docServiceProxy.getDocumentParameters(documentId, roles[0]);
		}
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page", e);
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return null;
		}		
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not get engine", e);
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "Could not retrieve document parameters for execution", "Could not retrieve roles for execution");	
			return null;
		}			


		// get the extension
		Integer engineId=document.getEngineId();
		EnginesServiceProxy engineProxy=proxyFactory.getEnginesServiceProxy();

		SDKEngine sdkEngine=null;
		try{
			sdkEngine=engineProxy.getEngine(engineId);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not get engine", e);		
			MessageDialog.openError(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell(), "", "Could not get engine the template from server");	
			return null;
		}		

		String type=document.getType();
		String engineName=sdkEngine!=null?sdkEngine.getLabel(): null;
		String extension=BiObjectUtilities.getFileExtension(type, engineName);
		return extension;
	}

}