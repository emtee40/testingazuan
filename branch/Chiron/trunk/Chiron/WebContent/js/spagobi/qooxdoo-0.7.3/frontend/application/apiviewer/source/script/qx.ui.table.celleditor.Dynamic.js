{type:"class",attributes:{"name":"Dynamic","hasWarning":"true","interfaces":"qx.ui.table.ICellEditorFactory","superClass":"qx.core.Target","fullName":"qx.ui.table.celleditor.Dynamic","type":"class","packageName":"qx.ui.table.celleditor"},children:[
  {type:"desc",attributes:{"text":"<p>A cell editor factory which can dynamically exchange the cell editor\nbased on information retrieved at runtime. This is useful when different\nrows in a column should have different cellEditors based on cell content\nor row metadata. A typical example would be a spreadsheet that has different\nkind of data in one column.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellEditorFactoryFunction"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"hasError":"true","name":"createCellEditor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates the cell editor based on the cellEditorFactory instance\nreturned by the function stored in the cellEditorFactoryFunction\nproperty. Passes the cellInfo map to the function.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>cellInfo</code> is not documented.","column":"24","line":"101"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCellEditorFactoryFunction","fromProperty":"cellEditorFactoryFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>cellEditorFactoryFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>cellEditorFactoryFunction</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getCellEditorValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellEditor"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Retrieves the value  the cell editor based on the current cellEditorFactory\ninstance.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>cellEditor</code> is not documented.","column":"26","line":"120"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCellEditorFactoryFunction","fromProperty":"cellEditorFactoryFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>cellEditorFactoryFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>cellEditorFactoryFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCellEditorFactoryFunction","fromProperty":"cellEditorFactoryFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>cellEditorFactoryFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCellEditorFactoryFunction","fromProperty":"cellEditorFactoryFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>cellEditorFactoryFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>cellEditorFactoryFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"cellEditorFactoryFunction","check":"Function"},children:[
      {type:"desc",attributes:{"text":"<p>Function that returns a cellEditorFactory instance which will be\nused for the row that is currently being edited. The function is\ndefined like this:</p>\n\n<pre class=\"javascript\">\nmyTable.getTableColumnModel().setCellEditorFactory(function(cellInfo){\n  // based on the cellInfo map or other information, return the\n  // appropriate cellEditorFactory\n  if (cellInfo.row == 5)\n    return new qx.ui.table.celleditor.CheckBox;\n  else\n    return new qx.ui.table.celleditor.TextField;\n});\n</pre>"}}
      ]}
    ]}
  ]}