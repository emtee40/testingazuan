{type:"class",attributes:{"isStatic":"true","name":"Debug","packageName":"qx.dev","fullName":"qx.dev.Debug","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Useful debug capabilities</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"debugObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>The object to be recursively displayed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"initialMessage"},children:[
          {type:"desc",attributes:{"text":"<p>The initial message to be displayed.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String, null"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"10","name":"maxLevel"},children:[
          {type:"desc",attributes:{"text":"<p>The maximum level of recursion.  Objects beyond this level will not\n  be displayed.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"appender"},children:[
          {type:"desc",attributes:{"text":"<p>If not provided (or provided as null), the default appender of the\n  root will be used.  If provided, this should be an instance of an\n  appender to which the object debug will be sent.  For example, you\n  might pass, for this parameter, <code>new\n  qx.log.appender.Window()</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object, null"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Recursively display an object (as debug messages)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getFunctionName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"func"},children:[
          {type:"desc",attributes:{"text":"<p>member function to get the name of.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"\"all\"","name":"functionType"},children:[
          {type:"desc",attributes:{"text":"<p>Where to look for the function. Possible values are &#8220;members&#8221;, &#8220;statics&#8221;, &#8220;constructor&#8221;, &#8220;all&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the name of a member/static function or constructor defined using the new style class definition.\nIf the function could not be found <code>null</code> is returned.</p>\n\n<p>This function uses a linear search, so don&#8217;t use it in performance critical\ncode.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Name of the function (null if not found).</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]}
    ]}
  ]}