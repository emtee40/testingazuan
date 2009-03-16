{type:"class",attributes:{"isStatic":"true","name":"Event","packageName":"qx.bom","fullName":"qx.bom.Event","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>Wrapper around native event managment capabilities of the browser.\nThis class should not be used directly normally. It&#8217;s better\nto use {@link qx.event.Registration} instead.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"addNativeListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid native event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>The pointer to the function to assign</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>Use the low level browser functionality to attach event listeners\nto <span class=\"caps\">DOM</span> nodes.</p>\n\n<p>Use this with caution. This is only thought for event handlers and\nqualified developers. These are not mem-leak protected!</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"getRelatedTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native <span class=\"caps\">DOM</span> event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the related target from the native <span class=\"caps\">DOM</span> event</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The related target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the target of the event.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Any valid native event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"preventDefault"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Prevent the native default of the event to be processed.</p>\n\n<p>This is useful to stop native keybindings, native selection\nand other native funtionality behind events.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"removeNativeListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid native event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>The pointer to the function to assign</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>Use the low level browser functionality to remove event listeners\nfrom <span class=\"caps\">DOM</span> nodes.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"stopPropagation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Stops the propagation of the given event to the parent element.</p>\n\n<p>Only useful for events which bubble e.g. mousedown.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}