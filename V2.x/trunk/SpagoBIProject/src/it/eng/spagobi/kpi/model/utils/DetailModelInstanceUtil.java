package it.eng.spagobi.kpi.model.utils;

import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.model.bo.Model;
import it.eng.spagobi.kpi.model.bo.ModelInstance;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import java.text.ParseException;

public class DetailModelInstanceUtil {

	public static String DATE_FORMAT = "dd/MM/yyyy";
	
	static private Logger logger = Logger
			.getLogger(DetailModelInstanceUtil.class);

	public static void selectModelInstance(Integer id,
			SourceBean serviceResponse) throws Exception {
		ModelInstance toReturn = DAOFactory.getModelInstanceDAO()
				.loadModelInstanceWithoutChildrenById(id);
		serviceResponse.setAttribute("MODELINSTANCE", toReturn);

	}

	public static void updateModelInstanceFromRequest(
			SourceBean serviceRequest, SourceBean serviceResponse, Integer id)
			throws Exception {
		ModelInstance modelInstance = getModelInstanceFromRequest(serviceRequest);
		modelInstance.setId(id);
		KpiInstance kpiInstance = getKpiInstanceFromRequest(serviceRequest);
		modelInstance.setKpiInstance(kpiInstance);
		DAOFactory.getModelInstanceDAO().modifyModelInstance(modelInstance);
	}

	private static KpiInstance getKpiInstanceFromRequest(
			SourceBean serviceRequest) throws Exception {
		Integer kpiId = null;
		Integer thresholdId = null;
		Integer chartTypeId = null;
		Integer idKpiPeriodicity = null;
		boolean restoreDefaultFlag = false;

		String kpiIdS = (String) serviceRequest.getAttribute("KPI_ID");
		String thresholdIdS = (String) serviceRequest
				.getAttribute("THRESHOLD_ID");
		String chartTypeIdS = (String) serviceRequest
				.getAttribute("CHART_TYPE_ID");
		String idKpiPeriodicityS = (String) serviceRequest
				.getAttribute("ID_KPI_PERIODICITY");
		String restoreDefault = (String) serviceRequest
				.getAttribute("RESTORE_DEFAULT");
		
		if (restoreDefault != null) {
			restoreDefaultFlag = true;
		}

		if (kpiIdS == null || kpiIdS.equalsIgnoreCase("-1")) {
			kpiId = null;
		} else {
			kpiId = Integer.parseInt(kpiIdS);
		}

		if (thresholdIdS == null || thresholdIdS.equalsIgnoreCase("-1")) {
			thresholdId = null;
		} else {
			thresholdId = Integer.parseInt(thresholdIdS);
		}
		if (chartTypeIdS == null || chartTypeIdS.equalsIgnoreCase("-1")) {
			chartTypeId = null;
		} else {
			chartTypeId = Integer.parseInt(chartTypeIdS);
		}
		if (idKpiPeriodicityS == null
				|| idKpiPeriodicityS.equalsIgnoreCase("-1")) {
			idKpiPeriodicity = null;
		} else {
			idKpiPeriodicity = Integer.parseInt(idKpiPeriodicityS);
		}

		String weight = (String) serviceRequest.getAttribute("weight");
		String target = (String) serviceRequest.getAttribute("target");

		KpiInstance kpiInstance = null;
		if (kpiId != null) {
			kpiInstance = new KpiInstance();
			kpiInstance.setKpi(kpiId);
			kpiInstance.setChartTypeId(chartTypeId);
			kpiInstance.setPeriodicityId(idKpiPeriodicity);
			if (restoreDefaultFlag) {
				DAOFactory.getKpiInstanceDAO().setKpiInstanceFromKPI(kpiInstance, kpiId);
			} else {
				kpiInstance.setThresholdId(thresholdId);
				if (weight != null && !(weight.equals(""))) {
					try{
					kpiInstance.setWeight(new Double(weight));
					} catch (NumberFormatException ne){
						kpiInstance.setWeight(null);
					}
				} else {
					kpiInstance.setWeight(null);
				}
			}
			
			if (target != null && !(target.equals(""))) {
				try{
				kpiInstance.setTarget(new Double(target));
				} catch (NumberFormatException ne){
					kpiInstance.setTarget(null);
				}
			} else {
				kpiInstance.setTarget(null);
			}	
		}
		return kpiInstance;
	}

	private static ModelInstance getModelInstanceFromRequest(
			SourceBean serviceRequest) {
		String modelName = (String) serviceRequest
				.getAttribute("modelInstanceName");
		String modelDescription = (String) serviceRequest
				.getAttribute("modelInstanceDescription");
		String modelLabel = (String) serviceRequest
		.getAttribute("modelInstanceLabel");
		String startDateS = (String) serviceRequest
		.getAttribute("startDate");
		String endDateS = (String) serviceRequest
		.getAttribute("endDate");

		ModelInstance toReturn = new ModelInstance();
		toReturn.setName(modelName);
		toReturn.setDescription(modelDescription);
		toReturn.setLabel(modelLabel);
		// CONTROLLARE LA DATA
		
		
		
		Date startDate = null;
		Date endDate = null;
		
		try {
	        // Some examples
	        DateFormat formatter = new SimpleDateFormat(DATE_FORMAT);
	        if (startDateS != null)
	        	startDate = (Date)formatter.parse(startDateS);
	        if (endDateS != null)
	        	endDate = (Date)formatter.parse(endDateS);
	    } catch (ParseException e) {
	    }

		
		toReturn.setStartDate(startDate);
		toReturn.setEndDate(endDate);
		
		
		return toReturn;
	}

	public static void newModelInstance(SourceBean serviceRequest,
			SourceBean serviceResponse, Integer parentId) throws Exception {
		ModelInstance toCreate = getModelInstanceFromRequest(serviceRequest);
		if (parentId != null)
			toCreate.setParentId(parentId);
		String modelId = (String) serviceRequest.getAttribute("KPI_MODEL_ID");
		Model model = new Model();
		model.setId(Integer.parseInt(modelId));
		toCreate.setModel(model);

		// set name and description of model definition
		if (toCreate.getName() == null || toCreate.getName().trim().equals("")) {
			Model modelDefinition = DAOFactory.getModelDAO()
					.loadModelWithoutChildrenById(Integer.parseInt(modelId));
			toCreate.setName(modelDefinition.getName());
		}

		// insert the new model
		Integer modelInstanceId = DAOFactory.getModelInstanceDAO()
				.insertModelInstance(toCreate);
		serviceResponse.setAttribute("ID", modelInstanceId);
		serviceResponse.setAttribute("MESSAGE", SpagoBIConstants.DETAIL_SELECT);
		selectModelInstance(modelInstanceId, serviceResponse);

	}

	public static List getCandidateModelChildren(Integer parentId) {
		List candidateModelChildren = null;
		try {
			candidateModelChildren = DAOFactory.getModelInstanceDAO()
					.getCandidateModelChildren(parentId);
		} catch (EMFUserError e) {

		}
		return candidateModelChildren;
	}

	public static void restoreModelInstanceValue(Integer id,
			SourceBean serviceRequest, SourceBean serviceResponse)
			throws Exception {
		ModelInstance toReturn = getModelInstanceFromRequest(serviceRequest);
		KpiInstance kpiInstance = getKpiInstanceFromRequest(serviceRequest);

		if (id != null) {
			toReturn.setId(id);
		}
		
		if (kpiInstance != null) {
			toReturn.setKpiInstance(kpiInstance);
		}
		
		serviceResponse.setAttribute("MODELINSTANCE", toReturn);
	}

}
