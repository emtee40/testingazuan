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
package it.eng.spagobi.analiticalmodel.document.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.util.JavaScript;
import it.eng.spagobi.analiticalmodel.document.bo.Snapshot;
import it.eng.spagobi.analiticalmodel.document.bo.SubObject;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.services.BaseProfileAction;
import it.eng.spagobi.container.SpagoBIRequestContainer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Retrieves information about the subObject identified on request with attribute SpagoBIConstants.SUBOBJECT_ID.
 * The response is something like this (suitable for javascript evaluation):
 * {id: suobject_id, name: 'suobject_name', description: 'suobject_description' .....}
 * If the subObject does not exist, an empty string is returned.
 * 
 * @author Zerbetto (davide.zerbetto@eng.it)
 *
 */
public class GetSubobjectInfo extends BaseProfileAction {

	static Logger logger = Logger.getLogger(GetSubobjectInfo.class);
	
	public void service(SourceBean serviceRequest, SourceBean serviceResponse) throws Exception {
		logger.debug("IN");
		super.service(serviceRequest, serviceResponse);
		freezeHttpResponse();
		HttpServletResponse httResponse = getHttpResponse();
		StringBuffer output = new StringBuffer();
		try {
			SpagoBIRequestContainer request = new SpagoBIRequestContainer(serviceRequest);
			if (request.isBlankOrNull(SpagoBIConstants.SUBOBJECT_ID)) {
				output.append("");
			} else {
				Integer subObjId = request.getInteger(SpagoBIConstants.SUBOBJECT_ID);
				SubObject subobject = DAOFactory.getSubObjectDAO().getSubObject(subObjId);
				output.append("{id: " + subobject.getId().toString() + ", " +
						"name: \"" + JavaScript.escapeText(subobject.getName()) + "\", " +
						"description: \"" + JavaScript.escapeText(subobject.getDescription()) + "\", " +
						"owner: \"" + JavaScript.escapeText(subobject.getOwner()) + "\", " +
						"creationDate: \"" + JavaScript.escapeText(subobject.getCreationDate().toString()) + "\", " +
						"lastModificationDate: \"" + JavaScript.escapeText(subobject.getLastChangeDate().toString()) + "\", " +
						"isPublic: " + JavaScript.escapeText(subobject.getIsPublic().toString()) + "}");
			}
		} catch (Exception e) {
			logger.error("Error while recovering subobjects list", e);
			output.append("");
		} finally {
			httResponse.getOutputStream().write(output.toString().getBytes());
			httResponse.getOutputStream().flush();
			logger.debug("OUT");
		}
	}
	
}
