{type:"class",attributes:{"name":"Message","packageName":"qx.event.message","superClass":"qx.core.Object","fullName":"qx.event.message.Message","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A message to be dispatched on the message bus.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vName"}},
        {type:"param",attributes:{"name":"vData"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"oldProperty":"true","name":"data","propertyType":"fast"},children:[
      {type:"desc",attributes:{"text":"<p>Any data the sender wants to pass with the event.</p>"}}
      ]},
    {type:"property",attributes:{"oldProperty":"true","name":"name","propertyType":"fast"},children:[
      {type:"desc",attributes:{"text":"<p>Event name of the message. Based on this name the message is dispatched\nto the event listeners.</p>"}}
      ]},
    {type:"property",attributes:{"oldProperty":"true","name":"sender","propertyType":"fast"},children:[
      {type:"desc",attributes:{"text":"<p>A reference to the sending object.</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getData","fromProperty":"data"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>data</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #data}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>data</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSender","fromProperty":"sender"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>sender</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sender}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>sender</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}