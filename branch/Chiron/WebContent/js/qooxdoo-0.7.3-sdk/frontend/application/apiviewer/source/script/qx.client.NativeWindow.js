{type:"class",attributes:{"name":"NativeWindow","packageName":"qx.client","superClass":"qx.core.Target","fullName":"qx.client.NativeWindow","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A native window is a new browser window (popup) with a <span class=\"caps\">URL</span>.\nIt wraps the window.open command to a useable cross-browser\ncompatible <span class=\"caps\">API</span>.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"url"}},
        {type:"param",attributes:{"name":"name"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"close"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the window was closed</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"load"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the browser fires the load event of the document</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.client.NativeWindow#width","name":"_applyDimension"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.client.NativeWindow#name","name":"_applyName"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.client.NativeWindow#open","name":"_applyOpen"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.client.NativeWindow#left","name":"_applyPosition"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.client.NativeWindow#url","name":"_applyUrl"},children:[
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
    {type:"method",attributes:{"access":"protected","name":"_centerHelper"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"l"},children:[
          {type:"desc",attributes:{"text":"<p>left location</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"t"},children:[
          {type:"desc",attributes:{"text":"<p>top location</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Internal helper to handle centering of native windows.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_close"},children:[
      {type:"desc",attributes:{"text":"<p>Implementation of close logic. Used by the property {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> Event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Executed on each timer interval to detect two things:</p>\n\n<ul>\n<li>the load status of the document</li>\n<li>if the window was closed</li>\n</ul>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onload"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> Event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Fires the qooxdoo load event</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_open"},children:[
      {type:"desc",attributes:{"text":"<p>Generates the parameter set for the native window.open() and\nopens the window.</p>\n\n<p>Used by the property {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"blur"},children:[
      {type:"desc",attributes:{"text":"<p>Blur the window (opposite of {@link #focus})</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"centerToOpener"},children:[
      {type:"desc",attributes:{"text":"<p>Centers the window to the opener window</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"centerToScreen"},children:[
      {type:"desc",attributes:{"text":"<p>Centers the window to the screen</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"centerToScreenArea"},children:[
      {type:"desc",attributes:{"text":"<p>Centers the window to the available screen area</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"close"},children:[
      {type:"desc",attributes:{"text":"<p>Close the window (if not already closed)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"focus"},children:[
      {type:"desc",attributes:{"text":"<p>Focus the window (opposite of {@link #blur})</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowScrollbars</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowScrollbars</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDependent","fromProperty":"dependent"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dependent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dependent</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeight","fromProperty":"height"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>height</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>height</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLeft","fromProperty":"left"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>left</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getModal","fromProperty":"modal"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>modal</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>modal</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>open</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getResizable","fromProperty":"resizable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizable</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowLocation","fromProperty":"showLocation"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showLocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showLocation</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showMenubar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showMenubar</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showStatusbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showStatusbar</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showToolbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showToolbar</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStatus","fromProperty":"status"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>status</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #status}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>status</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTop","fromProperty":"top"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>top</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUrl","fromProperty":"url"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>url</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>url</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidth","fromProperty":"width"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>width</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowScrollbars</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowScrollbars</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDependent","fromProperty":"dependent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dependent</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dependent</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHeight","fromProperty":"height"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>height</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>height</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLeft","fromProperty":"left"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>left</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>left</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initModal","fromProperty":"modal"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>modal</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>modal</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpen","fromProperty":"open"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>open</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>open</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initResizable","fromProperty":"resizable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>resizable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowLocation","fromProperty":"showLocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showLocation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showLocation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showMenubar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showMenubar</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showStatusbar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showStatusbar</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showToolbar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showToolbar</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStatus","fromProperty":"status"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>status</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>status</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #status}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTop","fromProperty":"top"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>top</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>top</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initUrl","fromProperty":"url"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>url</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>url</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidth","fromProperty":"width"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>width</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>width</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowScrollbars</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isClosed"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the window is closed</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns true when the window is closed</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isDependent","fromProperty":"dependent"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>dependent</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isLoaded"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the content of the window is loaded.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns true when the content is loaded.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isModal","fromProperty":"modal"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>modal</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>open</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isResizable","fromProperty":"resizable"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowLocation","fromProperty":"showLocation"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showLocation</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showMenubar</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showStatusbar</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showToolbar</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Open the window (if not already opened)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowScrollbars</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDependent","fromProperty":"dependent"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dependent</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDimension","fromProperty":"dimension"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dimension</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dimension}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHeight","fromProperty":"height"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>height</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLeft","fromProperty":"left"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>left</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLocation","fromProperty":"location"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>location</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #location}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetModal","fromProperty":"modal"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>modal</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>open</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
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
    {type:"method",attributes:{"name":"resetShowLocation","fromProperty":"showLocation"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showLocation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showMenubar</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showStatusbar</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showToolbar</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStatus","fromProperty":"status"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>status</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #status}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTop","fromProperty":"top"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>top</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetUrl","fromProperty":"url"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>url</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidth","fromProperty":"width"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>width</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowScrollbars</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowScrollbars</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDependent","fromProperty":"dependent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dependent</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dependent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDimension","fromProperty":"dimension"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #width}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"height"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #height}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>dimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dimension}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setHeight","fromProperty":"height"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>height</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>height</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLeft","fromProperty":"left"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>left</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLocation","fromProperty":"location"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"left"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #left}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"right"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #right}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>location</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #location}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setModal","fromProperty":"modal"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>modal</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>modal</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpen","fromProperty":"open"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>open</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setResizable","fromProperty":"resizable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>resizable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowLocation","fromProperty":"showLocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showLocation</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showLocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showMenubar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showMenubar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showStatusbar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showStatusbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showToolbar</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showToolbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStatus","fromProperty":"status"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>status</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>status</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #status}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTop","fromProperty":"top"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>top</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setUrl","fromProperty":"url"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>url</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>url</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidth","fromProperty":"width"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>width</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowScrollbars","fromProperty":"allowScrollbars"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowScrollbars</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowScrollbars}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleDependent","fromProperty":"dependent"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>dependent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dependent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleModal","fromProperty":"modal"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>modal</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modal}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleResizable","fromProperty":"resizable"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowLocation","fromProperty":"showLocation"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showLocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showLocation}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowMenubar","fromProperty":"showMenubar"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showMenubar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showMenubar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowStatusbar","fromProperty":"showStatusbar"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showStatusbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showStatusbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowToolbar","fromProperty":"showToolbar"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showToolbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showToolbar}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"allowScrollbars","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>If the window is able to scroll and has visible scrollbars if needed</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"dependent","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should be window be dependent on this application window</p>"}}
      ]},
    {type:"property",attributes:{"group":"\"width\",\"height\"","name":"dimension","propertyType":"group"},children:[
      {type:"desc",attributes:{"text":"<p>Dimension (width, height) of the window</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyDimension","defaultValue":"250","propertyType":"new","name":"height","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The outer height of the window.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyPosition","defaultValue":"100","propertyType":"new","name":"left","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The left screen coordinate of the window.</p>"}}
      ]},
    {type:"property",attributes:{"group":"\"left\",\"right\"","name":"location","propertyType":"group"},children:[
      {type:"desc",attributes:{"text":"<p>Location (left, right) of the window</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"modal","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should be window be modal</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyName","defaultValue":"\"\"","propertyType":"new","name":"name","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The window name</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyOpen","defaultValue":"false","propertyType":"new","name":"open","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>If the window is open or closed</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"resizable","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>If the window is resizable</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"showLocation","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the location(bar) be shown</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"showMenubar","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the menubar be shown</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"showStatusbar","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the statusbar be shown</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"showToolbar","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the toolbar be shown</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"Ready\"","propertyType":"new","name":"status","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The text of the statusbar</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyPosition","defaultValue":"200","propertyType":"new","name":"top","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The top screen coordinate of the window.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyUrl","defaultValue":"\"about:blank\"","propertyType":"new","name":"url","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The url</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyDimension","defaultValue":"400","propertyType":"new","name":"width","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The outer width of the window.</p>"}}
      ]}
    ]}
  ]}