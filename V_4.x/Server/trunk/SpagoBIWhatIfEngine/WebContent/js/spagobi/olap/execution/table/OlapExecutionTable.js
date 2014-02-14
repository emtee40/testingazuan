/** SpagoBI, the Open Source Business Intelligence suite
 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

/**
 * 
 * Implementation of the pivot table. This component is only the table.
 *
 *     
 *  @author
 *  Alberto Ghedin (alberto.ghedin@eng.it)
 */


Ext.define('Sbi.olap.execution.table.OlapExecutionTable', {
	extend: 'Ext.panel.Panel',
	layout:'fit',
	html:'<div id="_table_container_" style="height: 100%; width:100%"> table </div>',
	
	config:{
		border: false,
		style: {
			marginLeft: '20px',
			marginTop: '20px'
        }
    },
	

	constructor : function(config) {
		this.initConfig(config);
		if(Sbi.settings && Sbi.settings.olap && Sbi.settings.olap.execution && Sbi.settings.olap.execution.table && Sbi.settings.olap.execution.table.OlapExecutionTable) {
			this.initConfig(Sbi.settings.olap.execution.OlapExecutionTable);
		}
		this.callParent(arguments);
		this.on("render",this.loadTable,this);
	},
	
    /**
     * Updates the html of the panel with the html of the pivot table
     * @param {String} pivotHtml the HTML representation of the pivot to render
     */
	updateAfterMDXExecution: function(pivotHtml){
		this.update(pivotHtml);
	},

	loadTable: function(){
		Ext.Ajax.request({
			url: Sbi.service.Service.mdx(),
			success : function(response, options) {
				if(response !== undefined && response.statusText !== undefined) {
					this.update(response.responseText);
				} else {
					Sbi.exception.ExceptionHandler.showErrorMessage('Server response is empty', 'Service Error');
				}
			},
			scope: this,
			failure: Sbi.exception.ExceptionHandler.handleFailure      
		});
	}
	
});





