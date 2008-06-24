{type:"class",attributes:{"name":"IntegerRange","packageName":"qx.util.range","superClass":"qx.core.Object","fullName":"qx.util.range.IntegerRange","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Create a list of successive integers.</p>\n\n<p><span class=\"caps\">WARNING</span>: Experimental!\n          Most likely to change in the future. May be pimped up by ideas\n          from <a href=\"http://www.mochikit.com/doc/html/MochiKit/Iter.html#fn-range\">http://www.mochikit.com/doc/html/MochiKit/Iter.html#fn-range</a>\n          or consolidated with {@link qx.util.range.Range}</p>\n\n<p>The constructor can take a negative step width, or start greater than stop,\n to create decreasing ranges.</p>\n\n<pre class=\"javascript\">\n  var r = new qx.util.range.IntegerRange(1,20);\n  var i;\n  while ((i = r.next())!=null) { alert(i) }; // yields 1,2,3,..,20\n</pre>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"0","name":"start"},children:[
          {type:"desc",attributes:{"text":"<p>inclusive start of range; can be bigger than stop to create decreasing\n  ranges</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"stop"},children:[
          {type:"desc",attributes:{"text":"<p>including end of range</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"1","name":"step"},children:[
          {type:"desc",attributes:{"text":"<p>step width between data points; can be negative to create decreasing\n  ranges</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"next"},children:[
      {type:"desc",attributes:{"text":"<p>Return the next number in the range, or null.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer/Null"}}
          ]}
        ]}
      ]}
    ]}
  ]}