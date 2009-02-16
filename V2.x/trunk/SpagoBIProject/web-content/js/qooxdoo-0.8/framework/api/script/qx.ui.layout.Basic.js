{type:"class",attributes:{"name":"Basic","packageName":"qx.ui.layout","superClass":"qx.ui.layout.Abstract","fullName":"qx.ui.layout.Basic","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A basic layout, which supports positioning of child widgets by static\nleft/top coordinates. This layout is extremely basic but should also\nperform best and is the ideal candidate for all animations and things\nlike this.</p>\n\n<p><strong>Features</strong></p>\n\n<ul>\n<li>Integer dimensions</li>\n<li>Basic location using <code>left</code> and <code>top</code></li>\n<li>Minimum and maximum dimensions without skrinking/growing</li>\n<li>Margins for top and left side (including negative ones)</li>\n<li>Only size hint relevant margins for right and bottom</li>\n<li>Auto-sizing</li>\n</ul>\n\n<p><strong>Item Properties</strong></p>\n\n<ul>\n<li><strong>left</strong> <em>(Integer)</em>: The left coordinate in pixel</li>\n<li><strong>top</strong> <em>(Integer)</em>: The top coordinate in pixel</li>\n</ul>\n\n<p><strong>Details</strong></p>\n\n<p>The default location of any widget is zero for both\n<code>left</code> and <code>top</code>.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the basic layout.</p>\n\n<pre class=\"javascript\">\nvar container = new qx.ui.container.Composite(new qx.ui.layout.Basic());\n\n// simple positioning\ncontainer.add(new qx.ui.core.Widget(), {left: 10, top: 10});\ncontainer.add(new qx.ui.core.Widget(), {left: 100, top: 50});\n</pre>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/layout/basic\">\nExtended documentation</a> and links to demos of this layout in the qooxdoo wiki.\n\n<p><strong>Alternative Names</strong></p>\n\n<ul>\n<li>AbsoluteLayout (ExtJS)</li>\n</ul>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"_computeSizeHint"}},{type:"method",attributes:{"docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"renderLayout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"availWidth"}},{type:"param",attributes:{"name":"availHeight"}}]}]}]}]}