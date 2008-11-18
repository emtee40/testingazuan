{type:"class",attributes:{"name":"Tree","hasWarning":"true","packageName":"qx.ui.tree","superClass":"qx.ui.tree.TreeFolder","childClasses":"spagobi.app.view.Tree,spagobi.ui.Tree","fullName":"qx.ui.tree.Tree","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The Tree class implements a tree widget, with collapsable and expandable\ncontainer nodes and terminal leaf nodes. You instantiate a Tree object as the\nroot of the tree, then add {@link TreeFolder} (node) and {@link TreeFile}\n(leaf) objects as needed, using the (inherited) <code>add()</code> method.</p>\n\n<p>Beware though that the <b>tree structure</b> you are building is internally\naugmented with other widgets to achieve the desired look and feel. So if you\nlater try to navigate the tree e.g. by using the\n<code>getChildren()</code> method, you get more (and type-wise different)\nchildren than you initially added. If this is inconvenient you may want to\nmaintain a tree model alongside the tree widget in your application.</p>\n\n<p>The handling of <b>selections</b> within a tree is somewhat distributed\nbetween the root Tree object and the attached {@link\nqx.ui.tree.SelectionManager TreeSelectionManager}. To get the\ncurrently selected element of a tree use the Tree{@link #getSelectedElement\ngetSelectedElement} method and Tree{@link #setSelectedElement\nsetSelectedElement} to set it. The TreeSelectionManager handles more\ncoars-grained issues like providing selectAll()/deselectAll() methods.</p>"}},{type:"appearances",children:[{type:"appearance",attributes:{"type":"qx.ui.basic.Image","name":"tree-icon"}},{type:"appearance",attributes:{"type":"qx.ui.layout.HorizontalBoxLayout","name":"tree"}},{type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"tree-label"}}]},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"labelOrTreeRowStructure"},children:[{type:"desc",attributes:{"text":"<p>Either the structure\n    defining a tree row or the label text to display for the tree.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"TreeRowStructure"}}]}]},{type:"param",attributes:{"name":"icon"},children:[{type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display for the tree</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"iconSelected"},children:[{type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display when the tree\n    is selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>The tree constructor understands two signatures. One compatible with the\noriginal qooxdoo tree and one compatible with the treefullcontrol widget.\nIf the first parameter if of type {@link TreeRowStructure} the tree\nelement is rendered using this structure. Otherwhise the all three\narguments are evaluated.</p>"}}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"isOpenTreeFolder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vObject"},children:[{type:"desc",attributes:{"text":"<p>an object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns whether vObject is a TreeFolder and is open and\nhas content.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"isTreeFolder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vObject"},children:[{type:"desc",attributes:{"text":"<p>an object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns whether the passed object vObject is a TreeFolder.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.Tree#excludeSpecificTreeLines","name":"_applyExcludeSpecificTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.Tree#hideNode","name":"_applyHideNode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.Tree#rootOpenClose","name":"_applyRootOpenClose"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.tree.Tree#useTreeLines","name":"_applyUseTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeydown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"18","line":"591"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"591"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeypress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}},{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"605"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"605"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onkeyup"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"16","line":"706"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"706"}}]}]},{type:"method",attributes:{"name":"addChildToTreeQueue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"desc",attributes:{"text":"<p>child to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds vChild to the tree queue.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"flushTreeQueue"},children:[{type:"desc",attributes:{"text":"<p>Flushes the tree queue.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"flushWidgetQueue"},children:[{type:"desc",attributes:{"text":"<p>Flushes the tree queue.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getExcludeSpecificTreeLines","fromProperty":"excludeSpecificTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>excludeSpecificTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeSpecificTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>excludeSpecificTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"getExcludeSpecificTreeLines"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"514"}}]}]},{type:"method",attributes:{"name":"getFirstTreeChild"},children:[{type:"desc",attributes:{"text":"<p>Returns itself.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>itself</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}}]}]}]},{type:"method",attributes:{"name":"getHideNode","fromProperty":"hideNode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>hideNode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>hideNode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"getHierarchy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vArr"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vArr</code> is not documented.","column":"20","line":"781"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"781"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.tree.TreeFolder","name":"getIndentSymbol"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vUseTreeLines"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vColumn"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vLastColumn"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vUseTreeLines</code> is not documented.","column":"23","line":"800"}},{type:"error",attributes:{"msg":"Parameter <code>vColumn</code> is not documented.","column":"23","line":"800"}},{type:"error",attributes:{"msg":"Parameter <code>vLastColumn</code> is not documented.","column":"23","line":"800"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"800"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.ui.tree.TreeFolder","name":"getItems"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"recursive"},children:[{type:"desc",attributes:{"text":"<p>whether children of subfolder should be\nincluded</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"invisible"},children:[{type:"desc",attributes:{"text":"<p>whether invisible children should be included</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns all children of the folder.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of children</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement","dimensions":"1"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"getLastTreeChild"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"730"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"getLevel"},children:[{type:"desc",attributes:{"text":"<p>Always returns 0 since a Tree instance is always the root of a tree, and\ntherefore is on level 0.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns 0</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getManager"},children:[{type:"desc",attributes:{"text":"<p>Returns the selection manager for this tree. The selection manager is\nmanaging the whole tree, not just the root Tree element or some part of\nit.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the selection manager of the tree.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"SelectionManager"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"getParentFolder"},children:[{type:"desc",attributes:{"text":"<p>Always returns null since a Tree instance is always the root of a tree,\nand therefore has no parent.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.tree.TreeFolder"}}]}]}]},{type:"method",attributes:{"name":"getRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>rootOpenClose</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>rootOpenClose</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelectedElement"},children:[{type:"desc",attributes:{"text":"<p>Returns the currently selected element within the tree. This is a\ndescendant of the root tree element.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the currently selected element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.ui.tree.AbstractTreeElement","name":"getTree"},children:[{type:"desc",attributes:{"text":"<p>Returns the current tree instance, i.e. itself.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the current tree instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Tree"}}]}]}]},{type:"method",attributes:{"name":"getUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useDoubleClick</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>useDoubleClick</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"hideNode"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>better use {@link #getHideNode}.</p>"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"278"}}]}]},{type:"method",attributes:{"access":"protected","name":"initExcludeSpecificTreeLines","fromProperty":"excludeSpecificTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>excludeSpecificTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>excludeSpecificTreeLines</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeSpecificTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initHideNode","fromProperty":"hideNode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>hideNode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>hideNode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>rootOpenClose</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>rootOpenClose</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>useDoubleClick</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useDoubleClick</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useTreeLines</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isHideNode","fromProperty":"hideNode"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>hideNode</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>rootOpenClose</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useDoubleClick</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useTreeLines</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"removeChildFromTreeQueue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"desc",attributes:{"text":"<p>child to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes vChild from the tree queue.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetExcludeSpecificTreeLines","fromProperty":"excludeSpecificTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>excludeSpecificTreeLines</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeSpecificTreeLines}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetHideNode","fromProperty":"hideNode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>hideNode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>rootOpenClose</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useDoubleClick</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useTreeLines</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setExcludeSpecificTreeLines","fromProperty":"excludeSpecificTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>excludeSpecificTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>excludeSpecificTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeSpecificTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setHideNode","fromProperty":"hideNode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>hideNode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>hideNode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>rootOpenClose</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>rootOpenClose</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelectedElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vElement"},children:[{type:"desc",attributes:{"text":"<p>the tree element to be selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"AbstractTreeElement"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the selected element in the tree to vElement.</p>"}}]},{type:"method",attributes:{"name":"setUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>useDoubleClick</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useDoubleClick</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleHideNode","fromProperty":"hideNode"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>hideNode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideNode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleRootOpenClose","fromProperty":"rootOpenClose"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>rootOpenClose</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rootOpenClose}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleUseDoubleClick","fromProperty":"useDoubleClick"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useDoubleClick</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useDoubleClick}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"useDoubleClick"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>better use {@link #getUseDoubleClick}.</p>"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"260"}}]}]},{type:"method",attributes:{"hasError":"true","name":"useTreeLines"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>better use {@link #getUseTreeLines}.</p>"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"269"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyExcludeSpecificTreeLines","defaultValue":"[Unsupported item type: array]","propertyType":"new","name":"excludeSpecificTreeLines","check":"Array"},children:[{type:"desc",attributes:{"text":"<p>In specific applications, it is desirable to omit tree lines for only\n certain indentation levels.  This property provides an array wherein the\n index of the array corresponds to the indentation level, counted from left\n to right; and the value of that element, if it contains, specifically, the\n boolean value <i>true</i>, indicates that tree lines at that indentation\n level are to be omitted.  Any value of that element other than <i>true</i>,\n or if an indentation level&#8217;s index does not exist in the array, means that\n tree lines should be displayed for that indentation level.  (There are some\n minor code efficiencies that are realized if this array is empty, so after\n having set an element to <i>true</i> and desiring to reset the default\n behavior, you should &#8216;delete&#8217; the element rather than setting it to some\n value other than <i>true</i>.)</p>\n\n<p>If useTreeLines is <i>false</i>, then all tree lines are excluded and this\n property is ignored.</p>"}}]},{type:"property",attributes:{"apply":"_applyHideNode","defaultValue":"false","propertyType":"new","name":"hideNode","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Hide the root (Tree) node.  This differs from the visibility property in\n that this property hides <strong>only</strong> the current node, not the node&#8217;s children.</p>"}}]},{type:"property",attributes:{"apply":"_applyRootOpenClose","defaultValue":"false","propertyType":"new","name":"rootOpenClose","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the Root should have an open/close button.  This may also be\n used in conjunction with the hideNode property to provide for virtual root\n nodes.  In the latter case, be very sure that the virtual root nodes are\n expanded programatically, since there will be no open/close button for the\n user to open them.</p>"}}]},{type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"useDoubleClick","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Controls whether to use double clicks to open folders.</p>"}}]},{type:"property",attributes:{"apply":"_applyUseTreeLines","defaultValue":"true","propertyType":"new","name":"useTreeLines","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Controls whether to use (usually dotted) lines when a folder is opened,\nto indicate the levels of the hierarchy and the indentation.</p>"}}]}]}]}