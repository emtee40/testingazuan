{type:"class",attributes:{"name":"FlowLayoutImpl","hasWarning":"true","packageName":"qx.ui.layout.impl","superClass":"qx.ui.layout.impl.LayoutImpl","fullName":"qx.ui.layout.impl.FlowLayoutImpl","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"STR_LAST","value":"getLastVisibleChild"}},
    {type:"constant",attributes:{"type":"String","name":"STR_NEXT","value":"getNextSibling"}},
    {type:"constant",attributes:{"type":"String","name":"STR_FIRST","value":"getFirstVisibleChild"}},
    {type:"constant",attributes:{"type":"String","name":"STR_PREVIOUS","value":"getPreviousSibling"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"computeChildrenNeededHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Calculate the layout to get the needed height of the children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Compute and return the width needed by all children of this widget</p>"}}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"flushChildrenQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChildrenQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This method have full control of the order in which the\n registered (or also non-registered) children should be\n layouted on the horizontal axis.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChildrenQueue</code> is not documented.","column":"26","line":"315"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"layoutChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"19","line":"372"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"19","line":"372"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"372"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_location"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"28","line":"449"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"28","line":"449"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"449"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeX"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeY"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateChildOnInnerHeightChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Actions that should be done if the inner height of the widget was changed.\n Normally this includes update to percent values and ranges.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"38","line":"209"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateChildOnInnerWidthChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Actions that should be done if the inner width of the widget was changed.\n Normally this includes update to percent values and ranges.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"37","line":"193"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateChildrenOnJobQueueFlush"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates children on special jobs</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vQueue</code> is not documented.","column":"37","line":"233"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateChildrenOnMoveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOldIndex"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This method combines calls of methods which should be done if a child should be moved\n inside the same parent to a new positions.\n Needed by layouts where the children depends on each-other, like flow- or box-layouts.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"33","line":"290"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIndex</code> is not documented.","column":"33","line":"290"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOldIndex</code> is not documented.","column":"33","line":"290"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateChildrenOnRemoveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This method combines calls of methods which should be done if a widget should be removed from the current layout.\n Needed by layouts where the children depends on each-other, like flow- or box-layouts.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"35","line":"258"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIndex</code> is not documented.","column":"35","line":"258"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateSelfOnChildOuterWidthChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Things to do and layout when any of the childs changes it&#8217;s outer width.\n Needed by layouts where the children depends on each-other, like flow- or box-layouts.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"41","line":"169"}}
        ]}
      ]}
    ]}
  ]}