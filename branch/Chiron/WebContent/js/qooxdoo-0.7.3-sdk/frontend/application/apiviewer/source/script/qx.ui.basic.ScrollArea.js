{type:"class",attributes:{"name":"ScrollArea","packageName":"qx.ui.basic","superClass":"qx.ui.layout.CanvasLayout","fullName":"qx.ui.basic.ScrollArea","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>The CanvasLayout, which fires scroll events. Widgets which need to react on scroll\nevents should extend thie class.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"scroll"},children:[
      {type:"desc",attributes:{"text":"<p>Fired each time the widget gets scrolled.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#element","overriddenFrom":"qx.ui.core.Widget","name":"_applyElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyElement}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onscroll"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>the event object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler for the scroll event</p>"}}
      ]}
    ]}
  ]}