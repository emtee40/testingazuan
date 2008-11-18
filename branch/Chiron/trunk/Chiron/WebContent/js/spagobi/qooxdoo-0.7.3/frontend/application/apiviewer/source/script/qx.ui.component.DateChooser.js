{type:"class",attributes:{"name":"DateChooser","hasWarning":"true","packageName":"qx.ui.component","superClass":"qx.ui.layout.BoxLayout","fullName":"qx.ui.component.DateChooser","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Shows a calendar and allows choosing a date.</p>"}},
  {type:"appearances",children:[
    {type:"appearance",attributes:{"type":"qx.ui.toolbar.Button","name":"datechooser-toolbar-button"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"datechooser-monthyear"}},
    {type:"appearance",attributes:{"type":"qx.ui.layout.GridLayout","name":"datechooser-datepane"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"datechooser-weekday"}},
    {type:"appearance",attributes:{"type":"qx.ui.basic.Label","name":"datechooser-day"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"weekend"}},
        {type:"state",attributes:{"name":"otherMonth"}},
        {type:"state",attributes:{"name":"today"}},
        {type:"state",attributes:{"name":"selected"}}
        ]}
      ]},
    {type:"appearance",attributes:{"type":"qx.ui.layout.GridLayout","name":"datechooser-week"},children:[
      {type:"states",children:[
        {type:"state",attributes:{"name":"header"}}
        ]}
      ]}
    ]},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"null","name":"date"},children:[
          {type:"desc",attributes:{"text":"<p>The initial date to show. If <code>null</code>\n       the current day (today) is shown.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"changeDate"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #date}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeShownMonth"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #shownMonth}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"changeShownYear"},children:[
      {type:"desc",attributes:{"text":"Fired on change of the property {@link #shownYear}."}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"select"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when a date was selected. The event holds the new selected date in its data property.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"name":"MONTH_YEAR_FORMAT"},children:[
      {type:"desc",attributes:{"text":"<p>The format for the date year\nlabel at the top center.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"string"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.ui.component.DateChooser#date","name":"_applyDate"},children:[
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
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_checkDate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Current value</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"349"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onDayClicked"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a day has been clicked.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","hasError":"true","name":"_onDayDblClicked"},children:[
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"469"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a key was pressed.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"boolean"}},
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_onNavButtonClicked"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"evt"},children:[
          {type:"desc",attributes:{"text":"<p>the event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Event handler. Called when a navigation button has been clicked.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_updateDatePane"},children:[
      {type:"desc",attributes:{"text":"<p>Updates the date pane.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getDate","fromProperty":"date"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>date</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>date</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShownMonth","fromProperty":"shownMonth"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>shownMonth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>shownMonth</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getShownYear","fromProperty":"shownYear"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>shownYear</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>shownYear</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initDate","fromProperty":"date"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>date</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>date</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShownMonth","fromProperty":"shownMonth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>shownMonth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>shownMonth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initShownYear","fromProperty":"shownYear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>shownYear</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>shownYear</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetDate","fromProperty":"date"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>date</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShownMonth","fromProperty":"shownMonth"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>shownMonth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetShownYear","fromProperty":"shownYear"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>shownYear</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setDate","fromProperty":"date"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>date</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>date</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShownMonth","fromProperty":"shownMonth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>shownMonth</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>shownMonth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setShownYear","fromProperty":"shownYear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>shownYear</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>shownYear</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"showMonth"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"defaultValue":"null","name":"month"},children:[
          {type:"desc",attributes:{"text":"<p>the month to show (0 = january). If not set the month\n     will remain the same.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"year"},children:[
          {type:"desc",attributes:{"text":"<p>the year to show. If not set the year will remain the\n     same.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Shows a certain month.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"name":"date","defaultValue":"null","check":"Date","allowNull":"true","propertyType":"new","apply":"_applyDate","event":"changeDate"},children:[
      {type:"desc",attributes:{"text":"<p>The currently selected date.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Date"}}
        ]}
      ]},
    {type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},
    {type:"property",attributes:{"name":"shownMonth","defaultValue":"null","event":"changeShownMonth","allowNull":"true","propertyType":"new","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The currently shown month. 0 = january, 1 = february, and so on.</p>"}}
      ]},
    {type:"property",attributes:{"name":"shownYear","defaultValue":"null","event":"changeShownYear","allowNull":"true","propertyType":"new","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>The currently shown year.</p>"}}
      ]},
    {type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}
    ]}
  ]}