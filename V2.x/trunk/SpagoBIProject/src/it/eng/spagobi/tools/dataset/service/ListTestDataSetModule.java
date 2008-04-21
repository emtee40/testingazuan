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

package it.eng.spagobi.tools.dataset.service;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spago.dbaccess.Utils;
import it.eng.spago.dbaccess.sql.DataConnection;
import it.eng.spago.dbaccess.sql.DataRow;
import it.eng.spago.dbaccess.sql.SQLCommand;
import it.eng.spago.dbaccess.sql.result.DataResult;
import it.eng.spago.dbaccess.sql.result.ScrollableDataResult;
import it.eng.spago.dispatching.module.list.basic.AbstractBasicListModule;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spago.paginator.basic.PaginatorIFace;
import it.eng.spago.paginator.basic.impl.GenericList;
import it.eng.spago.paginator.basic.impl.GenericPaginator;
import it.eng.spago.security.IEngUserProfile;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.services.DelegatedBasicListService;
import it.eng.spagobi.commons.utilities.DataSourceUtilities;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.tools.dataset.bo.DataSet;
import it.eng.spagobi.tools.dataset.bo.FileDataSet;
import it.eng.spagobi.tools.dataset.bo.QueryDataSet;
import it.eng.spagobi.tools.dataset.bo.WSDataSet;
import it.eng.spagobi.tools.datasource.bo.DataSource;

import java.io.FileInputStream;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;
import org.xml.sax.InputSource;


/**   @author Giulio Gavardi
 *     giulio.gavardi@eng.it
 */

public class ListTestDataSetModule extends AbstractBasicListModule  {

	 private static transient Logger logger = Logger.getLogger(ListTestDataSetModule.class);
	 private EMFErrorHandler errorHandler;
		public static final String messageBundle = "messages";
	 
	public ListTestDataSetModule() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	public ListIFace getList(SourceBean request, SourceBean response) throws Exception {
		logger.debug("IN");
		errorHandler=getResponseContainer().getErrorHandler();
		ListIFace listIFace=null;
		try{
			listIFace=getTestResultList(request, response);
			
		}
		catch (EMFUserError eex) {
			errorHandler.addError(eex);
			return null;
		} catch (Exception ex) {
			EMFInternalError internalError = new EMFInternalError(EMFErrorSeverity.ERROR, ex);
			errorHandler.addError(internalError);
			return null;
		}
		return listIFace;
		
	}
	
	

	
	
	
	

