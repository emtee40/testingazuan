package it.eng.spagobi.engines.chart.bo.charttypes.clusterchart;

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




import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.engines.chart.bo.ChartImpl;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.engines.chart.utils.DatasetMap;
import it.eng.spagobi.engines.chart.utils.SerieCluster;

import java.awt.Color;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jfree.chart.JFreeChart;
import org.jfree.data.xy.DefaultXYZDataset;

/**   @author Giulio Gavardi
 *     giulio.gavardi@eng.it
 */




public class ClusterCharts extends ChartImpl {

	Map confParameters;
	Vector series;
	String xLabel="";
	String yLabel="";
	Vector currentSeries=null;
	HashMap serie_values=null;
	boolean decimalXValues=false;
	boolean decimalYValues=false;


	HashMap colorMap=new HashMap();

	double xMin;
	double xMax;
	double yMin;
	double yMax;
	double zMax;


	private static transient Logger logger=Logger.getLogger(ClusterCharts.class);


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

		DefaultXYZDataset dataset = new DefaultXYZDataset(); 

		SourceBean sbRows=SourceBean.fromXMLString(res);
		List listAtts=sbRows.getAttributeAsList("ROW");

		series=new Vector();
		serie_values=new HashMap();

		boolean firstX=true;
		boolean firstY=true;
		boolean firstZ=true;
		double xTempMax=0.0;
		double xTempMin=0.0;
		double yTempMax=0.0;
		double yTempMin=0.0;
		boolean first=true;

		// In list atts there are all the series, let's run each
		int i=0;
		for (Iterator iterator = listAtts.iterator(); iterator.hasNext();) {
			SourceBean row = (SourceBean) iterator.next();
			List attsRow=row.getContainedAttributes();
			String serieName="";

			/*if(first){
				if (name.indexOf("$F{") >= 0){
					setTitleParameter(atts);
				}
				first=false;
			}*/

			String name="";
			String value="";
			//run all the attributes of the serie

			for (Iterator iterator2 = attsRow.iterator(); iterator2.hasNext();) {  // run attributes, serieName, x, y, z
				SourceBeanAttribute object = (SourceBeanAttribute) iterator2.next();

				name=new String(object.getKey());
				value=new String((String)object.getValue());

				boolean newSerie=true;
				if(name.equalsIgnoreCase("serie_name"))
				{
					serieName=value;
					logger.debug("New Serie: "+serieName);
					if(!(serie_values.keySet().contains(serieName))) // new serie create the arrays
					{
						i=0;
						newSerie=true;
						SerieCluster serieCluster=new SerieCluster(serieName, new double[listAtts.size()], new double[listAtts.size()], new double[listAtts.size()]);
						serie_values.put(serieName, serieCluster);
					}
					else // serie already present
					{ newSerie=false;
					i++;

					}
				}
				else {
					// after the name of serie here are values
					SerieCluster serieCluster=(SerieCluster)serie_values.get(serieName);
					if(serieCluster == null){
						logger.error("Order of dataset not correct");
						return null;
					}


					double valueD=0.0;
					try{
						Integer intero=Integer.valueOf(value);
						valueD=intero.doubleValue();						
					}
					catch (NumberFormatException e) {
						valueD=(Double.valueOf(value)).doubleValue();
						if(name.equalsIgnoreCase("x")){
							decimalXValues=true;
						}
						else if(name.equalsIgnoreCase("y")){
							decimalYValues=true;
						}
					}


					if(name.equalsIgnoreCase("x")){
						double[] xArr=serieCluster.getX();
						xArr[i]=valueD;

						if(firstX){
							xTempMin=valueD;
							xTempMax=valueD;
							firstX=false;
						}
						if(valueD<xTempMin)xTempMin=valueD;
						if(valueD>xTempMax)xTempMax=valueD;
						serieCluster.setX(xArr);

					}
					else 
						if(name.equalsIgnoreCase("y")){
							double[] yArr=serieCluster.getY();
							yArr[i]=valueD;

							if(firstY){
								yTempMin=valueD;
								yTempMax=valueD;
								firstY=false;
							}
							if(valueD<yTempMin)yTempMin=valueD;
							if(valueD>yTempMax)yTempMax=valueD;		
							serieCluster.setY(yArr);

						}
						else 
							if(name.equalsIgnoreCase("z")){
								double[] zArr=serieCluster.getZ();
								zArr[i]=valueD;
								if(firstZ){
									zMax=valueD;
									firstZ=false;
								}
								if(zMax<valueD)zMax=valueD;

								serieCluster.setZ(zArr);					
							}
				}
			}

		}


		//xMin=xTempMin-zMax;
		//xMax=xTempMax+zMax;

		xMin=xTempMin-1.0;
		xMax=xTempMax+1.0;
		yMin=yTempMin;
		yMax=yTempMax;

		double xOrder=calculateOrder(xMax)*10;

		// I have all the map full, create the Dataset

		for (Iterator iterator = serie_values.keySet().iterator(); iterator.hasNext();) {
			String serieName = (String) iterator.next();

			SerieCluster serieCluster=(SerieCluster)serie_values.get(serieName);
			double[] xArr=serieCluster.getX();
			double[] yArr=serieCluster.getY();

			double[] zArr=serieCluster.getZ();
			// normalizing all z
			for (int j = 0; j < zArr.length; j++) {

				zArr[j]=(zArr[j]/zMax);	
				if(xOrder>0) zArr[j]=zArr[j]*xOrder;

			}

			double[][] seriesT = new double[][] { yArr, xArr, zArr };

			//double[][] seriesT = new double[][] { xArr, yArr, zArr };

			dataset.addSeries(serieName, seriesT);
			series.add(serieName);


		}

		DatasetMap datasets=new DatasetMap();
		datasets.addDataset("1",dataset);
		logger.debug("OUT");
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

		if(confParameters.get("x_label")!=null){	
			xLabel=(String)confParameters.get("x_label");
		}
		else
		{
			xLabel="x";
		}

		if(confParameters.get("y_label")!=null){	
			yLabel=(String)confParameters.get("y_label");
		}
		else
		{
			yLabel="y";
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

				String seriesName=new String(object.getKey());

				colorSerie=new String((String)object.getValue());
				Color col=new Color(Integer.decode(colorSerie).intValue());
				if(col!=null){
					colorMap.put(seriesName,col); 
				}
			}		

		}



		logger.debug("OUT");
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




	public Vector getSeries() {
		return series;
	}




	public void setSeries(Vector series) {
		this.series = series;
	}




	public String getXLabel() {
		return xLabel;
	}




	public void setXLabel(String label) {
		xLabel = label;
	}




	public String getYLabel() {
		return yLabel;
	}




	public void setYLabel(String label) {
		yLabel = label;
	}




	public static Logger getLogger() {
		return logger;
	}




	public static void setLogger(Logger logger) {
		ClusterCharts.logger = logger;
	}




	public Vector getCurrentSeries() {
		return currentSeries;
	}




	public void setCurrentSeries(Vector currentSeries) {
		this.currentSeries = currentSeries;
	}



	public static double calculateOrder(double toCalculate){

		if(toCalculate<=10){
			return 0;
		}
		else{
			double newToCalculate=toCalculate/10;
			return (1+calculateOrder(newToCalculate));
		}
	}








}
