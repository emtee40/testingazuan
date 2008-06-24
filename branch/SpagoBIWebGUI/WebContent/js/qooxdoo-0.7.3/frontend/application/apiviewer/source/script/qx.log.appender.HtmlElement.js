{type:"class",attributes:{"name":"HtmlElement","hasWarning":"true","packageName":"qx.log.appender","superClass":"qx.log.appender.Abstract","fullName":"qx.log.appender.HtmlElement","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An appender that writes all messages to an <span class=\"caps\">HTML</span> element.</p>\n\n<p>This class does not depend on qooxdoo widgets, so it also works when there\nare problems with widgets or when the widgets are not yet initialized.</p>"}},
  {type:"properties",children:[
    {type:"property",attributes:{"hasError":"true","name":"element","allowNull":"true","propertyType":"new","apply":"_applyElement","check":"Element"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"47"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"500","propertyType":"new","name":"maxMessages","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum number of messages to show. If null the number of messages is not\nlimited.</p>"}}
      ]},
    {type:"property",attributes:{"name":"useLongFormat","docFrom":"qx.log.appender.Abstract","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.log.appender.Abstract"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.log.appender.HtmlElement#element","name":"_applyElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyElement}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_prepare"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"94"}}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.log.appender.Abstract","overriddenFrom":"qx.log.appender.Abstract","name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"clear"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"114"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getElement","fromProperty":"element"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>element</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaxMessages","fromProperty":"maxMessages"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxMessages</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxMessages</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initElement","fromProperty":"element"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>element</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>element</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaxMessages","fromProperty":"maxMessages"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maxMessages</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxMessages</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetElement","fromProperty":"element"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>element</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaxMessages","fromProperty":"maxMessages"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxMessages</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setElement","fromProperty":"element"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>element</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaxMessages","fromProperty":"maxMessages"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maxMessages</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxMessages</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}