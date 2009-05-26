/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2009 Engineering Ingegneria Informatica S.p.A.
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
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */

Ext.ns("Sbi.browser");

Sbi.browser.DocumentsBrowser = function(config) {    
   
	// sub-components   
	
	
	this.rootFolderId = config.rootFolderId || null;
	this.selectedFolderId = this.rootFolderId;
	
	this.treePanel = new Sbi.browser.DocumentsTree({
        border: true
        , rootNodeId: this.selectedFolderId 
    });
	
	this.filterPanel = new Sbi.browser.FilterPanel({
        title: LN('sbi.browser.filtrpanel.title')
        , border:true
        , metaFolder: config.metaFolder
        , metaDocument: config.metaDocument	
    });
	
	this.searchPanel = new Sbi.browser.SearchPanel({
        title: LN('sbi.browser.searchpanel.title')
        , border:true
        , metaDocument: config.metaDocument	
    });
		
	this.westRegionContainer = new Ext.Panel({
	       id:'westRegionContainer',
	       split:true,
	       border:true,
	       frame:true,
	       collapsible: true,
	       //margins:'0 0 0 15',
	       layout:'accordion',
	       layoutConfig:{
	          animate:true
	       },
	       items: [
	               this.treePanel
	               , this.filterPanel
	               , this.searchPanel
	       ]
	});
	
	
	
	this.detailPanel = new Sbi.browser.FolderDetailPanel({ 
		layout: 'fit'
        , metaFolder: config.metaFolder
        , metaDocument: config.metaDocument	
        , folderId: this.selectedFolderId
        //, closable:false
        //, title: 'Browser'
    });
	
	this.executionPanel = new Sbi.execution.ExecutionWizardPanel({
		/*
		region: 'center'
	    , margins: '0 3 3 0'
	    , collapsed: false
	    , split: true
	    */
	});
	
	this.centerContainerPanel = new Ext.Panel({
		 region: 'center'
		 , margins: '0 3 3 0'
		 , collapsed: false
		 , split: true
		 , autoScroll: false
		 , height: 100
		 , minHeight: 100
		 , width: 100
		 , minWidth: 0
		 , layout: 'fit'
		 
		 // turn on tab resizing
		 /*
		 , resizeTabs:true
		 , minTabWidth: 115
		 , tabWidth:135
		 , enableTabScroll:true
		 , defaults: {autoScroll:true}
		 , activeItem: 0
		 */
			 
		 , items: [this.detailPanel]
	});
	
	
	config.baseLayout = config.baseLayout || {}; 	
	var c = Ext.apply({}, config.baseLayout, {
		layout: 'border',
	    border: false,
	    items: [ 
	            // CENTER REGION ---------------------------------------------------------
	            this.centerContainerPanel, 
	            // WEST REGION -----------------------------------------------------------
	            new Ext.Panel({               
	                region: 'west',
	                border: false,
	                frame: false,
	                //margins: '0 0 3 3',
	                collapsible: true,
	                collapsed: false,
	                hideCollapseTool: true,
	                titleCollapse: true,
	                collapseMode: 'mini',
	                split: true,
	                autoScroll: false,
	                width: 280,
	                minWidth: 280,
	                layout: 'fit',
	                items: [this.westRegionContainer]
	              })
	            // NORTH HREGION -----------------------------------------------------------
	            /*
	          	,new Sbi.browser.Toolbar({
	            	region: 'north',
	            	margins: '3 3 3 3',
	            	autoScroll: false,
	            	height: 30,
	            	layout: 'fit'
	          	})
	          	*/
	        ]
	});   
    
    Sbi.browser.DocumentsBrowser.superclass.constructor.call(this, c);
    
    this.treePanel.addListener('click', this.onTreeNodeClick, this);
   
    this.detailPanel.addListener('ondocumentclick', this.onDocumentClick, this);
    this.detailPanel.addListener('onfolderclick', this.onFolderClick, this);
    this.detailPanel.addListener('onbreadcrumbclick', this.onBreadCrumbClick, this);
    
    this.searchPanel.addListener('onsearch', this.onSearch, this);
    this.searchPanel.addListener('onreset', this.onReset, this);
    
    this.filterPanel.addListener('onsort', this.onSort, this);
    this.filterPanel.addListener('ongroup', this.onGroup, this);
    this.filterPanel.addListener('onfilter', this.onFilter, this);
    
    
    
    
    
}




Ext.extend(Sbi.browser.DocumentsBrowser, Ext.Panel, {
    	
	rootFolderId: null
    , selectedFolderId: null
    
	, westRegionContainer: null
    , treePanel: null
    , filterPanel: null
    , searchPanel: null
    
    , centerRegionContainer: null
    , detailPanel: null
    , executionPanel: null
    
    
    , selectFolder: function(folderId) {
		this.detailPanel.loadFolder(folderId, this.rootFolderId);
		this.selectedFolderId = folderId;
		this.searchPanel.selectedFolderId = folderId;
	}
    
    
    , onTreeNodeClick: function(node, e) {
		this.selectFolder(node.id);
	}

	, onDocumentClick: function(panel, r) {
		
		this.centerContainerPanel.remove(this.detailPanel, false);
		this.centerContainerPanel.add(this.executionPanel);
		this.centerContainerPanel.doLayout();
		
		this.executionPanel.execute(r);
		
		/*
		var execDocumentService = Sbi.config.serviceRegistry.getServiceUrl('ExecuteBIObjectPage', false, true);
		execDocumentService += '&MESSAGEDET=EXEC_PHASE_CREATE_PAGE';
		execDocumentService += '&OBJECT_ID=' + r.id;
		window.location=execDocumentService;
		*/
	}
	
	, onFolderClick: function(panel, r) {
		this.selectFolder(r.id);
	}
	
	, onBreadCrumbClick: function(panel, b) {
		this.selectFolder(b.id);
	}
	
	, onSearch: function(panel, q) {
		if(this.rootFolderId) q.rootFolderId = this.rootFolderId;
		this.detailPanel.searchFolder(q);
	}
	
	, onSort: function(panel, cb) {
		this.detailPanel.sort('Documents', cb.inputValue);
	}
	
	, onReset: function(panel, cb) {
		this.selectFolder(this.selectedFolderId);
	}
	
	, onGroup: function(panel, cb) {
		this.detailPanel.group('Documents', cb.inputValue);
	}
	
	, onFilter: function(panel, cb) {
		this.detailPanel.filter(cb.inputValue);
	}
});