{type:"class",attributes:{"isStatic":"true","name":"CoreUtils","packageName":"spagobi.commons","fullName":"spagobi.commons.CoreUtils","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Class that provides some common utilities</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"apply"},children:[{type:"params",children:[{type:"param",attributes:{"name":"o"},children:[{type:"desc",attributes:{"text":"<p>Destination object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"c"},children:[{type:"desc",attributes:{"text":"<p>Source object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"defaults"},children:[{type:"desc",attributes:{"text":"<p>Default object to copy from \n									  if no source is specified</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Function that copies source object &#8220;c&#8221; into destination object &#8220;o&#8221;.</p>\n\n<p>Parameters can be a simple data type like number, boolean, string \nor a complex object with properties.</p>\n\n<p>If the property already exists in destination object, its value is \noverridden by the value in souce object. If the propert doesn&#8217;t exist,\nit is added from source to destination object.</p>\n\n<p><strong>Example</strong></p>\n\n<code>\nvar a = spagobi.commons.CoreUtils.apply({top: 10, left: 20}, \n										{top: 50, width:80})\n	</code>\n\n<p>sets object &#8220;a&#8221; with properties {top: 50, left: 20, width:80}</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Object &#8220;o&#8221;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"toStr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"o"},children:[{type:"desc",attributes:{"text":"<p>The object to be converted into a string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Function to convert an object into a string.</p>\n\n<p>Returns a string with the object properties and their respective values</p>\n\n<p><strong>Example 1</strong></p>\n\n<code>string str = toStr({name:\"Myname\", val:\"123\"}) </code> \n\n<p>sets the value of string <i>str</i> to 		 &#8221;<i>name: Myname;</i></p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>val: 123</i>&#8221;</p>"}}]}]}]}