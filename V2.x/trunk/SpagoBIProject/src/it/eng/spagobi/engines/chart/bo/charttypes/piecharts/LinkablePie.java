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
package it.eng.spagobi.engines.chart.bo.charttypes.piecharts;

import it.businesslogic.ireport.chart.Plot;
import it.eng.spago.base.SourceBean;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart;
import it.eng.spagobi.engines.chart.bo.charttypes.utils.MyCategoryUrlGenerator;
import it.eng.spagobi.engines.chart.bo.charttypes.utils.MyPieUrlGenerator;

import java.awt.Font;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.labels.StandardCategoryToolTipGenerator;
import org.jfree.chart.labels.StandardPieSectionLabelGenerator;
import org.jfree.chart.plot.PiePlot;
import org.jfree.chart.plot.PiePlot3D;
import org.jfree.chart.title.TextTitle;
import org.jfree.chart.urls.PieURLGenerator;
import org.jfree.chart.urls.StandardPieURLGenerator;
import org.jfree.data.general.Dataset;
import org.jfree.data.general.PieDataset;
import org.jfree.util.Rotation;

public class LinkablePie extends PieCharts implements ILinkableChart{

	boolean threeD=false; //false is 2D, true is 3D
	boolean isThreedViewConfigured=false;
	boolean percentage=false;
	boolean isPercentageConfigured=false;
	private static transient Logger logger=Logger.getLogger(LinkablePie.class);


	String rootUrl=null;
	String mode="";
	String drillLabel="";
	HashMap drillParameter=null;
	String categoryUrlName="";


	public static final String CHANGE_VIEW_3D_LABEL="Set View Dimension";
	public static final String CHANGE_VIEW_3D_LABEL1="Set 2D";
	public static final String CHANGE_VIEW_3D_LABEL2="Set 3D";


	public static final String CHANGE_VIEW_3D="threeD";

	public static final String CHANGE_VIEW_PERCENTAGE_LABEL="Set Percentage Mode";
	public static final String CHANGE_VIEW_PERCENTAGE_LABEL1="Absolute Values";
	public static final String CHANGE_VIEW_PERCENTAGE_LABEL2="Percentage Values";


