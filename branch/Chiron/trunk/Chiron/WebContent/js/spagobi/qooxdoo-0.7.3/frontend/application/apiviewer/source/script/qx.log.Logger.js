{type:"class",attributes:{"name":"Logger","packageName":"qx.log","superClass":"qx.log.LogEventProcessor","fullName":"qx.log.Logger","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A logger. Logs messages of one log category.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>The category name of this logger. (Normally a class or\n   package name)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"parentLogger"},children:[
          {type:"desc",attributes:{"text":"<p>The parent logger.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Logger"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_WARN","value":"600"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">WARN</span> level designates potentially harmful situations.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_OFF","value":"1000"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">OFF</span> has the highest possible rank and is intended to turn off\nlogging.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Null","name":"ROOT_LOGGER","value":"null"},children:[
      {type:"desc",attributes:{"text":"<p>The root logger. This is the root of the logger tree. All loggers\nshould be a child or grand child of this root logger.</p>\n\n<p>This logger logs by default everything greater than level <span class=\"caps\">INFO</span> to a log\nwindow.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Logger"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_ALL","value":"0"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">ALL</span> level has the lowest possible rank and is intended to turn on\nall logging.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_ERROR","value":"700"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">ERROR</span> level designates error events that might still allow the\napplication to continue running.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_DEBUG","value":"200"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DEBUG</span> Level designates fine-grained informational events that are\nmost useful to debug an application.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_FATAL","value":"800"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">FATAL</span> level designates very severe error events that will\npresumably lead the application to abort.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"LEVEL_INFO","value":"500"},children:[
      {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">INFO</span> level designates informational messages that highlight the\nprogress of the application at coarse-grained level.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"deprecatedClassWarning"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>reference to the deprecated class.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"","name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>Optional message which is printed.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Prints a class deprecation warning and a stack trace if the setting\n<code>&#8220;qx.deprecationWarnings&#8221;</code> is set to <code>on</code>.</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"deprecatedMethodWarning"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>reference to the deprecated function. This is\n    arguments.callee is the calling method is deprecated.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"","name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>Optional message which is printed.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Prints a method deprecation warning and a stack trace if the setting\n<code>&#8220;qx.deprecationWarnings&#8221;</code> is set to <code>on</code>.</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getClassLogger"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>The class of which to return the logger.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the logger of a class.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"addAppender"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"appender"},children:[
          {type:"desc",attributes:{"text":"<p>the appender to add.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Appender"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds an appender.</p>\n\n<p>If a logger has an appender, log events will not be passed to the\nappenders of parent loggers. If you want this behaviour, also append a\n{@link ForwardAppender}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"appendLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>The event to append.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Passes a log event to the appenders. If the logger has no appenders the\nevent will be passed to the appenders of the parent logger, and so on.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"debug"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
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
    {type:"method",attributes:{"name":"error"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
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
    {type:"method",attributes:{"name":"fatal"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, its\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a fatal message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the name of this logger. (Normally a class or package name)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the name.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getParentLogger"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the parent logger.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the parent logger.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Logger"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.log.LogEventProcessor","overriddenFrom":"qx.log.LogEventProcessor","name":"handleLogEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"indent"},children:[
      {type:"desc",attributes:{"text":"<p>Indents all following log messages by one.</p>\n\n<p>This affects all log messages. Even those of other loggers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"info"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
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
    {type:"method",attributes:{"name":"log"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"level"},children:[
          {type:"desc",attributes:{"text":"<p>the log level.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"trace"},children:[
          {type:"desc",attributes:{"text":"<p>optional stack trace string to display</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"string"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"measure"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
          {type:"desc",attributes:{"text":"<p>the exception to log.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a debug message and measures the time since the last call of measure.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"measureReset"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the measure timer.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"printStackTrace"},children:[
      {type:"desc",attributes:{"text":"<p>Logs the current stack trace as a debug message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"removeAllAppenders"},children:[
      {type:"desc",attributes:{"text":"<p>Removes all appenders.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"removeAppender"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"appender"},children:[
          {type:"desc",attributes:{"text":"<p>the appender to remove.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Appender"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes an appender.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"unindent"},children:[
      {type:"desc",attributes:{"text":"<p>Unindents all following log messages by one.</p>\n\n<p>This affects all log messages. Even those of other loggers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"warn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"msg"},children:[
          {type:"desc",attributes:{"text":"<p>the message to log. If this is not a string, the\n     object dump will be logged.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"instanceId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the instance the log message comes from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"exc"},children:[
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