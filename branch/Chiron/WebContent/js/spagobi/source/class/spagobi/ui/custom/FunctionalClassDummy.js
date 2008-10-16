qx.Class.define("spagobi.ui.custom.FunctionalClassDummy",
{
  extend : qx.ui.splitpane.HorizontalSplitPane,
  
  construct : function(type)
  {
   
    this.base(arguments,"1*","4*");//, "2*"); //  180
    this.setWidth("100%");
    this.setHeight("100%");
    this.setLiveResize(true);
    
    
   
   if(type === 'funcManagement') { 
    	var leftPart = new qx.ui.layout.VerticalBoxLayout();
  		leftPart.setWidth("100%");
   		leftPart.setHeight("100%");
    	leftPart.setOverflow("auto"); 
    	leftPart.setBackgroundColor('white');
    	leftPart.setBorder(new qx.ui.core.Border(1));
    	
  		var headerLabel = new qx.ui.basic.Label("Functionalities Tree");
  		with(headerLabel){
  			width = 200;
  			height = 300;
  		};
  		
  	
  	var tree = new spagobi.ui.Tree({root: "Functionalities" });
  	/*
  	with(tree)
        {
          setBackgroundColor("white");
          //setBorder("inset");
          setOverflow("auto");
  
          setWidth('100%');
    	  setHeight('1*');
        };
  	*/
  	
  	var node1 = tree.addNode({
		  							name  : "Report",
		  							parent: tree,
		  							//id	  : "node1",
		  							data  : {
		  							 			label : 'ReportLabel',
		  							 			name  : 'ReportName',
		  							 			desc  : 'ReportDesc'
		  							 		}
		  					});
		  					
						
  		var node2 = tree.addNode({
		  							name  : "OLAP",
		  							parent: tree,
		  							//id	  : "node2",
		  							data  : {
		  							 			label : 'OLAPLabel',
		  							 			name  : 'OLAPName',
		  							 			desc  : 'OLAPDesc'
		  							 		}
  								});
  		var node3 = tree.addNode({
		  							name  : "myOLAP",
		  							parent: node2, //tree.getUserData("OLAP").getUsedData('node'),//
		  							//id	  : "node3",
		  							//file  : true,
		  							data  : {
		  							 			label : 'myOLAP Label',
		  							 			name  : 'myOLAP Name',
		  							 			desc  : 'myOLAP Desc'
		  							 		}
  								});
  		var node4 = tree.addNode({
		  							name  : "DashBoard",
		  							parent: tree,
		  							//id	  : "node4",
		  							//init_icon: "icon/16/places/user-trash.png",
		  							//click_icon: "",
		  							//checkBox  : true,
		  							data  : {
		  							 			label : 'DashBoardLabel',
		  							 			name  : 'DashBoardName',
		  							 			desc  : 'DashBoardDesc'
		  							 		}	
  								});
  		var node5 = tree.addNode({
		  							name  : "myDashBoardFolder",
		  							parent: node4,  // tree.getUserData("DashBoard").getUsedData('node'),//
		  							//id	  : "node5",
		  							//checkBox: true,
		  							data  : {
		  							 			label : 'myDashBoardFolderLabel',
		  							 			name  : 'myDashBoardFolderName',
		  							 			desc  : 'myDashBoardFolderDesc'
		  							 		}
		  						});
  		var node6 = tree.addNode({
		  							name  : "myDashBoard",
		  							parent: node4,  //tree.getUserData("DashBoard").getUsedData('node'),//
		  							//id	  : "node6",
		  							//checkBox: true,
		  							//init_icon: "icon/16/places/user-desktop.png",
		  							//click_icon: "",
		  							//file  : true,
		  							data  : {
		  							 			label : 'myDashBoard Label',
		  							 			name  : 'myDashBoard Name',
		  							 			desc  : 'myDashBoard Desc'
		  							 		}
  								});
  		
  		
  		
  		this._tree = tree;						
  								
  		tree.getManager().addEventListener("changeSelection",this.showInfo,this);
  		
  		leftPart.add(headerLabel, tree);
  		
  		this.addLeft(leftPart);
  		
  		
  		var rightPart = new spagobi.ui.custom.FunctionalityTreeSubClass();
  		rightPart.setWidth("100%");
   		rightPart.setHeight("100%");
  		this.addRight(rightPart);
  		rightPart.setOverflow("auto");
  		
  		var toolBar = rightPart.getUserData('toolBar');
  		
  		this._createButton = toolBar.getUserData('create');
  		this._saveButton = toolBar.getUserData('save');
  		this._deleteButton = toolBar.getUserData('delete');
  		
  		this._moveUpButton = toolBar.getUserData('moveUp');
  		this._moveUpButton.addEventListener("execute",this.moveUp,this);
  		
  		this._moveDownButton = toolBar.getUserData('moveDown');
  		this._moveDownButton.addEventListener("execute",this.moveDown,this);
  		
  		//Set Focus of buttons only when Node selected
  		this._createButton.setEnabled(false);
  		this._saveButton.setEnabled(false);
  		this._deleteButton.setEnabled(false);
  		this._moveUpButton.setEnabled(false);
  		this._moveDownButton.setEnabled(false);
  		
  		this._right = rightPart;
  
   } 		
  },
  
  members :
  {
  	_tree : undefined,
  	_right: undefined,
  	
  	_createButton 	: undefined,
  	_saveButton 	: undefined,
  	_deleteButton 	: undefined,
  	_moveUpButton 	: undefined,
  	_moveDownButton : undefined,
  	
  	/*Show Insert, Delete, Move Up and Move Down Buttons */
  	showButtons: function(){
  		if(this._tree.getManager().getSelectedItem() == this._tree){		// If Root Node
	        this._createButton.setEnabled(true);
	        this._saveButton.setEnabled(false);
  			this._deleteButton.setEnabled(false);
  			this._moveUpButton.setEnabled(false);
  			this._moveDownButton.setEnabled(false);
  			return;
  			
	    } else {
       			var selectionManager = this._tree.getManager();
       			var item = selectionManager.getSelectedItem();
       			
       			this._saveButton.setEnabled(true);
       			this._deleteButton.setEnabled(true);
       			
       			if(item instanceof qx.ui.tree.TreeFile){			//leaf nodes don't have insert option	
       				this._createButton.setEnabled(false);
       				
					if(selectionManager.getPreviousSibling(item) == undefined){		// first child cannot be moved up
       						this._moveUpButton.setEnabled(false);
       					}
       					else{
       						this._moveUpButton.setEnabled(true);
       					}
       			
       					if(selectionManager.getNextSibling(item) == undefined){	// last child cannot be moved down
       						this._moveDownButton.setEnabled(false);   
       					}
       					else{
       						this._moveDownButton.setEnabled(true); 
       					}
     				
       			}	// end of file nodes
       			else{											// If not Files (i.e. if Folders)
       					this._createButton.setEnabled(true);
	        			this._saveButton.setEnabled(true);
  						this._deleteButton.setEnabled(true);
  						
       					if(selectionManager.getPreviousSibling(item) == undefined){		// first child cannot be moved up
       						this._moveUpButton.setEnabled(false);
       					}
       					else{
       						this._moveUpButton.setEnabled(true);
       					}
       			
       					if(selectionManager.getNextSibling(item) == undefined){	// last child cannot be moved down
       						this._moveDownButton.setEnabled(false);   
       					}
       					else{
       						this._moveDownButton.setEnabled(true); 
       					}	
   				}	// end of folder nodes
	    } // end of non-root nodes
	    
  	},
  	
  	// gets the data from Left part and sets in right part
  	showInfo: function(e){
  		
  		this.showButtons();
  		
  		if(this._tree.getManager().getSelectedItem() == this._tree){		// If Root Node
  			return;
  		}
	    var nodeData = this._tree.getNodeData();	// Calls getNodeData() function of Tree.js
  		this._right.setData(nodeData);				// Calls setData() function of FunctionalityTreeSubClass.js
  		
  	},
  	
  	moveUp: function(e){
  		this._tree.moveUpNode();		// Calls moveUpNode() function of Tree.js
  		this.showButtons();				// Change the toolbar button display based on new arrangement
  	},
  	
  	moveDown: function(e){
  		this._tree.moveDownNode();		// Calls moveDownNode() function of Tree.js
  		this.showButtons();				// Change the toolbar button display based on new arrangement
  	},
  	
  	show: function() {
  		if(!this.isVisibility()) {
			this.setVisibility(true);
		}
    }
  		
  	
  }
  
});  