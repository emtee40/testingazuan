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
* This class defines the KPI Definition Form. 
* 
*/

qx.Class.define("spagobi.ui.custom.KpiDefinitionForm", {
	extend: spagobi.ui.form.Form,
	
	/**
	 * 
	 */
	
	construct : function() { 
				
		this.base(arguments,[

					{
						type: 'text',
						dataIndex: 'name',
						text: 'Label',
						mandatory: true	
					}, {
						type: 'textarea',
						dataIndex: 'description',
						text: 'Description',
						mandatory: false	
					}, {
						type: 'text',
						dataIndex: 'code',
						text: 'Code',
						mandatory: false		
					}, {
						type: 'textarea',
						dataIndex: 'algodescription',
						text: 'Algorithm Description',
						mandatory: false	
					}, {
						type: 'text',
						dataIndex: 'weight',
						text: 'Weight default value',
						mandatory: false		
					}, {
						type: 'text',
						dataIndex: 'thresholdname',
						text: 'Threshold Name',
						mandatory: false,
						button : [
  		    	   				{
  		    	   					label : 'Select',
  		    	   					event: "mousedown",
  		    	   					handler: this._lookupThresholdName,
  		    	   					scope : this
  		    	   				}	
  		       				 ]		
					} , {
						type: 'text',
						dataIndex: 'doclabel',
						text: 'Document Label',
						mandatory: false,
						button : [
  		    	   				{
  		    	   					label : 'Select',
  		    	   					event: "mousedown",
  		    	   					handler: this._lookupDocLabel,
  		    	   					scope : this
  		    	   				}	
  		       				 ]		
					} , {
						type: 'text',
						dataIndex: 'calcrule',
						text: 'Calculation Rule (Data Set)',
						mandatory: false,
						button : [
  		    	   				{
  		    	   					label : 'Select',
  		    	   					event: "mousedown",
  		    	   					handler: this._lookupCalcRule,
  		    	   					scope : this
  		    	   				}	
  		       				 ]		
					}           
			]
		);	
	},
	
	members: {
		
		_lookupThresholdName : function(e) {
			alert("hi");
		},
	
		_lookupDocLabel : function(e) {
			alert("hi");
			
		},
		
		_lookupCalcRule : function(e) {
			alert("hi");
		}
	}
});
				                     
				                     
				                     
				                     
				                     
				                     
				                     



