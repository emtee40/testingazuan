{type:"class",attributes:{"name":"Password","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Default","fullName":"qx.ui.table.cellrenderer.Password","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A cell renderer which hides cell values such as passwords form view\nby masking them by *s</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.table.cellrenderer.Default","name":"_getContentHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Overridden; called whenever the cell updates.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}