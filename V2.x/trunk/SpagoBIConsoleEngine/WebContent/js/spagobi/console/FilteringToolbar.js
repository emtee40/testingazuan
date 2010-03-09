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
  * - Antonella Giachino (antonella.giachino@eng.it)
  */

Ext.ns("Sbi.console");

Sbi.console.FilteringToolbar = function(config) {

	var defaultSettings = {
	    autoWidth: true
	  , width:'100%'
	};
		
	if(Sbi.settings && Sbi.settings.console && Sbi.settings.console.filteringToolbar) {
		defaultSettings = Ext.apply(defaultSettings, Sbi.settings.console.filteringToolbar);
	}
	
	var c = Ext.apply(defaultSettings, config || {});
	Ext.apply(this, c);
		
	/*
	this.services = this.services || new Array();	
	this.services['doThat'] = this.services['doThat'] || Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'DO_THAT_ACTION'
		, baseParams: new Object()
	});
	*/
	
	//c = Ext.apply(c, {});
	
	// constructor
	Sbi.console.FilteringToolbar.superclass.constructor.call(this, c);
    	
	//	this.addEvents();
};

Ext.extend(Sbi.console.FilteringToolbar, Ext.Toolbar, {
    
	services: null
	, store: null
	, cbStores: null
	, filters: null

	
	// -- public methods -----------------------------------------------------------------
    
    
	// -- private methods ---------------------------------------------------------------

	, onRender : function(ct, position) { 
		  Sbi.console.FilteringToolbar.superclass.onRender.call(this, ct, position);
	}
	//adds action buttons
	, addActionButtons: function(){
  	    var b;
  	    var conf = {}; 
        conf.executionContext = this.filterBar.executionContext;     
		this.addFill();
		if (this.filterBar.actions){
      		for(var i=0; i < this.filterBar.actions.length; i++){
      		   conf.actionConf = this.filterBar.actions[i];
    		   b = new Sbi.console.ActionButton(conf);
        	   this.addButton(b);	
        	}	
        }
  }
  
  //reset the toolbar (delete every elements)
  , cleanFilterToolbar: function(){
      if (this.cbStores !== null ){
         delete this.cbStores; 
         /*
          this.items.each( function(item) {
              this.items.remove(item);
                  item.destroy();           
              }, this);
          */    
      }
  
    }
   
   
   , reloadComboStore: function(dataIdx) {
      var distinctValues = this.store.collect(dataIdx);  
      var data = [];
      for(var i = 0, l = distinctValues.length; i < l; i++) {
        var row = {};
        row.name = distinctValues[i];
        row.value = distinctValues[i];
        row.description = distinctValues[i];
        data.push(row);
      }
   
      this.cbStores[dataIdx].loadData(data);
   }
   
   , filterGrid: function(f, exp) {
	   this.store.clearFilter(true);
	   //alert("filterGrid: " + f + " - " + exp);
	   
	   if (this.filters === null){
		   this.filters = {};
	   }
	   //alert(this.filters.toSource());
	   this.filters[f] = exp;
	   this.store.filter(f, exp);
	  
   }
   
   //defines fields depending from operator type
  , createFilterField: function(operator, header, dataIndex){
     if (operator === 'EQUALS_TO'){
      
	     this.cbStores = this.cbStores || []; 
	     var s = new Ext.data.JsonStore({
	           fields:['name', 'value', 'description'],
	           data: []
	     });
	     this.cbStores[dataIndex] = s;
	  
	     this.store.on('load', this.reloadComboStore.createDelegate(this, [dataIndex]), this);
	     //store.ready is true only after the first load, so in next reloads the toolbar's items aren't re-designed!
	     if (this.store.ready !== true){
		     var cb = new Ext.form.ComboBox({
		              	        store: s,
		              	        width: 130,
		              	        displayField:'name',
		              	        valueField:'value',
		              	        typeAhead: true,
		              	        triggerAction: 'all',
		              	        emptyText:'...',
		              	        selectOnFocus:true,
		              	        mode: 'local',
		              	        index: dataIndex,
		              	       	listeners: {
						        	'select': {
									   fn: function(combo, record, index) {
							                 var field = combo.index;
							                 var exp = record.get(combo.valueField);
							                 this.filterGrid(field, exp);							                
							            },
						    			scope: this
						     		}				     					
						         }
		              	    });	
		     
		      this.addText("    " + header + "  ");
		      this.addField(cb);	 
	     }
     }
  
  }

  
});