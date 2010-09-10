/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.physical.provider;


import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalModelPackage;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.Collection;
import java.util.List;

import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.util.ResourceLocator;

import org.eclipse.emf.edit.provider.ComposeableAdapterFactory;
import org.eclipse.emf.edit.provider.IEditingDomainItemProvider;
import org.eclipse.emf.edit.provider.IItemLabelProvider;
import org.eclipse.emf.edit.provider.IItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.IItemPropertySource;
import org.eclipse.emf.edit.provider.IStructuredItemContentProvider;
import org.eclipse.emf.edit.provider.ITreeItemContentProvider;
import org.eclipse.emf.edit.provider.ItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.ItemProviderAdapter;
import org.eclipse.emf.edit.provider.ViewerNotification;

/**
 * This is the item provider adapter for a {@link it.eng.spagobi.meta.model.physical.PhysicalColumn} object.
 * <!-- begin-user-doc -->
 * <!-- end-user-doc -->
 * @generated
 */
public class PhysicalColumnItemProvider
	extends ItemProviderAdapter
	implements
		IEditingDomainItemProvider,
		IStructuredItemContentProvider,
		ITreeItemContentProvider,
		IItemLabelProvider,
		IItemPropertySource {
	/**
	 * This constructs an instance from a factory and a notifier.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PhysicalColumnItemProvider(AdapterFactory adapterFactory) {
		super(adapterFactory);
	}

	/**
	 * This returns the property descriptors for the adapted class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public List<IItemPropertyDescriptor> getPropertyDescriptors(Object object) {
		if (itemPropertyDescriptors == null) {
			super.getPropertyDescriptors(object);

			addNamePropertyDescriptor(object);
			addCommentPropertyDescriptor(object);
			addDataTypePropertyDescriptor(object);
			addTypeNamePropertyDescriptor(object);
			addSizePropertyDescriptor(object);
			addOctectLengthPropertyDescriptor(object);
			addDecimalDigitsPropertyDescriptor(object);
			addRadixPropertyDescriptor(object);
			addDefaultValuePropertyDescriptor(object);
			addNullablePropertyDescriptor(object);
			addPositionPropertyDescriptor(object);
			addTablePropertyDescriptor(object);
		}
		return itemPropertyDescriptors;
	}

	/**
	 * This adds a property descriptor for the Name feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addNamePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_name_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_name_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__NAME,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.GENERIC_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Comment feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addCommentPropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_comment_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_comment_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__COMMENT,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.GENERIC_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Data Type feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addDataTypePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_dataType_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_dataType_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__DATA_TYPE,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Type Name feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addTypeNamePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_typeName_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_typeName_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__TYPE_NAME,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.GENERIC_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Size feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addSizePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_size_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_size_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__SIZE,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Octect Length feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addOctectLengthPropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_octectLength_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_octectLength_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__OCTECT_LENGTH,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Decimal Digits feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addDecimalDigitsPropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_decimalDigits_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_decimalDigits_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__DECIMAL_DIGITS,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Radix feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addRadixPropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_radix_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_radix_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__RADIX,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Default Value feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addDefaultValuePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_defaultValue_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_defaultValue_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__DEFAULT_VALUE,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.GENERIC_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Nullable feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addNullablePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_nullable_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_nullable_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__NULLABLE,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.BOOLEAN_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Position feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addPositionPropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_position_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_position_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__POSITION,
				 true,
				 false,
				 false,
				 ItemPropertyDescriptor.INTEGRAL_VALUE_IMAGE,
				 null,
				 null));
	}

	/**
	 * This adds a property descriptor for the Table feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addTablePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_PhysicalColumn_table_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_PhysicalColumn_table_feature", "_UI_PhysicalColumn_type"),
				 PhysicalModelPackage.Literals.PHYSICAL_COLUMN__TABLE,
				 true,
				 false,
				 true,
				 null,
				 null,
				 null));
	}

	/**
	 * This returns PhysicalColumn.gif.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object getImage(Object object) {
		return overlayImage(object, getResourceLocator().getImage("column.png"));
	}

	/**
	 * This returns the label text for the adapted class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	@Override
	public String getText(Object object) {
		/*
		String label = ((PhysicalColumn)object).getName();
		return label == null || label.length() == 0 ?
			getString("_UI_PhysicalColumn_type") :
			getString("_UI_PhysicalColumn_type") + " " + label;
		*/

		PhysicalColumn col = (PhysicalColumn)object;
        if( col.getName() == null )
                return "Unnamed col";
        return col.getTable().getName()+"."+col.getName();
	}

	/**
	 * This handles model notifications by calling {@link #updateChildren} to update any cached
	 * children and by creating a viewer notification, which it passes to {@link #fireNotifyChanged}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void notifyChanged(Notification notification) {
		updateChildren(notification);

		switch (notification.getFeatureID(PhysicalColumn.class)) {
			case PhysicalModelPackage.PHYSICAL_COLUMN__NAME:
			case PhysicalModelPackage.PHYSICAL_COLUMN__COMMENT:
			case PhysicalModelPackage.PHYSICAL_COLUMN__DATA_TYPE:
			case PhysicalModelPackage.PHYSICAL_COLUMN__TYPE_NAME:
			case PhysicalModelPackage.PHYSICAL_COLUMN__SIZE:
			case PhysicalModelPackage.PHYSICAL_COLUMN__OCTECT_LENGTH:
			case PhysicalModelPackage.PHYSICAL_COLUMN__DECIMAL_DIGITS:
			case PhysicalModelPackage.PHYSICAL_COLUMN__RADIX:
			case PhysicalModelPackage.PHYSICAL_COLUMN__DEFAULT_VALUE:
			case PhysicalModelPackage.PHYSICAL_COLUMN__NULLABLE:
			case PhysicalModelPackage.PHYSICAL_COLUMN__POSITION:
				fireNotifyChanged(new ViewerNotification(notification, notification.getNotifier(), false, true));
				return;
		}
		super.notifyChanged(notification);
	}

	/**
	 * This adds {@link org.eclipse.emf.edit.command.CommandParameter}s describing the children
	 * that can be created under this object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected void collectNewChildDescriptors(Collection<Object> newChildDescriptors, Object object) {
		super.collectNewChildDescriptors(newChildDescriptors, object);
	}

	/**
	 * Return the resource locator for this item provider's resources.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ResourceLocator getResourceLocator() {
		return SpagoBIMetalModelEditPlugin.INSTANCE;
	}

}
