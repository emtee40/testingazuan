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
package it.eng.spagobi.meta.generator.jpamapping.wrappers;

import it.eng.spagobi.meta.generator.jpamapping.wrappers.impl.AbstractJpaRelationship;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.impl.JpaColumn;

import java.util.List;



/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public interface IJpaTable {
	
	String getPackage();
	String getImportStatements();
	String getClassName();
	boolean hasPrimaryKey();	
	boolean hasCompositeKey();
	String getCompositeKeyClassName();
	String getDefaultFetch();
	List<JpaColumn> getColumns();
	List<JpaColumn> getSimpleColumns();
	List<JpaColumn> getSimpleColumns(boolean genOnly, boolean includePk, boolean includeInherited);
	List<AbstractJpaRelationship> getRelationships();
}
