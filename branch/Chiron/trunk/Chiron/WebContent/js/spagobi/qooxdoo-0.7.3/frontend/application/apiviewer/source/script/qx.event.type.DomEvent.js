{type:"class",attributes:{"name":"DomEvent","hasWarning":"true","packageName":"qx.event.type","superClass":"qx.event.type.Event","childClasses":"qx.event.type.KeyEvent,qx.event.type.MouseEvent","fullName":"qx.event.type.DomEvent","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vType"}},
        {type:"param",attributes:{"name":"vDomEvent"}},
        {type:"param",attributes:{"name":"vDomTarget"}},
        {type:"param",attributes:{"name":"vTarget"}},
        {type:"param",attributes:{"name":"vOriginalTarget"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"META_MASK","value":"8"},children:[
      {type:"desc",attributes:{"text":"<p>The modifier mask for the meta key (e.g. apple key on Macs).</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"ALT_MASK","value":"4"},children:[
      {type:"desc",attributes:{"text":"<p>The modifier mask for the alt key.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"SHIFT_MASK","value":"1"},children:[
      {type:"desc",attributes:{"text":"<p>The modifier mask for the shift key.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"CTRL_MASK","value":"2"},children:[
      {type:"desc",attributes:{"text":"<p>The modifier mask for the control key.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"int"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"bubbles","hasWarning":"true","docFrom":"qx.event.type.Event","defaultValue":"true","oldProperty":"true","propertyType":"fast","overriddenFrom":"qx.event.type.Event"}},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"domEvent","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"101"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"domTarget","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"108"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","name":"modifiers","propertyType":"cached"},children:[
      {type:"desc",attributes:{"text":"<p>The modifiers. A mask of the pressed modifier keys. This is an OR-combination of\n{@link #SHIFT_MASK}, {@link #CTRL_MASK}, {@link #ALT_MASK} and {@link #META_MASK}.</p>"}}
      ]},
    {type:"property",attributes:{"name":"propagationStopped","hasWarning":"true","docFrom":"qx.event.type.Event","defaultValue":"false","oldProperty":"true","propertyType":"fast","overriddenFrom":"qx.event.type.Event"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_computeModifiers"},children:[
      {type:"desc",attributes:{"text":"<p>property computer</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.event.type.Event","name":"getBubbles","fromProperty":"bubbles"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>bubbles</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bubbles}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>bubbles</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDomEvent","fromProperty":"domEvent"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>domEvent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #domEvent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>domEvent</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDomTarget","fromProperty":"domTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>domTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #domTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>domTarget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.event.type.Event","name":"getPropagationStopped","fromProperty":"propagationStopped"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>propagationStopped</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #propagationStopped}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>propagationStopped</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAltPressed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the the alt key is pressed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the the alt key is pressed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCtrlOrCommandPressed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the ctrl key or (on the Mac) the command key is pressed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<code>true</code> if the command key is pressed on the Mac\n          or the ctrl key is pressed on another system."}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCtrlPressed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the the ctrl key is pressed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the the ctrl key is pressed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isMetaPressed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the the meta key is pressed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the the meta key is pressed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShiftPressed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the the shift key is pressed.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the the shift key is pressed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setDefaultPrevented"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vValue"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vValue</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]}
    ]}
  ]}