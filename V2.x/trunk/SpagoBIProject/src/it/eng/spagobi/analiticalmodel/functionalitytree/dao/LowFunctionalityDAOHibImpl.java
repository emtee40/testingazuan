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
package it.eng.spagobi.analiticalmodel.functionalitytree.dao;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.dao.BIObjectDAOHibImpl;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjFunc;
import it.eng.spagobi.analiticalmodel.document.service.BIObjectsModule;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.UserFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRole;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRoleId;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFunctions;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.bo.UserProfile;
import it.eng.spagobi.commons.constants.AdmintoolsConstants;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.dao.RoleDAOHibImpl;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.metadata.SbiExtRoles;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.MatchMode;

/**
 * Defines the Hibernate implementations for all DAO methods,
 * for a functionality. 
 */
public class LowFunctionalityDAOHibImpl extends AbstractHibernateDAO implements ILowFunctionalityDAO{
	private static transient Logger logger = Logger.getLogger(LowFunctionalityDAOHibImpl.class);
	
	
	/* ********* start luca changes ************************************************** */
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#checkUserRootExists(java.lang.String)
	 */
	public boolean checkUserRootExists(String username) throws EMFUserError {
		logger.debug( "IN" );
		boolean exists = false;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criterion userfunctANDnullparent = Expression.and(
									Expression.isNull("parentFunct"),
									Expression.eq("functTypeCd", "USER_FUNCT"));
			Criterion filters = Expression.and(userfunctANDnullparent, 
									Expression.like("path", "/"+username));
			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			criteria.add(filters);
			SbiFunctions hibFunct = (SbiFunctions) criteria.uniqueResult();
			if (hibFunct != null) 
				exists = true;
			tx.commit();
		} catch (HibernateException he) {
		        logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return exists;
	}
	
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#insertUserFunctionality(it.eng.spagobi.analiticalmodel.functionalitytree.bo.UserFunctionality)
	 */
	public void insertUserFunctionality(UserFunctionality userfunct) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = new SbiFunctions();
			
			// recover sbidomain of the user functionality 
			Criterion vcdEQusfunct = Expression.eq("valueCd", "USER_FUNCT");
			Criteria criteria = aSession.createCriteria(SbiDomains.class);
			criteria.add(vcdEQusfunct);
			SbiDomains functTypeDomain = (SbiDomains) criteria.uniqueResult();
			
			hibFunct.setFunctType(functTypeDomain);
			hibFunct.setCode(userfunct.getCode());
			hibFunct.setFunctTypeCd(functTypeDomain.getValueCd());
			hibFunct.setDescr(userfunct.getDescription());
			hibFunct.setName(userfunct.getName());
			hibFunct.setPath(userfunct.getPath());
			
			Integer parentId = userfunct.getParentId();
			SbiFunctions hibParentFunct = null;
			if (parentId != null) {
				// if it is not the root controls if the parent functionality exists
				Criteria parentCriteria = aSession.createCriteria(SbiFunctions.class);
				Criterion parentCriterion = Expression.eq("functId", parentId);
				parentCriteria.add(parentCriterion);
				hibParentFunct = (SbiFunctions) parentCriteria.uniqueResult();
				if (hibParentFunct == null){
					logger.error("The parent Functionality with id = " + parentId + " does not exist.");
					throw new EMFUserError(EMFErrorSeverity.ERROR, 1038);
				}
			}
			// if it is the root the parent functionality is null
			hibFunct.setParentFunct(hibParentFunct);

			// manages prog column that determines the folders order
			if (hibParentFunct == null) hibFunct.setProg(new Integer(1));
			else {
				// loads sub functionalities
				//Query hibQuery = aSession.createQuery("select max(s.prog) from SbiFunctions s where s.parentFunct.functId = " + parentId);
				Query hibQuery = aSession.createQuery("select max(s.prog) from SbiFunctions s where s.parentFunct.functId = ?" );
				hibQuery.setInteger(0, parentId.intValue());
				Integer maxProg = (Integer) hibQuery.uniqueResult();
				if (maxProg != null) hibFunct.setProg(new Integer(maxProg.intValue() + 1));
				else hibFunct.setProg(new Integer(1));
			}

			aSession.save(hibFunct);
			
			
			// save functionality roles
			
