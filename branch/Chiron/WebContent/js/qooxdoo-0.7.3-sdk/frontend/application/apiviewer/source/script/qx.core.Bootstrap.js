{type:"class",attributes:{"isStatic":"true","name":"Bootstrap","packageName":"qx.core","fullName":"qx.core.Bootstrap","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Internal class that is responsible for bootstrapping the qooxdoo\nframework at load time.</p>\n\n<p>Automatically loads JavaScript language fixes, core logging possibilities\nand language addons for arrays, strings, etc.</p>"}},
  {type:"constants",children:[
    {type:"constant",attributes:{"name":"LOADSTART"},children:[
      {type:"desc",attributes:{"text":"<p>Timestamp of qooxdoo based application startup</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"since"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the time since initialisation</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>milliseconds since load</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"time"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the current timestamp</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Current timestamp (milliseconds)</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]}
    ]}
  ]}