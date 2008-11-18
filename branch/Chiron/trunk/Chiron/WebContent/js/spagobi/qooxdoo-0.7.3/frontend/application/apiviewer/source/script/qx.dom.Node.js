{type:"class",attributes:{"isStatic":"true","name":"Node","packageName":"qx.dom","fullName":"qx.dom.Node","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Basic node creation and type detection</p>"}},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"COMMENT","value":"8"}},
    {type:"constant",attributes:{"type":"Number","name":"DOCUMENT","value":"9"}},
    {type:"constant",attributes:{"type":"Number","name":"DOCUMENT_FRAGMENT","value":"11"}},
    {type:"constant",attributes:{"type":"Number","name":"NOTATION","value":"12"}},
    {type:"constant",attributes:{"type":"Number","name":"ATTRIBUTE","value":"2"}},
    {type:"constant",attributes:{"type":"Number","name":"ENTITY_REFERENCE","value":"5"}},
    {type:"constant",attributes:{"type":"Number","name":"PROCESSING_INSTRUCTION","value":"7"}},
    {type:"constant",attributes:{"type":"Number","name":"ENTITY","value":"6"}},
    {type:"constant",attributes:{"type":"Number","name":"CDATA_SECTION","value":"4"}},
    {type:"constant",attributes:{"type":"Number","name":"DOCUMENT_TYPE","value":"10"}},
    {type:"constant",attributes:{"type":"Number","name":"TEXT","value":"3"}},
    {type:"constant",attributes:{"type":"Number","name":"ELEMENT","value":"1"},children:[
      {type:"desc",attributes:{"text":"<p>Node type:</p>\n\n<ul>\n<li><span class=\"caps\">ELEMENT</span></li>\n<li><span class=\"caps\">ATTRIBUTE</span></li>\n<li><span class=\"caps\">TEXT</span></li>\n<li>CDATA_SECTION</li>\n<li>ENTITY_REFERENCE</li>\n<li><span class=\"caps\">ENTITY</span></li>\n<li>PROCESSING_INSTRUCTION</li>\n<li><span class=\"caps\">COMMENT</span></li>\n<li><span class=\"caps\">DOCUMENT</span></li>\n<li>DOCUMENT_TYPE</li>\n<li>DOCUMENT_FRAGMENT</li>\n<li><span class=\"caps\">NOTATION</span></li>\n</ul>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Map"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getBodyElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>node to inspect</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the body element. (Visual root node)</p>\n\n<p>This normally only makes sense for <span class=\"caps\">HTML</span> documents. It returns\nthe content area of the <span class=\"caps\">HTML</span> document.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>document body of the given node</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDocument"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node which should be tested</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the owner document of the given node</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The document of the given <span class=\"caps\">DOM</span> node</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Document"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDocumentElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>node to inspect</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the document element. (Logical root node)</p>\n\n<p>This is a convenience attribute that allows direct access to the child\nnode that is the root element of the document. For <span class=\"caps\">HTML</span> documents,\nthis is the element with the tagName &#8220;HTML&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>document element of the given node</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node from where the search should start.\n    If the node has subnodes the text contents are recursively retreived and joined.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the text content of an node where the node may be of node type NODE_ELEMENT, NODE_ATTRIBUTE or NODE_TEXT</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the joined text content of the given node or null if not appropriate.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWindow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>node to inspect</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the DOM2 <code>defaultView</code> (window).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the <code>defaultView</code> of the given node</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Window"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isDocument"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node which should be tested</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the given node is a <span class=\"caps\">DOM</span> document node</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the node is a document</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node which should be tested</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the given node is a <span class=\"caps\">DOM</span> element node</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the node is a <span class=\"caps\">DOM</span> element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the node which should be tested</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the given node is a <span class=\"caps\">DOM</span> text node</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the node is a <span class=\"caps\">DOM</span> element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isWindow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>the object which should be tested</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the given object is a browser window object.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the object is a window object.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}