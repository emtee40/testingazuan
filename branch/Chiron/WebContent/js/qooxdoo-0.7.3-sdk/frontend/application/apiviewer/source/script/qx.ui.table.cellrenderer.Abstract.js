{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.ui.table.cellrenderer","superClass":"qx.core.Object","childClasses":"qx.ui.table.cellrenderer.Default,qx.ui.table.cellrenderer.Icon,qx.ui.treevirtual.SimpleTreeDataCellRenderer","fullName":"qx.ui.table.cellrenderer.Abstract","type":"class","interfaces":"qx.ui.table.ICellRenderer"},children:[
  {type:"desc",attributes:{"text":"<p>An abstract data cell renderer that does the basic coloring\n(borders, selected look, ...).</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_getCellClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>cellInfo of the cell</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get a string of the cell element&#8217;s <span class=\"caps\">HTML</span> classes.</p>\n\n<p>This method may be overridden by sub classes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The table cell <span class=\"caps\">HTML</span> classes as string.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getCellStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">CSS</span> styles that should be applied to the main div of this cell.</p>\n\n<p>This method may be overridden by sub classes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the <span class=\"caps\">CSS</span> styles of the main div.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getContentHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">HTML</span> that should be used inside the main div of this cell.</p>\n\n<p>This method may be overridden by sub classes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the inner <span class=\"caps\">HTML</span> of the cell.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.ICellRenderer","name":"createDataCellHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"}},
        {type:"param",attributes:{"name":"htmlArr"}}
        ]}
      ]}
    ]}
  ]}