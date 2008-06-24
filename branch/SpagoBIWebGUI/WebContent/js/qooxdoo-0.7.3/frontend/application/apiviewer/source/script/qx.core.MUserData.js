{type:"class",attributes:{"name":"MUserData","packageName":"qx.core","includer":"qx.core.Object","fullName":"qx.core.MUserData","type":"mixin"},children:[
  {type:"desc",attributes:{"text":"<p>Add user data handling to a class. This mixins provide the methods\n{@link #setUserData} and {@link #getUserData} for a user friendly\ninterface.</p>\n\n<p>The stored fields are automatically disposed correctly. However the\nassigned values are not disposed e.g. qooxdoo objects stored are not\ndisposed with the objects which contains the user data.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"isMixin":"true","name":"getUserData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"key"},children:[
          {type:"desc",attributes:{"text":"<p>the key</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Load user defined data from the object</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the user data</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"setUserData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"key"},children:[
          {type:"desc",attributes:{"text":"<p>the key</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the value of the user data</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Store user defined data inside the object.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}