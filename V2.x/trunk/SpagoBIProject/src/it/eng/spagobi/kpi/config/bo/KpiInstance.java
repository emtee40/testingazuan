package it.eng.spagobi.kpi.config.bo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class KpiInstance {
	
	Integer kpiInstanceId = null;
	Integer periodicity = null;//id of periodicity of valability in seconds
	
	Integer periodicityId = null;
	Integer chartTypeId = null;
	Integer thresholdId = null;
	String scaleCode = null;
	String scaleName = null;	
	Integer kpi = null ;// kpiId related to the kpiInstance
	Date d = null;	
	Double weight = null; 
	Double target = null; 
	
	public Integer getPeriodicityId() {
		return periodicityId;
	}

	public void setPeriodicityId(Integer periodicityId) {
		this.periodicityId = periodicityId;
	}

	public Integer getChartTypeId() {
		return chartTypeId;
	}

	public void setChartTypeId(Integer chartTypeId) {
		this.chartTypeId = chartTypeId;
	}

	public Integer getThresholdId() {
		return thresholdId;
	}

	public void setThresholdId(Integer thresholdId) {
		this.thresholdId = thresholdId;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public KpiInstance() {
		super();
	}

	public Integer getKpiInstanceId() {
		return kpiInstanceId;
	}

	public void setKpiInstanceId(Integer kpiId) {
		this.kpiInstanceId = kpiId;
	}

	public Integer getKpi() {
		return kpi;
	}

	public void setKpi(Integer kpi) {
		this.kpi = kpi;
	}


	public Date getD() {
		return d;
	}

	public void setD(Date d) {
		this.d = d;
	}

	public Integer getPeriodicity() {
		return periodicity;
	}

	public void setPeriodicity(Integer periodicity) {
		this.periodicity = periodicity;
	}

	public Double getTarget() {
		return target;
	}

	public void setTarget(Double target) {
		this.target = target;
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
	

}
