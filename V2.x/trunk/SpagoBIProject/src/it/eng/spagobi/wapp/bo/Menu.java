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
package it.eng.spagobi.wapp.bo;

import it.eng.spagobi.commons.bo.Role;

import java.io.Serializable;
import java.util.List;


/**
 * Defines a <code>Menu</code> object. 
 * 
 * @author Antonella Giachino (antonella.giachino@eng.it)
 */


public class Menu  implements Serializable  {
	
    private Integer menuId;
    private Integer objId;
    private String name;
    private String descr;
    private Integer parentId;
    private Integer level;
    private Integer depth;    
    private boolean hasChildren;
    private List	lstChildren;
    private Role[] roles = null;
    private boolean homepage=false;
    private boolean viewIcons=false;
    
	/**
	 * Gets the lst children.
	 * 
	 * @return the lst children
	 */
	public List getLstChildren() {
		return lstChildren;
	}
	
	/**
	 * Sets the lst children.
	 * 
	 * @param lstChildren the new lst children
	 */
	public void setLstChildren(List lstChildren) {
		this.lstChildren = lstChildren;
	}
	
	/**
	 * Gets the menu id.
	 * 
	 * @return the menu id
	 */
	public Integer getMenuId() {
		return menuId;
	}
	
	/**
	 * Sets the menu id.
	 * 
	 * @param menuId the new menu id
	 */
	public void setMenuId(Integer menuId) {
		this.menuId = menuId;
	}
	
	/**
	 * Gets the obj id.
	 * 
	 * @return the obj id
	 */
	public Integer getObjId() {
		return objId;
	}
	
	/**
	 * Sets the obj id.
	 * 
	 * @param objId the new obj id
	 */
	public void setObjId(Integer objId) {
		this.objId = objId;
	}
	
	/**
	 * Gets the name.
	 * 
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	
	/**
	 * Sets the name.
	 * 
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}
	
	/**
	 * Gets the descr.
	 * 
	 * @return the descr
	 */
	public String getDescr() {
		return descr;
	}
	
	/**
	 * Sets the descr.
	 * 
	 * @param descr the new descr
	 */
	public void setDescr(String descr) {
		this.descr = descr;
	}
	
	/**
	 * Gets the parent id.
	 * 
	 * @return the parent id
	 */
	public Integer getParentId() {
		return parentId;
	}
	
	/**
	 * Sets the parent id.
	 * 
	 * @param parentId the new parent id
	 */
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	
	/**
	 * Gets the level.
	 * 
	 * @return the level
	 */
	public Integer getLevel() {
		return level;
	}
	
	/**
	 * Sets the level.
	 * 
	 * @param level the new level
	 */
	public void setLevel(Integer level) {
		this.level = level;
	}
	
	/**
	 * Gets the depth.
	 * 
	 * @return the depth
	 */
	
	public Integer getDepth() {
		return depth;
	}

	/**
	 * Sets the depth.
	 * 
	 * @param depth the new depth
	 */
	
	public void setDepth(Integer depth) {
		this.depth = depth;
	}

	/**
	 * Gets the checks for children.
	 * 
	 * @return the checks for children
	 */
	public boolean getHasChildren() {
		return hasChildren;
	}
	
	/**
	 * Sets the checks for children.
	 * 
	 * @param hasChildren the new checks for children
	 */
	public void setHasChildren(boolean hasChildren) {
		this.hasChildren = hasChildren;
	}

	public Role[] getRoles() {
		return roles;
	}

	public void setRoles(Role[] roles) {
		this.roles = roles;
	}

	public boolean isHomepage() {
		return homepage;
	}

	public void setHomepage(boolean homepage) {
		this.homepage = homepage;
	}

	public boolean isViewIcons() {
		return viewIcons;
	}

	public void setViewIcons(boolean viewIcons) {
		this.viewIcons = viewIcons;
	}

	
	
}
