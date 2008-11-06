package it.eng.spagobi.kpi.config.metadata;
// Generated 5-nov-2008 17.16.35 by Hibernate Tools 3.1.0 beta3

import it.eng.spagobi.commons.metadata.SbiDomains;

import java.util.HashSet;
import java.util.Set;


/**
 * SbiMeasureUnit generated by hbm2java
 */

public class SbiMeasureUnit  implements java.io.Serializable {


    // Fields    

     private Integer idMeasureUnit;
     private SbiDomains sbiDomains;
     private String name;
     private String scaleCd;
     private String scaleNm;
     private Set sbiKpis = new HashSet(0);
     private Set sbiKpiInstanceHistories = new HashSet(0);
     private Set sbiKpiInstances = new HashSet(0);


    // Constructors

    /** default constructor */
    public SbiMeasureUnit() {
    }

	/** minimal constructor */
    public SbiMeasureUnit(Integer idMeasureUnit, SbiDomains sbiDomains) {
        this.idMeasureUnit = idMeasureUnit;
        this.sbiDomains = sbiDomains;
    }
    
    /** full constructor */
    public SbiMeasureUnit(Integer idMeasureUnit, SbiDomains sbiDomains, String name, String scaleCd, String scaleNm, Set sbiKpis, Set sbiKpiInstanceHistories, Set sbiKpiInstances) {
        this.idMeasureUnit = idMeasureUnit;
        this.sbiDomains = sbiDomains;
        this.name = name;
        this.scaleCd = scaleCd;
        this.scaleNm = scaleNm;
        this.sbiKpis = sbiKpis;
        this.sbiKpiInstanceHistories = sbiKpiInstanceHistories;
        this.sbiKpiInstances = sbiKpiInstances;
    }
    

   
    // Property accessors

    public Integer getIdMeasureUnit() {
        return this.idMeasureUnit;
    }
    
    public void setIdMeasureUnit(Integer idMeasureUnit) {
        this.idMeasureUnit = idMeasureUnit;
    }

    public SbiDomains getSbiDomains() {
        return this.sbiDomains;
    }
    
    public void setSbiDomains(SbiDomains sbiDomains) {
        this.sbiDomains = sbiDomains;
    }

    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public String getScaleCd() {
        return this.scaleCd;
    }
    
    public void setScaleCd(String scaleCd) {
        this.scaleCd = scaleCd;
    }

    public String getScaleNm() {
        return this.scaleNm;
    }
    
    public void setScaleNm(String scaleNm) {
        this.scaleNm = scaleNm;
    }

    public Set getSbiKpis() {
        return this.sbiKpis;
    }
    
    public void setSbiKpis(Set sbiKpis) {
        this.sbiKpis = sbiKpis;
    }

    public Set getSbiKpiInstanceHistories() {
        return this.sbiKpiInstanceHistories;
    }
    
    public void setSbiKpiInstanceHistories(Set sbiKpiInstanceHistories) {
        this.sbiKpiInstanceHistories = sbiKpiInstanceHistories;
    }

    public Set getSbiKpiInstances() {
        return this.sbiKpiInstances;
    }
    
    public void setSbiKpiInstances(Set sbiKpiInstances) {
        this.sbiKpiInstances = sbiKpiInstances;
    }
   








}
