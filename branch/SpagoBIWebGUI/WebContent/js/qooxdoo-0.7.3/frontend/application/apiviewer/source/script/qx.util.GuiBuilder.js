{type:"class",attributes:{"name":"GuiBuilder","hasWarning":"true","packageName":"qx.util","superClass":"qx.core.Target","fullName":"qx.util.GuiBuilder","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A class to generate a widget hierarchy from <span class=\"caps\">XML</span>.</p>\n\n<p><span class=\"caps\">WARNING</span>: This class may not be up-to-date or fully functional since it\n         it is not actively maintained. However, there are other\n         (server-side) solutions for handling <span class=\"caps\">XML</span> <span class=\"caps\">GUI</span> descriptions.\n         Please see the qooxdoo homepage for related projects or ask on\n         the mailing list.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"flags"},children:[
          {type:"desc",attributes:{"text":"<p>map of flags. &#8220;flags.strict&#8221; sets strict mode.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_buildEventListener"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"args"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"text"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"27","line":"163"}},
        {type:"error",attributes:{"msg":"Parameter <code>args</code> is not documented.","column":"27","line":"163"}},
        {type:"error",attributes:{"msg":"Parameter <code>text</code> is not documented.","column":"27","line":"163"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"163"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_buildNodes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"nodes"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>parent</code> is not documented.","column":"19","line":"139"}},
        {type:"error",attributes:{"msg":"Parameter <code>nodes</code> is not documented.","column":"19","line":"139"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"139"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_buildWidgetFromNode"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>can either be the application instance, or a widget to append the xml toplevel widgets to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>can be either a xml string, or a xml dom document or fragment</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}},
            {type:"entry",attributes:{"type":"Document"}},
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>A node builder that will be used if no node builder is declared for a nodeName</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_coerce"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"boolean"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"15","line":"500"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"500"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_extractClassName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>node</code> is not documented.","column":"25","line":"606"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"606"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_findPropertyEditor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"className"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"propertyName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>className</code> is not documented.","column":"27","line":"373"}},
        {type:"error",attributes:{"msg":"Parameter <code>propertyName</code> is not documented.","column":"27","line":"373"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"373"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_mapXmlAttribToObject"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"node"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Node"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>node</code> is not documented.","column":"29","line":"627"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"627"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_newError"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"message"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"data"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"exception"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>message</code> is not documented.","column":"17","line":"657"}},
        {type:"error",attributes:{"msg":"Parameter <code>data</code> is not documented.","column":"17","line":"657"}},
        {type:"error",attributes:{"msg":"Parameter <code>exception</code> is not documented.","column":"17","line":"657"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"657"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_registerDefaultPropertyEditors"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"39","line":"416"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_setProperties"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"22","line":"560"}},
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"22","line":"560"}},
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"22","line":"560"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"560"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_setProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"20","line":"545"}},
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"20","line":"545"}},
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"20","line":"545"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"545"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_setWidgetProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"widget"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"name"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set a widget&#8217;s property using a propertyEditor</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"26","line":"353"}},
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"26","line":"353"}},
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"26","line":"353"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"build"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>can either be the application instance, or a widget to append the xml toplevel widgets to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"node"},children:[
          {type:"desc",attributes:{"text":"<p>can be either a xml string, or a xml dom document or fragment</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}},
            {type:"entry",attributes:{"type":"Document"}},
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>parse the children of the xml and appending all widgets to the parent widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"buildFromUrl"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>can either be the application instance, or a widget to append the xml toplevel widgets to</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Widget"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"url"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the <span class=\"caps\">XML</span> files</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Asynchronous method &#8211; fetches <span class=\"caps\">XML</span> data from the <span class=\"caps\">URL</span> then delegates to build to process the xml\nDispatches a qx.event.type.Event(&#8220;done&#8221;) after the hierarchy is built</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"registerPropertyEditor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"className"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"propertyName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"editor"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>className</code> is not documented.","column":"30","line":"403"}},
        {type:"error",attributes:{"msg":"Parameter <code>propertyName</code> is not documented.","column":"30","line":"403"}},
        {type:"error",attributes:{"msg":"Parameter <code>editor</code> is not documented.","column":"30","line":"403"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"403"}}
        ]}
      ]}
    ]}
  ]}