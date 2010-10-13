/*
 * Create a Singleton class to hold the EMF Model instance reference
 */
package it.eng.spagobi.meta.editor.singleton;

import org.eclipse.emf.common.util.EList;

import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.ModelFactory;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.physical.PhysicalModel;

public class CoreSingleton {
	
	//only one instance of this class exist globally
	static private CoreSingleton _instance;
	
	private Model rootModel;
	private String bmName;
	
	
	public static CoreSingleton getInstance() {
		if (_instance == null) 
			synchronized(CoreSingleton.class){
				_instance = new CoreSingleton();
			}
		return _instance;
	}

	public Object clone() throws CloneNotSupportedException {
		throw new CloneNotSupportedException();
	}

	public void setRootModel(Model rootModel) {
		this.rootModel = rootModel;
	}

	public Model getRootModel() {
		return rootModel;
	}	
	
	public void initModel(){
		rootModel = ModelFactory.eINSTANCE.createModel();
		rootModel.setName("rootmodel");
	}

	/**
	 * @param bmName the bmName to set
	 */
	public void setBmName(String bmName) {
		this.bmName = bmName;
	}

	/**
	 * @return the bmName
	 */
	public String getBmName() {
		return bmName;
	}

	/**
	 * @return the current PhysicalModel
	 */
	public PhysicalModel getPhysicalModel(){
		EList<PhysicalModel> pmList = rootModel.getPhysicalModels();
		return pmList.get(0);
	}
	
	/**
	 * @return the current BusinessModel
	 */	
	public BusinessModel getBusinessModel(){
		EList<BusinessModel> bmList = rootModel.getBusinessModels();
		return bmList.get(0);
	}
	
	/**
	 * Delete current BusinessModel
	 */
	public void deleteBusinessModel(){
		rootModel.getBusinessModels().remove(0);
	}

}
