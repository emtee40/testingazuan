{type:"class",attributes:{"name":"Header","packageName":"qx.ui.table.pane","superClass":"qx.ui.layout.HorizontalBoxLayout","fullName":"qx.ui.table.pane.Header","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Shows the header of a table.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"paneScroller"},children:[
          {type:"desc",attributes:{"text":"<p>the TablePaneScroller the header belongs to.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"table-header\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","name":"_cleanUpCells"},children:[
      {type:"desc",attributes:{"text":"<p>Cleans up all header cells.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColOrderChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called the column order has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onColWidthChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the width of a column has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onPaneModelChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the pane model has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onTableModelMetaDataChanged"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when the table model meta data has changed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateContent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"completeUpdate"},children:[
          {type:"desc",attributes:{"text":"<p>if true a complete update is performed. On a\n     complete update all header widgets are recreated.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Updates the content of the header.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaneScroller"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the TablePaneScroller this header belongs to.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the TablePaneScroller.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the table this header belongs to.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the table.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.ui.table.Table"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hideColumnMoveFeedback"},children:[
      {type:"desc",attributes:{"text":"<p>Hides the feedback shown while a column is moved by the user.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isShowingColumnMoveFeedback"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the column move feedback is currently shown.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setColumnWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the column to change the width for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>the new width.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the column width. This overrides the width from the column model.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMouseOverColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column the mouse is currently over or\n     null if the mouse is over no column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the column the mouse is currently over.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"showColumnMoveFeedback"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"col"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the column to show the move feedback for.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"x"},children:[
          {type:"desc",attributes:{"text":"<p>the x position the left side of the feeback should have\n     (in pixels, relative to the left side of the header).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Shows the feedback shown while a column is moved by the user.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}