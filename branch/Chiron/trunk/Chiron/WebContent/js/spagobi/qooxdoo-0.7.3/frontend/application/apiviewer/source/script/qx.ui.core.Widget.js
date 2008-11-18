{type:"class",attributes:{"isAbstract":"true","name":"Widget","hasWarning":"true","packageName":"qx.ui.core","superClass":"qx.core.Target","childClasses":"qx.ui.basic.Terminator,qx.ui.core.Parent,qx.ui.table.columnmodel.resizebehavior.ColumnData","fullName":"qx.ui.core.Widget","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>This is the main widget, all visible objects in the application extend this.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.core.Widget","name":"widget"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"selected"},children:[
          {type:"desc",attributes:{"text":"<p>Set by {@link qx.ui.selection.SelectionManager#renderItemSelectionState}</p>"}}
          ]},
        {type:"state",attributes:{"name":"anchor"},children:[
          {type:"desc",attributes:{"text":"<p>Set by {@link qx.ui.selection.SelectionManager#renderItemAnchorState}</p>"}}
          ]},
        {type:"state",attributes:{"name":"lead"},children:[
          {type:"desc",attributes:{"text":"<p>Set by {@link qx.ui.selection.SelectionManager#renderItemLeadState}</p>"}}
          ]},
        {type:"state",attributes:{"name":"disabled"},children:[
          {type:"desc",attributes:{"text":"<p>Set by {@link qx.core.Object#enabled}</p>"}}
          ]},
        {type:"state",attributes:{"name":"focused"},children:[
          {type:"desc",attributes:{"text":"<p>Set by {@link #focused}</p>"}}
          ]}
        ]}
      ]}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"}}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"hasError":"true","name":"appear"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"beforeAppear"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"beforeDisappear"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"beforeInsertDom"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"beforeRemoveDom"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"blur"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.core.Parent})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeAnonymous"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #anonymous}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeAppearance"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #appearance}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeBackgroundColor"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #backgroundColor}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeBorder"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #border}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeBottom"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #bottom}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeCapture"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #capture}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeDisplay"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #display}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeElement"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #element}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeEnabled"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #enabled}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeFocused"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #focused}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeFont"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #font}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeHeight"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #height}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeLeft"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #left}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeMaxHeight"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #maxHeight}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeMaxWidth"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #maxWidth}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeMinHeight"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #minHeight}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeMinWidth"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #minWidth}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeOverflow"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #overflow}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeParent"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #parent}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeRight"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #right}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTabIndex"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #tabIndex}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTextColor"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #textColor}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeTop"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #top}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeVisibility"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #visibility}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeWidth"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #width}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeZIndex"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #zIndex}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"click"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"contextmenu"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"create"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dblclick"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"disappear"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragdrop"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragend"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragmove"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragout"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragover"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"dragstart"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.DragAndDropHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DragEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"execute"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"focus"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.core.Parent})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"focusin"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.core.Parent})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"focusout"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.ui.core.Parent})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"insertDom"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"keydown"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"keyinput"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"keypress"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"keyup"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mousedown"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mousemove"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mouseout"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mouseover"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mouseup"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"mousewheel"},children:[
      {type:"desc",attributes:{"text":"<p>(Fired by {@link qx.event.handler.EventHandler})</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"hasError":"true","name":"removeDom"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"82"}}
        ]},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","hasError":"true","isStatic":"true","name":"__initApplyMethods"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"members"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>members</code> is not documented.","column":"26","line":"952"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"952"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","isStatic":"true","name":"__initLayoutProperties"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"statics"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>statics</code> is not documented.","column":"30","line":"1053"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"1053"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_autoFlushHelper"},children:[
      {type:"desc",attributes:{"text":"<p>Helper function for auto flush.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_initAutoFlush"},children:[
      {type:"desc",attributes:{"text":"<p>Creates an auto-flush timeout.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_removeAutoFlush"},children:[
      {type:"desc",attributes:{"text":"<p>Removes an auto-flush timeout.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalDisplayQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"31","line":"689"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"689"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalElementQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"31","line":"384"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"384"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalJobQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"27","line":"536"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"536"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalLayoutQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vParent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vParent</code> is not documented.","column":"30","line":"612"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"612"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalStateQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"29","line":"460"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"460"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"addToGlobalWidgetQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"30","line":"308"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"308"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"create"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clazz"}},
        {type:"param",attributes:{"name":"appearance"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"176"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalDisplayQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"735"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalElementQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"421"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalJobQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"573"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalLayoutQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"649"}}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"flushGlobalQueues"},children:[
      {type:"desc",attributes:{"text":"<p>Flush all global queues</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalStateQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"497"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"flushGlobalWidgetQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"345"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getActiveSiblingHelper"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vObject"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vParent"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vCalc"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vMode"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
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
        {type:"error",attributes:{"msg":"Parameter <code>vObject</code> is not documented.","column":"30","line":"913"}},
        {type:"error",attributes:{"msg":"Parameter <code>vParent</code> is not documented.","column":"30","line":"913"}},
        {type:"error",attributes:{"msg":"Parameter <code>vCalc</code> is not documented.","column":"30","line":"913"}},
        {type:"error",attributes:{"msg":"Parameter <code>vIgnoreClasses</code> is not documented.","column":"30","line":"913"}},
        {type:"error",attributes:{"msg":"Parameter <code>vMode</code> is not documented.","column":"30","line":"913"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"913"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"getActiveSiblingHelperIgnore"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vInstance"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vIgnoreClasses</code> is not documented.","column":"36","line":"889"}},
        {type:"error",attributes:{"msg":"Parameter <code>vInstance</code> is not documented.","column":"36","line":"889"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"889"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"initScrollbarWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"1098"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalDisplayQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"36","line":"726"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"726"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalElementQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"36","line":"405"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"405"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalJobQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"32","line":"557"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"557"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalLayoutQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vParent"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vParent</code> is not documented.","column":"35","line":"633"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"633"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalStateQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"34","line":"481"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"481"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","isStatic":"true","name":"removeFromGlobalWidgetQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vWidget"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vWidget</code> is not documented.","column":"35","line":"329"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"329"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"Number","name":"TYPE_NULL","value":"0"}},
    {type:"constant",attributes:{"type":"Number","name":"TYPE_PIXEL","value":"1"}},
    {type:"constant",attributes:{"type":"Number","name":"TYPE_PERCENT","value":"2"}},
    {type:"constant",attributes:{"type":"Number","name":"TYPE_FLEX","value":"4"}},
    {type:"constant",attributes:{"type":"Number","name":"TYPE_AUTO","value":"3"}},
    {type:"constant",attributes:{"type":"Null","name":"SCROLLBAR_SIZE","value":"null"}}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"group":"\"horizontalAlign\",\"verticalAlign\"","name":"align","themeable":"true","propertyType":"group"},children:[
      {type:"desc",attributes:{"text":"<p>The &#8216;align&#8217; property is a shorthand property for setting &#8216;horizontalAlign&#8217;,\nand &#8216;verticalAlign&#8217; at the same time.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"allowStretchX","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should this widget be stretched on the x-axis if the layout handler will do this?\n Used by some layout handlers (qx.ui.layout.BoxLayout, ...).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"allowStretchY","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Should this widget be stretched on the y-axis if the layout handler will do this?\n Used by some layout handlers (qx.ui.layout.BoxLayout, ...).</p>"}}
      ]},
    {type:"property",attributes:{"check":"Boolean","defaultValue":"false","propertyType":"new","name":"anonymous","event":"changeAnonymous"},children:[
      {type:"desc",attributes:{"text":"<p>If you switch this to true, the widget doesn&#8217;t handle\n events directly. It will redirect them to the parent\n widget.</p>"}}
      ]},
    {type:"property",attributes:{"name":"appearance","defaultValue":"\"widget\"","event":"changeAppearance","propertyType":"new","apply":"_applyAppearance","check":"String"},children:[
      {type:"desc",attributes:{"text":"<p>Appearance of the widget</p>"}}
      ]},
    {type:"property",attributes:{"name":"backgroundColor","defaultValue":"null","check":"Color","allowNull":"true","propertyType":"new","apply":"_applyBackgroundColor","event":"changeBackgroundColor","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The backgroundColor style property of the rendered widget.</p>"}}
      ]},
    {type:"property",attributes:{"name":"backgroundImage","allowNull":"true","propertyType":"new","apply":"_applyBackgroundImage","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to native style property background-image.</p>\n\n<p>The <span class=\"caps\">URI</span> of the image file to use as background image.</p>"}}
      ]},
    {type:"property",attributes:{"name":"backgroundRepeat","allowNull":"true","propertyType":"new","apply":"_applyBackgroundRepeat","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to native style property background-repeat.</p>"}}
      ]},
    {type:"property",attributes:{"name":"border","defaultValue":"null","check":"Border","allowNull":"true","propertyType":"new","apply":"_applyBorder","event":"changeBorder","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The border property describes how to paint the border on the widget.</p>"}}
      ]},
    {type:"property",attributes:{"name":"bottom","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyBottom","event":"changeBottom","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The distance from the outer bottom border to the parent bottom area edge.</p>\n\n<p>You could only set two of the three vertical dimension properties (boxTop, boxBottom, boxHeight)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"boxHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"1988"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"boxWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"1982"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"capture","defaultValue":"false","event":"changeCapture","propertyType":"new","apply":"_applyCapture","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Capture all events and map them to this widget</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"clipLeft\",\"clipTop\",\"clipWidth\",\"clipHeight\"","name":"clip","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"clipWidth\",\"clipHeight\"","name":"clipDimension","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"clipHeight","allowNull":"true","propertyType":"new","apply":"_applyClip","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Clipping of the widget (height)</p>"}}
      ]},
    {type:"property",attributes:{"name":"clipLeft","allowNull":"true","propertyType":"new","apply":"_applyClip","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Clipping of the widget (left)</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"clipLeft\",\"clipTop\"","name":"clipLocation","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"clipTop","allowNull":"true","propertyType":"new","apply":"_applyClip","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Clipping of the widget (top)</p>"}}
      ]},
    {type:"property",attributes:{"name":"clipWidth","allowNull":"true","propertyType":"new","apply":"_applyClip","check":"Integer","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Clipping of the widget (width)</p>"}}
      ]},
    {type:"property",attributes:{"check":"qx.client.Command","allowNull":"true","propertyType":"new","name":"command","apply":"_applyCommand"},children:[
      {type:"desc",attributes:{"text":"<p>A command called if the widget should be excecuted (a placeholder for buttons, ...)</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"contextMenu","check":"qx.ui.menu.Menu"},children:[
      {type:"desc",attributes:{"text":"<p>Contains the context menu object connected to the widget. (Need real implementation)</p>"}}
      ]},
    {type:"property",attributes:{"name":"cursor","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyCursor","check":"String","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to native style property cursor.</p>\n\n<p>The name of the cursor to show when the mouse pointer is over the widget.\nThis is any valid CSS2 cursor name defined by W3C.</p>\n\n<p>The following values are possible crossbrowser:\n<ul><li>default</li>\n<li>crosshair</li>\n<li>pointer</li>\n<li>move</li>\n<li>n-resize</li>\n<li>ne-resize</li>\n<li>e-resize</li>\n<li>se-resize</li>\n<li>s-resize</li>\n<li>sw-resize</li>\n<li>w-resize</li>\n<li>nw-resize</li>\n<li>text</li>\n<li>wait</li>\n<li>help </li>\n</ul></p>"}}
      ]},
    {type:"property",attributes:{"group":"\"width\",\"height\"","name":"dimension","themeable":"true","propertyType":"group"},children:[
      {type:"desc",attributes:{"text":"<p>The &#8216;dimension&#8217; property is a shorthand property for setting &#8216;width&#8217;,\nand &#8216;height&#8217; at the same time.</p>"}}
      ]},
    {type:"property",attributes:{"name":"display","defaultValue":"true","event":"changeDisplay","propertyType":"new","apply":"_applyDisplay","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the widget should be displayed.\nUse this property instead of visibility if the change of the visibility\nshould remove the widget from the layout flow and force a relayout of the\napplication. This is similar to the <span class=\"caps\">CSS</span> property <code>display</code>.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","name":"dropDataTypes","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>Contains the support drop types for drag and drop support</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"top\",\"right\",\"bottom\",\"left\"","name":"edge","mode":"shorthand","propertyType":"group","themeable":"true"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"element","check":"Element","allowNull":"true","propertyType":"new","apply":"_applyElement","event":"changeElement"},children:[
      {type:"desc",attributes:{"text":"<p>The element node (if the widget is created, otherwise null)</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"enabled","defaultValue":"\"inherit\"","event":"changeEnabled","inheritable":"true","propertyType":"new","apply":"_applyEnabled","check":"Boolean"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"enableElementFocus","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Use <span class=\"caps\">DOM</span> focussing (focus() and blur() methods of <span class=\"caps\">DOM</span> nodes)</p>"}}
      ]},
    {type:"property",attributes:{"name":"focused","defaultValue":"false","event":"changeFocused","propertyType":"new","apply":"_applyFocused","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Handle focus state of this widget.</p>\n\n<p>someWidget.setFocused(true) set the current focus to this widget.\n someWidget.setFocused(false) remove the current focus and leave it blank.</p>\n\n<p>Normally you didn&#8217;t need to set this directly.</p>"}}
      ]},
    {type:"property",attributes:{"name":"font","defaultValue":"\"inherit\"","check":"Font","allowNull":"true","inheritable":"true","propertyType":"new","apply":"_applyFont","event":"changeFont","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The font property describes how to paint the font on the widget.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"frameHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2022"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"frameWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2015"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasAutoX","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2094"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasAutoY","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2100"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasFlexX","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2106"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasFlexY","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2112"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasPercentX","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2082"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"false","oldProperty":"true","hasError":"true","name":"hasPercentY","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2088"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"height","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyHeight","event":"changeHeight","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The height of the box (including padding and border).</p>\n\n<p>You could only set two of the three vertical dimension properties (boxTop, boxBottom, boxHeight)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"minHeight\",\"height\",\"maxHeight\"","name":"heights","themeable":"true","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"hideFocus","defaultValue":"false","propertyType":"new","apply":"_applyHideFocus","check":"Boolean","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>If the focus outline should be hidden.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"horizontalAlign","themeable":"true","possibleValues":"\"left\",\"center\",\"right\""},children:[
      {type:"desc",attributes:{"text":"<p>This is used by many layout managers to control the individual horizontal alignment of this widget inside this parent.</p>\n\n<p>This should be used with caution since in some cases\n this might give unrespected results.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"innerHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"1976"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"innerWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"1970"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"left","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyLeft","event":"changeLeft","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The distance from the outer left border to the parent left area edge.</p>\n\n<p>You could only set two of the three horizonal dimension properties (boxLeft, boxRight, boxWidth)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"left\",\"top\"","name":"location","themeable":"true","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"propertyType":"group","group":"\"marginTop\",\"marginRight\",\"marginBottom\",\"marginLeft\"","name":"margin","themeable":"true","mode":"shorthand"},children:[
      {type:"desc",attributes:{"text":"<p>The &#8216;margin&#8217; property is a shorthand property for setting &#8216;marginTop&#8217;,\n&#8216;marginRight&#8217;, &#8216;marginBottom&#8217; and &#8216;marginLeft&#8217; at the same time.</p>\n\n<p>If four length values are specified they apply to top, right, bottom and\nleft respectively. If there is only one value, it applies to all sides,\nif there are two or three, the missing values are taken from the opposite side.</p>"}}
      ]},
    {type:"property",attributes:{"name":"marginBottom","allowNull":"true","propertyType":"new","apply":"_applyMarginBottom","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Margin of the widget (bottom)</p>"}}
      ]},
    {type:"property",attributes:{"name":"marginLeft","allowNull":"true","propertyType":"new","apply":"_applyMarginLeft","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Margin of the widget (left)</p>"}}
      ]},
    {type:"property",attributes:{"name":"marginRight","allowNull":"true","propertyType":"new","apply":"_applyMarginRight","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Margin of the widget (right)</p>"}}
      ]},
    {type:"property",attributes:{"name":"marginTop","allowNull":"true","propertyType":"new","apply":"_applyMarginTop","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Margin of the widget (top)</p>"}}
      ]},
    {type:"property",attributes:{"name":"maxHeight","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyMaxHeight","event":"changeMaxHeight","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum height of the box (including padding and border).</p>\n\n<p>Set this to omit the expanding of the box height above this value.</p>"}}
      ]},
    {type:"property",attributes:{"name":"maxWidth","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyMaxWidth","event":"changeMaxWidth","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The maximum width of the box (including padding and border).</p>\n\n<p>Set this to omit the expanding of the box width above this value.</p>"}}
      ]},
    {type:"property",attributes:{"name":"minHeight","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyMinHeight","event":"changeMinHeight","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum height of the box (including padding and border).</p>\n\n<p>Set this to omit the shrinking of the box height under this value.</p>"}}
      ]},
    {type:"property",attributes:{"name":"minWidth","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyMinWidth","event":"changeMinWidth","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The minimum width of the box (including padding and border).</p>\n\n<p>Set this to omit the shrinking of the box width under this value.</p>"}}
      ]},
    {type:"property",attributes:{"name":"opacity","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyOpacity","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to native style property opacity.</p>\n\n<p>The uniform opacity setting to be applied across an entire object. Behaves like the new <span class=\"caps\">CSS</span>-3 Property.\n Any values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) will be clamped to this range.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"outerHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2000"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"outerWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"1994"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"overflow","defaultValue":"null","propertyType":"new","allowNull":"true","possibleValues":"\"hidden\",\"auto\",\"scroll\",\"scrollX\",\"scrollY\"","apply":"_applyOverflow","event":"changeOverflow","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Describes how to handle content that is too large to fit inside the widget.</p>\n\n<p>Overflow modes:\n<table>\n<tr><th>hidden</th><td>The content is clipped</td></tr>\n<tr><th>auto</th><td>Scroll bars are shown as needed</td></tr>\n<tr><th>scroll</th><td>Scroll bars are always shown. Even if there is enough room for the content inside the widget.</td></tr>\n<tr><th>scrollX</th><td>Scroll bars for the X-Axis are always shown. Even if there is enough room for the content inside the widget.</td></tr>\n<tr><th>scrollY</th><td>Scroll bars for the Y-Axis are always shown. Even if there is enough room for the content inside the widget.</td></tr>\n</table></p>"}}
      ]},
    {type:"property",attributes:{"propertyType":"group","group":"\"paddingTop\",\"paddingRight\",\"paddingBottom\",\"paddingLeft\"","name":"padding","themeable":"true","mode":"shorthand"},children:[
      {type:"desc",attributes:{"text":"<p>The &#8216;padding&#8217; property is a shorthand property for setting &#8216;paddingTop&#8217;,\n&#8216;paddingRight&#8217;, &#8216;paddingBottom&#8217; and &#8216;paddingLeft&#8217; at the same time.</p>\n\n<p>If four values are specified they apply to top, right, bottom and left respectively.\nIf there is only one value, it applies to all sides, if there are two or three,\nthe missing values are taken from the opposite side.</p>"}}
      ]},
    {type:"property",attributes:{"name":"paddingBottom","allowNull":"true","propertyType":"new","apply":"_applyPaddingBottom","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the widget (bottom)</p>"}}
      ]},
    {type:"property",attributes:{"name":"paddingLeft","allowNull":"true","propertyType":"new","apply":"_applyPaddingLeft","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the widget (left)</p>"}}
      ]},
    {type:"property",attributes:{"name":"paddingRight","allowNull":"true","propertyType":"new","apply":"_applyPaddingRight","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the widget (right)</p>"}}
      ]},
    {type:"property",attributes:{"name":"paddingTop","allowNull":"true","propertyType":"new","apply":"_applyPaddingTop","check":"Number","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Padding of the widget (top)</p>"}}
      ]},
    {type:"property",attributes:{"name":"parent","check":"qx.ui.core.Parent","allowNull":"true","propertyType":"new","apply":"_applyParent","event":"changeParent"},children:[
      {type:"desc",attributes:{"text":"<p>The parent widget (the real object, no ID or something)</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"preferredBoxHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2067"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"preferredBoxWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2061"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"preferredInnerHeight","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2045"}}
        ]}
      ]},
    {type:"property",attributes:{"defaultValue":"null","oldProperty":"true","hasError":"true","name":"preferredInnerWidth","propertyType":"cached"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"5","line":"2038"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"right","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyRight","event":"changeRight","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The distance from the outer right border to the parent right area edge.</p>\n\n<p>You could only set two of the three horizonal dimension properties (boxLeft, boxRight, boxWidth)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"name":"selectable","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applySelectable","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Toggle the possibility to select the element of this widget.</p>"}}
      ]},
    {type:"property",attributes:{"group":"\"left\",\"width\",\"top\",\"height\"","name":"space","themeable":"true","propertyType":"group"},children:[
      {type:"desc",attributes:{"text":"<p>The &#8216;space&#8217; property is a shorthand property for setting &#8216;left&#8217;, &#8216;width&#8217;,\n&#8216;top&#8217; and &#8216;height&#8217; at the same time.</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","name":"supportsDropMethod","defaultValue":"null","allowNull":"true","propertyType":"new","check":"Function"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"tabIndex","defaultValue":"null","check":"Integer","allowNull":"true","propertyType":"new","apply":"_applyTabIndex","event":"changeTabIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Set this to a positive value makes the widget able to get the focus.\nIt even is reachable through the usage of the tab-key.</p>\n\n<p>Widgets with the same tabIndex are handled through there position\nin the document.</p>\n\n<p>Setting the tabIndex to -1 deactivate focus handling for the widget.</p>"}}
      ]},
    {type:"property",attributes:{"name":"textColor","defaultValue":"\"inherit\"","check":"Color","allowNull":"true","inheritable":"true","propertyType":"new","apply":"_applyTextColor","event":"changeTextColor","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The color (textColor) style property of the rendered widget.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"toolTip","check":"qx.ui.popup.ToolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Contains the tooltip object connected to the widget.</p>"}}
      ]},
    {type:"property",attributes:{"name":"top","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyTop","event":"changeTop","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The distance from the outer top border to the parent top area edge.</p>\n\n<p>You could only set two of the three vertical dimension properties (boxTop, boxBottom, boxHeight)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"verticalAlign","themeable":"true","possibleValues":"\"top\",\"middle\",\"bottom\""},children:[
      {type:"desc",attributes:{"text":"<p>This is used by many layout managers to control the individual vertical alignment of this widget inside this parent.</p>\n\n<p>This should be used with caution since in some cases\n this might give unrespected results.</p>"}}
      ]},
    {type:"property",attributes:{"name":"visibility","defaultValue":"true","event":"changeVisibility","propertyType":"new","apply":"_applyVisibility","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Toggle the visibility of a widget.\nSetting this property to false will hide the widget but will not remove\nit from the layout flow, so other widgets will not be repositioned. This\nis similar to the <span class=\"caps\">CSS</span> property <code>visibility</code>.</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyWidth","event":"changeWidth","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The width of the box (including padding and border).</p>\n\n<p>You could only set two of the three horizonal dimension properties (boxLeft, boxRight, boxWidth)\n at the same time. This will be omitted during the setup of the new third value. To reset a value\n you didn&#8217;t want anymore, set it to null.</p>"}}
      ]},
    {type:"property",attributes:{"hasError":"true","group":"\"minWidth\",\"width\",\"maxWidth\"","name":"widths","themeable":"true","propertyType":"group"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"1131"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"zIndex","defaultValue":"null","check":"Number","allowNull":"true","propertyType":"new","apply":"_applyZIndex","event":"changeZIndex","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to native style property z-index.</p>\n\n<p>This should be used with caution since in some cases\n this might give unrespected results.</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__reflowBorderX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Invalidates the cached frame on y-axis when border changes occour</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"23","line":"6682"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__reflowBorderY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Invalidates the cached frame on y-axis when border changes occour</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>value</code> is not documented.","column":"23","line":"6699"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_afterAppear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"2774"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_afterDisappear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"2811"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_afterInsertDom"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"2874"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_afterRemoveDom"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"2900"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#appearance","name":"_applyAppearance"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#backgroundColor","name":"_applyBackgroundColor"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBackgroundColor}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#backgroundImage","name":"_applyBackgroundImage"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#backgroundRepeat","name":"_applyBackgroundRepeat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBackgroundRepeat}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#border","name":"_applyBorder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #border}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#bottom","name":"_applyBottom"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>bottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#capture","name":"_applyCapture"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#clipTop","name":"_applyClip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#command","name":"_applyCommand"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.client.Command"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.client.Command"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>command</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCommand}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#cursor","name":"_applyCursor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>cursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCursor}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#display","name":"_applyDisplay"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#element","name":"_applyElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyElementData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Placeholder method to add attributes and other content to element node</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>elem</code> is not documented.","column":"25","line":"5357"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#enabled","name":"_applyEnabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#focused","name":"_applyFocused"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#font","name":"_applyFont"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Font"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Font"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFont}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#height","name":"_applyHeight"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>height</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyHeight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#hideFocus","name":"_applyHideFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyHtmlAttributes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Use {@link #_applyHtmlProperties} instead</p>"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>elem</code> is not documented.","column":"28","line":"5584"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"5584"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyHtmlProperties"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>elem</code> is not documented.","column":"28","line":"5463"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"5463"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#left","name":"_applyLeft"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyLeft}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#marginBottom","name":"_applyMarginBottom"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>marginBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMarginBottom}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#marginLeft","name":"_applyMarginLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #marginLeft}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#marginRight","name":"_applyMarginRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #marginRight}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#marginTop","name":"_applyMarginTop"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>marginTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMarginTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#maxHeight","name":"_applyMaxHeight"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxHeight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#maxWidth","name":"_applyMaxWidth"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxWidth}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#minHeight","name":"_applyMinHeight"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>minHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMinHeight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#minWidth","name":"_applyMinWidth"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>minWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMinWidth}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#opacity","name":"_applyOpacity"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the opacity for the widget. Any child widget inside the widget will also\nbecome (semi-)transparent. The value should be a number between 0 and 1\ninclusive, where 1 means totally opaque and 0 invisible.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#overflow","name":"_applyOverflow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#paddingBottom","name":"_applyPaddingBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #paddingBottom}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#paddingLeft","name":"_applyPaddingLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #paddingLeft}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#paddingRight","name":"_applyPaddingRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #paddingRight}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#paddingTop","name":"_applyPaddingTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}},
        {type:"param",attributes:{"name":"old"}}
        ]},
      {type:"desc",attributes:{"text":"<p>apply routine for property {@link #paddingTop}</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#parent","name":"_applyParent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#right","name":"_applyRight"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>right</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyRight}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#selectable","name":"_applySelectable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyStateStyleFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vStates"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vStates</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyStyleProperties"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"elem"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>elem</code> is not documented.","column":"29","line":"5698"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"5698"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#tabIndex","name":"_applyTabIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#textColor","name":"_applyTextColor"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextColor}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#top","name":"_applyTop"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTop}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#visibility","name":"_applyVisibility"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#width","name":"_applyWidth"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWidth}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#zIndex","name":"_applyZIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_beforeAppear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"2761"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_beforeDisappear"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"2788"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_beforeInsertDom"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"2861"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_beforeRemoveDom"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"2887"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_checkParent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
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
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"2474"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_compileClipString"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"6368"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeBoxHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"3421"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeBoxHeightFallback"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"33","line":"3397"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeBoxWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"3408"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeBoxWidthFallback"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"3386"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeDisplayable"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"2750"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeFrameHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"4200"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeFrameWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"4173"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasAutoX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"4371"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasAutoY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"4382"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasFlexX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"4393"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasFlexY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"4404"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasPercentX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"4349"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeHasPercentY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"4360"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeInnerHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"3467"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeInnerWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"3456"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeOuterHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"3445"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeOuterWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"3434"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computePreferredBoxHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"4269"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computePreferredBoxWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"33","line":"4253"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePercentX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"29","line":"3824"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"3824"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePercentXLimit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"34","line":"3836"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"3836"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePercentY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"29","line":"3848"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"3848"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePercentYLimit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"34","line":"3860"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"3860"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePixel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"26","line":"3800"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"3800"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_computeValuePixelLimit"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"v"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>v</code> is not documented.","column":"31","line":"3812"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"3812"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_createElementImpl"},children:[
      {type:"desc",attributes:{"text":"<p>Create widget with empty element.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_evalUnitsPixelPercent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"4480"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_evalUnitsPixelPercentAuto"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"4448"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_evalUnitsPixelPercentAutoFlex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"38","line":"4416"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_flushJobQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"q"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>q</code> is not documented.","column":"22","line":"3147"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"3147"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_generateHtmlId"},children:[
      {type:"desc",attributes:{"text":"<p>Generate a stable (across runs!) id string and set it in <span class=\"caps\">HTML</span>.\nThis is interesting for application testing that uses the element\nid to locate the widget.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_getTargetNode"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_handleDisplayable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vHint"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vHint</code> is not documented.","column":"26","line":"2579"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"2579"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidateFrameDimensions"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"4227"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_invalidatePreferredInnerDimensions"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"43","line":"4240"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_queueBorder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>the border object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Border"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"edge"},children:[
          {type:"desc",attributes:{"text":"<p>top, right, bottom or left</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback for border manager connection</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeFlexX"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"3514"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeFlexY"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"3535"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputePercentX"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"3567"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputePercentY"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"3612"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeRangeX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeRangeY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeStretchingX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recomputeStretchingY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_recursiveAppearanceThemeUpdate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNewAppearanceTheme"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOldAppearanceTheme"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vNewAppearanceTheme</code> is not documented.","column":"39","line":"5330"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOldAppearanceTheme</code> is not documented.","column":"39","line":"5330"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"39","line":"5330"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_renderAppearance"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"5152"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_renderOverflow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"pn"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"pv"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>Previous value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>pn</code> is not documented.","column":"23","line":"6525"}},
        {type:"error",attributes:{"msg":"Parameter <code>pv</code> is not documented.","column":"23","line":"6525"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"6525"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_resetAppearanceThemeWrapper"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vNewAppearanceTheme"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vOldAppearanceTheme"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vNewAppearanceTheme</code> is not documented.","column":"36","line":"5190"}},
        {type:"error",attributes:{"msg":"Parameter <code>vOldAppearanceTheme</code> is not documented.","column":"36","line":"5190"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"5190"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_styleBackgroundColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"6578"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_styleBackgroundImage"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"29","line":"6328"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleFromMap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"data"},children:[
          {type:"desc",attributes:{"text":"<p>a map of property values. The key is the name of the property.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Style multiple properties at once by using a property list</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>this instance.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_unitDetectionPixelPercent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"}},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"34","line":"4735"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"34","line":"4735"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_unitDetectionPixelPercentAuto"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"}},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"38","line":"4641"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"38","line":"4641"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_unitDetectionPixelPercentAutoFlex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"name"}},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
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
        {type:"error",attributes:{"msg":"Parameter <code>name</code> is not documented.","column":"42","line":"4523"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"42","line":"4523"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_unstyleFromArray"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"data"},children:[
          {type:"desc",attributes:{"text":"<p>a array of property names.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Unstyle multiple properties at once by using a property list</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>this instance.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_visualizeBlur"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"5900"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_visualizeFocus"},children:[
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"5921"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_visualPropertyCheck"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"6959"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vState"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets a state.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vState</code> is not documented.","column":"16","line":"5040"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToDocument"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"3035"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToJobQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"21","line":"3125"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"3125"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToLayoutChanges"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"26","line":"4297"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"4297"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToQueue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"18","line":"4314"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"4314"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToQueueRuntime"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"p"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>p</code> is not documented.","column":"25","line":"4326"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"4326"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"addToStateQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"5263"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"auto"},children:[
      {type:"desc",attributes:{"text":"<p>A bounded setup to the preferred width/height of the widget. Keeps in\n sync if the content or requirements of the widget changes</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"blur"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"5954"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"connect"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"2981"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"contains"},children:[
      {type:"desc",attributes:{"text":"<p>Test if this widget contains the given widget</p>"}}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"disconnect"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"2992"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"execute"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"6929"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"focus"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"5941"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getActiveChild"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"5822"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowStretchX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowStretchX</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowStretchY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowStretchY</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAnonymous","fromProperty":"anonymous"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>anonymous</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>anonymous</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAppearance","fromProperty":"appearance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>appearance</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #appearance}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>appearance</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBackgroundColor","fromProperty":"backgroundColor"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundColor</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBackgroundImage","fromProperty":"backgroundImage"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundImage</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>backgroundRepeat</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBorder","fromProperty":"border"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>border</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #border}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>border</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getBottom","fromProperty":"bottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>bottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>bottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getBottomValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"4148"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCapture","fromProperty":"capture"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>capture</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>capture</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Get an array of the current children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getChildrenLength"},children:[
      {type:"desc",attributes:{"text":"<p>Get the number of children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getClientHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"7066"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getClientWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"7053"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getClipHeight","fromProperty":"clipHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>clipHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>clipHeight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getClipLeft","fromProperty":"clipLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>clipLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>clipLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getClipTop","fromProperty":"clipTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>clipTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>clipTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getClipWidth","fromProperty":"clipWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>clipWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>clipWidth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCommand","fromProperty":"command"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>command</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #command}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>command</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getContextMenu","fromProperty":"contextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>contextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>contextMenu</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCursor","fromProperty":"cursor"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>cursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>cursor</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDisplay","fromProperty":"display"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>display</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>display</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDropDataTypes","fromProperty":"dropDataTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dropDataTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropDataTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>dropDataTypes</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getElement","fromProperty":"element"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>element</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enabled</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enableElementFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enableElementFocus</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFocused","fromProperty":"focused"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focused</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>focused</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getFocusRoot"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"5806"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFont","fromProperty":"font"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #font}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>font</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHeight","fromProperty":"height"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>height</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>height</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getHeightValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"4031"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHideFocus","fromProperty":"hideFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>hideFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>hideFocus</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getHorizontalAlign","fromProperty":"horizontalAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>horizontalAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>horizontalAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getHtmlAttribute"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Use {@link #getHtmlProperty} instead</p>"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"string"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"24","line":"5566"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"5566"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getHtmlProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"string"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"23","line":"5446"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"5446"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLeft","fromProperty":"left"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>left</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getLeftValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"3972"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMarginBottom","fromProperty":"marginBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>marginBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>marginBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMarginLeft","fromProperty":"marginLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>marginLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>marginLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMarginRight","fromProperty":"marginRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>marginRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>marginRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMarginTop","fromProperty":"marginTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>marginTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>marginTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaxHeight","fromProperty":"maxHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxHeight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getMaxHeightValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"4095"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaxWidth","fromProperty":"maxWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxWidth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getMaxWidthValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"3944"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinHeight","fromProperty":"minHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>minHeight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getMinHeightValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"4067"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinWidth","fromProperty":"minWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>minWidth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getMinWidthValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"3916"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNeededHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"3491"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNeededWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"3478"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getNextActiveSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vIgnoreClasses</code> is not documented.","column":"28","line":"4959"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"4959"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNextSibling"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the next sibling.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNextVisibleSibling"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the next visible sibling.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOffsetHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"7092"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOffsetLeft"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"7001"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOffsetTop"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"7014"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOffsetWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"7079"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOpacity","fromProperty":"opacity"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>opacity</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #opacity}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>opacity</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOverflow","fromProperty":"overflow"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>overflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>overflow</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOverflowX"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"6542"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getOverflowY"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"6555"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaddingBottom","fromProperty":"paddingBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>paddingBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>paddingBottom</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaddingLeft","fromProperty":"paddingLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>paddingLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>paddingLeft</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaddingRight","fromProperty":"paddingRight"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>paddingRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>paddingRight</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPaddingTop","fromProperty":"paddingTop"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>paddingTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>paddingTop</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getParent","fromProperty":"parent"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>parent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #parent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>parent</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getPreviousActiveSibling"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vIgnoreClasses"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>vIgnoreClasses</code> is not documented.","column":"32","line":"4945"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"4945"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPreviousSibling"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the previous sibling.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPreviousVisibleSibling"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the previous visible sibling.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"null"}},
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRight","fromProperty":"right"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>right</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #right}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>right</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getRightValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"3997"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getScrollHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"7118"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getScrollLeft"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"7027"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getScrollTop"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"7040"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getScrollWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"7105"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectable","fromProperty":"selectable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectable</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getStyleProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"24","line":"5618"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"5618"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSupportsDropMethod","fromProperty":"supportsDropMethod"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>supportsDropMethod</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #supportsDropMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>supportsDropMethod</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTabIndex","fromProperty":"tabIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>tabIndex</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tabIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>tabIndex</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTextColor","fromProperty":"textColor"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>textColor</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getToolTip","fromProperty":"toolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>toolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>toolTip</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTop","fromProperty":"top"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>top</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTopLevelWidget"},children:[
      {type:"desc",attributes:{"text":"<p>The widget which is at the top level,\n which contains all others (normally a\n instance of qx.ui.core.ClientDocument).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getTopValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"4123"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVerticalAlign","fromProperty":"verticalAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>verticalAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>verticalAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibility","fromProperty":"visibility"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>visibility</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>visibility</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Get an array of the current visible children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Widget"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getVisibleChildrenLength"},children:[
      {type:"desc",attributes:{"text":"<p>Get the number of children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWidth","fromProperty":"width"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>width</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"getWidthValue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"3880"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getZIndex","fromProperty":"zIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>zIndex</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #zIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>zIndex</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasChildren"},children:[
      {type:"desc",attributes:{"text":"<p>Get if the widget has any children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vState"},children:[
          {type:"desc",attributes:{"text":"<p>the state to check.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a state is set.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the state is set.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"hasVisibleChildren"},children:[
      {type:"desc",attributes:{"text":"<p>If this widget has visible children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"hide"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"2970"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"indexOf"},children:[
      {type:"desc",attributes:{"text":"<p>Return the position of the child inside</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowStretchX</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowStretchX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>allowStretchY</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowStretchY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAnonymous","fromProperty":"anonymous"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>anonymous</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>anonymous</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAppearance","fromProperty":"appearance"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>appearance</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>appearance</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #appearance}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBackgroundColor","fromProperty":"backgroundColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundColor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBackgroundImage","fromProperty":"backgroundImage"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundImage</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundImage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>backgroundRepeat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>backgroundRepeat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBorder","fromProperty":"border"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>border</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>border</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #border}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initBottom","fromProperty":"bottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>bottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>bottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCapture","fromProperty":"capture"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>capture</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>capture</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initClipHeight","fromProperty":"clipHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>clipHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>clipHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #clipHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initClipLeft","fromProperty":"clipLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>clipLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>clipLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initClipTop","fromProperty":"clipTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>clipTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>clipTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #clipTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initClipWidth","fromProperty":"clipWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>clipWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>clipWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #clipWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCommand","fromProperty":"command"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>command</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>command</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #command}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initContextMenu","fromProperty":"contextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>contextMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>contextMenu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #contextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCursor","fromProperty":"cursor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>cursor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>cursor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #cursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDisplay","fromProperty":"display"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>display</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>display</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDropDataTypes","fromProperty":"dropDataTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>dropDataTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dropDataTypes</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dropDataTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initElement","fromProperty":"element"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>element</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>element</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEnabled","fromProperty":"enabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enabled</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enabled</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enableElementFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enableElementFocus</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFocused","fromProperty":"focused"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>focused</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focused</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFont","fromProperty":"font"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>font</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>font</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #font}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHeight","fromProperty":"height"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>height</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>height</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHideFocus","fromProperty":"hideFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>hideFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>hideFocus</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initHorizontalAlign","fromProperty":"horizontalAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>horizontalAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>horizontalAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLeft","fromProperty":"left"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>left</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>left</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMarginBottom","fromProperty":"marginBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>marginBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>marginBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #marginBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMarginLeft","fromProperty":"marginLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>marginLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>marginLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #marginLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMarginRight","fromProperty":"marginRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>marginRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>marginRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #marginRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMarginTop","fromProperty":"marginTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>marginTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>marginTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #marginTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaxHeight","fromProperty":"maxHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maxHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaxWidth","fromProperty":"maxWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maxWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMinHeight","fromProperty":"minHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>minHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMinWidth","fromProperty":"minWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>minWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOpacity","fromProperty":"opacity"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>opacity</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>opacity</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #opacity}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOverflow","fromProperty":"overflow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>overflow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>overflow</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPaddingBottom","fromProperty":"paddingBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>paddingBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>paddingBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPaddingLeft","fromProperty":"paddingLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>paddingLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>paddingLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPaddingRight","fromProperty":"paddingRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>paddingRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>paddingRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPaddingTop","fromProperty":"paddingTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>paddingTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>paddingTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initParent","fromProperty":"parent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>parent</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>parent</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #parent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initRight","fromProperty":"right"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>right</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>right</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #right}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelectable","fromProperty":"selectable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selectable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSupportsDropMethod","fromProperty":"supportsDropMethod"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>supportsDropMethod</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>supportsDropMethod</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #supportsDropMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTabIndex","fromProperty":"tabIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>tabIndex</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>tabIndex</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #tabIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTextColor","fromProperty":"textColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>textColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textColor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initToolTip","fromProperty":"toolTip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>toolTip</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>toolTip</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTop","fromProperty":"top"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>top</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>top</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initVerticalAlign","fromProperty":"verticalAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>verticalAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>verticalAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initVisibility","fromProperty":"visibility"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>visibility</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>visibility</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWidth","fromProperty":"width"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>width</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>width</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initZIndex","fromProperty":"zIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>zIndex</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>zIndex</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #zIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowStretchX</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowStretchY</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isAnonymous","fromProperty":"anonymous"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>anonymous</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isAppearRelevant"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"2842"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCapture","fromProperty":"capture"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>capture</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isCreated"},children:[
      {type:"desc",attributes:{"text":"<p>Check if the widget is created (or the element is already available).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the widget is already created.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isDisplay","fromProperty":"display"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>display</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isDisplayable"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"2460"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Get if the widget has no children</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enabled</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enableElementFocus</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isFirstChild"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"4972"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isFirstVisibleChild"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"4994"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isFocusable"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"5784"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isFocused","fromProperty":"focused"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>focused</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isFocusRoot"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"5795"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isHideFocus","fromProperty":"hideFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>hideFocus</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isLastChild"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"4983"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"isLastVisibleChild"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"5005"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"isMaterialized"},children:[
      {type:"desc",attributes:{"text":"<p>If the widget is visible and rendered on the screen.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSeeable"},children:[
      {type:"desc",attributes:{"text":"<p>If the widget is currently seeable which means that it:</p>\n\n<ul>\n<li>has a also seeable parent</li>\n<li>visibility is true</li>\n<li>display is true</li>\n</ul>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSelectable","fromProperty":"selectable"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>selectable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isVisibility","fromProperty":"visibility"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>visibility</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isVisibleEmpty"},children:[
      {type:"desc",attributes:{"text":"<p>Check if there are any visible children inside</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"moveSelfAfter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vAfter"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Move myself to immediately after another child of the same parent.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vAfter</code> is not documented.","column":"21","line":"4839"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"moveSelfBefore"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vBefore"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Move myself to immediately before another child of the same parent.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>vBefore</code> is not documented.","column":"22","line":"4827"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"moveSelfToBegin"},children:[
      {type:"desc",attributes:{"text":"<p>Move myself to the head of the list: make me the first child.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"moveSelfToEnd"},children:[
      {type:"desc",attributes:{"text":"<p>Move myself to the end of the list: make me the last child.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"pack"},children:[
      {type:"desc",attributes:{"text":"<p>A single setup to the current preferred pixel values of the widget</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","hasError":"true","name":"prepareEnhancedBorder"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"recursiveAddToStateQueue"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"32","line":"5274"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeHtmlAttribute"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Use {@link #removeHtmlProperty} instead</p>"}}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}},
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"27","line":"5540"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"5540"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeHtmlProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
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
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"1","line":"1"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"removeState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vState"},children:[
          {type:"desc",attributes:{"text":"<p>the state to clear.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Clears a state.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"removeStyleProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"27","line":"5673"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"5673"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","hasError":"true","name":"renderBorder"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"changes"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders border object to widget.\nCallback from layout queue</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>changes</code> is not documented.","column":"20","line":"6719"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"internal","isInternal":"true","hasError":"true","name":"renderPadding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"changes"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Renders padding to widget\nCallback from layout queue</p>"}},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>changes</code> is not documented.","column":"21","line":"6878"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAlign","fromProperty":"align"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>align</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #align}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowStretchX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowStretchY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAnonymous","fromProperty":"anonymous"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>anonymous</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAppearance","fromProperty":"appearance"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>appearance</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #appearance}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBackgroundColor","fromProperty":"backgroundColor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBackgroundImage","fromProperty":"backgroundImage"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBorder","fromProperty":"border"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>border</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #border}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetBottom","fromProperty":"bottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>bottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCapture","fromProperty":"capture"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>capture</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClip","fromProperty":"clip"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clip</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clip}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipDimension","fromProperty":"clipDimension"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipDimension</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipDimension}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipHeight","fromProperty":"clipHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipHeight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipLeft","fromProperty":"clipLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipLocation","fromProperty":"clipLocation"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipLocation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLocation}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipTop","fromProperty":"clipTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetClipWidth","fromProperty":"clipWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clipWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clipWidth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCommand","fromProperty":"command"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>command</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #command}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetContextMenu","fromProperty":"contextMenu"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>contextMenu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #contextMenu}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCursor","fromProperty":"cursor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>cursor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #cursor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDimension","fromProperty":"dimension"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dimension</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dimension}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDisplay","fromProperty":"display"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>display</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDropDataTypes","fromProperty":"dropDataTypes"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dropDataTypes</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dropDataTypes}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEdge","fromProperty":"edge"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>edge</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #edge}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetElement","fromProperty":"element"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>element</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enabled</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enableElementFocus</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFocused","fromProperty":"focused"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focused</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFont","fromProperty":"font"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>font</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #font}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHeight","fromProperty":"height"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>height</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHeights","fromProperty":"heights"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>heights</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #heights}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHideFocus","fromProperty":"hideFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>hideFocus</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetHorizontalAlign","fromProperty":"horizontalAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>horizontalAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalAlign}.</p>"}},
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
    {type:"method",attributes:{"name":"resetLocation","fromProperty":"location"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>location</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #location}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMargin","fromProperty":"margin"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>margin</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #margin}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMarginBottom","fromProperty":"marginBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>marginBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #marginBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMarginLeft","fromProperty":"marginLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>marginLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #marginLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMarginRight","fromProperty":"marginRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>marginRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #marginRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMarginTop","fromProperty":"marginTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>marginTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #marginTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaxHeight","fromProperty":"maxHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxHeight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaxWidth","fromProperty":"maxWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxWidth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMinHeight","fromProperty":"minHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minHeight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMinWidth","fromProperty":"minWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minWidth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOpacity","fromProperty":"opacity"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>opacity</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #opacity}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOverflow","fromProperty":"overflow"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>overflow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPadding","fromProperty":"padding"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>padding</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #padding}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPaddingBottom","fromProperty":"paddingBottom"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>paddingBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingBottom}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPaddingLeft","fromProperty":"paddingLeft"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>paddingLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingLeft}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPaddingRight","fromProperty":"paddingRight"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>paddingRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingRight}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPaddingTop","fromProperty":"paddingTop"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>paddingTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingTop}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetParent","fromProperty":"parent"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>parent</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #parent}.</p>"}},
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
    {type:"method",attributes:{"name":"resetSelectable","fromProperty":"selectable"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSpace","fromProperty":"space"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>space</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #space}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSupportsDropMethod","fromProperty":"supportsDropMethod"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>supportsDropMethod</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #supportsDropMethod}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTabIndex","fromProperty":"tabIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>tabIndex</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #tabIndex}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTextColor","fromProperty":"textColor"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textColor}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetToolTip","fromProperty":"toolTip"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>toolTip</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},
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
    {type:"method",attributes:{"name":"resetVerticalAlign","fromProperty":"verticalAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>verticalAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetVisibility","fromProperty":"visibility"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>visibility</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
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
    {type:"method",attributes:{"name":"resetWidths","fromProperty":"widths"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>widths</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #widths}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetZIndex","fromProperty":"zIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>zIndex</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #zIndex}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"scrollIntoView"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"alignTopLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Set the alignment. &#8220;True&#8221; means top left align, &#8220;False&#8221; means bottom right.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Scroll the widget into the view.</p>\n\n<p>This function works on <span class=\"caps\">DOM</span> level and needs the widget to be already rendered.\nThis is true for example in the &#8220;appear&#8221; event handler of a widget.</p>"}}
      ]},
    {type:"method",attributes:{"name":"scrollIntoViewX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"alignLeft"},children:[
          {type:"desc",attributes:{"text":"<p>whether the element should be left aligned</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Scroll the widget horizontally into the view.</p>\n\n<p>This function works on <span class=\"caps\">DOM</span> level and needs the widget to be already rendered.\nThis is true for example in the &#8220;appear&#8221; event handler of a widget.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the element could be scrolled into the view</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"scrollIntoViewY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"alignTop"},children:[
          {type:"desc",attributes:{"text":"<p>whether the element should be top aligned</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Scroll the widget vertically into the view.</p>\n\n<p>This function works on <span class=\"caps\">DOM</span> level and needs the widget to be already rendered.\nThis is true for example in the &#8220;appear&#8221; event handler of a widget.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the element could be scrolled into the view</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAlign","fromProperty":"align"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"horizontalAlign"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #horizontalAlign}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"verticalAlign"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #verticalAlign}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>align</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #align}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowStretchX</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowStretchX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>allowStretchY</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowStretchY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAnonymous","fromProperty":"anonymous"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>anonymous</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>anonymous</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAppearance","fromProperty":"appearance"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>appearance</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>appearance</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #appearance}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBackgroundColor","fromProperty":"backgroundColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>backgroundColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBackgroundImage","fromProperty":"backgroundImage"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>backgroundImage</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundImage}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBackgroundRepeat","fromProperty":"backgroundRepeat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>backgroundRepeat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>backgroundRepeat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #backgroundRepeat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBorder","fromProperty":"border"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>border</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>border</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #border}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setBottom","fromProperty":"bottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>bottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>bottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #bottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCapture","fromProperty":"capture"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>capture</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>capture</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setClip","fromProperty":"clip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clipLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clipTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clipWidth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipWidth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clipHeight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipHeight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>clip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clip}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setClipDimension","fromProperty":"clipDimension"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clipWidth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipWidth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clipHeight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipHeight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>clipDimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipDimension}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setClipHeight","fromProperty":"clipHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>clipHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>clipHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setClipLeft","fromProperty":"clipLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>clipLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>clipLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setClipLocation","fromProperty":"clipLocation"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"clipLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"clipTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #clipTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>clipLocation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipLocation}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setClipTop","fromProperty":"clipTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>clipTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>clipTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setClipWidth","fromProperty":"clipWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>clipWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>clipWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clipWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCommand","fromProperty":"command"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>command</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>command</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #command}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setContextMenu","fromProperty":"contextMenu"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>contextMenu</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>contextMenu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #contextMenu}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCursor","fromProperty":"cursor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>cursor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>cursor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #cursor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDimension","fromProperty":"dimension"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #width}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"height"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #height}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>dimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dimension}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setDisplay","fromProperty":"display"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>display</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>display</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDropDataTypes","fromProperty":"dropDataTypes"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>dropDataTypes</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dropDataTypes</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dropDataTypes}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEdge","fromProperty":"edge"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"top"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #top}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"right"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #right}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"bottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #bottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"left"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #left}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>edge</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #edge}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setElement","fromProperty":"element"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>element</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #element}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnabled","fromProperty":"enabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enabled</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enableElementFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enableElementFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFocused","fromProperty":"focused"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>focused</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focused</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFont","fromProperty":"font"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>font</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #font}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHeight","fromProperty":"height"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>height</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>height</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #height}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHeights","fromProperty":"heights"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"minHeight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #minHeight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"height"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #height}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"maxHeight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #maxHeight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>heights</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #heights}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setHideFocus","fromProperty":"hideFocus"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>hideFocus</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>hideFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setHorizontalAlign","fromProperty":"horizontalAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>horizontalAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>horizontalAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #horizontalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setHtmlAttribute"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"deprecated",children:[
        {type:"desc",attributes:{"text":"<p>Use {@link #setHtmlProperty} instead</p>"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"24","line":"5514"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"5514"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setHtmlProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"23","line":"5379"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"5379"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLeft","fromProperty":"left"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>left</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>left</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #left}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setLocation","fromProperty":"location"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"left"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #left}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"top"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #top}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>location</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #location}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setMargin","fromProperty":"margin"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"marginTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #marginTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"marginRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #marginRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"marginBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #marginBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"marginLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #marginLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>margin</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #margin}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setMarginBottom","fromProperty":"marginBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>marginBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>marginBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMarginLeft","fromProperty":"marginLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>marginLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>marginLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMarginRight","fromProperty":"marginRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>marginRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>marginRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMarginTop","fromProperty":"marginTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>marginTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>marginTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #marginTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaxHeight","fromProperty":"maxHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maxHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaxWidth","fromProperty":"maxWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maxWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinHeight","fromProperty":"minHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>minHeight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minHeight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinWidth","fromProperty":"minWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>minWidth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minWidth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOpacity","fromProperty":"opacity"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>opacity</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>opacity</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #opacity}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOverflow","fromProperty":"overflow"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>overflow</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>overflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #overflow}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPadding","fromProperty":"padding"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"paddingTop"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #paddingTop}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"paddingRight"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #paddingRight}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"paddingBottom"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #paddingBottom}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"paddingLeft"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #paddingLeft}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>padding</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #padding}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setPaddingBottom","fromProperty":"paddingBottom"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>paddingBottom</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>paddingBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingBottom}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPaddingLeft","fromProperty":"paddingLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>paddingLeft</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>paddingLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingLeft}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPaddingRight","fromProperty":"paddingRight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>paddingRight</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>paddingRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingRight}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPaddingTop","fromProperty":"paddingTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>paddingTop</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>paddingTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #paddingTop}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setParent","fromProperty":"parent"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>parent</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>parent</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #parent}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setRight","fromProperty":"right"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>right</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>right</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #right}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setScrollLeft"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nScrollLeft"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>nScrollLeft</code> is not documented.","column":"21","line":"6974"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"6974"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setScrollTop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nScrollTop"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>nScrollTop</code> is not documented.","column":"20","line":"6988"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"6988"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelectable","fromProperty":"selectable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selectable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSpace","fromProperty":"space"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"left"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #left}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #width}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"top"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #top}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"height"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #height}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>space</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #space}.</p>"}}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"setStyleProperty"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"propName"},children:[
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Parameter <code>propName</code> is not documented.","column":"24","line":"5649"}},
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"5649"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSupportsDropMethod","fromProperty":"supportsDropMethod"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>supportsDropMethod</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>supportsDropMethod</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #supportsDropMethod}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTabIndex","fromProperty":"tabIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>tabIndex</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>tabIndex</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #tabIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTextColor","fromProperty":"textColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>textColor</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textColor}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setToolTip","fromProperty":"toolTip"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>toolTip</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>toolTip</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #toolTip}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTop","fromProperty":"top"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>top</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>top</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #top}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setVerticalAlign","fromProperty":"verticalAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>verticalAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>verticalAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #verticalAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setVisibility","fromProperty":"visibility"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>visibility</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>visibility</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidth","fromProperty":"width"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>width</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>width</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #width}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWidths","fromProperty":"widths"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"minWidth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #minWidth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"width"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #width}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"maxWidth"},children:[
          {type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #maxWidth}.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>widths</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #widths}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setZIndex","fromProperty":"zIndex"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>zIndex</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>zIndex</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #zIndex}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"show"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"2957"}}
        ]}
      ]},
    {type:"method",attributes:{"hasError":"true","name":"supportsDrop"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"dragCache"},children:[
          {type:"desc",attributes:{"text":"<p>An object describing the event, containing at least these members:\n    <ul>\n      <li>startScreenX</li>\n      <li>startScreenY</li>\n      <li>pageX</li>\n      <li>pageY</li>\n      <li>sourceWidget</li>\n      <li>sourceTopLevel</li>\n      <li>dragHandlerActive</li>\n      <li>hasFiredDragStart</li>\n    </ul></p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<i>true</i> if the widget can accept this drop operation;\n  <i>false</i> otherwise."}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"7226"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowStretchX","fromProperty":"allowStretchX"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowStretchX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchX}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAllowStretchY","fromProperty":"allowStretchY"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowStretchY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowStretchY}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleAnonymous","fromProperty":"anonymous"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>anonymous</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #anonymous}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleCapture","fromProperty":"capture"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>capture</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #capture}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleDisplay","fromProperty":"display"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>display</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #display}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEnableElementFocus","fromProperty":"enableElementFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enableElementFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enableElementFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleFocused","fromProperty":"focused"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>focused</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focused}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleHideFocus","fromProperty":"hideFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>hideFocus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #hideFocus}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleSelectable","fromProperty":"selectable"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>selectable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleVisibility","fromProperty":"visibility"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>visibility</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #visibility}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}