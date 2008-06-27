{type:"class",attributes:{"name":"Conditional","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Default","childClasses":"qx.ui.table.cellrenderer.Date,qx.ui.table.cellrenderer.Number,qx.ui.table.cellrenderer.String","fullName":"qx.ui.table.cellrenderer.Conditional","type":"class"},children:[
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"align"},children:[
          {type:"desc",attributes:{"text":"<p>The default alignment to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"color"},children:[
          {type:"desc",attributes:{"text":"<p>The default color to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The default style to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"weight"},children:[
          {type:"desc",attributes:{"text":"<p>The default weight to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__applyFormatting"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"condition"},children:[
          {type:"desc",attributes:{"text":"<p>The matched condition</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>map of already applied styles.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies the cell styles to the style map.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","name":"_getCellStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Overridden; called whenever the cell updates. The cell will iterate through\neach available condition and apply formatting for those that\nmatch. Multiple conditions can match, but later conditions will override\nearlier ones. Conditions with null values will stack with other conditions\nthat apply to that value.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addBetweenCondition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"condition"},children:[
          {type:"desc",attributes:{"text":"<p>The type of condition. Accepted strings are &#8220;between&#8221; and &#8221;!between&#8221;.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value1"},children:[
          {type:"desc",attributes:{"text":"<p>The first value to compare against.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value2"},children:[
          {type:"desc",attributes:{"text":"<p>The second value to compare against.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"align"},children:[
          {type:"desc",attributes:{"text":"<p>The alignment to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"color"},children:[
          {type:"desc",attributes:{"text":"<p>The color to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The style to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"weight"},children:[
          {type:"desc",attributes:{"text":"<p>The weight to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"target"},children:[
          {type:"desc",attributes:{"text":"<p>The text value of the column to compare against. If this is null,\n    comparisons will be against the contents of this cell.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The addBetweenCondition method is used to add a between condition to the\ncell renderer.</p>\n\n<p>Note: Passing null is different from passing an empty string in the align,\ncolor, style and weight arguments. Null will allow pre-existing formatting\nto pass through, where an empty string will clear it back to the default\nformatting set in the constructor.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"addNumericCondition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"condition"},children:[
          {type:"desc",attributes:{"text":"<p>The type of condition. Accepted strings are &#8221;==&#8221;, &#8221;!=&#8221;, &#8221;>&#8221;, &#8221;<\", \">=&#8221;,\n    and &#8221;<=&#8221;.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value1"},children:[
          {type:"desc",attributes:{"text":"<p>The value to compare against.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"align"},children:[
          {type:"desc",attributes:{"text":"<p>The alignment to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"color"},children:[
          {type:"desc",attributes:{"text":"<p>The color to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The style to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"weight"},children:[
          {type:"desc",attributes:{"text":"<p>The weight to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"target"},children:[
          {type:"desc",attributes:{"text":"<p>The text value of the column to compare against. If this is null,\n    comparisons will be against the contents of this cell.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The addNumericCondition method is used to add a basic numeric condition to\nthe cell renderer.</p>\n\n<p>Note: Passing null is different from passing an empty string in the align,\ncolor, style and weight arguments. Null will allow pre-existing formatting\nto pass through, where an empty string will clear it back to the default\nformatting set in the constructor.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addRegex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"regex"},children:[
          {type:"desc",attributes:{"text":"<p>The regular expression to match against.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"align"},children:[
          {type:"desc",attributes:{"text":"<p>The alignment to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"color"},children:[
          {type:"desc",attributes:{"text":"<p>The color to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The style to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"weight"},children:[
          {type:"desc",attributes:{"text":"<p>The weight to format the cell with if the condition matches.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"target"},children:[
          {type:"desc",attributes:{"text":"<p>The text value of the column to compare against. If this is null,\n    comparisons will be against the contents of this cell.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>The addRegex method is used to add a regular expression condition to the\ncell renderer.</p>\n\n<p>Note: Passing null is different from passing an empty string in the align,\ncolor, style and weight arguments. Null will allow pre-existing formatting\nto pass through, where an empty string will clear it back to the default\nformatting set in the constructor.</p>"}}
      ]}
    ]}
  ]}