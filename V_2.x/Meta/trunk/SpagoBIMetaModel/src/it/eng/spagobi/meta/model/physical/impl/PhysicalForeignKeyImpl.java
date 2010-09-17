/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.physical.impl;

import it.eng.spagobi.meta.model.impl.ModelObjectImpl;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalForeignKey;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalModelPackage;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.EObjectImpl;

import org.eclipse.emf.ecore.util.EObjectResolvingEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Physical Foreign Key</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getSourceName <em>Source Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getSourceTable <em>Source Table</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getSourceColumns <em>Source Columns</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getDestinationName <em>Destination Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getDestinationTable <em>Destination Table</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getDestinationColumns <em>Destination Columns</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.impl.PhysicalForeignKeyImpl#getModel <em>Model</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class PhysicalForeignKeyImpl extends ModelObjectImpl implements PhysicalForeignKey {
	/**
	 * The default value of the '{@link #getSourceName() <em>Source Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSourceName()
	 * @generated
	 * @ordered
	 */
	protected static final String SOURCE_NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getSourceName() <em>Source Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSourceName()
	 * @generated
	 * @ordered
	 */
	protected String sourceName = SOURCE_NAME_EDEFAULT;

	/**
	 * The cached value of the '{@link #getSourceTable() <em>Source Table</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSourceTable()
	 * @generated
	 * @ordered
	 */
	protected PhysicalTable sourceTable;

	/**
	 * The cached value of the '{@link #getSourceColumns() <em>Source Columns</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSourceColumns()
	 * @generated
	 * @ordered
	 */
	protected EList<PhysicalColumn> sourceColumns;

	/**
	 * The default value of the '{@link #getDestinationName() <em>Destination Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDestinationName()
	 * @generated
	 * @ordered
	 */
	protected static final String DESTINATION_NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDestinationName() <em>Destination Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDestinationName()
	 * @generated
	 * @ordered
	 */
	protected String destinationName = DESTINATION_NAME_EDEFAULT;

	/**
	 * The cached value of the '{@link #getDestinationTable() <em>Destination Table</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDestinationTable()
	 * @generated
	 * @ordered
	 */
	protected PhysicalTable destinationTable;

	/**
	 * The cached value of the '{@link #getDestinationColumns() <em>Destination Columns</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDestinationColumns()
	 * @generated
	 * @ordered
	 */
	protected EList<PhysicalColumn> destinationColumns;

	/**
	 * The cached value of the '{@link #getModel() <em>Model</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getModel()
	 * @generated
	 * @ordered
	 */
	protected PhysicalModel model;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected PhysicalForeignKeyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return PhysicalModelPackage.Literals.PHYSICAL_FOREIGN_KEY;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getSourceName() {
		return sourceName;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSourceName(String newSourceName) {
		String oldSourceName = sourceName;
		sourceName = newSourceName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_NAME, oldSourceName, sourceName));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable getSourceTable() {
		if (sourceTable != null && sourceTable.eIsProxy()) {
			InternalEObject oldSourceTable = (InternalEObject)sourceTable;
			sourceTable = (PhysicalTable)eResolveProxy(oldSourceTable);
			if (sourceTable != oldSourceTable) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE, oldSourceTable, sourceTable));
			}
		}
		return sourceTable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable basicGetSourceTable() {
		return sourceTable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetSourceTable(PhysicalTable newSourceTable, NotificationChain msgs) {
		PhysicalTable oldSourceTable = sourceTable;
		sourceTable = newSourceTable;
		if (eNotificationRequired()) {
			ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE, oldSourceTable, newSourceTable);
			if (msgs == null) msgs = notification; else msgs.add(notification);
		}
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSourceTable(PhysicalTable newSourceTable) {
		if (newSourceTable != sourceTable) {
			NotificationChain msgs = null;
			if (sourceTable != null)
				msgs = ((InternalEObject)sourceTable).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_TABLE__FOREIGN_KEYS, PhysicalTable.class, msgs);
			if (newSourceTable != null)
				msgs = ((InternalEObject)newSourceTable).eInverseAdd(this, PhysicalModelPackage.PHYSICAL_TABLE__FOREIGN_KEYS, PhysicalTable.class, msgs);
			msgs = basicSetSourceTable(newSourceTable, msgs);
			if (msgs != null) msgs.dispatch();
		}
		else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE, newSourceTable, newSourceTable));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PhysicalColumn> getSourceColumns() {
		if (sourceColumns == null) {
			sourceColumns = new EObjectResolvingEList<PhysicalColumn>(PhysicalColumn.class, this, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_COLUMNS);
		}
		return sourceColumns;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDestinationName() {
		return destinationName;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDestinationName(String newDestinationName) {
		String oldDestinationName = destinationName;
		destinationName = newDestinationName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_NAME, oldDestinationName, destinationName));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable getDestinationTable() {
		if (destinationTable != null && destinationTable.eIsProxy()) {
			InternalEObject oldDestinationTable = (InternalEObject)destinationTable;
			destinationTable = (PhysicalTable)eResolveProxy(oldDestinationTable);
			if (destinationTable != oldDestinationTable) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE, oldDestinationTable, destinationTable));
			}
		}
		return destinationTable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable basicGetDestinationTable() {
		return destinationTable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetDestinationTable(PhysicalTable newDestinationTable, NotificationChain msgs) {
		PhysicalTable oldDestinationTable = destinationTable;
		destinationTable = newDestinationTable;
		if (eNotificationRequired()) {
			ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE, oldDestinationTable, newDestinationTable);
			if (msgs == null) msgs = notification; else msgs.add(notification);
		}
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDestinationTable(PhysicalTable newDestinationTable) {
		if (newDestinationTable != destinationTable) {
			NotificationChain msgs = null;
			if (destinationTable != null)
				msgs = ((InternalEObject)destinationTable).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_TABLE__REVERSE_FOREIGN_KEYS, PhysicalTable.class, msgs);
			if (newDestinationTable != null)
				msgs = ((InternalEObject)newDestinationTable).eInverseAdd(this, PhysicalModelPackage.PHYSICAL_TABLE__REVERSE_FOREIGN_KEYS, PhysicalTable.class, msgs);
			msgs = basicSetDestinationTable(newDestinationTable, msgs);
			if (msgs != null) msgs.dispatch();
		}
		else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE, newDestinationTable, newDestinationTable));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PhysicalColumn> getDestinationColumns() {
		if (destinationColumns == null) {
			destinationColumns = new EObjectResolvingEList<PhysicalColumn>(PhysicalColumn.class, this, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_COLUMNS);
		}
		return destinationColumns;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalModel getModel() {
		if (model != null && model.eIsProxy()) {
			InternalEObject oldModel = (InternalEObject)model;
			model = (PhysicalModel)eResolveProxy(oldModel);
			if (model != oldModel) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL, oldModel, model));
			}
		}
		return model;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalModel basicGetModel() {
		return model;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetModel(PhysicalModel newModel, NotificationChain msgs) {
		PhysicalModel oldModel = model;
		model = newModel;
		if (eNotificationRequired()) {
			ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL, oldModel, newModel);
			if (msgs == null) msgs = notification; else msgs.add(notification);
		}
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setModel(PhysicalModel newModel) {
		if (newModel != model) {
			NotificationChain msgs = null;
			if (model != null)
				msgs = ((InternalEObject)model).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_MODEL__FOREIGN_KEYS, PhysicalModel.class, msgs);
			if (newModel != null)
				msgs = ((InternalEObject)newModel).eInverseAdd(this, PhysicalModelPackage.PHYSICAL_MODEL__FOREIGN_KEYS, PhysicalModel.class, msgs);
			msgs = basicSetModel(newModel, msgs);
			if (msgs != null) msgs.dispatch();
		}
		else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL, newModel, newModel));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseAdd(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				if (sourceTable != null)
					msgs = ((InternalEObject)sourceTable).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_TABLE__FOREIGN_KEYS, PhysicalTable.class, msgs);
				return basicSetSourceTable((PhysicalTable)otherEnd, msgs);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				if (destinationTable != null)
					msgs = ((InternalEObject)destinationTable).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_TABLE__REVERSE_FOREIGN_KEYS, PhysicalTable.class, msgs);
				return basicSetDestinationTable((PhysicalTable)otherEnd, msgs);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				if (model != null)
					msgs = ((InternalEObject)model).eInverseRemove(this, PhysicalModelPackage.PHYSICAL_MODEL__FOREIGN_KEYS, PhysicalModel.class, msgs);
				return basicSetModel((PhysicalModel)otherEnd, msgs);
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
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				return basicSetSourceTable(null, msgs);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				return basicSetDestinationTable(null, msgs);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				return basicSetModel(null, msgs);
		}
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_NAME:
				return getSourceName();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				if (resolve) return getSourceTable();
				return basicGetSourceTable();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_COLUMNS:
				return getSourceColumns();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_NAME:
				return getDestinationName();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				if (resolve) return getDestinationTable();
				return basicGetDestinationTable();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_COLUMNS:
				return getDestinationColumns();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				if (resolve) return getModel();
				return basicGetModel();
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
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_NAME:
				setSourceName((String)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				setSourceTable((PhysicalTable)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_COLUMNS:
				getSourceColumns().clear();
				getSourceColumns().addAll((Collection<? extends PhysicalColumn>)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_NAME:
				setDestinationName((String)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				setDestinationTable((PhysicalTable)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_COLUMNS:
				getDestinationColumns().clear();
				getDestinationColumns().addAll((Collection<? extends PhysicalColumn>)newValue);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				setModel((PhysicalModel)newValue);
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
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_NAME:
				setSourceName(SOURCE_NAME_EDEFAULT);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				setSourceTable((PhysicalTable)null);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_COLUMNS:
				getSourceColumns().clear();
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_NAME:
				setDestinationName(DESTINATION_NAME_EDEFAULT);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				setDestinationTable((PhysicalTable)null);
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_COLUMNS:
				getDestinationColumns().clear();
				return;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				setModel((PhysicalModel)null);
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
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_NAME:
				return SOURCE_NAME_EDEFAULT == null ? sourceName != null : !SOURCE_NAME_EDEFAULT.equals(sourceName);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_TABLE:
				return sourceTable != null;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__SOURCE_COLUMNS:
				return sourceColumns != null && !sourceColumns.isEmpty();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_NAME:
				return DESTINATION_NAME_EDEFAULT == null ? destinationName != null : !DESTINATION_NAME_EDEFAULT.equals(destinationName);
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_TABLE:
				return destinationTable != null;
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__DESTINATION_COLUMNS:
				return destinationColumns != null && !destinationColumns.isEmpty();
			case PhysicalModelPackage.PHYSICAL_FOREIGN_KEY__MODEL:
				return model != null;
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy()) return super.toString();

		StringBuffer result = new StringBuffer(super.toString());
		result.append(" (sourceName: ");
		result.append(sourceName);
		result.append(", destinationName: ");
		result.append(destinationName);
		result.append(')');
		return result.toString();
	}

} //PhysicalForeignKeyImpl
