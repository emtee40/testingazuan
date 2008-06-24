{type:"class",attributes:{"isStatic":"true","name":"Property","isInternal":"true","packageName":"qx.core","access":"internal","fullName":"qx.core.Property","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Internal class for handling of dynamic properties. Should only be used\nthrough the methods provided by {@link qx.Class}.</p>\n\n<p>For a complete documentation of properties take a\nlook at <a href=\"http://qooxdoo.org/documentation/developer_manual/properties\">http://qooxdoo.org/documentation/developer_manual/properties</a>.</p>\n\n<p><strong>Normal properties</strong></p>\n\n<p>The <code>properties</code> key in the class definition map of {@link qx.Class#define}\nis used to generate the properties.</p>\n\n<p>Valid keys of a property definition are:</p>\n\n<table>\n  <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n  <tr><th>check</th><td>Array, String, Function</td><td>\n    The check is used to validate the incoming value of a property. The check can be:\n    <ul>\n      <li>a custom check function. The function takes the incoming value as a parameter and must\n          return a boolean value to indicate whether the values is valid.\n      </li>\n      <li>inline check code as a string e.g. <code>\"value &gt; 0 &amp;&amp; value &lt; 100\"</code></li>\n      <li>a class name e.g. <code>qx.ui.form.Button</code></li>\n      <li>a name of an interface the value must implement, e.g. <code>qx.application.IAplpication</code></li>\n      <li>an array of all valid values</li>\n      <li>one of the predefined checks: Boolean, String, Number, Integer, Float, Double,\n          Object, Array, Map, Class, Mixin, Interface, Theme, Error, RegExp, Function,\n          Date, Node, Element, Document, Window, Event\n      </li>\n    <ul>\n  </td></tr>\n  <tr><th>init</th><td>var</td><td>\n    Sets the default/initial value of the property. If no property value is set or the property\n    gets reset, the getter will return the <code>init</code> value.\n  </td></tr>\n  <tr><th>apply</th><td>String</td><td>\n    On change of the property value the method of the specified name will be called. The signature of\n    the method is <code>function(newValue, oldValue)</code>.\n  </td></tr>\n  <tr><th>event</th><td>String</td><td>\n    On change of the property value an event with the given name will be dispached. The event type is\n    {@link qx.event.type.ChangeEvent}.\n  </td></tr>\n  <tr><th>themeable</th><td>Boolean</td><td>\n    Whether this property can be set using themes.\n  </td></tr>\n  <tr><th>inheritable</th><td>Boolean</td><td>\n    Whether the property value should be inheritable. If the property does not have a user defined or an\n    init value, the property will try to get the value from the parent of the current object.\n  </td></tr>\n  <tr><th>nullable</th><td>Boolean</td><td>\n    Whether <code>null</code> is an allowed value of the property. This is complemental to the check\n    defined using the <code>check</code> key.\n  </td></tr>\n  <tr><th>refine</th><td>Boolean</td><td>\n    Whether the property definition is a refinemnet of a property in one of the super classes of the class.\n    Only the <code>init</code> value can be changed using refine.\n  </td></tr>\n  <tr><th>transform</th><td>String</td><td>\n    On setting of the property value the method of the specified name will\n    be called. The signature of the method is <code>function(value)</code>.\n    The parameter <code>value</code> is the value passed to the setter.\n    The function must return the modified or unmodified value.\n    Transformation occurs before the check function, so both may be\n    specified if desired.  Alternatively, the transform function may throw\n    an error if the value passed to it is invalid.\n  </td></tr>\n</table>\n\n<p><strong>Property groups</strong></p>\n\n<p>Property groups are defined in a similar way but support a different set of keys:</p>\n\n<table>\n  <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n  <tr><th>group</th><td>String[]</td><td>\n    A list of property names which should be set using the propery group.\n  </td></tr>\n  <tr><th>mode</th><td>String</td><td>\n    If mode is set to <code>\"shorthand\"</code>, the properties can be set using a CSS like shorthand mode.\n  </td></tr>\n  <tr><th>themeable</th><td>Boolean</td><td>\n    Whether this property can be set using themes.\n  </td></tr>\n</table>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"__attachGroupMethods"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>Class to attach properties to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Property configuration</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"prefix"},children:[
          {type:"desc",attributes:{"text":"<p>Prefix of property e.g. &#8220;__&#8221; or &#8220;_&#8221; for private or protected properties</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"postfix"},children:[
          {type:"desc",attributes:{"text":"<p>Camelcase name of property e.g. name=width => postfix=Width</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Attach group methods</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"__attachPropertyMethods"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>Class to attach properties to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Property configuration</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"prefix"},children:[
          {type:"desc",attributes:{"text":"<p>Prefix of property e.g. &#8220;__&#8221; or &#8220;_&#8221; for private or protected properties</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"postfix"},children:[
          {type:"desc",attributes:{"text":"<p>Camelcase name of property e.g. name=width => postfix=Width</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Attach property methods</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"__unwrapFunctionFromCode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"instance"},children:[
          {type:"desc",attributes:{"text":"<p>Instance which have called the original method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"members"},children:[
          {type:"desc",attributes:{"text":"<p>Prototype members map where the new function should be stored</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"variant"},children:[
          {type:"desc",attributes:{"text":"<p>Function variant e.g. get, set, reset, ...</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"code"},children:[
          {type:"desc",attributes:{"text":"<p>Array which contains the code</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>Incoming arguments of wrapper method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compiles a string builder object to a function, executes the function and\nreturns the return value.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Return value of the generated function</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"attach"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>Class to attach properties to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Attach properties to class prototype</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"attachMethods"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>Class to attach properties to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Name of property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Configuration map of property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Attach one property to class</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"error"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>Any qooxdoo object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.core.Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"id"},children:[
          {type:"desc",attributes:{"text":"<p>Numeric error identifier</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"property"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"variant"},children:[
          {type:"desc",attributes:{"text":"<p>Name of the method variant e.g. &#8220;set&#8221;, &#8220;reset&#8221;, ...</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Error method used by the property system to report errors.</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"executeOptimizedGetter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"instance"},children:[
          {type:"desc",attributes:{"text":"<p>the instance which calls the method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>the class which originally defined the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"variant"},children:[
          {type:"desc",attributes:{"text":"<p>Method variant.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates the optimized getter\nSupported variants: get</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Execute return value of apply generated function, generally the incoming value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"executeOptimizedSetter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"instance"},children:[
          {type:"desc",attributes:{"text":"<p>the instance which calls the method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>the class which originally defined the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"variant"},children:[
          {type:"desc",attributes:{"text":"<p>Method variant.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>Incoming arguments of wrapper method</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates the optimized setter\nSupported variants: set, reset, init, refresh, style, unstyle</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Execute return value of apply generated function, generally the incoming value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"refresh"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>the widget</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Refreshes widget whose parent has changed (including the children)</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}