	public ListIFace getTestResultList(SourceBean request, SourceBean response) throws Exception {
		logger.debug("IN");
		// define the spago paginator and list object
		PaginatorIFace paginator = new GenericPaginator();
		ListIFace list = new GenericList();
		// recover lov object	
		RequestContainer requestContainer = getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();


		DataSet dataSet=(DataSet)session.getAttribute(DetailDataSetModule.DATASET);

		String typeDataset=getDataSetType(dataSet);
		//String typeDataset=(String)request.getAttribute("typeDataset");
		//DataSet dataSet=(DataSet)request.getAttribute("dataset");



				
		IEngUserProfile profile = null;
		profile = (IEngUserProfile)session.getAttribute(SpagoBIConstants.USER_PROFILE_FOR_TEST);
		if(profile==null) {
			SessionContainer permSess = session.getPermanentContainer();
			profile = (IEngUserProfile) permSess.getAttribute(IEngUserProfile.ENG_USER_PROFILE);
		} else {
			session.delAttribute(SpagoBIConstants.USER_PROFILE_FOR_TEST);
		}

		
		// based on lov type fill the spago list and paginator object
		SourceBean rowsSourceBean = null;
		List colNames = new ArrayList();

		if(typeDataset.equals("1")) {
			QueryDataSet queryDataSet=(QueryDataSet)dataSet;

			DataSource dataSource=queryDataSet.getDataSource();
			String datasource=null;
			try{
			datasource = dataSource.getLabel();
			}
			catch (Exception e) {
				throw new EMFUserError(EMFErrorSeverity.ERROR, "9212", messageBundle);
			}
			
			String query = queryDataSet.getQuery();
			
			
			// execute query
		
				//query = GeneralUtilities.substituteProfileAttributesInString(query, profile);
			try{
				query = GeneralUtilities.substituteProfileAttributesInString(query, profile);
			}
			catch (Exception e) {
				response.setAttribute(DetailDataSetModule.TEST_EXECUTED, "false");
				throw new EMFUserError(EMFErrorSeverity.ERROR, "9213", messageBundle);	
			}
				
				//check if there are parameters filled
			try {
				Object par=(Object)session.getAttribute(DetailDataSetModule.PARAMETERS_FILLED);
				HashMap parametersFilled=(HashMap)par;
				if(parametersFilled!=null && !parametersFilled.isEmpty()){
					query = GeneralUtilities.substituteParametersInString(query, parametersFilled);	
				}
				//rowsSourceBean = (SourceBean) executeSelect(getRequestContainer(), getResponseContainer(), pool, statement, colNames);
				rowsSourceBean = (SourceBean) executeSelect(getRequestContainer(), getResponseContainer(), datasource, query, colNames);
			} catch (Exception e) {
				response.setAttribute(DetailDataSetModule.TEST_EXECUTED, "false");
				throw new EMFUserError(EMFErrorSeverity.ERROR, "9211", messageBundle);

			}
		} else if(typeDataset.equals("0")) {

			FileDataSet fileDataSet=(FileDataSet)dataSet;
			String pathFile=fileDataSet.getFileName();

			FileInputStream fis=null;
			try{
			fis=new FileInputStream(pathFile);
			}
			catch (Exception e) {
				// TODO: handle exception
				response.setAttribute(DetailDataSetModule.TEST_EXECUTED, "false");

				throw new EMFUserError(EMFErrorSeverity.ERROR, "9209", messageBundle);

			}
			try{
			InputSource inputSource=new InputSource(fis);


				rowsSourceBean=SourceBean.fromXMLStream(inputSource);
				//I must get columnNames. assumo che tutte le righe abbiano le stesse colonne
				if(rowsSourceBean!=null){
					List row =rowsSourceBean.getAttributeAsList("ROW");
					if(row.size()>=1){
						Iterator iterator = row.iterator(); 
						SourceBean sb = (SourceBean) iterator.next();
						List sbas=sb.getContainedAttributes();
						for (Iterator iterator2 = sbas.iterator(); iterator2.hasNext();) {
							SourceBeanAttribute object = (SourceBeanAttribute) iterator2.next();
							String name=object.getKey();
							colNames.add(name);
						}
						
					}
				}
			}

			catch (Exception e) {

				throw new EMFUserError(EMFErrorSeverity.ERROR, "9210", messageBundle);
				//return null;
			}
			finally{
				if(fis!=null)fis.close();
			}

		}
		
		// Build the list fill paginator
		if(rowsSourceBean != null) {
			List rows = rowsSourceBean.getAttributeAsList(DataRow.ROW_TAG);
			for (int i = 0; i < rows.size(); i++)
				paginator.addRow(rows.get(i));
		}
		list.setPaginator(paginator);

		// build module configuration for the list
		String moduleConfigStr = "";
		moduleConfigStr += "<CONFIG>";
		moduleConfigStr += "	<QUERIES/>";
		moduleConfigStr += "	<COLUMNS>";
		// if there's no colum name add a fake column to show that there's no data
		if(colNames.size()==0) {
			moduleConfigStr += "	<COLUMN name=\"No Result Found\" />";
		} else {
			Iterator iterColNames = colNames.iterator();
			while(iterColNames.hasNext()) {
				String colName = (String)iterColNames.next();
				moduleConfigStr += "	<COLUMN name=\"" + colName + "\" />";
			}
		}
		moduleConfigStr += "	</COLUMNS>";
		moduleConfigStr += "	<CAPTIONS/>";
		moduleConfigStr += "	<BUTTONS/>";
		moduleConfigStr += "</CONFIG>";
		SourceBean moduleConfig = SourceBean.fromXMLString(moduleConfigStr);
		
		response.setAttribute(DetailDataSetModule.TEST_EXECUTED, "true");

		
		response.setAttribute(moduleConfig);


		// filter the list 
		String valuefilter = (String) request.getAttribute(SpagoBIConstants.VALUE_FILTER);
		if (valuefilter != null) {
			String columnfilter = (String) request.getAttribute(SpagoBIConstants.COLUMN_FILTER);
			String typeFilter = (String) request.getAttribute(SpagoBIConstants.TYPE_FILTER);
			String typeValueFilter = (String) request.getAttribute(SpagoBIConstants.TYPE_VALUE_FILTER);
			list = DelegatedBasicListService.filterList(list, valuefilter, typeValueFilter, 
					columnfilter, typeFilter, getResponseContainer().getErrorHandler());
		}

		response.setAttribute(DetailDataSetModule.DATASET,dataSet);
		response.setAttribute("typedataset",typeDataset);

		logger.debug("OUT");
		return list;
	}




