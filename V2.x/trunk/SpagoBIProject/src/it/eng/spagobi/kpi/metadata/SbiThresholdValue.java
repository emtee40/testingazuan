package it.eng.spagobi.kpi.metadata;

import it.eng.spagobi.commons.metadata.SbiDomains;
// Generated 3-nov-2008 10.09.05 by Hibernate Tools 3.1.0 beta3



/**
 * SbiThresholdValue generated by hbm2java
 */

public class SbiThresholdValue  implements java.io.Serializable {


    // Fields    

     private Integer idThresholdValue;
     private SbiThreshold sbiThreshold;
     private SbiDomains sbiDomains;
     private double minValue;
     private double maxValue;
     private String label;
     private String colour;
     private Integer position;


    // Constructors

    /** default constructor */
    public SbiThresholdValue() {
    }

	/** minimal constructor */
    public SbiThresholdValue(Integer idThresholdValue, SbiThreshold sbiThreshold) {
        this.idThresholdValue = idThresholdValue;
        this.sbiThreshold = sbiThreshold;
    }
    
    /** full constructor */
    public SbiThresholdValue(Integer idThresholdValue, SbiThreshold sbiThreshold, SbiDomains sbiDomains, double minValue, double maxValue, String label, String colour) {
        this.idThresholdValue = idThresholdValue;
        this.sbiThreshold = sbiThreshold;
        this.sbiDomains = sbiDomains;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.label = label;
        this.colour = colour;
        this.position = position;
    }
    

   
    // Property accessors

    public Integer getIdThresholdValue() {
        return this.idThresholdValue;
    }
    
    public void setIdThresholdValue(Integer idThresholdValue) {
        this.idThresholdValue = idThresholdValue;
    }

    public SbiThreshold getSbiThreshold() {
        return this.sbiThreshold;
    }
    
    public void setSbiThreshold(SbiThreshold sbiThreshold) {
        this.sbiThreshold = sbiThreshold;
    }

    public SbiDomains getSbiDomains() {
        return this.sbiDomains;
    }
    
    public void setSbiDomains(SbiDomains sbiDomains) {
        this.sbiDomains = sbiDomains;
    }

    public double getMinValue() {
        return this.minValue;
    }
    
    public void setMinValue(double minValue) {
        this.minValue = minValue;
    }

    public double getMaxValue() {
        return this.maxValue;
    }
    
    public void setMaxValue(double maxValue) {
        this.maxValue = maxValue;
    }

    public String getLabel() {
        return this.label;
    }
    
    public void setLabel(String label) {
        this.label = label;
    }

    public String getColour() {
        return this.colour;
    }
    
    public void setColour(String colour) {
        this.colour = colour;
    }

	public Integer getPosition() {
		return position;
	}

	public void setPosition(Integer position) {
		this.position = position;
	}
   








}
