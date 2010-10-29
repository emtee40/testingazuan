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
package it.eng.spagobi.meta.model.business.presentation;

import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.CLabel;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.custom.ViewForm;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IPropertyListener;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.part.MultiEditor;
import org.eclipse.ui.part.MultiEditor.Gradient;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class SpagoBIModelEditor extends MultiEditor {
	
	private CLabel innerEditorTitle[];
	
	@Override
	public void createPartControl(Composite parent) {
		parent = new Composite(parent, SWT.BORDER);

		parent.setLayout(new FillLayout());
		SashForm sashForm = new SashForm(parent, SWT.HORIZONTAL);
		IEditorPart innerEditors[] = getInnerEditors();
		
		for (int i = 0; i < innerEditors.length; i++) {
			final IEditorPart e = innerEditors[i];
			ViewForm viewForm = new ViewForm(sashForm, SWT.NONE);
			viewForm.marginWidth = 0;
			viewForm.marginHeight = 0;

			createInnerEditorTitle(i, viewForm);
			
			Composite content = createInnerPartControl(viewForm,e);
			
			viewForm.setContent(content);
			updateInnerEditorTitle(e, innerEditorTitle[i]);
			
			final int index = i;
			e.addPropertyListener(new IPropertyListener() {
				public void propertyChanged(Object source, int property) {
					if (property == IEditorPart.PROP_DIRTY || property == IWorkbenchPart.PROP_TITLE)
						if (source instanceof IEditorPart)
							updateInnerEditorTitle((IEditorPart) source, innerEditorTitle[index]);
				}
			});
		}
		
	}
	
	/**
	 * Draw the gradient for the specified editor.
	 */
	protected void drawGradient(IEditorPart innerEditor, Gradient g) {
		CLabel label = innerEditorTitle[getIndex(innerEditor)];
		if((label == null) || label.isDisposed())
			return;
			
		label.setForeground(g.fgColor);
		label.setBackground(g.bgColors, g.bgPercents);
	}
	/*
	 * Create the label for each inner editor. 
	 */
	protected void createInnerEditorTitle(int index, ViewForm parent) {
		CLabel titleLabel = new CLabel(parent, SWT.SHADOW_NONE);
		//hookFocus(titleLabel);
		titleLabel.setAlignment(SWT.LEFT);
		titleLabel.setBackground(null, null);
		parent.setTopLeft(titleLabel);
		if (innerEditorTitle == null)
			innerEditorTitle = new CLabel[getInnerEditors().length];
		innerEditorTitle[index] = titleLabel;
	}
	/*
	 * Update the tab for an editor.  This is typically called
	 * by a site when the tab title changes.
	 */
	public void updateInnerEditorTitle(IEditorPart editor, CLabel label) {
		if((label == null) || label.isDisposed())
			return;
		String title = editor.getTitle();
		if (editor.isDirty())
			title = "*" + title; //$NON-NLS-1$
		label.setText(title);
		Image image = editor.getTitleImage();
		if (image != null)
			if (!image.equals(label.getImage()))
				label.setImage(image);
		label.setToolTipText(editor.getTitleToolTip());
	}
	/*
	 * 
	 */
	protected int getIndex(IEditorPart editor) {
		IEditorPart innerEditors[] = getInnerEditors();
		for (int i = 0; i < innerEditors.length; i++) {
			if (innerEditors[i] == editor)
				return i;
		}
		return -1;
	}

}
