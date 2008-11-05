package it.eng.spagobi.kpi.bo;

import java.util.ArrayList;
import java.util.List;


public class Model {
	
	ModelNode root =null; //root of the tree made of ModelNodes, representing the model
	List childrenNodes = null;//List of ModelNodes children
	String name = null;//name of the complete model (like CMMI/GQM)
	String description = null;//description of the complete model
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Model() {
		super();
		this.childrenNodes= new ArrayList();
	}

	public ModelNode getRoot() {
		return root;
	}

	public void setRoot(ModelNode root) {
		this.root = root;
	}

	public List getChildrenNodes() {
		return childrenNodes;
	}

	public void setChildrenNodes(List childrenNodes) {
		this.childrenNodes = childrenNodes;
	}	

}
