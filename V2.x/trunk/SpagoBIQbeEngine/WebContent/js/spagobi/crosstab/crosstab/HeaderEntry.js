//================================================================
// HeaderEntry
//================================================================
// An HeaderEntry rappresents a single header. 
// The most important property is the 'thisDimension'. Suppose that an header group is a tree. 
// If a HeaderEntry is a leaf than the Dimension is 1. If a HeaderEntry is an internal node it's 
// dimension is the sum of the dimensions of it's childs.
// horizontal is a boolean. if it's true than the with of the HeaderEntry is thisDimension*(cell width)
// level is the position inside the columnHeader/rowHeader
HeaderEntry = function(name, thisDimension, horizontal, level) {
	this.backgroundImg = "../img/crosstab/headerbackground.gif";
	var c;
	this.level = level;
	this.horizontal = horizontal;
	this.thisDimension = thisDimension;
	var paddingTop = this.thisDimension*this.rowHeight/2;
	if(horizontal){
		c = {
				width: this.thisDimension*this.columnWidth,
				height: this.rowHeight,
				hideMode: 'offsets',
				html: name,
				bodyCssClass: 'x-grid3-header crosstab-table-headers' 
			};
	}else{
		c = {
				width: this.columnWidth,
				height: this.thisDimension*this.rowHeight,
				hideMode: 'offsets',
				html: '<IMG SRC=\"'+this.backgroundImg+'\" WIDTH=\"100%\" HEIGHT=\"105%\" style=\"z-index:0\"><div style= \"top: -'+paddingTop+'px; position:relative; z-index:6; \ margin-top: -10px"><span>'+name+'</span><div>',
				bodyCssClass: 'x-grid3-header crosstab-table-headers'
			};	
	}
	
	this.childs = new Array();
	this.name = name;

	// constructor
	HeaderEntry.superclass.constructor.call(this, c);
	
};
	
Ext.extend(HeaderEntry, Ext.Panel, {
	father: null, //father of the node
	level: null,
	horizontal: null,
	childs: null, //childs of the node
	name: null, // name of the node (displayed in the table)
	thisDimension: null, //see the component description
	columnWidth: 100,
	rowHeight: 25
	
	//update the height and the visualization of the panel
	,updateHeight : function(newThisHeight){
		this.thisDimension=newThisHeight;
		if(!this.horizontal && this.body!=null){
			var paddingTop = this.thisDimension*this.rowHeight/2;
			this.body.update('<IMG SRC=\"'+this.backgroundImg+'\" WIDTH=\"100%\" HEIGHT=\"105%\" style=\"z-index:0\"><div style= \"top: -'+paddingTop+'px; position:relative; z-index:6; \ margin-top: -10px"><span>'+this.name+'</span><div>');
		}
	}

	//update the fields and the visualization of the panel
	,update : function(){
		if(this.horizontal){
			this.setWidth(this.thisDimension*this.columnWidth);
			this.body.update(this.name);
		}else{
			var paddingTop = this.thisDimension*this.rowHeight/2;
			this.setHeight(this.thisDimension*this.rowHeight);
			if(this.body!=null){
				this.body.update('<IMG SRC=\"'+this.backgroundImg+'\" WIDTH=\"100%\" HEIGHT=\"105%\" style=\"z-index:0\"><div style= \"top: -'+paddingTop+'px; position:relative; z-index:6; \ margin-top: -10px"><span>'+this.name+'</span><div>');
			}
		}
	}
	
	//Return the previous brother. If it doesn't exist
	//the method returns this
	,getPreviousSibling : function(notHidden){
		for(var i=0; i<this.father.childs.length; i++){
			if(this.father.childs[i] == this){
				if(i>0){
					if(notHidden){
						i--;
						do{
							if(this.father.childs[i].hidden){
								i--;
							}else{
								return this.father.childs[i];
							}
						}while(i>=0);
						return this;
					}
					return this.father.childs[i-1];
				}
			}
		}
		return this;
	}
	
	//Return the next brother. If it doesn't exist
	//the method returns this
	,getNextSibling : function(notHidden){
		for(var i=0; i<this.father.childs.length; i++){
			if(this.father.childs[i] == this){
				if(i<this.father.childs.length-1){
					if(notHidden){
						i++;
						do{
							if(this.father.childs[i].hidden){
								i++;
							}else{
								return this.father.childs[i];
							}
						}while(i<this.father.childs.length);
						return this;
					}
					return this.father.childs[i+1];
				}
			}
		}
		return this;
	}
	
	//visit the tree rooted in this panel and
	//return the list of leafs
	,getLeafs : function(){
		var childs = new Array();
		var freshChilds= new Array();
		freshChilds = freshChilds.concat(this.childs);
		while(freshChilds.length>0){
			childs = freshChilds;
			freshChilds = new Array();
			for(var i=0; i<childs.length; i++){
				freshChilds = freshChilds.concat(childs[i].childs);
			}
		}
		return childs;
	}
	
});