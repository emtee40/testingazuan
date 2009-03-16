{type:"class",attributes:{"hasError":"true","name":"Meta","hasWarning":"true","packageName":"qx.legacy.theme.manager","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.legacy.theme.manager.Meta","type":"class"},children:[{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__queryThemes"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>the key to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Query the theme list to get all themes the given key</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of matching themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.theme.manager.Meta#autoSync","name":"_applyAutoSync"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>autoSync</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyAutoSync}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.theme.manager.Meta#theme","name":"_applyTheme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTheme}.</p>"}}]},{type:"method",attributes:{"name":"getAppearanceThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered appearance themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of appearance themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getAutoSync","fromProperty":"autoSync"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoSync</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoSync</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBorderThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered border themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of border themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getColorThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered color themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of color themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getFontThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered font themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of font themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getIconThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered icon themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of icon themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getMetaThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered meta themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of meta themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getTheme","fromProperty":"theme"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWidgetThemes"},children:[{type:"desc",attributes:{"text":"<p>Returns a list of all registered widget themes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of widget themes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Theme","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAutoSync","fromProperty":"autoSync"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>autoSync</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoSync</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"initialize"},children:[{type:"desc",attributes:{"text":"<p>Initialize the themes which were selected using the settings. Should only\nbe called from qooxdoo based application.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"initTheme","fromProperty":"theme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>theme</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isAutoSync","fromProperty":"autoSync"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>autoSync</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetAutoSync","fromProperty":"autoSync"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoSync</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTheme","fromProperty":"theme"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>theme</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setAutoSync","fromProperty":"autoSync"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>autoSync</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoSync</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTheme","fromProperty":"theme"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>theme</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>theme</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #theme}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleAutoSync","fromProperty":"autoSync"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>autoSync</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoSync}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyAutoSync","defaultValue":"true","propertyType":"new","name":"autoSync","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Controls whether sync is done automatically</p>"}}]},{type:"property",attributes:{"name":"theme","check":"Theme","allowNull":"true","propertyType":"new","apply":"_applyTheme","event":"changeTheme"},children:[{type:"desc",attributes:{"text":"<p>Meta theme. Applies the defined color, border, widget, ... themes to\nthe corresponding managers.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeTheme"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #theme}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.theme.manager.Meta"}}]}]}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Class documentation is missing.","column":"16","line":"21"}}]}]}