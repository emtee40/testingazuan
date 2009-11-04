package it.eng.spagobi.studio.documentcomposition.wizards;

import it.eng.spagobi.studio.documentcomposition.Activator;
import it.eng.spagobi.studio.documentcomposition.editors.DocumentCompositionEditor;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.Document;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.DocumentComposition;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.DocumentsConfiguration;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.Parameter;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.Parameters;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.Refresh;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.RefreshDocLinked;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.bo.DocumentBO;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.bo.ParameterBO;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.bo.RefreshDocLinkedBO;
import it.eng.spagobi.studio.documentcomposition.util.XmlTemplateGenerator;
import it.eng.spagobi.studio.documentcomposition.wizards.pages.ModifyNavigationWizardPage;
import it.eng.spagobi.studio.documentcomposition.wizards.pages.util.DestinationInfo;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Vector;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.IWizardPage;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableItem;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;

public class SpagoBIModifyNavigationWizard extends Wizard implements INewWizard{

	// workbench selection when the wizard was started
	protected IStructuredSelection selection;
	private DocumentComposition docComp ;
	
	private RefreshDocLinkedBO refreshBO = new RefreshDocLinkedBO();
	private ParameterBO paramBO = new ParameterBO();

	// the workbench instance
	protected IWorkbench workbench;

	// dashboard creation page
	private ModifyNavigationWizardPage modifyNavigationWizardPage;
	
	private String selectedMaster;

	public String getSelectedMaster() {
		return selectedMaster;
	}


	public void setSelectedMaster(String selectedMaster) {
		this.selectedMaster = selectedMaster;
	}

	public IStructuredSelection getSelection() {
		return selection;
	}


	public void setSelection(IStructuredSelection selection) {
		this.selection = selection;
	}
	public SpagoBIModifyNavigationWizard() {
		super();
	}

	
	@Override
	public void addPage(IWizardPage page) {
		// TODO Auto-generated method stub
		super.addPage(page);
	}
	
	private void completePageDataCollection(){
		if(modifyNavigationWizardPage.isPageComplete()){
			DestinationInfo destinationInfo = new DestinationInfo();
			int destinCounter= modifyNavigationWizardPage.getDestinCounter();
			if(destinCounter!= -1){
				if(!modifyNavigationWizardPage.getDestinationDocNameCombo().elementAt(destinCounter).isDisposed()){
					
					destinationInfo.setDocDestName(modifyNavigationWizardPage.getDestinationDocNameCombo().elementAt(destinCounter).getText());
						
					destinationInfo.setParamDestName(modifyNavigationWizardPage.getDestinationInputParam().elementAt(destinCounter).getText());
					
					destinationInfo.setParamDefaultValue(modifyNavigationWizardPage.getDestinationInputParamDefaultValue().elementAt(destinCounter));
					modifyNavigationWizardPage.getDestinationInfos().add(destinationInfo);	
				}
			}
		}
	}
	private void redrawTable(){
		//*INSERISCE NELLA LISTA DELLE NAVIGATION LA NUOVA NAVIGAZIONE*/
		 
		Object objSel = selection.toList().get(0);
		Table listOfNavigations = (Table)objSel;
		
		TableItem[] items = listOfNavigations.getSelection();
      
	    StringBuffer dest = new StringBuffer();
	    
		Vector<DestinationInfo> destInfos = modifyNavigationWizardPage.getDestinationInfos();
		for(int k =0; k<destInfos.size(); k++){
			DestinationInfo destInfo = destInfos.elementAt(k);
			String destinationDoc = destInfo.getDocDestName();
			String destParam = destInfo.getParamDestName();
			if(destinationDoc != null){
	    		dest.append((destInfos.elementAt(k)).getDocDestName());
    		    dest.append("(");
    		    dest.append(destParam);
    		    dest.append(")");
	    		if(k != destInfos.size()-1){
	    			dest.append(" - ");
	    		}
			}
			
		}

		items[0].setText(2, dest.toString());
    
	    listOfNavigations.getShell().redraw();
		////////////////////////////////////
		
	}
	@Override
	public boolean performFinish() {
	
		
		redrawTable();
		//recupera da plugin oggetto DocumentComposition
		docComp = Activator.getDefault().getDocumentComposition();
		

		String masterName= modifyNavigationWizardPage.getMasterDocName().getText();
	    //in realt� prende il doc master corrispondente a quello selezionato dall'utente
	    //all'interno del doc master costrisce Parametro con Refresh (navigazione)	
		//DocumentComposition docComp = new DocumentComposition ();

		DocumentsConfiguration docConf = docComp.getDocumentsConfiguration();
	    Vector documents = docConf.getDocuments();
	    if(documents != null){
		    //elabora documento master
		    for (int i = 0; i< documents.size(); i++){
		    	Document doc = (Document)documents.get(i);
		    	String docLabel = doc.getSbiObjLabel();

		    	if(docLabel.equals(modifyNavigationWizardPage.getDocInfoUtil().get(masterName))){
	
					String masterPar = modifyNavigationWizardPage.getMasterParamName().getText();
		    		//modifica le destinazioni
		    		Parameters params = doc.getParameters();//tag gi� presente nel modello riempito precedentemente

	    			if(params == null){
	    				params = new Parameters();//altrimenti lo crea
	    			}
	    			Vector<Parameter> parameters =params.getParameter();
	    			if(parameters == null){
	    				parameters = new Vector<Parameter>();
	    			}
	    			
	    			Parameter outputPram = paramBO.getDocOutputParameter(parameters, masterPar);
	    			fillNavigationOutParam(outputPram, masterPar);
	    			
		    	}else{
		    		Parameters params = doc.getParameters();//tag gi� presente nel modello riempito precedentemente

	    			if(params == null){
	    				params = new Parameters();//altrimenti lo crea
	    			}
	
		    		Vector<Parameter> parameters =params.getParameter();
	    			if(parameters == null){
	    				parameters = new Vector<Parameter>();
	    			}
		    		//aggiunge il parameter IN per la dstinazione
		    		fillInNavigationParams(parameters, doc);

		    	}
		    	
		    }
		    cleanInputParameters();
	    }
		IWorkbenchPage iworkbenchpage = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage();
		
		DocumentCompositionEditor editor= (DocumentCompositionEditor)iworkbenchpage.getActiveEditor();
		editor.setIsDirty(true);
	    //generator.transformToXml(docComp);
	    return true;
	}
	private void cleanInputParameters(){
		Vector<String> idParamUsedByRefresh = refreshBO.getIdParamsUsedByRefreshes(docComp);
		paramBO.cleanUnusedInputParameters(docComp, idParamUsedByRefresh);
	}
	public void init(IWorkbench workbench, IStructuredSelection selection) {
		setWindowTitle("Modify navigation");
		
		this.workbench = workbench;
		this.selection = selection;
		
		
		modifyNavigationWizardPage = new ModifyNavigationWizardPage();
	}
	
