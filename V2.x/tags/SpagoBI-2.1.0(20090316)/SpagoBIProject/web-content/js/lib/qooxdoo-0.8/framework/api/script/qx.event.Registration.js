{type:"class",attributes:{"isStatic":"true","name":"Registration","packageName":"qx.event","fullName":"qx.event.Registration","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>Wrapper for browser generic event handling.</p>\n\n<p>Supported events differ from target to target. Generally the handlers\nin {@link qx.event.handler} defines the available features.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"addDispatcher"},children:[{type:"params",children:[{type:"param",attributes:{"name":"dispatcher"},children:[{type:"desc",attributes:{"text":"<p>Event dispatcher to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.dispatch.IEventDispatch"}}]}]},{type:"param",attributes:{"name":"priority"},children:[{type:"desc",attributes:{"text":"<p>One of {@link #PRIORITY_FIRST}, {@link PRIORITY_NORMAL}\n      or {@link #PRIORITY_LAST}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Register an event dispatcher.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"addHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"handler"},children:[{type:"desc",attributes:{"text":"<p>Event handler to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.handler.AbstractEventHandler"}}]}]}]},{type:"desc",attributes:{"text":"<p>Register an event handler.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"addListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event e.g. &#8220;click&#8221;, &#8220;keydown&#8221;, ...</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>Event listener function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"self"},children:[{type:"desc",attributes:{"text":"<p>Reference to the &#8216;this&#8217; variable inside\n        the event listener.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to attach the event to the\n        capturing phase of the bubbling phase of the event. The default is\n        to attach the event handler to the bubbling phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add an event listener to a <span class=\"caps\">DOM</span> target. The event listener is passed an\ninstance of {@link Event} containing all relevant information\nabout the event as parameter.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"createEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The type of the event to create</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"qx.event.type.Event","name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>The event class to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"args"},children:[{type:"desc",attributes:{"text":"<p>Array which will be passed to\n      the event&#8217;s init method.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get an inevent instance of the given class, which can be dispatched using\nan event manager. The created events must be initialized using\n{@link qx.event.type.Event#init}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An instance of the given class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"dispatchEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The event object to dispatch. The event\n      object must be obtained using {@link #createEvent} and initialized\n      using {@link qx.event.type.Event#init}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Dispatch an event object on the given target.</p>\n\n<p>It is normally better to use {@link #fireEvent} because it uses\nthe event pooling and is quite handy otherwise as well.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the event default was prevented or not.\n    Returns true, when the event was <span class=\"caps\">NOT</span> prevented.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"fireEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Event type to fire</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"qx.event.type.Event","name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>The event class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"args"},children:[{type:"desc",attributes:{"text":"<p>Arguments, which will be passed to\n      the event&#8217;s init method.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create an event object and dispatch it on the given target.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the event default was prevented or not.\n    Returns true, when the event was <span class=\"caps\">NOT</span> prevented.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"see",attributes:{"name":"#createEvent"}}]},{type:"method",attributes:{"isStatic":"true","name":"fireNonBubblingEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Event type to fire</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"qx.event.type.Event","name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>The event class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"args"},children:[{type:"desc",attributes:{"text":"<p>Arguments, which will be passed to\n      the event&#8217;s init method.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create an event object and dispatch it on the given target.\nThe event dispached with this method does never bubble! Use only if you\nare sure that bubbling is not required.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the event default was prevented or not.\n    Returns true, when the event was <span class=\"caps\">NOT</span> prevented.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"see",attributes:{"name":"#createEvent"}}]},{type:"method",attributes:{"isStatic":"true","name":"getDispatchers"},children:[{type:"desc",attributes:{"text":"<p>Get a list of registered event dispatchers.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>all registered event dispatcher</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.dispatch.IEventDispatch","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getHandlers"},children:[{type:"desc",attributes:{"text":"<p>Get a list of registered event handlers.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>registered event handlers</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.handler.AbstractEventHandler","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getManager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get an instance of the event manager, which can handle events for the\ngiven target.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The event manger for the target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Manager"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to check for listeners of\n        the bubbling or of the capturing phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether there are one or more listeners for an event type\nregistered at the target.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the target has event listeners of the given type.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeAllListeners"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>The event target to remove all event listeners from.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove all event listeners, which are attached to the given event target.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"removeListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>The pointer to the event listener</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"self"},children:[{type:"desc",attributes:{"text":"<p>Reference to the &#8216;this&#8217; variable inside\n        the event listener.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to remove the event listener of\n        the bubbling or of the capturing phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove an event listener from a from <span class=\"caps\">DOM</span> node.</p>\n\n<p>Note: All registered event listeners will automatically be removed from\n  the <span class=\"caps\">DOM</span> at page unload so it is not necessary to detach events in the\n  destructor.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"removeManager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"mgr"},children:[{type:"desc",attributes:{"text":"<p>The manager to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Manager"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes a manager for a specific window from the list.</p>\n\n<p>Normally only used when the manager gets disposed through\nan unload event of the attached window.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"PRIORITY_NORMAL","value":"0"},children:[{type:"desc",attributes:{"text":"<p>Default priority. Used by handlers and dispatchers.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"type":"Number","name":"PRIORITY_LAST","value":"32000"},children:[{type:"desc",attributes:{"text":"<p>Lowest priority. Used by handlers and dispatchers.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"PRIORITY_FIRST"},children:[{type:"desc",attributes:{"text":"<p>Highest priority. Used by handlers and dispatchers.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}