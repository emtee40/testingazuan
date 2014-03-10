/** SpagoBI, the Open Source Business Intelligence suite
 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

/**
 * 
 * The column Hierarchy..
 *
 *     
 *  @author
 *  Alberto Ghedin (alberto.ghedin@eng.it)
 */


Ext.define('Sbi.olap.execution.table.OlapExecutionColumn', {
	extend: 'Sbi.olap.execution.table.OlapExecutionAxisHierarchy',
	
	config:{
		cls: "x-column-header",
		bodyStyle: "background-color: transparent",
		style: "margin-right: 3px;"
	},
	
	subPanelLayout: "hbox",
	
	constructor : function(config) {
		this.initConfig(config);
		if(Sbi.settings && Sbi.settings.olap && Sbi.settings.olap.execution && Sbi.settings.olap.execution.table && Sbi.settings.olap.execution.table.OlapExecutionColumn) {
			this.initConfig(Sbi.settings.olap.execution.OlapExecutionColumn);
		}
		this.callParent(arguments);
	},
	
	/**
	 * Builds the central panel with the name of the Hierarchy
	 */
	buildUpPanelConf: function(){
		var conf = this.callParent();
		return Ext.apply(conf,{height: 13, width: 13, cls: 'left-arrow'});
	},
	
	/**
	 * Builds the central panel with the name of the Hierarchy
	 */
	buildDownPanelConf: function(){
		var conf = this.callParent();
		return Ext.apply(conf,{height: 10,width: 13, cls: 'right-arrow'});
	}
	
});