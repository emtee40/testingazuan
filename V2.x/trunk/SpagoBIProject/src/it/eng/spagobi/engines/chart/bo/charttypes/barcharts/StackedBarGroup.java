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
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.engines.chart.bo.charttypes.utils.MyStandardCategoryItemLabelGenerator;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.engines.chart.utils.DatasetMap;

import java.awt.Color;
import java.awt.Font;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.axis.SubCategoryAxis;
import org.jfree.chart.labels.ItemLabelAnchor;
import org.jfree.chart.labels.ItemLabelPosition;
import org.jfree.chart.labels.StandardCategoryItemLabelGenerator;
import org.jfree.chart.labels.StandardCategoryToolTipGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.GroupedStackedBarRenderer;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.KeyToGroupMap;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.TextAnchor;

/**   @author Antonella Giachino
 *     antonella.giachino@eng.it
 */


public class StackedBarGroup extends BarCharts {//implements ILinkableChart {

	String rootUrl=null;
	String mode="";
	String drillLabel="";
	HashMap drillParameter=null;
	String categoryUrlName="";
	List categoryNames;
	int subCategoriesNumber=0;
	int realCatNumber = 0;
	int realSubCatNumber = 0;
	HashMap subCategories;
	List subCategoryNames;
	String subCategoryLabel = "";
	String serieUrlname="";
	Integer numSerieForGroup;
	Integer numGroups;

	HashMap colorMap=null;  // keeps user selected colors
	HashMap subCatLabelsMap=null;  // keeps user selected labels fot subcategories
	boolean additionalLabels=false;
	boolean percentageValue=false;
	HashMap catSerLabels=null;


	private static transient Logger logger=Logger.getLogger(StackedBarGroup.class);





	/**
	 * Override this functions from BarCharts beacuse I manage a group of stacked bar!
	 * 
	 * @return the dataset
	 * 
	 * @throws Exception the exception
	 */

	public DatasetMap calculateValue() throws Exception {
		logger.debug("IN");
		String res=DataSetAccessFunctions.getDataSetResultFromId(profile, getData(),parametersObject);
		categories=new HashMap();
		subCategories=new HashMap();
		subCategoryNames=new ArrayList();
		categoryNames=new ArrayList();

		DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		SourceBean sbRows=SourceBean.fromXMLString(res);
		List listAtts=sbRows.getAttributeAsList("ROW");


		// run all categories (one for each row)
		categoriesNumber=0;
		seriesNames=new Vector();
		//categories.put(new Integer(0), "All Categories");
		boolean first=true;
		for (Iterator iterator = listAtts.iterator(); iterator.hasNext();) {
			SourceBean category = (SourceBean) iterator.next();
			List atts=category.getContainedAttributes();

			HashMap series=new HashMap();
			HashMap additionalValues=new HashMap();
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
					categoriesNumber++;
					categories.put(new Integer(categoriesNumber),value);
					if (!categoryNames.contains(value)){
						categoryNames.add(value);
						realCatNumber++;
					}
				}
				else if(nameP.equalsIgnoreCase("x2"))
				{
					subCategoriesNumber++;
					subCategories.put(new Integer(subCategoriesNumber),value);
					if (!subCategoryNames.contains(value)){
						subCategoryNames.add(value);
						realSubCatNumber++;
					}
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

			for (Iterator iterator3 = series.keySet().iterator(); iterator3.hasNext();) {
				String nameS = (String) iterator3.next();
				if(!hiddenSeries.contains(nameS)){
					String valueS=(String)series.get(nameS);
					dataset.addValue(Double.valueOf(valueS).doubleValue(), value, catValue);
					//System.out.println("dataset.addValue("+Double.valueOf(valueS).doubleValue()+ ", '"+value+"'"+",'"+catValue+"');");
					if(!seriesNames.contains(nameS)){
						seriesNames.add(nameS);
					}
					// if there is an additional label are 
					if(additionalValues.get(nameS)!=null){
						String val=(String)additionalValues.get(nameS);
						String index=catValue+"-"+nameS;						
						String totalVal=val;						
						catSerLabels.put(index, totalVal);
					}

				}

			}
		}

		logger.debug("OUT");
		DatasetMap datasets=new DatasetMap();
		datasets.addDataset("1",dataset);
		return datasets;
	}




