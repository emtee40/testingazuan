{type:"class",attributes:{"name":"Popup","packageName":"qx.ui.popup","superClass":"qx.ui.layout.CanvasLayout","childClasses":"qx.ui.component.ColorPopup,qx.ui.menu.Menu,qx.ui.popup.PopupAtom,qx.ui.resizer.ResizablePopup","fullName":"qx.ui.popup.Popup","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.popup.Popup","name":"popup"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_afterAppear"},children:[
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;afterAppear&#8221; event.</p>\n\n<p>If the property {@link #restrictToPageOnOpen} is set to <code>true</code>\nthe popup gets repositioned to get displayed within the boundaries of the\nclient document.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_beforeAppear"},children:[
      {type:"desc",attributes:{"text":"<p>Callback for &#8220;beforeAppear&#8221; event.</p>\n\n<p>Moves the popup out of the visible area to ensure the popup widget is\ndisplayed in the boundaries of the document. This mechnism jumps in when\n{@link #restrictToPageOnOpen} is set to <code>true</code> (default).</p>\n\n<p>Additionally the popup widget is registered at the popup manager and the\nmethod {@link #bringToFront} is called.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_beforeDisappear"},children:[
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;beforeDisappear&#8221; event.</p>\n\n<p>The popup widget gets deregistered from the popup manager.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_makeActive"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the popup widget as active child</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_makeInactive"},children:[
      {type:"desc",attributes:{"text":"<p>Give back the focus control to the focus root.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_sendTo"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the zIndex of all registered popups and menus\n(getting the instances via the {@link qx.ui.popup.PopupManager} and\nthe {@link qx.ui.menu.Manager}) one higher than the defined minimum zIndex.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"bringToFront"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the {@link #zIndex} to Infinity and calls the\nmethod {@link #_sendTo}</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"centerToBrowser"},children:[
      {type:"desc",attributes:{"text":"<p>Centers the popup using the coordinates of the {@link qx.ui.core.ClientDocument}.\nThis method does only work if the Popup has already been rendered, so it\nis best to call it in the {@link qx.ui.core.Widget#appear} event.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getAutoHide","fromProperty":"autoHide"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoHide</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoHide</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCentered","fromProperty":"centered"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>centered</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>centered</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHideTimeStamp"},children:[
      {type:"desc",attributes:{"text":"<p>Utility method to get the current showTimeStamp</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Timestamp</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRestrictToPageBottom","fromProperty":"restrictToPageBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>restrictToPageBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>restrictToPageBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRestrictToPageLeft","fromProperty":"restrictToPageLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>restrictToPageLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>restrictToPageLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>restrictToPageOnOpen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>restrictToPageOnOpen</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRestrictToPageRight","fromProperty":"restrictToPageRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>restrictToPageRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>restrictToPageRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRestrictToPageTop","fromProperty":"restrictToPageTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>restrictToPageTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>restrictToPageTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowTimeStamp"},children:[
      {type:"desc",attributes:{"text":"<p>Utility method to get the current showTimeStamp</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Timestamp</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAutoHide","fromProperty":"autoHide"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>autoHide</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoHide</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCentered","fromProperty":"centered"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>centered</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>centered</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRestrictToPageBottom","fromProperty":"restrictToPageBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>restrictToPageBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>restrictToPageBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRestrictToPageLeft","fromProperty":"restrictToPageLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>restrictToPageLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>restrictToPageLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>restrictToPageOnOpen</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>restrictToPageOnOpen</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRestrictToPageRight","fromProperty":"restrictToPageRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>restrictToPageRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>restrictToPageRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRestrictToPageTop","fromProperty":"restrictToPageTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>restrictToPageTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>restrictToPageTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAutoHide","fromProperty":"autoHide"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>autoHide</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCentered","fromProperty":"centered"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>centered</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>restrictToPageOnOpen</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"positionRelativeTo"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"el"},children:[
          {type:"desc",attributes:{"text":"<p>Reference <span class=\"caps\">DOM</span> element/widget.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"0","name":"offsetX"},children:[
          {type:"desc",attributes:{"text":"<p>Offset in pixels in X direction (optional).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"0","name":"offsetY"},children:[
          {type:"desc",attributes:{"text":"<p>Offset in pixels in Y direction (optional).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Positions the popup relative to some reference element.</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetAutoHide","fromProperty":"autoHide"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoHide</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCentered","fromProperty":"centered"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>centered</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRestrictToPageBottom","fromProperty":"restrictToPageBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>restrictToPageBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRestrictToPageLeft","fromProperty":"restrictToPageLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>restrictToPageLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>restrictToPageOnOpen</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRestrictToPageRight","fromProperty":"restrictToPageRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>restrictToPageRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRestrictToPageTop","fromProperty":"restrictToPageTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>restrictToPageTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"sendToBack"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the {@link #zIndex} to -Infinity and calls the\nmethod {@link #_sendTo}</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAutoHide","fromProperty":"autoHide"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>autoHide</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoHide</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCentered","fromProperty":"centered"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>centered</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>centered</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRestrictToPageBottom","fromProperty":"restrictToPageBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>restrictToPageBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>restrictToPageBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRestrictToPageLeft","fromProperty":"restrictToPageLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>restrictToPageLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>restrictToPageLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>restrictToPageOnOpen</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>restrictToPageOnOpen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRestrictToPageRight","fromProperty":"restrictToPageRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>restrictToPageRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>restrictToPageRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRestrictToPageTop","fromProperty":"restrictToPageTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>restrictToPageTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>restrictToPageTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAutoHide","fromProperty":"autoHide"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>autoHide</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoHide}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleCentered","fromProperty":"centered"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>centered</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #centered}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleRestrictToPageOnOpen","fromProperty":"restrictToPageOnOpen"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>restrictToPageOnOpen</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #restrictToPageOnOpen}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"popup\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"autoHide","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to let the system decide when to hide the popup. Setting\n this to false gives you better control but it also requires you\n to handle the closing of the popup.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"centered","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Center the popup on open</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","overriddenFrom":"qx.ui.core.Widget","name":"display","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Make element displayed (if switched to true the widget will be created, if needed, too).\n Instead of qx.ui.core.Widget, the default is false here.</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"restrictToPageBottom","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum offset to the bottom of the page too keep when\n{@link #restrictToPageOnOpen} is true (in pixels).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"restrictToPageLeft","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum offset to the left of the page too keep when\n{@link #restrictToPageOnOpen} is true (in pixels).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"restrictToPageOnOpen","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the popup should be restricted to the visible area of the page when opened.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"restrictToPageRight","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum offset to the right of the page too keep when\n{@link #restrictToPageOnOpen} is true (in pixels).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"restrictToPageTop","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum offset to the top of the page too keep when\n{@link #restrictToPageOnOpen} is true (in pixels).</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]}
  ]}