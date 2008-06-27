{type:"class",attributes:{"name":"ToolTipManager","packageName":"qx.ui.popup","superClass":"qx.util.manager.Object","isSingleton":"true","fullName":"qx.ui.popup.ToolTipManager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This manages ToolTip instances</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.popup.ToolTipManager#currentToolTip","name":"_applyCurrentToolTip"},children:[
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
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCurrentToolTip","fromProperty":"currentToolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>currentToolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #currentToolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>currentToolTip</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleBlur"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>blur event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reset the property {@link #currentToolTip} if the\ncurrent tooltip is the tooltip of the target widget.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>focus event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>If a widget with a tooltip get focused, bind the tooltip\nto the target widget and set the {@link #currentToolTip} property.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleMouseOut"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseOut event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Resets the property {@link #currentToolTip} if there was a\ntooltip and no new one is created.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleMouseOver"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseOver event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Searches for the tooltip of the target widget. If any tooltip instance\nis found this instance is bound to the target widget and the tooltip is\nset as {@link #currentToolTip}</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCurrentToolTip","fromProperty":"currentToolTip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>currentToolTip</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>currentToolTip</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #currentToolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCurrentToolTip","fromProperty":"currentToolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>currentToolTip</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #currentToolTip}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCurrentToolTip","fromProperty":"currentToolTip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>currentToolTip</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>currentToolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #currentToolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"check":"qx.ui.popup.ToolTip","allowNull":"true","propertyType":"new","name":"currentToolTip","apply":"_applyCurrentToolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Holds the current ToolTip instance</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.popup.ToolTipManager"}}
          ]}
        ]}
      ]}
    ]}
  ]}