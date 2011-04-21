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
package it.eng.spagobi.meta.model.phantom.provider;

import it.eng.spagobi.meta.model.business.BusinessModelPackage;
import it.eng.spagobi.meta.model.business.BusinessView;

import java.util.ArrayList;
import java.util.Collection;

import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.eclipse.emf.edit.provider.ViewerNotification;

/**
 * @author cortella
 *
 */
public class BusinessViewPhysicalTableFolderItemProvider extends
		FolderItemProvider {

	/**
	 * @param adapterFactory
	 * @param parent
	 * @param children
	 */
	public BusinessViewPhysicalTableFolderItemProvider(
			AdapterFactory adapterFactory, Object parent, Collection children) {
		super(adapterFactory, parent, children);
		//adding this custom Item Provider to the adapters of BusinessModel to forward the notify
		//((BusinessView)parent).getModel().eAdapters().add(this);
		
		//adding this custom Item Provider to the adapters of BusinessView to forward the notify
		((BusinessView)parent).eAdapters().add(this);
	}

	public Collection<?> getNewChildDescriptors(Object object, EditingDomain editingDomain, Object sibling) { 
		BusinessView businessView = (BusinessView)parentObject;

	    // Build the collection of new child descriptors.
	    //
	    Collection<Object> newChildDescriptors = new ArrayList<Object>();
	    collectNewChildDescriptors(newChildDescriptors, object);

	   
	    return super.getNewChildDescriptors(businessView, editingDomain, sibling);
	}
	
	@Override
	public Collection<? extends EStructuralFeature> getChildrenFeatures(Object object) {
		if (childrenFeatures == null) {
			super.getChildrenFeatures(object);
			childrenFeatures.add(BusinessModelPackage.Literals.BUSINESS_MODEL__JOIN_RELATIONSHIPS);
		}
		return childrenFeatures;
	}
	
	
	public void notifyChanged(Notification notification) {
		updateChildren(notification);
		
		switch (notification.getFeatureID(BusinessView.class)) {
		case BusinessModelPackage.BUSINESS_VIEW__JOIN_RELATIONSHIPS:
			fireNotifyChanged(new ViewerNotification(notification, parentObject, true, false));
			return;
		}
		super.notifyChanged(notification);
	}
}
