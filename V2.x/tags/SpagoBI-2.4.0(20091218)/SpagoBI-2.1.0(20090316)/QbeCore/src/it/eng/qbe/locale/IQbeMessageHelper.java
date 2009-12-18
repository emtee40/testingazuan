/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.qbe.locale;

import it.eng.spago.base.RequestContainer;


// TODO: Auto-generated Javadoc
/**
 * The Interface IQbeMessageHelper.
 * 
 * @author Andrea Zoppello
 * 
 * This is the interface for classes that implements logic
 * to retrieve localized messages to be used in JSP pages
 */
public interface IQbeMessageHelper {

	/**
	 * Gets the message.
	 * 
	 * @param aRequestContainer the a request container
	 * @param code the code
	 * 
	 * @return the message associated with code in the default bundle
	 */
	public String getMessage(RequestContainer aRequestContainer, String code);
	
	/**
	 * Gets the message.
	 * 
	 * @param aRequestContainer the a request container
	 * @param code the code
	 * @param bundle the bundle
	 * 
	 * @return  the message associated with code in the given bundle
	 */
	public String getMessage(RequestContainer aRequestContainer, String code, String bundle);
}
