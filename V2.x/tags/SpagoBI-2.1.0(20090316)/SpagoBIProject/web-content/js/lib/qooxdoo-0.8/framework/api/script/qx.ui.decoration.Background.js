{type:"class",attributes:{"name":"Background","interfaces":"qx.ui.decoration.IDecorator","superClass":"qx.core.Object","fullName":"qx.ui.decoration.Background","type":"class","packageName":"qx.ui.decoration"},children:[{type:"desc",attributes:{"text":"<p>A very simple decorator featuring background images and colors. No\nborder is supported.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>Initialize with background color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.Background#backgroundColor","name":"_applyStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyle}.</p>"}}]},{type:"method",attributes:{"name":"getBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getInsets"}},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getMarkup"}},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"init"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundColor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundImage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundRepeat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"resize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]}]},{type:"method",attributes:{"name":"setBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"tint"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"bgcolor"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"backgroundColor","apply":"_applyStyle"},children:[{type:"desc",attributes:{"text":"<p>Color of the background</p>"}}]},{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"backgroundImage","apply":"_applyStyle"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">URL</span> of the background image</p>"}}]},{type:"property",attributes:{"apply":"_applyStyle","defaultValue":"\"repeat\"","propertyType":"new","name":"backgroundRepeat","possibleValues":"\"repeat\",\"repeat-x\",\"repeat-y\",\"no-repeat\",\"scale\""},children:[{type:"desc",attributes:{"text":"<p>How the background image should be repeated</p>"}}]}]}]}