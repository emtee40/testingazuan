{type:"class",attributes:{"name":"Resize","packageName":"qx.ui.table.columnmodel","superClass":"qx.ui.table.columnmodel.Basic","fullName":"qx.ui.table.columnmodel.Resize","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A table column model that automagically resizes columns based on a\nselected behavior.</p>"}},
  {type:"see",attributes:{"name":"qx.ui.table.columnmodel.Basic"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeBehavior"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #behavior}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_addResetColumnWidthButton"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;columnVisibilityMenuCreateEnd&#8221; event indicating that the menu is\n  being generated.  The data is a map containing propeties <i>table</i>\n  and <i>menu</i>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reset the column widths to their &#8220;onappear&#8221; defaults.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.columnmodel.Resize#behavior","name":"_applyBehavior"},children:[
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
    {type:"method",attributes:{"access":"protected","name":"_onappear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;onappear&#8221; event object.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the &#8220;appear&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oncolumnwidthchanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;widthChanged&#8221; event object.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the &#8220;widthChanged&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ontablewidthchanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;onwindowresize&#8221; event object.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the &#8220;tableWidthChanged&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onverticalscrollbarchanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;verticalScrollBarChanged&#8221; event object.  The data is a boolean\n  indicating whether a vertical scroll bar is now present.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the &#8220;verticalScrollBarChanged&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onvisibilitychanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>The &#8220;visibilityChanged&#8221; event object.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the &#8220;visibilityChanged&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBehavior","fromProperty":"behavior"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>behavior</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #behavior}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>behavior</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.columnmodel.Basic","name":"init"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"numColumns"},children:[
          {type:"desc",attributes:{"text":"<p>the number of columns the model should have.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"table"},children:[
          {type:"desc",attributes:{"text":"<p>The table which this model is used for.  This allows us access to\n  other aspects of the table, as the <i>behavior</i> sees fit.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.Table"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Initializes the column model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBehavior","fromProperty":"behavior"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>behavior</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>behavior</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #behavior}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBehavior","fromProperty":"behavior"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>behavior</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #behavior}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBehavior","fromProperty":"behavior"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>behavior</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>behavior</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #behavior}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"behavior","defaultValue":"null","check":"qx.ui.table.columnmodel.resizebehavior.Abstract","allowNull":"true","propertyType":"new","apply":"_applyBehavior","event":"changeBehavior"},children:[
      {type:"desc",attributes:{"text":"<p>The behavior to use.</p>\n\n<p>The provided behavior must extend {link</p>"}}
      ]}
    ]}
  ]}