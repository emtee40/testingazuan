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

import org.apache.log4j.Logger;
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
	HashMap seriesScale=null;
	HashMap seriesCaptions=null;
	boolean additionalLabels=false;
	HashMap catSerLabels=null;

	boolean useBars=false;
	boolean useLines=false;
	boolean secondAxis=false;
	String secondAxisLabel=null;
	private static transient Logger logger=Logger.getLogger(OverlaidBarLine.class);


	public DatasetMap calculateValue() throws Exception {
		logger.debug("IN");

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

		// one dataset for mapping left, one for mapping right
//		datasetMap.getDatasets().put("bar", new DefaultCategoryDataset());
//		datasetMap.getDatasets().put("line", new DefaultCategoryDataset());

		datasetMap.getDatasets().put("1-bar", new DefaultCategoryDataset());
		datasetMap.getDatasets().put("1-line", new DefaultCategoryDataset());
		datasetMap.getDatasets().put("2-bar", new DefaultCategoryDataset());
		datasetMap.getDatasets().put("2-line", new DefaultCategoryDataset());



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
				if (getSubName().indexOf("$F") >= 0){
					setSubTitleParameter(atts);
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



					//Line and second axis

					// LINE CASE
					if(!isHiddenSerie(nameS) && seriesDraw.get(nameS)!=null && ((String)seriesDraw.get(nameS)).equalsIgnoreCase("line")){
						if(!seriesNames.contains(nameS))seriesNames.add(nameS);
						// SET THE AXIS
						if(seriesScale != null && seriesScale.get(nameS)!=null && ((String)seriesScale.get(nameS)).equalsIgnoreCase("2")){
							((DefaultCategoryDataset)(datasetMap.getDatasets().get("2-line"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);
						}
						else{ // if to draw as a bar
							((DefaultCategoryDataset)(datasetMap.getDatasets().get("1-line"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);
						}

					}
					else if(!isHiddenSerie(nameS) && seriesDraw.get(nameS)!=null && ((String)seriesDraw.get(nameS)).equalsIgnoreCase("bar")){// BAR CASE
						if(!seriesNames.contains(nameS))seriesNames.add(nameS);
						// if to draw mapped to first axis
						if(seriesScale != null && seriesScale.get(nameS)!=null && ((String)seriesScale.get(nameS)).equalsIgnoreCase("2")){
							if(!seriesNames.contains(nameS))seriesNames.add(nameS);
							((DefaultCategoryDataset)(datasetMap.getDatasets().get("2-bar"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);
						}
						else{ // if to draw as a bar
							if(!seriesNames.contains(nameS))seriesNames.add(nameS);
							((DefaultCategoryDataset)(datasetMap.getDatasets().get("1-bar"))).addValue(Double.valueOf(valueS).doubleValue(), labelS, catValue);
						}
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
		logger.debug("OUT");

		return datasetMap;


	}

	public void configureChart(SourceBean content) {
		super.configureChart(content);
		logger.debug("IN");

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


		//reading series draw: there is specified if a serie has to be drawn as a bar or as a line.
		SourceBean draws = (SourceBean)content.getAttribute("SERIES_DRAW");
		if(draws==null){
			draws = (SourceBean)content.getAttribute("CONF.SERIES_DRAW");
		}
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

			// only if second axis is defined check wich series has to be mapped to the first axis and wich to the second
			SourceBean scales = (SourceBean)content.getAttribute("SERIES_SCALES");
			if(scales==null){
				scales = (SourceBean)content.getAttribute("CONF.SERIES_SCALES");
			}
			seriesScale=new LinkedHashMap();
			if(scales!=null){

				List attsScales=scales.getContainedAttributes();

				String serieName="";
				Integer serieScale=1;
				for (Iterator iterator = attsScales.iterator(); iterator.hasNext();) {
					SourceBeanAttribute object = (SourceBeanAttribute) iterator.next();
					serieName=new String(object.getKey());
					try{
						String serieScaleS=(String)object.getValue();
						serieScale=Integer.valueOf(serieScaleS);
					}
					catch (Exception e) {
						logger.error("Not correct numebr scale; setting default 1");
						serieScale=Integer.valueOf(1);
					}

					if(serieScale.equals(2)){
						seriesScale.put(serieName, "2");
					}
					else{
						seriesScale.put(serieName, "1");					
					}

				}		

			}

		}


		logger.debug("OUT");


	}






	public JFreeChart createChart(DatasetMap datasets) {
		logger.debug("IN");


		// create the first renderer...


		CategoryPlot plot = new CategoryPlot();


		NumberAxis rangeAxis = new NumberAxis(getValueLabel());
		rangeAxis.setLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setLabelPaint(styleXaxesLabels.getColor());
		rangeAxis.setTickLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
		rangeAxis.setTickLabelPaint(styleXaxesLabels.getColor());
		rangeAxis.setUpperMargin(0.10);
		plot.setRangeAxis(0,rangeAxis);

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

		DefaultCategoryDataset datasetLineFirstAxis=(DefaultCategoryDataset)datasets.getDatasets().get("1-line");
		DefaultCategoryDataset datasetBarFirstAxis=(DefaultCategoryDataset)datasets.getDatasets().get("1-bar");
		DefaultCategoryDataset datasetLineSecondAxis=(DefaultCategoryDataset)datasets.getDatasets().get("2-line");
		DefaultCategoryDataset datasetBarSecondAxis=(DefaultCategoryDataset)datasets.getDatasets().get("2-bar");

		//I create one bar renderer and one line
		MyStandardCategoryItemLabelGenerator generator=null;

		// value labels and additional values are mutually exclusive
		if(showValueLabels==true)additionalLabels=false;

		if(additionalLabels){
			generator = new MyStandardCategoryItemLabelGenerator(catSerLabels,"{1}", NumberFormat.getInstance());
		}

		if(useBars){

			CategoryItemRenderer barRenderer = new BarRenderer();
			CategoryItemRenderer barRenderer2 = new BarRenderer();

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
			
			
			if(showValueLabels){
				barRenderer2.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
				barRenderer2.setBaseItemLabelsVisible(true);
				barRenderer2.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.PLAIN, styleValueLabels.getSize()));
				barRenderer2.setBaseItemLabelPaint(styleValueLabels.getColor());

				barRenderer2.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

				barRenderer2.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

			}
			else if(additionalLabels){
				barRenderer2.setBaseItemLabelGenerator(generator);
				double orient=(-Math.PI / 2.0);
				if(styleValueLabels.getOrientation().equalsIgnoreCase("horizontal")){
					orient=0.0;
				}

				barRenderer2.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
						orient));
				barRenderer2.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
						orient));

			}


			if(colorMap!=null){
				for (Iterator iterator = datasetBarFirstAxis.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetBarFirstAxis.getRowIndex(labelName);
					}
					else
						index=datasetBarFirstAxis.getRowIndex(serName);

					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						barRenderer.setSeriesPaint(index, color);
					}	
				}
				for (Iterator iterator = datasetBarSecondAxis.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetBarFirstAxis.getRowIndex(labelName);
					}
					else
						index=datasetBarSecondAxis.getRowIndex(serName);

					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						barRenderer2.setSeriesPaint(index, color);
					}	
				}				
			}


			plot.setDataset(2,datasetBarFirstAxis);
			plot.setDataset(3,datasetBarSecondAxis);

			plot.setRenderer(2,barRenderer);
			plot.setRenderer(3,barRenderer2);

		}

		if(useLines){

			LineAndShapeRenderer lineRenderer = new LineAndShapeRenderer();
			LineAndShapeRenderer lineRenderer2 = new LineAndShapeRenderer();
			
			//lineRenderer.setShapesFilled(false);
			lineRenderer.setShapesFilled(true);
			lineRenderer2.setShapesFilled(true);



			if(showValueLabels){
				lineRenderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
				lineRenderer.setBaseItemLabelsVisible(true);
				lineRenderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.ITALIC, styleValueLabels.getSize()));
				lineRenderer.setBaseItemLabelPaint(styleValueLabels.getColor());

				lineRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

				lineRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

			}	
			else if(additionalLabels){
				lineRenderer.setBaseItemLabelGenerator(generator);
				lineRenderer.setBaseItemLabelFont(new Font(defaultLabelsStyle.getFontName(), Font.PLAIN, defaultLabelsStyle.getSize()));
				lineRenderer.setBaseItemLabelPaint(defaultLabelsStyle.getColor());
				lineRenderer.setBaseItemLabelsVisible(true);
			}
			
			if(showValueLabels){
				lineRenderer2.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
				lineRenderer2.setBaseItemLabelsVisible(true);
				lineRenderer2.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.ITALIC, styleValueLabels.getSize()));
				lineRenderer2.setBaseItemLabelPaint(styleValueLabels.getColor());

				lineRenderer2.setBasePositiveItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

				lineRenderer2.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
						ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

			}	
			else if(additionalLabels){
				lineRenderer2.setBaseItemLabelGenerator(generator);
				lineRenderer2.setBaseItemLabelFont(new Font(defaultLabelsStyle.getFontName(), Font.PLAIN, defaultLabelsStyle.getSize()));
				lineRenderer2.setBaseItemLabelPaint(defaultLabelsStyle.getColor());
				lineRenderer2.setBaseItemLabelsVisible(true);
			}
			

