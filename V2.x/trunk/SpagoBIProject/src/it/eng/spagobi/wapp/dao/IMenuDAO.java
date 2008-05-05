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
package it.eng.spagobi.wapp.dao;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.wapp.bo.Menu;

import java.util.List;

/**
 * @author Antonella Giachino (antonella.giachino@eng.it)
 *
 */
public interface IMenuDAO {
	
	/**
	 * Loads all detail information for a menu identified by its <code>menuID</code>. All these information,
	 * archived by a query to the DB, are stored into an <code>menu</code> object, which is
	 * returned.
	 * 
	 * @param menuID The id for the menu to load
	 * 
	 * @return An <code>menu</code> object containing all loaded information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public Menu loadMenuByID(Integer menuID) throws EMFUserError;
	
	/**
	 * Loads all detail information for a menu whose name is equal to <code>name</code>.
	 * 
	 * @param name The name for the menu to load
	 * 
	 * @return An <code>menu</code> object containing all loaded information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public Menu loadMenuByName(String name) throws EMFUserError;
		
	/**
	 * Loads all detail information for all menus. For each of them, detail
	 * information is stored into an <code>menu</code> object. After that, all menus
	 * are stored into a <code>List</code>, which is returned.
	 * 
	 * @return A list containing all menu objects
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */	
	public List loadAllMenues() throws EMFUserError;	
	
	/**
	 * Implements the query to modify a menu. All information needed is stored
	 * into the input <code>menu</code> object.
	 * 
	 * @param aMenu The object containing all modify information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public void modifyMenu(Menu aMenu) throws EMFUserError;
	
	/**
	 * Implements the query to insert a menu. All information needed is stored
	 * into the input <code>menu</code> object.
	 * 
	 * @param aMenu The object containing all insert information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	public void insertMenu(Menu aMenu) throws EMFUserError;
	
	/**
	 * Implements the query to erase a menu. All information needed is stored
	 * into the input <code>menu</code> object.
	 * 
	 * @param aMenu The object containing all delete information
	 * 
	 * @throws EMFUserError If an Exception occurred
	 */
	
	public void eraseMenu(Menu aMenu) throws EMFUserError;

	
	/**
	 * Tells if a menu is associated to any roles.
	 * It is useful because a menu cannot be deleted
	 * if it is used by one or more BI Roles.
	 * 
	 * @param menuId The menu identifier
	 * 
	 * @return True if the menu is used by one or more
	 * objects, else false
	 * 
	 * @throws EMFUserError If any exception occurred
	 */
	public boolean hasRolesAssociated (Integer menuId) throws EMFUserError;
	
	/**
	 * Tells if a menu has children element.
	 * It is useful for define the type of menu
	 * 
	 * @param menuId The menu identifier
	 * 
	 * @return True if the menu is used by one or more
	 * objects, else false
	 * 
	 * @throws EMFUserError If any exception occurred
	 */
	public List getChildrenMenu (Integer menuId) throws EMFUserError;

}
