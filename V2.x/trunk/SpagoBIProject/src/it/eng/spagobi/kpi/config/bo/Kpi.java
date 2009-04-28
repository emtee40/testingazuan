package it.eng.spagobi.kpi.config.bo;

import it.eng.spagobi.kpi.threshold.bo.Threshold;
import it.eng.spagobi.tools.dataset.bo.IDataSet;

import java.util.ArrayList;
import java.util.List;

public class Kpi {
	
	Integer kpiId = null;
	String kpiName = null;
	IDataSet kpiDs = null;// Related DataSet
	String documentLabel = null; //document related to this KPI
	Boolean isRoot = null;
	Integer fatherId = null;
	List kpiChildrenIds = null; // List of Kpis children
	List roles = null;	//roles that can view this KPI
	List kpiInstances = null; //all the instances of that KPI
	Double standardWeight = null;
	String metric = null;
	String description = null;	
	String scaleCode = null;
	String scaleName = null;
	String code = null;
	Threshold threshold = null;
	
	String interpretation = null;
	String inputAttribute = null;
	String modelReference = null;
	String targetAudience = null;
	
	Integer kpiTypeId = null;
	Integer metricScaleId = null;
	Integer measureTypeId = null;
	
	public Kpi() {
		super();
		this.kpiChildrenIds = new ArrayList();
		this.isRoot = false;	
		this.roles = new ArrayList();
		this.kpiInstances = new ArrayList();
	}



	public Integer getKpiId() {
		return kpiId;
	}



	public void setKpiId(Integer kpiId) {
		this.kpiId = kpiId;
	}



	public String getKpiName() {
		return kpiName;
	}



	public void setKpiName(String kpiName) {
		this.kpiName = kpiName;
	}



	public IDataSet getKpiDs() {
		return kpiDs;
	}



	public void setKpiDs(IDataSet kpiDs) {
		this.kpiDs = kpiDs;
	}



	public String getDocumentLabel() {
		return documentLabel;
	}



	public void setDocumentLabel(String documentLabel) {
		this.documentLabel = documentLabel;
	}



	public Integer getFather() {
		return fatherId;
	}



	public void setFather(Integer father) {
		this.fatherId = father;
	}



	public List getKpiChildren() {
		return kpiChildrenIds;
	}



	public void setKpiChildren(List kpiChildren) {
		this.kpiChildrenIds = kpiChildren;
	}



	public Boolean getIsParent() {
		return isRoot;
	}



	public void setIsParent(Boolean isParent) {
		this.isRoot = isParent;
	}



	public Double getStandardWeight() {
		return standardWeight;
	}



	public void setStandardWeight(Double standardWeight) {
		this.standardWeight = standardWeight;
	}



	public String getCode() {
		return code;
	}



	public void setCode(String code) {
		this.code = code;
	}



	public String getMetric() {
		return metric;
	}



	public void setMetric(String metric) {
		this.metric = metric;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public List getRoles() {
		return roles;
	}



	public void setRoles(List roles) {
		this.roles = roles;
	}



	public String getScaleCode() {
		return scaleCode;
	}



	public void setScaleCode(String scaleCode) {
		this.scaleCode = scaleCode;
	}



	public String getScaleName() {
		return scaleName;
	}



	public void setScaleName(String scaleName) {
		this.scaleName = scaleName;
	}



	public Boolean getIsRoot() {
		return isRoot;
	}



	public void setIsRoot(Boolean isRoot) {
		this.isRoot = isRoot;
	}



	public List getKpiInstances() {
		return kpiInstances;
	}



	public void setKpiInstances(List kpiInstances) {
		this.kpiInstances = kpiInstances;
	}



	public Threshold getThreshold() {
		return threshold;
	}



	public void setThreshold(Threshold threshold) {
		this.threshold = threshold;
	}



	public String getInterpretation() {
		return interpretation;
	}



	public void setInterpretation(String interpretation) {
		this.interpretation = interpretation;
	}



	public String getInputAttribute() {
		return inputAttribute;
	}



	public void setInputAttribute(String inputAttribute) {
		this.inputAttribute = inputAttribute;
	}



	public String getModelReference() {
		return modelReference;
	}



	public void setModelReference(String modelReference) {
		this.modelReference = modelReference;
	}



	public String getTargetAudience() {
		return targetAudience;
	}



	public void setTargetAudience(String targetAudience) {
		this.targetAudience = targetAudience;
	}



	public Integer getKpiTypeId() {
		return kpiTypeId;
	}



	public void setKpiTypeId(Integer kpiTypeId) {
		this.kpiTypeId = kpiTypeId;
	}



	public Integer getMetricScaleId() {
		return metricScaleId;
	}



	public void setMetricScaleId(Integer metricScaleId) {
		this.metricScaleId = metricScaleId;
	}



	public Integer getMeasureTypeId() {
		return measureTypeId;
	}



	public void setMeasureTypeId(Integer measureTypeId) {
		this.measureTypeId = measureTypeId;
	}
	

}
