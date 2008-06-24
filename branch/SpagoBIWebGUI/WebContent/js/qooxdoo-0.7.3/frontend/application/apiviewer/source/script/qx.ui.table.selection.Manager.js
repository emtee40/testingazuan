{type:"class",attributes:{"name":"Manager","packageName":"qx.ui.table.selection","superClass":"qx.core.Object","childClasses":"qx.ui.treevirtual.SelectionManager","fullName":"qx.ui.table.selection.Manager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A selection manager. This is a helper class that handles all selection\nrelated events and updates a SelectionModel.</p>\n\n<p>Widgets that support selection should use this manager. This way the only\nthing the widget has to do is mapping mouse or key events to indexes and\ncall the corresponding handler method.</p>"}},
  {type:"see",attributes:{"name":"SelectionModel"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_handleSelectEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index the event is pointing at.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles a select event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectionModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleClick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index the mouse is pointing at.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles the mouse click event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleMouseDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index the mouse is pointing at.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles the mouse down event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleMouseUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index the mouse is pointing at.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles the mouse up event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleMoveKeyDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index that is currently focused.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the key event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles a key down event that moved the focus (E.g. up, down, home, end, ...).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleSelectKeyDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index that is currently focused.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the key event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles the key down event that is used as replacement for mouse clicks\n(Normally space).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectionModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectionModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelectionModel","fromProperty":"selectionModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selectionModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectionModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"propertyType":"new","name":"selectionModel","check":"qx.ui.table.selection.Model"},children:[
      {type:"desc",attributes:{"text":"<p>The selection model where to set the selection changes.</p>"}}
      ]}
    ]}
  ]}