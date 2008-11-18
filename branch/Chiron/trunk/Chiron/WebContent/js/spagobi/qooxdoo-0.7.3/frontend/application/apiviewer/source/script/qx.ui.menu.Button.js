{type:"class",attributes:{"name":"Button","packageName":"qx.ui.menu","superClass":"qx.ui.layout.HorizontalBoxLayout","childClasses":"qx.ui.menu.CheckBox","fullName":"qx.ui.menu.Button","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.menu.Button","name":"menu-button"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"}},
        {type:"param",attributes:{"name":"vIcon"}},
        {type:"param",attributes:{"name":"vCommand"}},
        {type:"param",attributes:{"name":"vMenu"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"allowStretchX","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"menu-button\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"icon","allowNull":"true","propertyType":"new","apply":"_applyIcon","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Icon of the menu button</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"label","apply":"_applyLabel"},children:[
      {type:"desc",attributes:{"text":"<p>Label of the menu button</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.ui.menu.Menu","allowNull":"true","propertyType":"new","name":"menu","apply":"_applyMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Associated sub menu</p>"}}
      ]},
    {type:"property",attributes:{"name":"minWidth","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#command","overriddenFrom":"qx.ui.core.Widget","name":"_applyCommand"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Button#icon","name":"_applyIcon"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Button#label","name":"_applyLabel"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.Button#menu","name":"_applyMenu"},children:[
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
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.layout.BoxLayout","name":"_createLayoutImpl"},children:[
      {type:"desc",attributes:{"text":"<p>This creates an new instance of the layout impl this widget uses</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>instance of a button layout implementation</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.layout.BoxLayout"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseUp event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for &#8220;mouseUp&#8221; event</p>\n\n<p>Simply calls the {@link #execute} method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getArrowObject"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the button arrow</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>button arrow</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Image"}}
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
    {type:"method",attributes:{"name":"getIconObject"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the button icon</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>button icon</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Image"}}
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
      {type:"desc",attributes:{"text":"<p>Accessor method for the button label</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>button label</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Label"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMenu","fromProperty":"menu"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>menu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>menu</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getParentMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the parent menu (if available)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns the parent menu (if available)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.menu.Menu"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShortcutObject"},children:[
      {type:"desc",attributes:{"text":"<p>Accessor method for the button shortcut</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>button shortcut</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.basic.Label"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasIcon"},children:[
      {type:"desc",attributes:{"text":"<p>Returns <code>true</code> if the button instance has an icon</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>icon available</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasLabel"},children:[
      {type:"desc",attributes:{"text":"<p>Returns <code>true</code> if the button instance has a label</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>label available</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Returns <code>true</code> if the button instance has a submenu</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>sub menu available</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasShortcut"},children:[
      {type:"desc",attributes:{"text":"<p>Returns <code>true</code> if the button instance has a shortcut</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>shortcut available</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
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
    {type:"method",attributes:{"access":"protected","name":"initMenu","fromProperty":"menu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>menu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>menu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
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
    {type:"method",attributes:{"name":"resetLabel","fromProperty":"label"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>label</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #label}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMenu","fromProperty":"menu"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>menu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
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
    {type:"method",attributes:{"name":"setMenu","fromProperty":"menu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>menu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>menu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}