package it.eng.spagobi.kpi.threshold.bo;

import java.awt.Color;
import java.util.List;

public class ThresholdValue  {
	
	Integer id=null;
	Integer thresholdId = null;
	Integer severityId = null;
	Integer position=null;
 	Double minValue = null;// null if type = max
	Double maxValue = null;// null if type = min
	String label = null;
	Color colour = null;
	String colourString = null;
	List alarms=null;
	String thresholdType=null;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getThresholdId() {
		return thresholdId;
	}
	public void setThresholdId(Integer thresholdId) {
		this.thresholdId = thresholdId;
	}
	public Integer getSeverityId() {
		return severityId;
	}
	public void setSeverityId(Integer severityId) {
		this.severityId = severityId;
	}
	public Integer getPosition() {
		return position;
	}
	public void setPosition(Integer position) {
		this.position = position;
	}
	public Double getMinValue() {
		return minValue;
	}
	public void setMinValue(Double minValue) {
		this.minValue = minValue;
	}
	public Double getMaxValue() {
		return maxValue;
	}
	public void setMaxValue(Double maxValue) {
		this.maxValue = maxValue;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public Color getColour() {
		return colour;
	}
	public void setColour(Color _colour) {
		this.colour = _colour;
	}
	public List getAlarms() {
		return alarms;
	}
	public void setAlarms(List alarms) {
		this.alarms = alarms;
	}
	public String getColourString() {
		return colourString;
	}
	public void setColourString(String colourString) {
		this.colourString = colourString;
	}
	public String getThresholdType() {
		return thresholdType;
	}
	public void setThresholdType(String thresholdType) {
		this.thresholdType = thresholdType;
	}
	
	
	

}
