{type:"class",attributes:{"isStatic":"true","name":"String","packageName":"qx.dom","fullName":"qx.dom.String","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Generic escaping and unescaping of <span class=\"caps\">DOM</span> strings.</p>\n\n<p>{@link qx.html.String} for (un)escaping of <span class=\"caps\">HTML</span> strings.\n{@link qx.xml.String} for (un)escaping of <span class=\"caps\">XML</span> strings.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"escapeEntities"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>string to escape</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"charCodeToEntities"},children:[
          {type:"desc",attributes:{"text":"<p>entity to charcode map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>generic escaping method</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>escaped string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"stripTags"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>string containing tags</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove <span class=\"caps\">HTML</span>/XML tags from a string\nExample:</p>\n\n<pre class=\"javascript\">qx.dom.String.stripTags(\"&lt;h1>Hello&lt;/h1>\") == \"Hello\"</pre>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with stripped tags</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"unescapeEntities"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>string to unescape</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"entitiesToCharCode"},children:[
          {type:"desc",attributes:{"text":"<p>charcode to entity map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>generic unescaping method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}