{type:"class",attributes:{"name":"Decoration","packageName":"qx.theme.manager","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.theme.manager.Decoration","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Manager for decoration themes</p>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.theme.manager.Decoration#theme","name":"_applyTheme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTheme}.</p>"}}]},{type:"method",attributes:{"name":"getTheme","fromProperty":"theme"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTheme","fromProperty":"theme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>theme</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isDynamic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a value is interpreted dynamically</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true if the value is interpreted dynamically</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isValidPropertyValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Incoming value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given value is valid for being used in a property\nwith the &#8216;check&#8217; configured to &#8216;Decorator&#8217;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the value is valid for being used in a Decorator property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetTheme","fromProperty":"theme"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>theme</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resolve"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the dynamically interpreted result for the incoming value</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>return the (translated) result of the incoming value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTheme","fromProperty":"theme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","apply":"_applyTheme","check":"Theme","name":"theme","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Selected decoration theme</p>"}}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.theme.manager.Decoration"}}]}]}]}]}]}