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
 * SbiParuseCk generated by hbm2java
 */
public class SbiParuseCk  implements java.io.Serializable {

    // Fields    

     private SbiParuseCkId id;
     private Integer prog;


    // Constructors

    /** default constructor */
    public SbiParuseCk() {
    }
    
    /** constructor with id */
    public SbiParuseCk(SbiParuseCkId id) {
        this.id = id;
    }
   
    
    

    // Property accessors

    /**
     * 
     */
    public SbiParuseCkId getId() {
        return this.id;
    }
    
    public void setId(SbiParuseCkId id) {
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



}