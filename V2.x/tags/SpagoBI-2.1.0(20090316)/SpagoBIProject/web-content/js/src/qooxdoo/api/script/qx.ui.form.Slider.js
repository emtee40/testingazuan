{type:"class",attributes:{"name":"Slider","interfaces":"qx.ui.form.IFormElement","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.core.ScrollSlider","fullName":"qx.ui.form.Slider","type":"class","packageName":"qx.ui.form"},children:[{type:"desc",attributes:{"text":"<p>The Slider widget provides a vertical or horizontal slider.</p>\n\n<p>The Slider is the classic widget for controlling a bounded value.\nIt lets the user move a slider handle along a horizontal or vertical\ngroove and translates the handle&#8217;s position into an integer value\nwithin the defined range.</p>\n\n<p>The Slider has very few of its own functions; most of the functionality\nis in {@link BaseSlider}. The most useful functions are slideTo()\nto set the slider directly to some value; setSingleStep(), setPageStep()\nto set the steps; and setMinimum() and setMaximum() to define the\nrange of the slider.</p>\n\n<p>A slider accepts focus on Tab and provides both a mouse wheel and\na keyboard interface. The keyboard interface is the following:</p>\n\n<ul>\n<li>Left/Right move a horizontal slider by one single step.</li>\n<li>Up/Down move a vertical slider by one single step.</li>\n<li>PageUp moves up one page.</li>\n<li>PageDown moves down one page.</li>\n<li>Home moves to the start (mininum).</li>\n<li>End moves to the end (maximum).</li>\n</ul>\n\n<p>Here are the main properties of the class:</p>\n\n<ol>\n<li><code>value</code>: The bounded integer that BaseSlider maintains.</li>\n<li><code>minimum</code>: The lowest possible value.</li>\n<li><code>maximum</code>: The highest possible value.</li>\n<li><code>singleStep</code>: The smaller of two natural steps that an abstract sliders provides and typically corresponds to the user pressing an arrow key.</li>\n<li><code>pageStep</code>: The larger of two natural steps that an abstract slider provides and typically corresponds to the user pressing PageUp or PageDown.</li>\n</ol>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Configure the {@link #orientation} property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__computeTrackingEnd"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the value where the tracking should end depending on\nthe current mouse position.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Slider#knobFactor","name":"_applyKnobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyKnobFactor}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Slider#maximum","name":"_applyMaximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaximum}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Slider#minimum","name":"_applyMinimum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>minimum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMinimum}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Slider#orientation","name":"_applyOrientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOrientation}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Slider#value","name":"_applyValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyValue}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onInterval"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of interval event by the internal timer. Only used\nin tracking sequences.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming keypress event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Keypress"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for keypress events.</p>\n\n<p>Adds support for arrow keys, page up, page down, home and end keys.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of mousedown event. Initializes drag or tracking mode.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseMove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of mousmove event for the knob. Only used in drag mode.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of mouseup event. Used for cleanup of previously\ninitialized modes.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseWheel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of mousewheel event</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onUpdate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of resize event for both the slider itself and the knob.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_positionToValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"},children:[{type:"desc",attributes:{"text":"<p>Position to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converts the given position to a value.</p>\n\n<p>Does not respect single or page step.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Resulting value (rounded)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_setKnobPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"},children:[{type:"desc",attributes:{"text":"<p>Any valid posititon (needs to be\n  greater or equal than zero)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Moves the knob to the given position.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_updateKnobPosition"},children:[{type:"desc",attributes:{"text":"<p>Updates the knob position following the currently configured\nvalue. Useful on reflows where the dimensions of the slider\nitself have been modified.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_updateKnobSize"},children:[{type:"desc",attributes:{"text":"<p>Reconfigures the size of the knob depending on\nthe optionally defined {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_valueToPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converts the given value to a position to place\nthe knob to.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Computed position (rounded)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getKnobFactor","fromProperty":"knobFactor"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMinimum","fromProperty":"minimum"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minimum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>minimum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPageStep","fromProperty":"pageStep"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>pageStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSingleStep","fromProperty":"singleStep"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>singleStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initKnobFactor","fromProperty":"knobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>knobFactor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maximum</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMinimum","fromProperty":"minimum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>minimum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minimum</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minimum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>orientation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPageStep","fromProperty":"pageStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>pageStep</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSingleStep","fromProperty":"singleStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>singleStep</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetKnobFactor","fromProperty":"knobFactor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>knobFactor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maximum</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMinimum","fromProperty":"minimum"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minimum</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minimum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>orientation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPageStep","fromProperty":"pageStep"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>pageStep</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSingleStep","fromProperty":"singleStep"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>singleStep</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setKnobFactor","fromProperty":"knobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMinimum","fromProperty":"minimum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>minimum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minimum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPageStep","fromProperty":"pageStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>pageStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSingleStep","fromProperty":"singleStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>singleStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"slideBack"},children:[{type:"desc",attributes:{"text":"<p>Slides backward (to left or top depending on orientation)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slideBy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"offset"},children:[{type:"desc",attributes:{"text":"<p>Offset to scroll by</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Slides by the given offset.</p>\n\n<p>This method works with the value, not with the coordinate.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slideForward"},children:[{type:"desc",attributes:{"text":"<p>Slides forward (right or bottom depending on orientation)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slidePageBack"},children:[{type:"desc",attributes:{"text":"<p>Slides a page backward (to left or top depending on orientation)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slidePageForward"},children:[{type:"desc",attributes:{"text":"<p>Slides a page forward (to right or bottom depending on orientation)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slideTo"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Scroll to a value between the defined\n  minimum and maximum.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Slides to the given value</p>\n\n<p>This method works with the value, not with the coordinate.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slideToBegin"},children:[{type:"desc",attributes:{"text":"<p>Slides backward to the minimum value</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"slideToEnd"},children:[{type:"desc",attributes:{"text":"<p>Slides forward to the maximum value</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"slider\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"check":"Number","allowNull":"true","propertyType":"new","name":"knobFactor","apply":"_applyKnobFactor"},children:[{type:"desc",attributes:{"text":"<p>Factor to apply to the width/height of the knob in relation\nto the dimension of the underlying area.</p>"}}]},{type:"property",attributes:{"apply":"_applyMaximum","defaultValue":"100","propertyType":"new","name":"maximum","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The maximum slider value (may be nagative). This value must be larger\nthan {@link #minimum}.</p>"}}]},{type:"property",attributes:{"apply":"_applyMinimum","defaultValue":"0","propertyType":"new","name":"minimum","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The minimum slider value (may be nagative). This value must be smaller\nthan {@link #maximum}.</p>"}}]},{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"name","event":"changeName"},children:[{type:"desc",attributes:{"text":"<p>The name of the widget. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"apply":"_applyOrientation","defaultValue":"\"horizontal\"","propertyType":"new","name":"orientation","possibleValues":"\"horizontal\",\"vertical\""},children:[{type:"desc",attributes:{"text":"<p>Whether the slider is horizontal or vertical.</p>"}}]},{type:"property",attributes:{"defaultValue":"10","propertyType":"new","name":"pageStep","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The amount to increment on each event. Typically corresponds\nto the user pressing <code>PageUp</code> or <code>PageDown</code>.</p>"}}]},{type:"property",attributes:{"defaultValue":"1","propertyType":"new","name":"singleStep","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The amount to increment on each event. Typically corresponds\nto the user pressing an arrow key.</p>"}}]},{type:"property",attributes:{"name":"value","defaultValue":"0","event":"changeValue","propertyType":"new","apply":"_applyValue","check":"typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()"},children:[{type:"desc",attributes:{"text":"<p>The current slider value.</p>\n\n<p>Strictly validates according to {@link #minimum} and {@link #maximum}.\nDo not apply any value correction to the incoming value. If you depend\non this, please use {@link #slideTo} instead.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}