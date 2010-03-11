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
  * Object name 
  * 
  * [description]
  * 
  * 
  * Public Properties
  * 
  * [list]
  * 
  * 
  * Public Methods
  * 
  *  [list]
  * 
  * 
  * Public Events
  * 
  *  [list]
  * 
  * Authors
  * 
  * - Andrea Gioia (andrea.gioia@eng.it)
  */

Ext.ns("Sbi.console");

Sbi.console.MasterDetailWindow = function(config) {
	

	var defaultSettings = Ext.apply({}, config || {}, {
		title: 'Master/Detail windows'
		, width: 500
		, height: 250
		, hasBuddy: false		
	});
	
		
	if(Sbi.settings && Sbi.settings.console && Sbi.settings.console.masterDetailWindow) {
		defaultSettings = Ext.apply(defaultSettings, Sbi.settings.console.masterDetailWindow);
	}
		
	var c = Ext.apply(defaultSettings, config || {});
		
	Ext.apply(this, c);
		
		
	this.services = this.services || new Array();	
	this.services['doThat'] = this.services['doThat'] || Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'DO_THAT_ACTION'
		, baseParams: new Object()
	});
		
	this.addEvents('customEvents');
		
	this.initMainPanel(c);	
	
	c = Ext.apply(c, {  	
		layout: 'fit',
		closeAction:'hide',
		plain: true,
		title: this.title,
		buttonAlign : 'center',
		buttons: [{
			text: 'Cancel',
			handler: function(){
	        	this.hide();
	        }
	        , scope: this
		}],
		items: [this.mainPanel]
	});

	// constructor
	Sbi.console.MasterDetailWindow.superclass.constructor.call(this, c);
    
};

Ext.extend(Sbi.console.MasterDetailWindow, Ext.Window, {
    
	mainPanel: null
	, masterPanel: null
	, detailPanel: null
   
    // public methods
    
   
    
    
    // private methods
    
    , initMainPanel: function() {
		this.initMasterlPanel();
		this.initDetailPanel();
		
		this.mainPanel = new Ext.Panel({
			layout: 'border',
		    frame: false, 
		    border: false,
		    bodyStyle:'background:#E8E8E8;',
		    style:'padding:3px;',
		    items: [this.masterPanel, this.detailPanel]
		});
    }

	, initMasterlPanel: function() {
		this.masterPanel = new Ext.Panel({
			region:'north',
		    frame: false, 
		    border: false,
		    html: 'Io sono il master ...'
		});
	}

	, initDetailPanel: function() {
		this.detailPanel = new Ext.Panel({
			region:'center',
		    frame: false, 
		    border: false,
		    html: '... e io sono il detail'
		});
	}
    
    
});