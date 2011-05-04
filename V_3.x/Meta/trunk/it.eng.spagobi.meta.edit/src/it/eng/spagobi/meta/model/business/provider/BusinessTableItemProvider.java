/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.business.provider;


import it.eng.spagobi.meta.model.ModelObject;
import it.eng.spagobi.meta.model.business.BusinessModelPackage;
import it.eng.spagobi.meta.model.business.BusinessRelationship;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.business.commands.edit.identifier.CreateIdentifierCommand;
import it.eng.spagobi.meta.model.business.commands.edit.relationship.AddBusinessRelationshipCommand;
import it.eng.spagobi.meta.model.business.commands.edit.table.DeleteBusinessTableCommand;
import it.eng.spagobi.meta.model.business.commands.edit.table.ModifyBusinessTableColumnsCommand;
import it.eng.spagobi.meta.model.business.commands.edit.view.AddPhysicalTableToBusinessViewCommand;
import it.eng.spagobi.meta.model.phantom.provider.BusinessColumnFolderItemProvider;
import it.eng.spagobi.meta.model.phantom.provider.FolderItemProvider;
import it.eng.spagobi.meta.model.phantom.provider.InboundRelationshipFolderItemProvider;
import it.eng.spagobi.meta.model.phantom.provider.OutboundRelationshipFolderItemProvider;
import it.eng.spagobi.meta.model.physical.PhysicalModelFactory;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.List;

import org.eclipse.emf.common.command.Command;
import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.eclipse.emf.edit.provider.ComposeableAdapterFactory;
import org.eclipse.emf.edit.provider.IEditingDomainItemProvider;
import org.eclipse.emf.edit.provider.IItemLabelProvider;
import org.eclipse.emf.edit.provider.IItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.IItemPropertySource;
import org.eclipse.emf.edit.provider.IStructuredItemContentProvider;
import org.eclipse.emf.edit.provider.ITreeItemContentProvider;
import org.eclipse.emf.edit.provider.IUpdateableItemText;


/**
 * This is the item provider adapter for a {@link it.eng.spagobi.meta.model.business.BusinessTable} object.
 * <!-- begin-user-doc -->
 * <!-- end-user-doc -->
 * @generated
 */
