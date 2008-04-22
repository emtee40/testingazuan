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
package it.eng.spagobi.qbe.tree.filter;

import it.eng.qbe.model.IDataMartModel;

import java.util.List;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class QbeTreeFilter {
	
	private IQbeTreeEntityFilter entityFilter;
	private IQbeTreeFieldFilter fieldFilter;
	
	public QbeTreeFilter(IQbeTreeEntityFilter entityFilter, IQbeTreeFieldFilter fieldFilter) {
		setEntityFilter(entityFilter);
		setFieldFilter(fieldFilter);
	}
	
	public List filterEntities(IDataMartModel datamartModel, List entities) {
		return getEntityFilter().filterEntities(datamartModel, entities);
	}
	
	public List filterFields(IDataMartModel datamartModel, List fields) {
		return getFieldFilter().filterFields(datamartModel, fields);
	}

	protected IQbeTreeEntityFilter getEntityFilter() {
		return entityFilter;
	}

	protected void setEntityFilter(IQbeTreeEntityFilter entityFilter) {
		this.entityFilter = entityFilter;
	}

	protected IQbeTreeFieldFilter getFieldFilter() {
		return fieldFilter;
	}

	protected void setFieldFilter(IQbeTreeFieldFilter fieldFilter) {
		this.fieldFilter = fieldFilter;
	}
}
