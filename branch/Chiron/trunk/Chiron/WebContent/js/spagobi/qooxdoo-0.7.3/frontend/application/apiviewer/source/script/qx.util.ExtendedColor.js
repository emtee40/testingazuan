{type:"class",attributes:{"isStatic":"true","name":"ExtendedColor","packageName":"qx.util","fullName":"qx.util.ExtendedColor","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Support for extended <span class=\"caps\">CSS</span> color names</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"isExtendedColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the incoming value is a extended named color.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the color is a extended named color</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts an extended color to the <span class=\"caps\">RGB</span> value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the resulting <span class=\"caps\">RGB</span> array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toRgbString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts an extended color to a <span class=\"caps\">CSS</span> <span class=\"caps\">RGB</span> string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the resulting <span class=\"caps\">RGB</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"name":"EXTENDED"},children:[
      {type:"desc",attributes:{"text":"<p><span class=\"caps\">CSS</span> 3 colors (<a href=\"http://www.w3.org/TR/css3-color/#svg-color\">http://www.w3.org/TR/css3-color/#svg-color</a>)\nThis includes all classic <span class=\"caps\">HTML</span> Color names (<a href=\"http://www.w3.org/TR/css3-color/#html4\">http://www.w3.org/TR/css3-color/#html4</a>) and the <code>transparent</code> keyword.</p>"}}
      ]}
    ]}
  ]}