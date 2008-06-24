{type:"class",attributes:{"isStatic":"true","name":"StackTrace","packageName":"qx.dev","fullName":"qx.dev.StackTrace","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Methods to get information about the JavaScript call stack.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__fileNameToClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fileName"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the JavaScript file</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert an <span class=\"caps\">URL</span> of a JavaScript class into a class name if the file is named using\nthe qooxdoo naming conventions.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>class name of the file if conversion was possible. Otherwhise the\n    fileName is returned unmodified.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getFunctionName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>function the get the name for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Try to get a sensible textual description of a function object.\nThis may be the class/mixin and method name of a function\nor at least the signature of the function.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Name of the function.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getStackTrace"},children:[
      {type:"desc",attributes:{"text":"<p>Get a stack trace of the current position in the code.</p>\n\n<p>Browser compatibility:\n<ul>\n  <li> Mozilla combines the output of {@link #getStackTraceFromError}\n       and {@link getStackTraceFromCaller} and thus generates the richest trace.\n  </li>\n  <li> Internet Explorer and WebKit always use {@link getStackTraceFromCaller}</li>\n  <li> Opera is able to return file/class names and line numbers.</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Stack trace of the current position in the code. Each line in the array\n    represents one call in the stack trace.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getStackTraceFromCaller"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>arguments variable.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get a stack trace from the arguments special variable using the\n<code>caller</code> property. This is currently not supported\nfor Opera.</p>\n\n<p>This methods returns class/mixin and function names of each step\nin the call stack.</p>\n\n<p>Recursion is not supported.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Stack trace of caller of the function the arguments variable belongs to.\n    Each line in the array represents one call in the stack trace.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getStackTraceFromError"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"error"},children:[
          {type:"desc",attributes:{"text":"<p>Error exception instance.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Error"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Try to get a stack trace from an Error object. Mozilla sets the field\n<code>stack</code> for Error objects thrown using <code>throw new Error()</code>.\nFrom this field it is possible to get a stack trace from the position,\nthe exception was thrown.</p>\n\n<p>This will get the JavaScript file names and the line numbers of each call.\nThe file names are converted into qooxdoo class names is possible.</p>\n\n<p>This function works best in Mozilla based browsers. Opera returns useful\ninformation only for browser generated exceptions. WebKit will at least\nreturn the position of the error.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Stack trace of the exception. Each line in the array\n    represents one call in the stack trace.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String","dimensions":"1"}}
          ]}
        ]}
      ]}
    ]}
  ]}