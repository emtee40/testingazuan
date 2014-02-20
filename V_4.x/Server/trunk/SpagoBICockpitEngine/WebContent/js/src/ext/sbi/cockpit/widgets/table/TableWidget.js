/** SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

Ext.ns("Sbi.cockpit.widgets.table");

Sbi.cockpit.widgets.table.TableWidget = function(config) {	
	Sbi.trace("[TableWidget.constructor]: IN");
	
	var defaultSettings = {
		displayInfo: false,
		pageSize: 50,
		sortable: false,
		sortMode: 'remote', // remote | local | auto
		layout: 'fit',
		timeout: 300000,
		split: true,
		collapsible: false,
		padding: '0 0 0 0',
		autoScroll: false,
		frame: false, 
		border: false,
		sortable: false,
		gridConfig: {
			height: 400,
			//autoHeight: true // setting autoHeight to true, scrollbars do not appear (ExtJS sets overflow : visible to the element style)
			clicksToEdit:1,
		    //style:'padding:10px',
		    frame: false,
		    border:false,
		    autoScroll: true,
		    collapsible: false,
		    loadMask: true,
		    viewConfig: {
		    	forceFit:false,
		        autoFill: true,
		        enableRowBody:true,
		        showPreview:true
		    },
		    layout: "fit"
		},
		queryLimit: {
			maxRecords: 1000
			, isBlocking: false
		}
	};
			
	var settings = Sbi.getObjectSettings('Sbi.cockpit.widgets.table.TableWidget', defaultSettings);
	var c = Ext.apply(settings, config || {});
	Ext.apply(this, c);
	
	this.initServices();
	this.init();
	
	this.addEvents('contentloaded');
	
	c = Ext.apply(c, {
		items: [this.grid]
	});

	
	Sbi.cockpit.widgets.table.TableWidget.superclass.constructor.call(this, c);
	
	this.on("render", function(){
		this.store.load();
		Sbi.trace("[TableWidget.onRender]: store loaded");
	}, this);
	
	Sbi.trace("[TableWidget.constructor]: OUT");
};

/**
 * @cfg {Object} config
 * ...
 */
