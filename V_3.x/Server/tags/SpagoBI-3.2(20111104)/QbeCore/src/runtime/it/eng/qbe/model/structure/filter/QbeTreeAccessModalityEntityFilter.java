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
package it.eng.qbe.model.structure.filter;

import it.eng.qbe.datasource.IDataSource;
import it.eng.qbe.model.structure.IModelEntity;

import java.util.ArrayList;
import java.util.List;

/**
 * The Class QbeTreeAccessModalityEntityFilter.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class QbeTreeAccessModalityEntityFilter extends ComposableQbeTreeEntityFilter{

	/**
	 * Instantiates a new qbe tree access modality entity filter.
	 */
	public QbeTreeAccessModalityEntityFilter() {
		super();
	}
	
	/**
	 * Instantiates a new qbe tree access modality entity filter.
	 * 
	 * @param parentFilter the parent filter
	 */
	public QbeTreeAccessModalityEntityFilter(IQbeTreeEntityFilter parentFilter) {
		super(parentFilter);
	}
	
	public List filter(IDataSource dataSource, List entities) {
		List list = null;
		IModelEntity entity;
		
		list = new ArrayList();
		
		for(int i = 0; i < entities.size(); i++) {
			entity = (IModelEntity)entities.get(i);
			if( isEntityVisible(dataSource, entity)) {
				list.add(entity);
			}
		}
		
		return list;
	}
	
	/**
	 * Checks if is entity visible.
	 * 
	 * @param datamartModel the datamart model
	 * @param entity the entity
	 * 
	 * @return true, if is entity visible
	 */
	private boolean isEntityVisible(IDataSource dataSource, IModelEntity entity) {
		//DatamartProperties qbeProperties = dataSource.getDataMartProperties();
		
		if( !entity.getPropertyAsBoolean("visible") ) return false;
		if( !dataSource.getModelAccessModality().isEntityAccessible( entity ) ) return false;
		return true;
	}	
}
