{type:"class",attributes:{"isAbstract":"true","name":"AbstractImage","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Abstract","childClasses":"qx.ui.table.cellrenderer.Boolean,qx.ui.table.cellrenderer.Image","fullName":"qx.ui.table.cellrenderer.AbstractImage","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A template class for cell renderer, which display images. Concrete\nimplementations must implement the method @{link #_identifyImage}.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","name":"_getCellClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Abstract","name":"_getContentHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","name":"_getImageInfos"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Retrieves the image infos.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Map with an &#8220;url&#8221; attribute (type string)\n                holding the <span class=\"caps\">URL</span> of the image to show\n                and a &#8220;tooltip&#8221; attribute\n                (type string) being the tooltip text (or null if none was specified)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_identifyImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link #createDataCellHtml}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Identifies the Image to show. This is a template method, which must be\nimplements by sub classes.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A map having the following attributes:\n          <ul>\n          <li>&#8220;url&#8221;: (type string) must be the <span class=\"caps\">URL</span> of the image to show.</li>\n          <li>&#8220;imageWidth&#8221;: (type int) the width of the image in pixels.</li>\n          <li>&#8220;imageHeight&#8221;: (type int) the height of the image in pixels.</li>\n          <li>&#8220;tooltip&#8221;: (type string) must be the image tooltip text.</li>\n          </ul></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]}]}]}