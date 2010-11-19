/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.business.impl;

import it.eng.spagobi.meta.exception.ModelObjectNotFoundException;
import it.eng.spagobi.meta.exception.ModelRuntimeException;
import it.eng.spagobi.meta.model.Model;
import it.eng.spagobi.meta.model.ModelPackage;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessDomain;
import it.eng.spagobi.meta.model.ModelPropertyType;
import it.eng.spagobi.meta.model.business.BusinessIdentifier;
import it.eng.spagobi.meta.model.business.BusinessModel;
import it.eng.spagobi.meta.model.business.BusinessModelPackage;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;

import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.impl.ModelObjectImpl;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalPrimaryKey;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.Collection;
import java.util.Iterator;

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
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getIdentifiers <em>Identifiers</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessModelImpl#getDomains <em>Domains</em>}</li>
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
	protected EList<BusinessColumnSet> tables;

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
	 * The cached value of the '{@link #getIdentifiers() <em>Identifiers</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getIdentifiers()
	 * @generated
	 * @ordered
	 */
	protected EList<BusinessIdentifier> identifiers;

	/**
	 * The cached value of the '{@link #getDomains() <em>Domains</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDomains()
	 * @generated
	 * @ordered
	 */
	protected EList<BusinessDomain> domains;

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
	public EList<BusinessColumnSet> getTables() {
		if (tables == null) {
			tables = new EObjectContainmentWithInverseEList<BusinessColumnSet>(BusinessColumnSet.class, this, BusinessModelPackage.BUSINESS_MODEL__TABLES, BusinessModelPackage.BUSINESS_COLUMN_SET__MODEL);
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
	public EList<BusinessIdentifier> getIdentifiers() {
		if (identifiers == null) {
			identifiers = new EObjectContainmentWithInverseEList<BusinessIdentifier>(BusinessIdentifier.class, this, BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS, BusinessModelPackage.BUSINESS_IDENTIFIER__MODEL);
		}
		return identifiers;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<BusinessDomain> getDomains() {
		if (domains == null) {
			domains = new EObjectContainmentWithInverseEList<BusinessDomain>(BusinessDomain.class, this, BusinessModelPackage.BUSINESS_MODEL__DOMAINS, BusinessModelPackage.BUSINESS_DOMAIN__MODEL);
		}
		return domains;
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
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				return ((InternalEList<InternalEObject>)(InternalEList<?>)getIdentifiers()).basicAdd(otherEnd, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				return ((InternalEList<InternalEObject>)(InternalEList<?>)getDomains()).basicAdd(otherEnd, msgs);
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
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				return ((InternalEList<?>)getIdentifiers()).basicRemove(otherEnd, msgs);
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				return ((InternalEList<?>)getDomains()).basicRemove(otherEnd, msgs);
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
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				return getIdentifiers();
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				return getDomains();
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
				getTables().addAll((Collection<? extends BusinessColumnSet>)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__RELATIONSHIPS:
				getRelationships().clear();
				getRelationships().addAll((Collection<? extends BusinessRelationship>)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				getIdentifiers().clear();
				getIdentifiers().addAll((Collection<? extends BusinessIdentifier>)newValue);
				return;
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				getDomains().clear();
				getDomains().addAll((Collection<? extends BusinessDomain>)newValue);
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
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				getIdentifiers().clear();
				return;
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				getDomains().clear();
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
			case BusinessModelPackage.BUSINESS_MODEL__IDENTIFIERS:
				return identifiers != null && !identifiers.isEmpty();
			case BusinessModelPackage.BUSINESS_MODEL__DOMAINS:
				return domains != null && !domains.isEmpty();
		}
		return super.eIsSet(featureID);
	}

	// =========================================================================
	// Utility methods
	// =========================================================================
	
	
	@Override
	public BusinessTable getTable(String name) {
		for(int i = 0; i < getTables().size(); i++) {
			if( (getTables().get(i) instanceof BusinessTable) 
					&& name.equals( getTables().get(i).getName() ) ) {
				return (BusinessTable)getTables().get(i);
			}
		}
		return null;
	}

	@Override
	public BusinessTable getTable(PhysicalTable physicalTable) {
		
		BusinessTable businessTable = null;;
		
		try {
			
			assert physicalTable != null : "Input parameter [physicalTable] cannot be null";
			
			for(int i = 0; i < getTables().size(); i++) {
				if( !(getTables().get(i) instanceof BusinessTable) )  continue;
				
				businessTable = (BusinessTable)getTables().get(i);
				assert businessTable.getPhysicalTable() != null : "attribute [physicalTable] of business table [" + businessTable.getName() + "] cannot be null";
				
				if( physicalTable.equals( businessTable.getPhysicalTable() ) ) {
					return businessTable;
				}
			}
		} catch(Throwable t) {
			throw new ModelObjectNotFoundException("Impossible to get business table", t);
		}
		
		return null;
	}
	

	@Override
	public EList<ModelPropertyType> getPropertyTypes() {
		return getParentModel().getPropertyTypes();
	}

	@Override
	public BusinessIdentifier getIdentifier(String name) {
		// assert name not null
		for(BusinessIdentifier identifier: getIdentifiers() ) {
			name.equals(identifier.getName());
		}
		return null;
	}

	@Override
	public BusinessIdentifier getIdentifier(BusinessColumnSet table) {
		// assert table not null
		for(BusinessIdentifier identifier: getIdentifiers() ) {
			if( table.equals(identifier.getTable()) ) {
				return identifier;
			}
		}
		
		return null;
	}

} //BusinessModelImpl
