/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.tools.importexport;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjFunc;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjFuncId;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjPar;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjTemplates;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjects;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiSnapshots;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiSubObjects;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiSubreports;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiSubreportsId;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRole;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRoleId;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFunctions;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiObjParuse;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiObjParuseId;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParameters;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuse;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuseCk;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuseCkId;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuseDet;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.metadata.SbiParuseDetId;
import it.eng.spagobi.behaviouralmodel.check.metadata.SbiChecks;
import it.eng.spagobi.behaviouralmodel.lov.metadata.SbiLov;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.dao.IRoleDAO;
import it.eng.spagobi.commons.metadata.SbiBinContents;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.metadata.SbiExtRoles;
import it.eng.spagobi.commons.utilities.HibernateUtil;
import it.eng.spagobi.engines.config.bo.Engine;
import it.eng.spagobi.engines.config.dao.IEngineDAO;
import it.eng.spagobi.engines.config.metadata.SbiEngines;
import it.eng.spagobi.tools.datasource.bo.DataSource;
import it.eng.spagobi.tools.datasource.dao.IDataSourceDAO;
import it.eng.spagobi.tools.datasource.metadata.SbiDataSource;
import it.eng.spagobi.tools.importexport.bo.AssociationFile;
import it.eng.spagobi.tools.importexport.transformers.TransformersUtilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.zip.ZipOutputStream;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;

/**
 * Implements the interface which defines methods for managing the import
 * requests
 */
public class ImportManager implements IImportManager, Serializable {

    static private Logger logger = Logger.getLogger(ImportManager.class);

    private String pathImportTmpFolder = "";
    private String pathBaseFolder = "";
    private String pathDBFolder = "";
    private ImporterMetadata importer = null;
    private Properties props = null;
    private SessionFactory sessionFactoryExpDB = null;
    private Session sessionExpDB = null;
    private Transaction txExpDB = null;
    private Session sessionCurrDB = null;
    private Transaction txCurrDB = null;
    private MetadataAssociations metaAss = null;
    private MetadataLogger metaLog = null;
    private UserAssociationsKeeper usrAss = null;
    private String exportedFileName = "";
    private AssociationFile associationFile = null;
    private String impAssMode = IMPORT_ASS_DEFAULT_MODE;

