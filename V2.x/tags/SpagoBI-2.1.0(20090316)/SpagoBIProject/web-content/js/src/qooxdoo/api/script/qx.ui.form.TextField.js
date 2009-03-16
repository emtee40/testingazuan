{type:"class",attributes:{"name":"TextField","packageName":"qx.ui.form","superClass":"qx.ui.form.AbstractField","childClasses":"qx.ui.form.PasswordField","fullName":"qx.ui.form.TextField","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The TextField is a single-line text input field.</p>"}},{type:"properties",children:[{type:"property",attributes:{"name":"allowGrowY","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"allowShrinkY","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"textfield\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"check":"Integer","allowNull":"true","propertyType":"new","name":"maxLength","apply":"_applyMaxLength"},children:[{type:"desc",attributes:{"text":"<p>Maximum number of characters in the text field.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#maxLength","name":"_applyMaxLength"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxLength</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxLength}.</p>"}}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.form.AbstractField","name":"_createInputElement"},children:[{type:"desc",attributes:{"text":"<p>Creates the input element. Derived classes may override this\nmethod, to create different input elements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>a new input element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.html.Input"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onHtmlInput"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Input event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for native input events. Redirects the event\nto the widget.</p>"}}]},{type:"method",attributes:{"name":"getMaxLength","fromProperty":"maxLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxLength</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxLength</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxLength","fromProperty":"maxLength"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxLength</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxLength</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetMaxLength","fromProperty":"maxLength"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxLength</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMaxLength","fromProperty":"maxLength"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxLength</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxLength</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"input"},children:[{type:"desc",attributes:{"text":"<p>The input event is fired on every keystroke modifying the value of the field</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}