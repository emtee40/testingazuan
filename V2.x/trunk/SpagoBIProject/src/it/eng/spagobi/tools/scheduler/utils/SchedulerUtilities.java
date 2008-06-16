/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.tools.scheduler.utils;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.Snapshot;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.dao.IBIObjectParameterDAO;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.SpagoBITracer;
import it.eng.spagobi.tools.scheduler.to.JobInfo;
import it.eng.spagobi.tools.scheduler.to.SaveInfo;
import it.eng.spagobi.tools.scheduler.to.TriggerInfo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class SchedulerUtilities {

	/**
	 * Gets the named history snapshot.
	 * 
	 * @param allsnapshots the allsnapshots
	 * @param namesnap the namesnap
	 * @param hist the hist
	 * 
	 * @return the named history snapshot
	 * 
	 * @throws Exception the exception
	 */
	public static Snapshot getNamedHistorySnapshot(List allsnapshots, String namesnap, int hist) throws Exception {
		Map snapshots = new HashMap();
		List snapDates = new ArrayList();
		Iterator iterAllSnap = allsnapshots.iterator();
		while(iterAllSnap.hasNext()) {
			Snapshot snap =  (Snapshot)iterAllSnap.next();
			if(snap.getName().equals(namesnap)){
				Date creationDate = snap.getDateCreation();
				Long creationLong = new Long(creationDate.getTime());
				snapDates.add(creationLong);
				snapshots.put(creationLong, snap);
			}
		}
		// check if history is out of range
		if( (hist<0) || (snapDates.size()-1 > hist) ) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, SchedulerUtilities.class.getName(), 
					            "getNamedHistorySnapshot", "History step out of range");
			throw new Exception("History step out of range");
		}
		// get the right snapshot
		Collections.sort(snapDates);
		Collections.reverse(snapDates);
		Object key = snapDates.get(hist);
		Snapshot snap = (Snapshot)snapshots.get(key);
		return snap;
	}
	

	
	/**
	 * Gets the snapshots by name.
	 * 
	 * @param allsnapshots the allsnapshots
	 * @param namesnap the namesnap
	 * 
	 * @return the snapshots by name
	 * 
	 * @throws Exception the exception
	 */
	public static List getSnapshotsByName(List allsnapshots, String namesnap) throws Exception {
		List snaps = new ArrayList();
		Iterator iterAllSnap = allsnapshots.iterator();
		while(iterAllSnap.hasNext()) {
			Snapshot snap =  (Snapshot)iterAllSnap.next();
			if(snap.getName().equals(namesnap)){
				snaps.add(snap);
			}
		}
		return snaps;
	}	

	
	/**
	 * Gets the sB from web service response.
	 * 
	 * @param response the response
	 * 
	 * @return the sB from web service response
	 */
	public static SourceBean getSBFromWebServiceResponse(String response)  {
		/*
		SourceBean schedModRespSB = null;
		try{
			SourceBean respSB = SourceBean.fromXMLString(response);
			if(respSB!=null) {
				SourceBean servRespSB = (SourceBean)respSB.getAttribute("SERVICE_RESPONSE");
				if(servRespSB!=null) {
					schedModRespSB = (SourceBean)servRespSB.getAttribute("SCHEDULERMODULE");
				}
			}
		} catch (Exception e) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, SchedulerUtilities.class.getName(), 
					            "getSBFromWebServiceResponse", "Error while parsing service response", e);
		}
		return schedModRespSB;
		*/
		SourceBean schedModRespSB = null;
		try{
			schedModRespSB = SourceBean.fromXMLString(response);
		} catch (Exception e) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, SchedulerUtilities.class.getName(), 
					            "getSBFromWebServiceResponse", "Error while parsing service response", e);
		}
		return schedModRespSB;
	}
	  
	
	/**
	 * Check result of ws call.
	 * 
	 * @param resultSB the result sb
	 * 
	 * @return true, if successful
	 */
	public static boolean checkResultOfWSCall(SourceBean resultSB)  {
		boolean result = true;
		SourceBean execOutSB = null;
		if(!resultSB.getName().equals("EXECUTION_OUTCOME")) {
			execOutSB = (SourceBean)resultSB.getAttribute("EXECUTION_OUTCOME");
		} else {
			execOutSB = resultSB;
		}
		if(execOutSB!=null) {
			String outcome = (String)execOutSB.getAttribute("outcome");
			if(outcome.equalsIgnoreCase("fault")) {
				result = false;
			}
		}
		return result;
	}
	
	
	/**
	 * Gets the job info from job source bean.
	 * 
	 * @param jobDetSB the job det sb
	 * 
	 * @return the job info from job source bean
	 */
	public static JobInfo getJobInfoFromJobSourceBean(SourceBean jobDetSB) {
		JobInfo jobInfo = new JobInfo();
		try{
			List biobjects = new ArrayList();
			String jobNameRecovered = (String)jobDetSB.getAttribute("jobName");
			String jobDescriptionRecovered = (String)jobDetSB.getAttribute("jobDescription");
			String jobGroupNameRecovered = (String)jobDetSB.getAttribute("jobGroupName");
			jobInfo.setJobName(jobNameRecovered);
			jobInfo.setJobDescription(jobDescriptionRecovered);
			jobInfo.setJobGroupName(jobGroupNameRecovered);
			// set all documents and parameters
			SourceBean jobParSB = (SourceBean)jobDetSB.getAttribute("JOB_PARAMETERS");
			if(jobParSB!=null) {
				IBIObjectDAO biobjdao = DAOFactory.getBIObjectDAO();
				IBIObjectParameterDAO biobjpardao = DAOFactory.getBIObjectParameterDAO();
				SourceBean docLblSB = (SourceBean)jobParSB.getFilteredSourceBeanAttribute("JOB_PARAMETER", "name", "documentLabels");
				String docLblStr = (String)docLblSB.getAttribute("value");
				String[] docLbls = docLblStr.split(",");
				for(int i=0; i<docLbls.length; i++) {
					//BIObject biobj = biobjdao.loadBIObjectByLabel(docLbls[i]);
					BIObject biobj = biobjdao.loadBIObjectByLabel(docLbls[i].substring(0, docLbls[i].indexOf("__")));
					List biobjpars = biobjpardao.loadBIObjectParametersById(biobj.getId());
					biobj.setBiObjectParameters(biobjpars);
					String biobjlbl = biobj.getLabel() + "__" + (i+1);
					SourceBean queryStringSB = (SourceBean)jobParSB.getFilteredSourceBeanAttribute("JOB_PARAMETER", "name", biobjlbl);
					String queryString = (String)queryStringSB.getAttribute("value");
					String[] parCouples = queryString.split("%26");
					for(int j=0; j<parCouples.length; j++) {
						String parCouple = parCouples[j];
						String[] parDef = parCouple.split("=");
						Iterator iterbiobjpar = biobjpars.iterator();
						while(iterbiobjpar.hasNext()) {
							BIObjectParameter biobjpar = (BIObjectParameter)iterbiobjpar.next();
							if(biobjpar.getParameterUrlName().equals(parDef[0])){
								String[] valuesArr = parDef[1].split(";");
								List values = Arrays.asList(valuesArr);
								biobjpar.setParameterValues(values);
							}
						}
					}
					// calculate parameter
					biobjects.add(biobj);
				}
				jobInfo.setBiobjects(biobjects);
			}
		} catch (Exception e) {
			SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, SchedulerUtilities.class.getName(), 
					            "getJobInfoFromJobSourceBean", "Error while extracting job info from xml", e);
		}
		return jobInfo;
	}
	
	
	
	
	/**
	 * Gets the trigger info from trigger source bean.
	 * 
	 * @param triggerDetSB the trigger det sb
	 * @param jobDetSB the job det sb
	 * 
	 * @return the trigger info from trigger source bean
	 */
	public static TriggerInfo getTriggerInfoFromTriggerSourceBean(SourceBean triggerDetSB, SourceBean jobDetSB) {
	
		TriggerInfo tInfo = new TriggerInfo();
		String triggername = (String)triggerDetSB.getAttribute("triggerName");	
		String triggerDescription  = (String)triggerDetSB.getAttribute("triggerDescription");	
		String startdate  = (String)triggerDetSB.getAttribute("triggerStartDate");	
		String starttime = (String)triggerDetSB.getAttribute("triggerStartTime");
		String chronstring = (String)triggerDetSB.getAttribute("triggerChronString");
		String enddate = (String)triggerDetSB.getAttribute("triggerEndDate");
		if(enddate==null) enddate = "";
		String endtime = (String)triggerDetSB.getAttribute("triggerEndTime");	
		if(endtime==null) endtime = "";
		String repeatinterval = (String)triggerDetSB.getAttribute("triggerRepeatInterval");
		if(repeatinterval==null) repeatinterval = "";
		tInfo.setEndDate(enddate);
		tInfo.setEndTime(endtime);
		tInfo.setRepeatInterval(repeatinterval);
		tInfo.setStartDate(startdate);
		tInfo.setStartTime(starttime);
		tInfo.setChronString(chronstring);
		tInfo.setTriggerDescription(triggerDescription);
		tInfo.setTriggerName(triggername);
		
		JobInfo jInfo = SchedulerUtilities.getJobInfoFromJobSourceBean(jobDetSB);
		tInfo.setJobInfo(jInfo);
		
		Map saveOptions = new HashMap();
		List biobjIds = jInfo.getBiobjectIds();
		Iterator iterBiobjIds = biobjIds.iterator();
		int index = 0;
		while(iterBiobjIds.hasNext()) {
			index ++;
			SaveInfo sInfo = new SaveInfo();
			Integer biobjid = (Integer)iterBiobjIds.next();
			SourceBean objParSB = (SourceBean)triggerDetSB.getFilteredSourceBeanAttribute("JOB_PARAMETERS.JOB_PARAMETER", "name", "biobject_id_" + biobjid.toString()+"__"+index);
			if(objParSB!=null) {
				String parString = (String)objParSB.getAttribute("value");
				sInfo = SchedulerUtilities.fromSaveInfoString(parString);
			}
			saveOptions.put(biobjid+"__"+index, sInfo);
		}
		
		tInfo.setSaveOptions(saveOptions);
		
		return tInfo;
	}
	
	
	
	/**
	 * From save info string.
	 * 
	 * @param saveinfostr the saveinfostr
	 * 
	 * @return the save info
	 */
	public static SaveInfo fromSaveInfoString(String saveinfostr) {
		SaveInfo sInfo = new SaveInfo();
		String[] couples = saveinfostr.split("%26");
		for(int i=0; i<couples.length; i++) {
			String couple = couples[i];
			if(couple.trim().equals("")) {
				continue;
			}
			String[] couplevals = couple.split("=");
			String name = couplevals[0];
			String value = couplevals[1];
			if(name.equals("saveassnapshot")) {
				sInfo.setSaveAsSnapshot(true);
			}
			if(name.equals("snapshotname")) {
				sInfo.setSnapshotName(value);
			}
			if(name.equals("snapshotdescription")) {
				sInfo.setSnapshotDescription(value);
			}
			if(name.equals("snapshothistorylength")) {
				sInfo.setSnapshotHistoryLength(value);
			}
			if(name.equals("saveasdocument")) {
				sInfo.setSaveAsDocument(true);
			}
			if(name.equals("documentname")) {
				sInfo.setDocumentName(value);
			}
			if(name.equals("documentdescription")) {
				sInfo.setDocumentDescription(value);
			}
			if(name.equals("documenthistorylength")) {
				sInfo.setDocumentHistoryLength(value);
			}
			if(name.equals("functionalityids")) {
				sInfo.setFunctionalityIds(value);
			}
			if(name.equals("sendmail")) {
				sInfo.setSendMail(true);
			}
			if(name.equals("mailtos")) {
				sInfo.setMailTos(value);
			}
			if(name.equals("mailsubj")) {
				sInfo.setMailSubj(value);
			}
			if(name.equals("mailtxt")) {
				sInfo.setMailTxt(value);
			}
			if(name.equals("sendtodl")) {
				sInfo.setSendToDl(true);
			}
			if(name.equals("dlId")) {
				
				String[] dlIds = value.split(",");
				for (int j=0; j<dlIds.length; j++){
					String dlId = dlIds[j];					
					sInfo.addDlId(new Integer(dlId));
				}
				
				sInfo.setSendToDl(true);
			}
		}
		return sInfo;
	}
	
}
