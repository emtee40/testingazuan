{type:"class",attributes:{"name":"Table","hasWarning":"true","packageName":"qx.ui.table","superClass":"qx.ui.layout.VerticalBoxLayout","childClasses":"qx.ui.treevirtual.TreeVirtual","fullName":"qx.ui.table.Table","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A table.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"table-focus-statusbar"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"null","name":"tableModel"},children:[
          {type:"desc",attributes:{"text":"<p>The table model to read the data from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.ITableModel"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"custom"},children:[
          {type:"desc",attributes:{"text":"<p>A map provided to override the various supplemental classes allocated\n  within this constructor.  Each property must be a function which\n  returns an object instance, as indicated by shown the defaults listed\n  here:</p>\n\n<dl>\n    <dt>selectionManager</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.selection.Manager(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>selectionModel</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.selection.Model(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tableColumnModel</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.columnmodel.Basic(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tablePaneModel</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.pane.Model(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tablePane</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.pane.Pane(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tablePaneHeader</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.pane.Header(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tablePaneScroller</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.pane.Scroller(obj);\n        }\n      </pre>\n\n</dd>\n    <dt>tablePaneModel</dt>\n      <dd>\n\n<pre class=\"javascript\">\n        function(obj)\n        {\n          return new qx.ui.table.pane.Model(obj);\n        }\n      </pre>\n\n</dd>\n  </dl>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"cellClick"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched when a data cell has been clicked.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"cellContextmenu"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched when the context menu is needed in a data cell</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"cellDblclick"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched when a data cell has been clicked.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeDataRowRenderer"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #dataRowRenderer}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeRowHeight"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #rowHeight}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeSelectionModel"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #selectionModel}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTableColumnModel"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #tableColumnModel}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTableModel"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #tableModel}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"columnVisibilityMenuCreateEnd"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched after adding the column list to the column visibility menu.\nThe event data is a map with two properties: table and menu.  Listeners\nmay add additional items to the menu, which appear at the bottom of the\nmenu.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"columnVisibilityMenuCreateStart"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched before adding the column list to the column visibility menu.\nThe event data is a map with two properties: table and menu.  Listeners\nmay add additional items to the menu, which appear at the top of the\nmenu.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"tableWidthChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched when the inner width of the table has changed.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"verticalScrollBarChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched when updating scrollbars discovers that a vertical scrollbar\nis needed when it previously was not, or vice versa.  The data is a\nboolean indicating whether a vertical scrollbar is now being used.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Parent","name":"_afterAppear"}},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#columnVisibilityButtonVisible","name":"_applyColumnVisibilityButtonVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#focusCellOnMouseMove","name":"_applyFocusCellOnMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#keepFirstVisibleRowComplete","name":"_applyKeepFirstVisibleRowComplete"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#metaColumnCounts","name":"_applyMetaColumnCounts"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#selectionModel","name":"_applySelectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#showCellFocusIndicator","name":"_applyShowCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#statusBarVisible","name":"_applyStatusBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#tableColumnModel","name":"_applyTableColumnModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Basic"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Basic"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>tableColumnModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTableColumnModel}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.Table#tableModel","name":"_applyTableModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"_changeInnerHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNew"}},
        {type:"param",attributes:{"name":"vOld"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"_changeInnerWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNew"}},
        {type:"param",attributes:{"name":"vOld"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_cleanupColumnVisibilityMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Cleans up the column visibility menu.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_cleanUpMetaColumns"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromMetaColumn"},children:[
          {type:"desc",attributes:{"text":"<p>the first meta column to clean up. All following\n     meta columns will be cleaned up, too. All previous meta columns will\n     stay unchanged. If 0 all meta columns will be cleaned up.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Cleans up the meta columns.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createColumnVisibilityCheckBoxHandler"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of column to create the handler for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates a handler for a check box of the column visibility menu.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getMetaColumnAtColumnX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"visXPos"},children:[
          {type:"desc",attributes:{"text":"<p>the visible x position of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the meta column a column is shown in. If the column is not shown at\nall, -1 is returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the meta column the column is shown in.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getMetaColumnAtPageX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the position in the page to check (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Gets the meta column at a certain x position in the page. If there is no\nmeta column at this postion, -1 is returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the index of the meta column or -1.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getPaneScrollerArr"},children:[
      {type:"desc",attributes:{"text":"<p>Returns an array containing all TablePaneScrollers in this table.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>all TablePaneScrollers in this table.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getSelectionManager"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the selection manager.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the selection manager.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.selection.Manager"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onChangeLocale"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the locale has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColOrderChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the column order has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColumnVisibilityBtExecuted"},children:[
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the column visibiliy button was executed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColVisibilityChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the visibility of a column has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColWidthChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the width of a column has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onFocusChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table gets the focus.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a key was pressed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a key was pressed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onScrollY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a TablePaneScroller has been scrolled vertically.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSelectionChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the selection has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onTableModelDataChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table model data has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onTableModelMetaDataChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table model meta data has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_toggleColumnVisibilityMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Toggels the visibility of the menu used to change the visibility of columns.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateScrollBarVisibility"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the visibility of the scrollbars in the meta columns.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateScrollerWidths"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the widths of all scrollers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateStatusBar"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the text shown in the status bar.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.core.Target","name":"addEventListener"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"type"}},
        {type:"param",attributes:{"name":"func"}},
        {type:"param",attributes:{"name":"obj"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Add event listener to an object.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>type</code> is not documented.","column":"24","line":"1792"}},
        {type:"error",attributes:{"msg":"Parameter <code>func</code> is not documented.","column":"24","line":"1792"}},
        {type:"error",attributes:{"msg":"Parameter <code>obj</code> is not documented.","column":"24","line":"1792"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"cancelEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Stops editing without writing the editor&#8217;s value to the model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>alwaysUpdateCells</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>alwaysUpdateCells</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>columnVisibilityButtonVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>columnVisibilityButtonVisible</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDataRowRenderer","fromProperty":"dataRowRenderer"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dataRowRenderer</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dataRowRenderer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dataRowRenderer</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focusCellOnMouseMove</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusedColumn"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the column of the currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusedRow"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the row of the currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>keepFirstVisibleRowComplete</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>keepFirstVisibleRowComplete</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMetaColumnCounts","fromProperty":"metaColumnCounts"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>metaColumnCounts</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #metaColumnCounts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>metaColumnCounts</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getModalCellEditorPreOpenFunction","fromProperty":"modalCellEditorPreOpenFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>modalCellEditorPreOpenFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>modalCellEditorPreOpenFunction</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewSelectionManager","fromProperty":"newSelectionManager"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newSelectionManager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionManager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newSelectionManager</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewSelectionModel","fromProperty":"newSelectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newSelectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newSelectionModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewTableColumnModel","fromProperty":"newTableColumnModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newTableColumnModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newTableColumnModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewTablePane","fromProperty":"newTablePane"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newTablePane</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePane}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newTablePane</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewTablePaneHeader","fromProperty":"newTablePaneHeader"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newTablePaneHeader</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneHeader}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newTablePaneHeader</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewTablePaneModel","fromProperty":"newTablePaneModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newTablePaneModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newTablePaneModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNewTablePaneScroller","fromProperty":"newTablePaneScroller"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>newTablePaneScroller</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneScroller}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>newTablePaneScroller</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaneScroller"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"metaColumn"},children:[
          {type:"desc",attributes:{"text":"<p>the meta column to get the TablePaneScroller for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a TablePaneScroller of this table.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the qx.ui.table.pane.Scroller.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRowHeight","fromProperty":"rowHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>rowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rowHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>rowHeight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectionModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showCellFocusIndicator</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>statusBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>statusBarVisible</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTableColumnModel","fromProperty":"tableColumnModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>tableColumnModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>tableColumnModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTableModel","fromProperty":"tableModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>tableModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tableModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>tableModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTablePaneScrollerAtPageX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the position in the page to check (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Gets the TablePaneScroller at a certain x position in the page. If there is\nno TablePaneScroller at this postion, null is returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the TablePaneScroller or null.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"TablePaneScrollerPool"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>alwaysUpdateCells</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>alwaysUpdateCells</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>columnVisibilityButtonVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>columnVisibilityButtonVisible</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDataRowRenderer","fromProperty":"dataRowRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dataRowRenderer</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dataRowRenderer</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dataRowRenderer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focusCellOnMouseMove</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focusCellOnMouseMove</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>keepFirstVisibleRowComplete</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>keepFirstVisibleRowComplete</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMetaColumnCounts","fromProperty":"metaColumnCounts"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>metaColumnCounts</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>metaColumnCounts</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #metaColumnCounts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initModalCellEditorPreOpenFunction","fromProperty":"modalCellEditorPreOpenFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>modalCellEditorPreOpenFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>modalCellEditorPreOpenFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewSelectionManager","fromProperty":"newSelectionManager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newSelectionManager</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newSelectionManager</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionManager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewSelectionModel","fromProperty":"newSelectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newSelectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newSelectionModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewTableColumnModel","fromProperty":"newTableColumnModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newTableColumnModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newTableColumnModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newTableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewTablePane","fromProperty":"newTablePane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newTablePane</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newTablePane</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePane}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewTablePaneHeader","fromProperty":"newTablePaneHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newTablePaneHeader</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newTablePaneHeader</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneHeader}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewTablePaneModel","fromProperty":"newTablePaneModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newTablePaneModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newTablePaneModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNewTablePaneScroller","fromProperty":"newTablePaneScroller"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>newTablePaneScroller</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>newTablePaneScroller</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneScroller}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRowHeight","fromProperty":"rowHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>rowHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>rowHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #rowHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectionModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showCellFocusIndicator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showCellFocusIndicator</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>statusBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>statusBarVisible</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTableColumnModel","fromProperty":"tableColumnModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>tableColumnModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>tableColumnModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #tableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTableModel","fromProperty":"tableModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>tableModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>tableModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #tableModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>alwaysUpdateCells</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>columnVisibilityButtonVisible</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether currently a cell is editing.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether currently a cell is editing.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>focusCellOnMouseMove</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>keepFirstVisibleRowComplete</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showCellFocusIndicator</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>statusBarVisible</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"moveFocusedCell"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"deltaX"},children:[
          {type:"desc",attributes:{"text":"<p>The delta by which the focus should be moved on the x axis.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"deltaY"},children:[
          {type:"desc",attributes:{"text":"<p>The delta by which the focus should be moved on the y axis.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Moves the focus.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"postponedUpdateContent"},children:[
      {type:"desc",attributes:{"text":"<p>Does a postponed update of the table content.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#updateContent"}}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.core.Target","name":"removeEventListener"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"type"}},
        {type:"param",attributes:{"name":"func"}},
        {type:"param",attributes:{"name":"obj"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove event listener from object</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>type</code> is not documented.","column":"27","line":"1811"}},
        {type:"error",attributes:{"msg":"Parameter <code>func</code> is not documented.","column":"27","line":"1811"}},
        {type:"error",attributes:{"msg":"Parameter <code>obj</code> is not documented.","column":"27","line":"1811"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>alwaysUpdateCells</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>columnVisibilityButtonVisible</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDataRowRenderer","fromProperty":"dataRowRenderer"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dataRowRenderer</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dataRowRenderer}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>keepFirstVisibleRowComplete</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMetaColumnCounts","fromProperty":"metaColumnCounts"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>metaColumnCounts</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #metaColumnCounts}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetModalCellEditorPreOpenFunction","fromProperty":"modalCellEditorPreOpenFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>modalCellEditorPreOpenFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewSelectionManager","fromProperty":"newSelectionManager"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newSelectionManager</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionManager}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewSelectionModel","fromProperty":"newSelectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newSelectionModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewTableColumnModel","fromProperty":"newTableColumnModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newTableColumnModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newTableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewTablePane","fromProperty":"newTablePane"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newTablePane</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePane}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewTablePaneHeader","fromProperty":"newTablePaneHeader"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newTablePaneHeader</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneHeader}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewTablePaneModel","fromProperty":"newTablePaneModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newTablePaneModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNewTablePaneScroller","fromProperty":"newTablePaneScroller"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>newTablePaneScroller</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneScroller}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRowHeight","fromProperty":"rowHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>rowHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #rowHeight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectionModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>statusBarVisible</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTableColumnModel","fromProperty":"tableColumnModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>tableColumnModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #tableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTableModel","fromProperty":"tableModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>tableModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #tableModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"scrollCellVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column the cell belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"row"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the row the cell belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Scrolls a cell visible.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>alwaysUpdateCells</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>alwaysUpdateCells</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>columnVisibilityButtonVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>columnVisibilityButtonVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>the new width in pixels.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the width of a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDataRowRenderer","fromProperty":"dataRowRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dataRowRenderer</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dataRowRenderer</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dataRowRenderer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focusCellOnMouseMove</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusedCell"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"row"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"scrollVisible"},children:[
          {type:"desc",attributes:{"text":"<p>whether to scroll the new focused cell\n         visible.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"TablePaneScrollerPool"}}
      ]},
    {type:"method",attributes:{"name":"setKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>keepFirstVisibleRowComplete</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>keepFirstVisibleRowComplete</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMetaColumnCounts","fromProperty":"metaColumnCounts"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>metaColumnCounts</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>metaColumnCounts</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #metaColumnCounts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setModalCellEditorPreOpenFunction","fromProperty":"modalCellEditorPreOpenFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>modalCellEditorPreOpenFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>modalCellEditorPreOpenFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewSelectionManager","fromProperty":"newSelectionManager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newSelectionManager</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newSelectionManager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionManager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewSelectionModel","fromProperty":"newSelectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newSelectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newSelectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newSelectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewTableColumnModel","fromProperty":"newTableColumnModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newTableColumnModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newTableColumnModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewTablePane","fromProperty":"newTablePane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newTablePane</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newTablePane</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePane}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewTablePaneHeader","fromProperty":"newTablePaneHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newTablePaneHeader</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newTablePaneHeader</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneHeader}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewTablePaneModel","fromProperty":"newTablePaneModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newTablePaneModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newTablePaneModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNewTablePaneScroller","fromProperty":"newTablePaneScroller"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>newTablePaneScroller</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>newTablePaneScroller</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #newTablePaneScroller}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRowHeight","fromProperty":"rowHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>rowHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>rowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rowHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showCellFocusIndicator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>statusBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>statusBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTableColumnModel","fromProperty":"tableColumnModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>tableColumnModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>tableColumnModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tableColumnModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTableModel","fromProperty":"tableModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>tableModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>tableModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tableModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"startEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Starts editing the currently focused cell. Does nothing if already editing\nor if the column is not editable.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether editing was started</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"stopEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Stops editing and writes the editor&#8217;s value to the model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAlwaysUpdateCells","fromProperty":"alwaysUpdateCells"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>alwaysUpdateCells</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysUpdateCells}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleColumnVisibilityButtonVisible","fromProperty":"columnVisibilityButtonVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>columnVisibilityButtonVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleKeepFirstVisibleRowComplete","fromProperty":"keepFirstVisibleRowComplete"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>keepFirstVisibleRowComplete</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleStatusBarVisible","fromProperty":"statusBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>statusBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #statusBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateContent"},children:[
      {type:"desc",attributes:{"text":"<p>Update the table content of every attached table pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"alwaysUpdateCells","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the table cells should be updated when only the selection or the\nfocus changed. This slows down the table update but allows to react on a\nchanged selection or a changed focus in a cell renderer.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyColumnVisibilityButtonVisible","defaultValue":"true","propertyType":"new","name":"columnVisibilityButtonVisible","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to show the column visibility button</p>"}}
      ]},
    {type:"property",attributes:{"name":"dataRowRenderer","defaultValue":"null","event":"changeDataRowRenderer","allowNull":"true","propertyType":"new","check":"qx.ui.table.IRowRenderer"},children:[
      {type:"desc",attributes:{"text":"<p>The renderer to use for styling the rows.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyFocusCellOnMouseMove","defaultValue":"false","propertyType":"new","name":"focusCellOnMouseMove","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the focus should moved when the mouse is moved over a cell. If false\nthe focus is only moved on mouse clicks.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyKeepFirstVisibleRowComplete","defaultValue":"true","propertyType":"new","name":"keepFirstVisibleRowComplete","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the table should keep the first visible row complete. If set to false,\nthe first row may be rendered partial, depending on the vertical scroll value.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyMetaColumnCounts","propertyType":"new","name":"metaColumnCounts","check":"Object"},children:[
      {type:"desc",attributes:{"text":"<p>The number of columns per meta column. If the last array entry is -1,\nthis meta column will get the remaining columns.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int","dimensions":"1"}}
        ]}
      ]},
    {type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"modalCellEditorPreOpenFunction","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to call when before modal cell editor is opened.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newSelectionManager","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a selection manager.  this allows subclasses of\nTable to subclass this internal class.  To take effect, this property must\nbe set before calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newSelectionModel","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a selection model.  this allows subclasses of\nTable to subclass this internal class.  To take effect, this property must\nbe set before calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newTableColumnModel","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a selection model.  this allows subclasses of\nTable to subclass this internal class.  To take effect, this property must\nbe set before calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newTablePane","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a table pane.  this allows subclasses of Table to\nsubclass this internal class.  To take effect, this property must be set\nbefore calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newTablePaneHeader","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a table pane.  this allows subclasses of Table to\nsubclass this internal class.  To take effect, this property must be set\nbefore calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newTablePaneModel","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a table pane model.  this allows subclasses of\nTable to subclass this internal class.  To take effect, this property must\nbe set before calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","propertyType":"new","name":"newTablePaneScroller","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>A function to instantiate a table pane scroller.  this allows subclasses of\nTable to subclass this internal class.  To take effect, this property must\nbe set before calling the Table constructor.</p>"}}
      ]},
    {type:"property",attributes:{"check":"Number","defaultValue":"20","propertyType":"new","name":"rowHeight","event":"changeRowHeight"},children:[
      {type:"desc",attributes:{"text":"<p>The height of the table rows.</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.ui.table.selection.Model","apply":"_applySelectionModel","propertyType":"new","name":"selectionModel","event":"changeSelectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>The selection model.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyShowCellFocusIndicator","defaultValue":"true","propertyType":"new","name":"showCellFocusIndicator","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the cell focus indicator should be shown</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyStatusBarVisible","defaultValue":"true","propertyType":"new","name":"statusBarVisible","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to show the status bar</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.ui.table.columnmodel.Basic","apply":"_applyTableColumnModel","propertyType":"new","name":"tableColumnModel","event":"changeTableColumnModel"},children:[
      {type:"desc",attributes:{"text":"<p>The table column model.</p>\n\n<p>Note that is is not possible to change the table column model once it\nis set.</p>"}}
      ]},
    {type:"property",attributes:{"name":"tableModel","check":"qx.ui.table.ITableModel","allowNull":"true","propertyType":"new","apply":"_applyTableModel","event":"changeTableModel"},children:[
      {type:"desc",attributes:{"text":"<p>The table model.</p>"}}
      ]}
    ]}
  ]}