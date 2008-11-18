{type:"class",attributes:{"name":"IHeaderRenderer","packageName":"qx.ui.table","implementations":"qx.ui.table.headerrenderer.Default","fullName":"qx.ui.table.IHeaderRenderer","type":"interface"},children:[
  {type:"desc",attributes:{"text":"<p>A cell renderer for header cells.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"createHeaderCell"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the cell to\n     create.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates a header cell.</p>\n\n<p>The cellInfo map contains the following properties:\n<ul>\n<li>col (int): the model index of the column.</li>\n<li>xPos (int): the x position of the column in the table pane.</li>\n<li>name (string): the name of the column.</li>\n<li>editable (boolean): whether the column is editable.</li>\n<li>sorted (boolean): whether the column is sorted.</li>\n<li>sortedAscending (boolean): whether sorting is ascending.</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the widget that renders the header cell.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateHeaderCell"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the cell to\n     create. This map has the same structure as in {@link #createHeaderCell}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"cellWidget"},children:[
          {type:"desc",attributes:{"text":"<p>the widget that renders the header cell. This is\n     the same widget formally created by {@link #createHeaderCell}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates a header cell.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}