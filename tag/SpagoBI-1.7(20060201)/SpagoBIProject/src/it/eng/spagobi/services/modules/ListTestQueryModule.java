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
package it.eng.spagobi.services.modules;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.ResponseContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dbaccess.DataConnectionManager;
import it.eng.spago.dbaccess.Utils;
import it.eng.spago.dbaccess.sql.DataConnection;
import it.eng.spago.dbaccess.sql.DataRow;
import it.eng.spago.dbaccess.sql.SQLCommand;
import it.eng.spago.dbaccess.sql.result.DataResult;
import it.eng.spago.dbaccess.sql.result.ScrollableDataResult;
import it.eng.spago.dispatching.module.list.basic.AbstractBasicListModule;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.paginator.basic.ListIFace;
import it.eng.spago.paginator.basic.PaginatorIFace;
import it.eng.spago.paginator.basic.impl.GenericList;
import it.eng.spago.paginator.basic.impl.GenericPaginator;
import it.eng.spagobi.bo.ModalitiesValue;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.services.commons.DelegatedBasicListService;

import java.util.List;
import java.util.StringTokenizer;
import java.util.Vector;

/**
 * Tests the query and produces the list as output. 
 * 
 * @author Zerbetto
 */

public class ListTestQueryModule extends AbstractBasicListModule {
	
	/**
	 * Class Constructor
	 *
	 */
	public ListTestQueryModule() {
		super();
	} 
	
	public ListIFace getList(SourceBean request, SourceBean response) throws Exception {
		
		RequestContainer requestContainer = getRequestContainer();
		SessionContainer session = requestContainer.getSessionContainer();
		ModalitiesValue modVal = (ModalitiesValue) session.getAttribute(SpagoBIConstants.MODALITY_VALUE_OBJECT);
		String queryDetXML = modVal.getLovProvider();
		SourceBean queryXML = SourceBean.fromXMLString(queryDetXML);
		String visibleColumns = ((SourceBean) queryXML
				.getAttribute("VISIBLE-COLUMNS")).getCharacters();
		StringTokenizer strToken = new StringTokenizer(visibleColumns, ",");
		Vector columns = new Vector();
		while (strToken.hasMoreTokens()) {
			String val = strToken.nextToken().trim();
			columns.add(val);
		}
		String moduleConfigStr = "";
		moduleConfigStr += "<CONFIG>";
		moduleConfigStr += "	<QUERIES/>";
		moduleConfigStr += "	<COLUMNS>";
		for (int i = 0; i < columns.size(); i++) {
			moduleConfigStr += "	<COLUMN name=\"" + columns.get(i).toString() + "\" />";
		}
		moduleConfigStr += "	</COLUMNS>";
		moduleConfigStr += "	<CAPTIONS/>";
		moduleConfigStr += "	<BUTTONS/>";
		moduleConfigStr += "</CONFIG>";
		SourceBean moduleConfig = SourceBean.fromXMLString(moduleConfigStr);
		response.setAttribute(moduleConfig);
		PaginatorIFace paginator = new GenericPaginator();
		String pool = ((SourceBean) queryXML.getAttribute("CONNECTION")).getCharacters();
		String statement = ((SourceBean) queryXML.getAttribute("STMT")).getCharacters();
		
		SourceBean rowsSourceBean = null;
		try {
			rowsSourceBean = (SourceBean) executeSelect(getRequestContainer(), getResponseContainer(), pool, statement);
		} catch (Exception e) {
			String stacktrace = e.toString();
			response.setAttribute("stacktrace", stacktrace);
			int startIndex = stacktrace.indexOf("java.sql.");
			int endIndex = stacktrace.indexOf("\n\tat ", startIndex);
			if (endIndex == -1) endIndex = stacktrace.indexOf(" at ", startIndex);
			if (startIndex != -1 && endIndex != -1) 
				response.setAttribute("errorMessage", stacktrace.substring(startIndex, endIndex));
		}
		List rowsVector = null;
		if (rowsSourceBean != null)
			rowsVector = rowsSourceBean.getAttributeAsList(DataRow.ROW_TAG);

		if (rowsSourceBean != null) {
			for (int i = 0; i < rowsVector.size(); i++)
				paginator.addRow(rowsVector.get(i));
		}
		ListIFace list = new GenericList();
		list.setPaginator(paginator);
		response.setAttribute("testExecuted", "yes");
		// filter the list 
		String valuefilter = (String) request.getAttribute(SpagoBIConstants.VALUE_FILTER);
		if (valuefilter != null) {
			list = DelegatedBasicListService.filterList(list, valuefilter, request);
		}
		return list;
		
	}
	
	/**
	 * Executes a select statement.
	 * 
	 * @param requestContainer The request container object
	 * @param responseContainer The response container object
	 * @param pool The pool definition string
	 * @param statement	The statement definition string
	 * @return A generic object containing the Execution results
	 * @throws EMFInternalError 
	 */
	 public static Object executeSelect(RequestContainer requestContainer,
			ResponseContainer responseContainer, String pool, String statement) throws EMFInternalError {
		Object result = null;
		DataConnectionManager dataConnectionManager = null;
		DataConnection dataConnection = null;
		SQLCommand sqlCommand = null;
		DataResult dataResult = null;
		try {
			dataConnectionManager = DataConnectionManager.getInstance();
			dataConnection = dataConnectionManager.getConnection(pool);
			sqlCommand = dataConnection.createSelectCommand(statement);
			dataResult = sqlCommand.execute();
			ScrollableDataResult scrollableDataResult = (ScrollableDataResult) dataResult
					.getDataObject();
			result = scrollableDataResult.getSourceBean();
		} finally {
			Utils.releaseResources(dataConnection, sqlCommand, dataResult);
		}
		return result;
	}

}
