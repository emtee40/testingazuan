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

import it.eng.qbe.bo.DatamartProperties;
import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.model.structure.DataMartField;
import it.eng.qbe.query.AggregationFunctions;
import it.eng.qbe.query.ExpressionNode;
import it.eng.qbe.query.HavingField;
import it.eng.qbe.query.IAggregationFunction;
import it.eng.qbe.query.ISelectField;
import it.eng.qbe.query.Query;
import it.eng.qbe.query.WhereField;
import it.eng.spagobi.commons.utilities.StringUtilities;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.json.JSONUtils;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class QueryJSONDeserializer implements QueryDeserializer {

	/** Logger component. */
    public static transient Logger logger = Logger.getLogger(QueryJSONDeserializer.class);
    
	public Query deserialize(Object o, DataMartModel datamartModel) throws SerializationException {
		Query query;
		JSONObject queryJSON = null;
		JSONArray fieldsJSON = null;
		boolean distinctClauseEnabled = false;
		JSONArray filtersJSON = null;
		JSONArray havingsJSON = null;
		JSONObject expressionJSON = null;
		JSONArray subqueriesJSON = null;
		Query subquery;
		
		logger.debug("IN");
		
		try {
			Assert.assertNotNull(o, "Object to be deserialized cannot be null");
			
			if(o instanceof String) {
				logger.debug("Deserializing string [" + (String)o + "]");
				try {
					queryJSON = new JSONObject( (String)o );
				} catch(Throwable t) {
					logger.debug("Object to be deserialized must be string encoding a JSON object");
					throw new SerializationException("An error occurred while deserializing query: " + (String)o, t);
				}
			} else if(o instanceof JSONObject) {
				queryJSON = (JSONObject)o;
			} else {
				Assert.assertUnreachable("Object to be deserialized must be of type string or of type JSONObject, not of type [" + o.getClass().getName() + "]");
			}
			
			query  = new Query();	
			
			try {
				query.setId(queryJSON.getString(SerializationConstants.ID));
				query.setName(queryJSON.getString(SerializationConstants.NAME));
				query.setDescription(queryJSON.getString(SerializationConstants.DESCRIPTION));
				query.setDistinctClauseEnabled(queryJSON.getBoolean( SerializationConstants.DISTINCT ));
				// TODO: move this in AnalysisStateLoader class
				try {
					query.setNestedExpression(queryJSON.getBoolean( SerializationConstants.IS_NESTED_EXPRESSION ));
				} catch(Exception e) {
					query.setNestedExpression(false);
				}
				fieldsJSON = queryJSON.getJSONArray( SerializationConstants.FIELDS );				
				filtersJSON = queryJSON.getJSONArray( SerializationConstants.FILTERS );
				expressionJSON = queryJSON.getJSONObject( SerializationConstants.EXPRESSION );
				havingsJSON = queryJSON.getJSONArray( SerializationConstants.HAVINGS );
				subqueriesJSON = queryJSON.getJSONArray( SerializationConstants.SUBQUERIES );
			} catch (JSONException e) {
				throw new SerializationException("An error occurred while deserializing query: " + queryJSON.toString(), e);
			}
			
			deserializeFields(fieldsJSON, datamartModel, query);
			deserializeFilters(filtersJSON, datamartModel, query);
			deserializeExpression(expressionJSON, datamartModel, query);
			deserializeHavings(havingsJSON, datamartModel, query);
			
			
			for(int i = 0; i < subqueriesJSON.length(); i++) {
				try {
					subquery = deserialize(subqueriesJSON.get(i), datamartModel);
				} catch (JSONException e) {
					throw new SerializationException("An error occurred while deserializing subquery number [" + (i+1) + "]: " + subqueriesJSON.toString(), e);
				}
				
				query.addSubquery(subquery);
			}
		} finally {
			logger.debug("OUT");
		}
		
		return query;
	}
	
	private void deserializeFields(JSONArray fieldsJSON, DataMartModel datamartModel, Query query) throws SerializationException {
		JSONObject fieldJSON;
		DataMartField field;
		String alias;
		String fieldType;
		
		String fieldUniqueName;		
		String group;
		String order;
		String funct;
		String pattern;
		
		JSONObject fieldClaculationDescriptor;
		String type;
		String expression;
		
		boolean visible;
		boolean included;
		
		logger.debug("IN");
		
		try {
			
			DatamartProperties props = datamartModel.getProperties();
			
			logger.debug("Query [" + query.getId() + "] have [" + fieldsJSON.length() + "] to deserialize");			
			for(int i = 0; i < fieldsJSON.length(); i++) {		
				try {
					fieldJSON = fieldsJSON.getJSONObject(i);
					
					alias = fieldJSON.getString(SerializationConstants.FIELD_ALIAS);					
					fieldType = fieldJSON.getString(SerializationConstants.FIELD_TYPE);
					logger.debug("Deserializing field [" + alias + "] of type [" + fieldType + "]...");
					
					included = fieldJSON.getBoolean(SerializationConstants.FIELD_INCLUDE);
					visible = fieldJSON.getBoolean(SerializationConstants.FIELD_VISIBLE);
					
					if("datamartField".equalsIgnoreCase(fieldType)) {
						fieldUniqueName = fieldJSON.getString(SerializationConstants.FIELD_ID);
						Assert.assertNotNull(fieldUniqueName, "Field name connot be null");
					
						field = datamartModel.getDataMartModelStructure().getField(fieldUniqueName);
						Assert.assertNotNull(field, "Inpossible to retrive from datamart-structure a fild named " + fieldUniqueName + ". Please check select clause: " + fieldsJSON.toString());
						if(StringUtilities.isEmpty(alias)) alias = "Column_" + (i+1);
						
						group = fieldJSON.getString(SerializationConstants.FIELD_GROUP);
						order = fieldJSON.getString(SerializationConstants.FIELD_ORDER);
						funct = fieldJSON.getString(SerializationConstants.FIELD_AGGREGATION_FUNCTION);
							
						if (AggregationFunctions.get(funct).equals(AggregationFunctions.NONE_FUNCTION)) {
							pattern = props.getFormat(field, datamartModel);
						} else {
							pattern = null;
						}
						query.addSelectFiled(field.getUniqueName(), funct, alias, included, visible, group.equalsIgnoreCase("true"), order, pattern);		
					} else if ("calculatedField".equalsIgnoreCase(fieldType)) {
						
						fieldClaculationDescriptor = fieldJSON.getJSONObject(SerializationConstants.FIELD_ID);
						type = fieldClaculationDescriptor.getString(SerializationConstants.FIELD_TYPE);
						expression = fieldClaculationDescriptor.getString(SerializationConstants.FIELD_EXPRESSION);
						
						query.addCalculatedFiled(alias, expression, type, included, visible);
					} else if (ISelectField.IN_LINE_CALCULATED_FIELD.equalsIgnoreCase(fieldType)) {
						
						fieldClaculationDescriptor = fieldJSON.getJSONObject(SerializationConstants.FIELD_ID);
						type = fieldClaculationDescriptor.getString(SerializationConstants.FIELD_TYPE);
						expression = fieldClaculationDescriptor.getString(SerializationConstants.FIELD_EXPRESSION);
						group = fieldJSON.getString(SerializationConstants.FIELD_GROUP);
						
						query.addInLineCalculatedFiled(alias, expression, type, included, visible, group.equalsIgnoreCase("true"));
					}else {
						Assert.assertUnreachable("Type [" + fieldType + "] of field [" + alias + "] is not valid");
					}
					
					logger.debug("Field [" + alias + "] succefully deserialized");
				} catch (Throwable t) {
					throw new SerializationException("An error occurred while deserializing field [" + fieldsJSON.toString() + "] of query [" + query.getId() + "]", t);
				}
			}
		} catch (Throwable t) {
			throw new SerializationException("An error occurred while deserializing select clause: " + fieldsJSON.toString(), t);
		}									
		
	}
	
	
	private void deserializeFilters(JSONArray filtersJOSN, DataMartModel datamartModel, Query query) throws SerializationException {
		
		JSONObject filterJSON;
				
		String filterId;
		String filterDescription;
		boolean promptable;

		String[] operandValues;
		String operandDescription;
		String operandType;
		String[] operandLasDefaulttValues;
		String[] operandLastValues;
		JSONArray operandValuesJSONArray;
		JSONArray operandDefaultValuesJSONArray;
		JSONArray operandLastValuesJSONArray;
		WhereField.Operand leftOperand;
		WhereField.Operand rightOperand;
		String operator;
		String booleanConnector;
		
		logger.debug("IN");
		
		try {					
			logger.debug("Query [" + query.getId() + "] have [" + filtersJOSN.length() + "] to deserialize");
			for(int i = 0; i < filtersJOSN.length(); i++) {
				
				try {
					filterJSON = filtersJOSN.getJSONObject(i);
					filterId = filterJSON.getString(SerializationConstants.FILTER_ID);
					filterDescription = filterJSON.getString(SerializationConstants.FILTER_DESCRIPTION);
					promptable = filterJSON.getBoolean(SerializationConstants.FILTER_PROMPTABLE);
					
					operandValues = new String[] {filterJSON.getString(SerializationConstants.FILTER_LO_VALUE)};
					operandDescription = filterJSON.getString(SerializationConstants.FILTER_LO_DESCRIPTION);
					operandType = filterJSON.getString(SerializationConstants.FILTER_LO_TYPE);
					operandLasDefaulttValues = new String[] {filterJSON.getString(SerializationConstants.FILTER_LO_DEFAULT_VALUE)};
					operandLastValues = new String[] {filterJSON.getString(SerializationConstants.FILTER_LO_LAST_VALUE)};
					leftOperand = new WhereField.Operand(operandValues, operandDescription, operandType, operandLasDefaulttValues, operandLastValues);
					
					operator = filterJSON.getString(SerializationConstants.FILTER_OPERATOR);
					
					operandValuesJSONArray = filterJSON.getJSONArray(SerializationConstants.FILTER_RO_VALUE);
					operandValues = JSONUtils.asStringArray(operandValuesJSONArray);
					operandDescription = filterJSON.getString(SerializationConstants.FILTER_RO_DESCRIPTION);
					operandType = filterJSON.getString(SerializationConstants.FILTER_RO_TYPE);
					operandDefaultValuesJSONArray = filterJSON.optJSONArray(SerializationConstants.FILTER_RO_DEFAULT_VALUE);
					operandLasDefaulttValues = JSONUtils.asStringArray(operandDefaultValuesJSONArray);
					operandLastValuesJSONArray = filterJSON.optJSONArray(SerializationConstants.FILTER_RO_LAST_VALUE);
					operandLastValues = JSONUtils.asStringArray(operandLastValuesJSONArray);
					rightOperand = new WhereField.Operand(operandValues, operandDescription, operandType, operandLasDefaulttValues, operandLastValues);
					
					booleanConnector = filterJSON.getString(SerializationConstants.FILTER_BOOLEAN_CONNETOR);
					
					Assert.assertTrue(!StringUtilities.isEmpty(operator), "Undefined operator for filter: " + filterJSON.toString());
					Assert.assertTrue(!"NONE".equalsIgnoreCase(operator), "Undefined operator NONE for filter: " + filterJSON.toString());
							
				    
					query.addWhereField(filterId, filterDescription, promptable, leftOperand, operator, rightOperand, booleanConnector);
					
				} catch (JSONException e) {
					throw new SerializationException("An error occurred while filter [" + filtersJOSN.toString() + "] of query [" + query.getId() + "]", e);
				}			
			}
		} catch(Throwable t) {
			throw new SerializationException("An error occurred while deserializing field of query [" + query.getId() +"]", t);
		} finally {
			logger.debug("OUT");
		}
			
	}
	
	
	private void deserializeHavings(JSONArray havingsJOSN, DataMartModel datamartModel, Query query) throws SerializationException {
		
		JSONObject havingJSON;
		DataMartField field;
				
		String filterId;
		String filterDescription;
		boolean promptable;

		String[] operandValues;
		String operandDescription;
		String operandType;
		String operandFunction;
		String[] operandLasDefaulttValues;
		String[] operandLastValues;
		JSONArray operandValuesJSONArray;
		JSONArray operandDefaultValuesJSONArray;
		JSONArray operandLastValuesJSONArray;
		HavingField.Operand leftOperand;
		HavingField.Operand rightOperand;
		String operator;
		String booleanConnector;
		IAggregationFunction function;
		
		logger.debug("IN");
		
		try {
		
			
			logger.debug("Query [" + query.getId() + "] have [" + havingsJOSN.length() + "] to deserialize");
			for(int i = 0; i < havingsJOSN.length(); i++) {
				
				try {
					havingJSON = havingsJOSN.getJSONObject(i);
					filterId = havingJSON.getString(SerializationConstants.FILTER_ID);
					filterDescription = havingJSON.getString(SerializationConstants.FILTER_DESCRIPTION);
					promptable = havingJSON.getBoolean(SerializationConstants.FILTER_PROMPTABLE);
					
					operandValues = new String[] {havingJSON.getString(SerializationConstants.FILTER_LO_VALUE)};
					operandDescription = havingJSON.getString(SerializationConstants.FILTER_LO_DESCRIPTION);
					operandType = havingJSON.getString(SerializationConstants.FILTER_LO_TYPE);
					operandLasDefaulttValues = new String[] {havingJSON.getString(SerializationConstants.FILTER_LO_DEFAULT_VALUE)};
					operandLastValues = new String[] {havingJSON.getString(SerializationConstants.FILTER_LO_LAST_VALUE)};
					operandFunction = havingJSON.getString(SerializationConstants.FILTER_LO_FUNCTION);
					function = AggregationFunctions.get(operandFunction);
					leftOperand = new HavingField.Operand(operandValues, operandDescription, operandType, 
							operandLasDefaulttValues, operandLastValues, function);
					
					operator = havingJSON.getString(SerializationConstants.FILTER_OPERATOR);
					
					operandValuesJSONArray = havingJSON.getJSONArray(SerializationConstants.FILTER_RO_VALUE);
					operandValues = JSONUtils.asStringArray(operandValuesJSONArray);
					operandDescription = havingJSON.getString(SerializationConstants.FILTER_RO_DESCRIPTION);
					operandType = havingJSON.getString(SerializationConstants.FILTER_RO_TYPE);
					operandDefaultValuesJSONArray = havingJSON.optJSONArray(SerializationConstants.FILTER_RO_DEFAULT_VALUE);
					operandLasDefaulttValues = JSONUtils.asStringArray(operandDefaultValuesJSONArray);
					operandLastValuesJSONArray = havingJSON.optJSONArray(SerializationConstants.FILTER_RO_LAST_VALUE);
					operandLastValues = JSONUtils.asStringArray(operandLastValuesJSONArray);
					operandFunction = havingJSON.getString(SerializationConstants.FILTER_RO_FUNCTION);
					function = AggregationFunctions.get(operandFunction);
					rightOperand = new HavingField.Operand(operandValues, operandDescription, operandType,
							operandLasDefaulttValues, operandLastValues, function);
					
					booleanConnector = havingJSON.getString(SerializationConstants.FILTER_BOOLEAN_CONNETOR);
					
					Assert.assertTrue(!StringUtilities.isEmpty(operator), "Undefined operator for filter: " + havingJSON.toString());
					Assert.assertTrue(!"NONE".equalsIgnoreCase(operator), "Undefined operator NONE for filter: " + havingJSON.toString());
							
				    
					query.addHavingField(filterId, filterDescription, promptable, leftOperand, operator, rightOperand, booleanConnector);
					
				} catch (JSONException e) {
					throw new SerializationException("An error occurred while deserializing filter [" + havingsJOSN.toString() + "] of query [" + query.getId() + "]", e);
				}
				
		
				
			}
		} catch(Throwable t) {
			throw new SerializationException("An error occurred while deserializing filters of query [" + query.getId() +"]", t);
		} finally {
			logger.debug("OUT");
		}
			
	}
	
	/*
	private void deserializeFilters(JSONArray filtersJOSN, DataMartModel datamartModel, Query query) throws SerializationException {
		
		JSONObject filterJSON;
		DataMartField field;
		String fname;
		String fdesc;
		String fieldUniqueName;
		String operator;
		String operand;
		boolean isFree;
		String operandDesc;
		String operandType;
		String boperator;
		String defaultValue;
		String lastValue;
		
		logger.debug("IN");
		
		try {
			
			logger.debug("Query [" + query.getId() + "] have [" + filtersJOSN.length() + "] to deserialize");
			for(int i = 0; i < filtersJOSN.length(); i++) {
				
				try {
					filterJSON = filtersJOSN.getJSONObject(i);
					fieldUniqueName = filterJSON.getString(SerializationConstants.FILTER_ID);
					field = datamartModel.getDataMartModelStructure().getField(fieldUniqueName);
					Assert.assertNotNull(field, "Impossible to load a field named [" + fieldUniqueName + "] from datamart");
				} catch (JSONException e) {
					throw new SerializationException("An error occurred while filter [" + filtersJOSN.toString() + "] of query [" + query.getId() + "]", e);
				}
				
				try {
					fname = filterJSON.getString(SerializationConstants.FILTER_NAME);
					fdesc =  filterJSON.getString( SerializationConstants.FILTER_NAME);
					
					operator = filterJSON.getString(SerializationConstants.FILTER_OPEARTOR);
					operand = filterJSON.getString(SerializationConstants.FILTER_OPEARND);
					isFree = filterJSON.getBoolean(SerializationConstants.FILTER_IS_FREE);
					operandDesc = filterJSON.getString(SerializationConstants.FILTER_OPEARND_DESCRIPTION);
					operandType = filterJSON.getString(SerializationConstants.FILTER_OPEARND_TYPE);
					boperator = filterJSON.getString(SerializationConstants.FILTER_BOOLEAN_CONNETOR);
					defaultValue = filterJSON.getString(SerializationConstants.FILTER_DEFAULT_VALUE);
					lastValue = filterJSON.getString(SerializationConstants.FILTER_LAST_VALUE);
				} catch (JSONException e) {
					throw new SerializationException("An error occurred while filter [" + filtersJOSN.toString() + "] of query [" + query.getId() + "]", e);
				}
				
				
				Assert.assertTrue(!StringUtilities.isEmpty(operator), "Undefined operator for filter: " + filterJSON.toString());
				Assert.assertTrue(!"NONE".equalsIgnoreCase(operator), "Undefined operator NONE for filter: " + filterJSON.toString());
						
			    
				query.addWhereFiled(fname, fdesc,field.getUniqueName(), operator, operand, operandType, operandDesc, boperator, isFree, defaultValue, lastValue);
			}
		} catch(Throwable t) {
			throw new SerializationException("An error occurred while deserializing filters of query [" + query.getId() +"]", t);
		} finally {
			logger.debug("OUT");
		}
			
	}
	*/
	
	
	
	private void deserializeExpression(JSONObject expressionJOSN, DataMartModel datamartModel, Query query) throws SerializationException {
		ExpressionNode filterExp;
		
		// start recursion
		filterExp = getFilterExpTree( expressionJOSN );
		
		query.setWhereClauseStructure( filterExp );
		
		/* ... DEBUG
		if(filterExp != null) {
			System.out.println(">>>>>>> " + getFilterExpAsString(filterExp));
		}
		*/
	}
	
	public static ExpressionNode getFilterExpTree(JSONObject nodeJSON) throws SerializationException {
		ExpressionNode node = null;
		String nodeType;
		String nodeValue;
		JSONArray childNodesJSON;
		
		if(nodeJSON.has("type") && nodeJSON.has("value")) {		
			try {
			nodeType = nodeJSON.getString("type");
			nodeValue = nodeJSON.getString("value");			
			node = new ExpressionNode(nodeType, nodeValue);
			
			childNodesJSON = nodeJSON.getJSONArray("childNodes");
			for(int i = 0; i < childNodesJSON.length(); i++) {
				JSONObject childNodeJSON = childNodesJSON.getJSONObject(i);
				node.addChild( getFilterExpTree(childNodeJSON) );
			}
			} catch(JSONException e) {
				throw new SerializationException("An error occurred while deserializing where clause structure: " + nodeJSON.toString(), e);
			}
		}
		return node;
	}
	
	private static String getFilterExpAsString(ExpressionNode filterExp) {
		String str = "";
		
		String type = filterExp.getType();
		if("NODE_OP".equalsIgnoreCase( type )) {
			for(int i = 0; i < filterExp.getChildNodes().size(); i++) {
				ExpressionNode child = (ExpressionNode)filterExp.getChildNodes().get(i);
				String childStr = getFilterExpAsString(child);
				if("NODE_OP".equalsIgnoreCase( child.getType() )) {
					childStr = "(" + childStr + ")";
				}
				str += (i==0?"": " " + filterExp.getValue());
				str += " " + childStr;
			}
		} else {
			str += filterExp.getValue();
		}
		
		return str;
	}
	
}
