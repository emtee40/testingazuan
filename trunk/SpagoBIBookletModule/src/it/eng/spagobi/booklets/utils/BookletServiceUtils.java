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
package it.eng.spagobi.booklets.utils;

import javax.servlet.http.HttpServletRequest;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.utilities.ChannelUtilities;
import it.eng.spagobi.utilities.GeneralUtilities;


public class BookletServiceUtils {

	private static String getBookletServiceName() {
		ConfigSingleton config = ConfigSingleton.getInstance();
		SourceBean bookServiceSB = (SourceBean)config.getAttribute("BOOKLETS.BOOKLET_SERVICE");
		String bookletServName = (String)bookServiceSB.getAttribute("name");
		return bookletServName;
	}
	
	public static String getBookletServiceUrl() {
		String sbiContAdd = GeneralUtilities.getSpagoBiContextAddress();
		String bookletServName = getBookletServiceName();
		return sbiContAdd + "/" + bookletServName;
	}
	
	public static String getBookletServiceUrl(HttpServletRequest request) {
		String sbiContAdd = ChannelUtilities.getSpagoBIContextName(request);
		String bookletServName = getBookletServiceName();
		return sbiContAdd + "/" + bookletServName;
	}
}
