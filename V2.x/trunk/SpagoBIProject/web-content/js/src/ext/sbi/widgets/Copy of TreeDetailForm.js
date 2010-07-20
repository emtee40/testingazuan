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
 * [list]
 * 
 * 
 * Public Events
 * 
 * [list]
 * 
 * Authors - Monica Franceschini
 */

Ext.ns("Sbi.widgets");

Sbi.widgets.TreeDetailForm = function(config) {

	var conf = config.configurationObject;
	this.services = new Array();
	this.services['manageTreeService'] = conf.manageTreeService;
	this.tabItems = conf.tabItems;
	/*
	this.mainElementsStore = new Ext.data.JsonStore({
    	autoLoad: false    	  
    	, id : 'id'		
    	, fields: conf.fields
    	, root: 'root'
		, url: this.services['manageTreeService']		
	});
	*/
	//this.mainElementsStore.load();

	this.initWidget();
	/*   
	this.mainElementsStore.on('load', function(){
			alert("load");
		}
	); 
	*/ 	
	//this.addEvents('load', 'addnodetoselect');
	
	var c = Ext.apply({}, config, this.gridForm);
   	
   	Sbi.widgets.TreeDetailForm.superclass.constructor.call(this,c);	
};

Ext.extend(Sbi.widgets.TreeDetailForm, Ext.FormPanel, {
	
	gridForm:null	
	, tabs: null
	, tabItems: null

	, treeLoader: null
	, rootNode: null
	, preloadTree: true
	, rootNodeText: 'KPI'
	

	, createRootNode: function(root) {
		if(root === undefined || root == null){
			root = this.rootNodeText;
		}
		var node = new Ext.tree.AsyncTreeNode({
	        text		: root,
	        iconCls		: 'database',
	        expanded	: true,
	        draggable	: true
	    });
		return node;
	}

	,initWidget: function(){

 	    this.tbSave = new Ext.Toolbar({
 	    	buttonAlign : 'right', 	    	
 	    	items:[new Ext.Toolbar.Button({
 	            text: LN('sbi.generic.update'),
 	            iconCls: 'icon-save',
 	            handler: this.save,
 	            width: 30,
 	            id: 'save-btn',
 	            scope: this
 	            })
 	    	]
 	    });

 	   this.tabs = new Ext.TabPanel({
           enableTabScroll : true
           , id: 'tab-panel'
           , activeTab : 0
           , columnWidth: 0.6
           , autoScroll : true
           , width: 450          
           , height: 490
           , itemId: 'tabs' 
           , tbar: this.tbSave
		   , items: this.tabItems
		});

 	    this.tb = new Ext.Toolbar({
 	    	buttonAlign : 'right',
 	    	items:[new Ext.Toolbar.Button({
 	            text: LN('sbi.generic.add'),
 	            iconCls: 'icon-add',
 	            //handler: this.addNewItem,
 	            width: 30,
 	            scope: this
 	            })
 	    	]
 	    });
 	   
		this.treeLoader = new Ext.tree.TreeLoader({
	        dataUrl: this.services['manageTreeService']
	       ,nodeParameter:"id"
	    });
		this.treeLoader.on('load', this.oonLoad, this);
		this.treeLoader.on('loadexception', this.oonLoadException, this);
		
		this.rootNode = this.createRootNode();
		
 	   this.mainTree =  new Ext.tree.TreePanel({
	        collapsible: false,
            height			: 490,
            width			: 300,
            title			: this.listTitle,
            tbar			: this.tb,
	        animCollapse     : true,
	        collapseFirst	 : false,
	        border           : true,
	        autoScroll       : true,
	        containerScroll  : true,
	        animate          : true,
	        trackMouseOver 	 : true,
	        useArrows 		 : true,
	        loader           : this.treeLoader,
	        preloadTree		 : this.preloadTree,
	        root 			 : this.rootNode,
            enableDD		 : true,
            dropConfig       : {appendOnly:true}
            
	    });	
 	   
 	   	//this.mainTree.getRootNode().expand();
 	   	//this.mainTree.render();

		this.mainTree.on('click', function(node) {
			//this.fireEvent('addnodetoselect', this, node);
			alert("click");
			this.mainTree.getRootNode().expand();
	 	   	//this.mainTree.render();
		}, this);
		


   	   /*
   	   *    Here is where we create the Form
   	   */
   	   this.gridForm = new Ext.FormPanel({
   	          id: 'items-form',
   	          frame: true,
   	          autoScroll: true,
   	          labelAlign: 'left',
   	          title: this.panelTitle,
   	          width: 600,
   	          height: 550,
   	          layout: 'column',
   	          trackResetOnLoad: true,
   	          items: [
   	              {
   	              columnWidth: 0.4,
   	              layout: 'fit',
   	              items: this.mainTree
   	              }, this.tabs
   	          ]
   	      });
	}

	,save : function() {		
		alert('Abstract Method: it needs to be overridden');
    }
	
	, oonLoad: function(treeLoader, node, response) {

		alert("oonLoad");
		if (response !== undefined) {		
      		if(response.responseText !== undefined) {
      			var content = Ext.util.JSON.decode( response.responseText );
      			
				var root = content.root;
				//this.mainTree.setRootNode(root);
				this.mainTree.setRootNode(root);
				this.mainTree.render();
				
      		}

		}

		//this.mainTree.expand(false, /*no anim*/ false);
	}
	
	, oonLoadException: function(treeLoader, node, response) {
		alert("error");
		Sbi.exception.ExceptionHandler.handleFailure(response, treeLoader.baseParams || {});
	}

});
