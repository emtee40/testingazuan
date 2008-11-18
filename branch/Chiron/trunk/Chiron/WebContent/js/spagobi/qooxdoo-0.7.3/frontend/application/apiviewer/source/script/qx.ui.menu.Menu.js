{type:"class",attributes:{"name":"Menu","hasWarning":"true","packageName":"qx.ui.menu","superClass":"qx.ui.popup.Popup","fullName":"qx.ui.menu.Menu","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>If you create a new menu using {@link qx.ui.menu.Menu}, do not forget\nto add it to the client document using its <i>addToDocument()</i> method,\nor the menu will not be positioned correctly in the application.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.menu.Menu","name":"menu"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Menu#closeInterval","name":"_applyCloseInterval"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>closeInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCloseInterval}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Menu#hoverItem","name":"_applyHoverItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>hoverItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyHoverItem}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Menu#openInterval","name":"_applyOpenInterval"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>openInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOpenInterval}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Menu#openItem","name":"_applyOpenItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>openItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOpenItem}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.popup.Popup","name":"_beforeAppear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"335"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.popup.Popup","name":"_beforeDisappear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"357"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeArrowPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"678"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeIconPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"int"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"643"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeLabelPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"654"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxArrowWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"572"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxContentWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"598"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxIconWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"477"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxLabelWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"503"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxLabelWidthIncShortcut"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"40","line":"526"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMaxShortcutWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"549"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeMenuButtonNeededWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"37","line":"784"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeShortcutPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"667"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateLabelPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"749"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateMaxIconWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"700"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateMaxLabelWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"715"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateMaxShortcutWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"733"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateShortcutPosition"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"762"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onclosetimer"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"983"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"983"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Wraps key events to target functions</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"1000"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeydown_enter"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"1205"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"1205"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"1017"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"1017"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress_down"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"1069"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"1069"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress_left"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"1085"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"1085"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress_right"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"25","line":"1121"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"1121"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress_up"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"1053"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"1053"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseout"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"938"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"938"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseover"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"839"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"839"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onopentimer"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"962"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"962"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCloseInterval","fromProperty":"closeInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>closeInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #closeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>closeInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getContentArrowGap","fromProperty":"contentArrowGap"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>contentArrowGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentArrowGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>contentArrowGap</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getContentNonArrowPadding","fromProperty":"contentNonArrowPadding"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>contentNonArrowPadding</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonArrowPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>contentNonArrowPadding</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getContentNonIconPadding","fromProperty":"contentNonIconPadding"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>contentNonIconPadding</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonIconPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>contentNonIconPadding</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFastReopen","fromProperty":"fastReopen"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fastReopen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fastReopen</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHoverItem","fromProperty":"hoverItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>hoverItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hoverItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>hoverItem</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIconContentGap","fromProperty":"iconContentGap"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconContentGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconContentGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconContentGap</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>indentShortcuts</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>indentShortcuts</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLabelShortcutGap","fromProperty":"labelShortcutGap"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>labelShortcutGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelShortcutGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>labelShortcutGap</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLayout"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"288"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpener","fromProperty":"opener"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>opener</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #opener}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>opener</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpenInterval","fromProperty":"openInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>openInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #openInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>openInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpenItem","fromProperty":"openItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>openItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #openItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>openItem</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getParentMenu","fromProperty":"parentMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>parentMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #parentMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>parentMenu</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSubMenuHorizontalOffset","fromProperty":"subMenuHorizontalOffset"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>subMenuHorizontalOffset</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuHorizontalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>subMenuHorizontalOffset</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSubMenuVerticalOffset","fromProperty":"subMenuVerticalOffset"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>subMenuVerticalOffset</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuVerticalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>subMenuVerticalOffset</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCloseInterval","fromProperty":"closeInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>closeInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>closeInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #closeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initContentArrowGap","fromProperty":"contentArrowGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>contentArrowGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>contentArrowGap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #contentArrowGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initContentNonArrowPadding","fromProperty":"contentNonArrowPadding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>contentNonArrowPadding</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>contentNonArrowPadding</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonArrowPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initContentNonIconPadding","fromProperty":"contentNonIconPadding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>contentNonIconPadding</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>contentNonIconPadding</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonIconPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFastReopen","fromProperty":"fastReopen"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fastReopen</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fastReopen</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHoverItem","fromProperty":"hoverItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>hoverItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>hoverItem</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #hoverItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIconContentGap","fromProperty":"iconContentGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>iconContentGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconContentGap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconContentGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>indentShortcuts</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>indentShortcuts</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLabelShortcutGap","fromProperty":"labelShortcutGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>labelShortcutGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>labelShortcutGap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #labelShortcutGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpener","fromProperty":"opener"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>opener</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>opener</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #opener}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpenInterval","fromProperty":"openInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>openInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>openInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #openInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpenItem","fromProperty":"openItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>openItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>openItem</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #openItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initParentMenu","fromProperty":"parentMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>parentMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>parentMenu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #parentMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSubMenuHorizontalOffset","fromProperty":"subMenuHorizontalOffset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>subMenuHorizontalOffset</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>subMenuHorizontalOffset</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuHorizontalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSubMenuVerticalOffset","fromProperty":"subMenuVerticalOffset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>subMenuVerticalOffset</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>subMenuVerticalOffset</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuVerticalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isFastReopen","fromProperty":"fastReopen"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>fastReopen</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>indentShortcuts</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSubElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vElement"},children:[
          {type:"desc",attributes:{"text":"<p>element to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"vButtonsOnly"},children:[
          {type:"desc",attributes:{"text":"<p>if true, child elements other than buttons\n                                        will be ignored</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns if the given element is a child of this menu</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetCloseInterval","fromProperty":"closeInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>closeInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #closeInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetContentArrowGap","fromProperty":"contentArrowGap"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>contentArrowGap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #contentArrowGap}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetContentNonArrowPadding","fromProperty":"contentNonArrowPadding"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>contentNonArrowPadding</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonArrowPadding}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetContentNonIconPadding","fromProperty":"contentNonIconPadding"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>contentNonIconPadding</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonIconPadding}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFastReopen","fromProperty":"fastReopen"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fastReopen</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHoverItem","fromProperty":"hoverItem"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>hoverItem</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #hoverItem}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIconContentGap","fromProperty":"iconContentGap"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconContentGap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconContentGap}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>indentShortcuts</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLabelShortcutGap","fromProperty":"labelShortcutGap"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>labelShortcutGap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #labelShortcutGap}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpener","fromProperty":"opener"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>opener</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #opener}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpenInterval","fromProperty":"openInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>openInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #openInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpenItem","fromProperty":"openItem"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>openItem</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #openItem}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetParentMenu","fromProperty":"parentMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>parentMenu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #parentMenu}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSubMenuHorizontalOffset","fromProperty":"subMenuHorizontalOffset"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>subMenuHorizontalOffset</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuHorizontalOffset}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSubMenuVerticalOffset","fromProperty":"subMenuVerticalOffset"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>subMenuVerticalOffset</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuVerticalOffset}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCloseInterval","fromProperty":"closeInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>closeInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>closeInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #closeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setContentArrowGap","fromProperty":"contentArrowGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>contentArrowGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>contentArrowGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentArrowGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setContentNonArrowPadding","fromProperty":"contentNonArrowPadding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>contentNonArrowPadding</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>contentNonArrowPadding</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonArrowPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setContentNonIconPadding","fromProperty":"contentNonIconPadding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>contentNonIconPadding</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>contentNonIconPadding</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contentNonIconPadding}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFastReopen","fromProperty":"fastReopen"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fastReopen</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fastReopen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHoverItem","fromProperty":"hoverItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>hoverItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>hoverItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hoverItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIconContentGap","fromProperty":"iconContentGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>iconContentGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconContentGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconContentGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>indentShortcuts</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>indentShortcuts</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLabelShortcutGap","fromProperty":"labelShortcutGap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>labelShortcutGap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>labelShortcutGap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelShortcutGap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpener","fromProperty":"opener"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>opener</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>opener</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #opener}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpenInterval","fromProperty":"openInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>openInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>openInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #openInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpenItem","fromProperty":"openItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>openItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>openItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #openItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setParentMenu","fromProperty":"parentMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>parentMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>parentMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #parentMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSubMenuHorizontalOffset","fromProperty":"subMenuHorizontalOffset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>subMenuHorizontalOffset</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>subMenuHorizontalOffset</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuHorizontalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSubMenuVerticalOffset","fromProperty":"subMenuVerticalOffset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>subMenuVerticalOffset</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>subMenuVerticalOffset</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #subMenuVerticalOffset}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleFastReopen","fromProperty":"fastReopen"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>fastReopen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fastReopen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleIndentShortcuts","fromProperty":"indentShortcuts"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>indentShortcuts</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #indentShortcuts}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"menu\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.popup.Popup"}},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"arrowPosition","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"253"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"closeInterval","defaultValue":"250","propertyType":"new","apply":"_applyCloseInterval","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Interval in ms after which sub menus should be closed</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"8","propertyType":"new","name":"contentArrowGap","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Gap in pixels between the content and the arrow for a sub menu of a menu entry</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"8","propertyType":"new","name":"contentNonArrowPadding","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the content of a menu entry when no arrow is used</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"20","propertyType":"new","name":"contentNonIconPadding","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the content of a menu entry when no icon is used</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"fastReopen","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the menus getting re-opened fast or not</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.popup.Popup"}},
    {type:"property",attributes:{"hasError":"true","name":"hoverItem","allowNull":"true","propertyType":"new","apply":"_applyHoverItem","check":"qx.ui.core.Widget"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"87"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"4","propertyType":"new","name":"iconContentGap","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Gap in pixels between the icon and the content of a menu entry</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","oldProperty":"true","hasError":"true","name":"iconPosition","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"245"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"indentShortcuts","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the shortcuts should be indented or not</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"labelPosition","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"251"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"10","propertyType":"new","name":"labelShortcutGap","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Gap in pixels between the label and the shortcut (for the command) of a menu entry</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxArrowWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"242"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxContentWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"243"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxIconWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"238"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxLabelWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"239"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxLabelWidthIncShortcut","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"240"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"maxShortcutWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"241"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"menuButtonNeededWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"255"}}
        ]}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"opener","check":"qx.ui.core.Widget"},children:[
      {type:"desc",attributes:{"text":"<p>Widget that opened the menu</p>"}}
      ]},
    {type:"property",attributes:{"name":"openInterval","defaultValue":"250","propertyType":"new","apply":"_applyOpenInterval","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Interval in ms after which sub menus should be openend</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"openItem","allowNull":"true","propertyType":"new","apply":"_applyOpenItem","check":"qx.ui.core.Widget"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"87"}}
        ]}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"parentMenu","check":"qx.ui.menu.Menu"},children:[
      {type:"desc",attributes:{"text":"<p>Reference to the parent menu if the menu is a submenu</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"shortcutPosition","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"252"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"-3","propertyType":"new","name":"subMenuHorizontalOffset","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Horizontal offset in pixels of the sub menu</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"-2","propertyType":"new","name":"subMenuVerticalOffset","themeable":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Vertical offset in pixels of the sub menu</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.popup.Popup"}}
    ]}
  ]}