	public void addPages() {
		super.addPages();
		modifyNavigationWizardPage = new ModifyNavigationWizardPage("Modify navigation");
		addPage(modifyNavigationWizardPage);
		modifyNavigationWizardPage.setPageComplete(true);
		
	}

	private void fillNavigationOutParam(Parameter ouputparam, String masterParam){
		HashMap<String, String> docInfoUtil= modifyNavigationWizardPage.getDocInfoUtil();
		
		Refresh refresh = ouputparam.getRefresh();
		Vector <RefreshDocLinked> refreshes = refresh.getRefreshDocLinked();
		
		Vector<DestinationInfo> destInfos = modifyNavigationWizardPage.getDestinationInfos();
		for(int k =0; k<destInfos.size(); k++){
			DestinationInfo destInfo = destInfos.elementAt(k);
			
			String toRefresh = docInfoUtil.get(destInfo.getDocDestName());

			String paramIn =destInfo.getParamDestName();
			String id =destInfo.getParamDestId();
			if(id != null){
				RefreshDocLinked refreshDocLinked = refreshBO.refreshDocAlreadyExists(id, toRefresh, refreshes);
				//se non esiste lo crea
				if(refreshDocLinked == null){
					//rimuove il vecchio
					RefreshDocLinked oldRefreshDocLinked = refreshBO.refreshByParamIdAlreadyExists(id, refreshes);
					if(oldRefreshDocLinked != null){
						refreshes.remove(oldRefreshDocLinked);
					}
					
					//se quel refresh non esiste lo crea	
					refreshDocLinked = new RefreshDocLinked();
					refreshDocLinked.setIdParam(id);
					refreshDocLinked.setLabelDoc(toRefresh);
					refreshDocLinked.setLabelParam(paramIn);
					refreshes.add(refreshDocLinked);
					
				}
				//recupera parametro in a cui fa riferimento il refreshdoc 
				Parameter prevParamIn = paramBO.getParameterById(docComp, id);
				String parentDoc = paramBO.getParameterDocumentName(docComp, id);
				if(!prevParamIn.getSbiParLabel().equals(paramIn) || !parentDoc.equals(toRefresh)){
					//allora bisogna creare nuovo parametro in e correggere l'idParam del refresh
					Parameters params = DocumentBO.getParametersByDocumentLabel(docComp, toRefresh);
					Parameter paramExisting = paramBO.getDocInputParameterByLabel(params.getParameter(), paramIn);
					if(paramExisting == null){
						Parameter newParam = new Parameter(docComp);
						newParam.setSbiParLabel(paramIn);
						newParam.setType("IN");
						newParam.setDefaultVal(destInfo.getParamDefaultValue().getText());
						params.getParameter().add(newParam);
						
						//poi modifica idParam del refresh
						refreshDocLinked.setIdParam(newParam.getId());
					}else{
						//se param in esiste gi� modifica idParam del refresh
						refreshDocLinked.setIdParam(paramExisting.getId());
						refreshDocLinked.setLabelParam(paramExisting.getSbiParLabel());
						
						//e valore di default del param in
						paramExisting.setDefaultVal(destInfo.getParamDefaultValue().getText());
					}
				}else{
					refreshDocLinked.setLabelDoc(toRefresh);
					refreshDocLinked.setLabelParam(paramIn);
				}
			}
			
		}
		//cacella refreshedDocs 
		HashMap<String, String> deleted = modifyNavigationWizardPage.getDeletedParams();
		Iterator ids = deleted.keySet().iterator();
		while(ids.hasNext()){
			String id= (String)ids.next();
			String toDeleteLabel = docInfoUtil.get(deleted.get(id));
			for(int k=0; k<refreshes.size(); k++){
				RefreshDocLinked refreshDocLinked = refreshes.elementAt(k);
				if(refreshDocLinked.getIdParam().equals(id)){
					refreshes.remove(refreshDocLinked);
				}
			}
		}

		ouputparam.setRefresh(refresh);		

	}

