{type:"class",attributes:{"isStatic":"true","name":"Element","packageName":"qx.xml","fullName":"qx.xml.Element","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p><span class=\"caps\">XML</span> Element</p>\n\n<p>Tested with IE6, Firefox 2.0, WebKit/Safari 3.0 and Opera 9</p>\n\n<p><a href=\"http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/81f3de54–3b79–46dc-8e01–73ca2d94cdb5.asp\">http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/81f3de54&#8211;3b79&#8211;46dc-8e01&#8211;73ca2d94cdb5.asp</a>\n<a href=\"http://developer.mozilla.org/en/docs/Parsing_and_serializing_XML\">http://developer.mozilla.org/en/docs/Parsing_and_serializing_XML</a></p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getElementsByTagNameNS"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>the element from where the search should start.\n      Note that only the descendants of this element are included in the search, not the node itself.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"Document"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"namespaceURI"},children:[
          {type:"desc",attributes:{"text":"<p>is the namespace <span class=\"caps\">URI</span> of elements to look for . For example, if you need to look\n      for <span class=\"caps\">XHTML</span> elements, use the <span class=\"caps\">XHTML</span> namespace <span class=\"caps\">URI</span>, <tt><a href=\"http://www.w3.org/1999/xhtml\">http://www.w3.org/1999/xhtml</a></tt>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"tagname"},children:[
          {type:"desc",attributes:{"text":"<p>the tagname to look for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a list of elements with the given tag name belonging to the given namespace (<a href=\"http://developer.mozilla.org/en/docs/DOM:element.getElementsByTagNameNS\">http://developer.mozilla.org/en/docs/DOM:element.getElementsByTagNameNS</a>).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a list of found elements in the order they appear in the tree.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getSingleNodeText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>root element for the search</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"Document"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"query"},children:[
          {type:"desc",attributes:{"text":"<p>XPath query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Selects the first XmlNode that matches the XPath expression and returns the text content of the element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the joined text content of the found element or null if not appropriate.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>the element from where the search should start.\n    If the element has subnodes the text contents are recursively retreived and joined.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the text content of an element where the element may be of node type NODE_ELEMENT, NODE_ATTRIBUTE or NODE_TEXT</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the joined text content of the given element or null if not appropriate.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"selectNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>root element for the search</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"Document"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"query"},children:[
          {type:"desc",attributes:{"text":"<p>XPath query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Selects a list of nodes matching the XPath expression.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>List of matching elements</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"selectSingleNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>root element for the search</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"Document"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"query"},children:[
          {type:"desc",attributes:{"text":"<p>XPath query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Selects the first XmlNode that matches the XPath expression.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>first matching element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"serialize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>The root of the subtree to be serialized. This could be any node, including a Document.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}},
            {type:"entry",attributes:{"type":"Document"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The subtree rooted by the specified element or document is serialized to a string.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}