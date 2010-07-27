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
Ext.ns("Sbi.kpi");

Sbi.kpi.ManageModels = function(config) { 
	var paramsList = {MESSAGE_DET: "MODEL_NODES_LIST"};
	var paramsSave = {LIGHT_NAVIGATOR_DISABLED: 'TRUE',MESSAGE_DET: "MODEL_NODES_SAVE"};
	
	this.configurationObject = {};
	
	this.configurationObject.manageTreeService = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'MANAGE_MODELS_ACTION'
		, baseParams: paramsList
	});	
	this.configurationObject.saveTreeService = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'MANAGE_MODELS_ACTION'
		, baseParams: paramsSave
	});
	
	this.initConfigObject();
	config.configurationObject = this.configurationObject;

	var c = Ext.apply({}, config || {}, {});

	Sbi.kpi.ManageModels.superclass.constructor.call(this, c);	 	
	
}

Ext.extend(Sbi.kpi.ManageModels, Sbi.widgets.TreeDetailForm, {
	
	configurationObject: null
	, gridForm:null
	, mainElementsStore:null
	, root:null

	,initConfigObject: function(){
	/*
		this.configurationObject.root = "model1";
		this.configurationObject.rootId = "1";*/
		this.configurationObject.treeTitle = LN('sbi.models.listTitle');;
	
		this.configurationObject.panelTitle = LN('sbi.models.panelTitle');
		this.configurationObject.listTitle = LN('sbi.models.listTitle');
		
		this.initTabItems();
    }

	,initTabItems: function(){
		//Store of the combobox
 	    this.typesStore = new Ext.data.SimpleStore({
 	        fields: ['typeId', 'typeCd'],
 	        data: config.nodeTypesCd,
 	        autoLoad: false
 	    });
		/*DETAIL FIELDS*/

	 	   this.detailFieldName = new Ext.form.TextField({
	          	 maxLength:100,
	        	 minLength:1,
	        	 regex : new RegExp("^([a-zA-Z1-9_\x2F])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString'),
	             fieldLabel: LN('sbi.generic.name'),
	             allowBlank: false,
	             //validationEvent:true,
	             name: 'name'
	         });
	 			  
	 	   this.detailFieldCode = new Ext.form.TextField({
	          	 maxLength:45,
	        	 minLength:1,
	        	 regex : new RegExp("^([A-Za-z0-9_])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString2'),
	             fieldLabel:LN('sbi.generic.code'),
	             allowBlank: false,
	             //validationEvent:true,
	             name: 'code'
	         });  
	 		   
	 	   this.detailFieldDescr = new Ext.form.TextArea({
	          	 maxLength:400,
	       	     width : 250,
	             height : 80,
	        	 regex : new RegExp("^([a-zA-Z1-9_\x2F])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString'),
	             fieldLabel: LN('sbi.generic.descr'),
	             //validationEvent:true,
	             name: 'description'
	         });
	 	 		   
	 	   this.detailFieldLabel = new Ext.form.TextField({
	        	 minLength:1,
	        	 regex : new RegExp("^([A-Za-z0-9_])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString2'),
	             fieldLabel:LN('sbi.generic.label'),
	             allowBlank: false,
	             //validationEvent:true,
	             name: 'label'
	         });	  
	 	 	 			  
	 	   this.detailFieldKpi = new Ext.form.TextField({
	        	 minLength:1,
	        	 regex : new RegExp("^([A-Za-z0-9_])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString2'),
	             fieldLabel: LN('sbi.generic.kpi'),
	             allowBlank: false,
	             readOnly: true,
	             //validationEvent:true,
	             name: 'kpi'
	         });	 
	 		   
	 	   this.detailFieldNodeType =  new Ext.form.ComboBox({
	        	  name: 'typeCd',
	              store: this.typesStore,
	              fieldLabel: LN('sbi.generic.nodetype'),
	              displayField: 'typeCd',   // what the user sees in the popup
	              valueField: 'typeId',        // what is passed to the 'change' event
	              typeAhead: true,
	              forceSelection: true,
	              mode: 'local',
	              triggerAction: 'all',
	              selectOnFocus: true,
	              editable: false,
	              allowBlank: false
	              //,validationEvent:true
	          });
	 	  this.detailFieldTypeDescr = new Ext.form.TextArea({
	          	 maxLength:400,
	       	     width : 250,
	             height : 80,
	        	 regex : new RegExp("^([a-zA-Z1-9_\x2F])+$", "g"),
	        	 regexText : LN('sbi.roles.alfanumericString'),
	             fieldLabel: LN('sbi.generic.nodedescr'),
	             //validationEvent:true,
	             name: 'typeDescr'
	         });
	 	   /*END*/
	   this.configurationObject.tabItems = [{
		        title: LN('sbi.generic.details')
		        , itemId: 'detail'
		        , width: 430
		        , items: {
			   		 id: 'items-detail1',   	
		 		   	 itemId: 'items-detail1',   	              
		 		   	 columnWidth: 0.4,
		             xtype: 'fieldset',
		             labelWidth: 90,
		             defaults: {width: 140, border:false},    
		             defaultType: 'textfield',
		             autoHeight: true,
		             autoScroll  : true,
		             bodyStyle: Ext.isIE ? 'padding:0 0 5px 15px;' : 'padding:10px 15px;',
		             border: false,
		             style: {
		                 "margin-left": "10px", 
		                 "margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0"  
		             },
		             items: [this.detailFieldName, this.detailFieldCode, this.detailFieldDescr,
		                     this.detailFieldLabel, this.detailFieldKpi, this.detailFieldNodeType, this.detailFieldTypeDescr]
		    	}
		    }];
	}
	
    //OVERRIDING save method
	,save : function() {
    	var jsonStr = '[';

		Ext.each(this.nodesToSave, function(node, index) {
			if(node instanceof Ext.tree.TreeNode){
				//alert(node.attributes.name);
				jsonStr += Ext.util.JSON.encode(node.attributes);
				jsonStr +=',';
			}
		});
		/*
		var lastcomma = jsonStr.lastIndexOf(',', jsonStr.length-2) ;
		if(lastcomma != -1 ){
			jsonStr.substring(0,lastcomma);
		}*/
		jsonStr += ']';
		
		var params = {
			nodes : jsonStr
		};

		Ext.Ajax.request( {
			url : this.services['saveTreeService'],
			success : function(response, options) {
				alert('Operation succeded');
				if(response.responseText !== undefined) {
	      			var content = Ext.util.JSON.decode( response.responseText );
	      			alert(content);
	      			///contains error gui ids
	      			Ext.each(content, function(node, index) {
	      				if(node instanceof Ext.tree.TreeNode){
	      					Ext.getCmp(node.id).attributes.error = true;
	      				}
	      			});
	      			this.mainTree.render();
				}
			},
			scope : this,
			failure : function(response) {
				if(response.responseText !== undefined) {
					alert("Error");
				}
			},
			params : params
		});
		
    }

});
