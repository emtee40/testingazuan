package it.eng.spagobi.kpi.model.bo;

import java.util.ArrayList;
import java.util.List;

public class Model {
	
	private Integer id = null;// id of ModelNode (KPI_MODEL_ID)
	private Integer parentId = null; //the parent id of the tree made of ModelNodes, representing the model
	private List childrenNodes = null;//List of Model children
	private List modelAttributes = null;//List of all related ModelAttributes
	private String name = null;//name of the complete model (like CMMI/GQM)
	private String description = null;//description of the complete model
	private String code = null;//code of the complete model
	private String typeName = null;//name of the type of the model (GENERIC_ROOT/GQM_ROOT)
	private String typeDescription = null;//description of the type of the model
	private Integer kpiId = null;// id of Kpi
	
	public Integer getKpiId() {
		return kpiId;
	}

	public void setKpiId(Integer kpiId) {
		this.kpiId = kpiId;
	}

	public Integer getId(){
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
	public String getTypeName() {
		return typeName;
	}
	
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	
	public String getTypeDescription() {
		return typeDescription;
	}
	
	public void setTypeDescription(String typeDescription) {
		this.typeDescription = typeDescription;
	}
	
	public Model() {
		super();
		this.childrenNodes= new ArrayList();
		this.modelAttributes = new ArrayList();
	}
	
	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public List getChildrenNodes() {
		return childrenNodes;
	}

	public void setChildrenNodes(List childrenNodes) {
		this.childrenNodes = childrenNodes;
	}
	
	public List getModelAttributes(){
		return modelAttributes;
	}

	public void setModelAttributes(List modelAttributes) {
		this.modelAttributes = modelAttributes;
	}

}
