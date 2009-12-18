/**
SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.studio.documentcomposition.wizards.pages;

import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Text;

public class NewNavigationWizardPage extends WizardPage {


	@Override
	public boolean canFlipToNextPage() {
		if (navigationNameText.getText() == null || navigationNameText.getText().length() == 0) {
			return false;
		}else
			return super.canFlipToNextPage();
	}

	Text navigationNameText;
	
	public NewNavigationWizardPage() {
		super("New Navigation");
		setTitle("New Navigation");
	}
	public NewNavigationWizardPage(String pageName) {
		super(pageName);
		setTitle("New Navigation");
	}

	public void createControl(Composite parent) {

		Composite composite =  new Composite(parent, SWT.BORDER);
		GridLayout gl = new GridLayout();
		int ncol = 2;
		gl.numColumns = ncol;
		composite.setLayout(gl);
		new Label(composite, SWT.NONE).setText("Navigation name:");				
		navigationNameText = new Text(composite, SWT.BORDER);
		
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = ncol - 1;
		navigationNameText.setLayoutData(gd);
		
		
		navigationNameText.addListener(SWT.Modify, new Listener() {
	        public void handleEvent(Event event) {
	          String text = navigationNameText.getText();

	          if(text != null && text.length()!=0){
	            setPageComplete(true);
	        
	          }else{
	            setPageComplete(false);
	     
	          }
	        }
	      });
		navigationNameText.setFocus();
		
		setControl(composite);
		setPageComplete(false);

	}
	
	public Text getNavigationNameText() {
		return navigationNameText;
	}


}

