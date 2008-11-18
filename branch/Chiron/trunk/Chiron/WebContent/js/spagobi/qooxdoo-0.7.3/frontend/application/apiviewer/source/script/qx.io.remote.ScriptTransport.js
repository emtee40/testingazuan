{type:"class",attributes:{"name":"ScriptTransport","hasWarning":"true","packageName":"qx.io.remote","superClass":"qx.io.remote.AbstractRemoteTransport","fullName":"qx.io.remote.ScriptTransport","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Transports requests to a server using dynamic script tags.</p>\n\n<p>This class should not be used directly by client programmers.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_requestFinished"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"id"},children:[
          {type:"desc",attributes:{"text":"<p>Id of the corresponding transport object,\n    which is passesd as an <span class=\"caps\">URL</span> parameter to the server an</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"content"},children:[
          {type:"desc",attributes:{"text":"<p>This string is passed to the content property\n    of the {@link #Response} object.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This method can be called by the script loaded by the ScriptTransport\nclass.</p>"}}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"isSupported"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"97"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_switchReadyState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vReadyState"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vReadyState</code> is not documented.","column":"25","line":"254"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"254"}}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getFetchedLength"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the length of the content as fetched thus far</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getResponseContent"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"379"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getResponseHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"25","line":"307"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"307"}}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getResponseHeaders"},children:[
      {type:"desc",attributes:{"text":"<p>Provides an hash of all response headers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getStatusCode"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the current status code of the request if available or -1 if not.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getStatusText"},children:[
      {type:"desc",attributes:{"text":"<p>Provides the status text for the current request if available and null otherwise.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"string"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"send"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"181"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"setRequestHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vValue"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"24","line":"290"}},
        {type:"error",attributes:{"msg":"Parameter <code>vValue</code> is not documented.","column":"24","line":"290"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"290"}}
        ]}
      ]}
    ]}
  ]}