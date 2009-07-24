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

package it.eng.spagobi.engines.jasperreport;




import it.eng.spagobi.services.proxy.DocumentExecuteServiceProxy;

import java.io.ByteArrayInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;
import net.sf.jasperreports.engine.fill.JRFillVariable;

/**
 * @author Giulio Gavardi
 *         giulio.gavardi@eng.it
 */

public class ScriptletChart extends JRDefaultScriptlet {

	private static transient Logger logger=Logger.getLogger(ScriptletChart.class);

	public static final String CHART_LABEL="chart_label"; 
	public static int iii=1;

	public void afterReportInit() throws JRScriptletException {

		logger.debug("IN");


		try {
			// Creazione GET method

			HashMap parametersMap=(HashMap)this.getParameterValue("REPORT_PARAMETERS_MAP");


			String userId=(String)parametersMap.get("SBI_USERID");

			logger.debug("user id is "+userId);

			HttpSession session=(HttpSession)parametersMap.get("SBI_HTTP_SESSION");

			HashMap chartParameters=new HashMap();

			// Get all defined variables wich start with prefix sbichart,
			// each is an image to fill
			Map allVariables = this.variablesMap;

			if(allVariables==null)allVariables=new HashMap();

			logger.debug("Running all variables");
			for (Iterator iterator = allVariables.keySet().iterator(); iterator.hasNext();) {
				String varName = (String) iterator.next();
				if(varName.startsWith("sbichart_")){
					logger.debug("Processing variable "+varName);					
					JRFillVariable variable=(JRFillVariable)allVariables.get(varName);
					if(variable.getValue()!=null){
						chartParameters=new HashMap();
//						the realVarName is the name of the target variable!
						String areaValue=varName.substring(9);
						// call a utility function that parse the variable, in the form var1=val1;var2=val2
						String varVal=(String)variable.getValue();
						// Value is defined as chart_label=label;par1=val1;par2=val2;
						Map nameValuePars=parseVariable(varVal);

						// check if there is the main parameters defined:
						// chart_label : indicating the label of the chart that has to be called.
						if(nameValuePars.get(CHART_LABEL)!=null){
							String labelValue=(String) nameValuePars.get(CHART_LABEL);
							logger.debug("execute chart with lable "+labelValue);

							// Set other parameters
							for (Iterator iterator2 = nameValuePars.keySet().iterator(); iterator2.hasNext();) {
								String namePar = (String) iterator2.next();
								if(!namePar.equalsIgnoreCase(CHART_LABEL)){
									Object value=nameValuePars.get(namePar);
									chartParameters.put(namePar, value);
								}
							}

							DocumentExecuteServiceProxy proxy=new DocumentExecuteServiceProxy(userId,session);
							logger.debug("Calling Service");
							byte[] image=proxy.executeChart(labelValue, chartParameters);
							logger.debug("Back from Service");

							InputStream is=new ByteArrayInputStream(image);

//							FileOutputStream fos=new FileOutputStream("C:/provaSperiamo"+(new Integer(iii)).toString()+".png");
//							int avalaible = is.available();   
//							iii++;
//							for(int i=0; i<avalaible; i++) {
//							fos.write(is.read()); 
//							}


//							fos.close();


							logger.debug("Input Stream filled, Setting variable");
							if(variablesMap.keySet().contains(areaValue)){
								this.setVariableValue(areaValue, is);
							}
							else{
								logger.error("variable where to set image chart "+areaValue+ " not defined");
							}

							//is.close();
						}
						else{
							logger.error("chart_label not specified");							
						}
					}
					else{
						logger.warn("no value associated to the sbichart_ variable");
					}
				}

			}

			logger.debug("OUT");
		} 
		catch (Exception e) {
			logger.error("Error in scriptlet",e);
			throw new JRScriptletException(e);
		}
	}

	/**
	 *  varValue: parses the variable value in the form att1=value1; att2=value2;
	 */

	protected Map parseVariable(String varValue){
		logger.debug("IN");
		HashMap toReturn=new HashMap<String, String>();
		try{
			StringTokenizer tokenizer=new StringTokenizer(varValue,";");
			while(tokenizer.hasMoreTokens()){
				String token=tokenizer.nextToken();
				int indexEqual=token.indexOf("=");
				String namePar=token.substring(0,indexEqual);
				String valuePar=token.substring(indexEqual+1);
				toReturn.put(namePar, valuePar);
			}
		}
		catch (Exception e) {
			logger.error("Error in target definition (should be target_x[att: val, att2: val])", e);
			return new HashMap<String, String>();
		}
		logger.debug("OUT");
		return toReturn;
	}













}
