{type:"class",attributes:{"isStatic":"true","name":"Compare","packageName":"qx.util","fullName":"qx.util.Compare","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Collection of methods to compare two values.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"byFloat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Float"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Float"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Float numbers.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byFloatString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings representing floats. First convert the strings to  an float.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byIntegerString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings representing integers. First convert the strings to  an interger.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byIPv4"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings representing IPv4 adresses.\nExample: &#8220;192.168.1.2&#8221;</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byStringCaseInsensitive"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings ignoring the letter case.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byStringUmlautsLong"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings but first convert umlauts to ascii characters.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byStringUmlautsLongCaseInsensitive"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings but first convert umlauts to ascii characters and ignore letter case.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byStringUmlautsShort"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings but first convert umlauts to an ascii character.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byStringUmlautsShortCaseInsensitive"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare two Strings but first convert umlauts to an ascii character and ignore letter case.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"byZIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>first value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"b"},children:[
          {type:"desc",attributes:{"text":"<p>second value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Compare the zIndex property of two widgets.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>0 if both values are equal\n      a number > 0 if the first value if greater than the second one\n      a value < 0  otherwise</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]}
    ]}
  ]}