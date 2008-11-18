{type:"class",attributes:{"name":"Scroll","packageName":"qx.ui.container","mixins":"qx.ui.core.MContentPadding","superClass":"qx.ui.core.AbstractScrollArea","fullName":"qx.ui.container.Scroll","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Container, which allows vertical and horizontal scrolling if the contents is\nlarger than the container.</p>\n\n<p>Note that this class can only have one child widget.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.AbstractScrollArea","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"content"},children:[{type:"desc",attributes:{"text":"<p>The content widget of the scroll\n   container.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.LayoutItem"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_getContentPaddingTarget"},children:[{type:"desc",attributes:{"text":"<p>Returns the element, to which the content padding should be applied.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The content padding target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the content of the scroll container. Scroll containers\nmay only have one child, so it always replaces the current\nchild with the given one.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getChild"},children:[{type:"desc",attributes:{"text":"<p>Returns the content of the scroll container.</p>\n\n<p>Scroll containers may only have one child. This\nmethod returns exactly this one child or <code>null</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The child</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the content of the scroll area.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]}]}]}