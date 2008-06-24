{type:"class",attributes:{"name":"TreeRowStructure","hasWarning":"true","packageName":"qx.ui.tree","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.ui.tree.TreeRowStructure","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>The structure of a tree row.</p>\n\n<p>This is a singleton class.  The constructor is not accessed by users;\ninstead, to obtain the one and only TreeRowStructure object, call either</p>\n\n<pre class=\"javascript\">qx.ui.tree.TreeRowStructure.getInstance().newRow()</pre>\n\n<p>or</p>\n\n<pre class=\"javascript\">qx.ui.tree.TreeRowStructure.getInstance().standard().</pre>\n\n<p>The structure of a tree row is provided by a\nqx.ui.tree.TreeRowStructure.  The order of elements added to\nthis object is the order in which they will be presented in a tree row.</p>\n\n<p>The three standard parts of a tree: the indentation (and its associated\ntree-lines, if enabled), the icon (selected or unselected), and the label\nare added to the structure in the desired order by calling, respectively,\nthe methods addIndent(), addIcon() and addLabel().</p>\n\n<p>By default, indentation will appear at the beginning of the tree row.  This\ncan be changed by calling the addIndent() method after having calling other\nadd*() methods on this object.  If indentation is to be at the beginning of\nthe tree row, simply do not call addIndent().</p>\n\n<p>Any other object which is valid within a qx.ui.layout.HorizontalBoxLayout\nmay be added to the structure using addObject().  If the object has no\nspecial treatment, it may be made anonymous with obj.SetAnonymous(true).\nOtherwise, all handling for the object should be done by the application.</p>\n\n<p>A &#8220;standard&#8221; (traditional) tree row would be generated like this:</p>\n\n<pre class=\"javascript\">\ntreeRowStructure = qx.ui.tree.TreeRowStructure.getInstance().standard(\"Trash\");\n</pre>\n\n<p>which equates to issuing these commands:</p>\n\n<pre class=\"javascript\">\ntreeRowStructure = qx.ui.tree.TreeRowStructure.getInstance().newRow();\n\n//treeRowStructure.addIndent()  // defaults to here; no need to call\ntreeRowStructure.addIcon();\ntreeRowStructure.addLabel(\"Trash\");\n</pre>\n\n<p>The former method is typically preferred.</p>\n\n<p>An example of a more sophisticated structure:</p>\n\n<pre class=\"javascript\">\ntreeRowStructure = qx.ui.tree.TreeRowStructure.getInstance().newRow();\n\n// A left-justified icon\nobj = new qx.ui.basic.Image(\"icon/16/apps/accessories-alarm.png\");\ntreeRowStructure.addObject(obj, true);\n\n// Here's our indentation and tree-lines\ntreeRowStructure.addIndent();\n\n// The standard tree icon follows\ntreeRowStructure.addIcon(\"icon/16/places/user-desktop.png\",\"icon/16/apps/accessories-dictionary.png\");\n\n// Right after the tree icon is a checkbox\nobj = new qx.ui.form.CheckBox(null, 23, null, false);\nobj.setPadding(0, 0);\ntreeRowStructure.addObject(obj, true);\n\n// The label\ntreeRowStructure.addLabel(\"Trash\");\n\n// All else should be right justified\nobj = new qx.ui.basic.HorizontalSpacer;\ntreeRowStructure.addObject(obj, true);\n\n// Add a file size, date and mode\nobj = new qx.ui.basic.Label(\"23kb\");\nobj.setWidth(50);\ntreeRowStructure.addObject(obj, true);\nobj = new qx.ui.basic.Label(\"11 Sept 1959\");\nobj.setWidth(150);\ntreeRowStructure.addObject(obj, true);\nobj = new qx.ui.basic.Label(\"-rw-r--r--\");\nobj.setWidth(80);\ntreeRowStructure.addObject(obj, true);\n</pre>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"hasError":"true","name":"addIcon"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIcon"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIconSelected"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vIcon</code> is not documented.","column":"15","line":"253"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIconSelected</code> is not documented.","column":"15","line":"253"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"253"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addIndent"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"220"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addLabel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"16","line":"287"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"287"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"addObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vObj"},children:[
          {type:"desc",attributes:{"text":"<p>Widget to add</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vAnonymous"},children:[
          {type:"desc",attributes:{"text":"<p>Whether the widget should be set to be anonymous</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add an object to the tree row structure.  For convenience, vAnonymous can\nbe provided, and if a boolean value is provided, vObj.setAnonymous() {@link qx.ui.core.Widget#anonymous} is\ncalled with the provided value.  If the object has already been\nsetAnonymous or if there is no need to do so, then provide no value for\nvAnonymous or pass &#8216;null&#8217;.</p>"}}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getIconObject"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"338"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLabelObject"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"334"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"newRow"},children:[
      {type:"desc",attributes:{"text":"<p>Prepare to define a new row.</p>\n\n<p>This reinitializes the singleton TreeRowStructure so that it is ready to\ndefine a new tree row.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton itself, purely for convenience.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"standard"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLabel"},children:[
          {type:"desc",attributes:{"text":"<p>The label text</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIcon"},children:[
          {type:"desc",attributes:{"text":"<p>Relative path to the &#8216;non-selected&#8217; icon</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIconSelected"},children:[
          {type:"desc",attributes:{"text":"<p>Relative path to the &#8216;selected&#8217; icon</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Define a new row with the &#8216;standard&#8217; structure.</p>\n\n<p>This reinitializes the singleton TreeRowStructure to the state of a\nstandard&#8217;or traditional tree row:\n  &#8211; indentation\n  &#8211; icon\n  &#8211; label</p>\n\n<p>The icon parameters may be omitted in which case the defaults will be\nused.  If the label parameter is omitted, no label will appear.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton itself, purely for convenience.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.tree.TreeRowStructure"}}
          ]}
        ]}
      ]}
    ]}
  ]}