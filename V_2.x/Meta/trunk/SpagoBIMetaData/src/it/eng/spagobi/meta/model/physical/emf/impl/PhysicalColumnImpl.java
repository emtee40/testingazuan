/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.physical.emf.impl;

import it.eng.spagobi.meta.model.physical.emf.EmfPackage;
import it.eng.spagobi.meta.model.physical.emf.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.emf.PhysicalTable;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.EObjectImpl;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Physical Column</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getName <em>Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getComment <em>Comment</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getDataType <em>Data Type</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getTypeName <em>Type Name</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getOctectLength <em>Octect Length</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getDecimalDigits <em>Decimal Digits</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getRadix <em>Radix</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getDefaultValue <em>Default Value</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#isNullable <em>Nullable</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getPosition <em>Position</em>}</li>
 *   <li>{@link it.eng.spagobi.meta.model.physical.emf.impl.PhysicalColumnImpl#getTable <em>Table</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class PhysicalColumnImpl extends EObjectImpl implements PhysicalColumn {
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
	 * The default value of the '{@link #getComment() <em>Comment</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getComment()
	 * @generated
	 * @ordered
	 */
	protected static final String COMMENT_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getComment() <em>Comment</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getComment()
	 * @generated
	 * @ordered
	 */
	protected String comment = COMMENT_EDEFAULT;

	/**
	 * The default value of the '{@link #getDataType() <em>Data Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDataType()
	 * @generated
	 * @ordered
	 */
	protected static final short DATA_TYPE_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getDataType() <em>Data Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDataType()
	 * @generated
	 * @ordered
	 */
	protected short dataType = DATA_TYPE_EDEFAULT;

	/**
	 * The default value of the '{@link #getTypeName() <em>Type Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTypeName()
	 * @generated
	 * @ordered
	 */
	protected static final String TYPE_NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getTypeName() <em>Type Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTypeName()
	 * @generated
	 * @ordered
	 */
	protected String typeName = TYPE_NAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getOctectLength() <em>Octect Length</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getOctectLength()
	 * @generated
	 * @ordered
	 */
	protected static final int OCTECT_LENGTH_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getOctectLength() <em>Octect Length</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getOctectLength()
	 * @generated
	 * @ordered
	 */
	protected int octectLength = OCTECT_LENGTH_EDEFAULT;

	/**
	 * The default value of the '{@link #getDecimalDigits() <em>Decimal Digits</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDecimalDigits()
	 * @generated
	 * @ordered
	 */
	protected static final int DECIMAL_DIGITS_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getDecimalDigits() <em>Decimal Digits</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDecimalDigits()
	 * @generated
	 * @ordered
	 */
	protected int decimalDigits = DECIMAL_DIGITS_EDEFAULT;

	/**
	 * The default value of the '{@link #getRadix() <em>Radix</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRadix()
	 * @generated
	 * @ordered
	 */
	protected static final int RADIX_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getRadix() <em>Radix</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRadix()
	 * @generated
	 * @ordered
	 */
	protected int radix = RADIX_EDEFAULT;

	/**
	 * The default value of the '{@link #getDefaultValue() <em>Default Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDefaultValue()
	 * @generated
	 * @ordered
	 */
	protected static final String DEFAULT_VALUE_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDefaultValue() <em>Default Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDefaultValue()
	 * @generated
	 * @ordered
	 */
	protected String defaultValue = DEFAULT_VALUE_EDEFAULT;

	/**
	 * The default value of the '{@link #isNullable() <em>Nullable</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isNullable()
	 * @generated
	 * @ordered
	 */
	protected static final boolean NULLABLE_EDEFAULT = false;

	/**
	 * The cached value of the '{@link #isNullable() <em>Nullable</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isNullable()
	 * @generated
	 * @ordered
	 */
	protected boolean nullable = NULLABLE_EDEFAULT;

	/**
	 * The default value of the '{@link #getPosition() <em>Position</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPosition()
	 * @generated
	 * @ordered
	 */
	protected static final int POSITION_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getPosition() <em>Position</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPosition()
	 * @generated
	 * @ordered
	 */
	protected int position = POSITION_EDEFAULT;

	/**
	 * The cached value of the '{@link #getTable() <em>Table</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTable()
	 * @generated
	 * @ordered
	 */
	protected PhysicalTable table;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected PhysicalColumnImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return EmfPackage.Literals.PHYSICAL_COLUMN;
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
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getComment() {
		return comment;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setComment(String newComment) {
		String oldComment = comment;
		comment = newComment;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__COMMENT, oldComment, comment));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public short getDataType() {
		return dataType;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDataType(short newDataType) {
		short oldDataType = dataType;
		dataType = newDataType;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__DATA_TYPE, oldDataType, dataType));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getTypeName() {
		return typeName;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTypeName(String newTypeName) {
		String oldTypeName = typeName;
		typeName = newTypeName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__TYPE_NAME, oldTypeName, typeName));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getOctectLength() {
		return octectLength;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setOctectLength(int newOctectLength) {
		int oldOctectLength = octectLength;
		octectLength = newOctectLength;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__OCTECT_LENGTH, oldOctectLength, octectLength));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getDecimalDigits() {
		return decimalDigits;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDecimalDigits(int newDecimalDigits) {
		int oldDecimalDigits = decimalDigits;
		decimalDigits = newDecimalDigits;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS, oldDecimalDigits, decimalDigits));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getRadix() {
		return radix;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setRadix(int newRadix) {
		int oldRadix = radix;
		radix = newRadix;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__RADIX, oldRadix, radix));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDefaultValue() {
		return defaultValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDefaultValue(String newDefaultValue) {
		String oldDefaultValue = defaultValue;
		defaultValue = newDefaultValue;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__DEFAULT_VALUE, oldDefaultValue, defaultValue));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isNullable() {
		return nullable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setNullable(boolean newNullable) {
		boolean oldNullable = nullable;
		nullable = newNullable;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__NULLABLE, oldNullable, nullable));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getPosition() {
		return position;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setPosition(int newPosition) {
		int oldPosition = position;
		position = newPosition;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__POSITION, oldPosition, position));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable getTable() {
		if (table != null && table.eIsProxy()) {
			InternalEObject oldTable = (InternalEObject)table;
			table = (PhysicalTable)eResolveProxy(oldTable);
			if (table != oldTable) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, EmfPackage.PHYSICAL_COLUMN__TABLE, oldTable, table));
			}
		}
		return table;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalTable basicGetTable() {
		return table;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTable(PhysicalTable newTable) {
		PhysicalTable oldTable = table;
		table = newTable;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, EmfPackage.PHYSICAL_COLUMN__TABLE, oldTable, table));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSize(int size) {
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
			case EmfPackage.PHYSICAL_COLUMN__NAME:
				return getName();
			case EmfPackage.PHYSICAL_COLUMN__COMMENT:
				return getComment();
			case EmfPackage.PHYSICAL_COLUMN__DATA_TYPE:
				return new Short(getDataType());
			case EmfPackage.PHYSICAL_COLUMN__TYPE_NAME:
				return getTypeName();
			case EmfPackage.PHYSICAL_COLUMN__OCTECT_LENGTH:
				return new Integer(getOctectLength());
			case EmfPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS:
				return new Integer(getDecimalDigits());
			case EmfPackage.PHYSICAL_COLUMN__RADIX:
				return new Integer(getRadix());
			case EmfPackage.PHYSICAL_COLUMN__DEFAULT_VALUE:
				return getDefaultValue();
			case EmfPackage.PHYSICAL_COLUMN__NULLABLE:
				return isNullable() ? Boolean.TRUE : Boolean.FALSE;
			case EmfPackage.PHYSICAL_COLUMN__POSITION:
				return new Integer(getPosition());
			case EmfPackage.PHYSICAL_COLUMN__TABLE:
				if (resolve) return getTable();
				return basicGetTable();
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
			case EmfPackage.PHYSICAL_COLUMN__NAME:
				setName((String)newValue);
				return;
			case EmfPackage.PHYSICAL_COLUMN__COMMENT:
				setComment((String)newValue);
				return;
			case EmfPackage.PHYSICAL_COLUMN__DATA_TYPE:
				setDataType(((Short)newValue).shortValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__TYPE_NAME:
				setTypeName((String)newValue);
				return;
			case EmfPackage.PHYSICAL_COLUMN__OCTECT_LENGTH:
				setOctectLength(((Integer)newValue).intValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS:
				setDecimalDigits(((Integer)newValue).intValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__RADIX:
				setRadix(((Integer)newValue).intValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__DEFAULT_VALUE:
				setDefaultValue((String)newValue);
				return;
			case EmfPackage.PHYSICAL_COLUMN__NULLABLE:
				setNullable(((Boolean)newValue).booleanValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__POSITION:
				setPosition(((Integer)newValue).intValue());
				return;
			case EmfPackage.PHYSICAL_COLUMN__TABLE:
				setTable((PhysicalTable)newValue);
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
			case EmfPackage.PHYSICAL_COLUMN__NAME:
				setName(NAME_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__COMMENT:
				setComment(COMMENT_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__DATA_TYPE:
				setDataType(DATA_TYPE_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__TYPE_NAME:
				setTypeName(TYPE_NAME_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__OCTECT_LENGTH:
				setOctectLength(OCTECT_LENGTH_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS:
				setDecimalDigits(DECIMAL_DIGITS_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__RADIX:
				setRadix(RADIX_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__DEFAULT_VALUE:
				setDefaultValue(DEFAULT_VALUE_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__NULLABLE:
				setNullable(NULLABLE_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__POSITION:
				setPosition(POSITION_EDEFAULT);
				return;
			case EmfPackage.PHYSICAL_COLUMN__TABLE:
				setTable((PhysicalTable)null);
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
			case EmfPackage.PHYSICAL_COLUMN__NAME:
				return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
			case EmfPackage.PHYSICAL_COLUMN__COMMENT:
				return COMMENT_EDEFAULT == null ? comment != null : !COMMENT_EDEFAULT.equals(comment);
			case EmfPackage.PHYSICAL_COLUMN__DATA_TYPE:
				return dataType != DATA_TYPE_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__TYPE_NAME:
				return TYPE_NAME_EDEFAULT == null ? typeName != null : !TYPE_NAME_EDEFAULT.equals(typeName);
			case EmfPackage.PHYSICAL_COLUMN__OCTECT_LENGTH:
				return octectLength != OCTECT_LENGTH_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS:
				return decimalDigits != DECIMAL_DIGITS_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__RADIX:
				return radix != RADIX_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__DEFAULT_VALUE:
				return DEFAULT_VALUE_EDEFAULT == null ? defaultValue != null : !DEFAULT_VALUE_EDEFAULT.equals(defaultValue);
			case EmfPackage.PHYSICAL_COLUMN__NULLABLE:
				return nullable != NULLABLE_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__POSITION:
				return position != POSITION_EDEFAULT;
			case EmfPackage.PHYSICAL_COLUMN__TABLE:
				return table != null;
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
		result.append(", comment: ");
		result.append(comment);
		result.append(", dataType: ");
		result.append(dataType);
		result.append(", typeName: ");
		result.append(typeName);
		result.append(", octectLength: ");
		result.append(octectLength);
		result.append(", decimalDigits: ");
		result.append(decimalDigits);
		result.append(", radix: ");
		result.append(radix);
		result.append(", defaultValue: ");
		result.append(defaultValue);
		result.append(", nullable: ");
		result.append(nullable);
		result.append(", position: ");
		result.append(position);
		result.append(')');
		return result.toString();
	}

} //PhysicalColumnImpl
