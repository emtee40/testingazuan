package it.eng.spagobi.kpi.model.dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Expression;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.kpi.alarm.metadata.SbiAlarmContact;
import it.eng.spagobi.kpi.model.bo.Model;
import it.eng.spagobi.kpi.model.bo.ModelAttribute;
import it.eng.spagobi.kpi.model.metadata.SbiKpiModel;
import it.eng.spagobi.kpi.model.metadata.SbiKpiModelAttr;
import it.eng.spagobi.kpi.model.metadata.SbiKpiModelAttrVal;

public class ModelDAOImpl extends AbstractHibernateDAO implements IModelDAO {

	static private Logger logger = Logger.getLogger(ModelDAOImpl.class);

	public Model loadModelWithoutChildrenById(Integer id) throws EMFUserError {
		logger.debug("IN");
		Model toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiModel hibSbiKpiModel = (SbiKpiModel) aSession.load(
					SbiKpiModel.class, id);
			toReturn = toModelWithoutChildren(hibSbiKpiModel, aSession);

		} catch (HibernateException he) {
			logger.error("Error while loading the Model with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		logger.debug("OUT");
		return toReturn;
	}

	public Model loadModelWithChildrenById(Integer id) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		Model toReturn = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiModel hibSbiKpiModel = (SbiKpiModel) aSession.load(
					SbiKpiModel.class, id);
			toReturn = toModelWithChildren(hibSbiKpiModel, null);
		} catch (HibernateException he) {
			logger.error("Error while loading the Model with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		logger.debug("OUT");
		return toReturn;
	}

	public void modifyModel(Model value) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Integer kpiModelId = value.getId();
			String kpiModelCd = value.getCode();
			String kpiModelDesc = value.getDescription();
			String kpiModelNm = value.getName();
			List modelAttributes = value.getModelAttributes();

			SbiKpiModel sbiKpiModel = (SbiKpiModel) aSession.load(
					SbiKpiModel.class, kpiModelId);
			sbiKpiModel.setKpiModelCd(kpiModelCd);
			sbiKpiModel.setKpiModelDesc(kpiModelDesc);
			sbiKpiModel.setKpiModelNm(kpiModelNm);
			aSession.update(sbiKpiModel);
			for (int i = 0; i < modelAttributes.size(); i++) {
				ModelAttribute mAtt = (ModelAttribute) modelAttributes.get(i);
				// / inizio
				SbiKpiModelAttrVal modelAttrValToCreate = null;
				Criteria crit = aSession
						.createCriteria(SbiKpiModelAttrVal.class);
				List modelList = null;
				SbiKpiModelAttrVal toResult = null;
				SbiKpiModel m = (SbiKpiModel) aSession.load(SbiKpiModel.class,
						kpiModelId);
				SbiKpiModelAttr ma = (SbiKpiModelAttr) aSession.load(
						SbiKpiModelAttr.class, mAtt.getId());
				crit.add(Expression.eq("sbiKpiModelAttr", ma));
				crit.add(Expression.eq("sbiKpiModel", m));
				modelList = crit.list();

				if (modelList == null || modelList.isEmpty()) {
					// crea
					modelAttrValToCreate = new SbiKpiModelAttrVal();
					modelAttrValToCreate.setValue(mAtt.getValue());
					modelAttrValToCreate.setSbiKpiModel(m);
					modelAttrValToCreate.setSbiKpiModelAttr(ma);
				} else {
					modelAttrValToCreate = (SbiKpiModelAttrVal) modelList
							.get(0);
					modelAttrValToCreate.setValue(mAtt.getValue());
				}
				// fine

				aSession.saveOrUpdate(modelAttrValToCreate);
			}
			tx.commit();

		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
			}
		}
		logger.debug("OUT");
	}

	public List loadModelsRoot() throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		List toReturn = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			SbiDomains sbiDomains = new SbiDomains();
			sbiDomains.setDomainCd("MODEL_ROOT");
			SbiKpiModel modelExample = new SbiKpiModel();

			Criteria crit = aSession.createCriteria(SbiKpiModel.class);
			crit.add(Example.create(modelExample)).createCriteria("sbiDomains")
					.add(Example.create(sbiDomains));
			List sbiKpiModelList = crit.list();
			for (Iterator iterator = sbiKpiModelList.iterator(); iterator
					.hasNext();) {
				SbiKpiModel sbiKpiModel = (SbiKpiModel) iterator.next();
				Model aModel = toModelWithoutChildren(sbiKpiModel, aSession);
				toReturn.add(aModel);
			}
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
			}
		}
		logger.debug("OUT");
		return toReturn;

	}

	/**
	 * Create a Model (without modelAttribute) with children from a SbiKpiModel.
	 * 
	 * @param value
	 *            the SbiKpiModel to transform to a Model.
	 * @return the Model create from the SbiKpiModel.
	 */
	private Model toModelWithChildren(SbiKpiModel value, Integer rootId) {
		logger.debug("IN");
		Model toReturn = new Model();
		String name = value.getKpiModelNm();
		String description = value.getKpiModelDesc();
		String code = value.getKpiModelCd();
		Integer id = value.getKpiModelId();

		String typeName = value.getSbiDomains().getValueNm();
		String typeDescription = value.getSbiDomains().getValueDs();
		List childrenNodes = new ArrayList();

		Set children = value.getSbiKpiModels();
		for (Iterator iterator = children.iterator(); iterator.hasNext();) {
			SbiKpiModel sbiKpichild = (SbiKpiModel) iterator.next();
			Model child = toModelWithChildren(sbiKpichild, id);
			childrenNodes.add(child);
		}

		toReturn.setId(id);
		toReturn.setName(name);
		toReturn.setDescription(description);
		toReturn.setCode(code);
		toReturn.setTypeName(typeName);
		toReturn.setTypeDescription(typeDescription);
		toReturn.setChildrenNodes(childrenNodes);
		toReturn.setParentId(rootId);

		logger.debug("OUT");
		return toReturn;
	}

	private Model toModelWithoutChildren(SbiKpiModel value, Session aSession) {
		logger.debug("IN");
		Model toReturn = new Model();

		String name = value.getKpiModelNm();
		String description = value.getKpiModelDesc();
		String code = value.getKpiModelCd();
		Integer id = value.getKpiModelId();

		String typeName = value.getSbiDomains().getValueNm();
		String typeDescription = value.getSbiDomains().getValueDs();

		List modelAttributes = new ArrayList();
		//

		List modelAttrList = getModelAttListByDomain(value.getSbiDomains(),
				aSession);

		for (Iterator iterator = modelAttrList.iterator(); iterator.hasNext();) {
			ModelAttribute attribute = new ModelAttribute();
			SbiKpiModelAttr attr = (SbiKpiModelAttr) iterator.next();
			String aCode = null;
			String aName = null;
			String aDesc = null;
			String aValue = null;
			Integer aId = null;

			aCode = attr.getKpiModelAttrCd();
			aName = attr.getKpiModelAttrNm();
			aDesc = attr.getKpiModelAttrDescr();
			aValue = getModelAttrValue(value, attr, aSession);
			aId = attr.getKpiModelAttrId();

			attribute.setId(aId);
			attribute.setCode(aCode);
			attribute.setName(aName);
			attribute.setDescr(aDesc);
			attribute.setValue(aValue);
			modelAttributes.add(attribute);
		}

		toReturn.setId(id);
		toReturn.setName(name);
		toReturn.setDescription(description);
		toReturn.setCode(code);
		toReturn.setTypeName(typeName);
		toReturn.setTypeDescription(typeDescription);
		toReturn.setModelAttributes(modelAttributes);
		toReturn.setChildrenNodes(null);

		logger.debug("OUT");
		return toReturn;
	}

	private String getModelAttrValue(SbiKpiModel model, SbiKpiModelAttr attr,
			Session session) {
		String toReturn = "";
		Criteria critt = session.createCriteria(SbiKpiModelAttrVal.class);
		critt.add(Expression.eq("sbiKpiModel", model));
		critt.add(Expression.eq("sbiKpiModelAttr", attr));
		List modelAttrValList = critt.list();
		if (!modelAttrValList.isEmpty()) {
			SbiKpiModelAttrVal attrVal = (SbiKpiModelAttrVal) modelAttrValList
					.get(0);
			toReturn = attrVal.getValue();
		}
		return toReturn;
	}

	private List getModelAttListByDomain(SbiDomains sbiDomains, Session session) {
		Criteria critt = session.createCriteria(SbiKpiModelAttr.class);
		critt.add(Expression.eq("sbiDomains", sbiDomains));
		return critt.list();
	}

	public Integer insertModel(Model model, Integer modelTypeId)
			throws EMFUserError {
		logger.debug("IN");
		Integer idToReturn;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Integer parentId = model.getParentId();

			// get the domains
			SbiDomains sbiDomains = (SbiDomains) aSession.load(
					SbiDomains.class, modelTypeId);
			// set the sbiKpiModel
			SbiKpiModel sbiKpiModel = new SbiKpiModel();
			sbiKpiModel.setKpiModelNm(model.getName());
			sbiKpiModel.setKpiModelDesc(model.getDescription());
			sbiKpiModel.setKpiModelCd(model.getCode());
			sbiKpiModel.setSbiDomains(sbiDomains);
			if (parentId != null) {
				SbiKpiModel sbiKpiParentModel = (SbiKpiModel) aSession.load(
						SbiKpiModel.class, parentId);
				sbiKpiModel.setSbiKpiModel(sbiKpiParentModel);
			}

			idToReturn = (Integer) aSession.save(sbiKpiModel);

			tx.commit();

		} catch (HibernateException he) {
			logException(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
			}
		}
		logger.debug("OUT");
		return idToReturn;
	}

	public boolean deleteModel(Integer modelId) throws EMFUserError {
		Session aSession = getSession();
		Transaction tx = null;
		try {
			tx = aSession.beginTransaction();
			SbiKpiModel aModel = (SbiKpiModel) aSession.load(SbiKpiModel.class,
					modelId);
			recursiveStepDelete(aSession, aModel);
			deleteModelAndAttribute(aSession, aModel);
		
			tx.commit();

		} catch (HibernateException e) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			aSession.close();
		}
		return true;
	}

	private void recursiveStepDelete(Session aSession, SbiKpiModel aModel) {
		Set children = aModel.getSbiKpiModels();
		for (Iterator iterator = children.iterator(); iterator.hasNext();) {
			SbiKpiModel modelChild = (SbiKpiModel) iterator.next();
			recursiveStepDelete(aSession, modelChild);
			// delete Model and Attribute
			deleteModelAndAttribute(aSession, modelChild);
		}
	}
	
	private void deleteModelAndAttribute(Session aSession, SbiKpiModel aModel){
		Set modelChildAttributes = aModel.getSbiKpiModelAttrVals();
		for (Iterator iterator2 = modelChildAttributes.iterator(); iterator2
				.hasNext();) {
			SbiKpiModelAttrVal modelAttrVal = (SbiKpiModelAttrVal) iterator2.next();
			aSession.delete(modelAttrVal);
		}
		aSession.delete(aModel);
	}

}
