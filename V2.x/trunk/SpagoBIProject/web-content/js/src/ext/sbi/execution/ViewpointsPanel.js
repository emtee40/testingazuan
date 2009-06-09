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

Ext.ns("Sbi.execution");

Sbi.execution.ViewpointsPanel = function(config) {
	
	// always declare exploited services first!
	var params = {LIGHT_NAVIGATOR_DISABLED: 'TRUE', SBI_EXECUTION_ID: null};
	this.services = new Array();
	this.services['getViewpointsService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'GET_VIEWPOINTS_ACTION'
		, baseParams: params
	});
	this.services['deleteViewpointService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'DELETE_VIEWPOINTS_ACTION'
		, baseParams: params
	});
	
	
    this.viewpointsStore = new Ext.data.JsonStore({
        root: 'results'
        , idProperty: 'id'
        , fields: ['name', 'owner', 'description', 'scope', 
                   {name:'creationDate', type:'date', dateFormat: Sbi.config.clientServerDateFormat}, 
                   'parameters'
                   ]
		, url: this.services['getViewpointsService']
    }); 
    
    this.applyColumn = new Ext.grid.ButtonColumn({
	       header:  '',
	       dataIndex: 'delete',
	       iconCls: 'icon-execute',
	       clickHandler: function(e, t) {
	          var index = this.grid.getView().findRowIndex(t);
	          var selectedRecord = this.grid.viewpointsStore.getAt(index);
	          var viewpointId = selectedRecord.get('id');
	          alert(selectedRecord.get('parameters'));
	          this.grid.fireEvent('executionrequest', viewpointId);
	       },
	       width: 25,
	       renderer : function(v, p, record){
	           return '<center><img class="x-mybutton-'+this.id+' grid-button ' +this.iconCls+'" width="16px" height="16px" src="'+Ext.BLANK_IMAGE_URL+'"/></center>';
	       }
	});
    
    this.sm = new Ext.grid.CheckboxSelectionModel();
    
   
	var c = Ext.apply({}, config, {
        store: this.viewpointsStore
        , columns: [
              {header: LN('sbi.execution.viewpoints.name'), sortable: true, dataIndex: 'name'}
            , {header: LN('sbi.execution.viewpoints.description'), sortable: true, dataIndex: 'description'}
            , {header: LN('sbi.execution.viewpoints.owner'), sortable: true, dataIndex: 'owner'}
            , {header: LN('sbi.execution.viewpoints.scope'), sortable: true, dataIndex: 'scope'}
            , {header: LN('sbi.execution.viewpoints.creationDate'), sortable: true, dataIndex: 'creationDate', renderer: Ext.util.Format.dateRenderer(Sbi.config.localizedDateFormat)} 
            , this.applyColumn
            , this.sm
        ]
        , plugins: this.applyColumn
		, viewConfig: {
        	forceFit: true
		}
        , tbar:[
           '->'
           , {
        	   text: LN('sbi.execution.subobjects.deleteSelected')
        	   , tooltip: LN('sbi.execution.subobjects.deleteSelectedTooltip')
        	   , iconCls:'icon-remove'
        	   , scope: this
        	   , handler : this.deleteSelectedSubObjects
           	}
        ]
        , collapsible: false
        , title: LN('sbi.execution.viewpoints.title')
        , autoScroll: true
        , sm : this.sm
        , height: 200
	});   
	
	// constructor
    Sbi.execution.ViewpointsPanel.superclass.constructor.call(this, c);
    
    this.on('rowdblclick', this.onRowDblClick, this);
    
    this.addEvents('executionrequest');
    
};

Ext.extend(Sbi.execution.ViewpointsPanel, Ext.grid.GridPanel, {
	
	services: null
	, viewpointsStore: null
	, sm: null
	, executionInstance: null
	 
    // public methods
	
	, synchronize: function( executionInstance ) {
		this.viewpointsStore.load({params: executionInstance});
		this.executionInstance = executionInstance;
	}

	, deleteSelectedSubObjects: function() {
		var recordsSelected = this.getSelectionModel().getSelections();
		if (recordsSelected && recordsSelected.length > 0) {
			var ids = new Array();
			for (var count = 0; count < recordsSelected.length; count++) {
				ids[count] = recordsSelected[count].get('id');
			}
			var idsJoined = ids.join(',');
			
			/*
			Ext.Ajax.request({
		        url: this.services['deleteViewpointsService'],
		        params: {'SBI_EXECUTION_ID': this.executionInstance.SBI_EXECUTION_ID, 'id': idsJoined},
		        callback : function(options , success, response) {
		  	  		if(success) {
		  	  			// removes the subobjects from the store
		  	  			for (var count = 0; count < recordsSelected.length; count++) {
		  	  				this.subObjectsStore.remove(recordsSelected[count]);
		  	  			}
		  	  		} else { 
		  	  			Sbi.exception.ExceptionHandler.showErrorMessage('Cannot detele customized views', 'Service Error');
		  	  		}
		        },
		        scope: this,
				failure: Sbi.exception.ExceptionHandler.handleFailure      
			});
			*/
			alert('deleteSelectedSubObjects: ' + idsJoined);
		} else {
			Sbi.exception.ExceptionHandler.showWarningMessage(LN('sbi.execution.subobjects.noSubObjectsSelected'), 'Warning');
		}
	}
	
	, onRowDblClick: function (grid, rowIndex, event) {
	    	var selectedRecord =  grid.getStore().getAt(rowIndex);
	    	var viewpointId = selectedRecord.get('id');
	    	alert(selectedRecord.get('parameters').toSource());
	    	this.fireEvent('executionrequest', viewpointId);
	    }
	
});