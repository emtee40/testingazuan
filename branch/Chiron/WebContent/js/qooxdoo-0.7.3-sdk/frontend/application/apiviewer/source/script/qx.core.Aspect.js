{type:"class",attributes:{"isStatic":"true","name":"Aspect","packageName":"qx.core","fullName":"qx.core.Aspect","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Basis for Aspect Oriented features in qooxdoo.</p>\n\n<p>This class makes it possible to attach functions (aspects) before or\nafter each function call of any function defined in {@link qx.Class#define}.</p>\n\n<p>Classes, which define own aspects must add an explicit require to ths class\nin the header comment using the following code:</p>\n\n<pre>\n&#35;require(qx.core.Aspect)\n&#35;ignore(auto-require)\n</pre>\n\n<p>To enable profiling the class must be loaded <b>before</b> <code>qx.Class</code> is\nloaded. This can be achieved by adding the parameter\n<code>&#8212;add-require qx.Class:your.AspectClass</code> to the generator call building the\napplications. Further more the variant <code>qx.aspect</code> must be set to\n<code>on</code>.</p>\n\n<p>One example for a qooxdoo aspect is profiling ({@link qx.dev.Profile}).</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"addAdvice"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"position"},children:[
          {type:"desc",attributes:{"text":"<p>One of &#8220;before&#8221; or &#8220;after&#8221;. Whether the function\n    should be called before or after the wrapped function.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"type"},children:[
          {type:"desc",attributes:{"text":"<p>Type of the wrapped function. One of &#8220;member&#8221;,\n    &#8220;static&#8221;, &#8220;constructor&#8221;, &#8220;destructor&#8221;, &#8220;property&#8221; or &#8221;*&#8221;.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"nameRegExp"},children:[
          {type:"desc",attributes:{"text":"<p>Each function, with a full name matching\n    this pattern (using <code>fullName.match(nameRegExp)</code>) will be\n    wrapped.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}},
            {type:"entry",attributes:{"type":"RegExp"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>Function to be called just before or after any of the\n    selected functions is called. If position is &#8220;before&#8221; the functions\n    supports the same signature as {@link qx.dev.Profile#profileBefore}. If\n    position is &#8220;after&#8221; it supports the same signature as\n    {@link qx.dev.Profile#profileAfter}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Register a function to be called just before or after each time\none of the selected functions is called.</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"wrap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fullName"},children:[
          {type:"desc",attributes:{"text":"<p>Full name of the function including the class name.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"fcn"},children:[
          {type:"desc",attributes:{"text":"<p>function to wrap.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"type"},children:[
          {type:"desc",attributes:{"text":"<p>Type of the wrapped function. One of &#8220;member&#8221;, &#8220;static&#8221;,\n         &#8220;constructor&#8221;, &#8220;destructor&#8221; or &#8220;property&#8221;.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This function is used by {@link qx.Class#define} to wrap all statics, members and\nconstructors.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>wrapped function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]}
    ]}
  ]}