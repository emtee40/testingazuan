package it.eng.spagobi.kpi.threshold.bo;

import java.util.List;


public class Threshold {
	
	Integer id = null;
	String name = null;//all thresholds referred to the same kpi will have this Name equal
	String description = null;//all thresholds referred to the same kpi will have this description equal
	String code = null;
	Integer thresholdTypeId = null;
	List thresholdValues=null;
	

	public Threshold() {
		super();
	}


	public Integer getId() {
		return id;
	}


	@Override
	public boolean equals(Object obj) {
		Threshold t = (Threshold)obj;
		if (this.id!= null && this.id.equals(t.getId())){
		return true;
		}else{
			return false;
		}
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


	public Integer getThresholdTypeId() {
		return thresholdTypeId;
	}


	public void setThresholdTypeId(Integer thresholdTypeId) {
		this.thresholdTypeId = thresholdTypeId;
	}


	public List getThresholdValues() {
		return thresholdValues;
	}


	public void setThresholdValues(List thresholdValues) {
		this.thresholdValues = thresholdValues;
	}
	



}
