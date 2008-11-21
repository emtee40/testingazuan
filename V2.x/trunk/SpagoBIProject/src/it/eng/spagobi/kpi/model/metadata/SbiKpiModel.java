package it.eng.spagobi.kpi.model.metadata;
// Generated 5-nov-2008 17.17.20 by Hibernate Tools 3.1.0 beta3

import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.kpi.config.metadata.SbiKpi;

import java.util.HashSet;
import java.util.Set;


/**
 * SbiKpiModel generated by hbm2java
 */

public class SbiKpiModel  implements java.io.Serializable {


    // Fields    

     private Integer kpiModelId;
     private SbiDomains sbiDomains;
     private SbiKpiModel sbiKpiModel;
     private SbiKpi sbiKpi;
     private String kpiModelCd;
     private String kpiModelNm;
     private String kpiModelDesc;
     private Set sbiKpiModelAttrVals = new HashSet(0);
     private Set sbiKpiModels = new HashSet(0);


    // Constructors

    /** default constructor */
    public SbiKpiModel() {
    }

	/** minimal constructor */
    public SbiKpiModel(Integer kpiModelId, SbiDomains sbiDomains) {
        this.kpiModelId = kpiModelId;
        this.sbiDomains = sbiDomains;
    }
    
    /** full constructor */
    public SbiKpiModel(Integer kpiModelId, SbiDomains sbiDomains, SbiKpiModel sbiKpiModel, SbiKpi sbiKpi, String kpiModelCd, String kpiModelNm, String kpiModelDesc, Set sbiKpiModelAttrVals, Set sbiKpiModels) {
        this.kpiModelId = kpiModelId;
        this.sbiDomains = sbiDomains;
        this.sbiKpiModel = sbiKpiModel;
        this.sbiKpi = sbiKpi;
        this.kpiModelCd = kpiModelCd;
        this.kpiModelNm = kpiModelNm;
        this.kpiModelDesc = kpiModelDesc;
        this.sbiKpiModelAttrVals = sbiKpiModelAttrVals;
        this.sbiKpiModels = sbiKpiModels;
    }
    

   
    // Property accessors

    public Integer getKpiModelId() {
        return this.kpiModelId;
    }
    
    public void setKpiModelId(Integer kpiModelId) {
        this.kpiModelId = kpiModelId;
    }

    public SbiDomains getSbiDomains() {
        return this.sbiDomains;
    }
    
    public void setSbiDomains(SbiDomains sbiDomains) {
        this.sbiDomains = sbiDomains;
    }

    public SbiKpiModel getSbiKpiModel() {
        return this.sbiKpiModel;
    }
    
    public void setSbiKpiModel(SbiKpiModel sbiKpiModel) {
        this.sbiKpiModel = sbiKpiModel;
    }

    public SbiKpi getSbiKpi() {
        return this.sbiKpi;
    }
    
    public void setSbiKpi(SbiKpi sbiKpi) {
        this.sbiKpi = sbiKpi;
    }

    public String getKpiModelCd() {
        return this.kpiModelCd;
    }
    
    public void setKpiModelCd(String kpiModelCd) {
        this.kpiModelCd = kpiModelCd;
    }

    public String getKpiModelNm() {
        return this.kpiModelNm;
    }
    
    public void setKpiModelNm(String kpiModelNm) {
        this.kpiModelNm = kpiModelNm;
    }

    public String getKpiModelDesc() {
        return this.kpiModelDesc;
    }
    
    public void setKpiModelDesc(String kpiModelDesc) {
        this.kpiModelDesc = kpiModelDesc;
    }

    public Set getSbiKpiModelAttrVals() {
        return this.sbiKpiModelAttrVals;
    }
    
    public void setSbiKpiModelAttrVals(Set sbiKpiModelAttrVals) {
        this.sbiKpiModelAttrVals = sbiKpiModelAttrVals;
    }

    public Set getSbiKpiModels() {
        return this.sbiKpiModels;
    }
    
    public void setSbiKpiModels(Set sbiKpiModels) {
        this.sbiKpiModels = sbiKpiModels;
    }
   
}
