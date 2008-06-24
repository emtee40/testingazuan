{type:"class",attributes:{"name":"Date","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Conditional","fullName":"qx.ui.table.cellrenderer.Date","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Specific data cell renderer for dates.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"align"}},
        {type:"param",attributes:{"name":"color"}},
        {type:"param",attributes:{"name":"style"}},
        {type:"param",attributes:{"name":"weight"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.cellrenderer.Date#dateFormat","name":"_applyDateFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.format.DateFormat"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.format.DateFormat"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>dateFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyDateFormat}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Default","name":"_getCellClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDateFormat","fromProperty":"dateFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dateFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dateFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dateFormat</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDateFormat","fromProperty":"dateFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dateFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dateFormat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dateFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDateFormat","fromProperty":"dateFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dateFormat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dateFormat}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDateFormat","fromProperty":"dateFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dateFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dateFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dateFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"apply":"_applyDateFormat","defaultValue":"null","propertyType":"new","name":"dateFormat","check":"qx.util.format.DateFormat"},children:[
      {type:"desc",attributes:{"text":"<p>DateFormat used to format the data.</p>"}}
      ]}
    ]}
  ]}