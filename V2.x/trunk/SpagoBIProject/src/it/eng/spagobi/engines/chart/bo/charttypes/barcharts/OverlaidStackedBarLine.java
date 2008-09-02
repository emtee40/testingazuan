package it.eng.spagobi.engines.chart.bo.charttypes.barcharts;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.engines.chart.bo.charttypes.utils.MyStandardCategoryItemLabelGenerator;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.engines.chart.utils.DatasetMap;

import java.awt.Color;
import java.awt.Font;
import java.text.NumberFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Vector;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.CategoryLabelPositions;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.labels.ItemLabelAnchor;
import org.jfree.chart.labels.ItemLabelPosition;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.CategoryItemRenderer;
import org.jfree.chart.renderer.category.LineAndShapeRenderer;
import org.jfree.chart.renderer.category.StackedBarRenderer;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.TextAnchor;

public class OverlaidStackedBarLine extends BarCharts {


	HashMap seriesDraw=null;
	boolean additionalLabels=false;
	HashMap catSerLabels=null;
	boolean useBars=false;
	boolean useLines=false;

	boolean secondAxis=false;
	String secondAxisLabel=null;

	public DatasetMap calculateValue() throws Exception {

		seriesNames=new Vector();
		// I must identify different series

		String res=DataSetAccessFunctions.getDataSetResultFromId(profile, getData(),parametersObject);
		categories=new LinkedHashMap();

		//DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		DatasetMap datasetMap=new DatasetMap();

		SourceBean sbRows=SourceBean.fromXMLString(res);
		List listAtts=sbRows.getAttributeAsList("ROW");


		// run all categories (one for each row)
		categoriesNumber=0;

		// new versione: two datasets one for bar and one for lines
		datasetMap.getDatasets().put("stackedbar", new DefaultCategoryDataset());
		datasetMap.getDatasets().put("line", new DefaultCategoryDataset());

		boolean first=true;
		//categories.put(new Integer(0), "All Categories");
		for (Iterator iterator = listAtts.iterator(); iterator.hasNext();) {
			SourceBean category = (SourceBean) iterator.next();
			List atts=category.getContainedAttributes();

			//HashMap series=new HashMap();
			HashMap series=new LinkedHashMap();
			HashMap additionalValues=new LinkedHashMap();
			String catValue="";

			String nameP="";
			String value="";

			if(first){
				if (name.indexOf("$F{") >= 0){
					setTitleParameter(atts);
				}
				first=false;
			}


			//run all the attributes, to define series!
			for (Iterator iterator2 = atts.iterator(); iterator2.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator2.next();

				nameP=new String(object.getKey());
				value=new String((String)object.getValue());
				if(nameP.equalsIgnoreCase("x"))
				{
					catValue=value;
					categoriesNumber=categoriesNumber+1;
					categories.put(new Integer(categoriesNumber),value);


				}
				else {
					if(nameP.startsWith("add_") || nameP.startsWith("ADD_")){
						if(additionalLabels){
							String ind=nameP.substring(4);							
							additionalValues.put(ind, value);
						}
					}
					else{
						series.put(nameP, value);
					}

					// for now I make like if addition value is checked he seek for an attribute with name with value+name_serie
				}
			}


			// for each serie
			for (Iterator iterator3 = series.keySet().iterator(); iterator3.hasNext();) {
				String nameS = (String) iterator3.next();
				String valueS=(String)series.get(nameS);
				if(!hiddenSeries.contains(nameS)){

					// if to draw as a line
					if(seriesDraw.get(nameS.toUpperCase())!=null && ((String)seriesDraw.get(nameS.toUpperCase())).equalsIgnoreCase("line")){
						if(!seriesNames.contains(nameS.toUpperCase()))seriesNames.add(nameS.toUpperCase());
						((DefaultCategoryDataset)(datasetMap.getDatasets().get("line"))).addValue(Double.valueOf(valueS).doubleValue(), nameS, catValue);
					}
					else{ // if to draw as a bar
						if(!seriesNames.contains(nameS.toUpperCase()))seriesNames.add(nameS.toUpperCase());
						((DefaultCategoryDataset)(datasetMap.getDatasets().get("stackedbar"))).addValue(Double.valueOf(valueS).doubleValue(), nameS, catValue);

					}
					// if there is an additional label are 
					if(additionalValues.get(nameS)!=null){
						String val=(String)additionalValues.get(nameS);
						String index=catValue+"-"+nameS;
						catSerLabels.put(index, val);
					}


				}

			}





		}
		return datasetMap;


	}

