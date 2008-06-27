{type:"class",attributes:{"isStatic":"true","name":"ColorUtil","packageName":"qx.util","fullName":"qx.util.ColorUtil","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Methods to convert colors between different color spaces.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__hex3StringToRgb"},children:[
      {type:"desc",attributes:{"text":"<p>Converts a regexp object match of a hex3 string to an <span class=\"caps\">RGB</span> array.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__hex6StringToRgb"},children:[
      {type:"desc",attributes:{"text":"<p>Converts a regexp object match of a hex6 string to an <span class=\"caps\">RGB</span> array.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__rgbStringToRgb"},children:[
      {type:"desc",attributes:{"text":"<p>Converts a regexp object match of a rgb string to an <span class=\"caps\">RGB</span> array.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"cssStringToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Try to convert a incoming string to an <span class=\"caps\">RGB</span> array.\nSupport named colors, <span class=\"caps\">RGB</span> strings, hex3 and hex6 values.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>returns an array of red, green, blue on a successful transformation</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"hex3StringToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>a hex3 (#xxx) string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a hex3 string to an <span class=\"caps\">RGB</span> array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"hex6StringToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>a hex6 (#xxxxxx) string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a hex6 string to an <span class=\"caps\">RGB</span> array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"hexStringToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>a hex3 (#xxx) or hex6 (#xxxxxx) string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a hex string to an <span class=\"caps\">RGB</span> array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"hsbToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"hsb"},children:[
          {type:"desc",attributes:{"text":"<p>an array with hue, saturation and brightness</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert <span class=\"caps\">HSB</span> colors to <span class=\"caps\">RGB</span></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with red, green, blue</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isCssString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Detects if a string is a valid <span class=\"caps\">CSS</span> color string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the incoming value is a valid <span class=\"caps\">CSS</span> color string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isHex3String"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Detects if a string is a valid hex3 string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the incoming value is a valid hex3 string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isHex6String"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Detects if a string is a valid hex6 string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the incoming value is a valid hex6 string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isNamedColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the incoming value is a named color.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the color is a named color</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isRgbString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Detects if a string is a valid <span class=\"caps\">RGB</span> string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the incoming value is a valid <span class=\"caps\">RGB</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isSystemColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the incoming value is a system color.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the color is a system color</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isThemedColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to test</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the incoming value is a themed color.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true if the color is a themed color</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isValid"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Detects if a string is a valid qooxdoo color</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>true when the incoming value is a valid qooxdoo color</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"randomColor"},children:[
      {type:"desc",attributes:{"text":"<p>Creates a random color.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a valid qooxdoo/CSS rgb color string.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"rgbToHexString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rgb"},children:[
          {type:"desc",attributes:{"text":"<p>an array with red, green and blue</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a <span class=\"caps\">RGB</span> array to an hex6 string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a hex6 string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"rgbToHsb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rgb"},children:[
          {type:"desc",attributes:{"text":"<p>red, blue and green as array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert <span class=\"caps\">RGB</span> colors to <span class=\"caps\">HSB</span></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with hue, saturation and brightness</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"rgbToRgbString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rgb"},children:[
          {type:"desc",attributes:{"text":"<p>an array with red, green and blue</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a <span class=\"caps\">RGB</span> array to an <span class=\"caps\">RGB</span> string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a <span class=\"caps\">RGB</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"stringToRgb"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Try to convert a incoming string to an <span class=\"caps\">RGB</span> array.\nSupports themed, named and system colors, but also <span class=\"caps\">RGB</span> strings,\nhex3 and hex6 values.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>returns an array of red, green, blue on a successful transformation</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"stringToRgbString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>any string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Try to convert a incoming string to an <span class=\"caps\">RGB</span> string, which can be used\nfor all color properties.\nSupports themed, named and system colors, but also <span class=\"caps\">RGB</span> strings,\nhex3 and hex6 values.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a <span class=\"caps\">RGB</span> string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"name":"NAMED"},children:[
      {type:"desc",attributes:{"text":"<p>Named colors, only the 16 basic colors plus the following ones:\ntransparent, grey, magenta, orange and brown</p>"}}
      ]},
    {type:"constant",attributes:{"name":"REGEXP"},children:[
      {type:"desc",attributes:{"text":"<p>Regular expressions for color strings</p>"}}
      ]},
    {type:"constant",attributes:{"name":"SYSTEM"},children:[
      {type:"desc",attributes:{"text":"<p>CSS3 system color names.</p>"}}
      ]}
    ]}
  ]}