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
package it.eng.spagobi.engines.kpi;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjTemplate;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.ObjectsTreeConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.engines.InternalEngineIFace;
import it.eng.spagobi.engines.drivers.exceptions.InvalidOperationRequest;
import it.eng.spagobi.engines.kpi.bo.ChartImpl;
import it.eng.spagobi.engines.kpi.utils.StyleLabel;
import it.eng.spagobi.kpi.config.bo.Kpi;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.config.bo.KpiValue;
import it.eng.spagobi.kpi.model.bo.ModelInstanceNode;
import it.eng.spagobi.kpi.model.bo.Resource;
import it.eng.spagobi.tools.dataset.bo.DataSetConfig;
import it.eng.spagobi.tools.dataset.common.DataSetImpl;
import it.eng.spagobi.tools.dataset.common.DataSetProxyImpl;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datastore.IField;
import it.eng.spagobi.tools.dataset.common.datastore.IRecord;

import java.awt.Color;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

/**
 * 
 * @author Chiara Chiarelli
 * 
 */

public class SpagoBIKpiInternalEngine implements InternalEngineIFace {
	
	private static transient Logger logger = Logger.getLogger(SpagoBIKpiInternalEngine.class);

	public static final String messageBundle = "messages";

	protected String name=null;//Document's title
	protected String subName=null;//Document's subtitle
	protected StyleLabel styleTitle;//Document's title style
	protected StyleLabel styleSubTitle;//Document's subtitle style
	
	protected int width;//width of each chart
	protected int height;//height of each chart
	
	protected IEngUserProfile profile;
	
	protected String subtype="";
	protected Color color;//background color of the charts
	
	protected HashMap parametersObject;
	protected boolean show_chart=false;//false if only the kpi Values are shown
	protected boolean legend=false;//true if the legend will be shown	
	
	protected HashMap confMap;//HashMap with all the config parameters	
		
	protected List resources ;//List of resources linked to the ModelInstanceNode



	/**
	 * Executes the document and populates the response.
	 * 
	 * @param requestContainer The <code>RequestContainer</code> object (the session can be retrieved from this object)
	 * @param obj The <code>BIObject</code> representing the document to be executed
	 * @param response The response <code>SourceBean</code> to be populated
	 * 
	 * @throws EMFUserError the EMF user error
	 */

