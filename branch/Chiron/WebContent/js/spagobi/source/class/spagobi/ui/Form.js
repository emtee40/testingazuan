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


/* *
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
 
/**
 * Class for the creation of a form
 */ 
qx.Class.define("spagobi.ui.Form", {
	extend: qx.ui.layout.VerticalBoxLayout,
	
	/**
	 * Constructor to create a form. <hr>
	 * <p> *Config Options*
	 * <p> *type*: String 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Type of form element  
	 * 	__('text' / 'combo' / 'check' / 'form' / 'formList')__,
	 * <p> *dataIndex*: String 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Identify form element in associative array
	 * __('abc')__,
	 * <p> *text*: String 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Name of the label seen on form
	 * <p> *mandatory*: Boolean 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Indicate if text field is mandatory
	 * __(true/false)__,
	 * <p> *items*: Array 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Array of strings for each item of Combo box
	 * <p> *listeners*: Array 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Array of objects for event and its handler
	 * <p> *checked*: Boolean 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Indicate if Checkbox is checked
	 * <p> *formList*: Object/Array 
	 * 		<p>&nbsp;&nbsp;&nbsp;&nbsp; Indicates type of subform 
	 * 		(Can be another form or an array of form elemets)
	 *  
	 * <p>*Example*
	 * <p><code> var f = new spagobi.ui.Form([
	 * <br>&nbsp;&nbsp;&nbsp;&nbsp;
	 * 			{
	 *       		type: 'text',
	 *       		dataIndex: 'name',
	 *       		text: 'Name',
	 *       		mandatory: true	
	 *   		},
     * <br>&nbsp;&nbsp;&nbsp;&nbsp;	
     * 			{
	 *      		type: 'combo',
	 *       		dataIndex: 'myEngine',
	 *       		text: 'Engine type',
	 * 				items: ["abc","xyz"],
	 * <br>&nbsp;&nbsp;&nbsp;&nbsp;     		
	 * 				listeners: [
	 *			        		{
	 *			        			event: 'changeValue',
	 *			        			handler: this.myFunctionName,
	 *			        			scope: this
	 *			        		}        		
	 *       				   ]
     *   		}, 	
     *<br>&nbsp;&nbsp;&nbsp;&nbsp;
     * 			{
	 *       		type: 'check',
	 *       		dataIndex: 'myCheck',
	 *       		text: 'Use This a CheckBox',
	 *       		checked: false	
     *   		}
	 * 			]);
	 * </code></p>		
	 * @param config {qx.ui.Object} Array of objects where each object  
	 * represents a Form element with properties described above.
	 * 
	 */
	construct : function(config) { 
		this.base(arguments);
		
		this.setSpacing(5);
  		
  		this.dataMappings = [];
  		
  		if(config) {
	  		for(var i = 0; i < config.length; i++) {
	  			this.addInputField( config[i] );
	  		}
  		}
	},
	
	members: {
		dataObject: {},
		
		dataMappings: [],
		
		/**
		 * Function to get the data of the form fields
		 */
		getData: function() {
			for(prop in this.dataMappings) {
				if(this.dataObject[prop] != undefined) {
					this.dataObject[prop] = this.getInputFieldValue(prop);
				}
			}
			return this.dataObject;
		},
	
		/**
		 * Function to set data of form fields based on the property values
		 * of form object
		 */
		setData: function(o) {
			for(prop in o) {
				this.setInputFieldValue(prop, o[prop]);
			}	
			this.dataObject = o;		
		},
		
		/**
		 * Function to get the input field index of form
		 * @param dataIndex The index used to refer to a form field
		 */
		getInputField: function(dataIndex) {
			return this.dataMappings[dataIndex];
		},
		
		/**
		 * Function to get the input field value of a form
		 * @param dataIndex The index used to refer to the form field
		 */
		getInputFieldValue: function(dataIndex) {
			var value;
			
			if(!this.getInputField(dataIndex)) return null;
			if(this.getInputField(dataIndex).getUserData('type') === 'text') {
				value = this.getInputField(dataIndex).getUserData('field').getValue();
			} else if(this.getInputField(dataIndex).getUserData('type') === 'combo') {
				value = this.getInputField(dataIndex).getUserData('field').getValue();
			} else if(this.getInputField(dataIndex).getUserData('type') === 'check') {
				value = this.getInputField(dataIndex).getUserData('field').isChecked();
			} else if(this.getInputField(dataIndex).getUserData('type') === 'form') {	
				value = this.getInputField(dataIndex).getUserData('field').getData();
			} else if(this.getInputField(dataIndex).getUserData('type') === 'formList') {	
				value = this.getInputField(dataIndex).getUserData('field').getData();
			} else if(this.getInputField(dataIndex).getUserData('type') === 'textarea') {	
				value = this.getInputField(dataIndex).getUserData('field').getValue();
			}				
			
			
			
			return value;			
		},
		
		/**
		 * Function to set the input fields of the form
		 * @param dataIndex The index used to refer to a form field
		 * @param value The value of the input field of form
		 */
		setInputFieldValue: function(dataIndex, value) {
			if(!this.getInputField(dataIndex)) {
				return;
			}
			if(this.getInputField(dataIndex).getUserData('type') === 'text') {
				this.getInputField(dataIndex).getUserData('field').setValue(value);
			} else if(this.getInputField(dataIndex).getUserData('type') === 'combo') {
				this.getInputField(dataIndex).getUserData('field').setValue(value);
			} else if(this.getInputField(dataIndex).getUserData('type') === 'check') {
				this.getInputField(dataIndex).getUserData('field').setChecked(value);
			} else if(this.getInputField(dataIndex).getUserData('type') === 'form') {		
				this.getInputField(dataIndex).getUserData('field').setData(value);
			} else if(this.getInputField(dataIndex).getUserData('type') === 'formList') {		
				this.getInputField(dataIndex).getUserData('field').setData(value);
			} else if(this.getInputField(dataIndex).getUserData('type') === 'textarea') {		
				this.getInputField(dataIndex).getUserData('field').setValue(value);
			}
			
		},
		
		/**
		 * Function to add the form fields to the page
		 * <p>It is called by the form constructor.
		 * @param config - Config object as described in the constructor.
		 */
		addInputField: function(config) {
			if(config.type === 'text') {
  				inputField = spagobi.commons.WidgetUtils.createInputTextField(config); 
  				inputField.setUserData('type', 'text');       
  			} else if(config.type === 'combo') {
  				inputField = spagobi.commons.WidgetUtils.createInputComboBox(config);    
  				inputField.setUserData('type', 'combo');    
  			} else if(config.type === 'check') {
  				inputField = spagobi.commons.WidgetUtils.createInputCheckBox(config);    
  				inputField.setUserData('type', 'check');    
  			} else if(config.type === 'form') {
  				inputField = spagobi.commons.WidgetUtils.createInputForm(config);    
  				inputField.setUserData('type', 'form');    
  			} else if(config.type === 'formList') {
  				inputField = spagobi.commons.WidgetUtils.createInputFormList(config);    
  				inputField.setUserData('type', 'formList');    
  			} else if(config.type === 'textarea') {
  				inputField = spagobi.commons.WidgetUtils.createInputTextArea(config); 
  				inputField.setUserData('type', 'textarea');       
  			}
  			
  			this.dataMappings[config.dataIndex] = inputField;
  			this.add(inputField);
		}
	},
	
	statics : {
	
	}
});