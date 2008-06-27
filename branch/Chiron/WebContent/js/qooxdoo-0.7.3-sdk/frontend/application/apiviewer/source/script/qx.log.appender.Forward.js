{type:"class",attributes:{"name":"Forward","packageName":"qx.log.appender","superClass":"qx.log.appender.Abstract","fullName":"qx.log.appender.Forward","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An appender that forwards all log events to a log event processor.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"targetProcessor"},children:[
          {type:"desc",attributes:{"text":"<p>The log event processor Where to\n   pass the log events.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.log.LogEventProcessor"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"docFrom":"qx.log.appender.Abstract","overriddenFrom":"qx.log.appender.Abstract","name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]}
    ]}
  ]}