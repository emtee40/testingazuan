{type:"class",attributes:{"name":"List","packageName":"qx.ui.form","superClass":"qx.ui.layout.VerticalBoxLayout","fullName":"qx.ui.form.List","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.form.List","name":"list"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"list\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"enableInlineFind","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the inline-find feature is activated or not</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"markLeadingItem","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the leading item should be marked especially or not</p>"}}
      ]},
    {type:"property",attributes:{"name":"overflow","docFrom":"qx.ui.core.Widget","defaultValue":"\"hidden\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_findItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vUserValue"},children:[
          {type:"desc",attributes:{"text":"<p>search string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStartIndex"},children:[
          {type:"desc",attributes:{"text":"<p>start index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vType"},children:[
          {type:"desc",attributes:{"text":"<p>type of matching</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Executes different (depending on the given search type) methods\nof qx.ui.form.ListItem for searching the given search string.\nReturns a reference to the qx.ui.form.ListItem where the search string\nis found first.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onclick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>click event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the event to the selection manager if a list item could be\nresolved out of the event target.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ondblclick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>double-click event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the event to the selection manager if a list item could be\nresolved out of the event target.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Dispatches the &#8220;action&#8221; event on every selected list item\nwhen the &#8220;Enter&#8221; key is pressed</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeyinput"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyInput event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles the inline find &#8211; if enabled</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyPress event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the control of the event to selection manager</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the event to the selection manager if a list item could be\nresolved out of the event target.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseover"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseOver event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the event to the selection manager if a list item could be\nresolved out of the event target.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseUp event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Delegates the event to the selection manager if a list item could be\nresolved out of the event target.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_sortItemsCompare"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first hash to compare</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Hash"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second hash to compare</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Hash"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare method called by the sort method</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns -1|0|1 for the sort method to control the order of the items to sort.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"findString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>search string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStartIndex"},children:[
          {type:"desc",attributes:{"text":"<p>start index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Perform a search for a string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"findStringExact"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>search string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStartIndex"},children:[
          {type:"desc",attributes:{"text":"<p>start index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Perform a exact search for a string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"findValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>search string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStartIndex"},children:[
          {type:"desc",attributes:{"text":"<p>start index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Perform a search for a value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"findValueExact"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>search string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vStartIndex"},children:[
          {type:"desc",attributes:{"text":"<p>start index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Perform a exact search for a value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enableInlineFind</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getListItemTarget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"desc",attributes:{"text":"<p>event target</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Traverses the widget tree upwards until a\ncorresponding qx.ui.form.ListItem to given vItem\n(event target) is found.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>List item</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getManager"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the selection manager</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.selection.SelectionManager"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>markLeadingItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>markLeadingItem</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectedItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the first selected list item.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Selected item or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.ListItem"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectedItems"},children:[
      {type:"desc",attributes:{"text":"<p>Returns all selected list items (uses the selection manager).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns all selected list items.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enableInlineFind</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enableInlineFind</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>markLeadingItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>markLeadingItem</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enableInlineFind</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>markLeadingItem</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enableInlineFind</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>markLeadingItem</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enableInlineFind</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>markLeadingItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>markLeadingItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"sortItemsByString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vReverse"},children:[
          {type:"desc",attributes:{"text":"<p>Whether the items should be sorted reverse or not.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sorts all items by using the string of the label.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"sortItemsByValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vReverse"},children:[
          {type:"desc",attributes:{"text":"<p>Whether the items should be sorted reverse or not.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sorts all items by using the value.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEnableInlineFind","fromProperty":"enableInlineFind"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleMarkLeadingItem","fromProperty":"markLeadingItem"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>markLeadingItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #markLeadingItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}