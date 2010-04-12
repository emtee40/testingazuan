package it.eng.spagobi.studio.core.wizards.downloadWizard;

import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.sdk.documents.bo.SDKDocument;
import it.eng.spagobi.sdk.documents.bo.SDKDocumentParameter;
import it.eng.spagobi.sdk.documents.bo.SDKTemplate;
import it.eng.spagobi.sdk.engines.bo.SDKEngine;
import it.eng.spagobi.sdk.proxy.DocumentsServiceProxy;
import it.eng.spagobi.sdk.proxy.EnginesServiceProxy;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.core.sdk.SDKProxyFactory;
import it.eng.spagobi.studio.core.util.BiObjectUtilities;
import it.eng.spagobi.studio.core.util.FileFinder;

import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.activation.DataHandler;

import org.dom4j.Document;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;
import org.eclipse.core.internal.resources.Folder;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.swt.widgets.TreeItem;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWizard;

public class SpagoBIDownloadWizard extends Wizard implements INewWizard {
	private SpagoBIDownloadWizardPage page;
	private IStructuredSelection selection;
	protected IWorkbench workbench;




	/**
	 * Constructor for SampleNewWizard.
	 */
	public SpagoBIDownloadWizard() {
		super();
		setNeedsProgressMonitor(true);
	}


	/**
	 * Adding the page to the wizard.
	 */

	public void addPages() {
		page = new SpagoBIDownloadWizardPage(selection);
		addPage(page);
	}

	/**
	 * This method is called when 'Finish' button is pressed in
	 * the wizard. We will create an operation and run it
	 * using wizard as execution context.
	 */
	public boolean performFinish() {
		boolean toReturn;
		TreeItem[] selectedItems=page.getTree().getSelection();
		if(selectedItems==null){
			SpagoBILogger.warningLog("Error; no item or multiple items selected");
		}
		else{	
			for (int i = 0; i < selectedItems.length; i++) {
				TreeItem selectedItem=selectedItems[i];
				Object docObject=selectedItem.getData();	
				SDKDocument document=(SDKDocument)docObject;
				// if it is a document composed download also contained documents
				if(document.getType().equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITE_TYPE) ){
					// ask user if wants to download related template
					boolean downloadContained=MessageDialog.openQuestion(getShell(), "Download contained Documents?", "You have selected a document composition, do you want to download contained documents? You will be notified if they already esists in your workspace");	
					if(downloadContained==true){
						downloadContainedTemplate(document);
					}
				}
				toReturn=downloadTemplate(document);
			}
			doFinish();
		}

