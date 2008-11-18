{type:"class",attributes:{"name":"MResizable","hasWarning":"true","packageName":"qx.ui.resizer","includer":"qx.ui.resizer.ResizablePopup,qx.ui.resizer.Resizer","fullName":"qx.ui.resizer.MResizable","type":"mixin"},children:[
  {type:"desc",attributes:{"text":"<p>Provides resizing behavior to any widget.\nThe widget that includes this mixin, must implement the {@link qx.ui.resizer.IResizable} interface.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"child"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.resizer.MResizable#resizableWest","isMixin":"true","name":"_applyResizable"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>resizableEast</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyResizable}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_near"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"13","line":"332"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"13","line":"332"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"332"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_onmousedown"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"157"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"157"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_onmousemove"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"344"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"344"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_onmouseup"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"261"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"261"}}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"getResizable"},children:[
      {type:"desc",attributes:{"text":"<p>Adjust so that it returns a boolean instead of an array.\nWrapper around isResizable. Please use isResizable instead.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizableEast","fromProperty":"resizableEast"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizableEast</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizableEast</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizableNorth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizableNorth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizableSouth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizableSouth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizableWest","fromProperty":"resizableWest"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizableWest</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizableWest</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizeMethod","fromProperty":"resizeMethod"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizeMethod</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizeMethod</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizableEast","fromProperty":"resizableEast"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizableEast</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizableEast</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizableNorth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizableNorth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizableSouth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizableSouth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizableWest","fromProperty":"resizableWest"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizableWest</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizableWest</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizeMethod","fromProperty":"resizeMethod"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizeMethod</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizeMethod</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"isResizable"},children:[
      {type:"desc",attributes:{"text":"<p>Adjust so that it returns a boolean instead of an array.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isResizableEast","fromProperty":"resizableEast"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizableEast</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizableNorth</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizableSouth</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isResizableWest","fromProperty":"resizableWest"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizableWest</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizable","fromProperty":"resizable"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizableEast","fromProperty":"resizableEast"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizableEast</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizableNorth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizableSouth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizableWest","fromProperty":"resizableWest"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizableWest</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetResizeMethod","fromProperty":"resizeMethod"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizeMethod</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeMethod}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizable","fromProperty":"resizable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"resizableNorth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #resizableNorth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"resizableEast"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #resizableEast}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"resizableSouth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #resizableSouth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"resizableWest"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #resizableWest}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>resizable</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setResizableEast","fromProperty":"resizableEast"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizableEast</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizableEast</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizableNorth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizableNorth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizableSouth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizableSouth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizableWest","fromProperty":"resizableWest"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizableWest</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizableWest</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizeMethod","fromProperty":"resizeMethod"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizeMethod</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizeMethod</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleResizableEast","fromProperty":"resizableEast"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizableEast</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableEast}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleResizableNorth","fromProperty":"resizableNorth"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizableNorth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableNorth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleResizableSouth","fromProperty":"resizableSouth"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizableSouth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableSouth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleResizableWest","fromProperty":"resizableWest"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizableWest</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizableWest}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"isMixin":"true","propertyType":"group","group":"\"resizableNorth\",\"resizableEast\",\"resizableSouth\",\"resizableWest\"","name":"resizable","mode":"shorthand"},children:[
      {type:"desc",attributes:{"text":"<p>If the window is resizable</p>"}}
      ]},
    {type:"property",attributes:{"name":"resizableEast","defaultValue":"true","propertyType":"new","apply":"_applyResizable","isMixin":"true","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>It is resizable in the right direction.</p>"}}
      ]},
    {type:"property",attributes:{"name":"resizableNorth","defaultValue":"true","propertyType":"new","apply":"_applyResizable","isMixin":"true","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>It is resizable in the top direction.</p>"}}
      ]},
    {type:"property",attributes:{"name":"resizableSouth","defaultValue":"true","propertyType":"new","apply":"_applyResizable","isMixin":"true","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>It is resizable in the bottom direction.</p>"}}
      ]},
    {type:"property",attributes:{"name":"resizableWest","defaultValue":"true","propertyType":"new","apply":"_applyResizable","isMixin":"true","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>It is resizable in the left direction.</p>"}}
      ]},
    {type:"property",attributes:{"name":"resizeMethod","defaultValue":"\"frame\"","propertyType":"new","possibleValues":"\"opaque\",\"lazyopaque\",\"frame\",\"translucent\"","isMixin":"true","event":"changeResizeMethod"},children:[
      {type:"desc",attributes:{"text":"<p>The resize method to use</p>"}}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeResizeMethod"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #resizeMethod}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]}
  ]}