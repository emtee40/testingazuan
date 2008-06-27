{type:"class",attributes:{"name":"ButtonView","hasWarning":"true","packageName":"qx.ui.pageview.buttonview","superClass":"qx.ui.pageview.AbstractPageView","fullName":"qx.ui.pageview.buttonview.ButtonView","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>One of the widgets which could be used to structurize the interface.</p>\n\n<p>qx.ui.pageview.buttonview.ButtonView creates the typical apple-like tabview-replacements which could also\n be found in more modern versions of the settings dialog in Mozilla Firefox.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.pageview.buttonview.ButtonView","name":"button-view"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"button-view\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"possibleValues":"\"top\",\"right\",\"bottom\",\"left\"","hasError":"true","name":"barPosition","defaultValue":"\"top\"","propertyType":"new","apply":"_applyBarPosition","event":"changeBarPosition"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"65"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeBarPosition"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #barPosition}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.pageview.buttonview.ButtonView#barPosition","name":"_applyBarPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>barPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBarPosition}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getBarPosition","fromProperty":"barPosition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>barPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #barPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>barPosition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBarPosition","fromProperty":"barPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>barPosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>barPosition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #barPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBarPosition","fromProperty":"barPosition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>barPosition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #barPosition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBarPosition","fromProperty":"barPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>barPosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>barPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #barPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}