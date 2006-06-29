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
package it.eng.qbe.export;

import it.eng.qbe.utility.Logger;

import java.util.Collections;
import java.util.HashMap;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.engine.SessionFactoryImplementor;
import org.hibernate.hql.QueryTranslator;
import org.hibernate.hql.ast.ASTQueryTranslatorFactory;

/**
 * @author Gioia
 * 
 */
public class HqlToSqlQueryRewriter implements IQueryRewriter {
	
	private Session session;
	
	public HqlToSqlQueryRewriter(Session session) {
		this.session = session;
	}
	
	public String rewrite(String query) {
		String sqlQuery = null;		
		Logger.debug(this.getClass(), "rewrite: HQL query to convert: " + query);		
		System.out.println("---> HQL query to convert: " + query);
		
		Query hibQuery = session.createQuery(query);
		SessionFactory sessFact = session.getSessionFactory();
		SessionFactoryImplementor imple = (SessionFactoryImplementor) sessFact;
		ASTQueryTranslatorFactory factory = new ASTQueryTranslatorFactory();
		QueryTranslator trans = factory.createQueryTranslator(hibQuery
				.getQueryString(), Collections.EMPTY_MAP, imple);
		trans.compile(new HashMap(), false);
		sqlQuery = trans.getSQLString();
		
		Logger.debug(this.getClass(), "rewrite: generated SQL query: " + sqlQuery);		
		System.out.println(" ---> generated SQL query: " + sqlQuery);
		String decoratedQuery = rewriteWithAlias(query, sqlQuery);
		System.out.println(" ---> decorated SQL query: " + decoratedQuery);
		return decoratedQuery;
		//return sqlQuery;
	}
	
	private String getSelectClause(String query) {
		String selectClause = query.substring(query.indexOf("select") + "select".length(),
				query.indexOf("from"));
		return selectClause;
	}
	
	private String[] getSelectEntities(String selectClause) {
		return selectClause.split(",");
	}
	
	private String getEntityNameFromFunctionalEntity(String func, String funcEntity) {
		String entityName = null;
		System.out.println(" ---> func: " + func + "; funcEntity: " + funcEntity);
		entityName = funcEntity.substring(funcEntity.indexOf('(') + 1, funcEntity.indexOf(')'));
		entityName = entityName.trim() +  func.substring(0, 1).toUpperCase() + func.substring(1, func.length()).toLowerCase();
		System.out.println(" ---> entityName: " + entityName);
		return entityName;
	}
	
	private String getEntityName(String entity) {
		String entityName = null;
		System.out.println(" ---> entity: " + entity);
		
		if(entity.indexOf(" as ") != -1) {
			entityName = entity.substring(entity.indexOf(" as ") + 4, entity.length());
		} else {
			entityName = entity.trim();
			if(entityName.startsWith("sum(")) entityName = getEntityNameFromFunctionalEntity("sum", entityName);
			if(entityName.startsWith("avg(")) entityName = getEntityNameFromFunctionalEntity("avg", entityName);
			if(entityName.startsWith("min(")) entityName = getEntityNameFromFunctionalEntity("min", entityName);
			if(entityName.startsWith("max(")) entityName = getEntityNameFromFunctionalEntity("max", entityName);
			if(entityName.startsWith("count(")) entityName = getEntityNameFromFunctionalEntity("count", entityName); 
			
			if(entityName.lastIndexOf('.') != -1) {
				entityName = entityName.substring(entityName.lastIndexOf('.') + 1, entityName.length());
			}
		}
		
		return entityName;
	}
	
	public String rewriteWithAlias(String hqlQuery,String sqlQuery) {
		String[] selectEntities = getSelectEntities(getSelectClause(hqlQuery));
		String[] fieldNames = new String[selectEntities.length];
		for(int i = 0; i < selectEntities.length; i++) {
			//fieldNames[i] = selectEntities[i];
			fieldNames[i] = getEntityName(selectEntities[i]);
			/*
			if(fieldNames[i].indexOf("as") != -1) {
				fieldNames[i] = fieldNames[i].substring(fieldNames[i].indexOf("as")+2, fieldNames[i].length());
			} else {
				if(fieldNames[i].lastIndexOf('.') != -1) {
					fieldNames[i] = fieldNames[i].substring(fieldNames[i].lastIndexOf('.') + 1, fieldNames[i].length());
				}
			}
			*/
		}
		
		String selectSqlBody = getSelectClause(sqlQuery);
		selectEntities = selectSqlBody.split(",");
		String newSelectBody = "";
		for(int i = 0; i < selectEntities.length; i++) {
			String selectItem = selectEntities[i];
			selectItem = selectItem.substring(0, selectItem.indexOf("as")+2);
			selectItem += " " + fieldNames[i];
			newSelectBody += ((i!=0)?", ":" ") + selectItem;
		}		
		String newQueryWithAlias = "select " + newSelectBody + " " + sqlQuery.substring(sqlQuery.indexOf("from"), sqlQuery.length());
				
		return newQueryWithAlias;
	}

}
