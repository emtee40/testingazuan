{type:"class",attributes:{"name":"Version","packageName":"qx.util","superClass":"qx.core.Object","fullName":"qx.util.Version","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Generic handling of version numbers based on a string representation of\nmajor, minor and revision flags. A incoming version object can be compared\nwith the stored version string including checks to determine if this\nversion is smaller than or identical to the one stored.</p>\n\n<p>This class contains code based on the following work:</p>\n\n<p>SWFObject: Javascript Flash Player detection and embed script</p>\n\n<p><a href=\"http://blog.deconcept.com/swfobject/\">http://blog.deconcept.com/swfobject/</a></p>\n\n<p>Version: 1.4.4</p>\n\n<p>License:</p>\n\n<p><span class=\"caps\">MIT</span>: <a href=\"http://www.opensource.org/licenses/mit-license.php\">http://www.opensource.org/licenses/mit-license.php</a></p>\n\n<p>For more info, please see the corresponding source file.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arrVersion"},children:[
          {type:"desc",attributes:{"text":"<p>array with three elements defining major,\n  minor and revision number or an equivalent version string separated by &#8217;.&#8217;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}},
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getMajor"},children:[
      {type:"desc",attributes:{"text":"<p>Return major version number</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>major version number</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}},
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinor"},children:[
      {type:"desc",attributes:{"text":"<p>Return minor version number</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>minor version number</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}},
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRev"},children:[
      {type:"desc",attributes:{"text":"<p>Return revision number</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>revision number</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}},
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"versionIsValid"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fv"},children:[
          {type:"desc",attributes:{"text":"<p>Version number to compare with</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.Version"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Comapres the Version with another version number.\nReturns true if this version instance has a bigger version number</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the version instance has a bigger version numbers.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}