{type:"class",attributes:{"name":"Appearance","packageName":"qx.theme.manager","superClass":"qx.util.manager.Object","isSingleton":"true","fullName":"qx.theme.manager.Appearance","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This singleton manages the current theme</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeAppearanceTheme"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #appearanceTheme}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.theme.manager.Appearance#appearanceTheme","name":"_applyAppearanceTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Theme"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Theme"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>appearanceTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyAppearanceTheme}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getAppearanceTheme","fromProperty":"appearanceTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>appearanceTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #appearanceTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>appearanceTheme</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAppearanceTheme","fromProperty":"appearanceTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>appearanceTheme</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>appearanceTheme</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #appearanceTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAppearanceTheme","fromProperty":"appearanceTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>appearanceTheme</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #appearanceTheme}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAppearanceTheme","fromProperty":"appearanceTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>appearanceTheme</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>appearanceTheme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #appearanceTheme}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"styleFrom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"id"},children:[
          {type:"desc",attributes:{"text":"<p>id of the appearance (e.g. &#8220;button&#8221;, &#8220;label&#8221;, ...)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"states"},children:[
          {type:"desc",attributes:{"text":"<p>hash map defining the set states</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the result of the &#8220;initial&#8221; function for a given id</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>map of widget properties as returned by the &#8220;initial&#8221; function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"styleFromTheme"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"theme"},children:[
          {type:"desc",attributes:{"text":"<p>appearance theme</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"id"},children:[
          {type:"desc",attributes:{"text":"<p>id of the appearance (e.g. &#8220;button&#8221;, &#8220;label&#8221;, ...)</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"states"},children:[
          {type:"desc",attributes:{"text":"<p>hash map defining the set states</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get the result of the &#8220;state&#8221; function for a given id and states</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>map of widget properties as returned by the &#8220;state&#8221; function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"syncAppearanceTheme"},children:[
      {type:"desc",attributes:{"text":"<p>Sync dependend objects with internal database</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearanceTheme","check":"Theme","allowNull":"true","propertyType":"new","apply":"_applyAppearanceTheme","event":"changeAppearanceTheme"},children:[
      {type:"desc",attributes:{"text":"<p>currently used appearance theme</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.theme.manager.Appearance"}}
          ]}
        ]}
      ]}
    ]}
  ]}