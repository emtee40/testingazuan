{type:"class",attributes:{"name":"MNativeOverflow","packageName":"qx.ui.core","includer":"qx.ui.embed.Html,qx.ui.embed.Iframe","fullName":"qx.ui.core.MNativeOverflow","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>This mixin is included by all widgets which supports native overflowing.</p>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.MNativeOverflow#overflowX","isMixin":"true","name":"_applyOverflowX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>overflowX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOverflowX}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.MNativeOverflow#overflowY","isMixin":"true","name":"_applyOverflowY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>overflowY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOverflowY}.</p>"}}]},{type:"method",attributes:{"name":"getOverflowX","fromProperty":"overflowX"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>overflowX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>overflowX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getOverflowY","fromProperty":"overflowY"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>overflowY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>overflowY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOverflowX","fromProperty":"overflowX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>overflowX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>overflowX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOverflowY","fromProperty":"overflowY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>overflowY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>overflowY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetOverflow","fromProperty":"overflow"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>overflow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetOverflowX","fromProperty":"overflowX"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>overflowX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowX}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetOverflowY","fromProperty":"overflowY"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>overflowY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowY}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setOverflow","fromProperty":"overflow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"overflowX"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #overflowX}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"overflowY"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #overflowY}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>overflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}}]},{type:"method",attributes:{"name":"setOverflowX","fromProperty":"overflowX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>overflowX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>overflowX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setOverflowY","fromProperty":"overflowY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>overflowY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>overflowY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflowY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"isMixin":"true","group":"\"overflowX\",\"overflowY\"","name":"overflow","propertyType":"group"},children:[{type:"desc",attributes:{"text":"<p>Overflow group property</p>"}}]},{type:"property",attributes:{"name":"overflowX","apply":"_applyOverflowX","allowNull":"true","propertyType":"new","possibleValues":"\"hidden\",\"visible\",\"scroll\",\"auto\"","isMixin":"true"},children:[{type:"desc",attributes:{"text":"<p>Whether the widget should have vertical scrollbars.</p>"}}]},{type:"property",attributes:{"name":"overflowY","apply":"_applyOverflowY","allowNull":"true","propertyType":"new","possibleValues":"\"hidden\",\"visible\",\"scroll\",\"auto\"","isMixin":"true"},children:[{type:"desc",attributes:{"text":"<p>Whether the widget should have horizontal scrollbars.</p>"}}]}]}]}