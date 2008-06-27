{type:"class",attributes:{"name":"DateFormat","packageName":"qx.util.format","superClass":"qx.util.format.Format","fullName":"qx.util.format.DateFormat","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>A formatter and parser for dates</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"format"},children:[
          {type:"desc",attributes:{"text":"<p>The format to use. If null, the\n   {@link #DEFAULT_DATE_TIME_FORMAT} is used.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"getDateInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a <code>DateFomat</code> instance that uses the\n{@link #DEFAULT_DATE_FORMAT}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the date instance.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDateTimeInstance"},children:[
      {type:"desc",attributes:{"text":"<p>Returns a <code>DateFomat</code> instance that uses the\n{@link #DEFAULT_DATE_TIME_FORMAT}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the date/time instance.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"PM_MARKER","value":"pm"},children:[
      {type:"desc",attributes:{"text":"<p>The pm marker.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"String"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"Number","name":"ASSUME_YEAR_2000_THRESHOLD","value":"30"},children:[
      {type:"desc",attributes:{"text":"<p>The threshold until when a year should be assumed to belong to the\n21st century (e.g. 12 -> 2012). Years over this threshold but below 100 will be\nassumed to belong to the 20th century (e.g. 88 -> 1988). Years over 100 will be\nused unchanged (e.g. 1792 -> 1792).</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"Integer"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"String","name":"AM_MARKER","value":"am"},children:[
      {type:"desc",attributes:{"text":"<p>The am marker.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"String"}}
        ]}
      ]},
    {type:"constant",attributes:{"name":"MEDIUM_TIMEZONE_NAMES"},children:[
      {type:"desc",attributes:{"text":"<p>The medium (three letter) timezone names.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"String","dimensions":"1"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"String","name":"LOGGING_DATE_TIME_FORMAT","value":"yyyy-MM-dd HH:mm:ss"},children:[
      {type:"desc",attributes:{"text":"<p>The date format used for logging.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"String"}}
        ]}
      ]},
    {type:"constant",attributes:{"name":"FULL_TIMEZONE_NAMES"},children:[
      {type:"desc",attributes:{"text":"<p>The full timezone names.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"String","dimensions":"1"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","name":"__fillNumber"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"number"},children:[
          {type:"desc",attributes:{"text":"<p>the number to fill.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"minSize"},children:[
          {type:"desc",attributes:{"text":"<p>the minimum size the returned string should have.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Fills a number with leading zeros (&#8220;25&#8221; -> &#8220;0025&#8221;).</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the filled number as string.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__getDayInYear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"date"},children:[
          {type:"desc",attributes:{"text":"<p>the date.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the day in year of a date.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the day in year.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__getWeekInYear"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"date"},children:[
          {type:"desc",attributes:{"text":"<p>the date to get the week in year of.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the week in year of a date.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the week in year.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__initFormatTree"},children:[
      {type:"desc",attributes:{"text":"<p>Helper method for {@link #format()} and {@link #parse()}.\nParses the date format.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__initParseFeed"},children:[
      {type:"desc",attributes:{"text":"<p>Initializes the parse feed.</p>\n\n<p>The parse contains everything needed for parsing: The regular expression\n(in compiled and uncompiled form) and the used rules.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the parse feed.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Map"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__initParseRules"},children:[
      {type:"desc",attributes:{"text":"<p>Initializes the static parse rules.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","name":"__thursdayOfSameWeek"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"date"},children:[
          {type:"desc",attributes:{"text":"<p>the date to get the thursday of.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the thursday in the same week as the date.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the thursday in the same week as the date.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Date"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.format.Format","name":"format"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"date"},children:[
          {type:"desc",attributes:{"text":"<p>The date to format.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Date"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Formats a date.</p>\n\n<p>Uses the same syntax as\n<a href=\"http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html\" target=\"_blank\">\nthe SimpleDateFormat class in Java</a>.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the formatted date.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"overriddenFrom":"qx.util.format.Format","name":"parse"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"dateStr"},children:[
          {type:"desc",attributes:{"text":"<p>the date to parse.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Parses a date.</p>\n\n<p>Uses the same syntax as\n<a href=\"http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html\" target=\"_blank\">\nthe SimpleDateFormat class in Java</a>.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the parsed date.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Date"}}
          ]}
        ]}
      ]}
    ]}
  ]}