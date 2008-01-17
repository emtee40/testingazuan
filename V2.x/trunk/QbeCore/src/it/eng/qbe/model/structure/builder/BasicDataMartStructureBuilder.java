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
package it.eng.qbe.model.structure.builder;

import it.eng.qbe.datasource.IDataSource;
import it.eng.qbe.datasource.IHibernateDataSource;
import it.eng.qbe.model.structure.DataMartModelStructure;

/**
 * @author Andrea Gioia
 *
 */
public class BasicDataMartStructureBuilder implements IDataMartStructureBuilder{
	public static DataMartModelStructure buildDataMartStructure(IDataSource dataSource) {
		if(dataSource.getType() == IDataSource.HIBERNATE_DS_TYPE) {
			HibernateDataMartStructureBuilder builder = 
				new HibernateDataMartStructureBuilder((IHibernateDataSource)dataSource);
			return builder.build();
		} else if (dataSource.getType() == IDataSource.COMPOSITE_HIBERNATE_DS_TYPE) {
			CompositeHibernateDataMartStructureBuilder builder = 
				new CompositeHibernateDataMartStructureBuilder((IHibernateDataSource)dataSource);
			return builder.build();
		} else {
			// log somethings here
		}		
		return null;		
	}
}
