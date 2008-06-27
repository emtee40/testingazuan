{type:"class",attributes:{"name":"LayoutImpl","hasWarning":"true","packageName":"qx.ui.layout.impl","superClass":"qx.core.Object","childClasses":"qx.ui.layout.impl.CanvasLayoutImpl,qx.ui.layout.impl.DockLayoutImpl,qx.ui.layout.impl.FlowLayoutImpl,qx.ui.layout.impl.GridLayoutImpl,qx.ui.layout.impl.HorizontalBoxLayoutImpl,qx.ui.layout.impl.VerticalBoxLayoutImpl","fullName":"qx.ui.layout.impl.LayoutImpl","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Abstact base class of all layout implementations</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"hasError":"true","name":"computeChildBoxHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the box height of the given child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>box height of the given child</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"113"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"computeChildBoxWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the box width of the given child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>box width of the given child</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"28","line":"101"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"computeChildNeededHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the needed height of the given child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>needed height</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"32","line":"153"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"computeChildNeededWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute and return the needed width of the given child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>needed width</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"31","line":"133"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededHeight_max"},children:[
      {type:"desc",attributes:{"text":"<p>Calculate the maximum needed height of all children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>maximum needed height of all children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededHeight_sum"},children:[
      {type:"desc",attributes:{"text":"<p>Compute and return the height needed by all children of this widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>height needed by all children of this widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededWidth_max"},children:[
      {type:"desc",attributes:{"text":"<p>Calculate the maximum needed width of all children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>maximum needed width of all children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"computeChildrenNeededWidth_sum"},children:[
      {type:"desc",attributes:{"text":"<p>Compute and return the width needed by all children of this widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"flushChildrenQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChildrenQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Has full control of the order in which the registered\n(or non-registered) children should be layouted.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChildrenQueue</code> is not documented.","column":"26","line":"430"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the associated widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>reference to the associated widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Parent"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"layoutChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>child to layout</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
          {type:"desc",attributes:{"text":"<p>layout changes to perform</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Set"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Called from qx.ui.core.Parent. Its task is to apply the layout\n(excluding border and padding) to the child.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"layoutChild_marginX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>child to layout</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
          {type:"desc",attributes:{"text":"<p>layout changes to perform</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Set"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply the X margin values as pure stylesheet equivalent.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"layoutChild_marginY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>child to layout</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
          {type:"desc",attributes:{"text":"<p>layout changes to perform</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Set"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply the Y margin values as pure stylesheet equivalent.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"layoutChild_sizeLimitX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>child to layout</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
          {type:"desc",attributes:{"text":"<p>layout changes to perform</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Set"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply min-/max-width to the child. Direct usage of stylesheet properties.\nThis is only possible in modern capable clients (i.e. excluding all current\n versions of Internet Explorer)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"layoutChild_sizeLimitY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>child to layout</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vJobs"},children:[
          {type:"desc",attributes:{"text":"<p>layout changes to perform</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Set"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply min-/max-height to the child. Direct usage of stylesheet properties.\nThis is only possible in modern capable clients (i.e. excluding all current\n versions of Internet Explorer)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeX_essentialWrapper"},children:[
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
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"42","line":"580"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"42","line":"580"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"42","line":"580"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeY_essentialWrapper"},children:[
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
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"42","line":"593"}},
        {type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"42","line":"593"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"42","line":"593"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateChildOnInnerHeightChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>changed child widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Actions that should be done if the inner height of the layout widget has changed.\nNormally this includes updates to percent values and ranges.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateChildOnInnerWidthChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>changed child widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Actions that should be done if the inner width of the layout widget has changed.\nNormally this includes updates to percent values and ranges.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateChildrenOnAddChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>newly added child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>index of the child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add child to current layout. Rarely needed by some layout implementations.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"updateChildrenOnJobQueueFlush"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vJobQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates children on job queue flush.\nThis is executed at the end of the job queue handling.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vJobQueue</code> is not documented.","column":"37","line":"361"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateChildrenOnMoveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>newly added child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>new index of the child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOldIndex"},children:[
          {type:"desc",attributes:{"text":"<p>old index of the child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Move child within its parent to a new position.\n Needed by layouts where the children depend on each other, like flow or box layouts.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateChildrenOnRemoveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>newly added child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>index of the child</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove child from current layout.\n Needed by layouts where the children depend on each other, like flow or box layouts.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateSelfOnChildOuterHeightChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>changed child widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Things to do and layout when any of the childs changes its outer height.\nNeeded by layouts where the children depend on each other, like flow or box layouts.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateSelfOnChildOuterWidthChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>changed child widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Things to do and layout when any of the childs changes its outer width.\nNeeded by layouts where the children depend on each other, like flow or box layouts.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"updateSelfOnJobQueueFlush"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vJobQueue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Invalidate and recompute cached data according to job queue.\nThis is executed at the beginning of the job queue handling.</p>\n\n<p>Subclasses might implement this method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vJobQueue</code> is not documented.","column":"33","line":"340"}}
        ]}
      ]}
    ]}
  ]}