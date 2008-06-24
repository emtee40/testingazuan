{type:"class",attributes:{"name":"Atom","packageName":"qx.ui.basic","superClass":"qx.ui.layout.BoxLayout","childClasses":"qx.ui.form.Button,qx.ui.form.CheckBox,qx.ui.form.ListItem,qx.ui.listview.HeaderCell,qx.ui.pageview.AbstractButton","fullName":"qx.ui.basic.Atom","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A multi-purpose widget used by many more complex widgets.</p>\n\n<p>The intended purpose of qx.ui.basic.Atom is to easily align the common icon-text\ncombination in different ways.</p>\n\n<p>This is useful for all types of buttons, menuentries, tooltips, ...</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.basic.Atom","name":"atom"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"},children:[
          {type:"desc",attributes:{"text":"<p>label of the atom</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"vIcon"},children:[
          {type:"desc",attributes:{"text":"<p>Icon <span class=\"caps\">URL</span> of the atom</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"vIconWidth"},children:[
          {type:"desc",attributes:{"text":"<p>desired width of the icon (the icon will be scaled to this size)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"vIconHeight"},children:[
          {type:"desc",attributes:{"text":"<p>desired height of the icon (the icon will be scaled to this size)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"vFlash"},children:[
          {type:"desc",attributes:{"text":"<p>optional flash animation for the Atom. Needs valid width and height values.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.embed.Flash"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#disabledIcon","name":"_applyDisabledIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#icon","name":"_applyIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#iconHeight","name":"_applyIconHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#iconPosition","name":"_applyIconPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies the icon position</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#iconWidth","name":"_applyIconWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#label","name":"_applyLabel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#show","name":"_applyShow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createIcon"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the icon object</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createLabel"},children:[
      {type:"desc",attributes:{"text":"<p>Creates the label object</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_handleIcon"},children:[
      {type:"desc",attributes:{"text":"<p>handle icon</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_handleLabel"},children:[
      {type:"desc",attributes:{"text":"<p>Handle label</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateIcon"},children:[
      {type:"desc",attributes:{"text":"<p>updates the icon</p>"}}
      ]},
    {type:"method",attributes:{"name":"getDisabledIcon","fromProperty":"disabledIcon"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>disabledIcon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #disabledIcon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>disabledIcon</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIcon","fromProperty":"icon"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>icon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>icon</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIconHeight","fromProperty":"iconHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconHeight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIconObject"},children:[
      {type:"desc",attributes:{"text":"<p>Get the icon widget of the atom.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The icon widget of the atom.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Image"}},
          {type:"entry",attributes:{"type":"qx.ui.embed.Flash"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIconPosition","fromProperty":"iconPosition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconPosition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIconWidth","fromProperty":"iconWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconWidth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLabel","fromProperty":"label"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>label</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>label</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLabelObject"},children:[
      {type:"desc",attributes:{"text":"<p>Get the label widget of the atom.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The label widget of the atom.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Label"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShow","fromProperty":"show"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>show</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>show</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDisabledIcon","fromProperty":"disabledIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>disabledIcon</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>disabledIcon</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #disabledIcon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIcon","fromProperty":"icon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>icon</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>icon</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIconHeight","fromProperty":"iconHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>iconHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIconPosition","fromProperty":"iconPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>iconPosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconPosition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIconWidth","fromProperty":"iconWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>iconWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLabel","fromProperty":"label"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>label</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>label</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShow","fromProperty":"show"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>show</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>show</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDisabledIcon","fromProperty":"disabledIcon"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>disabledIcon</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #disabledIcon}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIcon","fromProperty":"icon"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>icon</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIconHeight","fromProperty":"iconHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconHeight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIconPosition","fromProperty":"iconPosition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconPosition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPosition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIconWidth","fromProperty":"iconWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconWidth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLabel","fromProperty":"label"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>label</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShow","fromProperty":"show"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>show</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDisabledIcon","fromProperty":"disabledIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>disabledIcon</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>disabledIcon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #disabledIcon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIcon","fromProperty":"icon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>icon</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>icon</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #icon}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIconHeight","fromProperty":"iconHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>iconHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIconPosition","fromProperty":"iconPosition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>iconPosition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPosition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIconWidth","fromProperty":"iconWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>iconWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLabel","fromProperty":"label"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>label</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>label</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShow","fromProperty":"show"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>show</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>show</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"allowStretchX","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"atom\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"disabledIcon","allowNull":"true","propertyType":"new","apply":"_applyDisabledIcon","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Any <span class=\"caps\">URI</span> String supported by qx.ui.basic.Image to display a disabled icon.</p>\n\n<p>If not set the normal icon is shown transparently.</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"horizontalChildrenAlign","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"\"center\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.layout.BoxLayout"}},
    {type:"property",attributes:{"name":"icon","allowNull":"true","propertyType":"new","apply":"_applyIcon","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Any <span class=\"caps\">URI</span> String supported by qx.ui.basic.Image to display a icon</p>"}}
      ]},
    {type:"property",attributes:{"name":"iconHeight","allowNull":"true","propertyType":"new","apply":"_applyIconHeight","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The height of the icon\n If configured, this makes qx.ui.basic.Atom a little bit faster as it does not need to wait until the image loading is finished.</p>"}}
      ]},
    {type:"property",attributes:{"possibleValues":"\"top\",\"right\",\"bottom\",\"left\"","name":"iconPosition","defaultValue":"\"left\"","propertyType":"new","apply":"_applyIconPosition","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The position of the icon in relation to the text.\n Only useful/needed if text and icon is configured and &#8216;show&#8217; is configured as &#8216;both&#8217; (default)</p>"}}
      ]},
    {type:"property",attributes:{"name":"iconWidth","allowNull":"true","propertyType":"new","apply":"_applyIconWidth","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The width of the icon.\n If configured, this makes qx.ui.basic.Atom a little bit faster as it does not need to wait until the image loading is finished.</p>"}}
      ]},
    {type:"property",attributes:{"check":"Label","allowNull":"true","propertyType":"new","name":"label","apply":"_applyLabel"},children:[
      {type:"desc",attributes:{"text":"<p>The label/caption/text of the qx.ui.basic.Atom instance</p>"}}
      ]},
    {type:"property",attributes:{"name":"orientation","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"\"horizontal\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.layout.BoxLayout"}},
    {type:"property",attributes:{"name":"show","defaultValue":"\"both\"","propertyType":"new","allowNull":"true","inheritable":"true","possibleValues":"\"both\",\"label\",\"icon\",\"none\"","apply":"_applyShow","event":"changeShow","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Configure the visibility of the sub elements/widgets.\n Possible values: both, text, icon, none</p>"}}
      ]},
    {type:"property",attributes:{"name":"spacing","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"4","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.layout.BoxLayout"}},
    {type:"property",attributes:{"name":"stretchChildrenOrthogonalAxis","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.layout.BoxLayout"}},
    {type:"property",attributes:{"name":"verticalChildrenAlign","docFrom":"qx.ui.layout.BoxLayout","defaultValue":"\"middle\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.layout.BoxLayout"}},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeShow"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #show}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]}
  ]}