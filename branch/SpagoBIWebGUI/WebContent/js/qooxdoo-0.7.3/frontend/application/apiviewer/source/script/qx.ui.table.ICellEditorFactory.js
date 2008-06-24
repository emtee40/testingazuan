{type:"class",attributes:{"name":"ICellEditorFactory","packageName":"qx.ui.table","implementations":"qx.ui.table.celleditor.TextField,qx.ui.table.celleditor.ComboBox,qx.ui.table.celleditor.Dynamic,qx.ui.table.celleditor.PasswordField,qx.ui.table.celleditor.CheckBox","fullName":"qx.ui.table.ICellEditorFactory","type":"interface"},children:[
  {type:"desc",attributes:{"text":"<p>A factory creating widgets to use for editing table cells.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"createCellEditor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the cell to\n     create.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates a cell editor.</p>\n\n<p>The cellInfo map contains the following properties:\n<ul>\n<li>value (var): the cell&#8217;s value.</li>\n<li>row (int): the model index of the row the cell belongs to.</li>\n<li>col (int): the model index of the column the cell belongs to.</li>\n<li>xPos (int): the x position of the cell in the table pane.</li>\n<li>table (qx.ui.table.Table) reference to the table, the cell belongs to. </li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the widget that should be used as cell editor.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCellEditorValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellEditor"},children:[
          {type:"desc",attributes:{"text":"<p>The cell editor formally created by\n     {@link #createCellEditor}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the current value of a cell editor.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the current value from the editor.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}