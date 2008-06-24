{type:"class",attributes:{"isStatic":"true","name":"Document","packageName":"qx.bom","fullName":"qx.bom.Document","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Includes library functions to work with the current document.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"window","name":"win"},children:[
          {type:"desc",attributes:{"text":"<p>The window to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the height of the document.</p>\n\n<p>Internet Explorer in standard mode stores the properitary <code>scrollHeight</code> property\non the <code>documentElement</code>, but in quirks mode on the body element. All\nother known browsers simply store the correct value on the <code>documentElement</code>.</p>\n\n<p>If the viewport is higher than the document the viewport height is returned.</p>\n\n<p>As the html element has no visual appearance it also can not scroll. This\nmeans that we must use the body <code>scrollHeight</code> in all non mshtml clients.</p>\n\n<p>Verified to correctly work with:</p>\n\n<ul>\n<li>Mozilla Firefox 2.0.0.4</li>\n<li>Opera 9.2.1</li>\n<li>Safari 3.0 beta (3.0.2)</li>\n<li>Internet Explorer 7.0</li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The height of the actual document (which includes the body and its margin).</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"window","name":"win"},children:[
          {type:"desc",attributes:{"text":"<p>The window to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the width of the document.</p>\n\n<p>Internet Explorer in standard mode stores the properitary <code>scrollWidth</code> property\non the <code>documentElement</code>, but in quirks mode on the body element. All\nother known browsers simply store the correct value on the <code>documentElement</code>.</p>\n\n<p>If the viewport is wider than the document the viewport width is returned.</p>\n\n<p>As the html element has no visual appearance it also can not scroll. This\nmeans that we must use the body <code>scrollWidth</code> in all non mshtml clients.</p>\n\n<p>Verified to correctly work with:</p>\n\n<ul>\n<li>Mozilla Firefox 2.0.0.4</li>\n<li>Opera 9.2.1</li>\n<li>Safari 3.0 beta (3.0.2)</li>\n<li>Internet Explorer 7.0</li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The width of the actual document (which includes the body and its margin).</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isQuirksMode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"window","name":"win"},children:[
          {type:"desc",attributes:{"text":"<p>The window to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the document is in quirks mode (e.g. non <span class=\"caps\">XHTML</span>, HTML4 Strict or missing doctype)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when containing document is in quirks mode</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isStandardMode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"window","name":"win"},children:[
          {type:"desc",attributes:{"text":"<p>The window to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the document is in quirks mode (e.g. non <span class=\"caps\">XHTML</span>, HTML4 Strict or missing doctype)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when containing document is in quirks mode</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}