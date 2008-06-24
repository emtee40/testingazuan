{type:"class",attributes:{"name":"Div","packageName":"qx.log.appender","superClass":"qx.log.appender.Abstract","fullName":"qx.log.appender.Div","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An appender that writes all messages to a div element.</p>\n\n<p>This class does not depend on qooxdoo widgets, so it also works when there\nare problems with widgets or when the widgets are not yet initialized.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"\"qx_log\"","name":"divId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the div element to write the\n       messages to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"\"log-body\"","propertyType":"new","name":"bodyClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for the body div {containing the log messages}.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"log-debug\"","propertyType":"new","name":"debugClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for a div showing a debug message.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"log-error\"","propertyType":"new","name":"errorClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for a div showing a error message.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"log-group\"","propertyType":"new","name":"groupClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for a div showing the name of the current group.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"log-head\"","propertyType":"new","name":"headClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for the head div {containing the clear button}.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"log-info\"","propertyType":"new","name":"infoClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for a div showing a info message.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"500","propertyType":"new","name":"maxMessages","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum number of messages to show. If null the number of messages is not\nlimited.</p>"}}
      ]},
    {type:"property",attributes:{"name":"useLongFormat","docFrom":"qx.log.appender.Abstract","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.log.appender.Abstract"}},
    {type:"property",attributes:{"defaultValue":"\"log-warn\"","propertyType":"new","name":"warnClassName","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> class name for a div showing a warn message.</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_createClearButtonHandler"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"logElem"},children:[
          {type:"desc",attributes:{"text":"<p>the element to clear when the handler is called.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates an onclick handler that clears a div element. This method is used to\ncreate a minimum closure.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the handler.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.log.appender.Abstract","overriddenFrom":"qx.log.appender.Abstract","name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBodyClassName","fromProperty":"bodyClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>bodyClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bodyClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>bodyClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDebugClassName","fromProperty":"debugClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>debugClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #debugClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>debugClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getErrorClassName","fromProperty":"errorClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>errorClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #errorClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>errorClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getGroupClassName","fromProperty":"groupClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>groupClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>groupClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeadClassName","fromProperty":"headClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>headClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #headClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>headClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getInfoClassName","fromProperty":"infoClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>infoClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #infoClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>infoClassName</code>.</p>"}},
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
    {type:"method",attributes:{"name":"getWarnClassName","fromProperty":"warnClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>warnClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #warnClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>warnClassName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBodyClassName","fromProperty":"bodyClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>bodyClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>bodyClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #bodyClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDebugClassName","fromProperty":"debugClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>debugClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>debugClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #debugClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initErrorClassName","fromProperty":"errorClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>errorClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>errorClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #errorClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initGroupClassName","fromProperty":"groupClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>groupClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>groupClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #groupClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHeadClassName","fromProperty":"headClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>headClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>headClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #headClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initInfoClassName","fromProperty":"infoClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>infoClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>infoClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #infoClassName}.</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initWarnClassName","fromProperty":"warnClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>warnClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>warnClassName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #warnClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBodyClassName","fromProperty":"bodyClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>bodyClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #bodyClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDebugClassName","fromProperty":"debugClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>debugClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #debugClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetErrorClassName","fromProperty":"errorClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>errorClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #errorClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetGroupClassName","fromProperty":"groupClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>groupClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #groupClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHeadClassName","fromProperty":"headClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>headClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #headClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetInfoClassName","fromProperty":"infoClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>infoClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #infoClassName}.</p>"}},
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
    {type:"method",attributes:{"name":"resetWarnClassName","fromProperty":"warnClassName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>warnClassName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #warnClassName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBodyClassName","fromProperty":"bodyClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>bodyClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>bodyClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bodyClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDebugClassName","fromProperty":"debugClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>debugClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>debugClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #debugClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setErrorClassName","fromProperty":"errorClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>errorClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>errorClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #errorClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setGroupClassName","fromProperty":"groupClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>groupClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>groupClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHeadClassName","fromProperty":"headClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>headClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>headClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #headClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setInfoClassName","fromProperty":"infoClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>infoClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>infoClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #infoClassName}.</p>"}},
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
      ]},
    {type:"method",attributes:{"name":"setWarnClassName","fromProperty":"warnClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>warnClassName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>warnClassName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #warnClassName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}