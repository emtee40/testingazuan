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
 * Created on 21-giu-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.analiticalmodel.document.dao;

import it.eng.spago.base.SourceBean;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjTemplate;
import it.eng.spagobi.analiticalmodel.document.bo.Snapshot;
import it.eng.spagobi.analiticalmodel.document.bo.SubObject;
import it.eng.spagobi.analiticalmodel.document.bo.Viewpoint;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjFunc;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjFuncId;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjPar;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjTemplates;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjects;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFunctions;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.ObjParuse;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.Parameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.BIObjectParameterDAOHibImpl;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IBIObjectParameterDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IObjParuseDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IParameterDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParameters;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.metadata.SbiBinContents;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.engines.config.dao.EngineDAOHibImpl;
import it.eng.spagobi.engines.config.metadata.SbiEngines;
import it.eng.spagobi.engines.documentcomposition.configuration.DocumentCompositionConfiguration;
import it.eng.spagobi.engines.dossier.dao.IDossierPartsTempDAO;
import it.eng.spagobi.engines.dossier.dao.IDossierPresentationsDAO;
import it.eng.spagobi.tools.dataset.metadata.SbiDataSet;
import it.eng.spagobi.tools.datasource.metadata.SbiDataSource;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.Order;
import org.safehaus.uuid.UUID;
import org.safehaus.uuid.UUIDGenerator;

/**
 *	Defines the Hibernate implementations for all DAO methods,
 *  for a BI Object.  
 */
