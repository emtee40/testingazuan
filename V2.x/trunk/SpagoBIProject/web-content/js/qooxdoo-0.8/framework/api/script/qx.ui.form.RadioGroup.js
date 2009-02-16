{type:"class",attributes:{"name":"RadioGroup","interfaces":"qx.ui.form.IFormElement","superClass":"qx.core.Object","fullName":"qx.ui.form.RadioGroup","type":"class","packageName":"qx.ui.form"},children:[{type:"desc",attributes:{"text":"<p>The radio group handles a collection of items from which only one item\ncan be selected. Selection another item will deselect the previously selected\nitem.</p>\n\n<p>This class is e.g. used to create radio groups or {@link qx.ui.form.RadioButton}\nor {@link qx.ui.toolbar.RadioButton} instances.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>A variable number of items, which are\n    intially added to the radio group.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#enabled","name":"_applyEnabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyEnabled}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#name","name":"_applyName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyName}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#selected","name":"_applySelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySelected}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onChangeSelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>changeSelected</code> event.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onItemChangeChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>changeChecked</code> event of every managed item.</p>"}}]},{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>A variable number of items to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add the passed items to the radio group.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getItems"},children:[{type:"desc",attributes:{"text":"<p>Get all managed items</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>All managed items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"IRadioItem","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue"},children:[{type:"desc",attributes:{"text":"<p>Get the value of the selected radio item</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The value of the selected radio item. Returns\n    <code>null</code> if no item is selected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initEnabled","fromProperty":"enabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enabled</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selected</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enabled</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The item to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove an item from the radio group</p>"}}]},{type:"method",attributes:{"name":"resetEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enabled</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selected</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"select"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The item to select</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the checked state of a given item</p>"}}]},{type:"method",attributes:{"name":"selectNext"},children:[{type:"desc",attributes:{"text":"<p>Select the item following the given item</p>"}}]},{type:"method",attributes:{"name":"selectPrevious"},children:[{type:"desc",attributes:{"text":"<p>Select the item previous the given item</p>"}}]},{type:"method",attributes:{"name":"setEnabled","fromProperty":"enabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value of the radio item to select</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Select the radio item, with the given value.</p>"}}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Boolean","apply":"_applyEnabled","propertyType":"new","name":"enabled","event":"changeEnabled"},children:[{type:"desc",attributes:{"text":"<p>Whether the radio group is enabled</p>"}}]},{type:"property",attributes:{"name":"name","check":"String","allowNull":"true","propertyType":"new","apply":"_applyName","event":"changeName"},children:[{type:"desc",attributes:{"text":"<p>The name of the radio group. Mainly used for seralization proposes.</p>"}}]},{type:"property",attributes:{"name":"selected","check":"qx.ui.form.IRadioItem","allowNull":"true","propertyType":"new","apply":"_applySelected","event":"changeSelected"},children:[{type:"desc",attributes:{"text":"<p>The currently selected item of the radio group</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"wrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the selection should wrap arond. This means that the successor of\nthe last item is the first item.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeEnabled"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #enabled}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeSelected"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #selected}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired when the value was modified (after selection change)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}