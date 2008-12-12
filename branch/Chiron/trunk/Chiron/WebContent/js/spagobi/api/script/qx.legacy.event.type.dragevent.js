{type:"class",attributes:{"name":"DragEvent","hasWarning":"true","packageName":"qx.legacy.event.type","superClass":"qx.legacy.event.type.MouseEvent","fullName":"qx.legacy.event.type.DragEvent","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The event object for drag and drop sessions</p>"}},{type:"constructor",children:[{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.event.type.MouseEvent","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vType"}},{type:"param",attributes:{"name":"vMouseEvent"}},{type:"param",attributes:{"name":"vTarget"}},{type:"param",attributes:{"name":"vRelatedTarget"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vType</code> is not documented.","column":"11","line":"35"}},{type:"error",attributes:{"msg":"Parameter <code>vMouseEvent</code> is not documented.","column":"11","line":"35"}},{type:"error",attributes:{"msg":"Parameter <code>vTarget</code> is not documented.","column":"11","line":"35"}},{type:"error",attributes:{"msg":"Parameter <code>vRelatedTarget</code> is not documented.","column":"11","line":"35"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"hasError":"true","name":"addAction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sAction"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>sAction</code> is not documented.","column":"11","line":"168"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"168"}}]}]},{type:"method",attributes:{"hasError":"true","name":"addData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sType"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"oData"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>sType</code> is not documented.","column":"9","line":"118"}},{type:"error",attributes:{"msg":"Parameter <code>oData</code> is not documented.","column":"9","line":"118"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"9","line":"118"}}]}]},{type:"method",attributes:{"hasError":"true","name":"clearActions"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"199"}}]}]},{type:"method",attributes:{"hasError":"true","name":"clearData"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"139"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getAction"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"189"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sType"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>sType</code> is not documented.","column":"9","line":"129"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"9","line":"129"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getDropDataTypes"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"149"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getMouseEvent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"73"}}]}]},{type:"method",attributes:{"hasError":"true","name":"removeAction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sAction"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>sAction</code> is not documented.","column":"14","line":"179"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"179"}}]}]},{type:"method",attributes:{"name":"setCursorPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"deltaX"},children:[{type:"desc",attributes:{"text":"<p>The number of pixels the top-left corner of the\n         cursor feedback should be away from the mouse cursor in x direction.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"param",attributes:{"name":"deltaY"},children:[{type:"desc",attributes:{"text":"<p>The number of pixels the top-left corner of the\n         cursor feedback should be away from the mouse cursor in y direction.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the position of the cursor feedback (the icon showing whether dropping\nis allowed at the current position and which action a drop will do).</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setFeedbackWidget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>the feedback widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.core.Widget"}}]}]},{type:"param",attributes:{"defaultValue":"10","name":"deltaX"},children:[{type:"desc",attributes:{"text":"<p>the number of pixels the top-left corner of the widget\n         should be away from the mouse cursor in x direction.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"param",attributes:{"defaultValue":"10","name":"deltaY"},children:[{type:"desc",attributes:{"text":"<p>the number of pixels the top-left corner of the widget\n         should be away from the mouse cursor in y direction.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"param",attributes:{"name":"autoDisposeWidget"},children:[{type:"desc",attributes:{"text":"<p>whether the widget should be disposed when\n         dragging is finished or cancelled.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the widget to show as feedback for the user. This widget should\nrepresent the object(s) the user is dragging.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"startDrag"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"92"}}]}]}]}]}