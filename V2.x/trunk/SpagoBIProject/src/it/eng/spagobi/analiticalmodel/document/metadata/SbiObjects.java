/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.analiticalmodel.document.metadata;

import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.engines.config.metadata.SbiEngines;
import it.eng.spagobi.tools.dataset.metadata.SbiDataSet;
import it.eng.spagobi.tools.datasource.metadata.SbiDataSource;

import java.util.*;




/**
 * SbiObjects generated by hbm2java
 */
public class SbiObjects  implements java.io.Serializable {

    // Fields    

     private Integer biobjId;
     private SbiEngines sbiEngines;
     private SbiDomains stateConsideration;
     private SbiDomains state;
     private SbiDomains execMode;
     private SbiDomains objectType;
     private SbiDataSource dataSource;
     private String objectTypeCode;
     private Short encrypt;
     private Short visible;
     private String stateCode;
     private Short schedFl;
     private String execModeCode;
     private String stateConsiderationCode;
     private String label;
     private String name;
     private String descr;
     private String path;
     private String relName;
     private Set sbiObjPars;
     private Set sbiObjFuncs;
     private Set sbiObjStates;
     private String uuid;
     // add this properties for metadata
     private String extendedDescription=null;
     private String objectve=null;
     private String language=null;
     private String keywords=null;
     private Date creationDate=null;
     private String creationUser=null;
     
     private SbiDataSet dataSet=null;
     
    // Constructors

	public String getExtendedDescription() {
        return extendedDescription;
    }

    public void setExtendedDescription(String extendedDescription) {
        this.extendedDescription = extendedDescription;
    }

    public String getObjectve() {
        return objectve;
    }

    public void setObjectve(String objectve) {
        this.objectve = objectve;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
    
    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getCreationUser() {
        return creationUser;
    }

    public void setCreationUser(String creationUser) {
        this.creationUser = creationUser;
    }

	/** default constructor */
    public SbiObjects() {
    }
    
    /** constructor with id */
    public SbiObjects(Integer biobjId) {
        this.biobjId = biobjId;
    }
   
    
    

    // Property accessors

	  public String getUuid() {
			return uuid;
		}

		public void setUuid(String uuid) {
			this.uuid = uuid;
		}
	
    /**
     * 
     */
    public Integer getBiobjId() {
        return this.biobjId;
    }
    
    public void setBiobjId(Integer biobjId) {
        this.biobjId = biobjId;
    }

    /**
     * 
     */
    public SbiEngines getSbiEngines() {
        return this.sbiEngines;
    }
    
    public void setSbiEngines(SbiEngines sbiEngines) {
        this.sbiEngines = sbiEngines;
    }

    /**
     * 
     */
    public SbiDomains getStateConsideration() {
        return this.stateConsideration;
    }
    
    public void setStateConsideration(SbiDomains sbiDomains) {
        this.stateConsideration = sbiDomains;
    }

    /**
     * 
     */
    public SbiDomains getState() {
        return this.state;
    }
    
    public void setState(SbiDomains sbiDomains_1) {
        this.state = sbiDomains_1;
    }

    /**
     * 
     */
    public SbiDomains getExecMode() {
        return this.execMode;
    }
    
    public void setExecMode(SbiDomains sbiDomains_2) {
        this.execMode = sbiDomains_2;
    }

    /**
     * 
     */
    public SbiDomains getObjectType() {
        return this.objectType;
    }
    
    public void setObjectType(SbiDomains sbiDomains_3) {
        this.objectType = sbiDomains_3;
    }

    /**
     * 
     */
    public String getObjectTypeCode() {
        return this.objectTypeCode;
    }
    
    public void setObjectTypeCode(String biobjTypeCd) {
        this.objectTypeCode = biobjTypeCd;
    }

    /**
     * 
     */
    public Short getEncrypt() {
        return this.encrypt;
    }
    
    public void setEncrypt(Short encrypt) {
        this.encrypt = encrypt;
    }
    
    /**
     * 
     */
    public Short getVisible() {
        return this.visible;
    }
    
    public void setVisible(Short visible) {
        this.visible = visible;
    }
    
    
    /**
     * 
     */
    public String getStateCode() {
        return this.stateCode;
    }
    
    public void setStateCode(String stateCd) {
        this.stateCode = stateCd;
    }

    /**
     * 
     */
    public Short getSchedFl() {
        return this.schedFl;
    }
    
    public void setSchedFl(Short schedFl) {
        this.schedFl = schedFl;
    }

    /**
     * 
     */
    public String getExecModeCode() {
        return this.execModeCode;
    }
    
    public void setExecModeCode(String execModeCd) {
        this.execModeCode = execModeCd;
    }

    /**
     * 
     */
    public String getStateConsiderationCode() {
        return this.stateConsiderationCode;
    }
    
    public void setStateConsiderationCode(String stateConsCd) {
        this.stateConsiderationCode = stateConsCd;
    }

    /**
     * 
     */
    public String getLabel() {
        return this.label;
    }
    
    public void setLabel(String label) {
        this.label = label;
    }

    /**
     * 
     */
    public String getDescr() {
        return this.descr;
    }
    
    public void setDescr(String descr) {
        this.descr = descr;
    }

    /**
     * 
     */
    public String getPath() {
        return this.path;
    }
    
    public void setPath(String path) {
        this.path = path;
    }

    /**
     * 
     */
    public String getRelName() {
        return this.relName;
    }
    
    public void setRelName(String relName) {
        this.relName = relName;
    }

    /**
     * 
     */
    public Set getSbiObjPars() {
        return this.sbiObjPars;
    }
    
    public void setSbiObjPars(Set sbiObjPars) {
        this.sbiObjPars = sbiObjPars;
    }

    /**
     * 
     */
    public Set getSbiObjFuncs() {
        return this.sbiObjFuncs;
    }
    
    public void setSbiObjFuncs(Set sbiObjFuncs) {
        this.sbiObjFuncs = sbiObjFuncs;
    }

    /**
     * 
     */
    public Set getSbiObjStates() {
        return this.sbiObjStates;
    }
    
    public void setSbiObjStates(Set sbiObjStates) {
        this.sbiObjStates = sbiObjStates;
    }

    public SbiDataSource getDataSource() {
        return this.dataSource;
    }
    
    public void setDataSource(SbiDataSource sbiDataSource) {
        this.dataSource = sbiDataSource;
    }

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public SbiDataSet getDataSet() {
	    return dataSet;
	}

	public void setDataSet(SbiDataSet dataSet) {
	    this.dataSet = dataSet;
	}
}