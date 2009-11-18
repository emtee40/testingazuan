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
  * - Davide Zerbetto (davide.zerbetto@eng.it)
  */

Ext.ns("Sbi.formviewer");

Sbi.formviewer.StaticOpenFiltersPanel = function(openFilters, config) {
	
	var defaultSettings = {
		// set default values here
		title: LN('sbi.formviewer.staticopenfilterspanel.title')
        , border: false
        , frame: true
        , autoScroll: true
		, autoWidth: true
		, autoHeight: true
        , layout: 'column'
    	, layoutConfig: {
	        columns: openFilters.length
	    }
	};
	if (Sbi.settings && Sbi.settings.formviewer && Sbi.settings.formviewer.staticOpenFiltersPanel) {
		defaultSettings = Ext.apply(defaultSettings, Sbi.settings.formviewer.staticOpenFiltersPanel);
	}
	var c = Ext.apply(defaultSettings, config || {});
	
	var params = {LIGHT_NAVIGATOR_DISABLED: 'TRUE'};
	this.services = new Array();
	this.services['getFilterValuesService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'GET_FILTER_VALUES_ACTION'
		, baseParams: params
	});
	
	this.baseConfig = c;
	
	this.init(openFilters);
	
	Ext.apply(c, {
  		items: this.fields
	});
	
	// constructor
    Sbi.formviewer.StaticOpenFiltersPanel.superclass.constructor.call(this, c);
    
};

Ext.extend(Sbi.formviewer.StaticOpenFiltersPanel, Ext.form.FormPanel, {
    
	services: null
	, fields: null
	, combos: null
	   
	// private methods
	   
	, init: function(openFilters) {
		
		this.fields = [];
		this.combos = new Array();
		var fieldsCounter = 0;
		for(var i = 0; i < openFilters.length; i++) {
			var field = this.createField( openFilters[i] );
			this.combos.push( field );
			var aPanel = new Ext.Panel({
				items: [field]
				, layout: 'form' // form layout required: input field labels are displayed only with this layout
				, width: 350
				//, height: 40 // cannot set a static height, since the SuperBoxSelect resize vertically
			});
			this.fields.push(aPanel);
		}
		
	}

	, createField: function( openFilter ) {
		var field;
		
		var baseConfig = {
	       fieldLabel: openFilter.text
		   , name : openFilter.id
		   , width: this.baseConfig.fieldWidth
		   , allowBlank: true
		};
		
		var store = this.createStore(openFilter);
		
		if (openFilter.singleSelection === undefined || openFilter.singleSelection === null || openFilter.singleSelection === true) {
			field = new Ext.ux.form.SuperBoxSelect(Ext.apply(baseConfig, {
	            editable: true			    
			    , forceSelection: false
			    , store: store
			    , displayField: 'column-1'
			    , valueField: 'column-1'
			    , emptyText: ''
			    , typeAhead: false
			    , triggerAction: 'all'
			    , selectOnFocus: true
			    , autoLoad: false
			    , maxSelection: 1
			    , width: 200
			    , maxHeight: 250
			}));
		} else {
			field = new Ext.ux.form.SuperBoxSelect(Ext.apply(baseConfig, {
	            editable: true			    
			    , forceSelection: false
			    , store: store
			    , displayField: 'column-1'
			    , valueField: 'column-1'
			    , emptyText: ''
			    , typeAhead: false
			    , triggerAction: 'all'
			    , selectOnFocus: true
			    , autoLoad: false
			    , maxSelection: openFilter.maxSelectedNumber
			    , width: 200
			    , maxHeight: 250
			}));
			
			/* 
			field = new Ext.ux.Andrie.Select(Ext.apply(baseConfig, {
				multiSelect: true
				, maxLength: openFilter.maxSelectedNumber
			    , store: store
			    , displayField: 'column-1'
			    , valueField: 'column-1'
			    , emptyText: ''
			    , selectOnFocus: true
			    , autoLoad: false
			}));
			*/
			/*
			field = new Ext.ux.BoxSelect(Ext.apply(baseConfig, {
	            editable: true			    
			    , forceSelection: false
			    , store: store
			    , displayField: 'column-1'
			    , valueField: 'column-1'
			    , emptyText: ''
			    , typeAhead: false
			    //, typeAheadDelay: 1000
			    , triggerAction: 'all'
			    , selectOnFocus:true
			    , autoLoad: false
			}));
			*/
		}
		return field;
	}


	, createStore: function(openFilter) {
		
		var entityId = (openFilter.query != undefined && openFilter.query.field != undefined) ? openFilter.query.field : openFilter.field;
		var orderField = (openFilter.query != undefined && openFilter.query.orderField != undefined) ? openFilter.query.orderField : undefined;
		var orderType = (openFilter.query != undefined && openFilter.query.orderType != undefined) ? openFilter.query.orderType : undefined;
		
		var store = new Ext.data.JsonStore({
			url: this.services['getFilterValuesService']
		});
		var baseParams = {'ENTITY_ID': entityId, 'ORDER_ENTITY': orderField, 'ORDER_TYPE': orderType};
		store.baseParams = baseParams;
		
		store.on('loadexception', function(store, options, response, e) {
			Sbi.exception.ExceptionHandler.handleFailure(response, options);
		});
		
		return store;
		
	}	

	// public methods
	
	, getFormState: function() {
		var state = {};
		for (var i = 0; i < this.combos.length; i++) {
			var aCombo = this.combos[i];
			state[aCombo.name] = aCombo.getValuesList();
		}
		return state;
	}
	
	, getErrors: function() {
		var errors = new Array();
		for (var i = 0; i < this.combos.length; i++) {
			var aCombo = this.combos[i];
			if (!aCombo.validate()) {
				var error = String.format(LN('sbi.formviewer.staticopenfilterspanel.validation.maxselectiontext'), aCombo.initialConfig.maxSelection, aCombo.initialConfig.fieldLabel);
				errors.push(error);
			}
		}
		return errors;
	}
  	
});