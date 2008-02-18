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
package it.eng.spagobi.tools.scheduler.services;

import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.module.AbstractModule;
import it.eng.spago.error.EMFErrorCategory;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.GeneralUtilities;
import it.eng.spagobi.services.scheduler.service.SchedulerServiceSupplier;
import it.eng.spagobi.tools.scheduler.to.JobInfo;
import it.eng.spagobi.tools.scheduler.to.SaveInfo;
import it.eng.spagobi.tools.scheduler.to.TriggerInfo;
import it.eng.spagobi.tools.scheduler.utils.SchedulerUtilities;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;

public class TriggerManagementModule extends AbstractModule {
	static private Logger logger = Logger.getLogger(TriggerManagementModule.class);
	private RequestContainer reqCont = null;
	private SessionContainer sessCont = null;
	private String sbiconturl = null; 
	
	public void init(SourceBean config) {	
		
	}
	
	public void service(SourceBean request, SourceBean response) throws Exception { 
		String message = (String) request.getAttribute("MESSAGEDET");
		logger.debug("begin of trigger management service =" +message);
		reqCont = getRequestContainer();
		sessCont = reqCont.getSessionContainer();
		sbiconturl = GeneralUtilities.getSpagoBiContextAddress();
		EMFErrorHandler errorHandler = getErrorHandler();
		try {
			if(message == null) {
				EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
				logger.error("The message is null");
				throw userError;
			}
			if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_GET_JOB_SCHEDULES) ||
			   message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_ORDER_LIST)) {
				getTriggersForJob(request, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_NEW_SCHEDULE)) {
				newScheduleForJob(request, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_SAVE_SCHEDULE)) {
				saveScheduleForJob(request, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_DELETE_SCHEDULE)) {
				deleteSchedule(request, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_GET_SCHEDULE_DETAIL)) {
				getSchedule(request, response);
			} else if(message.trim().equalsIgnoreCase(SpagoBIConstants.MESSAGE_RUN_SCHEDULE)) {
				runSchedule(request, response);
			} 
		} catch (EMFUserError eex) {
			errorHandler.addError(eex);
			return;
		} catch (Exception ex) {
			logger.error("Error while executing trigger management service", ex);
			EMFInternalError internalError = new EMFInternalError(EMFErrorSeverity.ERROR, ex);
			errorHandler.addError(internalError);
			return;
		}
		logger.debug("end of trigger management service =" +message);
	}
	
	
	
	private void runSchedule(SourceBean request, SourceBean response) throws EMFUserError {
		try {
		        SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			String jobName = (String)request.getAttribute("jobName");
			String jobGroupName = (String)request.getAttribute("jobGroupName");
			getSchedule(request, response);
			TriggerInfo tInfo = (TriggerInfo)sessCont.getAttribute(SpagoBIConstants.TRIGGER_INFO);
			StringBuffer message = createMessageSaveSchedulation(tInfo, true);
			// call the web service to create the schedule
			String resp = schedulerService.scheduleJob(message.toString());
			SourceBean schedModRespSB = SchedulerUtilities.getSBFromWebServiceResponse(resp);
			if(schedModRespSB!=null) {
				String outcome = (String)schedModRespSB.getAttribute("outcome");
				if(outcome.equalsIgnoreCase("fault"))
					throw new Exception("Immediate Trigger not created by the web service");
			}
			// fill spago response
			response.updAttribute(SpagoBIConstants.PUBLISHER_NAME, "ReturnToTriggerList");
			response.setAttribute(SpagoBIConstants.JOB_GROUP_NAME, jobGroupName);
			response.setAttribute(SpagoBIConstants.JOB_NAME, jobName);
		} catch (Exception e) {
			logger.error("Error while create immediate trigger ", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	
	private void deleteSchedule(SourceBean request, SourceBean response) throws EMFUserError {
		String jobName = (String)request.getAttribute("jobName");
		String jobGroupName = (String)request.getAttribute("jobGroupName");
		String triggerName = (String) request.getAttribute("triggerName");
		String triggerGroup = (String) request.getAttribute("triggerGroup");
		try {
		        SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			String resp = schedulerService.deleteSchedulation(triggerName, triggerGroup);
			SourceBean schedModRespSB = SchedulerUtilities.getSBFromWebServiceResponse(resp);
			if(schedModRespSB!=null) {
				String outcome = (String)schedModRespSB.getAttribute("outcome");
				if(outcome.equalsIgnoreCase("fault"))
					throw new Exception("Trigger not deleted by the service");
			}
			// fill spago response
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "ReturnToTriggerList");
			response.setAttribute(SpagoBIConstants.JOB_GROUP_NAME, jobGroupName);
			response.setAttribute(SpagoBIConstants.JOB_NAME, jobName);
		} catch (Exception e) {
			logger.error("Error while deleting schedule (trigger) ", e);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	private void getSchedule(SourceBean request, SourceBean response) throws EMFUserError {
		try {
		        SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			String jobName = (String)request.getAttribute("jobName");
			String jobGroupName = (String)request.getAttribute("jobGroupName");
			String triggerName = (String) request.getAttribute("triggerName");
			String triggerGroup = (String) request.getAttribute("triggerGroup");
			String respStr_gt = schedulerService.getJobSchedulationDefinition(triggerName, triggerGroup);
	        SourceBean triggerDetailSB = SchedulerUtilities.getSBFromWebServiceResponse(respStr_gt);			
			String respStr_gj = schedulerService.getJobDefinition(jobName, jobGroupName);
            SourceBean jobDetailSB = SchedulerUtilities.getSBFromWebServiceResponse(respStr_gj);						
			if(triggerDetailSB!=null) {
				if(jobDetailSB!=null){
					TriggerInfo tInfo = SchedulerUtilities.getTriggerInfoFromTriggerSourceBean(triggerDetailSB, jobDetailSB);
					sessCont.setAttribute(SpagoBIConstants.TRIGGER_INFO, tInfo);
				} else {
					throw new Exception("Detail not recovered for job " + jobName + 
							            "associated to trigger " + triggerName);
				}
			} else {
				throw new Exception("Detail not recovered for trigger " + triggerName);
			}
			List functionalities = DAOFactory.getLowFunctionalityDAO().loadAllLowFunctionalities(false);
			response.setAttribute(SpagoBIConstants.FUNCTIONALITIES_LIST, functionalities);
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "TriggerDetail");
		} catch (Exception ex) {
			logger.error("Error while getting detail of the schedule(trigger)", ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	} 
	
	
	private void saveScheduleForJob(SourceBean request, SourceBean response) throws EMFUserError {
		try{
		    SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			TriggerInfo triggerInfo = (TriggerInfo)sessCont.getAttribute(SpagoBIConstants.TRIGGER_INFO);
			JobInfo jobInfo = triggerInfo.getJobInfo();
			String jobName = jobInfo.getJobName();
			String jobGroupName = jobInfo.getJobGroupName();
			String triggername = (String)request.getAttribute("triggername");	
			String triggerDescription  = (String)request.getAttribute("triggerdescription");	
			String startdate  = (String)request.getAttribute("startdate");	
			String starttime = (String)request.getAttribute("starttime");	
			String chronstr = (String)request.getAttribute("chronstring");
			String enddate = (String)request.getAttribute("enddate");	
			String endtime = (String)request.getAttribute("endtime");	
			String repeatinterval = (String)request.getAttribute("repeatInterval");
			triggerInfo.setEndDate(enddate);
			triggerInfo.setEndTime(endtime);
			triggerInfo.setRepeatInterval(repeatinterval);
			triggerInfo.setStartDate(startdate);
			triggerInfo.setStartTime(starttime);
			triggerInfo.setChronString(chronstr);
			triggerInfo.setTriggerDescription(triggerDescription);
			triggerInfo.setTriggerName(triggername);
			// check for input validation errors 
			if(!this.getErrorHandler().isOKByCategory(EMFErrorCategory.VALIDATION_ERROR)) {
				List functionalities = DAOFactory.getLowFunctionalityDAO().loadAllLowFunctionalities(false);
				response.setAttribute(SpagoBIConstants.FUNCTIONALITIES_LIST, functionalities);
				response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "TriggerDetail");
				return;
			}
			Map saveOptions = new HashMap();
			List biobjIds = jobInfo.getBiobjectIds();
			Iterator iterBiobjIds = biobjIds.iterator();
			while(iterBiobjIds.hasNext()){
				SaveInfo sInfo = new SaveInfo();
				Integer biobId = (Integer)iterBiobjIds.next();
				String saveassnap = (String)request.getAttribute("saveassnapshot_"+biobId);	
				if(saveassnap!=null) {
					sInfo.setSaveAsSnapshot(true);
					String snapname = (String)request.getAttribute("snapshotname_"+biobId);	
					sInfo.setSnapshotName(snapname);
					String snapdescr = (String)request.getAttribute("snapshotdescription_"+biobId);
					sInfo.setSnapshotDescription(snapdescr);
					String snaphistlength = (String)request.getAttribute("snapshothistorylength_"+biobId);
					sInfo.setSnapshotHistoryLength(snaphistlength);
				}
				String saveasdoc = (String)request.getAttribute("saveasdocument_"+biobId);	
				if(saveasdoc!=null) {
					sInfo.setSaveAsDocument(true);
					String docname = (String)request.getAttribute("documentname_"+biobId);	
					sInfo.setDocumentName(docname);
					String docdescr = (String)request.getAttribute("documentdescription_"+biobId);	
					sInfo.setDocumentDescription(docdescr);
					String functIdsConcat = "";
					List functIds = request.getAttributeAsList("tree_"+biobId+"_funct_id");	
					Iterator iterFunctIds = functIds.iterator();
					while(iterFunctIds.hasNext()) {
						String idFunct = (String)iterFunctIds.next();
						functIdsConcat += idFunct;
						if(iterFunctIds.hasNext()){
							functIdsConcat += ",";
						}
					}
					sInfo.setFunctionalityIds(functIdsConcat);
				}
				String sendmail = (String)request.getAttribute("sendmail_"+biobId);	
				if(sendmail!=null) {
					sInfo.setSendMail(true);
					String mailtos = (String)request.getAttribute("mailtos_"+biobId);	
					sInfo.setMailTos(mailtos);
					String mailsubj = (String)request.getAttribute("mailsubj_"+biobId);	
					sInfo.setMailSubj(mailsubj);
					String mailtxt = (String)request.getAttribute("mailtxt_"+biobId);	
					sInfo.setMailTxt(mailtxt);
				}
				
				saveOptions.put(biobId, sInfo);
			}
			triggerInfo.setSaveOptions(saveOptions);
			
			StringBuffer message = createMessageSaveSchedulation(triggerInfo, false);
			// call the web service to create the schedule
			String servoutStr = schedulerService.scheduleJob(message.toString());
			SourceBean execOutSB = SchedulerUtilities.getSBFromWebServiceResponse(servoutStr);
			if(execOutSB!=null) {
				String outcome = (String)execOutSB.getAttribute("outcome");
				if(outcome.equalsIgnoreCase("fault"))
					throw new Exception("Trigger "+triggername+" not created by the web service");
			}
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "ReturnToTriggerList");
			response.setAttribute(SpagoBIConstants.JOB_GROUP_NAME, jobGroupName);
			response.setAttribute(SpagoBIConstants.JOB_NAME, jobName);
		} catch (Exception ex) {
			logger.error("Error while saving schedule for job", ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	
	
	private void newScheduleForJob(SourceBean request, SourceBean response) throws EMFUserError {
		String jobName = "";
		try{
		    SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			jobName = (String)request.getAttribute("jobName");
			String jobGroupName = (String)request.getAttribute("jobGroupName");
			TriggerInfo ti = new TriggerInfo();
			String respStr = schedulerService.getJobDefinition(jobName, jobGroupName);
            SourceBean jobDetailSB = SchedulerUtilities.getSBFromWebServiceResponse(respStr);			
			if(jobDetailSB!=null) {
				JobInfo jobInfo = SchedulerUtilities.getJobInfoFromJobSourceBean(jobDetailSB);
				ti.setJobInfo(jobInfo);
				Map saveOptions = new HashMap();
				List biobjids = jobInfo.getBiobjectIds();
				Iterator iterbiobjids = biobjids.iterator();
				while(iterbiobjids.hasNext()) {
					Integer idobj = (Integer)iterbiobjids.next();
					saveOptions.put(idobj, new SaveInfo());
				}
				ti.setSaveOptions(saveOptions);
			} else {
				throw new Exception("Cannot recover job " + jobName);
			}		
			
			List functionalities = DAOFactory.getLowFunctionalityDAO().loadAllLowFunctionalities(false);
			response.setAttribute(SpagoBIConstants.FUNCTIONALITIES_LIST, functionalities);
			
			sessCont.setAttribute(SpagoBIConstants.TRIGGER_INFO, ti);
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "TriggerDetail");
		} catch (Exception ex) {
			logger.error("Error while creating a new schedule for job " + jobName, ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	private void getTriggersForJob(SourceBean request, SourceBean response) throws EMFUserError {
		String jobName = "";
		try{
		    SchedulerServiceSupplier schedulerService=new SchedulerServiceSupplier();
			// create the sourcebean of the list
			SourceBean pageListSB  = new SourceBean("PAGED_LIST");
			jobName = (String)request.getAttribute("jobName");
			String jobGroupName = (String)request.getAttribute("jobGroupName");
			String serviceResp = schedulerService.getJobSchedulationList(jobName, jobGroupName);
			SourceBean rowsSB = SourceBean.fromXMLString(serviceResp);
			if(rowsSB==null) {
				rowsSB = new SourceBean("ROWS");
			}
			// fill the list sourcebean			
			pageListSB.setAttribute(rowsSB);
			
			//ordering of list
			String typeOrder = (request.getAttribute("TYPE_ORDER")==null)?" ASC":(String)request.getAttribute("TYPE_ORDER");
			String fieldOrder = (request.getAttribute("FIELD_ORDER")==null)?" triggerDescription":(String)request.getAttribute("FIELD_ORDER");
			pageListSB = orderJobList(pageListSB, typeOrder, fieldOrder);

			// populate response with the right values
			response.setAttribute(pageListSB);
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "ListTriggers");	
		} catch (Exception ex) {
			logger.error("Error while recovering triggers of the job " + jobName, ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}
	}
	
	
	
	
	
	private StringBuffer createMessageSaveSchedulation(TriggerInfo tInfo, boolean runImmediately) {
		StringBuffer message = new StringBuffer();
		JobInfo jInfo = tInfo.getJobInfo();
		Map saveOptions = tInfo.getSaveOptions();
		Set biobjids_so =  saveOptions.keySet();
		Iterator iterbiobjids_s = biobjids_so.iterator();
		
		message.append("<SERVICE_REQUEST ");
		message.append(" jobName=\""+jInfo.getJobName()+"\" ");
		message.append(" jobGroup=\""+jInfo.getJobGroupName()+"\" ");
		if(runImmediately) {
			message.append(" runImmediately=\"true\" ");
		} else {
			message.append(" triggerName=\""+tInfo.getTriggerName()+"\" ");
			message.append(" triggerDescription=\""+tInfo.getTriggerDescription()+"\" ");
			message.append(" startDate=\""+tInfo.getStartDate()+"\" ");
			message.append(" startTime=\""+tInfo.getStartTime()+"\" ");
			message.append(" chronString=\""+tInfo.getChronString()+"\" ");
			String enddate = tInfo.getEndDate();
			String endtime = tInfo.getEndTime();
			if(!enddate.trim().equals("")){
				message.append(" endDate=\""+enddate+"\" ");
				if(!endtime.trim().equals("")){
					message.append(" endTime=\""+endtime+"\" ");
				}
			}
		}
		String repeatinterval = tInfo.getRepeatInterval();
		if(!repeatinterval.trim().equals("")){
			message.append(" repeatInterval=\""+repeatinterval+"\" ");
		}	
		message.append(">");
		
		
		message.append("   <PARAMETERS>");
		while(iterbiobjids_s.hasNext()) {
			Integer biobjid_so =  (Integer)iterbiobjids_s.next();
			SaveInfo sInfo = (SaveInfo)saveOptions.get(biobjid_so);
			String saveOptString = "";
			if(sInfo.isSaveAsSnapshot()) {
				saveOptString += "saveassnapshot=true%26";
				if( (sInfo.getSnapshotName()!=null) && !sInfo.getSnapshotName().trim().equals("") ) {
					saveOptString += "snapshotname="+sInfo.getSnapshotName()+"%26";
				}
				if( (sInfo.getSnapshotDescription()!=null) && !sInfo.getSnapshotDescription().trim().equals("") ) {
					saveOptString += "snapshotdescription="+sInfo.getSnapshotDescription()+"%26";
				}
				if( (sInfo.getSnapshotHistoryLength()!=null) && !sInfo.getSnapshotHistoryLength().trim().equals("") ) {
					saveOptString += "snapshothistorylength="+sInfo.getSnapshotHistoryLength()+"%26";
				}
			}
			if(sInfo.isSaveAsDocument()) {
				saveOptString += "saveasdocument=true%26";
				if( (sInfo.getDocumentName()!=null) && !sInfo.getDocumentName().trim().equals("") ) {
					saveOptString += "documentname="+sInfo.getDocumentName()+"%26";
				}
				if( (sInfo.getDocumentDescription()!=null) && !sInfo.getDocumentDescription().trim().equals("") ) {
					saveOptString += "documentdescription="+sInfo.getDocumentDescription()+"%26";
				}
				if( (sInfo.getDocumentHistoryLength()!=null) && !sInfo.getDocumentHistoryLength().trim().equals("") ) {
					saveOptString += "documenthistorylength="+sInfo.getDocumentHistoryLength()+"%26";
				}
				if( (sInfo.getFunctionalityIds()!=null) && !sInfo.getFunctionalityIds().trim().equals("") ) {
					saveOptString += "functionalityids="+sInfo.getFunctionalityIds()+"%26";
				}
			}
			if(sInfo.isSendMail()) {
				saveOptString += "sendmail=true%26";
				if( (sInfo.getMailTos()!=null) && !sInfo.getMailTos().trim().equals("") ) {
					saveOptString += "mailtos="+sInfo.getMailTos()+"%26";
				}
				if( (sInfo.getMailSubj()!=null) && !sInfo.getMailSubj().trim().equals("") ) {
					saveOptString += "mailsubj="+sInfo.getMailSubj()+"%26";
				}
				if( (sInfo.getMailTxt()!=null) && !sInfo.getMailTxt().trim().equals("") ) {
					saveOptString += "mailtxt="+sInfo.getMailTxt()+"%26";
				}
			}
			//TODO altri parametri prima della request
			message.append("   	   <PARAMETER name=\"biobject_id_"+biobjid_so+"\" value=\""+saveOptString+"\" />");
		}
		
		message.append("   </PARAMETERS>");
		message.append("</SERVICE_REQUEST>");
		
		return message;
	}
	
	
	private SourceBean orderJobList(SourceBean pageListSB, String typeOrder, String fieldOrder) throws EMFUserError {
		try {
			List tmpAllList = pageListSB.getAttributeAsList("ROWS.ROW");
			List tmpFieldList = new ArrayList();
			
			if (tmpAllList != null){
				for (int i=0; i < tmpAllList.size(); i++){
					SourceBean tmpSB = (SourceBean)tmpAllList.get(i);
					tmpFieldList.add(tmpSB.getAttribute(fieldOrder.trim()));
				}
			}
			Object[] orderList = tmpFieldList.toArray();
			Arrays.sort(orderList);
			//create a source bean with the list ordered
			SourceBean orderedPageListSB  = new SourceBean("PAGED_LIST");
			SourceBean rows = new SourceBean("ROWS");
			int i = 0;
			if (typeOrder.trim().equals("DESC"))				 
					i = tmpFieldList.size()-1;
			
			while (tmpFieldList != null && tmpFieldList.size() > 0){	
					SourceBean newSB = (SourceBean)tmpAllList.get(tmpFieldList.indexOf(orderList[i]));					
					rows.setAttribute(newSB);
					//remove elements from temporary lists
					tmpAllList.remove(tmpFieldList.indexOf(orderList[i]));
					tmpFieldList.remove(tmpFieldList.indexOf(orderList[i]));
					if (typeOrder.trim().equals("DESC"))
						i--;
					else
						i++;
			}
			orderedPageListSB.setAttribute(rows);
			return orderedPageListSB;
		} catch (Exception ex) {
			logger.error("Error while recovering all job definition", ex);
			throw new EMFUserError(EMFErrorSeverity.ERROR, "errors.1000", "component_scheduler_messages");
		}
	}

	
	
}	
	
	
