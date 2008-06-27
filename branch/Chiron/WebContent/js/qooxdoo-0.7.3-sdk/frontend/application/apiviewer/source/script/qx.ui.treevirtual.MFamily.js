{type:"class",attributes:{"packageName":"qx.ui.treevirtual","fullName":"qx.ui.treevirtual.MFamily","type":"mixin","name":"MFamily"},children:[
  {type:"methods",children:[
    {type:"method",attributes:{"isMixin":"true","name":"familyGetFirstChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node for which the first child is desired.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the first child of the specified node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the first child.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"familyGetLastChild"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node for which the last child is desired.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the last child of the specified node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the last child.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"familyGetNextSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node for which the next sibling is desired.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the next sibling of the specified node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the next sibling.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isMixin":"true","name":"familyGetPrevSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nodeReference"},children:[
          {type:"desc",attributes:{"text":"<p>The node for which the previous sibling is desired.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}},
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the previous sibling of the specified node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The node id of the previous sibling.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]}
    ]}
  ]}