/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2010 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.meta.model.business;

import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Business Column</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessColumn#getPhysicalColumn <em>Physical Column</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessColumn#getTable <em>Table</em>}</li>
 * </ul>
 * </p>
 *
 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessColumn()
 * @model
 * @generated
 */
public interface BusinessColumn extends ModelObject {
	/**
	 * Returns the value of the '<em><b>Physical Column</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Physical Column</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Physical Column</em>' reference.
	 * @see #setPhysicalColumn(PhysicalColumn)
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessColumn_PhysicalColumn()
	 * @model required="true"
	 * @generated
	 */
	PhysicalColumn getPhysicalColumn();

	/**
	 * Sets the value of the '{@link it.eng.spagobi.meta.model.business.BusinessColumn#getPhysicalColumn <em>Physical Column</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Physical Column</em>' reference.
	 * @see #getPhysicalColumn()
	 * @generated
	 */
	void setPhysicalColumn(PhysicalColumn value);

	/**
	 * Returns the value of the '<em><b>Table</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessColumnSet#getColumns <em>Columns</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Table</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Table</em>' container reference.
	 * @see #setTable(BusinessColumnSet)
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessColumn_Table()
	 * @see it.eng.spagobi.meta.model.business.BusinessColumnSet#getColumns
	 * @model opposite="columns" required="true" transient="false"
	 * @generated
	 */
	BusinessColumnSet getTable();

	/**
	 * Sets the value of the '{@link it.eng.spagobi.meta.model.business.BusinessColumn#getTable <em>Table</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Table</em>' container reference.
	 * @see #getTable()
	 * @generated
	 */
	void setTable(BusinessColumnSet value);

	// =========================================================================
	// Utility methods
	// =========================================================================
	
	boolean isIdentifier();
	
	boolean isPartOfCompositeIdentifier();
	
} // BusinessColumn
