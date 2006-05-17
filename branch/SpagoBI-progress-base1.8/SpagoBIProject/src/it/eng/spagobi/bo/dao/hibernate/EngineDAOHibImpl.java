/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

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
/*
 * Created on 20-giu-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.bo.dao.hibernate;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.bo.Engine;
import it.eng.spagobi.bo.dao.IEngineDAO;
import it.eng.spagobi.metadata.SbiDomains;
import it.eng.spagobi.metadata.SbiEngines;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * Defines the Hibernate implementations for all DAO methods,
 * for an engine.
 * 
 * @author zoppello
 */
public class EngineDAOHibImpl extends AbstractHibernateDAO implements IEngineDAO{

	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#loadEngineByID(java.lang.Integer)
	 */
	public Engine loadEngineByID(Integer engineID) throws EMFUserError {
		Engine toReturn = null;
		Session aSession = null;
		Transaction tx = null;

		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
		
			SbiEngines hibEngine = (SbiEngines)aSession.load(SbiEngines.class,  engineID);
			
			toReturn = toEngine(hibEngine);
			tx.commit();
			
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		
		return toReturn;
	}

	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#loadAllEngines()
	 */
	public List loadAllEngines() throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Query hibQuery = aSession.createQuery(" from SbiEngines");
			List hibList = hibQuery.list();
			
			Iterator it = hibList.iterator();

			while (it.hasNext()) {
				realResult.add(toEngine((SbiEngines) it.next()));
			}
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		return realResult;
	}

	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#modifyEngine(it.eng.spagobi.bo.Engine)
	 */
	public void modifyEngine(Engine aEngine) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,
					aEngine.getId());
			SbiDomains hibDomainBiobjType = (SbiDomains) aSession.load(SbiDomains.class,
					aEngine.getBiobjTypeId());
			SbiDomains hibDomainEngineType = (SbiDomains) aSession.load(SbiDomains.class,
					aEngine.getEngineTypeId());
			hibEngine.setName(aEngine.getName());
			hibEngine.setLabel(aEngine.getLabel());
			hibEngine.setDescr(aEngine.getDescription());
			hibEngine.setDriverNm(aEngine.getDriverName());
			hibEngine.setEncrypt(new Short((short) aEngine.getCriptable()
					.intValue()));
			hibEngine.setMainUrl(aEngine.getUrl());
			hibEngine.setObjUplDir(aEngine.getDirUpload());
			hibEngine.setObjUseDir(aEngine.getDirUsable());
			hibEngine.setSecnUrl(aEngine.getSecondaryUrl());
			hibEngine.setEngineType(hibDomainEngineType);
			hibEngine.setClassNm(aEngine.getClassName());
			hibEngine.setBiobjType(hibDomainBiobjType);
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}

	}

	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#insertEngine(it.eng.spagobi.bo.Engine)
	 */
	public void insertEngine(Engine aEngine) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiDomains hibDomainBiobjType = (SbiDomains) aSession.load(SbiDomains.class,
					aEngine.getBiobjTypeId());
			SbiDomains hibDomainEngineType = (SbiDomains) aSession.load(SbiDomains.class,
					aEngine.getEngineTypeId());
			SbiEngines hibEngine = new SbiEngines();
			hibEngine.setName(aEngine.getName());
			hibEngine.setLabel(aEngine.getLabel());
			hibEngine.setDescr(aEngine.getDescription());
			hibEngine.setDriverNm(aEngine.getDriverName());
			hibEngine.setEncrypt(new Short((short) aEngine.getCriptable()
					.intValue()));
			hibEngine.setMainUrl(aEngine.getUrl());
			hibEngine.setObjUplDir(aEngine.getDirUpload());
			hibEngine.setObjUseDir(aEngine.getDirUsable());
			hibEngine.setSecnUrl(aEngine.getSecondaryUrl());
			hibEngine.setEngineType(hibDomainEngineType);
			hibEngine.setClassNm(aEngine.getClassName());
			hibEngine.setBiobjType(hibDomainBiobjType);
			aSession.save(hibEngine);
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
	}

	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#eraseEngine(it.eng.spagobi.bo.Engine)
	 */
	public void eraseEngine(Engine aEngine) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,
					aEngine.getId());

			aSession.delete(hibEngine);
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}

	}
	
	/**
	 * From the hibernate Engine at input, gives
	 * the corrispondent <code>Engine</code> object.
	 * 
	 * @param hibEngine The hybernate engine
	 * @return The corrispondent <code>Engine</code> object
	 */
	public Engine toEngine(SbiEngines hibEngine){
		Engine eng = new Engine();
		eng.setCriptable(new Integer(hibEngine.getEncrypt().intValue()));
		eng.setDescription(hibEngine.getDescr());
		eng.setDirUpload(hibEngine.getObjUplDir());
		eng.setDirUsable(hibEngine.getObjUseDir());
		eng.setDriverName(hibEngine.getDriverNm());
		eng.setId(hibEngine.getEngineId());
		eng.setName(hibEngine.getName());
		eng.setLabel(hibEngine.getLabel());
		eng.setSecondaryUrl(hibEngine.getSecnUrl());
		eng.setUrl(hibEngine.getMainUrl());
		eng.setLabel(hibEngine.getLabel());
		eng.setEngineTypeId(hibEngine.getEngineType().getValueId());
		eng.setClassName(hibEngine.getClassNm());
		eng.setBiobjTypeId(hibEngine.getBiobjType().getValueId());
		return eng;
	}
	/**
	 * @see it.eng.spagobi.bo.dao.IEngineDAO#hasBIObjAssociated(java.lang.String)
	 */
	public boolean hasBIObjAssociated (String engineId) throws EMFUserError{
		/**
		 * TODO Hibernate Implementation
		 */
		boolean bool = false; 
		
		
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Integer engineIdInt = Integer.valueOf(engineId);
			
			String hql = " from SbiObjects s where s.sbiEngines.engineId = "+ engineIdInt;
			Query aQuery = aSession.createQuery(hql);
			
			List biObjectsAssocitedWithEngine = aQuery.list();
			if (biObjectsAssocitedWithEngine.size() > 0)
				bool = true;
			else
				bool = false;
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		return bool;
		
	}
}
