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

/* *
 * @author Andrea Gioia (andrea.gioia@eng.it)
 * @author Amit Rana (amit.rana@eng.it)
 * @author Gaurav Jauhri (gaurav.jauhri@eng.it)
 * 
 */
 
/**
 * Class for creating the Tree Widget
 */
qx.Class.define("spagobi.ui.Tree", {
          
          extend: qx.ui.tree.Tree,
          
          /**
          * Constructor of Customized class
          * <p> It creates a Tree with the root name as the string passed to it
          * <p><p>
          * <p> Structure of object passed as parameter :                    
          * <p> config :{
          * <p>         root : String
          * <p>        }
          * <p><p>
          * 
          * <p> *Example :- *
          * <p> var myTree = new spagobi.ui.Tree("Root");
          * 
          * @param config - Object with properties described above
          * 
          */ 
          construct : function(config) {
          	
          	 var trs = qx.ui.tree.TreeRowStructure.getInstance().standard(config.root);
		     this.base(arguments, trs);
          	
          },
          
          members: {
          		   _nodeId : 0,
          		   nameText: undefined,
          		   atom: undefined,
          		   insertWin: undefined,
          		   
          		  /**
	               * Function to show a Context Menu associated to the node when it is clicked
	               * <p> It is called by a generic event handler associated with the tree
	               * <p><p>
	               * <p> *Example :- *
	               * <p> var myTree = new spagobi.ui.Tree({root: "Root"});
	               * <p> myTree.addEventListener("click",myTree.onClickMenu,myTree);
	               *                                                                                     	               
	               */                               
	               onClickMenu: function(e){
	               		
	               		//alert(this.getSelectedElement());  //working
	               		
	               		//alert(this.getSelectedElement().label);//error
	               		//var node = e.getValue();//error
	               		//var node = this.getSelectedElement();
	               		//alert("clicked: " + e.getTarget() + "tree node: " + this.getSelectedElement());
	               		//alert("left:" + this.getSelectedElement().getLeft() + ", width: " + this.getSelectedElement().getWidth());
	               		
	               		var insertCmd = new qx.client.Command();
        				insertCmd.addEventListener("execute", this._insertCmd,this
        													/*
        													function(e) {			// show form, get details ...
        													//alert("Insert");	// ... and call addNode(config)
        													
        													var insertWin = new qx.ui.window.Window("Insert");
        													insertWin.setSpace(200, 400, 200, 250);
        													var d = qx.ui.core.ClientDocument.getInstance();
  															d.add(insertWin);
  															
  															var nameLabel = new qx.ui.basic.Label("Name:");
  															nameLabel.setLocation(50, 50);
  															
  															var nameText = new qx.ui.form.TextField();
  															nameText.setLocation(100, 50);
  															
  															var parentLabel = new qx.ui.basic.Label("Parent:");
  															parentLabel.setLocation(50, 100);
  															
  															var parentText = new qx.ui.form.TextField();
  															parentText.setLocation(100, 100);
  															
  															var goButton = new qx.ui.form.Button("Insert");
													        goButton.setLocation(150, 150);
													        goButton.addEventListener("execute", function(e) {
													          
        													var c = {};
        													c.name = nameText.getValue();
        													c.parent = parentText.getValue();
        													c.id = "node"+this._nodeId;
        													this._nodeId++;
        													this.addNode(c);
													        });
  															
  															insertWin.add(nameLabel,nameText,parentLabel,parentText,goButton);
  															
  															insertWin.open();
        													
        												}*/
        									);
	               		
	               		var deleteCmd = new qx.client.Command();
        				deleteCmd.addEventListener("execute", this.deleteNode,this
        													/*function(e) {			// call deleteNode()
        													alert("Delete");
        													}*/
        									);
        									
	               		var contextMenu = new qx.ui.menu.Menu;
	               		var insertButton = new qx.ui.menu.Button("Insert",null,insertCmd);
	               		var deleteButton = new qx.ui.menu.Button("Delete",null,deleteCmd);
	               		contextMenu.add(insertButton,deleteButton);
	               		var d = qx.ui.core.ClientDocument.getInstance();
  						d.add(contextMenu);
  						//alert(contextMenu.getParent().getVisibility() + ", "+ contextMenu.getParent().getDisplay());
  						//alert(contextMenu.getVisibility() + ", "+ contextMenu.getDisplay());
  						//alert(contextMenu.isSeeable());
  						
  						if (contextMenu.isSeeable())
				          {
				            contextMenu.hide();
				          }
				        else
				          {
				            
				  			var ele = this.getSelectedElement().getElement();
				  			
				  			contextMenu.setLeft(qx.html.Location.getPageBoxRight(ele));
				  			contextMenu.setTop(qx.html.Location.getPageBoxBottom(ele));
				  			//contextMenu.setLeft(178);
				  			//contextMenu.setTop(300);
				  			//contextMenu.setPosition('bottom-left')
				  			//alert(contextMenu.getLeft() +", " +contextMenu.getTop() + ", " + contextMenu.getVisibility() + ""+ contextMenu.getDisplay());
				            //contextMenu.setLeft(qx.bom.element.Location.getRight(ele));
				            //contextMenu.setTop(qx.bom.element.Location.getBottom(ele));
				  					//contextMenu.setLeft(this.getSelectedElement().getLeft()); //not working
				  					//contextMenu.setTop(this.getSelectedElement().getBottom());//not working
				  			//contextMenu.setDisplay(true);
				            contextMenu.show();
				          }
				  
				        // e.stopPropagation(true);	//use ??
				          
	               },
	               
	               /**
	                * Event Listener Function called when the Insert option of Context menu is clicked
	                * <p>It is called internally by the onClickMenu() function
	                * <p><p>
	                * 
	                * <p> *Example :- *
	                * <p> var insertCommand = new qx.client.Command();
        			* <p> insertCommand.addEventListener("execute", this._insertCmd,this);
	                * <p> var insertButton = new qx.ui.menu.Button("Insert",null,insertCommand);
	                * 
	                */
	               _insertCmd: function(e){
	               	
	               		//alert(e);	//Data Event
	               		this.insertWin = new qx.ui.window.Window("Insert");
						this.insertWin.setSpace(200, 400, 200, 250);
						var d = qx.ui.core.ClientDocument.getInstance();
						d.add(this.insertWin);
						
						var nameLabel = new qx.ui.basic.Label("Name:");
						nameLabel.setLocation(50, 50);
						
						this.nameText = new qx.ui.form.TextField();	//global .. MAYBE can make LOCAL .. try
						this.nameText.setLocation(100, 50);
						this.atom = new qx.ui.basic.Atom();
						this.atom.add(this.nameText);
						this.atom.setUserData('newNodeName',this.nameText);
						//this.nameText.setUserData('newNodeName',nameText);
						
						/*
						var parentLabel = new qx.ui.basic.Label("Parent:");
						parentLabel.setLocation(50, 100);
						
						var parentText = new qx.ui.form.TextField();
						parentText.setLocation(100, 100);
						*/
						
						var goButton = new qx.ui.form.Button("Insert");
				        goButton.setLocation(150, 150);
				        goButton.addEventListener("execute", this._insertDetails,this
				        /*
				        function(e) {
				          
						var c = {};
						c.name = nameText.getValue();
						c.parent = parentText.getValue();
						c.id = "node"+this._nodeId;
						this._nodeId++;
						this.addNode(c);
				        }*/);
						
						this.insertWin.add(nameLabel,this.nameText/*,parentLabel,parentText*/,goButton);
						this.insertWin.open();
						
						//alert("Window "+insertWin);									//window
						//alert("Type: " + typeof(insertWin));						//object
						//alert("children count: "+ insertWin.getChildrenLength()); 	//1
						//alert(insertWin.getChildren());								//vertical Box layout
	               },
	              
	              /**
	               * Event Listener function to get the details of the new node to be created
	               * <p> It is called internally by the _insertCmd() function
	               */ 
	               _insertDetails: function(e){
	               		
						var btn = e.getTarget();
	               		//alert( btn.getParent());// canvousLayout
	               		//var win = btn.getParent();
	               		//alert("children count: "+win.getChildrenLength());
	               		//var nameText = win.getChildren()[1];
	               		//var parentText = win.getChildren()[3] ;
	               		
						var c = {};
						c.name = this.atom.getUserData('newNodeName').getValue(); //"Report";(working)
						c.parent = this.getSelectedElement();
						c.id = "node"+this._nodeId;
						this._nodeId++;
						this.addNode(c);
						this.insertWin.close();
						//this.setSelectedElement(null);
						// working
						
	               },
	               	
	      		  /**
	               * Function to add a Sub-folder(Leaf or Non-Leaf Node) in the tree
	               * <p> It also adds the checkbox field if set as true in the object property	               
	               * <p> It returns the reference of the created Node of type TreeFolder or TreeFile
	               * <p><p>                 	  
	               * <p> Structure of the object passed as parameter :                             
	               * <p> config : {
	               * <p>            name 	  : String (Name of the Node),
	               * <p>            init_icon : image path in double quotes (Icon to be shown when Node appears) - optional,
	               * <p>            click_icon: image path (Icon to be shown when Node is clicked) - optional,
	               * <p>            parent 	  : TreeFolder (Parent node to which new Node will be added),
	               * <p>            id 		  : String (to identify the Node of the tree),
	               * <p>            checkBox  : Boolean (if Checkbox is required or not) - optional,
	               * <p>            file	  : Boolean (true to indicate File Node)
	               * <p>         }
	               * <p>
                   * *Example :-* 
                   * The below code cretaes the tree as :		Root
                   * 											 -- 	SubFolder1
                   * 											 -- |_| SubFolder2	
                   * 														-- |_| File1
                   * var myTree = new spagobi.ui.Tree({root: "Root" });
                   * var node1 = myTree.addNode({
                   * 							name  : "SubFolder1",
		  		   *  						   	parent: myTree,
		  		   *						   	id	 : "node1"	
  				   *			     		   });
  				   * var node2 = myTree.addNode({
		  		   *							name  : "SubFolder2",
		  		   *							parent: myTree,
		  		   *							id	  : "node2",
		  		   *							init_icon: "icon/16/places/user-trash.png",
		  		   *							click_icon: "",
		  		   *							checkBox  : true	
  				   *							});
  				   * var node3 = myTree.addNode({
				   *	  						name  : "File1",
				   *	  						parent: node2,
				   *	  						id	  : "node3",
				   *	  						checkBox: true,
				   *	  						init_icon: "icon/16/places/user-desktop.png",
				   *	  						click_icon: "",
				   *	  						file  : true	
  				   *							});
  				   *							 	
  				   * @param config - Object with properties as described above
  				   * @return {AbstractTreeElement} Reference to the created tree node
  				   * 		     		 
                   */ 
          		 addNode: function(config){
          			
          			var treeRowStructure;
                 	var treeNode;
                 	
                 	if(config.checkBox != undefined){	// to check if its a standard node with just icon and name
                 										// ... or specia node with a icon, checkbox and name 
                 		
                 		treeRowStructure = qx.ui.tree.TreeRowStructure.getInstance().newRow();                 
                 	
                 		if(config.init_icon != undefined && config.click_icon != undefined){
                 			treeRowStructure.addIcon(config.init_icon, config.click_icon);
                 		}
                 		// to add default image 
                 		if (config.checkBox == true){ 
                      		var obj = new qx.ui.form.CheckBox();
                      		treeRowStructure.addObject(obj, true);
                  		}
                  		
                  		treeRowStructure.addLabel(config.name);
                 	}
                 	
                 	else{			// if standard node with just Icon and name
                 		treeRowStructure = qx.ui.tree.TreeRowStructure.getInstance().standard(config.name);
                 	}	 
                  	
                  	if(config.file != undefined){	// to check if node is of type file or folder
                  		if(config.file == true){
                  			treeNode = new qx.ui.tree.TreeFile(treeRowStructure);
                  		}
                  		else{
                  			treeNode = new qx.ui.tree.TreeFolder(treeRowStructure);
                  		}
                  	}
                  	else{							// by default, node is of Folder type
                  		treeNode = new qx.ui.tree.TreeFolder(treeRowStructure);
                  	}                                                  
                  	
                  	config.parent.add(treeNode);
                   	this.setUserData(config.id, treeNode);
                   	return treeNode;
	             },
	             
	             
	             /**
	              * Function to delete a Node from the Tree
	              * <p> It is called by the Context Menu option at a node
	              * <p><p>
	              * 
	              * <p> *Example:-*
	              * <p> var deleteCommand = new qx.client.Command();
        		  *	<p> deleteCommand.addEventListener("execute", this.deleteNode,this);
	              * <p> var deleteButton = new qx.ui.menu.Button("Delete",null,deleteCommand);
	              *                                               	               
	              */
	             deleteNode: function(e){
	             	
	             	var currentItem = this.getManager().getSelectedItem();
	             	
	             	if(currentItem == this){
	             		alert("Root node cannot be deleted");
	             	}
          			else if (currentItem != null) {
	              			currentItem.destroy();
	              			currentItem = null;
          			}
                 },
                 
                 /**
	              * Function to delete a Node from the Tree based on Node id
	              * 
	              * @param id{String} Node-id referring to the selected Node
	              *                                                   	               
	              */
                 deleteNodeById: function(id){
                 	var currentItem = this.getUseData(id);
                 	
                 	//if root then show alert
                 	//else
          			if (currentItem != null) {
              			currentItem.destroy();
              			currentItem = null;
          			}
                 },
                 
                 /**
                  * Function to get the currently selected node of the tree
                  * 
                  * <p>*Example:-*
                  * <p> var myTree = new spagobi.ui.Tree({root: "Root" });
                  * <p> var node3 = myTree.addNode({
						  							name  : "File3",
						  							parent: myTree,
						  							id	  : "node3",
						  							file  : true	
  													});
                  * <p> var n = myTree.getSelectedElement(node3);
                  * 
                  * @return {AbstractTreeElement} - The currently selected Node of the tree
                  */
                 getCurrentNode:function(){
                 	return this.getSelectedElement();
                 }
                 
          }
});