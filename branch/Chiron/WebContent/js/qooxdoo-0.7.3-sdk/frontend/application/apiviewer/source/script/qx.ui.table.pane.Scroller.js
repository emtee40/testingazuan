{type:"class",attributes:{"name":"Scroller","hasWarning":"true","packageName":"qx.ui.table.pane","superClass":"qx.ui.layout.VerticalBoxLayout","fullName":"qx.ui.table.pane.Scroller","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Shows a whole meta column. This includes a {@link TablePaneHeader},\na {@link TablePane} and the needed scroll bars. This class handles the\nvirtual scrolling and does all the mouse event handling.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.layout.HorizontalBoxLayout","name":"table-focus-indicator"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"table"},children:[
          {type:"desc",attributes:{"text":"<p>the table the scroller belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.Table"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"RESIZE_REGION_RADIUS","value":"5"},children:[
      {type:"desc",attributes:{"text":"<p>The radius of the resize region in pixels.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"MIN_COLUMN_WIDTH","value":"10"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum width a colum could get in pixels.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"name":"CURSOR_RESIZE_HORIZONTAL"},children:[
      {type:"desc",attributes:{"text":"<p>(string) The correct value for the <span class=\"caps\">CSS</span> style attribute &#8220;cursor&#8221; for the\nhorizontal resize cursor.</p>"}}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"CLICK_TOLERANCE","value":"5"},children:[
      {type:"desc",attributes:{"text":"<p>(int) The number of pixels the mouse may move between mouse down and mouse up\nin order to count as a click.</p>"}}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"HORIZONTAL_SCROLLBAR","value":"1"},children:[
      {type:"desc",attributes:{"text":"<p>(int) The mask for the horizontal scroll bar.\nMay be combined with {@link #VERTICAL_SCROLLBAR}.</p>"}}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"VERTICAL_SCROLLBAR","value":"2"},children:[
      {type:"desc",attributes:{"text":"<p>(int) The mask for the vertical scroll bar.\nMay be combined with {@link #HORIZONTAL_SCROLLBAR}.</p>"}}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"cellClick"},children:[
      {type:"desc",attributes:{"text":"<p>See {@link qx.ui.table.Table#cellClick}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"cellContextmenu"},children:[
      {type:"desc",attributes:{"text":"<p>See {@link qx.ui.table.Table#cellContextmenu}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"cellDblclick"},children:[
      {type:"desc",attributes:{"text":"<p>See {@link qx.ui.table.Table#cellDblclick}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.ui.table.pane.CellEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeHorizontalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #horizontalScrollBarVisible}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeScrollX"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched if the pane is scrolled vertically</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeScrollY"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched if the pane is scolled horizontally</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTablePaneModel"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #tablePaneModel}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeVerticalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #verticalScrollBarVisible}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__handleMoveColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the current mouse x position.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Common column move logic.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__handleResizeColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the current mouse x position.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Common column resize logic.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Parent","name":"_afterAppear"}},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Scroller#horizontalScrollBarVisible","name":"_applyHorizontalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>horizontalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyHorizontalScrollBarVisible}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Scroller#scrollTimeout","name":"_applyScrollTimeout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>scrollTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyScrollTimeout}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Scroller#showCellFocusIndicator","name":"_applyShowCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyShowCellFocusIndicator}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Scroller#tablePaneModel","name":"_applyTablePaneModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.pane.Model"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.pane.Model"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>tablePaneModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTablePaneModel}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Scroller#verticalScrollBarVisible","name":"_applyVerticalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>verticalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyVerticalScrollBarVisible}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"_changeInnerHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNew"}},
        {type:"param",attributes:{"name":"vOld"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_focusCellAtPagePos"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the x position in the page (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"pageY"},children:[
          {type:"desc",attributes:{"text":"<p>the y position in the page (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the focus to the cell that&#8217;s located at the page position\n<code>pageX</code>/<code>pageY</code>. If there is no cell at that position,\nnothing happens.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getColumnForPageX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the x position of the mouse in the page (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the model index of the column the mouse is over or null if the mouse\nis not over a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the column the mouse is over.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getResizeColumnForPageX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the x position of the mouse in the page (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the model index of the column that should be resized when dragging\nstarts here. Returns -1 if the mouse is in no resize region of any column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the column index.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_getRowForPagePos"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse x position in the page.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"pageY"},children:[
          {type:"desc",attributes:{"text":"<p>the mouse y position in the page.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the model index of the row the mouse is currently over. Returns -1 if\nthe mouse is over the header. Returns null if the mouse is not over any\ncolumn.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the row the mouse is currently over.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_hideResizeLine"},children:[
      {type:"desc",attributes:{"text":"<p>Hides the resize line.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onCellEditorModalWindowClose"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the modal window of the cell editor closes.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onChangeCaptureHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the event capturing of the header changed.\nStops/finishes an active header resize/move session if it lost capturing\nduring the session to stay in a stable state.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"30","line":"1066"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onclickHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user clicked a mouse button over the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onclickPane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user clicked a mouse button over the pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColOrderChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the column order has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColVisibilityChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the visibility of a column has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColWidthChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the width of a column has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onContextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a context menu is invoked in a cell.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ondblclickPane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user double clicked a mouse button over the pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onFocusChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table gets or looses the focus.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninterval"},children:[
      {type:"desc",attributes:{"text":"<p>Timer event handler. Periodically checks whether a tabe update is\nrequired. The update interval is controled by the {@link #scrollTimeout}\nproperty.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onKeepFirstVisibleRowCompleteChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table property &#8220;keepFirstVisibleRowComplete&#8221;\nchanged.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedownHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user pressed a mouse button over the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedownPane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user pressed a mouse button over the pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousemoveHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user moved the mouse over the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousemovePane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user moved the mouse over the pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the mouse moved out.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onMouseupFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"1020"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseupHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user released a mouse button over the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseupPane"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user released a mouse button over the pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousewheel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the user moved the mouse wheel.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onPaneModelChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the pane model has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onScrollX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the horizontal scroll bar moved.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onScrollY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the vertical scroll bar moved.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onSelectionChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the selection has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onTableModelDataChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table model has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onTableModelMetaDataChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table model meta data has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_postponedUpdateContent"},children:[
      {type:"desc",attributes:{"text":"<p>Does a postponed update of the content.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#_updateContent"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_showResizeLine"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the position where to show the line (in pixels, relative to\n     the left side of the pane).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Shows the resize line.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_startMoveHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"moveCol"},children:[
          {type:"desc",attributes:{"text":"<p>the column index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>x coordinate of the mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Start a move session of the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_startResizeHeader"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"resizeCol"},children:[
          {type:"desc",attributes:{"text":"<p>the column index</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>x coordinate of the mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Start a resize session of the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_stopMoveHeader"},children:[
      {type:"desc",attributes:{"text":"<p>Stop a move session of the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_stopResizeHeader"},children:[
      {type:"desc",attributes:{"text":"<p>Stop a resize session of the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateContent"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the content. Sets the right section the table pane should show and\ndoes the scrolling.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the location and the visibility of the focus indicator.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateHorScrollBarMaximum"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the maximum of the horizontal scroll bar, so it corresponds to the\ntotal width of the columns in the table pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateVerScrollBarMaximum"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the maximum of the vertical scroll bar, so it corresponds to the\nnumber of rows in the table.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"cancelEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Stops editing without writing the editor&#8217;s value to the model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"flushEditor"},children:[
      {type:"desc",attributes:{"text":"<p>Writes the editor&#8217;s value to the model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focusCellOnMouseMove</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusedColumn"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the column of currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusedRow"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the row of currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeader"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the header.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the header.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Header"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>horizontalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>horizontalScrollBarVisible</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>liveResize</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNeededScrollBars"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"false","name":"forceHorizontal"},children:[
          {type:"desc",attributes:{"text":"<p>Whether to show the horizontal\n     scrollbar always.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"preventVertical"},children:[
          {type:"desc",attributes:{"text":"<p>Whether tp show the vertical scrollbar\n     never.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns which scrollbars are needed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>which scrollbars are needed. This may be any combination of\n     {@link #HORIZONTAL_SCROLLBAR} or {@link #VERTICAL_SCROLLBAR}\n     (combined by OR).</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getScrollTimeout","fromProperty":"scrollTimeout"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>scrollTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>scrollTimeout</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getScrollX"},children:[
      {type:"desc",attributes:{"text":"<p>Get the current position of the vertical scroll bar.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The current scroll position.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getScrollY"},children:[
      {type:"desc",attributes:{"text":"<p>Get the current position of the vertical scroll bar.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The current scroll position.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectBeforeFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectBeforeFocus</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>showCellFocusIndicator</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the table this scroller belongs to.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the table.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.Table"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTablePane"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the table pane.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the table pane.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Pane"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTablePaneModel","fromProperty":"tablePaneModel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>tablePaneModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>tablePaneModel</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>verticalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>verticalScrollBarVisible</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hideColumnMoveFeedback"},children:[
      {type:"desc",attributes:{"text":"<p>Hides the feedback shown while a column is moved by the user.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focusCellOnMouseMove</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focusCellOnMouseMove</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>horizontalScrollBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>horizontalScrollBarVisible</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLiveResize","fromProperty":"liveResize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>liveResize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>liveResize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initScrollTimeout","fromProperty":"scrollTimeout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>scrollTimeout</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>scrollTimeout</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selectBeforeFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectBeforeFocus</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>showCellFocusIndicator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showCellFocusIndicator</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTablePaneModel","fromProperty":"tablePaneModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>tablePaneModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>tablePaneModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #tablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>verticalScrollBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>verticalScrollBarVisible</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether currently a cell is editing.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether currently a cell is editing.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>focusCellOnMouseMove</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>horizontalScrollBarVisible</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>liveResize</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>selectBeforeFocus</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showCellFocusIndicator</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>verticalScrollBarVisible</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>horizontalScrollBarVisible</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>liveResize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetScrollTimeout","fromProperty":"scrollTimeout"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>scrollTimeout</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollTimeout}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectBeforeFocus</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTablePaneModel","fromProperty":"tablePaneModel"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>tablePaneModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #tablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>verticalScrollBarVisible</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"scrollCellVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column the cell belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"row"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the row the cell belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Scrolls a cell visible.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focusCellOnMouseMove</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusedCell"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"row"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the currently focused cell.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>horizontalScrollBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>horizontalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLiveResize","fromProperty":"liveResize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>liveResize</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setScrollTimeout","fromProperty":"scrollTimeout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>scrollTimeout</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>scrollTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setScrollX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"scrollX"},children:[
          {type:"desc",attributes:{"text":"<p>The new scroll position.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set the current position of the vertical scroll bar.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setScrollY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"scrollY"},children:[
          {type:"desc",attributes:{"text":"<p>The new scroll position.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"renderSync"},children:[
          {type:"desc",attributes:{"text":"<p>Whether the table update should be\n    performed synchonously.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set the current position of the vertical scroll bar.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selectBeforeFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectBeforeFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>showCellFocusIndicator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTablePaneModel","fromProperty":"tablePaneModel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>tablePaneModel</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>tablePaneModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tablePaneModel}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTopRightWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget to set. May be null.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the widget that should be shown in the top right corner.</p>\n\n<p>The widget will not be disposed, when this table scroller is disposed. So the\ncaller has to dispose it.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>verticalScrollBarVisible</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>verticalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"showColumnMoveFeedback"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pageX"},children:[
          {type:"desc",attributes:{"text":"<p>the x position of the mouse in the page (in pixels).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Shows the feedback shown while a column is moved by the user.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the visible x position of the column in the whole table.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"startEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Starts editing the currently focused cell. Does nothing if already\nediting, if the column is not editable, or if the cell editor for the\ncolumn ascertains that the particular cell is not editable.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether editing was started</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"stopEditing"},children:[
      {type:"desc",attributes:{"text":"<p>Stops editing and writes the editor&#8217;s value to the model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleFocusCellOnMouseMove","fromProperty":"focusCellOnMouseMove"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>focusCellOnMouseMove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusCellOnMouseMove}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleHorizontalScrollBarVisible","fromProperty":"horizontalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>horizontalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleLiveResize","fromProperty":"liveResize"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>liveResize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveResize}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleSelectBeforeFocus","fromProperty":"selectBeforeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>selectBeforeFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectBeforeFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleShowCellFocusIndicator","fromProperty":"showCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showCellFocusIndicator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCellFocusIndicator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleVerticalScrollBarVisible","fromProperty":"verticalScrollBarVisible"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>verticalScrollBarVisible</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalScrollBarVisible}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"focusCellOnMouseMove","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the focus should moved when the mouse is moved over a cell. If false\nthe focus is only moved on mouse clicks.</p>"}}
      ]},
    {type:"property",attributes:{"name":"horizontalScrollBarVisible","defaultValue":"true","event":"changeHorizontalScrollBarVisible","propertyType":"new","apply":"_applyHorizontalScrollBarVisible","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to show the horizontal scroll bar</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"liveResize","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether column resize should be live. If false, during resize only a line is\nshown and the real resize happens when the user releases the mouse button.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyScrollTimeout","defaultValue":"100","propertyType":"new","name":"scrollTimeout","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Interval time (in milliseconds) for the table update timer.\nSetting this to 0 clears the timer.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"selectBeforeFocus","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to handle selections via the selection manager before setting the\nfocus.  The traditional behavior is to handle selections after setting the\nfocus, but setting the focus means redrawing portions of the table, and\nsome subclasses may want to modify the data to be displayed based on the\nselection.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyShowCellFocusIndicator","defaultValue":"true","propertyType":"new","name":"showCellFocusIndicator","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the cell focus indicator should be shown</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.ui.table.pane.Model","apply":"_applyTablePaneModel","propertyType":"new","name":"tablePaneModel","event":"changeTablePaneModel"},children:[
      {type:"desc",attributes:{"text":"<p>The table pane model.</p>"}}
      ]},
    {type:"property",attributes:{"name":"verticalScrollBarVisible","defaultValue":"true","event":"changeVerticalScrollBarVisible","propertyType":"new","apply":"_applyVerticalScrollBarVisible","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether to show the vertical scroll bar</p>"}}
      ]}
    ]}
  ]}