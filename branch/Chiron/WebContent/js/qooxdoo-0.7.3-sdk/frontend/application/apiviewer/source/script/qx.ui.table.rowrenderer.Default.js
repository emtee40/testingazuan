{type:"class",attributes:{"name":"Default","interfaces":"qx.ui.table.IRowRenderer","superClass":"qx.core.Target","childClasses":"qx.ui.treevirtual.SimpleTreeDataRowRenderer","fullName":"qx.ui.table.rowrenderer.Default","type":"class","packageName":"qx.ui.table.rowrenderer"},children:[
  {type:"desc",attributes:{"text":"<p>The default data row renderer.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.table.rowrenderer.Default","name":"table-row"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"table"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_postponedUpdateTableContent"},children:[
      {type:"desc",attributes:{"text":"<p>Does a postponed update of the table content.</p>"}},
      {type:"see",attributes:{"name":"#_updateTableContent"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderFont"},children:[
      {type:"desc",attributes:{"text":"<p>Render the new font and update the table pane content\nto reflect the font change.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleBgcolEven"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleBgcolFocused"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleBgcolFocusedSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleBgcolOdd"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleBgcolSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleColNormal"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleColSelected"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Theme styler for color property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleFont"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new font value to render</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Font"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Utility method to render the given font. Calls the\n{@link #_renderFont} method.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateTableContent"},children:[
      {type:"desc",attributes:{"text":"<p>Update the table pane content to reflect visual changes.</p>"}}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.IRowRenderer","name":"createRowStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>highlightFocusRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>highlightFocusRow</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.IRowRenderer","name":"getRowClass"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>highlightFocusRow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>highlightFocusRow</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>highlightFocusRow</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>highlightFocusRow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>highlightFocusRow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>highlightFocusRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleHighlightFocusRow","fromProperty":"highlightFocusRow"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>highlightFocusRow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #highlightFocusRow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"docFrom":"qx.ui.table.IRowRenderer","name":"updateDataRowElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowInfo"}},
        {type:"param",attributes:{"name":"rowElem"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"highlightFocusRow","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the focused row should be highlighted.</p>"}}
      ]}
    ]}
  ]}