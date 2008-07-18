/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
 * Created on 22-giu-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.commons.dao;


import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.functionalitytree.dao.LowFunctionalityDAOHibImpl;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuse;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuseDet;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.metadata.SbiEventRole;
import it.eng.spagobi.commons.metadata.SbiExtRoles;
import it.eng.spagobi.events.metadata.SbiEventsLog;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;

/**
 * Defines the Hibernate implementations for all DAO methods,
 * for a Role.
 * 
 * @author zoppello
 */
public class RoleDAOHibImpl extends AbstractHibernateDAO implements IRoleDAO {

	private static transient Logger logger = Logger.getLogger(RoleDAOHibImpl.class);
	/**
	 * Load by id.
	 * 
	 * @param roleID the role id
	 * 
	 * @return the role
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#loadByID(java.lang.Integer)
	 */
	public Role loadByID(Integer roleID) throws EMFUserError {
		Role toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try{
			aSession = getSession();
			tx = aSession.beginTransaction();
		
			SbiExtRoles hibRole = (SbiExtRoles)aSession.load(SbiExtRoles.class,  roleID);
			
			toReturn = toRole(hibRole);
			tx.commit();
		}catch(HibernateException he){
			logException(he);
			
			if (tx != null) tx.rollback();	

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);  
		
		}finally{
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		return toReturn;
	}

	/**
	 * Load by name.
	 * 
	 * @param roleName the role name
	 * 
	 * @return the role
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#loadByName(java.lang.String)
	 */
	public Role loadByName(String roleName) throws EMFUserError {
		Role toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try{
			aSession = getSession();
			tx = aSession.beginTransaction();
			
			Criterion aCriterion = Expression.eq("name", roleName);
			Criteria aCriteria = aSession.createCriteria(SbiExtRoles.class);
			
			aCriteria.add(aCriterion);
			
			SbiExtRoles hibRole = (SbiExtRoles)aCriteria.uniqueResult();
			if (hibRole == null) return null;
			
			toReturn = toRole(hibRole);
			tx.commit();
		}catch(HibernateException he){
			logException(he);
			
			if (tx != null) tx.rollback();	

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);  
		
		}finally{
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		return toReturn;
	}

