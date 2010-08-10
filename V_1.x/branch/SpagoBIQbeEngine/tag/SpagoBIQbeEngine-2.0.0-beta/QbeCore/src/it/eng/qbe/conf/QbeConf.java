/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.qbe.conf;

import it.eng.qbe.model.io.IDataMartModelRetriever;
import it.eng.qbe.model.io.IQueryPersister;
import it.eng.qbe.model.io.LocalFileSystemDataMartModelRetriever;
import it.eng.qbe.utility.IDBSpaceChecker;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.utilities.file.FileUtils;

import java.io.File;

// TODO: Auto-generated Javadoc
/**
 * The Class QbeConf.
 * 
 * @author Andrea Gioia
 */
public class QbeConf {
	
	/** The data mart model retriever. */
	private IDataMartModelRetriever dataMartModelRetriever = null;
	
	/** The query persister. */
	private IQueryPersister queryPersister = null;
	
	/** The space checker enabled. */
	private Boolean spaceCheckerEnabled = null;
	
	/** The db space checker. */
	private IDBSpaceChecker dbSpaceChecker = null;
	
	/** The free space lb limit. */
	private Long freeSpaceLbLimit = null;
	
	/** The qbe data mart dir. */
	private File qbeDataMartDir = null;
	
	/** The qbe temp dir. */
	private File qbeTempDir = null;
	
	
	
	
	
	/** The instance. */
	static private QbeConf instance = null;
	
	/**
	 * Gets the single instance of QbeConf.
	 * 
	 * @return single instance of QbeConf
	 */
	static public QbeConf getInstance() {
		if(instance == null) instance = new QbeConf();
		return instance;
	}
	
	/**
	 * Instantiates a new qbe conf.
	 */
	private QbeConf() {
		
	}
	
	/**
	 * Gets the data mart model retriever.
	 * 
	 * @return the data mart model retriever
	 * 
	 * @throws Exception the exception
	 */
	public IDataMartModelRetriever getDataMartModelRetriever() throws Exception {		
		if(dataMartModelRetriever == null) {
			String dataMartModelRetrieverClassName = (String)ConfigSingleton.getInstance().getAttribute("QBE.DATA-MART-MODEL-RETRIEVER.className");
			dataMartModelRetriever = (IDataMartModelRetriever)Class.forName(dataMartModelRetrieverClassName).newInstance();
			if(dataMartModelRetriever instanceof LocalFileSystemDataMartModelRetriever) {
				LocalFileSystemDataMartModelRetriever localFileSystemDataMartModelRetriever = (LocalFileSystemDataMartModelRetriever)dataMartModelRetriever;
				localFileSystemDataMartModelRetriever.setContextDir(getQbeDataMartDir());
			}
		}
		return dataMartModelRetriever;
	}
	
	/**
	 * Sets the data mart model retriever.
	 * 
	 * @param dataMartModelRetriever the new data mart model retriever
	 */
	public void setDataMartModelRetriever(IDataMartModelRetriever dataMartModelRetriever) {
		this.dataMartModelRetriever = dataMartModelRetriever;
	}
	
	
	/**
	 * Gets the query persister.
	 * 
	 * @return the query persister
	 * 
	 * @throws Exception the exception
	 */
	public IQueryPersister getQueryPersister() throws Exception{
		if(queryPersister == null) {
			String queryPersisterClass = (String)ConfigSingleton.getInstance().getAttribute("QBE.QUERY-PERSISTER.className");
			queryPersister = (IQueryPersister)Class.forName(queryPersisterClass).newInstance();
		}
		return queryPersister;
	}
	
	/**
	 * Sets the query persister.
	 * 
	 * @param QueryPersister the new query persister
	 */
	public void setQueryPersister(IQueryPersister QueryPersister) {
		this.queryPersister = queryPersister;
	}
	
