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
 * @author Amit Rana (amit.rana@eng.it), 
 * @author Gaurav Jauhri (gaurav.jauhri@eng.it)
 */

/**
* This class defines the Feature Details Form.  
*   
*/
 


qx.Class.define("qooxdoo.ui.custom.ConfigurationSubform", {
	extend: qooxdoo.ui.form.Form,

	/** 
	*  When the constructor is called it returns an object of form type.
	* <p> To this form is associated the following fields :- 
	* <p> Title  -> dataIndex: 'title'
	* <p> Analytical Driver -> dataIndex: 'analyticaldriver',
	* <p> Url Name -> dataIndex: 'urlname'
	* <p> Priority -> dataIndex: 'priority'
	* <p> *Example :- *
	*  var simpleform = new qooxdoo.ui.custom.ConfidurationSubform();
	*  simpleform.setData({
	*  title: 'Title',
	*  analyticaldriver: 'Analytical Driver',
	*  urlname: 'Url Name',
	*  priority: 'Priority'
	*  });
	*
	*/ 
	construct : function() { 
		this.base(arguments,[
        	{
        		type: 'text',
        		dataIndex: 'title',
        		text: 'Title',
        		mandatory: true	
        	}, {
        		type: 'text',
        		dataIndex: 'analyticaldriver',
        		text: 'Analytical Driver',
        		mandatory: true	
        	},  {
        		type: 'text',
        		dataIndex: 'urlname',
        		text: 'Url Name',
        		mandatory: true	
        	},  {
        		type: 'combo',
        		dataIndex: 'priority',
        		text: 'Priority',
        		items: ["1"]
        	}
        ]);
	}
});