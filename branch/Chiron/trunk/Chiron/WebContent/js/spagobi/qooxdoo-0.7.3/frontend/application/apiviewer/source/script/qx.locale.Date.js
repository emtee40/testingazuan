{type:"class",attributes:{"isStatic":"true","name":"Date","packageName":"qx.locale","fullName":"qx.locale.Date","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Create a new instance of qx.locale.Date</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"protected","isStatic":"true","name":"_getTerritory"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>the locale</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Extract the territory part from a locale</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>territory</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getAmMarker"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get AM marker for time definitions</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>translated AM marker.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDateFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"size"},children:[
          {type:"desc",attributes:{"text":"<p>format of the date format.\n     Possible values: &#8220;short&#8221;, &#8220;medium&#8221;, &#8220;long&#8221;, &#8220;full&#8221;</p>"}},
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
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized date format string to be used with @{link qx.util.format.DateFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>localized date format string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDateTimeFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"canonical"},children:[
          {type:"desc",attributes:{"text":"<p>format string containing only field information, and in a canonical order.\n      Examples are &#8220;yyyyMMMM&#8221; for year + full month, or &#8220;MMMd&#8221; for abbreviated month + day.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"fallback"},children:[
          {type:"desc",attributes:{"text":"<p>fallback format string if no localized version is found</p>"}},
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
        ]},
      {type:"desc",attributes:{"text":"<p>Try to localize a date/time format string.</p>\n\n<p>If now localization is availible take the fallback format string</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>best matching format string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDayName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"length"},children:[
          {type:"desc",attributes:{"text":"<p>format of the day name.\n      Possible values: &#8220;abbreviated&#8221;, &#8220;narrow&#8221;, &#8220;wide&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"day"},children:[
          {type:"desc",attributes:{"text":"<p>day number. 0=sunday, 1=monday, ...</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized name of a week day name</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>localized day name</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDayNames"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"length"},children:[
          {type:"desc",attributes:{"text":"<p>format of the day names.\n      Possible values: &#8220;abbreviated&#8221;, &#8220;narrow&#8221;, &#8220;wide&#8221;</p>"}},
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
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized names of day names</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>array of localized day names starting with sunday.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getMonthName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"length"},children:[
          {type:"desc",attributes:{"text":"<p>format of the month names.\n      Possible values: &#8220;abbreviated&#8221;, &#8220;narrow&#8221;, &#8220;wide&#8221;</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"month"},children:[
          {type:"desc",attributes:{"text":"<p>index of the month. 0=january, 1=februrary, ...</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized name of a month</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>localized month name</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getMonthNames"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"length"},children:[
          {type:"desc",attributes:{"text":"<p>format of the month names.\n      Possible values: &#8220;abbreviated&#8221;, &#8220;narrow&#8221;, &#8220;wide&#8221;</p>"}},
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
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized names of month names</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>array of localized month names starting with january.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getPmMarker"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Get PM marker for time definitions</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>translated PM marker.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getTimeFormat"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"size"},children:[
          {type:"desc",attributes:{"text":"<p>format of the time pattern.\n     Possible values: &#8220;short&#8221;, &#8220;medium&#8221;, &#8220;long&#8221;, &#8220;full&#8221;</p>"}},
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
        ]},
      {type:"desc",attributes:{"text":"<p>Return localized time format string to be used with {@link qx.util.format.DateFormat}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>localized time format string</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"qx.locale.LocalizedString"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWeekendEnd"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return the day the weekend ends with</p>\n\n<p>Reference: Common Locale Data Repository (cldr) supplementalData.xml</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>index of the last day of the weekend. 0=sunday, 1=monday, ...</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWeekendStart"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return the day the weekend starts with</p>\n\n<p>Reference: Common Locale Data Repository (cldr) supplementalData.xml</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>index of the first day of the weekend. 0=sunday, 1=monday, ...</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getWeekStart"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return the day the week starts with</p>\n\n<p>Reference: Common Locale Data Repository (cldr) supplementalData.xml</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>index of the first day of the week. 0=sunday, 1=monday, ...</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isWeekend"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"day"},children:[
          {type:"desc",attributes:{"text":"<p>index of the day. 0=sunday, 1=monday, ...</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"locale"},children:[
          {type:"desc",attributes:{"text":"<p>optional locale to be used</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a certain day of week belongs to the week end.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the given day is a weekend day</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}