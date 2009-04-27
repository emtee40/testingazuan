package it.eng.spagobi.sdk.proxy;

import java.rmi.Remote;
import java.rmi.RemoteException;

import org.apache.axis.client.Stub;
import org.apache.ws.security.handler.WSHandlerConstants;

import it.eng.spagobi.sdk.callbacks.ClientCredentialsHolder;

public class DocumentsServiceProxy implements it.eng.spagobi.sdk.documents.stub.DocumentsService {
  private String _endpoint = null;
  private it.eng.spagobi.sdk.documents.stub.DocumentsService documentsService = null;
  private ClientCredentialsHolder cch = null;
  
	public DocumentsServiceProxy(String user, String pwd) {
		cch = new ClientCredentialsHolder(user, pwd);
		_initDocumentsServiceProxy();
	}
  
  private void _initDocumentsServiceProxy() {
    try {
		it.eng.spagobi.sdk.documents.stub.DocumentsServiceServiceLocator locator = new it.eng.spagobi.sdk.documents.stub.DocumentsServiceServiceLocator();
		Remote remote = locator.getPort(it.eng.spagobi.sdk.documents.stub.DocumentsService.class);
        Stub axisPort = (Stub) remote;
        axisPort._setProperty(WSHandlerConstants.USER, cch.getUsername());
        axisPort._setProperty(WSHandlerConstants.PW_CALLBACK_REF, cch);
        documentsService = (it.eng.spagobi.sdk.documents.stub.DocumentsService) axisPort;
		
      if (documentsService != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)documentsService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)documentsService)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (documentsService != null)
      ((javax.xml.rpc.Stub)documentsService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public it.eng.spagobi.sdk.documents.stub.DocumentsService getDocumentsService() {
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService;
  }
  
  public it.eng.spagobi.sdk.documents.bo.Document[] getDocumentsAsList(java.lang.String in0, java.lang.String in1, java.lang.String in2) throws RemoteException {
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.getDocumentsAsList(in0, in1, in2);
  }
  
  public it.eng.spagobi.sdk.documents.bo.Functionality[] getDocumentsAsTree(java.lang.String in0) throws RemoteException {
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.getDocumentsAsTree(in0);
  }
  
  public java.lang.String[] getCorrectRolesForExecution(java.lang.Integer in0) throws RemoteException, it.eng.spagobi.sdk.exceptions.NonExecutableDocumentException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.getCorrectRolesForExecution(in0);
  }
  
  public it.eng.spagobi.sdk.documents.bo.DocumentParameter[] getDocumentParameters(java.lang.Integer in0, java.lang.String in1) throws RemoteException, it.eng.spagobi.sdk.exceptions.NonExecutableDocumentException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.getDocumentParameters(in0, in1);
  }
  
  public java.util.HashMap getAdmissibleValues(java.lang.Integer in0, java.lang.String in1) throws RemoteException, it.eng.spagobi.sdk.exceptions.NonExecutableDocumentException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.getAdmissibleValues(in0, in1);
  }
  
  public it.eng.spagobi.sdk.documents.bo.Template downloadTemplate(java.lang.Integer in0) throws RemoteException, it.eng.spagobi.sdk.exceptions.NotAllowedOperationException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.downloadTemplate(in0);
  }
  
  public void uploadTemplate(java.lang.Integer in0, it.eng.spagobi.sdk.documents.bo.Template in1) throws RemoteException, it.eng.spagobi.sdk.exceptions.NotAllowedOperationException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    documentsService.uploadTemplate(in0, in1);
  }
  
  public java.lang.Integer saveNewDocument(it.eng.spagobi.sdk.documents.bo.Document in0, it.eng.spagobi.sdk.documents.bo.Template in1, java.lang.Integer in2) throws RemoteException, it.eng.spagobi.sdk.exceptions.NotAllowedOperationException{
    if (documentsService == null)
      _initDocumentsServiceProxy();
    return documentsService.saveNewDocument(in0, in1, in2);
  }
  
  
}