	/**
	 * Checks if is space checker enabled.
	 * 
	 * @return true, if is space checker enabled
	 */
	public boolean isSpaceCheckerEnabled() {
		if(spaceCheckerEnabled == null) {
			String makeCheck =(String) ConfigSingleton.getInstance().getAttribute("QBE.QBE-CHECK-SPACE-BEFORE-CREATEVIEW.check");
			spaceCheckerEnabled = new Boolean(makeCheck.trim().equalsIgnoreCase("true"));
		}
		return spaceCheckerEnabled.booleanValue();
	}
	
	/**
	 * Sets the space checker enabled.
	 * 
	 * @param spaceCheckerEnabled the new space checker enabled
	 */
	public void setSpaceCheckerEnabled(boolean spaceCheckerEnabled) {
		this.spaceCheckerEnabled = new Boolean(spaceCheckerEnabled);
	}


	/**
	 * Gets the database space checker.
	 * 
	 * @return the database space checker
	 */
	public IDBSpaceChecker getDbSpaceChecker() {
		if(dbSpaceChecker == null) {
			String className = (String) ConfigSingleton.getInstance().getAttribute("QBE.QBE-CHECK-SPACE-BEFORE-CREATEVIEW.checkerClass");
			try {
				dbSpaceChecker = (IDBSpaceChecker)Class.forName(className).newInstance();
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}
		return dbSpaceChecker;
	}


	/**
	 * Sets the database space checker.
	 * 
	 * @param dbSpaceChecker the new database space checker
	 */
	public void setDbSpaceChecker(IDBSpaceChecker dbSpaceChecker) {
		this.dbSpaceChecker = dbSpaceChecker;
	}

	/**
	 * Gets the free space lb limit.
	 * 
	 * @return the free space lb limit
	 */
	public long getFreeSpaceLbLimit() {
		if(freeSpaceLbLimit == null) {
			String freeSpaceLbLimitStr = (String) ConfigSingleton.getInstance().getAttribute("QBE.QBE-CHECK-SPACE-BEFORE-CREATEVIEW.failIfSpaceLess");
			freeSpaceLbLimit = new Long(freeSpaceLbLimitStr);
		}
		return freeSpaceLbLimit.longValue();
	}

	/**
	 * Sets the free space lb limit.
	 * 
	 * @param freeSpaceLbLimit the new free space lb limit
	 */
	public void setFreeSpaceLbLimit(long freeSpaceLbLimit) {
		this.freeSpaceLbLimit = new Long(freeSpaceLbLimit);
	}


	/**
	 * Gets the qbe data mart dir.
	 * 
	 * @return the qbe data mart dir
	 */
	public File getQbeDataMartDir() {
		if(qbeDataMartDir == null) {
			File baseDir = new File(ConfigSingleton.getInstance().getRootPath());
			String qbeDataMartDirPath = (String)ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");																					
			if( !FileUtils.isAbsolutePath(qbeDataMartDirPath) )  {
				String baseDirStr = (baseDir != null)? baseDir.toString(): System.getProperty("user.home");
				qbeDataMartDirPath = baseDir + System.getProperty("file.separator") + qbeDataMartDirPath;
				qbeDataMartDir = new File(qbeDataMartDirPath);
			}
		}
		
		return qbeDataMartDir;
	}

	/**
	 * Sets the qbe data mart dir.
	 * 
	 * @param qbeDataMartDir the new qbe data mart dir
	 */
	public void setQbeDataMartDir(File qbeDataMartDir) {
		this.qbeDataMartDir = qbeDataMartDir;
	}
	


	

	/**
	 * Gets the qbe temporary directory.
	 * 
	 * @return the qbe temporary directory
	 */
	public File getQbeTempDir() {
		if(qbeTempDir == null) {
			qbeTempDir = new File( System.getProperty("java.io.tmpdir") );
			if(!qbeTempDir.exists()) {
				qbeTempDir.mkdirs();
			}
		}
		
		return qbeTempDir;
	}


	/**
	 * Sets the qbe temporary directory.
	 * 
	 * @param qbeTempDir the new qbe temporary directory
	 */
	public void setQbeTempDir(File qbeTempDir) {
		this.qbeTempDir = qbeTempDir;
	}

	
	
}
