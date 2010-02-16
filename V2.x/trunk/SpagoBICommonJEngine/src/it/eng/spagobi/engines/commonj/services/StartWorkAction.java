/**
Copyright (c) 2005-2008, Engineering Ingegneria Informatica s.p.a.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of 
      conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list of 
      conditions and the following disclaimer in the documentation and/or other materials 
      provided with the distribution.

 * Neither the name of the Engineering Ingegneria Informatica s.p.a. nor the names of its contributors may
      be used to endorse or promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
 **/

package it.eng.spagobi.engines.commonj.services;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

import commonj.work.Work;
import commonj.work.WorkEvent;
import commonj.work.WorkItem;

import de.myfoo.commonj.work.FooRemoteWorkItem;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.engines.commonj.runtime.CommonjWorkContainer;
import it.eng.spagobi.engines.commonj.runtime.CommonjWorkListener;
import it.eng.spagobi.engines.commonj.runtime.WorksRepository;
import it.eng.spagobi.engines.commonj.utils.GeneralUtils;
import it.eng.spagobi.utilities.engines.AbstractEngineAction;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceException;
import it.eng.spagobi.utilities.engines.SpagoBIEngineServiceExceptionHandler;
import it.eng.spagobi.utilities.service.JSONAcknowledge;
import it.eng.spagobi.utilities.service.JSONFailure;
import it.eng.spagobi.utilities.service.JSONSuccess;
import it.eng.spagobi.utilities.threadmanager.WorkManager;


public class StartWorkAction extends AbstractEngineAction {

	private static transient Logger logger = Logger.getLogger(StartWorkAction.class);



	@Override
	public void service(SourceBean request, SourceBean response) {
		logger.debug("IN");
		super.service(request, response);
		HttpSession session=getHttpSession();
		JSONObject info=null;

		//recover from session
		try{
			String document_id=null;
			Object document_idO=null;
			document_idO=request.getAttribute("DOCUMENT_ID");
			if(document_idO!=null){
				document_id=document_idO.toString();
			}
			else{
				document_id="";
				logger.error("could not retrieve document id");
				return;
			}

			// Get the container object from session: it MUST be present if start button is enabled
			Object o=session.getAttribute("SBI_PROCESS_"+document_id);


			CommonjWorkContainer container=(CommonjWorkContainer)o;

			WorkManager wm=container.getWm();
			Work work=container.getWork();
			CommonjWorkListener listener=container.getListener();
			FooRemoteWorkItem fooRemoteWorkItem=wm.buildFooRemoteWorkItem(work, listener);

			int statusWI;
			
			// Check if work was accepted
			if(fooRemoteWorkItem.getStatus()==WorkEvent.WORK_ACCEPTED){
				container.setFooRemoteWorkItem(fooRemoteWorkItem);
				// run work!
				WorkItem workItem=(WorkItem)wm.runWithReturnWI(work, listener);
				container.setWorkItem(workItem);
				statusWI=workItem.getStatus();
				// put new Object in session
				session.setAttribute("SBI_PROCESS_"+document_id, container);

				try {
					info=GeneralUtils.buildJSONObject(statusWI);
					writeBackToClient( new JSONSuccess(info));

				} catch (IOException e) {
					String message = "Impossible to write back the responce to the client";
					throw new SpagoBIEngineServiceException(getActionName(), message, e);
				}

			}
			else{ // WORK is rejected
				try {
					statusWI=fooRemoteWorkItem.getStatus();
					info=GeneralUtils.buildJSONObject(statusWI);
					writeBackToClient( new JSONSuccess(info));
				} catch (IOException e) {
					String message = "Impossible to write back the responce to the client";
					throw new SpagoBIEngineServiceException(getActionName(), message, e);
				}
			}
		}
		catch (Exception e) {
		
			
			logger.error("Error in starting the work");
			try {
				writeBackToClient( new JSONFailure( e) );
			} catch (IOException e1) {
				logger.error("Error in starting the work and in writing back to client",e);
				throw new SpagoBIEngineServiceException(getActionName(), "Error in starting the work and in writing back to client", e1);
			} catch (JSONException e1) {
				logger.error("Error in starting the work and in writing back to client",e);
				throw new SpagoBIEngineServiceException(getActionName(), "Error in starting the work and in writing back to client", e1);
			}

		}
		logger.debug("OUT");
	}




}
