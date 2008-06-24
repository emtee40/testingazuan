{type:"class",attributes:{"isAbstract":"true","name":"Parent","hasWarning":"true","packageName":"qx.ui.core","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.layout.BoxLayout,qx.ui.layout.CanvasLayout,qx.ui.layout.DockLayout,qx.ui.layout.FlowLayout,qx.ui.layout.GridLayout","fullName":"qx.ui.core.Parent","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Abstract base class for all widget which have child widgets (e.g. layout manager)</p>\n\n<p>Don&#8217;t instantiate this class directly.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_addChildrenToLayoutQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"33","line":"1195"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"33","line":"1195"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_addChildrenToStateQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"1080"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_addChildToChildrenQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"32","line":"1125"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"1125"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterAppear"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterDisappear"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterInsertDom"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterRemoveDom"}},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Parent#activeChild","name":"_applyActiveChild"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Parent#focusedChild","name":"_applyFocusedChild"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Parent#focusHandler","name":"_applyFocusHandler"},children:[
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
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_beforeAppear"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_beforeDisappear"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_beforeInsertDom"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_beforeRemoveDom"}},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_changeInnerHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNew"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOld"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vNew</code> is not documented.","column":"26","line":"1358"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOld</code> is not documented.","column":"26","line":"1358"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"1358"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_changeInnerWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNew"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOld"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vNew</code> is not documented.","column":"25","line":"1331"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOld</code> is not documented.","column":"25","line":"1331"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"1331"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computePreferredInnerHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"1318"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computePreferredInnerWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"1307"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_computeVisibleChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Return the array of all visible children\n(which are configured as visible=true)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>all visible children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createLayoutImpl"},children:[
      {type:"desc",attributes:{"text":"<p>abstract method. Create layout implementation.</p>\n\n<p>This method must be overwritten by all subclasses</p>\n\n<p>return</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.BoxLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_flushChildrenQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"1170"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleDisplayableCustom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDisplayable"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vParent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vHint"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vDisplayable</code> is not documented.","column":"32","line":"1058"}},
        {type:"error",attributes:{"msg":"Parameter <code>vParent</code> is not documented.","column":"32","line":"1058"}},
        {type:"error",attributes:{"msg":"Parameter <code>vHint</code> is not documented.","column":"32","line":"1058"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"1058"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_layoutChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"20","line":"1210"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"1210"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_layoutPost"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onfocuskeyevent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegate keyevent to the focus handler</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"178"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_recursiveAppearanceThemeUpdate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNewAppearanceTheme"}},
        {type:"param",attributes:{"name":"vOldAppearanceTheme"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_removeChildFromChildrenQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"37","line":"1151"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"37","line":"1151"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"activateFocusRoot"},children:[
      {type:"desc",attributes:{"text":"<p>Let the widget use its own focus handler</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"add"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>variable number of widgets to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add/Append another widget. Allows to add multiple at\n one, a parameter could be a widget.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>This widget.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Parent"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addAfter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vAfter"},children:[
          {type:"desc",attributes:{"text":"<p>widgert, after which the new widget will be inserted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a widget after another already inserted widget</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAt"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>Index, at which the widget will be inserted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a child widget at the specified index</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAtBegin"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a child widget as the first widget</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAtEnd"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a child widget as the last widget</p>"}}
      ]},
    {type:"method",attributes:{"name":"addBefore"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vBefore"},children:[
          {type:"desc",attributes:{"text":"<p>widget before the new widget will be inserted.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a widget before another already inserted widget</p>"}}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"contains"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget which should be checked.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check if the given widget is a child</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"forEachChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vFunc"},children:[
          {type:"desc",attributes:{"text":"<p>callback function. Signature: <code>function(childWidget, widgetIndex)</code></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Call a callbach function for each child widget. The callback has the following signature:\n<code>function(childWidget, widgetIndex)</code>. The first parameter is the child widget\nand the second the index of the child widget in its parent.</p>"}}
      ]},
    {type:"method",attributes:{"name":"forEachVisibleChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vFunc"},children:[
          {type:"desc",attributes:{"text":"<p>callback function. Signature: <code>function(childWidget, widgetIndex)</code></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Call a callbach function for each visible child widget. The callback has the following signature:\n<code>function(childWidget, widgetIndex)</code>. The first parameter is the child widget\nand the second the index of the child widget in its parent.</p>"}}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getActiveChild","fromProperty":"activeChild"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>activeChild</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #activeChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>activeChild</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Return the array of all children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>all children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getChildrenLength"},children:[
      {type:"desc",attributes:{"text":"<p>Get number of children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>number of children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstActiveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
          {type:"desc",attributes:{"text":"<p>array of classes which should be ignored</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the first active child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>First active child widget (null if this widget does\n    not have any active children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstChild"},children:[
      {type:"desc",attributes:{"text":"<p>Get the first child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>First child widget (null if this widget does not have any children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstVisibleChild"},children:[
      {type:"desc",attributes:{"text":"<p>Get the first visible child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>First visible child widget (null if this widget does\n    not have any visible children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusedChild","fromProperty":"focusedChild"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focusedChild</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusedChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focusedChild</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusHandler","fromProperty":"focusHandler"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focusHandler</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusHandler}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focusHandler</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getFocusRoot"},children:[
      {type:"desc",attributes:{"text":"<p>Return the responsible focus handler</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.event.handler.FocusHandler"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getInnerHeightForChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"30","line":"1396"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"1396"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getInnerWidthForChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"29","line":"1384"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"1384"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLastActiveChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
          {type:"desc",attributes:{"text":"<p>array of classes which should be ignored</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the last active child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Last active child widget (null if this widget does\n    not have any active children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLastChild"},children:[
      {type:"desc",attributes:{"text":"<p>Get the last child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Last child widget (null if this widget does\n    not have any children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLastVisibleChild"},children:[
      {type:"desc",attributes:{"text":"<p>Get the last visible child</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Last visible child widget (null if this widget does\n    not have any visible children)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLayoutImpl"},children:[
      {type:"desc",attributes:{"text":"<p>Return the layout implementation.</p>\n\n<p>return {qx.ui.layout.impl.LayoutImpl}</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getVisibleChildrenLength"},children:[
      {type:"desc",attributes:{"text":"<p>Get number of visible children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>number of visible children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"hasChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Check if the widget has children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the widget has children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"hasVisibleChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Check if the widget has any visible children</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the widget has any visible children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"indexOf"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>Child widget to get the index for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the index of a child widget.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>index of the child widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initActiveChild","fromProperty":"activeChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>activeChild</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>activeChild</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #activeChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocusedChild","fromProperty":"focusedChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focusedChild</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focusedChild</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focusedChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocusHandler","fromProperty":"focusHandler"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focusHandler</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focusHandler</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focusHandler}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"isEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Check if there are any children inside</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the number of children is 0</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"isFocusRoot"},children:[
      {type:"desc",attributes:{"text":"<p>Wether the widget has its own focus handler or uses one of its parent&#8217;s\nfocus handler.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the widget has its own focus handler</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"isVisibleEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether there are any visible children inside</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether there are any visible children inside</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"recursiveAddToStateQueue"}},
    {type:"method",attributes:{"hasError":"true","name":"remapChildrenHandlingTo"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vTarget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vTarget</code> is not documented.","column":"31","line":"1424"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"1424"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>variable number of widgets to remove</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove one or multiple childrens.</p>"}}
      ]},
    {type:"method",attributes:{"name":"removeAll"},children:[
      {type:"desc",attributes:{"text":"<p>Remove all children.</p>"}}
      ]},
    {type:"method",attributes:{"name":"removeAt"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>Index of the widget to remove.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove the widget at the specified index.</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetActiveChild","fromProperty":"activeChild"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>activeChild</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #activeChild}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocusedChild","fromProperty":"focusedChild"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focusedChild</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focusedChild}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocusHandler","fromProperty":"focusHandler"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focusHandler</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focusHandler}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setActiveChild","fromProperty":"activeChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>activeChild</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>activeChild</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #activeChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusedChild","fromProperty":"focusedChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focusedChild</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focusedChild</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusedChild}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusHandler","fromProperty":"focusHandler"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focusHandler</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focusHandler</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusHandler}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"activeChild","check":"qx.ui.core.Widget","allowNull":"true","propertyType":"new","apply":"_applyActiveChild","event":"changeActiveChild"},children:[
      {type:"desc",attributes:{"text":"<p>The current active child.</p>"}}
      ]},
    {type:"property",attributes:{"name":"focusedChild","check":"qx.ui.core.Widget","allowNull":"true","propertyType":"new","apply":"_applyFocusedChild","event":"changeFocusedChild"},children:[
      {type:"desc",attributes:{"text":"<p>The current focused child.</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.event.handler.FocusHandler","allowNull":"true","propertyType":"new","name":"focusHandler","apply":"_applyFocusHandler"},children:[
      {type:"desc",attributes:{"text":"<p>Individual focus handler for all child elements.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","name":"visibleChildren","propertyType":"cached"},children:[
      {type:"desc",attributes:{"text":"<p>all visible child widgets</p>"}}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeActiveChild"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #activeChild}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeFocusedChild"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #focusedChild}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]}
  ]}