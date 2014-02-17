/** SpagoBI, the Open Source Business Intelligence suite
 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

/**
 * 
 * Container for the execution of the olap. 
 * It contains:
 * <ul>
 *		<li>Toolbar</li>
 *		<li>Table</li>
 *		<li>Chart</li>
 *	</ul>
 * 
 *     
 *  @author
 *  Alberto Ghedin (alberto.ghedin@eng.it)
 */


Ext.define('Sbi.olap.execution.OlapExecutionPanel', {
	//class to extends
	extend: 'Ext.panel.Panel',
	layout: 'card',
	
	config:{
		border: false
	},

	/**
     * @property {Sbi.olap.execution.OlapExecutionChart} olapExecutionChart
     *  Container of the chart representation of the data
     */
	olapExecutionChart: null,
	
	/**
     * @property {Sbi.olap.execution.OlapExecutionPivot} olapExecutionPivot
     *  Container of the pivot representation of the data
     */
	olapExecutionPivot: null,
	
	/**
     * @property {Sbi.olap.toolbar.OlapToolbar} olapToolbar
     *  The toolbar
     */
	olapToolbar: null,
	
	constructor : function(config) {
		this.initConfig(config);
		if(Sbi.settings && Sbi.settings.olap && Sbi.settings.olap.execution && Sbi.settings.olap.execution.OlapExecutionPanel) {
			this.initConfig(Sbi.settings.olap.execution.OlapExecutionPanel);
		}
		this.callParent(arguments);
	},
	
	initComponent: function() {
		this.olapExecutionPivot = Ext.create('Sbi.olap.execution.table.OlapExecutionPivot', {});
		this.olapExecutionChart = Ext.create('Sbi.olap.execution.chart.OlapExecutionChart', {});
		this.olapToolbar  = Ext.create('Sbi.olap.toolbar.OlapToolbar', {}); 
		
		Ext.apply(this, {
			items: [this.olapExecutionPivot,this.olapExecutionChart],
			tbar: this.olapToolbar
		});
		this.callParent();
	},
	
	updateAfterMDXExecution: function(pivotHtml){
		this.olapExecutionPivot.olapExecutionTable.updateAfterMDXExecution(pivotHtml);
	}
	
	
});

