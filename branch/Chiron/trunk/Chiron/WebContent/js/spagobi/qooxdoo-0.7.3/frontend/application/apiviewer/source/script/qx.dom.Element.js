{type:"class",attributes:{"isStatic":"true","name":"Element","packageName":"qx.dom","fullName":"qx.dom.Element","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Crossbrowser operations on <span class=\"caps\">DOM</span> Elements</p>"}},
  {type:"deprecated"},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"cleanWhitespace"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"el"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> el</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes whitespace-only text node children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTextContent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"el"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the text content of a <span class=\"caps\">DOM</span> element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The text content of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isEmpty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"el"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> el</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Checks if a el has no content</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"setTextContent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"el"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"val"},children:[
          {type:"desc",attributes:{"text":"<p>the new text content of the element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the textValue of the given <span class=\"caps\">DOM</span> el (<a href=\"http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent\">http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent</a>).\nWrapper for el.innerText and el.textContent.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}