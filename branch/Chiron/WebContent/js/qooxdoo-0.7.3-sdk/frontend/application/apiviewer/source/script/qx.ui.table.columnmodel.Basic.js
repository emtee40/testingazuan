{type:"class",attributes:{"name":"Basic","packageName":"qx.ui.table.columnmodel","superClass":"qx.core.Target","childClasses":"qx.ui.table.columnmodel.Resize","fullName":"qx.ui.table.columnmodel.Basic","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A model that contains all meta data about columns, such as width, renderers,\nvisibility and order.</p>"}},
  {type:"see",attributes:{"name":"qx.ui.table.ITableModel"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"orderChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the column order has changed. The data property of the\nevent is a map having the following attributes:\n<ul>\n  <li>col: The model index of the column that was moved.</li>\n  <li>fromOverXPos: The old overall x position of the column.</li>\n  <li>toOverXPos: The new overall x position of the column.</li>\n</ul></p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"visibilityChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the visibility of a column has changed. The data property of the\nevent is a map having the following attributes:\n<ul>\n  <li>col: The model index of the column the visibility of which has changed.</li>\n  <li>visible: Whether the column is now visible.</li>\n</ul></p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"visibilityChangedPre"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the visibility of a column has changed. This event is equal to\n&#8220;visibilityChanged&#8221;, but is fired right before.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"widthChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the width of a column has changed. The data property of the event is\na map having the following attributes:\n<ul>\n  <li>col: The model index of the column the width of which has changed.</li>\n  <li>newWidth: The new width of the column in pixels.</li>\n  <li>oldWidth: The old width of the column in pixels.</li>\n</ul></p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"name":"DEFAULT_DATA_RENDERER"},children:[
      {type:"desc",attributes:{"text":"<p>the default data cell renderer.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"DefaultDataCellRenderer"}}
        ]}
      ]},
    {type:"constant",attributes:{"name":"DEFAULT_HEADER_RENDERER"},children:[
      {type:"desc",attributes:{"text":"<p>the default header cell renderer.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"DefaultDataCellRenderer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"DEFAULT_WIDTH","value":"100"},children:[
      {type:"desc",attributes:{"text":"<p>the default width of a column in pixels.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"name":"DEFAULT_EDITOR_FACTORY"},children:[
      {type:"desc",attributes:{"text":"<p>the default editor factory.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"TextFieldCellEditorFactory"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_getColToXPosMap"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the map that translates model indexes to x positions.</p>\n\n<p>The returned map contains for a model index (int) a map having two\nproperties: overX (the overall x position of the column, int) and\nvisX (the visible x position of the column, int). visX is missing for\nhidden columns.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the &#8220;column to x postion&#8221; map.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCellEditorFactory"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the cell editor factory of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the cell editor factory of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"CellEditorFactory"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the width of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the width of the column in pixels.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDataCellRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the data renderer of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the data renderer of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"DataCellRenderer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeaderCellRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the header renderer of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the header renderer of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"HeaderCellRenderer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOverallColumnAtX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"overXPos"},children:[
          {type:"desc",attributes:{"text":"<p>the overall x position of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the model index of a column at a certain overall x position.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOverallColumnCount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the overall number of columns (including hidden columns).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the overall number of columns.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOverallX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the overall x position of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the overall x position of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleColumnAtX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"visXPos"},children:[
          {type:"desc",attributes:{"text":"<p>the visible x position of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the model index of a column at a certain visible x position.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleColumnCount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the number of visible columns.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of visible columns.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the visible x position of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the visible x position of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"init"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"colCount"},children:[
          {type:"desc",attributes:{"text":"<p>the number of columns the model should have.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Initializes the column model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isColumnVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a certain column is visible.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the column is visible.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"moveColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromOverXPos"},children:[
          {type:"desc",attributes:{"text":"<p>the overall x postion of the column to move.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"toOverXPos"},children:[
          {type:"desc",attributes:{"text":"<p>the overall x postion of where the column should be\n     moved to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Moves a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCellEditorFactory"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"factory"},children:[
          {type:"desc",attributes:{"text":"<p>the new cell editor factory the column should get.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"CellEditorFactory"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the cell editor factory of a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"visible"},children:[
          {type:"desc",attributes:{"text":"<p>whether the column should be visible.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets whether a certain column is visible.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>the new width the column should get in pixels.</p>"}},
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
    {type:"method",attributes:{"name":"setDataCellRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"renderer"},children:[
          {type:"desc",attributes:{"text":"<p>the new data renderer the column should get.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"DataCellRenderer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the data renderer of a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHeaderCellRenderer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"renderer"},children:[
          {type:"desc",attributes:{"text":"<p>the new header renderer the column\n     should get.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"HeaderCellRenderer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the header renderer of a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}