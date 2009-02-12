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
import org.jfree.chart.labels.StandardCategoryItemLabelGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.chart.renderer.category.CategoryItemRenderer;
import org.jfree.chart.renderer.category.LineAndShapeRenderer;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.TextAnchor;

public class OverlaidBarLine extends BarCharts {


	HashMap seriesDraw=null;
	HashMap seriesCaptions=null;
	boolean additionalLabels=false;
	HashMap catSerLabels=null;
	boolean useBars=false;
	boolean useLines=false;

	boolean secondAxis=false;
	String secondAxisLabel=null;

	public DatasetMap calculateValue() throws Exception {

		seriesNames=new Vector();
		seriesCaptions=new LinkedHashMap();

		String res=DataSetAccessFunctions.getDataSetResultFromId(profile, getData(),parametersObject);
		categories=new HashMap();

		//DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		DatasetMap datasetMap=new DatasetMap();

		SourceBean sbRows=SourceBean.fromXMLString(res);
		List listAtts=sbRows.getAttributeAsList("ROW");


		// run all categories (one for each row)
		categoriesNumber=0;

		// new versione: two datasets one for bar and one for lines
		datasetMap.getDatasets().put("bar", new DefaultCategoryDataset());
		datasetMap.getDatasets().put("line", new DefaultCategoryDataset());

		boolean first=true;
		//categories.put(new Integer(0), "All Categories");
		for (Iterator iterator = listAtts.iterator(); iterator.hasNext();) {
			SourceBean category = (SourceBean) iterator.next();
			List atts=category.getContainedAttributes();

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
			int numColumn = 0;
			for (Iterator iterator2 = atts.iterator(); iterator2.hasNext();) {
				numColumn ++;
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
						if(seriesLabelsMap!=null){
							String serieLabel = (String)seriesLabelsMap.get(nameP);
							series.put(serieLabel, value);
							seriesCaptions.put(serieLabel, nameP);
						}
						else
							series.put(nameP, value);
					}

					// for now I make like if addition value is checked he seek for an attribute with name with value+name_serie
				}
			}


			// for each serie
			for (Iterator iterator3 = series.keySet().iterator(); iterator3.hasNext();) {
				String nameS = (String) iterator3.next();
				String labelS = "";
				String valueS=(String)series.get(nameS);
				if(!hiddenSeries.contains(nameS)){
					if(seriesLabelsMap != null && (seriesCaptions != null && seriesCaptions.size()>0)){
						nameS = (String)(seriesCaptions.get(nameS));
						labelS = (String)seriesLabelsMap.get(nameS);
					}
					else
						labelS = nameS;	

					// if to draw as a line
					if(seriesDraw.get(nameS)!=null && ((String)seriesDraw.get(nameS)).equalsIgnoreCase("line")){
						if(!seriesNames.contains(nameS))seriesNames.add(nameS);
						((DefaultCategoryDataset)(datasetMap.getDatasets().get("line"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);
					}
					else{ // if to draw as a bar
						if(!seriesNames.contains(nameS))seriesNames.add(nameS);
						((DefaultCategoryDataset)(datasetMap.getDatasets().get("bar"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);

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
					seriesDraw.put(serieName, "line");
					useLines=true;
				}
				else{
					seriesDraw.put(serieName, "bar");					
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


		NumberAxis rangeAxis = new NumberAxis(getValueLabel());
		rangeAxis.setLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setLabelPaint(styleXaxesLabels.getColor());
		rangeAxis.setTickLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setTickLabelPaint(styleXaxesLabels.getColor());
		rangeAxis.setUpperMargin(0.10);
		plot.setRangeAxis(rangeAxis);

		CategoryAxis domainAxis = new CategoryAxis(getCategoryLabel());
		domainAxis.setLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
		domainAxis.setLabelPaint(styleYaxesLabels.getColor());
		domainAxis.setTickLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
		domainAxis.setTickLabelPaint(styleYaxesLabels.getColor());
		domainAxis.setUpperMargin(0.10);
		plot.setDomainAxis(domainAxis);

		plot.setOrientation(PlotOrientation.VERTICAL);
		plot.setRangeGridlinesVisible(true);
		plot.setDomainGridlinesVisible(true);

		DefaultCategoryDataset datasetBar=(DefaultCategoryDataset)datasets.getDatasets().get("bar");


		//I create one bar renderer and one line
		MyStandardCategoryItemLabelGenerator generator=null;

		// value labels and additional values are mutually exclusive
		if(showValueLabels==true)additionalLabels=false;

		if(additionalLabels){
			generator = new MyStandardCategoryItemLabelGenerator(catSerLabels,"{1}", NumberFormat.getInstance());
		}

		if(useBars){

			CategoryItemRenderer barRenderer = new BarRenderer();

			if(showValueLabels){
				barRenderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
				barRenderer.setBaseItemLabelsVisible(true);
				barRenderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.PLAIN, styleValueLabels.getSize()));
				barRenderer.setBaseItemLabelPaint(styleValueLabels.getColor());

				barRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

				barRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

			}
			else if(additionalLabels){
				barRenderer.setBaseItemLabelGenerator(generator);
				double orient=(-Math.PI / 2.0);
				if(styleValueLabels.getOrientation().equalsIgnoreCase("horizontal")){
					orient=0.0;
				}

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
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetBar.getRowIndex(labelName);
					}
					else
						index=datasetBar.getRowIndex(serName);

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
			
			
			
			if(showValueLabels){
				lineRenderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
				lineRenderer.setBaseItemLabelsVisible(true);
				lineRenderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.ITALIC, styleValueLabels.getSize()));
				lineRenderer.setBaseItemLabelPaint(styleValueLabels.getColor());

				lineRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

				lineRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

			}	
			else if(additionalLabels){
				lineRenderer.setBaseItemLabelGenerator(generator);
				lineRenderer.setBaseItemLabelFont(new Font(defaultLabelsStyle.getFontName(), Font.PLAIN, defaultLabelsStyle.getSize()));
				lineRenderer.setBaseItemLabelPaint(defaultLabelsStyle.getColor());
				lineRenderer.setBaseItemLabelsVisible(true);
			}

			DefaultCategoryDataset datasetLine=(DefaultCategoryDataset)datasets.getDatasets().get("line");


			if(colorMap!=null){
				for (Iterator iterator = datasetLine.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetLine.getRowIndex(labelName);
					}
					else
						index=datasetLine.getRowIndex(serName);

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
			NumberAxis na=new NumberAxis(secondAxisLabel);
			na.setUpperMargin(0.10);
			plot.setRangeAxis(1,na);
			plot.mapDatasetToRangeAxis(0, 1);
		}



		//plot.setDatasetRenderingOrder(DatasetRenderingOrder.FORWARD);
		plot.getDomainAxis().setCategoryLabelPositions(
				CategoryLabelPositions.UP_45);
		JFreeChart chart = new JFreeChart(plot);
		TextTitle title = setStyleTitle(name, styleTitle);
		chart.setTitle(title);
		if(subName!= null && !subName.equals("")){
			TextTitle subTitle =setStyleTitle(subName, styleSubTitle);
			chart.addSubtitle(subTitle);
		}
		chart.setBackgroundPaint(Color.white);
		return chart;



	}


}
