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
import it.eng.spagobi.engines.chart.utils.DatasetMap;

import java.awt.Color;
import java.awt.Font;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.CategoryLabelPositions;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.labels.CategorySeriesLabelGenerator;
import org.jfree.chart.labels.StandardCategorySeriesLabelGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.category.CategoryDataset;

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
	public JFreeChart createChart(DatasetMap datasets) {
		logger.debug("IN");
		CategoryDataset dataset=(CategoryDataset)datasets.getDatasets().get("1");

		PlotOrientation plotOrientation=PlotOrientation.VERTICAL;
		if(horizontalView)
		{
			plotOrientation=PlotOrientation.HORIZONTAL;
		}


		JFreeChart chart = ChartFactory.createBarChart(
				name,       // chart title
				categoryLabel,               // domain axis label
				valueLabel,                  // range axis label
				dataset,                  // data
				plotOrientation, // orientation
				false,                     // include legend
				true,                     // tooltips?
				false                     // URLs?
		);

		TextTitle title =setStyleTitle(name, styleTitle);
		chart.setTitle(title);
		if(subName!= null && !subName.equals("")){
			TextTitle subTitle =setStyleTitle(subName, styleSubTitle);
			chart.addSubtitle(subTitle);
		}

		// set the background color for the chart...
		chart.setBackgroundPaint(color);

		// get a reference to the plot for further customisation...
		CategoryPlot plot = (CategoryPlot) chart.getPlot();
		plot.setBackgroundPaint(Color.white);
		plot.setDomainGridlinePaint(Color.white);
		plot.setDomainGridlinesVisible(true);
		plot.setRangeGridlinePaint(Color.white);


		// set the range axis to display integers only...
		NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis();
		rangeAxis.setStandardTickUnits(NumberAxis.createIntegerTickUnits());
		rangeAxis.setLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setLabelPaint(styleXaxesLabels.getColor());
		rangeAxis.setTickLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setTickLabelPaint(styleXaxesLabels.getColor());

		// disable bar outlines...
		BarRenderer renderer = (BarRenderer) plot.getRenderer();
		renderer.setDrawBarOutline(false);

		// add
		CategorySeriesLabelGenerator generator = new StandardCategorySeriesLabelGenerator("{0}");
		renderer.setLegendItemLabelGenerator(generator);

		if(showValueLabels){
			renderer.setBaseItemLabelsVisible(true);
			renderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.PLAIN, styleValueLabels.getSize()));
			renderer.setBaseItemLabelPaint(styleValueLabels.getColor());
		}

		// PROVA LEGENDA		
		if(legend==true){

			drawLegend(chart);

			/*BlockContainer wrapper = new BlockContainer(new BorderArrangement());
			wrapper.setFrame(new BlockBorder(1.0, 1.0, 1.0, 1.0));

			LabelBlock titleBlock = new LabelBlock("Legend Items:",
					new Font("SansSerif", Font.BOLD, 12));
			title.setPadding(5, 5, 5, 5);
			wrapper.add(titleBlock, RectangleEdge.TOP);

			LegendTitle legend = new LegendTitle(chart.getPlot());
			BlockContainer items = legend.getItemContainer();
			items.setPadding(2, 10, 5, 2);
			wrapper.add(items);
			legend.setWrapper(wrapper);

			if(legendPosition.equalsIgnoreCase("bottom")) legend.setPosition(RectangleEdge.BOTTOM);
			else if(legendPosition.equalsIgnoreCase("left")) legend.setPosition(RectangleEdge.LEFT);
			else if(legendPosition.equalsIgnoreCase("right")) legend.setPosition(RectangleEdge.RIGHT);
			else if(legendPosition.equalsIgnoreCase("top")) legend.setPosition(RectangleEdge.TOP);
			else legend.setPosition(RectangleEdge.BOTTOM);

			legend.setHorizontalAlignment(HorizontalAlignment.LEFT);
			chart.addSubtitle(legend);*/
		}


		int seriesN=dataset.getRowCount();
		if(colorMap!=null){
			for (int i = 0; i < seriesN; i++) {
				String serieName=(String)dataset.getRowKey(i);
				Color color=(Color)colorMap.get(serieName);
				if(color!=null){
					renderer.setSeriesPaint(i, color);
					renderer.setSeriesItemLabelFont(i, new Font(defaultLabelsStyle.getFontName(), Font.PLAIN, defaultLabelsStyle.getSize()));
					renderer.setSeriesItemLabelPaint(i, defaultLabelsStyle.getColor());
				}	
			}
		}



		CategoryAxis domainAxis = plot.getDomainAxis();
		domainAxis.setCategoryLabelPositions(
				CategoryLabelPositions.createUpRotationLabelPositions(
						Math.PI / 6.0));
		domainAxis.setLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
		domainAxis.setLabelPaint(styleYaxesLabels.getColor());
		domainAxis.setTickLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
		domainAxis.setTickLabelPaint(styleYaxesLabels.getColor());
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
