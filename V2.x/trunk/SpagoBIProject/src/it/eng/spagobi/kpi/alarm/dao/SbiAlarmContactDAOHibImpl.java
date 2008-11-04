package it.eng.spagobi.kpi.alarm.dao;

/**
 * Title: SpagoBI
 * Description: SpagoBI
 * Copyright: Copyright (c) 2008
 * Company: Xaltia S.p.A.
 * 
 * @author Enrico Cesaretti
 * @version 1.0
 */




import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.kpi.alarm.metadata.SbiAlarmContact;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * 
 * @see it.eng.spagobi.kpi.alarm.bo.SbiAlarmContact
 * @author Enrico Cesaretti
 */
public class SbiAlarmContactDAOHibImpl extends AbstractHibernateDAO implements ISbiAlarmContactDAO {

	@SuppressWarnings("unused")
	private static final Logger logger = Logger.getLogger(SbiAlarmContactDAOHibImpl.class);

	
    public void insert(SbiAlarmContact item) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
			session.save(item);
			tx.commit();
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }
    
    
    public void insert(Session session, SbiAlarmContact item) {
        session.save(item);
    }

    public void update(SbiAlarmContact item) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
			session.update(item);
			tx.commit();
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }	
    
    public void update(Session session, SbiAlarmContact item) {
        session.update(item);
    }	
	
    public void delete(SbiAlarmContact item) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
			session.delete(item);
			tx.commit();
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }
    
    public void delete(Session session, SbiAlarmContact item) {
       session.delete(item);
    }

    public void delete(Integer id) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
        	session.delete(session.load(SbiAlarmContact.class, id));
			tx.commit();
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }
    
    
    public void delete(Session session, Integer id) {
       	session.delete(session.load(SbiAlarmContact.class, id));
    }
	
    @SuppressWarnings("unchecked")
    public SbiAlarmContact findById(Integer id) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
			SbiAlarmContact item = (SbiAlarmContact)session.get(SbiAlarmContact.class, id);
			tx.commit();
			return item;
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }

    @SuppressWarnings("unchecked")
	public List<SbiAlarmContact> findAll() {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
			
			List<SbiAlarmContact> list = (List<SbiAlarmContact>)session.createQuery("from SbiAlarmContact").list();
			tx.commit();
			return list;
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }	
    
    
    @SuppressWarnings("unchecked")
    public List<SbiAlarmContact> findByCsp(String csp) {
        Session session = getSession();
        Transaction tx = null;
        try {
        	tx = session.beginTransaction();
        	List<SbiAlarmContact> list = (List<SbiAlarmContact>)session.createQuery("from SbiAlarmContact where RESOURCES=?").setParameter(0, csp).list();
		tx.commit();
		return list;
			
		} catch (HibernateException e) {
			if( tx != null && tx.isActive() ){
				tx.rollback();
			}
			throw e;
			
		}finally{
			session.close();
		}
    }
    
    @SuppressWarnings("unchecked")
    public List<SbiAlarmContact> findByCsp(Session session, String csp) {
        List<SbiAlarmContact> list = (List<SbiAlarmContact>)session.createQuery("from SbiAlarmContact as contact where contact.RESOURCES=?").setParameter(0, csp).list();
	return list;
    }
	
    @SuppressWarnings("unchecked")
    public List<SbiAlarmContact> findGenericContact(Session session) {
        List<SbiAlarmContact> list = (List<SbiAlarmContact>)session.createQuery("from SbiAlarmContact where RESOURCES IS NULL ").list();
	return list;
    }

}

