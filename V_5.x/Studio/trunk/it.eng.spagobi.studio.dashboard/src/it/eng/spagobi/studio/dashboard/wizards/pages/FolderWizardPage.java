/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.dashboard.wizards.pages;

import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

public class FolderWizardPage extends WizardPage {

	Text nameFolderText;
	
	public FolderWizardPage(String pageName) {
		super(pageName);
		setTitle("New Folder ...");
	}

	public void createControl(Composite parent) {
		Composite composite =  new Composite(parent, SWT.NULL);
		new Label(composite, SWT.NONE).setText("Name:");				
		nameFolderText = new Text(composite, SWT.BORDER);
		setControl(composite);
	}

}
