{type:"class",attributes:{"name":"RingBuffer","packageName":"qx.log.appender","superClass":"qx.log.appender.Abstract","fullName":"qx.log.appender.RingBuffer","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An appender that writes all messages to a memory container. The messages\ncan be retrieved later, f. i. when an error dialog pops up and the question\narises what actions have caused the error.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.log.appender.RingBuffer#maxMessages","name":"_applyMaxMessages"},children:[
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
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.log.appender.Abstract","overriddenFrom":"qx.log.appender.Abstract","name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"formatLogEvents"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"count"},children:[
          {type:"desc",attributes:{"text":"<p>The number of events to retreive. If there are more events than the\n                     given count, the oldest ones will not be returned.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a string holding the information of log events which have been logged previously.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
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
    {type:"method",attributes:{"name":"resetMaxMessages","fromProperty":"maxMessages"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxMessages</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"retrieveLogEvents"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"count"},children:[
          {type:"desc",attributes:{"text":"<p>The number of events to retreive. If there are more events than the\n                     given count, the oldest ones will not be returned.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns log events which have been logged previously.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>array of stored log events</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"array"}}
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
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"apply":"_applyMaxMessages","defaultValue":"50","propertyType":"new","name":"maxMessages","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum number of messages to hold. If null the number of messages is not\nlimited. Warning: Changing this property will clear the events logged so far.</p>"}}
      ]}
    ]}
  ]}