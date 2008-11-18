{type:"class",attributes:{"name":"Font","packageName":"qx.ui.core","superClass":"qx.core.Object","fullName":"qx.ui.core.Font","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A wrapper for <span class=\"caps\">CSS</span> font styles. Fond objects can be aplpied to widgets\nor <span class=\"caps\">DOM</span> elements.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"size"},children:[
          {type:"desc",attributes:{"text":"<p>The font size (Unit: pixel)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"family"},children:[
          {type:"desc",attributes:{"text":"<p>A sorted list of font families</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String","dimensions":"1"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"fromConfig"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>map of property values</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a map property definition into a border object.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the created instance</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Font"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the <span class=\"caps\">CSS</span> string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a typical <span class=\"caps\">CSS</span> font definition string to an font object</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the created instance</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Font"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"reset"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>widget to reset</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes all fond styles from this widget</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"resetElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to reset</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes all fond styles from this <span class=\"caps\">DOM</span> element</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"resetStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The style map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reset a style map by setting the font attributes to empty.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Font#bold","name":"_applyBold"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>bold</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBold}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Font#decoration","name":"_applyDecoration"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>decoration</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyDecoration}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Font#family","name":"_applyFamily"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>family</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFamily}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Font#italic","name":"_applyItalic"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>italic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyItalic}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Font#size","name":"_applySize"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>size</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySize}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"generateStyle"},children:[
      {type:"desc",attributes:{"text":"<p>Generate a style string with the current font attributes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The generated style string for this font</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBold","fromProperty":"bold"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>bold</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>bold</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDecoration","fromProperty":"decoration"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>decoration</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #decoration}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>decoration</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFamily","fromProperty":"family"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>family</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #family}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>family</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getItalic","fromProperty":"italic"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>italic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>italic</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSize","fromProperty":"size"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>size</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #size}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>size</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBold","fromProperty":"bold"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>bold</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>bold</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDecoration","fromProperty":"decoration"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>decoration</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>decoration</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #decoration}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFamily","fromProperty":"family"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>family</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>family</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #family}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initItalic","fromProperty":"italic"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>italic</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>italic</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSize","fromProperty":"size"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>size</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>size</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #size}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isBold","fromProperty":"bold"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>bold</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isItalic","fromProperty":"italic"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>italic</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"render"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget to apply the font to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply the font to the given widget.</p>"}}
      ]},
    {type:"method",attributes:{"name":"renderElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"element"},children:[
          {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element to apply the font to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply the font styles to the given <span class=\"caps\">DOM</span> element.</p>"}}
      ]},
    {type:"method",attributes:{"name":"renderStyle"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The style map</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generate a style map with the current font attributes.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBold","fromProperty":"bold"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>bold</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDecoration","fromProperty":"decoration"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>decoration</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #decoration}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFamily","fromProperty":"family"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>family</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #family}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetItalic","fromProperty":"italic"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>italic</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSize","fromProperty":"size"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>size</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #size}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBold","fromProperty":"bold"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>bold</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>bold</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDecoration","fromProperty":"decoration"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>decoration</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>decoration</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #decoration}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFamily","fromProperty":"family"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>family</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>family</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #family}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setItalic","fromProperty":"italic"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>italic</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>italic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSize","fromProperty":"size"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>size</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>size</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #size}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleBold","fromProperty":"bold"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>bold</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bold}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleItalic","fromProperty":"italic"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>italic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #italic}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"check":"Boolean","allowNull":"true","propertyType":"new","name":"bold","apply":"_applyBold"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the font is bold</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"decoration","possibleValues":"\"underline\",\"line-through\",\"overline\"","apply":"_applyDecoration"},children:[
      {type:"desc",attributes:{"text":"<p>The text decoration for this font</p>"}}
      ]},
    {type:"property",attributes:{"check":"Array","allowNull":"true","propertyType":"new","name":"family","apply":"_applyFamily"},children:[
      {type:"desc",attributes:{"text":"<p>A sorted list of font families</p>"}}
      ]},
    {type:"property",attributes:{"check":"Boolean","allowNull":"true","propertyType":"new","name":"italic","apply":"_applyItalic"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the font is italic</p>"}}
      ]},
    {type:"property",attributes:{"check":"Integer","allowNull":"true","propertyType":"new","name":"size","apply":"_applySize"},children:[
      {type:"desc",attributes:{"text":"<p>The font size (Unit: pixel)</p>"}}
      ]}
    ]}
  ]}