		return true;
	}


	public boolean downloadContainedTemplate(SDKDocument document){
		boolean toReturn=true;
		Integer id=document.getId();
		SDKTemplate template=null;
		SDKProxyFactory proxyFactory=new SDKProxyFactory();
		DocumentsServiceProxy docServiceProxy=null;
		int numDocs=0;
		try{
			docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			template=docServiceProxy.downloadTemplate(id);
		}	
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page", e);
			MessageDialog.openError(getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return false;
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve template",e);
			MessageDialog.openError(getShell(), "Error", "Could not get the template from server for document with id "+id);	
			return false;
		}	

		template.getContent();

		String xmlString=null;
		DataHandler dh=template.getContent(); 
		InputStream is=null;		
		try {
			is=dh.getInputStream();
			xmlString=readInputStreamAsString(is);
			xmlString="<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"+xmlString;

			is=new ByteArrayInputStream(xmlString.getBytes("UTF-8"));

			// put all the labels in an array, so if there is a problem in parsing does not download anything
			boolean correctParsing=true;
			SAXReader reader = new SAXReader();
			Document thisDocument = null;
			List<String> labels=new ArrayList<String>();
			try{
				thisDocument=reader.read(is);
				List docs= thisDocument.selectNodes("//DOCUMENTS_COMPOSITION/DOCUMENTS_CONFIGURATION/DOCUMENT");

				for (int i = 0; i < docs.size(); i++) {
					Node doc = (Node) docs.get(i);
					String label = doc.valueOf("@sbi_obj_label");
					if (label!=null) {
						labels.add(label);
					}
					else{
						correctParsing=false;
					}
				}
			}
			catch (Exception e) {
				correctParsing=false;
			}
			if(correctParsing==false){
				SpagoBILogger.errorLog("error in reading the file searching for document labels ", null);				
				MessageDialog.openWarning(getShell(), "Warning", "error in reading template searching for document labels: will not download contained documents but only composed one");	
				return false;
			}


			for (int i = 0; i < labels.size(); i++) {
				SDKDocument docToDownload=docServiceProxy.getDocumentByLabel(labels.get(i));
				if(docToDownload!=null){
					toReturn = downloadTemplate(docToDownload);
					if(toReturn==true){
						numDocs++;
						SpagoBILogger.infoLog("Download document with label "+docToDownload.getName());
					}
				}
			}


		} catch (Exception e1) {
			SpagoBILogger.errorLog("Error in writing the file", e1);
			MessageDialog.openWarning(getShell(), "Warning", "Error in downloading contained documents; will not download contained documents but only composed one");	

			return false;
		}


		SpagoBILogger.infoLog("Downloaded # document "+numDocs);
		return toReturn;
	}

	public boolean downloadTemplate(SDKDocument document){
		InputStream is=null;
		//try{
		Integer id=document.getId();
		SDKTemplate template=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			template=docServiceProxy.downloadTemplate(id);
		}
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page",e);
			MessageDialog.openError(getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return false;
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve template",e);
			MessageDialog.openError(getShell(), "Error", "Could not get the template from server");	
			return false;
		}			

		// Recover information field like dataSource, dataSet, engine names!


		//Get the parameters
		String[] roles;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			roles=docServiceProxy.getCorrectRolesForExecution(id);
		}
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page",e);
			MessageDialog.openError(getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return false;
		}		
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve roles for execution",e);
			MessageDialog.openError(getShell(), "Could not retrieve roles for execution", "Could not retrieve roles for execution");	
			return false;
		}			
		if(roles==null || roles.length==0){
			SpagoBILogger.errorLog("No roles for execution found",null);
			MessageDialog.openError(getShell(), "No roles for execution found", "No roles for execution found");	
			return false;			
		}

		//SDKDocumentParameter[] parameters=null;

		SDKDocumentParameter[] parameters=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DocumentsServiceProxy docServiceProxy=proxyFactory.getDocumentsServiceProxy(); 		
			parameters=docServiceProxy.getDocumentParameters(id, roles[0]);
		}
		catch (NullPointerException e) {
			SpagoBILogger.errorLog("No comunication with server, check SpagoBi Server definition in preferences page",e);
			MessageDialog.openError(getShell(), "Error", "No comunication with server, check SpagoBi Server definition in preferences page");	
			return false;
		}		
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve document parameters",e);
			MessageDialog.openError(getShell(), "Could not retrieve document parameters for execution", "Could not retrieve roles for execution");	
			return false;
		}			




		// get the extension
		Integer engineId=document.getEngineId();
		SDKProxyFactory proxyFactory=new SDKProxyFactory();
		EnginesServiceProxy engineProxy=proxyFactory.getEnginesServiceProxy();

		SDKEngine sdkEngine=null;
		try{
			sdkEngine=engineProxy.getEngine(engineId);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not get engine", e);
			MessageDialog.openError(getShell(), "", "Could not get engine the template from server");	
			return false;
		}		

		String type=document.getType();
		String engineName=sdkEngine!=null?sdkEngine.getLabel(): null;
		String extension=BiObjectUtilities.getFileExtension(type, engineName);

		// create the file in the selected directory
		// get the folder selected 
		Object objSel = selection.toList().get(0);
		Folder folderSel = null;
		folderSel=(Folder)objSel;  
		String projectName = folderSel.getProject().getName();

		//Take workspace
		IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
		// get the folder where to insert the template document
		IProject project = root.getProject(projectName);
		IPath pathFolder = folderSel.getProjectRelativePath(); 

		String templateFileName=template.getFileName();

		// remove previous extensions only if a new Extension was found
		String fileName="";
		if(extension!=null){
			int indexPoint=templateFileName.indexOf('.');
			if(indexPoint!=-1){
				templateFileName=templateFileName.substring(0, indexPoint);
				fileName=templateFileName+extension;
			}
		}
		else{
			fileName=templateFileName;
		}

		IPath pathNewFile = pathFolder.append(fileName); 
		IFile newFile = project.getFile(pathNewFile);
		SpagoBILogger.infoLog("file path to download "+pathNewFile.toString());
		DataHandler dh=template.getContent(); 
		try {
			is=dh.getInputStream();
		} catch (IOException e1) {
			SpagoBILogger.errorLog("Error in writing the file", e1);
			return false;
		}

		IPath projectFolder=project.getLocation();
		// Check there is not another existing file with the same name inside project directory workspace!!!
		boolean alreadyFound=FileFinder.fileExistsInSubtree(fileName, projectFolder.toString());

		if(alreadyFound){
			MessageDialog.openWarning(workbench.getActiveWorkbenchWindow().getShell(), 
					"Error", "File "+fileName+" already exists in your project: to download it againg you must first delete the existing one");
			SpagoBILogger.warningLog("File "+fileName+" already exists in your project: to download it againg you must first delete the existing one");
			return false;
			//write=MessageDialog.openQuestion(workbench.getActiveWorkbenchWindow().getShell(), "File exists: Overwrite?", "File "+newFile.getName()+" already exists, overwrite?"); 
		}

		if(true){

			try{
				newFile.create(is, true, null);
			}
			catch (CoreException e) {
				SpagoBILogger.errorLog("error while creating new file", e);	
				return false;
			}


			//Set File Metadata	
			try{
				newFile=BiObjectUtilities.setFileMetaData(newFile,document);
				//newFile=BiObjectUtilities.setFileMetaData(newFile,document);
			}
			catch (CoreException e) {
				SpagoBILogger.errorLog("Error while setting meta data", e);	
				return false;
			}

			//Set ParametersFile Metadata	
			if(parameters.length>0){
				try{
					newFile=BiObjectUtilities.setFileParametersMetaData(newFile,parameters);

				}
				catch (Exception e) {
					e.printStackTrace();
					SpagoBILogger.errorLog("Error while setting meta data", e);	
					return false;
				}			
			}

			try{			
				newFile=BiObjectUtilities.setFileLastRefreshDateMetaData(newFile);
			}
			catch (Exception e) {
				e.printStackTrace();
				SpagoBILogger.errorLog("Error while setting last refresh date", e);	
				return false;
			}			
		}
		else // choose not to overwrite the file
		{
			SpagoBILogger.infoLog("Choose to not overwrite file "+newFile.getName());	
		}

		return true;

	}


	/** The worker method. Download the template and creates the file
	 * 
	 * @param document: the SdkDocument refderencing the BiObject
	 * @throws CoreException 
	 * 
	 */

	private void doFinish() {
		SpagoBILogger.infoLog("Documents downloaded");
	}

	/**
	 * We will accept the selection in the workbench to see if
	 * we can initialize from it.
	 * @see IWorkbenchWizard#init(IWorkbench, IStructuredSelection)
	 */
	public void init(IWorkbench _workbench, IStructuredSelection _selection) {
		this.selection = _selection;
		this.workbench=_workbench;

	}


	public static String readInputStreamAsString(InputStream in) 
	throws IOException {

		BufferedInputStream bis = new BufferedInputStream(in);
		ByteArrayOutputStream buf = new ByteArrayOutputStream();
		int result = bis.read();
		while(result != -1) {
			byte b = (byte)result;
			buf.write(b);
			result = bis.read();
		}        
		return buf.toString();
	}


}


