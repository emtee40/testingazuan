{type:"class",attributes:{"name":"Default","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Abstract","childClasses":"qx.ui.table.cellrenderer.Conditional,qx.ui.table.cellrenderer.Dynamic,qx.ui.table.cellrenderer.Password,qx.ui.table.cellrenderer.Replace,qx.ui.treevirtual.DefaultDataCellRenderer","fullName":"qx.ui.table.cellrenderer.Default","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>The default data cell renderer.</p>"}},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"STYLEFLAG_ITALIC","value":"4"}},
    {type:"constant",attributes:{"type":"Number","name":"STYLEFLAG_ALIGN_RIGHT","value":"1"}},
    {type:"constant",attributes:{"type":"Number","name":"STYLEFLAG_BOLD","value":"2"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_formatValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the cell to\n         create. This map has the same structure as in\n         {@link DataCellRenderer#createDataCell}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Formats a value.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the formatted value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","name":"_getCellClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","name":"_getContentHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getStyleFlags"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>cellInfo of the cell\n    See {@link #createDataCellHtml}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Determines the styles to apply to the cell</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the sum of any of the <span class=\"caps\">STYLEFLAGS</span> defined below</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useAutoAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>useAutoAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>useAutoAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useAutoAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useAutoAlign</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useAutoAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>useAutoAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useAutoAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleUseAutoAlign","fromProperty":"useAutoAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useAutoAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAutoAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"useAutoAlign","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the alignment should automatically be set according to the cell value.\nIf true numbers will be right-aligned.</p>"}}
      ]}
    ]}
  ]}