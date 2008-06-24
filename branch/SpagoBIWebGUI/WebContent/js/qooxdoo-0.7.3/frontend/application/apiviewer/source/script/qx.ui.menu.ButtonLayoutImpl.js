{type:"class",attributes:{"name":"ButtonLayoutImpl","hasWarning":"true","packageName":"qx.ui.menu","superClass":"qx.ui.layout.impl.HorizontalBoxLayoutImpl","fullName":"qx.ui.menu.ButtonLayoutImpl","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"overriddenFrom":"qx.ui.layout.impl.HorizontalBoxLayoutImpl","name":"computeChildrenNeededWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Compute and return the width needed by all children of this widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.HorizontalBoxLayoutImpl","name":"layoutChild_locationX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"173"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"29","line":"173"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"173"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.HorizontalBoxLayoutImpl","name":"updateSelfOnChildOuterWidthChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Things to do and layout when any of the childs changes its outer width.\n Needed by layouts where the children depends on each-other, like flow- or box-layouts.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"41","line":"124"}}
        ]}
      ]}
    ]}
  ]}