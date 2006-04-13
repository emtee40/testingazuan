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
 * Created on 21-giu-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.bo.dao.hibernate;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.cms.CmsManager;
import it.eng.spago.cms.CmsNode;
import it.eng.spago.cms.CmsProperty;
import it.eng.spago.cms.CmsVersion;
import it.eng.spago.cms.exceptions.BuildOperationException;
import it.eng.spago.cms.exceptions.OperationExecutionException;
import it.eng.spago.cms.operations.DeleteOperation;
import it.eng.spago.cms.operations.GetOperation;
import it.eng.spago.cms.operations.RestoreOperation;
import it.eng.spago.cms.operations.SetOperation;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.bo.BIObject;
import it.eng.spagobi.bo.BIObjectParameter;
import it.eng.spagobi.bo.Parameter;
import it.eng.spagobi.bo.Role;
import it.eng.spagobi.bo.TemplateVersion;
import it.eng.spagobi.bo.dao.DAOFactory;
import it.eng.spagobi.bo.dao.IBIObjectDAO;
import it.eng.spagobi.bo.dao.IParameterDAO;
import it.eng.spagobi.constants.AdmintoolsConstants;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.metadata.SbiDomains;
import it.eng.spagobi.metadata.SbiEngines;
import it.eng.spagobi.metadata.SbiObjPar;
import it.eng.spagobi.metadata.SbiObjects;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TreeMap;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;

/**
 *	Defines the Hibernate implementations for all DAO methods,
 *  for a BI Object.  
 * 
 * @author Zoppello
 */
