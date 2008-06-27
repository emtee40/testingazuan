{type:"class",attributes:{"isStatic":"true","name":"OO","packageName":"qx","fullName":"qx.OO","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Defines a qooxdoo class.</p>\n\n<p><span class=\"caps\">WARNING</span>: This class is deprecated an will be removed in qooxdoo 0.7! Please\nuse {@link qx.Class} instead.</p>"}},
  {type:"deprecated"},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"addCachedProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"addFastProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"addProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"addPropertyGroup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"changeProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"defineClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vClassName"},children:[
          {type:"desc",attributes:{"text":"<p>fully qualified class name (e.g. &#8220;qx.ui.form.Button&#8221;)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSuper"},children:[
          {type:"desc",attributes:{"text":"<p>super class</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vConstructor"},children:[
          {type:"desc",attributes:{"text":"<p>the constructor of the new class</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Please switch to new qx.Class.define <span class=\"caps\">ASAP</span>. This will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>define a new qooxdoo class\nAll classes should be defined in this way.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isAvailable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vClassName"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the class to look for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Please switch to new qx.Class.define <span class=\"caps\">ASAP</span>. This will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns if a class which is created by defineClass is available.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the class is available</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>will be removed in qooxdoo 0.7</p>"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Legacy property handling</p>"}}
      ]}
    ]}
  ]}