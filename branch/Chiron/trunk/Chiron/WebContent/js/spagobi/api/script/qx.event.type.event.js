{type:"class",attributes:{"name":"Event","packageName":"qx.event.type","superClass":"qx.core.Object","childClasses":"qx.event.type.Data,qx.event.type.Drag,qx.event.type.Focus,qx.event.type.Native,qx.io.remote.Response,qx.legacy.event.type.DomEvent,qx.legacy.event.type.FocusEvent","fullName":"qx.event.type.Event","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Basic event object.</p>\n\n<p>Please note:\nEvent objects are only valid during the event dispatch. After the dispatch\nevent objects are pooled or disposed. If you want to safe a reference to an\nevent instance use the {@link #clone} method.</p>\n\n<p>The interface is modeled after the <span class=\"caps\">DOM</span> level 2 event interface:\n<a href=\"http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface\">http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface</a></p>"}},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"CAPTURING_PHASE","value":"1"},children:[{type:"desc",attributes:{"text":"<p>The current event phase is the capturing phase.</p>"}}]},{type:"constant",attributes:{"type":"Number","name":"AT_TARGET","value":"2"},children:[{type:"desc",attributes:{"text":"<p>The event is currently being evaluated at the target</p>"}}]},{type:"constant",attributes:{"type":"Number","name":"BUBBLING_PHASE","value":"3"},children:[{type:"desc",attributes:{"text":"<p>The current event phase is the bubbling phase.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","name":"clone"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"embryo"},children:[{type:"desc",attributes:{"text":"<p>Optional event class, which will\n    be configured using the data of this event instance. The event must be\n    an instance of this event class. If the value is <code>null</code>,\n    a new pooled instance is created.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create a clone of the event object, which is not automatically disposed\nor pooled after an event dispatch.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>a clone of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"method",attributes:{"name":"getBubbles"},children:[{type:"desc",attributes:{"text":"<p>Check whether or not the event is a bubbling event. If the event can\nbubble the value is true, else the value is false.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the event bubbles</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getCurrentTarget"},children:[{type:"desc",attributes:{"text":"<p>Get the event target node whose event listeners are currently being\nprocessed. This is particularly useful during event capturing and\nbubbling.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The target the event listener is currently\n      dispatched on.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"name":"getDefaultPrevented"},children:[{type:"desc",attributes:{"text":"<p>Get whether the default action has been prevented</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the default action has benn prevented</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getEventPhase"},children:[{type:"desc",attributes:{"text":"<p>Used to indicate which phase of event flow is currently being evaluated.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The current event phase. Possible values are\n        {@link #CAPTURING_PHASE}, {@link #AT_TARGET} and {@link #BUBBLING_PHASE}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getOriginalTarget"},children:[{type:"desc",attributes:{"text":"<p>Get the original event target. This is only configured\nfor events which are fired by another event (often when\nthe target should be reconfigured for another view) e.g.\nlow-level <span class=\"caps\">DOM</span> event to widget event.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The original target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"name":"getPropagationStopped"},children:[{type:"desc",attributes:{"text":"<p>Get whether further event propagation has been stopped.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether further propagation has been stopped.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getRelatedTarget"},children:[{type:"desc",attributes:{"text":"<p>Get the related event target. This is only configured for\nevents which also had an influences on another element e.g.\nmouseover/mouseout, focus/blur, ...</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The related target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"name":"getTarget"},children:[{type:"desc",attributes:{"text":"<p>Returns the event target to which the event was originally\ndispatched.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>target to which the event was originally\n      dispatched.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"name":"getTimeStamp"},children:[{type:"desc",attributes:{"text":"<p>The time (in milliseconds relative to the epoch) at which the event was created.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the timestamp the event was created.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getType"},children:[{type:"desc",attributes:{"text":"<p>The name of the event</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"init"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"canBubble"},children:[{type:"desc",attributes:{"text":"<p>Whether or not the event is a bubbling event.\n    If the event is bubbling, the bubbling can be stopped using\n    {@link #stopPropagation}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"cancelable"},children:[{type:"desc",attributes:{"text":"<p>Whether or not an event can have its default\n    action prevented. The default action can either be the browser&#8217;s\n    default action of a native event (e.g. open the context menu on a\n    right click) or the default action of a qooxdoo class (e.g. close\n    the window widget). The default action can be prevented by calling\n    {@link #preventDefault}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Initialize the fields of the event. The event must be initialized before\nit can be dispatched.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The initialized event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"method",attributes:{"name":"isCancelable"},children:[{type:"desc",attributes:{"text":"<p>Get whether the event is cancelable</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the event is cancelable</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"preventDefault"},children:[{type:"desc",attributes:{"text":"<p>Prevent the default action of cancelable events, e.g. opening the context\nmenu, ...</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setBubbles"},children:[{type:"params",children:[{type:"param",attributes:{"name":"bubbles"},children:[{type:"desc",attributes:{"text":"<p>Whether the event bubbles</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set whether the event bubbles.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setCancelable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cancelable"},children:[{type:"desc",attributes:{"text":"<p>Whether the event is cancelable</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set whether the event is cancelable</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setCurrentTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"currentTarget"},children:[{type:"desc",attributes:{"text":"<p>new current target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override current target.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setEventPhase"},children:[{type:"params",children:[{type:"param",attributes:{"name":"eventPhase"},children:[{type:"desc",attributes:{"text":"<p>new event phase</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override the event phase</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setOriginalTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"originalTarget"},children:[{type:"desc",attributes:{"text":"<p>new original target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override original target.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setRelatedTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"relatedTarget"},children:[{type:"desc",attributes:{"text":"<p>new related target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override related target.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>new event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override event target.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>new event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Override the event type</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"stopPropagation"},children:[{type:"desc",attributes:{"text":"<p>This method is used to prevent further propagation of an event during event\nflow. If this method is called by any event listener the event will cease\npropagating through the tree. The event will complete dispatch to all listeners\non the current event target before event flow stops.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}