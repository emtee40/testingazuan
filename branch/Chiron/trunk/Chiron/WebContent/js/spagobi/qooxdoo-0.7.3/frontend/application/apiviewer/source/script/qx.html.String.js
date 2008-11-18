{type:"class",attributes:{"isStatic":"true","name":"String","packageName":"qx.html","fullName":"qx.html.String","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A Collection of utility functions to escape and unescape strings.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"escape"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the String to escape</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Escapes the characters in a <code>String</code> using <span class=\"caps\">HTML</span> entities.</p>\n\n<p>For example: <tt>&#8220;bread&#8221; &amp; &#8220;butter&#8221;</tt> => <tt>&amp;quot;bread&amp;quot; &amp;amp; &amp;quot;butter&amp;quot;</tt>.\nSupports all known <span class=\"caps\">HTML</span> 4.0 entities, including funky accents.</p>\n\n<ul>\n<li><a href=\"http://www.w3.org/TR/REC-html32#latin1\"><span class=\"caps\">HTML</span> 3.2 Character Entities for <span class=\"caps\">ISO</span> Latin-1</a></li>\n<li><a href=\"http://www.w3.org/TR/REC-html40/sgml/entities.html\"><span class=\"caps\">HTML</span> 4.0 Character entity references</a></li>\n<li><a href=\"http://www.w3.org/TR/html401/charset.html#h-5.3\"><span class=\"caps\">HTML</span> 4.01 Character References</a></li>\n<li><a href=\"http://www.w3.org/TR/html401/charset.html#code-position\"><span class=\"caps\">HTML</span> 4.01 Code positions</a></li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a new escaped String</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#unescape"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the String to convert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a plain text string into <span class=\"caps\">HTML</span>.\nThis is similar to {@link #escape} but converts new lines to\n<tt>&amp;lt:br&amp;gt:</tt> and preserves whitespaces.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a new converted String</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#escape"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">HTML</span> string to converts</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts <span class=\"caps\">HTML</span> to plain text.</p>\n\n<ul>\n<li>Strips all <span class=\"caps\">HTML</span> tags</li>\n<li>converts <tt>&amp;lt:br&amp;gt:</tt> to new line</li>\n<li>unescapes <span class=\"caps\">HTML</span> entities</li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>plain text representaion of the <span class=\"caps\">HTML</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"unescape"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the String to unescape, may be null</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Unescapes a string containing entity escapes to a string\ncontaining the actual Unicode characters corresponding to the\nescapes. Supports <span class=\"caps\">HTML</span> 4.0 entities.</p>\n\n<p>For example, the string &#8221;&amp;lt;Fran&amp;ccedil;ais&amp;gt;&#8221;\nwill become &#8221;&lt;Fran&ccedil;ais&gt;&#8221;</p>\n\n<p>If an entity is unrecognized, it is left alone, and inserted\nverbatim into the result string. e.g. &#8221;&amp;gt;&amp;zzzz;x&#8221; will\nbecome &#8221;&gt;&amp;zzzz;x&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a new unescaped String</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#escape"}}
      ]}
    ]}
  ]}