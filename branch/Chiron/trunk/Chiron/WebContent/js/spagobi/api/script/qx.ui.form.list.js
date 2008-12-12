{type:"class",attributes:{"name":"List","interfaces":"qx.ui.form.IFormElement","mixins":"qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MSelectionHandling","superClass":"qx.ui.core.AbstractScrollArea","fullName":"qx.ui.form.List","type":"class","packageName":"qx.ui.form"},children:[{type:"desc",attributes:{"text":"<p>A list of items. Displayes a automatically scrolling list for all\nadded {@link qx.ui.form.ListItem} instances. Supports various\nselection options: single, multi, ...</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.AbstractScrollArea","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"horizontal"},children:[{type:"desc",attributes:{"text":"<p>Whether the list should be horizontal.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"addItem"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after a list item was added to the list. The\n{@link qx.event.type.Data#getData} method of the event returns the\nadded item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired on every modification of the selection which also means that the\nvalue has been modified.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"removeItem"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after a list item has been removed from the list.\nThe {@link qx.event.type.Data#getData} method of the event returns the\nremoved item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.List#orientation","name":"_applyOrientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOrientation}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.List#spacing","name":"_applySpacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySpacing}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onAddChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>the event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Handle child widget adds on the content pane</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onChangeSelection"},children:[{type:"desc",attributes:{"text":"<p>Reacts on change event to fire a changeValue event with the\nvalue given through {@link #getValue}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onKeyInput"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>keyInput event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Handles the inline find &#8211; if enabled</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>KeyPress event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>keypress</code> events.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the event was processed</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onRemoveChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>the event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Handle child widget removes on the content pane</p>"}}]},{type:"method",attributes:{"name":"findItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"search"},children:[{type:"desc",attributes:{"text":"<p>A value or label or any item</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Find an item by its {@link #qx.ui.form.ListItem~getFormValue}. This method\nis used for a <span class=\"caps\">HTML</span>-like behavior where the\nfallback is the label automatically for selectbox options as well. If\na value is given the label is ignored, even if it would match!</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The found ListItem or null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]}]},{type:"method",attributes:{"name":"findItemByLabelFuzzy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"search"},children:[{type:"desc",attributes:{"text":"<p>The text with which the label of the ListItem should start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Takes the given string and tries to find a ListItem\nwhich starts with this string. The search is not case sensitive and the\nfirst found ListItem will be returned. If there could not be found any\nqualifying list item, null will be returned.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The found ListItem or null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"getChildrenContainer"}},{type:"method",attributes:{"name":"getEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>enableInlineFind</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSpacing","fromProperty":"spacing"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue"},children:[{type:"desc",attributes:{"text":"<p>Returns the stringified value of the list. This is a comma\nseparated string with all the values (or labels as fallback).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Value of the list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"handleKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>KeyPress event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Used to route external <code>keypress</code> events to the list\nhandling (in fact the manager of the list)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>enableInlineFind</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enableInlineFind</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>orientation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSpacing","fromProperty":"spacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spacing</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enableInlineFind</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enableInlineFind</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>orientation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSpacing","fromProperty":"spacing"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spacing</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>enableInlineFind</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSpacing","fromProperty":"spacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Comma separated list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applied new selection from a comma separated list of values (labels\nas fallback) of the list items.</p>"}}]},{type:"method",attributes:{"name":"toggleEnableInlineFind","fromProperty":"enableInlineFind"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enableInlineFind</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableInlineFind}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"list\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.AbstractScrollArea"}},{type:"property",attributes:{"check":"Boolean","defaultValue":"true","name":"enableInlineFind","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Controls whether the inline-find feature is activated or not</p>"}}]},{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"event":"changeName","allowNull":"true","check":"String","name":"name","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The name of the list. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"apply":"_applyOrientation","defaultValue":"\"vertical\"","name":"orientation","possibleValues":"\"horizontal\",\"vertical\"","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether the list should be rendered horizontal or vertical.</p>"}}]},{type:"property",attributes:{"name":"spacing","defaultValue":"0","propertyType":"new","apply":"_applySpacing","check":"Integer","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>Spacing between the items</p>"}}]}]}]}