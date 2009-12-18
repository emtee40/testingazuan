package it.eng.spagobi.studio.chart.editors.model.chart;

import it.eng.spagobi.studio.chart.editors.ChartEditor;
import it.eng.spagobi.studio.chart.editors.ChartEditorComponents;
import it.eng.spagobi.studio.chart.editors.ChartEditorUtils;
import it.eng.spagobi.studio.chart.utils.DrillConfiguration;
import it.eng.spagobi.studio.chart.utils.Interval;
import it.eng.spagobi.studio.core.log.SpagoBILogger;

import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.dom4j.Document;
import org.dom4j.Node;
import org.eclipse.core.resources.IFile;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.ScrolledForm;

public class DialChartModel extends ChartModel {


	Vector<Interval> intervals;

	public final static String THERMOMETHER="thermomether";

	public void eraseSpecificParameters() {
		intervals=new Vector<Interval>();
		super.eraseSpecificParameters();
	}


	public DialChartModel(String type, String subType_, IFile thisFile, Document configDocument_) throws Exception {
		super(type, subType_, thisFile, configDocument_);
		intervals=new Vector<Interval>();
		// register intervals, 
		fillIntervalsInformation(type, thisDocument);
	}


	public void fillIntervalsInformation(String type, Document thisDocument){
		// Search in present template and fill the field from presentDocument, otherwise from templateDocument
		SpagoBILogger.infoLog("Recording and Filling intervals from file or from template");

		Node intervalsN=thisDocument.selectSingleNode("//"+type.toUpperCase()+"/INTERVALS");
		if(intervalsN!=null){
			ChartEditorUtils.print("Doc to insert", thisDocument);
			List<Node> allIntervals=thisDocument.selectNodes("//"+type.toUpperCase()+"/INTERVALS/INTERVAL");
			// run intervals found in actual document or in template and record them in model
			for (Iterator iterator = allIntervals.iterator(); iterator.hasNext();) {
				Node node = (Node) iterator.next();
				Interval interval=new Interval();
				String label=node.valueOf("@label");
				String min=node.valueOf("@min");
				String max=node.valueOf("@max");
				String color=node.valueOf("@color");			
				if(label!=null){
					interval.setLabel(label);
				}
				if(min!=null){
					Double minValD;
					try{
						minValD=Double.valueOf(min);
					}
					catch (Exception e) {
						SpagoBILogger.errorLog("Not double format for min parameter in interval; set default 0", e);				
						minValD=new Double(0);
					}
					interval.setMin(minValD);
				}
				if(max!=null){
					Double maxValD;
					try{
						maxValD=Double.valueOf(max);
					}
					catch (Exception e) {
						SpagoBILogger.errorLog("Not double format for max parameter in interval; set default 0", e);				
						maxValD=new Double(0);
					}
					interval.setMax(maxValD);
				}
				if(color!=null){
					interval.setColor(ChartEditor.convertHexadecimalToRGB(color));
				}
				// Add interval to Vector

				this.intervals.add(interval);
			}
		}
	}




	@Override
	public void initializeEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		// TODO Auto-generated method stub
		super.initializeEditor(editor, components, toolkit, form);
		//fillIntervalsInformation(type, thisDocument, templateDocument);

		components.createIntervalsInformationsSection(this, editor, toolkit, form);
		components.getIntervalsInformationEditor().setVisible(true);

	}




	@Override
	public void refreshEditor(ChartEditor editor,
			ChartEditorComponents components, FormToolkit toolkit,
			ScrolledForm form) throws Exception {
		eraseSpecificParameters();
		super.refreshEditor(editor, components, toolkit, form);
		SpagoBILogger.infoLog("Erase fields of editor");
		components.getIntervalsInformationEditor().eraseComposite();
		//fillIntervalsInformation(type, thisDocument);
		components.getIntervalsInformationEditor().refillFieldsIntervalsInformation(this,editor, toolkit, form);							
		components.getIntervalsInformationEditor().setVisible(true);
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
		toReturn+="<DIALCHART type=\""+this.subType+"\" name=\""+this.title+"\">\n";

		toReturn+=super.toXML();

		// Print intervals
		toReturn+="<INTERVALS>\n";
		for (Iterator iterator = intervals.iterator(); iterator.hasNext();) {
			Interval interval = (Interval) iterator.next();
			toReturn+=interval.toXML()+"\n";
		}

		toReturn+="</INTERVALS>\n";

		toReturn+="</DIALCHART>\n";

		SpagoBILogger.infoLog("Final Template is\n:" + toReturn);
		return toReturn;
	}


	public Vector<Interval> getIntervals() {
		return intervals;
	}


	public void setIntervals(Vector<Interval> intervals) {
		this.intervals = intervals;
	}




}
