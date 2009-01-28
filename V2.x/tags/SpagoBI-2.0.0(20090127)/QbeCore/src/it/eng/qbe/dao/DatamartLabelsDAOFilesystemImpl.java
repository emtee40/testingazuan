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
package it.eng.qbe.dao;

import it.eng.qbe.bo.DatamartJarFile;
import it.eng.qbe.bo.DatamartLabels;
import it.eng.qbe.bo.ViewJarFile;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;

import org.apache.log4j.Logger;

/**
 * 
 * @author Andrea Gioia
 */
public class DatamartLabelsDAOFilesystemImpl implements DatamartLabelsDAO {
	

	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(DatamartLabelsDAOFilesystemImpl.class);
    
	
    
    
	public DatamartLabels loadDatamartLabels(String datamartName) {
		return loadDatamartLabels(datamartName, null);
	}

	
	public DatamartLabels loadDatamartLabels(String datamartName, Locale locale) {
		Properties properties = null;
		
		DatamartJarFile datamartJarFile = DAOFactory.getDatamartJarFileDAO().loadDatamartJarFile(datamartName);
		if(datamartJarFile == null) {
			return new DatamartLabels();
		}		
		
		JarFile jf;
		try {
			jf = new JarFile( datamartJarFile.getFile() );		
			
			properties = getLabelProperties(jf, locale);
					
			List viewNames = DAOFactory.getViewJarFileDAO().loadViewNames(datamartName);
			Iterator it = viewNames.iterator();
			while(it.hasNext()) {
				String viewName = (String)it.next();
				ViewJarFile viewJarFile =  DAOFactory.getViewJarFileDAO().loadViewJarFile(datamartName, viewName);
				jf = new JarFile( viewJarFile.getFile() );
				Properties tmpProps = getLabelProperties(jf, locale);
				properties.putAll(tmpProps);
			}		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new DatamartLabels(properties);
	}
	
	/**
	 * Gets the label properties.
	 * 
	 * @param jf the jf
	 * @param locale the locale
	 * 
	 * @return the label properties
	 */
	private Properties getLabelProperties(JarFile jf, Locale locale){
		Properties prop = new Properties();
		
		try{
			ZipEntry ze = null;
			if(locale != null) {
				ze = jf.getEntry("label_" + locale.getLanguage() + ".properties");
				if(ze == null) {
					ze = jf.getEntry("label.properties");
				}
			} else {
				ze = jf.getEntry("label.properties");
			}
			if (ze != null){
				prop = new Properties();
				prop.load(jf.getInputStream(ze));
			}			
		}catch(IOException ioe){
			ioe.printStackTrace();
		}
		return prop;
	}

}