public class BIObjectDAOHibImpl extends AbstractHibernateDAO implements
		IBIObjectDAO {
    
    static private Logger logger = Logger.getLogger(BIObjectDAOHibImpl.class);

	/**
	 * Load bi object for execution by id and role.
	 * 
	 * @param id the id
	 * @param role the role
	 * 
	 * @return the BI object
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectForExecutionByIdAndRole(java.lang.Integer, java.lang.String)
	 */
	public BIObject loadBIObjectForExecutionByIdAndRole(Integer id, String role) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		BIObject biObject = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			biObject = loadBIObjectForDetail(id);
			String hql = "from SbiObjPar s where s.sbiObject.biobjId = " + biObject.getId() + " order by s.priority asc";
			Query hqlQuery = aSession.createQuery(hql);
			List hibObjectPars = hqlQuery.list();
			SbiObjPar hibObjPar = null;
			Iterator it = hibObjectPars.iterator();
			BIObjectParameter tmpBIObjectParameter = null;
			BIObjectParameterDAOHibImpl aBIObjectParameterDAOHibImpl = new BIObjectParameterDAOHibImpl();
			IParameterDAO aParameterDAO = DAOFactory.getParameterDAO();
			List biObjectParameters = new ArrayList();
			Parameter aParameter = null;
			int count = 1;
			while (it.hasNext()) {
				hibObjPar = (SbiObjPar) it.next();
				tmpBIObjectParameter = aBIObjectParameterDAOHibImpl.toBIObjectParameter(hibObjPar);
				
				//*****************************************************************
				//**************** START PRIORITY RECALCULATION *******************
				//*****************************************************************
				Integer priority = tmpBIObjectParameter.getPriority();
				if (priority == null || priority.intValue() != count) {
				        logger.warn("The priorities of the biparameters for the document with id = " + biObject.getId() + " are not sorted. Priority recalculation starts.");
					aBIObjectParameterDAOHibImpl.recalculateBiParametersPriority(biObject.getId(), aSession);
					tmpBIObjectParameter.setPriority(new Integer(count));
				}
				count++;
				//*****************************************************************
				//**************** END PRIORITY RECALCULATION *******************
				//*****************************************************************
				
				aParameter = aParameterDAO.loadForExecutionByParameterIDandRoleName(
								tmpBIObjectParameter.getParID(), role);
				tmpBIObjectParameter.setParID(aParameter.getId());
				tmpBIObjectParameter.setParameter(aParameter);
				biObjectParameters.add(tmpBIObjectParameter);
			}
			biObject.setBiObjectParameters(biObjectParameters);
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return biObject;
	}

	
	
	
	
	/**
	 * Load bi object by id.
	 * 
	 * @param biObjectID the bi object id
	 * 
	 * @return the BI object
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectById(java.lang.Integer)
	 */
	public BIObject loadBIObjectById(Integer biObjectID) throws EMFUserError {
		logger.debug("IN");
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
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return toReturn;
	}

	
	
	
	/**
	 * Load bi object for detail.
	 * 
	 * @param id the id
	 * 
	 * @return the BI object
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectForDetail(java.lang.Integer)
	 */
	public BIObject loadBIObjectForDetail(Integer id) throws EMFUserError {
		logger.debug("IN");
		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String hql = " from SbiObjects where biobjId = " + id;
			Query hqlQuery = aSession.createQuery(hql);
			SbiObjects hibObject = (SbiObjects)hqlQuery.uniqueResult();
			if (hibObject == null) return null;
			biObject = toBIObject(hibObject);
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return biObject;
	}
	
	/**
	 * Load bi object by label.
	 * 
	 * @param label the label
	 * 
	 * @return the BI object
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectByLabel(java.lang.String)
	 */
	public BIObject loadBIObjectByLabel(String label) throws EMFUserError {
		logger.debug("IN");
		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Criterion labelCriterrion = Expression.eq("label",
					label);
			Criteria criteria = aSession.createCriteria(SbiObjects.class);
			criteria.add(labelCriterrion);
			SbiObjects hibObject = (SbiObjects) criteria.uniqueResult();
			if (hibObject == null) return null;
			biObject = toBIObject(hibObject);
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return biObject;
	}
	
	
	
	
	
	
	
	
	
	
	/**
	 * Load bi object for tree.
	 * 
	 * @param id the id
	 * 
	 * @return the BI object
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectForTree(java.lang.Integer)
	 */
	public BIObject loadBIObjectForTree(Integer id) throws EMFUserError {
	        logger.debug("IN. start method with input id:" + id);
		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			logger.debug("hibernate session obtained:" + aSession);
			tx = aSession.beginTransaction();
			logger.debug("hibernate transaction started");
			Criterion domainCdCriterrion = Expression.eq("biobjId", id);
			Criteria criteria = aSession.createCriteria(SbiObjects.class);
			criteria.add(domainCdCriterrion);
			logger.debug( "hibernate criteria filled:" + criteria);
			SbiObjects hibObject = (SbiObjects) criteria.uniqueResult();
			logger.debug( "hibernate object retrived:" + hibObject);
			if (hibObject == null) {
				return null;
			}
			biObject = toBIObject(hibObject);
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			logger.error("hibernate exception",he);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
			logger.debug("OUT.end method with input id:" + id);
		}
		return biObject;	
	}

	
	
	
	
	
	/**
	 * Modify bi object.
	 * 
	 * @param obj the obj
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#modifyBIObject(it.eng.spagobi.analiticalmodel.document.bo.BIObject)
	 */
	public void modifyBIObject(BIObject obj) throws EMFUserError {
		internalModify(obj, null);
	}

	/**
	 * Modify bi object.
	 * 
	 * @param obj the obj
	 * @param objTemp the obj temp
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#modifyBIObjectWithoutVersioning(it.eng.spagobi.analiticalmodel.document.bo.BIObject)
	 */
	public void modifyBIObject(BIObject obj, ObjTemplate objTemp) throws EMFUserError {
		internalModify(obj, objTemp);

	}
	
	/**
	 * Updates the biobject data into database.
	 * @param biObject The BI Object as input
	 * @param objTemp The BIObject template 
	 * @throws EMFUserError If any exception occurred
	 */
	private void internalModify(BIObject biObject, ObjTemplate objTemp) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = (SbiObjects) aSession.load(SbiObjects.class, biObject.getId());
			
			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,	biObject.getEngine().getId());
			hibBIObject.setSbiEngines(hibEngine);
			SbiDataSource dSource = null;
			if (biObject.getDataSourceId() != null) {
				dSource = (SbiDataSource) aSession.load(SbiDataSource.class, biObject.getDataSourceId());
			}
			hibBIObject.setDataSource(dSource);
			
			SbiDataSet dSet = null;
			if (biObject.getDataSetId() != null) {
				dSet = (SbiDataSet) aSession.load(SbiDataSet.class, biObject.getDataSetId());
			}
			hibBIObject.setDataSet(dSet);
			
			
			hibBIObject.setDescr(biObject.getDescription());
			hibBIObject.setLabel(biObject.getLabel());
			hibBIObject.setName(biObject.getName());
			hibBIObject.setEncrypt(new Short(biObject.getEncrypt().shortValue()));
			hibBIObject.setVisible(new Short(biObject.getVisible().shortValue()));
			hibBIObject.setRelName(biObject.getRelName());
			SbiDomains hibState = (SbiDomains) aSession.load(SbiDomains.class, biObject.getStateID());
			hibBIObject.setState(hibState);
			hibBIObject.setStateCode(biObject.getStateCode());
			SbiDomains hibObjectType = (SbiDomains) aSession.load(SbiDomains.class, biObject.getBiObjectTypeID());
			hibBIObject.setObjectType(hibObjectType);
			hibBIObject.setObjectTypeCode(biObject.getBiObjectTypeCode());
			
			hibBIObject.setRefreshSeconds(biObject.getRefreshSeconds());
			
			// metadata ... to uncomment when the user interface managed that fields
			hibBIObject.setExtendedDescription(biObject.getExtendedDescription());
			hibBIObject.setLanguage(biObject.getLanguage());
			hibBIObject.setObjectve(biObject.getObjectve());
			hibBIObject.setKeywords(biObject.getKeywords());
			
			// functionalities erasing
			Set hibFunctionalities = hibBIObject.getSbiObjFuncs();
			for (Iterator it = hibFunctionalities.iterator(); it.hasNext(); ) {
				aSession.delete((SbiObjFunc) it.next());
			}
			// functionalities storing
			Set hibObjFunc = new HashSet();
			List functionalities = biObject.getFunctionalities();
			for (Iterator it = functionalities.iterator(); it.hasNext(); ) {
				Integer functId = (Integer) it.next();
				SbiFunctions aSbiFunctions = (SbiFunctions) aSession.load(SbiFunctions.class, functId);
				SbiObjFuncId aSbiObjFuncId = new SbiObjFuncId();
				aSbiObjFuncId.setSbiFunctions(aSbiFunctions);
				aSbiObjFuncId.setSbiObjects(hibBIObject);
				SbiObjFunc aSbiObjFunc = new SbiObjFunc(aSbiObjFuncId);
				aSession.save(aSbiObjFunc);
				hibObjFunc.add(aSbiObjFunc);
			}
			hibBIObject.setSbiObjFuncs(hibObjFunc);
			// update biobject template info 
			if(objTemp != null) {
				try{
					ObjTemplate oldTemp = DAOFactory.getObjTemplateDAO().getBIObjectActiveTemplate(biObject.getId());
					//insert or update new template
					insertObjTemplate(aSession, objTemp, hibBIObject);
					//if the input document is a document composition and template is changed deletes existing parameters 
					//and creates all new parameters automatically 
					//(the parameters are recovered from all documents that compose general document)
					if (biObject.getBiObjectTypeCode().equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITE_TYPE) &&
						(oldTemp==null || objTemp.getId()==null || objTemp.getId().compareTo(oldTemp.getId()) != 0)){
							insertParametersDocComposition(aSession, biObject, objTemp, true);
					}
				 } catch (Exception e) {
			        	logger.error("Error during creation of document composition parameters : ", e);
			      }
				
			}
			
			
			tx.commit();	
			logger.debug("OUT");
		}  catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
	}

	
	private void insertObjTemplate(Session aSession, ObjTemplate objTemp, SbiObjects hibBIObject) throws EMFUserError {
		// store the binary content
		logger.debug("IN");
		SbiBinContents hibBinContent = new SbiBinContents();
		byte[] bytes = null;
		try {
			bytes = objTemp.getContent();
		} catch (EMFInternalError e) {
			logger.error("Could not retrieve content of ObjTemplate object in input.");
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		hibBinContent.setContent(bytes);
		
		Integer idBin = (Integer)aSession.save(hibBinContent);
		// recover the saved binary hibernate object
		hibBinContent = (SbiBinContents) aSession.load(SbiBinContents.class, idBin);
		// set to not active the current active template
		String hql = "update SbiObjTemplates sot set sot.active = false where sot.active = true and sot.sbiObject.biobjId="+hibBIObject.getBiobjId();
        Query query = aSession.createQuery(hql);
        try{
        	int rowCount = query.executeUpdate();
        } catch (Exception e) {
        	// TODO trace exception
        	System.out.println(e);
        }
        // get the next prog for the new template
        Integer nextProg = null;
        try {
        	nextProg = DAOFactory.getObjTemplateDAO().getNextProgForTemplate(hibBIObject.getBiobjId());
        } catch (Exception e) {
        	throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
        }
        // store the object template
		SbiObjTemplates hibObjTemplate = new SbiObjTemplates();
        //check if id is already defined. In positive case update template else insert a new one
         if (objTemp.getId() != null && objTemp.getId().compareTo(new Integer("-1"))!=0){
        	hibObjTemplate = (SbiObjTemplates)aSession.load(SbiObjTemplates.class, objTemp.getId());
        	hibObjTemplate.setActive(new Boolean(true));
         }
         else{
        	hibObjTemplate.setActive(new Boolean(true));
     		hibObjTemplate.setCreationDate(new Date());
     		hibObjTemplate.setName(objTemp.getName());
     		hibObjTemplate.setProg(nextProg);
     		hibObjTemplate.setSbiBinContents(hibBinContent);
     		hibObjTemplate.setSbiObject(hibBIObject);
     		// metadata
     		String user = objTemp.getCreationUser();
     		if (user == null || user.equals(""))user = hibBIObject.getCreationUser();
     		hibObjTemplate.setCreationUser(user);
     		hibObjTemplate.setDimension(objTemp.getDimension());
     		
     		aSession.save(hibObjTemplate);
         }
         logger.debug("OUT");
		
	}
	
	
	/**
	 * Implements the query to insert a BIObject and its template. All information needed is stored
	 * into the input <code>BIObject</code> and <code>ObjTemplate</code> objects.
	 * 
	 * @param obj The object containing all insert information
	 * @param objTemp The template of the biobject
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public void insertBIObject(BIObject obj, ObjTemplate objTemp) throws EMFUserError {
		internalInsertBIObject(obj, objTemp);
	}
	
	/**
	 * Implements the query to insert a BIObject. All information needed is stored
	 * into the input <code>BIObject</code> object.
	 * 
	 * @param obj The object containing all insert information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public void insertBIObject(BIObject obj) throws EMFUserError {
		internalInsertBIObject(obj, null);
	}
	
	private void internalInsertBIObject(BIObject obj, ObjTemplate objTemp) throws EMFUserError {
	    logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			
			aSession = getSession();
			tx = aSession.beginTransaction();
			SbiObjects hibBIObject = new SbiObjects();
			SbiEngines hibEngine = (SbiEngines) aSession.load(SbiEngines.class,	obj.getEngine().getId());
			hibBIObject.setSbiEngines(hibEngine); 
			hibBIObject.setDescr(obj.getDescription());
			
			hibBIObject.setLabel(obj.getLabel());
			hibBIObject.setName(obj.getName());
			hibBIObject.setEncrypt(new Short(obj.getEncrypt().shortValue()));
			hibBIObject.setVisible(new Short(obj.getVisible().shortValue()));
			hibBIObject.setRelName(obj.getRelName());
			
			SbiDomains hibState = (SbiDomains) aSession.load(SbiDomains.class, obj.getStateID());
			hibBIObject.setState(hibState);
			hibBIObject.setStateCode(obj.getStateCode());
			SbiDomains hibObjectType = (SbiDomains) aSession.load(SbiDomains.class, obj.getBiObjectTypeID());
			hibBIObject.setObjectType(hibObjectType);
			hibBIObject.setObjectTypeCode(obj.getBiObjectTypeCode());
			SbiDataSource dSource = null;
			if (obj.getDataSourceId() != null) {
				dSource = (SbiDataSource) aSession.load(SbiDataSource.class, obj.getDataSourceId());
			}
			hibBIObject.setDataSource(dSource);
			
			SbiDataSet dSet= null;
			if (obj.getDataSetId() != null) {
				dSet = (SbiDataSet) aSession.load(SbiDataSet.class, obj.getDataSetId());
			}
			hibBIObject.setDataSet(dSet);
			
			Integer refreshSeconds=obj.getRefreshSeconds();
			if(refreshSeconds==null)refreshSeconds=new Integer(0);
			hibBIObject.setRefreshSeconds(refreshSeconds);
			
			// uuid generation
			UUIDGenerator uuidGenerator = UUIDGenerator.getInstance();
			UUID uuidObj = uuidGenerator.generateTimeBasedUUID();
			String uuid = uuidObj.toString();
			hibBIObject.setUuid(uuid);
			
			// metadata		
			hibBIObject.setCreationDate(new Date());
			hibBIObject.setExtendedDescription(obj.getExtendedDescription());
			hibBIObject.setCreationUser(obj.getCreationUser());
			hibBIObject.setLanguage(obj.getLanguage());
			hibBIObject.setObjectve(obj.getObjectve());
			hibBIObject.setKeywords(obj.getKeywords());
			
			// save biobject
			Integer id = (Integer) aSession.save(hibBIObject);
			// recover the saved hibernate object
			hibBIObject = (SbiObjects) aSession.load(SbiObjects.class, id);
			// functionalities storing
			Set hibObjFunc = new HashSet();
			List functionalities = obj.getFunctionalities();
			for (Iterator it = functionalities.iterator(); it.hasNext(); ) {
				Integer functId = (Integer) it.next();
				SbiFunctions aSbiFunctions = (SbiFunctions) aSession.load(SbiFunctions.class, functId);
				SbiObjFuncId aSbiObjFuncId = new SbiObjFuncId();
				aSbiObjFuncId.setSbiFunctions(aSbiFunctions);
				aSbiObjFuncId.setSbiObjects(hibBIObject);
				SbiObjFunc aSbiObjFunc = new SbiObjFunc(aSbiObjFuncId);
				aSession.save(aSbiObjFunc);
				hibObjFunc.add(aSbiObjFunc);
			}
			hibBIObject.setSbiObjFuncs(hibObjFunc);	
			
			if(objTemp != null) {
				insertObjTemplate(aSession, objTemp, hibBIObject);
			}
			
			//if the document is a document composition creates all parameters automatically 
			//(the parameters are recovered from all documents that compose general document)
			if (obj.getBiObjectTypeCode().equalsIgnoreCase(SpagoBIConstants.DOCUMENT_COMPOSITE_TYPE)){
				insertParametersDocComposition(aSession, hibBIObject);
			}
			
			tx.commit();
			obj.setId(id);
		} catch (HibernateException he) {
			logger.error("HibernateException",he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
			logger.debug("OUT");
		}
	}

	
	
	
	
	
	/**
	 * Erase bi object.
	 * 
	 * @param obj the obj
	 * @param idFunct the id funct
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#eraseBIObject(it.eng.spagobi.analiticalmodel.document.bo.BIObject, java.lang.Integer)
	 */
	public void eraseBIObject(BIObject obj, Integer idFunct) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			// load object
			SbiObjects hibBIObject = (SbiObjects) aSession.load(SbiObjects.class, obj.getId());			
			// erase object from functionalities 
			Set hibObjFuncs = hibBIObject.getSbiObjFuncs();
			Iterator itObjFunc = hibObjFuncs.iterator();
			while (itObjFunc.hasNext()) {
				SbiObjFunc aSbiObjFunc = (SbiObjFunc) itObjFunc.next();
				if (idFunct == null || aSbiObjFunc.getId().getSbiFunctions().getFunctId().intValue() == idFunct.intValue()) {
					logger.debug("Deleting object [" + obj.getName() + "] from folder [" + aSbiObjFunc.getId().getSbiFunctions().getPath() + "]");
					aSession.delete(aSbiObjFunc);
				}
			}

			aSession.flush();
			// reload object
			aSession.refresh(hibBIObject);

			// if the object is no more referenced in any folder, erases it from sbi_obejcts table 
			hibObjFuncs = hibBIObject.getSbiObjFuncs();
			if (hibObjFuncs == null || hibObjFuncs.size() == 0) {
				
				logger.debug("The object [" + obj.getName() + "] is no more referenced by any functionality. It will be completely deleted from db.");
				
				// delete templates
				String hql = "from SbiObjTemplates sot where sot.sbiObject.biobjId="+obj.getId();
				Query query = aSession.createQuery(hql);
				List templs = query.list();
				Iterator iterTempls = templs.iterator();
				while(iterTempls.hasNext()) {
					SbiObjTemplates hibObjTemp = (SbiObjTemplates)iterTempls.next();
					SbiBinContents hibBinCont = hibObjTemp.getSbiBinContents();
					aSession.delete(hibObjTemp);
					aSession.delete(hibBinCont);
					
				}
				
				//delete subobjects eventually associated
				ISubObjectDAO subobjDAO = DAOFactory.getSubObjectDAO();
				List subobjects =  subobjDAO.getSubObjects(obj.getId());
				for (int i=0; i < subobjects.size(); i++){
					SubObject s = (SubObject) subobjects.get(i);
					subobjDAO.deleteSubObject(s.getId());
				}
				
				//delete viewpoints eventually associated
				List viewpoints = new ArrayList();
				IViewpointDAO biVPDAO = DAOFactory.getViewpointDAO();
				viewpoints =  biVPDAO.loadAllViewpointsByObjID(obj.getId());
				for (int i=0; i<viewpoints.size(); i++){
					Viewpoint vp =(Viewpoint)viewpoints.get(i);
					biVPDAO.eraseViewpoint(vp.getVpId());
				}
				
				//delete snapshots eventually associated
				ISnapshotDAO snapshotsDAO = DAOFactory.getSnapshotDAO();
				List snapshots = snapshotsDAO.getSnapshots(obj.getId());
				for (int i=0; i < snapshots.size(); i++){
					Snapshot aSnapshots = (Snapshot) snapshots.get(i);
					snapshotsDAO.deleteSnapshot(aSnapshots.getId());
				}
				
				//delete notes eventually associated
				IObjNoteDAO objNoteDAO = DAOFactory.getObjNoteDAO();
				objNoteDAO.eraseNotes(obj.getId());
				
				// delete parameters associated
				Set objPars = hibBIObject.getSbiObjPars();
				Iterator itObjPar = objPars.iterator();
				while (itObjPar.hasNext()) {
					SbiObjPar aSbiObjPar = (SbiObjPar) itObjPar.next();
					// deletes all ObjParuse object (dependencies) of the biparameter
					IObjParuseDAO objParuseDAO = DAOFactory.getObjParuseDAO();
					List objParuses = objParuseDAO.loadObjParuses(aSbiObjPar.getObjParId());
					Iterator itObjParuses = objParuses.iterator();
					while (itObjParuses.hasNext()) {
						ObjParuse aObjParuse = (ObjParuse) itObjParuses.next();
						objParuseDAO.eraseObjParuse(aObjParuse);
					}
					// deletes the biparameter
					aSession.delete(aSbiObjPar);
				}
				
				// delete dossier temp parts eventually associated
				IDossierPartsTempDAO dptDAO = DAOFactory.getDossierPartsTempDAO();
				dptDAO.eraseDossierParts(obj.getId());
				// delete dossier presentations eventually associated
				IDossierPresentationsDAO dpDAO = DAOFactory.getDossierPresentationDAO();
				dpDAO.deletePresentations(obj.getId());
				
				// update subreports table 
				ISubreportDAO subrptdao = DAOFactory.getSubreportDAO();
				subrptdao.eraseSubreportByMasterRptId(obj.getId());
				subrptdao.eraseSubreportBySubRptId(obj.getId());
				
				// delete object
				aSession.delete(hibBIObject);
				logger.debug("OUT");

			}
			// commit all changes
			tx.commit();				
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null && tx.isActive())
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} catch (Exception ex) {
			logger.error(ex);
			if (tx != null && tx.isActive())
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100); 
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
	}

	
	/**
	 * Gets the correct roles for execution.
	 * 
	 * @param id the id
	 * @param profile the profile
	 * 
	 * @return the correct roles for execution
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#getCorrectRolesForExecution(java.lang.Integer, it.eng.spago.security.IEngUserProfile)
	 */
	public List getCorrectRolesForExecution(Integer id, IEngUserProfile profile) throws EMFUserError {
		logger.debug("IN");
		List correctRoles = null;
		try  {
			correctRoles = getCorrectRoles(id, profile.getRoles());
		} catch (EMFInternalError emfie) {
		    logger.error("error getting role from the user profile",emfie);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
		logger.debug("OUT");
		return correctRoles;
	}

	
	/**
	 * Gets the correct roles for execution.
	 * 
	 * @param id the id
	 * 
	 * @return the correct roles for execution
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#getCorrectRolesForExecution(java.lang.Integer)
	 */
	public List getCorrectRolesForExecution(Integer id) throws EMFUserError {
		logger.debug("IN");
		List roles = DAOFactory.getRoleDAO().loadAllRoles();
		List nameRoles = new ArrayList();
		Iterator iterRoles = roles.iterator();
		Role role = null;
		while(iterRoles.hasNext()) {
			role = (Role)iterRoles.next();
			nameRoles.add(role.getName());
		}
		logger.debug("OUT");
		return getCorrectRoles(id, nameRoles);
	}
	
	/**
	 * Gets a list of correct role according to the report at input, identified
	 * by its id
	 * 
	 * @param id	The Integer representing report's id
	 * @param roles	The collection of all roles
	 * @return The correct roles list
	 * @throws EMFUserError if any exception occurred
	 */
	private List getCorrectRoles(Integer id, Collection roles) throws EMFUserError {
		logger.debug("IN");
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
				         "where obj.biobjId = '"+id+"' and " +
				         "      obj.biobjId = objpar.sbiObject.biobjId and " +
				         "      par.parId = objpar.id.sbiParameter.parId ";
			hqlQuery = aSession.createQuery(hql);
			List idParameters = hqlQuery.list();
			
			if(idParameters.size() == 0) {
				List allCorrectRoles = new ArrayList();
				// if the object has not parameter associates all the roles that have the execution or
				// test permissions on the containing folders are correct roles in the same manner.
				SbiObjects hibBIObject = (SbiObjects)aSession.load(SbiObjects.class, id);
				String objectState = hibBIObject.getState().getValueCd();
				Set hibObjFuncs = hibBIObject.getSbiObjFuncs();
				Iterator itObjFunc = hibObjFuncs.iterator();
				while (itObjFunc.hasNext()) {
					SbiObjFunc aSbiObjFunc = (SbiObjFunc) itObjFunc.next();
					SbiFunctions aSbiFunctions = aSbiObjFunc.getId().getSbiFunctions();
					String rolesHql = "select distinct roles.name from " +
						"SbiExtRoles as roles, SbiFuncRole as funcRole " + 
						"where roles.extRoleId = funcRole.id.role.extRoleId and " +
						"	   funcRole.id.function.functId = " + aSbiFunctions.getFunctId() + " and " +
						"	   funcRole.id.state.valueCd = '" + objectState + "' ";
					Query rolesHqlQuery = aSession.createQuery(rolesHql);
					// get the list of roles that can see the document (in REL or TEST state) in that functionality
					List rolesNames = new ArrayList();
					rolesNames = rolesHqlQuery.list();
					allCorrectRoles.addAll(rolesNames);
				}
				Iterator rolesIt = roles.iterator();
				while (rolesIt.hasNext()) {
					// if the role is a user role and can see the document (in REL or TEST state), 
					// it is a correct role
					String role = rolesIt.next().toString();
					if (allCorrectRoles.contains(role)) correctRoles.add(role);
				}
				
				/*
				// considering only the first role
				if (rolesIt.hasNext()) {
					// if the role is a user role and can see the document (in REL or TEST state), 
					// it is a correct role
					String role = rolesIt.next().toString();
					correctRoles.add(role);
				}
				*/
				
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
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return correctRoles;
	}
	
	
	
	/**
	 * From the Hibernate BI object at input, gives the corrispondent BI
	 * object.
	 * 
	 * @param hibBIObject The Hibernate BI object
	 * 
	 * @return the corrispondent output <code>BIObject</code>
	 */
	public BIObject toBIObject(SbiObjects hibBIObject){
		logger.debug("IN");
		    // create empty biobject
			BIObject aBIObject = new BIObject();
			// set type (type code and id)
			aBIObject.setBiObjectTypeCode(hibBIObject.getObjectTypeCode());
			aBIObject.setBiObjectTypeID(hibBIObject.getObjectType().getValueId());
			// set description
			String descr = hibBIObject.getDescr();
			if(descr==null) descr = "";
			aBIObject.setDescription(descr);
			// set encrypt flag
			aBIObject.setEncrypt(new Integer(hibBIObject.getEncrypt().intValue()));
			// set visible flag
			aBIObject.setVisible(new Integer(hibBIObject.getVisible().intValue()));
			// set engine						
			aBIObject.setEngine(new EngineDAOHibImpl().toEngine(hibBIObject.getSbiEngines()));
			// set data source
			if (hibBIObject.getDataSource()!=null){
				aBIObject.setDataSourceId(new Integer(hibBIObject.getDataSource().getDsId()));
			}
			if (hibBIObject.getDataSet()!=null){
				aBIObject.setDataSetId(new Integer(hibBIObject.getDataSet().getDsId()));
			}
			
			// set id
			aBIObject.setId(hibBIObject.getBiobjId());
			aBIObject.setLabel(hibBIObject.getLabel());
			aBIObject.setName(hibBIObject.getName());
			// set path
			aBIObject.setPath(hibBIObject.getPath());
			aBIObject.setUuid(hibBIObject.getUuid());
			aBIObject.setRelName(hibBIObject.getRelName());
			aBIObject.setStateCode(hibBIObject.getStateCode());
			aBIObject.setStateID(hibBIObject.getState().getValueId());
			
			List functionlities = new ArrayList();
			Set hibObjFuncs = hibBIObject.getSbiObjFuncs();
			for (Iterator it = hibObjFuncs.iterator(); it.hasNext(); ) {
				SbiObjFunc aSbiObjFunc = (SbiObjFunc) it.next();
				Integer functionalityId = aSbiObjFunc.getId().getSbiFunctions().getFunctId();
				functionlities.add(functionalityId);
			}
			aBIObject.setFunctionalities(functionlities);
			
			// metadata
			aBIObject.setCreationDate(hibBIObject.getCreationDate());
			aBIObject.setExtendedDescription(hibBIObject.getExtendedDescription());
			aBIObject.setCreationUser(hibBIObject.getCreationUser());
			aBIObject.setLanguage(hibBIObject.getLanguage());
			aBIObject.setObjectve(hibBIObject.getObjectve());
			aBIObject.setKeywords(hibBIObject.getKeywords());
			
			aBIObject.setRefreshSeconds(hibBIObject.getRefreshSeconds());
			logger.debug("OUT");
			return aBIObject;
	}
	
	

	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadAllBIObjects()
	 */
	public List loadAllBIObjects() throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Query hibQuery = aSession.createQuery(" from SbiObjects s order by s.label");
			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toBIObject((SbiObjects) it.next()));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return realResult;
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadAllBIObjects(java.lang.String)
	 */
	public List loadAllBIObjects(String filterOrder) throws EMFUserError {
		logger.debug("IN.filterOrder="+filterOrder);
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Query hibQuery = aSession.createQuery("from SbiObjects s  order by s." + filterOrder);
			List hibList = hibQuery.list();
			
			//Criteria criteria = aSession.createCriteria(SbiObjects.class);
			//criteria.setFetchMode("sbiObjFuncs.sbiEngines", FetchMode.JOIN);
			//criteria.addOrder(Order.asc(filterOrder));
			//List hibList = criteria.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toBIObject((SbiObjects) it.next()));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return realResult;
	}



	/**
	 * Gets the biparameters associated with to a biobject.
	 * 
	 * @param aBIObject BIObject the biobject to analize
	 * 
	 * @return List, list of the biparameters associated with the biobject
	 * 
	 * @throws EMFUserError the EMF user error
	 */
	public List getBIObjectParameters(BIObject aBIObject) throws EMFUserError {
		IBIObjectParameterDAO biobjDAO = DAOFactory.getBIObjectParameterDAO();
		List biparams = biobjDAO.loadBIObjectParametersById(aBIObject.getId());
		return biparams;
	}



	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadAllBIObjectsFromInitialPath(java.lang.String)
	 */
	public List loadAllBIObjectsFromInitialPath(String initialPath) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Query hibQuery = aSession.createQuery(
			"select " +
			"	distinct(objects) " +
			"from " +
			"	SbiObjects as objects, SbiObjFunc as objFuncs, SbiFunctions as functions " +
			"where " +
			"	objects.biobjId = objFuncs.id.sbiObjects.biobjId " +
			"	and objFuncs.id.sbiFunctions.functId = functions.functId " +
			"	and " +
			"		(functions.path = '" + initialPath + "' " +
			"		 or functions.path like '" + initialPath + "/%' ) " + 
			"order by " +
			"	objects.label");
			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toBIObject((SbiObjects) it.next()));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return realResult;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadAllBIObjectsFromInitialPath(java.lang.String, java.lang.String)
	 */
	public List loadAllBIObjectsFromInitialPath(String initialPath, String filterOrder) throws EMFUserError {
		logger.debug("IN");
		Session aSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			Query hibQuery = aSession.createQuery(
			"select " +
			"	distinct(objects) " +
			"from " +
			"	SbiObjects as objects, SbiObjFunc as objFuncs, SbiFunctions as functions " +
			"where " +
			"	objects.biobjId = objFuncs.id.sbiObjects.biobjId " +
			"	and objFuncs.id.sbiFunctions.functId = functions.functId " +
			"	and " +
			"		(functions.path = '" + initialPath + "' " +
			"		 or functions.path like '" + initialPath + "/%' ) " + 
			"order by " +
			"	objects." + filterOrder);
			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();
			while (it.hasNext()) {
				realResult.add(toBIObject((SbiObjects) it.next()));
			}
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return realResult;
	}




	/* (non-Javadoc)
	 * @see it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO#loadBIObjectForDetail(java.lang.String)
	 */
	public BIObject loadBIObjectForDetail(String path) throws EMFUserError {
		logger.debug("IN");
		BIObject biObject = null;
		Session aSession = null;
		Transaction tx = null;
		try {
			aSession = getSession();
			tx = aSession.beginTransaction();
			String hql = " from SbiObjects where path = '" + path + "'";
			Query hqlQuery = aSession.createQuery(hql);
			SbiObjects hibObject = (SbiObjects)hqlQuery.uniqueResult();
			if (hibObject == null) return null;
			biObject = toBIObject(hibObject);
			tx.commit();
		} catch (HibernateException he) {
			logger.error(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (aSession!=null){
				if (aSession.isOpen()) aSession.close();
			}
		}
		logger.debug("OUT");
		return biObject;
	}

	/**
	 * Called only for document composition (update object modality).
	 * Puts parameters into the document composition getting these from document's children.
	 * @param aSession the hibernate session
	 * @param biObject the BI object of document composition
	 * @param template the BI last active template 
	 * @param flgDelete the flag that suggest if is necessary to delete parameters before the insertion
	 * @throws EMFUserError
	 */
	private void insertParametersDocComposition(Session aSession, BIObject biObject, ObjTemplate template, boolean flgDelete) throws EMFUserError {
		logger.debug("IN");
		//get informations about documents child
		try{
			//gets document composition configuration
	        if(template==null)  return;
	        byte[] contentBytes = template.getContent();
	        String contentStr = new String(contentBytes);
	        SourceBean content = SourceBean.fromXMLString(contentStr);
	        DocumentCompositionConfiguration docConf = new DocumentCompositionConfiguration(content);
	        List lstLabeldDocs = docConf.getSbiObjLabelsArray();
	        List totalParameters = new ArrayList();
	        
			//if flag flgDelete is true delete all parameters associated to document composition
			if (flgDelete){
				List lstDocParameters = DAOFactory.getBIObjectParameterDAO().loadBIObjectParametersById(biObject.getId());
				for (int i=0; i< lstDocParameters.size(); i++){
					BIObjectParameter docParam = (BIObjectParameter)lstDocParameters.get(i);
					SbiObjects aSbiObject = new SbiObjects();
					Integer objId = biObject.getId();
        			aSbiObject.setBiobjId( biObject.getId());
        			
        			SbiParameters aSbiParameter = new SbiParameters();
        			aSbiParameter.setParId(docParam.getParameter().getId());    
        			
					SbiObjPar hibObjPar =  new SbiObjPar();
					hibObjPar.setObjParId(docParam.getId());
					hibObjPar.setLabel(docParam.getLabel());
					
        			hibObjPar.setSbiObject(aSbiObject);
        			hibObjPar.setSbiParameter(aSbiParameter);
        			
					aSession.delete(hibObjPar);
				}
			}
	        
	      
	        //for every document child gets parameters and inserts these into new document composition object
	        for (int i=0; i<lstLabeldDocs.size(); i++){
	        	BIObject docChild = DAOFactory.getBIObjectDAO().loadBIObjectByLabel((String)lstLabeldDocs.get(i));
	        	List lstDocChildParameters = DAOFactory.getBIObjectParameterDAO().loadBIObjectParametersById(docChild.getId());
	        	for (int j=0; j<lstDocChildParameters.size(); j++){
	        		BIObjectParameter objPar  = (BIObjectParameter)lstDocChildParameters.get(j);
	        		if (!totalParameters.contains(objPar.getLabel())){
	        			SbiObjects aSbiObject = new SbiObjects();
	        			//aSbiObject.setBiobjId(biObject.getId());
	        			Integer objId = biObject.getId();
						if (objId == null || objId.compareTo(new Integer("0"))==0)
							objId = biObject.getId();
	        			aSbiObject.setBiobjId(objId);
	        			
	        			SbiParameters aSbiParameter = new SbiParameters();
	        			aSbiParameter.setParId(objPar.getParID());
	        			SbiObjPar sbiObjPar = new SbiObjPar();
	        			sbiObjPar.setSbiObject(aSbiObject);
	        			sbiObjPar.setSbiParameter(aSbiParameter);
	        			sbiObjPar.setObjParId(new Integer("-1"));
	        			sbiObjPar.setLabel(objPar.getLabel());
	        			sbiObjPar.setParurlNm(objPar.getParameterUrlName());
	        			sbiObjPar.setReqFl(new Short(objPar.getRequired().shortValue()));
	        			sbiObjPar.setModFl(new Short(objPar.getModifiable().shortValue()));
	        			sbiObjPar.setViewFl(new Short(objPar.getVisible().shortValue()));
	        			sbiObjPar.setMultFl(new Short(objPar.getMultivalue().shortValue()));
	        			sbiObjPar.setProg(objPar.getProg());
	        			sbiObjPar.setPriority(new Integer(totalParameters.size()+1)); 
	        	        aSession.save(sbiObjPar);
	        			totalParameters.add(objPar.getLabel());
	        		}
	        	}
	        	
	        }
	        logger.debug("OUT");
		} catch (Exception e) {
			logger.error("Error while creating parameter for document composition.", e);
		}
	}
	
	/**
	 * Called only for document composition (insert object modality).
	 * Puts parameters into the document composition getting these from document's children.
	 * @param aSession the hibernate session
	 * @param sbiObject the hibernate object
	 * @throws EMFUserError
	 */
	private void insertParametersDocComposition(Session aSession, SbiObjects sbiObject) throws EMFUserError {
		logger.debug("IN");
		//get informations about documents child
		try{
			//gets document composition configuration
			ObjTemplate template = DAOFactory.getObjTemplateDAO().getBIObjectActiveTemplate(sbiObject.getBiobjId());
	        if(template==null)  return;
	        byte[] contentBytes = template.getContent();
	        String contentStr = new String(contentBytes);
	        SourceBean content = SourceBean.fromXMLString(contentStr);
	        DocumentCompositionConfiguration docConf = new DocumentCompositionConfiguration(content);
	        List lstLabeldDocs = docConf.getSbiObjLabelsArray();
	        List totalParameters = new ArrayList();
	        
	      
	        //for every document child gets parameters and inserts these into new document composition object
	        for (int i=0; i<lstLabeldDocs.size(); i++){
	        	BIObject docChild = DAOFactory.getBIObjectDAO().loadBIObjectByLabel((String)lstLabeldDocs.get(i));
	        	List lstDocChildParameters = DAOFactory.getBIObjectParameterDAO().loadBIObjectParametersById(docChild.getId());
	        	for (int j=0; j<lstDocChildParameters.size(); j++){
	        		BIObjectParameter objPar  = (BIObjectParameter)lstDocChildParameters.get(j);
	        		if (!totalParameters.contains(objPar.getLabel())){
	        			SbiObjects aSbiObject = new SbiObjects();
	        			//aSbiObject.setBiobjId(biObject.getId());
	        			Integer objId = sbiObject.getBiobjId();
						if (objId == null || objId.compareTo(new Integer("0"))==0)
							objId = sbiObject.getBiobjId();
	        			aSbiObject.setBiobjId(objId);
	        			
	        			SbiParameters aSbiParameter = new SbiParameters();
	        			aSbiParameter.setParId(objPar.getParID());
	        			SbiObjPar sbiObjPar = new SbiObjPar();
	        			sbiObjPar.setSbiObject(aSbiObject);
	        			sbiObjPar.setSbiParameter(aSbiParameter);
	        			sbiObjPar.setObjParId(new Integer("-1"));
	        			sbiObjPar.setLabel(objPar.getLabel());
	        			sbiObjPar.setParurlNm(objPar.getParameterUrlName());
	        			sbiObjPar.setReqFl(new Short(objPar.getRequired().shortValue()));
	        			sbiObjPar.setModFl(new Short(objPar.getModifiable().shortValue()));
	        			sbiObjPar.setViewFl(new Short(objPar.getVisible().shortValue()));
	        			sbiObjPar.setMultFl(new Short(objPar.getMultivalue().shortValue()));
	        			sbiObjPar.setProg(objPar.getProg());
	        			sbiObjPar.setPriority(new Integer(totalParameters.size()+1)); 
	        	        aSession.save(sbiObjPar);
	        			totalParameters.add(objPar.getLabel());
	        		}
	        	}
	        	
	        }
	        logger.debug("OUT");
		} catch (Exception e) {
			logger.error("Error while creating parameter for document composition.", e);
		}
	}
}


