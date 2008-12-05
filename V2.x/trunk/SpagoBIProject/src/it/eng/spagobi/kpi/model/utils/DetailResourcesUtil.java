package it.eng.spagobi.kpi.model.utils;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.kpi.model.bo.Resource;

public class DetailResourcesUtil {

	public static void selectResource(int id, SourceBean serviceResponse) throws Exception {
		Resource toReturn = DAOFactory.getKpiDAO().loadResourceById(id);
		serviceResponse.setAttribute("Resource", toReturn);
	}

	public static void updateResourceFromRequest(SourceBean serviceRequest,
			int id) throws Exception{
		Resource resource = getResourceFromRequest(serviceRequest);
		resource.setId(id);
		DAOFactory.getKpiDAO().modifyResource(resource);

	}

	private static Resource getResourceFromRequest(SourceBean serviceRequest) {
		Resource toReturn = new Resource();
		String tableName = (String) serviceRequest.getAttribute("tableName");
		String columnName = (String) serviceRequest.getAttribute("columnName");
		String resourceName = (String) serviceRequest.getAttribute("resourceName");
		String resourceDescription = (String) serviceRequest.getAttribute("resourceDescription");
		String resourceTypeId = (String) serviceRequest.getAttribute("resourceTypeId");
		String resourceTypeDescription = (String) serviceRequest.getAttribute("resourceTypeDesc");
		toReturn.setName(resourceName);
		toReturn.setDescr(resourceDescription);
		toReturn.setColumn_name(columnName);
		toReturn.setTable_name(tableName);
		toReturn.setType(resourceTypeDescription);
		toReturn.setTypeId(Integer.parseInt(resourceTypeId));
		return toReturn;
	}

	public static void newResource(SourceBean serviceRequest, SourceBean serviceResponse) throws Exception {
		Resource toCreate = getResourceFromRequest(serviceRequest);
		// insert the new model
		Integer resourceId = DAOFactory.getKpiDAO().insertResource(toCreate);

		serviceResponse.setAttribute("ID", resourceId);
		serviceResponse.setAttribute("MESSAGE",SpagoBIConstants.DETAIL_SELECT);
		selectResource(resourceId, serviceResponse);
	}

}
