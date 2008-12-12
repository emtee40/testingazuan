{type:"class",attributes:{"name":"ToolTip","packageName":"qx.ui.tooltip","superClass":"qx.ui.popup.Popup","fullName":"qx.ui.tooltip.ToolTip","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Tooltips provide additional help for widgets if the user hovers a widget.</p>\n\n<p><strong>Example</strong></p>\n\n<pre class=\"javascript\">\nvar widget = new qx.ui.form.Button(\"save\");\n\nvar tooltip = new qx.ui.tooltip.ToolTip(\"Save the opened file\");\nwidget.setToolTip(tooltip);\n</pre>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/tooltip\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.popup.Popup","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"label"},children:[{type:"desc",attributes:{"text":"<p>label of the tooltip</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"icon"},children:[{type:"desc",attributes:{"text":"<p>Icon <span class=\"caps\">URL</span> of the tooltip</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.tooltip.ToolTip#icon","name":"_applyIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>icon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyIcon}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.tooltip.ToolTip#label","name":"_applyLabel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>label</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyLabel}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"name":"getHideTimeout","fromProperty":"hideTimeout"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>hideTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>hideTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getIcon","fromProperty":"icon"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>icon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>icon</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getLabel","fromProperty":"label"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>label</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>label</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getShowTimeout","fromProperty":"showTimeout"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>showTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initHideTimeout","fromProperty":"hideTimeout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>hideTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>hideTimeout</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #hideTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initIcon","fromProperty":"icon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>icon</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>icon</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initLabel","fromProperty":"label"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>label</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>label</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initShowTimeout","fromProperty":"showTimeout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>showTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showTimeout</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetHideTimeout","fromProperty":"hideTimeout"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>hideTimeout</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #hideTimeout}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetIcon","fromProperty":"icon"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>icon</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetLabel","fromProperty":"label"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>label</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetShowTimeout","fromProperty":"showTimeout"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showTimeout</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showTimeout}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setHideTimeout","fromProperty":"hideTimeout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>hideTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>hideTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setIcon","fromProperty":"icon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>icon</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>icon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setLabel","fromProperty":"label"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>label</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>label</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setShowTimeout","fromProperty":"showTimeout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>showTimeout</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showTimeout</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showTimeout}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"tooltip\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.popup.Popup"}},{type:"property",attributes:{"check":"Integer","defaultValue":"4000","name":"hideTimeout","themeable":"true","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Interval after the tooltip is hidden (in milliseconds)</p>"}}]},{type:"property",attributes:{"name":"icon","allowNull":"true","propertyType":"new","apply":"_applyIcon","check":"String","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>Any <span class=\"caps\">URI</span> String supported by qx.ui.basic.Image to display an icon in ToolTips&#8217;s atom.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyLabel","check":"String","name":"label","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The label/caption/text of the ToolTip&#8217;s atom.</p>"}}]},{type:"property",attributes:{"check":"Integer","defaultValue":"1000","name":"showTimeout","themeable":"true","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Interval after the tooltip is shown (in milliseconds)</p>"}}]}]}]}