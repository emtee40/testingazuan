/** SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

Ext.define('Sbi.tools.scheduler.TriggerInfoWindow', {
	extend: 'Ext.Window'
		
		,config: {    	  	     	
	    	width: 600,
			height: 350

	    } 
		
		,constructor: function(config, data) {
			this.initConfig(config);
			this.initTabPanel(data);
			this.callParent(arguments);

		}
		
		, initTabPanel: function(data){
			var localConf = {};	
			localConf.activeTab = 0;
			localConf.height = this.height;
			localConf.border = false;
			
			var tabsItems = [];
			
			var parsedData = JSON.parse(data);
			if ((parsedData.documents != null) && (parsedData.documents != undefined)){
				for (var i = 0; i< parsedData.documents.length; i++){
					var document = parsedData.documents[i];
					var docLabel = document.documentLabel;
					var mailTos= '<b>Mail to:</b> '+document.mailTos;
					
					var item = {
							title: docLabel,
							html: mailTos,
			                bodyPadding: 10
					}
					tabsItems.push(item);
					
					
				}
			}

			
			
			localConf.items = tabsItems;
			
	    	this.tabPanel = Ext.create('Ext.TabPanel', localConf);
	    	this.items = [this.tabPanel];
		}
		
		
});	