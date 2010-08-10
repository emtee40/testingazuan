package it.eng.spagobi.studio.chart.editors.model.chart;

import it.eng.spagobi.studio.chart.editors.ChartEditor;
import it.eng.spagobi.studio.chart.editors.ChartEditorComponents;
import it.eng.spagobi.studio.chart.utils.DrillConfiguration;
import it.eng.spagobi.studio.core.log.SpagoBILogger;

import org.dom4j.Document;
import org.dom4j.Node;
import org.eclipse.core.resources.IFile;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.ScrolledForm;

public class BoxChartModel extends ChartModel {

	

	public void eraseSpecificParameters() {
		super.eraseSpecificParameters();
	}

	
	public BoxChartModel(String type, String subType_, IFile thisFile, Document configDocument_) throws Exception {
		super(type, subType_, thisFile, configDocument_);
	}

	
	@Override
	public void initializeEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		// TODO Auto-generated method stub
		super.initializeEditor(editor, components, toolkit, form);

	}



	@Override
	public void refreshEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		SpagoBILogger.infoLog("Erase fields of editor");
		eraseSpecificParameters();
		super.refreshEditor(editor, components, toolkit, form);

	}


	@Override
	public String toXML() {
		String toReturn="";
		SpagoBILogger.infoLog("Write XML for Model");
		toReturn = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n";
		if(subType==null) {
			SpagoBILogger.errorLog("Sub Type not defined",null);
			return "";
		}

		SpagoBILogger.infoLog("General settings");

		//intestazione
		toReturn+="<BOXCHART type=\""+this.subType+"\" name=\""+this.title+"\">\n";

		toReturn+=super.toXML();
		
		toReturn+="</BOXCHART>\n";

		SpagoBILogger.infoLog("Final Template is\n:" + toReturn);
		return toReturn;
	}

	
	
	
}
