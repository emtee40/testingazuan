{type:"class",attributes:{"name":"Manager","packageName":"qx.io.image","superClass":"qx.core.Target","isSingleton":"true","fullName":"qx.io.image.Manager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This singleton manage stuff around image handling.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"add"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"source"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming (unresolved) <span class=\"caps\">URL</span>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Register an image.\nGives the application the possibility to preload images.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHiddenImages"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a map with the sources of all hidden images</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Map with sources of all hidden images</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleImages"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a map with the sources of all visible images</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Map with sources of all visible images</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hide"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"source"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming (unresolved) <span class=\"caps\">URL</span>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Register an image and reduce the visible counter\nWarning: Only use after using show() before</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"source"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming (unresolved) <span class=\"caps\">URL</span>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Register an image.\nGives the application the possibility to preload images.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"show"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"source"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming (unresolved) <span class=\"caps\">URL</span>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Register an visible image.\nGives the application the possibility to preload visible images.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.io.image.Manager"}}
          ]}
        ]}
      ]}
    ]}
  ]}