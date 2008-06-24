{type:"class",attributes:{"name":"SelectionManager","packageName":"qx.ui.treevirtual","superClass":"qx.ui.table.selection.Manager","fullName":"qx.ui.treevirtual.SelectionManager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A selection manager. This is a helper class that handles all selection\nrelated events and updates a SelectionModel.</p>\n\n<p>This Selection Manager differs from its superclass in that we do not want\nrows to be selected when moving around with the keyboard.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"table"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.table.selection.Manager","name":"_handleSelectEvent"},children:[
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
      {type:"desc",attributes:{"text":"<p>Handles a select event.  First we determine if the click was on the\nopen/close button and toggle the opened/closed state as necessary.  Then,\nif the click was not on the open/close button or if the table&#8217;s\n&#8220;openCloseClickSelectsRow&#8221; property so indicates, call our superclass to\nhandle the actual row selection.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Manager","name":"handleMoveKeyDown"},children:[
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
      ]}
    ]}
  ]}