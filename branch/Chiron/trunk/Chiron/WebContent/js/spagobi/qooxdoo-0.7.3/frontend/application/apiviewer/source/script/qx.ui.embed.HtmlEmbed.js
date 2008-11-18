{type:"class",attributes:{"name":"HtmlEmbed","hasWarning":"true","packageName":"qx.ui.embed","superClass":"qx.ui.basic.Terminator","childClasses":"qx.ui.embed.IconHtmlEmbed,qx.ui.embed.LinkEmbed,qx.ui.listview.ContentCellHtml","fullName":"qx.ui.embed.HtmlEmbed","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vHtml"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"null","propertyType":"new","overriddenFrom":"qx.ui.core.Widget","name":"font","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Block inheritance as default for font property</p>"}}
      ]},
    {type:"property",attributes:{"name":"html","defaultValue":"\"\"","event":"changeHtml","propertyType":"new","apply":"_applyHtml","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>Any text string which can contain <span class=\"caps\">HTML</span>, too</p>"}}
      ]},
    {type:"property",attributes:{"name":"textAlign","allowNull":"true","propertyType":"new","possibleValues":"\"left\",\"center\",\"right\",\"justify\"","apply":"_applyTextAlign","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The alignment of the text inside the box</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","propertyType":"new","overriddenFrom":"qx.ui.core.Widget","name":"textColor","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Block inheritance as default for textColor property</p>"}}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeHtml"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #html}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.core.Widget","name":"_applyElementData"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"200"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#font","overriddenFrom":"qx.ui.core.Widget","name":"_applyFont"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Font"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Font"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFont}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.embed.HtmlEmbed#html","name":"_applyHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>html</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyHtml}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.embed.HtmlEmbed#textAlign","name":"_applyTextAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextAlign}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#textColor","overriddenFrom":"qx.ui.core.Widget","name":"_applyTextColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextColor}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_styleFont"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Font"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"18","line":"160"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"160"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_styleTextColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>any acceptable <span class=\"caps\">CSS</span> color property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"181"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncHtml"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"211"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHtml","fromProperty":"html"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>html</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #html}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>html</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTextAlign","fromProperty":"textAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>textAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHtml","fromProperty":"html"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>html</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>html</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #html}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTextAlign","fromProperty":"textAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>textAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHtml","fromProperty":"html"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>html</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #html}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTextAlign","fromProperty":"textAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHtml","fromProperty":"html"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>html</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>html</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #html}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTextAlign","fromProperty":"textAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>textAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}