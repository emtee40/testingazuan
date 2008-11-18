{type:"class",attributes:{"name":"FocusHandler","packageName":"qx.ui.core","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.ui.core.FocusHandler","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Each focus root delegates the focus handling to instances of the FocusHandler.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__collectAllAfter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>Parent widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Child widget to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"result"},children:[{type:"desc",attributes:{"text":"<p>Result list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all widgets which are after the given widget in\nthe given parent widget. Append all found children to the\n<code>list</code>.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__collectAllBefore"},children:[{type:"params",children:[{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>Parent widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Child widget to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"result"},children:[{type:"desc",attributes:{"text":"<p>Result list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all widgets which are before the given widget in\nthe given parent widget. Append all found children to the\n<code>list</code>.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__compareTabOrder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget1"},children:[{type:"desc",attributes:{"text":"<p>Widget A</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"widget2"},children:[{type:"desc",attributes:{"text":"<p>Widget B</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Compares the order of two widgets</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A sort() compatible integer with values\n  small than 0, exactly 0 or bigger than 0.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__findFocusRoot"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to find a focus root for.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Finds the next focus root, starting with the given widget.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__getFirst"},children:[{type:"params",children:[{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>Parent widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"firstWidget"},children:[{type:"desc",attributes:{"text":"<p>Current first widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Find first (positioned) widget. (Sorted by coordinates, zIndex, etc.)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The first (positioned) widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getFirstWidget"},children:[{type:"desc",attributes:{"text":"<p>Returns the first widget of the given</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getLast"},children:[{type:"params",children:[{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>Parent widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"lastWidget"},children:[{type:"desc",attributes:{"text":"<p>Current last widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Find last (positioned) widget. (Sorted by coordinates, zIndex, etc.)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The last (positioned) widget</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getLastWidget"},children:[{type:"desc",attributes:{"text":"<p>Returns the first widget</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getWidgetAfter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the widget after the given one.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The found widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getWidgetBefore"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the widget before the given one.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The found widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Key event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeySequence"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal event handler for <span class=\"caps\">TAB</span> key.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onActivate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Focus event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Focus"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal event handler for activate event.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onDeactivate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Focus event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Focus"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal event handler for deactivate event.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onFocusIn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Focus event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Focus"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal event handler for focusin event.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onFocusOut"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Focus event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Focus"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal event handler for focusout event.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"addRoot"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to register</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Registers a widget as a focus root. A focus root comes\nwith an separate tab sequence handling.</p>"}}]},{type:"method",attributes:{"name":"connectTo"},children:[{type:"params",children:[{type:"param",attributes:{"name":"root"},children:[{type:"desc",attributes:{"text":"<p>Any root</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.root.Abstract"}}]}]}]},{type:"desc",attributes:{"text":"<p>Connects to a top-level root element (which initially receives\nall events of the root). This are normally all page and application\nroots, but no inline roots (they are typically sitting inside\nanother root).</p>"}}]},{type:"method",attributes:{"name":"isActive"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given widget is the active one</p>"}}]},{type:"method",attributes:{"name":"isFocused"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given widget is the focused one.</p>"}}]},{type:"method",attributes:{"name":"isFocusRoot"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given widgets acts as a focus root.</p>"}}]},{type:"method",attributes:{"name":"removeRoot"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to deregister</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Deregisters a previous added widget.</p>"}}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.FocusHandler"}}]}]}]}]}]}