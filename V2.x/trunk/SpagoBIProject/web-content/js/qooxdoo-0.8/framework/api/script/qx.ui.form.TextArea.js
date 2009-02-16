{type:"class",attributes:{"name":"TextArea","packageName":"qx.ui.form","superClass":"qx.ui.form.AbstractField","fullName":"qx.ui.form.TextArea","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The TextField is a multi-line text input field.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.form.AbstractField","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"\"\"","name":"value"},children:[{type:"desc",attributes:{"text":"<p>The text area&#8217;s initial value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextArea#wrap","name":"_applyWrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWrap}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractField","overriddenFrom":"qx.ui.form.AbstractField","name":"_createInputElement"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.form.AbstractField","name":"_getContentHint"}},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"textarea\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"apply":"_applyWrap","defaultValue":"true","propertyType":"new","name":"wrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Controls whether text wrap is activated or not.</p>"}}]}]}]}