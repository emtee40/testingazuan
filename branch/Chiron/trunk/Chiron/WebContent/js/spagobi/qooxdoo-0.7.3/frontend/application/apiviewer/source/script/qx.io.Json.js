{type:"class",attributes:{"isStatic":"true","name":"Json","packageName":"qx.io","fullName":"qx.io.Json","type":"class"},children:[
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"BEAUTIFYING_LINE_END","value":"\n"},children:[
      {type:"desc",attributes:{"text":"<p>new line string for <span class=\"caps\">JSON</span> pretty printing</p>"}}
      ]},
    {type:"constant",attributes:{"type":"String","name":"BEAUTIFYING_INDENT","value":"  "},children:[
      {type:"desc",attributes:{"text":"<p>indent string for <span class=\"caps\">JSON</span> pretty printing</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertArray"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Array to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertBoolean"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Boolean to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertDate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Implemented by Derrell L. and Andreas J.</p>\n\n<p>The Date object is a primitive type in Javascript,\nbut the Javascript specification neglects to provide\na literal form for it.  The only way to generate a\nDate object is with &#8220;new Date()&#8221;.  For fast\nprocessing by Javascript, we want to be able to\neval() a <span class=\"caps\">JSON</span> response.  If Date objects are to be\npassed to the client using <span class=\"caps\">JSON</span>, about the only\nreasonable way to do it is to have &#8220;new Date()&#8221;\nin the <span class=\"caps\">JSON</span> message.  See this page for a proposal to\nadd a Date literal syntax to Javascript which,\nif/when implemented in Javascript, would eliminate\nthe need to pass &#8220;new Date() in <span class=\"caps\">JSON</span>&#8221;:</p>\n\n<p><a href=\"http://www.hikhilk.net/DateSyntaxForJSON.aspx\">http://www.hikhilk.net/DateSyntaxForJSON.aspx</a></p>\n\n<p>Sending a <span class=\"caps\">JSON</span> message from client to server, we have\nno idea what language the server will be written in,\nwhat size integers it supports, etc.  We do want to\nbe able to represent as large a range of dates as\npossible, though.  If we were to send the number of\nmilliseconds since the beginning of the epoch, the\nvalue would exceed, in many cases, what can fit in a\n32-bit integer.  Even if one were to simply strip off\nthe last three digits (milliseconds), the number of\nseconds could exceed a 32-bit signed integer&#8217;s range\nwith very distant past or distant future dates.  To\nmake it easier for any generic server to handle a\ndate without risk of loss of precision due to\nautomatic type casting, we&#8217;ll send a <span class=\"caps\">UTC</span> date with\nseparated fields, in the form:</p>\n\n<p>new Date(Date.UTC(year,month,day,hour,min,sec,ms))</p>\n\n<p>The server can fairly easily parse this in its <span class=\"caps\">JSON</span>\nimplementation by stripping off &#8220;new Date(Date.UTC(&#8221;\nfrom the beginning of the string, and &#8221;))&#8221; from the\nend of the string.  What remains is the set of\ncomma-separated date components, which are also very\neasy to parse.</p>\n\n<p>The server should send this same format to the\nclient, which can simply eval() it just as with the\nremainder of <span class=\"caps\">JSON</span>.</p>\n\n<p>A requirement of the implementation of the server is\nthat after a date has been sent from the client to\nthe server, converted by the server into whatever\nnative type the date will be stored or manipulated\nin, convered back to <span class=\"caps\">JSON</span>, and received back at the\nclient, a comparison of the sent and received Date\nobject should yield identity.  This means that even\nif the server does not natively operate on\nmilliseconds, it must maintain milliseconds in dates\nsent to it by the client.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Function to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertMap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Map to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Number to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from Object to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from String to <span class=\"caps\">JSON</span> String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertStringHelper"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>incoming array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>character to convert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>callback for JavaScript string escaping</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>converted character</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__convertUndefined"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"incoming"},children:[
          {type:"desc",attributes:{"text":"<p>The incoming value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"undefined"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts the incoming value from undefined to String.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>value converted to a <span class=\"caps\">JSON</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"parse"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"text"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">JSON</span> string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Parse a <span class=\"caps\">JSON</span> text, producing a JavaScript value.\nIt returns false if there is a syntax error.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Returns the object</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"parseQx"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"text"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">JSON</span> string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Parse a <span class=\"caps\">JSON</span> text, producing a JavaScript value.\nIt triggers an exception if there is a syntax error.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>evaluated <span class=\"caps\">JSON</span> string.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"stringify"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the object to serialize.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"false","name":"beautify"},children:[
          {type:"desc",attributes:{"text":"<p>whether to beautify the serialized string\n         by adding some white space that indents objects and arrays.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Stringify a JavaScript value, producing a <span class=\"caps\">JSON</span> text.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the serialized object.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}