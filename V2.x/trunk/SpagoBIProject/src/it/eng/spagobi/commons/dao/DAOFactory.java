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
 * Created on 1-giu-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.commons.dao;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO;
import it.eng.spagobi.analiticalmodel.document.dao.IObjNoteDAO;
import it.eng.spagobi.analiticalmodel.document.dao.IObjTemplateDAO;
import it.eng.spagobi.analiticalmodel.document.dao.ISnapshotDAO;
import it.eng.spagobi.analiticalmodel.document.dao.ISubObjectDAO;
import it.eng.spagobi.analiticalmodel.document.dao.ISubreportDAO;
import it.eng.spagobi.analiticalmodel.document.dao.IViewpointDAO;
import it.eng.spagobi.analiticalmodel.functionalitytree.dao.ILowFunctionalityDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IBIObjectParameterDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IObjParuseDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IParameterDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IParameterUseDAO;
import it.eng.spagobi.behaviouralmodel.check.dao.ICheckDAO;
import it.eng.spagobi.behaviouralmodel.lov.dao.IModalitiesValueDAO;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.engines.config.dao.IEngineDAO;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoFeaturesDAO;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoMapFeaturesDAO;
import it.eng.spagobi.mapcatalogue.bo.dao.ISbiGeoMapsDAO;
import it.eng.spagobi.tools.datasource.dao.IDataSourceDAO;

/**
 * Contains all the data access object for all the BO objects defined into
 * it.eng.spagobi.bo package.
 */
public class DAOFactory {

	
	private static final String MODULE_NAME = "MetadataService";
	
	/**
	 * Given, for a defined BO, its DAO name, creates the correct DAO instance 
	 * 
	 * 
	 * @param daoName The BO DAO name
	 * @return An object representing the DAO instance
	 * @throws EMFUserError If an Exception occurred
	 */
	
