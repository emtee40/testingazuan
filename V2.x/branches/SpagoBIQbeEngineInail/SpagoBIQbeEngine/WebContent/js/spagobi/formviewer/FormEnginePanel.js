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

Ext.ns("Sbi.formviewer");

Sbi.formviewer.FormEnginePanel = function(config) {
	
	var defaultSettings = {
		//title: LN('sbi.qbe.queryeditor.title'),
	};
	
	if(Sbi.settings && Sbi.settings.qbe && Sbi.settings.qbe.queryBuilderPanel) {
		defaultSettings = Ext.apply(defaultSettings, Sbi.settings.qbe.queryBuilderPanel);
	}
	
	var c = Ext.apply(defaultSettings, config || {});
	
	Ext.apply(this, c);
	
	/*
	this.services = this.services || new Array();	
	this.services['saveQuery'] = this.services['saveQuery'] || Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'SAVE_QUERY_ACTION'
		, baseParams: new Object()
	});
	
	this.addEvents('execute');
	*/
	
	this.initFormViewerPage(c.formViewerPageConfig || {});
	this.initResultsPage(c.resultsPageConfig || {});
	
	c = Ext.apply(c, {
		closable: false
		, border: false
		, activeItem: 1
		, hideMode: !Ext.isIE ? 'nosize' : 'display'
		, layout: 'card'
		, items: [this.formViewerPage, this.resultsPage]
	});
	
	
	// constructor
    Sbi.formviewer.FormEnginePanel.superclass.constructor.call(this, c);
};

Ext.extend(Sbi.formviewer.FormEnginePanel, Ext.Panel, {
    
    services: null
    , formViewerPage: null
    , resultsPage: null
   
   
    // -- public methods ----------------------------------------------------------------------------------
    
    
    
    // -- private methods ----------------------------------------------------------------------------------
    
    , initFormViewerPage: function(config) {
		this.formViewerPage = new Ext.Panel({
			layout: 'fit'
			, html: 'formViewerPage'
		});
	}

	, initResultsPage: function(config) {
		this.resultsPage = new Sbi.formviewer.ResultsPage(config);
	}

});