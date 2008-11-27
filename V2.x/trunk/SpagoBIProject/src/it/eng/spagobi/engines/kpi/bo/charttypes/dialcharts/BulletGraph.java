package it.eng.spagobi.engines.kpi.bo.charttypes.dialcharts;

import it.eng.spagobi.engines.kpi.bo.ChartImpl;
import it.eng.spagobi.engines.kpi.utils.KpiInterval;

import java.awt.BasicStroke;
import java.awt.Color;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.IntervalMarker;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.ValueMarker;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.data.Range;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.Layer;
import org.jfree.ui.RectangleInsets;

public class BulletGraph  extends ChartImpl{
	private static transient Logger logger=Logger.getLogger(BulletGraph.class);
	
	public BulletGraph() {
		super();
		intervals=new Vector();	
	}
	
	public void configureChart(HashMap conf) {
		logger.debug("IN");
		super.configureChart(conf);
		logger.debug("OUT");
	}
	
	public void setThresholds(List thresholds) {
		logger.debug("IN");
		super.setThresholds(thresholds);
		logger.debug("OUT");
	}
	
	
	public JFreeChart createChart(){
		
		logger.debug("IN");
		Number value = null;
		
		if (dataset==null){
			logger.debug("The dataset to be represented is null");
			value = new Double(0);	
		}else{
			value = dataset.getValue();
		}
		
		DefaultCategoryDataset datasetC = new DefaultCategoryDataset(); 
	        datasetC.addValue(value, "", ""); 
		
		 // customize a bar chart 
        JFreeChart chart = ChartFactory.createBarChart( 
                null, 
                null, 
                null, 
                datasetC, 
                PlotOrientation.HORIZONTAL, 
                false, 
                false, 
                false); 
        chart.setBorderVisible(false); 

        CategoryPlot plot = chart.getCategoryPlot(); 
        plot.setOutlineVisible(true); 
        plot.setOutlinePaint(Color.BLACK);
        plot.setInsets(new RectangleInsets(0.0, 0.0, 0.0, 0.0)); 
        plot.setBackgroundPaint(null); 
        plot.setDomainGridlinesVisible(false); 
        plot.setRangeGridlinesVisible(false); 
        plot.setRangeCrosshairVisible(false); 
        plot.setAnchorValue(value.doubleValue());
        
        
     // add the target marker 
        if(target != null) {
        	System.out.println("YYYYY -> " + target);
	        ValueMarker marker = new ValueMarker( target.doubleValue(), Color.BLACK, new BasicStroke(2.0f)); 	        
	        plot.addRangeMarker(marker, Layer.FOREGROUND); 
        }
        
        //sets different marks
        for (Iterator iterator = intervals.iterator(); iterator.hasNext();) {
			KpiInterval interval = (KpiInterval) iterator.next();
			// add the marks 
            IntervalMarker marker = new IntervalMarker(interval.getMin(), interval.getMax(), interval.getColor()); 
            plot.addRangeMarker(marker, Layer.BACKGROUND);
			logger.debug("Added new interval to the plot");
		}
        
        // customize axes 
        CategoryAxis domainAxis = plot.getDomainAxis(); 
        domainAxis.setVisible(false); 

        NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis(); 
        rangeAxis.setVisible(false); 
        // calculate the upper limit 
        //double upperBound = target * upperFactor; 
        rangeAxis.setRange(new Range(lower, upper)); 

        // customize renderer 
        BarRenderer renderer = (BarRenderer) plot.getRenderer(); 
        renderer.setMaximumBarWidth(0.33); 
        renderer.setSeriesPaint(0, Color.BLACK); 
		
        return chart;
	}
}
