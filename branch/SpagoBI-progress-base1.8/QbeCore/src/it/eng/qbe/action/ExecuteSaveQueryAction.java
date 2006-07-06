
package it.eng.qbe.action;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.utility.IQbeMessageHelper;
import it.eng.qbe.utility.Logger;
import it.eng.qbe.utility.Utils;
import it.eng.qbe.wizard.EntityClass;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.qbe.wizard.IWhereField;
import it.eng.qbe.wizard.WizardConstants;
import it.eng.spago.base.ApplicationContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.dispatching.action.AbstractAction;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;


/**
 * @author Andrea Zoppello
 * 
 * This action do the execution of the query represented by ISingleDataMartWizardObject in session
 * 
 * If ISingleDataMartWizardObject is configured to run the query composed automatically this action 
 * do some control on join conditions.
 *  
 */
public class ExecuteSaveQueryAction extends AbstractAction {
	
	public static String QUERY_RESPONSE_SOURCE_BEAN = "QUERY_RESPONSE_SOURCE_BEAN"; 
		
	
	public boolean checkJoins(SourceBean request, SourceBean response) throws SourceBeanException {
		if (isCheckJoinsEnabled(request)){
			if (!getDataMartWizard().isUseExpertedVersion()){
				// If I'm not using expert
				// Check for join controls
				return doCheckJoins(getDataMartWizard(), response);				
			}
		}
		return true;
	}
	
	/**
	 * 
	 * @param wizObj
	 * @param serviceResponse
	 * @return
	 * @throws SourceBeanException
	 */
	public boolean doCheckJoins(ISingleDataMartWizardObject wizObj, SourceBean serviceResponse) throws SourceBeanException{
	
		IQbeMessageHelper msgHelper = null;
		StringBuffer warning = new StringBuffer();
		
		String qbeMode = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MODE.mode");   
		
		String msgHelperClass = null;
		if (qbeMode.equalsIgnoreCase("WEB")){
			
			msgHelperClass = "it.eng.qbe.utility.QbeWebMessageHelper";
		}else{
			msgHelperClass = "it.eng.qbe.utility.QbeSpagoBIMessageHelper";
		}
		
		try{
			msgHelper = (IQbeMessageHelper)Class.forName(msgHelperClass).newInstance();
		}catch (Exception e) {
			Logger.error(ExecuteSaveQueryAction.class, e);
		}
		
		wizObj.getEntityClasses();
		
		boolean warnings = false;
		if (wizObj.getEntityClasses().size() == 1){
			return true;
		}else{
			for (int i =0; i < wizObj.getEntityClasses().size(); i++ ){
				EntityClass e1 = (EntityClass)wizObj.getEntityClasses().get(i);
				
				for (int j = i+1; j < wizObj.getEntityClasses().size(); j++ ){
					EntityClass e2 = (EntityClass)wizObj.getEntityClasses().get(j);
					Logger.debug(ExecuteSaveQueryAction.class, "Check if Join Exist between ["+e1+"] and ["+e2+"]");
					
					if (e1.getClassName() != e2.getClassName()){
						boolean joinFound = false;
						if (wizObj.getWhereClause() != null){
							for (int k=0; ((k < wizObj.getWhereClause().getWhereFields().size()) && !joinFound); k++){
								IWhereField wf = (IWhereField)wizObj.getWhereClause().getWhereFields().get(k);
								
								if (wf.getFieldOperator().equalsIgnoreCase("=")){
									joinFound = (
										(wf.getFieldName().startsWith(e1.getClassAlias()) &&  wf.getFieldValue().startsWith(e2.getClassAlias()))
										||
										(wf.getFieldName().startsWith(e2.getClassAlias())&&  wf.getFieldValue().startsWith(e1.getClassAlias()))
									);
								}
							}
						}//if (wizObj.getWhereClause() != null){
						if (!joinFound){
							warnings = true;
							String locMsg = msgHelper.getMessage(getRequestContainer(), "QBE.Warning.Nojoin");
							warning.append( locMsg + e1.getClassName() +"," + e2.getClassName() + "\n");
						}
					}//if (e1.getClassName() != e2.getClassName()){
				}//for (int j =0; j < wizObj.getEntityClasses().size(); j++ )
			}//for (int i =0; i < wizObj.getEntityClasses().size(); i++ )
		}//else{
		
		if (warnings){
			serviceResponse.setAttribute("JOIN_WARNINGS", warning.toString());
			return false;
		}else {
			return true;
		}
	}
	
