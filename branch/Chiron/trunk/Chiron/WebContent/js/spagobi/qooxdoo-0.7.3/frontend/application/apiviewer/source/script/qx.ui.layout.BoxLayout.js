{type:"class",attributes:{"name":"BoxLayout","hasWarning":"true","packageName":"qx.ui.layout","superClass":"qx.ui.core.Parent","childClasses":"qx.ui.basic.Atom,qx.ui.component.DateChooser,qx.ui.layout.HorizontalBoxLayout,qx.ui.layout.VerticalBoxLayout,qx.ui.pageview.AbstractBar,qx.ui.pageview.AbstractPageView,qx.ui.tree.AbstractTreeElement","fullName":"qx.ui.layout.BoxLayout","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"orientation"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for {@link #orientation}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"STR_REVERSED","value":"-reversed"}}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"accumulatedChildrenOuterHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"172"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"accumulatedChildrenOuterWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"166"}}
        ]}
      ]},
    {type:"property",attributes:{"possibleValues":"\"left\",\"center\",\"right\"","name":"horizontalChildrenAlign","defaultValue":"\"left\"","propertyType":"new","apply":"_applyHorizontalChildrenAlign","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The horizontal align of the children. Allowed values are: &#8220;left&#8221;, &#8220;center&#8221; and &#8220;right&#8221;</p>"}}
      ]},
    {type:"property",attributes:{"possibleValues":"\"horizontal\",\"vertical\"","name":"orientation","defaultValue":"\"horizontal\"","propertyType":"new","apply":"_applyOrientation","event":"changeOrientation"},children:[
      {type:"desc",attributes:{"text":"<p>The orientation of the layout control.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyReverseChildrenOrder","defaultValue":"false","propertyType":"new","name":"reverseChildrenOrder","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the children be layouted in reverse order?</p>"}}
      ]},
    {type:"property",attributes:{"name":"spacing","defaultValue":"0","event":"changeSpacing","propertyType":"new","apply":"_applySpacing","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The spacing between childrens. Could be any positive integer value.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyStretchChildrenOrthogonalAxis","defaultValue":"true","propertyType":"new","name":"stretchChildrenOrthogonalAxis","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the widgets be stretched to the available width (orientationvertical) or height (orientationhorizontal)?\n This only applies if the child has not configured a own value for this axis.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyUseAdvancedFlexAllocation","defaultValue":"false","propertyType":"new","name":"useAdvancedFlexAllocation","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>If there are min/max values in combination with flex try to optimize placement.\n This is more complex and produces more time for the layouter but sometimes this feature is needed.</p>"}}
      ]},
    {type:"property",attributes:{"possibleValues":"\"top\",\"middle\",\"bottom\"","name":"verticalChildrenAlign","defaultValue":"\"top\"","propertyType":"new","apply":"_applyVerticalChildrenAlign","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The vertical align of the children. Allowed values are: &#8220;top&#8221;, &#8220;middle&#8221; and &#8220;bottom&#8221;</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#horizontalChildrenAlign","name":"_applyHorizontalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>horizontalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyHorizontalChildrenAlign}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#orientation","name":"_applyOrientation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#reverseChildrenOrder","name":"_applyReverseChildrenOrder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>reverseChildrenOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyReverseChildrenOrder}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#spacing","name":"_applySpacing"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySpacing}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#stretchChildrenOrthogonalAxis","name":"_applyStretchChildrenOrthogonalAxis"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>stretchChildrenOrthogonalAxis</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStretchChildrenOrthogonalAxis}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#useAdvancedFlexAllocation","name":"_applyUseAdvancedFlexAllocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>useAdvancedFlexAllocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyUseAdvancedFlexAllocation}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.BoxLayout#verticalChildrenAlign","name":"_applyVerticalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>verticalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyVerticalChildrenAlign}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeAccumulatedChildrenOuterHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"46","line":"418"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeAccumulatedChildrenOuterWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"45","line":"400"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_createLayoutImpl"},children:[
      {type:"desc",attributes:{"text":"<p>This creates an new instance of the layout impl this widget uses</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.BoxLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_doLayout"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>value</code>.","column":"17","line":"383"}},
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>old</code>.","column":"17","line":"383"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"383"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_doLayoutOrder"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>value</code>.","column":"22","line":"366"}},
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>old</code>.","column":"22","line":"366"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"366"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateLayoutMode"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"280"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeChildrenStretchingX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"37","line":"444"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeChildrenStretchingY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"37","line":"463"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_updateLayoutMode"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"264"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHorizontalChildrenAlign","fromProperty":"horizontalChildrenAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>horizontalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>horizontalChildrenAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLayoutMode"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"248"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOrientation","fromProperty":"orientation"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>orientation</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>reverseChildrenOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>reverseChildrenOrder</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSpacing","fromProperty":"spacing"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>spacing</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>stretchChildrenOrthogonalAxis</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>stretchChildrenOrthogonalAxis</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useAdvancedFlexAllocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>useAdvancedFlexAllocation</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVerticalChildrenAlign","fromProperty":"verticalChildrenAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>verticalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>verticalChildrenAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHorizontalChildrenAlign","fromProperty":"horizontalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>horizontalChildrenAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>horizontalChildrenAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOrientation","fromProperty":"orientation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>orientation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>orientation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>reverseChildrenOrder</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>reverseChildrenOrder</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSpacing","fromProperty":"spacing"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>spacing</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spacing</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>stretchChildrenOrthogonalAxis</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>stretchChildrenOrthogonalAxis</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>useAdvancedFlexAllocation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useAdvancedFlexAllocation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initVerticalChildrenAlign","fromProperty":"verticalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>verticalChildrenAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>verticalChildrenAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isHorizontal"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"226"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>reverseChildrenOrder</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>stretchChildrenOrthogonalAxis</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useAdvancedFlexAllocation</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isVertical"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"237"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHorizontalChildrenAlign","fromProperty":"horizontalChildrenAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>horizontalChildrenAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOrientation","fromProperty":"orientation"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>orientation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>reverseChildrenOrder</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSpacing","fromProperty":"spacing"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spacing</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>stretchChildrenOrthogonalAxis</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useAdvancedFlexAllocation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetVerticalChildrenAlign","fromProperty":"verticalChildrenAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>verticalChildrenAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHorizontalChildrenAlign","fromProperty":"horizontalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>horizontalChildrenAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>horizontalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOrientation","fromProperty":"orientation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>orientation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>reverseChildrenOrder</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>reverseChildrenOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSpacing","fromProperty":"spacing"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>spacing</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>stretchChildrenOrthogonalAxis</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>stretchChildrenOrthogonalAxis</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>useAdvancedFlexAllocation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useAdvancedFlexAllocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setVerticalChildrenAlign","fromProperty":"verticalChildrenAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>verticalChildrenAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>verticalChildrenAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalChildrenAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleReverseChildrenOrder","fromProperty":"reverseChildrenOrder"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>reverseChildrenOrder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reverseChildrenOrder}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleStretchChildrenOrthogonalAxis","fromProperty":"stretchChildrenOrthogonalAxis"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>stretchChildrenOrthogonalAxis</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #stretchChildrenOrthogonalAxis}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleUseAdvancedFlexAllocation","fromProperty":"useAdvancedFlexAllocation"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useAdvancedFlexAllocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useAdvancedFlexAllocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeOrientation"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #orientation}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeSpacing"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #spacing}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]}
  ]}