{type:"class",attributes:{"name":"SplitPane","hasWarning":"true","packageName":"qx.ui.splitpane","superClass":"qx.ui.layout.CanvasLayout","childClasses":"qx.ui.splitpane.HorizontalSplitPane,qx.ui.splitpane.VerticalSplitPane","fullName":"qx.ui.splitpane.SplitPane","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"orientation"},children:[
          {type:"desc",attributes:{"text":"<p>The orientation of the splitpane control. Allowed values are &#8220;horizontal&#8221; (default) and &#8220;vertical&#8221;. This is the same type as used in {@link qx.ui.layout.BoxLayout#orientation}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"firstSize"},children:[
          {type:"desc",attributes:{"text":"<p>The size of the left (top) pane. Allowed values are any by {@link qx.ui.core.Widget} supported unit.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"secondSize"},children:[
          {type:"desc",attributes:{"text":"<p>The size of the right (bottom) pane. Allowed values are any by {@link qx.ui.core.Widget} supported unit.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates a new instance of a SplitPane. It allows the user to dynamically resize\nthe areas dropping the border between.</p>\n\n<p>Please note that the usage of percents may be problematic because you must respect the\ndivider, too. To create a typical 50,50 split please use flex units instead e.g. &#8220;1*&#8221;, &#8220;1*&#8221;</p>\n\n<p>new qx.ui.splitpane.SplitPane(orientation)\nnew qx.ui.splitpane.SplitPane(orientation, firstSize, secondSize)</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.splitpane.SplitPane#firstSize","name":"_applyFirstSize"},children:[
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
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.splitpane.SplitPane#orientation","name":"_applyOrientation"},children:[
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
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.splitpane.SplitPane#secondSize","name":"_applySecondSize"},children:[
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
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.splitpane.SplitPane#showKnob","name":"_applyShowKnob"},children:[
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
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.splitpane.SplitPane#splitterSize","name":"_applySplitterSize"},children:[
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
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_commonMouseDown"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"655"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_commonMouseUp"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"757"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_normalizeX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"828"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"828"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_normalizeY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"840"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"840"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseDownX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Initializes drag session in case of a mousedown event on splitter in a horizontal splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseDownY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Initializes drag session in case of a mousedown event on splitter in a vertical splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseMoveX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Move the splitter in case of a mousemove event on splitter in a horizontal splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseMoveY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Move the splitter in case of a mousemove event on splitter in a vertical splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseUpX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Ends the drag session and computes the new dimensions of panes in case of a mouseup event on splitter in a horizontal splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSplitterMouseUpY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>The event itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Ends the drag session and computes the new dimensions of panes in case of a mouseup event on splitter in a vertical splitpane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncCommon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"first"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"second"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>first</code> is not documented.","column":"19","line":"814"}},
        {type:"error",attributes:{"msg":"Parameter <code>second</code> is not documented.","column":"19","line":"814"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"814"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncFirstSize"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"529"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncSecondSize"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"550"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncSplitterSize"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"571"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"14","line":"781"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"781"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"14","line":"797"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"797"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"addBottom"},children:[
      {type:"desc",attributes:{"text":"<p>adds one or more widget(s) to the bottom pane</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addLeft"},children:[
      {type:"desc",attributes:{"text":"<p>adds one or more widget(s) to the left pane</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addRight"},children:[
      {type:"desc",attributes:{"text":"<p>adds one or more widget(s) to the right pane</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addTop"},children:[
      {type:"desc",attributes:{"text":"<p>adds one or more widget(s) to the top pane</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBottomArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the bottom area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the first area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstSize","fromProperty":"firstSize"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>firstSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>firstSize</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getKnob"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the knob.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The knob.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLeftArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the left area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>liveResize</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
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
    {type:"method",attributes:{"name":"getRightArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the right area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSecondArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the second area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSecondSize","fromProperty":"secondSize"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>secondSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #secondSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>secondSize</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowKnob","fromProperty":"showKnob"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showKnob</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showKnob</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSplitter"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the splitter.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The splitter.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSplitterSize","fromProperty":"splitterSize"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>splitterSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #splitterSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>splitterSize</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTopArea"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the top area (CanvasLayout)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFirstSize","fromProperty":"firstSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>firstSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>firstSize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #firstSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLiveResize","fromProperty":"liveResize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>liveResize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>liveResize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initSecondSize","fromProperty":"secondSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>secondSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>secondSize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #secondSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowKnob","fromProperty":"showKnob"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showKnob</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showKnob</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSplitterSize","fromProperty":"splitterSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>splitterSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>splitterSize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #splitterSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>liveResize</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowKnob","fromProperty":"showKnob"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showKnob</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFirstSize","fromProperty":"firstSize"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>firstSize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #firstSize}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>liveResize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
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
    {type:"method",attributes:{"name":"resetSecondSize","fromProperty":"secondSize"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>secondSize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #secondSize}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowKnob","fromProperty":"showKnob"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showKnob</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSplitterSize","fromProperty":"splitterSize"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>splitterSize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #splitterSize}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFirstSize","fromProperty":"firstSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>firstSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>firstSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLiveResize","fromProperty":"liveResize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>liveResize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
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
    {type:"method",attributes:{"name":"setSecondSize","fromProperty":"secondSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>secondSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>secondSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #secondSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowKnob","fromProperty":"showKnob"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showKnob</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showKnob</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSplitterSize","fromProperty":"splitterSize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>splitterSize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>splitterSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #splitterSize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowKnob","fromProperty":"showKnob"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showKnob</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showKnob}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"\"splitpane\"","propertyType":"new","overriddenFrom":"qx.ui.core.Widget","name":"appearance","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Appearance change</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyFirstSize","defaultValue":"\"1*\"","name":"firstSize","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>The size of the first (left/top) area.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"liveResize","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>The layout method for the splitpane. If true, the content will updated immediatly.</p>"}}
      ]},
    {type:"property",attributes:{"name":"orientation","defaultValue":"\"horizontal\"","allowNull":"true","propertyType":"new","possibleValues":"\"horizontal\",\"vertical\"","apply":"_applyOrientation"},children:[
      {type:"desc",attributes:{"text":"<p>The orientation of the splitpane control. Allowed values are &#8220;horizontal&#8221; (default) and &#8220;vertical&#8221;.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applySecondSize","defaultValue":"\"1*\"","name":"secondSize","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>The size of the second (right/bottom) area.</p>"}}
      ]},
    {type:"property",attributes:{"name":"showKnob","defaultValue":"true","propertyType":"new","apply":"_applyShowKnob","check":"Boolean","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Show the knob</p>"}}
      ]},
    {type:"property",attributes:{"name":"splitterSize","defaultValue":"4","propertyType":"new","apply":"_applySplitterSize","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Size of the splitter</p>"}}
      ]}
    ]}
  ]}