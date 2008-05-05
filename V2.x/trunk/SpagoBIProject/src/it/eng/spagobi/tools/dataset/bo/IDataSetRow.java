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



package it.eng.spagobi.tools.dataset.bo;

import java.util.Iterator;
import java.util.List;

/**
 * @author Angelo Bernabei
 *         angelo.bernabei@eng.it
 */
public interface IDataSetRow {

    /**
     * Return the List of elements
     * @return List of IField
     */
    List getList();
    
    /**
     * Return the single element of the i position
     * @param i int
     * @return String
     */
    IField getElement(int i);
    
    /**
     * Return an Iterator for scroll the element of a row.
     * @return Iterator of IField
     */
    Iterator getIterator();
}
