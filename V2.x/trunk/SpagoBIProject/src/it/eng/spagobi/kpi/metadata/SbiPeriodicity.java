package it.eng.spagobi.kpi.metadata;
// Generated 3-nov-2008 10.09.05 by Hibernate Tools 3.1.0 beta3

import java.util.HashSet;
import java.util.Set;


/**
 * SbiPeriodicity generated by hbm2java
 */

public class SbiPeriodicity  implements java.io.Serializable {


    // Fields    

     private Integer idPeriodicity;
     private String name;
     private String unit;
     private Set sbiKpiPeriodicities = new HashSet(0);


    // Constructors

    /** default constructor */
    public SbiPeriodicity() {
    }

	/** minimal constructor */
    public SbiPeriodicity(Integer idPeriodicity) {
        this.idPeriodicity = idPeriodicity;
    }
    
    /** full constructor */
    public SbiPeriodicity(Integer idPeriodicity, String name, String unit, Set sbiKpiPeriodicities) {
        this.idPeriodicity = idPeriodicity;
        this.name = name;
        this.unit = unit;
        this.sbiKpiPeriodicities = sbiKpiPeriodicities;
    }
    

   
    // Property accessors

    public Integer getIdPeriodicity() {
        return this.idPeriodicity;
    }
    
    public void setIdPeriodicity(Integer idPeriodicity) {
        this.idPeriodicity = idPeriodicity;
    }

    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public String getUnit() {
        return this.unit;
    }
    
    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Set getSbiKpiPeriodicities() {
        return this.sbiKpiPeriodicities;
    }
    
    public void setSbiKpiPeriodicities(Set sbiKpiPeriodicities) {
        this.sbiKpiPeriodicities = sbiKpiPeriodicities;
    }
   








}
