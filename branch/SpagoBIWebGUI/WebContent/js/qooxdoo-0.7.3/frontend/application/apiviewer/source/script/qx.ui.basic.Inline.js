{type:"class",attributes:{"name":"Inline","packageName":"qx.ui.basic","superClass":"qx.ui.layout.CanvasLayout","fullName":"qx.ui.basic.Inline","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A CanvasLayout, which can be placed inside an arbitrary <span class=\"caps\">HTML</span> <span class=\"caps\">DOM</span> element.\nThis widget can be used to embed qooxdoo widgets inside a normal\n<span class=\"caps\">HTML</span> page.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vId"},children:[
          {type:"desc",attributes:{"text":"<p>id of the <span class=\"caps\">DOM</span> element which should become the\n    parent node of this widget.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getInlineNodeId","fromProperty":"inlineNodeId"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>inlineNodeId</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #inlineNodeId}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>inlineNodeId</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initInlineNodeId","fromProperty":"inlineNodeId"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>inlineNodeId</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>inlineNodeId</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #inlineNodeId}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetInlineNodeId","fromProperty":"inlineNodeId"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>inlineNodeId</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #inlineNodeId}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setInlineNodeId","fromProperty":"inlineNodeId"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>inlineNodeId</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>inlineNodeId</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #inlineNodeId}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"inlineNodeId","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>id of the <span class=\"caps\">DOM</span> element which should become the\nparent node of this widget. Don&#8217;t change this property after the widget\nis rendered!</p>"}}
      ]}
    ]}
  ]}