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

Sbi.widgets.KpiTreeOuTreePanel = function(config) {

	this.hideContextMenu = config.hideContextMenu;

	var conf = config.configurationObject;
	this.tabItems = conf.tabItems;
	this.OUTreeTitle = conf.OUTreeTitle;
	this.kpiTreeTitle = conf.kpiTreeTitle;

	this.nodesToSave = new Array();
	
	this.initWidget(config);
	if(this.hideContextMenu === undefined || this.hideContextMenu == null || this.hideContextMenu != true ){
		this.initContextMenu();
	}
	var c = Ext.apply( {}, config);
	
	c.items = this.tabItems;
	this.activeTab =0;
	
	Sbi.widgets.KpiTreeOuTreePanel.superclass.constructor.call(this, c);
};

Ext.extend(Sbi.widgets.KpiTreeOuTreePanel, Ext.TabPanel, {
	
	preloadTree : true,
	rootNodeLeftText : null,
	rootNodeLeftId : null,
	rootNodeLeftText : null,
	rootNodeRightText : null,
	rootNodeRightId : null,
	menu : null,
	hideContextMenu: null,
	toolsMenu: null,
	tabItems: null,
	nodesToSave: null,
	tabPanel: null,
	treePanel: null,

	
	initWidget : function(config) {

		this.tbSave = new Ext.Toolbar( {
			buttonAlign : 'right',
			items : [ new Ext.Toolbar.Button( {
				text : LN('sbi.generic.update'),
				iconCls : 'icon-save',
				handler : this.save,
				width : 30,
				scope : this
			}) ]
		});

		this.leftTree = new Ext.tree.TreePanel( {
			title : this.OUTreeTitle,
			flex : 1,
			height : 500,
			userArrows : true,
			animate : true,
			autoScroll : true,		
            style: {
                "background-color": "white"
            },
			loader: this.outreeLoader,

			preloadTree : this.preloadTree,
			enableDD : true,
            enableDrop: true,
            ddAppendOnly: false ,
			scope : this,
			shadow : true,
			root : {
				nodeType : 'async',
				text : this.rootNodeLeftText,
				modelId : this.rootNodeLeftId,
				id:  this.rootNodeLeftId
			}
		   ,listeners:{
		   }
		});
		
	
		this.rightTree = new Ext.tree.TreePanel( {
			title : this.kpiTreeTitle,
			flex : 1,
			height : 600,
			userArrows : true,
			animate : true,
			autoScroll : true,		
            style: {
                "background-color": "white"
            },
			loader: this.kpitreeLoader,

			preloadTree : this.preloadTree,
			enableDD : true,
            enableDrop: true,
            ddAppendOnly: false ,
			scope : this,
			shadow : true,
			root : {
				nodeType : 'async',
				text : this.rootNodeRightText,
				modelId : this.rootNodeRightId,
				id:  this.rootNodeRightId,
				checked: true
			}
		   ,listeners:{
		   }
		});
		
		this.leftTree.on('contextmenu', this.onContextMenu, this);
		this.leftTree.on('beforenodedrop', this.dropNodeBehavoiur, this);
		this.rightTree.on('contextmenu', this.onContextMenu, this);
		this.rightTree.on('beforenodedrop', this.dropNodeBehavoiur, this);	

		this.treePanel = new Ext.Panel({
			border: true,
			layout : 'hbox',
			region : 'center',
			border : true,
			collapseMode : 'mini',
			split : true,
			items : [this.leftTree, this.rightTree]
		});
		
		var gridItems =[this.treePanel];
		
		if(config.toolsMenuItems!=null){
			var panel = new Ext.Panel({
				border : true,
				collapseMode : 'mini',
				split : true,
				region : 'south',
				
				height: 50,
				collapsed: true,
				items : config.toolsMenuItems
			});
			gridItems.push(panel);
		};
		
        this.tabPanel = new Ext.FormPanel({
         title: LN('sbi.grants.trees.tab')
        , tbar: this.tbSave
        , width: 430
        , layout: 'fit'
        , items: [ new Ext.Panel( {
			frame : true,
			autoScroll : true,
			labelAlign : 'left',
			width : 600,
			height : 550,
			layout : 'border',
			items : gridItems
		})]});
		
		this.tabItems.push(this.tabPanel);
		this.setListeners();
	},
	
	//init the tools in the south of the panel
	initToolsMenu: function(conf){
		this.toolsMenu = new Ext.form.FormPanel({
			items: conf.toolsMenuItems
		});
	},
		
	createNewRootNode: function() {
		var node = new Ext.tree.AsyncTreeNode({
	        text		: '... - ...',
	        expanded	: false,
	        leaf		: false,	        
	        draggable	: false
	    });
		return node;
	},

	fillDetail : function(sel, node) {
		alert("override");
	},
	renderTree : function(tree) {
		alert("override");
	},

	editNode : function(field, newVal, oldVal) {
		alert("override");
	},

	addNewItem : function(parent) {
		alert('overridden');
	},
	deleteItem : function(node) {
		
		alert('overridden');
		
	},
	onContextMenu : function(node, e) {
		if (this.menu == null) { // create context menu on first right click
			if(this.hideContextMenu === undefined || this.hideContextMenu == null || this.hideContextMenu != true ){
				this.initContextMenu();
			}else
				return;
		}
		
		if (this.ctxNode && this.ctxNode.ui) {
			this.ctxNode.ui.removeClass('x-node-ctx');
			this.ctxNode = null;
		}
		
		this.ctxNode = node;
		this.ctxNode.ui.addClass('x-node-ctx');
		this.menu.showAt(e.getXY());
	}

});

