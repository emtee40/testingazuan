{type:"class",attributes:{"isStatic":"true","name":"Dimension","packageName":"qx.bom.element","fullName":"qx.bom.element.Dimension","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Contains support for calculating dimensions of <span class=\"caps\">HTML</span> elements.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__usesNativeBorderBox"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the given elements defaults to the &#8220;border-box&#8221; Microsoft model in all cases.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the element uses &#8220;border-box&#8221; independently from the doctype</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getBoxSizing"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to modify</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"sizing"},children:[
          {type:"desc",attributes:{"text":"<p>&#8220;content-box&#8221; or &#8220;border-box&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Query the used box sizing of the given element. Please note that\nthis is not dynamically modifyable at element level in <span class=\"caps\">MSHTML</span>.\nThe query is a result of the document standard/quirks mode then.</p>\n\n<p>Allowed values:</p>\n\n<ul>\n<li>&#8220;content-box&#8221; = W3C model (dimensions are content specific)</li>\n<li>&#8220;border-box&#8221; = Microsoft model (dimensions are box specific incl. border and padding)</li>\n</ul>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getClientHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the client height of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>inner height of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getClientWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the client width of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>inner width of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the (box) height of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>height of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getScrollHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the scroll height of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>scroll height of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getScrollWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the scroll width of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>scroll width of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the (box) width of the given element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>width of the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"setBoxSizing"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to modify</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"sizing"},children:[
          {type:"desc",attributes:{"text":"<p>&#8220;content-box&#8221; or &#8220;border-box&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Modifies the box sizing of the given element. Please note that this\nis not possible in <span class=\"caps\">MSHTML</span>. There is no exception or warning in this case.</p>\n\n<p>Allowed values:</p>\n\n<ul>\n<li>&#8220;content-box&#8221; = W3C model (dimensions are content specific)</li>\n<li>&#8220;border-box&#8221; = Microsoft model (dimensions are box specific incl. border and padding)</li>\n</ul>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}