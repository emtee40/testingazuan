package it.eng.spagobi.kpi.config.dao;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.metadata.SbiExtRoles;
import it.eng.spagobi.kpi.config.bo.Kpi;
import it.eng.spagobi.kpi.config.bo.KpiInstance;
import it.eng.spagobi.kpi.config.bo.KpiValue;
import it.eng.spagobi.kpi.config.metadata.SbiKpi;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstance;
import it.eng.spagobi.kpi.config.metadata.SbiKpiInstanceHistory;
import it.eng.spagobi.kpi.config.metadata.SbiKpiRole;
import it.eng.spagobi.kpi.config.metadata.SbiKpiValue;
import it.eng.spagobi.kpi.model.bo.Resource;
import it.eng.spagobi.kpi.model.dao.IResourceDAO;
import it.eng.spagobi.kpi.model.metadata.SbiResources;
import it.eng.spagobi.kpi.threshold.bo.Threshold;
import it.eng.spagobi.kpi.threshold.bo.ThresholdValue;
import it.eng.spagobi.kpi.threshold.dao.IThresholdDAO;
import it.eng.spagobi.kpi.threshold.dao.IThresholdValueDAO;
import it.eng.spagobi.kpi.threshold.metadata.SbiThreshold;
import it.eng.spagobi.kpi.threshold.metadata.SbiThresholdValue;
import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.dataset.metadata.SbiDataSetConfig;

import java.util.ArrayList;
import java.util.Date;
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

public class KpiDAOImpl extends AbstractHibernateDAO implements IKpiDAO {

	static private Logger logger = Logger.getLogger(KpiDAOImpl.class);


