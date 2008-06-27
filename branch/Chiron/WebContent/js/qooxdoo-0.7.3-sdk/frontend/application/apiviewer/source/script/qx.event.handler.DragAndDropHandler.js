{type:"class",attributes:{"name":"DragAndDropHandler","hasWarning":"true","packageName":"qx.event.handler","superClass":"qx.util.manager.Object","isSingleton":"true","fullName":"qx.event.handler.DragAndDropHandler","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This manager (singleton) manage all drag and drop handling of a qx.core.Init instance.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeCurrentAction"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #currentAction}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.event.handler.DragAndDropHandler#destinationWidget","name":"_applyDestinationWidget"},children:[
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
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_endDrag"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"currentDestinationWidget"},children:[
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
      {type:"desc",attributes:{"text":"<p>This will be called to the end of each drag and drop session</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>currentDestinationWidget</code> is not documented.","column":"16","line":"691"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"16","line":"691"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_endDragCore"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"717"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_evalNewAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vKeyShift"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vKeyCtrl"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vKeyAlt"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vKeyShift</code> is not documented.","column":"22","line":"962"}},
        {type:"error",attributes:{"msg":"Parameter <code>vKeyCtrl</code> is not documented.","column":"22","line":"962"}},
        {type:"error",attributes:{"msg":"Parameter <code>vKeyAlt</code> is not documented.","column":"22","line":"962"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"962"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_fireUserEvents"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromWidget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"toWidget"},children:[
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
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>fromWidget</code> is not documented.","column":"23","line":"362"}},
        {type:"error",attributes:{"msg":"Parameter <code>toWidget</code> is not documented.","column":"23","line":"362"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"23","line":"362"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"362"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleKeyDown"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"584"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"584"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleKeyUp"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"616"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"616"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleMouseDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This starts the core drag and drop session.</p>\n\n<p>To really get drag and drop working you need to define\na function which you attach to &#8220;dragstart&#8221;-event, which\ninvokes at least this.startDrag()</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"423"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handler for mouse move events</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"451"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleMouseUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handle mouse up event. Normally this finalize the drag and drop event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"525"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderCursor"},children:[
      {type:"desc",attributes:{"text":"<p>Select and setup the current used cursor</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderFeedbackWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Renders the user feedback widget at the correct location.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vAction"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vForce"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vAction</code> is not documented.","column":"17","line":"894"}},
        {type:"error",attributes:{"msg":"Parameter <code>vForce</code> is not documented.","column":"17","line":"894"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"894"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vMimeType"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vData"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add data of mimetype.</p>\n\n<p>#param vMimeType[String]: A valid mimetype\n#param vData[Any]: Any value for the mimetype</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vMimeType</code> is not documented.","column":"15","line":"179"}},
        {type:"error",attributes:{"msg":"Parameter <code>vData</code> is not documented.","column":"15","line":"179"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"cancelDrag"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Cancel current drag and drop session</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"651"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"clearActions"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"911"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"clearData"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"202"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCurrentAction","fromProperty":"currentAction"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>currentAction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #currentAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>currentAction</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vMimeType"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vMimeType</code> is not documented.","column":"15","line":"191"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"191"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDefaultCursorDeltaX","fromProperty":"defaultCursorDeltaX"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>defaultCursorDeltaX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>defaultCursorDeltaX</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDefaultCursorDeltaY","fromProperty":"defaultCursorDeltaY"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>defaultCursorDeltaY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>defaultCursorDeltaY</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDestinationWidget","fromProperty":"destinationWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>destinationWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #destinationWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>destinationWidget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getDropDataTypes"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"221"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getDropTarget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSourceWidget","fromProperty":"sourceWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>sourceWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sourceWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>sourceWidget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"globalCancelDrag"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"675"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleKeyEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This wraps the key events to custom handlers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"558"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleMouseEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This wraps the mouse events to custom handlers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"24","line":"396"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCurrentAction","fromProperty":"currentAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>currentAction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>currentAction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #currentAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDefaultCursorDeltaX","fromProperty":"defaultCursorDeltaX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>defaultCursorDeltaX</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>defaultCursorDeltaX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDefaultCursorDeltaY","fromProperty":"defaultCursorDeltaY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>defaultCursorDeltaY</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>defaultCursorDeltaY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDestinationWidget","fromProperty":"destinationWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>destinationWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>destinationWidget</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #destinationWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSourceWidget","fromProperty":"sourceWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>sourceWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>sourceWidget</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #sourceWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vAction"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vAction</code> is not documented.","column":"20","line":"925"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"925"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCurrentAction","fromProperty":"currentAction"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>currentAction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #currentAction}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDefaultCursorDeltaX","fromProperty":"defaultCursorDeltaX"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>defaultCursorDeltaX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaX}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDefaultCursorDeltaY","fromProperty":"defaultCursorDeltaY"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>defaultCursorDeltaY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaY}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDestinationWidget","fromProperty":"destinationWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>destinationWidget</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #destinationWidget}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSourceWidget","fromProperty":"sourceWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>sourceWidget</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #sourceWidget}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vAction"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vAction</code> is not documented.","column":"17","line":"943"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"943"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCurrentAction","fromProperty":"currentAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>currentAction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>currentAction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #currentAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCursorPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"deltaX"},children:[
          {type:"desc",attributes:{"text":"<p>The number of pixels the top-left corner of the\n         cursor feedback should be away from the mouse cursor in x direction.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"int"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"deltaY"},children:[
          {type:"desc",attributes:{"text":"<p>The number of pixels the top-left corner of the\n         cursor feedback should be away from the mouse cursor in y direction.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"int"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the position of the cursor feedback (the icon showing whether dropping\nis allowed at the current position and which action a drop will do).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDefaultCursorDeltaX","fromProperty":"defaultCursorDeltaX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>defaultCursorDeltaX</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>defaultCursorDeltaX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDefaultCursorDeltaY","fromProperty":"defaultCursorDeltaY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>defaultCursorDeltaY</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>defaultCursorDeltaY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultCursorDeltaY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDestinationWidget","fromProperty":"destinationWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>destinationWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>destinationWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #destinationWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFeedbackWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>the feedback widget.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"10","name":"deltaX"},children:[
          {type:"desc",attributes:{"text":"<p>the number of pixels the top-left corner of the widget\n         should be away from the mouse cursor in x direction.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"int"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"10","name":"deltaY"},children:[
          {type:"desc",attributes:{"text":"<p>the number of pixels the top-left corner of the widget\n         should be away from the mouse cursor in y direction.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"int"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"autoDisposeWidget"},children:[
          {type:"desc",attributes:{"text":"<p>whether the widget should be disposed when\n         dragging is finished or cancelled.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the widget to show as feedback for the user. This widget should\nrepresent the object(s) the user is dragging.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSourceWidget","fromProperty":"sourceWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>sourceWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>sourceWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sourceWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"startDrag"},children:[
      {type:"desc",attributes:{"text":"<p>This needed be called from any &#8220;dragstart&#8221; event to really start drag session.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"supportsDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"20","line":"859"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"859"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"hasError":"true","name":"currentAction","event":"changeCurrentAction","allowNull":"true","propertyType":"new","check":"String"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"75"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"5","propertyType":"new","name":"defaultCursorDeltaX","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The default delta x of the cursor feedback.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"15","propertyType":"new","name":"defaultCursorDeltaY","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The default delta y of the cursor feedback.</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"destinationWidget","allowNull":"true","propertyType":"new","apply":"_applyDestinationWidget","check":"qx.ui.core.Widget"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"75"}}
        ]}
      ]},
    {type:"property",attributes:{"allowNull":"true","hasError":"true","propertyType":"new","name":"sourceWidget","check":"qx.ui.core.Widget"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"75"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.event.handler.DragAndDropHandler"}}
          ]}
        ]}
      ]}
    ]}
  ]}