	public void execute(RequestContainer requestContainer, BIObject obj, SourceBean response) throws EMFUserError{
		
		ResponseContainer responseContainer=ResponseContainer.getResponseContainer();
		EMFErrorHandler errorHandler=responseContainer.getErrorHandler();

		if (obj == null) {
			logger.error("The input object is null.");
			throw new EMFUserError(EMFErrorSeverity.ERROR, "100", messageBundle);
		}

		if (!obj.getBiObjectTypeCode().equalsIgnoreCase("KPI")) {
			logger.error("The input object is not a dashboard.");
			throw new EMFUserError(EMFErrorSeverity.ERROR, "1001", messageBundle);
		}

		String documentId=obj.getId().toString();

		SessionContainer session = requestContainer.getSessionContainer();
		IEngUserProfile userProfile = (IEngUserProfile) session.getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		String userId=(String)((UserProfile)userProfile).getUserId();

		logger.debug("got parameters userId="+userId+" and documentId="+documentId.toString());

		//		**************get the template*****************
		logger.debug("getting template");
		SourceBean serviceRequest=requestContainer.getServiceRequest();


		try{
			SourceBean content = null;
			byte[] contentBytes = null;
			try{
				ObjTemplate template = DAOFactory.getObjTemplateDAO().getBIObjectActiveTemplate(Integer.valueOf(documentId));
				if(template==null) throw new Exception("Active Template null");
				contentBytes = template.getContent();
				if(contentBytes==null) throw new Exception("Content of the Active template null"); 

				// get bytes of template and transform them into a SourceBean

				String contentStr = new String(contentBytes);
				content = SourceBean.fromXMLString(contentStr);
				logger.debug("Got the content of the template");
			} catch (Exception e) {
				logger.error("Error while converting the Template bytes into a SourceBean object");
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 2003);
				userError.setBundle("messages");
				throw userError;
			}
			
			//Date for which we want to see the KpiValues
			Date dateOfKPI = new Date();
			
			HashMap parametersMap=null;
			//Search if the chart has parameters
			List parametersList=obj.getBiObjectParameters();
			logger.debug("Check for BIparameters and relative values");
			if(parametersList!=null){
				parametersMap=new HashMap();
				for (Iterator iterator = parametersList.iterator(); iterator.hasNext();) {
					BIObjectParameter par= (BIObjectParameter) iterator.next();
					String url=par.getParameterUrlName();
					List values=par.getParameterValues();
					if(values!=null){
						if(values.size()==1){
							String value=(String)values.get(0);
							parametersMap.put(url, value);
							if (url.equals("ParKpiDate")){
								//TODO da verificare
								dateOfKPI = new Date(url);
							}
						}else if(values.size() >=1){
							String value = "'"+(String)values.get(0)+"'";
							for(int k = 1; k< values.size() ; k++){
								value = value + ",'" + (String)values.get(k)+"'";
							}
							parametersMap.put(url, value);
							if (url.equals("ParKpiDate")){
								//TODO da verificare
								dateOfKPI = new Date(url);
							}
						}
					}
				}	

			} // end looking for parameters
			
			logger.debug("Got the date for which the KpiValues have to be calculated. Date:"+dateOfKPI);
			
			this.parametersObject = parametersMap;


			//		**************take informations on the modelInstance and its KpiValues*****************

			String modelNodeInstance = (String)content.getAttribute("model_node_instance");
			Integer modelNodeInstanceID = new Integer(modelNodeInstance);
			if (modelNodeInstanceID == null){
				logger.error("The modelNodeInstanceId specified in the template is null");
				throw new EMFUserError(EMFErrorSeverity.ERROR, "10106", messageBundle);
			}
			getSetConf(content);
			logger.debug("Setted the configuration of the template");
			//gets the ModelInstanceNode
			ModelInstanceNode mI = DAOFactory.getKpiDAO().loadModelInstanceById(modelNodeInstanceID, dateOfKPI);
			logger.debug("Loaded the modelInstanceNode with id "+ modelNodeInstanceID.toString());
			//From the modelInstance gets the related KpiInstance
			KpiInstance kpiI = mI.getKpiInstanceAssociated();
			logger.debug("Loaded the KpiInstance related to the specified Model Instance");
			//I set the list of resources of that specific ModelInstance
			this.resources = mI.getResources();
			
			logger.debug("Setted the List of Resources related to the specified Model Instance");
			if(this.resources == null || this.resources.isEmpty()){
				logger.debug("There are no resources assigned to the Model Instance");
			}
			boolean isActual = DAOFactory.getKpiDAO().hasActualValues(kpiI, dateOfKPI);
			
			//if not still actual or doesn't have any values, calculates the new values and updates the KpiInstance
			if (!isActual){
				logger.debug("The kpiInstance with id "+kpiI.getKpiInstanceId().toString()+" hasn't got actual values");
				kpiI = calculateNewKpiInstance(kpiI);
				logger.debug("The kpiInstance with id "+kpiI.getKpiInstanceId().toString()+" was reloaded with the new calculated KpiValues");
			}
			//From the KpiInstance gets the last KpiValues 		
			List kpiValues = kpiI.getValues();
			
			List charts = new ArrayList();
			if(show_chart){
				logger.debug("Started creation of each chart");
				//If charts have to be shown the list "charts" will be filled with a chart for each KpiValue
				Iterator it = kpiValues.iterator();
				while(it.hasNext()){
					KpiValue k = (KpiValue) it.next();
					List thresholds = k.getThresholds();
					String chartType = k.getChartType();
					logger.debug("Got chartType: "+(chartType!=null?chartType:""));
					if(chartType==null){
						logger.debug("Chart Type is null");
					}
					if(chartType!=null){
						
						Double value = new Double(k.getValue());
						HashMap pars = (HashMap) confMap.clone();
						String chartTitle = "";
						if(k.getR()!=null){
							chartTitle = "Resource: "+k.getR().getName();
							logger.debug("Added the title to the chart with the name of the resource: "+k.getR().getName());
						}
						pars.put("name", chartTitle) ;
						ChartImpl sbi = null;				
						sbi=ChartImpl.createChart(chartType);
						logger.debug("Chart created");
						sbi.setProfile(userProfile);
						logger.debug("Profile setted");
						sbi.setValueDataSet(value);
						logger.debug("Value to represent setted: "+(value!=null ? value.toString():""));
						sbi.configureChart(pars);
						logger.debug("Config parameters setted into the chart");
						sbi.setThresholds(thresholds);
						logger.debug("Thresholds setted for the chart");
						
						charts.add(sbi);	
						logger.debug("Chart added to the list of charts");
					}					
				}				
			}
						
			try{
				logger.debug("successfull kpi creation");

				response.setAttribute(ObjectsTreeConstants.SESSION_OBJ_ATTR,obj);
				response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "KPI");
				response.setAttribute("kpiValues",kpiValues);
				response.setAttribute("show_chart",show_chart);
				if (name!=null){
					response.setAttribute("title",name);
					response.setAttribute("styleTitle",styleTitle);
				}
				if(subName!=null){
					response.setAttribute("subName",subName);
					response.setAttribute("styleSubTitle",styleSubTitle);
				}
				if(show_chart && !charts.isEmpty()){
					response.setAttribute("charts",charts);
				}
			}
			catch (Exception eex) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 10107);
				userError.setBundle("messages");
				throw userError;
			}

			logger.debug("OUT");
		}
		catch (EMFUserError e) {

			errorHandler.addError(e);
		}
		catch (Exception e) {
			EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
			logger.error("Generic Error");
			errorHandler.addError(userError);
		}
	}
	
	/**
	 * returns the new KpiInstance with all the same data except for the List of KpiValues which will be recalculated
	 * 
	 * @param Kpi Instance k for which new values have to be calculated
	 * 
	 * @return the new KpiInstance with all the same data except for the List of KpiValues which will be recalculated
	 * @throws EMFUserError the EMF user error
	 * @throws EMFInternalError 
	 */
	public KpiInstance calculateNewKpiInstance(KpiInstance k) throws EMFUserError, EMFInternalError{
		logger.debug("IN");
		KpiInstance toReturn = new KpiInstance();
		toReturn.setKpiInstanceId(k.getKpiInstanceId());
		toReturn.setKpi(k.getKpi());
		toReturn.setD(k.getD());
		boolean isAlarming = false ;
		
		List kpiValues = new ArrayList();
		DataSetConfig ds = null;
		Integer kpiId = k.getKpi();
		try {
		Kpi kpi = DAOFactory.getKpiDAO().loadKpiById(kpiId);
		ds = kpi.getKpiDs();

		} catch (EMFUserError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//In case the KPIValue has to be calculated for each resource
		if(!resources.isEmpty()){
			Iterator resIt = resources.iterator();
			while(resIt.hasNext()){
				
				Resource r = (Resource)resIt.next();
				KpiValue kVal = getNewKpiValue(ds,k, r);	
				//Add kpiValue to the KpiValues List 
				kpiValues.add(kVal);
				//Insert new Value into the DB
				DAOFactory.getKpiDAO().insertKpiValue(kVal);	
				//Checks if the value is alarming (out of a certain range)
				//If the value is alarming a new line will be inserted in the sbi_alarm_event table and scheduled to be sent
				DAOFactory.getKpiDAO().isAlarmingValue(kVal);	
			}
		}else{//In case the KPIValue doesn't have to be calculated for a specific resource
			
			KpiValue kVal = getNewKpiValue(ds,k, null);	
			//Add kpiValue to the KpiValues List 
			kpiValues.add(kVal);
			//Insert new Value into the DB
			DAOFactory.getKpiDAO().insertKpiValue(kVal);
			//Checks if the value is alarming (out of a certain range)
			//If the value is alarming a new line will be inserted in the sbi_alarm_event table and scheduled to be sent
			DAOFactory.getKpiDAO().isAlarmingValue(kVal);
		}
		
		toReturn.setValues(kpiValues);
		
		logger.debug("OUT");
		return toReturn;
	}
	
	public KpiValue getNewKpiValue(DataSetConfig ds, KpiInstance k, Resource r) throws EMFUserError, EMFInternalError{
		
		logger.debug("IN");
		KpiValue kVal = new KpiValue();
		Date begD = new Date();
		kVal.setBeginDate(begD);
		KpiInstance sbik = DAOFactory.getKpiDAO().loadKpiInstanceById(k.getKpiInstanceId());
		Integer seconds = sbik.getPeriodicity();
		//Transforms seconds into milliseconds
		long milliSeconds = seconds.longValue() * 1000;			
		long begDtTime = begD.getTime();
		long endTime = begDtTime + milliSeconds;		
		Date endDate = new Date(endTime);
		kVal.setEndDate(endDate);
		kVal.setKpiInstanceId(k.getKpiInstanceId());
		kVal.setWeight(k.getWeight());		
		List thresholds = DAOFactory.getKpiDAO().getThresholds(sbik);		 
		kVal.setThresholds(thresholds);	
		String chartType = DAOFactory.getKpiDAO().getChartType(sbik.getKpiInstanceId());
		
		//If it has to be calculated for a Resource. The resource will be set as parameter
		HashMap temp = (HashMap)this.parametersObject.clone() ;
		if (r!=null){
			String colName = r.getColumn_name();
			String value = r.getName();
			kVal.setR(r);			
			temp.put(colName, value);		
		}

		//If not, the dataset will be calculated without the parameter Resource and the DataSet won't expect a parameter of type resource
		DataSetProxyImpl dspi=new DataSetProxyImpl(profile); 
		DataSetImpl dsi = new DataSetImpl(ds,profile);
		dsi.loadData(temp);
		IDataStore ids = dsi.getDataStore();

		//Transform result into KPIValue (I suppose that the result has a unique value)
		IRecord record = ids.getAt(0);			
		List fields = record.getFields();
		IField f = (IField) fields.get(0);
		SourceBeanAttribute fieldObject =(SourceBeanAttribute) f.getValue();
		String fieldValue = fieldObject.getValue().toString();
		kVal.setValue(fieldValue);
		if(chartType!=null)	kVal.setChartType(chartType);
		logger.debug("OUT");
		return kVal;
		
	}
	
	

	public void getSetConf(SourceBean content) {
		logger.debug("IN");
		this.confMap = new HashMap();
		// common part for all charts
		//setting the title with parameter values if is necessary
		if(content.getAttribute("name")!=null) {
			String titleChart = (String)content.getAttribute("name");
			String tmpTitle = titleChart;
			while (!tmpTitle.equals("")){
				if (tmpTitle.indexOf("$P{") >= 0){
					String parName = tmpTitle.substring(tmpTitle.indexOf("$P{")+3, tmpTitle.indexOf("}"));
					
					String parValue = (parametersObject.get(parName)==null)?"":(String)parametersObject.get(parName);
					parValue = parValue.replaceAll("\'", "");
					
					if(parValue.equals("%")) parValue = "";
					int pos = tmpTitle.indexOf("$P{"+parName+"}") + (parName.length()+4);
					titleChart = titleChart.replace("$P{" + parName + "}", parValue);
					tmpTitle = tmpTitle.substring(pos);
				}
				else
					tmpTitle = "";
			}
			setName(titleChart);
		}
		else setName("");

		SourceBean styleTitleSB = (SourceBean)content.getAttribute("STYLE_TITLE");
		if(styleTitleSB!=null){

			String fontS = (String)content.getAttribute("STYLE_TITLE.font");
			String sizeS = (String)content.getAttribute("STYLE_TITLE.size");
			String colorS = (String)content.getAttribute("STYLE_TITLE.color");


			try{
				Color color=Color.decode(colorS);
				int size=Integer.valueOf(sizeS).intValue();
				styleTitle=new StyleLabel(fontS,size,color);
				
			}
			catch (Exception e) {
				logger.error("Wrong style Title settings, use default");
			}

		}else{
			styleTitle=new StyleLabel("Arial",16,new Color (255,0,0));
		}
		this.confMap.put("styleTitle", styleTitle) ;
		
		SourceBean styleSubTitleSB = (SourceBean)content.getAttribute("STYLE_SUBTITLE");
		if(styleSubTitleSB!=null){

			String subTitle = (String)content.getAttribute("STYLE_SUBTITLE.name");
			if(subTitle!=null) {
				String tmpSubTitle = subTitle;
				while (!tmpSubTitle.equals("")){
					if (tmpSubTitle.indexOf("$P{") >= 0){
						String parName = tmpSubTitle.substring(tmpSubTitle.indexOf("$P{")+3, tmpSubTitle.indexOf("}"));
						String parValue = (parametersObject.get(parName)==null)?"":(String)parametersObject.get(parName);
						parValue = parValue.replaceAll("\'", "");
						if(parValue.equals("%")) parValue = "";
						int pos = tmpSubTitle.indexOf("$P{"+parName+"}") + (parName.length()+4);
						subTitle = subTitle.replace("$P{" + parName + "}", parValue);
						tmpSubTitle = tmpSubTitle.substring(pos);
					}
					else
						tmpSubTitle = "";
				}
				setSubName(subTitle);
				
			}
			else setSubName("");
			
			String fontS = (String)content.getAttribute("STYLE_SUBTITLE.font");
			String sizeS = (String)content.getAttribute("STYLE_SUBTITLE.size");
			String colorS = (String)content.getAttribute("STYLE_SUBTITLE.color");


			try{
				Color color=Color.decode(colorS);
				int size=Integer.valueOf(sizeS).intValue();
				styleSubTitle=new StyleLabel(fontS,size,color);				
			}
			catch (Exception e) {
				logger.error("Wrong style SubTitle settings, use default");
			}

		}else{
			styleSubTitle=new StyleLabel("Arial",12,new Color (0,0,0));
		}
		this.confMap.put("styleSubTitle", styleSubTitle) ;


		String colS = (String)content.getAttribute("COLORS.background");
		if(colS!=null) 
		{
			Color col=new Color(Integer.decode(colS).intValue());
			if(col!=null){
				setColor(col);}
			else{
				setColor(Color.white);
			}
		}
		else { 	
			setColor(Color.white);
		}
		this.confMap.put("color", color) ;

		String widthS = (String)content.getAttribute("DIMENSION.width");
		String heightS = (String)content.getAttribute("DIMENSION.height");
		if(widthS==null || heightS==null){
			logger.warn("Width or height non defined, use default ones");
			widthS="400";
			heightS="300";
		}

		width=Integer.valueOf(widthS).intValue();
		height=Integer.valueOf(heightS).intValue();
		this.confMap.put("width", width) ;
		this.confMap.put("height", height) ;

		// get all the data parameters 


		try{					
			Map dataParameters = new HashMap();
			SourceBean dataSB = (SourceBean)content.getAttribute("CONF");
			List dataAttrsList = dataSB.getContainedSourceBeanAttributes();
			Iterator dataAttrsIter = dataAttrsList.iterator();
			while(dataAttrsIter.hasNext()) {
				SourceBeanAttribute paramSBA = (SourceBeanAttribute)dataAttrsIter.next();
				SourceBean param = (SourceBean)paramSBA.getValue();
				String nameParam = (String)param.getAttribute("name");
				String valueParam = (String)param.getAttribute("value");
				dataParameters.put(nameParam, valueParam);
			}

			legend=true;
			if(dataParameters.get("legend")!=null && !(((String)dataParameters.get("legend")).equalsIgnoreCase("") )){	
				String leg=(String)dataParameters.get("legend");
				if(leg.equalsIgnoreCase("false"))
					legend=false;
			}
			this.confMap.put("legend", legend) ;

			show_chart=true;
			if(dataParameters.get("show_chart")!=null && !(((String)dataParameters.get("show_chart")).equalsIgnoreCase("") )){	
				String fil=(String)dataParameters.get("show_chart");
				if(fil.equalsIgnoreCase("false"))
					show_chart=false;
			}
			this.confMap.put("show_chart", show_chart) ;
			
			
		}
		catch (Exception e) {
			logger.error("error in reading data source parameters");
		}


	}
	
	/**
	 * The <code>SpagoBIDashboardInternalEngine</code> cannot manage subobjects so this method must not be invoked.
	 * 
	 * @param requestContainer The <code>RequestContainer</code> object (the session can be retrieved from this object)
	 * @param obj The <code>BIObject</code> representing the document
	 * @param response The response <code>SourceBean</code> to be populated
	 * @param subObjectInfo An object describing the subobject to be executed
	 * 
	 * @throws EMFUserError the EMF user error
	 */
	public void executeSubObject(RequestContainer requestContainer, BIObject obj, 
			SourceBean response, Object subObjectInfo) throws EMFUserError {
		// it cannot be invoked
		logger.error("SpagoBIDashboardInternalEngine cannot exec subobjects.");
		throw new EMFUserError(EMFErrorSeverity.ERROR, "101", messageBundle);
	}
	
	public void setColor(Color color) {
		this.color = color;
	}
	
	
	public void setName(String _name) {
		name=_name;		
	}
	
	public void setSubName(String _name) {
		subName=_name;		
	}

	/**
	 * Function not implemented. Thid method should not be called
	 * 
	 * @param requestContainer The <code>RequestContainer</code> object (the session can be retrieved from this object)
	 * @param response The response <code>SourceBean</code> to be populated
	 * @param obj the obj
	 * 
	 * @throws InvalidOperationRequest the invalid operation request
	 * @throws EMFUserError the EMF user error
	 */
	public void handleNewDocumentTemplateCreation(RequestContainer requestContainer, 
			BIObject obj, SourceBean response) throws EMFUserError, InvalidOperationRequest {
		logger.error("SpagoBIDashboardInternalEngine cannot build document template.");
		throw new InvalidOperationRequest();

	}

	/**
	 * Function not implemented. Thid method should not be called
	 * 
	 * @param requestContainer The <code>RequestContainer</code> object (the session can be retrieved from this object)
	 * @param response The response <code>SourceBean</code> to be populated
	 * @param obj the obj
	 * 
	 * @throws InvalidOperationRequest the invalid operation request
	 * @throws EMFUserError the EMF user error
	 */
	public void handleDocumentTemplateEdit(RequestContainer requestContainer, 
			BIObject obj, SourceBean response) throws EMFUserError, InvalidOperationRequest {
		logger.error("SpagoBIDashboardInternalEngine cannot build document template.");
		throw new InvalidOperationRequest();
	}

}
