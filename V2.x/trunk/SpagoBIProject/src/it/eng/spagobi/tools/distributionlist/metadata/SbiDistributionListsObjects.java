/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.tools.distributionlist.metadata;

import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjects;
// Generated 19-feb-2008 18.15.47 by Hibernate Tools 3.1.0 beta3



/**
 * SbiDistributionListsObjects generated by hbm2java
 */

public class SbiDistributionListsObjects  implements java.io.Serializable {


    // Fields    

     private Integer relId;
     private SbiObjects sbiObjects;
     private SbiDistributionList sbiDistributionList;
     private String xml;


    // Constructors

    /**
     * default constructor.
     */
    public SbiDistributionListsObjects() {
    }

    
    /**
     * full constructor.
     * 
     * @param relId the rel id
     * @param sbiObjects the sbi objects
     * @param sbiDistributionList the sbi distribution list
     * @param xml the xml
     */
    public SbiDistributionListsObjects(Integer relId, SbiObjects sbiObjects, SbiDistributionList sbiDistributionList, String xml) {
        this.relId = relId;
        this.sbiObjects = sbiObjects;
        this.sbiDistributionList = sbiDistributionList;
        this.xml = xml;
    }
    

   
    // Property accessors

    /**
     * Gets the rel id.
     * 
     * @return the rel id
     */
    public Integer getRelId() {
        return this.relId;
    }
    
    /**
     * Sets the rel id.
     * 
     * @param relId the new rel id
     */
    public void setRelId(Integer relId) {
        this.relId = relId;
    }

    /**
     * Gets the sbi objects.
     * 
     * @return the sbi objects
     */
    public SbiObjects getSbiObjects() {
        return this.sbiObjects;
    }
    
    /**
     * Sets the sbi objects.
     * 
     * @param sbiObjects the new sbi objects
     */
    public void setSbiObjects(SbiObjects sbiObjects) {
        this.sbiObjects = sbiObjects;
    }

    /**
     * Gets the sbi distribution list.
     * 
     * @return the sbi distribution list
     */
    public SbiDistributionList getSbiDistributionList() {
        return this.sbiDistributionList;
    }
    
    /**
     * Sets the sbi distribution list.
     * 
     * @param sbiDistributionList the new sbi distribution list
     */
    public void setSbiDistributionList(SbiDistributionList sbiDistributionList) {
        this.sbiDistributionList = sbiDistributionList;
    }

    /**
     * Gets the xml.
     * 
     * @return the xml
     */
    public String getXml() {
        return this.xml;
    }
    
    /**
     * Sets the xml.
     * 
     * @param xml the new xml
     */
    public void setXml(String xml) {
        this.xml = xml;
    }
   








}
