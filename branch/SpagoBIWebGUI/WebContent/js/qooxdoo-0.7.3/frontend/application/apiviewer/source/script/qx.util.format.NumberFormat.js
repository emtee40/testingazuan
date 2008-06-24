{type:"class",attributes:{"name":"NumberFormat","packageName":"qx.util.format","superClass":"qx.util.format.Format","fullName":"qx.util.format.NumberFormat","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A formatter and parser for numbers.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Return an instance of NumberFormat</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an instance</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.util.format.NumberFormat"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getIntegerInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns an integer number format.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an integer number format.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"NumberFormat"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"overriddenFrom":"qx.util.format.Format","name":"format"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"num"},children:[
          {type:"desc",attributes:{"text":"<p>the number to format.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Formats a number.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the formatted number as a string.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>groupingUsed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>groupingUsed</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaximumFractionDigits","fromProperty":"maximumFractionDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maximumFractionDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maximumFractionDigits</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaximumIntegerDigits","fromProperty":"maximumIntegerDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maximumIntegerDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maximumIntegerDigits</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinimumFractionDigits","fromProperty":"minimumFractionDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minimumFractionDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>minimumFractionDigits</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinimumIntegerDigits","fromProperty":"minimumIntegerDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minimumIntegerDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>minimumIntegerDigits</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPostfix","fromProperty":"postfix"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>postfix</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #postfix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>postfix</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPrefix","fromProperty":"prefix"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>prefix</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #prefix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>prefix</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>groupingUsed</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>groupingUsed</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaximumFractionDigits","fromProperty":"maximumFractionDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maximumFractionDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maximumFractionDigits</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaximumIntegerDigits","fromProperty":"maximumIntegerDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maximumIntegerDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maximumIntegerDigits</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMinimumFractionDigits","fromProperty":"minimumFractionDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>minimumFractionDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minimumFractionDigits</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMinimumIntegerDigits","fromProperty":"minimumIntegerDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>minimumIntegerDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minimumIntegerDigits</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPostfix","fromProperty":"postfix"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>postfix</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>postfix</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #postfix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPrefix","fromProperty":"prefix"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>prefix</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>prefix</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #prefix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>groupingUsed</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.format.Format","name":"parse"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to parse.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Parses a number.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Double"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>groupingUsed</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaximumFractionDigits","fromProperty":"maximumFractionDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maximumFractionDigits</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaximumIntegerDigits","fromProperty":"maximumIntegerDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maximumIntegerDigits</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMinimumFractionDigits","fromProperty":"minimumFractionDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minimumFractionDigits</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMinimumIntegerDigits","fromProperty":"minimumIntegerDigits"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minimumIntegerDigits</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPostfix","fromProperty":"postfix"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>postfix</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #postfix}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPrefix","fromProperty":"prefix"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>prefix</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #prefix}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>groupingUsed</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>groupingUsed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaximumFractionDigits","fromProperty":"maximumFractionDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maximumFractionDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maximumFractionDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaximumIntegerDigits","fromProperty":"maximumIntegerDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maximumIntegerDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maximumIntegerDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinimumFractionDigits","fromProperty":"minimumFractionDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>minimumFractionDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minimumFractionDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumFractionDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinimumIntegerDigits","fromProperty":"minimumIntegerDigits"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>minimumIntegerDigits</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minimumIntegerDigits</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minimumIntegerDigits}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPostfix","fromProperty":"postfix"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>postfix</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>postfix</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #postfix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPrefix","fromProperty":"prefix"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>prefix</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>prefix</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #prefix}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleGroupingUsed","fromProperty":"groupingUsed"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>groupingUsed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #groupingUsed}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"groupingUsed","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether thousand groupings should be used {e.g. &#8220;1,432,234.65&#8221;}.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"maximumFractionDigits","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum number of fraction digits (digits after the decimal separator).\nSuperflous digits will cause rounding (&#8220;1.8277&#8221; -> &#8220;1.83&#8221;)</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"maximumIntegerDigits","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum number of integer digits (superfluos digits will be cut off\n(&#8220;1923&#8221; -> &#8220;23&#8221;).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"minimumFractionDigits","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum number of fraction digits (digits after the decimal separator).\nMissing digits will be filled up with 0 (&#8220;1.5&#8221; -> &#8220;1.500&#8221;)</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"minimumIntegerDigits","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum number of integer digits (digits before the decimal separator).\nMissing digits will be filled up with 0 (&#8220;19&#8221; -> &#8220;0019&#8221;).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"\"","propertyType":"new","name":"postfix","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>Sets the postfix to put after the number {&#8221; %&#8221; -> &#8220;56.13 %&#8221;}.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"\"\"","propertyType":"new","name":"prefix","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>The prefix to put before the number {&#8220;EUR &#8221; -> &#8220;EUR 12.31&#8221;}.</p>"}}
      ]}
    ]}
  ]}