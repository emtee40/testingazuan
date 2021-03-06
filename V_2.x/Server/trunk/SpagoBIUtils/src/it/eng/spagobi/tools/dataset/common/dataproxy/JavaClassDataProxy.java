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
package it.eng.spagobi.tools.dataset.common.dataproxy;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.behaviouralmodel.lov.bo.JavaClassUtils;
import it.eng.spagobi.tools.dataset.bo.IJavaClassDataSet;
import it.eng.spagobi.tools.dataset.common.datareader.IDataReader;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class JavaClassDataProxy  extends AbstractDataProxy {

	String className;

	private static transient Logger logger = Logger.getLogger(JavaClassDataProxy.class);


	public JavaClassDataProxy() {
		super();
	}

	public JavaClassDataProxy(String className) {
		setClassName( className );
	}

	public IDataStore load(String statement, IDataReader dataReader) throws EMFUserError {
		throw new UnsupportedOperationException("metothd load not yet implemented");
	}

	public IDataStore load(IDataReader dataReader) throws EMFUserError {
		String result = null;				
		IDataStore dataStore = null;
		IJavaClassDataSet javaClass;
		try {
			javaClass = (IJavaClassDataSet) Class.forName( className ).newInstance();

			if(javaClass==null){
				logger.debug("java class not found");
				throw new EMFUserError(EMFErrorSeverity.ERROR, 9217);
			}

			boolean checkProfileAttribute=checkProfileAttribute(javaClass, profile);
			
			if(!checkProfileAttribute){
				logger.debug("error in solving profile Attributes required");
				throw new EMFUserError(EMFErrorSeverity.ERROR, 9213);
			}
			
			result = javaClass.getValues( getProfile(), getParameters());
			result = result.trim();
			boolean toconvert = JavaClassUtils.checkSintax(result);
			// check if the result must be converted into the right xml sintax
			if(toconvert) { 
				result = JavaClassUtils.convertResult(result);
			}
			dataStore = dataReader.read(result);
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 9217);
			logger.debug("classe non trovata");
			throw userError;
		} catch (Exception e) {
			logger.error("Error",e);
		}

		return dataStore;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}



	public boolean checkProfileAttribute(IJavaClassDataSet classData, IEngUserProfile profile){
		List profileAttributeNeeded=classData.getNamesOfProfileAttributeRequired();
		if(profileAttributeNeeded==null) return true;
		for (Iterator iterator = profileAttributeNeeded.iterator(); iterator.hasNext();) {
			String attribute = (String) iterator.next();
			String value=null;
			try {
				value=(String)profile.getUserAttribute(attribute);
			} catch (EMFInternalError e) {
				return false;
			}
			if(value==null)return false;
		}		
		return true;
	}



	public HashMap addProfileAtributes(HashMap mapNameValue) throws EMFInternalError{
		if(mapNameValue==null) mapNameValue=new HashMap();
		Set names=(Set)profile.getUserAttributeNames();
		for (Iterator iterator = names.iterator(); iterator.hasNext();) {
			String name = (String) iterator.next();
			String value=(String)profile.getUserAttribute(name);
			mapNameValue.put(name, value);
		}
		return mapNameValue;
	}





}
