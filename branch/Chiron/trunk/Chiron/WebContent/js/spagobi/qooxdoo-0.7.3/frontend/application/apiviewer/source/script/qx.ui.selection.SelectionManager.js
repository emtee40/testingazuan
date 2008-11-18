{type:"class",attributes:{"name":"SelectionManager","hasWarning":"true","packageName":"qx.ui.selection","superClass":"qx.core.Target","childClasses":"qx.ui.listview.SelectionManager,qx.ui.selection.DomSelectionManager,qx.ui.tree.SelectionManager","fullName":"qx.ui.selection.SelectionManager","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This class represents a selection and manage incoming events for widgets\nwhich need selection support.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vBoundedWidget"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeAnchorItem"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #anchorItem}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeLeadItem"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #leadItem}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Fired on a selection change. The &#8220;data&#8221; proeprty is set to an array of\nselected items as returned by {@link #getSelectedItems}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.selection.SelectionManager#anchorItem","name":"_applyAnchorItem"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.selection.SelectionManager#leadItem","name":"_applyLeadItem"},children:[
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
    {type:"method",attributes:{"access":"protected","name":"_deselectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Sub method for deselectAll. Handles the real work\n to deselect all items.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_deselectItemRange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem1"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vItem2"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Internal method for deselection of ranges.</p>\n\n<p>#param vItem1[qx.ui.core.Widget]: Start item\n#param vItem2[qx.ui.core.Widget]: Stop item</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem1</code> is not documented.","column":"26","line":"978"}},
        {type:"error",attributes:{"msg":"Parameter <code>vItem2</code> is not documented.","column":"26","line":"978"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_dispatchChange"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1525"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getChangeValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1555"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getFirst"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"219"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getLast"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"230"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_hasChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"sOldValue"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>sOldValue</code> is not documented.","column":"19","line":"1544"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"1544"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_ondragup"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"17","line":"1074"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"1074"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onmouseevent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"oItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"e"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Event"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bOver"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Internal handler for all mouse events bound to this manager.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>oItem</code> is not documented.","column":"21","line":"1157"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"1157"}},
        {type:"error",attributes:{"msg":"Parameter <code>bOver</code> is not documented.","column":"21","line":"1157"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_selectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Sub method for selectAll. Handles the real work\n to select all items.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_selectItemRange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem1"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vItem2"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vDeselect"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sub method for selectItemRange. Handles the real work\nto select a range of items.</p>\n\n<p>#param vItem1[qx.ui.core.Widget]: Start item\n#param vItem2[qx.ui.core.Widget]: Stop item\n#param vDelect[Boolean]: Deselect currently selected items first?</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem1</code> is not documented.","column":"24","line":"927"}},
        {type:"error",attributes:{"msg":"Parameter <code>vItem2</code> is not documented.","column":"24","line":"927"}},
        {type:"error",attributes:{"msg":"Parameter <code>vDeselect</code> is not documented.","column":"24","line":"927"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"deselectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Deselect all items.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getAbove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"16","line":"1667"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"1667"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAnchorItem","fromProperty":"anchorItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>anchorItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anchorItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>anchorItem</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBoundedWidget","fromProperty":"boundedWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>boundedWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #boundedWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>boundedWidget</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>canDeselect</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>canDeselect</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"15","line":"1597"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"1597"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDragSelection","fromProperty":"dragSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dragSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dragSelection</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getEnd"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"1585"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFireChange","fromProperty":"fireChange"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>fireChange</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>fireChange</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getFirst"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"241"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getHome"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"1574"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemEnabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"22","line":"478"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"478"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemHashCode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"23","line":"397"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"397"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"21","line":"466"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"466"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"19","line":"430"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"430"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItems"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"273"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"23","line":"560"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"560"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"18","line":"442"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"442"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemToSelect"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vKeyboardEvent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vKeyboardEvent</code> is not documented.","column":"23","line":"1467"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1467"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getItemWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"20","line":"454"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"454"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLast"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"257"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLeadItem","fromProperty":"leadItem"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>leadItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #leadItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>leadItem</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"15","line":"1631"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"1631"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>multiColumnSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>multiColumnSupport</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>multiSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>multiSelection</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNext"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"15","line":"309"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"309"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNextSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"22","line":"285"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"285"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getPageDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Jump a &#8220;page&#8221; down.</p>\n\n<p>#param vItem[qx.ui.core.Widget]: Relative to this widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"19","line":"1765"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getPageUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Jump a &#8220;page&#8221; up.</p>\n\n<p>#param vItem[qx.ui.core.Widget]: Relative to this widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"17","line":"1703"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getPrevious"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"19","line":"335"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"335"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getPreviousSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"26","line":"297"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"297"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"16","line":"1648"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"1648"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getSelectedItem"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"672"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectedItems"},children:[
      {type:"desc",attributes:{"text":"<p>Get the selected items (objects)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getUnder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"16","line":"1681"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"1681"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"13","line":"1614"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"1614"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleClick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"19","line":"1134"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"19","line":"1134"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"1134"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleDblClick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"22","line":"1145"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"1145"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"1145"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleKeyDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vDomEvent</code> is not documented.","column":"21","line":"1334"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"1334"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleKeyPress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vDomEvent"},children:[
          {type:"desc",attributes:{"text":"<p>event object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Handles key event to perform selection and navigation</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleMouseDown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"23","line":"1025"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"23","line":"1025"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1025"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleMouseOver"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"oItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>oItem</code> is not documented.","column":"23","line":"1116"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"23","line":"1116"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"1116"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"handleMouseUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"21","line":"1090"}},
        {type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"1090"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"1090"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAnchorItem","fromProperty":"anchorItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>anchorItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>anchorItem</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #anchorItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBoundedWidget","fromProperty":"boundedWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>boundedWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>boundedWidget</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #boundedWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>canDeselect</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>canDeselect</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDragSelection","fromProperty":"dragSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dragSelection</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dragSelection</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFireChange","fromProperty":"fireChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>fireChange</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>fireChange</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLeadItem","fromProperty":"leadItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>leadItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>leadItem</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #leadItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>multiColumnSupport</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>multiColumnSupport</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>multiSelection</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>multiSelection</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isBefore"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem1"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vItem2"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem1</code> is not documented.","column":"16","line":"362"}},
        {type:"error",attributes:{"msg":"Parameter <code>vItem2</code> is not documented.","column":"16","line":"362"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"362"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>canDeselect</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isDragSelection","fromProperty":"dragSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>dragSelection</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isEqual"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem1"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vItem2"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem1</code> is not documented.","column":"15","line":"377"}},
        {type:"error",attributes:{"msg":"Parameter <code>vItem2</code> is not documented.","column":"15","line":"377"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"377"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isFireChange","fromProperty":"fireChange"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>fireChange</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>multiColumnSupport</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>multiSelection</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"renderItemAnchorState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIsAnchor"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"29","line":"517"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIsAnchor</code> is not documented.","column":"29","line":"517"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"517"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"renderItemLeadState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIsLead"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"27","line":"535"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIsLead</code> is not documented.","column":"27","line":"535"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"535"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"renderItemSelectionState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIsSelected"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"32","line":"499"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIsSelected</code> is not documented.","column":"32","line":"499"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"499"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAnchorItem","fromProperty":"anchorItem"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>anchorItem</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #anchorItem}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBoundedWidget","fromProperty":"boundedWidget"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>boundedWidget</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #boundedWidget}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>canDeselect</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDragSelection","fromProperty":"dragSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dragSelection</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFireChange","fromProperty":"fireChange"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>fireChange</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLeadItem","fromProperty":"leadItem"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>leadItem</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #leadItem}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>multiColumnSupport</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>multiSelection</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"scrollItemIntoView"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vTopLeft"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"26","line":"418"}},
        {type:"error",attributes:{"msg":"Parameter <code>vTopLeft</code> is not documented.","column":"26","line":"418"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"418"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"selectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Select all items.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"selectItemRange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem1"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vItem2"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Select a range of items.</p>\n\n<p>#param vItem1[qx.ui.core.Widget]: Start item\n#param vItem2[qx.ui.core.Widget]: Stop item</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem1</code> is not documented.","column":"23","line":"892"}},
        {type:"error",attributes:{"msg":"Parameter <code>vItem2</code> is not documented.","column":"23","line":"892"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAnchorItem","fromProperty":"anchorItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>anchorItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>anchorItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anchorItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBoundedWidget","fromProperty":"boundedWidget"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>boundedWidget</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>boundedWidget</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #boundedWidget}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>canDeselect</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>canDeselect</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDragSelection","fromProperty":"dragSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dragSelection</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dragSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFireChange","fromProperty":"fireChange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>fireChange</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>fireChange</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setItemSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vSelected"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Make a single item selected / not selected</p>\n\n<p>#param vItem[qx.ui.core.Widget]: Item which should be selected / not selected\n#param vSelected[Boolean]: Should this item be selected?</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"23","line":"576"}},
        {type:"error",attributes:{"msg":"Parameter <code>vSelected</code> is not documented.","column":"23","line":"576"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLeadItem","fromProperty":"leadItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>leadItem</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>leadItem</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #leadItem}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>multiColumnSupport</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>multiColumnSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>multiSelection</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>multiSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setSelectedItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItem"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"23","line":"733"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"733"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setSelectedItems"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vItems"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Select given items</p>\n\n<p>#param vItems[Array of Widgets]: Items to select</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vItems</code> is not documented.","column":"24","line":"686"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleCanDeselect","fromProperty":"canDeselect"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>canDeselect</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canDeselect}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleDragSelection","fromProperty":"dragSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>dragSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dragSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleFireChange","fromProperty":"fireChange"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>fireChange</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #fireChange}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleMultiColumnSupport","fromProperty":"multiColumnSupport"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>multiColumnSupport</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiColumnSupport}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleMultiSelection","fromProperty":"multiSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>multiSelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #multiSelection}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"anchorItem","check":"Object","allowNull":"true","propertyType":"new","apply":"_applyAnchorItem","event":"changeAnchorItem"},children:[
      {type:"desc",attributes:{"text":"<p>The current anchor in range selections.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"boundedWidget","check":"qx.ui.core.Widget"},children:[
      {type:"desc",attributes:{"text":"<p>This contains the currently assigned widget (qx.ui.form.List, ...)</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"canDeselect","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should the user be able to select</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"dragSelection","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Enable drag selection?</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"fireChange","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should a change event be fired?</p>"}}
      ]},
    {type:"property",attributes:{"name":"leadItem","check":"Object","allowNull":"true","propertyType":"new","apply":"_applyLeadItem","event":"changeLeadItem"},children:[
      {type:"desc",attributes:{"text":"<p>The last selected item</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"multiColumnSupport","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Grid selection</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"multiSelection","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should multiple selection be allowed?</p>"}}
      ]}
    ]}
  ]}