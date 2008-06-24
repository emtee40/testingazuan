{type:"class",attributes:{"name":"RecursiveSelectionModel","hasWarning":"true","packageName":"qx.ui.treevirtual","superClass":"qx.ui.table.selection.Model","fullName":"qx.ui.treevirtual.RecursiveSelectionModel","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A recursive selection model.</p>\n\n<p>Features: \n<ul>\n<li>One a node is selected, its child nodes are also selected.\n<li>One a node is deselected, its child nodes are also deselected.\n<li>It is flaged visually when the child nodes are partially selected (<tt>node.bSelected==&#8216;p&#8217;</tt>).\n</ul></p>\n\n<b>Implementation note</b>: it is derived from {@link qx.ui.table.selection.Model}\nalthough no functionality of this class is needed, as several Table and TreeVirtual properties\nrequire a selection model be derived from this class."}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"tree"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the selection has changed.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.table.selection.Model","name":"_addSelectionInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the first index of the selection (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"toIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the last index of the selection (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>This is called by {@link qx.ui.treevirtual.SimpleTreeDataRowRenderer#updateDataRowElement()}\nDo nothing.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.table.selection.Model","name":"_fireChangeSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Fires the &#8220;changeSelection&#8221; event to all registered listeners. If the selection model\ncurrently is in batch mode, only one event will be thrown when batch mode is ended.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_iterateSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"data"}},
        {type:"param",attributes:{"name":"nodeId"}},
        {type:"param",attributes:{"name":"iterator"}},
        {type:"param",attributes:{"name":"object"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"184"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_selectNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"}},
        {type:"param",attributes:{"name":"selected"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a interval from the current selection.</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>fromIndex</code>.","column":"18","line":"246"}},
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>toIndex</code>.","column":"18","line":"246"}},
        {type:"error",attributes:{"msg":"Parameter <code>node</code> is not documented.","column":"18","line":"246"}},
        {type:"error",attributes:{"msg":"Parameter <code>selected</code> is not documented.","column":"18","line":"246"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateParent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node whose parents must be updated.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates the selection state of parent nodes.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"clearSelection"},children:[
      {type:"desc",attributes:{"text":"<p>Clears the selection.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"getSelectedCount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the number of selected leaf items.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of selected items.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"getSelectionMode"},children:[
      {type:"desc",attributes:{"text":"<p>Compatibility with {@link qx.ui.table.selection.Model}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"isSelectedIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"index"},children:[
          {type:"desc",attributes:{"text":"<p>the index to check.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a index is selected.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the index is selected.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"isSelectionEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the selection is empty.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the selection is empty.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"iterateSelection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"iterator"},children:[
          {type:"desc",attributes:{"text":"<p>the function to call for each selected index.\n         Gets the current node as parameter.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"object"},children:[
          {type:"desc",attributes:{"text":"<p>the object to use when calling the handler.\n         (this object will be available via &#8220;this&#8221; in the iterator)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls a iterator function for each selected index.</p>\n\n<p>Usage Example:</p>\n\n<pre class=\"javascript\">\nvar selectedNodes = [];\nmySelectionModel.iterateSelection(function(node) {\n  selectedNodes.push(node));\n});\n</pre>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"removeSelectionInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the first index of the interval (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"toIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the last index of the interval (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Unselects a range</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"setSelectionInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fromIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the first index of the selection (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"toIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the last index of the selection (including).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Toggle the selection state of the selected interval.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.ui.table.selection.Model","name":"setSelectionMode"},children:[
      {type:"desc",attributes:{"text":"<p>Compatibility with {@link qx.ui.table.selection.Model}.</p>"}}
      ]}
    ]}
  ]}