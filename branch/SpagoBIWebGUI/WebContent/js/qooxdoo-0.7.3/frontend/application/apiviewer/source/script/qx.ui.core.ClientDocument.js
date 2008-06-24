{type:"class",attributes:{"name":"ClientDocument","hasWarning":"true","packageName":"qx.ui.core","superClass":"qx.ui.layout.CanvasLayout","isSingleton":"true","fullName":"qx.ui.core.ClientDocument","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This is the basic widget of all qooxdoo applications.</p>\n\n<p>qx.ui.core.ClientDocument is the parent of all children inside your application. It\nalso handles their resizing and focus navigation.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.core.ClientDocument","name":"client-document"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeGlobalCursor"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #globalCursor}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"focus"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"windowblur"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the window looses the focus (Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"windowfocus"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the window gets the focus (Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"windowresize"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the window has been resized (Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"client-document\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"enabled","hasWarning":"true","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"enableElementFocus","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"globalCursor","check":"String","allowNull":"true","propertyType":"new","apply":"_applyGlobalCursor","event":"changeGlobalCursor","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the global cursor style</p>\n\n<p>The name of the cursor to show when the mouse pointer is over the widget.\n This is any valid CSS2 cursor name defined by W3C.</p>\n\n<p>The following values are possible:\n <ul><li>default</li>\n <li>crosshair</li>\n <li>pointer (hand is the ie name and will mapped to pointer in non-ie).</li>\n <li>move</li>\n <li>n-resize</li>\n <li>ne-resize</li>\n <li>e-resize</li>\n <li>se-resize</li>\n <li>s-resize</li>\n <li>sw-resize</li>\n <li>w-resize</li>\n <li>nw-resize</li>\n <li>text</li>\n <li>wait</li>\n <li>help </li>\n <li>url([file]) = self defined cursor, file should be an <span class=\"caps\">ANI</span>- or <span class=\"caps\">CUR</span>-type</li>\n </ul></p>"}}
      ]},
    {type:"property",attributes:{"name":"hideFocus","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"selectable","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#parent","overriddenFrom":"qx.ui.core.Widget","name":"_applyParent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Parent"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Parent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>parent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyParent}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"_computeInnerHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"616"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"_computeInnerWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"605"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getBlocker"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the blocker widget if already created; otherwise create it first</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the blocker widget.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"ClientDocumentBlocker"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onwindowresize"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"23","line":"583"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"583"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addCssRule"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSelector"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStyle"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vSheet</code> is not documented.","column":"18","line":"438"}},
        {type:"error",attributes:{"msg":"Parameter <code>vSelector</code> is not documented.","column":"18","line":"438"}},
        {type:"error",attributes:{"msg":"Parameter <code>vStyle</code> is not documented.","column":"18","line":"438"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"438"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"block"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vActiveChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vActiveChild</code> is not documented.","column":"13","line":"353"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"353"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"blockHelper"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"330"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"330"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"createStyleElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vCssText"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vCssText</code> is not documented.","column":"26","line":"424"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"424"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getDocumentElement"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"240"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getGlobalCursor","fromProperty":"globalCursor"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>globalCursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>globalCursor</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"getParent"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Parent"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"getToolTip"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.popup.ToolTip"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"getTopLevelWidget"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getWindowElement"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"229"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initGlobalCursor","fromProperty":"globalCursor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>globalCursor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>globalCursor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"isMaterialized"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"isSeeable"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"release"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vActiveChild"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vActiveChild</code> is not documented.","column":"15","line":"381"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"381"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeAllCssRules"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vSheet</code> is not documented.","column":"25","line":"463"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"463"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeCssRule"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSheet"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSelector"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vSheet</code> is not documented.","column":"21","line":"451"}},
        {type:"error",attributes:{"msg":"Parameter <code>vSelector</code> is not documented.","column":"21","line":"451"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"451"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetGlobalCursor","fromProperty":"globalCursor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>globalCursor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setGlobalCursor","fromProperty":"globalCursor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>globalCursor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>globalCursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
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
          {type:"entry",attributes:{"type":"qx.ui.core.ClientDocument"}}
          ]}
        ]}
      ]}
    ]}
  ]}