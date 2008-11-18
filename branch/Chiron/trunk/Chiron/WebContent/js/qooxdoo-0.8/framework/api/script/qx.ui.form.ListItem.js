{type:"class",attributes:{"name":"ListItem","packageName":"qx.ui.form","superClass":"qx.ui.basic.Atom","fullName":"qx.ui.form.ListItem","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A item for a list. Could be added to all List like widgets but also\nto the {@link qx.ui.form.SelectBox} and {@link qx.ui.form.ComboBox}.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.basic.Atom","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"label"},children:[{type:"desc",attributes:{"text":"<p>Label to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"icon"},children:[{type:"desc",attributes:{"text":"<p>Icon to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"value"},children:[{type:"desc",attributes:{"text":"<p>The items string value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"action"},children:[{type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.form.List})</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ListItem#manager","name":"_applyManager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.RadioGroup"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.RadioGroup"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyManager}.</p>"}}]},{type:"method",attributes:{"name":"getFormValue"},children:[{type:"desc",attributes:{"text":"<p>Returns the searchable value of the list item.</p>\n\n<p>This is normally the real value with a fallback to the label like in <span class=\"caps\">HTML</span>\nselect boxes.</p>"}}]},{type:"method",attributes:{"name":"getManager","fromProperty":"manager"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initManager","fromProperty":"manager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>manager</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetManager","fromProperty":"manager"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>manager</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setManager","fromProperty":"manager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"listitem\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},{type:"property",attributes:{"check":"qx.ui.form.RadioGroup","allowNull":"true","propertyType":"new","name":"manager","apply":"_applyManager"},children:[{type:"desc",attributes:{"text":"<p>The assigned qx.ui.form.RadioGroup which handles the switching between registered buttons</p>"}}]},{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"value","event":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fires a &#8220;changeValue&#8221; (qx.event.type.Data) event</p>"}}]}]}]}