{type:"class",attributes:{"name":"Border","packageName":"qx.theme.manager","superClass":"qx.util.manager.Value","isSingleton":"true","fullName":"qx.theme.manager.Border","type":"class"},children:[
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeBorderTheme"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #borderTheme}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.theme.manager.Border#borderTheme","name":"_applyBorderTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Theme"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Theme"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>borderTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBorderTheme}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getBorderTheme","fromProperty":"borderTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>borderTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #borderTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>borderTheme</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBorderTheme","fromProperty":"borderTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>borderTheme</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>borderTheme</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #borderTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.manager.Value","name":"isDynamic"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is interpreted dynamically</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>returns true if the value is interpreted dynamically</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBorderTheme","fromProperty":"borderTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>borderTheme</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #borderTheme}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.manager.Value","name":"resolveDynamic"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the dynamically interpreted result for the incoming value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>return the (translated) result of the incoming value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBorderTheme","fromProperty":"borderTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>borderTheme</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>borderTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #borderTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"syncBorderTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Sync dependend objects with internal database</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"updateObjectsEdge"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"border"},children:[
          {type:"desc",attributes:{"text":"<p>the border which have been modified</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Border"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"edge"},children:[
          {type:"desc",attributes:{"text":"<p>top, right, bottom or left</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Update all objects which use the given border. Only updates one edge at each call.</p>"}}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"borderTheme","check":"Theme","allowNull":"true","propertyType":"new","apply":"_applyBorderTheme","event":"changeBorderTheme"},children:[
      {type:"desc",attributes:{"text":"<p>the currently selected border theme</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.theme.manager.Border"}}
          ]}
        ]}
      ]}
    ]}
  ]}