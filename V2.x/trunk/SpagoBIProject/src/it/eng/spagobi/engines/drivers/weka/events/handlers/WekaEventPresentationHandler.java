/**
 *
 *	LICENSE: see 'LICENSE-sbi.drivers.weka.txt' file
 *
 */
package it.eng.spagobi.engines.drivers.weka.events.handlers;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.dao.BIObjectDAOHibImpl;
import it.eng.spagobi.analiticalmodel.document.dao.SubreportDAOHibImpl;
import it.eng.spagobi.commons.bo.Subreport;
import it.eng.spagobi.events.EventsManager;
import it.eng.spagobi.events.bo.EventLog;
import it.eng.spagobi.events.handlers.IEventPresentationHandler;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

public class WekaEventPresentationHandler implements IEventPresentationHandler {

	private static transient Logger logger = Logger.getLogger(WekaEventPresentationHandler.class);
	
	public void loadEventInfo(EventLog event, SourceBean response) throws SourceBeanException, EMFUserError {
		logger.debug("IN");
		response.setAttribute("firedEvent", event);
		Map eventParams = EventsManager.parseParamsStr(event.getParams());
		String startEventId = (String) eventParams.get("startEventId");
		if (startEventId != null) {
			// it's an end process event
			response.setAttribute("startEventId", startEventId);
			logger.debug("startEventId:"+startEventId);
			String result = (String) eventParams.get("operation-result");
			logger.debug("operation-result:"+result);
			response.setAttribute("operation-result", result);
		} else {
			logger.warn("it's an end process event, nothing more to do");
		}
		BIObjectDAOHibImpl biObjectDAO = new BIObjectDAOHibImpl();
		String biobjectIdStr = (String) eventParams.get("document");
		logger.debug("biobjectIdStr:"+biobjectIdStr);
		Integer biObjectId = new Integer(biobjectIdStr);
		BIObject biObject = biObjectDAO.loadBIObjectById(biObjectId);
		response.setAttribute("biobject", biObject);
		SubreportDAOHibImpl subreportDAOHibImpl = new SubreportDAOHibImpl();
		List list = subreportDAOHibImpl.loadSubreportsByMasterRptId(biObject.getId());
		List biObjectList = new ArrayList();
		for(int i = 0; i < list.size(); i++) {
			Subreport subreport = (Subreport)list.get(i);
			BIObject biobj = biObjectDAO.loadBIObjectForDetail(subreport.getSub_rpt_id());
			biObjectList.add(biobj);
		}
		response.setAttribute("linkedBIObjects", biObjectList);
		response.setAttribute("PUBLISHER_NAME", "WekaExecutionEventLogDetailPublisher");
		logger.debug("OUT");
	}
	
}
