{type:"class",attributes:{"isStatic":"true","name":"Interface","packageName":"qx","fullName":"qx.Interface","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This class is used to define interfaces (similar to Java interfaces).</p>\n\n<p>See the description of the {@link #define} method how an interface is\ndefined.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"assert"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>class to check interface for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"iface"},children:[
          {type:"desc",attributes:{"text":"<p>the interface to verify</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Interface"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"wrap"},children:[
          {type:"desc",attributes:{"text":"<p>wrap functions required by interface to check parameters etc.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Checks if an interface is implemented by a class</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"define"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the interface</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Interface definition structure. The configuration map has the following keys:\n  <table>\n    <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n    <tr><th>extend</th><td>Interface |\nInterface[]</td><td>Single interface or array of interfaces this interface inherits from.</td></tr>\n    <tr><th>members</th><td>Map</td><td>Map of members of the interface.</td></tr>\n    <tr><th>statics</th><td>Map</td><td>\n        Map of statics of the interface. The statics will not get copied into the target class.\n        This is the same behaviour as statics in mixins ({@link qx.Mixin#define}).\n    </td></tr>\n    <tr><th>properties</th><td>Map</td><td>Map of properties and their definitions.</td></tr>\n    <tr><th>events</th><td>Map</td><td>Map of event names and the corresponding event class name.</td></tr>\n  </table></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Define a new interface. Interface definitions look much like class definitions. The\nmain difference is that the bodies of functions defined in <code>members</code>\nand <code>statics</code> are treated as preconditions for the methods\nimplementing the interface. These are typically used for parameter checks.</p>\n\n<p>For properties only the names are required so the value of the properties\ncan be empty maps.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\nqx.Interface.define(\"name\",\n{\n  extend: [SuperInterfaces],\n\n  statics:\n  {\n    PI : 3.14\n  },\n\n  properties: {\"color\": {}, \"name\": {} },\n\n  members:\n  {\n    meth1: function() { return true; },\n    meth2: function(a, b) { return arguments.length == 2; },\n    meth3: function(c) { return qx.Class.hasInterface(c.constructor, qx.some.IInterface); }\n  },\n\n  events :\n  {\n    keydown : \"qx.event.type.KeyEvent\"\n  }\n});\n</pre>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"flatten"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"[]","name":"ifaces"},children:[
          {type:"desc",attributes:{"text":"<p>List of interfaces to be resolved</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Interface","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates a list of all interfaces including their super interfaces\n(resolved recursively)</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"genericToString"},children:[
      {type:"desc",attributes:{"text":"<p>This method will be attached to all interface to return\na nice identifier for them.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The interface identifier</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getByName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>class name to resolve</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns an interface by name</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the class</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Class"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTotalNumber"},children:[
      {type:"desc",attributes:{"text":"<p>Determine the number of interfaces which are defined</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of classes</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isDefined"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>Interface name to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Determine if interface exists</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if interface exists</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}