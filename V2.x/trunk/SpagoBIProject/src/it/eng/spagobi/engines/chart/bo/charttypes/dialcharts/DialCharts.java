/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2008 Engineering Ingegneria Informatica S.p.A.

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

package it.eng.spagobi.engines.chart.bo.charttypes.dialcharts;


import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spagobi.engines.chart.bo.ChartImpl;
import it.eng.spagobi.engines.chart.utils.DataSetAccessFunctions;
import it.eng.spagobi.engines.chart.utils.LovAccessFunctions;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.jfree.chart.JFreeChart;
import org.jfree.data.general.Dataset;
import org.jfree.data.general.DefaultValueDataset;

/** 
 *  * @author Giulio Gavardi
 *     giulio.gavardi@eng.it
 */

public class DialCharts extends ChartImpl {

	private static transient Logger logger=Logger.getLogger(DialCharts.class);
	protected double lower=0.0;
	protected double upper=0.0;
	Map confParameters;
	SourceBean sbRow;


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#createChart(java.lang.String, org.jfree.data.general.Dataset)
	 */
	public JFreeChart createChart(String chartTitle, org.jfree.data.general.Dataset dataset){
		return null;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#configureChart(it.eng.spago.base.SourceBean)
	 */
	public void configureChart(SourceBean content){
		logger.debug("IN");

		super.configureChart(content);

		try{

			if(isLovConfDefined==false){  // the configuration parameters are set in template
				logger.debug("Configuration in template");
				confParameters = new HashMap();
				SourceBean confSB = (SourceBean)content.getAttribute("CONF");

				List confAttrsList = confSB.getAttributeAsList("PARAMETER");

				Iterator confAttrsIter = confAttrsList.iterator();
				while(confAttrsIter.hasNext()) {
					SourceBean param = (SourceBean)confAttrsIter.next();
					String nameParam = (String)param.getAttribute("name");
					String valueParam = (String)param.getAttribute("value");
					confParameters.put(nameParam, valueParam);
				}	
				if(confParameters.get("lower")!=null){	
					String lower=(String)confParameters.get("lower");
					setLower(Double.valueOf(lower).doubleValue());
				}
				else {
					logger.error("lower bound not defined");
					throw new Exception("lower bound not defined");
				}
				if(confParameters.get("upper")!=null){	
					String upper=(String)confParameters.get("upper");
					setUpper(Double.valueOf(upper).doubleValue());
				}
				else {
					logger.error("upper bound not defined");
					throw new Exception("upper bound not defined");
				}

			}
			else{ // configuration parameters are set in a LOV
				logger.debug("configuration parameters set in LOV");
				//String parameters=LovAccessFunctions.getLovResult(profile, confLov);

				
				
				String parameters=DataSetAccessFunctions.getDataSetResultFromLabel(profile, confDataset, parametersObject);
				
				
				SourceBean sourceBeanResult=null;
				try {
					sourceBeanResult = SourceBean.fromXMLString(parameters);
				} catch (SourceBeanException e) {
					logger.error("error in reading configuration lov");
					throw new Exception("error in reading configuration lov");
				}

				sbRow=(SourceBean)sourceBeanResult.getAttribute("ROW");
				String lower=(String)sbRow.getAttribute("lower");
				String upper=(String)sbRow.getAttribute("upper");


				if(lower==null || upper==null){
					logger.error("error in reading configuration lov");
					throw new Exception("error in reading configuration lov");
				}

				setLower(Double.valueOf(lower).doubleValue());
				setUpper(Double.valueOf(upper).doubleValue());

			}
		}catch (Exception e) {
			logger.error("error in reading template configurations");
		}

		logger.debug("OUT");
	}	




	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#calculateValue()
	 */
	public Dataset calculateValue() throws Exception{
		logger.debug("IN");
		String res=DataSetAccessFunctions.getDataSetResultFromId(profile, getData(),parametersObject);
		if (res!=null){
			logger.debug("Dataset result:"+res);
			SourceBean sbRows=SourceBean.fromXMLString(res);
			SourceBean sbRow=(SourceBean)sbRows.getAttribute("ROW");
			String result="";
			if(sbRow==null){
				result=(new Double(lower)).toString();
			}
			else{
				result=(String)sbRow.getAttribute("value");
			}
			DefaultValueDataset dataset = new DefaultValueDataset(Double.valueOf(result));
			logger.debug("OUT");

			return dataset;			
		}
		logger.error("dataset is null!!!!!!!!!");
		return null;
	}




	/**
	 * Gets the lower.
	 * 
	 * @return the lower
	 */
	public double getLower() {
		return lower;
	}

	/**
	 * Sets the lower.
	 * 
	 * @param lower the new lower
	 */
	public void setLower(double lower) {
		this.lower = lower;
	}

	/**
	 * Gets the upper.
	 * 
	 * @return the upper
	 */
	public double getUpper() {
		return upper;
	}

	/**
	 * Sets the upper.
	 * 
	 * @param upper the new upper
	 */
	public void setUpper(double upper) {
		this.upper = upper;
	}


	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#isLovConfDefined()
	 */
	public boolean isLovConfDefined() {
		return isLovConfDefined;
	}




	/* (non-Javadoc)
	 * @see it.eng.spagobi.engines.chart.bo.ChartImpl#setLovConfDefined(boolean)
	 */
	public void setLovConfDefined(boolean isLovConfDefined) {
		this.isLovConfDefined = isLovConfDefined;
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




	/**
	 * Gets the sb row.
	 * 
	 * @return the sb row
	 */
	public SourceBean getSbRow() {
		return sbRow;
	}




	/**
	 * Sets the sb row.
	 * 
	 * @param sbRow the new sb row
	 */
	public void setSbRow(SourceBean sbRow) {
		this.sbRow = sbRow;
	}













}
