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
package it.eng.spagobi.engines.kpi.bo;

import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.engines.chart.utils.DatasetMap;
import it.eng.spagobi.engines.kpi.utils.KpiInterval;
import it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts.BulletGraph;
import it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts.Meter;
import it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts.SimpleDial;
import it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts.Speedometer;
import it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts.Thermometer;
import it.eng.spagobi.engines.kpi.bo.charttypes.trendcharts.LineChart;
import it.eng.spagobi.engines.kpi.utils.StyleLabel;
import it.eng.spagobi.kpi.threshold.bo.Threshold;

import java.awt.Color;
import java.awt.Font;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.general.DefaultValueDataset;
import org.jfree.ui.HorizontalAlignment;
import org.jfree.ui.RectangleEdge;
import org.jfree.ui.RectangleInsets;
import org.jfree.ui.VerticalAlignment;
/**
 * 
 * @author Chiara Chiarelli
 * 
 */

public class ChartImpl {
	
	private static transient Logger logger=Logger.getLogger(ChartImpl.class);
	
	protected String name=null;//Chart Title
	protected String subName=null;//Chart Sub Title
	protected StyleLabel styleTitle;//Chart Title style
	protected StyleLabel styleSubTitle;//Chart Sub Title style
	protected Integer width;//Chart Width
	protected Integer height;//Chart height
	protected IEngUserProfile profile;
	protected Color color;//background color of the chart
	protected Boolean legend = true;//true if legend visible; false if not	
	
	protected DefaultValueDataset dataset ;//ValueDataset for the chart
	
	protected Vector intervals ;//List of chart intervals	
	protected double lower=0.0;//Chart's lower bound
	protected double upper=0.0;//Chart's higher bound
	protected Double target=null;//Chart's target to attaign

	/**
	 * This function creates the chart object.
	 * 
	 * @return the JFreeChart
	 */
	public JFreeChart createChart() {
		return null;
	}
	
	public DatasetMap calculateValue(String result) throws Exception {
		return null;
	}

	/**
	 * This function creates the object of the right subtype 
	 * 
	 * @param subtype: the subtype of the Dial Chart
	 * 
	 * @return the correct ChartImpl instanciated
	 */
	public static ChartImpl createChart(String subtype){
		logger.debug("IN");
		ChartImpl sbi=null;
			if(subtype.equalsIgnoreCase("Speedometer")){
				sbi=new Speedometer();
				logger.debug("Speedometer chart instanciated");
			}
			else if(subtype.equalsIgnoreCase("SimpleDial")){
				sbi= new SimpleDial();
				logger.debug("SimpleDial chart instanciated");
			}
			else if(subtype.equalsIgnoreCase("Thermometer")){
				sbi= new Thermometer();
				logger.debug("Thermometer chart instanciated");
			}
			else if(subtype.equalsIgnoreCase("Meter")){
				sbi= new Meter();
				logger.debug("Meter chart instanciated");
			}
			else if(subtype.equalsIgnoreCase("BulletGraph")){
				sbi= new BulletGraph();
				logger.debug("Meter chart instanciated");
			}
			else if(subtype.equalsIgnoreCase("LineChart")){
				sbi= new LineChart();
				logger.debug("Line chart instanciated");
			}			
			logger.debug("OUT");	
		return sbi;
	}

	/**
	 * This function configures the chart with the parameters passed in the config HashMap 
	 * 
	 * @param subtype: the subtype of the Dial Chart
	 * 
	 * @return the correct ChartImpl instanciated
	 */
	public void configureChart(HashMap config) {
		logger.debug("IN");
		name = (String) config.get("name");
			logger.debug("Chart title setted: "+((name!=null)?name:""));
		subName =(String) config.get("subName");
			logger.debug("Chart subtitle setted: "+((subName!=null)?subName:""));
		styleTitle = (StyleLabel)config.get("styleTitle");
			logger.debug("Chart style title setted");
		styleSubTitle =(StyleLabel) config.get("styleSubTitle");
			logger.debug("Chart style subtitle setted");
		logger.debug("OUT");	
	}
	
