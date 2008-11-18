{type:"class",attributes:{"isStatic":"true","name":"Log","packageName":"qx.core","fullName":"qx.core.Log","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This class contains the Firebug Lite &#8220;console&#8221; for browsers without the Firebug\nextension. It is relatively lightweight and only implement the basic\nfeatures.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_addEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>Target of the event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"handler"},children:[
          {type:"desc",attributes:{"text":"<p>Event handler method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds an event to the given object</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendFloat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Float&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Function&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendInteger"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Integer&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>given node</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given node.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendNull"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;null&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Object&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendObjectFormatted"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Object&#8221; datatype formatted style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"row"},children:[
          {type:"desc",attributes:{"text":"<p>Complete row element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Appends a row. Either to a (existing) group or directly to the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendSelector"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;Selector&#8221; style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;String&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_appendText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"html"},children:[
          {type:"desc",attributes:{"text":"<p>output</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs the given object in &#8220;text&#8221; datatype style.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_cancelEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>Event name</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Cancels the given event</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_escapeHTML"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>value to escape</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Escapes the <span class=\"caps\">HTML</span> in the given value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>escaped value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_evalCommandLine"},children:[
      {type:"desc",attributes:{"text":"<p>Evals the value typed in the commandline</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_flush"},children:[
      {type:"desc",attributes:{"text":"<p>Flushes the message queue and writes the content to the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_focusCommandLine"},children:[
      {type:"desc",attributes:{"text":"<p>Focuses the command line</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_initializeWindow"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the iframe element which represents the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_logFormatted"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"objects"},children:[
          {type:"desc",attributes:{"text":"<p>Log objects</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"className"},children:[
          {type:"desc",attributes:{"text":"<p>Controls the format of the message</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Formats a log message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_logRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"message"},children:[
          {type:"desc",attributes:{"text":"<p>message to log</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"className"},children:[
          {type:"desc",attributes:{"text":"<p>Controls the format of the message</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Logs a row. Either writes directly to the console if it is ready or\nqueues the message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_objectToString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>given object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a given object to a string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns the converted string or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_onCommandLineKeyDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>Event object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler method for the keydown event at the command line</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_onLogReady"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"win"},children:[
          {type:"desc",attributes:{"text":"<p>Window object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Called when the document in the iframe is fully loadad.\nRegisters some events on the several console elements\nand layouts the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_onResize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>Event object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler method for the resize event</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_onUnload"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> Event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for unload event</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_parseFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"format"},children:[
          {type:"desc",attributes:{"text":"<p>format to parse</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Parses the output format</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>format parts</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_removeEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>Target of the event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"handler"},children:[
          {type:"desc",attributes:{"text":"<p>Event handler method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes an event from the given object</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_syncLayout"},children:[
      {type:"desc",attributes:{"text":"<p>Synchronizes the height of the log console to the inner height of the window</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_writeMessage"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"message"},children:[
          {type:"desc",attributes:{"text":"<p>Array of message parts</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"className"},children:[
          {type:"desc",attributes:{"text":"<p>Controls the format of the message</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Writes a message to the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_writeRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"message"},children:[
          {type:"desc",attributes:{"text":"<p>Array of message parts</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"className"},children:[
          {type:"desc",attributes:{"text":"<p>Controls the format of the message</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Writes a single row using {@link #_appendRow}</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"assert"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"null","name":"truth"},children:[
          {type:"desc",attributes:{"text":"<p>Boolean value or null</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"message"},children:[
          {type:"desc",attributes:{"text":"<p>message to throw</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>Multiple arguments, the first one is the expression, the following the objects to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Asserts the given truth and outputs the message if the given &#8220;truth&#8221; is false\nAlso accepts variable arguments where the first argument is the expression and\nthe following are the object which should be tested.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"clear"},children:[
      {type:"desc",attributes:{"text":"<p>Clears the console</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"debug"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>One or multiple messages</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs a debug message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"dir"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>Object to list</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Complete list of the given object</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"dirxml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>Node to list</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"DOMNode"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Complete list of the given node</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"error"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>One or multiple messages</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs an error message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"info"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>One or multiple messages</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs an info message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"log"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>One or multiple messages</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs a log message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"time"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the timer</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Start named timer</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"timeEnd"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the timer</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>End named timer</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"trace"},children:[
      {type:"desc",attributes:{"text":"<p>Logs the current stack trace as a debug message.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"warn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>One or multiple messages</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Outputs a warning message</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}