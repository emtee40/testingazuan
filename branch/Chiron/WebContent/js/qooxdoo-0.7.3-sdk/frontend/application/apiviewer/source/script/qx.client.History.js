{type:"class",attributes:{"name":"History","packageName":"qx.client","superClass":"qx.core.Target","isSingleton":"true","fullName":"qx.client.History","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A helper for using the browser history in JavaScript Applications without\nreloading the main page.</p>\n\n<p>Adds entries to the browser history and fires a &#8220;request&#8221; event when one of\nthe entries was requested by the user (e.g. by clicking on the back button).</p>\n\n<p>Browser history support is currently available for Internet Explorer 6/7,\nFirefox, Opera 9 and WebKit. Safari 2 and older are not yet supported.</p>\n\n<p>This module is based on the ideas behind the <span class=\"caps\">YUI</span> Browser History Manager\nby Julien Lecomte (Yahoo), which is described at\n<a href=\"http://yuiblog.com/blog/2007/02/21/browser-history-manager/\">http://yuiblog.com/blog/2007/02/21/browser-history-manager/</a>. The Yahoo\nimplementation can be found at <a href=\"http://developer.yahoo.com/yui/history\">http://developer.yahoo.com/yui/history</a>.\nThe original code is licensed under a <span class=\"caps\">BSD</span> license\n(<a href=\"http://developer.yahoo.com/yui/license.txt\">http://developer.yahoo.com/yui/license.txt</a>).</p>"}},
  {type:"events",children:[
    {type:"event",attributes:{"name":"request"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the user moved in the history. The data property of the event\nholds the state, which was passed to {@link #addToHistory}.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__getHash"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the fragment identifier of the top window <span class=\"caps\">URL</span></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the fragment identifier</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__onHistoryLoad"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"state"},children:[
          {type:"desc",attributes:{"text":"<p>new state of the history</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>called on changes to the history using the browser buttons</p>"}}
      ]},
    {type:"method",attributes:{"access":"private","name":"__startTimer"},children:[
      {type:"desc",attributes:{"text":"<p>Starts the timer polling for updates to the history IFrame on IE\nor the fragment identifier on other browsers.</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","apply":"qx.client.History#timeoutInterval","name":"_applyTimeoutInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"desc",attributes:{"text":"<p>Apply the interval of the timer.</p>"}}
      ]},
    {type:"method",attributes:{"name":"addToHistory"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"state"},children:[
          {type:"desc",attributes:{"text":"<p>a string representing the state of the\n         application. This command will be delivered in the data property of\n         the &#8220;request&#8221; event.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"defaultValue":"null","name":"newTitle"},children:[
          {type:"desc",attributes:{"text":"<p>the page title to set after the history entry\n         is done. This title should represent the new state of the application.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Adds an entry to the browser history.</p>"}}
      ]},
    {type:"method",attributes:{"name":"getState"},children:[
      {type:"desc",attributes:{"text":"<p>Get the current state of the browser history.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The current state</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getTimeoutInterval","fromProperty":"timeoutInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>timeoutInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #timeoutInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>timeoutInterval</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"init"},children:[
      {type:"deprecated"},
      {type:"desc",attributes:{"text":"<p>This function is only there to ensure compatibility with older\nqooxdoo versions</p>"}}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initTimeoutInterval","fromProperty":"timeoutInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>timeoutInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>timeoutInterval</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #timeoutInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"navigateBack"},children:[
      {type:"desc",attributes:{"text":"<p>Navigates back in the browser history.\nSimulates a back button click.</p>"}}
      ]},
    {type:"method",attributes:{"name":"navigateForward"},children:[
      {type:"desc",attributes:{"text":"<p>Navigates forward in the browser history.\nSimulates a forward button click.</p>"}}
      ]},
    {type:"method",attributes:{"name":"resetTimeoutInterval","fromProperty":"timeoutInterval"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>timeoutInterval</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #timeoutInterval}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setTimeoutInterval","fromProperty":"timeoutInterval"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>timeoutInterval</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>timeoutInterval</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #timeoutInterval}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"apply":"_applyTimeoutInterval","defaultValue":"100","propertyType":"new","name":"timeoutInterval","check":"Number"},children:[
      {type:"desc",attributes:{"text":"<p>Interval for the timer, which periodically checks the browser history state\nin milliseconds.</p>"}}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.client.History"}}
          ]}
        ]}
      ]}
    ]}
  ]}