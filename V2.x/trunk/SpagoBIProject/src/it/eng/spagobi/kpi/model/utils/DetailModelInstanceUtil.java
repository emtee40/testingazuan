package it.eng.spagobi.kpi.model.utils;

import java.util.List;

import org.apache.log4j.Logger;
import org.jgroups.demos.Chat;

import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.model.bo.Model;
import it.eng.spagobi.kpi.model.bo.ModelInstance;

public class DetailModelInstanceUtil {

	static private Logger logger = Logger.getLogger(DetailModelInstanceUtil.class);
	
	public static void selectModelInstance(Integer id,
			SourceBean serviceResponse) throws Exception {
		ModelInstance toReturn = DAOFactory.getModelInstanceDAO()
				.loadModelInstanceWithoutChildrenById(id);
		serviceResponse.setAttribute("MODELINSTANCE", toReturn);

	}

	public static void updateModelInstanceFromRequest(
			SourceBean serviceRequest, SourceBean serviceResponse, Integer id) throws Exception {
		ModelInstance modelInstance = getModelInstanceFromRequest(serviceRequest);
		modelInstance.setId(id);
		
		Integer kpiId = null;
		Integer thresholdId = null;
		Integer chartTypeId = null;
		Integer idKpiPeriodicity = null;
		
		String kpiIdS = (String) serviceRequest.getAttribute("KPI_ID");
		String thresholdIdS = (String) serviceRequest
				.getAttribute("THRESHOLD_ID");
		String chartTypeIdS = (String) serviceRequest
				.getAttribute("CHART_TYPE_ID");
		String idKpiPeriodicityS = (String) serviceRequest
				.getAttribute("ID_KPI_PERIODICITY");
		
		if(kpiIdS.equalsIgnoreCase("-1")){
			kpiId = null;
		}
		else{
			kpiId = Integer.parseInt(kpiIdS);
		}
		
		if(thresholdIdS.equalsIgnoreCase("-1")){
			thresholdId = null;
		}
		else{
			thresholdId = Integer.parseInt(thresholdIdS);
		}
		if(chartTypeIdS.equalsIgnoreCase("-1")){
			chartTypeId = null;
		}
		else{
			chartTypeId = Integer.parseInt(chartTypeIdS);
		}
		if(idKpiPeriodicityS.equalsIgnoreCase("-1")){
			idKpiPeriodicity = null;
		}
		else{
			idKpiPeriodicity = Integer.parseInt(idKpiPeriodicityS);
		}
		
		String weight = (String) serviceRequest.getAttribute("weight");

		KpiInstance kpiInstance = new KpiInstance();
		kpiInstance.setKpi(kpiId);
		kpiInstance.setThresholdId(thresholdId);
		kpiInstance.setChartTypeId(chartTypeId);
		kpiInstance.setPeriodicityId(idKpiPeriodicity);
		kpiInstance.setWeight(new Double(weight));
		modelInstance.setKpiInstance(kpiInstance);
		DAOFactory.getModelInstanceDAO().modifyModelInstance(modelInstance);
	}

	private static ModelInstance getModelInstanceFromRequest(
			SourceBean serviceRequest) {
		String modelName = (String) serviceRequest
				.getAttribute("modelInstanceName");
		String modelDescription = (String) serviceRequest
				.getAttribute("modelInstanceDescription");

		ModelInstance toReturn = new ModelInstance();
		toReturn.setName(modelName);
		toReturn.setDescription(modelDescription);
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
		// // insert the new model
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

}