	/**
	 * Load all roles.
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#loadAllRoles()
	 */
	public List loadAllRoles() throws EMFUserError {
		List realResult = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Query hibQuery = aSession.createQuery(" from SbiExtRoles");
			List hibList = hibQuery.list();

			tx.commit();

			Iterator it = hibList.iterator();

			while (it.hasNext()) {
				realResult.add(toRole((SbiExtRoles) it.next()));
			}
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
	 * Insert role.
	 * 
	 * @param aRole the a role
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#insertRole(it.eng.spagobi.commons.bo.Role)
	 */
	public void insertRole(Role aRole) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

		
			SbiExtRoles hibRole = new SbiExtRoles();
			
			hibRole.setCode(aRole.getCode());
			hibRole.setDescr(aRole.getDescription());
			
			
			hibRole.setName(aRole.getName());
			
			SbiDomains roleType = (SbiDomains)aSession.load(SbiDomains.class,  aRole.getRoleTypeID());
			hibRole.setRoleType(roleType);
			
			hibRole.setRoleTypeCode(aRole.getRoleTypeCD());
			aSession.save(hibRole);
			
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
	 * Erase role.
	 * 
	 * @param aRole the a role
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#eraseRole(it.eng.spagobi.commons.bo.Role)
	 */
	public void eraseRole(Role aRole) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
		
			SbiExtRoles hibRole = (SbiExtRoles) aSession.load(SbiExtRoles.class,  aRole.getId());
			// deletes associations with events (and events themselves, if they have no more associations)
			Query hibQuery = aSession.createQuery(" from SbiEventRole ser where ser.id.role.extRoleId = " + hibRole.getExtRoleId().toString());
			List eventsRole = hibQuery.list();
			Iterator it = eventsRole.iterator();
			while (it.hasNext()) {
				SbiEventRole eventRole = (SbiEventRole) it.next();
				SbiEventsLog event = eventRole.getId().getEvent();
				aSession.delete(eventRole);
				aSession.flush();
				aSession.refresh(event);
				Set roles = event.getRoles();
				if (roles.isEmpty()) {
					aSession.delete(event);
				}
			}
			aSession.delete(hibRole);
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
	 * Modify role.
	 * 
	 * @param aRole the a role
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#modifyRole(it.eng.spagobi.commons.bo.Role)
	 */
	public void modifyRole(Role aRole) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
		
			SbiExtRoles hibRole = (SbiExtRoles)aSession.load(SbiExtRoles.class,  aRole.getId());
			
			hibRole.setCode(aRole.getCode());
			hibRole.setDescr(aRole.getDescription());
			hibRole.setName(aRole.getName());
			hibRole.setIsAbleToSeeSubobjects(new Boolean(aRole.isAbleToSeeSubobjects()));
			hibRole.setIsAbleToSeeSnapshots(new Boolean(aRole.isAbleToSeeSnapshots()));
			hibRole.setIsAbleToSeeViewpoints(new Boolean(aRole.isAbleToSeeViewpoints()));
			hibRole.setIsAbleToSeeNotes(new Boolean(aRole.isAbleToSeeNotes()));
			hibRole.setIsAbleToSeeMetadata(new Boolean(aRole.isAbleToSeeMetadata()));
			hibRole.setIsAbleToSendMail(new Boolean(aRole.isAbleToSendMail()));
			hibRole.setIsAbleToSaveRememberMe(new Boolean(aRole.isAbleToSaveRememberMe()));
			hibRole.setIsAbleToSaveIntoPersonalFolder(new Boolean(aRole.isAbleToSaveIntoPersonalFolder()));
			
			SbiDomains roleType = (SbiDomains)aSession.load(SbiDomains.class,  aRole.getRoleTypeID());
			hibRole.setRoleType(roleType);
			
			hibRole.setRoleTypeCode(aRole.getRoleTypeCD());
			
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
	 * Load all free roles for insert.
	 * 
	 * @param parameterID the parameter id
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#loadAllFreeRolesForInsert(java.lang.Integer)
	 */
	public List loadAllFreeRolesForInsert(Integer parameterID)
			throws EMFUserError {
		List realResult = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Query hibQuery = aSession.createQuery(" from SbiExtRoles ");
			List hibListAllRoles = hibQuery.list();

			String hql = "from SbiParuseDet s "
					+ " where s.id.sbiParuse.sbiParameters.parId = "
					+ parameterID;

			Query hqlQuery = aSession.createQuery(hql);

			List parUseDetsOfNoFreeRoles = hqlQuery.list();

			List noFreeRoles = new ArrayList();

			for (Iterator it = parUseDetsOfNoFreeRoles.iterator(); it.hasNext();) {
				noFreeRoles.add(((SbiParuseDet) it.next()).getId()
						.getSbiExtRoles());
			}

			hibListAllRoles.removeAll(noFreeRoles);

			Iterator it = hibListAllRoles.iterator();

			while (it.hasNext()) {
				realResult.add(toRole((SbiExtRoles) it.next()));
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
	 * Load all free roles for detail.
	 * 
	 * @param parUseID the par use id
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.commons.dao.IRoleDAO#loadAllFreeRolesForDetail(java.lang.Integer)
	 */
	public List loadAllFreeRolesForDetail(Integer parUseID) throws EMFUserError {
		List realResult = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			
			Query hibQuery = aSession.createQuery(" from SbiExtRoles ");
			List hibListAllRoles = hibQuery.list();
			
			
			SbiParuse sbiParuse = (SbiParuse)aSession.load(SbiParuse.class, parUseID);
			
			Set setParUsesDets = sbiParuse.getSbiParuseDets();
			for (Iterator it = setParUsesDets.iterator(); it.hasNext();){
				SbiParuseDet det = (SbiParuseDet)it.next();
			}
			
			String hql = "from SbiParuseDet s "
						+" where s.id.sbiParuse.sbiParameters.parId = "+ sbiParuse.getSbiParameters().getParId() 
						+" and s.id.sbiParuse.label != '" + sbiParuse.getLabel()+ "'";
			
			
			Query hqlQuery = aSession.createQuery(hql);
			
			List parUseDetsOfNoFreeRoles = hqlQuery.list();
			
			List noFreeRoles = new ArrayList();
			
			for (Iterator it = parUseDetsOfNoFreeRoles.iterator(); it.hasNext();){
				noFreeRoles.add(((SbiParuseDet)it.next()).getId().getSbiExtRoles());
			}
			
			hibListAllRoles.removeAll(noFreeRoles);
			
			
			Iterator it = hibListAllRoles.iterator();
			
			while (it.hasNext()){
				realResult.add(toRole((SbiExtRoles)it.next()));
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
	 * From the hibernate Role at input, gives
	 * the corrispondent <code>Role</code> object.
	 * 
	 * @param hibRole The hybernate role
	 * 
	 * @return The corrispondent <code>Role</code> object
	 */
	public Role toRole(SbiExtRoles hibRole){
	    logger.debug( "IN.hibRole.getName()="+hibRole.getName() );
		Role role = new Role();
		role.setCode(hibRole.getCode());
		role.setDescription(hibRole.getDescr());
		role.setId(hibRole.getExtRoleId());
		role.setName(hibRole.getName());
		role.setIsAbleToSeeSubobjects(hibRole.getIsAbleToSeeSubobjects() == null || hibRole.getIsAbleToSeeSubobjects().booleanValue());
		role.setIsAbleToSeeSnapshots(hibRole.getIsAbleToSeeSnapshots() == null || hibRole.getIsAbleToSeeSnapshots().booleanValue());
		role.setIsAbleToSeeViewpoints(hibRole.getIsAbleToSeeViewpoints() == null || hibRole.getIsAbleToSeeViewpoints().booleanValue());
		role.setIsAbleToSeeNotes(hibRole.getIsAbleToSeeNotes() == null || hibRole.getIsAbleToSeeNotes().booleanValue());
		role.setIsAbleToSeeMetadata(hibRole.getIsAbleToSeeMetadata() == null || hibRole.getIsAbleToSeeMetadata().booleanValue());
		role.setIsAbleToSendMail(hibRole.getIsAbleToSendMail() == null || hibRole.getIsAbleToSendMail().booleanValue());
		role.setIsAbleToSaveRememberMe(hibRole.getIsAbleToSaveRememberMe() == null || hibRole.getIsAbleToSaveRememberMe().booleanValue());
		role.setIsAbleToSaveIntoPersonalFolder(hibRole.getIsAbleToSaveIntoPersonalFolder() == null || hibRole.getIsAbleToSaveIntoPersonalFolder().booleanValue());
		role.setRoleTypeCD(hibRole.getRoleTypeCode());
		role.setRoleTypeID(hibRole.getRoleType().getValueId());
		logger.debug( "IN" );
		return role;
	}

	
	
	/**
	 * Gets all the functionalities associated to the role.
	 * 
	 * @param roleID The role id
	 * 
	 * @return The functionalities associated to the role
	 * 
	 * @throws EMFUserError the EMF user error
	 */
	public List LoadFunctionalitiesAssociated(Integer roleID) throws EMFUserError {
		List functs = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String hql = "select f from SbiFunctions f, SbiFuncRole fr, SbiExtRoles r "
						+" where f.functId = fr.id.function.functId " 
						+" and r.extRoleId = fr.id.role.extRoleId "
						+" and r.extRoleId = " + roleID; 
			Query hqlQuery = aSession.createQuery(hql);
			functs = hqlQuery.list();
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
		return functs;
	}
	
	
	
	/**
	 * Gets all the parameter uses associated to the role.
	 * 
	 * @param roleID The role id
	 * 
	 * @return The parameter uses associated to the role
	 * 
	 * @throws EMFUserError the EMF user error
	 */
	public List LoadParUsesAssociated(Integer roleID) throws EMFUserError {
		List uses = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String hql = "select pu from SbiParuseDet pud, SbiParuse pu, SbiExtRoles r "
						+" where pu.useId = pud.id.sbiParuse.useId " 
						+" and r.extRoleId = pud.id.sbiExtRoles.extRoleId "
						+" and r.extRoleId = " + roleID; 
			Query hqlQuery = aSession.createQuery(hql);
			uses = hqlQuery.list();
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
		return uses;
	}
	
	
	
}
