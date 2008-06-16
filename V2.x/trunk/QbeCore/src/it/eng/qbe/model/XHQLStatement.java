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
package it.eng.qbe.model;

import it.eng.qbe.export.HqlToSqlQueryRewriter;
import it.eng.qbe.model.accessmodality.DataMartModelAccessModality;
import it.eng.qbe.model.structure.DataMartEntity;
import it.eng.qbe.model.structure.DataMartField;
import it.eng.qbe.model.structure.DataMartModelStructure;
import it.eng.qbe.newquery.GroupByField;
import it.eng.qbe.newquery.OrderByField;
import it.eng.qbe.newquery.Query;
import it.eng.qbe.newquery.SelectField;
import it.eng.qbe.newquery.WhereField;
import it.eng.qbe.utility.StringUtils;
import it.eng.spago.base.SourceBean;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import org.hibernate.Session;

/**
 * The Class HQLStatement.
 */
public class XHQLStatement extends XBasicStatement {
	
	
	protected XHQLStatement(IDataMartModel dataMartModel) {
		super(dataMartModel);
	}
	
	
	protected XHQLStatement(IDataMartModel dataMartModel, Query query) {
		super(dataMartModel, query);
	}
	

	/*
	private String buildSelectClause(Query query, Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		List selectFields = query.getSelectFields();
		
		if(selectFields == null ||selectFields.size() == 0) {
			return "";
		}
		
		buffer.append("SELECT");
		
		Iterator it = selectFields.iterator();
		while( it.hasNext() ) {
			SelectField selectField = (SelectField)it.next();
			DataMartField datamartField = getDataMartModel().getDataMartModelStructure().getField(selectField.getUniqueName());
			DataMartEntity entity = datamartField.getParent();
			if(!entityAliases.containsKey(entity.getUniqueName())) {
				entityAliases.put(entity.getUniqueName(), "t_" + entityAliases.keySet().size());
			}
			String entityAlias = (String)entityAliases.get( entity.getUniqueName() );
			String fieldName = entityAlias + "." + datamartField.getName();
			buffer.append(" " + selectField.getFunction().applay(fieldName) + " " + selectField.getAlias());
			if( it.hasNext() ) {
				buffer.append(",");
			}
		}
		
		return buffer.toString().trim();
	}
	*/
	
	private String buildSelectClause(Query query, Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		List selectFields = query.getSelectFields();
		
		if(selectFields == null ||selectFields.size() == 0) {
			return "";
		}
		
		buffer.append("SELECT");
		
		Iterator it = selectFields.iterator();
		while( it.hasNext() ) {
			SelectField selectField = (SelectField)it.next();
			DataMartField datamartField = getDataMartModel().getDataMartModelStructure().getField(selectField.getUniqueName());
			DataMartEntity entity = datamartField.getParent().getRoot(); 
			String queryName = datamartField.getQueryName();
			if(!entityAliases.containsKey(entity.getUniqueName())) {
				entityAliases.put(entity.getUniqueName(), "t_" + entityAliases.keySet().size());
			}
			String entityAlias = (String)entityAliases.get( entity.getUniqueName() );
			String fieldName = entityAlias + "." + queryName;
			buffer.append(" " + selectField.getFunction().apply(fieldName));
			if( it.hasNext() ) {
				buffer.append(",");
			}
		}
		
		return buffer.toString().trim();
	}
	
	private String buildFromClause(Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		
		if(entityAliases == null || entityAliases.keySet().size() == 0) {
			return "";
		}
		
		buffer.append("FROM");
		
		Iterator it = entityAliases.keySet().iterator();
		while( it.hasNext() ) {
			String entityUniqueName = (String)it.next();
			String entityAlias = (String)entityAliases.get(entityUniqueName);
			DataMartEntity datamartEntity =  getDataMartModel().getDataMartModelStructure().getEntity(entityUniqueName);
			
			buffer.append(" " + datamartEntity.getType() + " " + entityAlias);
			if( it.hasNext() ) {
				buffer.append(",");
			}
		}
		
		return buffer.toString().trim();
	}
	
