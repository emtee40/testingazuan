{type:"class",attributes:{"isStatic":"true","name":"Validation","packageName":"qx.util","fullName":"qx.util.Validation","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Collection of validation methods.</p>\n\n<p>All methods use the strict comparison operators as all modern\nbrowsers (needs support for JavaScript 1.3) support this.</p>\n\n<p><a href=\"http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Comparison_Operators\">http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Comparison_Operators</a></p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"isInvalid"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is invalid. Invalid values are:\n<ul>\n  <li>undefined</li>\n  <li>null</li>\n  <li>&#8221;&#8221; (empty string)</li>\n  <li>Nan (not a number)</li>\n  <li>false</li>\n</ul>\nAll other values are considered valid.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is invalid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidArray"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is an invalid array.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidBoolean"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is not boolean.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is not a <span class=\"caps\">DOM</span> element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is not a function.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is an invalid node.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is an invalid number.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is an invalid object.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is an invalid string.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInvalidStringOrNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value not a valid string or number.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValid"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is valid. Invalid values are:\n<ul>\n  <li>undefined</li>\n  <li>null</li>\n  <li>&#8221;&#8221; (empty string)</li>\n  <li>Nan (not a number)</li>\n  <li>false</li>\n</ul>\nAll other values are considered valid.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidArray"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a valid array. Valid arrays are:\n<ul>\n  <li>type is object</li>\n  <li>instance is Array</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidBoolean"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a boolean. Valid booleans are:\n<ul>\n  <li>type is boolean</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is valid <span class=\"caps\">DOM</span> element number. Valid elements are:\n<ul>\n  <li>type is object</li>\n  <li>v.nodeType === 1</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a function.\n<ul>\n  <li>type is function</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a valid <span class=\"caps\">DOM</span> node. Valid nodes are:\n<ul>\n  <li>type is object</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a valid number. Valid numbers are:\n<ul>\n  <li>type is number</li>\n  <li>not NaN</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is a valid object. Valid object are:\n<ul>\n  <li>type is object</li>\n  <li>instance != Array</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is valid string. Valid strings are:\n<ul>\n  <li>type is string</li>\n  <li>not an empty string</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValidStringOrNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
          {type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether a value is valid a non empty string or a valid number. Valid values are:\n<ul>\n  <li>type is string or number</li>\n  <li>values is not &#8221;&#8221; or NaN</li>\n</ul></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}