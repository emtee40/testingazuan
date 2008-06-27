{type:"class",attributes:{"name":"TextField","hasWarning":"true","packageName":"qx.ui.form","superClass":"qx.ui.basic.Terminator","childClasses":"qx.ui.form.PasswordField,qx.ui.form.TextArea","fullName":"qx.ui.form.TextField","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>An advanced wrapper for the <span class=\"caps\">HTML</span> <code>&lt;input type=&#8220;text&#8221;&gt;</code> tag.</p>\n\n<p>It is used for textual user input.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.form.TextField","name":"text-field"}}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>initial text value of the input field ({@link #value}).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"createRegExpValidator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vRegExp"},children:[
          {type:"desc",attributes:{"text":"<p>Regular expression to match the text against.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"RegExp"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Create a validator function from a regular expression.\nIf the input string matches the regular expression, the\ntext is considered valid.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Validator function.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Function"}}
          ]}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeValidator"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #validator}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeValue"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"input"},children:[
      {type:"desc",attributes:{"text":"<p>Fired each time the user types in the text field. The data property\nof the event contains the value of the text field.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"allowStretchX","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"text-field\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"hideFocus","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"liveUpdate","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the property {@link #value} should be updated &#8220;live&#8221; on each key\nstroke or only on focus blur (default).</p>"}}
      ]},
    {type:"property",attributes:{"check":"Integer","allowNull":"true","propertyType":"new","name":"maxLength","apply":"_applyMaxLength"},children:[
      {type:"desc",attributes:{"text":"<p>Maximum number of characters in the input field.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyReadOnly","defaultValue":"false","propertyType":"new","name":"readOnly","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the field is read only</p>"}}
      ]},
    {type:"property",attributes:{"name":"selectable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_applySpellCheck","defaultValue":"false","propertyType":"new","name":"spellCheck","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the browser&#8217;s build in spell check should be enabled\nfor this input field. Currently affets only FireFox >= 2.</p>\n\n<p>Documented at <a href=\"http://developer.mozilla.org/en/docs/Controlling_spell_checking_in_HTML_forms\">http://developer.mozilla.org/en/docs/Controlling_spell_checking_in_HTML_forms</a></p>"}}
      ]},
    {type:"property",attributes:{"name":"tabIndex","docFrom":"qx.ui.core.Widget","defaultValue":"1","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"textAlign","allowNull":"true","propertyType":"new","possibleValues":"\"left\",\"center\",\"right\",\"justify\"","apply":"_applyTextAlign","themeable":"true"},children:[
      {type:"desc",attributes:{"text":"<p>The alignment of the text inside the box</p>"}}
      ]},
    {type:"property",attributes:{"check":"Function","allowNull":"true","propertyType":"new","name":"validator","event":"changeValidator"},children:[
      {type:"desc",attributes:{"text":"<p>Set validator function. The validator function should take a\nstring as input and return a boolean value whether the string\nis valid. The validator is used by the functions {@link #isValid}\nand {@link #isComputedValid}.</p>"}}
      ]},
    {type:"property",attributes:{"name":"value","defaultValue":"\"\"","allowNull":"true","propertyType":"new","apply":"_applyValue","event":"changeValue"},children:[
      {type:"desc",attributes:{"text":"<p>The value of the text field.\nThe value is by default updated when the input field looses the focus (blur).\nIf the property {@link #liveUpdate} is set to <code>true</code>, the value is\nupated on each key stroke.</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__getRange"},children:[
      {type:"desc",attributes:{"text":"<p>Internal IE text selection helper.</p>"}}
      ]},
    {type:"method",attributes:{"access":"private","name":"__getSelectionRange"},children:[
      {type:"desc",attributes:{"text":"<p>Internal IE text selection helper.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_afterAppear"},children:[
      {type:"desc",attributes:{"text":"<p>Apply {@link #_ieFirstInputFix} in the appear event of the widget.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#cursor","overriddenFrom":"qx.ui.core.Widget","name":"_applyCursor"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#element","overriddenFrom":"qx.ui.core.Widget","name":"_applyElement"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Element"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyElement}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#enabled","overriddenFrom":"qx.ui.core.Widget","name":"_applyEnabled"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the enabled property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#font","overriddenFrom":"qx.ui.core.Widget","name":"_applyFont"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#maxLength","name":"_applyMaxLength"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the maxLength property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#readOnly","name":"_applyReadOnly"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the readOnly property.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#spellCheck","name":"_applySpellCheck"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>spellCheck</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySpellCheck}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#textAlign","name":"_applyTextAlign"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextAlign}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#textColor","overriddenFrom":"qx.ui.core.Widget","name":"_applyTextColor"},children:[
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
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.TextField#value","name":"_applyValue"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the value property</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeInnerHeight"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Changes the inner height of the text field.\nCalls the protected method {@link #_syncFieldHeight} to\nsync the inner height.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_changeInnerWidth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>old value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Changes the inner width of the text field.\nCalls the protected method {@link #_syncFieldWidth} to\nsync the inner width.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.basic.Terminator","name":"_computePreferredInnerHeight"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"36","line":"783"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.basic.Terminator","name":"_computePreferredInnerWidth"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"35","line":"775"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ieFirstInputFix"},children:[
      {type:"desc",attributes:{"text":"<p>Fix IE&#8217;s input event for filled text fields</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onblur"},children:[
      {type:"desc",attributes:{"text":"<p>Blur event handler.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onfocus"},children:[
      {type:"desc",attributes:{"text":"<p>Focus event handler.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninput"},children:[
      {type:"desc",attributes:{"text":"<p>Input event handler.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_ontabfocus"},children:[
      {type:"desc",attributes:{"text":"<p>Tab focus event handler</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.basic.Terminator","name":"_postApply"},children:[
      {type:"desc",attributes:{"text":"<p>We could not use width/height = 100% because the outer elements\ncould have paddings and borders which will break. We use the\ncomputed inner width/height instead</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderCursor"},children:[
      {type:"desc",attributes:{"text":"<p>Renders the cursor using the styleProperty <code>cursor</code> directly.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderFont"},children:[
      {type:"desc",attributes:{"text":"<p>Renders the new font</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderSpellCheck"},children:[
      {type:"desc",attributes:{"text":"<p>Applies the spell check to the <span class=\"caps\">DOM</span> element.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderTextAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Renders the text align using the styleProperty <code>textAlign</code> directly.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_renderTextColor"},children:[
      {type:"desc",attributes:{"text":"<p>Renders the color using the styleProperty <code>color</code> directly.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleFont"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new font value to render</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.ui.core.Font"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Utility method to render the given font. Calls the\n{@link #_renderFont} method.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_styleTextColor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new color value to render</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sync color to embedded input element</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_syncFieldHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Synchronizes the styleProperty <code>width</code> with\nthe current <code>innerWidth</code></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_syncFieldWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Synchronizes the styleProperty <code>width</code> with\nthe current <code>innerWidth</code></p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeBlur"},children:[
      {type:"desc",attributes:{"text":"<p>Overridden from {@link qx.ui.core.Widget#_visualizeFocus}: set the focus to the inputElement\nand not to the parent div.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Widget","name":"_visualizeFocus"},children:[
      {type:"desc",attributes:{"text":"<p>Overridden from {@link qx.ui.core.Widget#_visualizeFocus}: set the focus to the inputElement\nand not to the parent div.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getComputedValue"},children:[
      {type:"desc",attributes:{"text":"<p>Return the current value of the text field. The computed values is\nindependent of the value of the {@link #liveUpdate} property.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The current value of the text field.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getInputElement"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the inner input element.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the input element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Element"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>liveUpdate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>liveUpdate</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMaxLength","fromProperty":"maxLength"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxLength</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxLength</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getReadOnly","fromProperty":"readOnly"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>readOnly</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>readOnly</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectionLength"},children:[
      {type:"desc",attributes:{"text":"<p>Get the number of charaters in the current selection.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The lenght of the selection.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectionStart"},children:[
      {type:"desc",attributes:{"text":"<p>Get the start index of the text selection in the field.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Start index of the current selection.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectionText"},children:[
      {type:"desc",attributes:{"text":"<p>Get the text value of the current selection.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The text value of the current selection.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spellCheck</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>spellCheck</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTextAlign","fromProperty":"textAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>textAlign</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValidator","fromProperty":"validator"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>validator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>validator</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>liveUpdate</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>liveUpdate</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMaxLength","fromProperty":"maxLength"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>maxLength</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxLength</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initReadOnly","fromProperty":"readOnly"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>readOnly</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>readOnly</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>spellCheck</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spellCheck</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTextAlign","fromProperty":"textAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>textAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initValidator","fromProperty":"validator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>validator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>validator</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #validator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isComputedValid"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the current text of the text field returned by\n{@link #getComputedValue} is valid.\nThe validatore function ({@link #validator}) is used to\nvalidate the text.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the computed value is valid.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>liveUpdate</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isReadOnly","fromProperty":"readOnly"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>readOnly</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>spellCheck</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isValid"},children:[
      {type:"desc",attributes:{"text":"<p>Whether the value of the {@link #value} property is valid.\nThe validatore function ({@link #validator}) is used to\nvalidate the text.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the text is valid.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>liveUpdate</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMaxLength","fromProperty":"maxLength"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxLength</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetReadOnly","fromProperty":"readOnly"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>readOnly</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spellCheck</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTextAlign","fromProperty":"textAlign"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetValidator","fromProperty":"validator"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>validator</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #validator}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"selectAll"},children:[
      {type:"desc",attributes:{"text":"<p>Select all text in the input field.</p>"}}
      ]},
    {type:"method",attributes:{"name":"selectFromTo"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vStart"},children:[
          {type:"desc",attributes:{"text":"<p>start index of the selection</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"vEnd"},children:[
          {type:"desc",attributes:{"text":"<p>end index of the selection.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Select text within a given index range in the input field.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>liveUpdate</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>liveUpdate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMaxLength","fromProperty":"maxLength"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>maxLength</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxLength</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxLength}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setReadOnly","fromProperty":"readOnly"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>readOnly</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>readOnly</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelectionLength"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vLength"},children:[
          {type:"desc",attributes:{"text":"<p>Lenght of the new selection.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set the length of the selection. The selection starts at the index specified by the\nmethod {@link #setSelectionStart}.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setSelectionStart"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vStart"},children:[
          {type:"desc",attributes:{"text":"<p>Start index of a new text selection.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set the start index of the text selection in the field.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setSelectionText"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vText"},children:[
          {type:"desc",attributes:{"text":"<p>New text value of the current selection</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Set the text of the current selection.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>spellCheck</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spellCheck</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTextAlign","fromProperty":"textAlign"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>textAlign</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValidator","fromProperty":"validator"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>validator</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>validator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validator}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleLiveUpdate","fromProperty":"liveUpdate"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>liveUpdate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #liveUpdate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleReadOnly","fromProperty":"readOnly"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>readOnly</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #readOnly}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleSpellCheck","fromProperty":"spellCheck"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>spellCheck</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spellCheck}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}