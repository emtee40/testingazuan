{type:"class",attributes:{"packageName":"qx.util","fullName":"qx.util.StringBuilder","type":"class","name":"StringBuilder"},children:[
  {type:"desc",attributes:{"text":"<p>A string builder class</p>\n\n<p>+= operator is faster in Firefox and Opera.\nArray push/join is faster in Internet Explorer</p>\n\n<p>Even with this wrapper, which costs some time, this is\nfaster in Firefox than the alternative Array concat in\nall browsers (which is in relation to IE&#8217;s performance issues\nonly marginal). The IE performance loss caused by this\nwrapper is not relevant.</p>\n\n<p>So this class seems to be the best compromise to handle\nstring concatenation.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>variable number of strings to be added initially</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"add"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>variable number of strings to be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Append a variable number of string arguments. To only append\none use {@link #addOne} instead.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"clear"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the contents of the Stringbuilder\nequivalent to</p>\n\n<pre class=\"javascript\">str = \"\"; </pre>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"get"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the contents of the concatenated string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>string content</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"init"},children:[
      {type:"desc",attributes:{"text":"<p>Initializes the contents of the Stringbuilder\nequivalent to</p>\n\n<pre class=\"javascript\">str = \"\"; </pre>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Checks whether the strinb builder instance represents the epty string.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the string is empty</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toString"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the contents of the concatenated string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>string content</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}