			Set functRoleToSave = new HashSet();
			criteria = aSession.createCriteria(SbiDomains.class);
			Criterion relstatecriterion = Expression.eq("valueCd", "REL");
			criteria.add(relstatecriterion);
			SbiDomains relStateDomain = (SbiDomains)criteria.uniqueResult();
			Criterion nameEqrolenameCri = null;
			Role[] roles = userfunct.getExecRoles();
			for(int i=0; i<roles.length; i++) {
				Role role = roles[i];
				nameEqrolenameCri = Expression.eq("name", role.getName());
				criteria = aSession.createCriteria(SbiExtRoles.class);
				criteria.add(nameEqrolenameCri);
				SbiExtRoles hibRole = (SbiExtRoles)criteria.uniqueResult();
				SbiFuncRoleId sbifuncroleid = new SbiFuncRoleId();
				sbifuncroleid.setFunction(hibFunct);
				sbifuncroleid.setState(relStateDomain);
				sbifuncroleid.setRole(hibRole);
				SbiFuncRole sbifuncrole = new SbiFuncRole();
				sbifuncrole.setId(sbifuncroleid);
				sbifuncrole.setStateCd(relStateDomain.getValueCd());
				aSession.save(sbifuncrole);
				functRoleToSave.add(sbifuncrole);
			}
			hibFunct.setSbiFuncRoles(functRoleToSave);
			
			
			
			
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
			}
		}

	}
	
	/* ********* end luca changes ************************************************** */
	
	
	/**
	 * Load low functionality by id.
	 * 
	 * @param functionalityID the functionality id
	 * @param recoverBIObjects the recover bi objects
	 * 
	 * @return the low functionality
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadLowFunctionalityByID(java.lang.Integer)
	 */
	public LowFunctionality loadLowFunctionalityByID(Integer functionalityID, boolean recoverBIObjects) throws EMFUserError {
		logger.debug( "IN" );
		LowFunctionality funct = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = (SbiFunctions)aSession.load(SbiFunctions.class, functionalityID);
			funct = toLowFunctionality(hibFunct, recoverBIObjects);
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return funct;
	}
	
	/**
	 * Load low functionality list by id List
	 * 
	 * @param functionalityIDs the functionality id List
	 * 
	 * @return the low functionalities List
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadLowFunctionalityByID(java.lang.Integer)
	 */
	public List loadLowFunctionalityList(List functionalityIDs) throws EMFUserError {
		logger.debug( "IN" );
		if (functionalityIDs!=null && !functionalityIDs.isEmpty()){
		    logger.debug( "SIZE="+functionalityIDs.size() );
		    Iterator iter=functionalityIDs.iterator();
		    while (iter.hasNext()){
			logger.debug( "Function ID="+((Integer)iter.next()).toString() );
		    }
		}
		List lowFunctList = new ArrayList();
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			//criteria.setFetchMode("sbiFuncRoles", FetchMode.JOIN);
			Criterion domainCdCriterrion = Expression.in("functId", functionalityIDs);		
			criteria.add(domainCdCriterrion);
			List temp = criteria.list();
			//Query query=aSession.createQuery("from SbiFunctions f inner join f.sbiFuncRoles where s.functId in ("+functionalityIDs.get(0)+")");
			//List temp = query.list();
			if(!temp.isEmpty()){
			Iterator it = temp.iterator();
			while(it.hasNext()){
				SbiFunctions func = (SbiFunctions)it.next();
				LowFunctionality lowFunctionality = toLowFunctionality(func, false);
				lowFunctList.add(lowFunctionality);
				logger.debug( "ADD funcionality:"+lowFunctionality.getName() );
			}
			}
			tx.commit();
		
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT.Size="+lowFunctList.size() );
		return lowFunctList;
	}
	
	/**
	 * Load root low functionality.
	 * 
	 * @param recoverBIObjects the recover bi objects
	 * 
	 * @return the low functionality
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadRootLowFunctionality(boolean)
	 */
	public LowFunctionality loadRootLowFunctionality(boolean recoverBIObjects)	throws EMFUserError {
		logger.debug( "IN" );
		LowFunctionality lowFunctionaliy = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			/* ********* start luca changes *************** */
			//Criterion filters = Expression.isNull("parentFunct");
			Criterion filters = Expression.and(
									Expression.isNull("parentFunct"),
									Expression.eq("functTypeCd", "LOW_FUNCT"));
			/* ************ end luca changes ************** */
			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			criteria.add(filters);
			SbiFunctions hibFunct = (SbiFunctions) criteria.uniqueResult();
			if (hibFunct == null) 
				return null;
			lowFunctionaliy = toLowFunctionality(hibFunct, recoverBIObjects);
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return lowFunctionaliy;
	}
	
	/**
	 * Load low functionality by path.
	 * 
	 * @param functionalityPath the functionality path
	 * @param recoverBIObjects the recover bi objects
	 * 
	 * @return the low functionality
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadLowFunctionalityByPath(java.lang.String)
	 */
	public LowFunctionality loadLowFunctionalityByPath(String functionalityPath, boolean recoverBIObjects) throws EMFUserError {	
		logger.debug( "IN" );
		LowFunctionality lowFunctionaliy = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criterion domainCdCriterrion = Expression.eq("path", functionalityPath);
			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			criteria.add(domainCdCriterrion);
			SbiFunctions hibFunct = (SbiFunctions) criteria.uniqueResult();
			if (hibFunct == null) 
				return null;
			lowFunctionaliy = toLowFunctionality(hibFunct, recoverBIObjects);
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return lowFunctionaliy;
	}

	/**
	 * Modify low functionality.
	 * 
	 * @param aLowFunctionality the a low functionality
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#modifyLowFunctionality(it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality)
	 */
	public void modifyLowFunctionality(LowFunctionality aLowFunctionality)
			throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = (SbiFunctions) aSession.load(
					SbiFunctions.class, aLowFunctionality.getId());
			// delete all roles functionality
			Set oldRoles = hibFunct.getSbiFuncRoles();
			Iterator iterOldRoles = oldRoles.iterator();
			while (iterOldRoles.hasNext()) {
				SbiFuncRole role = (SbiFuncRole) iterOldRoles.next();
				aSession.delete(role);
			}
			// save roles functionality
			Set functRoleToSave = new HashSet();
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "DEV"));
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "TEST"));
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "REL"));
			// set new roles into sbiFunctions
			hibFunct.setSbiFuncRoles(functRoleToSave);
			// set new data
			hibFunct.setDescr(aLowFunctionality.getDescription());
			Criterion domainCdCriterrion = Expression.eq("valueCd",
					aLowFunctionality.getCodType());
			Criteria criteria = aSession.createCriteria(SbiDomains.class);
			criteria.add(domainCdCriterrion);
			SbiDomains functTypeDomain = (SbiDomains) criteria.uniqueResult();
			if (functTypeDomain == null){
				logger.error("The Domain with value_cd="+aLowFunctionality.getCodType()+" does not exist.");
				throw new EMFUserError(EMFErrorSeverity.ERROR, 1037);
			}
			
			hibFunct.setFunctType(functTypeDomain);
			hibFunct.setFunctTypeCd(aLowFunctionality.getCodType());
			hibFunct.setName(aLowFunctionality.getName());
			
			Integer parentId = aLowFunctionality.getParentId();
			Criteria parentCriteria = aSession.createCriteria(SbiFunctions.class);
			Criterion parentCriterion = Expression.eq("functId", parentId);
			parentCriteria.add(parentCriterion);
			SbiFunctions hibParentFunct = (SbiFunctions) parentCriteria.uniqueResult();
			if (hibParentFunct == null){
				logger.error("The parent Functionality with id = " + parentId + " does not exist.");
				throw new EMFUserError(EMFErrorSeverity.ERROR, 1037);
			}
			hibFunct.setParentFunct(hibParentFunct);
			
			// manages code and path
			String previousCode = hibFunct.getCode();
			String previousPath = hibFunct.getPath();
			String newCode = aLowFunctionality.getCode();
			String newPath = aLowFunctionality.getPath();
			if (!previousCode.equals(newCode) || !previousPath.equals(newPath)) {
				// the code or the path was changed, so the path of the current folder and of its child folders 
				// must be changed
				
				// the condition !previousPath.equals(newPath) was added for the following reason:
				// till SpagoBI 1.9.3 a folder may have a path different from parentPath + "/" + code,
				// with this condition those cases are considered and corrected.
				
				// changes the code and path of the current folder
				hibFunct.setCode(newCode);
				hibFunct.setPath(newPath);
				
				// loads sub folders and changes their path
				Criteria subFoldersCriteria = aSession.createCriteria(SbiFunctions.class);
				Criterion subFoldersCriterion = Expression.like("path", previousPath + "/", MatchMode.START);
				subFoldersCriteria.add(subFoldersCriterion);
				List hibList = subFoldersCriteria.list();
				Iterator it = hibList.iterator();
				while (it.hasNext()) {
					SbiFunctions aSbiFunctions = (SbiFunctions) it.next();
					String oldPath = aSbiFunctions.getPath();
					String unchanged = oldPath.substring(previousPath.length());
					aSbiFunctions.setPath(newPath + unchanged);
				}
			}
			
			// commit all changes
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
	}

	/**
	 * Saves all roles for a functionality, using session and state information.
	 * The state for a functionality can be Developing, Testing and execution and 
	 * each state has its own roles.
	 * 
	 * @param aSession The current session object
	 * @param hibFunct The functionality hibernate object
	 * @param aLowFunctionality The Low Functionality object
	 * @param state The string defining the state
	 * @return A collection object containing all roles 
	 * @throws EMFUserError 
	 * 
	 */
	private Set saveRolesFunctionality(Session aSession, SbiFunctions hibFunct, LowFunctionality aLowFunctionality, String state) throws EMFUserError {
		Set functRoleToSave = new HashSet();
		Criterion domainCdCriterrion = null;
		Criteria criteria = null;	
		criteria = aSession.createCriteria(SbiDomains.class);
		domainCdCriterrion = Expression.eq("valueCd", state);
		criteria.add(domainCdCriterrion);
		SbiDomains devStateDomain = (SbiDomains)criteria.uniqueResult();
		if (devStateDomain == null){
			logger.error("The Domain with value_cd="+state+" does not exist.");
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1039);
		}
		Role[] roles = null;
		if(state.equalsIgnoreCase("DEV")) {
			roles = aLowFunctionality.getDevRoles();
		} else if(state.equalsIgnoreCase("TEST")) {
			roles = aLowFunctionality.getTestRoles();
		} else if(state.equalsIgnoreCase("REL")) {
			roles = aLowFunctionality.getExecRoles();
		}
		for(int i=0; i<roles.length; i++) {
			Role role = roles[i];
			domainCdCriterrion = Expression.eq("name", role.getName());
			criteria = aSession.createCriteria(SbiExtRoles.class);
			criteria.add(domainCdCriterrion);
			SbiExtRoles hibRole = (SbiExtRoles)criteria.uniqueResult();
			SbiFuncRoleId sbifuncroleid = new SbiFuncRoleId();
			sbifuncroleid.setFunction(hibFunct);
			sbifuncroleid.setState(devStateDomain);
			sbifuncroleid.setRole(hibRole);
			SbiFuncRole sbifuncrole = new SbiFuncRole();
			sbifuncrole.setId(sbifuncroleid);
			sbifuncrole.setStateCd(devStateDomain.getValueCd());
			aSession.save(sbifuncrole);
			functRoleToSave.add(sbifuncrole);
		}
		return functRoleToSave;
	}
	
	
	/**
	 * Insert low functionality.
	 * 
	 * @param aLowFunctionality the a low functionality
	 * @param profile the profile
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#insertLowFunctionality(it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality, it.eng.spago.security.IEngUserProfile)
	 */
	public void insertLowFunctionality(LowFunctionality aLowFunctionality,
			IEngUserProfile profile) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = new SbiFunctions();
			hibFunct.setCode(aLowFunctionality.getCode());
			hibFunct.setDescr(aLowFunctionality.getDescription());
			Criterion domainCdCriterrion = Expression.eq("valueCd",
					aLowFunctionality.getCodType());
			Criteria criteria = aSession.createCriteria(SbiDomains.class);
			criteria.add(domainCdCriterrion);
			SbiDomains functTypeDomain = (SbiDomains) criteria.uniqueResult();
			if (functTypeDomain == null){
				logger.error("The Domain with value_cd="+aLowFunctionality.getCodType()+" does not exist.");
				throw new EMFUserError(EMFErrorSeverity.ERROR, 1038);
			}
			hibFunct.setFunctType(functTypeDomain);
			hibFunct.setFunctTypeCd(aLowFunctionality.getCodType());
			hibFunct.setName(aLowFunctionality.getName());
			hibFunct.setPath(aLowFunctionality.getPath());
			
			Integer parentId = aLowFunctionality.getParentId();
			SbiFunctions hibParentFunct = null;
			if (parentId != null) {
				// if it is not the root controls if the parent functionality exists
				Criteria parentCriteria = aSession.createCriteria(SbiFunctions.class);
				Criterion parentCriterion = Expression.eq("functId", parentId);
				parentCriteria.add(parentCriterion);
				hibParentFunct = (SbiFunctions) parentCriteria.uniqueResult();
				if (hibParentFunct == null){
					logger.error("The parent Functionality with id = " + parentId + " does not exist.");
					throw new EMFUserError(EMFErrorSeverity.ERROR, 1038);
				}
			}
			// if it is the root the parent functionality is null
			hibFunct.setParentFunct(hibParentFunct);

			// manages prog column that determines the folders order
			if (hibParentFunct == null) hibFunct.setProg(new Integer(1));
			else {
				// loads sub functionalities
				//Query hibQuery = aSession.createQuery("select max(s.prog) from SbiFunctions s where s.parentFunct.functId = " + parentId);
				Query hibQuery = aSession.createQuery("select max(s.prog) from SbiFunctions s where s.parentFunct.functId = ?" );
				hibQuery.setInteger(0, parentId.intValue());
				Integer maxProg = (Integer) hibQuery.uniqueResult();
				if (maxProg != null) hibFunct.setProg(new Integer(maxProg.intValue() + 1));
				else hibFunct.setProg(new Integer(1));
			}

			aSession.save(hibFunct);
			// save roles functionality
			Set functRoleToSave = new HashSet();
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "DEV"));
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "TEST"));
			functRoleToSave.addAll(saveRolesFunctionality(aSession, hibFunct,
					aLowFunctionality, "REL"));
			// set new roles into sbiFunctions
			hibFunct.setSbiFuncRoles(functRoleToSave);

			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
			}
		}

	}

	/**
	 * Erase low functionality.
	 * 
	 * @param aLowFunctionality the a low functionality
	 * @param profile the profile
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#eraseLowFunctionality(it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality, it.eng.spago.security.IEngUserProfile)
	 */
	public void eraseLowFunctionality(LowFunctionality aLowFunctionality, IEngUserProfile profile) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			if(hasChild(aLowFunctionality.getId())) {
				HashMap params = new HashMap();
				params.put(AdmintoolsConstants.PAGE, BIObjectsModule.MODULE_PAGE);
				//params.put(SpagoBIConstants.ACTOR, SpagoBIConstants.ADMIN_ACTOR);
				params.put(SpagoBIConstants.OPERATION, SpagoBIConstants.FUNCTIONALITIES_OPERATION);
				throw new EMFUserError(EMFErrorSeverity.ERROR, 1000, new Vector(), params);
			}
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = (SbiFunctions) aSession.load(
					SbiFunctions.class, aLowFunctionality.getId());
			Set oldRoles = hibFunct.getSbiFuncRoles();
			Iterator iterOldRoles = oldRoles.iterator();
			while (iterOldRoles.hasNext()) {
				SbiFuncRole role = (SbiFuncRole) iterOldRoles.next();
				aSession.delete(role);
			}
			
			// update prog column in other functions
			//String hqlUpdateProg = "update SbiFunctions s set s.prog = (s.prog - 1) where s.prog > " 
			//	+ hibFunct.getProg() + " and s.parentFunct.functId = " + hibFunct.getParentFunct().getFunctId();
			String hqlUpdateProg = "update SbiFunctions s set s.prog = (s.prog - 1) where s.prog > ? " 
				+ " and s.parentFunct.functId = ?" ;
			Query query = aSession.createQuery(hqlUpdateProg);
			query.setInteger(0, hibFunct.getProg().intValue());
			query.setInteger(1, hibFunct.getParentFunct().getFunctId().intValue());
			query.executeUpdate();
			
			aSession.delete(hibFunct);
			
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} catch (EMFUserError emfue) {
			if (tx != null)
				tx.rollback();
			throw emfue;
		} catch (Exception e) {
			logException(e);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if(aSession != null)
				if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
			}
		}
	}

	/**
	 * From the Hibernate Low Functionality object at input, gives the corrispondent
	 * <code>LowFunctionality</code> object.
	 * 
	 * @param hibFunct The Hibernate Low Functionality object
	 * @param recoverBIObjects If true the <code>LowFunctionality</code> at output will have the
	 * list of contained <code>BIObject</code> objects
	 * 
	 * @return the corrispondent output <code>LowFunctionality</code>
	 */
	public LowFunctionality toLowFunctionality(SbiFunctions hibFunct, boolean recoverBIObjects){
		logger.debug( "IN" );
		LowFunctionality lowFunct = new LowFunctionality();
		lowFunct.setId(hibFunct.getFunctId());
		logger.debug( "ID="+hibFunct.getFunctId().toString() );
		lowFunct.setCode(hibFunct.getCode());
		lowFunct.setCodType(hibFunct.getFunctTypeCd());
		lowFunct.setDescription(hibFunct.getDescr());
		lowFunct.setName(hibFunct.getName());
		logger.debug( "NAME="+hibFunct.getName() );
		lowFunct.setPath(hibFunct.getPath());
		lowFunct.setProg(hibFunct.getProg());
		SbiFunctions parentFuntionality = hibFunct.getParentFunct();
		if (parentFuntionality != null)	
			// if it is not the root find the id of the parent functionality
			lowFunct.setParentId(parentFuntionality.getFunctId());
		else 
			// if it is the root set the parent id to null
			lowFunct.setParentId(null);
		
		List devRolesList = new ArrayList();
		List testRolesList = new ArrayList();
		List execRolesList = new ArrayList();
		
		Set roles = hibFunct.getSbiFuncRoles();
		if (roles!=null){
        		logger.debug( "getSbiFuncRoles() size="+roles.size() );
        		Iterator iterRoles = roles.iterator();
        		while(iterRoles.hasNext()) {
        			SbiFuncRole hibfuncrole = (SbiFuncRole)iterRoles.next();
        		    SbiExtRoles hibRole = hibfuncrole.getId().getRole();
        		    SbiDomains hibState = hibfuncrole.getId().getState();
        		    logger.debug( "hibfuncrole.getId().getRole().getName()="+hibRole.getName() );
        		    RoleDAOHibImpl roleDAO =  new RoleDAOHibImpl();
        		    Role role = roleDAO.toRole(hibRole);
        		    
        		    String state = hibState.getValueCd();
        		    if(state.equals("DEV")) {
        		    	devRolesList.add(role);
        		    } else if(state.equals("TEST")) {
        		    	testRolesList.add(role);
        		    } else if(state.equals("REL")) {
        		    	execRolesList.add(role);
        		    }
        		}
		}
		
		Role[] execRoles = new Role[execRolesList.size()];
		Role[] devRoles = new Role[devRolesList.size()];
		Role[] testRoles = new Role[testRolesList.size()];

		for (int i = 0; i < execRolesList.size(); i++)
			execRoles[i] = (Role) execRolesList.get(i);
		for (int i = 0; i < testRolesList.size(); i++)
			testRoles[i] = (Role) testRolesList.get(i);
		for (int i = 0; i < devRolesList.size(); i++)
			devRoles[i] = (Role) devRolesList.get(i);

		lowFunct.setDevRoles(devRoles);
		lowFunct.setTestRoles(testRoles);
		lowFunct.setExecRoles(execRoles);
		
		List biObjects = new ArrayList();
		if (recoverBIObjects) {
			BIObjectDAOHibImpl objDAO = new BIObjectDAOHibImpl();
			Set hibObjFuncs = hibFunct.getSbiObjFuncs();
			for (Iterator it = hibObjFuncs.iterator(); it.hasNext(); ) {
				SbiObjFunc hibObjFunc = (SbiObjFunc) it.next();
				BIObject object = objDAO.toBIObject(hibObjFunc.getId().getSbiObjects());
				biObjects.add(object);
			}
		}
		
		lowFunct.setBiObjects(biObjects);
		logger.debug( "OUT" );
		return lowFunct;
	}

	
	/**
	 * Exist by code.
	 * 
	 * @param code the code
	 * 
	 * @return the integer
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#existByCode(java.lang.String)
	 */
	public Integer existByCode(String code) throws EMFUserError {
		Integer id = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criterion domainCdCriterrion = Expression.eq("code", code);
			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			criteria.add(domainCdCriterrion);
			SbiFunctions func = (SbiFunctions) criteria.uniqueResult();
			if (func != null) {
				id = func.getFunctId();
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		return id;
	}

	/**
	 * Load all low functionalities.
	 * 
	 * @param recoverBIObjects the recover bi objects
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadAllLowFunctionalities(boolean)
	 */
	public List loadAllLowFunctionalities(boolean recoverBIObjects) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String username = null;
			IEngUserProfile profile=null;
			try {
				RequestContainer reqCont = RequestContainer.getRequestContainer();
				if(reqCont!=null){
					SessionContainer sessCont = reqCont.getSessionContainer();
					SessionContainer permCont = sessCont.getPermanentContainer();
					profile = (IEngUserProfile)permCont.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
					username = (String)((UserProfile)profile).getUserId();
				}
			} catch (Exception e) {
				logger.error("Error while recovering user profile", e);
			}
			// Giulio: if user has admin functionality "ViewMyFolderAdmin" he can view all Low_func and all user func
			// else he can view only his personal userFunc
			
			Query hibQuery = null;
			try {
				if(profile!=null && profile.isAbleToExecuteAction("ViewMyFolderAdmin")){
					hibQuery = aSession.createQuery(" from SbiFunctions s where s.functTypeCd = 'LOW_FUNCT' or s.functTypeCd = 'USER_FUNCT' order by s.parentFunct.functId, s.prog");
								}
				else if(username==null) {
					hibQuery = aSession.createQuery(" from SbiFunctions s where s.functTypeCd = 'LOW_FUNCT' order by s.parentFunct.functId, s.prog");
				} else {
					//hibQuery = aSession.createQuery(" from SbiFunctions s where s.functTypeCd = 'LOW_FUNCT' or s.path like '/"+username+"' order by s.parentFunct.functId, s.prog");
					hibQuery = aSession.createQuery(" from SbiFunctions s where s.functTypeCd = 'LOW_FUNCT' or s.path like ? order by s.parentFunct.functId, s.prog");
					hibQuery.setString(0, "/"+username);
				}
			} catch (EMFInternalError e) {
			    logger.error("EMFInternalError while access to DBMS", e);
			}
			
			/* ********* end luca changes ***************** */
			
			List hibList = hibQuery.list();
			
			Iterator it = hibList.iterator();

			while (it.hasNext()) {
				realResult.add(toLowFunctionality((SbiFunctions) it.next(), recoverBIObjects));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return realResult;
	}
	
	/**
	 * Load sub low functionalities.
	 * 
	 * @param initialPath the initial path
	 * @param recoverBIObjects the recover bi objects
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadSubLowFunctionalities(java.lang.String, boolean)
	 */
	public List loadSubLowFunctionalities(String initialPath, boolean recoverBIObjects) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();

			// loads folder corresponding to initial path
			Criterion domainCdCriterrion = Expression.eq("path",initialPath);
			Criteria criteria = aSession.createCriteria(SbiFunctions.class);
			criteria.add(domainCdCriterrion);
			SbiFunctions hibFunct = (SbiFunctions) criteria.uniqueResult();
			if (hibFunct == null) return null;
			realResult.add(toLowFunctionality(hibFunct, recoverBIObjects));
					
			// loads sub functionalities
			
			/* ********* start luca changes *************** */
			//Query hibQuery = aSession.createQuery(" from SbiFunctions s where s.path like '" + initialPath + "/%' order by s.parentFunct.functId, s.prog");
			Query hibQuery = aSession.createQuery(" from SbiFunctions s where s.path like ? order by s.parentFunct.functId, s.prog");
			//Query hibQuery = aSession.createQuery(" from SbiFunctions s where s.functTypeCd = 'LOW_FUNCT' and s.path like '" + initialPath + "/%' order by s.parentFunct.functId, s.prog");
			/* ********* end luca changes ***************** */
			hibQuery.setString(0, initialPath + "/%");
			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toLowFunctionality((SbiFunctions) it.next(), recoverBIObjects));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return realResult;
	}
	
	/**
	 * Checks for child.
	 * 
	 * @param id the id
	 * 
	 * @return true, if checks for child
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#hasChild(java.lang.String)
	 */
	public boolean hasChild(Integer id) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			
			// controls if there are sub folders
			Criterion parentChildCriterion = Expression.eq("parentFunct.functId", id);
			Criteria parentCriteria = aSession.createCriteria(SbiFunctions.class);
			parentCriteria.add(parentChildCriterion);
			List childFunctions = parentCriteria.list();
			if (childFunctions != null && childFunctions.size() > 0) return true;
			
			// controls if there are objects inside
			SbiFunctions hibFunct = (SbiFunctions) aSession.load(SbiFunctions.class, id);
			Set hibObjfunctions = hibFunct.getSbiObjFuncs();
			if (hibObjfunctions != null && hibObjfunctions.size() > 0) return true;
