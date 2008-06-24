{type:"class",attributes:{"isStatic":"true","name":"Mixin","packageName":"qx","fullName":"qx.Mixin","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This class is used to define mixins (similar to mixins in Ruby).</p>\n\n<p>Mixins are collections of code and variables, which can be merged into\nother classes. They are similar to classes but don&#8217;t support inheritance.</p>\n\n<p>See the description of the {@link #define} method how a mixin is defined.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"checkCompatibility"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"mixins"},children:[
          {type:"desc",attributes:{"text":"<p>an array of mixins</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Mixin","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check compatiblity between mixins (including their includes)</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"define"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>name of the mixin</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>Mixin definition structure. The configuration map has the following keys:\n  <table>\n    <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n    <tr><th>construct</th><td>Function</td><td>An optional mixin constructor. It is called on instantiation each\n        class including this mixin. The constructor takes no parameters.</td></tr>\n    <tr><th>destruct</th><td>Function</td><td>An optional mixin destructor.</td></tr>\n    <tr><th>include</th><td>Mixin[]</td><td>Array of mixins, which will be merged into the mixin.</td></tr>\n    <tr><th>statics</th><td>Map</td><td>\n        Map of statics of the mixin. The statics will not get copied into the target class. They remain\n        acceccible from the mixin. This is the same behaviour as statics in interfaces ({@link qx.Interface#define}).\n    </td></tr>\n    <tr><th>members</th><td>Map</td><td>Map of members of the mixin.</td></tr>\n    <tr><th>properties</th><td>Map</td><td>Map of property definitions. Format of the map: <span class=\"caps\">TODOC</span></td></tr>\n    <tr><th>events</th><td>Map</td><td>\n        Map of events the mixin fires. The keys are the names of the events and the values are\n        corresponding event type classes.\n    </td></tr>\n  </table></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Define a new mixin.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\nqx.Mixin.define(\"name\",\n{\n  includes: [SuperMixins],\n\n  properties: {\n    tabIndex: {type: \"number\", init: -1}\n  },\n\n  members:\n  {\n    prop1: \"foo\",\n    meth1: function() {},\n    meth2: function() {}\n  }\n});\n</pre>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"flatten"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"[]","name":"mixins"},children:[
          {type:"desc",attributes:{"text":"<p>List of mixins</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Mixin","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates a list of all mixins given plus all the\nmixins these includes plus&#8230; (deep)</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"genericToString"},children:[
      {type:"desc",attributes:{"text":"<p>This method will be attached to all mixins to return\na nice identifier for them.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The mixin identifier</p>"}},
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
      {type:"desc",attributes:{"text":"<p>Returns a mixin by name</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the class</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Class"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTotalNumber"},children:[
      {type:"desc",attributes:{"text":"<p>Determine the number of mixins which are defined</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of classes</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isCompatible"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"mixin"},children:[
          {type:"desc",attributes:{"text":"<p>mixin to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Mixin"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clazz"},children:[
          {type:"desc",attributes:{"text":"<p>class to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Class"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Checks if a class is compatible to the given mixin (no conflicts)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the mixin is compatible to the given class</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isDefined"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"},children:[
          {type:"desc",attributes:{"text":"<p>mixin name to check</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Determine if mixin exists</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if mixin exists</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}