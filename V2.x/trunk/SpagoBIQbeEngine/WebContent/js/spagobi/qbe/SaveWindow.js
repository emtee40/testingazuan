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
 
/**
  * SaveWindow - short description
  * 
  * Object documentation ...
  * 
  * by Andrea Gioia (andrea.gioia@eng.it)
  */

Ext.ns("Sbi.widgets");

Sbi.widgets.SaveWindow = function(config) {	
	
	var c = Ext.apply({}, config || {}, {
		title: LN('sbi.qbe.savewindow.saveas')  
		, width: 500
		, height: 250
		, nameFieldVisible: true
		, descriptionFieldVisible: true
		, scopeFieldVisible: true
		, hasBuddy: false
		
	});
	
	Ext.apply(this, c);
		
	this.initFormPanel(c);
	
	
	// constructor
	Sbi.widgets.SaveWindow.superclass.constructor.call(this, {
		layout: 'fit',
		width: this.width,
		height: this.height,
		closeAction:'hide',
		plain: true,
		title: this.title,
		items: [this.formPanel]
    });
    
	if(c.hasBuddy === 'true') {
		this.buddy = new Sbi.commons.ComponentBuddy({
    		buddy : this
    	});
	}
	
	this.addEvents('save');    
};

Ext.extend(Sbi.widgets.SaveWindow, Ext.Window, {
    
	nameField: null
	, descriptionField: null
	, scopeField: null
	, hasBuddy: null
    , buddy: null
   
   
    // public methods
	,getFormState : function() {      
    	
      	var formState = {};
      	if(this.nameField) formState.name= this.nameField.getValue();
      	if(this.descriptionField) formState.description= this.descriptionField.getValue();
      	if(this.scopeField) formState.scope= this.scopeField.getValue();
      	
      	return formState;
    }

	//private methods
	, initFormPanel: function(config) {
		
		var items = [];
		
		if(this.nameFieldVisible) {
	    	this.nameField = new Ext.form.TextField({
	    		name:'name',
	    		allowBlank:false, 
	    		inputType:'text',
	    		maxLength:50,
	    		width:250,
	    		fieldLabel:LN('sbi.qbe.savewindow.name') 
	    	});
	    	items.push(this.nameField);
		}
    	
		if(this.descriptionFieldVisible) {
	    	this.descriptionField = new Ext.form.TextField({
	    		name:'description',
	    		allowBlank:false, 
	    		inputType:'text',
	    		maxLength:1000,
	    		width:250,
	    		fieldLabel: LN('sbi.qbe.savewindow.desc') 
	    	});
	    	items.push(this.descriptionField);
    	}
    	    
    	    
		if(this.scopeFieldVisible) {
	    	var scopeComboBoxData = [
	    		['PUBLIC',LN('sbi.qbe.savewindow.public'), LN('sbi.qbe.savewindow.publicdesc')],
	    		['PRIVATE',LN('sbi.qbe.savewindow.private'), LN('sbi.qbe.savewindow.privatedesc')]
	    	];
	    		
	    	var scopeComboBoxStore = new Ext.data.SimpleStore({
	    		fields: ['value', 'field', 'description'],
	    		data : scopeComboBoxData 
	    	});    		    
    		    
	    	this.scopeField = new Ext.form.ComboBox({
	    	   	tpl: '<tpl for="."><div ext:qtip="{field}: {description}" class="x-combo-list-item">{field}</div></tpl>',	
	    	   	editable  : false,
	    	   	fieldLabel : LN('sbi.qbe.savewindow.scope'),
	    	   	forceSelection : true,
	    	   	mode : 'local',
	    	   	name : 'scope',
	    	   	store : scopeComboBoxStore,
	    	   	displayField:'field',
	    	    valueField:'value',
	    	    emptyText:LN('sbi.qbe.savewindow.selectscope'),
	    	    typeAhead: true,
	    	    triggerAction: 'all',
	    	    selectOnFocus:true
	    	});
	    	
	    	items.push(this.scopeField);
		}
    	
    	this.formPanel = new Ext.form.FormPanel({
    		frame:true,
    	    bodyStyle:'padding:5px 5px 0',
    	    buttonAlign : 'center',
    	    items: items,
    	    buttons: [{
    			text: LN('sbi.qbe.savewindow.save'),
    		    handler: function(){
    	    		this.fireEvent('save', this, this.getFormState());
                	this.hide();
            	}
            	, scope: this
    	    },{
    		    text: LN('sbi.qbe.savewindow.cancel'),
    		    handler: function(){
                	this.hide();
            	}
            	, scope: this
    		}]
    	 });
    }
});