//			DefaultCategoryDataset datasetSecondAxis=(DefaultCategoryDataset)datasets.getDatasets().get("2");


			if(colorMap!=null){
				for (Iterator iterator = datasetLineSecondAxis.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetLineSecondAxis.getRowIndex(labelName);
					}
					else
						index=datasetLineSecondAxis.getRowIndex(serName);

					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						lineRenderer2.setSeriesPaint(index, color);
					}	
				}
				for (Iterator iterator = datasetLineFirstAxis.getRowKeys().iterator(); iterator.hasNext();) {
					String serName = (String) iterator.next();
					String labelName = "";
					int index=-1;

					if (seriesCaptions != null && seriesCaptions.size()>0){
						labelName = serName;
						serName = (String)seriesCaptions.get(serName);
						index=datasetLineFirstAxis.getRowIndex(labelName);
					}
					else
						index=datasetLineFirstAxis.getRowIndex(serName);

					Color color=(Color)colorMap.get(serName);
					if(color!=null){
						lineRenderer.setSeriesPaint(index, color);
					}	
				}
				
			}
			plot.setDataset(0,datasetLineFirstAxis);
			plot.setRenderer(0,lineRenderer);
			plot.setDataset(1,datasetLineSecondAxis);
			plot.setRenderer(1,lineRenderer2);

		}


		if(secondAxis){
			NumberAxis na=new NumberAxis(secondAxisLabel);
			na.setUpperMargin(0.10);
			plot.setRangeAxis(1,na);
			plot.mapDatasetToRangeAxis(0, 0);
			plot.mapDatasetToRangeAxis(2, 0);
			plot.mapDatasetToRangeAxis(1, 1);
			plot.mapDatasetToRangeAxis(3, 1);

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

		logger.debug("OUT");

		return chart;



	}



	private boolean isHiddenSerie(String serName){
		boolean res = false;
		
		for (int i=0; i < hiddenSeries.size(); i++){
			if (((String)hiddenSeries.get(i)).equalsIgnoreCase(serName)){
				res = true;
				break;
			}
		}
		return res;
	}
















