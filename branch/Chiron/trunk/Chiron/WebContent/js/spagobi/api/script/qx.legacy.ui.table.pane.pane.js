{type:"class",attributes:{"name":"Pane","packageName":"qx.legacy.ui.table.pane","superClass":"qx.legacy.ui.basic.Terminator","fullName":"qx.legacy.ui.table.pane.Pane","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The table pane that shows a certain section from a table. This class handles\nthe display of the data part of a table and is therefore the base for virtual\nscrolling.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.legacy.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"paneScroller"},children:[{type:"desc",attributes:{"text":"<p>the TablePaneScroller the header belongs to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.table.pane.Scroller"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__rowCacheClear"},children:[{type:"desc",attributes:{"text":"<p>Clear the row cache</p>"}}]},{type:"method",attributes:{"access":"private","name":"__rowCacheGet"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>Row index to get</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"selected"},children:[{type:"desc",attributes:{"text":"<p>Whether the row is currently selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"focused"},children:[{type:"desc",attributes:{"text":"<p>Whether the row is currently focused</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a line from the row cache.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The cached row or null if a row with the given\n    index is not cached.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__rowCacheSet"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>Row index to set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"rowString"},children:[{type:"desc",attributes:{"text":"<p>computed row string to cache</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"selected"},children:[{type:"desc",attributes:{"text":"<p>Whether the row is currently selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"focused"},children:[{type:"desc",attributes:{"text":"<p>Whether the row is currently focused</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a line to the row cache.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.core.Widget","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_afterAppear"}},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.table.pane.Pane#firstVisibleRow","name":"_applyFirstVisibleRow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>firstVisibleRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFirstVisibleRow}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.table.pane.Pane#maxCacheLines","name":"_applyMaxCacheLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxCacheLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxCacheLines}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.table.pane.Pane#visibleRowCount","name":"_applyVisibleRowCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>visibleRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyVisibleRowCount}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_getRowsHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"},children:[{type:"desc",attributes:{"text":"<p>Index of the first row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"rowCount"},children:[{type:"desc",attributes:{"text":"<p>Number of rows</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the <span class=\"caps\">HTML</span> table fragment for the given row range.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">HTML</span> table fragment for the given row range.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onColOrderChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called the column order has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onColWidthChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the width of a column has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onFocusChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the table gets or looses the focus.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onPaneModelChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the pane model has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onSelectionChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the selection has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onTableModelDataChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the table model data has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onTableModelMetaDataChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the table model meta data has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_scrollContent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowOffset"},children:[{type:"desc",attributes:{"text":"<p>Number of lines to scroll. Scrolling up is\n    represented by a negative offset.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the pane&#8217;s contents by the given offset.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_updateAllRows"},children:[{type:"desc",attributes:{"text":"<p>Updates the content of the pane (implemented using array joins).</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_updateContent"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"completeUpdate"},children:[{type:"desc",attributes:{"text":"<p>if true a complete update is performed.\n     On a complete update all cell widgets are recreated.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"scrollOffset"},children:[{type:"desc",attributes:{"text":"<p>If set specifies how many rows to scroll.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"onlyRow"},children:[{type:"desc",attributes:{"text":"<p>if set only the specified row will be updated.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"onlySelectionOrFocusChanged"},children:[{type:"desc",attributes:{"text":"<p>if true, cell values won&#8217;t\n         be updated. Only the row background will.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Updates the content of the pane.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_updateRowStyles"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"onlyRow"},children:[{type:"desc",attributes:{"text":"<p>If this parameter is set only the row\n    with this index is updated.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>If only focus or selection changes it is sufficient to only update the\nrow styles. This method updates the row styles of all visible rows or\nof just one row.</p>"}}]},{type:"method",attributes:{"name":"getFirstVisibleRow","fromProperty":"firstVisibleRow"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>firstVisibleRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstVisibleRow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>firstVisibleRow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaxCacheLines","fromProperty":"maxCacheLines"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxCacheLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCacheLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxCacheLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPaneScroller"},children:[{type:"desc",attributes:{"text":"<p>Returns the TablePaneScroller this pane belongs to.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the TablePaneScroller.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.table.pane.Scroller"}}]}]}]},{type:"method",attributes:{"name":"getTable"},children:[{type:"desc",attributes:{"text":"<p>Returns the table this pane belongs to.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the table.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.table.Table"}}]}]}]},{type:"method",attributes:{"name":"getVisibleRowCount","fromProperty":"visibleRowCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>visibleRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibleRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>visibleRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initFirstVisibleRow","fromProperty":"firstVisibleRow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>firstVisibleRow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>firstVisibleRow</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #firstVisibleRow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxCacheLines","fromProperty":"maxCacheLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxCacheLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxCacheLines</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCacheLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initVisibleRowCount","fromProperty":"visibleRowCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>visibleRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>visibleRowCount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #visibleRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetFirstVisibleRow","fromProperty":"firstVisibleRow"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>firstVisibleRow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #firstVisibleRow}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaxCacheLines","fromProperty":"maxCacheLines"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxCacheLines</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCacheLines}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetVisibleRowCount","fromProperty":"visibleRowCount"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>visibleRowCount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #visibleRowCount}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setFirstVisibleRow","fromProperty":"firstVisibleRow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>firstVisibleRow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>firstVisibleRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstVisibleRow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setFocusedCell"},children:[{type:"params",children:[{type:"param",attributes:{"name":"col"},children:[{type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>the model index of the focused cell&#8217;s row.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"massUpdate"},children:[{type:"desc",attributes:{"text":"<p>Whether other updates are planned as well.\n         If true, no repaint will be done.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the currently focused cell.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMaxCacheLines","fromProperty":"maxCacheLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxCacheLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxCacheLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCacheLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setVisibleRowCount","fromProperty":"visibleRowCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>visibleRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>visibleRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibleRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"table-pane\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"check":"Number","apply":"_applyFirstVisibleRow","defaultValue":"0","name":"firstVisibleRow","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The index of the first row to show.</p>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyMaxCacheLines","defaultValue":"1000","name":"maxCacheLines","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Maximum number of cached rows. If the value is <code>-1</code> the cache\nsize is unlimited</p>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyVisibleRowCount","defaultValue":"0","name":"visibleRowCount","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The number of rows to show.</p>"}}]}]}]}