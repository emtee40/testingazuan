{type:"class",attributes:{"isStatic":"true","name":"ThemeList","packageName":"qx.util","fullName":"qx.util.ThemeList","type":"class"},children:[
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__createButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"list"},children:[
          {type:"desc",attributes:{"text":"<p>list of themes</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Theme","dimensions":"1"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"prefix"},children:[
          {type:"desc",attributes:{"text":"<p>button caption prefix</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"callback"},children:[
          {type:"desc",attributes:{"text":"<p>callback function to apply new theme, the theme is stored in\n  the user data field &#8220;theme&#8221;.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for the given list</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createAppearanceButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing appearance themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createBorderButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing border themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createColorButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing color themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createFontButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing font themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createIconButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing icon themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createMetaButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing meta themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"createWidgetButtons"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"parent"},children:[
          {type:"desc",attributes:{"text":"<p>the parent where the buttons should be added</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.layout.CanvasLayout"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"y"},children:[
          {type:"desc",attributes:{"text":"<p>the y coordinate</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Generates buttons for all existing widget themes and\nplace it to the given coordinates inside the given parent</p>"}}
      ]}
    ]}
  ]}