{type:"class",attributes:{"isStatic":"true","name":"Generics","packageName":"qx.lang","fullName":"qx.lang.Generics","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Support string/array generics as introduced with JavaScript 1.6 for\nall browsers.</p>\n\n<p><a href=\"http://developer.mozilla.org/en/docs/New_in_JavaScript_1.6#Array_and_String_generics\">http://developer.mozilla.org/en/docs/New_in_JavaScript_1.6#Array_and_String_generics</a></p>\n\n<p><strong>Array</strong></p>\n\n<ul>\n<li>join</li>\n<li>reverse</li>\n<li>sort</li>\n<li>push</li>\n<li>pop</li>\n<li>shift</li>\n<li>unshift</li>\n<li>splice</li>\n<li>concat</li>\n<li>slice</li>\n<li>indexOf</li>\n<li>lastIndexOf</li>\n<li>forEach</li>\n<li>map</li>\n<li>filter</li>\n<li>some</li>\n<li>every</li>\n</ul>\n\n<p><strong>String</strong></p>\n\n<ul>\n<li>quote</li>\n<li>substring</li>\n<li>toLowerCase</li>\n<li>toUpperCase</li>\n<li>charAt</li>\n<li>charCodeAt</li>\n<li>indexOf</li>\n<li>lastIndexOf</li>\n<li>toLocaleLowerCase</li>\n<li>toLocaleUpperCase</li>\n<li>localeCompare</li>\n<li>match</li>\n<li>search</li>\n<li>replace</li>\n<li>split</li>\n<li>substr</li>\n<li>concat</li>\n<li>slice</li>\n</ul>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__init"},children:[
      {type:"desc",attributes:{"text":"<p>Initialize all generic functions as defined in JavaScript 1.6.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__wrap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the object in which prototype the function is defined.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"func"},children:[
          {type:"desc",attributes:{"text":"<p>name of the method to wrap.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Make a method of an object generic and return the generic functions.\nThe generic function takes as first parameter the object the method operates on.</p>\n\n<p><span class=\"caps\">TODO</span>: maybe mode this function to qx.lang.Function</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>wrapped method. This function takes as first argument an\n        instance of obj and as following arguments the arguments of the original method.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]}
    ]}
  ]}