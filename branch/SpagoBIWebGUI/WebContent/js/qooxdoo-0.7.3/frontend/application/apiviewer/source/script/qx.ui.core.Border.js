{type:"class",attributes:{"name":"Border","hasWarning":"true","packageName":"qx.ui.core","superClass":"qx.core.Object","fullName":"qx.ui.core.Border","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Border implementation for qx.ui.core.Widget instances.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>The border width, see also {@link #width}</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"style"},children:[
          {type:"desc",attributes:{"text":"<p>The border style, see also {@link #style}</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"color"},children:[
          {type:"desc",attributes:{"text":"<p>The border color, see also {@link #color}</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"fromConfig"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"config"},children:[
          {type:"desc",attributes:{"text":"<p>map of property values</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a map property definition into a border object.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the created instance</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Border"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromString"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"str"},children:[
          {type:"desc",attributes:{"text":"<p>the <span class=\"caps\">CSS</span> string</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Converts a typical <span class=\"caps\">CSS</span> border definition string to an border object</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the created instance</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.core.Border"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"resetBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget from which the border should removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a border from a widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"resetLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget from which the border should removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a border from a widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"resetRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget from which the border should removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a border from a widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"resetTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"desc",attributes:{"text":"<p>The widget from which the border should removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Removes a border from a widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__computeComplexBottom"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"752"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__computeComplexLeft"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"756"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__computeComplexRight"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"748"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__computeComplexTop"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"744"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__informManager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"edge"},children:[
          {type:"desc",attributes:{"text":"<p>the edge which was updated</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Send information to BorderManager</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorBottom","name":"_applyColorBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorInnerBottom","name":"_applyColorInnerBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorInnerBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorInnerBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorInnerLeft","name":"_applyColorInnerLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorInnerLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorInnerLeft}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorInnerRight","name":"_applyColorInnerRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorInnerRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorInnerRight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorInnerTop","name":"_applyColorInnerTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorInnerTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorInnerTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorLeft","name":"_applyColorLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorLeft}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorRight","name":"_applyColorRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorRight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#colorTop","name":"_applyColorTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>colorTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyColorTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#styleBottom","name":"_applyStyleBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>styleBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyleBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#styleLeft","name":"_applyStyleLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>styleLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyleLeft}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#styleRight","name":"_applyStyleRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>styleRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyleRight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#styleTop","name":"_applyStyleTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>styleTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyStyleTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#widthBottom","name":"_applyWidthBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>widthBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidthBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#widthLeft","name":"_applyWidthLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>widthLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidthLeft}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#widthRight","name":"_applyWidthRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>widthRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidthRight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Border#widthTop","name":"_applyWidthTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>widthTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidthTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorInnerBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorInnerLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorInnerRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorInnerTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeColorTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the color value to apply</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Color"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Reacts on color changes reported by the connected ColorManager.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getColorBottom","fromProperty":"colorBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorInnerBottom","fromProperty":"colorInnerBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorInnerBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorInnerBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorInnerLeft","fromProperty":"colorInnerLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorInnerLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorInnerLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorInnerRight","fromProperty":"colorInnerRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorInnerRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorInnerRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorInnerTop","fromProperty":"colorInnerTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorInnerTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorInnerTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorLeft","fromProperty":"colorLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorRight","fromProperty":"colorRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColorTop","fromProperty":"colorTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>colorTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>colorTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStyleBottom","fromProperty":"styleBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>styleBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>styleBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStyleLeft","fromProperty":"styleLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>styleLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>styleLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStyleRight","fromProperty":"styleRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>styleRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>styleRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getStyleTop","fromProperty":"styleTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>styleTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>styleTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidthBottom","fromProperty":"widthBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>widthBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>widthBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidthLeft","fromProperty":"widthLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>widthLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>widthLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidthRight","fromProperty":"widthRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>widthRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>widthRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidthTop","fromProperty":"widthTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>widthTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>widthTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorBottom","fromProperty":"colorBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorInnerBottom","fromProperty":"colorInnerBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorInnerBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorInnerBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorInnerLeft","fromProperty":"colorInnerLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorInnerLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorInnerLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorInnerRight","fromProperty":"colorInnerRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorInnerRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorInnerRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorInnerTop","fromProperty":"colorInnerTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorInnerTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorInnerTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorLeft","fromProperty":"colorLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorRight","fromProperty":"colorRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initColorTop","fromProperty":"colorTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>colorTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>colorTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #colorTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStyleBottom","fromProperty":"styleBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>styleBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>styleBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #styleBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStyleLeft","fromProperty":"styleLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>styleLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>styleLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #styleLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStyleRight","fromProperty":"styleRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>styleRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>styleRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #styleRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initStyleTop","fromProperty":"styleTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>styleTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>styleTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #styleTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidthBottom","fromProperty":"widthBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>widthBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>widthBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #widthBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidthLeft","fromProperty":"widthLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>widthLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>widthLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #widthLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidthRight","fromProperty":"widthRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>widthRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>widthRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #widthRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidthTop","fromProperty":"widthTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>widthTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>widthTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #widthTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","name":"renderBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the widget which should get the border</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders bottom border for given widget</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","name":"renderLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the widget which should get the border</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders left border for given widget</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","name":"renderRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the widget which should get the border</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders right border for given widget</p>"}}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","name":"renderTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the widget which should get the border</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders top border for given widget</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetBottom","fromProperty":"bottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>bottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColor","fromProperty":"color"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>color</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorBottom","fromProperty":"colorBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorInnerBottom","fromProperty":"colorInnerBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorInnerBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorInnerLeft","fromProperty":"colorInnerLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorInnerLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorInnerRight","fromProperty":"colorInnerRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorInnerRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorInnerTop","fromProperty":"colorInnerTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorInnerTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorLeft","fromProperty":"colorLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorRight","fromProperty":"colorRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetColorTop","fromProperty":"colorTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>colorTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #colorTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetInnerColor","fromProperty":"innerColor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLeft","fromProperty":"left"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>left</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetRight","fromProperty":"right"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>right</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #right}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStyle","fromProperty":"style"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>style</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStyleBottom","fromProperty":"styleBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>styleBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #styleBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStyleLeft","fromProperty":"styleLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>styleLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #styleLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStyleRight","fromProperty":"styleRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>styleRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #styleRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetStyleTop","fromProperty":"styleTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>styleTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #styleTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTop","fromProperty":"top"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>top</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidth","fromProperty":"width"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>width</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidthBottom","fromProperty":"widthBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>widthBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #widthBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidthLeft","fromProperty":"widthLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>widthLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #widthLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidthRight","fromProperty":"widthRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>widthRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #widthRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWidthTop","fromProperty":"widthTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>widthTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #widthTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBottom","fromProperty":"bottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widthBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>bottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setColor","fromProperty":"color"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"colorTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>color</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #color}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setColorBottom","fromProperty":"colorBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorInnerBottom","fromProperty":"colorInnerBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorInnerBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorInnerBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorInnerLeft","fromProperty":"colorInnerLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorInnerLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorInnerLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorInnerRight","fromProperty":"colorInnerRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorInnerRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorInnerRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorInnerTop","fromProperty":"colorInnerTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorInnerTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorInnerTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorInnerTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorLeft","fromProperty":"colorLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorRight","fromProperty":"colorRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColorTop","fromProperty":"colorTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>colorTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>colorTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #colorTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setInnerColor","fromProperty":"innerColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"colorInnerTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorInnerTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorInnerRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorInnerRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorInnerBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorInnerBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorInnerLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorInnerLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>innerColor</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColor}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setLeft","fromProperty":"left"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widthLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setRight","fromProperty":"right"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widthRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>right</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #right}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setStyle","fromProperty":"style"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"styleTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>style</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #style}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setStyleBottom","fromProperty":"styleBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>styleBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>styleBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStyleLeft","fromProperty":"styleLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>styleLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>styleLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStyleRight","fromProperty":"styleRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>styleRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>styleRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setStyleTop","fromProperty":"styleTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>styleTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>styleTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #styleTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTop","fromProperty":"top"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widthTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"styleTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #styleTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"colorTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #colorTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setWidth","fromProperty":"width"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widthTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"widthRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"widthBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"widthLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #widthLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>width</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setWidthBottom","fromProperty":"widthBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>widthBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>widthBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidthLeft","fromProperty":"widthLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>widthLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>widthLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidthRight","fromProperty":"widthRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>widthRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>widthRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidthTop","fromProperty":"widthTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>widthTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>widthTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widthTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"hasError":"true","group":"\"widthBottom\",\"styleBottom\",\"colorBottom\"","name":"bottom","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","propertyType":"group","group":"\"colorTop\",\"colorRight\",\"colorBottom\",\"colorLeft\"","name":"color","mode":"shorthand"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorBottom","apply":"_applyColorBottom"},children:[
      {type:"desc",attributes:{"text":"<p>bottom color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorInnerBottom","apply":"_applyColorInnerBottom"},children:[
      {type:"desc",attributes:{"text":"<p>bottom inner color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorInnerLeft","apply":"_applyColorInnerLeft"},children:[
      {type:"desc",attributes:{"text":"<p>left inner color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorInnerRight","apply":"_applyColorInnerRight"},children:[
      {type:"desc",attributes:{"text":"<p>right inner color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorInnerTop","apply":"_applyColorInnerTop"},children:[
      {type:"desc",attributes:{"text":"<p>top inner color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorLeft","apply":"_applyColorLeft"},children:[
      {type:"desc",attributes:{"text":"<p>left color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorRight","apply":"_applyColorRight"},children:[
      {type:"desc",attributes:{"text":"<p>right color of border</p>"}}
      ]},
    {type:"property",attributes:{"check":"Color","allowNull":"true","propertyType":"new","name":"colorTop","apply":"_applyColorTop"},children:[
      {type:"desc",attributes:{"text":"<p>top color of border</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","propertyType":"group","group":"\"colorInnerTop\",\"colorInnerRight\",\"colorInnerBottom\",\"colorInnerLeft\"","name":"innerColor","mode":"shorthand"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"widthLeft\",\"styleLeft\",\"colorLeft\"","name":"left","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"widthRight\",\"styleRight\",\"colorRight\"","name":"right","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","propertyType":"group","group":"\"styleTop\",\"styleRight\",\"styleBottom\",\"styleLeft\"","name":"style","mode":"shorthand"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"styleBottom","defaultValue":"\"solid\"","allowNull":"true","propertyType":"new","possibleValues":"\"solid\",\"dotted\",\"dashed\",\"double\",\"outset\",\"inset\",\"ridge\",\"groove\"","apply":"_applyStyleBottom"},children:[
      {type:"desc",attributes:{"text":"<p>bottom style of border</p>"}}
      ]},
    {type:"property",attributes:{"name":"styleLeft","defaultValue":"\"solid\"","allowNull":"true","propertyType":"new","possibleValues":"\"solid\",\"dotted\",\"dashed\",\"double\",\"outset\",\"inset\",\"ridge\",\"groove\"","apply":"_applyStyleLeft"},children:[
      {type:"desc",attributes:{"text":"<p>left style of border</p>"}}
      ]},
    {type:"property",attributes:{"name":"styleRight","defaultValue":"\"solid\"","allowNull":"true","propertyType":"new","possibleValues":"\"solid\",\"dotted\",\"dashed\",\"double\",\"outset\",\"inset\",\"ridge\",\"groove\"","apply":"_applyStyleRight"},children:[
      {type:"desc",attributes:{"text":"<p>right style of border</p>"}}
      ]},
    {type:"property",attributes:{"name":"styleTop","defaultValue":"\"solid\"","allowNull":"true","propertyType":"new","possibleValues":"\"solid\",\"dotted\",\"dashed\",\"double\",\"outset\",\"inset\",\"ridge\",\"groove\"","apply":"_applyStyleTop"},children:[
      {type:"desc",attributes:{"text":"<p>top style of border</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"widthTop\",\"styleTop\",\"colorTop\"","name":"top","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","propertyType":"group","group":"\"widthTop\",\"widthRight\",\"widthBottom\",\"widthLeft\"","name":"width","mode":"shorthand"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"292"}}
        ]}
      ]},
    {type:"property",attributes:{"apply":"_applyWidthBottom","defaultValue":"0","propertyType":"new","name":"widthBottom","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>bottom width of border</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyWidthLeft","defaultValue":"0","propertyType":"new","name":"widthLeft","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>left width of border</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyWidthRight","defaultValue":"0","propertyType":"new","name":"widthRight","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>right width of border</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyWidthTop","defaultValue":"0","propertyType":"new","name":"widthTop","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>top width of border</p>"}}
      ]}
    ]}
  ]}