	private String buildWhereClause(Query query, Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		List whereFields = query.getWhereFields();
		
		if(whereFields != null && whereFields.size() > 0) {		
			buffer.append("WHERE");
			
			Iterator it = whereFields.iterator();
			while( it.hasNext() ) {
				WhereField whereField = (WhereField)it.next();
				DataMartField datamartField = getDataMartModel().getDataMartModelStructure().getField(whereField.getUniqueName());
				DataMartEntity entity = datamartField.getParent().getRoot(); 
				String queryName = datamartField.getQueryName();
				if(!entityAliases.containsKey(entity.getUniqueName())) {
					entityAliases.put(entity.getUniqueName(), "t_" + entityAliases.keySet().size());
				}
				String entityAlias = (String)entityAliases.get( entity.getUniqueName() );
				
				
				String leftHandValue = entityAlias + "." + queryName;
				String rightHandValue = whereField.getRightHandValue().toString();
				if(datamartField.getType().equalsIgnoreCase("String")) {
					rightHandValue = "'" + rightHandValue + "'";
				}
				
				buffer.append(" " + whereField.getOperator().apply(leftHandValue, rightHandValue) );
				
				if( it.hasNext() ) {
					buffer.append(" AND");
				}
			}
		}
		
		/////////////////////////////////////////////////////////////////////////
		DataMartModelStructure dataMartModelStructure = dataMartModel.getDataMartModelStructure();
		DataMartModelAccessModality dataMartModelAccessModality = dataMartModel.getDataMartModelAccessModality();
		
		Iterator it = entityAliases.keySet().iterator();
		while(it.hasNext()){
			String entityUniqueName = (String)it.next();
			DataMartEntity entity = dataMartModelStructure.getEntity( entityUniqueName );
			
			// check for condition filter on this entity
			List filters = dataMartModelAccessModality.getEntityFilterConditions(entity.getType());
			for(int i = 0; i < filters.size(); i++) {
				Filter filter = (Filter)filters.get(i);
				Set fields = filter.getFields();
				Properties props = new Properties();
				Iterator fieldIterator = fields.iterator();
				while(fieldIterator.hasNext()) {
					String fieldName = (String)fieldIterator.next();
					String entityAlias = (String)entityAliases.get(entityUniqueName);
					props.put(fieldName, entityAlias + "." + fieldName);
				}
				String filterCondition = null;
				try {
					filterCondition = StringUtils.replaceParameters(filter.getFilterCondition(), "F", props);
				} catch (IOException e) {
					e.printStackTrace();
				}
				
				if(filterCondition != null) {
					if(buffer.toString().length() > 0) {
						buffer.append(" and ");
					} else {
						buffer.append("where ");
					}
					buffer.append(filterCondition + " ");
				}
			}
			
			//	check for condition filter on sub entities
			List subEntities = entity.getAllSubEntities();
			for(int i = 0; i < subEntities.size(); i++) {
				DataMartEntity subEntity = (DataMartEntity)subEntities.get(i);
				filters = dataMartModelAccessModality.getEntityFilterConditions(subEntity.getType());
				for(int j = 0; j < filters.size(); j++) {
					Filter filter = (Filter)filters.get(j);
					Set fields = filter.getFields();
					Properties props = new Properties();
					Iterator fieldIterator = fields.iterator();
					while(fieldIterator.hasNext()) {
						String fieldName = (String)fieldIterator.next();
						DataMartField filed = null;
						Iterator subEntityFields = subEntity.getAllFields().iterator();
						while(subEntityFields.hasNext()) {
							filed = (DataMartField)subEntityFields.next();
							if(filed.getQueryName().endsWith("." + fieldName)) break;
						}
						String entityAlias = (String)entityAliases.get(entityUniqueName);
						props.put(fieldName, entityAlias + "." + filed.getQueryName());
					}
					String filterCondition = null;
					try {
						filterCondition = StringUtils.replaceParameters(filter.getFilterCondition(), "F", props);
					} catch (IOException e) {
						e.printStackTrace();
					}
					
					if(filterCondition != null) {
						if(buffer.toString().length() > 0) {
							buffer.append(" and ");
						} else {
							buffer.append("where ");
						}
						buffer.append(filterCondition + " ");
					}
				}
			}
			
			
		}
		
		
		return buffer.toString().trim();
	}
	
