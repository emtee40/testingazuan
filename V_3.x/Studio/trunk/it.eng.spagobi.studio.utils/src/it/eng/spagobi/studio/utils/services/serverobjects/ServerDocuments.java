package it.eng.spagobi.studio.utils.services.serverobjects;

import it.eng.spagobi.sdk.documents.bo.SDKDocument;
import it.eng.spagobi.sdk.documents.bo.SDKDocumentParameter;
import it.eng.spagobi.sdk.documents.bo.SDKFunctionality;
import it.eng.spagobi.sdk.documents.bo.SDKTemplate;
import it.eng.spagobi.studio.utils.bo.Document;
import it.eng.spagobi.studio.utils.bo.DocumentParameter;
import it.eng.spagobi.studio.utils.bo.Functionality;
import it.eng.spagobi.studio.utils.bo.Template;
import it.eng.spagobi.studio.utils.services.ProxyHandler;
import it.eng.spagobi.studio.utils.services.ServerObjectsTranslator;

import java.rmi.RemoteException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServerDocuments {

	private static Logger logger = LoggerFactory.getLogger(ServerDocuments.class);
	ProxyHandler proxyHandler = null;
	
	
	public Integer saveNewDocument(Document newDocument, Template template, Integer functionalityId) throws RemoteException{
		Integer returnCode = null;
		SDKDocument sdkDocument = ServerObjectsTranslator.createSDKDocument(newDocument);
		SDKTemplate sdkTemplate = ServerObjectsTranslator.createSDKTemplate(template);
		if(proxyHandler.getDocumentsServiceProxy() != null)
			returnCode = proxyHandler.getDocumentsServiceProxy().saveNewDocument(sdkDocument, sdkTemplate, functionalityId);

		return returnCode;
	}

	public void uploadTemplate(Integer id, Template template) throws RemoteException{
		SDKTemplate sdkTemplate = ServerObjectsTranslator.createSDKTemplate(template);
		if(proxyHandler.getDocumentsServiceProxy() != null)
			proxyHandler.getDocumentsServiceProxy().uploadTemplate(id, sdkTemplate);

		return;
	}
	
	public void uploadDatamartTemplate(Template template) throws RemoteException{
		SDKTemplate sdkTemplate = ServerObjectsTranslator.createSDKTemplate(template);
		if(proxyHandler.getDocumentsServiceProxy() != null)
			proxyHandler.getDocumentsServiceProxy().uploadDatamartTemplate(sdkTemplate);
		return;
	}


	public Functionality getDocumentsAsTree(String str) throws RemoteException{
		Functionality toReturn = null;
		SDKFunctionality sdkFunctionality = null;

		if(proxyHandler.getDocumentsServiceProxy()!= null)
			sdkFunctionality = proxyHandler.getDocumentsServiceProxy().getDocumentsAsTree(str);
		if(sdkFunctionality != null){
			toReturn = new Functionality(sdkFunctionality);
		}
		return toReturn;
	}

	public Document getDocumentById(Integer id) throws RemoteException{
		Document toReturn = null;
		SDKDocument sdkDocument = null;
		if(proxyHandler.getDocumentsServiceProxy() != null)
			sdkDocument = proxyHandler.getDocumentsServiceProxy().getDocumentById(id);
		if(sdkDocument != null){
			toReturn = new Document(sdkDocument);

		}
		return toReturn;
	}


	public Template downloadTemplate(Integer id) throws RemoteException{
		Template toReturn = null;
		SDKTemplate sdkTemplate = null;

		if(proxyHandler.getDocumentsServiceProxy()!= null)
			sdkTemplate = proxyHandler.getDocumentsServiceProxy().downloadTemplate(id);
		if(sdkTemplate != null){
			toReturn = new Template(sdkTemplate);
		}
		return toReturn;
	}


	public Document getDocumentByLabel(String label) throws RemoteException{
		Document toReturn = null;
		SDKDocument sdkDocument = null;

		if(proxyHandler.getDocumentsServiceProxy()!= null)
			sdkDocument = proxyHandler.getDocumentsServiceProxy().getDocumentByLabel(label);
		if(sdkDocument != null){
			toReturn = new Document(sdkDocument);
		}
		return toReturn;
	}

	public String[] getCorrectRolesForExecution(Integer id) throws RemoteException{
		String[] toReturn = null;

		if(proxyHandler.getDocumentsServiceProxy()!= null)
			toReturn = proxyHandler.getDocumentsServiceProxy().getCorrectRolesForExecution(id);
		return toReturn;
	}


	public DocumentParameter[] 	getDocumentParameters(Integer id, String role) throws RemoteException{
		DocumentParameter[] toReturn = null;
		SDKDocumentParameter[] sdkDocumentParameters = null;

		if(proxyHandler.getDocumentsServiceProxy()!= null)
			sdkDocumentParameters = proxyHandler.getDocumentsServiceProxy().getDocumentParameters(id, role);
		if(sdkDocumentParameters != null){
			toReturn = new DocumentParameter[sdkDocumentParameters.length];
			for (int i = 0; i < sdkDocumentParameters.length; i++) {
				toReturn[i] = new DocumentParameter(sdkDocumentParameters[i]);
			}
		}
		return toReturn;
	}

	public ProxyHandler getProxyHandler() {
		return proxyHandler;
	}

	public void setProxyHandler(ProxyHandler proxyHandler) {
		this.proxyHandler = proxyHandler;
	}

	
}
