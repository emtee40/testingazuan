{type:"class",attributes:{"name":"ListItem","packageName":"qx.ui.form","superClass":"qx.ui.basic.Atom","fullName":"qx.ui.form.ListItem","type":"class"},children:[
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.form.ListItem","name":"list-item"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"}},
        {type:"param",attributes:{"name":"vIcon"}},
        {type:"param",attributes:{"name":"vValue"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"action"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.form.List})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeValue"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"allowStretchX","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"list-item\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},
    {type:"property",attributes:{"name":"minWidth","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"check":"String","propertyType":"new","name":"value","event":"changeValue"},children:[
      {type:"desc",attributes:{"text":"<p>Fires a &#8220;changeValue&#8221; (qx.event.type.ChangeEvent) event</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"null","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_applyStateStyleFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vStates"},children:[
          {type:"desc",attributes:{"text":"<p>states</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove default outline focus border &#8211; currently not implemented</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ondblclick"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>double-click event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the double-click event of the ListItem.</p>\n\n<p>Executes an registered command &#8211; if available.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"handleStateChange"},children:[
      {type:"desc",attributes:{"text":"<p>Sets/removes the styleProperties &#8220;MozOutline&#8221; and &#8220;outline&#8221; whether the\nitem has the state &#8220;lead&#8221; or not</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"matchesString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>String which should be matched with the ListItem&#8217;s label</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Execute by the &#8220;_findItem&#8221; method at {@link qx.ui.form.List} to perform\na string search</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Match found</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"matchesStringExact"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>String which should be matched exactly with the ListItem&#8217;s label</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Execute by the &#8220;_findItem&#8221; method at {@link qx.ui.form.List} to perform\nan exact string search</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Match found</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"matchesValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>String which should be matched with the ListItem&#8217;s value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Execute by the &#8220;_findItem&#8221; method at {@link qx.ui.form.List} to perform\na value search</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Match found</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"matchesValueExact"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>String which should be matched exactly with the ListItem&#8217;s value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Execute by the &#8220;_findItem&#8221; method at {@link qx.ui.form.List} to perform\nan exact value search</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Match found</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}