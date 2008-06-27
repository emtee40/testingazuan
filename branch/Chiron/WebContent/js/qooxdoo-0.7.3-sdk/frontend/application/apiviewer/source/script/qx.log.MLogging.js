{type:"class",attributes:{"name":"MLogging","packageName":"qx.log","includer":"qx.core.Object","fullName":"qx.log.MLogging","type":"mixin"},children:[
  {type:"desc",attributes:{"text":"<p>The logging interface.</p>\n\n<p>Convenience functions to use the logging system of qooxdoo.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"isMixin":"true","name":"debug"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n         object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a debug message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"error"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs an error message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"getLogger"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the logger of this class.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the logger of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.log.Logger"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"info"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs an info message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"printStackTrace"},children:[
      {type:"desc",attributes:{"text":"<p>Logs the current stack trace as a debug message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"warn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a warning message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}