	private String getDataSetType(DataSet a){
		String type="";
		if(a instanceof FileDataSet)type="0";
		else 		
			if(a instanceof QueryDataSet)type="1";
			else 		
				if(a instanceof WSDataSet)type="2";
		return type;

	}




	/**
	 * Find the attributes of the first row of the xml passed at input: this xml is assumed to be:
	 * &lt;ROWS&gt;
	 * 	&lt;ROW attribute_1="value_of_attribute_1" ... /&gt;
	 * 	....
	 * &lt;ROWS&gt; 
	 * 
	 * @param rowsSourceBean The sourcebean to be parsed
	 * @return the list of the attributes of the first row
	 */
	private List findFirstRowAttributes(SourceBean rowsSourceBean) {
		List columnsNames = new ArrayList();
		if (rowsSourceBean != null) {
			List rows = rowsSourceBean.getAttributeAsList(DataRow.ROW_TAG);
			if (rows != null && rows.size() != 0) {
				SourceBean row = (SourceBean) rows.get(0);
				List rowAttrs = row.getContainedAttributes();
				Iterator rowAttrsIter = rowAttrs.iterator();
				while (rowAttrsIter.hasNext()) {
					SourceBeanAttribute rowAttr = (SourceBeanAttribute) rowAttrsIter.next();
					columnsNames.add(rowAttr.getKey());
				}
			}
		}
		return columnsNames;
	}

	/**
	 * Executes a select statement.
	 * 
	 * @param requestContainer The request container object
	 * @param responseContainer The response container object
	 * @param pool The pool definition string
	 * @param statement	The statement definition string
	 * @param columNames 
	 * @return A generic object containing the Execution results
	 * @throws EMFInternalError 
	 */
	public static Object executeSelect(RequestContainer requestContainer,
			ResponseContainer responseContainer, String datasource, String statement, List columnsNames) throws EMFInternalError {
		//ResponseContainer responseContainer, String pool, String statement, List columnsNames) throws EMFInternalError {
		Object result = null;
		//DataConnectionManager dataConnectionManager = null;
		DataConnection dataConnection = null;
		SQLCommand sqlCommand = null;
		DataResult dataResult = null;
		try {
			/*dataConnectionManager = DataConnectionManager.getInstance();
			dataConnection = dataConnectionManager.getConnection(pool);
			 */
			//gets connection
			DataSourceUtilities dsUtil = new DataSourceUtilities();
			Connection conn = dsUtil.getConnection(datasource); 
			dataConnection = dsUtil.getDataConnection(conn);

			sqlCommand = dataConnection.createSelectCommand(statement);
			dataResult = sqlCommand.execute();
			ScrollableDataResult scrollableDataResult = (ScrollableDataResult) dataResult
			.getDataObject();
			List temp = Arrays.asList(scrollableDataResult.getColumnNames());
			columnsNames.addAll(temp);
			result = scrollableDataResult.getSourceBean();
		} finally {
			Utils.releaseResources(dataConnection, sqlCommand, dataResult);
		}
		return result;
	}
	


}