	private String buildGroupByClause(Query query, Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		List groupByFields = query.getGroupByFields();
		
		if(groupByFields == null ||groupByFields.size() == 0) {
			return "";
		}
		
		buffer.append("GROUP BY");
		
		Iterator it = groupByFields.iterator();
		while( it.hasNext() ) {
			GroupByField groupByField = (GroupByField)it.next();
			DataMartField datamartField = getDataMartModel().getDataMartModelStructure().getField(groupByField.getUniqueName());
			DataMartEntity entity = datamartField.getParent().getRoot(); 
			String queryName = datamartField.getQueryName();
			if(!entityAliases.containsKey(entity.getUniqueName())) {
				entityAliases.put(entity.getUniqueName(), "t_" + entityAliases.keySet().size());
			}
			String entityAlias = (String)entityAliases.get( entity.getUniqueName() );
			String fieldName = entityAlias + "." +queryName;
			buffer.append(" " + fieldName);
			if( it.hasNext() ) {
				buffer.append(",");
			}
		}
		
		return buffer.toString().trim();
	}
	
	private String buildOrderByClause(Query query, Map entityAliases) {
		StringBuffer buffer = new StringBuffer();
		List orderByFields = query.getOrderByFields();
		
		if(orderByFields == null ||orderByFields.size() == 0) {
			return "";
		}
		
		buffer.append("ORDER BY");
		
		Iterator it = orderByFields.iterator();
		while( it.hasNext() ) {
			OrderByField orderByField = (OrderByField)it.next();
			DataMartField datamartField = getDataMartModel().getDataMartModelStructure().getField(orderByField.getUniqueName());
			DataMartEntity entity = datamartField.getParent().getRoot(); 
			String queryName = datamartField.getQueryName();
			if(!entityAliases.containsKey(entity.getUniqueName())) {
				entityAliases.put(entity.getUniqueName(), "t_" + entityAliases.keySet().size());
			}
			String entityAlias = (String)entityAliases.get( entity.getUniqueName() );
			String fieldName = entityAlias + "." + queryName;
			buffer.append(" " + fieldName + " " + (orderByField.isAscendingOrder()?"ASC": "DESC") );
			if( it.hasNext() ) {
				buffer.append(",");
			}
		}
		
		return buffer.toString().trim();
	}
	
	
	public String getQueryString(Query query) {		
		try {
			return getQueryString(query, parameters);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}
		
	public String getQueryString(Query query, Map parameters) throws IOException {		
		StringBuffer buffer; 
		
		Map entityAliases = new HashMap();
		buffer = new StringBuffer();
		String selectClause = buildSelectClause(query, entityAliases);
		String whereClause = buildWhereClause(query, entityAliases);
		String groupByClause = buildGroupByClause(query, entityAliases);
		String orderByClause = buildOrderByClause(query, entityAliases);
		String fromClause = buildFromClause(entityAliases);
		
		buffer.append(selectClause + " " + fromClause + " " + whereClause + " " +  groupByClause + " " + orderByClause);
		
		return StringUtils.replaceParameters(buffer.toString().trim(), "P", parameters);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#execute(int, int)
	 */
	public SourceBean execute(int offset, int fetchSize) throws Exception {
		return execute(query, parameters, offset, fetchSize, maxResults);
	}
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#execute(int)
	 */
	public SourceBean execute(int offset) throws Exception {
		return execute(query, parameters, offset, fetchSize, maxResults);
	}

	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#execute()
	 */
	public SourceBean execute() throws Exception {
		return execute(query, parameters, offset, fetchSize, maxResults);
	}
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#execute(it.eng.qbe.query.IQuery, java.util.Properties, int, int, int)
	 */
	public SourceBean execute(Query query, Map parameters, int offset, int fetchSize, int maxResults) throws Exception {
		Session session = null;
		try{		
			session = dataMartModel.getDataSource().getSessionFactory().openSession();
			
			String queryString = getQueryString(query, parameters);	
			System.out.println("NEW: " + queryString);
				
			org.hibernate.Query hibernateQuery = session.createQuery(queryString);			
			
			// check for overflow
			if(maxResults >= 0) hibernateQuery.setMaxResults(maxResults);
			int resultNumber = hibernateQuery.list().size();
			boolean overflow = (resultNumber == maxResults);
						
			// get query results
			hibernateQuery.setFirstResult(offset < 0 ? 0 : offset);
			//if(fetchSize >= 0 && fetchSize < resultNumber) {
				hibernateQuery.setMaxResults(fetchSize);			
			//}
			List result = hibernateQuery.list();
				
			// build the source bean that holds the resultset				
			SourceBean resultSetSB = new SourceBean("QUERY_RESPONSE_SOURCE_BEAN");
			resultSetSB.setAttribute("query", queryString);
			resultSetSB.setAttribute("offset", new Integer(offset));
			resultSetSB.setAttribute("fetchSize", new Integer(fetchSize));
			resultSetSB.setAttribute("maxResults", new Integer(maxResults));
			resultSetSB.setAttribute("resultNumber", new Integer(resultNumber));
			resultSetSB.setAttribute("overflow", new Boolean(overflow));
			resultSetSB.setAttribute("list", result);
			
			
			session.close();
						
			return resultSetSB;
		}finally {
			if (session != null && session.isOpen())
			session.close();
		}
	}
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#executeWithPagination(int, int, int)
	 */
	public SourceBean executeWithPagination(int offset, int fetchSize, int maxResults) throws Exception {
		return execute(query, parameters, offset, fetchSize, maxResults);
	}
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#executeWithPagination(int, int)
	 */
	public SourceBean executeWithPagination(int pageNumber, int pageSize) throws Exception {
		return executeWithPagination(query, parameters, pageNumber, pageSize, maxResults);
	}
	
	/* (non-Javadoc)
	 * @see it.eng.qbe.model.IStatement#executeWithPagination(it.eng.qbe.query.IQuery, java.util.Properties, int, int, int)
	 */
	public SourceBean executeWithPagination(Query query, Map parameters, int pageNumber, int pageSize, int maxResults) throws Exception {
		SourceBean resultSetSB = execute(query, parameters, pageNumber * pageSize, pageSize, maxResults);
		
		Session session = null;
		try{		
			session = dataMartModel.getDataSource().getSessionFactory().openSession();
			
			Integer resultNumber = (Integer)resultSetSB.getAttribute("resultNumber");
			
			int pagesNumber = 1;
			if(pageSize > 0) {
				pagesNumber = (resultNumber.intValue() / pageSize) + ( ((resultNumber.intValue() % pageSize) != 0)? 1: 0);
			}
			
			boolean hasNextPage = false;
			if(pageSize > 0) hasNextPage = resultNumber.intValue() > ((pageNumber+1) * pageSize);
			
			boolean hasPrevPage = (pageNumber > 0);
			
			 
			
			resultSetSB.setAttribute("currentPage", new Integer(pageNumber));
			resultSetSB.setAttribute("pagesNumber", new Integer(pagesNumber));
			resultSetSB.setAttribute("hasNextPage", new Boolean(hasNextPage));
			resultSetSB.setAttribute("hasPreviousPage", new Boolean(hasPrevPage));			
			
			session.close();
						
			return resultSetSB;
		}finally {
			if (session != null && session.isOpen())
			session.close();
		}
	}
}
