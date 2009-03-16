{type:"class",attributes:{"name":"ComboBox","hasWarning":"true","interfaces":"qx.legacy.ui.table.ICellEditorFactory","superClass":"qx.core.Object","fullName":"qx.legacy.ui.table.celleditor.ComboBox","type":"class","packageName":"qx.legacy.ui.table.celleditor"},children:[{type:"desc",attributes:{"text":"<p>A cell editor factory creating combo boxes.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ICellEditorFactory","name":"createCellEditor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getCellEditorValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellEditor"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>retrieves value from TextField (editable combobox) or\nselected ListItem (non-editable combobox) and validates value</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>cellEditor</code> is not documented.","column":"20","line":"162"}}]}]},{type:"method",attributes:{"name":"getEditable","fromProperty":"editable"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>editable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getListData","fromProperty":"listData"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>listData</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #listData}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>listData</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValidationFunction","fromProperty":"validationFunction"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>validationFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initEditable","fromProperty":"editable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>editable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>editable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initListData","fromProperty":"listData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>listData</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>listData</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #listData}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValidationFunction","fromProperty":"validationFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>validationFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isEditable","fromProperty":"editable"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>editable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetEditable","fromProperty":"editable"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>editable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetListData","fromProperty":"listData"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>listData</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #listData}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValidationFunction","fromProperty":"validationFunction"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>validationFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setEditable","fromProperty":"editable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>editable</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setListData","fromProperty":"listData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>listData</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>listData</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #listData}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValidationFunction","fromProperty":"validationFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>validationFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleEditable","fromProperty":"editable"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"editable","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>whether combobox should be editable</p>"}}]},{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"listData","check":"Array"},children:[{type:"desc",attributes:{"text":"<p>array of data to construct ListItem widgets with</p>"}}]},{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"validationFunction","check":"Function"},children:[{type:"desc",attributes:{"text":"<p>function that validates the result\nthe function will be called with the new value and the old value and is\nsupposed to return the value that is set as the table value.</p>"}}]}]}]}