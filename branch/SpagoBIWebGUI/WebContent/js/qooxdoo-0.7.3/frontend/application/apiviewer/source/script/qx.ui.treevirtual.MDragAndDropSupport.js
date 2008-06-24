{type:"class",attributes:{"name":"MDragAndDropSupport","hasWarning":"true","packageName":"qx.ui.treevirtual","fullName":"qx.ui.treevirtual.MDragAndDropSupport","type":"mixin"},children:[
  {type:"desc",attributes:{"text":"<p>Adds Drag &amp; Drop support to the TreeVirtual.</p>\n\n<p>Because the mixin needs to overwrite the default supportsDrop method, this\nmixin must be applied with &#8220;patch&#8221; instead of &#8220;include&#8221;:</p>\n\n<p>qx.Class.patch(qx.ui.treevirtual.TreeVirtual,qx.ui.treevirtual.MDragAndDropSupport);</p>\n\n<p>You also need the MNode Mixin:</p>\n\n<p>qx.Class.include(qx.ui.treevirtual.TreeVirtual, qx.ui.treevirtual.MNode);</p>\n\n<p>If you want to define your own supportsDrop method, you need to define a supportsDropCallback\nfunction in your TreeVirtual instance.</p>\n\n<p>The mixin makes it very easy to create a complex drag &amp; drop behaviour. See the tutorial here:</p>\n\n<p><a href=\"http://qooxdoo.org/documentation/0.7/snippets/treevirtual_draganddrop_mixin\">http://qooxdoo.org/documentation/0.7/snippets/treevirtual_draganddrop_mixin</a></p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"hasError":"true","name":"draghover"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"50"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.treevirtual.MDragAndDropSupport#enableDragDrop","isMixin":"true","name":"_applyEnableDragDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>enables or disables drag and drop, adds event listeners and does some other initialization stuff\nif you want to keep this function from adding default event handling functions, add event\nlisteners before you setEnableDragDrop(true).</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","isMixin":"true","name":"_handleDragDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Handles the event fired when the mouse button is released over a legitmate drop target\nTo replace this handler, define and add your custom event listener before you setEnableDragDrop(true).</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","isMixin":"true","name":"_handleDragEnd"},children:[
      {type:"desc",attributes:{"text":"<p>Handles the event fired when a drag session ends (with or without drop).\nTo replace this handler, define and add your custom event listener before you setEnableDragDrop(true).</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_handleDragHover"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"}}
        ]},
      {type:"desc",attributes:{"text":"<p>handles event fired when the mouse hovers over a node for a the number of milliseconds\nspecified in the dragHoverTimeout property</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>event</code> is not documented.","column":"24","line":"427"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isMixin":"true","name":"_handleDragOut"},children:[
      {type:"desc",attributes:{"text":"<p>Handles the event fired when the cursor leaves the widget during a drag session.\nTo replace this handler, define and add your custom event listener before you setEnableDragDrop(true).</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_handleDragOver"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles event fired when a drag occurs over the widget\nTo replace this handler, define and add your custom event listener before you setEnableDragDrop(true).</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>event</code> is not documented.","column":"23","line":"418"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isMixin":"true","name":"_handleDragStart"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>the drag event fired</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles event fired whe a drag session starts.\nTo replace this handler, define and add your custom event listener before you setEnableDragDrop(true).</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","isMixin":"true","name":"_supportsDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"dragCache"},children:[
          {type:"desc",attributes:{"text":"<p>An object describing the event, containing at least these members:\n    <ul>\n      <li>startScreenX</li>\n      <li>startScreenY</li>\n      <li>pageX</li>\n      <li>pageY</li>\n      <li>sourceWidget</li>\n      <li>sourceTopLevel</li>\n      <li>dragHandlerActive</li>\n      <li>hasFiredDragStart</li>\n    </ul></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The hook to be called when widget.supportsDrop() is called.  This is\nset in the constructor via this.setSupportsDropMethod(this._supportDrop)</p>\n\n<p>You can hook in your custom supportsDrop method by defining a\nsupportsDropCallback function in your TreeVirtual instance. Both must\nreturn true for a drop to be allowed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether drop is allowed</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"checkDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"dragCache"},children:[
          {type:"desc",attributes:{"text":"<p>a temporary and incomplete copy of the drag event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>the main method of this mixin, providing a check on whether drop is allowed, displaying a\ninsertion cursor for drop-between-nodes</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether drop is allowed</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowDragOut</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowDragOut</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowDragTypes","fromProperty":"allowDragTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowDragTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowDragTypes</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowDropBetweenNodes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowDropBetweenNodes</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowDropTypes","fromProperty":"allowDropTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowDropTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowDropTypes</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAutoScrollInterval","fromProperty":"autoScrollInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoScrollInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoScrollInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoScrollInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"getCellFocusIndicator"},children:[
      {type:"desc",attributes:{"text":"<p>get focus indicator widget</p>"}}
      ]},
    {type:"method",attributes:{"name":"getCellFocusIndicatorColor","fromProperty":"cellFocusIndicatorColor"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>cellFocusIndicatorColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>cellFocusIndicatorColor</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCellFocusIndicatorColorBetweenNodes","fromProperty":"cellFocusIndicatorColorBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>cellFocusIndicatorColorBetweenNodes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColorBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>cellFocusIndicatorColorBetweenNodes</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDragAction","fromProperty":"dragAction"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dragAction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dragAction</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDragDataMimeType","fromProperty":"dragDataMimeType"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dragDataMimeType</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragDataMimeType}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dragDataMimeType</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDragHoverEventName","fromProperty":"dragHoverEventName"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dragHoverEventName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverEventName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dragHoverEventName</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDragHoverTimeout","fromProperty":"dragHoverTimeout"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dragHoverTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dragHoverTimeout</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"getDropData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"event"},children:[
          {type:"desc",attributes:{"text":"<p>the drag event fired</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>gets information on the drag session after the drop has occurred</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>map with the following information:\n{\n &#8216;nodeData&#8217; : an array of selected nodes in the source widget, i.e. those nodes which were dragged,\n &#8216;sourceWidget&#8217; : the source widget,\n &#8216;targetNode&#8217; : the node on which the data was dropped,\n &#8216;position&#8217; : the relative position of the drop action: -1 = above, 0=on, 1= below the node\n}</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDropTarget","fromProperty":"dropTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dropTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dropTarget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDropTargetRelativePosition","fromProperty":"dropTargetRelativePosition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dropTargetRelativePosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTargetRelativePosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dropTargetRelativePosition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enableDragDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enableDragDrop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"getNodeType"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>gets the (drag) type of a node</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the user-supplied type of the node or null if not set</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>nodeReference</code> is not documented.","column":"19","line":"738"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>sortAfterDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>sortAfterDrop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSortChildNodesBy","fromProperty":"sortChildNodesBy"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>sortChildNodesBy</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortChildNodesBy}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>sortChildNodesBy</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"getTreePaneScroller"},children:[
      {type:"desc",attributes:{"text":"<p>get tree column pane scroller widget</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowDragOut</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowDragOut</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowDragTypes","fromProperty":"allowDragTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowDragTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowDragTypes</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowDropBetweenNodes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowDropBetweenNodes</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowDropTypes","fromProperty":"allowDropTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowDropTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowDropTypes</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAutoScrollInterval","fromProperty":"autoScrollInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>autoScrollInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoScrollInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoScrollInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCellFocusIndicatorColor","fromProperty":"cellFocusIndicatorColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>cellFocusIndicatorColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>cellFocusIndicatorColor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCellFocusIndicatorColorBetweenNodes","fromProperty":"cellFocusIndicatorColorBetweenNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>cellFocusIndicatorColorBetweenNodes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>cellFocusIndicatorColorBetweenNodes</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColorBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDragAction","fromProperty":"dragAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dragAction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dragAction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dragAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDragDataMimeType","fromProperty":"dragDataMimeType"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dragDataMimeType</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dragDataMimeType</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dragDataMimeType}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDragHoverEventName","fromProperty":"dragHoverEventName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dragHoverEventName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dragHoverEventName</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverEventName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDragHoverTimeout","fromProperty":"dragHoverTimeout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dragHoverTimeout</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dragHoverTimeout</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDropTarget","fromProperty":"dropTarget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dropTarget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dropTarget</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDropTargetRelativePosition","fromProperty":"dropTargetRelativePosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dropTargetRelativePosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dropTargetRelativePosition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTargetRelativePosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enableDragDrop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enableDragDrop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>sortAfterDrop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>sortAfterDrop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSortChildNodesBy","fromProperty":"sortChildNodesBy"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>sortChildNodesBy</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>sortChildNodesBy</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #sortChildNodesBy}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowDragOut</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowDropBetweenNodes</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enableDragDrop</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>sortAfterDrop</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"moveNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"first"},children:[
          {type:"desc",attributes:{"text":"<p>&#8220;this&#8221; if moving within the same tree</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"sourceNodes"}},
        {type:"param",attributes:{"name":"targetNode"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"position"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"action"},children:[
          {type:"desc",attributes:{"text":"<p>position source node will be inserted above target if -1,\n   below target if 1, and as a child if 0 or undefined</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>moves or copies a node to a different place. if you supply only one argument, it is treated as\nthe result of the getDropData() method. Otherwise use the parameter list below.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>sourceNode</code>.","column":"16","line":"786"}},
        {type:"error",attributes:{"msg":"Parameter <code>sourceNodes</code> is not documented.","column":"16","line":"786"}},
        {type:"error",attributes:{"msg":"Parameter <code>targetNode</code> is not documented.","column":"16","line":"786"}},
        {type:"error",attributes:{"msg":"Parameter <code>position</code> is not documented.","column":"16","line":"786"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowDragOut</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowDragTypes","fromProperty":"allowDragTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowDragTypes</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragTypes}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowDropBetweenNodes</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowDropTypes","fromProperty":"allowDropTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowDropTypes</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropTypes}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAutoScrollInterval","fromProperty":"autoScrollInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoScrollInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoScrollInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCellFocusIndicatorColor","fromProperty":"cellFocusIndicatorColor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>cellFocusIndicatorColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCellFocusIndicatorColorBetweenNodes","fromProperty":"cellFocusIndicatorColorBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>cellFocusIndicatorColorBetweenNodes</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColorBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDragAction","fromProperty":"dragAction"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dragAction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dragAction}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDragDataMimeType","fromProperty":"dragDataMimeType"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dragDataMimeType</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dragDataMimeType}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDragHoverEventName","fromProperty":"dragHoverEventName"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dragHoverEventName</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverEventName}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDragHoverTimeout","fromProperty":"dragHoverTimeout"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dragHoverTimeout</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverTimeout}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDropTarget","fromProperty":"dropTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dropTarget</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTarget}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDropTargetRelativePosition","fromProperty":"dropTargetRelativePosition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dropTargetRelativePosition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTargetRelativePosition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enableDragDrop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>sortAfterDrop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSortChildNodesBy","fromProperty":"sortChildNodesBy"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>sortChildNodesBy</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #sortChildNodesBy}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowDragOut</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowDragOut</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowDragTypes","fromProperty":"allowDragTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowDragTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowDragTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowDropBetweenNodes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowDropBetweenNodes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowDropTypes","fromProperty":"allowDropTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowDropTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowDropTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAutoScrollInterval","fromProperty":"autoScrollInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>autoScrollInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoScrollInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoScrollInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCellFocusIndicatorColor","fromProperty":"cellFocusIndicatorColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>cellFocusIndicatorColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>cellFocusIndicatorColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCellFocusIndicatorColorBetweenNodes","fromProperty":"cellFocusIndicatorColorBetweenNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>cellFocusIndicatorColorBetweenNodes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>cellFocusIndicatorColorBetweenNodes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cellFocusIndicatorColorBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDragAction","fromProperty":"dragAction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dragAction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dragAction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragAction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDragDataMimeType","fromProperty":"dragDataMimeType"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dragDataMimeType</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dragDataMimeType</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragDataMimeType}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDragHoverEventName","fromProperty":"dragHoverEventName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dragHoverEventName</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dragHoverEventName</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverEventName}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDragHoverTimeout","fromProperty":"dragHoverTimeout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dragHoverTimeout</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dragHoverTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragHoverTimeout}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDropTarget","fromProperty":"dropTarget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dropTarget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dropTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDropTargetRelativePosition","fromProperty":"dropTargetRelativePosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dropTargetRelativePosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dropTargetRelativePosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropTargetRelativePosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enableDragDrop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enableDragDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"setNodeType"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"type"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>sets the (drag) type of a node</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>nodeReference</code> is not documented.","column":"19","line":"762"}},
        {type:"error",attributes:{"msg":"Parameter <code>type</code> is not documented.","column":"19","line":"762"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"setShowRowFocusIndicator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"desc",attributes:{"text":"<p>shorthand method for setting a row focus indicator</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"32","line":"322"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>sortAfterDrop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>sortAfterDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSortChildNodesBy","fromProperty":"sortChildNodesBy"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>sortChildNodesBy</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>sortChildNodesBy</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortChildNodesBy}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"sortChildNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>node whose children should be sorted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"recurse"},children:[
          {type:"desc",attributes:{"text":"<p>sort recursively</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>sorts child nodes according to sortChildNodesBy property</p>"}}
      ]},
    {type:"method",attributes:{"name":"toggleAllowDragOut","fromProperty":"allowDragOut"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowDragOut</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDragOut}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowDropBetweenNodes","fromProperty":"allowDropBetweenNodes"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowDropBetweenNodes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowDropBetweenNodes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEnableDragDrop","fromProperty":"enableDragDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enableDragDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableDragDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleSortAfterDrop","fromProperty":"sortAfterDrop"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>sortAfterDrop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #sortAfterDrop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","isMixin":"true","name":"allowDragOut","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>whether it is possible to drag an item out of the tree to a different widget\nthis is currently only respected if the drop targets supportsDrop method\nchecks for it\ndefaults to true</p>"}}
      ]},
    {type:"property",attributes:{"name":"allowDragTypes","defaultValue":"null","allowNull":"true","propertyType":"new","isMixin":"true","check":"Array"},children:[
      {type:"desc",attributes:{"text":"<p>a list of node types allowed to be dragged</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","isMixin":"true","name":"allowDropBetweenNodes","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>whether it is possible to drop between nodes (i.e., for reordering them).\nthe focus indicator changed to a line to mark where the insertion should take place</p>"}}
      ]},
    {type:"property",attributes:{"name":"allowDropTypes","defaultValue":"null","allowNull":"true","propertyType":"new","isMixin":"true","check":"Array"},children:[
      {type:"desc",attributes:{"text":"<p>array of two-element arrays containing a combination of drag source and\ndrop target types. Type information is in the nodeTypeProperty of the\nuserData hash map. If null, allow any combination. &#8221;*&#8221; can be used to as a\nwildcard, i.e. [ [&#8216;Foo&#8217;,&#8217;*&#8217;] ...] will allow the &#8216;Foo&#8217; type node to be dropped on any\nother type, and [ [&#8217;*&#8217;,&#8216;Bar&#8217;] ...] will allow any type to be dropped on a &#8216;Bar&#8217; type node.\nThe array [&#8217;*&#8217;] will allow any combination, null will deny any drop.</p>"}}
      ]},
    {type:"property",attributes:{"name":"autoScrollInterval","defaultValue":"100","allowNull":"true","propertyType":"new","isMixin":"true","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>the number of milliseconds between scrolling up a row if drag cursor\nis on the first row or scrolling down if drag cursor is on last row\nduring a drag session. You can turn off this behaviour by setting this\nproperty to null.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: call]","propertyType":"new","isMixin":"true","name":"cellFocusIndicatorColor","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>the color of the cell focus indicator when hovering on a node\nthis should probably be handled with themes or appearance</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"black\"","propertyType":"new","isMixin":"true","name":"cellFocusIndicatorColorBetweenNodes","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>the color of the cell focus indicator when hovering on a node\nthis should probably be handled with themes or appearance</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"false","defaultValue":"\"move\"","isMixin":"true","name":"dragAction","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>drag action(s). If you supply an array, multiple drag actions will be added</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"treevirtualnode\"","propertyType":"new","isMixin":"true","name":"dragDataMimeType","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>set the mimetype of the nodes, defaults to &#8220;treevirtualnode&#8221;\nyou do not have to use or change this</p>"}}
      ]},
    {type:"property",attributes:{"name":"dragHoverEventName","defaultValue":"\"draghover\"","allowNull":"true","propertyType":"new","isMixin":"true","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>the name of the data event that is fired with a reference the hovered node\nafter the drag cursor has been hovering over it for the &#8220;dragHoverTimeout&#8221;\nnumber of milliseconds. Defaults to &#8220;draghover&#8221;</p>"}}
      ]},
    {type:"property",attributes:{"name":"dragHoverTimeout","defaultValue":"1000","allowNull":"true","propertyType":"new","isMixin":"true","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>the number of milliseconds that the drag cursor has to hover over a node\nbefore a the event specified by the &#8220;dragHoverEventName&#8221; property is fired.\nDefaults to 1000</p>"}}
      ]},
    {type:"property",attributes:{"name":"dropTarget","defaultValue":"null","allowNull":"true","propertyType":"new","isMixin":"true","check":"Object"},children:[
      {type:"desc",attributes:{"text":"<p>records the target node on which the drag objects has been dropped</p>"}}
      ]},
    {type:"property",attributes:{"possibleValues":"-1,0,1","defaultValue":"0","isMixin":"true","name":"dropTargetRelativePosition","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>provide a hint on where the node has been dropped\n(-1 = above the node, 0 = on the node, 1 = below the node)</p>"}}
      ]},
    {type:"property",attributes:{"name":"enableDragDrop","defaultValue":"false","propertyType":"new","apply":"_applyEnableDragDrop","isMixin":"true","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>enable/disable drag and drop\nThis needs to be the last property set since it configures\nthe drag and drop behavior based on the other properties</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","isMixin":"true","name":"sortAfterDrop","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>whether a nodes children should be automatically be sorted after a drop</p>"}}
      ]},
    {type:"property",attributes:{"name":"sortChildNodesBy","defaultValue":"null","allowNull":"true","propertyType":"new","isMixin":"true","check":"Object"},children:[
      {type:"desc",attributes:{"text":"<p>Map according to which sorting is done, for example:\n{ &#8220;type&#8221; : &#8220;asc&#8221;, &#8220;dragType&#8221; : [&#8216;Folder&#8217;,&#8216;Message&#8217;], &#8220;label&#8221; : &#8220;desc&#8221; }\nwill sort the nodes by type, data.MDragAndDropSupport.type and label</p>"}}
      ]}
    ]}
  ]}