	private void fillInNavigationParams(Vector<Parameter> parameters, Document doc){
		//cicla su destinazioni
		HashMap<String, String> docInfoUtil= modifyNavigationWizardPage.getDocInfoUtil();
		Vector<DestinationInfo> destInfos = modifyNavigationWizardPage.getDestinationInfos();
		for(int k =0; k<destInfos.size(); k++){
			DestinationInfo destInfo = destInfos.elementAt(k);
			String destinationDoc = destInfo.getDocDestName();
			//recupera da hashmap di utilit� la label corrispondente
			String destLabel = docInfoUtil.get(destinationDoc);
			
			//aggiorna tutti parametri con la stessa label (sar� 1 solo!!! se non ci sono errori)
			if(destLabel != null && destLabel.equals(doc.getSbiObjLabel())){
				String paramName = destInfo.getParamDestName();	
				String id =destInfo.getParamDestId();
				
				//se esiste parametro IN con stessa label
				Parameter paramsSameLabel = paramBO.getDocInputParameterByLabel(parameters, destInfo.getParamDestName());
				if(paramsSameLabel != null){
					//lo modifico nel valore di default 
					if(paramsSameLabel != null){
						paramsSameLabel.setDefaultVal(destInfo.getParamDefaultValue().getText());
						//refresh corrispondente viene aggiornato viene fatto nel fillout 
						
					}
					//e cancello quello con id corrente
					Parameter paramToDelete = paramBO.getParameterById(id, parameters);
					parameters.remove(paramToDelete);
					//refresh viene aggiornato-->cancellato
					refreshBO.deleteRefreshedDocLink(docComp, id, destLabel, paramsSameLabel.getSbiParLabel());
				}else{
					//modificato valore di default
					Parameter param = paramBO.getParameterById(id, parameters);
					if(param != null){
						param.setDefaultVal(destInfo.getParamDefaultValue().getText());													
					}
					//refresh viene aggiornato
					refreshBO.upadateRefreshedDocLink(docComp, id,param.getSbiParLabel(),destLabel);
				}


			}			
		}
		//cancella destination parameter
		HashMap<String, String> deleted = modifyNavigationWizardPage.getDeletedParams();
		Iterator ids = deleted.keySet().iterator();
		while(ids.hasNext()){
			String id= (String)ids.next();
			String toDeleteLabel = docInfoUtil.get(deleted.get(id));
			for(int k=0; k<parameters.size(); k++){
				Parameter param = parameters.elementAt(k);
				if(param.getId().equals(id)){
					parameters.remove(param);
				}
			}
		}
	}




}
