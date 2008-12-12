{type:"class",attributes:{"name":"MMovable","packageName":"qx.ui.core","includer":"qx.ui.window.Window","fullName":"qx.ui.core.MMovable","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>Provides move behavior to any widget.</p>"}},{type:"methods",children:[{type:"method",attributes:{"access":"private","isMixin":"true","name":"__computeMoveCoordinates"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the new drag coordinates</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__getMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Get the widget, which draws the resize/move frame. The resize frame is\nshared by all widgets and is added to the root widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The resize frame</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__onMoveLoseCapture"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Lose capture event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>losecapture</code> event.</p>"}}]},{type:"method",attributes:{"access":"private","isMixin":"true","name":"__showMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Creates, shows and syncs the frame with the widget.</p>"}}]},{type:"method",attributes:{"access":"protected","isMixin":"true","name":"_activateMoveHandle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to activate as move handle</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Configures the given widget as a move handle</p>"}}]},{type:"method",attributes:{"access":"protected","isMixin":"true","name":"_onMoveMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>mouse down event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Enables the capturing of the caption bar and prepares the drag session and the\nappearance (translucent, frame or opaque) for the moving of the window.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","isMixin":"true","name":"_onMoveMouseMove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>mouse move event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Does the moving of the window by rendering the position\nof the window (or frame) at runtime using direct dom methods.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","isMixin":"true","name":"_onMoveMouseUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>mouse up event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Disables the capturing of the caption bar and moves the window\nto the last position of the drag session. Also restores the appearance\nof the window.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getMovable","fromProperty":"movable"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>movable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>movable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useMoveFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>useMoveFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMovable","fromProperty":"movable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>movable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>movable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>useMoveFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useMoveFrame</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isMovable","fromProperty":"movable"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>movable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useMoveFrame</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetMovable","fromProperty":"movable"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>movable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useMoveFrame</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMovable","fromProperty":"movable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>movable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>movable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>useMoveFrame</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useMoveFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleMovable","fromProperty":"movable"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>movable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #movable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleUseMoveFrame","fromProperty":"useMoveFrame"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useMoveFrame</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useMoveFrame}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Boolean","defaultValue":"true","isMixin":"true","name":"movable","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether the widget is movable</p>"}}]},{type:"property",attributes:{"check":"Boolean","defaultValue":"false","isMixin":"true","name":"useMoveFrame","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether to use a frame instead of the original widget during move sequences</p>"}}]}]}]}