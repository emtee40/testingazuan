/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2009 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.qbe.query.serializer;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class SerializationConstants {
	
	public static final String ID = "id";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
		
	public static final String FIELDS = "fields";
	public static final String FIELD_ID = "id";
	public static final String FIELD_ENTITY = "entity";
	public static final String FIELD_NAME = "field";
	public static final String FIELD_ALIAS = "alias";
	public static final String FIELD_GROUP = "group";
	public static final String FIELD_ORDER = "order";
	public static final String FIELD_AGGREGATION_FUNCTION = "funct";
	public static final String FIELD_VISIBLE = "visible";
	public static final String FIELD_INCLUDE = "include";
	
	public static final String DISTINCT = "distinct";
	public static final String IS_NESTED_EXPRESSION = "isNestedExpression";
	
	public static final String FILTERS = "filters";
	public static final String HAVINGS = "havings";
	
	public static final String FILTER_ID = "filterId";	
	public static final String FILTER_DESCRIPTION = "filterDescripion";
	public static final String FILTER_PROMPTABLE = "promptable";	
	public static final String FILTER_LO_VALUE = "leftOperandValue";
	public static final String FILTER_LO_DESCRIPTION = "leftOperandDescription";
	public static final String FILTER_LO_TYPE = "leftOperandType";
	public static final String FILTER_LO_FUNCTION = "leftOperandAggregator";
	public static final String FILTER_LO_DEFAULT_VALUE = "leftOperandDefaultValue";
	public static final String FILTER_LO_LAST_VALUE = "leftOperandLastValue";
	public static final String FILTER_OPEARTOR = "operator";
	public static final String FILTER_RO_VALUE = "rightOperandValue";
	public static final String FILTER_RO_DESCRIPTION = "rightOperandDescription";
	public static final String FILTER_RO_TYPE = "rightOperandType";
	public static final String FILTER_RO_FUNCTION = "rightOperandAggregator";
	public static final String FILTER_RO_DEFAULT_VALUE = "rightOperandDefaultValue";
	public static final String FILTER_RO_LAST_VALUE = "rightOperandLastValue";
	public static final String FILTER_BOOLEAN_CONNETOR = "booleanConnector";

	

	public static final String EXPRESSION = "expression";
	public static final String EXPRESSION_TYPE = "type";
	public static final String EXPRESSION_VALUE = "value";
	public static final String EXPRESSION_CHILDREN = "childNodes";
	
	public static final String SUBQUERIES = "subqueries";
	
	
	
}
