{type:"class",attributes:{"name":"ComboBoxEx","hasWarning":"true","packageName":"qx.ui.form","superClass":"qx.ui.layout.HorizontalBoxLayout","fullName":"qx.ui.form.ComboBoxEx","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An enhanced combo-box for qooxdoo.</p>\n\n<p>Features: \n<ul>\n<li>Editable text field</li>\n<li>Complete key-navigation</li>\n<li>Mouse wheel navigation</li>\n<li>Multicolumn display in list</li>\n<li>By default, if more than one column, headers are automatically shown</li>\n<li>Can show the ID and/or description of each list item</li>\n<li>Automatically calculating needed width</li>\n<li>Popup list always shows full contents, and can be wider than text field</li>\n<li>Search values through popup dialog</li>\n<li>Internationalization support of messages</li>\n<li>List resizeable by the end user both in width and height, by using the mouse</li>\n<li>Lazy creation of the popup, sometimes in a form with a lot of combos,\n    only a subset of them are used by the end user.</li>\n<li>Quite configurable</li>\n</ul></p>\n\n<p>Pending features: \n<ul>\n<li>Images inside the list</li>\n<li>Autocomplete on key input</li>\n</ul></p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.table.Table","name":"combo-box-ex-list"}},
    {type:"appearance",attributes:{"type":"qx.ui.form.TextField","name":"combo-box-ex-text-field"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Atom","name":"combo-box-ex-button"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"pressed"}}
        ]}
      ]},
    {type:"appearance",attributes:{"type":"qx.ui.popup.Popup","name":"combo-box-ex-popup"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"hasError":"true","name":"beforeInitialOpen"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"135"}}
        ]},
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
    {type:"event",attributes:{"name":"changeValue"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#editable","name":"_applyEditable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Post-processing after property editable changes.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyIdColumnVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propVal"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>value</code>.","column":"29","line":"613"}},
        {type:"error",attributes:{"msg":"Parameter <code>propVal</code> is not documented.","column":"29","line":"613"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"613"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#idDescriptionSeparator","name":"_applyIdDescriptionSeparator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propVal"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#showColumnHeaders","name":"_applyShowColumnHeaders"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propVal"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Post-processing after property showColumnHeaders changes.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#showOnTextField","name":"_applyShowOnTextField"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propVal"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>showOnTextField</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyShowOnTextField}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#value","name":"_applyValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_calculateDimensions"},children:[
      {type:"desc",attributes:{"text":"<p>Calculates the needed dimensions for the text field and list components.\n<span class=\"caps\">PRECONDITION</span>: the _list must be created.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_checkIdDescriptionSeparator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propVal"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>value</code>.","column":"36","line":"582"}},
        {type:"error",attributes:{"msg":"Parameter <code>propVal</code> is not documented.","column":"36","line":"582"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"582"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_closePopup"},children:[
      {type:"desc",attributes:{"text":"<p>Hide the popup list.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_createList"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the list component.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>columns</code>.","column":"19","line":"357"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createPopup"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the popup if necessary with its list.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getPopupHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rows"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"915"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getTextWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"text"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calculates the width of the given text.\n The default font is used.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>text</code> is not documented.","column":"21","line":"931"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#maxVisibleRows","name":"_invalidateDimensions"},children:[
      {type:"desc",attributes:{"text":"<p>Invalidate the calculated of dimensions</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onChangeSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>event or row index (when called from {@link #setSelectedIndex()}).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler from changing the selected index.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onContextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"ev"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"949"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_oninput"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"16","line":"1306"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"1306"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeydown"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"1415"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"1415"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"1502"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"1502"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmousedown"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"1330"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"1330"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseup"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"1364"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"1364"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmousewheel"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"1391"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"1391"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onpopupappear"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"1289"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"1289"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_openPopup"},children:[
      {type:"desc",attributes:{"text":"<p>Opens the popup (and creates it if necessary).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBoxEx#idColumnVisible","name":"_recreateList"},children:[
      {type:"desc",attributes:{"text":"<p>Forces the list to be recreated next time.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_search"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"startIndex"},children:[
          {type:"desc",attributes:{"text":"<p>Start index, 0 based</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"txt"},children:[
          {type:"desc",attributes:{"text":"<p>Text to find</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"caseSens"},children:[
          {type:"desc",attributes:{"text":"<p>Case sensivity flag.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Searches the given text.  Called from the search dialog.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_togglePopup"},children:[
      {type:"desc",attributes:{"text":"<p>Toggle the visibility of the popup list.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeBlur","hasWarning":"true"}},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeFocus","hasWarning":"true"}},
    {type:"method",attributes:{"name":"getAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowSearch</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowSearch</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getButton"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"332"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnHeaders","fromProperty":"columnHeaders"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>columnHeaders</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>columnHeaders</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
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
    {type:"method",attributes:{"name":"getEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>ensureSomethingSelected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>ensureSomethingSelected</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getField"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a reference to the field.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>label or textbox, depending if the combo is editable or not.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>idColumnVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>idColumnVisible</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIdDescriptionSeparator","fromProperty":"idDescriptionSeparator"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>idDescriptionSeparator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idDescriptionSeparator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>idDescriptionSeparator</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getList"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a reference to the popup list.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>undefined if hasn&#8217;t been created yet.  The list is lazy created when displayed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.Table"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaxVisibleRows","fromProperty":"maxVisibleRows"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxVisibleRows</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxVisibleRows}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxVisibleRows</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
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
      {type:"desc",attributes:{"text":"<p>Returns a reference to the popup component.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>undefined if the popup component isn&#8217;t created.  The popup is lazy created when displayed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectedIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Getter for {@link #setSelectedIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>-1 if nothing selected or >=0.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectedRow"},children:[
      {type:"desc",attributes:{"text":"<p>Gets the current selected row of the selection.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>null if nothing selected or an array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Getter for {@link #setSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the list of selectable items.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowColumnHeaders","fromProperty":"showColumnHeaders"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showColumnHeaders</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showColumnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showColumnHeaders</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowOnTextField","fromProperty":"showOnTextField"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showOnTextField</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showOnTextField}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showOnTextField</code>.</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowSearch</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowSearch</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColumnHeaders","fromProperty":"columnHeaders"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>columnHeaders</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>columnHeaders</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #columnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>ensureSomethingSelected</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>ensureSomethingSelected</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>idColumnVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>idColumnVisible</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIdDescriptionSeparator","fromProperty":"idDescriptionSeparator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>idDescriptionSeparator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>idDescriptionSeparator</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #idDescriptionSeparator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaxVisibleRows","fromProperty":"maxVisibleRows"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maxVisibleRows</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxVisibleRows</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxVisibleRows}.</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initShowColumnHeaders","fromProperty":"showColumnHeaders"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showColumnHeaders</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showColumnHeaders</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showColumnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowOnTextField","fromProperty":"showOnTextField"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showOnTextField</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showOnTextField</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showOnTextField}.</p>"}},
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
    {type:"method",attributes:{"name":"isAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowSearch</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
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
    {type:"method",attributes:{"name":"isEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>ensureSomethingSelected</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>idColumnVisible</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSearchInProgress"},children:[
      {type:"desc",attributes:{"text":"<p>Does this combo have the searched dialog open?</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"openSearchDialog"},children:[
      {type:"desc",attributes:{"text":"<p>Opens a popup search dialog, useful when the combo has a lot of items.\n This dialog is triggered by double clicking the combo, pressing F3 or Ctrl+F.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowSearch</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColumnHeaders","fromProperty":"columnHeaders"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>columnHeaders</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #columnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
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
    {type:"method",attributes:{"name":"resetEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>ensureSomethingSelected</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>idColumnVisible</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIdDescriptionSeparator","fromProperty":"idDescriptionSeparator"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>idDescriptionSeparator</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #idDescriptionSeparator}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaxVisibleRows","fromProperty":"maxVisibleRows"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxVisibleRows</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxVisibleRows}.</p>"}},
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
    {type:"method",attributes:{"name":"resetShowColumnHeaders","fromProperty":"showColumnHeaders"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showColumnHeaders</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showColumnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowOnTextField","fromProperty":"showOnTextField"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showOnTextField</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showOnTextField}.</p>"}},
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
    {type:"method",attributes:{"name":"setAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowSearch</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowSearch</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnHeaders","fromProperty":"columnHeaders"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>columnHeaders</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>columnHeaders</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #columnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
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
    {type:"method",attributes:{"name":"setEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>ensureSomethingSelected</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>ensureSomethingSelected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>idColumnVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>idColumnVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIdDescriptionSeparator","fromProperty":"idDescriptionSeparator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>idDescriptionSeparator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>idDescriptionSeparator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idDescriptionSeparator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaxVisibleRows","fromProperty":"maxVisibleRows"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maxVisibleRows</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxVisibleRows</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxVisibleRows}.</p>"}},
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
    {type:"method",attributes:{"name":"setSelectedIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>-1 means no selected index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the index of the currently selected item in the list.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"data"},children:[
          {type:"desc",attributes:{"text":"<p>Array of values.  Its value is an array, with the following info:<ul>.\n   <li>Column 0 represents the ID, i.e. the value that is stored internally and used by the app.</li>\n   <li>Column 1 represents the description, the text that the end user normally sees.</li>\n   <li>Columns > 1 will also be shown in the popup list, it you have set the appropiate column headers with the property {@link #columnHeaders}.</li>\n   </ul></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var","dimensions":"2"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"newValue"},children:[
          {type:"desc",attributes:{"text":"<p>optional, the new value to set.\n                    If not specified or null, it will try to preserve the previous value.\n                    Only used for non-editable combos</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the list of selectable items.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowColumnHeaders","fromProperty":"showColumnHeaders"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showColumnHeaders</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showColumnHeaders</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showColumnHeaders}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowOnTextField","fromProperty":"showOnTextField"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showOnTextField</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showOnTextField</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showOnTextField}.</p>"}},
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
    {type:"method",attributes:{"name":"sizeTextFieldToContent"},children:[
      {type:"desc",attributes:{"text":"<p>Sizes the width of the text field component to the needed value to show any selection item.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowSearch","fromProperty":"allowSearch"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowSearch</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowSearch}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
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
      ]},
    {type:"method",attributes:{"name":"toggleEnsureSomethingSelected","fromProperty":"ensureSomethingSelected"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>ensureSomethingSelected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ensureSomethingSelected}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleIdColumnVisible","fromProperty":"idColumnVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>idColumnVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #idColumnVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"allowSearch","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Allow the search dialog when double clicking the combo, or pressing special keys?.</p>"}}
      ]},
    {type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"combo-box-ex\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_recreateList","defaultValue":"[Unsupported item type: array]","propertyType":"new","name":"columnHeaders","check":"Array"},children:[
      {type:"desc",attributes:{"text":"<p>The header of each column in the list.</p>"}}
      ]},
    {type:"property",attributes:{"check":"Boolean","apply":"_applyEditable","propertyType":"new","name":"editable","event":"changeEditable"},children:[
      {type:"desc",attributes:{"text":"<p>Is the text field component editable or the user can only select\nfrom the list?</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"ensureSomethingSelected","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Ensures that always an item is selected (in case the selection isn&#8217;t empty). Only used when editable is false.</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_recreateList","defaultValue":"false","propertyType":"new","name":"idColumnVisible","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Show the ID column (column 0) of the selection data?</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyIdDescriptionSeparator","defaultValue":"\"- \"","propertyType":"new","name":"idDescriptionSeparator","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>Only used when editable is false and showOnTextField==&#8216;idAndDescription&#8217;.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_invalidateDimensions","defaultValue":"10","propertyType":"new","name":"maxVisibleRows","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Maximum number of visible rows in the popup list.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"10","propertyType":"new","name":"pagingInterval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>How many items to transverse with PageUp and PageDn.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyShowColumnHeaders","defaultValue":"\"auto\"","propertyType":"new","name":"showColumnHeaders","possibleValues":"\"always\",\"never\",\"auto\""},children:[
      {type:"desc",attributes:{"text":"<p>Show column headers in the popup list?.  Default value is &#8220;Auto&#8221; and means to show headers if there is more than one visible column.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyShowOnTextField","defaultValue":"\"description\"","propertyType":"new","name":"showOnTextField","possibleValues":"\"description\",\"idAndDescription\",\"id\""},children:[
      {type:"desc",attributes:{"text":"<p>Only used when editable is false.  It determines what to show in the text field of the combo box.</p>"}}
      ]},
    {type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"value","check":"String","allowNull":"true","propertyType":"new","apply":"_applyValue","event":"changeValue"},children:[
      {type:"desc",attributes:{"text":"<p>0 based. -1 means no selected index.  It retrieves always the value column of the selection, not the description.</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]}
  ]}