public class BIObjectDAOHibImpl extends AbstractHibernateDAO implements
		IBIObjectDAO {

	/** 
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#loadBIObjectForExecutionByPathAndRole(java.lang.String, java.lang.String)
	 */
	public BIObject loadBIObjectForExecutionByPathAndRole(String path, String role) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		BIObject biObject = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			biObject = loadBIObjectForDetail(path);
			String hql = "from SbiObjPar s where s.sbiObject.biobjId = " + biObject.getId();
			Query hqlQuery = aSession.createQuery(hql);
			List hibObjectPars = hqlQuery.list();
			SbiObjPar hibObjPar = null;
			Iterator it = hibObjectPars.iterator();
			BIObjectParameter tmpBIObjectParameter = null;
			BIObjectParameterDAOHibImpl aBIObjectParameterDAOHibImpl = new BIObjectParameterDAOHibImpl();
			IParameterDAO aParameterDAO = DAOFactory.getParameterDAO();
			List biObjectParameters = new ArrayList();
			Parameter aParameter = null;
			while (it.hasNext()) {
				hibObjPar = (SbiObjPar) it.next();
				tmpBIObjectParameter = aBIObjectParameterDAOHibImpl.toBIObjectParameter(hibObjPar);
				aParameter = aParameterDAO.loadForExecutionByParameterIDandRoleName(
								tmpBIObjectParameter.getParID(), role);
				tmpBIObjectParameter.setParID(aParameter.getId());
				tmpBIObjectParameter.setParameter(aParameter);
				biObjectParameters.add(tmpBIObjectParameter);
			}
			biObject.setBiObjectParameters(biObjectParameters);
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
		return biObject;
	}

	
	
	
	
	/**
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#loadBIObjectForDetail(java.lang.Integer)
	 */
	public BIObject loadBIObjectForDetail(Integer biObjectID) throws EMFUserError {
		BIObject toReturn = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = (SbiObjects)aSession.load(SbiObjects.class,  biObjectID);
			toReturn = toBIObject(hibBIObject);
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
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#loadBIObjectForDetail(java.lang.String)
	 */
	public BIObject loadBIObjectForDetail(String path) throws EMFUserError {

		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			path = path.toUpperCase();
			String hql = " from SbiObjects where upper(path) = '"+path+"'";
			Query hqlQuery = aSession.createQuery(hql);
			SbiObjects hibObject = (SbiObjects)hqlQuery.uniqueResult();
			if (hibObject == null) return null;
			biObject = toBIObject(hibObject);
			gatherCMSInformation(biObject);
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
		return biObject;
	}
	
	
	
	
	
	/**
	 * Load the CMS Information of the biObject
	 * 
	 * @param biObject
	 */
	public void gatherCMSInformation(BIObject biObject) throws EMFUserError {
		
		//Operazioni del CMS -- Ripreso dal codice dell'altro dao
		RequestContainer requestContainer =  RequestContainer.getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		SessionContainer permSession = session.getPermanentContainer();
		IEngUserProfile profile = (IEngUserProfile)permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		try{
			GetOperation getOp = new GetOperation();
			getOp.setPath(biObject.getPath() + "/template" );
			getOp.setRetriveContentInformation("true");
			getOp.setRetrivePropertiesInformation("true");
			getOp.setRetriveVersionsInformation("true");
			getOp.setRetriveChildsInformation("false");
            CmsManager manager = new CmsManager();
			CmsNode cmsnode = manager.execGetOperation(getOp);
			if(cmsnode != null){
				String currentVerStr = cmsnode.getVersion();
				List versions = cmsnode.getVersions();
				Iterator iterVer = versions.iterator();
				//ArrayList templates = new ArrayList();
				TreeMap templates = new TreeMap();
				TemplateVersion currentVer = null;
				while(iterVer.hasNext()) {
					CmsVersion ver = (CmsVersion)iterVer.next();
					String nameVer = ver.getName();
					String dateVer = ver.getDataCreation();
					// retrive version
					getOp.setVersion(nameVer);
					CmsNode cmsnodever = manager.execGetOperation(getOp);
					List properties = cmsnodever.getProperties();
					Iterator iterProps = properties.iterator();
					String nameFile = "";
					while(iterProps.hasNext()) {
						CmsProperty prop = (CmsProperty)iterProps.next();
						String nameProp = prop.getName();
						if(nameProp.equalsIgnoreCase("fileName")) 
							nameFile = prop.getStringValues()[0];
					}
					TemplateVersion tempVer = new TemplateVersion();
					tempVer.setDataLoad(dateVer);
					tempVer.setVersionName(nameVer);
					tempVer.setNameFileTemplate(nameFile);
					//templates.add(tempVer);
					templates.put(nameVer, tempVer);
					if(nameVer.equalsIgnoreCase(currentVerStr)) {
						currentVer = tempVer;
					}
				}
				biObject.setTemplateVersions(templates);
				biObject.setCurrentTemplateVersion(currentVer);
			}else{
				biObject.setTemplateVersions(new TreeMap());
				TemplateVersion tv = new TemplateVersion();
				tv.setVersionName("");
				biObject.setCurrentTemplateVersion(tv);
			}
		} catch (Exception ex) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE, "BIObjectDAOImpl",
				"loadByPath", "Cannot recover detail information", ex);
				throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		
	}

	
	
	
	
	
	
	
	
	
	/**
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#loadBIObjectForTree(java.lang.String)
	 */
	public BIObject loadBIObjectForTree(String path) throws EMFUserError {
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
							"loadBIObjectForTree", "start method for path:" + path);
		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
					"loadBIObjectForTree", "hibernate session obtained:" + aSession);
			tx = aSession.beginTransaction();
			SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
					"loadBIObjectForTree", "hibernate transaction started");
			Criterion domainCdCriterrion = Expression.eq("path", path);
			Criteria criteria = aSession.createCriteria(SbiObjects.class);
			criteria.add(domainCdCriterrion);
			SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
					"loadBIObjectForTree", "hibernate criteria filled:" + criteria);
			SbiObjects hibObject = (SbiObjects) criteria.uniqueResult();
			SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
					"loadBIObjectForTree", "hibernate object retrived:" + hibObject);
			if (hibObject == null) {
				return null;
			}
			biObject = toBIObject(hibObject);
			tx.commit();
		} catch (HibernateException he) {
			logException(he);
			if (tx != null)
				tx.rollback();
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
					"loadBIObjectForTree", "hibernate exception:" + he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		SpagoBITracer.debug(SpagoBIConstants.NAME_MODULE, "BIObjectDAOImpl",
				"loadBIObjectForTree", "end method for path:" + path);
		return biObject;	
	}

	
	
	
	
	
	/**
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#modifyBIObject(it.eng.spagobi.bo.BIObject)
	 */
	public void modifyBIObject(BIObject obj) throws EMFUserError {
		internalModify(obj, true);
	}

	/**
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#modifyBIObjectWithoutVersioning(it.eng.spagobi.bo.BIObject)
	 */
	public void modifyBIObjectWithoutVersioning(BIObject obj)
			throws EMFUserError {
		internalModify(obj, false);

	}
	
	/**
	 * Updates the CMS repository if the user has loaded a file template. If he has,
	 * the boolean input parameter <code>version</code> is true and the CNS is uploaded,
	 * else not.
	 * 
	 * @param biObject The BI Object as input
	 * @param version The boolean input parameter
	 * @throws EMFUserError If any exception occurred
	 */
	private void internalModify(BIObject biObject, boolean version)
			throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = (SbiObjects) aSession.load(
					SbiObjects.class, biObject.getId());
			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,
					biObject.getEngine().getId());
			hibBIObject.setSbiEngines(hibEngine); // TO REVIEW
			hibBIObject.setDescr(biObject.getDescription());
			hibBIObject.setLabel(biObject.getLabel());
			hibBIObject.setName(biObject.getName());
			hibBIObject.setEncrypt(new Short(biObject.getEncrypt().shortValue()));
			hibBIObject.setRelName(biObject.getRelName());
			SbiDomains hibState = (SbiDomains) aSession.load(SbiDomains.class,
					biObject.getStateID());
			hibBIObject.setState(hibState);
			hibBIObject.setStateCode(biObject.getStateCode());
			SbiDomains hibObjectType = (SbiDomains) aSession.load(
					SbiDomains.class, biObject.getBiObjectTypeID());
			hibBIObject.setObjectType(hibObjectType);
			hibBIObject.setObjectTypeCode(biObject.getBiObjectTypeCode());
			hibBIObject.setPath(biObject.getPath());
			// Copiato dall'altro codice
			RequestContainer requestContainer = RequestContainer
					.getRequestContainer();
			SessionContainer session = requestContainer.getSessionContainer();
			SessionContainer permSession = session.getPermanentContainer();
			IEngUserProfile profile = (IEngUserProfile) permSession
					.getAttribute(IEngUserProfile.ENG_USER_PROFILE);

			CmsManager manager = new CmsManager();
			if (version) {
				// if user has load a file template update the cms reporitory
				if(biObject.getTemplate().getFileContent().length > 0) {
					SetOperation setOp = new SetOperation();
					setOp.setContent(new ByteArrayInputStream(biObject.getTemplate().getFileContent()));
					setOp.setType(SetOperation.TYPE_CONTENT);
					setOp.setPath(biObject.getPath() + "/template");
					// define properties list
					List properties = new ArrayList();
					String[] nameFilePropValues = new String[] { biObject.getTemplate().getFileName() };
					String today = new Date().toString();
					String[] datePropValues = new String[] { today };
					CmsProperty propFileName = new CmsProperty("fileName", nameFilePropValues);
					CmsProperty propDateLoad = new CmsProperty("dateLoad", datePropValues);
					properties.add(propFileName);
					properties.add(propDateLoad);
                    setOp.setProperties(properties);
                    // exec operation
					manager.execSetOperation(setOp);
				} else if (biObject.getNameCurrentTemplateVersion() != null) {
					GetOperation getOp = new GetOperation();
					getOp.setPath(biObject.getPath() + "/template");
					getOp.setRetriveChildsInformation("false");
					getOp.setRetriveContentInformation("false");
					getOp.setRetrivePropertiesInformation("false");
					getOp.setRetriveVersionsInformation("false");
					CmsNode cmsnode = manager.execGetOperation(getOp);
					String verName = cmsnode.getVersion();
					if(!biObject.getNameCurrentTemplateVersion().equals(verName)) {
						RestoreOperation resOp = new RestoreOperation();
						resOp.setPath(biObject.getPath() + "/template");
						resOp.setVersion(biObject.getNameCurrentTemplateVersion());
						manager.execRestoreOperation(resOp);
					}
				}
			}
			// Clear bytes in memory
			biObject.setTemplate(null);
			tx.commit();
		} catch (OperationExecutionException oe) {

			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"BIObjectDAOImpl", "internalModify",
					"Cannot recover detail information", oe);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} catch (BuildOperationException boe) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"BIObjectDAOImpl", "internalModify",
					"Cannot recover detail information", boe);

			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}  catch (HibernateException he) {
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
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#insertBIObject(it.eng.spagobi.bo.BIObject)
	 */
	public void insertBIObject(BIObject obj) throws EMFUserError {
		BIObject biObject = obj;

		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = new SbiObjects();
			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,
					biObject.getEngine().getId());
			hibBIObject.setSbiEngines(hibEngine); 
			hibBIObject.setDescr(biObject.getDescription());
			hibBIObject.setLabel(biObject.getLabel());
			hibBIObject.setName(biObject.getName());
			hibBIObject
					.setEncrypt(new Short(biObject.getEncrypt().shortValue()));
			hibBIObject.setRelName(biObject.getRelName());
			SbiDomains hibState = (SbiDomains) aSession.load(SbiDomains.class,
					biObject.getStateID());
			hibBIObject.setState(hibState);
			hibBIObject.setStateCode(biObject.getStateCode());
			SbiDomains hibObjectType = (SbiDomains) aSession.load(
					SbiDomains.class, biObject.getBiObjectTypeID());
			hibBIObject.setObjectType(hibObjectType);
			hibBIObject.setObjectTypeCode(biObject.getBiObjectTypeCode());
			hibBIObject.setPath(biObject.getPath());
			aSession.save(hibBIObject);
			RequestContainer requestContainer = RequestContainer
					.getRequestContainer();
			SessionContainer session = requestContainer.getSessionContainer();
			SessionContainer permSession = session.getPermanentContainer();
			IEngUserProfile profile = (IEngUserProfile) permSession
					.getAttribute(IEngUserProfile.ENG_USER_PROFILE);

			
			CmsManager manager = new CmsManager();
			SetOperation setOp = new SetOperation();
			setOp.setPath(biObject.getPath());
			setOp.setType(SetOperation.TYPE_CONTAINER);
			setOp.setEraseOldProperties(true);
			// define properties
			List properties = new ArrayList();
			String[] typePropValues = new String[] { biObject.getBiObjectTypeCode() };
			CmsProperty proptype = new CmsProperty(AdmintoolsConstants.NODE_CMS_TYPE, typePropValues);
			properties.add(proptype);
			setOp.setProperties(properties);
			manager.execSetOperation(setOp);
			// Set the report template
			if (biObject.getTemplate().getFileContent().length > 0) {
				setOp.setContent(new ByteArrayInputStream(biObject.getTemplate().getFileContent()));
				setOp.setType(SetOperation.TYPE_CONTENT);
				setOp.setPath(biObject.getPath() + "/template");
				// define properties
				properties =  new ArrayList();
				String[] nameFilePropValues = new String[] { biObject.getTemplate().getFileName() };
				String today = new Date().toString();
				String[] datePropValues = new String[] { today };
				CmsProperty propFileName = new CmsProperty("fileName", nameFilePropValues);
				CmsProperty propDateLoad = new CmsProperty("dateLoad", datePropValues);
				properties.add(propFileName);
				properties.add(propDateLoad);
				setOp.setProperties(properties);
				manager.execSetOperation(setOp);
			}
			// Clear bytes in memory
			biObject.setTemplate(null);
			tx.commit();
			
			
			
		} catch (OperationExecutionException oe) {

			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"BIObjectDAOImpl", "internalModify",
					"Cannot recover detail information", oe);

			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} catch (BuildOperationException boe) {
			SpagoBITracer.major(AdmintoolsConstants.NAME_MODULE,
					"BIObjectDAOImpl", "internalModify",
					"Cannot recover detail information", boe);

			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
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
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#eraseBIObject(it.eng.spagobi.bo.BIObject)
	 */
	public void eraseBIObject(BIObject obj) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = (SbiObjects) aSession.load(
					SbiObjects.class, obj.getId());

			Set objPars = hibBIObject.getSbiObjPars();
			Iterator it = objPars.iterator();
			while (it.hasNext()) {
				aSession.delete((SbiObjPar) it.next());
			}
			aSession.delete(hibBIObject);
			
			
            // get profile user
			RequestContainer requestContainer =  RequestContainer.getRequestContainer();
			SessionContainer session = requestContainer.getSessionContainer();
			SessionContainer permSession = session.getPermanentContainer();
			IEngUserProfile profile = (IEngUserProfile)permSession.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
			// erase from cms
			CmsManager manager = new CmsManager();
			DeleteOperation delOp = new DeleteOperation();
			delOp.setPath(obj.getPath());
			manager.execDeleteOperation(delOp);
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
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#getCorrectRolesForExecution(java.lang.String, it.eng.spago.security.IEngUserProfile)
	 */
	public List getCorrectRolesForExecution(String pathReport, IEngUserProfile profile) throws EMFUserError {
		List correctRoles = null;
		try  {
			correctRoles = getCorrectRoles(pathReport, profile.getRoles());
		} catch (EMFInternalError emfie) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, 
								"BIObjectDAOHibImpl", 
								"getCorrectRolesForExecution", 
								"error getting role from the user profile", emfie);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		return correctRoles;
	}

	
	/** 
	 * @see it.eng.spagobi.bo.dao.IBIObjectDAO#getCorrectRolesForExecution(java.lang.String)
	 */
	public List getCorrectRolesForExecution(String pathReport) throws EMFUserError {
		List roles = DAOFactory.getRoleDAO().loadAllRoles();
		List nameRoles = new ArrayList();
		Iterator iterRoles = roles.iterator();
		Role role = null;
		while(iterRoles.hasNext()) {
			role = (Role)iterRoles.next();
			nameRoles.add(role.getName());
		}
		return getCorrectRoles(pathReport, nameRoles);
	}
	
	/**
	 * Gets a list og correct role according to the report at input, identified
	 * by its path
	 * 
	 * @param pathReport	The string representing report's path
	 * @param roles	The collection of all roles
	 * @return The correct roles list
	 * @throws EMFUserError if any exception occurred
	 */
	private List getCorrectRoles(String pathReport, Collection roles) throws EMFUserError {
		Session aSession = null;
		Transaction tx = null;
		Query hqlQuery = null;
		String hql = null;
		List correctRoles = new ArrayList();
		
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			// find all id parameters relative to the objects
			hql = "select par.parId from " +
					     "SbiParameters as par, SbiObjects as obj, SbiObjPar as objpar  " + 
				         "where obj.path = '"+pathReport+"' and " +
				         "      obj.biobjId = objpar.sbiObject.biobjId and " +
				         "      par.parId = objpar.id.sbiParameter.parId ";
			hqlQuery = aSession.createQuery(hql);
			List idParameters = hqlQuery.list();
			
			if(idParameters.size() == 0) {
				// if the object has not parameter associate all the roles can execute the 
				// object correctly and in the same manner. A role for the execution it's mandatory
				// so the application return only the first role and the execution of the object 
				// doesn't need the choice of the execution role but start immediatly.
				correctRoles.add(roles.iterator().next());
				return correctRoles;
			}
			
			Iterator iterRoles = roles.iterator();
			Iterator iterParam = null;
			String role = null;
			String idPar = null;
			List parUses = null;
			// for each role of the user
			while(iterRoles.hasNext()) {
				boolean correct = true;
				role = iterRoles.next().toString();
				iterParam = idParameters.iterator();
				// for each parameter get the number of the modality for the current role
				while(iterParam.hasNext()) {
					idPar = iterParam.next().toString();
					hql = "select puseDet.id.sbiParuse.useId " +
								 "from SbiParuse as puse, " +
								 "     SbiParuseDet as puseDet, " +
								 "     SbiExtRoles as rol  " + 
			        			 "where rol.name = '"+role+"' and " +
			        			 "      puseDet.id.sbiExtRoles.extRoleId = rol.extRoleId and " +
			        			 "      puse.sbiParameters.parId = "+idPar+" and " +
			        			 "		puseDet.id.sbiParuse.useId = puse.useId";
					hqlQuery = aSession.createQuery(hql);
					parUses = hqlQuery.list();
				    // if the modality for the current role and the current parameter are more
					// or less than one the  role can't execute the report and so it isn't
					// correct
					if(parUses.size()!=1) {
				    	correct = false;
				    }
				}
				if(correct) {
					correctRoles.add(role);
				}
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
		return correctRoles;
	}
	
	
	
	/**
	 * From the Hibernate BI object at input, gives the corrispondent BI
	 * object 
	 * 
	 * @param hibBIObject	The Hibernate BI object
	 * @return the corrispondent output <code>BIObject</code>
	 */
	public BIObject toBIObject(SbiObjects hibBIObject){
		
			BIObject aBIObject = new BIObject();
			
			aBIObject.setBiObjectTypeCode(hibBIObject.getObjectTypeCode());
			aBIObject.setBiObjectTypeID(hibBIObject.getObjectType().getValueId());
			
			aBIObject.setDescription(hibBIObject.getDescr());
			aBIObject.setEncrypt(new Integer(hibBIObject.getEncrypt().intValue()));
			
			aBIObject.setEngine(new EngineDAOHibImpl().toEngine(hibBIObject.getSbiEngines()));
			
			aBIObject.setId(hibBIObject.getBiobjId());
			aBIObject.setLabel(hibBIObject.getLabel());
			aBIObject.setName(hibBIObject.getName());
			
			aBIObject.setPath(hibBIObject.getPath());
			aBIObject.setRelName(hibBIObject.getRelName());
			aBIObject.setStateCode(hibBIObject.getStateCode());
			aBIObject.setStateID(hibBIObject.getState().getValueId());
			
			return aBIObject;
	}
	
	/**
	 * Given all parameters for the input hibernate BI object, fills the other
	 * <code>BIObject</code> at input with these parameters.
	 * 
	 * @param aBIObject	The BI object to fill parameters in
	 * @param hibBIObject The Hibernate BI object
	 * @param role
	 */
	public void fillBIObjectParameters(BIObject aBIObject, SbiObjects hibBIObject, String role){
		
		Set  hibBIObjectPars= hibBIObject.getSbiObjPars();
		Iterator it = hibBIObjectPars.iterator();
		SbiObjPar sbiObjPar = null;
		List biObjectParameters = new ArrayList();
		while (it.hasNext()){
			sbiObjPar = (SbiObjPar)it.next();
		
		}
		
		aBIObject.setBiObjectParameters(biObjectParameters);
	}

}