//	public JFreeChart createChart(DatasetMap datasets) {


//	// create the first renderer...


//	CategoryPlot plot = new CategoryPlot();

	

//	NumberAxis rangeAxis = new NumberAxis(getValueLabel());
//	rangeAxis.setLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
//	rangeAxis.setLabelPaint(styleXaxesLabels.getColor());
//	rangeAxis.setTickLabelFont(new Font(styleXaxesLabels.getFontName(), Font.PLAIN, styleXaxesLabels.getSize()));
//	rangeAxis.setTickLabelPaint(styleXaxesLabels.getColor());
//	rangeAxis.setUpperMargin(0.10);
//	plot.setRangeAxis(rangeAxis);

//	CategoryAxis domainAxis = new CategoryAxis(getCategoryLabel());
//	domainAxis.setLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
//	domainAxis.setLabelPaint(styleYaxesLabels.getColor());
//	domainAxis.setTickLabelFont(new Font(styleYaxesLabels.getFontName(), Font.PLAIN, styleYaxesLabels.getSize()));
//	domainAxis.setTickLabelPaint(styleYaxesLabels.getColor());
//	domainAxis.setUpperMargin(0.10);
//	plot.setDomainAxis(domainAxis);

//	plot.setOrientation(PlotOrientation.VERTICAL);
//	plot.setRangeGridlinesVisible(true);
//	plot.setDomainGridlinesVisible(true);

//	DefaultCategoryDataset datasetBar=(DefaultCategoryDataset)datasets.getDatasets().get("bar");


//	//I create one bar renderer and one line
//	MyStandardCategoryItemLabelGenerator generator=null;

//	// value labels and additional values are mutually exclusive
//	if(showValueLabels==true)additionalLabels=false;

//	if(additionalLabels){
//	generator = new MyStandardCategoryItemLabelGenerator(catSerLabels,"{1}", NumberFormat.getInstance());
//	}

