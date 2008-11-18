{type:"class",attributes:{"isStatic":"true","name":"Number","packageName":"qx.lang","fullName":"qx.lang.Number","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Helper functions for numbers.</p>\n\n<p>The native JavaScript Number is not modified by this class.</p>\n\n<p>The additions implemented here may be added directly to the native Number\nby a setting in {@link qx.lang.Prototypes}. This feature is not enabled by\ndefault.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"isBetweenRange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nr"},children:[
          {type:"desc",attributes:{"text":"<p>the number to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmin"},children:[
          {type:"desc",attributes:{"text":"<p>lower bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmax"},children:[
          {type:"desc",attributes:{"text":"<p>upper bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the number is between a given range</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the number is > vmin and < vmax</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInRange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nr"},children:[
          {type:"desc",attributes:{"text":"<p>the number to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmin"},children:[
          {type:"desc",attributes:{"text":"<p>lower bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmax"},children:[
          {type:"desc",attributes:{"text":"<p>upper bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the number is in a given range</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the number is >= vmin and <= vmax</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"limit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nr"},children:[
          {type:"desc",attributes:{"text":"<p>the number to limit</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmin"},children:[
          {type:"desc",attributes:{"text":"<p>lower bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vmax"},children:[
          {type:"desc",attributes:{"text":"<p>upper bound of the range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Limit the nuber to a given range</p>\n\n<ul>\n<li>If the number is greater than the upper bound, the upper bound is returned</li>\n<li>If the number is smaller than the lower bound, the lower bound is returned</li>\n<li>If the number is in the range, the number is retuned</li>\n</ul>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the limited number</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]}
    ]}
  ]}