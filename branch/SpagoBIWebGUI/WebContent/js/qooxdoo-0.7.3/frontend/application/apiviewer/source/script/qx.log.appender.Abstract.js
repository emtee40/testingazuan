{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.log.appender","superClass":"qx.log.LogEventProcessor","childClasses":"qx.log.appender.Alert,qx.log.appender.Div,qx.log.appender.FireBug,qx.log.appender.Forward,qx.log.appender.HtmlElement,qx.log.appender.JsUnit,qx.log.appender.Native,qx.log.appender.RingBuffer,qx.log.appender.Window","fullName":"qx.log.appender.Abstract","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An appender. Does the actual logging.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>The event to append.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Appends a log event to the log.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"formatLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>The log event to format.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Formats a log event.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The formatted event.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useLongFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>useLongFormat</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.log.LogEventProcessor","overriddenFrom":"qx.log.LogEventProcessor","name":"handleLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>useLongFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useLongFormat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useLongFormat</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useLongFormat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>useLongFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useLongFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleUseLongFormat","fromProperty":"useLongFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useLongFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useLongFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"useLongFormat","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the logger name and log level should be included in the formatted log message.</p>"}}
      ]}
    ]}
  ]}