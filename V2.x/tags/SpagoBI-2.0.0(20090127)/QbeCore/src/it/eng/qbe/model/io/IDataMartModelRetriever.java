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
package it.eng.qbe.model.io;

import java.io.File;
import java.util.List;


// TODO: Auto-generated Javadoc
/**
 * The Interface IDataMartModelRetriever.
 */
public interface IDataMartModelRetriever {

	/**
	 * Gets the datamart jar file.
	 * 
	 * @param datamartName the datamart name
	 * 
	 * @return the datamart jar file
	 */
	public abstract File getDatamartJarFile(String datamartName);
	
	/**
	 * Gets the view jar file.
	 * 
	 * @param datamartName the datamart name
	 * @param viewName the view name
	 * 
	 * @return the view jar file
	 */
	public abstract File getViewJarFile(String datamartName, String viewName);		

	/**
	 * Gets the view jar files.
	 * 
	 * @param datamartName the datamart name
	 * 
	 * @return the view jar files
	 */
	public abstract List getViewJarFiles(String datamartName);	
	
	/**
	 * Gets the view names.
	 * 
	 * @param datamartName the datamart name
	 * 
	 * @return the view names
	 */
	public abstract List getViewNames(String datamartName);
	
}
