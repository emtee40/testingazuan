{type:"class",attributes:{"name":"MAnimation","hasWarning":"true","packageName":"qx.ui.animation","fullName":"qx.ui.animation.MAnimation","type":"mixin"},children:[
  {type:"desc",attributes:{"text":"<p>Fading support for widgets</p>\n\n<p>This mixin supports fading in and out of widgets. It can be included in any\nsub class of {@link qx.ui.core.Widget}. To enable this feature for all widgets\nuse:</p>\n\n<pre class=\"javascript\">\n  qx.Class.include(qx.ui.core.Widget, qx.ui.animation.MAnimation);\n</pre>"}},
  {type:"events",children:[
    {type:"event",attributes:{"name":"FADE_FINISHED"},children:[
      {type:"desc",attributes:{"text":"<p>This event is fired after the fading has finished.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"FADE_FINISHED","value":"FADE_FINISHED"}},
    {type:"constant",attributes:{"type":"String","name":"FADE_OUT","value":"FADE_OUT"}},
    {type:"constant",attributes:{"type":"String","name":"FADE_IN","value":"FADE_IN"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.animation.MAnimation#fadeMax","isMixin":"true","name":"_applyFadeMax"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.animation.MAnimation#fadeSteps","isMixin":"true","name":"_applyFadeSteps"},children:[
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
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.animation.MAnimation#fadeTime","isMixin":"true","name":"_applyFadeTime"},children:[
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
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.animation.MAnimation#fadeUnit","isMixin":"true","name":"_applyFadeUnit"},children:[
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
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_computeFadeOpacity"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"312"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","isMixin":"true","name":"_onInterval"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"205"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"205"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"fadeIn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSteps"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vTime"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vSteps</code> is not documented.","column":"14","line":"127"}},
        {type:"error",attributes:{"msg":"Parameter <code>vTime</code> is not documented.","column":"14","line":"127"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"127"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"fadeOut"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vSteps"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vTime"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vSteps</code> is not documented.","column":"15","line":"147"}},
        {type:"error",attributes:{"msg":"Parameter <code>vTime</code> is not documented.","column":"15","line":"147"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"147"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeCounter","fromProperty":"fadeCounter"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeCounter</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeCounter}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeCounter</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeInterval","fromProperty":"fadeInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeMax","fromProperty":"fadeMax"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeMax</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeMax}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeMax</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeSteps","fromProperty":"fadeSteps"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeSteps</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeSteps}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeSteps</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeTime","fromProperty":"fadeTime"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeTime</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeTime}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeTime</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"getFadeTimer"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"165"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFadeUnit","fromProperty":"fadeUnit"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fadeUnit</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeUnit}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fadeUnit</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeCounter","fromProperty":"fadeCounter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeCounter</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeCounter</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeCounter}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeInterval","fromProperty":"fadeInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeMax","fromProperty":"fadeMax"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeMax</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeMax</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeMax}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeSteps","fromProperty":"fadeSteps"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeSteps</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeSteps</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeSteps}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeTime","fromProperty":"fadeTime"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeTime</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeTime</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeTime}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFadeUnit","fromProperty":"fadeUnit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fadeUnit</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fadeUnit</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeUnit}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeCounter","fromProperty":"fadeCounter"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeCounter</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeCounter}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeInterval","fromProperty":"fadeInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeMax","fromProperty":"fadeMax"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeMax</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeMax}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isMixin":"true","name":"resetFader"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"183"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeSteps","fromProperty":"fadeSteps"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeSteps</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeSteps}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeTime","fromProperty":"fadeTime"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeTime</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeTime}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFadeUnit","fromProperty":"fadeUnit"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fadeUnit</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeUnit}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeCounter","fromProperty":"fadeCounter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeCounter</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeCounter</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeCounter}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeInterval","fromProperty":"fadeInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeMax","fromProperty":"fadeMax"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeMax</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeMax</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeMax}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeSteps","fromProperty":"fadeSteps"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeSteps</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeSteps</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeSteps}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeTime","fromProperty":"fadeTime"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeTime</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeTime</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeTime}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFadeUnit","fromProperty":"fadeUnit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fadeUnit</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fadeUnit</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fadeUnit}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","isMixin":"true","name":"fadeCounter","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The current state of a fade in progress.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"40","propertyType":"new","isMixin":"true","name":"fadeInterval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The time between the fade steps.</p>"}}
      ]},
    {type:"property",attributes:{"name":"fadeMax","defaultValue":"100","propertyType":"new","apply":"_applyFadeMax","isMixin":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum opacity for a fadeIn.</p>"}}
      ]},
    {type:"property",attributes:{"name":"fadeSteps","defaultValue":"10","propertyType":"new","apply":"_applyFadeSteps","isMixin":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The amount of steps for the fade.</p>"}}
      ]},
    {type:"property",attributes:{"name":"fadeTime","defaultValue":"400","propertyType":"new","apply":"_applyFadeTime","isMixin":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The duration for the fade in milliseconds.</p>"}}
      ]},
    {type:"property",attributes:{"name":"fadeUnit","defaultValue":"10","propertyType":"new","apply":"_applyFadeUnit","isMixin":"true","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The amount of oppacity changed on each fade step.</p>"}}
      ]}
    ]}
  ]}