    /**
     * Prepare the environment for the import procedure.
     * 
     * @param pathImpTmpFold The path of the temporary import folder
     * @param archiveName the name of the compress exported file
     * @param archiveContent the bytes of the compress exported file
     * 
     * @throws EMFUserError the EMF user error
     */
    public void prepareImport(String pathImpTmpFold, String archiveName, byte[] archiveContent) throws EMFUserError {
	logger.debug("IN");
	// create directories of the tmp import folder
	File impTmpFold = new File(pathImpTmpFold);
	impTmpFold.mkdirs();
	// write content uploaded into a tmp archive
	String pathArchiveFile = pathImpTmpFold + "/" + archiveName;
	File archive = new File(pathArchiveFile);
	exportedFileName = archiveName;
	try {
	    FileOutputStream fos = new FileOutputStream(archive);
	    fos.write(archiveContent);
	    fos.flush();
	    fos.close();
	} catch (IOException ioe) {
	    logger.error("Error while writing archive content into a tmp file ", ioe);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	}
	// decompress archive
	ImportUtilities.decompressArchive(pathImpTmpFold, pathArchiveFile);
	// erase archive file
	archive.delete();
	int lastDotPos = archiveName.lastIndexOf(".");
	if (lastDotPos != -1)
	    archiveName = archiveName.substring(0, lastDotPos);
	pathImportTmpFolder = pathImpTmpFold;
	pathBaseFolder = pathImportTmpFolder + "/" + archiveName;
	pathDBFolder = pathBaseFolder + "/metadata";
	String propFilePath = pathBaseFolder + "/export.properties";
	try {
	    FileInputStream fis = new FileInputStream(propFilePath);
	    props = new Properties();
	    props.load(fis);
	    fis.close();
	} catch (Exception e) {
	    logger.error("Error while reading properties file ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	}
	importer = new ImporterMetadata();
	sessionFactoryExpDB = ImportUtilities.getHibSessionExportDB(pathDBFolder);
	sessionExpDB = sessionFactoryExpDB.openSession();
	txExpDB = sessionExpDB.beginTransaction();
	sessionCurrDB = HibernateUtil.currentSession();
	txCurrDB = sessionCurrDB.beginTransaction();
	metaAss = new MetadataAssociations();
	metaLog = new MetadataLogger();
	usrAss = new UserAssociationsKeeper();
	logger.debug("OUT");
    }


    /**
     * Imports the exported objects.
     * 
     * @param overwrite the overwrite
     * 
     * @throws EMFUserError the EMF user error
     */
    public void importObjects(boolean overwrite) throws EMFUserError {
	logger.debug("IN");
	updateDataSourceReferences(metaAss.getDataSourceAssociation());
	importDataSource();
	importRoles();
	importEngines();
	importFunctionalities();
	importChecks();
	importParameters(overwrite);
	importLovs(overwrite);
	importParuse();
	importBIObjects(overwrite);
	importBIObjectLinks();
	importFunctObject();
	importFunctRoles();
	importParuseDet();
	importParuseCheck();
	importBIObjPar();
	importObjParUse();
	logger.debug("OUT");
    }
    
    /**
     * Gets the SpagoBI version of the exported file.
     * 
     * @return The SpagoBI version of the exported file
     */
    public String getExportVersion() {
	return props.getProperty("spagobi-version");
    }

    /**
     * Gets the current SpagobI version.
     * 
     * @return The current SpagoBI version
     */
    public String getCurrentVersion() {
	logger.debug("IN");
	ConfigSingleton conf = ConfigSingleton.getInstance();
	SourceBean curVerSB = (SourceBean) conf.getAttribute("IMPORTEXPORT.CURRENTVERSION");
	String curVer = (String) curVerSB.getAttribute("version");
	logger.debug("OUT");
	return curVer;
    }

    /**
     * Gets the list of all exported roles.
     * 
     * @return The list of exported roles
     * 
     * @throws EMFUserError the EMF user error
     */
    public List getExportedRoles() throws EMFUserError {
	List exportedRoles = null;
	exportedRoles = importer.getAllExportedRoles(sessionExpDB);
	return exportedRoles;
    }

    /**
     * Gets the list of all exported engines.
     * 
     * @return The list of exported engines
     * 
     * @throws EMFUserError the EMF user error
     */
    public List getExportedEngines() throws EMFUserError {
	List exportedEngines = null;
	exportedEngines = importer.getAllExportedEngines(sessionExpDB);
	return exportedEngines;
    }

    /**
     * checks if two or more exported roles are associate to the same current
     * role.
     * 
     * @param roleAssociations Map of assocaition between exported roles and roles of the
     * portal in use
     * 
     * @throws EMFUserError if two ore more exported roles are associate to the same
     * current role
     */
    public void checkRoleReferences(Map roleAssociations) throws EMFUserError {
	logger.debug("IN");
	// each exported role should be associate only to one system role
	Set rolesAssKeys = roleAssociations.keySet();
	Iterator iterRoleAssKeys1 = rolesAssKeys.iterator();
	while (iterRoleAssKeys1.hasNext()) {
	    Integer roleExpId = (Integer) iterRoleAssKeys1.next();
	    Integer roleAssId = (Integer) roleAssociations.get(roleExpId);
	    Iterator iterRoleAssKeys2 = rolesAssKeys.iterator();
	    while (iterRoleAssKeys2.hasNext()) {
		Integer otherRoleExpId = (Integer) iterRoleAssKeys2.next();
		if (otherRoleExpId.compareTo(roleExpId) != 0) {
		    Integer otherRoleAssId = (Integer) roleAssociations.get(otherRoleExpId);
		    if (otherRoleAssId.compareTo(roleAssId) == 0) {
			logger.debug("OUT. The checkRoleReferences method doesn't work ");
			throw new EMFUserError(EMFErrorSeverity.ERROR, "8001", "component_impexp_messages");
		    }
		}
	    }
	}
	logger.debug("OUT");
    }

    /**
     * Update the data source name for each list of values of type query based on
     * association between exported data sources and current system data sources.
     * 
     * @param mapDataSources Map of the associations between exported data sources and
     * current system data sources
     * 
     * @throws EMFUserError the EMF user error
     */
    public void updateDataSourceReferences(Map mapDataSources) throws EMFUserError {
	/*
	 * The key of the map are the name of the exported data sources Each key
	 * value is the name of the current system data source associate
	 */
	importer.updateDSRefs(mapDataSources, sessionExpDB, metaLog);
    }

    /**
     * Closes Hibernate session factory for the exported database
     */
    private void closeSessionFactory() {
	if (sessionFactoryExpDB != null) {
	    sessionFactoryExpDB.close();
	}
    }

    /**
     * Close Hibernate sessions for exported and current database
     */
    private void closeSession() {
	if (sessionExpDB != null) {
	    if (sessionExpDB.isOpen()) {
		sessionExpDB.close();
	    }
	}
	if (sessionCurrDB != null) {
	    if (sessionCurrDB.isOpen()) {
		sessionCurrDB.close();
	    }
	}
    }

    /**
     * Rollbacks each previous changes made on exported and current databases
     */
    private void rollback() {
	if (txExpDB != null)
	    txExpDB.rollback();
	if (txCurrDB != null)
	    txCurrDB.rollback();
	closeSession();
	closeSessionFactory();
    }

    /**
     * Commits all changes made on exported and current databases.
     * 
     * @return the import result info
     * 
     * @throws EMFUserError the EMF user error
     */
    public ImportResultInfo commitAllChanges() throws EMFUserError {
	logger.debug("IN");
	// commit all database changes and close hibernate connection
	txCurrDB.commit();
	closeSession();
	closeSessionFactory();
	// clear metadata association
	metaAss.clear();
	// create the import info bean
	ImportResultInfo iri = new ImportResultInfo();
	// create the folder which contains the import result files
	Date now = new Date();
	String pathFolderImportOutcome = pathImportTmpFolder + "/import_" + now.getTime();
	File fileFolderImportOutcome = new File(pathFolderImportOutcome);
	fileFolderImportOutcome.mkdirs();
	// fill the result bean with eventual manual task info
	String pathManualTaskFolder = pathBaseFolder + "/" + ImportExportConstants.MANUALTASK_FOLDER_NAME;
	File fileManualTaskFolder = new File(pathManualTaskFolder);
	if (fileManualTaskFolder.exists()) {
	    String[] manualTaskFolders = fileManualTaskFolder.list();
	    Map manualTaskMap = new HashMap();
	    String nameTask = "";
	    for (int i = 0; i < manualTaskFolders.length; i++) {
		try {
		    String pathMTFolder = pathManualTaskFolder + "/" + manualTaskFolders[i];
		    File fileMTFolder = new File(pathMTFolder);
		    if (!fileMTFolder.isDirectory())
			continue;
		    String pathFilePropMT = pathManualTaskFolder + "/" + manualTaskFolders[i] + ".properties";
		    File filePropMT = new File(pathFilePropMT);
		    FileInputStream fisProp = new FileInputStream(filePropMT);
		    Properties props = new Properties();
		    props.load(fisProp);
		    nameTask = props.getProperty("name");
		    fisProp.close();
		    // copy the properties
		    FileOutputStream fosProp = new FileOutputStream(pathFolderImportOutcome + "/"
			    + manualTaskFolders[i] + ".properties");
		    props.store(fosProp, "");
		    // GeneralUtilities.flushFromInputStreamToOutputStream(fisProp,
		    // fosProp, true);
		    // create zip of the task folder
		    String manualTaskZipFilePath = pathFolderImportOutcome + "/" + manualTaskFolders[i] + ".zip";
		    FileOutputStream fosMT = new FileOutputStream(manualTaskZipFilePath);
		    ZipOutputStream zipoutMT = new ZipOutputStream(fosMT);
		    TransformersUtilities.compressFolder(pathMTFolder, pathMTFolder, zipoutMT);
		    zipoutMT.flush();
		    zipoutMT.close();
		    fosMT.close();
		    // put task into the manual task map
		    manualTaskMap.put(nameTask, manualTaskZipFilePath);
		} catch (Exception e) {
		    logger.error("Error while generatin zip file for manual task " + nameTask, e);
		}
	    }
	    iri.setManualTasks(manualTaskMap);
	}
	// delete the tmp directory of the current import operation
	ImpExpGeneralUtilities.deleteDir(new File(pathBaseFolder));
	// generate the log file
	File logFile = new File(pathFolderImportOutcome + "/" + exportedFileName + ".log");
	if (logFile.exists())
	    logFile.delete();
	try {
	    FileOutputStream fos = new FileOutputStream(logFile);
	    fos.write(metaLog.getLogBytes());
	    fos.flush();
	    fos.close();
	} catch (Exception e) {
	    logger.error("Error while writing log file ", e);
	}
	// generate the association file
	File assFile = new File(pathFolderImportOutcome + "/" + "associations.xml");
	if (assFile.exists())
	    assFile.delete();
	try {
	    FileOutputStream fos = new FileOutputStream(assFile);
	    fos.write(usrAss.toXml().getBytes());
	    fos.flush();
	    fos.close();
	} catch (Exception e) {
	    logger.error("Error while writing the associations file ", e);
	}

	// set into the result bean the log file path
	iri.setPathLogFile(logFile.getPath());
	// set into the result bean the associations file path
	iri.setPathAssociationsFile(assFile.getPath());
	// return the result info bean
	logger.debug("OUT");
	return iri;
    }


    /**
     * Import exported roles
     * 
     * @throws EMFUserError
     */
    private void importRoles() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedRoles = importer.getAllExportedSbiObjects(sessionExpDB, "SbiExtRoles");
	    Iterator iterSbiRoles = exportedRoles.iterator();
	    while (iterSbiRoles.hasNext()) {
		SbiExtRoles role = (SbiExtRoles) iterSbiRoles.next();
		Integer oldId = role.getExtRoleId();
		Map roleIdAss = metaAss.getRoleIDAssociation();
		Set roleIdAssSet = roleIdAss.keySet();
		if (roleIdAssSet.contains(oldId)) {
		    metaLog.log("Exported role " + role.getName() + " not inserted"
			    + " because it has been associated to an existing role or it has the same name "
			    + " of an existing role");
		    continue;
		}
		SbiExtRoles newRole = ImportUtilities.makeNewSbiExtRole(role);
		String roleCd = role.getRoleTypeCode();
		Map unique = new HashMap();
		unique.put("valuecd", roleCd);
		unique.put("domaincd", "ROLE_TYPE");
		SbiDomains existDom = (SbiDomains) importer.checkExistence(unique, sessionCurrDB, new SbiDomains());
		if (existDom != null) {
		    newRole.setRoleType(existDom);
		    newRole.setRoleTypeCode(existDom.getValueCd());
		}
		sessionCurrDB.save(newRole);
		metaLog.log("Inserted new role " + newRole.getName());
		Integer newId = newRole.getExtRoleId();
		metaAss.insertCoupleRole(oldId, newId);
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports exported engines
     * 
     * @throws EMFUserError
     */
    private void importEngines() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedEngines = importer.getAllExportedSbiObjects(sessionExpDB, "SbiEngines");
	    Iterator iterSbiEngines = exportedEngines.iterator();
	    while (iterSbiEngines.hasNext()) {
		SbiEngines engine = (SbiEngines) iterSbiEngines.next();
		Integer oldId = engine.getEngineId();
		Map engIdAss = metaAss.getEngineIDAssociation();
		Set engIdAssSet = engIdAss.keySet();
		if (engIdAssSet.contains(oldId)) {
		    metaLog.log("Exported engine " + engine.getName() + " not inserted"
			    + " because it has been associated to an existing engine or it has the same label "
			    + " of an existing engine");
		    continue;
		}
		SbiEngines newEng = ImportUtilities.makeNewSbiEngine(engine);
		SbiDomains engineTypeDomain = newEng.getEngineType();
		Map uniqueEngineType = new HashMap();
		uniqueEngineType.put("valuecd", engineTypeDomain.getValueCd());
		uniqueEngineType.put("domaincd", "ENGINE_TYPE");
		SbiDomains existEngineTypeDomain = (SbiDomains) importer.checkExistence(uniqueEngineType,
			sessionCurrDB, new SbiDomains());
		if (existEngineTypeDomain != null) {
		    newEng.setEngineType(existEngineTypeDomain);
		}
		SbiDomains biobjectTypeDomain = newEng.getBiobjType();
		Map uniqueBiobjectType = new HashMap();
		uniqueBiobjectType.put("valuecd", biobjectTypeDomain.getValueCd());
		uniqueBiobjectType.put("domaincd", "BIOBJ_TYPE");
		SbiDomains existBiobjectTypeDomain = (SbiDomains) importer.checkExistence(uniqueBiobjectType,
			sessionCurrDB, new SbiDomains());
		if (existBiobjectTypeDomain != null) {
		    newEng.setBiobjType(existBiobjectTypeDomain);
		}
		// check datasource link
		SbiDataSource expDs = engine.getDataSource();
		String label = (String) metaAss.getDataSourceAssociation().get(expDs.getLabel());
		if (label == null) {
		    // exist a DataSource Association, read a new DataSource
		    // from the DB
		    label = expDs.getLabel();
		}
		Criterion labelCriterrion = Expression.eq("label", label);
		Criteria criteria = sessionCurrDB.createCriteria(SbiDataSource.class);
		criteria.add(labelCriterrion);
		SbiDataSource localDS = (SbiDataSource) criteria.uniqueResult();
		newEng.setDataSource(localDS);
		sessionCurrDB.save(newEng);
		metaLog.log("Inserted new engine " + engine.getName());
		Integer newId = newEng.getEngineId();
		metaAss.insertCoupleEngine(oldId, newId);
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    private void importDataSource() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedDS = importer.getAllExportedSbiObjects(sessionExpDB, "SbiDataSource");
	    Iterator iterSbiDataSource = exportedDS.iterator();

	    while (iterSbiDataSource.hasNext()) {
		SbiDataSource dataSource = (SbiDataSource) iterSbiDataSource.next();
		Integer oldId = new Integer(dataSource.getDsId());
		String label = dataSource.getLabel();
		Map engIdAss = metaAss.getDataSourceAssociation();
		Set engIdAssSet = engIdAss.keySet();
		if (engIdAssSet.contains(label)) {
		    metaLog.log("Exported dataSource " + dataSource.getLabel() + " not inserted"
			    + " because exist dataSource with the same label ");
		    continue;
		}

		SbiDataSource newDS = ImportUtilities.makeNewDataSource(dataSource);
		Integer newId = (Integer) sessionCurrDB.save(newDS);

		metaLog.log("Inserted new engine " + newDS.getLabel());
		metaAss.insertCoupleDataSources(dataSource.getLabel(), newDS.getLabel());
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports exported functionalities
     * 
     * @throws EMFUserError
     */
    private void importFunctionalities() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedFuncts = importer.getAllExportedSbiObjects(sessionExpDB, "SbiFunctions");

	    while (exportedFuncts.size() != 0) {
		Iterator iterSbiFuncts = exportedFuncts.iterator();
		int minEl = 1000;
		SbiFunctions functToInsert = null;
		SbiFunctions funct = null;

		// search the functionality for insert
		while (iterSbiFuncts.hasNext()) {
		    funct = (SbiFunctions) iterSbiFuncts.next();
		    String path = funct.getPath();
		    int numEl = path.split("/").length; // the number of levels
		    if (numEl < minEl) {
			minEl = numEl;
			functToInsert = funct;
		    }
		}

		// remove function from list
		exportedFuncts = removeFromList(exportedFuncts, functToInsert);

		logger.info("Insert the Funtionality (Path):" + functToInsert.getPath());

		// insert function
		Integer expId = functToInsert.getFunctId();
		Map functIdAss = metaAss.getFunctIDAssociation();
		Set functIdAssSet = functIdAss.keySet();
		// if the functionality is present skip the insert
		if (functIdAssSet.contains(expId)) {
		    logger.info("Exported functionality " + functToInsert.getName() + " not inserted"
			    + " because it has the same label (and the same path) of an existing functionality");
		    metaLog.log("Exported functionality " + functToInsert.getName() + " not inserted"
			    + " because it has the same label (and the same path) of an existing functionality");
		    continue;
		}
		SbiFunctions newFunct = ImportUtilities.makeNewSbiFunction(functToInsert);
		String functCd = functToInsert.getFunctTypeCd();
		Map unique = new HashMap();
		unique.put("valuecd", functCd);
		unique.put("domaincd", "FUNCT_TYPE");
		SbiDomains existDom = (SbiDomains) importer.checkExistence(unique, sessionCurrDB, new SbiDomains());
		if (existDom != null) {
		    newFunct.setFunctType(existDom);
		    newFunct.setFunctTypeCd(existDom.getValueCd());
		}
		String path = newFunct.getPath();
		String parentPath = path.substring(0, path.lastIndexOf('/'));
		Query hibQuery = sessionCurrDB.createQuery(" from SbiFunctions where path = '" + parentPath + "'");
		SbiFunctions functParent = (SbiFunctions) hibQuery.uniqueResult();
		if (functParent != null) {
		    newFunct.setParentFunct(functParent);
		}
		// manages prog column that determines the folders order
		if (functParent == null)
		    newFunct.setProg(new Integer(1));
		else {
		    // loads sub functionalities
		    Query query = sessionCurrDB
			    .createQuery("select max(s.prog) from SbiFunctions s where s.parentFunct.functId = "
				    + functParent.getFunctId());
		    Integer maxProg = (Integer) query.uniqueResult();
		    if (maxProg != null)
			newFunct.setProg(new Integer(maxProg.intValue() + 1));
		    else
			newFunct.setProg(new Integer(1));
		}
		sessionCurrDB.save(newFunct);
		metaLog.log("Inserted new functionality " + newFunct.getName() + " with path " + newFunct.getPath());
		Integer newId = newFunct.getFunctId();
		metaAss.insertCoupleFunct(expId, newId);

	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}

    }

    private List removeFromList(List complete, SbiFunctions funct) {
	logger.debug("IN");
	List toReturn = new ArrayList();
	Iterator iterList = complete.iterator();
	while (iterList.hasNext()) {
	    SbiFunctions listFunct = (SbiFunctions) iterList.next();
	    if (!listFunct.getPath().equals(funct.getPath())) {
		toReturn.add(listFunct);
	    }
	}
	logger.debug("OUT");
	return toReturn;
    }

    /**
     * Import exported lovs
     * 
     * @throws EMFUserError
     */
    private void importLovs(boolean overwrite) throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedLovs = importer.getAllExportedSbiObjects(sessionExpDB, "SbiLov");
	    Iterator iterSbiLovs = exportedLovs.iterator();
	    while (iterSbiLovs.hasNext()) {
			SbiLov exportedLov = (SbiLov) iterSbiLovs.next();
			Integer oldId = exportedLov.getLovId();
			Integer existingLovId = null; 
			Map lovIdAss = metaAss.getLovIDAssociation();
			Set lovIdAssSet = lovIdAss.keySet();
			if (lovIdAssSet.contains(oldId) && !overwrite) {
			    metaLog.log("Exported lov " + exportedLov.getName() + " not inserted"
				    + " because it has the same label of an existing lov");
			    continue;
			} else {
				existingLovId = (Integer) lovIdAss.get(oldId);
			}
			if (existingLovId != null) {
				logger.info("The lov with label:[" + exportedLov.getLabel() + "] is just present. It will be updated.");
			    metaLog.log("The lov with label = [" + exportedLov.getLabel() + "] will be updated.");
				SbiLov existinglov = ImportUtilities.modifyExistingSbiLov(exportedLov, sessionCurrDB, existingLovId);
			    ImportUtilities.associateWithExistingEntities(existinglov, exportedLov, sessionCurrDB, importer, metaAss);
			    sessionCurrDB.update(existinglov);
			} else {
				SbiLov newlov = ImportUtilities.makeNewSbiLov(exportedLov);
				ImportUtilities.associateWithExistingEntities(newlov, exportedLov, sessionCurrDB, importer, metaAss);
				sessionCurrDB.save(newlov);
				metaLog.log("Inserted new lov " + newlov.getName());
				Integer newId = newlov.getLovId();
				metaAss.insertCoupleLov(oldId, newId);
			}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Import exported checks
     * 
     * @throws EMFUserError
     */
    private void importChecks() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedChecks = importer.getAllExportedSbiObjects(sessionExpDB, "SbiChecks");
	    Iterator iterSbiChecks = exportedChecks.iterator();
	    while (iterSbiChecks.hasNext()) {
		SbiChecks check = (SbiChecks) iterSbiChecks.next();
		Integer oldId = check.getCheckId();
		Map checkIdAss = metaAss.getCheckIDAssociation();
		Set checkIdAssSet = checkIdAss.keySet();
		if (checkIdAssSet.contains(oldId)) {
		    metaLog.log("Exported check " + check.getName() + " not inserted"
			    + " because it has the same label of an existing check");
		    continue;
		}
		SbiChecks newck = ImportUtilities.makeNewSbiCheck(check);
		String valueCd = check.getValueTypeCd();
		Map unique = new HashMap();
		unique.put("valuecd", valueCd);
		unique.put("domaincd", "CHECK");
		SbiDomains existDom = (SbiDomains) importer.checkExistence(unique, sessionCurrDB, new SbiDomains());
		if (existDom != null) {
		    newck.setCheckType(existDom);
		    newck.setValueTypeCd(existDom.getValueCd());
		}
		sessionCurrDB.save(newck);

		metaLog.log("Inserted new check " + newck.getName());
		Integer newId = newck.getCheckId();
		metaAss.insertCoupleCheck(oldId, newId);
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Import exported parameters
     * 
     * @throws EMFUserError
     */
    private void importParameters(boolean overwrite) throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedParams = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParameters");
	    Iterator iterSbiParams = exportedParams.iterator();
	    while (iterSbiParams.hasNext()) {
			SbiParameters exportedParameter = (SbiParameters) iterSbiParams.next();
			Integer oldId = exportedParameter.getParId();
			Integer existingParId = null;
			Map paramIdAss = metaAss.getParameterIDAssociation();
			Set paramIdAssSet = paramIdAss.keySet();
			if (paramIdAssSet.contains(oldId) && !overwrite) {
			    metaLog.log("Exported parameter " + exportedParameter.getName() + " not inserted"
				    + " because it has the same label of an existing parameter");
			    continue;
			} else {
				existingParId = (Integer) paramIdAss.get(oldId);
			}
			if (existingParId != null) {
			    logger.info("The parameter with label:[" + exportedParameter.getLabel() + "] is just present. It will be updated.");
			    metaLog.log("The parameter with label = [" + exportedParameter.getLabel() + "] will be updated.");
				SbiParameters existingParameter = ImportUtilities.modifyExistingSbiParameter(exportedParameter, sessionCurrDB, existingParId);
				ImportUtilities.associateWithExistingEntities(existingParameter, exportedParameter, sessionCurrDB, importer, metaAss);
				sessionCurrDB.update(existingParameter);
			} else {
				SbiParameters newPar = ImportUtilities.makeNewSbiParameter(exportedParameter);
				ImportUtilities.associateWithExistingEntities(newPar, exportedParameter, sessionCurrDB, importer, metaAss);
				sessionCurrDB.save(newPar);
				metaLog.log("Inserted new parameter " + newPar.getName());
				Integer newId = newPar.getParId();
				metaAss.insertCoupleParameter(oldId, newId);
			}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * import exported biobjects
     * 
     * @throws EMFUserError
     */
    private void importBIObjects(boolean overwrite) throws EMFUserError {
		logger.debug("IN");
		try {
		    List exportedBIObjs = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjects");
		    Iterator iterSbiObjs = exportedBIObjs.iterator();
		    while (iterSbiObjs.hasNext()) {
				SbiObjects exportedObj = (SbiObjects) iterSbiObjs.next();
				Integer expId = exportedObj.getBiobjId();
				Integer existingObjId = null;
				Map objIdAss = metaAss.getBIobjIDAssociation();
			    Set objIdAssSet = objIdAss.keySet();
				if (objIdAssSet.contains(expId) && !overwrite) {
					metaLog.log("Exported biobject "+exportedObj.getName()+" not inserted" +
								" because it has the same label of an existing biobject");
					continue;
				} else {
					existingObjId = (Integer) objIdAss.get(expId);
				}
				
				SbiObjects obj = null;
				if (existingObjId != null) {
					logger.info("The document with label:[" + exportedObj.getLabel() + "] is just present. It will be updated.");
				    metaLog.log("The document with label = [" + exportedObj.getLabel() + "] will be updated.");
				    obj = ImportUtilities.modifyExistingSbiObject(exportedObj, sessionCurrDB, existingObjId);
				    ImportUtilities.associateWithExistingEntities(obj, exportedObj, sessionCurrDB, importer, metaAss);
				    sessionCurrDB.update(obj);
				} else {
					obj = ImportUtilities.makeNewSbiObject(exportedObj);
					ImportUtilities.associateWithExistingEntities(obj, exportedObj, sessionCurrDB, importer, metaAss);
				    // insert document
				    Integer newId = (Integer) sessionCurrDB.save(obj);
				    metaLog.log("Inserted new biobject " + obj.getName());
				    metaAss.insertCoupleBIObj(expId, newId);
				}
				// manage object template
				insertObjectTemplate(obj, exportedObj.getBiobjId());
				// manage sub_object here
			    insertSubObject(obj, exportedObj);
			    // manage snapshot here
			    insertSnapshot(obj, exportedObj);
			    
			    
			    // TODO controllare che fa questo e se serve!!!
			    //updateSubObject(obj, exportedObj.getBiobjId());
		    }
		} finally {
		    logger.debug("OUT");
		}
    }

    private void insertSnapshot(SbiObjects obj, SbiObjects exportedObj) throws EMFUserError {
		logger.debug("IN");
		List exportedSnapshotsList = null;
		List currentSnapshotsList = null;
		try {
		    Query hibQuery = sessionExpDB.createQuery(" from SbiSnapshots ot where ot.sbiObject.biobjId = " + exportedObj.getBiobjId());
		    exportedSnapshotsList = hibQuery.list();
		    if (exportedSnapshotsList.isEmpty()) {
		    	logger.debug("Exported document with label=[" + exportedObj.getLabel() + "] has no snapshots");
		    	return;
		    }
		    hibQuery = sessionCurrDB
	    		.createQuery(" from SbiSnapshots ot where ot.sbiObject.biobjId = " + obj.getBiobjId());
		    currentSnapshotsList = hibQuery.list();
		    Iterator exportedSnapshotsListIt = exportedSnapshotsList.iterator();
		    while (exportedSnapshotsListIt.hasNext()) {
		    	SbiSnapshots expSbiSnapshots = (SbiSnapshots) exportedSnapshotsListIt.next();
		    	if (isAlreadyExisting(expSbiSnapshots, currentSnapshotsList)) {
		    		logger.info("Exported snaphost with name = [" + expSbiSnapshots.getName() + "] and creation date = [" + expSbiSnapshots.getCreationDate() + "] (of document with name = [" + exportedObj.getName() + "] and label = [" + exportedObj.getLabel() + "]) is already existing, most likely it is the same snapshot, so it will not be inserted.");
		    		metaLog.log("Exported snaphost with name = [" + expSbiSnapshots.getName() + "] and creation date = [" + expSbiSnapshots.getCreationDate() + "] (of document with name = [" + exportedObj.getName() + "] and label = [" + exportedObj.getLabel() + "]) is already existing, most likely it is the same snapshot, so it will not be inserted.");
		    		continue;
		    	} else {
				    SbiSnapshots newSnapshots = ImportUtilities.makeNewSbiSnapshots(expSbiSnapshots);
				    newSnapshots.setSbiObject(obj);
				    SbiBinContents binary = insertBinaryContent(expSbiSnapshots.getSbiBinContents());
				    newSnapshots.setSbiBinContents(binary);
				    sessionCurrDB.save(newSnapshots);
		    	}
		    }
		} catch (HibernateException he) {
		    logger.error("Error while getting exported template objects ", he);
		    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
		} finally {
		    logger.debug("OUT");
		}
    }
    
    private boolean isAlreadyExisting(SbiSnapshots expSbiSnapshots,
			List currentSnapshotsList) {
		Iterator currentSnapshotsListIt = currentSnapshotsList.iterator();
		while (currentSnapshotsListIt.hasNext()) {
			SbiSnapshots currentSnapshot = (SbiSnapshots) currentSnapshotsListIt.next();
			if (((currentSnapshot.getName() == null && expSbiSnapshots.getName() == null) || 
					(currentSnapshot.getName() != null && currentSnapshot.getName().equals(expSbiSnapshots.getName()))) 
				&& ((currentSnapshot.getDescription() == null && expSbiSnapshots.getDescription() == null) || 
						(currentSnapshot.getDescription() != null && currentSnapshot.getDescription().equals(expSbiSnapshots.getDescription())))
				&& currentSnapshot.getCreationDate().equals(expSbiSnapshots.getCreationDate())) {
						return true;
			}
		}
		return false;
	}


	private void updateSnapshot(SbiObjects obj, Integer objIdExp) throws EMFUserError {
	logger.debug("IN");
	List subObjList = null;
	try {
	    Query hibQuery = sessionCurrDB.createQuery(" from SbiSnapshots ot where ot.sbiObject.biobjId = " + obj.getBiobjId());
	    subObjList = hibQuery.list();
	    if (subObjList.isEmpty()) {
		logger.warn(" Error during reading of Existing SbiSnapshots");
	    }
	    SbiSnapshots existingSbiSnapshots = (SbiSnapshots) subObjList.get(0);
	    
	    hibQuery = sessionExpDB.createQuery(" from SbiSnapshots ot where ot.sbiObject.biobjId = " + objIdExp);
	    subObjList = hibQuery.list();
	    if (subObjList.isEmpty()) {
		logger.warn(" SbiSnapshots is not present");
		return;
	    }
	    
	    SbiSnapshots expSbiSnapshots = (SbiSnapshots) subObjList.get(0);
	    
	    existingSbiSnapshots.setCreationDate(expSbiSnapshots.getCreationDate());
	    existingSbiSnapshots.setDescription(expSbiSnapshots.getDescription());
	    existingSbiSnapshots.setName(expSbiSnapshots.getName());
	    //existingSbiSnapshots.setSbiObject(obj);
	    SbiBinContents existingBinaryContent=existingSbiSnapshots.getSbiBinContents();
	    sessionCurrDB.delete(existingBinaryContent);
	    SbiBinContents binary = insertBinaryContent(expSbiSnapshots.getSbiBinContents());
	    existingSbiSnapshots.setSbiBinContents(binary);
	    sessionCurrDB.update(existingSbiSnapshots);

	} catch (HibernateException he) {
	    logger.error("Error while getting exported template objects ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }    

    private void updateSubObject(SbiObjects obj, Integer objIdExp) throws EMFUserError {
	logger.debug("IN");
	List subObjList = null;
	try {
	    // read the existing sub object
	    Query hibQuery = sessionCurrDB
	    .createQuery(" from SbiSubObjects ot where ot.sbiObject.biobjId = " + obj.getBiobjId());
            subObjList = hibQuery.list();
            if (subObjList.isEmpty()) {
        	logger.warn(" Existing Sub Object is not present");
            }	
            SbiSubObjects existingSubObject = (SbiSubObjects) subObjList.get(0);
            if (existingSubObject==null){
        	logger.warn("Don't read the Existing SubObject ... ERROR");
        	return;
            }
            // read the import sub object
	    hibQuery = sessionExpDB
		    .createQuery(" from SbiSubObjects ot where ot.sbiObject.biobjId = " + objIdExp);
	    subObjList = hibQuery.list();
	    if (subObjList.isEmpty()) {
		logger.warn(" Sub Object is not present");
		return;
	    }
	    SbiSubObjects expSubObject = (SbiSubObjects) subObjList.get(0);
	    existingSubObject.setCreationDate(expSubObject.getCreationDate());
	    existingSubObject.setDescription(expSubObject.getDescription());
	    existingSubObject.setLastChangeDate(expSubObject.getLastChangeDate());
	    existingSubObject.setIsPublic(expSubObject.getIsPublic());
	    existingSubObject.setName(expSubObject.getName());
	    existingSubObject.setOwner(expSubObject.getOwner());
	    //existingSubObject.setSbiObject(obj);
	    SbiBinContents existingBinaryContent=existingSubObject.getSbiBinContents();
	    sessionCurrDB.delete(existingBinaryContent);
	    SbiBinContents binary = insertBinaryContent(expSubObject.getSbiBinContents());
	    existingSubObject.setSbiBinContents(binary);
	    sessionCurrDB.update(existingSubObject);

	} catch (HibernateException he) {
	    logger.error("Error while getting exported template objects ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }
    
    private void insertSubObject(SbiObjects obj, SbiObjects exportedObj) throws EMFUserError {
		logger.debug("IN");
		List exportedSubObjList = null;
		List currentSubObjList = null;
		try {
		    Query hibQuery = sessionExpDB
			    .createQuery(" from SbiSubObjects ot where ot.sbiObject.biobjId = " + exportedObj.getBiobjId());
		    exportedSubObjList = hibQuery.list();
		    if (exportedSubObjList.isEmpty()) {
		    	logger.debug("Exported document with label=[" + exportedObj.getLabel() + "] has no subobjects");
		    	return;
		    }
		    hibQuery = sessionCurrDB
		    	.createQuery(" from SbiSubObjects ot where ot.sbiObject.biobjId = " + obj.getBiobjId());
		    currentSubObjList = hibQuery.list();
		    Iterator exportedSubObjListIt = exportedSubObjList.iterator();
		    while (exportedSubObjListIt.hasNext()) {
		    	SbiSubObjects expSubObject = (SbiSubObjects) exportedSubObjListIt.next();
		    	if (isAlreadyExisting(expSubObject, currentSubObjList)) {
		    		logger.info("Exported subobject with name = [" + expSubObject.getName() + "] and owner = [" + expSubObject.getOwner() + "] and visibility = [" + expSubObject.getIsPublic() + "] and creation date = [" + expSubObject.getCreationDate() + "] (of document with name = [" + exportedObj.getName() + "] and label = [" + exportedObj.getLabel() + "]) is already existing, so it will not be inserted.");
		    		metaLog.log("Exported subobject with name = [" + expSubObject.getName() + "] and owner = [" + expSubObject.getOwner() + "] and visibility = [" + expSubObject.getIsPublic() + "] and creation date = [" + expSubObject.getCreationDate() + "] (of document with name = [" + exportedObj.getName() + "] and label = [" + exportedObj.getLabel() + "]) is already existing, most likely it is the same subobject, so it will not be inserted.");
		    		continue;
		    	} else {
				    SbiSubObjects newSubObj = ImportUtilities.makeNewSbiSubObjects(expSubObject);
				    newSubObj.setSbiObject(obj);
				    SbiBinContents binary = insertBinaryContent(expSubObject.getSbiBinContents());
				    newSubObj.setSbiBinContents(binary);
				    sessionCurrDB.save(newSubObj);
		    	}
		    }
		} catch (HibernateException he) {
		    logger.error("Error while getting exported template objects ", he);
		    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
		} finally {
		    logger.debug("OUT");
		}
    }

   /**
    * Controls if a subobject is already existing (i.e. they have the same name, owner, visibility, 
    * creation date and last modification date)
    * @param expSubObject
    * @param currentSubObjList
    * @return the true if the subobject is already existing, false otherwise
    */
    private boolean isAlreadyExisting(SbiSubObjects expSubObject,
			List currentSubObjList) {
		Iterator currentSubObjListIt = currentSubObjList.iterator();
		while (currentSubObjListIt.hasNext()) {
			SbiSubObjects currentSubObject = (SbiSubObjects) currentSubObjListIt.next();
			if (((currentSubObject.getName() == null && expSubObject.getName() == null) ||
					(currentSubObject.getName() != null && currentSubObject.getName().equals(expSubObject.getName())))  
				&& ((currentSubObject.getOwner() == null && expSubObject.getOwner() == null) ||
					(currentSubObject.getOwner() != null && currentSubObject.getOwner().equals(expSubObject.getOwner())))
				&& currentSubObject.getIsPublic().equals(expSubObject.getIsPublic())
				&& currentSubObject.getCreationDate().equals(expSubObject.getCreationDate())
				&& currentSubObject.getLastChangeDate().equals(expSubObject.getLastChangeDate())) {
					return true;
			}
		}
		return false;
	}


	private void insertObjectTemplate(SbiObjects obj, Integer objIdExp) throws EMFUserError {
	logger.debug("IN");
	List templateList = null;
	try {
	    Query hibQuery = sessionExpDB.createQuery(" from SbiObjTemplates ot where ot.sbiObject.biobjId = "
		    + objIdExp);
	    templateList = hibQuery.list();
	    if (templateList.isEmpty()) {
			logger.warn(" Templates is not present");
			return;
	    }
	    // finds the next prog value
	    Integer nextProg = getNextProg(obj.getBiobjId());
	    
	    SbiObjTemplates expTemplate = (SbiObjTemplates) templateList.get(0);
	    SbiObjTemplates newObj = ImportUtilities.makeNewSbiObjTemplates(expTemplate);
	    newObj.setProg(nextProg);
	    if (nextProg.intValue() > 1) {
	    	// old current template is no more active
			logger.debug("Update template...");
			SbiObjTemplates existingObjTemplate = getCurrentActiveTemplate(obj.getBiobjId());
			existingObjTemplate.setActive(new Boolean(false));
			sessionCurrDB.save(existingObjTemplate);
	    }
	    newObj.setSbiObject(obj);
	    SbiBinContents binary = insertBinaryContent(expTemplate.getSbiBinContents());
	    newObj.setSbiBinContents(binary);
	    sessionCurrDB.save(newObj);
	} catch (HibernateException he) {
	    logger.error("Error while getting exported template objects ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    private SbiObjTemplates getCurrentActiveTemplate(Integer biobjId) {
    	logger.debug("IN");
    	String hql = "from SbiObjTemplates sot where sot.active=true and sot.sbiObject.biobjId=" + biobjId;
		Query query = sessionCurrDB.createQuery(hql);
		SbiObjTemplates hibObjTemp = (SbiObjTemplates)query.uniqueResult();
		logger.debug("OUT");
		return hibObjTemp;
    }
    
    private Integer getNextProg(Integer objId) {
    	logger.debug("IN");
	    String hql = "select max(sot.prog) as maxprog from SbiObjTemplates sot where sot.sbiObject.biobjId = " + objId;
	    Query query = sessionCurrDB.createQuery(hql);
		Integer maxProg = (Integer) query.uniqueResult();
		if (maxProg == null) {
			maxProg = new Integer(1);
		} else {
			maxProg = new Integer(maxProg.intValue() + 1);
		}
		logger.debug("OUT");
		return maxProg;
    }
    
    private SbiBinContents insertBinaryContent(SbiBinContents binaryContent) throws EMFUserError {
	logger.debug("IN");
	List templateList = null;
	SbiBinContents newObj = null;
	try {
	    Query hibQuery = sessionExpDB.createQuery(" from SbiBinContents where id = " + binaryContent.getId());
	    templateList = hibQuery.list();
	    if (templateList.isEmpty()) {
		logger.warn(" Binary Content is not present");
		return null;
	    }
	    SbiBinContents expBinaryContent = (SbiBinContents) templateList.get(0);
	    newObj = ImportUtilities.makeNewSbiBinContents(expBinaryContent);
	    // save new binary content
	    sessionCurrDB.save(newObj);
	    return newObj;

	} catch (HibernateException he) {
	    logger.error("Error while getting exported binary content objects ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports exported paruses
     * 
     * @throws EMFUserError
     */
    private void importParuse() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedParuses = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParuse");
	    Iterator iterSbiParuses = exportedParuses.iterator();
	    while (iterSbiParuses.hasNext()) {
		SbiParuse paruse = (SbiParuse) iterSbiParuses.next();
		SbiParameters param = paruse.getSbiParameters();
		Integer oldParamId = param.getParId();
		Map assParams = metaAss.getParameterIDAssociation();
		Integer newParamId = (Integer) assParams.get(oldParamId);
		if (newParamId != null) {
		    SbiParameters newParam = ImportUtilities.makeNewSbiParameter(param, newParamId);
		    paruse.setSbiParameters(newParam);
		}

		SbiLov lov = paruse.getSbiLov();
		if (lov != null) {
		    Integer oldLovId = lov.getLovId();
		    Map assLovs = metaAss.getLovIDAssociation();
		    Integer newLovId = (Integer) assLovs.get(oldLovId);
		    if (newLovId != null) {
			SbiLov newlov = ImportUtilities.makeNewSbiLov(lov, newLovId);
			paruse.setSbiLov(newlov);
		    }
		}

		Integer oldId = paruse.getUseId();
		Map paruseIdAss = metaAss.getParuseIDAssociation();
		Set paruseIdAssSet = paruseIdAss.keySet();
		if (paruseIdAssSet.contains(oldId)) {
		    metaLog.log("Exported parameter use " + paruse.getName() + " not inserted"
			    + " because it has the same label of an existing parameter use");
		    continue;
		}
		SbiParuse newParuse = ImportUtilities.makeNewSbiParuse(paruse);
		sessionCurrDB.save(newParuse);
		metaLog.log("Inserted new parameter use " + newParuse.getName() + " for param " + param.getName());
		Integer newId = newParuse.getUseId();
		sessionExpDB.evict(paruse);
		metaAss.insertCoupleParuse(oldId, newId);
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Importa exported paruse details
     * 
     * @throws EMFUserError
     */
    private void importParuseDet() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedParuseDets = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParuseDet");
	    Iterator iterSbiParuseDets = exportedParuseDets.iterator();
	    while (iterSbiParuseDets.hasNext()) {
		SbiParuseDet parusedet = (SbiParuseDet) iterSbiParuseDets.next();
		// get ids of exported role and paruse associzted
		Integer paruseid = parusedet.getId().getSbiParuse().getUseId();
		Integer roleid = parusedet.getId().getSbiExtRoles().getExtRoleId();
		// get association of roles and paruses
		Map paruseIdAss = metaAss.getParuseIDAssociation();
		Map roleIdAss = metaAss.getRoleIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newParuseid = (Integer) paruseIdAss.get(paruseid);
		Integer newRoleid = (Integer) roleIdAss.get(roleid);
		// build a new id for the SbiParuseDet
		SbiParuseDetId parusedetid = parusedet.getId();
		if (newParuseid != null) {
		    SbiParuse sbiparuse = parusedetid.getSbiParuse();
		    SbiParuse newParuse = ImportUtilities.makeNewSbiParuse(sbiparuse, newParuseid);
		    parusedetid.setSbiParuse(newParuse);
		    paruseid = newParuseid;
		}
		if (newRoleid != null) {
		    SbiExtRoles sbirole = parusedetid.getSbiExtRoles();
		    SbiExtRoles newRole = ImportUtilities.makeNewSbiExtRole(sbirole, newRoleid);
		    parusedetid.setSbiExtRoles(newRole);
		    roleid = newRoleid;
		}
		parusedet.setId(parusedetid);
		// check if the association between metadata already exist
		Map unique = new HashMap();
		unique.put("paruseid", paruseid);
		unique.put("roleid", roleid);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiParuseDet());
		if (existObj == null) {
		    sessionCurrDB.save(parusedet);
		    metaLog.log("Inserted new association between paruse " + parusedet.getId().getSbiParuse().getName()
			    + " and role " + parusedet.getId().getSbiExtRoles().getName());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports associations between parameter uses and checks
     * 
     * @throws EMFUserError
     */
    private void importParuseCheck() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedParuseChecks = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParuseCk");
	    Iterator iterSbiParuseChecks = exportedParuseChecks.iterator();
	    while (iterSbiParuseChecks.hasNext()) {
		SbiParuseCk paruseck = (SbiParuseCk) iterSbiParuseChecks.next();
		// get ids of exported paruse and check associzted
		Integer paruseid = paruseck.getId().getSbiParuse().getUseId();
		Integer checkid = paruseck.getId().getSbiChecks().getCheckId();
		// get association of checks and paruses
		Map paruseIdAss = metaAss.getParuseIDAssociation();
		Map checkIdAss = metaAss.getCheckIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newParuseid = (Integer) paruseIdAss.get(paruseid);
		Integer newCheckid = (Integer) checkIdAss.get(checkid);
		// build a new id for the SbiParuseCheck
		SbiParuseCkId parusecheckid = paruseck.getId();
		if (newParuseid != null) {
		    SbiParuse sbiparuse = parusecheckid.getSbiParuse();
		    SbiParuse newParuse = ImportUtilities.makeNewSbiParuse(sbiparuse, newParuseid);
		    parusecheckid.setSbiParuse(newParuse);
		    paruseid = newParuseid;
		}
		if (newCheckid != null) {
		    SbiChecks sbicheck = parusecheckid.getSbiChecks();
		    SbiChecks newCheck = ImportUtilities.makeNewSbiCheck(sbicheck, newCheckid);
		    parusecheckid.setSbiChecks(newCheck);
		    checkid = newCheckid;
		}
		paruseck.setId(parusecheckid);
		// check if the association between metadata already exist
		Map unique = new HashMap();
		unique.put("paruseid", paruseid);
		unique.put("checkid", checkid);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiParuseCk());
		if (existObj == null) {
		    sessionCurrDB.save(paruseck);
		    metaLog.log("Inserted new association between paruse " + paruseck.getId().getSbiParuse().getName()
			    + " and check " + paruseck.getId().getSbiChecks().getName());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports biobject links
     * 
     * @throws EMFUserError
     */
    private void importBIObjectLinks() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedBIObjectsLinks = importer.getAllExportedSbiObjects(sessionExpDB, "SbiSubreports");
	    Iterator iterSbiObjLinks = exportedBIObjectsLinks.iterator();
	    while (iterSbiObjLinks.hasNext()) {
		SbiSubreports objlink = (SbiSubreports) iterSbiObjLinks.next();

		// get biobjects
		SbiObjects masterBIObj = objlink.getId().getMasterReport();
		SbiObjects subBIObj = objlink.getId().getSubReport();
		Integer masterid = masterBIObj.getBiobjId();
		Integer subid = subBIObj.getBiobjId();
		// get association of object
		Map biobjIdAss = metaAss.getBIobjIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newMasterId = (Integer) biobjIdAss.get(masterid);
		Integer newSubId = (Integer) biobjIdAss.get(subid);
		if (newMasterId != null) {
		    masterid = newMasterId;
		}
		if (newSubId != null) {
		    subid = newSubId;
		}
		// build a new id for the SbiSubreport
		SbiSubreportsId sbiSubReportsId = objlink.getId();
		if (sbiSubReportsId != null) {
		    SbiObjects master = sbiSubReportsId.getMasterReport();
		    SbiObjects sub = sbiSubReportsId.getMasterReport();
		    SbiObjects newMaster = ImportUtilities.makeNewSbiObject(master, newMasterId);
		    SbiObjects newSub = ImportUtilities.makeNewSbiObject(sub, newSubId);
		    sbiSubReportsId.setMasterReport(newMaster);
		    sbiSubReportsId.setSubReport(newSub);
		}
		objlink.setId(sbiSubReportsId);
		// check if the association between metadata already exist
		Map unique = new HashMap();
		unique.put("masterid", masterid);
		unique.put("subid", subid);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiSubreports());
		if (existObj == null) {
		    sessionCurrDB.save(objlink);
		    metaLog.log("Inserted new link between master object " + masterBIObj.getLabel()
			    + " and sub object " + subBIObj.getLabel());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports associations between functionalities and objects
     * 
     * @throws EMFUserError
     */
    private void importFunctObject() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedFunctObjects = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjFunc");
	    Iterator iterSbiFunctObjects = exportedFunctObjects.iterator();
	    while (iterSbiFunctObjects.hasNext()) {
		SbiObjFunc objfunct = (SbiObjFunc) iterSbiFunctObjects.next();
		// get ids of exported role, function and state associzted
		Integer functid = objfunct.getId().getSbiFunctions().getFunctId();
		Integer objid = objfunct.getId().getSbiObjects().getBiobjId();
		Integer prog = objfunct.getProg();
		// get association of roles and paruses
		Map functIdAss = metaAss.getFunctIDAssociation();
		Map biobjIdAss = metaAss.getBIobjIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newFunctid = (Integer) functIdAss.get(functid);
		Integer newObjectid = (Integer) biobjIdAss.get(objid);
		// build a new id for the SbiObjFunct
		SbiObjFuncId objfunctid = objfunct.getId();
		if (objfunctid != null) {
		    SbiFunctions sbifunct = objfunctid.getSbiFunctions();
		    SbiFunctions newFunct = ImportUtilities.makeNewSbiFunction(sbifunct, newFunctid);
		    objfunctid.setSbiFunctions(newFunct);
		    functid = newFunctid;
		}
		if (newObjectid != null) {
		    SbiObjects sbiobj = objfunctid.getSbiObjects();
		    SbiObjects newObj = ImportUtilities.makeNewSbiObject(sbiobj, newObjectid);
		    objfunctid.setSbiObjects(newObj);
		    objid = newObjectid;
		}
		objfunct.setId(objfunctid);
		// check if the association between metadata already exist
		Map unique = new HashMap();
		unique.put("objectid", objid);
		unique.put("functionid", functid);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiObjFunc());
		if (existObj == null) {
		    sessionCurrDB.save(objfunct);
		    metaLog.log("Inserted new association between function "
			    + objfunct.getId().getSbiFunctions().getName() + " and object "
			    + objfunct.getId().getSbiObjects().getName());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports associations between functionalities and roles
     * 
     * @throws EMFUserError
     */
    private void importFunctRoles() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedFunctRoles = importer.getAllExportedSbiObjects(sessionExpDB, "SbiFuncRole");
	    Iterator iterSbiFunctRoles = exportedFunctRoles.iterator();
	    while (iterSbiFunctRoles.hasNext()) {
		SbiFuncRole functrole = (SbiFuncRole) iterSbiFunctRoles.next();
		// get ids of exported role, function and state associzted
		Integer functid = functrole.getId().getFunction().getFunctId();
		Integer roleid = functrole.getId().getRole().getExtRoleId();
		Integer stateid = functrole.getId().getState().getValueId();
		// get association of roles and paruses
		Map functIdAss = metaAss.getFunctIDAssociation();
		Map roleIdAss = metaAss.getRoleIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newFunctid = (Integer) functIdAss.get(functid);
		Integer newRoleid = (Integer) roleIdAss.get(roleid);
		// build a new id for the SbiFunctRole
		SbiFuncRoleId functroleid = functrole.getId();
		if (newFunctid != null) {
		    SbiFunctions sbifunct = functroleid.getFunction();
		    SbiFunctions newFunct = ImportUtilities.makeNewSbiFunction(sbifunct, newFunctid);
		    functroleid.setFunction(newFunct);
		    functid = newFunctid;
		}
		if (newRoleid != null) {
		    SbiExtRoles sbirole = functroleid.getRole();
		    SbiExtRoles newRole = ImportUtilities.makeNewSbiExtRole(sbirole, newRoleid);
		    functroleid.setRole(newRole);
		    roleid = newRoleid;
		}
		// get sbidomain of the current system
		String stateCd = functrole.getStateCd();
		Map uniqueDom = new HashMap();
		uniqueDom.put("valuecd", stateCd);
		uniqueDom.put("domaincd", "STATE");
		SbiDomains existDom = (SbiDomains) importer.checkExistence(uniqueDom, sessionCurrDB, new SbiDomains());
		if (existDom != null) {
		    functroleid.setState(existDom);
		}
		functrole.setId(functroleid);
		functrole.setStateCd(existDom.getValueCd());
		// check if the association between metadata already exist
		Map unique = new HashMap();
		unique.put("stateid", existDom.getValueId());
		unique.put("roleid", roleid);
		unique.put("functionid", functid);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiFuncRole());
		if (existObj == null) {
		    sessionCurrDB.save(functrole);
		    metaLog.log("Inserted new association between function "
			    + functrole.getId().getFunction().getName() + " and role "
			    + functrole.getId().getRole().getName());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports associations between exported biobjects and parameters
     * 
     * @throws EMFUserError
     */
    private void importBIObjPar() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedObjPars = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjPar");
	    Iterator iterSbiObjPar = exportedObjPars.iterator();
	    while (iterSbiObjPar.hasNext()) {
		SbiObjPar objpar = (SbiObjPar) iterSbiObjPar.next();
		SbiParameters param = objpar.getSbiParameter();
		SbiObjects biobj = objpar.getSbiObject();
		Integer oldParamId = param.getParId();
		Integer oldBIObjId = biobj.getBiobjId();
		Map assBIObj = metaAss.getBIobjIDAssociation();
		Map assParams = metaAss.getParameterIDAssociation();
		Integer newParamId = (Integer) assParams.get(oldParamId);
		Integer newBIObjId = (Integer) assBIObj.get(oldBIObjId);
		if (newParamId != null) {
		    SbiParameters newParam = ImportUtilities.makeNewSbiParameter(param, newParamId);
		    objpar.setSbiParameter(newParam);
		}
		if (newBIObjId != null) {
		    SbiObjects newObj = ImportUtilities.makeNewSbiObject(biobj, newBIObjId);
		    objpar.setSbiObject(newObj);
		}
		Integer oldId = objpar.getObjParId();

		// check if the association already exist
		Map uniqueMap = new HashMap();
		uniqueMap.put("biobjid", newBIObjId);
		uniqueMap.put("paramid", newParamId);
		uniqueMap.put("urlname", objpar.getParurlNm());
		Object existObj = importer.checkExistence(uniqueMap, sessionCurrDB, new SbiObjPar());
		if (existObj != null) {
		    metaLog.log("Exported association between object " + objpar.getSbiObject().getName() + " "
			    + " and parameter " + objpar.getSbiParameter().getName() + " with url name "
			    + objpar.getParurlNm() + " not inserted"
			    + " because already existing into the current database");
		    continue;
		}

		SbiObjPar newObjpar = ImportUtilities.makeNewSbiObjpar(objpar);
		sessionCurrDB.save(newObjpar);
		metaLog.log("Inserted new biobject parameter with " + newObjpar.getParurlNm() + " for biobject "
			+ newObjpar.getSbiObject().getName());
		Integer newId = newObjpar.getObjParId();
		sessionExpDB.evict(objpar);
		metaAss.insertCoupleObjpar(oldId, newId);
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Imports biparameter dependencies
     * 
     * @throws EMFUserError
     */
    private void importObjParUse() throws EMFUserError {
	logger.debug("IN");
	try {
	    List exportedParDepends = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjParuse");
	    Iterator iterParDep = exportedParDepends.iterator();
	    while (iterParDep.hasNext()) {
		SbiObjParuse pardep = (SbiObjParuse) iterParDep.next();
		// get ids of objpar and paruse associated
		Integer objparId = pardep.getId().getSbiObjPar().getObjParId();
		Integer paruseId = pardep.getId().getSbiParuse().getUseId();
		Integer objparfathId = pardep.getId().getSbiObjParFather().getObjParId();
		String filterOp = pardep.getId().getFilterOperation();
		// get association of objpar and paruses
		Map objparIdAss = metaAss.getObjparIDAssociation();
		Map paruseIdAss = metaAss.getParuseIDAssociation();
		// try to get from association the id associate to the exported
		// metadata
		Integer newObjparId = (Integer) objparIdAss.get(objparId);
		Integer newParuseId = (Integer) paruseIdAss.get(paruseId);
		Integer newObjParFathId = (Integer) objparIdAss.get(objparfathId);
		// build a new id for the SbiObjParuse
		SbiObjParuseId objparuseid = pardep.getId();
		objparuseid.setFilterOperation(filterOp);
		if (newParuseId != null) {
		    SbiParuse sbiparuse = objparuseid.getSbiParuse();
		    SbiParuse newParuse = ImportUtilities.makeNewSbiParuse(sbiparuse, newParuseId);
		    objparuseid.setSbiParuse(newParuse);
		    paruseId = newParuseId;
		}
		if (newObjparId != null) {
		    SbiObjPar sbiobjpar = objparuseid.getSbiObjPar();
		    SbiObjPar newObjPar = ImportUtilities.makeNewSbiObjpar(sbiobjpar, newObjparId);
		    objparuseid.setSbiObjPar(newObjPar);
		    objparId = newObjparId;
		}
		if (newObjParFathId != null) {
		    SbiObjPar sbiobjparfath = objparuseid.getSbiObjParFather();
		    SbiObjPar newObjParFath = ImportUtilities.makeNewSbiObjpar(sbiobjparfath, newObjParFathId);
		    objparuseid.setSbiObjParFather(newObjParFath);
		    objparfathId = newObjParFathId;
		}

		pardep.setId(objparuseid);

		Map unique = new HashMap();
		unique.put("objparid", objparId);
		unique.put("paruseid", paruseId);
		unique.put("objparfathid", objparfathId);
		unique.put("filterop", filterOp);
		Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiObjParuse());
		if (existObj == null) {
		    sessionCurrDB.save(pardep);
		    metaLog.log("Inserted new dependecies between biparameter "
			    + pardep.getId().getSbiObjPar().getLabel() + " of the biobject "
			    + pardep.getId().getSbiObjPar().getSbiObject().getLabel() + " and paruse "
			    + pardep.getId().getSbiParuse().getLabel());
		}
	    }
	} catch (HibernateException he) {
	    logger.error("Error while inserting object ", he);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} catch (Exception e) {
	    logger.error("Error while inserting object ", e);
	    throw new EMFUserError(EMFErrorSeverity.ERROR, "8004", "component_impexp_messages");
	} finally {
	    logger.debug("OUT");
	}
    }

    /**
     * Ends the import procedure.
     */
    public void stopImport() {
	logger.debug("IN");
	metaAss.clear();
	rollback();
	ImpExpGeneralUtilities.deleteDir(new File(pathBaseFolder));
	logger.debug("OUT");
    }

    /**
     * Gets the list of exported data sources.
     * 
     * @return List of the exported data sources
     * 
     * @throws EMFUserError the EMF user error
     */
    public List getExportedDataSources() throws EMFUserError {
	logger.debug("IN");
	List datasources = new ArrayList();
	try {
	    List exportedDS = importer.getAllExportedSbiObjects(sessionExpDB, "SbiDataSource");
	    Iterator iterSbiDataSource = exportedDS.iterator();

	    while (iterSbiDataSource.hasNext()) {
		SbiDataSource dataSource = (SbiDataSource) iterSbiDataSource.next();
		DataSource ds = new DataSource();
		ds.setLabel(dataSource.getLabel());
		ds.setDescr(dataSource.getDescr());
		ds.setDriver(dataSource.getDriver());
		ds.setJndi(dataSource.getJndi());
		datasources.add(ds);
	    }
	} finally {
	    logger.debug("OUT");
	}

	logger.debug("OUT");
	return datasources;
    }

    /**
     * Check the existance of the exported metadata into the current system
     * metadata and insert their associations into the association object
     * MeatadataAssociation.
     * 
     * @throws EMFUserError the EMF user error
     */
    public void checkExistingMetadata() throws EMFUserError {
	logger.debug("IN");
	List exportedParams = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParameters");
	Iterator iterSbiParams = exportedParams.iterator();
	while (iterSbiParams.hasNext()) {
	    SbiParameters paramExp = (SbiParameters) iterSbiParams.next();
	    String labelPar = paramExp.getLabel();
	    Object existObj = importer.checkExistence(labelPar, sessionCurrDB, new SbiParameters());
	    if (existObj != null) {
		SbiParameters paramCurr = (SbiParameters) existObj;
		metaAss.insertCoupleParameter(paramExp.getParId(), paramCurr.getParId());
		metaAss.insertCoupleParameter(paramExp, paramCurr);
		metaLog.log("Found an existing Parameter " + paramCurr.getName() + " with "
			+ "the same label of the exported parameter " + paramExp.getName());
	    }
	}
	List exportedRoles = importer.getAllExportedSbiObjects(sessionExpDB, "SbiExtRoles");
	Iterator iterSbiRoles = exportedRoles.iterator();
	while (iterSbiRoles.hasNext()) {
	    SbiExtRoles roleExp = (SbiExtRoles) iterSbiRoles.next();
	    String roleName = roleExp.getName();
	    Integer expRoleId = roleExp.getExtRoleId();
	    Map rolesAss = metaAss.getRoleIDAssociation();
	    Set keysExpRoleAss = rolesAss.keySet();
	    if (keysExpRoleAss.contains(expRoleId))
		continue;
	    Object existObj = importer.checkExistence(roleName, sessionCurrDB, new SbiExtRoles());
	    if (existObj != null) {
		SbiExtRoles roleCurr = (SbiExtRoles) existObj;
		metaAss.insertCoupleRole(roleExp.getExtRoleId(), roleCurr.getExtRoleId());
		metaAss.insertCoupleRole(roleExp, roleCurr);
		metaLog.log("Found an existing Role " + roleCurr.getName() + " with "
			+ "the same name of the exported role " + roleExp.getName());
	    }
	}
	List exportedParuse = importer.getAllExportedSbiObjects(sessionExpDB, "SbiParuse");
	Iterator iterSbiParuse = exportedParuse.iterator();
	while (iterSbiParuse.hasNext()) {
	    SbiParuse paruseExp = (SbiParuse) iterSbiParuse.next();
	    String label = paruseExp.getLabel();
	    SbiParameters par = paruseExp.getSbiParameters();
	    Integer idPar = par.getParId();
	    // check if the parameter has been associated to a current system
	    // parameter
	    Map paramsAss = metaAss.getParameterIDAssociation();
	    Integer idParAss = (Integer) paramsAss.get(idPar);
	    if (idParAss != null)
		idPar = idParAss;
	    Map unique = new HashMap();
	    unique.put("label", label);
	    unique.put("idpar", idPar);
	    Object existObj = importer.checkExistence(unique, sessionCurrDB, new SbiParuse());
	    if (existObj != null) {
		SbiParuse paruseCurr = (SbiParuse) existObj;
		metaAss.insertCoupleParuse(paruseExp.getUseId(), paruseCurr.getUseId());
		metaAss.insertCoupleParuse(paruseExp, paruseCurr);
		metaLog.log("Found an existing Parameter use " + paruseCurr.getName() + " with "
			+ "the same label of the exported parameter use " + paruseExp.getName());
	    }
	}
	List exportedBiobj = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjects");
	Iterator iterSbiBiobj = exportedBiobj.iterator();
	while (iterSbiBiobj.hasNext()) {
	    SbiObjects objExp = (SbiObjects) iterSbiBiobj.next();
	    String label = objExp.getLabel();
	    Object existObj = importer.checkExistence(label, sessionCurrDB, new SbiObjects());
	    if (existObj != null) {
		SbiObjects objCurr = (SbiObjects) existObj;
		metaAss.insertCoupleBIObj(objExp.getBiobjId(), objCurr.getBiobjId());
		metaAss.insertCoupleBIObj(objExp, objCurr);
		metaLog.log("Found an existing BIObject " + objCurr.getName() + " with "
			+ "the same label and path of the exported BIObject " + objExp.getName());
	    }
	}
	List exportedLov = importer.getAllExportedSbiObjects(sessionExpDB, "SbiLov");
	Iterator iterSbiLov = exportedLov.iterator();
	while (iterSbiLov.hasNext()) {
	    SbiLov lovExp = (SbiLov) iterSbiLov.next();
	    String label = lovExp.getLabel();
	    Object existObj = importer.checkExistence(label, sessionCurrDB, new SbiLov());
	    if (existObj != null) {
		SbiLov lovCurr = (SbiLov) existObj;
		metaAss.insertCoupleLov(lovExp.getLovId(), lovCurr.getLovId());
		metaAss.insertCoupleLov(lovExp, lovCurr);
		metaLog.log("Found an existing Lov " + lovCurr.getName() + " with "
			+ "the same label of the exported lov " + lovExp.getName());
	    }
	}
	List exportedFunct = importer.getAllExportedSbiObjects(sessionExpDB, "SbiFunctions");
	Iterator iterSbiFunct = exportedFunct.iterator();
	while (iterSbiFunct.hasNext()) {
	    SbiFunctions functExp = (SbiFunctions) iterSbiFunct.next();
	    String code = functExp.getCode();
	    Object existObj = importer.checkExistence(code, sessionCurrDB, new SbiFunctions());
	    if (existObj != null) {
		SbiFunctions functCurr = (SbiFunctions) existObj;
		metaAss.insertCoupleFunct(functExp.getFunctId(), functCurr.getFunctId());
		metaAss.insertCoupleFunct(functExp, functCurr);
		metaLog.log("Found an existing Functionality " + functCurr.getName() + " with "
			+ "the same CODE of the exported functionality " + functExp.getName());
	    }
	}
	List exportedEngine = importer.getAllExportedSbiObjects(sessionExpDB, "SbiEngines");
	Iterator iterSbiEng = exportedEngine.iterator();
	while (iterSbiEng.hasNext()) {
	    SbiEngines engExp = (SbiEngines) iterSbiEng.next();
	    String label = engExp.getLabel();
	    Integer expEngineId = engExp.getEngineId();
	    Map engAss = metaAss.getEngineIDAssociation();
	    Set keysExpEngAss = engAss.keySet();
	    if (keysExpEngAss.contains(expEngineId))
		continue;
	    Object existObj = importer.checkExistence(label, sessionCurrDB, new SbiEngines());
	    if (existObj != null) {
		SbiEngines engCurr = (SbiEngines) existObj;
		metaAss.insertCoupleEngine(engExp.getEngineId(), engCurr.getEngineId());
		metaAss.insertCoupleEngine(engExp, engCurr);
		metaLog.log("Found an existing Engine " + engCurr.getName() + " with "
			+ "the same label of the exported engine " + engExp.getName());
	    }
	}
	List exportedCheck = importer.getAllExportedSbiObjects(sessionExpDB, "SbiChecks");
	Iterator iterSbiCheck = exportedCheck.iterator();
	while (iterSbiCheck.hasNext()) {
	    SbiChecks checkExp = (SbiChecks) iterSbiCheck.next();
	    String label = checkExp.getLabel();
	    Object existObj = importer.checkExistence(label, sessionCurrDB, new SbiChecks());
	    if (existObj != null) {
		SbiChecks checkCurr = (SbiChecks) existObj;
		metaAss.insertCoupleCheck(checkExp.getCheckId(), checkCurr.getCheckId());
		metaAss.insertCoupleCheck(checkExp, checkCurr);
		metaLog.log("Found an existing check " + checkCurr.getName() + " with "
			+ "the same label of the exported check " + checkExp.getName());
	    }
	}
	List exportedObjPar = importer.getAllExportedSbiObjects(sessionExpDB, "SbiObjPar");
	Iterator iterSbiObjPar = exportedObjPar.iterator();
	while (iterSbiObjPar.hasNext()) {
	    SbiObjPar objparExp = (SbiObjPar) iterSbiObjPar.next();
	    String urlName = objparExp.getParurlNm();

	    Integer objid = objparExp.getSbiObject().getBiobjId();
	    Map objIdAss = metaAss.getBIobjIDAssociation();
	    Integer newObjid = (Integer) objIdAss.get(objid);
	    if (newObjid != null)
		objid = newObjid;

	    Integer parid = objparExp.getSbiParameter().getParId();
	    Map parIdAss = metaAss.getParameterIDAssociation();
	    Integer newParid = (Integer) parIdAss.get(parid);
	    if (newParid != null)
		parid = newParid;

	    Map uniqueMap = new HashMap();
	    uniqueMap.put("biobjid", objid);
	    uniqueMap.put("paramid", parid);
	    uniqueMap.put("urlname", urlName);
	    Object existObj = importer.checkExistence(uniqueMap, sessionCurrDB, new SbiObjPar());

	    if (existObj != null) {
		SbiObjPar objParCurr = (SbiObjPar) existObj;
		metaAss.insertCoupleObjpar(objparExp.getObjParId(), objParCurr.getObjParId());
		metaAss.insertCoupleObjpar(objparExp, objParCurr);
		metaLog.log("Found an existing association between object " + objparExp.getSbiObject().getName()
			+ " and parameter " + objparExp.getSbiParameter().getName() + " with " + " the same url "
			+ objparExp.getParurlNm() + " name of the exported objpar ");
	    }
	}
	logger.debug("OUT");
    }

    /**
     * Gets the object which contains the association between exported metadata
     * and the current system metadata.
     * 
     * @return MetadataAssociation the object which contains the association
     * between exported metadata and the current system metadata
     */
    public MetadataAssociations getMetadataAssociation() {
	return metaAss;
    }

    /* (non-Javadoc)
     * @see it.eng.spagobi.tools.importexport.IImportManager#getExistingObject(java.lang.Integer, java.lang.Class)
     */
    public Object getExistingObject(Integer id, Class objClass) {
	return importer.getObject(id, objClass, txCurrDB, sessionCurrDB);
    }

    /* (non-Javadoc)
     * @see it.eng.spagobi.tools.importexport.IImportManager#getExportedObject(java.lang.Integer, java.lang.Class)
     */
    public Object getExportedObject(Integer id, Class objClass) {
	return importer.getObject(id, objClass, txExpDB, sessionExpDB);
    }

    /* (non-Javadoc)
     * @see it.eng.spagobi.tools.importexport.IImportManager#getUserAssociation()
     */
    public UserAssociationsKeeper getUserAssociation() {
	return usrAss;
    }

    /* (non-Javadoc)
     * @see it.eng.spagobi.tools.importexport.IImportManager#getImpAssMode()
     */
    public String getImpAssMode() {
	return impAssMode;
    }

    /* (non-Javadoc)
     * @see it.eng.spagobi.tools.importexport.IImportManager#setImpAssMode(java.lang.String)
     */
    public void setImpAssMode(String impAssMode) {
	this.impAssMode = impAssMode;
    }
    
	/* (non-Javadoc)
	 * @see it.eng.spagobi.tools.importexport.IImportManager#getAssociationFile()
	 */
	public AssociationFile getAssociationFile() {
		return associationFile;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.tools.importexport.IImportManager#setAssociationFile(it.eng.spagobi.tools.importexport.bo.AssociationFile)
	 */
	public void setAssociationFile(AssociationFile associationFile) {
		this.associationFile = associationFile;
	}

	/* (non-Javadoc)
	 * @see it.eng.spagobi.tools.importexport.IImportManager#associateAllExportedRolesByUserAssociation()
	 */
	public boolean associateAllExportedRolesByUserAssociation() throws EMFUserError {
		logger.debug("IN");
		try {
			List exportedRoles = this.getExportedRoles();
			IRoleDAO roleDAO = DAOFactory.getRoleDAO();
			List currentRoles = roleDAO.loadAllRoles();
			Iterator exportedRolesIt = exportedRoles.iterator();
			while (exportedRolesIt.hasNext()) {
				Role exportedRole = (Role) exportedRolesIt.next();
				String associatedRoleName = this.getUserAssociation().getAssociatedRole(exportedRole.getName());
				if (associatedRoleName == null || associatedRoleName.trim().equals("")) return true;
				Iterator currentRolesIt = currentRoles.iterator();
				boolean associatedRoleNameExists = false;
				while (currentRolesIt.hasNext()) {
					Role currentRole = (Role) currentRolesIt.next();
					if (currentRole.getName().equals(associatedRoleName)) {
						associatedRoleNameExists = true;
						metaAss.insertCoupleRole(exportedRole.getId(), currentRole.getId());
						break;
					}
				}
				if (!associatedRoleNameExists) return true;
			}
			return false;
		} finally {
			logger.debug("OUT");
		}
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.tools.importexport.IImportManager#associateAllExportedEnginesByUserAssociation()
	 */
	public boolean associateAllExportedEnginesByUserAssociation() throws EMFUserError {
		logger.debug("IN");
		try {
			List exportedEngines = this.getExportedEngines();
			IEngineDAO engineDAO = DAOFactory.getEngineDAO();
			List currentEngines = engineDAO.loadAllEngines();
			Iterator exportedEnginesIt = exportedEngines.iterator();
			while (exportedEnginesIt.hasNext()) {
				Engine exportedEngine = (Engine) exportedEnginesIt.next();
				String associatedEngineLabel = this.getUserAssociation().getAssociatedEngine(exportedEngine.getLabel());
				if (associatedEngineLabel == null || associatedEngineLabel.trim().equals("")) return true;
				Iterator currentEngineIt = currentEngines.iterator();
				boolean associatedEngineLabelExists = false;
				while (currentEngineIt.hasNext()) {
					Engine currentEngine = (Engine) currentEngineIt.next();
					if (currentEngine.getLabel().equals(associatedEngineLabel)) {
						associatedEngineLabelExists = true;
						metaAss.insertCoupleEngine(exportedEngine.getId(), currentEngine.getId());
						break;
					}
				}
				if (!associatedEngineLabelExists) return true;
			}
			return false;
		} finally {
			logger.debug("OUT");
		}
	}
	
	/* (non-Javadoc)
	 * @see it.eng.spagobi.tools.importexport.IImportManager#associateAllExportedDataSourcesByUserAssociation()
	 */
	public boolean associateAllExportedDataSourcesByUserAssociation() throws EMFUserError {
		logger.debug("IN");
		try {
			List exportedDataSources = this.getExportedDataSources();
			if (exportedDataSources == null || exportedDataSources.size() == 0) return false;
			IDataSourceDAO datasourceDAO = DAOFactory.getDataSourceDAO();
			List currentDataSources = datasourceDAO.loadAllDataSources();
			Iterator exportedDataSourcesIt = exportedDataSources.iterator();
			while (exportedDataSourcesIt.hasNext()) {
				DataSource exportedDataSource = (DataSource) exportedDataSourcesIt.next();
				String associatedDataSourceLabel = this.getUserAssociation().getAssociatedDataSource(exportedDataSource.getLabel());
				if (associatedDataSourceLabel == null || associatedDataSourceLabel.trim().equals("")) return true;
				Iterator currentDataSourcesIt = currentDataSources.iterator();
				boolean associatedDataSourceLabelExists = false;
				while (currentDataSourcesIt.hasNext()) {
					DataSource currentDataSource = (DataSource) currentDataSourcesIt.next();
					if (currentDataSource.getLabel().equals(associatedDataSourceLabel)) {
						associatedDataSourceLabelExists = true;
						metaAss.insertCoupleDataSources(exportedDataSource.getLabel(), currentDataSource.getLabel());
						break;
					}
				}
				if (!associatedDataSourceLabelExists) return true;
			}
			return false;
		} finally {
			logger.debug("OUT");
		}
	}
}