//	if(useBars){

//	CategoryItemRenderer barRenderer = new BarRenderer();

//	if(showValueLabels){
//	barRenderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
//	barRenderer.setBaseItemLabelsVisible(true);
//	barRenderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.PLAIN, styleValueLabels.getSize()));
//	barRenderer.setBaseItemLabelPaint(styleValueLabels.getColor());

//	barRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

//	barRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_LEFT));

//	}
//	else if(additionalLabels){
//	barRenderer.setBaseItemLabelGenerator(generator);
//	double orient=(-Math.PI / 2.0);
//	if(styleValueLabels.getOrientation().equalsIgnoreCase("horizontal")){
//	orient=0.0;
//	}

//	barRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
//	orient));
//	barRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
//	orient));

//	}


//	if(colorMap!=null){
//	for (Iterator iterator = datasetBar.getRowKeys().iterator(); iterator.hasNext();) {
//	String serName = (String) iterator.next();
//	String labelName = "";
//	int index=-1;

//	if (seriesCaptions != null && seriesCaptions.size()>0){
//	labelName = serName;
//	serName = (String)seriesCaptions.get(serName);
//	index=datasetBar.getRowIndex(labelName);
//	}
//	else
//	index=datasetBar.getRowIndex(serName);

//	Color color=(Color)colorMap.get(serName);
//	if(color!=null){
//	barRenderer.setSeriesPaint(index, color);
//	}	
//	}
//	}


//	plot.setDataset(1,datasetBar);
//	plot.setRenderer(1,barRenderer);

//	}

//	if(useLines){

//	LineAndShapeRenderer lineRenderer = new LineAndShapeRenderer();
//	//lineRenderer.setShapesFilled(false);
//	lineRenderer.setShapesFilled(true);



//	if(showValueLabels){
//	lineRenderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
//	lineRenderer.setBaseItemLabelsVisible(true);
//	lineRenderer.setBaseItemLabelFont(new Font(styleValueLabels.getFontName(), Font.ITALIC, styleValueLabels.getSize()));
//	lineRenderer.setBaseItemLabelPaint(styleValueLabels.getColor());

//	lineRenderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

//	lineRenderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
//	ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_RIGHT));

//	}	
//	else if(additionalLabels){
//	lineRenderer.setBaseItemLabelGenerator(generator);
//	lineRenderer.setBaseItemLabelFont(new Font(defaultLabelsStyle.getFontName(), Font.PLAIN, defaultLabelsStyle.getSize()));
//	lineRenderer.setBaseItemLabelPaint(defaultLabelsStyle.getColor());
//	lineRenderer.setBaseItemLabelsVisible(true);
//	}

//	DefaultCategoryDataset datasetLine=(DefaultCategoryDataset)datasets.getDatasets().get("line");


//	if(colorMap!=null){
//	for (Iterator iterator = datasetLine.getRowKeys().iterator(); iterator.hasNext();) {
//	String serName = (String) iterator.next();
//	String labelName = "";
//	int index=-1;

//	if (seriesCaptions != null && seriesCaptions.size()>0){
//	labelName = serName;
//	serName = (String)seriesCaptions.get(serName);
//	index=datasetLine.getRowIndex(labelName);
//	}
//	else
//	index=datasetLine.getRowIndex(serName);

//	Color color=(Color)colorMap.get(serName);
//	if(color!=null){
//	lineRenderer.setSeriesPaint(index, color);
//	}	
//	}
//	}
//	plot.setDataset(0,datasetLine);
//	plot.setRenderer(0,lineRenderer);
//	}


//	if(secondAxis){
//	NumberAxis na=new NumberAxis(secondAxisLabel);
//	na.setUpperMargin(0.10);
//	plot.setRangeAxis(1,na);
//	plot.mapDatasetToRangeAxis(0, 1);
//	}



//	//plot.setDatasetRenderingOrder(DatasetRenderingOrder.FORWARD);
//	plot.getDomainAxis().setCategoryLabelPositions(
//	CategoryLabelPositions.UP_45);
//	JFreeChart chart = new JFreeChart(plot);
//	TextTitle title = setStyleTitle(name, styleTitle);
//	chart.setTitle(title);
//	if(subName!= null && !subName.equals("")){
//	TextTitle subTitle =setStyleTitle(subName, styleSubTitle);
//	chart.addSubtitle(subTitle);
//	}
//	chart.setBackgroundPaint(Color.white);
//	return chart;



//	}


}
