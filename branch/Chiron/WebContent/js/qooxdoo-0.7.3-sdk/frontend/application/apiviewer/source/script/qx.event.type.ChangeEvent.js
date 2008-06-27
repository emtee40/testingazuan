{type:"class",attributes:{"name":"ChangeEvent","hasWarning":"true","packageName":"qx.event.type","superClass":"qx.event.type.Event","fullName":"qx.event.type.ChangeEvent","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Event object for property changes.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"type"},children:[
          {type:"desc",attributes:{"text":"<p>the type name of the event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>additional value which should be passed to the event listener</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>additional old value which should be passed to the event listener</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"oldValue","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"66"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"value","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"65"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getData"},children:[
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>use {@link #getValue} instead</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the event data</p>"}}
      ]},
    {type:"method",attributes:{"name":"getOldValue","fromProperty":"oldValue"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>oldValue</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #oldValue}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>oldValue</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}