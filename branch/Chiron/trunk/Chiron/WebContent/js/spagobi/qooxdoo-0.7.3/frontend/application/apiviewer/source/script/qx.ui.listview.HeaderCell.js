{type:"class",attributes:{"name":"HeaderCell","hasWarning":"true","packageName":"qx.ui.listview","superClass":"qx.ui.basic.Atom","fullName":"qx.ui.listview.HeaderCell","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.listview.HeaderCell","name":"list-view-header-cell"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vConfig"}},
        {type:"param",attributes:{"name":"vId"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"C_SORT_ASCENDING","value":"ascending"}},
    {type:"constant",attributes:{"type":"String","name":"C_SORT_DESCENDING","value":"descending"}}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"list-view-header-cell\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},
    {type:"property",attributes:{"name":"horizontalChildrenAlign","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"\"left\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},
    {type:"property",attributes:{"name":"overflow","docFrom":"qx.ui.core.Widget","defaultValue":"\"hidden\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"hasError":"true","name":"sortOrder","allowNull":"true","propertyType":"new","possibleValues":"\"ascending\",\"descending\"","apply":"_applySortOrder","event":"changeSortOrder"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"117"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeSortOrder"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #sortOrder}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.listview.HeaderCell#sortOrder","name":"_applySortOrder"},children:[
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
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"297"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"297"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseover"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"285"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"285"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"309"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"309"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNextSortOrder"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"179"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSortOrder","fromProperty":"sortOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>sortOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>sortOrder</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getView"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"168"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSortOrder","fromProperty":"sortOrder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>sortOrder</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>sortOrder</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #sortOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSortOrder","fromProperty":"sortOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>sortOrder</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #sortOrder}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSortOrder","fromProperty":"sortOrder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>sortOrder</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>sortOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"updateSort"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"200"}}
        ]}
      ]}
    ]}
  ]}