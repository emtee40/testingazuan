/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.birt.wizards.pages;

import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

public class NewBirtReportWizardPage extends WizardPage {

	Text birtNameText;
	
	public NewBirtReportWizardPage(String pageName) {
		super(pageName);
		setTitle("New Birt Report Template ...");
	}

	public void createControl(Composite parent) {
		
		Shell shell = parent.getShell();
		
		Composite composite =  new Composite(parent, SWT.BORDER);
		GridLayout gl = new GridLayout();
		int ncol = 2;
		gl.numColumns = ncol;
		composite.setLayout(gl);
		new Label(composite, SWT.NONE).setText("Name:");				
		birtNameText = new Text(composite, SWT.BORDER);
		
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = ncol - 1;
		birtNameText.setLayoutData(gd);
		
		setControl(composite);

	}
	
	public Text getBirtNameText() {
		return birtNameText;
	}


}

