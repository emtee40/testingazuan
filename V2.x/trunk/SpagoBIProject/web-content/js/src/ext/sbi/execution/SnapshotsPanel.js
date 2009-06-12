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

Ext.ns("Sbi.execution");

Sbi.execution.SnapshotsPanel = function(config) {
	
	var c = Ext.apply({
		// defaults
	}, config || {});
	
	// always declare exploited services first!
	var params = {LIGHT_NAVIGATOR_DISABLED: 'TRUE', SBI_EXECUTION_ID: null};
	this.services = new Array();
	this.services['getSnapshotsService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'GET_SNAPSHOTS_ACTION'
		, baseParams: params
	});
	this.services['deleteSnapshotsService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'DELETE_SNAPSHOTS_ACTION'
		, baseParams: params
	});
	
	this.snapshotPreference = c.snapshot;
	
	this.selectedSnapshotId = null;
	
    this.snapshotsStore = new Ext.data.JsonStore({
        root: 'results'
        , idProperty: 'id'
        , fields: ['id', 'name', 'description', {name:'creationDate', type:'date', dateFormat: Sbi.config.clientServerDateFormat}]
		, url: this.services['getSnapshotsService']
    });
    
    this.executeColumn = new Ext.grid.ButtonColumn({
	       header:  '',
	       dataIndex: 'delete',
	       iconCls: 'icon-execute',
	       clickHandler: function(e, t) {
	          var index = this.grid.getView().findRowIndex(t);
	          var selectedRecord = this.grid.snapshotsStore.getAt(index);
	          var snapshotId = selectedRecord.get('id');
	          this.grid.fireEvent('executionrequest', snapshotId);
	       },
	       width: 25,
	       renderer : function(v, p, record){
	           return '<center><img class="x-mybutton-'+this.id+' grid-button ' +this.iconCls+'" width="16px" height="16px" src="'+Ext.BLANK_IMAGE_URL+'"/></center>';
	       }
	});
    
    this.sm = new Ext.grid.CheckboxSelectionModel();
    
    this.tbar = null;
    
    if (Sbi.user.functionalities.contains('DocumentAdminManagement')) {
    	this.tbar = [
         '->'
         , {
      	   text: LN('sbi.execution.snapshots.deleteSelected')
      	   , tooltip: LN('sbi.execution.snapshots.deleteSelectedTooltip')
      	   , iconCls:'icon-remove'
      	   , scope: this
      	   , handler : this.deleteSelectedSnapshots
         }
      ];
    }
    
	c = Ext.apply({}, c, {
        store: this.snapshotsStore
        , columns: [
            {id: "id", header: "Id", sortable: true, dataIndex: 'id',  hidden: true}
            , {header: LN('sbi.execution.snapshots.name'), sortable: true, dataIndex: 'name'}
            , {header: LN('sbi.execution.snapshots.description'), sortable: true, dataIndex: 'description'}
            , {header: LN('sbi.execution.snapshots.creationDate'), sortable: true, dataIndex: 'creationDate', renderer: Ext.util.Format.dateRenderer(Sbi.config.localizedDateFormat)} 
            , this.executeColumn
            , this.sm
        ]
        , plugins: this.executeColumn
		, viewConfig: {
        	forceFit: true
		}
		, tbar: this.tbar
        , collapsible: false
        , title: LN('sbi.execution.snapshots.title')
        , autoScroll: true
        , sm : this.sm
        , height: 200
	});
	
	// constructor
    Sbi.execution.SnapshotsPanel.superclass.constructor.call(this, c);
    
    this.on('rowdblclick', this.onRowDblClick, this);
    
    this.addEvents('executionrequest');
    
};

Ext.extend(Sbi.execution.SnapshotsPanel, Ext.grid.GridPanel, {
	
	services: null
	, snapshotsStore: null
	, executionInstance: null
	, selectedSnapshotId: null
	   
    // public methods
	
	, synchronize: function( executionInstance ) {
		this.snapshotsStore.load({params: executionInstance});
		this.executionInstance = executionInstance;
		// if there is a preference for a subobject execution, fire executionrequest event
		if (this.snapshotPreference !== undefined && this.snapshotPreference.name !== undefined) {
			this.snapshotsStore.on(
				'load', 
				this.checkPreferences,
				this
			);
		}
	}

	

	, deleteSelectedSnapshots: function() {
		var recordsSelected = this.getSelectionModel().getSelections();
		if (recordsSelected && recordsSelected.length > 0) {
			var ids = new Array();
			for (var count = 0; count < recordsSelected.length; count++) {
				ids[count] = recordsSelected[count].get('id');
			}
			var idsJoined = ids.join(',');
	
			Ext.Ajax.request({
		        url: this.services['deleteSnapshotsService'],
		        params: {'SBI_EXECUTION_ID': this.executionInstance.SBI_EXECUTION_ID, 'id': idsJoined},
		        callback : function(options , success, response) {
		  	  		if(success) {
			      		if (response && response.responseText !== undefined) {
			      			var content = Ext.util.JSON.decode( response.responseText );
			      			if (content !== undefined && content.result == 'OK') {
				  	  			// removes the snapshots from the store
				  	  			for (var count = 0; count < recordsSelected.length; count++) {
				  	  				this.snapshotsStore.remove(recordsSelected[count]);
				  	  			}
			      			} else {
				      			Sbi.exception.ExceptionHandler.showErrorMessage('Error while deleting scheduled executions', 'Service Error');
				      		}
			      		} else {
			      			Sbi.exception.ExceptionHandler.showErrorMessage('Error while deleting scheduled executions', 'Service Error');
			      		}
		  	  		} else {
		  	  			Sbi.exception.ExceptionHandler.showErrorMessage('Cannot detele scheduled executions', 'Service Error');
		  	  		}
		        },
		        scope: this,
				failure: Sbi.exception.ExceptionHandler.handleFailure      
			});
		} else {
			Sbi.exception.ExceptionHandler.showWarningMessage(LN('sbi.execution.snapshots.noSnapshotsSelected'), 'Warning');
		}
	}
	
	, findByNameAndHistoryNumber: function(name, historyNumber) {
		var historyCounter = -1;
		for (var count = 0; count < this.snapshotsStore.getCount(); count++) {
			var aRecord = this.snapshotsStore.getAt(count);
			if (aRecord.get('name') == name) {
				historyCounter++;
				if (historyCounter == historyNumber) {
					return aRecord;
				}
			}
		}
		return null;
	}
	
	//private methods
	
	, onRowDblClick: function(grid, rowIndex, event) {
		var selectedRecord =  grid.getStore().getAt(rowIndex);
		var snapshotId = selectedRecord.get('id');
		this.fireEvent('executionrequest', snapshotId);
	}
	
	, checkPreferences: function () {
		// get the required snapshot from the store
		var record = this.findByNameAndHistoryNumber(this.snapshotPreference.name, this.snapshotPreference.historyNumber);
		if (record != null) {
			var snapshotId = record.get('id');
	    	this.fireEvent('executionrequest', snapshotId);
		} else {
			Sbi.exception.ExceptionHandler.showErrorMessage('Scheduled execution \'' + this.snapshotPreference.name + '\' not found ', 'Configuration Error');
		}
		// reset preference variable
		delete this.snapshotPreference;
		// remove the listener
		this.snapshotsStore.un(
				'load', 
				this.checkPreferences,
				this
		);
	}
	
});