	public void configureChart(SourceBean content) {
		logger.debug("IN");
		super.configureChart(content);

		if(confParameters.get("subcategory_label")!=null){	
			subCategoryLabel=(String)confParameters.get("subcategory_label");
		}
		else
		{
			subCategoryLabel="";
		}
		
		if(confParameters.get("add_labels")!=null){	
			String additional=(String)confParameters.get("add_labels");
			if(additional.equalsIgnoreCase("true")){
				additionalLabels=true;
				catSerLabels=new HashMap();
			}
			else additionalLabels=false;
		}
		else
		{
			additionalLabels=false;
		}

		if(confParameters.get("percentage_value")!=null){	
			String perc=(String)confParameters.get("percentage_value");
			if(perc.equalsIgnoreCase("true")){
				percentageValue=true;
			}
			else percentageValue=false;
		}
		else
		{
			percentageValue=false;
		}
		
		if(confParameters.get("n_serie_for_group")!=null){	
			numSerieForGroup=Integer.valueOf((String)confParameters.get("n_serie_for_group"));
		}
		else
		{
			numSerieForGroup=new Integer("1");
		}
		
		if(confParameters.get("n_groups")!=null){	
			numGroups=Integer.valueOf((String)confParameters.get("n_groups"));
		}
		else
		{
			numGroups=new Integer("1");
		}
		

		/*
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
						if(value.equalsIgnoreCase("serie"))serieUrlname=name;
						if(value.equalsIgnoreCase("category"))categoryUrlName=name;
					}
					else{												// Case absolute
						drillParameter.put(name, value);
					}
				}
			}
		}
		*/
		//reading series colors if present
		SourceBean colors = (SourceBean)content.getAttribute("CONF.SERIES_COLORS");
		if(colors!=null){
			colorMap=new HashMap();
			List atts=colors.getContainedAttributes();
			String colorSerie="";
			for (Iterator iterator = atts.iterator(); iterator.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator.next();

				String serieName=new String(object.getKey());
				colorSerie=new String((String)object.getValue());
				Color col=new Color(Integer.decode(colorSerie).intValue());
				if(col!=null){
					colorMap.put(serieName,col); 
				}
			}		
		}
		//reading subcategories labels
		SourceBean subcatLabels = (SourceBean)content.getAttribute("CONF.SUBCATEGORY_LABELS");
		if(subcatLabels!=null){
			subCatLabelsMap=new HashMap();
			List atts=subcatLabels.getContainedAttributes();
			String label="";
			for (Iterator iterator = atts.iterator(); iterator.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator.next();

				String subcatName=new String(object.getKey());
				label=new String((String)object.getValue());
				if(label!=null){
					subCatLabelsMap.put(subcatName,label); 
				}
			}		

		}
		
		logger.debug("OUT");	
	}




	/**
	 * Inherited by IChart.
	 * 
	 * @param chartTitle the chart title
	 * @param dataset the dataset
	 * 
	 * @return the j free chart
	 */



	public JFreeChart createChart(DatasetMap datasets) {



		logger.debug("IN");
		CategoryDataset dataset=(CategoryDataset)datasets.getDatasets().get("1");


		JFreeChart chart = ChartFactory.createStackedBarChart(
				name,  							// chart title
				categoryLabel,                  // domain axis label
				valueLabel,                     // range axis label
				dataset,                     	// data
				PlotOrientation.VERTICAL,    	// the plot orientation
				legend,                        	// legend
				true,                        	// tooltips
				false                        	// urls
		);
		
		chart.setBackgroundPaint(Color.white);
		CategoryPlot plot = (CategoryPlot) chart.getPlot();
		plot.setBackgroundPaint(color);
		plot.setRangeGridlinePaint(Color.white);
		plot.setDomainGridlinePaint(Color.white);
		plot.setDomainGridlinesVisible(true);
		
		GroupedStackedBarRenderer renderer = new GroupedStackedBarRenderer();
		KeyToGroupMap map = new KeyToGroupMap("G1");
		int numElForGroup = 0;
		for (int idx=0; idx < numGroups.intValue(); idx++){
			for (int j=0; j < numSerieForGroup.intValue(); j++ ){
					String tmpSubCat = (String)subCategoryNames.get(j+idx*numSerieForGroup.intValue());
					map.mapKeyToGroup(tmpSubCat, "G"+(idx+1));
			}
		}
		
        renderer.setSeriesToGroupMap(map);
        renderer.setItemMargin(0.0);
		renderer.setDrawBarOutline(false);
		renderer.setBaseItemLabelsVisible(true);
		if (percentageValue)
			renderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator("{2}", new DecimalFormat("#,##.#%")));
		else
			renderer.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
		renderer.setToolTipGenerator(new StandardCategoryToolTipGenerator());

