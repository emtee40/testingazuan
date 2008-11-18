{type:"class",attributes:{"isAbstract":"true","name":"LogEventProcessor","packageName":"qx.log","superClass":"qx.core.Object","childClasses":"qx.log.Logger,qx.log.appender.Abstract","fullName":"qx.log.LogEventProcessor","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Processes log events. May be configured with filters in order to specify\nwhich log events should be processed.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_getDefaultFilter"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the default filter from the chain. If the head filter is no default\nfilter, the chain will be cleared and a default filter will be created.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default filter.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Filter"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addFilter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"filter"},children:[
          {type:"desc",attributes:{"text":"<p>The filter to append.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Filter"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Appends a filter to the filter chain.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"clearFilters"},children:[
      {type:"desc",attributes:{"text":"<p>Clears the filter chain.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"decideLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event to check.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Decides whether a log event is processed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>{@link Filter#ACCEPT}, {@link Filter#DENY} or\n      {@link Filter#NEUTRAL}.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeadFilter"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the head filter from the chain. Returns null if there are no filters.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the head filter from the chain.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Filter"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>The log event to process.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Processes a log event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"enabled"},children:[
          {type:"desc",attributes:{"text":"<p>whether event processing should be enabled.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets whether event processing should be enabled.</p>\n\n<p>Note: This will clear all custom filters.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinLevel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"minLevel"},children:[
          {type:"desc",attributes:{"text":"<p>the new min level.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the min level an event must have in order to be processed.</p>\n\n<p>Note: This will clear all custom filters.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}