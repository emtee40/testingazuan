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


/**
 * SbiObjFunc generated by hbm2java
 */
public class SbiObjFunc  implements java.io.Serializable, Comparable {

    // Fields    

     private SbiObjFuncId id;
     private Integer prog;


    // Constructors

    /** default constructor */
    public SbiObjFunc() {
    }
    
    /** constructor with id */
    public SbiObjFunc(SbiObjFuncId id) {
        this.id = id;
    }
   
    
    

    // Property accessors

    /**
     * 
     */
    public SbiObjFuncId getId() {
        return this.id;
    }
    
    public void setId(SbiObjFuncId id) {
        this.id = id;
    }

    /**
     * 
     */
    public Integer getProg() {
        return this.prog;
    }
    
    public void setProg(Integer prog) {
        this.prog = prog;
    }

	public int compareTo(Object obj2) {
		SbiObjFunc sbiObjFunc2 = (SbiObjFunc) obj2;
		SbiObjects sbiObj1 = this.getId().getSbiObjects();
		SbiObjects sbiObj2 = sbiObjFunc2.getId().getSbiObjects();
		String sbiObjName1 = sbiObj1.getName();
		String sbiObjName2 = sbiObj2.getName();
		return sbiObjName1.compareTo(sbiObjName2);
	}

}