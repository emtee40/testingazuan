/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.chart.editors.model.chart;

import it.eng.spagobi.studio.chart.editors.ChartEditor;
import it.eng.spagobi.studio.chart.editors.ChartEditorComponents;
import it.eng.spagobi.studio.chart.utils.ScatterRangeMarker;

import org.dom4j.Document;
import org.eclipse.core.resources.IFile;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.ScrolledForm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ScatterChartModel extends ChartModel {

	ScatterRangeMarker scatterRangeMarker;
	private static Logger logger = LoggerFactory.getLogger(ScatterChartModel.class);

	public void eraseSpecificParameters() {
		scatterRangeMarker=new ScatterRangeMarker();
		super.eraseSpecificParameters();
	}


	public ScatterChartModel(String type, String subType_, IFile thisFile, Document configDocument_) throws Exception {
		super(type, subType_, thisFile, configDocument_);
		scatterRangeMarker=new ScatterRangeMarker();
		scatterRangeMarker.fillScatterRangeRankConfigurations(type, thisDocument);
	}


	@Override
	public void initializeEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		// TODO Auto-generated method stub
		super.initializeEditor(editor, components, toolkit, form);
		components.createScatterRangeMarkerSection(this, toolkit, form);
		components.getScatterRangeMarkerEditor().setVisible(true);

	}



	@Override
	public void refreshEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		logger.debug("Erase fields of editor");
		eraseSpecificParameters();
		super.refreshEditor(editor, components, toolkit, form);
		components.getScatterRangeMarkerEditor().eraseComposite();
		getScatterRangeMarker().fillScatterRangeRankConfigurations(type, thisDocument);
		components.getScatterRangeMarkerEditor().refillFieldsScatterRangeMarker(this,editor, toolkit, form);							
		components.getScatterRangeMarkerEditor().setVisible(true);

	}


	@Override
	public String toXML() {
		String toReturn="";
		logger.debug("Write XML for Model");
		toReturn = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n";
		if(subType==null) {
			logger.error("Sub Type not defined");
			return "";
		}

		logger.debug("General settings");

		//intestazione
		toReturn+="<SCATTERCHART type=\""+this.subType+"\" name=\""+this.title+"\">\n";

		toReturn+=super.toXML();
		
		toReturn+=scatterRangeMarker.toXML();

		toReturn+="</SCATTERCHART>\n";

		logger.debug("Final Template is\n:" + toReturn);
		return toReturn;
	}


	public ScatterRangeMarker getScatterRangeMarker() {
		return scatterRangeMarker;
	}


	public void setScatterRangeMarker(ScatterRangeMarker scatterRangeMarker) {
		this.scatterRangeMarker = scatterRangeMarker;
	}



}
