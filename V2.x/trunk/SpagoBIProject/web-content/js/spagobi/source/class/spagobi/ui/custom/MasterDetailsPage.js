/*

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 
*/
  
/*
 * TODO generalize the constructor in this way ...
 * 
 * ... construct : function(records, form) {...}
 * 
 * and move the class in the parent package (i.e spagobi.ui)
 */

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */

/**
 * Class to create the page displayed on right side.
 * <p> The page contains a Filter bar, a list and a navigation bar on top and a form at the bottom.   
 */

qx.Class.define("spagobi.ui.custom.MasterDetailsPage",
{
  extend : qx.ui.splitpane.Pane,
  

  /**
   * Constructor to create the page on right side.
   * <p> It splits the given page into 2 parts: top and bottom.
   * <p> Top part - the Filter bar, list and navigation bar are added.
   * <p> Bottom part - the form (based on the button selected in vertical tool bar) is added.
   * 
   * <p>*Example*
   * <p><code>
   * var myForm = new spagobi.ui.custom.MasterDetailsPage('engine');
   * </code>
   * 
   * @param type The name for referring to the selected page. The selected values can be : 
   * (__'engine'__ / __'dataset'__ / __'datasource'__ /  __'mapmgmt'__ / __'featuremgmt'__)
   */
   	
  construct : function(type)
  {
	this.base(arguments,"vertical");
	
	var config = {};

	if(type === 'engine') {
		//this.records = spagobi.app.data.DataService.loadEngineRecords();
		//config.dataset = this.records;
		
		var serviceRegistry = new spagobi.commons.ServiceRegistry();
  		var serviceUrl = serviceRegistry.getServiceUrl('LIST_ENGINES_ACTION');
  		var httpDataProxy = new spagobi.data.DataProxy({
  			url: serviceUrl
  		});
  		config.proxy = httpDataProxy;
  		
		form = new spagobi.ui.custom.EngineDetailsForm(); 
	} else if(type === 'datasource') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'dataset') {
		this.records = spagobi.app.data.DataService.loadDatasetRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasetDetailsForm(); 
	} else if(type == 'mapmgmt') {
		this.records = spagobi.app.data.DataService.loadMapRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.MapDetailsForm(); 
	} else if(type == 'featuremgmt') {
		this.records = spagobi.app.data.DataService.loadFeatureRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.FeatureDetailsForm(); 
	} else if(type == 'lov') {
		this.records = spagobi.app.data.DataService.loadLOVRecords();
		form = new spagobi.ui.custom.LOVDetailsForm(); 
	} else if(type == 'constraints') {
		this.records = spagobi.app.data.DataService.loadLOVRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.ConstraintDetailsForm(); 
	} else if(type == 'parameters') {
		this.records = spagobi.app.data.DataService.loadLOVRecords();
		form = new spagobi.ui.custom.AnalyticalDriverDetailsForm(); 
	} else if(type == 'configuration') {									
		this.records = spagobi.app.data.DataService.loadConfigurationRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DocumentConfigurationForm(); 
	} else if(type == 'link1') {									
		this.records = spagobi.app.data.DataService.loadlink1Records();		
	} else if(type == 'link2') {									
		this.records = spagobi.app.data.DataService.loadlink2Records();	
		config.dataset = this.records;
	} else if(type == 'link3') {									
		this.records = spagobi.app.data.DataService.loadlink3Records();	
		config.dataset = this.records;
	} else if(type === 'distributionList') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'distributionListConfig') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'func') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'workflow') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'event') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'tool') {
		this.records = spagobi.app.data.DataService.loadDatasourceRecords();
		config.dataset = this.records;
		form = new spagobi.ui.custom.DatasourceDetailsForm(); 
	} else if(type === 'schedule') {
		this.records = spagobi.app.data.DataService.loadScheduleRecords();
		config.dataset = this.records;
	} else if(type == 'roles') {									
		this.records = spagobi.app.data.DataService.loadRolesRecords();		
		config.dataset = this.records;
	} else if(type == 'kpi') {									
		this.records = spagobi.app.data.DataService.loadKpiRecords();		
		config.dataset = this.records;
		form = new spagobi.ui.custom.KpiDefinitionForm();
	} else if(type == 'threshold') {									
		this.records = spagobi.app.data.DataService.loadThresholdRecords();		
		config.dataset = this.records;
		form = new spagobi.ui.custom.ThresholdDefinitionForm();
	} 
	
	
	
	this._pagedTable = new spagobi.ui.table.PagedTable(this, config); 
	  
	this.add(this._pagedTable,0);
	   	
	   	
	   	
	if(type != 'roles' && type != 'link1' &&type != 'link2' &&type != 'link3' &&type !='schedule'){ //
	   		
	   	containerBottom = new qx.ui.core.Widget();
	   	var Vbox = new qx.ui.layout.VBox();
	   	Vbox.setSpacing(10);
	   	containerBottom._setLayout(Vbox);
	   	
	   
	   	var formBar = new qx.ui.container.Composite(new qx.ui.layout.HBox);
	   	formBar.setBackgroundColor("#F9F9F9");

	   	
	   	var createButton = new qx.ui.toolbar.Button("", qx.util.AliasManager.getInstance().resolve("spagobi/img/spagobi/test/create.png"));
	    var createToolTip = new qx.ui.tooltip.ToolTip("New");
	    createButton.setToolTip(createToolTip);
	    createButton.addListener("execute", this._onCreate, this);
	   		   	   	
	   	var saveButton = new qx.ui.toolbar.Button("", qx.util.AliasManager.getInstance().resolve("spagobi/img/spagobi/test/save.png"));
	    var saveToolTip = new qx.ui.tooltip.ToolTip("Save");
	    saveButton.setToolTip(saveToolTip);
	    saveButton.addListener("execute", this._onSave, this);
	    
	    var deleteButton = new qx.ui.toolbar.Button("", qx.util.AliasManager.getInstance().resolve("spagobi/img/spagobi/test/delete.png"));
	    var deleteToolTip = new qx.ui.tooltip.ToolTip("Delete");
	    deleteButton.setToolTip(deleteToolTip);
	    deleteButton.addListener("execute", this._onDelete, this);
	    
	    var formBarArray = [createButton, saveButton, deleteButton];//since add() adds only 1 widget at a time
	    
	    for(var i=0; i<formBarArray.length; i++){
	   		formBar.add(formBarArray[i]);
	   		//formBarManager.add(formBarArray[i]);
	    }
	    
	    
	   	containerBottom._add(formBar);
		
	    this._form = form;
	    
	    containerBottom._add(this._form);
	    var scroll = new qx.ui.container.Scroll();
	    scroll.add(containerBottom);
	    scroll.setBackgroundColor("white");
	    
	    this.add(scroll,1);
	   	}
  },

  members :
  {
    _pagedTable : undefined 
    , _form : undefined
    
    // deprecated: TODO change with dataset
    , records : undefined
    
    
    /**
     * Function to get the current form
     * 
     * @return form The selected form 
     */
    , getForm: function() {
    	return this._form;
    }
    
    /**
     * Function to set the current form
     * 
     * @param form The form to be selected 
     */
    , setForm: function(f) {
    	this._form = f;
    }
    
    /**
     * Function to select the object
     * 
     * @param dataObject The data object
     */
    , selectDataObject: function(dataObject) {
    	this._form.setData(dataObject);
    }
    
    
    , _onSave: function (e) {
    	
		if (this.records && this.records.ID != undefined){
    		if (this.records.ID == "ROLES"){
				alert (this._pagedTable._table.getUpdatedData());
			}
    	} else {			
			var engine = this.getForm().getData();
			alert (spagobi.commons.CoreUtils.toStr(engine));
			
			spagobi.dao.DAOFactory.getEngineDAO().saveEngine( engine, {
				success: {
					fn: function(){alert('SUCCESS');}
					, scope: this
				}, failure: {
					fn: function(){alert('FAILURE');}
					, scope: this
				}
			});
			
			/*
			var serviceRegistry = new spagobi.commons.ServiceRegistry();
	  		var serviceUrl = serviceRegistry.getServiceUrl('SAVE_ENGINE_ACTION');
	  		serviceUrl += '&ENGINE=' + qx.util.Json.stringify(data);
			var request = new qx.io.remote.Request(serviceUrl, 'POST', 'application/json');    	
    		request.addListener('completed', function(){alert('SUCCESS: ' + serviceUrl);}, this);
    		request.addListener('failed', function(){alert('FAILURE: ' + serviceUrl);}, this);
    		request.send();
    		alert('request sent to: ' + qx.util.Json.stringify(data));
    		*/
		}
	}	
    
    , _onDelete: function(e) {
    	alert('delete');
    }
    
    , _onCreate: function(e) {
    	alert('create');
    }
    
    
    
    
    // =====================================
    // deprecated methods
    // TODO: refactor asap
    // =====================================
    
    /**
     * Function to print the "property: value" pairs of an object
     * 
     * @param o The object to be printed in the form of property: value pairs
     */
    , printObject: function(o) {
    	var str = '';
    	for(p in o) {
    		str += p + ': ' + o[p] + ';\n'
    	}
    	return str;
    },
    
    //testing for parameter form's getData() function for checkbox list... Don't Delete
    myFunction:function(){
    	this._form.setData({mychecklist: ["eeee","jjjj"]});
    	var o = this._form.getData();
    	var list = "";
    	for(prop in o){
    		if(prop == 'mychecklist'){
    			for(i=0; i<o[prop].length; i++){
    				list = list + o[prop][i]+ ",";
    			}
    		}
    	}
    	alert(list);
    },
    
    //testing for parameter form's getData() function for radio button... Don't Delete
    myRadioFunction:function(){
    	alert("button works");
    	this._form.setData({type: "Number"});
    	var o = this._form.getData();
    	var list = "";
    	for(prop in o){
    		alert("getData gave: " + o[prop]);
    	}
    	
    },
    
    _onClickMenu: function(e){
    	alert("value:" + this.getCurrentNode());	
    },
    
    _onSelectTreeNode:function(e){
    	alert(this + "," + e.getData());
    	this.onClickMenu();
    }
  }
});