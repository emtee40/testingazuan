{type:"class",attributes:{"isStatic":"true","name":"Location","packageName":"qx.bom.element","fullName":"qx.bom.element.Location","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Query the location of an arbitrary <span class=\"caps\">DOM</span> element in relation to its top\nlevel body element. Works in all major browsers:</p>\n\n<ul>\n<li>Mozilla 1.5 + 2.0</li>\n<li>Internet Explorer 6.0 + 7.0 (both standard &amp; quirks mode)</li>\n<li>Opera 9.2</li>\n<li>Safari 3.0 beta</li>\n</ul>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__computeOffset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the sum of all offsets of the given element node.</p>\n\n<p>Traditionally this is a loop which goes up the whole parent tree\nand sums up all found offsets.</p>\n\n<p>But both <code>mshtml</code> and <code>gecko >= 1.9</code> support\n<code>getBoundingClientRect</code> which allows a\nmuch faster access to the offset position.</p>\n\n<p>Please note: When gecko 1.9 does not use the <code>getBoundingClientRect</code>\nimplementation, and therefor use the tranditional offset calculation\nthe gecko 1.9 fix in <code>__computeBody</code> must not be applied.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Map which contains the <code>left</code> and <code>top</code> offsets</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__computeScroll"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the scroll offset of the given element relative to the document\n<code>body</code>.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Map which contains the <code>left</code> and <code>top</code> scroll offsets</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__num"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>Style property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Queries a style property for the given element and parses it to a integer value</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Value of given style property</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__style"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>Style property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Queries a style property for the given element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Value of given style property</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"get"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"mode"},children:[
          {type:"desc",attributes:{"text":"<p>A supported option. See comment above.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the location of the given element in context of\nthe document dimenions.</p>\n\n<p>Supported modes:</p>\n\n<ul>\n<li><code>margin</code>: Calculate from the margin box of the element (bigger than the visual appearance: including margins of given element)</li>\n<li><code>box</code>: Calculates the offset box of the element (default, uses the same size as visible)</li>\n<li><code>border</code>: Calculate the border box (useful to align to border edges of two elements).</li>\n<li><code>scroll</code>: Calculate the scroll box (relevant for absolute positioned content).</li>\n<li><code>padding</code>: Calculate the padding box (relevant for static/relative positioned content).</li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns a map with <code>left</code>, <code>top</code>,\n  <code>right</code> and <code>bottom</code> which contains the distance\n  of the element relative to the document.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"mode"},children:[
          {type:"desc",attributes:{"text":"<p>A supported option. See comment above.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the location of the given element in context of\nthe document dimenions.For supported modes please\nhave a look at the {@see #get} method.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The bottom distance\n  of the element relative to the document.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"mode"},children:[
          {type:"desc",attributes:{"text":"<p>A supported option. See comment above.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the location of the given element in context of\nthe document dimensions. For supported modes please\nhave a look at the {@see #get} method.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The left distance\n  of the element relative to the document.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getRelative"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem1"},children:[
          {type:"desc",attributes:{"text":"<p>First element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"elem2"},children:[
          {type:"desc",attributes:{"text":"<p>Second element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"mode1"},children:[
          {type:"desc",attributes:{"text":"<p>Mode for first element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"mode2"},children:[
          {type:"desc",attributes:{"text":"<p>Mode for second element</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the distance between two <span class=\"caps\">DOM</span> elements. For supported modes please\nhave a look at the {@see #get} method.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns a map with <code>left</code> and <code>top</code>\n  which contains the distance of the elements from each other.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"mode"},children:[
          {type:"desc",attributes:{"text":"<p>A supported option. See comment above.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the location of the given element in context of\nthe document dimenions.For supported modes please\nhave a look at the {@see #get} method.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The right distance\n  of the element relative to the document.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"mode"},children:[
          {type:"desc",attributes:{"text":"<p>A supported option. See comment above.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Computes the location of the given element in context of\nthe document dimensions.For supported modes please\nhave a look at the {@see #get} method.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The top distance\n  of the element relative to the document.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]}
    ]}
  ]}