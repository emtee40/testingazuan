{type:"class",attributes:{"name":"SimpleTreeDataModel","hasWarning":"true","packageName":"qx.ui.treevirtual","superClass":"qx.ui.table.model.Simple","fullName":"qx.ui.treevirtual.SimpleTreeDataModel","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A simple tree data model used as the table model</p>\n\n<p>The object structure of a single node of the tree is:</p>\n\n<pre class=\"javascript\">\n{\n  // USER-PROVIDED ATTRIBUTES\n  // ------------------------\n  type           : qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF,\n  parentNodeId   : 23,    // index of the parent node in _nodeArr\n\n  label          : \"My Documents\",\n  bSelected      : true,  // true if node is selected; false otherwise.\n  bOpened        : true,  // true (-), false (+)\n  bHideOpenClose : false, // whether to hide the open/close button\n  icon           : \"images/folder.gif\",\n  iconSelected   : \"images/folder_selected.gif\",\n\n  cellStyle      : \"background-color:cyan\"\n  labelStyle     : \"background-color:red;color:white\"\n\n  // USER-PROVIDED COLUMN DATA\n  columnData     : [\n                     null, // null at index of tree column (typically 0)\n                     \"text of column 1\",\n                     \"text of column 2\"\n                   ],\n\n  // APPLICATION-, MIXIN-, and SUBCLASS-PROVIDED CUSTOM DATA\n  data           : {\n                     application :\n                     {\n                         // application-specific user data goes in here\n                         foo: \"bar\",\n                         ...\n                     },\n                     MDragAndDropSupport :\n                     {\n                         // Data required for the Drag & Drop mixin.\n                         // When a mixin is included, its constructor\n                         // should create this object, named according\n                         // to the mixin or subclass name (empty or\n                         // otherwise)\n                     },\n                     ... // Additional mixins or subclasses.\n                   },\n\n  // INTERNALLY-CALCULATED ATTRIBUTES\n  // --------------------------------\n  // The following properties need not (and should not) be set by the\n  // caller, but are automatically calculated.  Some are used internally,\n  // while others may be of use to event listeners.\n\n  nodeId         : 42,   // The index in _nodeArr, useful to event listeners.\n  children       : [ ],  // each value is an index into _nodeArr\n\n  level          : 2,    // The indentation level of this tree node\n\n  bFirstChild    : true,\n  lastChild      : [ false ],  // Array where the index is the column of\n                               // indentation, and the value is a boolean.\n                               // These are used to locate the\n                               // appropriate \"tree line\" icon.\n}\n</pre>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","hasError":"true","isStatic":"true","name":"__getEmptyTree"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"141"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_addNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parentNodeId"},children:[
          {type:"desc",attributes:{"text":"<p>The node id of the parent of the node being added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"label"},children:[
          {type:"desc",attributes:{"text":"<p>The string to display as the label for this node</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bOpened"},children:[
          {type:"desc",attributes:{"text":"<i>true</i> if the tree should be rendered in its opened state;\n  <i>false</i> otherwise."}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bHideOpenCloseButton"},children:[
          {type:"desc",attributes:{"text":"<i>true</i> if the open/close button should be hidden (not displayed);\n  </i>false</i> to display the open/close button for this node."}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"type"},children:[
          {type:"desc",attributes:{"text":"<p>The type of node being added.  The type determines whether children\n  may be added, and determines the default icons to use.  This\n  parameter must be one of the following values:\n  <dl>\n    <dt>qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH</dt>\n    <dd>\n      This node is a branch.  A branch node may have children.\n    </dd>\n    <dt>qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF</dt>\n    <dd>\n      This node is a leaf, and may not have children\n    </dd>\n  </dl></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"icon"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is not a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"iconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a node to the tree.</p>\n\n<p><span class=\"caps\">NOTE</span>: This method is for <b>internal use</b> and should not be called by\n      users of this class.  Instead, call {@link #addBranch} or {@link\n      #addLeaf}.  There is no guarantee that the interface to this\n      method will remain unchanged over time.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the newly-added node.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_clearSelections"},children:[
      {type:"desc",attributes:{"text":"<p>Clear all selections in the data model.  This method does not clear\nselections displayed in the widget, and is intended for internal use,\nnot by users of this class.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addBranch"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parentNodeId"},children:[
          {type:"desc",attributes:{"text":"<p>The node id of the parent of the node being added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"label"},children:[
          {type:"desc",attributes:{"text":"<p>The string to display as the label for this node</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bOpened"},children:[
          {type:"desc",attributes:{"text":"<i>True</i> if the branch should be rendered in its opened state;\n  <i>false</i> otherwise."}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bHideOpenCloseButton"},children:[
          {type:"desc",attributes:{"text":"<i>True</i> if the open/close button should not be displayed;\n  <i>false</i> if the open/close button should be displayed"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"icon"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is not a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"iconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a branch to the tree.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the newly-added branch.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addLeaf"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parentNodeId"},children:[
          {type:"desc",attributes:{"text":"<p>The node id of the parent of the node being added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"label"},children:[
          {type:"desc",attributes:{"text":"<p>The string to display as the label for this node</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"icon"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is not a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"iconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>The relative (subject to alias expansion) or full path of the icon to\n  display for this node when it is a selected node.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a leaf to the tree.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the newly-added leaf.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"clearData"},children:[
      {type:"desc",attributes:{"text":"<p>Clears the tree of all nodes</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeId"},children:[
          {type:"desc",attributes:{"text":"<p>A node identifier, as previously returned by {@link #addBranch} or\n  {@link addLeaf}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>The column number to which the provided data applies</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Retrieve the data from an additional column (a column other than the\ntree column) of the tree.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The cell data for the specified column</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.model.Simple","name":"getData"},children:[
      {type:"desc",attributes:{"text":"<p>Return the array of node data.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Array of node objects.\n See {@link qx.ui.treevirtual.SimpleTreeDataModel} for a description\n nodes in this array.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNodeFromRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>zero-based row index.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This operation maps rowIndexes to nodes.  It does the opposite job to {@link #getRowFromNodeId}.\nThis function is useful to map selection (row based) to nodes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>node associated to <tt>rowIndex</tt>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNodeRowMap"},children:[
      {type:"desc",attributes:{"text":"<p>Return the mapping of nodes to rendered rows.  This function is intended\nfor use by the cell renderer, not by users of this class.\nIt is also useful to select a node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The array containing mappings of nodes to rendered rows.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.table.model.Simple","name":"getRowCount"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"249"}}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Simple","name":"getRowData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowIndex"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRowFromNodeId"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeId"},children:[
          {type:"desc",attributes:{"text":"<p>The id of the node (as would have been returned by addBranch(),\n  addLeaf(), etc.) to get the row index for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This operation maps nodes to rowIndexes.  It does the opposite job to {@link #getNodeFromRow}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getSelectedNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Return the nodes that are currently selected.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>An array containing the nodes that are currently selected.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.model.Simple","name":"getSortColumnIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the column index the model is sorted by. This model is never\nsorted, so -1 is returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>-1, to indicate that the model is not sorted.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getTree"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"175"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTreeColumn"},children:[
      {type:"desc",attributes:{"text":"<p>Get the column in which the tree is to be displayed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The column in whcih the tree is to be displayed</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.table.model.Simple","name":"getValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"}},
        {type:"param",attributes:{"name":"rowIndex"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>columnIndex</code> is not documented.","column":"16","line":"264"}},
        {type:"error",attributes:{"msg":"Parameter <code>rowIndex</code> is not documented.","column":"16","line":"264"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"264"}}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Simple","name":"isColumnSortable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"prune"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node to be pruned from the tree.  The node can be represented\n  either by the node object, or the node id (as would have been\n  returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bSelfAlso"},children:[
          {type:"desc",attributes:{"text":"<p>If <i>true</i> then remove the node identified by <i>nodeId</i> as\n  well as all of the children.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Prune the tree by removing, recursively, all of a node&#8217;s children.  If\nrequested, also remove the node itself.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeId"},children:[
          {type:"desc",attributes:{"text":"<p>A node identifier, as previously returned by {@link #addBranch} or\n  {@link addLeaf}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>The column number to which the provided data applies</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"data"},children:[
          {type:"desc",attributes:{"text":"<p>The cell data for the specified column</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add data to an additional column (a column other than the tree column)\nof the tree.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.model.Simple","overriddenFrom":"qx.ui.table.model.Simple","name":"setColumnEditable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"}},
        {type:"param",attributes:{"name":"editable"}}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.model.Simple","name":"setData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeArr"},children:[
          {type:"desc",attributes:{"text":"<p>Pass either an Array of node objects, or null.</p>\n\n<p>If non-null, nodeArr is an array of node objects containing the\n  entire tree to be displayed.  If loading the whole data en bulk in\n  this way, it is assumed that the data is correct!  No error checking\n  or validation is done.  You&#8217;d better know what you&#8217;re doing!  Caveat\n  emptor.</p>\n\n<p>If nodeArr is null, then this call is a notification that the user\n  has completed building or modifying a tree by issuing a series of\n  calls to {@link #addBranch} and/or {@link #addLeaf}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}},
            {type:"entry",attributes:{"type":"null"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the whole data en bulk, or notifies the data model that node\nmodifications are complete.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node to have its attributes set.  The node can be represented\n  either by the node object, or the node id (as would have been\n  returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"attributes"},children:[
          {type:"desc",attributes:{"text":"<p>Each property name in the map may correspond to the property names of\n  a node which are specified as <i><span class=\"caps\">USER</span>-PROVIDED <span class=\"caps\">ATTRIBUTES</span></i> in\n  {@link #SimpleTreeDataModel}.  Each property value will be assigned\n  to the corresponding property of the node specified by nodeId.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set state attributes of a node.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setTree"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"tree"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"170"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTreeColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>The index of the column in which the tree should be displayed.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Specifies which column the tree is to be displayed in.  The tree is\ndisplayed using the SimpleTreeDataCellRenderer.  Other columns may be\nprovided which use different cell renderers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Simple","name":"setValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"}},
        {type:"param",attributes:{"name":"rowIndex"}},
        {type:"param",attributes:{"name":"value"}}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Simple","name":"sortByColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"}},
        {type:"param",attributes:{"name":"ascending"}}
        ]}
      ]}
    ]}
  ]}