{type:"class",attributes:{"name":"TreeFolder","hasWarning":"true","packageName":"qx.ui.tree","superClass":"qx.ui.tree.AbstractTreeElement","childClasses":"qx.ui.tree.Tree","fullName":"qx.ui.tree.TreeFolder","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>qx.ui.tree.TreeFolder objects are tree rows which may contain\nsub-trees</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"tree-folder-label"}},
    {type:"appearance",attributes:{"type":"qx.ui.layout.HorizontalBoxLayout","name":"tree-folder"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Image","name":"tree-folder-icon"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"labelOrTreeRowStructure"},children:[
          {type:"desc",attributes:{"text":"<p>Either the structure\n    defining a tree row or the label text to display for the tree folder.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}},
            {type:"entry",attributes:{"type":"TreeRowStructure"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"icon"},children:[
          {type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display for the tree folder</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"iconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display when the tree folder\n    is selected</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The TreeFolder constructor understands two signatures. One compatible with the\noriginal qooxdoo tree and one compatible with the treefullcontrol widget.\nIf the first parameter if of type {@link TreeRowStructure} the tree\nfolder is rendered using this structure. Otherwhise the all three\narguments are evaluated.</p>"}}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeOpen"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #open}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"treeClose"},children:[
      {type:"desc",attributes:{"text":"<p>Called when a tree folder is closed. The data property\ncontains the {@link TreeFolder} being closed.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"treeOpenWhileEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Called when a tree folder without content is opened. The data property\ncontains the opened {@link TreeFolder}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"treeOpenWithContent"},children:[
      {type:"desc",attributes:{"text":"<p>Called when a tree folder with content is opened. The data property\ncontains the opened {@link TreeFolder}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__restoreSelectionAfterRemove"},children:[
      {type:"desc",attributes:{"text":"<p>Restore the tree selection. If the old selection has been removed from\nthe tree, the root node will be selected.</p>"}}
      ]},
    {type:"method",attributes:{"access":"private","name":"__saveSelectionBeforeRemove"},children:[
      {type:"desc",attributes:{"text":"<p>Store the current selection and select the root node.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.TreeFolder#alwaysShowPlusMinusSymbol","name":"_applyAlwaysShowPlusMinusSymbol"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.TreeFolder#open","name":"_applyOpen"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_createChildrenStructure"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"317"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleChildMove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vRelationIndex"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vRelationChild"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"24","line":"374"}},
        {type:"error",attributes:{"msg":"Parameter <code>vRelationIndex</code> is not documented.","column":"24","line":"374"}},
        {type:"error",attributes:{"msg":"Parameter <code>vRelationChild</code> is not documented.","column":"24","line":"374"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"374"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_ondblclick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"947"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"947"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"_onmousedown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"20","line":"872"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"872"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"914"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"914"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_openCallback"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"295"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_updateIndent"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"1044"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_updateLastColumn"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"844"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"addAfterToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>new tree element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vAfter"},children:[
          {type:"desc",attributes:{"text":"<p>existing child of folder</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the new tree element vChild to the current folder, after the\nexisting child vAfter.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAtBeginToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>new tree element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the new tree element vChild at the beginning of the current folder.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAtEndToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>new tree element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the new tree element vChild at the end of the current folder.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addAtToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>new tree element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIndex"},children:[
          {type:"desc",attributes:{"text":"<p>position to insert into</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the new tree element vChild to the current folder, at position\nvIndex.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addBeforeToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vChild"},children:[
          {type:"desc",attributes:{"text":"<p>new tree element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vBefore"},children:[
          {type:"desc",attributes:{"text":"<p>existing child of folder</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the new tree element vChild to the current folder, before the\nexisting child vBefore.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addToFolder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"},children:[
          {type:"desc",attributes:{"text":"<p>variable number of tree nodes to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"AbstractTreeElement"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds the passed tree elements to the current folder.</p>"}}
      ]},
    {type:"method",attributes:{"name":"close"},children:[
      {type:"desc",attributes:{"text":"<p>Closes the current folder.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"destroyContent"},children:[
      {type:"desc",attributes:{"text":"<p>deselects, disconnects, removes and disposes the\n   content of the folder and its subfolders.</p>\n\n<p>the current items subitems (and the subitems of each\nsubitem) are destroyed going top down the TreeFolder\nhierarchy. The current item is left as is.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>alwaysShowPlusMinusSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>alwaysShowPlusMinusSymbol</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getContainerObject"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the container of the current tree element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the widget container</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.VerticalBoxLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstVisibleChildOfFolder"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the first visible child of the folder.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the first visible child element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"AbstractTreeElement"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHorizontalLayout"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the HorizontalBoxLayout of the folder.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the horizontal layout widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.HorizontalBoxLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getIndentSymbol"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vUseTreeLines"},children:[
          {type:"desc",attributes:{"text":"<p>whether tree lines are used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vColumn"}},
        {type:"param",attributes:{"name":"vFirstColumn"}},
        {type:"param",attributes:{"name":"vLastColumn"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a string indicating the symbol used to indent the current item,\nor null.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>vIsLastColumn</code>.","column":"23","line":"975"}},
        {type:"error",attributes:{"msg":"Parameter <code>vColumn</code> is not documented.","column":"23","line":"975"}},
        {type:"error",attributes:{"msg":"Parameter <code>vFirstColumn</code> is not documented.","column":"23","line":"975"}},
        {type:"error",attributes:{"msg":"Parameter <code>vLastColumn</code> is not documented.","column":"23","line":"975"}}
        ]},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>&#8220;end&#8221;, &#8220;cross&#8221;, &#8220;line&#8221; or null</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getItems"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"false","name":"recursive"},children:[
          {type:"desc",attributes:{"text":"<p>whether children of subfolder should be\nincluded</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"true","name":"invisible"},children:[
          {type:"desc",attributes:{"text":"<p>whether invisible children should be included</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns all children of the folder.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>list of children</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"AbstractTreeElement","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLastVisibleChildOfFolder"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the last visible child of the folder.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the last visible child element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"AbstractTreeElement"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>open</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasContent"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the folder has content, i.e. child folder or files.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the folder has content</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>alwaysShowPlusMinusSymbol</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>alwaysShowPlusMinusSymbol</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpen","fromProperty":"open"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>open</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>open</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>alwaysShowPlusMinusSymbol</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>open</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Opens the current folder.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"varargs"}}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"removeAll"}},
    {type:"method",attributes:{"docFrom":"qx.ui.core.Parent","overriddenFrom":"qx.ui.core.Parent","name":"removeAt"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIndex"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>alwaysShowPlusMinusSymbol</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>open</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>alwaysShowPlusMinusSymbol</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>alwaysShowPlusMinusSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpen","fromProperty":"open"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>open</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggle"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles between open and closed status of the folder.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAlwaysShowPlusMinusSymbol","fromProperty":"alwaysShowPlusMinusSymbol"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>alwaysShowPlusMinusSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowPlusMinusSymbol}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleOpen","fromProperty":"open"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>open</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #open}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"apply":"_applyAlwaysShowPlusMinusSymbol","defaultValue":"false","propertyType":"new","name":"alwaysShowPlusMinusSymbol","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether always to display the open status of the folder with a\nplus or minus symbol.</p>"}}
      ]},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.tree.AbstractTreeElement","defaultValue":"\"tree-folder\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.tree.AbstractTreeElement"}},
    {type:"property",attributes:{"defaultValue":"\"icon/16/places/folder.png\"","propertyType":"new","overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"icon","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Controls the default icon for the element.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"icon/16/status/folder-open.png\"","propertyType":"new","overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"iconSelected","refine":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Controls the icon for the element when it is selected.</p>"}}
      ]},
    {type:"property",attributes:{"name":"open","defaultValue":"false","event":"changeOpen","propertyType":"new","apply":"_applyOpen","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the folder is open.</p>"}}
      ]}
    ]}
  ]}