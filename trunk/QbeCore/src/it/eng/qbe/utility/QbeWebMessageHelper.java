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
package it.eng.qbe.utility;


import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.message.MessageBundle;
/**
 * @author Andrea Zoppello
 * 
 * The implementation of IQbeMessageHelper used when QBE is used as a STANDALONE Web Application
 */
public class QbeWebMessageHelper implements
		IQbeMessageHelper {

	public String getMessage(RequestContainer aRequestContainer, String code){
		return MessageBundle.getMessage(code);
	}
	
	public String getMessage(RequestContainer aRequestContainer, String code, String bundle){
		SessionContainer session = aRequestContainer.getSessionContainer();
		SpagoBIInfo spagoBIInfo = (SpagoBIInfo)session.getAttribute("spagobi");
		if(spagoBIInfo != null && spagoBIInfo.getLoacale() != null) 
			return MessageBundle.getMessage(code, bundle, spagoBIInfo.getLoacale());
		return MessageBundle.getMessage(code, bundle);
	}

}
