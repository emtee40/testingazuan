{type:"class",attributes:{"isStatic":"true","name":"Client","packageName":"qx.core","fullName":"qx.core.Client","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Basic client detection implementation.</p>\n\n<p>Version names follow the wikipedia scheme: major.minor[.revision[.build]] at\n<a href=\"http://en.wikipedia.org/wiki/Software_version\">http://en.wikipedia.org/wiki/Software_version</a></p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"access":"private","isStatic":"true","name":"__init"},children:[
      {type:"desc",attributes:{"text":"<p>Initializer for the static class called by defer</p>"}}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getBrowser"},children:[
      {type:"desc",attributes:{"text":"<p>Browser name (e.g. firefox, explorer, webkit, opera etc.)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the name of the browser</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getBuild"},children:[
      {type:"desc",attributes:{"text":"<p>Build number of engine version</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>build number of engine version</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getDefaultLocale"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the default locale of qooxdoo</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>default locale of qooxdoo</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getEmulation"},children:[
      {type:"desc",attributes:{"text":"<p>Detects Opera&#8217;s engine emulation</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>detects Opera&#8217;s engine emulation</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getEngine"},children:[
      {type:"desc",attributes:{"text":"<p>Engine identifier</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the engine identifier</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getEngineBoxSizingAttributes"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">CSS</span> attribute names for box-sizing if supported.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the attribute names.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String","dimensions":"1"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[
      {type:"deprecated"},
      {type:"desc",attributes:{"text":"<p>Singleton getter for keep compatibility</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>reference to the static class.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Client"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getLocale"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the locale setting</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>locale setting</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getLocaleVariant"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the locale variant setting</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>locale variant setting</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getMajor"},children:[
      {type:"desc",attributes:{"text":"<p>Major engine version</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>major engine version</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getMinor"},children:[
      {type:"desc",attributes:{"text":"<p>Minor engine version</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>minor engine version</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getPlatform"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the client platform (e.g. unix, windows, mac etc.)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>browser platform</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getRevision"},children:[
      {type:"desc",attributes:{"text":"<p>Revision number of engine version</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>revision number of engine version</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Number"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getRunsLocally"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client runs locally (uses the &#8220;file:&#8221; protocol)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if the client runs locally</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getVersion"},children:[
      {type:"desc",attributes:{"text":"<p>Full qualified engine version</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>full qualified engine version</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isFireBugActive"},children:[
      {type:"desc",attributes:{"text":"<p>Retuns whether the Mozilla FireBug extension is installed and active\n<a href=\"http://www.getfirebug.com/\">http://www.getfirebug.com/</a></p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether FireBug is active</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isGecko"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is gecko</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is gecko</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isInQuirksMode"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is in quirksmode</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is in quirksmode</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isKhtml"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is khtml</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is khtml</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isMshtml"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is mshtml</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is mshtml</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isOpera"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is opera</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is opera</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isSafari2"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is a safari version 2</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is safari version 2</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"isWebkit"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the engine is webkit</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if engine is webkit</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"runsOnMacintosh"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client platform is a Macintosh machine.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client platform is a Macintosh.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"runsOnUnix"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client platform is a X11 powered machine.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client platform is a X11 powered machine.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"runsOnWindows"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client platform is a Windows machine.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client platform is a Windows.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"supportsInnerText"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client supports the W3C property innerText of <span class=\"caps\">DOM</span> element nodes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client supports innerText.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"supportsSvg"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client supports <span class=\"caps\">SVG</span> (Scalable Vector Graphics)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client supports <span class=\"caps\">SVG</span></p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"supportsTextContent"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client supports the W3C property textContent of <span class=\"caps\">DOM</span> element nodes.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client supports textContent.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"supportsVml"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client supports <span class=\"caps\">VML</span> (Vector Markup Language)</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the client supports <span class=\"caps\">VML</span></p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"usesDefaultLocale"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client uses the default locale of qooxdoo</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>if browsers use default locale of qooxdoo</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"usesSvgBuiltin"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether <span class=\"caps\">SVG</span> support is builtin</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether <span class=\"caps\">SVG</span> support is builtin</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"usesSvgPlugin"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the client uses a <span class=\"caps\">SVG</span> plugin</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether client uses a <span class=\"caps\">SVG</span> plugin</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]}
    ]}
  ]}