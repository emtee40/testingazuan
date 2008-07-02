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
import it.eng.spagobi.engines.chart.bo.ChartImpl;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.engines.chart.utils.DatasetMap;
import it.eng.spagobi.engines.chart.utils.StyleLabel;

import java.awt.Color;
import java.awt.Font;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.JFreeChart;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.data.general.Dataset;

/**   @author Giulio Gavardi
 *     giulio.gavardi@eng.it
 */




public class BarCharts extends ChartImpl {

	Map confParameters;
	String categoryLabel="";
	String valueLabel="";
	Integer numberCatVisualization=null;
	HashMap colorMap=null;  // keeps user selected colors// serie position - color
	HashMap seriesNumber=null; //track serie name with number position (to preserve color)
	int categoriesNumber=0;
	HashMap categories;
	//int currentSerie=-1;
	Vector currentSeries=null;
	private static transient Logger logger=Logger.getLogger(BarCharts.class);
	Vector seriesNames=null;
	Vector hiddenSeries=null;
	StyleLabel addLabelsStyle;




	/**
	 * Inherited by IChart: calculates chart value.
	 * 
	 * @return the dataset
	 * 
	 * @throws Exception the exception
	 */

	public DatasetMap calculateValue() throws Exception {
		logger.debug("IN");
		String res=DataSetAccessFunctions.getDataSetResultFromId(profile, getData(),parametersObject);
		categories=new HashMap();

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

			if(first){
				if (name.indexOf("$F{") >= 0){
					setTitleParameter(atts);
				}
				first=false;
			}


			HashMap series=new HashMap();
			String catValue="";

			String name="";
			String value="";

			//run all the attributes, to define series!
			for (Iterator iterator2 = atts.iterator(); iterator2.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator2.next();

				name=new String(object.getKey());
				value=new String((String)object.getValue());
				if(name.equalsIgnoreCase("x"))
				{
					catValue=value;
					categoriesNumber=categoriesNumber+1;
					categories.put(new Integer(categoriesNumber),value);


				}
				else {
					series.put(name, value);
				}
			}
			for (Iterator iterator3 = series.keySet().iterator(); iterator3.hasNext();) {
				String nameS = (String) iterator3.next();

				if(!hiddenSeries.contains(nameS)){
					String valueS=(String)series.get(nameS);
					dataset.addValue(Double.valueOf(valueS).doubleValue(), nameS, catValue);
					if(!seriesNames.contains(nameS)){
						seriesNames.add(nameS);
					}
				}
			}

		}
		logger.debug("OUT");
		DatasetMap datasets=new DatasetMap();
		datasets.addDataset("1",dataset);
		return datasets;
	}


	/**
	 * Calculates chart value;
	 * 
	 * 
	 * public Dataset calculateValue(String cat, Map parameters) throws Exception {
	 * logger.debug("IN");
	 * String res=DataSetAccessFunctions.getDataSetResult(profile, getData(),parameters);
	 * 
	 * DefaultCategoryDataset dataset = new DefaultCategoryDataset();
	 * 
	 * SourceBean sbRows=SourceBean.fromXMLString(res);
	 * List listAtts=sbRows.getAttributeAsList("ROW");
	 * 
	 * 
	 * // run all categories (one for each row)
	 * categoriesNumber=0;
	 * for (Iterator iterator = listAtts.iterator(); iterator.hasNext();) {
	 * SourceBean category = (SourceBean) iterator.next();
	 * List atts=category.getContainedAttributes();
	 * 
	 * HashMap series=new HashMap();
	 * String catValue="";
	 * 
	 * String name="";
	 * String value="";
	 * 
	 * //run all the attributes, to define series!
	 * for (Iterator iterator2 = atts.iterator(); iterator2.hasNext();) {
	 * SourceBeanAttribute object = (SourceBeanAttribute) iterator2.next();
	 * 
	 * name=new String(object.getKey());
	 * value=new String((String)object.getValue());
	 * if(name.equalsIgnoreCase("x"))catValue=value;
	 * else series.put(name, value);
	 * }
	 * for (Iterator iterator3 = series.keySet().iterator(); iterator3.hasNext();) {
	 * String nameS = (String) iterator3.next();
	 * String valueS=(String)series.get(nameS);
	 * dataset.addValue(Double.valueOf(valueS).doubleValue(), nameS, catValue);
	 * categoriesNumber=categoriesNumber+1;
	 * }
	 * 
	 * }
	 * logger.debug("OUT");
	 * return dataset;
	 * }
	 * 
	 * @param content the content
	 */

	public void configureChart(SourceBean content) {
		logger.debug("IN");
		super.configureChart(content);
		confParameters = new HashMap();
		SourceBean confSB = (SourceBean)content.getAttribute("CONF");

		if(confSB==null) return;
		List confAttrsList = confSB.getAttributeAsList("PARAMETER");

		Iterator confAttrsIter = confAttrsList.iterator();
		while(confAttrsIter.hasNext()) {
			SourceBean param = (SourceBean)confAttrsIter.next();
			String nameParam = (String)param.getAttribute("name");
			String valueParam = (String)param.getAttribute("value");
			confParameters.put(nameParam, valueParam);
		}	

		if(confParameters.get("category_label")!=null){	
			categoryLabel=(String)confParameters.get("category_label");
		}
		else
		{
			//categoryLabel="category";
			categoryLabel="";
		}

		if(confParameters.get("value_label")!=null){	
			valueLabel=(String)confParameters.get("value_label");
		}
		else
		{
			//valueLabel="values";
			valueLabel="";
		}

		if(confParameters.get("n_visualization")!=null){		
			String nu=(String)confParameters.get("n_visualization");
			numberCatVisualization=Integer.valueOf(nu);
		}
		else
		{
			numberCatVisualization=new Integer(1);
		}

		//reading series colors if present
		SourceBean colors = (SourceBean)content.getAttribute("CONF.SERIES_COLORS");
		if(colors!=null){
			colorMap=new HashMap();
			List atts=colors.getContainedAttributes();
			String colorNum="";
			String colorSerie="";
			String num="";
			for (Iterator iterator = atts.iterator(); iterator.hasNext();) {
				SourceBeanAttribute object = (SourceBeanAttribute) iterator.next();

				String serieName=new String(object.getKey());
				colorSerie=new String((String)object.getValue());
				Color col=new Color(Integer.decode(colorSerie).intValue());
				if(col!=null){
					colorMap.put(serieName,col); 
				}

				/*
				colorNum=new String(object.getKey());
				num=colorNum.substring(5, colorNum.length()); // gets the number from color1, color2 

				colorSerie=new String((String)object.getValue());
				Color col=new Color(Integer.decode(colorSerie).intValue());
				if(col!=null){
					colorMap.put("color"+num,col); 
				}*/
			}		

		}


		// check if there is some serie to be hidden
		boolean moreHiddenSeries=true;
		int i=1;
		hiddenSeries=new Vector();
		while(moreHiddenSeries){
			String iS=new Integer(i).toString(); 
			if(confParameters.get("hidden_serie"+iS)!=null){
				String hiddenSerName=(String)confParameters.get("hidden_serie"+iS);
				hiddenSeries.add(hiddenSerName);
				i++;
			}
			else
				moreHiddenSeries=false;

		}

		// check if there is some info about additional labels style

		SourceBean styleLabelsSB = (SourceBean)content.getAttribute("STYLE_LABELS");
		if(styleLabelsSB!=null){

			String fontS = (String)content.getAttribute("STYLE_LABELS.font");
			String sizeS = (String)content.getAttribute("STYLE_LABELS.size");
			String colorS = (String)content.getAttribute("STYLE_LABELS.color");
			String orientationS = (String)content.getAttribute("STYLE_LABELS.orientation");


			try{
				Color color=Color.decode(colorS);
				int size=Integer.valueOf(sizeS).intValue();
				addLabelsStyle=new StyleLabel(fontS,size,color,orientationS);

			}
			catch (Exception e) {
				logger.error("Wrong style labels settings, use default");
			}

		}

		seriesNumber=new HashMap();

		logger.debug("OUT");
	}


	/**
	 * Use for slider: limits the categories visualization from cat selected to cat selected+numberscatsVisualization.
	 * 
	 * @param dataset the dataset
	 * @param categories the categories
	 * @param catSelected the cat selected
	 * @param numberCatsVisualization the number cats visualization
	 * 
	 * @return the dataset
	 */

	public Dataset filterDataset(Dataset dataset, HashMap categories, int catSelected, int numberCatsVisualization) {
		logger.debug("IN");
		DefaultCategoryDataset catDataset=(DefaultCategoryDataset)dataset;

		int numCats=categories.size();
		Vector visCat=new Vector();
		// from the choice point to min(chose point+interval, end point)
		//int startPoint=((catSelected-1)*numberCatsVisualization)+1;
		int startPoint=catSelected;

		int endPoint;
		if((startPoint+numberCatsVisualization-1)<=(categories.size()))
			endPoint=startPoint+numberCatsVisualization-1;
		else
			endPoint=categories.size();

		for(int i=(startPoint);i<=endPoint;i++){
			String name=(String)categories.get(new Integer(i));
			visCat.add(name);
		}


		List columns=new Vector(catDataset.getColumnKeys());
		for (Iterator iterator = columns.iterator(); iterator.hasNext();) {
			String col = (String) iterator.next();
			if(!(visCat.contains(col))){
				catDataset.removeColumn(col);
			}			
		}
		logger.debug("OUT");

		return catDataset;

	}

	/**
	 * Limits the dataset to a particular serie.
	 * 
	 * @param dataset the dataset
	 * @param serie the serie
	 * 
	 * @return the dataset
	 */

	public Dataset filterDatasetSeries(Dataset dataset, Vector series) {
		logger.debug("IN");
		DefaultCategoryDataset catDataset=(DefaultCategoryDataset)dataset;

		//keeps track of wich series has to be shown
		currentSeries=series;

		//List rowKeys=new Vector();

		List rowKeys=new Vector(catDataset.getRowKeys());

		for (Iterator iterator = rowKeys.iterator(); iterator.hasNext();) {
			String row = (String) iterator.next();
			if(!(series.contains(row))){
				catDataset.removeRow(row);	
				seriesNames.remove(row);
			}			
		}

		logger.debug("OUT");
		return catDataset;

	}




	/**
	 * Gets the conf parameters.
	 * 
	 * @return the conf parameters
	 */
	public Map getConfParameters() {
		return confParameters;
	}

	/**
	 * Sets the conf parameters.
	 * 
	 * @param confParameters the new conf parameters
	 */
	public void setConfParameters(Map confParameters) {
		this.confParameters = confParameters;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#createChart(java.lang.String, org.jfree.data.general.Dataset)
	 */
	public JFreeChart createChart(DatasetMap dataset) {
		// TODO Auto-generated method stub
		return super.createChart(dataset);
	}

	/**
	 * Gets the category label.
	 * 
	 * @return the category label
	 */
	public String getCategoryLabel() {
		return categoryLabel;
	}

	/**
	 * Sets the category label.
	 * 
	 * @param categoryLabel the new category label
	 */
	public void setCategoryLabel(String categoryLabel) {
		this.categoryLabel = categoryLabel;
	}

	/**
	 * Gets the value label.
	 * 
	 * @return the value label
	 */
	public String getValueLabel() {
		return valueLabel;
	}

	/**
	 * Sets the value label.
	 * 
	 * @param valueLabel the new value label
	 */
	public void setValueLabel(String valueLabel) {
		this.valueLabel = valueLabel;
	}

	/**
	 * Gets the categories number.
	 * 
	 * @return the categories number
	 */
	public int getCategoriesNumber() {
		return categoriesNumber;
	}

	/**
	 * Sets the categories number.
	 * 
	 * @param categoriesNumber the new categories number
	 */
	public void setCategoriesNumber(int categoriesNumber) {
		this.categoriesNumber = categoriesNumber;
	}

	/**
	 * Gets the categories.
	 * 
	 * @return the categories
	 */
	public Map getCategories() {
		return categories;
	}



	/**
	 * Gets the number cat visualization.
	 * 
	 * @return the number cat visualization
	 */
	public Integer getNumberCatVisualization() {
		return numberCatVisualization;
	}

	/**
	 * Sets the number cat visualization.
	 * 
	 * @param numberCatVisualization the new number cat visualization
	 */
	public void setNumberCatVisualization(Integer numberCatVisualization) {
		this.numberCatVisualization = numberCatVisualization;
	}




	public Vector getCurrentSeries() {
		return currentSeries;
	}


	public void setCurrentSeries(Vector currentSeries) {
		this.currentSeries = currentSeries;
	}


	public HashMap getSeriesNumber() {
		return seriesNumber;
	}


	public void putSeriesNumber(String name, int index) {
		this.seriesNumber.put(name, new Integer(index));
	}


	public Vector getSeriesNames() {
		return seriesNames;
	}


	public void setSeriesNames(Vector seriesNames) {
		this.seriesNames = seriesNames;
	}





}
