/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.business.impl;

import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.ModelPackage;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessModelPackage;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;

import it.eng.spagobi.meta.model.impl.ModelObjectImpl;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.notify.NotificationChain;
import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.util.EObjectContainmentWithInverseEList;
import org.eclipse.emf.ecore.impl.EObjectImpl;

import org.eclipse.emf.ecore.util.EObjectResolvingEList;
import org.eclipse.emf.ecore.util.EObjectWithInverseResolvingEList;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.util.InternalEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Business Model</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getParentModel <em>Parent Model</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getPhysicalModel <em>Physical Model</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getTables <em>Tables</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getRelationships <em>Relationships</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class BusinessModelImpl extends ModelObjectImpl implements BusinessModel {
	/**
	 * The cached value of the '{@link #getPhysicalModel() <em>Physical Model</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPhysicalModel()
	 * @generated
	 * @ordered
	 */
	protected PhysicalModel physicalModel;

	/**
	 * The cached value of the '{@link #getTables() <em>Tables</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTables()
	 * @generated
	 * @ordered
	 */
	protected EList<BusinessTable> tables;

	/**
	 * The cached value of the '{@link #getRelationships() <em>Relationships</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRelationships()
	 * @generated
	 * @ordered
	 */
	protected EList<BusinessRelationship> relationships;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected BusinessModelImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BusinessModelPackage.Literals.BUSINESS_MODEL;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Model getParentModel() {
		if (eContainerFeatureID() != BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL) return null;
		return (Model)eContainer();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetParentModel(Model newParentModel, NotificationChain msgs) {
		msgs = eBasicSetContainer((InternalEObject)newParentModel, BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL, msgs);
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setParentModel(Model newParentModel) {
		if (newParentModel != eInternalContainer() || (eContainerFeatureID() != BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL && newParentModel != null)) {
			if (EcoreUtil.isAncestor(this, newParentModel))
				throw new IllegalArgumentException("Recursive containment not allowed for " + toString());
			NotificationChain msgs = null;
			if (eInternalContainer() != null)
				msgs = eBasicRemoveFromContainer(msgs);
			if (newParentModel != null)
				msgs = ((InternalEObject)newParentModel).eInverseAdd(this, ModelPackage.MODEL__BUSINESS_MODELS, Model.class, msgs);
			msgs = basicSetParentModel(newParentModel, msgs);
			if (msgs != null) msgs.dispatch();
		}
		else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL, newParentModel, newParentModel));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalModel getPhysicalModel() {
		if (physicalModel != null && physicalModel.eIsProxy()) {
			InternalEObject oldPhysicalModel = (InternalEObject)physicalModel;
			physicalModel = (PhysicalModel)eResolveProxy(oldPhysicalModel);
			if (physicalModel != oldPhysicalModel) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL, oldPhysicalModel, physicalModel));
			}
		}
		return physicalModel;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalModel basicGetPhysicalModel() {
		return physicalModel;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setPhysicalModel(PhysicalModel newPhysicalModel) {
		PhysicalModel oldPhysicalModel = physicalModel;
		physicalModel = newPhysicalModel;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL, oldPhysicalModel, physicalModel));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<BusinessTable> getTables() {
		if (tables == null) {
			tables = new EObjectContainmentWithInverseEList<BusinessTable>(BusinessTable.class, this, BusinessModelPackage.BUSINESS_MODEL__TABLES, BusinessModelPackage.BUSINESS_TABLE__MODEL);
		}
		return tables;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<BusinessRelationship> getRelationships() {
		if (relationships == null) {
			relationships = new EObjectContainmentWithInverseEList<BusinessRelationship>(BusinessRelationship.class, this, BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS, BusinessModelPackage.BUSINESS_RELATIONSHIP__MODEL);
		}
		return relationships;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public NotificationChain eInverseAdd(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				if (eInternalContainer() != null)
					msgs = eBasicRemoveFromContainer(msgs);
				return basicSetParentModel((Model)otherEnd, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				return ((InternalEList<InternalEObject>)(InternalEList<?>)getTables()).basicAdd(otherEnd, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				return ((InternalEList<InternalEObject>)(InternalEList<?>)getRelationships()).basicAdd(otherEnd, msgs);
		}
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				return basicSetParentModel(null, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				return ((InternalEList<?>)getTables()).basicRemove(otherEnd, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				return ((InternalEList<?>)getRelationships()).basicRemove(otherEnd, msgs);
		}
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eBasicRemoveFromContainerFeature(NotificationChain msgs) {
		switch (eContainerFeatureID()) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				return eInternalContainer().eInverseRemove(this, ModelPackage.MODEL__BUSINESS_MODELS, Model.class, msgs);
		}
		return super.eBasicRemoveFromContainerFeature(msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				return getParentModel();
			case BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL:
				if (resolve) return getPhysicalModel();
				return basicGetPhysicalModel();
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				return getTables();
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				return getRelationships();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				setParentModel((Model)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL:
				setPhysicalModel((PhysicalModel)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				getTables().clear();
				getTables().addAll((Collection<? extends BusinessTable>)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				getRelationships().clear();
				getRelationships().addAll((Collection<? extends BusinessRelationship>)newValue);
				return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				setParentModel((Model)null);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL:
				setPhysicalModel((PhysicalModel)null);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				getTables().clear();
				return;
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				getRelationships().clear();
				return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_MODEL__PARENT_MODEL:
				return getParentModel() != null;
			case BusinessModelPackage.BUSINESS_MODEL__PHYSICAL_MODEL:
				return physicalModel != null;
			case BusinessModelPackage.BUSINESS_MODEL__TABLES:
				return tables != null && !tables.isEmpty();
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				return relationships != null && !relationships.isEmpty();
		}
		return super.eIsSet(featureID);
	}

	// =========================================================================
	// Utility methods
	// =========================================================================
	
	
	@Override
	public BusinessTable getTable(String name) {
		for(int i = 0; i < getTables().size(); i++) {
			if( name.equals( getTables().get(i).getName() ) ) {
				return getTables().get(i);
			}
		}
		return null;
	}

	@Override
	public BusinessTable getTable(PhysicalTable physicalTable) {
		for(int i = 0; i < getTables().size(); i++) {
			if( physicalTable.equals( getTables().get(i).getPhysicalTable() ) ) {
				return getTables().get(i);
			}
		}
		return null;
	}

} //BusinessModelImpl