	private SessionContainer getSessionContainer() {
		return getRequestContainer().getSessionContainer();
	}
	
	private ISingleDataMartWizardObject getDataMartWizard() {
		return (ISingleDataMartWizardObject)getSessionContainer().getAttribute(WizardConstants.SINGLE_DATA_MART_WIZARD);
		
	}
	
	private DataMartModel getDataMartModel() {
		return (DataMartModel)getSessionContainer().getAttribute("dataMartModel");
	}
		
	private String getExecutionMode(SourceBean request) {
		return (String)request.getAttribute("previewModeFromQueryResult"); 
	}
	
	private boolean isExpertExecutionModeEnabled(SourceBean request) {
		return ("ExpertMode".equalsIgnoreCase(getExecutionMode(request)));
	}
	
	private boolean isCheckJoinsEnabled(SourceBean request) {
		String ignoreJoins = (String) request.getAttribute("ignoreJoins");
		return (ignoreJoins == null) || (!(ignoreJoins.equalsIgnoreCase("true")));
	}
	
	private String getSource(SourceBean request) {
		return (String)request.getAttribute("SOURCE_FROM_QUERY_RESULT");
	}
	
	private int getPageNumber(SourceBean request) {
		String pageNumberString = (String) request.getAttribute("pageNumber");
        int pageNumber = 0;
        if(pageNumberString == null || pageNumberString.length() == 0) {
        	pageNumber = 0;
        } else {
            try {
            	pageNumber = Integer.parseInt(pageNumberString);
            } catch (NumberFormatException nfe) {
            	Logger.error(ExecuteSaveQueryAction.class, nfe);
                pageNumber = 0;
            }
        }
        return pageNumber;
	}
	
	private int getPageSize() {
		String pageSizeStr = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MODE.page-size");
		int pageSize = 30;
		if (pageSizeStr != null) pageSize = new Integer(pageSizeStr).intValue();
		return pageSize;
	}
	
	private SourceBean executeQuery(String query, String lang, int pageNumber) throws SourceBeanException {
			
		if(lang.equalsIgnoreCase("sql")) {
			return executeSqlQuery(query, pageNumber);
		}
		
		return 	executeHqlQuery(query, pageNumber);
	}
	
