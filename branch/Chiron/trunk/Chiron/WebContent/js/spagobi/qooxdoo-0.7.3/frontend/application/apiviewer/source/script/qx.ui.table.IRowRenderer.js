{type:"class",attributes:{"name":"IRowRenderer","packageName":"qx.ui.table","implementations":"qx.ui.table.rowrenderer.Default","fullName":"qx.ui.table.IRowRenderer","type":"interface"},children:[
  {type:"desc",attributes:{"text":"<p>Interface for a row renderer.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"createRowStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the row to\n     update. See {@link #updateDataRowElement} for more information.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Create a style string, which will be set as the style property of the row.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getRowClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the row to\n     update. See {@link #updateDataRowElement} for more information.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Create a <span class=\"caps\">HTML</span> class string, which will be set as the class property of the row.</p>"}}
      ]},
    {type:"method",attributes:{"name":"updateDataRowElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the row to\n     update.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"rowElement"},children:[
          {type:"desc",attributes:{"text":"<p>the <span class=\"caps\">DOM</span> element that renders the data row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates a data row.</p>\n\n<p>The rowInfo map contains the following properties:\n<ul>\n<li>rowData (var): contains the row data for the row.\n  The kind of this object depends on the table model, see\n  {@link TableModel#getRowData()}</li>\n<li>row (int): the model index of the row.</li>\n<li>selected (boolean): whether a cell in this row is selected.</li>\n<li>focusedRow (boolean): whether the focused cell is in this row.</li>\n<li>table (qx.ui.table.Table): the table the row belongs to.</li>\n</ul></p>"}}
      ]}
    ]}
  ]}