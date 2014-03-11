/** SpagoBI, the Open Source Business Intelligence suite
 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

/**
 * 
 * container of the columns definition of the pivot table
 *
 *     
 *  @author
 *  Alberto Ghedin (alberto.ghedin@eng.it)
 */




Ext.define('Sbi.olap.execution.table.OlapExecutionHierarchies', {
	extend: 'Ext.panel.Panel',
			
	config:{
		/**
	     * @cfg {Ext.data.Store} store
	     * The store with the Sbi.olap.execution.table.OlapExecutionHierarchy
	     */
		store: null,
		/**
	     * @cfg {Sbi.olap.execution.table.OlapExecutionPivot} pivotContainer
	     * The container of the columns
	     */
		pivotContainer: null,
		/**
	     * @cfg {String} hierarchyClassName
	     * The name of the children classes
	     */
		hierarchyClassName: null,
		/**
	     * @cfg {Number} axisPosition
	     * The position of the axis
	     */
		axisOrdinalPosition: -1
//		,style: {
//			backgroundColor: "transparent",
//			border: "none"
//		},
//		bodyStyle: {
//			backgroundColor: "transparent"
//		},
	    //cls: "empty-member"
    },
	
    
	constructor : function(config) {
		this.initConfig(config);
		this.store = Ext.create('Ext.data.Store', {
		    model: 'Sbi.olap.HierarchyModel'
		});
		if(Sbi.settings && Sbi.settings.olap && Sbi.settings.olap.execution && Sbi.settings.olap.execution.table && Sbi.settings.olap.execution.table.OlapExecutionHierarchies) {
			this.initConfig(Sbi.settings.olap.execution.OlapExecutionHierarchies);
		}
		this.callParent(arguments);
	},
    
	initComponent: function() {

		if(this.store && this.store.getCount()>0){

			var items = this.getRefreshedItems();
			Ext.apply(this, {items: items});
//			this.removeCls("empty-member");
		}
		Ext.apply(this, {frame: true});
		this.callParent();
	},
	
    /**
     * Adds the Hierarchy from in Hierarchy container
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the Hierarchy to add
     */
	addHierarchy: function(hierarchy){
//		if(this.store.getCount()==0){
//			this.removeCls("empty-member");
//		}
		this.store.add(hierarchy.hierarchy);
		this.refreshItems();
	},
	
    /**
     * Removes the hierarchy from the hierarchy container
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the hierarchy to remove
     */
	removeHierarchy: function(hierarchy){
		this.store.remove(hierarchy.hierarchy);
		this.refreshItems();
//		if(this.store.getCount()==0){
//			this.addCls("empty-member");
//		}
	},
	
    /**
     * Adds the Hierarchy from in Hierarchy container
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the Hierarchy to add
     */
	moveHierarchyToOtherAxis: function(hierarchy){
		
		Sbi.olap.eventManager.moveHierarchy(hierarchy.hierarchy.get("uniqueName"), hierarchy.hierarchy.get("axis"), this.axisOrdinalPosition);
	},
	
	
	/**
     * Moves up the hierarchy
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the hierarchy to move
	 */
	moveUpHierarchy: function(hierarchy){
		this.move(hierarchy, -1);
	},
	
	
	/**
     * Moves down the member
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the hierarchy to move
	 */
	moveDownHierarchy: function(hierarchy){
		this.move(hierarchy, 1);
	},

	/**
     * Moves the model of pos positions
     * @param {Sbi.olap.execution.table.OlapExecutionHierarchy} hierarchy the hierarchy to remove
	 * @param pos the positions 
	 */
	move: function(hierarchy, pos){
		var index = this.store.indexOf(hierarchy.hierarchy);
		
		if((pos+index)>=0 && (pos+index)<this.store.getCount( )){
			Sbi.olap.eventManager.swapHierarchies(index, index+pos, hierarchy.hierarchy.get("axis"));
//			this.store.remove(hierarchy.hierarchy);
//			this.store.insert((index+pos),hierarchy.hierarchy);
//			this.refreshItems();
		}
	},
	
    /**
     * Refresh content
     */
	refreshItems: function(){
		this.removeAll(true);
		
		if(this.store){
			var items = this.getRefreshedItems();
			for(var i=0; i<items.length; i++) {
				this.add(items[i]);
			}
		}
	},
	
    /**
     * Get the refreshed items: builds all the hierarchys starting from the store
     */
	getRefreshedItems: function(){
		var items = new Array();
		
		if(this.store && this.store.getCount()>0){
			var hierarchiesCount = this.store.getCount( );
			for(var i=0; i<hierarchiesCount; i++) {
				var hierarchy = Ext.create(this.hierarchyClassName,{hierarchy: this.store.getAt(i), pivotContainer: this.pivotContainer, containerPanel: this, firstHierarchy: (i==0), lastHierarchy: (i==hierarchiesCount-1) });
				hierarchy.on("moveUp",this.moveUpHierarchy,this);
				hierarchy.on("moveDown",this.moveDownHierarchy,this);
				items.push(hierarchy);
			}
		}
		
		return items;
	},
	
	/**
	 * Updates the visualization after the execution of a a mdx query
	 * @param pivotModel {Array} the list of hierarchies to add
	 * @param axisOrdinalPosition {Number} the ordinal position of the axis
	 */
	updateAfterMDXExecution: function(hierarchies, axisOrdinalPosition){
		this.axisOrdinalPosition = axisOrdinalPosition;
		this.store.removeAll();
		if(hierarchies){
			for(var i=0; i<hierarchies.length; i++){
				this.store.add(Ext.create("Sbi.olap.HierarchyModel", hierarchies[i]));
			}
		}
		this.refreshItems();
	}
	
});





