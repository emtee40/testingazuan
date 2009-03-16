{type:"class",attributes:{"hasError":"true","name":"DockLayoutImpl","hasWarning":"true","packageName":"qx.legacy.ui.layout.impl","superClass":"qx.legacy.ui.layout.impl.LayoutImpl","fullName":"qx.legacy.ui.layout.impl.DockLayoutImpl","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.legacy.ui.layout.impl.LayoutImpl","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vWidget"}}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"String","name":"METHOD_LOCATION","value":"layoutChild_location_"},children:[{type:"desc",attributes:{"text":"<p>Global Structure:\n [01] <span class=\"caps\">COMPUTE</span> <span class=\"caps\">BOX</span> <span class=\"caps\">DIMENSIONS</span> <span class=\"caps\">FOR</span> AN <span class=\"caps\">INDIVIDUAL</span> <span class=\"caps\">CHILD</span>\n [02] <span class=\"caps\">COMPUTE</span> <span class=\"caps\">NEEDED</span> <span class=\"caps\">DIMENSIONS</span> <span class=\"caps\">FOR</span> AN <span class=\"caps\">INDIVIDUAL</span> <span class=\"caps\">CHILD</span>\n [03] <span class=\"caps\">COMPUTE</span> <span class=\"caps\">NEEDED</span> <span class=\"caps\">DIMENSIONS</span> <span class=\"caps\">FOR</span> <span class=\"caps\">ALL</span> <span class=\"caps\">CHILDREN</span>\n [04] <span class=\"caps\">UPDATE</span> <span class=\"caps\">LAYOUT</span> <span class=\"caps\">WHEN</span> A <span class=\"caps\">CHILD</span> <span class=\"caps\">CHANGES</span> <span class=\"caps\">ITS</span> <span class=\"caps\">OUTER</span> <span class=\"caps\">DIMENSIONS</span>\n [05] <span class=\"caps\">UPDATE</span> <span class=\"caps\">CHILD</span> ON <span class=\"caps\">INNER</span> <span class=\"caps\">DIMENSION</span> <span class=\"caps\">CHANGES</span> OF <span class=\"caps\">LAYOUT</span>\n [06] <span class=\"caps\">UPDATE</span> <span class=\"caps\">LAYOUT</span> ON <span class=\"caps\">JOB</span> <span class=\"caps\">QUEUE</span> <span class=\"caps\">FLUSH</span>\n [07] <span class=\"caps\">UPDATE</span> <span class=\"caps\">CHILDREN</span> ON <span class=\"caps\">JOB</span> <span class=\"caps\">QUEUE</span> <span class=\"caps\">FLUSH</span>\n [08] <span class=\"caps\">CHILDREN</span> <span class=\"caps\">ADD</span>/REMOVE/MOVE <span class=\"caps\">HANDLING</span>\n [09] <span class=\"caps\">FLUSH</span> <span class=\"caps\">LAYOUT</span> <span class=\"caps\">QUEUES</span> OF <span class=\"caps\">CHILDREN</span>\n [10] <span class=\"caps\">LAYOUT</span> <span class=\"caps\">CHILD</span></p>\n\n<p>Inherits from qx.legacy.ui.layout.impl.LayoutImpl:\n [02] <span class=\"caps\">COMPUTE</span> <span class=\"caps\">NEEDED</span> <span class=\"caps\">DIMENSIONS</span> <span class=\"caps\">FOR</span> AN <span class=\"caps\">INDIVIDUAL</span> <span class=\"caps\">CHILD</span>\n [03] <span class=\"caps\">COMPUTE</span> <span class=\"caps\">NEEDED</span> <span class=\"caps\">DIMENSIONS</span> <span class=\"caps\">FOR</span> <span class=\"caps\">ALL</span> <span class=\"caps\">CHILDREN</span>\n [04] <span class=\"caps\">UPDATE</span> <span class=\"caps\">LAYOUT</span> <span class=\"caps\">WHEN</span> A <span class=\"caps\">CHILD</span> <span class=\"caps\">CHANGES</span> <span class=\"caps\">ITS</span> <span class=\"caps\">OUTER</span> <span class=\"caps\">DIMENSIONS</span>\n [08] <span class=\"caps\">CHILDREN</span> <span class=\"caps\">ADD</span>/REMOVE/MOVE <span class=\"caps\">HANDLING</span></p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyComputedHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_applyComputedWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"computeChildBoxHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Compute and return the box height of the given child</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"23","line":"161"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"computeChildBoxWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Compute and return the box width of the given child</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"22","line":"145"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"flushChildrenQueue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChildrenQueue"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method have full control of the order in which the\n registered (or also non-registered) children should be\n layouted on the horizontal axis.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChildrenQueue</code> is not documented.","column":"20","line":"266"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getChildAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"15","line":"293"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"293"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getChildAlignMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"19","line":"304"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"304"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"layoutChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>This is called from qx.legacy.ui.core.Widget and  it&#8217;s task is to apply the layout\n (excluding border and padding) to the child.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"13","line":"325"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"13","line":"325"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_bottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_default"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_horizontal"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_left"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"27","line":"365"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"27","line":"365"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"27","line":"365"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_right"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_top"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"26","line":"347"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"26","line":"347"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"347"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_location_vertical"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","name":"layoutChild_sizeY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vJobs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Parameter <code>vJobs</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"updateChildOnInnerHeightChange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Actions that should be done if the inner height of the widget was changed.\n Normally this includes update to percent values and ranges.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"32","line":"201"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"updateChildOnInnerWidthChange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vChild"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Actions that should be done if the inner width of the widget was changed.\n Normally this includes update to percent values and ranges.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vChild</code> is not documented.","column":"31","line":"185"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"updateChildrenOnJobQueueFlush"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vQueue"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Updates children on special jobs</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"boolean"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vQueue</code> is not documented.","column":"31","line":"242"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.legacy.ui.layout.impl.LayoutImpl","name":"updateSelfOnJobQueueFlush"},children:[{type:"desc",attributes:{"text":"<p>Invalidate and recompute things because of job in queue\n(before the rest of job handling will be executed).</p>"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Class documentation is missing.","column":"16","line":"21"}}]}]}