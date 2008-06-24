{type:"class",attributes:{"name":"EventHandler","hasWarning":"true","packageName":"qx.event.handler","superClass":"qx.core.Target","isSingleton":"true","fullName":"qx.event.handler.EventHandler","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This manager registers and manage all incoming key and mouse events.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"error"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when an exception was thrown when dispatching the event to the listeners.\nThe event&#8217;s property &#8220;data&#8221; holds the exception.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getDomTarget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>extract the target node from a <span class=\"caps\">DOM</span> event\n<a href=\"http://www.quirksmode.org/js/events_properties.html\">http://www.quirksmode.org/js/events_properties.html</a></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the target node</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.event.handler.EventHandler"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getOriginalTargetObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNode"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> Element to get the the container qooxdoo widget of</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Search for the container qooxdoo widget of a <span class=\"caps\">DOM</span> node by searching the <span class=\"caps\">DOM</span> tree\nfrom the given <span class=\"caps\">DOM</span> node up to the root element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>qooxdoo widget containing the <span class=\"caps\">DOM</span> node.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getOriginalTargetObjectFromEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vWindow"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Window"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the target widget of a <span class=\"caps\">DOM</span> event.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>target qooxdoo widget of the event.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vWindow</code> is not documented.","column":"40","line":"210"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getRelatedOriginalTargetObjectFromEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"47","line":"236"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"47","line":"236"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getRelatedTargetObjectFromEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"39","line":"312"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"39","line":"312"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTargetObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNode"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> node to search the target widget for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"vObject"},children:[
          {type:"desc",attributes:{"text":"<p>optional qooxdoo widget to start the search from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"allowDisabled"},children:[
          {type:"desc",attributes:{"text":"<p>whether disabled widgets should be returned. If set\n  to true, <code>null</code> will be returned if a disabled widget is found.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Searches for the first non disabled and non anonymous qooxdoo\nwidget containing the <span class=\"caps\">DOM</span> node.</p>\n\n<p>If allowDisabled is set to <code>false</code>, the search is stopped\nif a disabled widget is found and the <code>null will be returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The target container widget.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTargetObjectFromEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event to get the target widget from.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the target widget the <span class=\"caps\">DOM</span> event will be dispatched on.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The widget the event should be dispatched on (<code>null</code>\n  if no widget is found).</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Widget"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"stopDomEvent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>stops further propagation of the event</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.event.handler.EventHandler#captureWidget","name":"_applyCaptureWidget"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.event.handler.EventHandler#focusRoot","name":"_applyFocusRoot"},children:[
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
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_checkKeyEventMatch"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"27","line":"476"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"476"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_ondragevent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vEvent"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vEvent</code> is not documented.","column":"20","line":"1148"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"1148"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeyevent_post"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vType"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vKeyCode"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vCharCode"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vKeyIdentifier"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"24","line":"638"}},
        {type:"error",attributes:{"msg":"Parameter <code>vType</code> is not documented.","column":"24","line":"638"}},
        {type:"error",attributes:{"msg":"Parameter <code>vKeyCode</code> is not documented.","column":"24","line":"638"}},
        {type:"error",attributes:{"msg":"Parameter <code>vCharCode</code> is not documented.","column":"24","line":"638"}},
        {type:"error",attributes:{"msg":"Parameter <code>vKeyIdentifier</code> is not documented.","column":"24","line":"638"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"638"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseevent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"}}
        ]},
      {type:"desc",attributes:{"text":"<p>This one handle all mouse events</p>\n\n<p>When a user double clicks on a qx.ui.core.Widget the\n order of the mouse events is the following:</p>\n\n<p>1. mousedown\n 2. mouseup\n 3. click\n 4. mousedown\n 5. mouseup\n 6. click\n 7. dblclick</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseevent_click_fix"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomTarget"}},
        {type:"param",attributes:{"name":"vType"}},
        {type:"param",attributes:{"name":"vDispatchTarget"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Fixes browser quirks with &#8216;click&#8217; detection</p>\n\n<p>Firefox 1.5.0.6: The <span class=\"caps\">DOM</span>-targets are different. The click event only fires, if the target of the\n  mousedown is the same than with the mouseup. If the content moved away, the click isn&#8217;t fired.</p>\n\n<p>Internet Explorer 6.0: The <span class=\"caps\">DOM</span>-targets are identical and the click fires fine.</p>\n\n<p>Opera 9.01: The <span class=\"caps\">DOM</span>-targets are different, but the click fires fine. Fires click successfull,\n  even if the content under the cursor was moved away.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vDomTarget</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Parameter <code>vType</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Parameter <code>vDispatchTarget</code> is not documented.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseevent_post"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vType"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vDomTarget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This is the crossbrowser post handler for all mouse events.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"26","line":"857"}},
        {type:"error",attributes:{"msg":"Parameter <code>vType</code> is not documented.","column":"26","line":"857"}},
        {type:"error",attributes:{"msg":"Parameter <code>vDomTarget</code> is not documented.","column":"26","line":"857"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseevent_special_post"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vType"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vTarget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOriginalTarget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vDispatchTarget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vEventWasProcessed"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vEventObject"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vDomEvent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vType</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vTarget</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOriginalTarget</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vDispatchTarget</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vEventWasProcessed</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vEventObject</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"34","line":"1018"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"1018"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onselectevent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"1173"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"1173"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onwindowblur"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"1219"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"1219"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onwindowfocus"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"1259"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"1259"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onwindowresize"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"23","line":"1281"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1281"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addCommand"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vCommand"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vCommand</code> is not documented.","column":"18","line":"452"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"452"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"attachEvents"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"512"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"attachEventTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vEventTypes"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vFunctionPointer"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vEventTypes</code> is not documented.","column":"24","line":"573"}},
        {type:"error",attributes:{"msg":"Parameter <code>vFunctionPointer</code> is not documented.","column":"24","line":"573"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"573"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"detachEvents"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"537"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"detachEventTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vEventTypes"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vFunctionPointer"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vEventTypes</code> is not documented.","column":"24","line":"603"}},
        {type:"error",attributes:{"msg":"Parameter <code>vFunctionPointer</code> is not documented.","column":"24","line":"603"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"603"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowClientContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowClientContextMenu</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowClientSelectAll</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowClientSelectAll</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCaptureWidget","fromProperty":"captureWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>captureWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #captureWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>captureWidget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocusRoot","fromProperty":"focusRoot"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focusRoot</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusRoot}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focusRoot</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowClientContextMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowClientContextMenu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowClientSelectAll</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowClientSelectAll</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCaptureWidget","fromProperty":"captureWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>captureWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>captureWidget</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #captureWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocusRoot","fromProperty":"focusRoot"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focusRoot</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focusRoot</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focusRoot}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowClientContextMenu</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowClientSelectAll</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeCommand"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vCommand"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vCommand</code> is not documented.","column":"21","line":"464"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"464"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowClientContextMenu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowClientSelectAll</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCaptureWidget","fromProperty":"captureWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>captureWidget</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #captureWidget}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocusRoot","fromProperty":"focusRoot"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focusRoot</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focusRoot}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowClientContextMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowClientContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowClientSelectAll</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowClientSelectAll</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCaptureWidget","fromProperty":"captureWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>captureWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>captureWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #captureWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocusRoot","fromProperty":"focusRoot"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focusRoot</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focusRoot</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focusRoot}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowClientContextMenu","fromProperty":"allowClientContextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowClientContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientContextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowClientSelectAll","fromProperty":"allowClientSelectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowClientSelectAll</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowClientSelectAll}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","hasError":"true","name":"allowClientContextMenu","check":"Boolean"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"339"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","hasError":"true","name":"allowClientSelectAll","check":"Boolean"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"339"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"captureWidget","allowNull":"true","propertyType":"new","apply":"_applyCaptureWidget","check":"qx.ui.core.Widget"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"339"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"focusRoot","allowNull":"true","propertyType":"new","apply":"_applyFocusRoot","check":"qx.ui.core.Parent"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"339"}}
        ]}
      ]}
    ]}
  ]}