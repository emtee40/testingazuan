/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.physical.emf.impl;

import it.eng.spagobi.meta.model.physical.emf.EmfPackage;
import it.eng.spagobi.meta.model.physical.emf.PhysicalForeignKey;
import it.eng.spagobi.meta.model.physical.emf.PhysicalModel;
import it.eng.spagobi.meta.model.physical.emf.PhysicalPrimaryKey;
import it.eng.spagobi.meta.model.physical.emf.PhysicalTable;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.EObjectImpl;

import org.eclipse.emf.ecore.util.EObjectResolvingEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Physical Model</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getName <em>Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getDatabaseName <em>Database Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getDatabaseVersion <em>Database Version</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getCatalog <em>Catalog</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getSchema <em>Schema</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getTables <em>Tables</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getPrimaryKeys <em>Primary Keys</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalModelImpl#getForeignKeys <em>Foreign Keys</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class PhysicalModelImpl extends EObjectImpl implements PhysicalModel {
	/**
	 * The default value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected static final String NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected String name = NAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getDatabaseName() <em>Database Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDatabaseName()
	 * @generated
	 * @ordered
	 */
	protected static final String DATABASE_NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDatabaseName() <em>Database Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDatabaseName()
	 * @generated
	 * @ordered
	 */
	protected String databaseName = DATABASE_NAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getDatabaseVersion() <em>Database Version</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDatabaseVersion()
	 * @generated
	 * @ordered
	 */
	protected static final String DATABASE_VERSION_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDatabaseVersion() <em>Database Version</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDatabaseVersion()
	 * @generated
	 * @ordered
	 */
	protected String databaseVersion = DATABASE_VERSION_EDEFAULT;

	/**
	 * The default value of the '{@link #getCatalog() <em>Catalog</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getCatalog()
	 * @generated
	 * @ordered
	 */
	protected static final String CATALOG_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getCatalog() <em>Catalog</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getCatalog()
	 * @generated
	 * @ordered
	 */
	protected String catalog = CATALOG_EDEFAULT;

	/**
	 * The default value of the '{@link #getSchema() <em>Schema</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSchema()
	 * @generated
	 * @ordered
	 */
	protected static final String SCHEMA_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getSchema() <em>Schema</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSchema()
	 * @generated
	 * @ordered
	 */
	protected String schema = SCHEMA_EDEFAULT;

	/**
	 * The cached value of the '{@link #getTables() <em>Tables</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTables()
	 * @generated
	 * @ordered
	 */
	protected EList<PhysicalTable> tables;

	/**
	 * The cached value of the '{@link #getPrimaryKeys() <em>Primary Keys</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPrimaryKeys()
	 * @generated
	 * @ordered
	 */
	protected EList<PhysicalPrimaryKey> primaryKeys;

	/**
	 * The cached value of the '{@link #getForeignKeys() <em>Foreign Keys</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getForeignKeys()
	 * @generated
	 * @ordered
	 */
	protected EList<PhysicalForeignKey> foreignKeys;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected PhysicalModelImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return EmfPackage.Literals.PHYSICAL_MODEL;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setName(String newName) {
		String oldName = name;
		name = newName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_MODEL__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDatabaseName() {
		return databaseName;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDatabaseName(String newDatabaseName) {
		String oldDatabaseName = databaseName;
		databaseName = newDatabaseName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_MODEL__DATABASE_NAME, oldDatabaseName, databaseName));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDatabaseVersion() {
		return databaseVersion;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDatabaseVersion(String newDatabaseVersion) {
		String oldDatabaseVersion = databaseVersion;
		databaseVersion = newDatabaseVersion;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_MODEL__DATABASE_VERSION, oldDatabaseVersion, databaseVersion));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getCatalog() {
		return catalog;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setCatalog(String newCatalog) {
		String oldCatalog = catalog;
		catalog = newCatalog;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_MODEL__CATALOG, oldCatalog, catalog));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getSchema() {
		return schema;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSchema(String newSchema) {
		String oldSchema = schema;
		schema = newSchema;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_MODEL__SCHEMA, oldSchema, schema));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PhysicalTable> getTables() {
		if (tables == null) {
			tables = new EObjectResolvingEList<PhysicalTable>(PhysicalTable.class, this, EmfPackage.PHYSICAL_MODEL__TABLES);
		}
		return tables;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PhysicalPrimaryKey> getPrimaryKeys() {
		if (primaryKeys == null) {
			primaryKeys = new EObjectResolvingEList<PhysicalPrimaryKey>(PhysicalPrimaryKey.class, this, EmfPackage.PHYSICAL_MODEL__PRIMARY_KEYS);
		}
		return primaryKeys;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PhysicalForeignKey> getForeignKeys() {
		if (foreignKeys == null) {
			foreignKeys = new EObjectResolvingEList<PhysicalForeignKey>(PhysicalForeignKey.class, this, EmfPackage.PHYSICAL_MODEL__FOREIGN_KEYS);
		}
		return foreignKeys;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTables(EList<PhysicalTable> tables) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setPrimaryKeys(EList<PhysicalPrimaryKey> primaryKeys) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setForeignKeys(EList<PhysicalForeignKey> primaryKeys) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
			case EmfPackage.PHYSICAL_MODEL__NAME:
				return getName();
			case EmfPackage.PHYSICAL_MODEL__DATABASE_NAME:
				return getDatabaseName();
			case EmfPackage.PHYSICAL_MODEL__DATABASE_VERSION:
				return getDatabaseVersion();
			case EmfPackage.PHYSICAL_MODEL__CATALOG:
				return getCatalog();
			case EmfPackage.PHYSICAL_MODEL__SCHEMA:
				return getSchema();
			case EmfPackage.PHYSICAL_MODEL__TABLES:
				return getTables();
			case EmfPackage.PHYSICAL_MODEL__PRIMARY_KEYS:
				return getPrimaryKeys();
			case EmfPackage.PHYSICAL_MODEL__FOREIGN_KEYS:
				return getForeignKeys();
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
			case EmfPackage.PHYSICAL_MODEL__NAME:
				setName((String)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__DATABASE_NAME:
				setDatabaseName((String)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__DATABASE_VERSION:
				setDatabaseVersion((String)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__CATALOG:
				setCatalog((String)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__SCHEMA:
				setSchema((String)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__TABLES:
				getTables().clear();
				getTables().addAll((Collection<? extends PhysicalTable>)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__PRIMARY_KEYS:
				getPrimaryKeys().clear();
				getPrimaryKeys().addAll((Collection<? extends PhysicalPrimaryKey>)newValue);
				return;
			case EmfPackage.PHYSICAL_MODEL__FOREIGN_KEYS:
				getForeignKeys().clear();
				getForeignKeys().addAll((Collection<? extends PhysicalForeignKey>)newValue);
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
			case EmfPackage.PHYSICAL_MODEL__NAME:
				setName(NAME_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_MODEL__DATABASE_NAME:
				setDatabaseName(DATABASE_NAME_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_MODEL__DATABASE_VERSION:
				setDatabaseVersion(DATABASE_VERSION_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_MODEL__CATALOG:
				setCatalog(CATALOG_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_MODEL__SCHEMA:
				setSchema(SCHEMA_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_MODEL__TABLES:
				getTables().clear();
				return;
			case EmfPackage.PHYSICAL_MODEL__PRIMARY_KEYS:
				getPrimaryKeys().clear();
				return;
			case EmfPackage.PHYSICAL_MODEL__FOREIGN_KEYS:
				getForeignKeys().clear();
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
			case EmfPackage.PHYSICAL_MODEL__NAME:
				return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
			case EmfPackage.PHYSICAL_MODEL__DATABASE_NAME:
				return DATABASE_NAME_EDEFAULT == null ? databaseName != null : !DATABASE_NAME_EDEFAULT.equals(databaseName);
			case EmfPackage.PHYSICAL_MODEL__DATABASE_VERSION:
				return DATABASE_VERSION_EDEFAULT == null ? databaseVersion != null : !DATABASE_VERSION_EDEFAULT.equals(databaseVersion);
			case EmfPackage.PHYSICAL_MODEL__CATALOG:
				return CATALOG_EDEFAULT == null ? catalog != null : !CATALOG_EDEFAULT.equals(catalog);
			case EmfPackage.PHYSICAL_MODEL__SCHEMA:
				return SCHEMA_EDEFAULT == null ? schema != null : !SCHEMA_EDEFAULT.equals(schema);
			case EmfPackage.PHYSICAL_MODEL__TABLES:
				return tables != null && !tables.isEmpty();
			case EmfPackage.PHYSICAL_MODEL__PRIMARY_KEYS:
				return primaryKeys != null && !primaryKeys.isEmpty();
			case EmfPackage.PHYSICAL_MODEL__FOREIGN_KEYS:
				return foreignKeys != null && !foreignKeys.isEmpty();
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
		result.append(" (name: ");
		result.append(name);
		result.append(", databaseName: ");
		result.append(databaseName);
		result.append(", databaseVersion: ");
		result.append(databaseVersion);
		result.append(", catalog: ");
		result.append(catalog);
		result.append(", schema: ");
		result.append(schema);
		result.append(')');
		return result.toString();
	}

} //PhysicalModelImpl