	public void configureChart(SourceBean content) {
		super.configureChart(content);

		if(confParameters.get("add_labels")!=null){	
			String additional=(String)confParameters.get("add_labels");
			if(additional.equalsIgnoreCase("true")){
				additionalLabels=true;
				catSerLabels=new LinkedHashMap();
			}
			else additionalLabels=false;
		}
		else
		{
			additionalLabels=false;
		}


		//reading series colors if present
		SourceBean draws = (SourceBean)content.getAttribute("CONF.SERIES_DRAW");
		seriesDraw=new LinkedHashMap();
		if(draws!=null){

			List atts=draws.getContainedAttributes();

			String serieName="";
			String serieDraw="";
			for (Iterator iterator = atts.iterator(); iterator.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator.next();
				serieName=new String(object.getKey());
				serieDraw=new String((String)object.getValue());

				if(serieDraw.equalsIgnoreCase("line")){
					seriesDraw.put(serieName.toUpperCase(), "line");
					useLines=true;
				}
				else{
					seriesDraw.put(serieName.toUpperCase(), "stackedbar");					
					useBars=true;
				}

			}		

		}
		else{
			useBars=true;
		}

		if(confParameters.get("second_axis_label")!=null){	
			secondAxis=true;
			secondAxisLabel=(String)confParameters.get("second_axis_label");
		}




	}

	public JFreeChart createChart(DatasetMap datasets) {
		
		// create the first renderer...


		CategoryPlot plot = new CategoryPlot();

		plot.setDomainAxis(new CategoryAxis(getCategoryLabel()));
		plot.setRangeAxis(new NumberAxis(getValueLabel()));




		plot.setOrientation(PlotOrientation.VERTICAL);
		plot.setRangeGridlinesVisible(true);
		plot.setDomainGridlinesVisible(true);

		DefaultCategoryDataset datasetBar=(DefaultCategoryDataset)datasets.getDatasets().get("stackedbar");


		//I create one bar renderer and one line



		MyStandardCategoryItemLabelGenerator generator=null;
		if(additionalLabels){
			generator = new MyStandardCategoryItemLabelGenerator(catSerLabels,"{1}", NumberFormat.getInstance());}

		if(useBars){
			CategoryItemRenderer barRenderer = new StackedBarRenderer();


			if(additionalLabels){
				barRenderer.setBaseItemLabelGenerator(generator);
				double orient=(-Math.PI / 2.0);
				if(addLabelsStyle!=null && addLabelsStyle.getFont()!=null){
					barRenderer.setBaseItemLabelFont(addLabelsStyle.getFont());
					barRenderer.setBaseItemLabelPaint(addLabelsStyle.getColor());
					if(addLabelsStyle.getOrientation().equalsIgnoreCase("horizontal")){
						orient=0.0;
					}

				}
				else{
					barRenderer.setBaseItemLabelFont(new Font("Serif", Font.BOLD, 13));
					if(addLabelsStyle!=null && addLabelsStyle.getColor()!=null)
						barRenderer.setBaseItemLabelPaint(addLabelsStyle.getColor());
					else
						barRenderer.setBaseItemLabelPaint(Color.BLACK);
				}
				barRenderer.setBaseItemLabelsVisible(true);
				barRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
						orient));
				barRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
						orient));	

			}



			if(colorMap!=null){
				for (Iterator iterator = datasetBar.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					int index=datasetBar.getRowIndex(serName);
					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						barRenderer.setSeriesPaint(index, color);
					}	
				}
			}

			plot.setDataset(1,datasetBar);
			plot.setRenderer(1,barRenderer);

		}

		if(useLines){

			LineAndShapeRenderer lineRenderer = new LineAndShapeRenderer();
			//lineRenderer.setShapesFilled(false);
			lineRenderer.setShapesFilled(true);
			if(additionalLabels){lineRenderer.setBaseItemLabelGenerator(generator);
			lineRenderer.setBaseItemLabelFont(new Font("Serif", Font.BOLD, 13));
			lineRenderer.setBaseItemLabelsVisible(true);
			}

			DefaultCategoryDataset datasetLine=(DefaultCategoryDataset)datasets.getDatasets().get("line");



			if(colorMap!=null){
				for (Iterator iterator = datasetLine.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();

					int index=datasetLine.getRowIndex(serName);
					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						lineRenderer.setSeriesPaint(index, color);
					}	
				}
			}
			plot.setDataset(0,datasetLine);
			plot.setRenderer(0,lineRenderer);
		}


		if(secondAxis){
			plot.setRangeAxis(1,new NumberAxis(secondAxisLabel));
			plot.mapDatasetToRangeAxis(0, 1);
		}



		//plot.setDatasetRenderingOrder(DatasetRenderingOrder.FORWARD);

		plot.getDomainAxis().setCategoryLabelPositions(
				CategoryLabelPositions.UP_45);
		JFreeChart chart = new JFreeChart(plot);
		TextTitle title =setStyleTitle(name, styleTitle);
		chart.setTitle(title);
		chart.setBackgroundPaint(Color.white);
		return chart;



	}


}
