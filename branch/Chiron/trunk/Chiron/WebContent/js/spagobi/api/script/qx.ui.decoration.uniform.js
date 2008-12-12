{type:"class",attributes:{"name":"Uniform","packageName":"qx.ui.decoration","superClass":"qx.core.Object","fullName":"qx.ui.decoration.Uniform","type":"class","interfaces":"qx.ui.decoration.IDecorator"},children:[{type:"desc",attributes:{"text":"<p>A simple decorator featuring background images and colors and a simple\nuniform border based on <span class=\"caps\">CSS</span> styles.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>Width of the border</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>Any supported border style</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"color"},children:[{type:"desc",attributes:{"text":"<p>The border color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.Uniform#backgroundColor","name":"_applyStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>style</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyle}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.Uniform#width","name":"_applyWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidth}.</p>"}}]},{type:"method",attributes:{"name":"getBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getColor","fromProperty":"color"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>color</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>color</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getInsets"}},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getMarkup"}},{type:"method",attributes:{"name":"getStyle","fromProperty":"style"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>style</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>style</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWidth","fromProperty":"width"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>width</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"init"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundColor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundImage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundRepeat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initColor","fromProperty":"color"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>color</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>color</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initStyle","fromProperty":"style"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>style</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>style</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWidth","fromProperty":"width"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>width</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>width</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetColor","fromProperty":"color"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>color</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetStyle","fromProperty":"style"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>style</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWidth","fromProperty":"width"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>width</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"resize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]}]},{type:"method",attributes:{"name":"setBackgroundColor","fromProperty":"backgroundColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundColor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setBackgroundImage","fromProperty":"backgroundImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>backgroundRepeat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setColor","fromProperty":"color"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>color</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>color</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setStyle","fromProperty":"style"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>style</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>style</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWidth","fromProperty":"width"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>width</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"tint"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"bgcolor"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","apply":"_applyStyle","check":"Color","name":"backgroundColor","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Color of the background</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyStyle","check":"String","name":"backgroundImage","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">URL</span> of the background image</p>"}}]},{type:"property",attributes:{"apply":"_applyStyle","defaultValue":"\"repeat\"","name":"backgroundRepeat","possibleValues":"\"repeat\",\"repeat-x\",\"repeat-y\",\"no-repeat\",\"scale\"","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>How the background image should be repeated</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyStyle","check":"Color","name":"color","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Set the border color of all sides</p>"}}]},{type:"property",attributes:{"name":"style","defaultValue":"\"solid\"","propertyType":"new","allowNull":"true","possibleValues":"\"solid\",\"dotted\",\"dashed\",\"double\"","apply":"_applyStyle"},children:[{type:"desc",attributes:{"text":"<p>The border style of all sides</p>"}}]},{type:"property",attributes:{"check":"PositiveInteger","apply":"_applyWidth","defaultValue":"0","name":"width","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Set the border width of all sides</p>"}}]}]}]}