	public Kpi loadKpiDefinitionById(Integer id) throws EMFUserError {
		logger.debug("IN");
		Kpi toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpi hibSbiKpi = (SbiKpi) aSession.load(SbiKpi.class, id);
			toReturn = toKpiDefinition(hibSbiKpi);

		} catch (HibernateException he) {
			logger.error("Error while loading the Kpi with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10112);

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

	private Kpi toKpiDefinition(SbiKpi kpi) throws EMFUserError {
		logger.debug("IN");
		Kpi toReturn = new Kpi();

		String code = kpi.getCode();
		String description = kpi.getDescription();
		String documentLabel = kpi.getDocumentLabel();

		Integer kpiId = kpi.getKpiId();
		String kpiName = kpi.getName();

		SbiDataSetConfig dsC = kpi.getSbiDataSet();
		IDataSet ds = null;
		if (dsC != null) {
			ds = DAOFactory.getDataSetDAO().loadDataSetByID(dsC.getDsId());
		}


		Double standardWeight = kpi.getWeight();

		String metric = kpi.getMetric();

		String interpretation = kpi.getInterpretation(); 
		String inputAttribute = kpi.getInputAttributes();
		String modelReference = kpi.getModelReference();
		String targetAudience = kpi.getTargetAudience();

		Integer kpiTypeId = null;
		Integer metricScaleId = null;
		Integer measureTypeId = null;

		if (kpi.getSbiDomainsByKpiType() != null) {
			kpiTypeId = kpi.getSbiDomainsByKpiType().getValueId();
		}

		if (kpi.getSbiDomainsByMeasureType() != null) {
			measureTypeId = kpi.getSbiDomainsByMeasureType().getValueId();
		}

		if (kpi.getSbiDomainsByMetricScaleType() != null) {
			metricScaleId = kpi.getSbiDomainsByMetricScaleType().getValueId();
		}


		toReturn.setKpiName(kpiName);
		logger.debug("Kpi name setted");
		toReturn.setDocumentLabel(documentLabel);
		logger.debug("Kpi Documentlabel setted");
		toReturn.setCode(code);
		logger.debug("Kpi code setted");
		toReturn.setMetric(metric);
		logger.debug("Kpi metric setted");
		toReturn.setDescription(description);
		logger.debug("Kpi description setted");
		toReturn.setStandardWeight(standardWeight);
		logger.debug("Kpi weight setted");

		toReturn.setKpiId(kpiId);
		logger.debug("Kpi Id setted");

		toReturn.setKpiDs(ds);
		logger.debug("Kpi dataset setted");

		if (kpi.getSbiThreshold() != null) {
			Threshold threshold = DAOFactory.getThresholdDAO().loadThresholdById(
					kpi.getSbiThreshold().getThresholdId());
			toReturn.setThreshold(threshold);
			logger.debug("Kpi threshold setted");

		}

		toReturn.setInterpretation(interpretation);
		logger.debug("Kpi Interpretation setted");
		toReturn.setInputAttribute(inputAttribute);
		logger.debug("Kpi InputAttribute setted");
		toReturn.setModelReference(modelReference);	
		logger.debug("Kpi ModelReference setted");
		toReturn.setTargetAudience(targetAudience);
		logger.debug("Kpi TargetAudience setted");

		toReturn.setKpiTypeId(kpiTypeId);
		logger.debug("Kpi KpiTypeId setted");
		toReturn.setMetricScaleId(metricScaleId);
		logger.debug("Kpi MetricScaleId setted");
		toReturn.setMeasureTypeId(measureTypeId);
		logger.debug("Kpi MeasureTypeId setted");

		logger.debug("OUT");
		return toReturn;

	}

	public Kpi loadKpiById(Integer id) throws EMFUserError {
		logger.debug("IN");
		Kpi toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpi hibSbiKpiInstance = (SbiKpi) aSession.load(SbiKpi.class, id);
			toReturn = toKpi(hibSbiKpiInstance);

		} catch (HibernateException he) {
			logger.error("Error while loading the Kpi with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10112);

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

	public String getKpiTrendXmlResult(Integer resId, Integer kpiInstId,
			Date endDate) throws SourceBeanException {

		logger.debug("IN");
		String toReturn = "";
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criteria finder = aSession.createCriteria(SbiKpiValue.class);
			finder
			.add(Expression.eq("sbiKpiInstance.idKpiInstance",
					kpiInstId));
			finder.add(Expression.le("beginDt", endDate));
			logger.debug("Begin Date Criteria Setted");

			if (resId != null) {
				finder.add(Expression.eq("sbiResources.resourceId", resId));
				logger.debug("Resource setted");
			} else {
				//finder.add(Expression.eq("sbiResources.resourceId", null));
				logger.debug("Null resource setted");
			}
			SourceBean sb = new SourceBean("ROWS");
			finder.addOrder(Order.desc("beginDt"));
			logger.debug("Order Date Criteria setted");
			finder.setMaxResults(10);
			logger.debug("Max result to 10 setted");

			List l = finder.list();
			if (!l.isEmpty()) {
				logger.debug("The result list is not empty");
				for (int k = l.size() - 1; k >= 0; k--) {
					SbiKpiValue temp = (SbiKpiValue) l.get(k);
					SourceBean sb2 = new SourceBean("ROW");
					if (temp.getValue() != null) {
						sb2.setAttribute("x", temp.getBeginDt());
						sb2.setAttribute("KPI_VALUE", temp.getValue());
						sb.setAttribute(sb2);
					}
				}
			} else {
				logger.debug("The result list is empty");
				SourceBean sb2 = new SourceBean("ROW");
				sb.setAttribute(sb2);
			}

			toReturn = sb.toString();

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error(he);
		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}

		return toReturn;
	}

	public String getKpiTrendXmlResult(Integer resId, Integer kpiInstId, Date beginDate , Date endDate) throws SourceBeanException{

		logger.debug("IN");
		String toReturn = "";
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criteria finder = aSession.createCriteria(SbiKpiValue.class);
			finder
			.add(Expression.eq("sbiKpiInstance.idKpiInstance",
					kpiInstId));
			finder.add(Expression.le("beginDt", endDate));
			finder.add(Expression.ge("beginDt", beginDate));
			logger.debug("Begin and End Date Criteria Setted");

			if (resId != null) {
				finder.add(Expression.eq("sbiResources.resourceId", resId));
				logger.debug("Resource setted");
			} else {
				//finder.add(Expression.eq("sbiResources.resourceId", null));
				logger.debug("Null resource setted");
			}
			SourceBean sb = new SourceBean("ROWS");
			finder.addOrder(Order.desc("beginDt"));
			logger.debug("Order Date Criteria setted");

			List l = finder.list();
			if (!l.isEmpty()) {
				logger.debug("The result list is not empty");
				for (int k = l.size() - 1; k >= 0; k--) {
					SbiKpiValue temp = (SbiKpiValue) l.get(k);
					SourceBean sb2 = new SourceBean("ROW");
					if (temp.getValue() != null) {
						sb2.setAttribute("x", temp.getBeginDt());
						sb2.setAttribute("KPI_VALUE", temp.getValue());
						sb.setAttribute(sb2);
					}
				}
			} else {
				logger.debug("The result list is empty");
				SourceBean sb2 = new SourceBean("ROW");
				sb.setAttribute(sb2);
			}

			toReturn = sb.toString();

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error(he);
		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}

		return toReturn;
	}





	public List getKpiValue(SbiKpiInstance kpi, Date d) throws EMFUserError {

		logger.debug("IN");

		Integer kpiInstID = kpi.getIdKpiInstance();
		Session aSession = null;
		Transaction tx = null;
		SbiKpiInstance hibKpiInstance = null;
		List values = new ArrayList();

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			hibKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, kpiInstID);
			Set kpiValues = hibKpiInstance.getSbiKpiValues();
			SbiDomains dom = hibKpiInstance.getChartType();
			String chartType = null;
			if (dom != null)
				chartType = dom.getValueCd();

			Iterator iVa = kpiValues.iterator();
			while (iVa.hasNext()) {
				SbiKpiValue value = (SbiKpiValue) iVa.next();
				Date kpiValueBegDt = value.getBeginDt();
				logger.debug("Kpi value begin date: "
						+ (kpiValueBegDt != null ? kpiValueBegDt.toString()
								: "Begin date null"));
				Date kpiValueEndDt = value.getEndDt();
				logger.debug("Kpi value end date: "
						+ (kpiValueEndDt != null ? kpiValueEndDt.toString()
								: "End date null"));

				logger.debug("Date in which the value has to be valid: "
						+ (d != null ? d.toString() : "Date null"));
				if (d.after(kpiValueBegDt) && d.before(kpiValueEndDt)) {
					logger.debug("Date between beginDate and EndDate");
					KpiValue val = toKpiValue(value, d);
					if (chartType != null) {
						val.setChartType(chartType);
						logger.debug("Setted chart Type: " + chartType);
					}
					values.add(val);
					logger.debug("Setted the correct value: " + val.getValue());
				}
			}

		} catch (HibernateException he) {
			logger
			.error(
					"Error while getting the List of KpiValues related to the SbiKpiInstance with id "
					+ ((kpiInstID == null) ? "" : kpiInstID
							.toString()) + "at the Date " + d,
							he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10102);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		logger.debug("OUT");
		return values;
	}



	public void insertKpiValue(KpiValue value) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiValue hibKpiValue = new SbiKpiValue();
			Date beginDt = value.getBeginDate();
			logger
			.debug("Kpi value begin date: "
					+ (beginDt != null ? beginDt.toString()
							: "Begin date null"));
			Date endDt = value.getEndDate();
			logger.debug("Kpi value end date: "
					+ (endDt != null ? endDt.toString() : "End date null"));
			String valueDescr = value.getValueDescr();
			logger.debug("Kpi value: "
					+ (valueDescr != null ? valueDescr
							: "value Description null"));
			String kpiValue = value.getValue();
			logger.debug("Kpi value: "
					+ (kpiValue != null ? kpiValue : "Value null"));
			Integer kpiInstanceId = value.getKpiInstanceId();
			logger.debug("Kpi Instance ID: "
					+ (kpiInstanceId != null ? kpiInstanceId.toString()
							: "Kpi Instance ID null"));
			SbiKpiInstance sbiKpiInstance = (SbiKpiInstance) aSession.load(
					SbiKpiInstance.class, kpiInstanceId);
			Resource r = value.getR();
			if (r != null) {
				IResourceDAO resDaoImpl=DAOFactory.getResourceDAO();
				SbiResources sbiResources = resDaoImpl.toSbiResource(r);
				logger.debug("Resource: "
						+ (r.getName() != null ? r.getName()
								: "Resource name null"));
				hibKpiValue.setSbiResources(sbiResources);
			}
			hibKpiValue.setDescription(valueDescr);
			logger.debug("Kpi value description setted");
			hibKpiValue.setBeginDt(beginDt);
			logger.debug("Kpi value begin date setted");
			hibKpiValue.setEndDt(endDt);
			logger.debug("Kpi value end date setted");
			hibKpiValue.setValue(kpiValue);
			logger.debug("Kpi value setted");
			hibKpiValue.setSbiKpiInstance(sbiKpiInstance);
			logger.debug("Kpi Instance setted");

			aSession.save(hibKpiValue);
			tx.commit();

		} catch (HibernateException he) {
			logger.error(
					"Error while inserting the KpiValue related to the KpiInstance with id "
					+ ((value.getKpiInstanceId() == null) ? "" : value
							.getKpiInstanceId().toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10103);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		logger.debug("OUT");

	}




	public KpiValue getKpiValue(Integer kpiInstanceId, Date d, Resource r)
	throws EMFUserError {

		logger.debug("IN");
		KpiValue toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criteria finder = aSession.createCriteria(SbiKpiValue.class);
			finder.add(Expression.eq("sbiKpiInstance.idKpiInstance",
					kpiInstanceId));
			finder.add(Expression.le("beginDt", d));
			finder.add(Expression.ge("endDt", d));
			finder.addOrder(Order.desc("beginDt"));
			finder.addOrder(Order.desc("idKpiInstanceValue"));
			logger.debug("Order Date Criteria setted");
			finder.setMaxResults(1);
			logger.debug("Max result to 1 setted");

			if (r != null) {
				finder.add(Expression.eq("sbiResources.resourceId", r.getId()));
			}

			List l = finder.list();
			if (!l.isEmpty()) {
				KpiValue tem = null;
				Iterator it = l.iterator();
				while (it.hasNext()) {
					SbiKpiValue temp = (SbiKpiValue) it.next();
					toReturn = toKpiValue(temp, d);
				}
			}

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error(he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10108);

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

	public KpiValue getDisplayKpiValue(Integer kpiInstanceId, Date d, Resource r) throws EMFUserError{
		logger.debug("IN");
		KpiValue toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criteria finder = aSession.createCriteria(SbiKpiValue.class);
			finder.add(Expression.eq("sbiKpiInstance.idKpiInstance",
					kpiInstanceId));
			finder.add(Expression.le("beginDt", d));
			finder.add(Expression.ge("endDt", d));
			finder.addOrder(Order.desc("beginDt"));
			finder.addOrder(Order.desc("idKpiInstanceValue"));
			logger.debug("Order Date Criteria setted");
			finder.setMaxResults(1);
			logger.debug("Max result to 1 setted");

			if (r != null) {
				finder.add(Expression.eq("sbiResources.resourceId", r.getId()));
			}

			List l = finder.list();
			if (!l.isEmpty()) {
				KpiValue tem = null;
				Iterator it = l.iterator();
				while (it.hasNext()) {
					SbiKpiValue temp = (SbiKpiValue) it.next();
					toReturn = toKpiValue(temp, d);
				}
			}else{
				Criteria finder2 = aSession.createCriteria(SbiKpiValue.class);
				finder2.add(Expression.eq("sbiKpiInstance.idKpiInstance",
						kpiInstanceId));
				finder2.add(Expression.le("beginDt", d));
				finder2.addOrder(Order.desc("beginDt"));
				logger.debug("Order Date Criteria setted");
				finder2.setMaxResults(1);
				logger.debug("Max result to 1 setted");

				List l2 = finder2.list();
				if (!l2.isEmpty()) {
					KpiValue tem = null;
					Iterator it = l2.iterator();
					while (it.hasNext()) {
						SbiKpiValue temp = (SbiKpiValue) it.next();
						toReturn = toKpiValue(temp, d);
					}
				}

			}

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error(he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10108);

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



	private KpiValue toKpiValue(SbiKpiValue value, Date d) throws EMFUserError {

		logger.debug("IN");
		KpiValue toReturn = new KpiValue();

		Date beginDate = value.getBeginDt();
		logger
		.debug("SbiKpiValue begin date: "
				+ (beginDate != null ? beginDate.toString()
						: "Begin date null"));
		Date endDate = value.getEndDt();
		logger.debug("SbiKpiValue end date: "
				+ (endDate != null ? endDate.toString() : "End date null"));
		String val = value.getValue();
		logger
		.debug("SbiKpiValue value: "
				+ (val != null ? val : "Value null"));
		String valueDescr = value.getDescription();
		logger.debug("SbiKpiValue description: "
				+ (valueDescr != null ? valueDescr : "Value description null"));
		Integer kpiInstanceID = null;
		Double weight = null;
		Double target = null;
		String scaleCode = null;
		String scaleName = null;

		SbiResources res = value.getSbiResources();
		Resource r = null;
		IResourceDAO resDao=DAOFactory.getResourceDAO();
		if (res != null) {
			r = resDao.toResource(res);
			logger.debug("SbiKpiValue resource: "
					+ (r.getColumn_name() != null ? r.getColumn_name()
							: "resource name null"));
		}

		kpiInstanceID = value.getSbiKpiInstance().getIdKpiInstance();
		logger.debug("SbiKpiValue kpiInstanceID: "
				+ (kpiInstanceID != null ? kpiInstanceID.toString()
						: "kpiInstanceID null"));
		SbiKpiInstance kpiInst = value.getSbiKpiInstance();

		List thresholdValues = new ArrayList();
		Date kpiInstBegDt = kpiInst.getBeginDt();
		logger.debug("kpiInstBegDt begin date: "
				+ (kpiInstBegDt != null ? kpiInstBegDt.toString()
						: "Begin date null"));
		// in case the current threshold is correct
		if (((d.before(endDate) || d.equals(endDate))
				&& (d.after(beginDate) || d.equals(beginDate))
				&& (d.after(kpiInstBegDt) || d.equals(kpiInstBegDt)))|| kpiInst.getSbiKpiInstanceHistories().isEmpty()) {

			weight = kpiInst.getWeight();
			logger.debug("SbiKpiValue weight: "
					+ (weight != null ? weight.toString() : "weight null"));
			target = kpiInst.getTarget();
			logger.debug("SbiKpiValue target: "
					+ (target != null ? target.toString() : "target null"));

			if (kpiInst.getSbiMeasureUnit() != null) {
				scaleCode = kpiInst.getSbiMeasureUnit().getScaleCd();
				logger.debug("SbiKpiValue scaleCode: "
						+ (scaleCode != null ? scaleCode : "scaleCode null"));
				scaleName = kpiInst.getSbiMeasureUnit().getScaleNm();
				logger.debug("SbiKpiValue scaleName: "
						+ (scaleName != null ? scaleName : "scaleName null"));
			}
			logger.debug("Requested date d: " + d.toString()
					+ " in between beginDate and EndDate");
			SbiThreshold t = kpiInst.getSbiThreshold();
			if(t!=null){
				// TODO
				Set ts = t.getSbiThresholdValues();
				Iterator i = ts.iterator();
				while (i.hasNext()) {
					SbiThresholdValue tls = (SbiThresholdValue) i.next();
					// TODO DA METTERE A POSTO
					IThresholdValueDAO thDao=(IThresholdValueDAO)DAOFactory.getThresholdValueDAO();
					ThresholdValue tr = thDao.toThresholdValue(tls);
					thresholdValues.add(tr);
				}
			}			

		} else {// in case older thresholds have to be retrieved

			Set kpiInstHist = kpiInst.getSbiKpiInstanceHistories();
			Iterator i = kpiInstHist.iterator();
			while (i.hasNext()) {
				SbiKpiInstanceHistory ih = (SbiKpiInstanceHistory) i.next();
				Date ihBegDt = ih.getBeginDt();
				Date ihEndDt = ih.getEndDt();
				if ((d.after(ihBegDt) || d.equals(ihBegDt))
						&& (d.before(ihEndDt) || d.equals(ihEndDt))) {

					weight = ih.getWeight();
					logger.debug("SbiKpiValue weight: "
							+ (weight != null ? weight.toString()
									: "weight null"));
					target = ih.getTarget();
					logger.debug("SbiKpiValue target: "
							+ (target != null ? target.toString()
									: "target null"));

					if (ih.getSbiMeasureUnit() != null) {
						scaleCode = ih.getSbiMeasureUnit().getScaleCd();
						logger.debug("SbiKpiValue scaleCode: "
								+ (scaleCode != null ? scaleCode
										: "scaleCode null"));
						scaleName = ih.getSbiMeasureUnit().getScaleNm();
						logger.debug("SbiKpiValue scaleName: "
								+ (scaleName != null ? scaleName
										: "scaleName null"));
					}
					SbiThreshold t = ih.getSbiThreshold();
					if(t!=null){
						Set ts = t.getSbiThresholdValues();
						Iterator it = ts.iterator();
						while (it.hasNext()) {
							SbiThresholdValue tls = (SbiThresholdValue) it.next();
							// TODO METTERE A POSTO
							IThresholdValueDAO thDao=(IThresholdValueDAO)DAOFactory.getThresholdValueDAO();
							ThresholdValue tr = thDao.toThresholdValue(tls);
							thresholdValues.add(tr);
						}
					}		
				}
			}
		}
		toReturn.setValueDescr(valueDescr);
		logger.debug("Kpi value descritpion setted");
		toReturn.setTarget(target);
		logger.debug("Kpi value target setted");
		toReturn.setBeginDate(beginDate);
		logger.debug("Kpi value begin date setted");
		toReturn.setEndDate(endDate);
		logger.debug("Kpi value end date setted");
		toReturn.setValue(val);
		logger.debug("Kpi value setted");
		toReturn.setKpiInstanceId(kpiInstanceID);
		logger.debug("Kpi value Instance ID setted");
		toReturn.setWeight(weight);
		logger.debug("Kpi value weight setted");
		toReturn.setR(r);
		logger.debug("Kpi value resource setted");
		toReturn.setScaleCode(scaleCode);
		logger.debug("Kpi value scale Code setted");
		toReturn.setScaleName(scaleName);
		logger.debug("Kpi value scale Name setted");
		toReturn.setThresholdValues(thresholdValues);
		logger.debug("Kpi value Thresholds setted");

		logger.debug("OUT");
		return toReturn;
	}


	public Kpi toKpi(SbiKpi kpi) throws EMFUserError {

		logger.debug("IN");
		Kpi toReturn = new Kpi();


		String code = kpi.getCode();
		String description = kpi.getDescription();
		String documentLabel = kpi.getDocumentLabel();
		String metric = kpi.getMetric();
		String interpretation = kpi.getInterpretation();

		String inputAttributes=kpi.getInputAttributes();
		String modelReference=kpi.getModelReference();
		String targetAudience=kpi.getTargetAudience();

		Boolean isParent = false;
		if (kpi.getFlgIsFather() != null
				&& kpi.getFlgIsFather().equals(new Character('T'))) {
			isParent = true;
		}


		Integer kpiId = kpi.getKpiId();
		String kpiName = kpi.getName();
		SbiDataSetConfig dsC = kpi.getSbiDataSet();
		IDataSet ds = null;
		if (dsC != null) {
			ds = DAOFactory.getDataSetDAO().loadDataSetByID(dsC.getDsId());
		}
		Set kpiRoles = kpi.getSbiKpiRoles();
		List roles = new ArrayList();
		Iterator i = kpiRoles.iterator();
		while (i.hasNext()) {
			SbiKpiRole dls = (SbiKpiRole) i.next();
			SbiExtRoles extR = dls.getSbiExtRoles();
			roles.add(extR);
		}

		IThresholdDAO thresholdDAO=DAOFactory.getThresholdDAO();
		SbiThreshold thresh = kpi.getSbiThreshold();
		if(thresh!=null){
			Threshold threshold=thresholdDAO.toThreshold(thresh);
			toReturn.setThreshold(threshold);
			logger.debug("Kpi threshold setted");
		}

		Double standardWeight = kpi.getWeight();
		Set kInstances = kpi.getSbiKpiInstances();
		List KpiInstances = new ArrayList();
		if (kInstances != null) {
			Iterator iKI = kInstances.iterator();
			IKpiInstanceDAO kpiInstance=DAOFactory.getKpiInstanceDAO();
			while (iKI.hasNext()) {
				SbiKpiInstance kpiI = (SbiKpiInstance) iKI.next();
				KpiInstance kI = kpiInstance.toKpiInstance(kpiI);
				KpiInstances.add(kI);
			}
		}
		// Gets the father
		SbiKpi dad = kpi.getSbiKpi();
		Boolean isRoot = false;
		Integer father = null;
		if (dad != null) {
			father = dad.getKpiId();
		} else {
			isRoot = true;
		}

		// Gets the children
		Set children = kpi.getSbiKpis();
		List kpiChildren = new ArrayList();
		if (children != null) {
			Iterator iKC = children.iterator();
			while (iKC.hasNext()) {
				SbiKpi kCh = (SbiKpi) iKC.next();
				Integer kI = kCh.getKpiId();
				kpiChildren.add(kI);
			}
		}

		String scaleCode = "";
		String scaleName = "";
		if (kpi.getSbiMeasureUnit() != null) {
			scaleCode = kpi.getSbiMeasureUnit().getScaleCd();
			scaleName = kpi.getSbiMeasureUnit().getScaleNm();
		}

		toReturn.setDescription(description);
		logger.debug("Kpi description setted");
		toReturn.setDocumentLabel(documentLabel);
		logger.debug("Kpi Documentlabel setted");
		toReturn.setFather(father);
		logger.debug("Kpi father setted");
		toReturn.setIsParent(isParent);
		logger.debug("Kpi isParent setted");
		toReturn.setIsRoot(isRoot);
		logger.debug("Kpi isRoot setted");
		toReturn.setKpiChildren(kpiChildren);
		logger.debug("Kpi Children setted");
		toReturn.setKpiDs(ds);
		logger.debug("Kpi dataset setted");
		toReturn.setKpiId(kpiId);
		logger.debug("Kpi Id setted");
		toReturn.setKpiInstances(KpiInstances);
		logger.debug("Kpi Instances setted");
		toReturn.setKpiName(kpiName);
		logger.debug("Kpi name setted");
		toReturn.setRoles(roles);
		logger.debug("Kpi roles setted");
		toReturn.setStandardWeight(standardWeight);
		logger.debug("Kpi weight setted");
		toReturn.setCode(code);
		logger.debug("Kpi code setted");
		toReturn.setMetric(metric);
		logger.debug("Kpi metric setted");
		toReturn.setScaleCode(scaleCode);
		logger.debug("Kpi scaleCode setted");
		toReturn.setScaleName(scaleName);
		logger.debug("Kpi scaleName setted");
		toReturn.setInterpretation(interpretation);
		logger.debug("Interpretation setted");

		toReturn.setModelReference(modelReference);
		logger.debug("modelReference setted");
		toReturn.setTargetAudience(targetAudience);
		logger.debug("targetAudience setted");
		toReturn.setInputAttribute(inputAttributes);
		logger.debug("inputAttributes setted");	

		if(kpi.getSbiDomainsByKpiType()!=null){
			toReturn.setKpiTypeId(kpi.getSbiDomainsByKpiType().getValueId());
		}
		if(kpi.getSbiDomainsByMeasureType()!=null){
			toReturn.setMeasureTypeId(kpi.getSbiDomainsByMeasureType().getValueId());
		}
		if(kpi.getSbiDomainsByMetricScaleType()!=null){
			toReturn.setMetricScaleId(kpi.getSbiDomainsByMetricScaleType().getValueId());
		}


		logger.debug("OUT");
		return toReturn;
	}

	/*

	

*/
	
	
	
	
	private String getKpiProperty(String property) {
		String toReturn = null;
		if (property != null && property.toUpperCase().equals("CODE"))
			toReturn = "code";
		if (property != null && property.toUpperCase().equals("NAME"))
			toReturn = "name";
		if (property != null && property.toUpperCase().equals("DESCRIPTION"))
			toReturn = "description";
		if (property != null && property.toUpperCase().equals("THRESHOLD"))
			toReturn = "sbiThreshold";
		if (property != null && property.toUpperCase().equals("THRESHOLDCODE"))
			toReturn = "sbiThreshold";
		return toReturn;
	}
	 

	public List loadKpiList(String fieldOrder, String typeOrder)
	throws EMFUserError {
		logger.debug("IN");
		List toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			toReturn = new ArrayList();
			List toTransform = null;
			if (fieldOrder != null && typeOrder != null) {
				Criteria crit = aSession.createCriteria(SbiKpi.class);
				if (typeOrder.toUpperCase().trim().equals("ASC"))
					crit.addOrder(Order.asc(getKpiProperty(fieldOrder)));
				if (typeOrder.toUpperCase().trim().equals("DESC"))
					crit.addOrder(Order.desc(getKpiProperty(fieldOrder)));
				toTransform = crit.list();
			} else {
				toTransform = aSession.createQuery("from SbiKpi").list();
			}

			for (Iterator iterator = toTransform.iterator(); iterator.hasNext();) {
				SbiKpi hibKpi = (SbiKpi) iterator.next();
				Kpi kpi = new Kpi();
				kpi.setCode(hibKpi.getCode());
				kpi.setDescription(hibKpi.getDescription());
				kpi.setKpiName(hibKpi.getName());
				kpi.setKpiId(hibKpi.getKpiId());
				if(hibKpi.getSbiThreshold() != null){
					Threshold threshold = new Threshold();
					threshold.setId(hibKpi.getSbiThreshold().getThresholdId());
					threshold.setName(hibKpi.getSbiThreshold().getName());
					kpi.setThreshold(threshold);
				}
				toReturn.add(kpi);
			}

		} catch (HibernateException he) {
			logger.error("Error while loading the list of Kpi", he);

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
		return toReturn;
	}

	public List loadKpiList() throws EMFUserError {
		return loadKpiList(null, null);
	}

	public void modifyKpi(Kpi kpi) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			String name = kpi.getKpiName();
			String description = kpi.getDescription();
			String code = kpi.getCode();
			String metric = kpi.getMetric();
			Double weight = kpi.getStandardWeight();
			String documentLabel = kpi.getDocumentLabel();
			SbiDataSetConfig ds = null;
			String interpretation = kpi.getInterpretation(); 
			String inputAttribute = kpi.getInputAttribute();
			String modelReference = kpi.getModelReference();
			String targetAudience = kpi.getTargetAudience();

			if (kpi.getKpiDs() != null) {
				Integer ds_id = kpi.getKpiDs().getId();
				ds = (SbiDataSetConfig) aSession.load(SbiDataSetConfig.class,
						ds_id);
			}

			SbiThreshold sbiThreshold = null;
			if (kpi.getThreshold() != null) {
				Integer thresholdId = kpi.getThreshold().getId();
				sbiThreshold = (SbiThreshold) aSession.load(SbiThreshold.class, thresholdId);
			}

			SbiKpi sbiKpi = (SbiKpi) aSession.load(SbiKpi.class, kpi.getKpiId());


			SbiDomains kpiType = null;
			if (kpi.getKpiTypeId() != null) {
				Integer kpiTypeId = kpi.getKpiTypeId();
				kpiType = (SbiDomains) aSession.load(SbiDomains.class, kpiTypeId);
			}

			SbiDomains metricScaleType = null;
			if (kpi.getMetricScaleId() != null) {
				Integer metricScaleId = kpi.getMetricScaleId();
				metricScaleType = (SbiDomains) aSession.load(SbiDomains.class, metricScaleId);
			}

			SbiDomains measureType = null;
			if (kpi.getMeasureTypeId() != null) {
				Integer measureTypeId = kpi.getMeasureTypeId();
				measureType = (SbiDomains) aSession.load(SbiDomains.class, measureTypeId);
			}

			sbiKpi.setInterpretation(interpretation);
			sbiKpi.setInputAttributes(inputAttribute);
			sbiKpi.setModelReference(modelReference);
			sbiKpi.setTargetAudience(targetAudience);

			sbiKpi.setSbiDomainsByKpiType(kpiType);
			sbiKpi.setSbiDomainsByMeasureType(measureType);
			sbiKpi.setSbiDomainsByMetricScaleType(metricScaleType);


			sbiKpi.setName(name);
			sbiKpi.setDescription(description);
			sbiKpi.setCode(code);
			sbiKpi.setMetric(metric);
			sbiKpi.setWeight(weight);
			sbiKpi.setDocumentLabel(documentLabel);
			sbiKpi.setSbiDataSet(ds);
			sbiKpi.setSbiThreshold(sbiThreshold);

			aSession.saveOrUpdate(sbiKpi);

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

	public Integer insertKpi(Kpi kpi) throws EMFUserError {
		logger.debug("IN");
		Integer idToReturn;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			String name = kpi.getKpiName();
			String description = kpi.getDescription();
			String code = kpi.getCode();
			String metric = kpi.getMetric();
			Double weight = kpi.getStandardWeight();
			String documentLabel = kpi.getDocumentLabel();
			SbiDataSetConfig ds = null;
			if (kpi.getKpiDs() != null) {
				Integer ds_id = kpi.getKpiDs().getId();
				ds = (SbiDataSetConfig) aSession.load(SbiDataSetConfig.class,
						ds_id);
			}

			SbiThreshold sbiThreshold = null;
			if (kpi.getThreshold() != null) {
				Integer thresholdId = kpi.getThreshold().getId();
				sbiThreshold = (SbiThreshold) aSession.load(SbiThreshold.class, thresholdId);
			}


			SbiKpi sbiKpi = new SbiKpi();

			String interpretation = kpi.getInterpretation(); 
			String inputAttribute = kpi.getInputAttribute();
			String modelReference = kpi.getModelReference();
			String targetAudience = kpi.getTargetAudience();

			SbiDomains kpiType = null;
			if (kpi.getKpiTypeId() != null) {
				Integer kpiTypeId = kpi.getKpiTypeId();
				kpiType = (SbiDomains) aSession.load(SbiDomains.class, kpiTypeId);
			}

			SbiDomains metricScaleType = null;
			if (kpi.getMetricScaleId() != null) {
				Integer metricScaleId = kpi.getMetricScaleId();
				metricScaleType = (SbiDomains) aSession.load(SbiDomains.class, metricScaleId);
			}

			SbiDomains measureType = null;
			if (kpi.getMeasureTypeId() != null) {
				Integer measureTypeId = kpi.getMeasureTypeId();
				measureType = (SbiDomains) aSession.load(SbiDomains.class, measureTypeId);
			}

			sbiKpi.setInterpretation(interpretation);
			sbiKpi.setInputAttributes(inputAttribute);
			sbiKpi.setModelReference(modelReference);
			sbiKpi.setTargetAudience(targetAudience);

			sbiKpi.setSbiDomainsByKpiType(kpiType);
			sbiKpi.setSbiDomainsByMeasureType(measureType);
			sbiKpi.setSbiDomainsByMetricScaleType(metricScaleType);


			sbiKpi.setName(name);
			sbiKpi.setDescription(description);
			sbiKpi.setCode(code);
			sbiKpi.setMetric(metric);
			sbiKpi.setWeight(weight);
			sbiKpi.setDocumentLabel(documentLabel);
			sbiKpi.setSbiDataSet(ds);
			sbiKpi.setSbiThreshold(sbiThreshold);

			idToReturn = (Integer) aSession.save(sbiKpi);

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

	public boolean deleteKpi(Integer kpiId) throws EMFUserError {
		Session aSession = getSession();
		Transaction tx = null;
		try {
			tx = aSession.beginTransaction();
			SbiKpi akpi = (SbiKpi) aSession.load(SbiKpi.class, kpiId);
			aSession.delete(akpi);
			tx.commit();

		} catch (ConstraintViolationException cve) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Impossible to delete a Kpi", cve);
			throw new EMFUserError(EMFErrorSeverity.WARNING, 10015);

		} catch (HibernateException e) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Error while delete a Kpi ", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);
		} finally {
			aSession.close();
		}
		return true;
	}


	public IDataSet getDsFromKpiId(Integer kpiId) throws EMFUserError {
		logger.debug("IN");
		IDataSet toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpi k = (SbiKpi) aSession.load(SbiKpi.class, kpiId);
			SbiDataSetConfig ds = k.getSbiDataSet();
			toReturn = DAOFactory.getDataSetDAO().loadDataSetByID(ds.getDsId());

		} catch (HibernateException he) {

			if (tx != null)
				tx.rollback();
			logger.error(he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10115);

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

	
	/*public List loadResourcesList(String fieldOrder, String typeOrder)
	throws EMFUserError {
		logger.debug("IN");
		List toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			toReturn = new ArrayList();
			List toTransform = null;

			if (fieldOrder != null && typeOrder != null) {
				Criteria crit = aSession.createCriteria(SbiResources.class);
				if (typeOrder.toUpperCase().trim().equals("ASC"))
					crit.addOrder(Order.asc(getResourcesProperty(fieldOrder)));
				if (typeOrder.toUpperCase().trim().equals("DESC"))
					crit.addOrder(Order.desc(getResourcesProperty(fieldOrder)));
				toTransform = crit.list();
			} else {
				toTransform = aSession.createQuery("from SbiResources").list();
			}

			for (Iterator iterator = toTransform.iterator(); iterator.hasNext();) {
				SbiResources hibResource = (SbiResources) iterator.next();
				Resource resource = toResource(hibResource);
				toReturn.add(resource);
			}

		} catch (HibernateException he) {
			logger.error("Error while loading the list of Resources", he);

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



	private String getResourcesProperty(String property) {
		String toReturn = null;
		if (property != null && property.equals("NAME"))
			toReturn = "resourceName";
		if (property != null && property.equals("SELECTED"))
			toReturn = "resourceName";
		return toReturn;
	}
	 */











	/*public ModelInstanceNode loadModelInstanceByLabel(String label,Date requestedDate) throws EMFUserError {
		logger.debug("IN");
		ModelInstanceNode toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criterion nameCriterrion = Expression.eq("label", label);
			Criteria criteria = aSession.createCriteria(SbiKpiModelInst.class);
			criteria.add(nameCriterrion);	
			SbiKpiModelInst hibSbiKpiModelInst = (SbiKpiModelInst) criteria.uniqueResult();
			if (hibSbiKpiModelInst == null) return null;
			toReturn = toModelInstanceNode(hibSbiKpiModelInst, requestedDate);

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with name "
					+ ((label == null) ? "null" : label), he);

			if (tx != null)
				tx.rollback();
			logger.error(he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10101);

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

	public ModelInstanceNode loadModelInstanceById(Integer id,
			Date requestedDate) throws EMFUserError {
		logger.debug("IN");
		ModelInstanceNode toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiKpiModelInst hibSbiKpiModelInst = (SbiKpiModelInst) aSession
			.get(SbiKpiModelInst.class, id);
			toReturn = toModelInstanceNode(hibSbiKpiModelInst, requestedDate);

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();
			logger.error(he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 10101);

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

	public List loadThresholdsById(Integer id) throws EMFUserError {
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
				IThresholdDAO thDao=(IThresholdDAO)DAOFactory.getThresholdDAO();
				Threshold tr = thDao.toThreshold(null);
				logger.debug("Added threshold with label " + tr.getName());
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
	 */




	/*
	public void modifyResource(Resource resource) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Integer resourceId = resource.getId();
			String tableName = resource.getTable_name();
			String columnName = resource.getColumn_name();
			String resourceName = resource.getName();
			String resourceDescription = resource.getDescr();

			SbiDomains sbiDomain = (SbiDomains) aSession.load(SbiDomains.class,
					resource.getTypeId());
			SbiResources sbiResource = (SbiResources) aSession.load(
					SbiResources.class, resource.getId());

			sbiResource.setTableName(tableName);
			sbiResource.setColumnName(columnName);
			sbiResource.setResourceName(resourceName);
			sbiResource.setResourceDescr(resourceDescription);
			sbiResource.setType(sbiDomain);

			aSession.update(sbiResource);
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

	public Integer insertResource(Resource toCreate) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		Integer idToReturn;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiResources hibResource = new SbiResources();
			hibResource.setResourceName(toCreate.getName());
			hibResource.setResourceDescr(toCreate.getDescr());
			hibResource.setTableName(toCreate.getTable_name());
			hibResource.setColumnName(toCreate.getColumn_name());
			SbiDomains sbiDomains = (SbiDomains) aSession.load(
					SbiDomains.class, toCreate.getTypeId());
			hibResource.setType(sbiDomains);

			idToReturn = (Integer) aSession.save(hibResource);
			tx.commit();

		} catch (HibernateException he) {
			logger.error("Error while inserting the KpiResource ", he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10103);

		} finally {
			if (aSession != null) {
				if (aSession.isOpen())
					aSession.close();
				logger.debug("OUT");
			}
		}
		return idToReturn;
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

	public void deleteResource(Integer resouceId) throws EMFUserError {
		Session aSession = getSession();
		Transaction tx = null;
		try {
			tx = aSession.beginTransaction();
			SbiResources sbiResource = (SbiResources) aSession.load(
					SbiResources.class, resouceId);
			aSession.delete(sbiResource);

			tx.commit();

		} catch (ConstraintViolationException cve) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Impossible to delete a Resource", cve);
			throw new EMFUserError(EMFErrorSeverity.WARNING, 10014);

		} catch (HibernateException e) {
			if (tx != null && tx.isActive()) {
				tx.rollback();
			}
			logger.error("Error while delete a Resource ", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 101);

		} finally {
			aSession.close();
		}
	}
	 */

	/*
	public Resource loadResourceById(Integer id) throws EMFUserError {
		logger.debug("IN");
		Resource toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiResources hibSbiResource = (SbiResources) aSession.load(
					SbiResources.class, id);
			toReturn = toResource(hibSbiResource);

		} catch (HibernateException he) {
			logger.error("Error while loading the Model Instance with id "
					+ ((id == null) ? "" : id.toString()), he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 10113);

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
	 */

	/*

	 */


	/*

	 */


	/*


	 */


	/*
	private ModelInstanceNode toModelInstanceNode(
			SbiKpiModelInst hibSbiKpiModelInst, Date requestedDate)
	throws EMFUserError {

		logger.debug("IN");
		ModelInstanceNode toReturn = new ModelInstanceNode();

		String modelCode = "";

		if(hibSbiKpiModelInst.getSbiKpiModel()!=null){
			modelCode = hibSbiKpiModelInst.getSbiKpiModel().getKpiModelCd();
		}

		Integer id = hibSbiKpiModelInst.getKpiModelInst();
		logger.debug("SbiKpiModelInstanceNode id: "
				+ (id != null ? id : "id null"));
		String descr = hibSbiKpiModelInst.getDescription();
		logger.debug("SbiKpiModelInstanceNode description: "
				+ (descr != null ? descr : "Description null"));
		String name = hibSbiKpiModelInst.getName();
		logger.debug("SbiKpiModelInstanceNode name: "
				+ (name != null ? name : "name null"));
		SbiKpiInstance kpiInst = hibSbiKpiModelInst.getSbiKpiInstance();

		KpiInstance kpiInstanceAssociated = null;
		if (kpiInst != null) {
			kpiInstanceAssociated = toKpiInstance(kpiInst);
		}

		Set resources = hibSbiKpiModelInst.getSbiKpiModelResourceses();
		List res = new ArrayList();
		if (!resources.isEmpty()) {
			Iterator i = resources.iterator();
			while (i.hasNext()) {
				SbiKpiModelResources dls = (SbiKpiModelResources) i.next();
				Resource r = toResource(dls);
				logger.debug("SbiKpiModelInstanceNode resource name: "
						+ (r.getName() != null ? r.getName()
								: "Resource name null"));
				res.add(r);
			}
		}
		// gets father id
		SbiKpiModelInst father = hibSbiKpiModelInst.getSbiKpiModelInst();
		Integer fatherId = null;
		Boolean isRoot = false;
		if (father != null) {
			fatherId = father.getKpiModelInst();
			logger
			.debug("SbiKpiModelInstanceNode fatherId: "
					+ (fatherId != null ? fatherId.toString()
							: "fatherId null"));
		} else {
			isRoot = true;
		}

		// gets list of children id
		Set children = hibSbiKpiModelInst.getSbiKpiModelInsts();
		List childrenIds = new ArrayList();
		Iterator iCI = children.iterator();
		logger.debug("Started list of children");
		while (iCI.hasNext()) {
			SbiKpiModelInst skml = (SbiKpiModelInst) iCI.next();
			Integer childId = skml.getKpiModelInst();
			logger.debug("SbiKpiModelInstanceNode childrenId: "
					+ (childId != null ? childId.toString() : "childId null"));
			childrenIds.add(childId);
		}

		// gets ModelNode referenced
		Integer reference = hibSbiKpiModelInst.getSbiKpiModel().getKpiModelId();
		logger.debug("SbiKpiModelInstanceNode modelNodeReference: "
				+ (reference != null ? reference.toString()
						: "reference null"));

		toReturn.setModelInstanceNodeId(id);
		logger.debug("KpiModelInstanceNode id setted");
		toReturn.setDescr(descr);
		logger.debug("KpiModelInstanceNode description setted");
		toReturn.setName(name);
		logger.debug("KpiModelInstanceNode name setted");
		toReturn.setKpiInstanceAssociated(kpiInstanceAssociated);
		logger.debug("KpiModelInstanceNode kpiInstanceAssociated setted");
		toReturn.setResources(res);
		logger.debug("KpiModelInstanceNode resources setted");
		toReturn.setFatherId(fatherId);
		logger.debug("KpiModelInstanceNode fatherId setted");
		toReturn.setModelReference(reference);
		logger.debug("KpiModelInstanceNode ModelNode reference setted");
		toReturn.setIsRoot(isRoot);
		logger.debug("KpiModelInstanceNode isRoot setted");
		toReturn.setChildrenIds(childrenIds);
		logger.debug("KpiModelInstanceNode childrenIds setted");
		toReturn.setModelCode(modelCode);
		logger.debug("KpiModelInstanceNode childrenIds setted");

		logger.debug("OUT");
		return toReturn;
	}

	private KpiInstance toKpiInstance(SbiKpiInstance kpiInst)
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

	private Resource toResource(SbiResources r) {

		logger.debug("IN");
		Resource toReturn = new Resource();

		String coumn_name = r.getColumnName();
		String name = r.getResourceName();
		String table_name = r.getTableName();
		String descr = r.getResourceDescr();
		SbiDomains d = r.getType();
		String type = d.getValueCd();
		Integer resourceId = r.getResourceId();
		Integer typeId = d.getValueId();

		toReturn.setColumn_name(coumn_name);
		logger.debug("Resource columnName setted:"+coumn_name);
		toReturn.setName(name);
		logger.debug("Resource name setted:"+name);
		toReturn.setDescr(descr);
		logger.debug("Resource description setted:"+descr);
		toReturn.setTable_name(table_name);
		logger.debug("Resource table_name setted:"+table_name);
		toReturn.setType(type);
		logger.debug("Resource type setted:"+type);
		toReturn.setTypeId(typeId);
		logger.debug("Resource typeID setted");
		toReturn.setId(resourceId);
		logger.debug("Resource ID setted");

		logger.debug("OUT");
		return toReturn;
	}

	private Resource toResource(SbiKpiModelResources re) {

		logger.debug("IN");
		Resource toReturn = new Resource();

		SbiResources r = re.getSbiResources();
		toReturn = toResource(r);
		logger.debug("OUT");
		return toReturn;
	}

	private SbiResources toSbiResource(Resource r) throws EMFUserError {

		logger.debug("IN");
		SbiResources toReturn = new SbiResources();
		String columnName = r.getColumn_name();
		String resourceName = r.getName();
		String resourceDescr = r.getDescr();
		String tableName = r.getTable_name();
		Integer resourceId = r.getId();
		String type = r.getType();
		Domain domain = DAOFactory.getDomainDAO().loadDomainByCodeAndValue("RESOURCE", type);
		SbiDomains sbiDomains = new SbiDomains();
		sbiDomains.setDomainCd(domain.getDomainCode());
		sbiDomains.setDomainNm(domain.getDomainName());
		sbiDomains.setValueCd(domain.getValueCd());
		sbiDomains.setValueDs(domain.getValueDescription());
		sbiDomains.setValueId(domain.getValueId());
		sbiDomains.setValueNm(domain.getValueName());

		toReturn.setColumnName(columnName);
		logger.debug("SbiResource columnName setted");
		toReturn.setResourceId(resourceId);
		logger.debug("SbiResource ID setted");
		toReturn.setResourceName(resourceName);
		logger.debug("SbiResource resourceName setted");
		toReturn.setResourceDescr(resourceDescr);
		logger.debug("SbiResource resourceDescr setted");
		toReturn.setType(sbiDomains);
		logger.debug("SbiResource sbiDomains setted");
		toReturn.setTableName(tableName);
		logger.debug("SbiResource tableName setted");

		logger.debug("OUT");
		return toReturn;
	}

	 */


}