	public static final String CHANGE_VIEW_PERCENTAGE="percentage";



	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.piecharts.PieCharts#configureChart(it.eng.spago.base.SourceBean)
	 */
	public void configureChart(SourceBean content) {
		// TODO Auto-generated method stub
		super.configureChart(content);
		if(confParameters.get("dimensions")!=null){	
			String orientation=(String)confParameters.get("dimensions");
			if(orientation.equalsIgnoreCase("3D")){
				threeD=true;
				isThreedViewConfigured=true;
			}
			else if(orientation.equalsIgnoreCase("2D")){
				threeD=false;
				isThreedViewConfigured=true;
			}
		}
		if(confParameters.get("values")!=null){	
			String orientation=(String)confParameters.get("values");
			if(orientation.equalsIgnoreCase("percentage")){
				percentage=true;
				isPercentageConfigured=true;
			}
			else if(orientation.equalsIgnoreCase("absolute")){
				percentage=false;
				isPercentageConfigured=true;
			}
		}


		SourceBean drillSB = (SourceBean)content.getAttribute("CONF.DRILL");
		if(drillSB!=null){
			String lab=(String)drillSB.getAttribute("document");
			if(lab!=null) drillLabel=lab;
			else{
				logger.error("Drill label not found");
			}

			List parameters =drillSB.getAttributeAsList("PARAM");
			if(parameters!=null){
				drillParameter=new HashMap();	

				for (Iterator iterator = parameters.iterator(); iterator.hasNext();) {
					SourceBean att = (SourceBean) iterator.next();
					String name=(String)att.getAttribute("name");
					String type=(String)att.getAttribute("type");
					String value=(String)att.getAttribute("value");
					
					if(type!=null && type.equalsIgnoreCase("RELATIVE")){ // Case relative
						if(value.equalsIgnoreCase("category"))categoryUrlName=value;
					}
					else{												// Case absolute
						drillParameter.put(name, value);
					}
					
				}
			}
		}

	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.piecharts.PieCharts#createChart(java.lang.String, org.jfree.data.general.Dataset)
	 */
	public JFreeChart createChart(String chartTitle, Dataset dataset) {
		super.createChart(chartTitle, dataset);

		boolean document_composition=false;
		if(mode.equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITION))document_composition=true;


		JFreeChart chart=null; 

		if(!threeD){
			chart = ChartFactory.createPieChart(
					chartTitle,  
					(PieDataset)dataset,             // data
					legend,                // include legend
					true,
					false
			);


			chart.setBackgroundPaint(color);

			TextTitle title = chart.getTitle();
			title.setToolTipText("A title tooltip!");


			PiePlot plot = (PiePlot) chart.getPlot();
			plot.setLabelFont(new Font("SansSerif", Font.PLAIN, 12));
			// plot.setNoDataMessages("No data available");
			plot.setCircular(false);
			plot.setLabelGap(0.02);
			plot.setNoDataMessage("No data available");

			if(percentage==false){
				plot.setLabelGenerator(new StandardPieSectionLabelGenerator(
				"{0} ({1})"));}
			else
			{
				plot.setLabelGenerator(new StandardPieSectionLabelGenerator(
				"{0} ({2})"));
			}

			MyPieUrlGenerator pieUrl=new MyPieUrlGenerator(rootUrl);
			pieUrl.setDocument_composition(document_composition);
			pieUrl.setCategoryUrlLabel(categoryUrlName);

			plot.setURLGenerator(pieUrl);			

			
			


		}
		else{
			chart = ChartFactory.createPieChart3D(
					chartTitle,  
					(PieDataset)dataset,             // data
					true,                // include legend
					true,
					false
			);



			chart.setBackgroundPaint(color);

			TextTitle title = chart.getTitle();
			title.setToolTipText("A title tooltip!");


			PiePlot3D plot = (PiePlot3D) chart.getPlot();

			plot.setDarkerSides(true);
			plot.setStartAngle(290);
			plot.setDirection(Rotation.CLOCKWISE);
			plot.setForegroundAlpha(1.0f);
			plot.setDepthFactor(0.2);

			plot.setLabelFont(new Font("SansSerif", Font.PLAIN, 12));
			// plot.setNoDataMessages("No data available");
			plot.setCircular(false);
			plot.setLabelGap(0.02);
			plot.setNoDataMessage("No data available");



			//org.jfree.chart.renderer.category.BarRenderer renderer = new org.jfree.chart.renderer.category.AreaRenderer);

			MyPieUrlGenerator pieUrl=new MyPieUrlGenerator(rootUrl);
			pieUrl.setDocument_composition(document_composition);
			pieUrl.setCategoryUrlLabel(categoryUrlName);

			plot.setURLGenerator(pieUrl);			


			if(percentage==false){
				plot.setLabelGenerator(new StandardPieSectionLabelGenerator(
						"{0} ({1})"));}
			else
			{
				plot.setLabelGenerator(new StandardPieSectionLabelGenerator(
				"{0} ({2})"));
			}
		}





		return chart;

	}




	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#isChangeableView()
	 */
	public boolean isChangeableView() {
		return true;	
	}





	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#setChangeViewsParameter(java.lang.String, boolean)
	 */
	public void setChangeViewsParameter(String changePar, boolean how) {
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_3D)){
			threeD=how;
		}
		else if(changePar.equalsIgnoreCase(CHANGE_VIEW_PERCENTAGE)){
			percentage =how;
		}


	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getChangeViewParameter(java.lang.String)
	 */
	public boolean getChangeViewParameter(String changePar) {
		boolean ret=false;
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_3D)){
			ret=threeD;
		}
		else if(changePar.equalsIgnoreCase(CHANGE_VIEW_PERCENTAGE)){
			ret=percentage;
		}
		return ret;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getChangeViewParameterLabel(java.lang.String, int)
	 */
	public String getChangeViewParameterLabel(String changePar, int i) {
		String ret="";
		if(changePar.equalsIgnoreCase(CHANGE_VIEW_3D)){
			if(i==0) ret=CHANGE_VIEW_3D_LABEL;
			else if(i==1) ret=CHANGE_VIEW_3D_LABEL1;
			else if(i==2) ret=CHANGE_VIEW_3D_LABEL2;
		}
		else if(changePar.equalsIgnoreCase(CHANGE_VIEW_PERCENTAGE)){
			if(i==0) ret=CHANGE_VIEW_PERCENTAGE_LABEL;
			else if(i==1) ret=CHANGE_VIEW_PERCENTAGE_LABEL1;
			else if(i==2) ret=CHANGE_VIEW_PERCENTAGE_LABEL2;
		}

		return ret;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#getPossibleChangePars()
	 */
	public List getPossibleChangePars() {
		List l=new Vector();
		if(!isThreedViewConfigured)	{l.add(CHANGE_VIEW_3D); }
		if(!isPercentageConfigured){ l.add(CHANGE_VIEW_PERCENTAGE); }
		return l;
	}


	/**
	 * Checks if is three d.
	 * 
	 * @return true, if is three d
	 */
	public boolean isThreeD() {
		return threeD;
	}


	/**
	 * Sets the three d.
	 * 
	 * @param threeD the new three d
	 */
	public void setThreeD(boolean threeD) {
		this.threeD = threeD;
	}


	/**
	 * Checks if is threed view configured.
	 * 
	 * @return true, if is threed view configured
	 */
	public boolean isThreedViewConfigured() {
		return isThreedViewConfigured;
	}


	/**
	 * Sets the threed view configured.
	 * 
	 * @param isThreedViewConfigured the new threed view configured
	 */
	public void setThreedViewConfigured(boolean isThreedViewConfigured) {
		this.isThreedViewConfigured = isThreedViewConfigured;
	}


	/**
	 * Checks if is percentage.
	 * 
	 * @return true, if is percentage
	 */
	public boolean isPercentage() {
		return percentage;
	}


	/**
	 * Sets the percentage.
	 * 
	 * @param percentage the new percentage
	 */
	public void setPercentage(boolean percentage) {
		this.percentage = percentage;
	}


	/**
	 * Checks if is percentage configured.
	 * 
	 * @return true, if is percentage configured
	 */
	public boolean isPercentageConfigured() {
		return isPercentageConfigured;
	}


	/**
	 * Sets the percentage configured.
	 * 
	 * @param isPercentageConfigured the new percentage configured
	 */
	public void setPercentageConfigured(boolean isPercentageConfigured) {
		this.isPercentageConfigured = isPercentageConfigured;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getRootUrl()
	 */
	public String getRootUrl() {
		return rootUrl;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setRootUrl(java.lang.String)
	 */
	public void setRootUrl(String rootUrl) {
		this.rootUrl = rootUrl;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getMode()
	 */
	public String getMode() {
		return mode;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setMode(java.lang.String)
	 */
	public void setMode(String mode) {
		this.mode = mode;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getDrillLabel()
	 */
	public String getDrillLabel() {
		return drillLabel;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setDrillLabel(java.lang.String)
	 */
	public void setDrillLabel(String drillLabel) {
		this.drillLabel = drillLabel;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getDrillParameter()
	 */
	public HashMap getDrillParameter() {
		return drillParameter;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setDrillParameter(java.util.HashMap)
	 */
	public void setDrillParameter(HashMap drillParameter) {
		this.drillParameter = drillParameter;
	}


	/**
	 * Gets the cHANG e_ vie w_3 d_ label.
	 * 
	 * @return the cHANG e_ vie w_3 d_ label
	 */
	public static String getCHANGE_VIEW_3D_LABEL() {
		return CHANGE_VIEW_3D_LABEL;
	}


	/**
	 * Gets the cHANG e_ vie w_3 d_ labe l1.
	 * 
	 * @return the cHANG e_ vie w_3 d_ labe l1
	 */
	public static String getCHANGE_VIEW_3D_LABEL1() {
		return CHANGE_VIEW_3D_LABEL1;
	}


	/**
	 * Gets the cHANG e_ vie w_3 d_ labe l2.
	 * 
	 * @return the cHANG e_ vie w_3 d_ labe l2
	 */
	public static String getCHANGE_VIEW_3D_LABEL2() {
		return CHANGE_VIEW_3D_LABEL2;
	}


	/**
	 * Gets the cHANG e_ vie w_3 d.
	 * 
	 * @return the cHANG e_ vie w_3 d
	 */
	public static String getCHANGE_VIEW_3D() {
		return CHANGE_VIEW_3D;
	}


	/**
	 * Gets the cHANG e_ vie w_ percentag e_ label.
	 * 
	 * @return the cHANG e_ vie w_ percentag e_ label
	 */
	public static String getCHANGE_VIEW_PERCENTAGE_LABEL() {
		return CHANGE_VIEW_PERCENTAGE_LABEL;
	}


	/**
	 * Gets the cHANG e_ vie w_ percentag e_ labe l1.
	 * 
	 * @return the cHANG e_ vie w_ percentag e_ labe l1
	 */
	public static String getCHANGE_VIEW_PERCENTAGE_LABEL1() {
		return CHANGE_VIEW_PERCENTAGE_LABEL1;
	}


	/**
	 * Gets the cHANG e_ vie w_ percentag e_ labe l2.
	 * 
	 * @return the cHANG e_ vie w_ percentag e_ labe l2
	 */
	public static String getCHANGE_VIEW_PERCENTAGE_LABEL2() {
		return CHANGE_VIEW_PERCENTAGE_LABEL2;
	}


	/**
	 * Gets the cHANG e_ vie w_ percentage.
	 * 
	 * @return the cHANG e_ vie w_ percentage
	 */
	public static String getCHANGE_VIEW_PERCENTAGE() {
		return CHANGE_VIEW_PERCENTAGE;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#isLinkable()
	 */
	public boolean isLinkable(){
		return true;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getCategoryUrlName()
	 */
	public String getCategoryUrlName() {
		return categoryUrlName;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setCategoryUrlName(java.lang.String)
	 */
	public void setCategoryUrlName(String categoryUrlName) {
		this.categoryUrlName = categoryUrlName;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getDocument_Parameters(java.util.HashMap)
	 */
	public String getDocument_Parameters(HashMap drillParameters) {
		String document_parameter="";
		for (Iterator iterator = drillParameters.keySet().iterator(); iterator.hasNext();) {
			String name = (String) iterator.next();
			String value=(String)drillParameters.get(name);
			if(name!=null && !name.equals("") && value!=null && !value.equals("")){
				document_parameter+="%26"+name+"%3D"+value;
				//document_parameter+="&"+name+"="+value;
			}

		}
		return document_parameter;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getSerieUrlname()
	 */
	public String getSerieUrlname() {
		// TODO Auto-generated method stub
		return null;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setSerieUrlname(java.lang.String)
	 */
	public void setSerieUrlname(String serieUrlname) {
		// TODO Auto-generated method stub
		
	}


}
