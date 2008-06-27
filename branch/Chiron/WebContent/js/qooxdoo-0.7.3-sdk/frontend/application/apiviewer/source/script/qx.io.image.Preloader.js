{type:"class",attributes:{"name":"Preloader","packageName":"qx.io.image","superClass":"qx.core.Target","fullName":"qx.io.image.Preloader","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This class preloads one image and provides information about this image\nafter it is loaded.</p>\n\n<p>This class should not be used directly. Better use {@link qx.io.image.PreloaderManager}:</p>\n\n<pre class=\"javascript\">\nqx.io.image.PreloaderManager.getInstance().create(imageUrl)\n</pre>"}},
  {type:"events",children:[
    {type:"event",attributes:{"name":"error"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched if the image could not be loaded</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"load"},children:[
      {type:"desc",attributes:{"text":"<p>Dispatched after the images has successfully been loaded</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"imageUrl"},children:[
          {type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the image to pre load</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__onerror"},children:[
      {type:"desc",attributes:{"text":"<p>Error handler</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__onload"},children:[
      {type:"desc",attributes:{"text":"<p>Load handler</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Return the height of the image in pixel.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The height of the image in pixel.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIsPng"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the image format if <span class=\"caps\">PNG</span></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the image format if <span class=\"caps\">PNG</span></p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSource"},children:[
      {type:"desc",attributes:{"text":"<p>Get the full <span class=\"caps\">URI</span> of the image</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">URI</span> of the image</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getUri"},children:[
      {type:"desc",attributes:{"text":"<p>Get the full <span class=\"caps\">URI</span> of the image</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The <span class=\"caps\">URI</span> of the image</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Return the width of the image in pixel.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The width of the image in pixel.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isErroneous"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the loading of the image failed</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the loading of the image failed</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isLoaded"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the image is already loaded</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the image is already loaded</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}