	/**
	 * Sets the Double value to represent into the Chart
	 * 
	 * @param Double value to set
	 * 
	 */
	public void setValueDataSet(Double valueToRepresent){
		this.dataset = new DefaultValueDataset(valueToRepresent);
	}
	
	/**
	 * Sets the Double value to represent the target into the Chart
	 * 
	 * @param Double value of the target to set
	 * 
	 */	
	public void setTarget(Double target){
		this.target = target;
	}
	
	/**
	 * This function returns the Double value represented in the chart
	 * 
	 * @return the Double value represented in the chart
	 */
	public DefaultValueDataset getValueDataSet(){
		return this.dataset ;
	}

	/**
	 * This function fills up the vector "intervals" with the intervals of the chart, getting them from a list of Thresholds 
	 * 
	 * @param List of thresholds to set
	 */
	public String setThresholds(List thresholds) {
		logger.debug("IN");
		String thresholdsJsArray = "";
		if(thresholds!=null && !thresholds.isEmpty()){
			Iterator it = thresholds.iterator();
			thresholdsJsArray += "[";
			while(it.hasNext()){
				thresholdsJsArray += "{";
				Threshold t = (Threshold)it.next();
				String type = t.getType();
				Double min = t.getMinValue();
				Double max = t.getMaxValue();
				String label = t.getLabel();
				Color c = t.getColor();
				
				if (type.equals("RANGE")){
					if (min.doubleValue()<lower){
						lower = min.doubleValue();
					}
					if (max.doubleValue()>upper){
						upper = max.doubleValue();
					}			
					
					KpiInterval interval = new KpiInterval();
					
					if(c!=null)	{
						interval.setColor(c);
					}else{
						interval.setColor(Color.WHITE);
					}
					if(label!=null)	{
						interval.setLabel(label);
					}else{
						interval.setLabel("");
					}
					
					if(max!=null)	{
						interval.setMax(max);
					}else{
						interval.setMax(upper);
					}
					
					if(min!=null)	{
						interval.setMin(min);
					}else{
						interval.setMin(lower);
					}
					String color = Integer.toHexString( interval.getColor().getRGB() & 0x00ffffff ) ;
					thresholdsJsArray += "min:"+interval.getMin()+",max:"+interval.getMax()+",label:'"+interval.getLabel()+"',color:'#"+color+"'";
					intervals.add(interval);
				}else if (type.equals("MINIMUM")){
					
					if (min.doubleValue()<lower){
						lower = min.doubleValue()*2;
					}	
					if(min.doubleValue()>0){
						upper = min.doubleValue()*2;
					}else if(min.doubleValue()==0){
						upper = 10;
						lower = -10;
					}
					
					KpiInterval interval1 = new KpiInterval();
					
					if(c!=null)	{
						interval1.setColor(c);
					}else{
						interval1.setColor(Color.WHITE);
					}
					if(label!=null)	{
						interval1.setLabel(label);
					}else{
						interval1.setLabel("");
					}
						interval1.setMax(min);
						interval1.setMin(lower);
					String color1 = Integer.toHexString( interval1.getColor().getRGB() & 0x00ffffff ) ;
					thresholdsJsArray += "min:"+interval1.getMin()+",max:"+interval1.getMax()+",label:"+interval1.getLabel()+",color:"+color1+"},";
					intervals.add(interval1);
					KpiInterval interval2 = new KpiInterval();
						interval2.setColor(Color.WHITE);
						interval2.setLabel("");
						interval2.setMax(upper);
						interval2.setMin(min);
					String color2 = Integer.toHexString( interval2.getColor().getRGB() & 0x00ffffff ) ;
					thresholdsJsArray += "min:"+interval2.getMin()+",max:"+interval2.getMax()+",label:"+interval2.getLabel()+",color:"+color2;	
					intervals.add(interval2);
					
				}else if (type.equals("MAXIMUM")){
					
					if (max.doubleValue()>upper){
						upper = max.doubleValue()*2;
					}	
					if (max.doubleValue()<0){
						lower = max.doubleValue()*2;
					}else if(max.doubleValue()==0){
						lower = -10;
						upper = 10;
					}
					
					KpiInterval interval1 = new KpiInterval();
						interval1.setColor(Color.WHITE);
					
						interval1.setLabel("");
						interval1.setMax(max);
						interval1.setMin(lower);	
					String color1 = Integer.toHexString( interval1.getColor().getRGB() & 0x00ffffff ) ;
					thresholdsJsArray += "min:"+interval1.getMin()+",max:"+interval1.getMax()+",label:'"+interval1.getLabel()+"',color:'#"+color1+"'},";	
					intervals.add(interval1);
					KpiInterval interval2 = new KpiInterval();
					if(c!=null)	{
						interval2.setColor(c);
					}else{
						interval2.setColor(Color.WHITE);
					}
					if(label!=null)	{
						interval2.setLabel(label);
					}else{
						interval2.setLabel("");
					}
						interval2.setMax(upper);
						interval2.setMin(max);	
					String color2 = Integer.toHexString( interval2.getColor().getRGB() & 0x00ffffff ) ;
					thresholdsJsArray += "{min:"+interval2.getMin()+",max:"+interval2.getMax()+",label:'"+interval2.getLabel()+"',color:'#"+color2+"'";		
					intervals.add(interval2);				
				}				
				logger.debug("New interval added to the Vector");
				thresholdsJsArray += "}";
				if(it.hasNext()){
					thresholdsJsArray += ",";
				}
			}
			thresholdsJsArray += "]";
		}
		logger.debug("OUT");
		return thresholdsJsArray;
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#getHeight()
	 */
	public int getHeight() {
		return height;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#getName()
	 */
	public String getName() {
		return name;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#getWidth()
	 */
	public int getWidth() {
		return width;

	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#setHeight(int)
	 */
	public void setHeight(int _height) {
		height=_height;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#setName(java.lang.String)
	 */
	public void setName(String _name) {
		name=_name;		
	}
	
	public void setSubName(String _name) {
		subName=_name;		
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#setWidth(int)
	 */
	public void setWidth(int _width) {
		width=_width;
	}

	/**
	 * Gets the profile.
	 * 
	 * @return the profile
	 */
	public IEngUserProfile getProfile() {
		return profile;
	}

	/**
	 * Sets the profile.
	 * 
	 * @param profile the new profile
	 */
	public void setProfile(IEngUserProfile profile) {
		this.profile = profile;
	}


	/**
	 * Gets the color.
	 * 
	 * @return the color
	 */
	public Color getColor() {
		return color;
	}

	/**
	 * Sets the color.
	 * 
	 * @param color the new color
	 */
	public void setColor(Color color) {
		this.color = color;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#isLegend()
	 */
	public boolean isLegend() {
		return legend;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.IChart#setLegend(boolean)
	 */
	public void setLegend(boolean legend) {
		this.legend = legend;
	}


	public TextTitle setStyleTitle(String title,StyleLabel titleLabel){
		Font font=null;
		Color color=null;


		boolean definedFont=true;
		boolean definedColor=true;

		if(titleLabel!=null ){
			if(titleLabel.getFont()!=null){
				font=titleLabel.getFont();
			}
			else{
				definedFont=false;
			}
			if(titleLabel.getColor()!=null){
				color=titleLabel.getColor();
			}
			else{
				definedColor=false;
			}
		}
		else{
			definedColor=false;
			definedFont=false;
		}

		if(!definedFont)
			font=new Font("Arial", Font.BOLD, 18);
		if(!definedColor)
			color=Color.BLACK;

		TextTitle titleText=new TextTitle(title,font,color, RectangleEdge.TOP, HorizontalAlignment.CENTER, VerticalAlignment.TOP, RectangleInsets.ZERO_INSETS);

		return titleText;
	}

}
