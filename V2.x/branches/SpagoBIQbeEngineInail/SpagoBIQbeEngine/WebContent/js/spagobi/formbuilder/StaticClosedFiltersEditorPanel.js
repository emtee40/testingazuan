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

Ext.ns("Sbi.formbuilder");

Sbi.formbuilder.StaticClosedFiltersEditorPanel = function(staticFilters, config) {
	
	var defaultSettings = {
		// set default values here
		title: 'Static closed filters'
		, layout: 'table'
	    , layoutConfig: {
	        columns: 100
	    }
		, frame: true
		, autoScroll: true
		, autoWidth: true
		, autoHeight: true
	};
	if (Sbi.settings && Sbi.settings.formbuilder && Sbi.settings.formbuilder.staticClosedFiltersEditorPanel) {
		defaultSettings = Ext.apply(defaultSettings, Sbi.settings.formbuilder.staticClosedFiltersEditorPanel);
	}
	var c = Ext.apply(defaultSettings, config || {});
	
	this.init(staticFilters);
	
	Ext.apply(c, {
		tools: this.tools,
  		items: this.contents
	});
	
	// constructor
    Sbi.formbuilder.StaticClosedFiltersEditorPanel.superclass.constructor.call(this, c);
    
    this.doLayout();
};

Ext.extend(Sbi.formbuilder.StaticClosedFiltersEditorPanel, Ext.Panel, {
    
	services: null
	, contents: null
	, empty: null
	, emptyMsgPanel: null
	, tools: null
	
	
	// --------------------------------------------------------------------------------
	// public methods
	// --------------------------------------------------------------------------------
		
	, loadContents: function(staticFiltersConf) {
		Sbi.qbe.commons.Utils.unimplementedFunction('loadContents');
		this.initEmptyMsgPanel();
		this.initTools();
		this.contents = [this.emptyMsgPanel];	
	}

	, clearContents: function() {
		if(this.empty === true) return;
		
		this.reset();
		
		this.emptyMsgPanel = new Ext.Panel({
			html: '1Click on the button in the top-rigtht corner in order to add a new filter group'
		});
		this.add(this.emptyMsgPanel);
		this.contents = [this.emptyMsgPanel];
		this.doLayout();
		this.empty = true;		
	}
	
	, addStaticClosedXORFilters: function(staticFiltersGroupConf) {
		if(this.empty === true) {
			this.reset();
			//this.remove(0, true);
			//this.doLayout();
			this.empty = false;
			this.contents = [];
		}
				
		var staticFiltersGroup = new Sbi.formbuilder.StaticClosedXORFiltersEditorPanel(staticFiltersGroupConf);		
		staticFiltersGroup.on('destroy', function(fGroup) {
			var t = this.contents;
			this.contents = [];
			for(var i = 0; i < t.length; i++) {
				if(fGroup.id !== t[i].id) {
					this.contents.push(t[i]);
				}
			}
		}, this);
		
		this.contents.push(staticFiltersGroup);
		this.add(staticFiltersGroup);
		this.doLayout();	
	}

	// --------------------------------------------------------------------------------
	// private methods
	// --------------------------------------------------------------------------------
	
	, reset: function() {
		if(this.contents && this.contents.length) {
			for(var i = this.contents.length-1; i >= 0; i--) {
				// beware: remove change also the length of contents (probably by calling "delete contents[i]") 
				this.remove(this.contents[i], true);
			}
		}
	}
	
	, init: function(staticFiltersConf) {
		if(staticFiltersConf !== undefined) {
			this.loadContents(staticFiltersConf);	
		} else {
			this.initEmptyMsgPanel();
			this.initTools();
			this.contents = [this.emptyMsgPanel];
		}
	}	
	
	, initEmptyMsgPanel: function() {
		this.empty = true;
		this.emptyMsgPanel = new Ext.Panel({
			html: '2Click on the button in the top-rigtht corner in order to add a new filter group'
		});
	}

	, initTools: function() {
		this.tools = [];
		
		this.tools.push({
		    id:'plus',
		    qtip: 'Add static closed filter',
		    handler: function(event, toolEl, panel){
		  		this.addStaticClosedXORFilters();
		    }
		    , scope: this
		});
		
		this.tools.push({
		    id:'delete',
		    qtip: 'clear all',
		    handler: function(event, toolEl, panel){
		  		this.clearContents();
		    }
		    , scope: this
		});
	}
	
	
	
	

	   
	
  	
});