package it.eng.spagobi.kpi.threshold.dao;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstance;
import it.eng.spagobi.kpi.threshold.bo.ThresholdValue;
import it.eng.spagobi.kpi.threshold.metadata.SbiThreshold;
import it.eng.spagobi.kpi.threshold.metadata.SbiThresholdValue;

import java.awt.Color;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.Order;
import org.hibernate.exception.ConstraintViolationException;

public class ThresholdValueDAOImpl extends AbstractHibernateDAO implements
IThresholdValueDAO {

	static private Logger logger = Logger
	.getLogger(ThresholdValueDAOImpl.class);

	static private String THRESHOLD_VALUE_POSITION = "position";
	static private String THRESHOLD_VALUE_LABEL = "label";
	static private String THRESHOLD_VALUE_MIN_VALUE = "minValue";
	static private String THRESHOLD_VALUE_MAX_VALUE = "maxValue";

	private String getThresholdValueProperty(String property){
		String toReturn = null;
		if(property != null && property.toUpperCase().equals("POSITION"))
			toReturn = THRESHOLD_VALUE_POSITION;
		if(property != null && property.toUpperCase().equals("LABEL"))
			toReturn = THRESHOLD_VALUE_LABEL;
		if(property != null && property.toUpperCase().equals("MIN_VALUE"))
			toReturn = THRESHOLD_VALUE_MIN_VALUE;
		if(property != null && property.toUpperCase().equals("MAX_VALUE"))
			toReturn = THRESHOLD_VALUE_MAX_VALUE;

		return toReturn;
	}


	public List loadThresholdValuesByThresholdId(Integer id) throws EMFUserError {
		logger.debug("IN");
		List toReturn = new ArrayList();
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiThreshold t = (SbiThreshold) aSession.load(SbiThreshold.class,
					id);

			Set thresholdValues = t.getSbiThresholdValues();
			Iterator it = thresholdValues.iterator();
			while (it.hasNext()) {
				SbiThresholdValue val = (SbiThresholdValue) it.next();
//				TODO mettere a posto
				ThresholdValue tr = toThresholdValue(val);
				logger.debug("Added threshold value with label " + tr.getLabel());
				toReturn.add(tr);
			}

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10111);

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
	
	public List getThresholdValues(KpiInstance k) throws EMFUserError {

		logger.debug("IN");
		List thresholdValueList = new ArrayList();
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiInstance hibSbiKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, k.getKpiInstanceId());
			SbiThreshold t = hibSbiKpiInstance.getSbiThreshold();

			if(t!=null){
				Set thresholdValues = t.getSbiThresholdValues();
				Iterator it = thresholdValues.iterator();
				while (it.hasNext()) {
					SbiThresholdValue val = (SbiThresholdValue) it.next();
					ThresholdValue tr = toThresholdValue(val);
					logger.debug("Added threshold value with label " + tr.getLabel());
					thresholdValueList.add(tr);
				}
			}			

		} catch (HibernateException he) {
			logger
			.error(
					"Error while loading the current list of Thresholds for the KpiInstance with id "
					+ ((k.getKpiInstanceId() == null) ? "" : k
							.getKpiInstanceId().toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10104);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		logger.debug("OUT");
		return thresholdValueList;
	}
	
	public List loadThresholdValueList(Integer thresholdId, String fieldOrder,
			String typeOrder) throws EMFUserError {
		logger.debug("IN");
		List toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			toReturn = new ArrayList();
			List toTransform = null;

			SbiThreshold sbiThreshold = (SbiThreshold) aSession.load(
					SbiThreshold.class, thresholdId);

			Criteria crit = aSession.createCriteria(SbiThresholdValue.class);
			crit.add(Expression.eq("sbiThreshold", sbiThreshold));

			if (fieldOrder != null && typeOrder != null) {
				if (typeOrder.toUpperCase().trim().equals("ASC"))
					crit.addOrder(Order.asc(getThresholdValueProperty(fieldOrder)));
				if (typeOrder.toUpperCase().trim().equals("DESC"))
					crit.addOrder(Order.desc(getThresholdValueProperty(fieldOrder)));
			}
			toTransform = crit.list();

			for (Iterator iterator = toTransform.iterator(); iterator.hasNext();) {
				SbiThresholdValue hibThresholdValue = (SbiThresholdValue) iterator
				.next();
				ThresholdValue thresholdValue = new ThresholdValue();

				thresholdValue.setId(hibThresholdValue.getIdThresholdValue());
				thresholdValue.setLabel(hibThresholdValue.getLabel());
				thresholdValue.setPosition(hibThresholdValue.getPosition());
				thresholdValue.setMaxValue(hibThresholdValue.getMaxValue());
				thresholdValue.setMinValue(hibThresholdValue.getMinValue());

				thresholdValue.setThresholdId(hibThresholdValue
						.getSbiThreshold().getThresholdId());
				toReturn.add(thresholdValue);
			}

		} catch (HibernateException he) {
			logger.error("Error while loading the list of Threshold", he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 9104);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		return toReturn;
	}

	public ThresholdValue loadThresholdValueById(Integer id)
	throws EMFUserError {
		logger.debug("IN");
		ThresholdValue toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiThresholdValue hibThresholdValue = (SbiThresholdValue) aSession
			.load(SbiThresholdValue.class, id);
			toReturn = new ThresholdValue();
			toReturn.setId(hibThresholdValue.getIdThresholdValue());
			toReturn.setPosition(hibThresholdValue.getPosition());
			toReturn.setLabel(hibThresholdValue.getLabel());
			toReturn.setMinValue(hibThresholdValue.getMinValue());
			toReturn.setMaxValue(hibThresholdValue.getMaxValue());

			Color color=null;
			String col=hibThresholdValue.getColour();
			if (col != null) {
				try{
					color = Color.decode(col);
				}
				catch (Exception e) {
					color=Color.RED;
				}
				logger.debug("Color decoded");
			}
			toReturn.setColour(color);
			toReturn.setColourString(hibThresholdValue.getColour());
			toReturn.setSeverityId(hibThresholdValue.getSeverity().getValueId());
			toReturn.setThresholdId(hibThresholdValue.getSbiThreshold()
					.getThresholdId());
			toReturn.setThresholdType(hibThresholdValue.getSbiThreshold().getThresholdType().getValueCd());
			tx.commit();
		} catch (HibernateException he) {
			logger.error("Error while loading the ThresholdValue with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10101);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		return toReturn;
	}

	public void modifyThresholdValue(ThresholdValue thresholdValue)
	throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Integer position = thresholdValue.getPosition();
			String label = thresholdValue.getLabel();
			Double minValue = thresholdValue.getMinValue();
			Double maxValue = thresholdValue.getMaxValue();

			String colour = "";
			colour=thresholdValue.getColourString();

			Integer thresholdId = thresholdValue.getThresholdId();
			Integer severityId = thresholdValue.getSeverityId();

			SbiThresholdValue sbiThresholdValue = (SbiThresholdValue) aSession
			.load(SbiThresholdValue.class, thresholdValue.getId());

			SbiDomains severity = null;
			if (severityId != null) {
				severity = (SbiDomains) aSession.load(SbiDomains.class,
						severityId);
			}

			SbiThreshold threshold = null;
			if (thresholdId != null) {
				threshold = (SbiThreshold) aSession.load(SbiThreshold.class,
						thresholdId);
			}

			sbiThresholdValue.setPosition(position);
			sbiThresholdValue.setLabel(label);
			sbiThresholdValue.setMinValue(minValue);
			sbiThresholdValue.setMaxValue(maxValue);
			sbiThresholdValue.setColour(colour);

			sbiThresholdValue.setSbiThreshold(threshold);
			sbiThresholdValue.setSeverity(severity);

			aSession.saveOrUpdate(sbiThresholdValue);

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

	public Integer insertThresholdValue(ThresholdValue toCreate)
	throws EMFUserError {
		logger.debug("IN");
		Integer idToReturn;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Integer position = toCreate.getPosition();
			String label = toCreate.getLabel();
			Double minValue = toCreate.getMinValue();
			Double maxValue = toCreate.getMaxValue();


			String colour = "";
			Color col=toCreate.getColour();


			colour=toCreate.getColourString();

			Integer thresholdId = toCreate.getThresholdId();
			Integer severityId = toCreate.getSeverityId();

			SbiThresholdValue sbiThresholdValue = new SbiThresholdValue();

			SbiDomains severity = null;
			if (severityId != null) {
				severity = (SbiDomains) aSession.load(SbiDomains.class,
						severityId);
			}

			SbiThreshold threshold = null;
			if (thresholdId != null) {
				threshold = (SbiThreshold) aSession.load(SbiThreshold.class,
						thresholdId);
			}

			sbiThresholdValue.setPosition(position);
			sbiThresholdValue.setLabel(label);
			sbiThresholdValue.setMinValue(minValue);
			sbiThresholdValue.setMaxValue(maxValue);
			sbiThresholdValue.setColour(colour);
			sbiThresholdValue.setSbiThreshold(threshold);
			sbiThresholdValue.setSeverity(severity);

			idToReturn = (Integer) aSession.save(sbiThresholdValue);

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

	public boolean deleteThresholdValue(Integer thresholdValueId)
	throws EMFUserError {
		Session aSession = getSession();
		Transaction tx = null;
		try {
			tx = aSession.beginTransaction();
			SbiThresholdValue aThresholdValue = (SbiThresholdValue) aSession
			.load(SbiThresholdValue.class, thresholdValueId);
			aSession.delete(aThresholdValue);
			tx.commit();

		} catch (ConstraintViolationException cve) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Impossible to delete a Threshold", cve);
			throw new EMFUserError(EMFErrorSeverity.WARNING, 10017);
		} catch (HibernateException e) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Error while delete a Threshold ", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);
		} finally {
			aSession.close();
		}
		return true;
	}



	public ThresholdValue toThresholdValue(SbiThresholdValue t) {

		logger.debug("IN");
		ThresholdValue toReturn = new ThresholdValue();

		Integer id = t.getIdThresholdValue();
		Integer thresholdId=t.getSbiThreshold().getThresholdId();
		String label = t.getLabel();
		SbiDomains d = t.getSeverity();
		Integer severityId = d.getValueId();
		Integer position = t.getPosition();
		Double maxValue = t.getMaxValue();
		Double minValue = t.getMinValue();
		SbiThreshold sbit = t.getSbiThreshold();
		Color color = new Color(255, 255, 0);
		String col = t.getColour();
		logger.debug("Threshold color is "+ col!=null ? col : "");
		if (col != null) {
			try{
				color = Color.decode(col);
				logger.debug("Color decoded");
			}
			catch (Exception e) {
				color=Color.RED;
			}
		}
		
		if(sbit.getThresholdType()!=null){
			toReturn.setThresholdType(sbit.getThresholdType().getValueCd());
		}
		
		if(sbit.getCode()!=null){
			toReturn.setThresholdCode(sbit.getCode());
		}

		toReturn.setId(id);
		toReturn.setThresholdId(thresholdId);
		toReturn.setLabel(label);
		toReturn.setSeverityId(severityId);
		toReturn.setPosition(position);
		toReturn.setMaxValue(maxValue);
		toReturn.setMinValue(minValue);
		toReturn.setColour(color);
		toReturn.setColourString(col);
		//TODO the alarms

		logger.debug("OUT");
		return toReturn;
	}



}
