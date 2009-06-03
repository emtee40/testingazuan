qx.Class.define("qooxdoo.ui.form.PropertiesList",
{
  	extend : qooxdoo.ui.form.InputField,

  	/*
  	*****************************************************************************
     CONSTRUCTOR
  	*****************************************************************************
  	*/

	construct : function(config) {
    	this.base(arguments, config);
  	},

  	members :
  	{
  		getData: function() {
  			return this._field.getData();
  		}
  	
  		, setData: function(data) {
  			this._field.setData(data);
  		}
  		
  		, _createField: function(config) {
  		
  			var defaultConfig = {
        		top: 0,
        		left: 10,
        		text: '',     		
        		width: 800,
        		height: 20,
        		labelwidth: 100
        	};
        	
        	config = qooxdoo.commons.CoreUtils.apply(defaultConfig, config);
        	
        	this._field = new qooxdoo.ui.table.PropertiesList(config);
        	
        	//this._field = new qx.ui.container.Composite(new qx.ui.layout.Basic);
        	//this._field.add(propertiesList, {top: config.top, left: config.left});
  	            					
  		}
  	}
});