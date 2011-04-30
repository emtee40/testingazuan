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
package it.eng.spagobi.meta.editor.business;

import it.eng.spagobi.meta.editor.commons.DiagnosticPartListener;

import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.views.properties.PropertySheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class BusinessModelPartListener extends DiagnosticPartListener {
	
	BusinessModelEditor editor;
	
	BusinessModelPartListener(BusinessModelEditor editor, Logger logger) {
		super(logger);
		this.editor = editor;
	}

	public void partActivated(IWorkbenchPart p) {
		logger.trace("IN");
		
		logger.debug("Activated part [{}]", p.getClass().getName());
		if (p instanceof PropertySheet) {
			logger.debug("Activated [{}]", PropertySheet.class.getName());
			if (((PropertySheet)p).getCurrentPage() == editor.getPropertySheetPage()) {
				logger.debug("Activated the property sheet  of this editor");
				editor.getActionBarContributor().setActiveEditor(editor);

			}
		} else if (p == editor) {
			logger.debug("Activated [{}]", BusinessModelEditor.class.getName());
		}
		
		logger.trace("OUT");
	}

}
