{type:"class",attributes:{"isStatic":"true","name":"String","hasWarning":"true","packageName":"qx.lang","fullName":"qx.lang.String","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>String helper functions</p>\n\n<p>The native JavaScript String is not modified by this class. However,\nthere are modifications to the native String in {@link qx.lang.Core} for\nbrowsers that do not support certain features.</p>\n\n<p>The additions implemented here may be added directly to native String by\na setting in {@link qx.lang.Prototypes}. This feature is not enabled by\ndefault.</p>\n\n<p>The string/array generics introduced in JavaScript 1.6 are supported by\n{@link qx.lang.Generics}.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"addListItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>serialized list. The items are seperated by &#8220;sep&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>list item to be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"sep"},children:[
          {type:"desc",attributes:{"text":"<p>separator</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Add a list item to a serialized list string\nExample:</p>\n\n<pre class=\"javascript\">qx.lang.String.addListItem(\"red, yellow, green\", \"blue\", \", \") == \"red, yellow, green, blue\"</pre>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with the added item</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"contains"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"substring"},children:[
          {type:"desc",attributes:{"text":"<p>substring to search for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the string contains a given substring</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the string contains the substring</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"endsWith"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fullstr"},children:[
          {type:"desc",attributes:{"text":"<p>the string to search in</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"substr"},children:[
          {type:"desc",attributes:{"text":"<p>the substring to look for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the string ends with the given substring</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the string ends with the given substring</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"endsWithAlternate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fullstr"}},
        {type:"param",attributes:{"name":"substr"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"130"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"escapeRegexpChars"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string where to escape the chars.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Escapes all chars that have a special meaning in regular expressions</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with the escaped chars.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"format"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pattern"},children:[
          {type:"desc",attributes:{"text":"<p>format string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>array of arguments to insert into the format string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Print a list of arguments using a format string\nIn the format string occurences of %n are replaced by the n&#8217;th element of the args list.\nExample:</p>\n\n<pre class=\"javascript\">qx.lang.String.format(\"Hello %1, my name is %2\", [\"Egon\", \"Franz\"]) == \"Hello Egon, my name is Franz\"</pre>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"pad"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to pad</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"length"},children:[
          {type:"desc",attributes:{"text":"<p>the final length of the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"ch"},children:[
          {type:"desc",attributes:{"text":"<p>character used to fill up the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"addRight"},children:[
          {type:"desc",attributes:{"text":"<p>true to add the padding characters to the right of the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Pad a string up to a given length. By default, padding characters are added to the\nleft of the string.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>paddded string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeListItem"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>serialized list. The items are seperated by &#8220;sep&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"item"},children:[
          {type:"desc",attributes:{"text":"<p>list item to be removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"sep"},children:[
          {type:"desc",attributes:{"text":"<p>separator</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove a list item from a serialized list string\nExample:</p>\n\n<pre class=\"javascript\">qx.lang.String.removeListItem(\"red, yellow, green\", \"yellow\", \", \") == \"red, green, blue\"</pre>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with the removed item</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"startsWith"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fullstr"},children:[
          {type:"desc",attributes:{"text":"<p>the string to search in</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"substr"},children:[
          {type:"desc",attributes:{"text":"<p>the substring to look for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the string starts with the given substring</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the string starts with the given substring</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"startsWithAlternate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"fullstr"}},
        {type:"param",attributes:{"name":"substr"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"113"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toArray"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string which should be splitted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a string to an array of characters.</p>\n\n<pre>\"hello\" => [ \"h\", \"e\", \"l\", \"l\", \"o\" ];</pre>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the result array of characters</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"toCamelCase"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"string"}}
        ]},
      {type:"desc",attributes:{"text":"<p>converts a string seperated by &#8217;-&#8217; to camel case.\nExample:</p>\n\n<pre class=\"javascript\">qx.lang.String.toCamelCase(\"to-camel-case\") == \"toCamelCase\"</pre>\n\n<p>Adapted from PrototypeJS</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>str</code>.","column":"19","line":"57"}},
        {type:"error",attributes:{"msg":"Parameter <code>string</code> is not documented.","column":"19","line":"57"}}
        ]},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>camel case string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toFirstLower"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert the first character of the string to lower case.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with a lower case first character</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"toFirstUp"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert the first character of the string to upper case.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the string with a upper case first character</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"trim"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to trim</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>removes white space from the left and the right side of a string</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"trimLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to trim</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>removes white space from the left side of a string</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"trimRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the string to trim</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>removes white space from the right side of a string</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]}
  ]}