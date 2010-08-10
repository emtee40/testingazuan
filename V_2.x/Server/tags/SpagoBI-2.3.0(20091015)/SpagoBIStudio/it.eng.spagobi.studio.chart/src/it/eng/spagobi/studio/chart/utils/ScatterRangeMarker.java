package it.eng.spagobi.studio.chart.utils;

import it.eng.spagobi.studio.chart.editors.ChartEditor;
import it.eng.spagobi.studio.chart.editors.ChartEditorUtils;
import it.eng.spagobi.studio.core.log.SpagoBILogger;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.Node;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Label;

public class ScatterRangeMarker {


	Double xRangeValueLow;
	Double xRangeValueHigh;

	Double yRangeValueLow;
	Double yRangeValueHigh;

	XYMarker xMarker=new XYMarker();
	XYMarker yMarker=new XYMarker();



	public void fillScatterRangeRankConfigurations(String type, Document thisDocument){
		SpagoBILogger.infoLog("Recording and Filling te range and marker configurations");

		// Search if there is info to fill
		Node xRangeNode=thisDocument.selectSingleNode("//"+type.toUpperCase()+"/PARAMETER[@name='x_range']");
		if(xRangeNode!=null){
			String valueLowS=xRangeNode.valueOf("@value_low");
			try{
				Double lowD=Double.valueOf(valueLowS);
				xRangeValueLow=lowD;
			}
			catch (Exception e) {
				xRangeValueLow=0.0;
			}

			String valueHighS=xRangeNode.valueOf("@value_high");
			try{
				Double highD=Double.valueOf(valueHighS);
				xRangeValueHigh=highD;
			}
			catch (Exception e) {
				xRangeValueHigh=0.0;
			}
		}

		Node yRangeNode=thisDocument.selectSingleNode("//"+type.toUpperCase()+"/PARAMETER[@name='y_range']");
		if(yRangeNode!=null){
			String valueLowS=yRangeNode.valueOf("@value_low");
			try{
				Double lowD=Double.valueOf(valueLowS);
				yRangeValueLow=lowD;
			}
			catch (Exception e) {
				yRangeValueLow=0.0;			
			}

			String valueHighS=yRangeNode.valueOf("@value_high");
			try{
				Double highD=Double.valueOf(valueHighS);
				yRangeValueHigh=highD;
			}
			catch (Exception e) {
				yRangeValueHigh=0.0;			
			}
		}


		Node xMarkerNode=thisDocument.selectSingleNode("//"+type.toUpperCase()+"/PARAMETER[@name='x_marker']");
		xMarker.fillMarkerConfigurations(xMarkerNode);

		Node yMarkerNode=thisDocument.selectSingleNode("//"+type.toUpperCase()+"/PARAMETER[@name='y_marker']");
		yMarker.fillMarkerConfigurations(yMarkerNode);

	}

	public String toXML(){
		String toReturn="";
		if(xRangeValueLow!=null || xRangeValueHigh!=null){
			toReturn+="<PARAMETER name='x_range' ";
			if(xRangeValueLow!=null){
				toReturn+="value_low='"+xRangeValueLow.toString()+"' ";
			}
			if(xRangeValueHigh!=null){
				toReturn+="value_high='"+xRangeValueHigh.toString()+"' ";
			}
			toReturn+=" />\n";
		}

		if(yRangeValueLow!=null || yRangeValueHigh!=null){
			toReturn+="<PARAMETER name='y_range' ";
			if(yRangeValueLow!=null){
				toReturn+="value_low='"+yRangeValueLow.toString()+"' ";
			}
			if(yRangeValueHigh!=null){
				toReturn+="value_high='"+yRangeValueHigh.toString()+"' ";
			}
			toReturn+=" />\n";
		}

		if(xMarker!=null){
			toReturn+=xMarker.toXML("x_marker");
		}
		if(yMarker!=null){
			toReturn+=yMarker.toXML("y_marker");
		}
		
		return toReturn;
	}

	public Double getXRangeValueLow() {
		return xRangeValueLow;
	}

	public void setXRangeValueLow(Double rangeValueLow) {
		xRangeValueLow = rangeValueLow;
	}

	public Double getXRangeValueHigh() {
		return xRangeValueHigh;
	}

	public void setXRangeValueHigh(Double rangeValueHigh) {
		xRangeValueHigh = rangeValueHigh;
	}

	public Double getYRangeValueLow() {
		return yRangeValueLow;
	}

	public void setYRangeValueLow(Double rangeValueLow) {
		yRangeValueLow = rangeValueLow;
	}

	public Double getYRangeValueHigh() {
		return yRangeValueHigh;
	}

	public void setYRangeValueHigh(Double rangeValueHigh) {
		yRangeValueHigh = rangeValueHigh;
	}

	public XYMarker getXMarker() {
		return xMarker;
	}

	public void setXMarker(XYMarker marker) {
		xMarker = marker;
	}

	public XYMarker getYMarker() {
		return yMarker;
	}

	public void setYMarker(XYMarker marker) {
		yMarker = marker;
	}

	

}
