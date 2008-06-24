{type:"class",attributes:{"name":"Manager","packageName":"qx.ui.window","superClass":"qx.util.manager.Object","fullName":"qx.ui.window.Manager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This singleton manages qx.ui.window.Windows</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.window.Manager#activeWindow","name":"_applyActiveWindow"},children:[
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
    {type:"method",attributes:{"overriddenFrom":"qx.util.manager.Object","name":"add"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWindow"},children:[
          {type:"desc",attributes:{"text":"<p>window instance to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.window.Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds a {@link qx.ui.window.Window} instance to the manager and\nsets it as active window.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"compareWindows"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"w1"},children:[
          {type:"desc",attributes:{"text":"<p>first window to compare</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.window.Window"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"w2"},children:[
          {type:"desc",attributes:{"text":"<p>second window to compare</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.window.Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compares two windows (used as sort method in {@link #remove}).\nSorts the windows by checking which of the given windows is active.\nIf none of those two are active the zIndex are subtracted from each\nother to determine the sort order.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>1 for first window active, -1 for second window active\nand the subtraction of the zIndex if none of the two are active.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"int"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getActiveWindow","fromProperty":"activeWindow"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>activeWindow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #activeWindow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>activeWindow</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initActiveWindow","fromProperty":"activeWindow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>activeWindow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>activeWindow</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #activeWindow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.manager.Object","name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWindow"},children:[
          {type:"desc",attributes:{"text":"<p>window instance</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.window.Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a {@link qx.ui.window.Window} instance from the manager.\nIf the current active window is the one which should be removed the\nexisting windows are compared to determine the new active window\n(using the {@link #compareWindows} method).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetActiveWindow","fromProperty":"activeWindow"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>activeWindow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #activeWindow}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setActiveWindow","fromProperty":"activeWindow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>activeWindow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>activeWindow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #activeWindow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"update"},children:[
      {type:"desc",attributes:{"text":"<p>Updates all registered window instances</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"check":"Object","allowNull":"true","propertyType":"new","name":"activeWindow","apply":"_applyActiveWindow"},children:[
      {type:"desc",attributes:{"text":"<p>This property holds the current active window</p>"}}
      ]}
    ]}
  ]}