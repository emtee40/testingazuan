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
package it.eng.spagobi.bo.dao.hibernate;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.bo.Subreport;
import it.eng.spagobi.bo.dao.ISubreportDAO;
import it.eng.spagobi.metadata.SbiObjPar;
import it.eng.spagobi.metadata.SbiSubreports;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * @author Gioia
 *
 */
public class SubreportDAOHibImpl 
extends AbstractHibernateDAO 
implements ISubreportDAO {

	public List loadSubreportsByMasterRptId(Integer master_rpt_id) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		String hql = null;
		Query hqlQuery = null;
		
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			hql = " from SbiSubreports as subreport " + 
	         "where subreport.master_rpt_id = '" + master_rpt_id.toString() + "'";
			
			hqlQuery = aSession.createQuery(hql);
			List hibList = hqlQuery.list();
			
			Iterator it = hibList.iterator();

			while (it.hasNext()) {
				realResult.add(toSubreport((SbiSubreports) it.next()));
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
	
	public List loadSubreportsBySubRptId(Integer sub_rpt_id) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		String hql = null;
		Query hqlQuery = null;
		
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			hql = " from SbiSubreports as subreport " + 
	         "where subreport.sub_rpt_id = '" + sub_rpt_id.toString() + "'";
			
			hqlQuery = aSession.createQuery(hql);
			List hibList = hqlQuery.list();
			
			Iterator it = hibList.iterator();

			while (it.hasNext()) {
				realResult.add(toSubreport((SbiSubreports) it.next()));
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

	public void insertSubreport(Subreport aSubreport) throws EMFUserError {
		// TODO Auto-generated method stub
		
	}

	public void eraseSubreportByMasterRptId(Integer master_rpt_id) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		String hql = null;
		Query hqlQuery = null;
		List subreports = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			
			hql = " from SbiSubreports as subreport " + 
	         "where subreport.master_rpt_id = '" + master_rpt_id.toString() + "'";
			
			hqlQuery = aSession.createQuery(hql);
			subreports = hqlQuery.list();
			
			Iterator it = subreports.iterator();
			while (it.hasNext()) {
				aSession.delete((SbiSubreports) it.next());
			}			
			tx.commit();
		} catch (HibernateException he) {
			logException(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} catch (Exception ex) {
			logException(ex);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100); 
		}	finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
	}

	public void eraseSubreportBySubRptId(Integer sub_rpt_id) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		String hql = null;
		Query hqlQuery = null;
		List subreports = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			
			hql = " from SbiSubreports as subreport " + 
	         "where subreport.sub_rpt_id = '" + sub_rpt_id.toString() + "'";
			
			hqlQuery = aSession.createQuery(hql);
			subreports = hqlQuery.list();
			
			Iterator it = subreports.iterator();
			while (it.hasNext()) {
				aSession.delete((SbiSubreports) it.next());
			}			
			tx.commit();
		} catch (HibernateException he) {
			logException(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} catch (Exception ex) {
			logException(ex);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100); 
		}	finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}	
	}
	
	/**
	 * From the hibernate subreports at input, gives
	 * the corrispondent <code>Subreports</code> object.
	 * 
	 * @param hibParameters The hybernate parameter
	 * @return The corrispondent <code>Parameter</code> object
	 */
	public Subreport toSubreport(SbiSubreports hibSubreports){
		Subreport aSubreport = new Subreport();
		
		aSubreport.setMaster_rpt_id(hibSubreports.getMaster_rpt_id());
		aSubreport.setSub_rpt_id(hibSubreports.getSub_rpt_id());		
		
		return aSubreport;
	}

}
