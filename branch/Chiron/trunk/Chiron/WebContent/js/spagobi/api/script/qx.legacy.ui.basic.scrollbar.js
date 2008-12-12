{type:"class",attributes:{"name":"ScrollBar","packageName":"qx.legacy.ui.basic","superClass":"qx.legacy.ui.layout.CanvasLayout","fullName":"qx.legacy.ui.basic.ScrollBar","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A scroll bar.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.legacy.ui.layout.CanvasLayout","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"horizontal"},children:[{type:"desc",attributes:{"text":"<p>whether the scroll bar should be\n   horizontal. If false it will be vertical.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"EVENT_DELAY","value":"250"},children:[{type:"desc",attributes:{"text":"<p>The delay when to update the scroll bar value after a scroll event if\n{@link #mergeEvents} is true (in milliseconds). All scroll events that arrive\nin shorter time will be merged.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.core.Widget","overriddenFrom":"qx.legacy.ui.core.Parent","name":"_afterAppear"}},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.core.Widget#enabled","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_applyEnabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"isEnabled"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyEnabled}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.ScrollBar#maximum","name":"_applyMaximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaximum}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.ScrollBar#value","name":"_applyValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyValue}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.core.Widget#visibility","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_applyVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>visibility</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyVisibility}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_checkValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Limit the value to the allowed range of the scroll bar.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Limited value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.legacy.ui.core.Parent","name":"_computePreferredInnerHeight"},children:[{type:"desc",attributes:{"text":"<p>overridden</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.legacy.ui.core.Parent","name":"_computePreferredInnerWidth"},children:[{type:"desc",attributes:{"text":"<p>overridden</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getScrollBarWidth"},children:[{type:"desc",attributes:{"text":"<p>Gets the width of vertical scroll bar.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the width in pixels.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onscroll"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the user scrolled.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_positionKnob"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value where to postion the scroll bar.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Positions the scroll bar knob at a certain value.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMergeEvents","fromProperty":"mergeEvents"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mergeEvents</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mergeEvents</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maximum</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMergeEvents","fromProperty":"mergeEvents"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mergeEvents</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mergeEvents</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isMergeEvents","fromProperty":"mergeEvents"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>mergeEvents</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maximum</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMergeEvents","fromProperty":"mergeEvents"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mergeEvents</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMergeEvents","fromProperty":"mergeEvents"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mergeEvents</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mergeEvents</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleMergeEvents","fromProperty":"mergeEvents"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>mergeEvents</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mergeEvents}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Integer","apply":"_applyMaximum","name":"maximum","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The maximum value of the scroll bar. Note that the size of the scroll bar is\nsubstracted.</p>"}}]},{type:"property",attributes:{"check":"Boolean","defaultValue":"false","name":"mergeEvents","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether to merge consecutive scroll event. If true, events will be collected\nuntil the user stops scrolling, so the scroll bar itself will move smoothly\nand the scrolled content will update asynchroniously.</p>"}}]},{type:"property",attributes:{"name":"value","defaultValue":"0","event":"changeValue","propertyType":"new","apply":"_applyValue","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>The current value of the scroll bar. This value is between 0 and\n(maxium &#8211; size), where size is the width of a horizontal resp. the height of\na vertical scroll bar in pixels.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}