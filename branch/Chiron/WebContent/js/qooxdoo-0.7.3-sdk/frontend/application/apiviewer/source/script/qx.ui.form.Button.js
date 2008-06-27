{type:"class",attributes:{"name":"Button","packageName":"qx.ui.form","superClass":"qx.ui.basic.Atom","childClasses":"qx.ui.component.DateChooserButton,qx.ui.form.RepeatButton,qx.ui.toolbar.Button","fullName":"qx.ui.form.Button","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A button.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.form.Button","name":"button"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"abandoned"}},
        {type:"state",attributes:{"name":"over"}},
        {type:"state",attributes:{"name":"pressed"}}
        ]}
      ]}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"}},
        {type:"param",attributes:{"name":"vIcon"}},
        {type:"param",attributes:{"name":"vIconWidth"}},
        {type:"param",attributes:{"name":"vIconHeight"}},
        {type:"param",attributes:{"name":"vFlash"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"button\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},
    {type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Key event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;keydown&#8221; event.</p>\n\n<p>Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state\nfor the keys &#8220;Enter&#8221; or &#8220;Space&#8221;</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeyup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Key event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;keyup&#8221; event.</p>\n\n<p>Removes &#8220;abandoned&#8221; and &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)\nfor the keys &#8220;Enter&#8221; or &#8220;Space&#8221;</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;mousedown&#8221; event\n<ul>\n<li>Removes &#8220;abandoned&#8221; state</li>\n<li>Adds &#8220;pressed&#8221; state</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseout"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseout&#8221; event\n<ul>\n<li>Removes &#8220;over&#8221; state</li>\n<li>Adds &#8220;abandoned&#8221; and removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseover"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseover&#8221; event\n<ul>\n<li>Adds state &#8220;over&#8221;</li>\n<li>Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>Mouse event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseup&#8221; event\n<ul>\n<li>Removes &#8220;pressed&#8221; state (if set)</li>\n<li>Removes &#8220;abandoned&#8221; state (if set)</li>\n<li>Adds &#8220;over&#8221; state (if &#8220;abandoned&#8221; state is not set)</li></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}