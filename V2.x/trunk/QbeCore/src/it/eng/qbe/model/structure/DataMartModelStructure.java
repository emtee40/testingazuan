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
package it.eng.qbe.model.structure;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * @author Andrea Gioia
 *
 */
public class DataMartModelStructure {
	
	long id = 0;
	Map rootEntities;
	
	Map fields;
	Map entities;
	
	public DataMartModelStructure() {
		rootEntities = new HashMap();
		fields = new HashMap();
		entities = new HashMap();
	}
	
	public DataMartEntity addRootEntity(String name, String path, String role, String type) {
		DataMartEntity entity = new DataMartEntity(name, path, role, type, this);
		addRootEntity(entity);
		return entity;
	}
	
	private void addRootEntity(DataMartEntity entity) {
		rootEntities.put(entity.getUniqueName(), entity);
		addEntity(entity);
	}
	
	
	public DataMartEntity getRootEntity(String entityName) {
		return (DataMartEntity)rootEntities.get(entityName);
	}
	
	public Iterator getRootEntityIterator(String datamartName) {
		return getRootEntities(datamartName).iterator();
	}
	
	public List getRootEntities(String datamartName) {
		List list = new ArrayList();
		Iterator it = rootEntities.keySet().iterator();
		while(it.hasNext()) {
			String entityName = (String)it.next();
			// TODO replace with this ...
			//list.add( entities.get(entityName).getCopy() );
			list.add( rootEntities.get(entityName) );
		}
		return list;
	}	
		
	public void addEntity(DataMartEntity entity) {
		entities.put(entity.getUniqueName(), entity);
	}
	
	public DataMartEntity getEntity(String entityUniqueName) {
		DataMartEntity entity = (DataMartEntity)entities.get(entityUniqueName);
		return entity;
	}
	
	public void addField(DataMartField field) {
		fields.put(field.getUniqueName(), field);
	}
	
	public DataMartField getField(String fieldUniqueName) {
		DataMartField field = (DataMartField)fields.get(fieldUniqueName);
		return field;
	}
	
	
	
	
	public long getNextId() {
		return ++id;
	}
	
	
	
	
	
	
	public String toString() {
		StringBuffer buffer = new StringBuffer();
		String key = null;
		for(Iterator it = rootEntities.keySet().iterator(); it.hasNext();) {
			key = (String)it.next();
			DataMartEntity o = (DataMartEntity)rootEntities.get(key);
			buffer.append("\n------------------------------------\n");
			if(o == null)
				buffer.append(key + " --> NULL\n");
			else
				buffer.append(o.toString() + "\n");
		}
		return buffer.toString();
	}	 
}
