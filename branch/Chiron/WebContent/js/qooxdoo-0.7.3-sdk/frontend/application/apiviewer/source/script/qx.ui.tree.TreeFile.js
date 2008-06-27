{type:"class",attributes:{"name":"TreeFile","hasWarning":"true","packageName":"qx.ui.tree","superClass":"qx.ui.tree.AbstractTreeElement","fullName":"qx.ui.tree.TreeFile","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>qx.ui.tree.TreeFile objects are terminal tree rows (i.e. no\nsub-trees)</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"labelOrTreeRowStructure"},children:[
          {type:"desc",attributes:{"text":"<p>Either the structure\n    defining a tree row or the label text to display for the tree file.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}},
            {type:"entry",attributes:{"type":"TreeRowStructure"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"icon"},children:[
          {type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display for the tree file</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"iconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>the image <span class=\"caps\">URL</span> to display when the tree file\n    is selected</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The TreeFile constructor understands two signatures. One compatible with the\noriginal qooxdoo tree and one compatible with the treefullcontrol widget.\nIf the first parameter if of type {@link TreeRowStructure} the tree\nfile is rendered using this structure. Otherwhise the all three\narguments are evaluated.</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_updateIndent"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"114"}}
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
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>vIsLastColumn</code>.","column":"23","line":"90"}},
        {type:"error",attributes:{"msg":"Parameter <code>vColumn</code> is not documented.","column":"23","line":"90"}},
        {type:"error",attributes:{"msg":"Parameter <code>vFirstColumn</code> is not documented.","column":"23","line":"90"}},
        {type:"error",attributes:{"msg":"Parameter <code>vLastColumn</code> is not documented.","column":"23","line":"90"}}
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
      {type:"desc",attributes:{"text":"<p>Returns itself in an array.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>array containing itself</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]}
    ]}
  ]}