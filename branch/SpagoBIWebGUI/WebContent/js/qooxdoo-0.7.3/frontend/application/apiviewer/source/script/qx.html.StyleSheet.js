{type:"class",attributes:{"isStatic":"true","name":"StyleSheet","packageName":"qx.html","fullName":"qx.html.StyleSheet","type":"class"},children:[
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"addImport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vUrl"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the external stylesheet file</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>add an import of an external <span class=\"caps\">CSS</span> file to a stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"addRule"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the target Stylesheet object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSelector"},children:[
          {type:"desc",attributes:{"text":"<p>the selector</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStyle"},children:[
          {type:"desc",attributes:{"text":"<p>style rule</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>insert a new <span class=\"caps\">CSS</span> rule into a given Stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vCssText"},children:[
          {type:"desc",attributes:{"text":"<p>optional string of css rules</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>create a new Stylesheet node and append it to the document</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>stylesheet object</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Stylesheet"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"includeFile"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vHref"},children:[
          {type:"desc",attributes:{"text":"<p>Href value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Include a <span class=\"caps\">CSS</span> file</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeAllImports"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>remove all imports from a stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeAllRules"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>remove all <span class=\"caps\">CSS</span> rules from a stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeImport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vUrl"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the importet <span class=\"caps\">CSS</span> file</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>removes an import from a stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeRule"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"desc",attributes:{"text":"<p>the Stylesheet</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSelector"},children:[
          {type:"desc",attributes:{"text":"<p>the Selector of the rule to remove</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>remove a <span class=\"caps\">CSS</span> rule from a stylesheet</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}