//			Criterion objectChildCriterion = Expression.eq("sbiFunction.functId", id);
//			Criteria objectCriteria = aSession.createCriteria(SbiObjFunc.class);
//			objectCriteria.add(objectChildCriterion);
//			List childObjects = objectCriteria.list();
//			if (childObjects != null && childObjects.size() > 0) return true;
			
			tx.commit();
			
			return false;
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
				
			}
		}
	}
	
	/**
	 * Deletes a set of inconsistent roles reference from the database,
	 * in order to keep functionalities tree permissions consistence.
	 * 
	 * @param rolesSet the set containing the roles to erase
	 * 
	 * @throws EMFUserError the EMF user error
	 */
	public void deleteInconsistentRoles (Set rolesSet) throws EMFUserError{
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		String hql = null;
		Query hqlQuery = null;
		List functions = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
		
			Iterator i = rolesSet.iterator();
			while (i.hasNext()){
				ArrayList rolesArray = (ArrayList)i.next();
				Integer functId = (Integer)rolesArray.get(0);
				Integer roleId = (Integer)rolesArray.get(1);
				String stateCD = (String)rolesArray.get(2);
				SbiFunctions sbiFunct = new SbiFunctions();
				sbiFunct.setFunctId(functId);
		
				//hql = " from SbiFuncRole as funcRole where funcRole.id.function = '" + sbiFunct.getFunctId() + 
				//"' AND  funcRole.id.role = '"+ roleId +"' AND funcRole.stateCd ='"+stateCD+"'"; 
				hql = " from SbiFuncRole as funcRole where funcRole.id.function = ? " + 
				"' AND  funcRole.id.role = ?  AND funcRole.stateCd = ?"; 
			
				hqlQuery = aSession.createQuery(hql);
				hqlQuery.setInteger(0, sbiFunct.getFunctId().intValue());
				hqlQuery.setInteger(1, roleId.intValue());
				hqlQuery.setString(2, stateCD);
				functions = hqlQuery.list();
			
				Iterator it = functions.iterator();
				while (it.hasNext()) {
					aSession.delete((SbiFuncRole) it.next());
				}	
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );
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
				logger.debug( "OUT" );
			}
		}
		
	}



	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#loadChildFunctionalities(java.lang.Integer, boolean)
	 */
	public List loadChildFunctionalities(Integer parentId, boolean recoverBIObjects) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
					
			// loads sub functionalities
			//Query hibQuery = aSession.createQuery(" from SbiFunctions s where s.parentFunct.functId = " + parentId);
			Query hibQuery = aSession.createQuery(" from SbiFunctions s where s.parentFunct.functId = ?" );
			hibQuery.setInteger(0, parentId.intValue());
			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toLowFunctionality((SbiFunctions) it.next(), recoverBIObjects));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug( "OUT" );
		return realResult;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#moveDownLowFunctionality(java.lang.Integer)
	 */
	public void moveDownLowFunctionality(Integer functionalityID) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = (SbiFunctions) aSession.load(SbiFunctions.class, functionalityID);
			Integer oldProg = hibFunct.getProg();
			Integer newProg = new Integer(oldProg.intValue() + 1);
			
			//String upperFolderHql = "from SbiFunctions s where s.prog = " + newProg.toString() + 
			//	" and s.parentFunct.functId = " + hibFunct.getParentFunct().getFunctId().toString();
			String upperFolderHql = "from SbiFunctions s where s.prog = ? "+ 
			" and s.parentFunct.functId = ?" ;
			Query query = aSession.createQuery(upperFolderHql);
			query.setInteger(0, newProg.intValue());			
			query.setInteger(1, hibFunct.getParentFunct().getFunctId().intValue());
			SbiFunctions hibUpperFunct = (SbiFunctions) query.uniqueResult();
			if (hibUpperFunct == null) {
				logger.error("The function with prog [" + newProg + "] does not exist.");
				return;
			}
			
			hibFunct.setProg(newProg);
			hibUpperFunct.setProg(oldProg);
			
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
			}
		}
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO#moveUpLowFunctionality(java.lang.Integer)
	 */
	public void moveUpLowFunctionality(Integer functionalityID) throws EMFUserError {
		logger.debug( "IN" );
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiFunctions hibFunct = (SbiFunctions) aSession.load(SbiFunctions.class, functionalityID);
			Integer oldProg = hibFunct.getProg();
			Integer newProg = new Integer(oldProg.intValue() - 1);
			
			//String upperFolderHql = "from SbiFunctions s where s.prog = " + newProg.toString() + 
			//	" and s.parentFunct.functId = " + hibFunct.getParentFunct().getFunctId().toString();
			String upperFolderHql = "from SbiFunctions s where s.prog = ? " + 
			" and s.parentFunct.functId = ? " ;
			Query query = aSession.createQuery(upperFolderHql);
			query.setInteger(0, newProg.intValue());
			query.setInteger(1,  hibFunct.getParentFunct().getFunctId().intValue());
			SbiFunctions hibUpperFunct = (SbiFunctions) query.uniqueResult();
			if (hibUpperFunct == null) {
				logger.error("The function with prog [" + newProg + "] does not exist.");
				return;
			}
			
			hibFunct.setProg(newProg);
			hibUpperFunct.setProg(oldProg);
			
			tx.commit();
		} catch (HibernateException he) {
			logger.error( "HibernateException",he );

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
				logger.debug( "OUT" );
			}
		}
	}

}
