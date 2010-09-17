/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model;

import it.eng.spagobi.meta.model.business.BusinessModel;

import it.eng.spagobi.meta.model.physical.PhysicalModel;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Model</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.Model#getPhysicalModels <em>Physical Models</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.Model#getBusinessModels <em>Business Models</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.Model#getPropertyTypes <em>Property Types</em>}</li>
 * </ul>
 * </p>
 *
 * @see it.eng.spagobi.meta.model.ModelPackage#getModel()
 * @model
 * @generated
 */
public interface Model extends ModelObject {
	/**
	 * Returns the value of the '<em><b>Physical Models</b></em>' reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.physical.PhysicalModel}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.physical.PhysicalModel#getParentModel <em>Parent Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Physical Models</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Physical Models</em>' reference list.
	 * @see it.eng.spagobi.meta.model.ModelPackage#getModel_PhysicalModels()
	 * @see it.eng.spagobi.meta.model.physical.PhysicalModel#getParentModel
	 * @model opposite="parentModel"
	 * @generated
	 */
	EList<PhysicalModel> getPhysicalModels();

	/**
	 * Returns the value of the '<em><b>Business Models</b></em>' reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.business.BusinessModel}.
	 * It is bidirectional and its opposite is '{@link it.eng.spagobi.meta.model.business.BusinessModel#getParentModel <em>Parent Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Business Models</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Business Models</em>' reference list.
	 * @see it.eng.spagobi.meta.model.ModelPackage#getModel_BusinessModels()
	 * @see it.eng.spagobi.meta.model.business.BusinessModel#getParentModel
	 * @model opposite="parentModel"
	 * @generated
	 */
	EList<BusinessModel> getBusinessModels();

	/**
	 * Returns the value of the '<em><b>Property Types</b></em>' reference list.
	 * The list contents are of type {@link it.eng.spagobi.meta.model.ModelPropertyType}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Property Types</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Property Types</em>' reference list.
	 * @see it.eng.spagobi.meta.model.ModelPackage#getModel_PropertyTypes()
	 * @model
	 * @generated
	 */
	EList<ModelPropertyType> getPropertyTypes();
	
	// =========================================================================
	// Utility methods
	// =========================================================================
	
	ModelPropertyType getPropertyType(String name);

} // Model
