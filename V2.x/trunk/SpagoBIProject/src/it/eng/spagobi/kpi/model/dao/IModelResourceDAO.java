package it.eng.spagobi.kpi.model.dao;

import it.eng.spago.error.EMFUserError;

public interface IModelResourceDAO {

	/**
	 * Check if a resources is associated with a modelInstance.
	 * 
	 * @param modelId
	 *            the id of modelInstance to check.
	 * @param resourceId
	 *            the id of resources to check.
	 * @return true if exist an association between the model instance id and
	 *         the resources id, false otherwise.
	 * 
	 * @throws EMFUserError
	 */
	boolean isSelected(Integer modelId, Integer resourceId) throws EMFUserError;

	/**
	 * Remove an association between a model instance and a resource.
	 * 
	 * @param modelId
	 *            the id of modelInstance.
	 * @param resourceId
	 *            the id of the resource.
	 * 
	 *@throws EMFUserError
	 */
	void removeModelResource(Integer modelId, Integer resourceId)
			throws EMFUserError;

	/**
	 * Add an association between a model instance and a resource.
	 * 
	 * @param modelId
	 *            the id of modelInstance.
	 * @param resourceId
	 *            the id of the resource.
	 * 
	 * @throws EMFUserError
	 */
	void addModelResource(Integer modelId, Integer resourceId)
			throws EMFUserError;

}
