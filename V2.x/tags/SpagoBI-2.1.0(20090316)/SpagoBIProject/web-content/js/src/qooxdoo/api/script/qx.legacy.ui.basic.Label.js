{type:"class",attributes:{"name":"Label","packageName":"qx.legacy.ui.basic","superClass":"qx.legacy.ui.basic.Terminator","fullName":"qx.legacy.ui.basic.Label","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The Label widget displays plain text or <span class=\"caps\">HTML</span> text.</p>\n\n<p>Most complex qooxdoo widgets use instances of Label to display text.\nThe label supports auto sizing and internationalization.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.legacy.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"text"},children:[{type:"desc",attributes:{"text":"<p>The text of the label (see property {@link #text}).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"mnemonic"},children:[{type:"desc",attributes:{"text":"<p>The mnemonic of the label (see property {@link #mnemonic}).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"mode"},children:[{type:"desc",attributes:{"text":"<p>The mode of the label (see property {@link #mode}).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"_getMeasureNode"},children:[{type:"desc",attributes:{"text":"<p>Create a <span class=\"caps\">DOM</span> element, which can be used to measure the needed width of the label</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>measure node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__patchTextOverflow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"html"},children:[{type:"desc",attributes:{"text":"<p>html string of the label</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"inner"},children:[{type:"desc",attributes:{"text":"<p>inner width of the label</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates an <span class=\"caps\">HTML</span> fragment for the overflow symbol</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>html Fragment of the label with overflow symbol</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.core.Widget#font","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_applyFont"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFont}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.Label#mnemonic","name":"_applyMnemonic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.Label#mode","name":"_applyText"},children:[{type:"params",children:[{type:"param",attributes:{"name":"text"},children:[{type:"desc",attributes:{"text":"<p>new label text</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply a new label text</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.Label#textAlign","name":"_applyTextAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextAlign}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.core.Widget#textColor","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_applyTextColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextColor}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.basic.Label#wrap","name":"_applyWrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWrap}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_computeObjectNeededDimensions"},children:[{type:"desc",attributes:{"text":"<p>Computes the needed dimension for the current text.</p>"}}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.legacy.ui.basic.Terminator","name":"_computePreferredInnerHeight"},children:[{type:"desc",attributes:{"text":"<p>overridden</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.legacy.ui.basic.Terminator","name":"_computePreferredInnerWidth"},children:[{type:"desc",attributes:{"text":"<p>overridden</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.basic.Terminator","overriddenFrom":"qx.legacy.ui.basic.Terminator","name":"_postApply","hasWarning":"true"}},{type:"method",attributes:{"access":"protected","name":"_styleFont"},children:[{type:"params",children:[{type:"param",attributes:{"name":"font"},children:[{type:"desc",attributes:{"text":"<p>new font.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.core.Font"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply the font to the label.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_styleTextColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>any acceptable <span class=\"caps\">CSS</span> color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply the text color to the label.</p>"}}]},{type:"method",attributes:{"name":"getHtml"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>please use {@link #getText} instead.</p>"}}]},{type:"desc",attributes:{"text":"<p>Deprecated text getter.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>current value of the label.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getMnemonic","fromProperty":"mnemonic"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mnemonic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mnemonic}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mnemonic</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getText","fromProperty":"text"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>text</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #text}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>text</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTextOverflow","fromProperty":"textOverflow"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textOverflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>textOverflow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMnemonic","fromProperty":"mnemonic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mnemonic</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mnemonic</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mnemonic}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initText","fromProperty":"text"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>text</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>text</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #text}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTextOverflow","fromProperty":"textOverflow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>textOverflow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textOverflow</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isTextOverflow","fromProperty":"textOverflow"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>textOverflow</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetMnemonic","fromProperty":"mnemonic"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mnemonic</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mnemonic}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetText","fromProperty":"text"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>text</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #text}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTextOverflow","fromProperty":"textOverflow"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textOverflow</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"html"},children:[{type:"desc",attributes:{"text":"<p>new value of the label.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>please use {@link #setText} instead.</p>"}}]},{type:"desc",attributes:{"text":"<p>Deprecated text setter.</p>"}}]},{type:"method",attributes:{"name":"setMnemonic","fromProperty":"mnemonic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mnemonic</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mnemonic</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mnemonic}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setText","fromProperty":"text"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>text</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>text</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #text}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTextOverflow","fromProperty":"textOverflow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>textOverflow</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textOverflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleTextOverflow","fromProperty":"textOverflow"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>textOverflow</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textOverflow}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"allowStretchX","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"appearance","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"label\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"cursor","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"default\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"height","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"mnemonic","apply":"_applyMnemonic"},children:[{type:"desc",attributes:{"text":"<p>A single character which will be underlined inside the text.</p>"}}]},{type:"property",attributes:{"apply":"_applyText","defaultValue":"\"auto\"","propertyType":"new","name":"mode","possibleValues":"\"html\",\"text\",\"auto\""},children:[{type:"desc",attributes:{"text":"<p>Set how the label text should be interpreted</p>\n\n<ul>\n  <li><code>text</code> will set the text verbatim. Leading and trailing white space will be reserved.</li>\n  <li><code>html</code> will interpret the label text as html.</li>\n  <li><code>auto</code> will try to guess whether the text represents an HTML string or plain text.\n      This is how older qooxdoo versions treated the text.\n  </li>\n<ul>"}}]},{type:"property",attributes:{"name":"selectable","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"text","defaultValue":"\"\"","event":"changeText","propertyType":"new","apply":"_applyText","check":"String"},children:[{type:"desc",attributes:{"text":"<p>The text of the label. How the text is interpreted depends on the value of the\nproperty {@link #mode}.</p>"}}]},{type:"property",attributes:{"name":"textAlign","allowNull":"true","propertyType":"new","possibleValues":"\"left\",\"center\",\"right\",\"justify\"","apply":"_applyTextAlign","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>The alignment of the text inside the box</p>"}}]},{type:"property",attributes:{"apply":"_applyText","defaultValue":"true","propertyType":"new","name":"textOverflow","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether an ellipsis symbol should be rendered if there is not enough room for the full text.</p>\n\n<p>Please note: If enabled this conflicts with a custom overflow setting.</p>"}}]},{type:"property",attributes:{"name":"width","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.core.Widget"}},{type:"property",attributes:{"name":"wrap","defaultValue":"false","allowNull":"true","propertyType":"new","apply":"_applyWrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the text should be automatically wrapped into the next line</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeText"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #text}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}