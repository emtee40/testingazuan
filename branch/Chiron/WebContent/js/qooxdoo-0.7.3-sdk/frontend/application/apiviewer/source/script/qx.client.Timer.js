{type:"class",attributes:{"name":"Timer","packageName":"qx.client","superClass":"qx.core.Target","fullName":"qx.client.Timer","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Global timer support.</p>\n\n<p>This class can be used to periodically fire an event. This event can be\nused to simulate e.g. a background task. The static method\n{@link #once} is a special case. It will call a function deferred after a\ngiven timeout.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"interval"},children:[
          {type:"desc",attributes:{"text":"<p>initial interval in milliseconds of the timer.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"events",children:[
    {type:"event",attributes:{"name":"interval"},children:[
      {type:"desc",attributes:{"text":"<p>This event if fired each time the interval time has elapsed</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.Event"}}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"once"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"func"},children:[
          {type:"desc",attributes:{"text":"<p>Function to call</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Function"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>context (this), the function is called with</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"timeout"},children:[
          {type:"desc",attributes:{"text":"<p>Number of milliseconds to wait before the function is called.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Number"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Start a function after a given timeout.</p>"}}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"protected","apply":"qx.client.Timer#enabled","name":"_applyEnabled"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the enabled state of the timer.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.client.Timer#interval","name":"_applyInterval"},children:[
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
      {type:"desc",attributes:{"text":"<p>Apply the interval of the timer.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"_oninterval"},children:[
      {type:"desc",attributes:{"text":"<p>timer callback</p>"}}
      ]},
    {type:"method",attributes:{"name":"getEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>enabled</code>.</p>"}},
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
    {type:"method",attributes:{"access":"protected","name":"initEnabled","fromProperty":"enabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>enabled</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enabled</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
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
    {type:"method",attributes:{"name":"isEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enabled</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enabled</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
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
    {type:"method",attributes:{"name":"restart"},children:[
      {type:"desc",attributes:{"text":"<p>Restart the timer.\nThis makes it possible to change the interval of a running timer.</p>"}}
      ]},
    {type:"method",attributes:{"name":"restartWith"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"interval"},children:[
          {type:"desc",attributes:{"text":"<p>Time in milliseconds between two callback calls.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Restart the timer. with a given interval.</p>"}}
      ]},
    {type:"method",attributes:{"name":"setEnabled","fromProperty":"enabled"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>enabled</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
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
    {type:"method",attributes:{"name":"start"},children:[
      {type:"desc",attributes:{"text":"<p>Start the timer</p>"}}
      ]},
    {type:"method",attributes:{"name":"startWith"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"interval"},children:[
          {type:"desc",attributes:{"text":"<p>Time in milliseconds between two callback calls.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Start the timer with a given interval</p>"}}
      ]},
    {type:"method",attributes:{"name":"stop"},children:[
      {type:"desc",attributes:{"text":"<p>Stop the timer.</p>"}}
      ]},
    {type:"method",attributes:{"name":"toggleEnabled","fromProperty":"enabled"},children:[
      {type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the new value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"apply":"_applyEnabled","defaultValue":"true","propertyType":"new","name":"enabled","check":"Boolean"},children:[
      {type:"desc",attributes:{"text":"<p>With the enabled property the Timer can be started and suspended.\nSetting it to &#8220;true&#8221; is equivalent to {@link #start}, setting it\nto &#8220;false&#8221; is equivalent to {@link #stop}.</p>"}}
      ]},
    {type:"property",attributes:{"apply":"_applyInterval","defaultValue":"1000","propertyType":"new","name":"interval","check":"Integer"},children:[
      {type:"desc",attributes:{"text":"<p>Time in milliseconds between two callback calls.\nThis property can be set to modify the interval of\na running timer.</p>"}}
      ]}
    ]}
  ]}