	private SourceBean executeSqlQuery(String query, int pageNumber) throws SourceBeanException {
		Session aSession = Utils.getSessionFactory(getDataMartModel(), ApplicationContainer.getInstance()).openSession();
		
		List result = null;
		boolean hasNextPage = true;
		boolean hasPrevPage = (pageNumber > 0);
		
		int firstRow = pageNumber * getPageSize();
		firstRow = firstRow < 0 ? 0 : firstRow;
		
		try {
			Connection conn = aSession.connection();
			Statement stm = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			stm.execute(query);
			ResultSet rs = stm.getResultSet();
			rs.last();
			rs.beforeFirst();
			
						
			ResultSetMetaData rsmd = rs.getMetaData();
			int numberOfColumns = rsmd.getColumnCount();
			result = new ArrayList();
			Object[] row = null;
			if(firstRow > 0)  
				rs.absolute(firstRow - 1);
			else rs.beforeFirst();
			int remainingRows = getPageSize();
			while(rs.next() && (remainingRows--)>0) {
				row = new Object[numberOfColumns];
				for(int i = 0; i < numberOfColumns; i++) {
					row[i] = rs.getObject(i+1);
				}
				result.add(row);
			}
			hasNextPage = rs.next();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
			
		
		SourceBean queryResponseSourceBean = new SourceBean(QUERY_RESPONSE_SOURCE_BEAN);
		queryResponseSourceBean.setAttribute("query", query);
		queryResponseSourceBean.setAttribute("list", result);
		queryResponseSourceBean.setAttribute("currentPage", new Integer(pageNumber));
		queryResponseSourceBean.setAttribute("hasNextPage", new Boolean(hasNextPage));
		queryResponseSourceBean.setAttribute("hasPreviousPage", new Boolean(hasPrevPage));
		
		System.out.println("Bean built successfully !!!");
		
		return queryResponseSourceBean;	
	}
	
	private SourceBean executeHqlQuery(String query, int pageNumber) throws SourceBeanException {
		Session aSession = Utils.getSessionFactory(getDataMartModel(), ApplicationContainer.getInstance()).openSession();
		
		//Query rowsNumberQuery = aSession.createQuery(COUNT_PREFIX + finalQueryString);
		
		//int numberOfRows = ((Integer) rowsNumberQuery.iterate().next()).intValue();

		Query aQuery = aSession.createQuery(query);
		
		int firstRow = pageNumber * getPageSize();
		
		aQuery.setFirstResult(firstRow < 0 ? 0 : firstRow);
		aQuery.setMaxResults(getPageSize());
		
		List result = aQuery.list();
			
		boolean hasNextPage = true;
		boolean hasPrevPage = true;
			
		aQuery.setFirstResult(firstRow + getPageSize() < 0 ? 0 : firstRow + getPageSize());
		aQuery.setMaxResults(1);
			
		List secondPage = aQuery.list();
			

		if (secondPage == null || secondPage.size() == 0) hasNextPage = false;
			
		if (pageNumber == 0){
			firstRow = 0;
			hasPrevPage = false;
		}
								
		aSession.close();
			
		SourceBean queryResponseSourceBean = new SourceBean(QUERY_RESPONSE_SOURCE_BEAN);
		queryResponseSourceBean.setAttribute("query", query);
		queryResponseSourceBean.setAttribute("list", result);
		queryResponseSourceBean.setAttribute("currentPage", new Integer(pageNumber));
		queryResponseSourceBean.setAttribute("hasNextPage", new Boolean(hasNextPage));
		queryResponseSourceBean.setAttribute("hasPreviousPage", new Boolean(hasPrevPage));
			
		return queryResponseSourceBean;	
	}
	
	
	private void returnError(SourceBean response, String errorMsg) {
		if (getSessionContainer().getAttribute(QUERY_RESPONSE_SOURCE_BEAN) != null){
			getSessionContainer().delAttribute(QUERY_RESPONSE_SOURCE_BEAN);
		}	
		try {
			response.setAttribute("ERROR_MSG", errorMsg);
		} catch (SourceBeanException e) {
			e.printStackTrace();
		}
	}
	
	public void service(SourceBean request, SourceBean response) throws Exception {				
		
		if ("QUERY_RESULT".equalsIgnoreCase( getSource(request) )){			
			getDataMartWizard().setUseExpertedVersion( isExpertExecutionModeEnabled(request) );			
		}  				
		
		getDataMartWizard().composeQuery();
				
		if (!checkJoins(request, response)){
			returnError(response, "QBE.Warning.Join");
		} 
		else{
			try {
				System.out.println(" -----> EXECUTING");
				SourceBean queryResponseSourceBean = getDataMartWizard().executeQuery(getDataMartModel(), getPageNumber(request), this.getPageSize());
				getSessionContainer().setAttribute(QUERY_RESPONSE_SOURCE_BEAN, queryResponseSourceBean);
			}catch (HibernateException he) {
				Logger.error(ExecuteSaveQueryAction.class, he);
				returnError(response, he.getCause().getMessage());
			}catch (java.sql.SQLException se) {
				Logger.error(ExecuteSaveQueryAction.class, se);
				returnError(response, se.getMessage());
			}catch(Exception e){
				System.out.println("Exception type: " + e.getClass().getName());				
				
				Logger.error(ExecuteSaveQueryAction.class, e);
				returnError(response, e.getMessage());					
			}								
			
		}//else
	}//service
}
