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
package it.eng.spagobi.kpi.alarm.service;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.x.AbstractSpagoBIAction;
import it.eng.spagobi.chiron.serializer.SerializerFactory;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.utilities.messages.MessageBuilder;
import it.eng.spagobi.kpi.alarm.dao.ISbiAlarmDAO;
import it.eng.spagobi.kpi.alarm.metadata.SbiAlarm;
import it.eng.spagobi.kpi.alarm.metadata.SbiAlarmContact;
import it.eng.spagobi.kpi.config.bo.KpiAlarmInstance;
import it.eng.spagobi.kpi.config.dao.IKpiInstanceDAO;
import it.eng.spagobi.kpi.threshold.bo.ThresholdValue;
import it.eng.spagobi.kpi.threshold.dao.IThresholdValueDAO;
import it.eng.spagobi.utilities.exceptions.SpagoBIServiceException;
import it.eng.spagobi.utilities.service.JSONAcknowledge;
import it.eng.spagobi.utilities.service.JSONSuccess;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ManageAlarmsAction extends AbstractSpagoBIAction{

	private static final long serialVersionUID = -755516381785184797L;
	// logger component
	private static Logger logger = Logger.getLogger(ManageAlarmsAction.class);
	
	private final String MESSAGE_DET = "MESSAGE_DET";
	// type of service
	private final String ALARMS_LIST = "ALARMS_LIST";
	private final String ALARM_INSERT = "ALARM_INSERT";
	private final String ALARM_DELETE = "ALARM_DELETE";
	private final String TRESHOLDS_LIST = "TRESHOLDS_LIST";
	
	public static final String ID = "id";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String LABEL = "label";
	public static final String MODALITY = "modality";
	public static final String SINGLE_EVENT = "singleEvent";
	public static final String AUTO_DISABLED = "autoDisabled";
	public static final String TEXT = "text";
	public static final String URL = "url";
	public static final String CONTACTS = "alarmContacts";
	public static final String DOMAIN_CD = "ALARM_MODALITY";
	
	public static final String KPI_LIST = "KPI_LIST";
	public static final String TRESHOLD_LIST = "TRESHOLD_LIST";
	
	@Override
	public void doService() {
		logger.debug("IN");
		
		ISbiAlarmDAO alarmDao;
		try {
			alarmDao = DAOFactory.getAlarmDAO();
		} catch (EMFUserError e1) {
			logger.error(e1.getMessage(), e1);
			throw new SpagoBIServiceException(SERVICE_NAME,	"Error occurred");
		}
		HttpServletRequest httpRequest = getHttpRequest();
		MessageBuilder m = new MessageBuilder();
		Locale locale = m.getLocale(httpRequest);

		String serviceType = this.getAttributeAsString(MESSAGE_DET);
		logger.debug("Service type "+serviceType);

		if (serviceType != null && serviceType.equalsIgnoreCase(ALARMS_LIST)) {
			//loads kpi 
			try {
				IKpiInstanceDAO kpiDao = DAOFactory.getKpiInstanceDAO();
				List<String> kpis = (List<String>)getSessionContainer().getAttribute(KPI_LIST);
				if(kpis != null){
					getSessionContainer().delAttribute(KPI_LIST);				
				}
				List<KpiAlarmInstance> kpisAlarm = kpiDao.loadKpiAlarmInstances();
				if(kpisAlarm != null){
					getSessionContainer().setAttribute(KPI_LIST, kpisAlarm);
				}

			} catch (EMFUserError e) {
				logger.error(e.getMessage(), e);
				try {
					writeBackToClient("Exception occurred while retrieving kpis list");
				} catch (IOException e1) {
					logger.error(e1.getMessage(), e1);
				}
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving kpis", e);
			}
			try {				
				List<SbiAlarm> alarms = alarmDao.findAll();
				logger.debug("Loaded users list");
				JSONArray alarmsJSON = (JSONArray) SerializerFactory.getSerializer("application/json").serialize(alarms,locale);
				JSONObject usersResponseJSON = createJSONResponseAlarms(alarmsJSON);

				writeBackToClient(new JSONSuccess(usersResponseJSON));

			} catch (Throwable e) {
				logger.error("Exception occurred while retrieving users", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving users", e);
			}
			
		} else if (serviceType != null	&& serviceType.equalsIgnoreCase(ALARM_INSERT)) {
			
			Integer id = getAttributeAsInteger(ID);
			String name = getAttributeAsString(NAME);
			String descr = getAttributeAsString(DESCRIPTION);
			String label = getAttributeAsString(LABEL);
			String modality = getAttributeAsString(MODALITY);
			Boolean singleEvent = getAttributeAsBoolean(SINGLE_EVENT);
			Boolean autoDisabled = getAttributeAsBoolean(AUTO_DISABLED);
			String text = getAttributeAsString(TEXT);
			String url = getAttributeAsString(URL);
			JSONArray contactsJSON = getAttributeAsJSONArray(CONTACTS);

			SbiAlarm alarm = new SbiAlarm();
			alarm.setAutoDisabled(autoDisabled);
			alarm.setDescr(descr);			
			alarm.setLabel(label);
			alarm.setName(name);
			alarm.setSingleEvent(singleEvent);
			alarm.setText(text);
			alarm.setUrl(url);	
			try {
			if(modality!=null){
				SbiDomains dModality = DAOFactory.getDomainDAO().loadSbiDomainByCodeAndValue(DOMAIN_CD, modality);
				
				alarm.setModality(dModality);
			}
			
			if(id!=null){
				alarm.setId(id);
			}
			
				Set<SbiAlarmContact> contactsList = null;
				if(contactsJSON != null){
					contactsList = deserializeContactsJSONArray(contactsJSON);
					alarm.setSbiAlarmContacts(contactsList);
				}
				//da far ritornare l'ID
				alarmDao.update(alarm);
				logger.debug("Alarm updated or Inserted");
				
				JSONObject attributesResponseSuccessJSON = new JSONObject();
				attributesResponseSuccessJSON.put("success", true);
				attributesResponseSuccessJSON.put("responseText", "Operation succeded");
				attributesResponseSuccessJSON.put("id", id);
				writeBackToClient( new JSONSuccess(attributesResponseSuccessJSON) );

			} catch (EMFUserError e) {
				logger.error("Exception occurred while saving alarm", e);
				writeErrorsBackToClient();
				throw new SpagoBIServiceException(SERVICE_NAME,	"Exception occurred while saving alarm",	e);
			} catch (IOException e) {
				logger.error("Exception occurred while writing response to client", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while writing response to client", e);
			} catch (JSONException e) {
				logger.error("JSON Exception", e);
				e.printStackTrace();
			}
			
		} else if (serviceType != null	&& serviceType.equalsIgnoreCase(ALARM_DELETE)) {
			Integer id = getAttributeAsInteger(ID);
			try {
				alarmDao.delete(id);
				logger.debug("Alarm deleted");
				writeBackToClient( new JSONAcknowledge("Operation succeded") );

			} catch (Throwable e) {
				logger.error("Exception occurred while retrieving user to delete", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving user to delete",e);
			}
		} else if (serviceType != null	&& serviceType.equalsIgnoreCase(TRESHOLDS_LIST)) {
			Integer id =  getAttributeAsInteger(ID);
			try {
				IThresholdValueDAO tresholdDao = DAOFactory.getThresholdValueDAO();
				List<ThresholdValue> tresholds = tresholdDao.loadThresholdValuesByThresholdId(id);
				logger.debug("Threshold values loaded");
				JSONArray trshJSON = (JSONArray) SerializerFactory.getSerializer("application/json").serialize(tresholds,locale);
				JSONObject trashResponseJSON = createJSONResponseAlarms(trshJSON);

				writeBackToClient(new JSONSuccess(trashResponseJSON));
				//getResponseContainer().setAttribute(TRESHOLD_LIST, tresholds);

			} catch (Throwable e) {
				logger.error("Exception occurred while retrieving user to delete", e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception occurred while retrieving user to delete",e);
			}
		}else if(serviceType == null){
			try {
				List<SbiAlarmContact> contactsList = DAOFactory.getAlarmContactDAO().findAll();
				//List<SbiExtRoles> roles = DAOFactory.getRoleDAO().loadAllRoles();
				getSessionContainer().setAttribute("contactsList", contactsList);
				//getSessionContainer().setAttribute("rolesList", roles);
				
			} catch (EMFUserError e) {
				logger.error(e.getMessage(), e);
				throw new SpagoBIServiceException(SERVICE_NAME,
						"Exception retrieving role types",
						e);
			}
		}
		logger.debug("OUT");	
	}
	
	private JSONObject createJSONResponseAlarms(JSONArray rows) throws JSONException {
		JSONObject results;
		
		results = new JSONObject();
		results.put("title", "Alarms");
		results.put("samples", rows);
		return results;
	}
	
	private Set<SbiAlarmContact> deserializeContactsJSONArray(JSONArray rows) throws JSONException{
		Set<SbiAlarmContact> toReturn = new HashSet<SbiAlarmContact>();
		for(int i=0; i< rows.length(); i++){
			JSONObject obj = (JSONObject)rows.get(i);
			SbiAlarmContact c = new SbiAlarmContact();
			Integer id = obj.getInt("id");
			//c.setEmail(email);
			c.setId(id);
			//c.setMobile(mobile);
			//c.setName(name);
			//c.setResources(resources);
			toReturn.add(c);
		}	
		return toReturn;
	}

}
