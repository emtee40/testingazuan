{type:"class",attributes:{"name":"Spinner","hasWarning":"true","packageName":"qx.ui.form","superClass":"qx.ui.layout.HorizontalBoxLayout","fullName":"qx.ui.form.Spinner","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A <strong>spinner</strong> is a control that allows you to adjust a numerical value,\ntypically within an allowed range. An obvious example would be to specify the\nmonth of a year as a number in the range 1 &#8211; 12.</p>\n\n<p>To do so, a spinner encompasses a field to display the current value (a\ntextfield) and controls such as up and down buttons to change that value. The\ncurrent value can also be changed by editing the display field directly, or\nusing mouse wheel and cursor keys.</p>\n\n<p>To implement the range of a spinner&#8217;s value, a {@link qx.util.range.Range\nRange} object is deployed as the {@link #manager} object. Here you can define the\nboundaries of the range (<strong>min</strong> and <strong>max</strong> properties), the <strong>default</strong> value,\nthe <strong>precision</strong> and whether the range should <strong>wrap</strong> when stepping beyond a\nborder (see the Range documentation for more information). An optional {@link\n#numberFormat} property allows you to control the format of how a value can\nbe entered and will be displayed.</p>\n\n<p>A brief, but non-trivial example:</p>\n\n<pre>\nvar s = new qx.ui.form.Spinner;\ns.set({\n  max: 3000,\n  min: -3000\n});\nvar nf = new qx.util.format.NumberFormat();\nnf.setMaximumFractionDigits(2);\ns.setNumberFormat(nf);\ns.getManager().setPrecision(2);\n</pre>\n\n<p>A spinner instance without any further properties specified in the\nconstructor or a subsequent <strong>set</strong> command will appear with default\nvalues and behaviour.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.form.Spinner","name":"spinner"}},
    {type:"appearance",attributes:{"type":"qx.ui.form.TextField","name":"spinner-field"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Image","name":"spinner-button-up"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"pressed"}}
        ]}
      ]},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Image","name":"spinner-button-down"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"pressed"}}
        ]}
      ]}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vMin"}},
        {type:"param",attributes:{"name":"vValue"}},
        {type:"param",attributes:{"name":"vMax"}}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"change"},children:[
      {type:"desc",attributes:{"text":"<p>Fired each time the value of the spinner changes.\nThe &#8220;data&#8221; property of the event is set to the new value\nof the spinner.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__checkValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"acceptEmpty"},children:[
          {type:"desc",attributes:{"text":"<p>Whether empty values are allowed or not.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"acceptEdit"},children:[
          {type:"desc",attributes:{"text":"<p>Whether editing is accepted or not.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Default check value utility method</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#checkValueFunction","name":"_applyCheckValueFunction"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>checkValueFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCheckValueFunction}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#editable","name":"_applyEditable"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyEditable}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#incrementAmount","name":"_applyIncrementAmount"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>incrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyIncrementAmount}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#manager","name":"_applyManager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.range.IRange"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.range.IRange"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyManager}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#numberFormat","name":"_applyNumberFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the property</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.format.NumberFormat"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"old"},children:[
          {type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.util.format.NumberFormat"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>numberFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyNumberFormat}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.form.Spinner#wrap","name":"_applyWrap"},children:[
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
      {type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWrap}.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_computePreferredInnerHeight"},children:[
      {type:"desc",attributes:{"text":"<p>Return the prefered inner height for the spinner widget. Currently this\nmethod returns 14</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>prefered inner height for the spinner widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.core.Parent","name":"_computePreferredInnerWidth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the prefered inner width for the spinner widget. Currently this\nmethod returns 50.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>prefered inner width for the spinner widget</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_increment"},children:[
      {type:"desc",attributes:{"text":"<p>Performs a normal increment</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onblur"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>blur event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.FocusEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;blur&#8221; event.</p>\n\n<p>Calls the method of the &#8220;checkValueFunction&#8221; property</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onchange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>change event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;change&#8221; event.</p>\n\n<p>Sets the value of the text field and enables/disables\nthe up-/down-buttons of the min-/max-value are reached\n(additionally stops the timer of the min-/max-boundaries are reached)\nDispatched the &#8220;change&#8221; event.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninput"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>input event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;input&#8221; event.</p>\n\n<p>Delegates the further processing to the method\nhold by the &#8220;checkValue&#8221; property.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>interval event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.Event"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;interval&#8221; event.</p>\n\n<p>Stops the timer and sets a new interval. Executes the increment\nof the spinner depending on the intervalMode and restarts the timer with\nthe new interval.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeydown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback for &#8220;keyDown&#8221; event.</p>\n\n<p>Controls the interval mode (&#8220;single&#8221; or &#8220;page&#8221;)\nand the interval increase by detecting &#8220;Up&#8221;/&#8220;Down&#8221;\nand &#8220;PageUp&#8221;/&#8220;PageDown&#8221; keys.\nStarting a timer to control the incrementing of the\nspinner value.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyPress event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback for the &#8220;keyPress&#8221; event.</p>\n\n<p>Perform action when &#8220;Enter&#8221; (without &#8220;Alt&#8221;), control keys\nand numeric (0&#8211;9) keys are pressed. Suppress all key events for\nevents without modifiers.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeyup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>keyUp event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback for &#8220;keyUp&#8221; event.</p>\n\n<p>Detecting &#8220;Up&#8221;/&#8220;Down&#8221; and &#8220;PageUp&#8221;/&#8220;PageDown&#8221; keys.\nIf detected the interval mode and interval increase get resetted\nand the timer for the control of the increase of the spinner value\ngets stopped.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousedown"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseDown event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;mouseDown&#8221; event of the spinner buttons.</p>\n\n<p>State handling, registering event listeners at the spinner button and\ninvoking the increment management (resets increments, setup and start timer etc.).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmouseup"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseUp event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;mouseUp&#8221; event of the spinner buttons.</p>\n\n<p>State handling, removing event listeners at the spinner button, focusing\nthe text field and resetting the interval management (stopping timer,\nresetting interval increase).</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onmousewheel"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"},children:[
          {type:"desc",attributes:{"text":"<p>mouseWheel event</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"qx.event.type.MouseEvent"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Callback method for the &#8220;mouseWheel&#8221; event.</p>\n\n<p>Delegates the in-/decrementing to the manager and\nselects the text field.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_ontextchange"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"e"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"709"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_pageIncrement"},children:[
      {type:"desc",attributes:{"text":"<p>Performs a page increment</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_resetIncrements"},children:[
      {type:"desc",attributes:{"text":"<p>Reset the increments</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAmountGrowth","fromProperty":"amountGrowth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>amountGrowth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #amountGrowth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>amountGrowth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getCheckValueFunction","fromProperty":"checkValueFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>checkValueFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checkValueFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>checkValueFunction</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>editable</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getFirstInterval","fromProperty":"firstInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>firstInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>firstInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getIncrementAmount","fromProperty":"incrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>incrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #incrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>incrementAmount</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getInterval","fromProperty":"interval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>interval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #interval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>interval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getManager","fromProperty":"manager"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>manager</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMax"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;getMax&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>current max value of the spinner</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMin"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;getMin&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>current min value of the spinner</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getMinTimer","fromProperty":"minTimer"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>minTimer</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minTimer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>minTimer</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNumberFormat","fromProperty":"numberFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>numberFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>numberFormat</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPageIncrementAmount","fromProperty":"pageIncrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>pageIncrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>pageIncrementAmount</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectTextOnInteract</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectTextOnInteract</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTimerDecrease","fromProperty":"timerDecrease"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>timerDecrease</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #timerDecrease}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>timerDecrease</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;getValue&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Current value of the spinner</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWheelIncrementAmount","fromProperty":"wheelIncrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wheelIncrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wheelIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>wheelIncrementAmount</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAmountGrowth","fromProperty":"amountGrowth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>amountGrowth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>amountGrowth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #amountGrowth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initCheckValueFunction","fromProperty":"checkValueFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>checkValueFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>checkValueFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #checkValueFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initEditable","fromProperty":"editable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>editable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>editable</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initFirstInterval","fromProperty":"firstInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>firstInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>firstInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #firstInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initIncrementAmount","fromProperty":"incrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>incrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>incrementAmount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #incrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initInterval","fromProperty":"interval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>interval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>interval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #interval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initManager","fromProperty":"manager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>manager</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>manager</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initMinTimer","fromProperty":"minTimer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>minTimer</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>minTimer</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #minTimer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNumberFormat","fromProperty":"numberFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>numberFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>numberFormat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPageIncrementAmount","fromProperty":"pageIncrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>pageIncrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>pageIncrementAmount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #pageIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>selectTextOnInteract</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectTextOnInteract</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTimerDecrease","fromProperty":"timerDecrease"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>timerDecrease</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>timerDecrease</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #timerDecrease}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWheelIncrementAmount","fromProperty":"wheelIncrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>wheelIncrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wheelIncrementAmount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wheelIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>editable</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>selectTextOnInteract</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAmountGrowth","fromProperty":"amountGrowth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>amountGrowth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #amountGrowth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetCheckValueFunction","fromProperty":"checkValueFunction"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>checkValueFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #checkValueFunction}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>editable</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetFirstInterval","fromProperty":"firstInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>firstInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #firstInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetIncrementAmount","fromProperty":"incrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>incrementAmount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #incrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetInterval","fromProperty":"interval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>interval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #interval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetManager","fromProperty":"manager"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>manager</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetMinTimer","fromProperty":"minTimer"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>minTimer</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #minTimer}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNumberFormat","fromProperty":"numberFormat"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>numberFormat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPageIncrementAmount","fromProperty":"pageIncrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>pageIncrementAmount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #pageIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectTextOnInteract</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetTimerDecrease","fromProperty":"timerDecrease"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>timerDecrease</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #timerDecrease}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetValue"},children:[
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;resetValue&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWheelIncrementAmount","fromProperty":"wheelIncrementAmount"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wheelIncrementAmount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wheelIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAmountGrowth","fromProperty":"amountGrowth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>amountGrowth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>amountGrowth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #amountGrowth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setCheckValueFunction","fromProperty":"checkValueFunction"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>checkValueFunction</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>checkValueFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checkValueFunction}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setEditable","fromProperty":"editable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>editable</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setFirstInterval","fromProperty":"firstInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>firstInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>firstInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setIncrementAmount","fromProperty":"incrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>incrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>incrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #incrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setInterval","fromProperty":"interval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>interval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>interval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #interval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setManager","fromProperty":"manager"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>manager</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMax"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vMax"},children:[
          {type:"desc",attributes:{"text":"<p>new max value of the spinner</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;setMax&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>new max value of the spinner</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMin"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"vMin"},children:[
          {type:"desc",attributes:{"text":"<p>new min value of the spinner</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;setMin&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>new min value of the spinner</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setMinTimer","fromProperty":"minTimer"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>minTimer</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>minTimer</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #minTimer}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNumberFormat","fromProperty":"numberFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>numberFormat</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>numberFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPageIncrementAmount","fromProperty":"pageIncrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>pageIncrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>pageIncrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>selectTextOnInteract</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectTextOnInteract</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTimerDecrease","fromProperty":"timerDecrease"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>timerDecrease</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>timerDecrease</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #timerDecrease}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"nValue"},children:[
          {type:"desc",attributes:{"text":"<p>new value of the spinner</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Mapping to the &#8220;setValue&#8221; method of the Range manager</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWheelIncrementAmount","fromProperty":"wheelIncrementAmount"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>wheelIncrementAmount</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wheelIncrementAmount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wheelIncrementAmount}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleEditable","fromProperty":"editable"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>editable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #editable}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleSelectTextOnInteract","fromProperty":"selectTextOnInteract"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>selectTextOnInteract</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectTextOnInteract}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"1.01","propertyType":"new","name":"amountGrowth","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>If minTimer was reached, how much the amount of each interval should grow (in relation to the previous interval).</p>"}}
      ]},
    {type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"spinner\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_applyCheckValueFunction","name":"checkValueFunction","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>Holding a reference to the protected {@link _checkValue} method</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyEditable","defaultValue":"true","propertyType":"new","name":"editable","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>Controls whether the textfield of the spinner is editable or not</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"500","propertyType":"new","name":"firstInterval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The first interval on event based shrink/growth of the value.</p>"}}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"22","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_applyIncrementAmount","defaultValue":"1","propertyType":"new","name":"incrementAmount","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The amount to increment on each event (keypress or mousedown).</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"100","propertyType":"new","name":"interval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The current value of the interval (this should be used internally only).</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyManager","propertyType":"new","name":"manager","check":"qx.util.range.IRange"},children:[
      {type:"desc",attributes:{"text":"<p>Range manager</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"20","propertyType":"new","name":"minTimer","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>This configures the minimum value for the timer interval.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyNumberFormat","propertyType":"new","name":"numberFormat","check":"qx.util.format.NumberFormat"}},
    {type:"property",attributes:{"defaultValue":"10","propertyType":"new","name":"pageIncrementAmount","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The amount to increment on each pageup / pagedown keypress</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"selectTextOnInteract","check":"Boolean"}},
    {type:"property",attributes:{"defaultValue":"2","propertyType":"new","name":"timerDecrease","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Decrease of the timer on each interval (for the next interval) until minTimer reached.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"1","propertyType":"new","name":"wheelIncrementAmount","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>The amount to increment on each event (keypress or mousedown).</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"60","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"apply":"_applyWrap","defaultValue":"false","propertyType":"new","name":"wrap","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>whether the value should wrap around</p>"}}
      ]}
    ]}
  ]}