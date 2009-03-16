/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

**/
package it.eng.spagobi.commons.metadata;





/**
 * SbiDomains generated by hbm2java
 */
public class SbiDomains  implements java.io.Serializable {

    // Fields    

     private Integer valueId;
     private String domainCd;
     private String domainNm;
     private String valueCd;
     private String valueNm;
     private String valueDs;
	

    // Constructors

    /**
     * default constructor.
     */
    public SbiDomains() {
    }
    
    /**
     * constructor with id.
     * 
     * @param valueId the value id
     */
    public SbiDomains(Integer valueId) {
        this.valueId = valueId;
    }
   
    
    

    // Property accessors

    /**
     * Gets the value id.
     * 
     * @return the value id
     */
    public Integer getValueId() {
        return this.valueId;
    }
    
    /**
     * Sets the value id.
     * 
     * @param valueId the new value id
     */
    public void setValueId(Integer valueId) {
        this.valueId = valueId;
    }

    /**
     * Gets the domain cd.
     * 
     * @return the domain cd
     */
    public String getDomainCd() {
        return this.domainCd;
    }
    
    /**
     * Sets the domain cd.
     * 
     * @param domainCd the new domain cd
     */
    public void setDomainCd(String domainCd) {
        this.domainCd = domainCd;
    }

    /**
     * Gets the domain nm.
     * 
     * @return the domain nm
     */
    public String getDomainNm() {
        return this.domainNm;
    }
    
    /**
     * Sets the domain nm.
     * 
     * @param domainNm the new domain nm
     */
    public void setDomainNm(String domainNm) {
        this.domainNm = domainNm;
    }

    /**
     * Gets the value cd.
     * 
     * @return the value cd
     */
    public String getValueCd() {
        return this.valueCd;
    }
    
    /**
     * Sets the value cd.
     * 
     * @param valueCd the new value cd
     */
    public void setValueCd(String valueCd) {
        this.valueCd = valueCd;
    }

    /**
     * Gets the value nm.
     * 
     * @return the value nm
     */
    public String getValueNm() {
        return this.valueNm;
    }
    
    /**
     * Sets the value nm.
     * 
     * @param valueNm the new value nm
     */
    public void setValueNm(String valueNm) {
        this.valueNm = valueNm;
    }

    /**
     * Gets the value ds.
     * 
     * @return the value ds
     */
    public String getValueDs() {
        return this.valueDs;
    }
    
    /**
     * Sets the value ds.
     * 
     * @param valueDs the new value ds
     */
    public void setValueDs(String valueDs) {
        this.valueDs = valueDs;
    }



}