/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2010 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.dataset.cache;

import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;

import java.util.List;

/**
 * @author Marco Cortella (marco.cortella@eng.it)
 *
 */
public interface ICache {
	/**
	 * @param resultsetSignature the unique resultSet signature
	 * @return true if resultSet is cached, false if not
	 */
	boolean contains(String resultsetSignature);
	
	/**
	 * @param resultsetSignature the unique resultSet signature
	 * @return the resultSet if cached, null elsewhere 
	 */
	IDataStore get(String resultsetSignature);
	
	/**
	 * @param resultsetSignature the unique resultSet signature
	 * @param groups grouping criteria for the resultSet
	 * @param filters filters used on the resultSet
	 * @param projections (fields to select) on the resultSet
	 * @return the resultSet if cached, null elsewhere 
	 */
	IDataStore get(String resultsetSignature, List<GroupCriteria> groups, List<FilterCriteria> filters, List<ProjectionCriteria> projections);
	
	/**
	 * Delete the specified resultSet
	 * @param resultsetSignature the unique resultSet signature
	 * @return true if resultSet is deleted from cache, false if resultSet wasn't cached
	 */
	boolean delete(String resultsetSignature);
	
	/**
	 * Delete all objects inside the cache
	 */
	void deleteAll();
	
	/**
	 * @return the metadata description object of the cache
	 */
	ICacheMetadata getCacheMetadata();
	
	/**
	 * Register the listener on the specified event
	 * @param event the event type
	 * @param listener the listener type
	 */
	void addListener(ICacheEvent event, ICacheListener listener);
	
	/**
	 * Schedule the execution of an activity
	 * @param activity the type of activity
	 * @param trigger the condition
	 */
	void scheduleActivity(ICacheActivity activity, ICacheTrigger trigger);

}
