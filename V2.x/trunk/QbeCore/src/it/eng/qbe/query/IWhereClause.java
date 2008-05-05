/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.qbe.query;

import java.io.Serializable;
import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Interface IWhereClause.
 */
public interface IWhereClause extends  Serializable {

	/**
	 * Gets the where fields.
	 * 
	 * @return the where fields
	 */
	public List getWhereFields();
	
	/**
	 * Sets the where fields.
	 * 
	 * @param aList the new where fields
	 */
	public void setWhereFields(List aList);
	
	/**
	 * Adds the where field.
	 * 
	 * @param whereField the where field
	 */
	public void addWhereField(IWhereField whereField);
	
	/**
	 * Del where field.
	 * 
	 * @param fieldId the field id
	 */
	public void delWhereField(String fieldId);
	
	/**
	 * Move up.
	 * 
	 * @param fieldId the field id
	 */
	public void moveUp(String fieldId);
	
	/**
	 * Move down.
	 * 
	 * @param fieldId the field id
	 */
	public void moveDown(String fieldId);
	
	/**
	 * Gets the copy.
	 * 
	 * @return the copy
	 */
	public IWhereClause getCopy();
}
