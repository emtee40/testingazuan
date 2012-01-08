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
package it.eng.spagobi.meta.editor.business.actions;

import it.eng.spagobi.commons.resource.IResourceLocator;
import it.eng.spagobi.meta.editor.SpagoBIMetaEditorPlugin;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.action.Action;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IViewReference;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.statushandlers.StatusManager;
import org.eclipse.ui.views.properties.PropertySheet;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class ShowPropertiesViewAction extends Action {
	
	IEditorPart activeEditorPart;
	
	private static IResourceLocator RL = SpagoBIMetaEditorPlugin.getInstance().getResourceLocator();
	

	public ShowPropertiesViewAction() {
		super( RL.getString("business.action.show.properties.label") );
	}

	public void setActiveEditorPart(IEditorPart activeEditorPart) {
		this.activeEditorPart = activeEditorPart;
	}

	@Override
	public boolean isEnabled() {
		return activeEditorPart != null;
	}

	
	@Override
	public void run() {
		try {
			IViewReference[] views = activeEditorPart.getSite().getPage().getViewReferences();
			IViewReference view = null;
			for(int i = 0; i < views.length; i++) {
				if(views[i].getId().equalsIgnoreCase("org.eclipse.ui.views.PropertySheet")) {
					view = views[i];
					break;
				}
			}
			if(view != null) activeEditorPart.getSite().getPage().hideView(view);
			IViewPart viewp = activeEditorPart.getSite().getPage().showView("org.eclipse.ui.views.PropertySheet");
		}
		catch (PartInitException e) {
		    IStatus status = new Status(IStatus.ERROR, SpagoBIMetaEditorPlugin.PLUGIN_ID, IStatus.OK, "Impossible to open Property Sheet View", e);
		    StatusManager.getManager().handle(status, StatusManager.LOG|StatusManager.SHOW);
		}
	}
}
