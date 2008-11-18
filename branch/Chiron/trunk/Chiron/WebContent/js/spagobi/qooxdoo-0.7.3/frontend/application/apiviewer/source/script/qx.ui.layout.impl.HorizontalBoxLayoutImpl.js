{type:"class",attributes:{"name":"HorizontalBoxLayoutImpl","hasWarning":"true","packageName":"qx.ui.layout.impl","superClass":"qx.ui.layout.impl.LayoutImpl","childClasses":"qx.ui.menu.ButtonLayoutImpl","fullName":"qx.ui.layout.impl.HorizontalBoxLayoutImpl","type":"class"},children:[
  {type:"methods",children:[
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"computeChildBoxHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the box height of the given child.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"99"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"computeChildBoxWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the box width of the given child.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"28","line":"87"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenFlexWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Computes the width of all flexible children.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Compute and return the width needed by all children of this widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
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
        {type:"error",attributes:{"msg":"Parameter <code>vChildrenQueue</code> is not documented.","column":"26","line":"635"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enableFlexSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enableFlexSupport</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enableFlexSupport</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enableFlexSupport</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"invalidateChildrenFlexWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"343"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enableFlexSupport</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
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
      {type:"desc",attributes:{"text":"<p>This is called from qx.ui.core.Widget and  it&#8217;s task is to apply the layout\n (excluding border and padding) to the child.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"19","line":"726"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"19","line":"726"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_locationX"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"824"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"29","line":"824"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"824"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_locationY"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"899"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"29","line":"899"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"899"}}
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
    {type:"method",attributes:{"name":"resetEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enableFlexSupport</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enableFlexSupport</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enableFlexSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEnableFlexSupport","fromProperty":"enableFlexSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enableFlexSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableFlexSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
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
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"38","line":"432"}}
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
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"37","line":"409"}}
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
        {type:"error",attributes:{"msg":"Parameter <code>vQueue</code> is not documented.","column":"37","line":"486"}}
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"33","line":"605"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIndex</code> is not documented.","column":"33","line":"605"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOldIndex</code> is not documented.","column":"33","line":"605"}}
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"35","line":"544"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIndex</code> is not documented.","column":"35","line":"544"}}
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
      {type:"desc",attributes:{"text":"<p>Things to do and layout when any of the childs changes its outer width.\n Needed by layouts where the children depends on each-other, like flow- or box-layouts.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"41","line":"385"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.layout.impl.LayoutImpl","name":"updateSelfOnJobQueueFlush"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vJobQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Invalidate and recompute things because of job in queue (before the rest of job handling will be executed).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vJobQueue</code> is not documented.","column":"33","line":"463"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","hasError":"true","name":"enableFlexSupport","check":"Boolean"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"41"}}
        ]}
      ]}
    ]}
  ]}