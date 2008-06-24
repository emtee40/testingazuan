{type:"class",attributes:{"isStatic":"true","name":"Package","hasWarning":"true","packageName":"qx.core","fullName":"qx.core.Package","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Interface for packages created by the new generator.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"loadPart"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the part</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"callback"},children:[
          {type:"desc",attributes:{"text":"<p>Function to execute on completetion</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"window","name":"self"},children:[
          {type:"desc",attributes:{"text":"<p>Context to execute the given function</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Loads a package asynchronously as defined by the config file at build time.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"loadScript"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"url"}},
        {type:"param",attributes:{"name":"callback"},children:[
          {type:"desc",attributes:{"text":"<p>Function to execute on completetion</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"window","name":"self"},children:[
          {type:"desc",attributes:{"text":"<p>Context to execute the given function</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Loads any script file asynchronously.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>name</code>.","column":"18","line":"56"}},
        {type:"error",attributes:{"msg":"Parameter <code>url</code> is not documented.","column":"18","line":"56"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}