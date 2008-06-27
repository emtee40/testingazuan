{type:"class",attributes:{"name":"Gui","interfaces":"qx.application.IApplication","superClass":"qx.core.Target","fullName":"qx.application.Gui","type":"class","packageName":"qx.application"},children:[
  {type:"desc",attributes:{"text":"<p>This is the base class for all <span class=\"caps\">GUI</span> qooxdoo applications.</p>\n\n<p>All applications using qooxdoo widgets should be derived from\nthis class. Normally at least the {@link #main} method will\nbe overridden to define the <span class=\"caps\">GUI</span>.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_postload"},children:[
      {type:"desc",attributes:{"text":"<p>Preload all remaining images.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_postloaderDone"},children:[
      {type:"desc",attributes:{"text":"<p>Callback which is called once the post loading is completed.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_preload"},children:[
      {type:"desc",attributes:{"text":"<p>Start pre loading of the initially visible images.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_preloaderDone"},children:[
      {type:"desc",attributes:{"text":"<p>Callback which is called once the pre loading of the required images\nis completed.</p>"}}
      ]},
    {type:"method",attributes:{"name":"close"},children:[
      {type:"desc",attributes:{"text":"<p>Called in the document.onbeforeunload event of the browser. If the method\nreturns a string value, the user will be asked by the browser, whether\nhe really wants to leave the page. The return string will be displayed in\nthe message box.</p>"}},
      {type:"return",attributes:{"defaultValue":"null"},children:[
        {type:"desc",attributes:{"text":"<p>message text on unloading the page</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUiReady","fromProperty":"uiReady"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>uiReady</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>uiReady</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initUiReady","fromProperty":"uiReady"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>uiReady</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>uiReady</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isUiReady","fromProperty":"uiReady"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>uiReady</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"main"},children:[
      {type:"desc",attributes:{"text":"<p>Called in the document.onload event of the browser. This method should\nbe overridden to implement the <span class=\"caps\">GUI</span> setup code of the application.</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetUiReady","fromProperty":"uiReady"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>uiReady</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setUiReady","fromProperty":"uiReady"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>uiReady</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>uiReady</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"terminate"},children:[
      {type:"desc",attributes:{"text":"<p>Called in the document.onunload event of the browser. This method contains the last\ncode which is run inside the page and may contain cleanup code.</p>"}}
      ]},
    {type:"method",attributes:{"name":"toggleUiReady","fromProperty":"uiReady"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>uiReady</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #uiReady}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"uiReady","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the user interfacce has already been rendered</p>"}}
      ]}
    ]}
  ]}