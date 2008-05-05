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
package it.eng.spagobi.engines.chart.bo.charttypes;

import java.util.HashMap;

public interface ILinkableChart {

	/**
	 * Gets document parameters and return a string in the form &param1=value1&param2=value2 ...
	 * 
	 * @param drillParameters the drill parameters
	 * 
	 * @return the document_ parameters
	 */
			
	public String getDocument_Parameters(HashMap drillParameters);	
	
	
	/**
	 * Gets the root url.
	 * 
	 * @return the root url
	 */
	public String getRootUrl();
	
	/**
	 * Sets the root url.
	 * 
	 * @param rootUrl the new root url
	 */
	public void setRootUrl(String rootUrl);
	
	/**
	 * Gets the mode.
	 * 
	 * @return the mode
	 */
	public String getMode();
	


	/**
	 * Sets the mode.
	 * 
	 * @param mode the new mode
	 */
	public void setMode(String mode);


	/**
	 * Gets the drill label.
	 * 
	 * @return the drill label
	 */
	public String getDrillLabel();


	/**
	 * Sets the drill label.
	 * 
	 * @param drillLabel the new drill label
	 */
	public void setDrillLabel(String drillLabel);

	/**
	 * Gets the drill parameter.
	 * 
	 * @return the drill parameter
	 */
	public HashMap getDrillParameter();

	/**
	 * Sets the drill parameter.
	 * 
	 * @param drillParameter the new drill parameter
	 */
	public void setDrillParameter(HashMap drillParameter);

	/**
	 * Gets the category url name.
	 * 
	 * @return the category url name
	 */
	public String getCategoryUrlName();

	/**
	 * Sets the category url name.
	 * 
	 * @param categoryUrlName the new category url name
	 */
	public void setCategoryUrlName(String categoryUrlName);

	/**
	 * Gets the serie urlname.
	 * 
	 * @return the serie urlname
	 */
	public String getSerieUrlname();

	/**
	 * Sets the serie urlname.
	 * 
	 * @param serieUrlname the new serie urlname
	 */
	public void setSerieUrlname(String serieUrlname);

	
	
	
	
	
	
}