		boolean document_composition=false;
		if(mode.equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITION))document_composition=true;

		/*
		MyCategoryUrlGenerator mycatUrl=new MyCategoryUrlGenerator(rootUrl);
		mycatUrl.setDocument_composition(document_composition);
		mycatUrl.setCategoryUrlLabel(categoryUrlName);
		mycatUrl.setSerieUrlLabel(serieUrlname);

		renderer.setItemURLGenerator(mycatUrl);
*/

		TextTitle title =setStyleTitle(name, styleTitle);
		chart.setTitle(title);

		// NOW DO SOME OPTIONAL CUSTOMISATION OF THE CHART...

		// set the background color for the chart...
		chart.setBackgroundPaint(color);


		// set the range axis to display integers only...
		NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis();
		rangeAxis.setStandardTickUnits(NumberAxis.createIntegerTickUnits());

		renderer.setDrawBarOutline(false);



		int seriesN=dataset.getRowCount();
		int numSerieColored = 0;
		if(colorMap!=null){
			while (numSerieColored < seriesN){
				for (int i=1; i <= colorMap.size();i++){
					Color color=(Color)colorMap.get("SER"+i);
					if(color!=null){
						renderer.setSeriesPaint(numSerieColored, color);
					}
					numSerieColored++;
				}
			}
		}

		MyStandardCategoryItemLabelGenerator generator=null;
		if(additionalLabels){
			generator = new MyStandardCategoryItemLabelGenerator(catSerLabels,"{1}", NumberFormat.getInstance());

			double orient=(-Math.PI / 2.0);

			if(addLabelsStyle!=null && addLabelsStyle.getFont()!=null){
				renderer.setBaseItemLabelFont(addLabelsStyle.getFont());
				renderer.setBaseItemLabelPaint(addLabelsStyle.getColor());
				if(addLabelsStyle.getOrientation().equalsIgnoreCase("horizontal")){
					orient=0.0;
				}
			}
			else{
				renderer.setBaseItemLabelFont(new Font("Serif", Font.BOLD, 12));
				if(addLabelsStyle!=null  && addLabelsStyle.getColor()!=null)
					renderer.setBaseItemLabelPaint(addLabelsStyle.getColor());
				else
					renderer.setBaseItemLabelPaint(Color.BLACK);
			}

			renderer.setBaseItemLabelGenerator(generator);
			renderer.setBaseItemLabelsVisible(true);
			//vertical labels 			
			renderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
					ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
					orient));
			renderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
					ItemLabelAnchor.CENTER, TextAnchor.CENTER, TextAnchor.CENTER, 
					orient));

			//horizontal labels
			/*
			renderer.setBasePositiveItemLabelPosition(new ItemLabelPosition(
	                ItemLabelAnchor.CENTER, TextAnchor.CENTER));
			renderer.setBaseNegativeItemLabelPosition(new ItemLabelPosition(
	                ItemLabelAnchor.CENTER, TextAnchor.CENTER));
			 */

		}
		
		SubCategoryAxis domainAxis = new SubCategoryAxis(categoryLabel + " / " + subCategoryLabel);    
		String subCatLabel = "";
		for (int j=1; j <= numGroups.intValue(); j++ ){
	       // domainAxis.setSubLabelPaint(paint)(0.05);
			if(subCatLabelsMap!=null)
				subCatLabel=(String)subCatLabelsMap.get("CAT"+j);
			else
				subCatLabel = subCategoryLabel;
			
	        domainAxis.addSubCategory(subCatLabel);
		}
		plot.setDomainAxis(domainAxis);
		plot.setRenderer(renderer);
		/*
		domainAxis.setCategoryLabelPositions(
				CategoryLabelPositions.createUpRotationLabelPositions(
						Math.PI / 6.0));
		*/
		logger.debug("OUT");
		return chart;

	}



	/**
	 * Gets document parameters and return a string in the form &param1=value1&param2=value2 ...
	 * 
	 * @param drillParameters the drill parameters
	 * 
	 * @return the document_ parameters
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
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#isLinkable()
	 */
	public boolean isLinkable(){
		return false;
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
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#getSerieUrlname()
	 */
	public String getSerieUrlname() {
		return serieUrlname;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.charttypes.ILinkableChart#setSerieUrlname(java.lang.String)
	 */
	public void setSerieUrlname(String serieUrlname) {
		this.serieUrlname = serieUrlname;
	}




	public int getSubCategoriesNumber() {
		return subCategoriesNumber;
	}




	public void setSubCategoriesNumber(int subCategoriesNumber) {
		this.subCategoriesNumber = subCategoriesNumber;
	}




	public int getRealCatNumber() {
		return realCatNumber;
	}




	public void setRealSubCatNumber(int realCatNumber) {
		this.realCatNumber = realCatNumber;
	}




	public HashMap getSubCategories() {
		return subCategories;
	}




	public void setSubCategories(HashMap subCategories) {
		this.subCategories = subCategories;
	}




	public List getSubCategoryNames() {
		return subCategoryNames;
	}




	public void setSubCategoryNames(List subCategoryNames) {
		this.subCategoryNames = subCategoryNames;
	}




	public String getSubCategoryLabel() {
		return subCategoryLabel;
	}




	public void setSubCategoryLabel(String subCategoryLabel) {
		this.subCategoryLabel = subCategoryLabel;
	}


}
