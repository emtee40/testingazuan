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

Ext.ns("Sbi.qbe");

Sbi.qbe.QbePanel = function(config) {
	
	var c = Ext.apply({
		// set default values here
	}, config || {});
	
	//config.isFromCross = true;
	
	this.services = new Array();
	var params = {};
	this.services['getFirstQuery'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'GET_FIRST_QUERY_ACTION'
		, baseParams: params
	});
	
	this.addEvents();
	
	this.queryEditorPanel = null;
	this.queryResultPanel = new Sbi.widgets.DataStorePanel(c);
	
	var items = null;
	if (Sbi.user.isPowerUser === true) {
		// if user is a power user, instantiate and show also the QueryBuilderPanel
		this.queryEditorPanel = new Sbi.qbe.QueryBuilderPanel(c);
		items = [this.queryEditorPanel, this.queryResultPanel];
	} else {
		// if user is a read-only user, do not instantiate and show the QueryBuilderPanel
		// and execute first query on catalog
		items = [this.queryResultPanel];
		this.loadFirstQuery();
	}
	
	this.tabs = new Ext.TabPanel({
		border: false,
  		activeTab: config.isFromCross?1:0,
  		items: items
	});
	
	if (this.queryEditorPanel != null) {
		this.queryEditorPanel.on('execute', function(editorPanel, query){
			this.checkPromptableFilters(query);
		}, this);
		this.tabs.on('tabchange', function () {
			var anActiveTab = this.tabs.getActiveTab();
			if (anActiveTab.centerRegionPanel !== undefined) {
					anActiveTab.centerRegionPanel.doLayout();
			}
			
			if(anActiveTab.selectGridPanel.dropTarget === null) {
				anActiveTab.selectGridPanel.dropTarget = new Sbi.qbe.SelectGridDropTarget(anActiveTab.selectGridPanel);
			}
			
			if(anActiveTab.filterGridPanel.dropTarget === null) {
				anActiveTab.filterGridPanel.dropTarget = new Sbi.qbe.FilterGridDropTarget(anActiveTab.filterGridPanel);
			}
		}, this);
	}
	
	c = Ext.apply(c, {
		layout: 'fit',
		autoScroll: true, 
  		margins:'0 4 4 0',
  		items: [this.tabs] 
	});
	
	// constructor
    Sbi.qbe.QbePanel.superclass.constructor.call(this, c);
    
    //alert('isFromCross: ' + config.isFromCross);
    if(config.isFromCross) {
    	this.loadFirstQuery();
    }
};

Ext.extend(Sbi.qbe.QbePanel, Ext.Panel, {
    
    services: null
    , queryResultPanel: null
    , queryEditorPanel: null
    , tabs: null
    , query: null
   
   
    // public methods
    
    , setQuery: function(q) {
    	query = q;
    }
    

    
    // private methods
	, loadFirstQuery: function() {
		Ext.Ajax.request({
	        url: this.services['getFirstQuery'],
	        params: {},
	        success : function(response, opts) {
  	  			try {
  	  				var firstQuery = Ext.util.JSON.decode( response.responseText );
  	  				this.checkPromptableFilters(firstQuery);
  	  			} catch (err) {
  	  				Sbi.exception.ExceptionHandler.handleFailure();
  	  			}
	        },
	        scope: this,
			failure: Sbi.exception.ExceptionHandler.handleFailure      
		});
	}
	
	// check if there are some promptable filters before starting query execution
	, checkPromptableFilters: function(query) {
    	var freeFilters = this.getPromptableFilters(query);
	    if (freeFilters.length > 0) {
	    	var freeConditionsWindow = new Sbi.qbe.FreeConditionsWindow({
	    		freeFilters: freeFilters
	    	});
	    	freeConditionsWindow.on('apply', function (formState) {
	    		// make last values persistent on filter grid panel
	    		if (this.queryEditorPanel != null) {
	    			this.queryEditorPanel.filterGridPanel.setPromptableFiltersLastValues(formState);
	    		}
	    		this.executeQuery(query, formState);
	    	}, this);
	    	freeConditionsWindow.on('savedefaults', function (formState) {
	    		// make default values persistent on filter grid panel
	    		if (this.queryEditorPanel != null) {
	    			this.queryEditorPanel.filterGridPanel.setPromptableFiltersDefaultValues(formState);
	    		}
	    	}, this);
	    	freeConditionsWindow.show();
	    } else {
	    	this.executeQuery(query);
	    }
	}
	
	, executeQuery: function(query, promptableFilters) {
		this.tabs.activate(this.queryResultPanel);
		this.queryResultPanel.execQuery(query, promptableFilters);
	}
	
  	, getPromptableFilters : function(query) {
		var filters = [];
		if (query.filters != null && query.filters.length > 0) {
			for(i = 0; i < query.filters.length; i++) {
				var filter =  query.filters[i];
				if (filter.promptable) {
					filters.push(filter);
				}
			}
		}
		return filters;
	}
  	
});