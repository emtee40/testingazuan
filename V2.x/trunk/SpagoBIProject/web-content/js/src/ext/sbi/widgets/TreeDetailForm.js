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
	this.services['saveTreeService'] = conf.saveTreeService;
	this.tabItems = conf.tabItems;

	this.treeTitle = conf.treeTitle;

	this.initWidget();
	this.initContextMenu();
	

	var c = Ext.apply( {}, config, this.gridForm);

	Sbi.widgets.TreeDetailForm.superclass.constructor.call(this, c);
};

Ext.extend(Sbi.widgets.TreeDetailForm, Ext.FormPanel, {

	gridForm : null,
	tabs : null,
	tabItems : null,
	treeLoader : null,
	rootNode : null,
	rootNodeId : null,
	preloadTree : true,
	rootNodeText : null,
	treeTitle : null,
	menu : null,
	
	nodesToSave : new Array(),
	selectedNodeToEdit : null,
	
	initContextMenu : function() {

		this.menu = new Ext.menu.Menu( {
			id : 'actions',
			items : [
			// ACID operations on nodes
					'-', {
						text : 'Add Model Node',
						iconCls : 'icon-add',
						handler : function() {
							this.addNewItem(this.ctxNode);
						},
						scope : this
					}, {
						text : 'Remove Model Node',
						iconCls : 'icon-remove',
						handler : function() {
							this.deleteItem(this.ctxNode);
						},
						scope : this
					} ]
		});

	},
	initWidget : function() {

		this.tbSave = new Ext.Toolbar( {
			buttonAlign : 'right',
			items : [ new Ext.Toolbar.Button( {
				text : LN('sbi.generic.update'),
				iconCls : 'icon-save',
				handler : this.save,
				width : 30,
				id : 'save-btn',
				scope : this
			}) ]
		});

		this.tabs = new Ext.TabPanel( {
			enableTabScroll : true,
			id : 'tab-panel1',
			activeTab : 0,
			columnWidth : 0.6,
			autoScroll : true,
			width : 450,
			height : 490,
			itemId : 'tabs',
			items : this.tabItems
		});

		this.mainTree = new Ext.tree.TreePanel( {
			id:'model-maintree',
			title : this.treeTitle,
			width : 250,
			height : 230,
			userArrows : true,
			animate : true,
			autoScroll : true,			
			loader: new Ext.tree.TreeLoader({
				dataUrl: this.services['manageTreeService'],
		        createNode: function(attr) {
					//alert(Ext.util.JSON.encode(attr));

		            if (attr.modelId) {
		                attr.id = attr.modelId;
		            }

		    		if (attr.kpi !== undefined && attr.kpi != null
		    				&& attr.kpi != '') {
		    			attr.iconCls = 'has-kpi';
		    		}
		    		if (attr.error !== undefined && attr.error != false) {
		    			attr.cls = 'has-error';
		    		}
		            return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
		        }

			}),

			preloadTree : this.preloadTree,
			enableDD : true,
			dropConfig : {
				appendOnly : true
			},
			scope : this,
			shadow : true,
			tbar : this.tbSave,
			root : {
				nodeType : 'async',
				text : this.rootNodeText,
				modelId : this.rootNodeId,
				id:  this.rootNodeId
			}

		});
		
		this.mainTree.on('contextmenu', this.onContextMenu, this);

		/*
		 * Here is where we create the Form
		 */
		this.gridForm = new Ext.FormPanel( {
			id : 'model-detail-formpan',
			frame : true,
			autoScroll : true,
			labelAlign : 'left',
			title : this.panelTitle,
			width : 600,
			height : 550,
			layout : 'border',
			layoutConfig : {
				animate : true,
				activeOnTop : false

			},
			trackResetOnLoad : true,
			items : [ {
				region : 'west',
				collapseMode : 'mini',
				layout : 'fit',
				width : 300,
				items : this.mainTree
			}, {
				border : false,
				frame : false,
				collapseMode : 'mini',
				split : true,
				region : 'center',
				layout : 'fit',
				items : this.tabs
			} ]
		});
		this.setListeners();

	},
	save : function() {
		alert("Overridden");
		
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
	editKpi : function(field, newVal, oldVal) {
		var node = this.selectedNodeToEdit;
		if (node !== undefined && node !== null) {
			node.attributes.toSave = true;
			node.attributes.kpi = newVal;
		}
	},
	editType : function(field, newVal, oldVal) {
		var node = this.selectedNodeToEdit;
		if (node !== undefined && node !== null) {
			node.attributes.toSave = true;
			node.attributes.typeId = newVal;
			node.attributes.type = newVal;//unused server side
		}
	},
	editTypeDescr : function(field, newVal, oldVal) {
		var node = this.selectedNodeToEdit;
		if (node !== undefined && node !== null) {
			node.attributes.toSave = true;
			node.attributes.typeDescr = newVal;
		}
	},
	editDescr : function(field, newVal, oldVal) {
		var node = this.selectedNodeToEdit;
		if (node !== undefined && node !== null) {
			node.attributes.toSave = true;
			node.attributes.description = newVal;
		}
	},
	editLabel : function(field, newVal, oldVal) {
		var node = this.selectedNodeToEdit;
		if (node !== undefined && node !== null) {
			node.attributes.toSave = true;
			node.attributes.label = newVal;
		}
	},

	addNewItem : function(parent) {
		if (parent === undefined || parent == null) {
			alert("Select parent node");
			return;
		} else {
			parent.leaf = false;
		}
		
		var node = new Ext.tree.TreeNode( {
			text : '... - ...',
			leaf : true,
			parentId: parent.attributes.modelId,
			toSave :false,
			allowDrag : false
		});
		this.mainTree.render();
		if (!parent.isExpanded()) {
			parent.expand(false, /*no anim*/false);
		}
		this.mainTree.render();
		parent.appendChild(node);
		node.enable();
		this.selectedNodeToEdit = node;

	},
	deleteItem : function(node) {
		
		if (node === undefined || node == null) {
			alert("Select node to delete");
			return;
		}
		node.remove();
		this.mainTree.render();
		
	},
	onContextMenu : function(node, e) {
		if (this.menu == null) { // create context menu on first right click
				this.initContextMenu();
			}
		
			if (this.ctxNode) {
				this.ctxNode.ui.removeClass('x-node-ctx');
				this.ctxNode = null;
			}
		
			this.ctxNode = node;
			this.ctxNode.ui.addClass('x-node-ctx');
			this.menu.showAt(e.getXY());
		
		}

});

