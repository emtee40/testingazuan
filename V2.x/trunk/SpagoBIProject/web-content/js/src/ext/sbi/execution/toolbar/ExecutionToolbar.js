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

Ext.ns("Sbi.execution.toolbar");

Sbi.execution.toolbar.ExecutionToolbar = function(config) {
	
	// always declare exploited services first!
	var params = {LIGHT_NAVIGATOR_DISABLED: 'TRUE', SBI_EXECUTION_ID: null};
	this.services = new Array();
	this.services['getToolbarButtonsVisibilityService'] = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'GET_TOOLBAR_BUTTONS_VISIBILITY_ACTION'
		, baseParams: params
	});
	
	//this.buttons = this.createRoleSelectionButtons();
	

	
	var c = Ext.apply({}, config, {
		items: [{
			iconCls: 'icon-execute'
			, scope: this
			, handler : function() {
				this.fireEvent('rolesformsubmit');
			}
		}]
	}); 
    
	
	// constructor
    Sbi.execution.toolbar.ExecutionToolbar.superclass.constructor.call(this, c);
    
    this.addEvents('beforeinit');
    
    this.addEvents('backbuttonclick');
    this.addEvents('rolesformsubmit');
    this.addEvents('parametersformsubmit');
    this.addEvents('saveviewpointbuttonclick');
    this.addEvents('clearparametersbuttonclick');
    this.addEvents('refreshbuttonclick');
    this.addEvents('sendmailbuttonclick');
    this.addEvents('saveintopersonalfolderbuttonclick');
    this.addEvents('saveremembermebuttonclick');
    this.addEvents('notesbuttonclick');
    this.addEvents('metadatabuttonclick');
    this.addEvents('ratingbuttonclick');
    this.addEvents('printbuttonclick');
    
};

Ext.extend(Sbi.execution.toolbar.ExecutionToolbar, Ext.Toolbar, {
	
	pageNumber: null
	, executionInstance: null
	
	, ROLE_SELECTION_PAGE: 0 
	, PARAMETER_SELECTION_PAGE: 1 
	, EXECUTION_PAGE: 2 
	
    , reset: function() {
    	this.items.each(function(item) {
            this.items.remove(item);
            item.destroy();           
        }, this.items); 
    }

	, update: function(pageNumber, executionInstance) {
		
		this.pageNumber = pageNumber;
		this.executionInstance = executionInstance;
				
		this.reset();
		
		this.fireEvent('beforeinit', this, pageNumber, executionInstance);
		
		if (pageNumber === this.ROLE_SELECTION_PAGE) {
			this.addFill();
			this.addRoleSelectionPageButtons();			
		} else if (pageNumber === this.PARAMETER_SELECTION_PAGE) {
			this.addFill();
			this.addParametersSelectionButtons();
		}  else if (pageNumber === this.EXECUTION_PAGE) {
			this.addFill();
			this.addExecutionPageButtons();
		}
	}
	
	, addRoleSelectionPageButtons: function() {
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-execute'
			, scope: this
			, handler : function() {this.fireEvent('rolesformsubmit');}
		}));
		
	}
	
	, addParametersSelectionButtons: function() {
		
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-back' 
		    , scope: this
		    , handler : function() {this.fireEvent('backbuttonclick');}
		}));
		
		this.addSeparator();
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-clear'
		   	, scope: this
		   	, handler : function() {this.fireEvent('clearparametersbuttonclick');}
		}));
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-save'
		   	, scope: this
		   	, handler : function() {this.fireEvent('saveviewpointbuttonclick');}
		}));
			
		this.addSeparator();
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-execute'
			, scope: this
			, handler : function() {this.fireEvent('parametersformsubmit');}
		}));
		
		
		
	
	}
	
	, addExecutionPageButtons: function() {
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-back' 
			    , scope: this
			    , handler : function() {this.fireEvent('backbuttonclick');}
		}));
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-refresh' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('refreshbuttonclick');}			
		}));
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-rating' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('ratingbuttonclick');}	
		}));
		
		this.addButton(new Ext.Toolbar.Button({
			iconCls: 'icon-print' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('printbuttonclick');}
		}));
		
		
		this.loadDocumentViewButtons(this.executionInstance);
		//return [previousButton, refreshButton, ratingButton, printButton];

	}
	
	, loadDocumentViewButtons: function(executionInstance) {
		
		Ext.Ajax.request({
	        url: this.services['getToolbarButtonsVisibilityService'],
	        params: {'SBI_EXECUTION_ID': executionInstance.SBI_EXECUTION_ID},
	        callback : function(options , success, response) {
	  	  		if(success) {
		      		if (response && response.responseText !== undefined) {
		      			var content = Ext.util.JSON.decode( response.responseText );
		      			if (content !== undefined) {
		      				this.addProfiledButtons(content);
		      			} else {
			      			Sbi.exception.ExceptionHandler.showErrorMessage('Cannot load toolbar buttons', 'Service Error');
			      		}
		      		} else {
		      			Sbi.exception.ExceptionHandler.showErrorMessage('Cannot load toolbar buttons', 'Service Error');
		      		}
	  	  		} else { 
	  	  			Sbi.exception.ExceptionHandler.showErrorMessage('Cannot load toolbar buttons', 'Service Error');
	  	  		}
	        },
	        scope: this,
			failure: Sbi.exception.ExceptionHandler.handleFailure      
		});
		
	}
	
	, addProfiledButtons: function(visibility) {
		if (visibility.sendMail) {
			var sendMailButton = new Ext.Toolbar.Button({
				iconCls: 'icon-sendMail' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('sendmailbuttonclick');}
			});
			this.addButton(sendMailButton);
		}
		if (visibility.saveIntoPersonalFolder) {
			var saveIntoPersonalFolderButton = new Ext.Toolbar.Button({
				iconCls: 'icon-saveIntoPersonalFolder' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('saveintopersonalfolderbuttonclick');}
			});
			this.addButton(saveIntoPersonalFolderButton);
		}
		if (visibility.rememberMe) {
			var saveRememberMeButton = new Ext.Toolbar.Button({
				iconCls: 'icon-saveRememberMe' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('saveremembermebuttonclick');}
			});
			this.addButton(saveRememberMeButton);
		}
		if (visibility.notes) {
			var notesButton = new Ext.Toolbar.Button({
				iconCls: 'icon-notes' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('notesbuttonclick');}
			});
			this.addButton(notesButton);
		}
		if (visibility.metadata) {
			var metadataButton = new Ext.Toolbar.Button({
				iconCls: 'icon-metadata' 
		     	, scope: this
		    	, handler : function() {this.fireEvent('metadatabuttonclick');}
			});
			this.addButton(metadataButton);
		}
	}
    
});