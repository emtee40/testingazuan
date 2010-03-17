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

Ext.ns("Sbi.chart");


Sbi.chart.SpagoBIChart = function(config) {	
	
	this.bindStoreBeforeSwfInit = config.bindStoreBeforeSwfInit | false;
	
	// because swfInit do not work for spago chart...
	/*
	if(this.bindStoreBeforeSwfInit) {
		this.bindStore(config.store, true);
	} else {
		this.store = config.store;
	}
	*/
	//... always bind store in constructor
	this.bindStore(config.store, true);
	
	if(config.bindStoreBeforeSwfInit) { delete config.bindStoreBeforeSwfInit; }
	if(config.store) { delete config.store; }
	
	
	
	// encode
	var c = Ext.apply({}, config);
	if(c.ownerCt) {
		delete c.ownerCt;
	}
		
	for(p in c) {
		if( (typeof c[p]) === 'object') {
			c[p] = Ext.util.JSON.encode(c[p]);
		}
	}
	
	this.flashVars = Ext.applyIf(c, this.CHART_DEFAULT_CONFIG);
	
	this.flashVars.scale = 'exactfit'; 
	this.flashParams = this.flashParams | {};
	this.flashParams.scale = 'exactfit'; 
	
	
	Sbi.chart.SpagoBIChart.superclass.constructor.call(this, config);
};

Ext.extend(Sbi.chart.SpagoBIChart, Ext.FlashComponent, {
    
	store: null
	, storeMeta: null
	, bindStoreBeforeSwfInit: null
	, url: null
	
	// if it is good for ext chart it is also good for us :)
	, disableCaching: Ext.isIE || Ext.isOpera
    , disableCacheParam: '_dc'
	
	, CHART_BASE_URL: '/SpagoBIConsoleEngine/swf/spagobichart/'
	
	
    // -- public methods -------------------------------------------------------------------
    
   
    
    
    // -- private methods ------------------------------------------------------------------
    
	, initComponent : function(){
		Sbi.chart.SpagoBIChart.superclass.initComponent.call(this);
    	if(!this.url){
        	this.url = this.CHART_BASE_URL + this.CHART_SWF;
    	}
    	if(this.disableCaching){
            this.url = Ext.urlAppend(this.url, String.format('{0}={1}', this.disableCacheParam, new Date().getTime()));
        }
    	   	
    	this.addEvents(
    		'beforerefresh'
    		, 'refresh'
    	);
    	
    	this.autoScroll = true;  	
	}
	
	, isSwfReady: function() {
		return true;
	}

	// never invoked for the moment
	, onSwfReady : function(isReset){
        Ext.chart.Chart.superclass.onSwfReady.call(this, isReset);
        alert('onSwfReady');
        if(!isReset && !this.bindStoreBeforeSwfInit){
        	alert('Bind store');
            this.bindStore(this.store, true);
        }
        
        this.refresh.defer(10, this);
    }


	, refresh: function() {
		if( !this.isSwfReady() ) {
			if(this.bindStoreBeforeSwfInit) {
				// some charts can queue pending data refresh and then apply 
				// them as soon as the swf object is initialized
				this.onPendingRefresh();
			}
			return;
		}
		
		if(this.fireEvent('beforerefresh', this) !== false){
			this.onRefresh();			
			this.fireEvent('refresh', this);
		}
    	
    }
	
	, onRefresh: Ext.emptyFn
	
	, onPendingRefresh: function() {
		alert('Chart is unable to handle incoming data before inizialization');
	}
	
    , bindStore : function(store, initial){
        if(!initial && this.store){
        	this.unbindStore(store !== this.store && this.store.autoDestroy);
        }
        
        if(store){
        	store.on("datachanged", this.refresh, this);
            store.on("add", this.refresh, this);
            store.on("remove", this.refresh, this);
            store.on("update", this.refresh, this);
            store.on("clear", this.refresh, this);
            store.on('metachange', this.onStoreMetaChange, this);
        }
        
        this.store = store;
        if(store && !initial){
            this.refresh();
        }
    }
    
    , unbindStore: function(destroy) {
    	destroy = destroy || false;
    	if(destroy){
            this.store.destroy();
        }else{
            this.store.un("datachanged", this.refresh, this);
            this.store.un("add", this.refresh, this);
            this.store.un("remove", this.refresh, this);
            this.store.un("update", this.refresh, this);
            this.store.un("clear", this.refresh, this);
            this.store.un('metachange', this.onStoreMetaChange, this);
        }
    }
	
	, onStoreMetaChange: function(s, m) {
		this.storeMeta = m;
	}
    
});


