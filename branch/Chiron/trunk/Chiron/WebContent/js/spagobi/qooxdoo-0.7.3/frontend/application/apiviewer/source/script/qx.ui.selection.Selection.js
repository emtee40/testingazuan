{type:"class",attributes:{"name":"Selection","packageName":"qx.ui.selection","superClass":"qx.core.Object","fullName":"qx.ui.selection.Selection","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Helper for qx.ui.selection.SelectionManager, contains data for selections</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"mgr"},children:[
          {type:"desc",attributes:{"text":"<p>a class which implements a getItemHashCode(item) method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"add"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>item to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add an item to the selection</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"contains"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>item to check for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the selection contains a given item</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the selection contains the item</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getChangeValue"},children:[
      {type:"desc",attributes:{"text":"<p>Get a string representation of the Selection. The return value can be used to compare selections.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>string representation of the Selection</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirst"},children:[
      {type:"desc",attributes:{"text":"<p>Return first element of the Selection</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>first item of the selection</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getItemHashCode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>the item</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compute a hash code for an item using the manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>unique hash code for the item</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the selection is empty</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the selection is empty</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>item to remove</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove an item from the selection</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"removeAll"},children:[
      {type:"desc",attributes:{"text":"<p>Remove all items from the selection</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toArray"},children:[
      {type:"desc",attributes:{"text":"<p>Convert selection to an array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>array representation of the selection</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]}
    ]}
  ]}