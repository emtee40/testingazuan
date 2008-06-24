{type:"class",attributes:{"name":"GroupBox","packageName":"qx.ui.groupbox","superClass":"qx.ui.layout.CanvasLayout","childClasses":"qx.ui.groupbox.CheckGroupBox,qx.ui.groupbox.RadioGroupBox","fullName":"qx.ui.groupbox.GroupBox","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.layout.CanvasLayout","name":"group-box-frame"}},
    {type:"appearance",attributes:{"type":"qx.ui.groupbox.GroupBox","name":"group-box"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Atom","name":"group-box-legend"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLegend"}},
        {type:"param",attributes:{"name":"vIcon"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"group-box\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_createFrameObject"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the frame sub widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createLegendObject"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the legend sub widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFrameObject"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the frame sub widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>frame sub widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIcon"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the icon of the legend sub widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>source of the new icon of the legend sub widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLegend"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the label of the legend sub widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Label of the legend sub widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLegendObject"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the legend sub widget</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>legend sub widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Atom"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIcon"},children:[
          {type:"desc",attributes:{"text":"<p>source of the new icon of the legend sub widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the icon of the legend sub widget.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLegend"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLegend"},children:[
          {type:"desc",attributes:{"text":"<p>new label of the legend sub widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the label of the legend sub widget if the given string is\nvalid. Otherwise the legend sub widget get not displayed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}