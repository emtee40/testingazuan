package it.eng.spagobi.kpi.model.bo;

import it.eng.spagobi.kpi.config.bo.Kpi;

import java.util.ArrayList;
import java.util.List;

public class ModelNode {
	
	Boolean isRoot = null;
	String name = null;
	String code = null;
	String descr = null;
	String type = null;
	ModelNode father = null;
	List children = null;// List of ModelNodes children
	Kpi kpiAssociated = null;
	
	public ModelNode() {
		super();
		List children = new ArrayList();
		isRoot = false ;
	}

	public Boolean getIsRoot() {
		return isRoot;
	}

	public void setIsRoot(Boolean isRoot) {
		this.isRoot = isRoot;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescr() {
		return descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public ModelNode getFather() {
		return father;
	}

	public void setFather(ModelNode father) {
		this.father = father;
	}

	public List getChildren() {
		return children;
	}

	public void setChildren(List children) {
		this.children = children;
	}

	public Kpi getKpiAssociated() {
		return kpiAssociated;
	}

	public void setKpiAssociated(Kpi kpiAssociated) {
		this.kpiAssociated = kpiAssociated;
	}
	

}
