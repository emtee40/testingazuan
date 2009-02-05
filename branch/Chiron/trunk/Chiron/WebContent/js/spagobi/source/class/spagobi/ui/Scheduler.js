/* *

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

* */

/* *
 * @author Andrea Gioia (andrea.gioia@eng.it)
 * @author Amit Rana (amit.rana@eng.it)
 * @author Gaurav Jauhri (gaurav.jauhri@eng.it)
 
 */
 
 qx.Class.define("spagobi.ui.Scheduler",
{
  //extend : qx.legacy.ui.splitpane.VerticalSplitPane,
  extend : qx.ui.window.Window,
  
  construct : function(type)
  {
  	this.base(arguments,"Details Window", "qx/icon/Oxygen/16/apps/office-calendar.png");
    this.setLayout(new qx.ui.layout.VBox(20));
    this.setShowStatusbar(true);
	this.setStatus("Details loaded");
	this.open();
	this.setModal(true);
	
	if (type.getColumn() <= 2){
	 return ;
	}
  	else {

			if (type.getColumn() == 4){
					 
			var textfield1 = spagobi.commons.WidgetUtils.createInputTextField({
								        		type: 'text',
								        		dataIndex: 'name',
								        		text: 'Name',
								        		labelwidth: 100,
								        		mandatory: true	
								        	});
			this.add(textfield1);
					 
			var textfield2 = spagobi.commons.WidgetUtils.createInputTextField({
								        		type: 'text',
								        		dataIndex: 'description',
								        		text: 'Description',
								        		labelwidth: 100,
								        		mandatory: false
								        	});
					
			this.add(textfield2);									        

			var box = new qx.ui.container.Composite;
			box.setLayout(new qx.ui.layout.HBox(10));
			this.add(box, {flex:1});
			
			this.treeFunction = spagobi.app.data.DataService.loadTreeNodes();
			this.tree1 = new spagobi.ui.Tree(this.treeFunction.treeStructure.root);	
			
			for(var p in this.treeFunction.treeStructure){	//check as for..in is changed in v0.8.1
				if(p != 'root'){
					this.tree1.addNode(this.treeFunction.treeStructure[p]);
				}
			}	
				
			box.add(this.tree1);
			
			this.tree1.addListener("dblclick",this.treeLabel,this);	//changeSelection
			
			this.config.formList = {
					schedule : "Scheduler",
					val : "Functionalities"
       		/*	type: 'formList',
        		dataIndex: 'features',
        		formList: spagobi.ui.custom.FeatureDetailsForm  */
        	}
				this.inputField = spagobi.commons.WidgetUtils.createInputFormList(this.config);
        	
        	var box1 = new qx.ui.container.Scroll().set({
					    width: 200,
					    height: 200
					  });
        	
			box1.add(this.inputField);
			box.add(box1,{flex:1});
			//box.add(this.inputField);
        	  
        	  
        /*	  
        	  var tabView = new qx.ui.tabview.TabView;
      		  box.add(tabView);//, {flex:1}
      				
      	      var page1 = new qx.ui.tabview.Page('tab-', "qx/icon/Oxygen/16/actions/edit-delete.png");
      		  tabView.add(page1);
      		  page1.setLayout(new qx.ui.layout.Grow())
      				
        	   var textfield3 = spagobi.commons.WidgetUtils.createInputTextField({
								        		type: 'text',
        		dataIndex: 'customer',
        		text: 'Customer',
        		mandatory: false	
								        	});
				
				page1.add(textfield3);
				
				*/
				
				}
				
				//
				else {
					// can also override the container
					var m = new spagobi.ui.custom.MasterDetailsPage("datasource");//"datasource"
					var records = spagobi.app.data.DataService.loadDatasourceRecords();
					var form = new spagobi.ui.custom.DatasourceDetailsForm();
					m.setForm(form);
					var window_table = new spagobi.ui.Table(m, records);
					this.add(window_table);
					this.add(form);
					 
				}
				
		  	}
		  	
		 this.container = new qx.ui.container.Composite();
	     this.container.setLayout(new qx.ui.layout.HBox(10));
	     this.add(this.container);
	     this.textfield3 = spagobi.commons.WidgetUtils.createInputTextField({
								        		type: 'text',
								        		dataIndex: 'description',
								        		text: 'Choose Date',
								        		labelwidth: 100,
								        		mandatory: false
								        	});
					
//		this.textfield3.setUserData('type', 'text');	
			
		 this.container.add(this.textfield3);
		 var chooser = new qx.ui.control.DateChooser();
		 this.container.add(chooser);
		 chooser.addListener("changeDate",this._OnDate, this);
		 var dateField = new qx.ui.form.DateField();
         var format = new qx.util.format.DateFormat("dd.MM.yyyy");
         dateField.setDateFormat(format);
         dateField.setDate(new Date());
         this.add(dateField);
  	
  	
  },
  
  	members :
  {
  	config : {},
  	tree1 : undefined,
  	nodeLabel: undefined,
    inputField: undefined,
    inputField3: undefined, 
    container : undefined,
  	treeFunction: undefined,
  	
  	treeLabel : function(e){
		    	
		//    	alert("1");
		    	var item = this.tree1.getSelectedItem();
		//    	alert(item);
		    	if(item instanceof qx.ui.tree.TreeFile){
		    		this.nodeLabel = item.getLabel();
		    	//	alert("debug 1"+this.nodeLabel);
	//	    		alert(typeof(this.nodeLabel) );
		    		this.inputField.addInstance(this.nodeLabel);
		    //		alert("debug 2"+this.nodeLabel);
		    		
		    	}
		    },
		    
	_OnDate : function(e){
		
		
		// 	var object = this.container.getChildren()[0];
		// 	alert(e.getData().toString());//(object.setValue(String value));
		// 	alert(typeof this.textfield3.getUserData('field'));
		// 	if(this.textfield3.getUserData('type') === 'text')
		// 	this.textfield3.dataMappings[dataIndex].getUserData('field');
		// 	alert(e.getData().toString());
		 	var dummy = e.getData().toString();
	//	 	alert (typeof dummy === "string");
		 	var obj = this.textfield3.getUserData('field');
		 	var obj1 = obj.getChildren()[0];
		 	obj1.setValue(dummy);
	//	 	obj1.setvalue();
		 	
		// 	.setvalue();
		// 	.getChildren()[0].setValue(e.getData());
		// 	object.setValue(e.getData().toString());
		 //	this.container.getChildren()[0]
		 /*	var obj = new spagobi.ui.Form;
		 	var container1 = obj.getInputField(textfield3.dataIndex).getUserData('field');
		 	var object = obj.getChildren()[0];
		 	//if( obj.getInputField(textfield3.dataIndex).getUserData('type') === 'text')
         object.setValue(e.getData());
    */
		
	}
  }
  
});
  