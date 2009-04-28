package it.eng.spagobi.kpi.config.dao;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.config.metadata.SbiKpi;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstPeriod;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstance;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstanceHistory;
import it.eng.spagobi.kpi.config.metadata.SbiKpiPeriodicity;
import it.eng.spagobi.kpi.config.metadata.SbiMeasureUnit;
import it.eng.spagobi.kpi.threshold.bo.Threshold;
import it.eng.spagobi.kpi.threshold.dao.IThresholdDAO;
import it.eng.spagobi.kpi.threshold.metadata.SbiThreshold;
import it.eng.spagobi.kpi.threshold.metadata.SbiThresholdValue;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class KpiInstanceDAOImpl extends AbstractHibernateDAO implements IKpiInstanceDAO {

	static private Logger logger = Logger.getLogger(KpiInstanceDAOImpl.class);

	
	public KpiInstance loadKpiInstanceById(Integer id) throws EMFUserError {
		logger.debug("IN");
		KpiInstance toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiInstance hibSbiKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, id);
			toReturn = toKpiInstance(hibSbiKpiInstance);

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10110);

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
	
	public String getChartType(Integer kpiInstanceID) throws EMFUserError {
		String chartType = null;
		logger.debug("IN");

		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiInstance hibSbiKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, kpiInstanceID);
			SbiDomains d = hibSbiKpiInstance.getChartType();
			if (d != null) {
				chartType = d.getValueCd();
				logger.debug("Gotten chartType:" + chartType);
			}

		} catch (HibernateException he) {
			logger.error(
					"Error while loading the KpiInstance with id "
					+ ((kpiInstanceID == null) ? "" : kpiInstanceID
							.toString()), he);

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
		logger.debug("OUT");

		return chartType;
	}
	
	public Boolean isKpiInstUnderAlramControl(Integer kpiInstID)
	throws EMFUserError {
		logger.debug("IN");
		Boolean toReturn = false;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String hql = "from SbiAlarm sa where sa.sbiKpiInstance.idKpiInstance = ? ";

			Query query = aSession.createQuery(hql);
			query.setInteger(0, kpiInstID);
			logger.debug("Query: " + query.toString());

			List l = query.list();
			if (!l.isEmpty()) {
				logger.debug("Found one ALARM!!!");
				toReturn = true;
			}

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error("HibernateException", he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10109);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
			}
			logger.debug("OUT");
		}
		return toReturn;
	}

	
	public void setKpiInstanceFromKPI(KpiInstance kpiInstance, Integer kpiId)
	throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpi sbiKpi = (SbiKpi) aSession.load(SbiKpi.class, kpiId);

			kpiInstance.setKpi(sbiKpi.getKpiId());
			if (sbiKpi.getSbiThreshold() != null) {
				kpiInstance.setThresholdId(sbiKpi.getSbiThreshold()
						.getThresholdId());
			}

			kpiInstance.setWeight(sbiKpi.getWeight());

		} catch (HibernateException he) {
			logger.error("Error while Loading a Kpi ", he);

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
	}

	public KpiInstance loadKpiInstanceByIdFromHistory(Integer id, Date d)
	throws EMFUserError {
		logger.debug("IN");
		KpiInstance toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiInstance hibSbiKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, id);

			List thresholds = new ArrayList();
			Integer kpiInstanceID = null;
			Double weight = null;
			Double target = null;
			String scaleCode = null;
			String scaleName = null;
			Set kpiInstHist = hibSbiKpiInstance.getSbiKpiInstanceHistories();
			Iterator i = kpiInstHist.iterator();
			while (i.hasNext()) {
				SbiKpiInstanceHistory ih = (SbiKpiInstanceHistory) i.next();

				Date ihBegDt = ih.getBeginDt();
				Date ihEndDt = ih.getEndDt();
				if ((d.after(ihBegDt) || d.equals(ihBegDt))
						&& (d.before(ihEndDt) || d.equals(ihEndDt))) {
					toReturn = toKpiInstance(ih);
				}
			}

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10110);

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
	
	
	public KpiInstance toKpiInstance(SbiKpiInstance kpiInst)
	throws EMFUserError {

		logger.debug("IN");
		KpiInstance toReturn = new KpiInstance();
		Integer kpiId = kpiInst.getIdKpiInstance();
		SbiKpi kpi = kpiInst.getSbiKpi();
		Integer k = kpi.getKpiId();
		Date d = new Date();
		d = kpiInst.getBeginDt();
		Integer thresholdId = null;
		if(kpiInst.getSbiThreshold()!=null){
			thresholdId = kpiInst.getSbiThreshold().getThresholdId();
		}
		Double weight = kpiInst.getWeight();
		Double target = kpiInst.getTarget();
		Integer idPeriodicity = null;
		Set periods = kpiInst.getSbiKpiInstPeriods();
		if (periods != null && !periods.isEmpty()) {
			Iterator s = periods.iterator();
			while (s.hasNext()) {
				SbiKpiInstPeriod p = (SbiKpiInstPeriod) s.next();
				if (p.isDefault_()!=null && p.isDefault_().booleanValue()==true) {
					SbiKpiPeriodicity periodicity = p.getSbiKpiPeriodicity();
					if (periodicity != null) {
						idPeriodicity = periodicity.getIdKpiPeriodicity();
					}
				}
			}
		}

		SbiMeasureUnit unit = kpiInst.getSbiMeasureUnit();
		String scaleCode = null;
		String scaleName = null;
		if (unit != null) {
			scaleCode = unit.getScaleCd();
			scaleName = unit.getScaleNm();
		}

		toReturn.setWeight(weight);
		logger.debug("KpiInstance weight setted");
		toReturn.setTarget(target);
		logger.debug("KpiInstance target setted");
		toReturn.setKpiInstanceId(kpiId);
		logger.debug("KpiInstance Id setted");
		toReturn.setKpi(k);
		logger.debug("KpiInstance kpi setted");
		toReturn.setThresholdId(thresholdId);
		logger.debug("KpiInstance thresholdId setted");
		toReturn.setD(d);
		logger.debug("KpiInstance date setted");
		toReturn.setPeriodicityId(idPeriodicity);
		logger.debug("KpiInstance periodicity ID setted");
		toReturn.setScaleCode(scaleCode);
		logger.debug("Kpi value scale Code setted");
		toReturn.setScaleName(scaleName);
		logger.debug("Kpi value scale Name setted");
		
		if(kpiInst.getChartType()!=null){
			toReturn.setChartTypeId(kpiInst.getChartType().getValueId());
		}

		logger.debug("OUT");
		return toReturn;
	}
	
	
	private KpiInstance toKpiInstance(SbiKpiInstanceHistory kpiInstHist)
	throws EMFUserError {

		logger.debug("IN");
		KpiInstance toReturn = new KpiInstance();
		Integer kpiId = kpiInstHist.getSbiKpiInstance().getIdKpiInstance();
		SbiKpi kpi = kpiInstHist.getSbiKpiInstance().getSbiKpi();
		Integer k = kpi.getKpiId();
		Date d = new Date();
		d = kpiInstHist.getBeginDt();
		Integer thresholdId = null;
		if (kpiInstHist.getSbiThreshold()!=null) thresholdId = kpiInstHist.getSbiThreshold().getThresholdId();
		Double weight = kpiInstHist.getWeight();
		Double target = kpiInstHist.getTarget();
		Integer idPeriodicity = null;
		Set periods = kpiInstHist.getSbiKpiInstance().getSbiKpiInstPeriods();
		if (!periods.isEmpty()) {
			Iterator s = periods.iterator();
			while (s.hasNext()) {
				SbiKpiInstPeriod p = (SbiKpiInstPeriod) s.next();
				if (p.isDefault_().booleanValue()) {
					SbiKpiPeriodicity periodicity = p.getSbiKpiPeriodicity();
					if (periodicity != null) {
						idPeriodicity = periodicity.getIdKpiPeriodicity();
					}
				}
			}
		}

		SbiMeasureUnit unit = kpiInstHist.getSbiMeasureUnit();
		String scaleCode = null;
		String scaleName = null;
		if (unit != null) {
			scaleCode = unit.getScaleCd();
			scaleName = unit.getScaleNm();
		}

		toReturn.setWeight(weight);
		logger.debug("KpiInstance weight setted");
		toReturn.setTarget(target);
		logger.debug("KpiInstance target setted");
		toReturn.setKpiInstanceId(kpiId);
		logger.debug("KpiInstance Id setted");
		toReturn.setKpi(k);
		logger.debug("KpiInstance kpi setted");
		toReturn.setThresholdId(thresholdId);
		logger.debug("KpiInstance thresholdId setted");
		toReturn.setD(d);
		logger.debug("KpiInstance date setted");
		toReturn.setPeriodicityId(idPeriodicity);
		logger.debug("KpiInstance periodicity ID setted");
		toReturn.setScaleCode(scaleCode);
		logger.debug("Kpi value scale Code setted");
		toReturn.setScaleName(scaleName);
		logger.debug("Kpi value scale Name setted");

		logger.debug("OUT");
		return toReturn;
	}

	
	
	
	public List getThresholds(KpiInstance k) throws EMFUserError {

		logger.debug("IN");
		List thresholds = new ArrayList();
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
					// TODO mettere a posto
					IThresholdDAO thDao=(IThresholdDAO)DAOFactory.getThresholdDAO();
					Threshold tr = thDao.toThreshold(null);
					logger.debug("Added threshold with label " + tr.getName());
					thresholds.add(tr);
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
		return thresholds;
	}
	
	
	
}
