{type:"class",attributes:{"name":"ComboBox","packageName":"qx.ui.form","superClass":"qx.ui.layout.HorizontalBoxLayout","fullName":"qx.ui.form.ComboBox","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A combo-box for qooxdoo.</p>\n\n<p>The major additional feature compared to typical select fields is that it allows\nit to be editable. Also images are supported inside the popup list.</p>\n\n<p>Features:\n<ul>\n<li>Editable text field</li>\n<li>Complete key-navigation</li>\n<li>Images inside the list</li>\n<li>Images and text inside the list</li>\n</ul></p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.basic.Atom","name":"combo-box-button"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"pressed"}}
        ]}
      ]},
    {type:"appearance",attributes:{"type":"qx.ui.form.List","name":"combo-box-list"}},
    {type:"appearance",attributes:{"type":"qx.ui.form.ComboBox","name":"combo-box"}},
    {type:"appearance",attributes:{"type":"qx.ui.popup.Popup","name":"combo-box-popup"}},
    {type:"appearance",attributes:{"type":"qx.ui.form.TextField","name":"combo-box-text-field"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"beforeInitialOpen"},children:[
      {type:"desc",attributes:{"text":"<p>This event is dispatched right before the popup of the combo box\nis opened the first time (the popup object is not rendered at that time).</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeEditable"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #editable}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeSelected"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #selected}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeValue"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBox#editable","name":"_applyEditable"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBox#selected","name":"_applySelected"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBox#value","name":"_applyValue"},children:[
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
    {type:"method",attributes:{"access":"protected","name":"_closePopup"},children:[
      {type:"desc",attributes:{"text":"<p>Hides the popup and disables the event capturing.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onbeforedisappear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Disappear event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;disappear&#8221; event of the combo box. Only tests\nif the popup widget is closed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onclick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>MouseDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method of the &#8220;click&#8221; event of the combo box.</p>\n\n<p>Opens the popup or delegates the event to the list widget if the user\nclicked on the list. Hides the popup and release the event capturing if\nthe user is clicking outside the combo box.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninput"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Input event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;input&#8221; event of the text field widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>KeyDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;keyDown&#8221; event of the combo box.</p>\n\n<p>Handles hitting &#8220;Enter&#8221;, &#8220;Escape&#8221; and &#8220;Alt+Down&#8221;.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeyinput"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>KeyInput event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;keyInput&#8221; event of combo box.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>KeyPress event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;keyPress&#8221; event of the combo box.</p>\n\n<p>Handles especially hitting &#8220;PageUp&#8221; and &#8220;PageDown&#8221;. If the user\nhits other keys a match is searched and (if found) selected.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onlocalechange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>ChangeLocale event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;changeLocale&#8221; event of the locale manager</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>MouseDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method of the &#8220;mousedown&#8221; event of the combo box.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseover"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>MouseOver event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;mouseOver&#8221; event of the combo box.</p>\n\n<p>Delegates the control the selection manager if target is a listitem widget.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>MouseUp event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the mouseUp event of the combo box.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousewheel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>MouseWheel event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;mouseWheel&#8221; event of the combo box.</p>\n\n<p>Only works if the popup is not seeable.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onpopupappear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Appear event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for the &#8220;appear&#8221; event of the popup widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_openPopup"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the position and width of the popup. Additionally dispatches an event\nif the popup is opened the first time.\nEnables the event capturing.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_testClosePopup"},children:[
      {type:"desc",attributes:{"text":"<p>Closes the popup widget if it is seeable. Used e.g. as listener\nmethod for the &#8220;windowblur&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_togglePopup"},children:[
      {type:"desc",attributes:{"text":"<p>Toggle opening/closing of the popup widget.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeBlur"},children:[
      {type:"desc",attributes:{"text":"<p>Invokes the blur method directly at the <span class=\"caps\">DOM</span> elements and removes the &#8220;focused&#8221; state.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Invokes the focus method directly at the <span class=\"caps\">DOM</span> elements and adds the &#8220;focused&#8221; state.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getButton"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the button widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Reference to the button widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Atom"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>editable</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getField"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the text field widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Reference to the text field widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.TextField"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getList"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the list widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Reference to the list widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.form.List"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getManager"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the selection manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Reference to the selection manager</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.selection.SelectionManager"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPagingInterval","fromProperty":"pagingInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>pagingInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pagingInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>pagingInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPopup"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the popup widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Reference to the popup widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.popup.Popup"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelected","fromProperty":"selected"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selected</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEditable","fromProperty":"editable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>editable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>editable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPagingInterval","fromProperty":"pagingInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>pagingInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>pagingInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #pagingInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelected","fromProperty":"selected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selected</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selected</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>editable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>editable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPagingInterval","fromProperty":"pagingInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>pagingInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #pagingInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSelected","fromProperty":"selected"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selected</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEditable","fromProperty":"editable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>editable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPagingInterval","fromProperty":"pagingInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>pagingInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>pagingInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pagingInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelected","fromProperty":"selected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selected</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"combo-box\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"editable","defaultValue":"false","event":"changeEditable","propertyType":"new","apply":"_applyEditable","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Is the text field component editable or the user can only select\nfrom the list?</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"minWidth","docFrom":"qx.ui.core.Widget","defaultValue":"40","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"defaultValue":"10","propertyType":"new","name":"pagingInterval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>How many items to transverse with PageUp and PageDn.</p>"}}
      ]},
    {type:"property",attributes:{"name":"selected","check":"qx.ui.form.ListItem","allowNull":"true","propertyType":"new","apply":"_applySelected","event":"changeSelected"},children:[
      {type:"desc",attributes:{"text":"<p>This property holds the selected list item object.</p>"}}
      ]},
    {type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"value","check":"String","allowNull":"true","propertyType":"new","apply":"_applyValue","event":"changeValue"},children:[
      {type:"desc",attributes:{"text":"<p>The current value of the combo box</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"120","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]}
  ]}