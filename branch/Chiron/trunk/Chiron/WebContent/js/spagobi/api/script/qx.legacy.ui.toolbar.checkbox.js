{type:"class",attributes:{"hasError":"true","name":"CheckBox","hasWarning":"true","packageName":"qx.legacy.ui.toolbar","superClass":"qx.legacy.ui.toolbar.Button","childClasses":"qx.legacy.ui.toolbar.RadioButton","fullName":"qx.legacy.ui.toolbar.CheckBox","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.form.Button","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vText"}},{type:"param",attributes:{"name":"vIcon"}},{type:"param",attributes:{"name":"vChecked"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vText</code> is not documented.","column":"11","line":"34"}},{type:"error",attributes:{"msg":"Parameter <code>vIcon</code> is not documented.","column":"11","line":"34"}},{type:"error",attributes:{"msg":"Parameter <code>vChecked</code> is not documented.","column":"11","line":"34"}}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeChecked"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #checked}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.toolbar.CheckBox#checked","name":"_applyChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.legacy.ui.form.Button","name":"_onmouseup"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"12","line":"105"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"105"}}]}]},{type:"method",attributes:{"name":"getChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initChecked","fromProperty":"checked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>checked</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>checked</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>checked</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setChecked","fromProperty":"checked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"hasError":"true","name":"checked","defaultValue":"false","check":"Boolean","propertyType":"new","apply":"_applyChecked","event":"changeChecked"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"53"}}]}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Class documentation is missing.","column":"16","line":"21"}}]}]}