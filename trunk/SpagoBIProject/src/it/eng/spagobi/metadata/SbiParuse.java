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
package it.eng.spagobi.metadata;

import java.util.*;




/**
 * SbiParuse generated by hbm2java
 */
public class SbiParuse  implements java.io.Serializable {

    // Fields    

     private Integer useId;
     private SbiParameters sbiParameters;
     private SbiLov sbiLov;
     private String label;
     private String name;
     private String descr;
     private Set sbiParuseDets;
     private Set sbiParuseCks;
     private String selectionType;
     private Integer multivalue;
     private Integer manualInput;
    


    // Constructors

    /** default constructor */
    public SbiParuse() {
    }
    
    /** constructor with id */
    public SbiParuse(Integer useId) {
        this.useId = useId;
    }
   
    
    

    // Property accessors

    /**
     * 
     */
    public Integer getUseId() {
        return this.useId;
    }
    
    public void setUseId(Integer useId) {
        this.useId = useId;
    }

    /**
     * 
     */
    public SbiParameters getSbiParameters() {
        return this.sbiParameters;
    }
    
    public void setSbiParameters(SbiParameters sbiParameters) {
        this.sbiParameters = sbiParameters;
    }

    /**
     * 
     */
    public SbiLov getSbiLov() {
        return this.sbiLov;
    }
    
    public void setSbiLov(SbiLov sbiLov) {
        this.sbiLov = sbiLov;
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
    public Set getSbiParuseDets() {
        return this.sbiParuseDets;
    }
    
    public void setSbiParuseDets(Set sbiParuseDets) {
        this.sbiParuseDets = sbiParuseDets;
    }

    /**
     * 
     */
    public Set getSbiParuseCks() {
        return this.sbiParuseCks;
    }
    
    public void setSbiParuseCks(Set sbiParuseCks) {
        this.sbiParuseCks = sbiParuseCks;
    }



	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getManualInput() {
		return manualInput;
	}
	/**
	 * @param manualInput The manualInput to set.
	 */
	public void setManualInput(Integer manualInput) {
		this.manualInput = manualInput;
	}
	
	public String getSelectionType() {
		return selectionType;
	}

	public void setSelectionType(String selectionType) {
		this.selectionType = selectionType;
	}

	public Integer getMultivalue() {
		return multivalue;
	}

	public void setMultivalue(Integer multivalue) {
		this.multivalue = multivalue;
	}

	
}