	private static Object createDAOInstance(String daoName) throws EMFUserError {
		SpagoBITracer.debug(MODULE_NAME, DAOFactory.class.getName(), "createDAOInstance", "Begin Istantiation of DAO ["+daoName+"]");
		Object daoObject = null;
		try{
			SourceBean daoConfigSourceBean =(SourceBean) ConfigSingleton.getInstance().getFilteredSourceBeanAttribute("SPAGOBI.DAO-CONF.DAO","name", daoName);
			String daoClassName = (String)daoConfigSourceBean.getAttribute("implementation");
			SpagoBITracer.debug(MODULE_NAME, DAOFactory.class.getName(), "createDAOInstance", "DAO ["+daoName+"] Implementation class ["+daoClassName+"]");
			daoObject = Class.forName(daoClassName).newInstance();
			SpagoBITracer.debug(MODULE_NAME, DAOFactory.class.getName(), "createDAOInstance", "DAO ["+daoName+"] Instatiate successfully");
		}catch(Exception e){
			SpagoBITracer.debug(MODULE_NAME, DAOFactory.class.getName(), "createDAOInstance", "Error occurred", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 1000);
		}
		return daoObject;
		
	}
	/**
	 * Creates a DAO instance for a BI object
	 * 
	 * @return a DAO instance for the BIObject
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IBIObjectDAO getBIObjectDAO() throws EMFUserError {
		return (IBIObjectDAO)createDAOInstance("BIObjectDAO");
	}
	
	
	/**
	 * Creates a DAO instance for a Subreport
	 * 
	 * @return a DAO instance for the Subreport
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ISubreportDAO getSubreportDAO() throws EMFUserError {
		return (ISubreportDAO)createDAOInstance("SubreportDAO");
	}
	
	
	/**
	 * Creates a DAO instance for a BI object parameter
	 * 
	 * @return a DAO instance for the BIObject parameter
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IBIObjectParameterDAO getBIObjectParameterDAO() throws EMFUserError{
		return (IBIObjectParameterDAO)createDAOInstance("BIObjectParameterDAO");
	}
	/**
	 * Creates a DAO instance for a value constraint
	 * 
	 * @return a DAO instance for the value constraint
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ICheckDAO getChecksDAO() throws EMFUserError{
		return (ICheckDAO)createDAOInstance("ChecksDAO");
	}
	/**
	 * Creates a DAO instance for a domain
	 * 
	 * @return a DAO instance for the  domain
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IDomainDAO getDomainDAO() throws EMFUserError{
		return (IDomainDAO)createDAOInstance("DomainDAO");
	}
	/**
	 * Creates a DAO instance for an engine
	 * 
	 * @return a DAO instance for the engine
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IEngineDAO getEngineDAO() throws EMFUserError{
		return (IEngineDAO)createDAOInstance("EngineDAO");
	}
	/**
	 * Creates a DAO instance for a low functionality
	 * 
	 * @return a DAO instance for the  low functionality
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ILowFunctionalityDAO getLowFunctionalityDAO() throws EMFUserError{
		return (ILowFunctionalityDAO)createDAOInstance("LowFunctionalityDAO");
	}
	/**
	 * Creates a DAO instance for a predefined LOV
	 * 
	 * @return a DAO instance for the  predefined LOV
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IModalitiesValueDAO getModalitiesValueDAO() throws EMFUserError{
		return (IModalitiesValueDAO)createDAOInstance("ModalitiesValueDAO");
	}
	/**
	 * Creates a DAO instance for a parameter
	 * 
	 * @return a DAO instance for the  parameter
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IParameterDAO getParameterDAO() throws EMFUserError{
		return (IParameterDAO)createDAOInstance("ParameterDAO");
	}
	/**
	 * Creates a DAO instance for a parameter use mode
	 * 
	 * @return a DAO instance for the  parameter use mode
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IParameterUseDAO getParameterUseDAO() throws EMFUserError{
		return (IParameterUseDAO)createDAOInstance("ParameterUseDAO");
	}
	/**
	 * Creates a DAO instance for a role
	 * 
	 * @return a DAO instance for the role
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IRoleDAO getRoleDAO() throws EMFUserError{
		return (IRoleDAO)createDAOInstance("RoleDAO");
	}

	
	public static IObjParuseDAO getObjParuseDAO() throws EMFUserError{
		return (IObjParuseDAO)createDAOInstance("ObjParuseDAO");
	}
	
	/**
	 * Creates a DAO instance for a viewpoint
	 * 
	 * @return a DAO instance for the viewpoint
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IViewpointDAO getViewpointDAO() throws EMFUserError{
		return (IViewpointDAO)createDAOInstance("ViewpointDAO");
	}	
	 
	public static IDataSourceDAO getDataSourceDAO() throws EMFUserError{
		return (IDataSourceDAO)createDAOInstance("DataSourceDAO");
	}
	
	public static IBinContentDAO getBinContentDAO() throws EMFUserError{
		return (IBinContentDAO)createDAOInstance("BinContentDAO");
	}	
	
	public static IObjTemplateDAO getObjTemplateDAO() throws EMFUserError{
		return (IObjTemplateDAO)createDAOInstance("ObjTemplateDAO");
	}	
	
	public static IObjNoteDAO getObjNoteDAO() throws EMFUserError{
		return (IObjNoteDAO)createDAOInstance("ObjNoteDAO");
	}	
	
	public static ISubObjectDAO getSubObjectDAO() throws EMFUserError{
		return (ISubObjectDAO)createDAOInstance("SubObjectDAO");
	}	
	
	public static ISnapshotDAO getSnapshotDAO() throws EMFUserError{
		return (ISnapshotDAO)createDAOInstance("SnapshotDAO");
	}	
	
	/**
	 * Creates a DAO instance for a BI object
	 * 
	 * @return a DAO instance for the BIObject
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ISbiGeoMapsDAO getSbiGeoMapsDAO() throws EMFUserError {
		return (ISbiGeoMapsDAO)createDAOInstance("GeoMapDAO");
	}
	
	/**
	 * Creates a DAO instance for a BI object
	 * 
	 * @return a DAO instance for the BIObject
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ISbiGeoFeaturesDAO getSbiGeoFeaturesDAO() throws EMFUserError {
		return (ISbiGeoFeaturesDAO)createDAOInstance("GeoFeatureDAO");
	}
	/**
	 * Creates a DAO instance for a BI object
	 * 
	 * @return a DAO instance for the BIObject
	 * @throws EMFUserError If an Exception occurred
	 */
	public static ISbiGeoMapFeaturesDAO getSbiGeoMapFeaturesDAO() throws EMFUserError {
		return (ISbiGeoMapFeaturesDAO)createDAOInstance("GeoMapFeatureDAO");
	}
	/**
	 * Creates a DAO instance for a BI object
	 * 
	 * @return a DAO instance for the BIObject
	 * @throws EMFUserError If an Exception occurred
	 */
	public static IUserFunctionalityDAO getUserFunctionalityDAO() throws EMFUserError {
		return (IUserFunctionalityDAO)createDAOInstance("UserFunctionalityDAO");
	}	
		
}
