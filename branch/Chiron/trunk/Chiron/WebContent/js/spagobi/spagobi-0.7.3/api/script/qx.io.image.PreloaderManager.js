{type:"class",attributes:{"name":"PreloaderManager","packageName":"qx.io.image","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.io.image.PreloaderManager","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This singleton manage all qx.io.image.Preloader instances.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vObject"},children:[{type:"desc",attributes:{"text":"<p>qx.io.image.Preloader instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Preloader"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a qx.io.image.Preloader instance to the manager</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"create"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vSource"},children:[{type:"desc",attributes:{"text":"<p>Source of preloader image instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create new qx.io.image.preloader instance with given source</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>new qx.io.image.Preloader instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Preloader"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.core.Object","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vSource"},children:[{type:"desc",attributes:{"text":"<p>Source of preloader image instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Return image preloader instance with given source</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>qx.io.image.Preloader instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Preloader"}}]}]}]},{type:"method",attributes:{"name":"has"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vSource"},children:[{type:"desc",attributes:{"text":"<p>Source of preloader image instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns whether an image preloader instance with the given source is registered</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether an image preloader instance has given source</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vObject"},children:[{type:"desc",attributes:{"text":"<p>qx.io.image.Preloader instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Preloader"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes a qx.io.image.Preloader instance from the manager</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.image.PreloaderManager"}}]}]}]}]}]}