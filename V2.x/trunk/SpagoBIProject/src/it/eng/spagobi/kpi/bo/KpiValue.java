package it.eng.spagobi.kpi.bo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class KpiValue {
	
	Integer kpiInstanceId = null;
	String value = null;		
	List thresholds = null;
	Double weight = null;
	Date beginDate = null;
	Date endDate = null;//null beginDate + num_validity_days
	Integer num_validity_days = null;// number of days from begindate for wich the value is valid
	String scaleCode = null;
	String scaleName = null;
	Resource r = null;//Resource (project/process) to which refers the value
	
	public KpiValue() {
		super();
		this.thresholds = new ArrayList();
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
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

	public List getThresholds() {
		return thresholds;
	}

	public void setThresholds(List thresholds) {
		this.thresholds = thresholds;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Date getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Integer getNum_validity_days() {
		return num_validity_days;
	}

	public void setNum_validity_days(Integer num_validity_days) {
		this.num_validity_days = num_validity_days;
	}

	public Resource getR() {
		return r;
	}

	public void setR(Resource r) {
		this.r = r;
	}

	public Integer getKpiInstanceId() {
		return kpiInstanceId;
	}

	public void setKpiInstanceId(Integer kpiInstanceId) {
		this.kpiInstanceId = kpiInstanceId;
	}

}