public class BusinessTableItemProvider
	extends BusinessColumnSetItemProvider
	implements
		IEditingDomainItemProvider,
		IStructuredItemContentProvider,
		ITreeItemContentProvider,
		IItemLabelProvider,
		IItemPropertySource,
		IUpdateableItemText {
	/**
	 * This constructs an instance from a factory and a notifier.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessTableItemProvider(AdapterFactory adapterFactory) {
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

			addPhysicalTablePropertyDescriptor(object);
		}
		return itemPropertyDescriptors;
	}

	/**
	 * This adds a property descriptor for the Physical Table feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addPhysicalTablePropertyDescriptor(Object object) {
		itemPropertyDescriptors.add
			(createItemPropertyDescriptor
				(((ComposeableAdapterFactory)adapterFactory).getRootAdapterFactory(),
				 getResourceLocator(),
				 getString("_UI_BusinessTable_physicalTable_feature"),
				 getString("_UI_PropertyDescriptor_description", "_UI_BusinessTable_physicalTable_feature", "_UI_BusinessTable_type"),
				 BusinessModelPackage.Literals.BUSINESS_TABLE__PHYSICAL_TABLE,
				 true,
				 false,
				 true,
				 null,
				 null,
				 null));
	}

	/**
	 * This specifies how to implement {@link #getChildren} and is used to deduce an appropriate feature for an
	 * {@link org.eclipse.emf.edit.command.AddCommand}, {@link org.eclipse.emf.edit.command.RemoveCommand} or
	 * {@link org.eclipse.emf.edit.command.MoveCommand} in {@link #createCommand}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Collection<? extends EStructuralFeature> getChildrenFeatures(Object object) {
		if (childrenFeatures == null) {
			super.getChildrenFeatures(object);
			childrenFeatures.add(BusinessModelPackage.Literals.BUSINESS_TABLE__PHYSICAL_TABLE);
		}
		return childrenFeatures;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EStructuralFeature getChildFeature(Object object, Object child) {
		// Check the type of the specified child object and return the proper feature to use for
		// adding (see {@link AddCommand}) it as a child.

		return super.getChildFeature(object, child);
	}

	protected Collection children = null;
	
	@Override
	public Collection<?> getChildren(Object object) {
			BusinessTable businessTable;
			PhysicalTable physicalTable;
			BusinessColumnFolderItemProvider folderItemProvider;
			InboundRelationshipFolderItemProvider folderItemProviderInRel = null;
			OutboundRelationshipFolderItemProvider folderItemProviderOutRel = null;
			FolderItemProvider physicalTableReferenceItemProvider = null;
			List<BusinessRelationship> businessRelationships;
			List<BusinessRelationship> inboundBusinessRelationships = new ArrayList<BusinessRelationship>();
			List<BusinessRelationship> outboundBusinessRelationships = new ArrayList<BusinessRelationship>();
			
			
			businessTable = (BusinessTable)object;
			//group columns
			folderItemProvider = new BusinessColumnFolderItemProvider(adapterFactory, businessTable, businessTable.getColumns());
			folderItemProvider.setText("Columns ("+folderItemProvider.getChildrenNumber()+")");
			if (folderItemProvider.getChildrenNumber() == 0)
				folderItemProvider.setImage("full/obj16/EmptyFolder");
			
			//getting inbound and outbound relationships
			businessRelationships = businessTable.getRelationships();
			
			for( BusinessRelationship relationship : businessRelationships){
				if (relationship.getDestinationTable() == businessTable){
					inboundBusinessRelationships.add(relationship);
				}
				else if (relationship.getSourceTable() == businessTable){
					outboundBusinessRelationships.add(relationship);
				}
			}
			//group inbound relationship	
			folderItemProviderInRel = new InboundRelationshipFolderItemProvider(adapterFactory, businessTable,inboundBusinessRelationships);
			folderItemProviderInRel.setText("Inbound Relationships ("+folderItemProviderInRel.getChildrenNumber()+")");
			if (folderItemProviderInRel.getChildrenNumber() == 0)
				folderItemProviderInRel.setImage("full/obj16/EmptyFolder");
			
			//group outbound relationship	
			folderItemProviderOutRel = new OutboundRelationshipFolderItemProvider(adapterFactory, businessTable,outboundBusinessRelationships);
			folderItemProviderOutRel.setText("Outbound Relationships ("+folderItemProviderOutRel.getChildrenNumber()+")");
			if (folderItemProviderOutRel.getChildrenNumber() == 0)
				folderItemProviderOutRel.setImage("full/obj16/EmptyFolder");
			
			//getting physical table reference
			physicalTable = businessTable.getPhysicalTable();
			
			children = new LinkedHashSet();
			//children.addAll(  getChildrenFeatures(object) );
			children.add( folderItemProvider );
			children.add( folderItemProviderInRel );
			children.add( folderItemProviderOutRel );

			if (physicalTable != null){
				physicalTableReferenceItemProvider = new FolderItemProvider(adapterFactory, physicalTable, null);
				physicalTableReferenceItemProvider.setText("Physical Table -> "+physicalTable.getName());
				physicalTableReferenceItemProvider.setImage("full/obj16/PhysicalTable");
				children.add(physicalTableReferenceItemProvider);
			}
		
		return children;
	}
	
	
	/**
	 * This returns BusinessTable.gif.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object getImage(Object object) {
		return overlayImage(object, getResourceLocator().getImage("full/obj16/BusinessTable"));
	}

	/**
	 * This returns the label text for the adapted class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	@Override
	public String getText(Object object) {
		/*
		String label = ((BusinessTable)object).getName();
		return label == null || label.length() == 0 ?
			getString("_UI_BusinessTable_type") :
			getString("_UI_BusinessTable_type") + " " + label;
		*/	
		String label = ((BusinessTable)object).getName();
		return label == null || label.length() == 0 ?
			getString("_UI_BusinessTable_type") :
			label;
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

		newChildDescriptors.add
			(createChildParameter
				(BusinessModelPackage.Literals.BUSINESS_TABLE__PHYSICAL_TABLE,
				 PhysicalModelFactory.eINSTANCE.createPhysicalTable()));
	}

	public Command createCustomCommand(Object object, EditingDomain domain, Class<? extends Command> commandClass, CommandParameter commandParameter) {
		 Command result;
		 
		 result = null;
		 
		 if(commandClass == ModifyBusinessTableColumnsCommand.class) {
		    	result = new ModifyBusinessTableColumnsCommand(domain, commandParameter);
		    } else if(commandClass == AddBusinessRelationshipCommand.class) {
		    	result = new AddBusinessRelationshipCommand(domain, commandParameter);
		    } else if(commandClass == CreateIdentifierCommand.class) {
		    	result = new CreateIdentifierCommand(domain, commandParameter);
		    } else if(commandClass == AddPhysicalTableToBusinessViewCommand.class) {
		    	result = new AddPhysicalTableToBusinessViewCommand(domain, commandParameter);
		    }  else if(commandClass == DeleteBusinessTableCommand.class) {
		    	result = new DeleteBusinessTableCommand(domain, commandParameter);
		    }
		 
		 return result;
	}

	@Override
	public void setText(Object object, String text) {
		ModelObject modelObject = (ModelObject)object;
		modelObject.setName(text);
	}

}
