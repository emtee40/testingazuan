Ext.ns("Sbi.locale");
Sbi.locale.ln = Sbi.locale.ln || new Array();


//===================================================================
// MESSAGE WINDOW
//===================================================================
Sbi.locale.ln['sbi.qbe.messagewin.warning.title'] = 'Warning message';
Sbi.locale.ln['sbi.qbe.messagewin.error.title'] = 'Error message';
Sbi.locale.ln['sbi.qbe.messagewin.info.title'] = 'Info message';



//===================================================================
//QUERY EDITOR PANEL
//===================================================================
Sbi.locale.ln['sbi.qbe.queryeditor.title'] = 'Query';
Sbi.locale.ln['sbi.qbe.queryeditor.westregion.title'] = 'Schema';
Sbi.locale.ln['sbi.qbe.queryeditor.westregion.tools.expand'] = 'Expand all'; 
Sbi.locale.ln['sbi.qbe.queryeditor.westregion.tools.collapse'] = 'Collapse all'; 
Sbi.locale.ln['sbi.qbe.queryeditor.westregion.tools.flat'] = 'Flat view'; 
Sbi.locale.ln['sbi.qbe.queryeditor.westregion.tools.addcalculated'] = 'Add calulated field'; 

Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.title'] = 'Query Editor';
Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.tools.save'] = 'Save query as subobject';
Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.tools.view'] = 'Save query as view';
Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.tools.execute'] = 'Execute query';
Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.tools.validate'] = 'Validate query';
Sbi.locale.ln['sbi.qbe.queryeditor.centerregion.tools.help'] = 'Help me please';

Sbi.locale.ln['sbi.qbe.queryeditor.eastregion.title'] = 'Query Catalogue';
Sbi.locale.ln['sbi.qbe.queryeditor.eastregion.tools.delete'] = 'Delete query';
Sbi.locale.ln['sbi.qbe.queryeditor.eastregion.tools.add'] = 'Add query';
Sbi.locale.ln['sbi.qbe.queryeditor.eastregion.tools.insert'] = 'Insert query';


//===================================================================
//DATASTORE PANEL
//===================================================================
Sbi.locale.ln['sbi.qbe.datastorepanel.title'] = 'Results';

Sbi.locale.ln['sbi.qbe.datastorepanel.grid.displaymsg'] = 'Displaying {0} - {1} of {2}';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.emptymsg'] = 'No data to display';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.emptywarningmsg'] = 'Query returns no data';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.beforeoverflow'] = 'Max records number limit';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.afteroverflow'] = 'exceeded';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.beforepagetext'] = 'Page';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.afterpagetext'] = 'of {0}';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.firsttext'] = 'First Page';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.prevtext'] = 'Previous Page';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.nexttext'] = 'Next Page';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.lasttext'] = 'Next Page';
Sbi.locale.ln['sbi.qbe.datastorepanel.grid.refreshtext'] = 'Refresh';

Sbi.locale.ln['sbi.qbe.datastorepanel.button.tt.exportto'] = 'Export to';



//===================================================================
//FILTER GRID
//===================================================================
Sbi.locale.ln['sbi.qbe.filtergridpanel.title'] = 'Where clause';

//column headers
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.delete'] = 'Delete';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.name'] = 'Filter Name';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.entity'] = 'Entity';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.field'] = 'Field';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.operator'] = 'Operator';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.value'] = 'Operand';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.isfree'] = 'Is for Prompt';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.type'] = 'Operand Type';
Sbi.locale.ln['sbi.qbe.filtergridpanel.headers.boperator'] = 'Bol.Connector';

//column tooltip
Sbi.locale.ln['sbi.qbe.filtergridpanel.tooltip.notdef'] = 'Help tooltip not defined yet';

//boolean operators
Sbi.locale.ln['sbi.qbe.filtergridpanel.boperators.name.and'] = 'AND';
Sbi.locale.ln['sbi.qbe.filtergridpanel.boperators.name.or'] = 'OR';

Sbi.locale.ln['sbi.qbe.filtergridpanel.boperators.desc.and'] = 'Connect this filter and the next one using the boolean operator AND';
Sbi.locale.ln['sbi.qbe.filtergridpanel.boperators.desc.or'] = 'Connect this filter and the next one using the boolean operator OR';

Sbi.locale.ln['sbi.qbe.filtergridpanel.boperators.editor.emptymsg'] = 'Select an operator...';