Ext.extend(Sbi.cockpit.widgets.table.TableWidget, Sbi.cockpit.core.Widget, {
    
	// =================================================================================================================
	// PROPERTIES
	// =================================================================================================================
	
	/**
     * @property {Array} services
     * This array contains all the services invoked by this class
     */
	services: null
    
    // =================================================================================================================
	// METHODS
	// =================================================================================================================
	
    // -----------------------------------------------------------------------------------------------------------------
    // public methods
	// -----------------------------------------------------------------------------------------------------------------
    
	, setStoreId: function(storeId) {
		Sbi.trace("[TableWidget.setStoreId]: IN");
		Sbi.cockpit.widgets.table.TableWidget.superclass.setStoreId.call(this, storeId);
		this.services['loadDataStore'] = Sbi.config.serviceRegistry.getServiceUrl({
			serviceName : 'api/1.0/dataset/' + this.getStoreId() + '/data'
			, baseParams: new Object()
		});
		
		this.proxy.setUrl(this.services['loadDataStore'], true);
		if(this.rendered === true) {
			this.refresh();
		}
		
		Sbi.trace("[TableWidget.setStoreId]: OUT");
	}

	, refresh:  function() {  
		Sbi.trace("[TableWidget.refresh]: IN");
		this.store.removeAll();
		this.store.baseParams = {};
		var requestParameters = {start: 0, limit: this.pageSize};
		this.store.load({params: requestParameters});
		this.doLayout();
		Sbi.trace("[TableWidget.refresh]: OUT");
	}

	// -----------------------------------------------------------------------------------------------------------------
    // private methods
	// -----------------------------------------------------------------------------------------------------------------

	//------------------------------------------------------------------------------------------------------------------
	// utility methods
	// -----------------------------------------------------------------------------------------------------------------
	, onRender: function(ct, position) {	
		Sbi.trace("[TableWidget.onRender]: IN");
		
		this.msg = 'Sono un widget di tipo TABLE';
		
		Sbi.cockpit.widgets.table.TableWidget.superclass.onRender.call(this, ct, position);	
		
		Sbi.trace("[TableWidget.onRender]: OUT");
	}
	
	
	, onStoreLoad: function(store) {
		Sbi.trace("[TableWidget.onStoreLoad]: IN");
		
		this.fireEvent('contentloaded');
		
		var recordsNumber = store.getTotalCount();
     	if(recordsNumber == 0) {
     		Ext.Msg.show({
				   title: LN('sbi.qbe.messagewin.info.title'),
				   msg: LN('sbi.qbe.datastorepanel.grid.emptywarningmsg'),
				   buttons: Ext.Msg.OK,
				   icon: Ext.MessageBox.INFO,
				   modal: false
			});
     	}
     	 
     	if (this.queryLimit.maxRecords !== undefined && recordsNumber > this.queryLimit.maxRecords) {
     		if (this.queryLimit.isBlocking) {
     			Sbi.exception.ExceptionHandler.showErrorMessage(this.warningMessageItem, LN('sbi.qbe.messagewin.error.title'));
     		} else {
     			this.warningMessageItem.show();
     		}
     	} else {
     		this.warningMessageItem.hide();
     	}
     	Sbi.trace("[TableWidget.onStoreLoad]: OUT");		
	}
	
	, onStoreLoadException: function(response, options) {
		this.fireEvent('contentloaded');
		Sbi.exception.ExceptionHandler.handleFailure(response, options);
	}
	
	, onStoreMetaChange: function(store, meta) {
		Sbi.trace("[TableWidget.onStoreMetaChange]: IN");	
		for(var i = 0; i < meta.fields.length; i++) {
			this.applyRendererOnField(meta, i);
			this.applySortableOnField(meta, i);
		}
		meta.fields[0] = new Ext.grid.RowNumberer();
		this.grid.getColumnModel().setConfig(meta.fields);
		Sbi.trace("[TableWidget.onStoreMetaChange]: OUT");	
	}
	
	, applyRendererOnField: function(meta, fieldIndex) {
		Sbi.trace("[TableWidget.applyRendererOnField]: IN");	
		if(meta.fields[fieldIndex].type) {
			var t = meta.fields[fieldIndex].type;
			if (meta.fields[fieldIndex].format) { // format is applied only to numbers
				Sbi.trace("[TableWidget.applyRendererOnField]: cpA");	
				var format = Sbi.commons.Format.getFormatFromJavaPattern(meta.fields[fieldIndex].format);
				var formatDataSet = meta.fields[fieldIndex].format;
				if((typeof formatDataSet == "string") || (typeof formatDataSet == "String")){
					try {
						formatDataSet =  Ext.decode(meta.fields[fieldIndex].format);
					} catch(e) {
						formatDataSet = meta.fields[fieldIndex].format;
					}
				}
				var f = Ext.apply( {}, Sbi.locale.formats[t]);
				f = Ext.apply( f, formatDataSet);
	
				numberFormatterFunction = Sbi.qbe.commons.Format.numberRenderer(f);
			} else {
				Sbi.trace("[TableWidget.applyRendererOnField]: cpB");	
				numberFormatterFunction = Sbi.locale.formatters[t];
			}	
			
			Sbi.trace("[TableWidget.applyRendererOnField]: cp1");	
			
			if (meta.fields[fieldIndex].measureScaleFactor && (t === 'float' || t ==='int')) { // format is applied only to numbers
			   this.applyScaleRendererOnField(numberFormatterFunction,meta.fields[fieldIndex]);
			} else {
			   meta.fields[fieldIndex].renderer = numberFormatterFunction;
			}
		}
		
		if(meta.fields[fieldIndex].subtype && meta.fields[fieldIndex].subtype === 'html') {
		   meta.fields[fieldIndex].renderer  =  Sbi.locale.formatters['html'];
		}
		
		Sbi.trace("[TableWidget.applyRendererOnField]: cp3");	
		
		if(meta.fields[fieldIndex].subtype && meta.fields[fieldIndex].subtype === 'timestamp') {
		   meta.fields[fieldIndex].renderer  =  Sbi.locale.formatters['timestamp'];
		}
		
		Sbi.trace("[TableWidget.applyRendererOnField]: OUT");	
	}
	
	, applyScaleRendererOnField: function(numberFormatterFunction, field) {
		
		Sbi.trace("[TableWidget.applyScaleRendererOnField]: IN");	
		
		var scaleFactor = field.measureScaleFactor;
		
		if(scaleFactor!=null && scaleFactor!=null && scaleFactor!='NONE'){
			var scaleFactorNumber;
			switch (scaleFactor){
				case 'K':
					scaleFactorNumber=1000;
					break;
				case 'M':
					scaleFactorNumber=1000000;
					break;
				case 'G':
					scaleFactorNumber=1000000000;
					break;
				default:
					scaleFactorNumber=1;
			}
		
			field.renderer = function(v){
				 var scaledValue = v/scaleFactorNumber;
				 return numberFormatterFunction.call(this,scaledValue);	
			};
			
			field.header = field.header +' '+ LN('sbi.worksheet.config.options.measurepresentation.'+scaleFactor);
		} else {
			field.renderer =numberFormatterFunction;
		}
		
		Sbi.trace("[TableWidget.applyScaleRendererOnField]: OUT");	
	}
	
	, applySortableOnField: function(meta, fieldIndex) {
		Sbi.trace("[TableWidget.applySortableOnField]: IN");	
		if(this.sortable === false) {
		   meta.fields[fieldIndex].sortable = false;
		} else {
		   if(meta.fields[fieldIndex].sortable === undefined) { // keep server value if defined
			   meta.fields[fieldIndex].sortable = true;
		   }
		}
		Sbi.trace("[TableWidget.applySortableOnField]: OUT");	
	}
	
	
   // -----------------------------------------------------------------------------------------------------------------
   // init methods
   // -----------------------------------------------------------------------------------------------------------------
   
	/**
	 * @method 
	 * 
	 * Initialize the following services exploited by this component:
	 * 
	 *    - none
	 */
	, initServices: function() {
		this.services = this.services || new Array();	
		this.services['loadDataStore'] = this.services['loadDataStore'] || Sbi.config.serviceRegistry.getServiceUrl({
			serviceName : 'api/1.0/dataset/' + this.getStoreId() + '/data'
			, baseParams: new Object()
		});
		
		this.services['exportDataStore'] = this.services['exportDataStore'] || Sbi.config.serviceRegistry.getServiceUrl({
			serviceName: 'EXPORT_RESULT_ACTION'
			, baseParams: new Object()
		});
	}


	/**
	 * @method 
	 * 
	 * Initialize the GUI
	 */
	, init: function() {
		Sbi.trace("[TableWidget.init]: IN");
		this.initStore();
		this.initGridPanel();
		Sbi.trace("[TableWidget.init]: OUT");
	}
	
	/**
	 * @method 
	 * 
	 * Initialize the store
	 */
	, initStore: function() {
		Sbi.trace("[TableWidget.initStore]: IN");
		var numberFormatterFunction;
		
		this.proxy = new Ext.data.HttpProxy({
			url: this.services['loadDataStore']
	    	, timeout : this.timeout
	    	, failure: this.onStoreLoadException
	    });
		
		this.store = new Ext.data.Store({
	        proxy: this.proxy,
	        reader: new Ext.data.JsonReader(),
	        remoteSort: true
	    });
		
		this.store.on('metachange', this.onStoreMetaChange, this);
		this.store.on('load', this.onStoreLoad, this);
		Sbi.trace("[TableWidget.initStore]: OUT");
	}

	/**
	 * @method 
	 * 
	 * Initialize the grid
	 */
	, initGridPanel: function() {
		Sbi.trace("[TableWidget.initGridPanel]: IN");
		var cm = new Ext.grid.ColumnModel([
			new Ext.grid.RowNumberer(), 
			{
				header: "Data",
				dataIndex: 'data',
				width: 75
			}
		]);
		
		
		this.exportTBar = new Ext.Toolbar({
			items: [
			    new Ext.Toolbar.Button({
		            tooltip: LN('sbi.qbe.datastorepanel.button.tt.exportto') + ' pdf',
		            iconCls:'pdf',
		            //handler: this.exportResult.createDelegate(this, ['application/pdf']),
		            handler: function(){Ext.Msg.alert('Message', 'Export to pdf');},
		            scope: this
			    }),
			    new Ext.Toolbar.Button({
		            tooltip:LN('sbi.qbe.datastorepanel.button.tt.exportto') + ' rtf',
		            iconCls:'rtf',
		            //handler: this.exportResult.createDelegate(this, ['application/rtf']),
		            handler: function(){Ext.Msg.alert('Message', 'Export to rtf');},
		            scope: this
			    }),
			    new Ext.Toolbar.Button({
		            tooltip:LN('sbi.qbe.datastorepanel.button.tt.exportto') + ' xls',
		            iconCls:'xls',
		            //handler: this.exportResult.createDelegate(this, ['application/vnd.ms-excel']),
		            handler: function(){Ext.Msg.alert('Message', 'Export to xls');},
		            scope: this
			    }),
			    new Ext.Toolbar.Button({
		            tooltip:LN('sbi.qbe.datastorepanel.button.tt.exportto') + ' csv',
		            iconCls:'csv',
		            //handler: this.exportResult.createDelegate(this, ['text/csv']),
		            handler: function(){Ext.Msg.alert('Message', 'Export to csv');},
		            scope: this
			    }),
			    new Ext.Toolbar.Button({
		            tooltip:LN('sbi.qbe.datastorepanel.button.tt.exportto') + ' jrxml',
		            iconCls:'jrxml',
		            //handler: this.exportResult.createDelegate(this, ['text/jrxml']),
		            handler: function(){Ext.Msg.alert('Message', 'Export to jrxml');},
		            scope: this
			    })
			]
		});
		
		this.warningMessageItem = new Ext.Toolbar.TextItem('<font color="red">' 
				+ LN('sbi.qbe.datastorepanel.grid.beforeoverflow') 
				+ ' [' + this.queryLimit.maxRecords + '] '
				+ LN('sbi.qbe.datastorepanel.grid.afteroverflow') 
				+ '</font>');
		
		
		this.pagingTBar = new Ext.PagingToolbar({
            pageSize: this.pageSize,
            store: this.store,
            displayInfo: this.displayInfo,
            displayMsg: LN('sbi.qbe.datastorepanel.grid.displaymsg'),
            emptyMsg: LN('sbi.qbe.datastorepanel.grid.emptymsg'),
            beforePageText: LN('sbi.qbe.datastorepanel.grid.beforepagetext'),
            afterPageText: LN('sbi.qbe.datastorepanel.grid.afterpagetext'),
            firstText: LN('sbi.qbe.datastorepanel.grid.firsttext'),
            prevText: LN('sbi.qbe.datastorepanel.grid.prevtext'),
            nextText: LN('sbi.qbe.datastorepanel.grid.nexttext'),
            lastText: LN('sbi.qbe.datastorepanel.grid.lasttext'),
            refreshText: LN('sbi.qbe.datastorepanel.grid.refreshtext')
        });
		this.pagingTBar.on('render', function() {
			this.pagingTBar.addItem(this.warningMessageItem);
			this.warningMessageItem.setVisible(false);
			//this.pagingTBar.loading.setVisible(false); // it does not work with Ext 3.2.1
		}, this);
		
		var gridConf = {};
		if(this.gridConfig!=null){
			gridConf = this.gridConfig;
		}
		
		// create the Grid
	    this.grid = new Ext.grid.GridPanel(Ext.apply({
	    	store: this.store,
	        cm: cm,
	        //tbar:this.exportTBar,
	        bbar: this.pagingTBar
	    },gridConf));   
	    
	    Sbi.trace("[TableWidget.initGridPanel]: OUT");
	}
});


Sbi.registerWidget('table', {
	name: 'Table'
	, icon: 'js/src/ext/sbi/cockpit/widgets/table/table_64x64_ico.png'
	, runtimeClass: 'Sbi.cockpit.widgets.table.TableWidget'
	, designerClass: 'Sbi.cockpit.widgets.table.TableWidgetDesigner'
	//, designerClass: 'Ext.Panel'
});