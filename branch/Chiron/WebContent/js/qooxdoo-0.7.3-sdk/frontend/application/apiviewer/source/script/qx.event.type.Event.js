{type:"class",attributes:{"name":"Event","hasWarning":"true","packageName":"qx.event.type","superClass":"qx.core.Object","childClasses":"qx.event.type.ChangeEvent,qx.event.type.DataEvent,qx.event.type.DomEvent,qx.event.type.FocusEvent,qx.io.remote.Response","fullName":"qx.event.type.Event","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>The qooxdoo core event object. Each event object for qx.core.Targets should extend this class.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vType"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"bubbles","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"87"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"currentTarget","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"85"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"defaultPrevented","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"101"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"originalTarget","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"67"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"true","oldProperty":"true","hasError":"true","name":"propagationStopped","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"94"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"relatedTarget","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"79"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"target","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"73"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","oldProperty":"true","name":"type","propertyType":"fast"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"61"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getBubbles","fromProperty":"bubbles"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>bubbles</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bubbles}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>bubbles</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCurrentTarget","fromProperty":"currentTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>currentTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #currentTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>currentTarget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDefaultPrevented","fromProperty":"defaultPrevented"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>defaultPrevented</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultPrevented}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>defaultPrevented</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOriginalTarget","fromProperty":"originalTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>originalTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #originalTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>originalTarget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPropagationStopped","fromProperty":"propagationStopped"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>propagationStopped</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #propagationStopped}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>propagationStopped</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRelatedTarget","fromProperty":"relatedTarget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>relatedTarget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #relatedTarget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>relatedTarget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTarget","fromProperty":"target"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>target</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getType","fromProperty":"type"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>type</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #type}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>type</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"preventDefault"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"135"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"stopPropagation"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"146"}}
        ]}
      ]}
    ]}
  ]}