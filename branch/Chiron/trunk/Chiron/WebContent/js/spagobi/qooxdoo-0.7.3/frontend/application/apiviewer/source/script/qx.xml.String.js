{type:"class",attributes:{"isStatic":"true","name":"String","packageName":"qx.xml","fullName":"qx.xml.String","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Escaping and unescaping of <span class=\"caps\">XML</span> strings.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"escape"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to be escaped</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Escapes the characters in a <code>String</code> using <span class=\"caps\">XML</span> entities.</p>\n\n<p>For example: <tt>&#8220;bread&#8221; &amp; &#8220;butter&#8221;</tt> =>\n<tt>&amp;quot;bread&amp;quot; &amp;amp; &amp;quot;butter&amp;quot;</tt>.</p>\n\n<p>Supports only the four basic <span class=\"caps\">XML</span> entities (gt, lt, quot, amp).\nDoes not support DTDs or external entities.\nNote that unicode characters greater than 0&#215;7f are currently escaped to their numerical \\u equivalent.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the escaped string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"unescape"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to be unescaped</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Unescapes a string containing <span class=\"caps\">XML</span> entity escapes to a string\ncontaining the actual Unicode characters corresponding to the\nescapes.</p>\n\n<p>Supports only the four basic <span class=\"caps\">XML</span> entities (gt, lt, quot, amp).\nDoes not support DTDs or external entities.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the unescaped string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}