Sbi.chart.Multileds = Ext.extend(Sbi.chart.SpagoBIChart, {
	
	CHART_SWF: 'multileds.swf'
	, CHART_DEFAULT_CONFIG: {
		title:'SpagoBI Multileds'
		, fields: Ext.util.JSON.encode([
		    {header: 'Effort Idx',name:'EffortIndex', rangeMaxValue: 100, secondIntervalUb: 66, firstIntervalUb: 10, rangeMinValue: 0}, 
			{header: 'Compet.',name:'Competitiveness', rangeMaxValue: 100, secondIntervalUb: 66, firstIntervalUb: 33, rangeMinValue: 0}, 
			{header: 'Cost Opt.',name:'CostOptimization', rangeMaxValue: 100, secondIntervalUb: 66, firstIntervalUb: 33, rangeMinValue: 0},
			{header: 'Health',name:'Health', rangeMaxValue: 100, secondIntervalUb: 66, firstIntervalUb: 33, rangeMinValue: 0}
		])
	}
		
	, isSwfReady: function() {
		return !!this.swf.loadData;
	}
	
	, onRefresh: function() {
		
			var data = {};
			var rec = this.store.getAt(0);
			if(rec) {
				var fields = this.storeMeta.fields;
				for(var i = 0, l = fields.length, f; i < l; i++) {
					f = fields[i];
					if( (typeof f) === 'string') {
						f = {name: f};
					}
					var alias = f.header || f.name;
					if(alias === 'recNo') continue;
					data[alias] = rec.get(f.name);				
				}
				this.swf.loadData(data);
			}
			
			
	}
});
Ext.reg('chart.sbi.multileds', Sbi.chart.Multileds);


Sbi.chart.Livelines = Ext.extend(Sbi.chart.SpagoBIChart, {
	
	CHART_SWF: 'livelines.swf'
	, CHART_DEFAULT_CONFIG: {
		rangeMinValue: 0
		, rangeMaxValue: 120 
		, stepY: 40
		, domainValueNumber: 18
		, title:'SpagoBI Liveline'
	}
	
	, isSwfReady: function() {
		return !!this.swf.loadData;
	}
	
	, onRefresh: function() {
			var data = {};
			var rec = this.store.getAt(0);
			if(rec) {
				var fields = this.storeMeta.fields;
				for(var i = 0, l = fields.length, f; i < l; i++) {
					f = fields[i];
					if( (typeof f) === 'string') {
						f = {name: f};
					}
					var alias = f.header || f.name;
					if(alias === 'recNo' || !this.isVisible(alias)) continue;
					
					data[alias] = rec.get(f.name);				
				}
				this.swf.loadData(data);
			}
			
	}
	
	// checks if the column is configurated as visible into template
	, isVisible: function(alias){
		if (this.fields === undefined) return true;
		
		for (var i = 0; i < this.fields.length; i++){
			if (alias === this.fields[i] ){
				return true;
			}				
		}
		return false;	
		
	}
});
Ext.reg('chart.sbi.livelines', Sbi.chart.Livelines);


Sbi.chart.Speedometer = Ext.extend(Sbi.chart.SpagoBIChart, {
	
	CHART_SWF: 'speedometer.swf'
	, CHART_DEFAULT_CONFIG: {
		paramWidth: 100
		, paramHeight: 100
		, minValue: 0
		, maxValue: 100
		, lowValue: 33
		, highValue: 66
		, field: 'EffortIndex'
	}
		
	, isSwfReady: function() {
		return !!this.swf.setValue;
	}

	, onRender : function(ct, position) {
		this.flashVars.paramWidth = ct.getWidth();
		this.flashVars.paramHeight = ct.getHeight();
		Sbi.chart.SpagoBIChart.superclass.onRender.call(this, ct, position);
	}
	
	, onRefresh: function() {
		var value;
		var rec = this.store.getAt(0);
		if(rec) {
			var fName = this.store.getFieldNameByAlias(this.flashVars.field);
			value = rec.get(fName);
		}
		this.swf.setValue(value);			
	}
});
Ext.reg('chart.sbi.speedometer', Sbi.chart.Speedometer);

