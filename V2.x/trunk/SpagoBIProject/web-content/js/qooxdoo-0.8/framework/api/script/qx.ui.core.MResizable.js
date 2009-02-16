{type:"class",attributes:{"name":"MResizable","packageName":"qx.ui.core","includer":"qx.ui.window.Window,qx.ui.container.Resizer","fullName":"qx.ui.core.MResizable","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>Provides resizing behavior to any widget.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","isMixin":"true","name":"__computeResizeMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Last mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Updates the internally stored resize mode</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__computeResizeResult"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Last mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the new boundaries at each interval\nof the resize sequence.</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__getResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Get the widget, which draws the resize/move frame. The resize frame is\nshared by all widgets and is added to the root widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The resize frame</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onResizeLoseCapture"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Lose capture event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>losecapture</code> event.</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onResizeMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the mouse down event</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onResizeMouseMove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the mouse move event</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onResizeMouseOut"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the mouse out event</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onResizeMouseUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the mouse up event</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__showResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Creates, shows and syncs the frame with the widget.</p>"}}]},{type:"method",attributes:{"name":"getResizable","fromProperty":"resizable"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizeAllEdges</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizeAllEdges</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getResizeSensitivity","fromProperty":"resizeSensitivity"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>resizeSensitivity</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeSensitivity}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>resizeSensitivity</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useResizeFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>useResizeFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initResizable","fromProperty":"resizable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>resizable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>resizeAllEdges</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizeAllEdges</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initResizeSensitivity","fromProperty":"resizeSensitivity"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>resizeSensitivity</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>resizeSensitivity</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeSensitivity}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>useResizeFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useResizeFrame</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isResizable","fromProperty":"resizable"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>resizeAllEdges</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useResizeFrame</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetResizable","fromProperty":"resizable"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizeAllEdges</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetResizeSensitivity","fromProperty":"resizeSensitivity"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>resizeSensitivity</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeSensitivity}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useResizeFrame</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setResizable","fromProperty":"resizable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>resizable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>resizeAllEdges</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizeAllEdges</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setResizeSensitivity","fromProperty":"resizeSensitivity"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>resizeSensitivity</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>resizeSensitivity</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeSensitivity}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>useResizeFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useResizeFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleResizable","fromProperty":"resizable"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleResizeAllEdges","fromProperty":"resizeAllEdges"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>resizeAllEdges</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #resizeAllEdges}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleUseResizeFrame","fromProperty":"useResizeFrame"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useResizeFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useResizeFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"true","propertyType":"new","isMixin":"true","name":"resizable","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the widget is resizable</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","isMixin":"true","name":"resizeAllEdges","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Which edges are function as resizable handles.</p>\n\n<p>Enabled means that all edges are enabled for resizing (Windows mode)\nDisabled means that only the right/bottom edges are enabled (Mac mode)</p>"}}]},{type:"property",attributes:{"defaultValue":"5","propertyType":"new","isMixin":"true","name":"resizeSensitivity","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The tolerance to activate resizing</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","isMixin":"true","name":"useResizeFrame","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether a frame replacement should be used during the resize sequence</p>"}}]}]}]}