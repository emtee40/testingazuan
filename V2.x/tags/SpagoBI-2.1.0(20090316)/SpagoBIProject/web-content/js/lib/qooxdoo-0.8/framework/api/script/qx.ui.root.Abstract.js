{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.ui.root","mixins":"qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.root.Application,qx.ui.root.Inline,qx.ui.root.Page","fullName":"qx.ui.root.Abstract","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Shared implementation for all root widgets.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"root\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"enabled","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"globalCursor","check":"String","allowNull":"true","propertyType":"new","apply":"_applyGlobalCursor","event":"changeGlobalCursor","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>Sets the global cursor style</p>\n\n<p>The name of the cursor to show when the mouse pointer is over the widget.\n This is any valid CSS2 cursor name defined by W3C.</p>\n\n<p>The following values are possible:\n <ul><li>default</li>\n <li>crosshair</li>\n <li>pointer (hand is the ie name and will mapped to pointer in non-ie).</li>\n <li>move</li>\n <li>n-resize</li>\n <li>ne-resize</li>\n <li>e-resize</li>\n <li>se-resize</li>\n <li>s-resize</li>\n <li>sw-resize</li>\n <li>w-resize</li>\n <li>nw-resize</li>\n <li>text</li>\n <li>wait</li>\n <li>help </li>\n <li>url([file]) = self defined cursor, file should be an <span class=\"caps\">ANI</span>- or <span class=\"caps\">CUR</span>-type</li>\n </ul></p>\n\n<p>Please note that in the current implementation this has no effect in IE.</p>"}}]},{type:"property",attributes:{"name":"nativeContextMenu","defaultValue":"true","allowNull":"true","propertyType":"new","apply":"_applyNativeContextMenu","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether to show the native context menu</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeGlobalCursor"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #globalCursor}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.root.Abstract#nativeContextMenu","name":"_applyNativeContextMenu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>nativeContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyNativeContextMenu}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onNativeContextMenu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Stops the <code>contextmenu</code> event from showing the native context menu</p>"}}]},{type:"method",attributes:{"name":"getGlobalCursor","fromProperty":"globalCursor"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>globalCursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>globalCursor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getLayout"},children:[{type:"desc",attributes:{"text":"<p>Get the widget&#8217;s layout manager.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s layout manager</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Abstract"}}]}]}]},{type:"method",attributes:{"name":"getNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>nativeContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>nativeContextMenu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initGlobalCursor","fromProperty":"globalCursor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>globalCursor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>globalCursor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>nativeContextMenu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>nativeContextMenu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>nativeContextMenu</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.core.LayoutItem","overriddenFrom":"qx.ui.core.LayoutItem","name":"isRootWidget"}},{type:"method",attributes:{"name":"resetGlobalCursor","fromProperty":"globalCursor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>globalCursor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>nativeContextMenu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setGlobalCursor","fromProperty":"globalCursor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>globalCursor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>globalCursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #globalCursor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>nativeContextMenu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>nativeContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleNativeContextMenu","fromProperty":"nativeContextMenu"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>nativeContextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nativeContextMenu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}