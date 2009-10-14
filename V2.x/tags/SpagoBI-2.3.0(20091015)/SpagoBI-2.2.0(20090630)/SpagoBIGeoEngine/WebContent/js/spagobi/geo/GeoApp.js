/**
  * ...
  * by Andrea Gioia
  */
 
 
// create application
Sbi.geo.app = function() {
    // do NOT access DOM from here; elements don't exist yet
 
    // private variables
     
    // private functions

 
    // public space
    return {
        // public properties, e.g. strings to translate
        
        serviceRegistry: undefined
        
        , saveAnalysisWin: undefined
        
        // public methods
        , init: function( config ) {
            Ext.QuickTips.init();
            
            var messageBoxBuddy =  new Sbi.commons.ComponentBuddy({
				buddy : Ext.MessageBox.getDialog()
			});
			messageBoxBuddy.hide();
            
            
            var drillPanel = new Sbi.geo.DrillControlPanel(config);
           
            var viewport = new Ext.Viewport({
              layout: 'border',
              border: false,
              items: [
              { // CENTER REGION ---------------------------------------------------------
                region: 'center',
                title: 'Document',                
                //collapsible: true,
                collapsed: false,
                split: true,
                autoScroll: false,
                height: 100,
                minHeight: 100,
                width: 100,
                minWidth: 0,
                layout: 'fit',
                
                tools:[
                {
                    id:'plus',
                    qtip:'Export as image',
                    handler: function(event, toolEl, panel){
                    
                    	var form = document.getElementById('form');
						form.action = Sbi.geo.app.serviceRegistry.getServiceUrl('DRAW_MAP_ACTION');
						form.action += '&' + Ext.urlEncode({outputFormat:'jpeg', inline:false});
						form.submit(); 
                     
                     /*
                      Ext.Ajax.request({
                      	url: Sbi.geo.app.serviceRegistry.getServiceUrl('DRAW_MAP_ACTION')
                    	, success: function() {
                    		// do nothings	
                    	}
						, failure: Sbi.commons.ExceptionHandler					
						, params: {outputFormat:'jpeg', inline:false}
                    });
                    */
                    }
                }, {
                    id:'save',
                    handler: function(event, toolEl, panel){
                      if(this.saveAnalysisWin === undefined) {
                      	var sequence = new Sbi.commons.ServiceSequence({
                      	  	onSequenceExecuted: function(response) {
                      			var content = Ext.util.JSON.decode( response.responseText );
								content.text = content.text || "";
								if (content.text.match('OK - ')) {
									Ext.MessageBox.show({
						           		title: 'Customized view saved'
						           		, msg: 'Customized view saved succesfully !!!'
						           		, buttons: Ext.MessageBox.OK     
						           		, icon: Ext.MessageBox.INFO 
						           		, modal: false
						       		});
									// for old execution interface
									try {
										parent.loadSubObject(window.name, content.text.substr(5));
									} catch (ex) {
										//Sbi.commons.ExceptionHandler.showErrorMessage( ex.toSource() );
									}
									// for new ExtJs-based execution interface
									try {
										sendMessage("Subobject saved!!!!","subobjectsaved");
									} catch (ex) {
									}
								}
                      		} 
                      		, onSequenceExecutedScope: this  
                      	})
                      	
                      	
                      	this.saveAnalysisWin = new Sbi.geo.SaveAnalysisWindow({
                      		saveServiceSequence : sequence      		                   		
                      	});
                      	
                      	sequence.add({
		                	url: Sbi.geo.app.serviceRegistry.getServiceUrl('SET_ANALYSIS_STATE_ACTION')
							, failure: Sbi.commons.ExceptionHandler.handleFailure
							, params: drillPanel.getAnalysisState
							, scope: drillPanel
						});
						sequence.add({
		                    url: Sbi.geo.app.serviceRegistry.getServiceUrl('SAVE_ANALYSIS_STATE_ACTION')
							, failure: Sbi.commons.ExceptionHandler.handleFailure
							, params: this.saveAnalysisWin.getAnalysisMeta
							, scope: this.saveAnalysisWin
						}); 
						sequence.add({
		                	url: Sbi.geo.app.serviceRegistry.getServiceUrl('SET_ANALYSIS_STATE_ACTION')
							, failure: Sbi.commons.ExceptionHandler.handleFailure
							, params: drillPanel.getAnalysisState
							, scope: drillPanel
						}); 
						 
                      }
                      this.saveAnalysisWin.show();
                    }
                } , {
                    id:'gear',
                    handler: function(event, toolEl, panel){
                    	
                    	Ext.Ajax.request({
                    		url: Sbi.geo.app.serviceRegistry.getServiceUrl('SET_ANALYSIS_STATE_ACTION')
                    		, success: function() {
                    			
                    			var iframeEl = Ext.get('iframe_1');
                    			//iframeEl.applyStyles({'background-color': 'white'});
                    			iframeEl.dom.src = Sbi.geo.app.serviceRegistry.getServiceUrl('DRAW_MAP_ACTION');
                    		}
							, failure: Sbi.commons.ExceptionHandler					
							, params: drillPanel.getAnalysisState
							, scope: drillPanel 
                    	});   
                    }
                }, {
                    id:'help',
                    qtip:'Help me please',
                    // hidden:true,
                    handler: function(event, toolEl, panel){
                      alert('Version 2.0.0M1');
                    }
                  }],
                
                
                bodyCfg: {
        					tag:'div',
          				cls:'x-panel-body',
          				children:[{
          					tag:'iframe',
          					src: Sbi.geo.app.serviceRegistry.getServiceUrl('DRAW_MAP_ACTION'),
          	      			//src: 'AdapterHTTP?ACTION_NAME=DRAW_MAP_ACTION',
          	      			frameBorder:0,
          	      			width:'100%',
          	      			height:'100%',
          	      			id: 'iframe_1',
          	      			style: 'background-color:white;',
          	      			name: 'iframe_1'
        	 				   }]
      	 				}
                //contentEl : 'docPanel'  
              }, /*{ // EAST REGION -----------------------------------------------------------
              region: 'east',
              title: 'East Panel',
              collapsible: true,
              collapsed: true,
              hideCollapseTool: true,
              titleCollapse: true,
              collapseMode: 'mini',
              split: true,
              autoScroll: true,
              height: 100,
              minHeight: 100,
              width: 200,
              minWidth: 100,
              
              tools:[{
                id:'refresh',
                qtip:'Refresch map',
                handler: function(event, toolEl, panel){
                	
                }
              }],
              
              //items: [east]
              html: ''
            }, */
            { // WEST REGION -----------------------------------------------------------
              region: 'west',
              //title: 'Control Panel',
              border: false,
              margins: '0 0 0 5',
              collapsible: true,
              collapsed: false,
              hideCollapseTool: true,
              titleCollapse: true,
              collapseMode: 'mini',
              split: true,
              autoScroll: false,
              width: 250,
              minWidth: 250,
              layout: 'fit',
                            
              items: [drillPanel]
              //html: ''
            } /*, 
            { // WEST REGION -----------------------------------------------------------
              region: 'south',
              title: 'Log',
              collapsible: true,
              collapsed: true,
              hideCollapseTool: true,
              titleCollapse: true,
              collapseMode: 'mini',
              split: true,
              height: 100,
              minHeight: 100,
              layout: 'fit',
                    
              //items: [south]
              html: ''
            }, 
            { // NORT HREGION -----------------------------------------------------------
              region: 'north',
              title: 'Header Panel',
              collapsible: true,
              collapsed: true,
              hideCollapseTool: true,
              titleCollapse: true,
              collapseMode: 'mini',
              split: true,
              autoScroll: false,
              height: 100,
              minHeight: 100,
              layout: 'fit',
                            
              //items: [west]
              html: ''
            } */
            ]
          });           
        }
    };
}(); // end of app
 
// end of file
