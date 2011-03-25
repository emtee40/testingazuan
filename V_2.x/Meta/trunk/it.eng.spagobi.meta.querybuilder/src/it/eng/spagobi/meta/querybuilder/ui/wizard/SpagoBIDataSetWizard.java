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
package it.eng.spagobi.meta.querybuilder.ui.wizard;

import it.eng.qbe.model.structure.ViewModelStructure;
import it.eng.spagobi.meta.querybuilder.ui.ModelStructureBuilder;

import org.eclipse.datatools.connectivity.oda.design.ui.wizards.DataSetWizard;

/**
 * @author cortella
 *
 */
public class SpagoBIDataSetWizard extends DataSetWizard {

	private SpagoBIDataSetWizardEditPage editPage;
	private SpagoBIDataSetWizardResultPage resultPage;
	protected ViewModelStructure datamartStructure;
	

	
	public SpagoBIDataSetWizard(){
		super();
		this.setWindowTitle("Create a new SpagoBI Data Set");
		this.setHelpAvailable(false);
		datamartStructure =	ModelStructureBuilder.build();
		System.out.println("SpagoBIDataSetWizard ok");
	}
	
	@Override
	public boolean performFinish() {
		if (resultPage.isPageComplete()){
			return true;
		}
		return false;
	}
	
	public ViewModelStructure getDatamartStructure(){
		return datamartStructure;
	}
}
