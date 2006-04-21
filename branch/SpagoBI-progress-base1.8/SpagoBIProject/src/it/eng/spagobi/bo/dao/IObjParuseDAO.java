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
 * Created on 13-mag-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.spagobi.bo.dao;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.bo.ObjParuse;

import java.util.List;

/**
 * Defines the interfaces for all methods needed to insert, modify and deleting a
 * ObjParuse.
 * 
 * @author Zerbetto
 *
 */
public interface IObjParuseDAO {
	
	/**
	 * Loads all detail information for a ObjParuse identified by its 
	 * <code>objParId</code> and its <code>paruseId</code>. All these information,
	 * achived by a query to the DB, are stored into a <code>ObjParuse</code> object, 
	 * which is returned.
	 * 
	 * @param objParId The id for the BI object parameter to load
	 * @param paruseId The parameterUse-id for the Parameter to load
	 * @return	A <code>ObjParuse</code> object containing all loaded information
	 * @throws	EMFUserError If an Exception occurred
	 */
	public ObjParuse loadObjParuse(Integer objParId, Integer paruseId) throws EMFUserError;

	/**
	 * Implements the query to modify a ObjParuse. All information needed is stored 
	 * into the input <code>ObjParuse</code> object.
	 * 
	 * @param aObjParuse The ObjParuse containing all modify information
	 * @throws EMFUserError If an Exception occurred
	 */
	public void modifyObjParuse(ObjParuse aObjParuse) throws EMFUserError;

	/**
	 * Implements the query to insert a ObjParuse. All information needed is stored 
	 * into the input <code>ObjParuse</code> object.
	 * 
	 * @param aObjParuse The ObjParuse containing all insert information
	 * @throws EMFUserError If an Exception occurred
	 */
	public void insertObjParuse(ObjParuse aObjParuse) throws EMFUserError;

	/**
	 * Implements the query to erase a ObjParuse. All information needed is stored 
	 * into the input <code>ObjParuse</code> object.
	 * 
	 * @param aObjParuse The object containing all delete information
	 * @throws EMFUserError If an Exception occurred
	 */
	public void eraseObjParuse(ObjParuse aObjParuse) throws EMFUserError;
	
	/**
	 * Returns the list of all ObjParuse objects associated to a <code>BIObjectParameter</code>,
	 * known its <code>objParId</code>.
	 * 
	 * @param objParId The input BIObjectParameter id code
	 * @return The list of all ObjParuse objects associated
	 * @throws EMFUserError If any exception occurred
	 */
	public List loadObjParuses(Integer objParId) throws EMFUserError;

}