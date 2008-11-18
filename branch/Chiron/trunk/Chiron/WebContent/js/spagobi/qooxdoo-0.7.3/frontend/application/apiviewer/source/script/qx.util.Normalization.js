{type:"class",attributes:{"isStatic":"true","name":"Normalization","packageName":"qx.util","fullName":"qx.util.Normalization","type":"class"},children:[
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__umlautsLong"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChar"},children:[
          {type:"desc",attributes:{"text":"<p>char to convert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Private helper</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__umlautsShort"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChar"},children:[
          {type:"desc",attributes:{"text":"<p>char to convert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Private helper</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"umlautsLong"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vString"},children:[
          {type:"desc",attributes:{"text":"<p>string to normalize</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts (German) umlauts in the string to a two letter <span class=\"caps\">ASCI</span> form.\nExample: &Auml; -> Ae, &uuml; -> ue, &szlig; -> ss, ...</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>normalized string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"umlautsShort"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vString"},children:[
          {type:"desc",attributes:{"text":"<p>string to normalize</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts (German) umlauts in the string to a one letter <span class=\"caps\">ASCI</span> form.\nExample: &Auml; -> A, &uuml; -> u, &szlig; -> s, ...</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>normalized string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}