//filter operators

Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.none'] = 'none';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.eq'] = 'equals to';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.noteq'] = 'not equals to';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.gt'] = 'greater than';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.eqgt'] = 'equals or greater than';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.lt'] = 'less than';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.eqlt'] = 'equals or less than';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.starts'] = 'starts with';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notstarts'] = 'not starts with';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.ends'] = 'ends with';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notends'] = 'not ends with';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.contains'] = 'contains';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notcontains'] = 'not contains';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.between'] = 'between';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notbetween'] = 'not between';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.in'] = 'in';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notin'] = 'not in';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.notnull'] = 'not null';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.name.isnull'] = 'is null';

Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.none'] = 'no filter applayed';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.eq'] = 'true iff the field\'s value is equal to filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.noteq'] = 'true iff the field\'s value is not equal to filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.gt'] = 'true iff the field\'s value is greater than filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.eqgt'] = 'true iff the field\'s value is equal or greater than filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.lt'] = 'true iff the field\'s value is less than filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.eqlt'] = 'true iff the field\'s value starts with filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.starts'] = 'true iff the field\'s value is equal or less than filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notstarts'] = 'true iff the field\'s value doesn\'t start with filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.ends'] = 'true iff the field\'s value ends with filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notends'] = 'true iff the field\'s value doesn\'t end with filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.contains'] = 'true iff the field\'s value contains filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notcontains'] = 'true iff the field\'s value doesn\'t contain filter\'s value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.between'] = 'true iff the field\'s value is between the range specified in the filter value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notbetween'] = 'true iff the field\'s value is not between the range specified in the filter value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.in'] = 'true iff the field\'s value is equal to one of the values specified in the filter value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notin'] = 'true iff the field\'s value is not equal to any of the values specified in the filter value';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.notnull'] = 'true iff the field\'s value is not null';
Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.desc.isnull'] = 'true iff the field\'s value is null';

Sbi.locale.ln['sbi.qbe.filtergridpanel.foperators.editor.emptymsg'] = 'Select an operator...';

//buttons 
Sbi.locale.ln['sbi.qbe.filtergridpanel.buttons.text.delete'] = 'Delete';
Sbi.locale.ln['sbi.qbe.filtergridpanel.buttons.tt.delete'] = 'Delete All';

Sbi.locale.ln['sbi.qbe.filtergridpanel.buttons.text.wizard'] = 'Exp Wizard';
Sbi.locale.ln['sbi.qbe.filtergridpanel.buttons.tt.wizard'] = 'Exp Wizard';

// ===================================================================
//	SELECT GRID
// ===================================================================
Sbi.locale.ln['sbi.qbe.selectgridpanel.title'] = 'Select Fields';

// column headers
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.visible'] = 'Visible';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.group'] = 'Group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.filter'] = 'Filter';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.having'] = 'Having';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.entity'] = 'Entity';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.alias'] = 'Alias';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.order'] = 'Order';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.group'] = 'Group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.function'] = 'Function';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.field'] = 'Field';
Sbi.locale.ln['sbi.qbe.selectgridpanel.headers.delete'] = 'Delete';

//aggregation functions
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.none'] = 'none';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.sum'] = 'sum';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.avg'] = 'averege';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.max'] = 'maximum';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.min'] = 'minimum';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.name.count'] = 'count';

Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.none'] = 'No aggregation function applied';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.sum'] = 'Return the sum of all values in group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.avg'] = 'Return the average of all values in group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.max'] = 'Return the max of all values in group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.min'] = 'Return the min of all values in group';
Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.desc.count'] = 'Return the count of all values in group';

Sbi.locale.ln['sbi.qbe.selectgridpanel.aggfunc.editor.emptymsg'] = 'Select a function...';


// sorting functions
Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.name.none'] = 'none';
Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.name.asc'] = 'ascending';
Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.name.desc'] = 'descending';

Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.desc.none'] = 'No ordering applied to the given colunm';
Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.desc.asc'] = 'Order values of the given column in asecnding way';
Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.desc.desc'] = 'Order values of the given column in descending way';

Sbi.locale.ln['sbi.qbe.selectgridpanel.sortfunc.editor.emptymsg'] = 'Select ordering direction...';

//buttons 
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.hide'] = 'Hide non-visible';
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.tt.hide'] = 'Hide all non visible fields';

Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.group'] = 'Group by entity';
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.tt.group'] = 'Group fileds by parent entity';

Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.add'] = 'Add calculated';
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.tt.add'] = 'Add an ad-hoc calculated field (i.e. valid only for this query)';

Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.delete'] = 'Delete';
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.tt.delete'] = 'Delete selected filed';

Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.deleteall'] = 'Delete All';
Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.tt.deleteall'] = 'Delete all selected fields';

Sbi.locale.ln['sbi.qbe.selectgridpanel.buttons.text.distinct'] = 'Apply distinct clause';

Sbi.locale.ln['sbi.qbe.freeconditionswindow.title'] = 'Fill free conditions';
Sbi.locale.ln['sbi.qbe.freeconditionswindow.buttons.text.apply'] = 'Apply';
Sbi.locale.ln['sbi.qbe.freeconditionswindow.buttons.text.cancel'] = 'Cancel';
Sbi.locale.ln['sbi.qbe.freeconditionswindow.buttons.text.restoredefaults'] = 'Restore defaults';
Sbi.locale.ln['sbi.qbe.freeconditionswindow.buttons.text.saveasdefaults'] = 'Set as defaults';
Sbi.locale.ln['sbi.qbe.freeconditionswindow.buttons.text.restorelast'] = 'Restore last';

//===================================================================
//QUERY CATALOGUE PANEL
//===================================================================
Sbi.locale.ln['sbi.qbe.cataloguepanel.title'] = 'Query Catalogue';

//===================================================================
//HAVING CLAUSE PANEL
//===================================================================
Sbi.locale.ln['sbi.qbe.havinggridpanel.title'] = 'Having clause';