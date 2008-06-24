{type:"class",attributes:{"isStatic":"true","name":"Function","hasWarning":"true","packageName":"qx.lang","fullName":"qx.lang.Function","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Collection of helper methods operating on functions.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"bind"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>function to bind</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"self"},children:[
          {type:"desc",attributes:{"text":"<p>object, which shuold act as the &#8216;this&#8217; variable inside the bound function</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>multiple arguments which should be static arguments for the given function</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Bind a function to an object. Each time the bound method is called the\n&#8216;this&#8217; variable is guaranteed to be &#8216;self&#8217;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the bound function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"bindEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>function to bind</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"self"},children:[
          {type:"desc",attributes:{"text":"<p>object, which shuold act as the &#8216;this&#8217; variable inside the bound function</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Bind a function which works as an event listener to an object. Each time\nthe bound method is called the &#8216;this&#8217; variable is guaranteed to be &#8216;self&#8217;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the bound function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getCaller"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>The local arguments variable</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Extract the caller of a function from the arguments variable.\nThis will not work in Opera.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>A reference to the calling function or &#8220;undefined&#8221; if caller is not supported.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}},
          {type:"entry",attributes:{"type":"undefined"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"globalEval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"data"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>data</code> is not documented.","column":"18","line":"42"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"42"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnFalse"},children:[
      {type:"desc",attributes:{"text":"<p>Simply return false.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns false.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Used to return a refernce to an singleton. Classes which should act as singletons can use this\nfunction to implement the &#8220;getInstance&#8221; methods.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnNegativeIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Simply return a negative index (-1).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns -1.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnNull"},children:[
      {type:"desc",attributes:{"text":"<p>Simply return null.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns null.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnThis"},children:[
      {type:"desc",attributes:{"text":"<p>Return &#8220;this&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns &#8220;this&#8221;.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnTrue"},children:[
      {type:"desc",attributes:{"text":"<p>Simply return true.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns true.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"returnZero"},children:[
      {type:"desc",attributes:{"text":"<p>Simply return 0.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Always returns 0.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]}
    ]}
  ]}