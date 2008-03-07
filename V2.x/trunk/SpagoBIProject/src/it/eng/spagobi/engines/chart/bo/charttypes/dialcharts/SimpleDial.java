/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

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

/** Configure and draw a dialChart
 *  * @author Giulio Gavardi
 * 
 */

package it.eng.spagobi.engines.chart.bo.charttypes.dialcharts;


import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.engines.chart.bo.charttypes.utils.KpiInterval;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.GradientPaint;
import java.awt.Point;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.dial.ArcDialFrame;
import org.jfree.chart.plot.dial.DialBackground;
import org.jfree.chart.plot.dial.DialPlot;
import org.jfree.chart.plot.dial.DialPointer;
import org.jfree.chart.plot.dial.StandardDialRange;
import org.jfree.chart.plot.dial.StandardDialScale;
import org.jfree.data.general.Dataset;
import org.jfree.data.general.ValueDataset;
import org.jfree.ui.GradientPaintTransformType;
import org.jfree.ui.StandardGradientPaintTransformer;

public class SimpleDial extends DialCharts{

	private static transient Logger logger=Logger.getLogger(SimpleDial.class);

	double increment=0.0;
	int minorTickCount=0;
	Vector intervals;

	
	boolean horizontalView=false; //false is vertical, true is horizontal

	public static final String CHANGE_VIEW_HORIZONTAL="horizontal";

	public static final String CHANGE_VIEW_LABEL="Set View Orientation";
	public static final String CHANGE_VIEW_LABEL1="Set Vertical View";
	public static final String CHANGE_VIEW_LABEL2="Set Horizontal View";
	
	
	
	
	
	
	
	public SimpleDial() {
		super();
		intervals=new Vector();
	}

	/**
	 * set parameters for the creation of the chart getting them from template or from LOV
	 * 
	 * @param content the content of the template.

	 * @return A chart that displays a value as a dial.
	 */

	

	public void configureChart(SourceBean content) {
		logger.debug("IN");
		super.configureChart(content);

		
		if(!isLovConfDefined){
			if(confParameters.get("increment")!=null){	
				String increment=(String)confParameters.get("increment");
				setIncrement(Double.valueOf(increment).doubleValue());
			}
			else {
				logger.error("increment not defined");
			}
			if(confParameters.get("minortickcount")!=null){	
				String minorTickCount=(String)confParameters.get("minortickcount");
				setMinorTickCount(Integer.valueOf(minorTickCount).intValue());
			}
			else {
				setMinorTickCount(10);
			}

		/*if(confParameters.get("orientation")!=null){	
				String orientation=(String)confParameters.get("orientation");
				setOrientation(orientation);
			}
			else {
				setOrientation("horizontal");
			}*/
			
			//reading intervals information
			SourceBean intervalsSB = (SourceBean)content.getAttribute("CONF.INTERVALS");
			List intervalsAttrsList=null;
			if(intervalsSB!=null){
				intervalsAttrsList = intervalsSB.getContainedSourceBeanAttributes();
			}

			if(intervalsAttrsList==null || intervalsAttrsList.isEmpty()){ // if intervals are not defined realize a single interval
				logger.warn("intervals not defined; default settings");
				/*KpiInterval interval=new KpiInterval();
				interval.setMin(getLower());
				interval.setMax(getUpper());
				interval.setColor(Color.white);
				addInterval(interval);*/
			}
			else{	

				Iterator intervalsAttrsIter = intervalsAttrsList.iterator();
				while(intervalsAttrsIter.hasNext()) {
					SourceBeanAttribute paramSBA = (SourceBeanAttribute)intervalsAttrsIter.next();
					SourceBean param = (SourceBean)paramSBA.getValue();
					String min= (String)param.getAttribute("min");
					String max= (String)param.getAttribute("max");
					String col= (String)param.getAttribute("color");

					KpiInterval interval=new KpiInterval();
					interval.setMin(Double.valueOf(min).doubleValue());
					interval.setMax(Double.valueOf(max).doubleValue());

					Color color=new Color(Integer.decode(col).intValue());
					if(color!=null){
						interval.setColor(color);}
					else{
						// sets default color
						interval.setColor(Color.white);
					}
					addInterval(interval);
				}
			}
		}

		else{
			String increment=(String)sbRow.getAttribute("increment");
			String minorTickCount=(String)sbRow.getAttribute("minorTickCount");
			//String orientation=(String)sbRow.getAttribute("orientation");
			setIncrement(Double.valueOf(increment).doubleValue());
			setMinorTickCount(Integer.valueOf(minorTickCount).intValue());			
			
			
			
			/*if(orientation!=null)
				setOrientation(orientation);
			else
				setOrientation("horizontal");
		*/
		String intervalsNumber=(String)sbRow.getAttribute("intervalsnumber");
		if(intervalsNumber==null || intervalsNumber.equals("") || intervalsNumber.equals("0")){ // if intervals are not specified
			/*KpiInterval interval=new KpiInterval();
			interval.setMin(getLower());
			interval.setMax(getUpper());
			interval.setColor(Color.WHITE);
			addInterval(interval);*/
		}
		else{
			for(int i=1;i<=Integer.valueOf(intervalsNumber).intValue();i++){
				KpiInterval interval=new KpiInterval();
				String min=(String)sbRow.getAttribute("min"+(new Integer(i)).toString());
				String max=(String)sbRow.getAttribute("max"+(new Integer(i)).toString());
				String col=(String)sbRow.getAttribute("color"+(new Integer(i)).toString());
				interval.setMin(Double.valueOf(min).doubleValue());
				interval.setMax(Double.valueOf(max).doubleValue());
				Color color=new Color(Integer.decode(col).intValue());
				interval.setColor(color);
				addInterval(interval);

			}
		}
		
		}
		logger.debug("out");
	}

