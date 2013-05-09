/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.generator.jpamapping.wrappers;

import it.eng.spagobi.meta.generator.jpamapping.wrappers.impl.AbstractJpaTable;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.impl.JpaColumn;
import it.eng.spagobi.meta.generator.jpamapping.wrappers.impl.JpaRelationshipColumnsNames;
import it.eng.spagobi.meta.model.business.SimpleBusinessColumn;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public interface IJpaRelationship {
	
	final static String ONE_TO_MANY = "one-to-many";
	final static String MANY_TO_ONE = "many-to-one";
	final static String MANY_TO_MANY = "many-to-many";
	final static String ONE_TO_ONE = "one-to-one";
	
	boolean isBidirectional();
	String getCardinality();
	boolean isOneToMany();	
	boolean isManyToMany();	
	
	AbstractJpaTable getReferencedTable();
	AbstractJpaTable getJpaTable();
	
	/**
	 * Returns a descriptive string used in a comment in the generated 
	 * file (from the Velocity template).
	 */
	public String getDescription();
	
	public String getPropertyName();
	String getBidirectionalPropertyName();
	
	/**
	 * @return the name of the metod GETTER
	 */
	String getGetter(String par);
	/**
	 * @return the name of the metod SETTER
	 */
	String getSetter(String par);
	
	boolean isMultipleRelationship();
	
	List<JpaRelationshipColumnsNames> getRelationshipColumnsNames();
	
	public String getSimpleSourceColumnName();
	
	public String getCollectionType();
	
	public String getOppositeWithAnnotation();
	
	public List<IJpaColumn> getSourceColumns();
	
	public List<IJpaColumn> getDestinationColumns();
}
