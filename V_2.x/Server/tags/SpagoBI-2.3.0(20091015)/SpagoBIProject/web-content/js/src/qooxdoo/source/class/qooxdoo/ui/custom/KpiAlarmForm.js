/*
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

*/

/*
 * @author Andrea Gioia (andrea.gioia@eng.it)
 * @author Amit Rana (amit.rana@eng.it)
 * @author Gaurav Jauhri (gaurav.jauhri@eng.it)
 * 
 */
 


/**
 * This class defines the Formlist for a set of subforms on a form
 *  
 */

qx.Class.define("qooxdoo.ui.custom.KpiAlarmForm", {
	extend: qx.ui.tabview.TabView,
	
	/**
	 * 
	 */
	
	construct : function() { 
				
		this.base(arguments);
		
		this.createAlarmDetailsTab();
		
		this.createContactDetailsTab();
		
	},
		 
	/**
	 * Members of the class
	 */
		  
	members: {
		
		createAlarmDetailsTab: function(){
			var page = new qx.ui.tabview.Page("Alarm");
			page.setLayout(new qx.ui.layout.Grow());
			
			var form = new qooxdoo.ui.custom.KpiAlarmDetailForm();
			page.add(form);
			
			this.add(page);
			this.setUserData('details',page);
		},
		
		createContactDetailsTab: function(){
			var page = new qx.ui.tabview.Page("Contacts");
			page.setLayout(new qx.ui.layout.Grow());
			
			var form = new qooxdoo.ui.custom.KpiContactForm();
			page.add(form);
			
			this.add(page);
			this.setUserData('contact',page);
		}
	}	
});