	/**
	 * Creates the chart .
	 * 
	 * @param chartTitle  the chart title.
	 * @param dataset  the dataset.

	 * @return A chart .
	 */

	public JFreeChart createChart(String chartTitle, Dataset dataset) {
		// get data for diagrams
		logger.debug("IN");
		DialPlot plot = new DialPlot();
		plot.setDataset((ValueDataset)dataset);

		ArcDialFrame dialFrame=null;
		if(!horizontalView){
			plot.setView(0.78, 0.37, 0.22, 0.26);     
			dialFrame = new ArcDialFrame(-10.0, 20.0); 
		}
		else{
			plot.setView(0.21, 0.0, 0.58, 0.30);
			dialFrame = new ArcDialFrame(60.0, 60.0);
		}

		dialFrame.setInnerRadius(0.65);
		dialFrame.setOuterRadius(0.90);
		dialFrame.setForegroundPaint(Color.darkGray);
		dialFrame.setStroke(new BasicStroke(3.0f));
		plot.setDialFrame(dialFrame);

		GradientPaint gp = new GradientPaint(new Point(), 
				new Color(255, 255, 255), new Point(), 
				new Color(240, 240, 240));
		DialBackground sdb = new DialBackground(gp);

		GradientPaintTransformType gradientPaintTransformType=GradientPaintTransformType.VERTICAL;
		if(horizontalView){
			gradientPaintTransformType=GradientPaintTransformType.HORIZONTAL;
		}
		
		sdb.setGradientPaintTransformer(new StandardGradientPaintTransformer(
				gradientPaintTransformType));
		plot.addLayer(sdb);

		StandardDialScale scale=null;
		if(!horizontalView){
			scale = new StandardDialScale(0, 100, -8, 16.0, 
					10.0, 4);
		}
		else{
			scale = new StandardDialScale(lower, upper, 115.0, 
					-50.0, increment, minorTickCount);
		}

		// sets intervals
		for (Iterator iterator = intervals.iterator(); iterator.hasNext();) {
			KpiInterval interval = (KpiInterval) iterator.next();
			StandardDialRange range = new StandardDialRange(interval.getMin(), interval.getMax(), 
					interval.getColor()); 
			range.setInnerRadius(0.70);
			range.setOuterRadius(0.75);
			plot.addLayer(range);

		}

		scale.setTickRadius(0.88);
		scale.setTickLabelOffset(0.07);
		//scale.setMajorTickIncrement(25.0);
		plot.addScale(0, scale);

		DialPointer needle = new DialPointer.Pin();
		needle.setRadius(0.82);
		plot.addLayer(needle);
		JFreeChart chart1 = new JFreeChart(plot);
		chart1.setTitle(chartTitle);
		logger.debug("OUT");
		return chart1;
	}




	public double getIncrement() {
		return increment;
	}



	public void setIncrement(double increment) {
		this.increment = increment;
	}



	public int getMinorTickCount() {
		return minorTickCount;
	}



	public void setMinorTickCount(int minorTickCount) {
		this.minorTickCount = minorTickCount;
	}

	public Vector getIntervals() {
		return intervals;
	}

	public void addInterval(KpiInterval interval) {
		this.intervals.add(interval);
	}




	public boolean isChangeableView() {
		return true;
	}

	
	public List getPossibleChangePars() {
		List l=new Vector();
		l.add(CHANGE_VIEW_HORIZONTAL);
		return l;
	}

	public void setChangeViewsParameter(String changePar, boolean how) {
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_HORIZONTAL)){
			horizontalView=how;
			int temp=getWidth();
			setWidth(getHeight());
			setHeight(temp);
		}

	}

	public boolean getChangeViewParameter(String changePar) {
		boolean ret=false;
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_HORIZONTAL)){
			ret=horizontalView;
		}
		return ret;
	}

	public String getChangeViewParameterLabel(String changePar, int i) {
		String ret="";
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_HORIZONTAL)){
		if(i==0)	
			ret=CHANGE_VIEW_LABEL;
		else if(i==1) ret=CHANGE_VIEW_LABEL1;
		else if(i==2) ret=CHANGE_VIEW_LABEL2;

		}
		return ret;
	}




}
