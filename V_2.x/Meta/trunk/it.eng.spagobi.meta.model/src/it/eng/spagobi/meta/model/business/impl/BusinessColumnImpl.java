/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.business.impl;

import it.eng.spagobi.meta.commons.JDBCTypeMapper;
import it.eng.spagobi.meta.exception.ModelObjectNotFoundException;
import it.eng.spagobi.meta.exception.ModelRuntimeException;
import it.eng.spagobi.meta.initializer.BusinessModelDefaultPropertiesInitializer;
import it.eng.spagobi.meta.model.ModelPropertyType;
import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;
import it.eng.spagobi.meta.model.business.BusinessIdentifier;
import it.eng.spagobi.meta.model.business.BusinessModelPackage;

import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.impl.ModelObjectImpl;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalPrimaryKey;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.notify.NotificationChain;
import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.impl.EObjectImpl;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Business Column</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessColumnImpl#getPhysicalColumn <em>Physical Column</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.business.impl.BusinessColumnImpl#getTable <em>Table</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class BusinessColumnImpl extends ModelObjectImpl implements BusinessColumn {
	/**
	 * The cached value of the '{@link #getPhysicalColumn() <em>Physical Column</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPhysicalColumn()
	 * @generated
	 * @ordered
	 */
	protected PhysicalColumn physicalColumn;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected BusinessColumnImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BusinessModelPackage.Literals.BUSINESS_COLUMN;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalColumn getPhysicalColumn() {
		if (physicalColumn != null && physicalColumn.eIsProxy()) {
			InternalEObject oldPhysicalColumn = (InternalEObject)physicalColumn;
			physicalColumn = (PhysicalColumn)eResolveProxy(oldPhysicalColumn);
			if (physicalColumn != oldPhysicalColumn) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN, oldPhysicalColumn, physicalColumn));
			}
		}
		return physicalColumn;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalColumn basicGetPhysicalColumn() {
		return physicalColumn;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setPhysicalColumn(PhysicalColumn newPhysicalColumn) {
		PhysicalColumn oldPhysicalColumn = physicalColumn;
		physicalColumn = newPhysicalColumn;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN, oldPhysicalColumn, physicalColumn));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessColumnSet getTable() {
		if (eContainerFeatureID() != BusinessModelPackage.BUSINESS_COLUMN__TABLE) return null;
		return (BusinessColumnSet)eContainer();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetTable(BusinessColumnSet newTable, NotificationChain msgs) {
		msgs = eBasicSetContainer((InternalEObject)newTable, BusinessModelPackage.BUSINESS_COLUMN__TABLE, msgs);
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTable(BusinessColumnSet newTable) {
		if (newTable != eInternalContainer() || (eContainerFeatureID() != BusinessModelPackage.BUSINESS_COLUMN__TABLE && newTable != null)) {
			if (EcoreUtil.isAncestor(this, newTable))
				throw new IllegalArgumentException("Recursive containment not allowed for " + toString());
			NotificationChain msgs = null;
			if (eInternalContainer() != null)
				msgs = eBasicRemoveFromContainer(msgs);
			if (newTable != null)
				msgs = ((InternalEObject)newTable).eInverseAdd(this, BusinessModelPackage.BUSINESS_COLUMN_SET__COLUMNS, BusinessColumnSet.class, msgs);
			msgs = basicSetTable(newTable, msgs);
			if (msgs != null) msgs.dispatch();
		}
		else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, BusinessModelPackage.BUSINESS_COLUMN__TABLE, newTable, newTable));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseAdd(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				if (eInternalContainer() != null)
					msgs = eBasicRemoveFromContainer(msgs);
				return basicSetTable((BusinessColumnSet)otherEnd, msgs);
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
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				return basicSetTable(null, msgs);
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
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				return eInternalContainer().eInverseRemove(this, BusinessModelPackage.BUSINESS_COLUMN_SET__COLUMNS, BusinessColumnSet.class, msgs);
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
			case BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN:
				if (resolve) return getPhysicalColumn();
				return basicGetPhysicalColumn();
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				return getTable();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
			case BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN:
				setPhysicalColumn((PhysicalColumn)newValue);
				return;
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				setTable((BusinessColumnSet)newValue);
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
			case BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN:
				setPhysicalColumn((PhysicalColumn)null);
				return;
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				setTable((BusinessColumnSet)null);
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
			case BusinessModelPackage.BUSINESS_COLUMN__PHYSICAL_COLUMN:
				return physicalColumn != null;
			case BusinessModelPackage.BUSINESS_COLUMN__TABLE:
				return getTable() != null;
		}
		return super.eIsSet(featureID);
	}
	
	// =========================================================================
	// Utility methods
	// =========================================================================
	
	@Override
	public EList<ModelPropertyType> getPropertyTypes() {
		return getTable().getModel().getParentModel().getPropertyTypes();
	}

	@Override
	public boolean isIdentifier() {
		
		BusinessIdentifier identifier;
		
		identifier = getTable().getIdentifier();
		
		if(identifier == null) return false;
		
		for(BusinessColumn column :  identifier.getColumns() ) {
			if(this.equals(column)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public boolean isPartOfCompositeIdentifier() {
		if(isIdentifier() == false) return false;
		return (getTable().getIdentifier().getColumns().size() > 1);
	}
	
} //BusinessColumnImpl
