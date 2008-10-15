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
package it.eng.spagobi.analiticalmodel.execution.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFErrorHandler;
import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFInternalError;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.analiticalmodel.document.bo.ObjNote;
import it.eng.spagobi.analiticalmodel.document.dao.IBIObjectDAO;
import it.eng.spagobi.analiticalmodel.document.dao.IObjNoteDAO;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.services.BaseProfileAction;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;

import org.apache.log4j.Logger;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class InsertNotesAction extends BaseProfileAction{
	
	private static transient Logger logger = Logger.getLogger(InsertNotesAction.class);
	private Map execIdMap = new HashMap(); 
	 
	 /* (non-Javadoc)
 	 * @see it.eng.spagobi.commons.services.BaseProfileAction#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
 	 */
 	public void service(SourceBean request, SourceBean response) throws Exception {
	    	
	    	//Check of the userId in order to keep performing the request
			super.service(request, response);
			
			logger.debug("IN");
			String message = (String) request.getAttribute("MESSAGEDET");
			
			EMFErrorHandler errorHandler = getErrorHandler();
			try {
				if (message == null) {
					EMFUserError userError = new EMFUserError(EMFErrorSeverity.ERROR, 101);
					logger.debug("The message parameter is null");
					throw userError;
				}
				logger.debug("The message parameter is: " + message.trim());
				if (message.trim().equalsIgnoreCase("OPEN_NOTES_EDITOR")) {
					goToInsertNotes(request, "OPEN_NOTES_EDITOR", response);
				} 
				else if (message.trim().equalsIgnoreCase("INSERT_NOTES")) {
					insertNotes(request, "INSERT_NOTES", response);
					} 
			} catch (EMFUserError eex) {
				errorHandler.addError(eex);
				return;
			} catch (Exception ex) {
				EMFInternalError internalError = new EMFInternalError(EMFErrorSeverity.ERROR, ex);
				errorHandler.addError(internalError);
				return;
			}
		
		logger.debug("OUT");
	    }
	 
		private void goToInsertNotes(SourceBean request, String mod, SourceBean response) throws EMFUserError, SourceBeanException  {
			
			String objId= (String)request.getAttribute("OBJECT_ID");
			String userId= (String)request.getAttribute("userId");
			String execIdentifier = (String)request.getAttribute("execIdentifier");
			String notes = getNotes(execIdentifier, objId);
			String conflict = "false";
			
			response.setAttribute("userId", userId);
			response.setAttribute("OBJECT_ID", objId);
			response.setAttribute("MESSAGEDET", mod);
			response.setAttribute("execIdentifier", execIdentifier);
			response.setAttribute("NOTES_CONFLICT", conflict);
			response.setAttribute("notes", notes);
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "insertNotesBIObjectPubJ");
		
		}
		
		private void insertNotes(SourceBean request, String mod, SourceBean response) throws EMFUserError, SourceBeanException  {
			
			String objId = "";
			String notes = "";
			String oldNotes = "";
			String conflict = "false" ;
			String execIdentifier = "";
			String userId = "";
			List params = request.getContainedAttributes();
		    ListIterator it = params.listIterator();

		    while (it.hasNext()) {

			Object par = it.next();
			SourceBeanAttribute p = (SourceBeanAttribute) par;
			String parName = (String) p.getKey();
			logger.debug("got parName=" + parName);
			if (parName.equals("OBJECT_ID")) {
			    objId = (String) request.getAttribute("OBJECT_ID");
			    logger.debug("got OBJECT_ID from Request=" + objId);
				} 
			else if(parName.equals("userid")){
				userId = (String)request.getAttribute("userid");
			}
			else if(parName.equals("execIdentifier")){
				execIdentifier = (String)request.getAttribute("execIdentifier");
			}
			else if(parName.equals("OLD_NOTES")){
				
				String oldNotest = (String)request.getAttribute("OLD_NOTES");
				try {
					oldNotes =new String(new BASE64Decoder().decodeBuffer(oldNotest));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
			}
			else if(parName.equals("notes")){
				notes = (String)request.getAttribute("notes");
			}
		    }
		    
		    if (objId != null && !objId.equals("")){
		    	if (userId != null && !userId.equals("")){
		    		String tempOldNotest = getNotes(execIdentifier, objId );
		    		String tempOldNotes = "" ;
		    		try {
		    			tempOldNotes =new String(new BASE64Decoder().decodeBuffer(tempOldNotest));
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} 
		    		
		    		if (tempOldNotes.equals(oldNotes)){
		    			saveNotes(execIdentifier, objId, notes);
		    		} else {
		    			conflict = "true" ;
		    			notes = oldNotes ;
		    		}
		       }
		     }
		    
		    String notesEnc = new BASE64Encoder().encode(notes.getBytes());
		    response.setAttribute("userId", userId);
			response.setAttribute("OBJECT_ID", objId);
		    response.setAttribute("NOTES_CONFLICT", conflict);
		    response.setAttribute("execIdentifier", execIdentifier);
		    response.setAttribute("MESSAGEDET", mod);
		    response.setAttribute("notes", notesEnc);
			response.setAttribute(SpagoBIConstants.PUBLISHER_NAME, "insertNotesBIObjectPubJ");
			
		 }
	 
	 
	 private String getNotes(String execIdentifier, String objectid ) {
				
		
		   String notes = "";
			try{	
				
				IObjNoteDAO objNoteDAO = DAOFactory.getObjNoteDAO();
				ObjNote objnotes = objNoteDAO.getExecutionNotes(new Integer(objectid), execIdentifier);
				
				if(objnotes!=null){
					byte[] notestemp = objnotes.getContent();
					notes = new BASE64Encoder().encode(notestemp);
					//notes = new String(objnotes.getContent());
				}
				
			} catch (Exception e) {
				logger.warn("Error while getting notes", e);
				notes = "SpagoBIError:Error";
			} 
			
			return notes ;
		}
	 
	 private void saveNotes(String execIdentifier,String objectid , String notes) {
			try{	
					IBIObjectDAO objectDAO = DAOFactory.getBIObjectDAO();
					BIObject biobject = objectDAO.loadBIObjectById(new Integer(objectid));
					
					IObjNoteDAO objNoteDAO = DAOFactory.getObjNoteDAO();
					ObjNote objNote = objNoteDAO.getExecutionNotes(new Integer(objectid), execIdentifier);
					if(objNote!=null) {
						objNote.setContent(notes.getBytes());
						objNote.setExecReq(execIdentifier);
						objNoteDAO.modifyExecutionNotes(objNote);
					} else {
						objNote = new ObjNote();
						objNote.setContent(notes.getBytes());
						objNote.setExecReq(execIdentifier);
						objNoteDAO.saveExecutionNotes(biobject.getId(), objNote);
					}
			} catch (Exception e) {
				logger.warn("Error while saving notes", e);
			}
		}
			

}
