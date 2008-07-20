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
 * Class for the creation of a form elemets
 */ 


qx.Class.define("spagobi.commons.WidgetUtils", {
  type : "static",
  statics : {
  	   createLabel : function( config ) {
        	var defultConfig = {
        		text : '',
        		top : 0,
        		left : 0,
        		width: 80     		
        	};
        	var test_label = new qx.ui.basic.Label();
        	test_label.set(defultConfig);
        	test_label.set(config);
        	 
        	return test_label;
        },
        
        
        createTextField : function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 0,
        		maxLength:100,        		
        		width: 0,
        		height: 0   		
        	};
        
            var test_textfield = new qx.ui.form.TextField();
            test_textfield.set( defultConfig );
            test_textfield.set( config );
            return test_textfield;
          
        },
        
        createComboBox : function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 0,
        		items: [],
        		listeners: []  		
           	};
          
          	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
         
          	var combo_box = new qx.ui.form.ComboBox();
          	combo_box.set({ 
          		top: config.top, 
          		left: config.left 
          	});
          	
          	for(var i=0; i< config.items.length; i++) {
              var item = new qx.ui.form.ListItem(config.items[i]);
              combo_box.add(item);
            }
            
            for(var i=0; i< config.listeners.length; i++) {
            	if(config.listeners[i].scope) {
            		combo_box.addEventListener(config.listeners[i].event, config.listeners[i].handler, config.listeners[i].scope); 
            	} else {
            		combo_box.addEventListener(config.listeners[i].event, config.listeners[i].handler); 
            	}
            }
            
            combo_box.setSelected(combo_box.getList().getFirstChild());
            return combo_box;
          
        },
        
        createCheckBox : function( config ) {
          	var defultConfig = {
        		checked: false,
        		top: 0,
        		left: 0,
        		listeners: []
           	};
           	
           	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
          
       		var check_box = new qx.ui.form.CheckBox();
       		check_box.set({
       			checked: config.checked,
       			top: config.top,
       			left: config.left
        	});
        	
        	for(var i=0; i< config.listeners.length; i++) {
            	if(config.listeners[i].scope) {
            		check_box.addEventListener(config.listeners[i].event, config.listeners[i].handler, config.listeners[i].scope); 
            	} else {
            		check_box.addEventListener(config.listeners[i].event, config.listeners[i].handler); 
            	}
            }
        	
            return check_box;
        },  	
        
        createTextArea: function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 0,
        		//rows: 10,        		
        		width: 0,
        		height: 0   		
        	};
        	
        	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
            var test_textarea = new qx.ui.form.TextArea();
            //test_textarea.set( defultConfig );
            test_textarea.set( config );
            return test_textarea;
          
        },
        
        createInputTextField: function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 10,
        		text: '',
        		maxLength:100,        		
        		width: 200,
        		height: 20,
        		labelwidth: 80,
        		mandatory: false		
        	};
        	
        	/*
        	var flag = 0;
        	
        	if(config.labelwidth != defultConfig.labelwidth){
        		var flag = 1;
        		
        	}
        	*/
        	
        	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
        	
        	var labelField = this.createLabel({
        		text : config.text,
        		top : config.top,
        		left : config.left,
        		width : config.labelwidth   
        	});
        	
        	/*
        	if(flag == 1){
        		config.left = config.left - (config.labelwidth - defultConfig.labelwidth) + 10;
        	}
        	*/
        	
        	var textField = this.createTextField({
        		top: config.top,
        		left: config.left + 30,
        		maxLength: config.maxLength,        		
        		width: config.width,
        		height: config.height   
        	});
        	
        	var atom = new qx.ui.basic.Atom();
        	atom.add(labelField, textField);
        	
        	if(config.mandatory) {
        		var mandatoryMarker = this.createLabel({
	        		text : '*',
	        		top : config.top,
	        		left : config.left + 35 
        		});
        		atom.add(mandatoryMarker);
        	}
        	
        	atom.setUserData('label', labelField);
        	atom.setUserData('field', textField);
        	
        	return atom;
        },
        
        createInputComboBox: function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 10,
        		text: '',
        		items: [],
        		listeners: [],
        		labelwidth: 80
        	};
        	
        	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
        	
        	var labelField = this.createLabel({
        		text : config.text,
        		top : config.top,
        		left : config.left,
        		width : config.labelwidth    
        	});
        	        	   
	        var comboBox = this.createComboBox({
	        	top: config.top,
	        	left: config.left + 30,
	        	items: config.items,
	        	listeners: config.listeners
	        });
        	
        	var atom = new qx.ui.basic.Atom();
        	atom.add(labelField, comboBox);
        	atom.setUserData('label', labelField);
        	atom.setUserData('field', comboBox);
        	
        	return atom;
        },
        
        createInputCheckBox: function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 10,
        		text: '',
        		checked: false,
        		listeners: [],
        		labelwidth: 80
        	};
        	
        	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
        	
        	var labelField = this.createLabel({
        		text : config.text,
        		top : config.top,
        		left : config.left,
        		width : config.labelwidth   
	        });
	        
	        var checkBox = this.createCheckBox({
	        	checked: config.checked,
	        	top: config.top,
	        	left: config.left + 30,
	        	listeners: config.listeners
	        });
        	
        	var atom = new qx.ui.basic.Atom();
        	atom.add(labelField, checkBox);
        	atom.setUserData('label', labelField);
        	atom.setUserData('field', checkBox);
        	
        	return atom;
        },
        
        createInputForm: function( config ) {
			
			var subform;
			
			if(typeof(config.form) ==  'object') {
				subform = new spagobi.ui.Form( config.form );
			} else {
				//alert( typeof(config.form) );
				subform = new config.form();
			}
			/*
			var atom = new qx.ui.basic.Atom();
			atom.add(subform);
			atom.setUserData('field', subform);
			atom.setBorder( new qx.ui.core.Border(2,'solid') );
			*/
			subform.setUserData('field', subform);
			
			if(config.visible != undefined){
				subform.setDisplay(config.visible);
			}	
			return subform;
		},
		
		createInputFormList: function( config ) {
			
			var subform;
			
			subform = new spagobi.ui.FormList( config.formList );
			
			subform.setUserData('field', subform);
			
			return subform;
		},  	
        
        createInputTextArea: function( config ) {
        	var defultConfig = {
        		top: 0,
        		left: 10,
        		text: '',
        		//rows: 10,        		
        		width: 200,
        		height: 50,
        		mandatory: false,
        		labelwidth: 80		
        	};
        	
        	config = spagobi.commons.CoreUtils.apply(defultConfig, config);
        	
        	var labelField = this.createLabel({
        		text : config.text,
        		top : config.top,
        		left : config.left,
        		width : config.labelwidth
        	});
        	
        
        	var textArea = this.createTextArea({
        		top: config.top,
        		left: config.left + 30,
        		//rows: config.rows,        		
        		width: config.width,
        		height: config.height   
        	});
        	
        	var atom = new qx.ui.basic.Atom();
        	atom.add(labelField, textArea);
        	
        	if(config.mandatory) {
        		var mandatoryMarker = this.createLabel({
	        		text : '*',
	        		top : config.top,
	        		left : config.left + 35 
        		});
        		atom.add(mandatoryMarker);
        	}
        	
        	atom.setUserData('label', labelField);
        	atom.setUserData('field', textArea);
        	
        	return atom;
        }
         	
  }
});