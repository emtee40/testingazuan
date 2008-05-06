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




package it.eng.spagobi.engines.chart.bo.charttypes.barcharts;

import it.eng.spago.base.SourceBean;

import java.awt.Color;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.CategoryLabelPositions;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.general.Dataset;

/**   @author Giulio Gavardi
 *     giulio.gavardi@eng.it
 */


public class SimpleBar extends BarCharts{

	boolean horizontalView=false; //false is vertical, true is horizontal
	boolean horizontalViewConfigured=false;

	public static final String CHANGE_VIEW_HORIZONTAL="horizontal";
	public static final String CHANGE_VIEW_LABEL="Set View Orientation";
	public static final String CHANGE_VIEW_LABEL1="Set Vertical View";
	public static final String CHANGE_VIEW_LABEL2="Set Horizontal View";
	private static transient Logger logger=Logger.getLogger(SimpleBar.class);


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.barcharts.BarCharts#configureChart(it.eng.spago.base.SourceBean)
	 */
	public void configureChart(SourceBean content) {
		logger.debug("IN");
		super.configureChart(content);
		if(confParameters.get("orientation")!=null){	
			String orientation=(String)confParameters.get("orientation");
			if(orientation.equalsIgnoreCase("vertical")){
				horizontalViewConfigured=true;
				horizontalView=false;
			}
			else if(orientation.equalsIgnoreCase("horizontal")){
				horizontalViewConfigured=true;
				horizontalView=true;
			}
		}
		logger.debug("OUT");
	}

	
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.barcharts.BarCharts#createChart(java.lang.String, org.jfree.data.general.Dataset)
	 */
	public JFreeChart createChart(String chartTitle, Dataset dataset) {
		logger.debug("IN");
		super.createChart(chartTitle, dataset);

		PlotOrientation plotOrientation=PlotOrientation.VERTICAL;
		if(horizontalView)
		{
			plotOrientation=PlotOrientation.HORIZONTAL;
		}


		JFreeChart chart = ChartFactory.createBarChart(
				chartTitle,       // chart title
				categoryLabel,               // domain axis label
				valueLabel,                  // range axis label
				(CategoryDataset)dataset,                  // data
				plotOrientation, // orientation
				legend,                     // include legend
				true,                     // tooltips?
				false                     // URLs?
		);


		// set the background color for the chart...
		chart.setBackgroundPaint(color);

		// get a reference to the plot for further customisation...
		CategoryPlot plot = (CategoryPlot) chart.getPlot();
		plot.setBackgroundPaint(Color.lightGray);
		plot.setDomainGridlinePaint(Color.white);
		plot.setDomainGridlinesVisible(true);
		plot.setRangeGridlinePaint(Color.white);

		// set the range axis to display integers only...
		NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis();
		rangeAxis.setStandardTickUnits(NumberAxis.createIntegerTickUnits());

		// disable bar outlines...
		BarRenderer renderer = (BarRenderer) plot.getRenderer();
		renderer.setDrawBarOutline(false);

		// if some series has been selected and colors has been defined
		if(currentSeries!=null && colorMap!=null){
							//for each serie selected
			int j=0;	
			for (Iterator iterator = currentSeries.iterator(); iterator.hasNext();) {
						String s = (String) iterator.next();
						Integer position=(Integer)seriesNumber.get(s);
						// check if for that position a value is defined
						if(colorMap.get("color"+position.toString())!=null){
							Color col= (Color)colorMap.get("color"+position);
							renderer.setSeriesPaint(j, col);
							}
						j++;
					}  // close for on series
		} // close case series selcted and color defined
		else{
			if(colorMap!=null){ // if series not selected check color each one

				for (Iterator iterator = colorMap.keySet().iterator(); iterator.hasNext();) {
					String key = (String) iterator.next();
					Color col= (Color)colorMap.get(key);
					String keyNum=key.substring(5, key.length());
					int num=Integer.valueOf(keyNum).intValue();
					num=num-1;
					renderer.setSeriesPaint(num, col);
				}
			}
		}

		CategoryAxis domainAxis = plot.getDomainAxis();
		domainAxis.setCategoryLabelPositions(
				CategoryLabelPositions.createUpRotationLabelPositions(
						Math.PI / 6.0));
		logger.debug("OUT");
		return chart;

	}



	/**
	 * Checks if is horizontal view.
	 * 
	 * @return true, if is horizontal view
	 */
	public boolean isHorizontalView() {
		return horizontalView;
	}

	/**
	 * Sets the horizontal view.
	 * 
	 * @param changeViewChecked the new horizontal view
	 */
	public void setHorizontalView(boolean changeViewChecked) {
		this.horizontalView = changeViewChecked;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#isChangeableView()
	 */
	public boolean isChangeableView() {
		return true;
	}




	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getPossibleChangePars()
	 */
	public List getPossibleChangePars() {
		List l=new Vector();
		if(!horizontalViewConfigured){
			l.add(CHANGE_VIEW_HORIZONTAL);}

		return l;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#setChangeViewsParameter(java.lang.String, boolean)
	 */
	public void setChangeViewsParameter(String changePar, boolean how) {
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_HORIZONTAL)){
			horizontalView=how;
		}

	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getChangeViewParameter(java.lang.String)
	 */
	public boolean getChangeViewParameter(String changePar) {
		boolean ret=false;
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_HORIZONTAL)){
			ret=horizontalView;
		}
		return ret;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getChangeViewParameterLabel(java.lang.String, int)
	 */
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
