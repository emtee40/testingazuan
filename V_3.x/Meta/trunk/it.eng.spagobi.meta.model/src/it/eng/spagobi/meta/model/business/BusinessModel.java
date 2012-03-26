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

import java.util.List;

import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Business Model</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getParentModel <em>Parent Model</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getPhysicalModel <em>Physical Model</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getTables <em>Tables</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getRelationships <em>Relationships</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getIdentifiers <em>Identifiers</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getDomains <em>Domains</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.BusinessModel#getJoinRelationships <em>Join Relationships</em>}</li>
 * </ul>
 * </p>
 *
 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel()
 * @model
 * @generated
 */
public interface BusinessModel extends ModelObject {
	/**
	 * Returns the value of the '<em><b>Parent Model</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.Model#getBusinessModels <em>Business Models</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Parent Model</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parent Model</em>' container reference.
	 * @see #setParentModel(Model)
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_ParentModel()
	 * @see it.eng.spagobi.meta.model.Model#getBusinessModels
	 * @model opposite="businessModels" required="true" transient="false"
	 * @generated
	 */
	Model getParentModel();

	/**
	 * Sets the value of the '{@link it.eng.spagobi.meta.model.business.BusinessModel#getParentModel <em>Parent Model</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Parent Model</em>' container reference.
	 * @see #getParentModel()
	 * @generated
	 */
	void setParentModel(Model value);

	/**
	 * Returns the value of the '<em><b>Physical Model</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Physical Model</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Physical Model</em>' reference.
	 * @see #setPhysicalModel(PhysicalModel)
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_PhysicalModel()
	 * @model required="true"
	 * @generated
	 */
	PhysicalModel getPhysicalModel();

	/**
	 * Sets the value of the '{@link it.eng.spagobi.meta.model.business.BusinessModel#getPhysicalModel <em>Physical Model</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Physical Model</em>' reference.
	 * @see #getPhysicalModel()
	 * @generated
	 */
	void setPhysicalModel(PhysicalModel value);

	/**
	 * Returns the value of the '<em><b>Tables</b></em>' containment reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessColumnSet}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessColumnSet#getModel <em>Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tables</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tables</em>' containment reference list.
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_Tables()
	 * @see it.eng.spagobi.meta.model.business.BusinessColumnSet#getModel
	 * @model opposite="model" containment="true"
	 * @generated
	 */
	EList<BusinessColumnSet> getTables();

	/**
	 * Returns the value of the '<em><b>Relationships</b></em>' containment reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessRelationship}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessRelationship#getModel <em>Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Relationships</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Relationships</em>' containment reference list.
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_Relationships()
	 * @see it.eng.spagobi.meta.model.business.BusinessRelationship#getModel
	 * @model opposite="model" containment="true"
	 * @generated
	 */
	EList<BusinessRelationship> getRelationships();
	
	/**
	 * Returns the value of the '<em><b>Identifiers</b></em>' containment reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessIdentifier}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessIdentifier#getModel <em>Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Identifiers</em>' containment reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Identifiers</em>' containment reference list.
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_Identifiers()
	 * @see it.eng.spagobi.meta.model.business.BusinessIdentifier#getModel
	 * @model opposite="model" containment="true"
	 * @generated
	 */
	EList<BusinessIdentifier> getIdentifiers();

	/**
	 * Returns the value of the '<em><b>Domains</b></em>' containment reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessDomain}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessDomain#getModel <em>Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Domains</em>' containment reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Domains</em>' containment reference list.
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_Domains()
	 * @see it.eng.spagobi.meta.model.business.BusinessDomain#getModel
	 * @model opposite="model" containment="true"
	 * @generated
	 */
	EList<BusinessDomain> getDomains();

	/**
	 * Returns the value of the '<em><b>Join Relationships</b></em>' containment reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessViewInnerJoinRelationship}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessViewInnerJoinRelationship#getModel <em>Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Join Relationships</em>' containment reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Join Relationships</em>' containment reference list.
	 * @see it.eng.spagobi.meta.model.business.BusinessModelPackage#getBusinessModel_JoinRelationships()
	 * @see it.eng.spagobi.meta.model.business.BusinessViewInnerJoinRelationship#getModel
	 * @model opposite="model" containment="true"
	 * @generated
	 */
	EList<BusinessViewInnerJoinRelationship> getJoinRelationships();

	// =========================================================================
	// Utility methods
	// =========================================================================
	
	BusinessIdentifier getIdentifier(BusinessColumnSet table);
	
	/**
	 * @return all the the business tables contained in the model
	 */
	List<BusinessTable> getBusinessTables();
	
	/**
	 * @return all the the business views contained in the model
	 */
	List<BusinessView> getBusinessViews();
	
	
	/**
	 * @return the business table with the given name
	 */
	BusinessTable getBusinessTable(String name);
	
	boolean deleteBusinessTable(String name);
	
	/**
	 * @deprecated need a fix. To one physicalTable can be associated multiple businessTables
	 * 
	 * @return the business table associated to the given physical table
	 */
	BusinessTable getBusinessTable(PhysicalTable physicalTable);
	
	/**
	 * Precondition: Note that name must be unique!
	 * @return the the business column set(table or view) set with the given name.
	 */
	BusinessColumnSet getTable(String name);
	
	

} // BusinessModel
