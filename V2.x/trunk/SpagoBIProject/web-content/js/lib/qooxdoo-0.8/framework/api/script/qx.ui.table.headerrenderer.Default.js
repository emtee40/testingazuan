{type:"class",attributes:{"name":"Default","interfaces":"qx.ui.table.IHeaderRenderer","superClass":"qx.core.Object","childClasses":"qx.ui.table.headerrenderer.Icon","fullName":"qx.ui.table.headerrenderer.Default","type":"class","packageName":"qx.ui.table.headerrenderer"},children:[{type:"desc",attributes:{"text":"<p>The default header cell renderer.</p>"}},{type:"constants",children:[{type:"constant",attributes:{"type":"String","name":"STATE_SORTED_ASCENDING","value":"sortedAscending"},children:[{type:"desc",attributes:{"text":"<p>The state which will be set when sorting is ascending.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"constant",attributes:{"type":"String","name":"STATE_SORTED","value":"sorted"},children:[{type:"desc",attributes:{"text":"<p>The state which will be set for header cells of sorted columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.ui.table.IHeaderRenderer","name":"createHeaderCell"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"name":"getToolTip","fromProperty":"toolTip"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>toolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>toolTip</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initToolTip","fromProperty":"toolTip"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>toolTip</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>toolTip</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetToolTip","fromProperty":"toolTip"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>toolTip</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setToolTip","fromProperty":"toolTip"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>toolTip</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>toolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.IHeaderRenderer","name":"updateHeaderCell"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}},{type:"param",attributes:{"name":"cellWidget"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"toolTip","check":"String"},children:[{type:"desc",attributes:{"text":"<p>ToolTip to show if the mouse hovers of the icon</p>"}}]}]}]}